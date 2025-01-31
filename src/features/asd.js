import { createSlice } from '@reduxjs/toolkit'
import { call, put, takeLatest } from 'redux-saga/effects'

export type ReducerState<T> = {
    data: T
    loading: boolean
    error: boolean
    errorMsg: string
}

export const reducerUtils = {
    init: <T,>(defaultType: T): ReducerState<T> => ({
    data: defaultType,
    loading: false,
    error: false,
    errorMsg: '',
}),

    loading: <T,>(prevData: T): ReducerState<T> => ({
    data: prevData,
    loading: true,
    error: false,
    errorMsg: '',
}),

    success: <T,>(data: T): ReducerState<T> => ({
    data: data,
    loading: false,
    error: false,
    errorMsg: '',
}),

    error: <T,>(prevData: T, errorMsg = ''): ReducerState<T> => ({
    data: prevData,
    loading: false,
    error: true,
    errorMsg: errorMsg,
}),
}


export const reduxMaker = (
    prefix = 'aaa',
    initialState = {},
    asyncReducers = [],
    localReducers = {},
) => {



    return {
        [`${prefix}Slice`]: 111,
        [`${prefix}Saga`]: 222,
        [`${prefix}Action`]: 333,
    }



    // type FinalStructure ={
    //     [`${prefix}Slice`]: Slice<StateType>;
    //     [`${prefix}Saga`]: Generator;
    //     [`${prefix}Action`]: any; // Define more precise action types
    // };
    //
    // // 최종 결과물
    // const final: FinalStructure = {}
    //
    // final[`${prefix}Slice`] = createSlice({
    //     name: prefix,
    //     initialState: initialState,
    //     reducers: {
    //         initializeAll: () => {
    //             return initialState
    //         },
    //         initialize: (state, action) => {
    //             const itemName = action.payload
    //             if (
    //                 state[itemName] !== undefined &&
    //                 allInitialState[itemName] !== undefined
    //             ) {
    //                 state[itemName] = allInitialState[itemName]
    //             }
    //         },
    //
    //     // 로컬 추가
    //     // 비동기 추가
    //     },
    //     // extraReducers: extraReducers(prefix, asyncRequest),
    // })

    // final[`${prefix}Saga`] = function* () {
    //     for (const reducerName in asyncRequest) {
    //         yield takeLatest(
    //             `${prefix}/${reducerName}`,
    //             createRequestSaga(
    //                 prefix,
    //                 reducerName,
    //                 asyncRequest[reducerName][1],
    //             ),
    //         )
    //     }
    // }

    // final[`${prefix}Action`] = final[`${prefix}Slice`].actions
    // return final

}






// //비동기 state 만들기
// const initialStateMaker = (apiAction) => {
//     const initialState = {}
//     for (const key in apiAction) {
//         const value = apiAction[key][0]
//         for (const innerKey in value) {
//             initialState[innerKey] = value[innerKey]
//         }
//     }
//     return initialState
// }
//
// //비동기 리듀서 만들기
// const apiReducers = (prefix: string, asyncRequest) => {
//     const reducers = {}
//     for (const type in asyncRequest) {
//         reducers[type] = (state, action) => {
//             const key = action.type.replace(new RegExp(`^${prefix}/`), '')
//             const requestInfo = asyncRequest[key][0]
//
//             state[Object.keys(requestInfo)[0]] = reducerUtils.loading(
//                 state[Object.keys(requestInfo)[0]].data,
//             )
//         }
//     }
//     return reducers
// }
//
// const createRequestSaga = (prefix: string, reducerName: string, apiRequest) => {
//     return function* fetchApiData(action) {
//         try {
//             const response = yield call(() => apiRequest(action.payload)) // 여기서 apiCall은 실제 API 호출 함수입니다.
//
//             const result = response.data
//             // 통신은 정상이나 오류가 있는경우 (데이터 예외처리)
//             if (result['error']) {
//                 yield put({
//                     type: `${prefix}/${reducerName}Fail`,
//                     payload: result['data'],
//                 })
//             } else {
//                 //정상 작동
//                 yield put({
//                     type: `${prefix}/${reducerName}Success`,
//                     payload: result['data'],
//                 })
//             }
//         } catch (error) {
//             //서버 자체의 오류인경우 (서버가 죽음)
//             yield put({
//                 type: `${prefix}/${reducerName}Fail`,
//                 payload: error.message,
//             })
//         }
//     }
// }
//
// //비동기 처리 성공 실패 처리해주는 추가적인 리듀서
// export const extraReducers = (prefix: string, asyncRequest) => {
//     return (builder) => {
//         builder.addMatcher(
//             (action) => {
//                 return action.type.includes(prefix)
//             },
//             (state, action) => {
//                 if (action.type.endsWith('Success')) {
//                     const key = action.type
//                         .replace(new RegExp(`^${prefix}/`), '')
//                         .replace(/Success$/, '')
//                     const requestInfo = asyncRequest[key][0]
//
//                     state[Object.keys(requestInfo)[0]] = reducerUtils.success(
//                         action.payload,
//                     )
//                 }
//                 if (action.type.endsWith('Fail')) {
//                     const key = action.type
//                         .replace(new RegExp(`^${prefix}/`), '')
//                         .replace(/Fail$/, '')
//                     const requestInfo = asyncRequest[key][0]
//                     state[Object.keys(requestInfo)[0]] = reducerUtils.error(
//                         state[Object.keys(requestInfo)[0]].data,
//                         action.payload,
//                     )
//                 }
//             },
//         )
//     }
// }
//
// 최종 리더스
export const reduxMaker = (
    prefix = '',
    asyncRequest = {},
    localState = {},
    localReducers = {},
) => {
    const asyncInitialState = initialStateMaker(asyncRequest)
    const final = {}
    const allInitialState = {
        ...localState,
        ...asyncInitialState,
    }

    final[`${prefix}Slice`] = createSlice({
        name: prefix,
        initialState: allInitialState,
        reducers: {
            initializeAll: () => {
                return allInitialState
            },
            initialize: (state, action) => {
                const itemName = action.payload
                if (
                    state[itemName] !== undefined &&
                    allInitialState[itemName] !== undefined
                ) {
                    state[itemName] = allInitialState[itemName]
                }
            },

            ...apiReducers(prefix, asyncRequest),
            ...localReducers,
        },
        extraReducers: extraReducers(prefix, asyncRequest),
    })

    //사가 만들기
    final[`${prefix}Saga`] = function* () {
        for (const reducerName in asyncRequest) {
            yield takeLatest(
                `${prefix}/${reducerName}`,
                createRequestSaga(
                    prefix,
                    reducerName,
                    asyncRequest[reducerName][1],
                ),
            )
        }
    }

    //액션 만들기
    final[`${prefix}Action`] = final[`${prefix}Slice`].actions
    return final
}
