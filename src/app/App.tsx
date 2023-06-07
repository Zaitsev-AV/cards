import React, { useEffect } from "react";
import "app/App.css";
import { authThunks } from "features/auth/auth.slice";
import { Layout } from "common/components/layout/Layout";
import { CustomLoader } from "common/components/customLoader/CustomLoader";
import { useAppDispatch, useAppSelector } from "common/hooks";
import { toast } from "react-toastify";

function App() {
    const isAppInitialized = useAppSelector<boolean>( ( state ) => state.app.isAppInitialized );
    const isLoggedIn = useAppSelector<boolean>( ( state ) => state.auth.isLoggedIn );
    
    const dispatch = useAppDispatch();
    
    useEffect( () => {
        dispatch( authThunks.authMe() )
        setTimeout( () => {
        }, 3000)
    },[])
    
    return (
        <div className="App">
            { isAppInitialized && isLoggedIn !== null ? <Layout/> : <CustomLoader/>}
        </div>
    );
}

export default App;
