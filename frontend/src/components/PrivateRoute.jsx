import React, { useContext } from 'react'
import { mycontext } from '../AuthContext/AuthContext'
import { Navigate } from 'react-router-dom';

function PrivateRoute({ children }) {
    let { context } = useContext(mycontext);

    let { isAuth } = context;


    return isAuth ? children : <Navigate to={"/account"} />;
}
export default PrivateRoute