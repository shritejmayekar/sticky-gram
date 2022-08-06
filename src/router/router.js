import React from "react";
import { BrowserRouter,useLocation, Route, Router, Routes, Switch } from "react-router-dom";
import AuthorizeRoute from "../components/routes/authorizesRoute";
import PrivateRoute from "../components/routes/protectedRoute";
import Home from "../pages/home/home";
import Login from "../pages/login/login";
import Register from "../pages/register/register";
import ReactGA from 'react-ga';


const AppRouter = () => {
    // let navigate = useNavigate();
    // let location = useLocation();

    // const pageview = () => {
    //     console.log(window.location.pathname)
    // }
    function logPageView() { // add this function to your component
        console.log(window.location.pathname)
        ReactGA.set({ page: window.location.pathname + window.location.search });
        ReactGA.pageview(window.location.pathname + window.location.search);
      }
      
    // React.useEffect(() => {
    //     console.log(window.location.pathname)
    //     console.log({ location });
    //     ReactGA.pageview(window.location.pathname + window.location.search);
    //   },[location]);
    return (

        <BrowserRouter >
            <Routes >
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

        </BrowserRouter>


    )
}

export default AppRouter;