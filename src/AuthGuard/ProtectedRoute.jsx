import React from "react";
import { Navigate, Outlet } from 'react-router-dom'

function ProtectedRoute(props) {
    // false = not login, true = login
    let loginStatus = localStorage.getItem('loginStatus') || false
    return (
        <React.Fragment>
            {
                loginStatus ? <Outlet/> : <Navigate to={`/login`}/>
            }
        </React.Fragment>
    )
}
export default ProtectedRoute