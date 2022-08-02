import React from "react";
import { Navigate } from "react-router-dom";
function useAuth() {
    return localStorage.getItem("stickyGram") ? true :false;
}
export default function AuthorizeRoute({ children }) {
    const auth = useAuth();
    return auth ? <Navigate to="/" replace /> : children ;
}