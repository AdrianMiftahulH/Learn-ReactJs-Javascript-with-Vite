import { createBrowserRouter } from "react-router-dom";
import { ErrorPage, LandingPage, LoginPage, RegisterPage } from "../page";

const router = createBrowserRouter([
    {
        path: "/",
        element: <LandingPage />,
        errorElement: <ErrorPage />
    },
    {
        path: "/login",
        element: <LoginPage />,
        errorElement: <ErrorPage />
    },
    {
        path: "/register",
        element: <RegisterPage />,
        errorElement: <ErrorPage />
    },
    {
        path: "/register/:id",
        element: <RegisterPage />,
        errorElement: <ErrorPage />
    },

]);

export default router;