TODO LIST

- 스토리북 설정 디테일 하게 보기 > 현재 있는 스토리 폴더 삭제후 컴포넌트 쪽으로 옴겨서 확인
- 스토리북 탬플릿 자동화 (plop 을통해 파일 생성
  가능) https://velog.io/@jh5717/.stories-%ED%8C%8C%EC%9D%BC-%EC%9E%90%EB%8F%99%EC%9C%BC%EB%A1%9C-%EC%83%9D%EC%84%B1%ED%95%98%EA%B8%B0-plop
- 예시 컴포넌트 제작
- 모바일, pc , 테블릿 관련 설정 추가
- css 예외 처리 (몇몇 페이지만 새로 시작할 경우)
- 배포 처리 만들기 (도커를 통한 배포 자동화 스토리북으로도 하는 부분이 있으니 확인 필요)
- 쿠버내티스 배포까지? 는 백앤드 하고 디비 기본적인 설정 마치면 차후에
- readme 파일 스토리북 첫 페이지에 랜더링 하는 기능

------

# 라우팅

### 간단한 동적 라우팅 기능 
- 별도의 추가없이 src/pages/url/ 안에 경로에 맞게 파일 작성시 동적으로 url이 생성이 된다. 
- [  ] 안에 임의의 명칭을 넣어서 동적 url 형성 가능 
- feature랑 파일명 구분을 위해 Page를 뒤에 붙이는걸 권장 (Page 는 자동 제거됨)

### 졀도의 정적 라우팅 기능 (가장 메인은 여기에 해당[/]
- url 이외에 별도의 라우팅 처리는 src/app/router/router.tsx 안에 router 안에 추가하면 됩니다

### 예시 
``` 
├── pages
│     ├── HomePage.jsx            ------>[/]                     
│     └── url                   
│         ├── [name]               
│         │     └── TestPage.jsx  ------>[/harry/Test]              
│         └── sample                   
│             ├── SamplePage.jsx  ------>[/sample/sample]                
│             └── [Id].jsx        ------>[/sample/123]          

```

## 일반 라우팅
HomePage 를 포함한 



----

# 상태 관리

ㅋㅌㅊㅋㅌㅊㅁㄴㅇㅁㅇㄴ
------

# 스타일
- tailwind 사용
- 

----

| Script          | 설명                                                       | Description                                                     |
|-----------------|----------------------------------------------------------|-----------------------------------------------------------------|
| `yarn dev`      | 개발 서버를 시작합니다.                                            | Starts the development server.                                  |
| `yarn build`    | TypeScript 프로젝트를 빌드하고, 프로덕션 빌드를 생성합니다.                   | Builds the TypeScript project and generates a production build. |
| `yarn lint`     | ESLint를 사용하여 코드 린트 작업을 수행합니다.                            | Runs linting on the codebase using ESLint.                      |
| `yarn preview`  | 빌드된 프로젝트를 미리 보기 위해 로컬 서버를 실행합니다. (lighthouse 와 같은 성능 측정) | Runs a local server to preview the built project.               |
| `yarn test`     | 모든 테스트 파일을 대화식으로 실행합니다.                                  | Runs tests interactively for all test files.                    |
| `yarn test:run` | 터미널에서 모든 테스트를 자동으로 실행합니다.                                | Executes all tests automatically in the terminal.               |

# 추천 크롬 익스텐션

0. Reduc DevTools: state, action 관리해준다. DevTools 에서 확인 가능
    - [설치하기](https://chromewebstore.google.com/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=ko)
    - https://github.com/reduxjs/redux-devtools

1. LocatorJS: 크롬에서 컴포넌트 alt + 마우스 좌클릭시 바로 에디터에서 해당 파일이 열림
    - [설치하기](https://chromewebstore.google.com/detail/locatorjs/npbfdllefekhdplbkdigpncggmojpefi)
    - https://www.locatorjs.com/
    - https://github.com/infi-pc/locatorjs

2. colorZilla: 크롬에서 스포이드로 색상 확인 및 복사
    - [설치하기](https://chromewebstore.google.com/detail/colorzilla/bhlhnicpbhignbdhedgjhgdocnmhomnp?hl=ko)
    - https://www.colorzilla.com/

3. Page Ruler: 크롬 화면에서 영역 지정하여 길이 px 확인 가능
    - [설치하기](https://chromewebstore.google.com/detail/page-ruler/jcbmcnpepaddcedmjdcmhbekjhbfnlff?hl=ko)


