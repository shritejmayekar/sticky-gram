import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthorizeRoute from "../components/routes/authorizesRoute";
import PrivateRoute from "../components/routes/protectedRoute";
import Home from "../pages/home/home";
import Login from "../pages/login/login";
import Register from "../pages/register/register";


const AppRouter = () => {
   
    return (
<>
        {/* <BrowserRouter> */}
            <Routes>
                <Route
                    path="/"
                    element={
                        <PrivateRoute>
                            <Home />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/login"
                    element={
                        <AuthorizeRoute >
                            <Login />
                        </AuthorizeRoute>

                    }
                />
                 <Route
                    path="/register"
                    element={
                        <AuthorizeRoute >
                            <Register />
                        </AuthorizeRoute>

                    }
                />
            </Routes>

        {/* </BrowserRouter> */}

</>
    )
}

export default AppRouter;