import React from "react";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
    const [auth] = React.useState(localStorage.getItem("stickyGram")? true: false);
    return auth ? children : <Navigate to="/login" />;
}