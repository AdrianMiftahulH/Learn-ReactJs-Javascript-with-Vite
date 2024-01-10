import { createBrowserRouter } from "react-router-dom";
import { DetailProductPage, ErrorPage, LandingPage, LoginPage, RegisterPage } from "../page";
import ProfilePage from "../page/profile";

const router = createBrowserRouter([
    {
        path: "/",
        element: <LandingPage />,
        errorElement: <ErrorPage />
    },
    {
        path: "/product/:id",
        element: <DetailProductPage />,
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
    {
        path: "/profile",
        element: <ProfilePage />,
        errorElement: <ErrorPage />
    },

]);

export default router;