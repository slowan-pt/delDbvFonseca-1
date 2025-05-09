import { createBrowserRouter } from 'react-router-dom'
import { Dashboard } from './pages/app/dashboard'
import { SignIn } from './pages/auth/sign-in'
import { AppLayoutApp } from './pages/_layouts/app'
import { AppLayoutAuth } from './pages/_layouts/auth'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <AppLayoutApp />,
        children: [{path: '/', element: <Dashboard />}],
    },
    {
        path: '/',
        element: < AppLayoutAuth />,
        children: [{path: '/sign', element: <SignIn />}],
    },
])