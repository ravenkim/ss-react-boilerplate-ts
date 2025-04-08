import { RouterProvider } from 'react-router'
import router from 'src/app/router/router.tsx'
import useRouteListener from 'src/app/router/useRouteListener.tsx'
import { Bounce, ToastContainer } from 'react-toastify'
import { ThemeProvider } from 'src/shared/components/lib/shadcn/components/ThemeProvider.tsx'

function App() {

    useRouteListener()

    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <RouterProvider router={router} />
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}
            />
        </ThemeProvider>
    )
}

export default App
