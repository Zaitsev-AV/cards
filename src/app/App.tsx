import React, { useEffect } from "react";
import "app/App.css";
import { authThunks } from "features/auth/auth.slice";
import { Layout } from "common/components/layout/Layout";
import { CustomLoader } from "common/components/customLoader/CustomLoader";
import { useAppDispatch, useAppSelector } from "common/hooks";
import { selectorIsAppInitialized } from "app/app.selectors";

function App() {
    const isAppInitialized = useAppSelector( selectorIsAppInitialized );
    const isLoggedIn = useAppSelector( ( state ) => state.auth.isLoggedIn );
    
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
