import React from "react";
import { Navigate } from "react-router-dom";
function useAuth() {
    return localStorage.getItem("stickyGram") ? true :false;
}
export default function PrivateRoute({ children }) {
    const auth = useAuth();
    return auth ? children : <Navigate to="/login" />;
}