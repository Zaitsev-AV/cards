import React, { useEffect } from 'react';
import 'app/App.css';
import { useAppDispatch, useAppSelector } from "app/hooks";
import { appActions } from "app/app.slice";
import { authThunks } from "features/auth/auth.slice";
import { Layout } from "common/components/layout/Layout";

function App() {
  const isLoading = useAppSelector<boolean>( ( state ) => state.app.isLoading )
  const isLoggedIn = useAppSelector<boolean>( ( state ) => state.app.isLoggedIn )
  
  const dispatch = useAppDispatch()
  
  useEffect( () => {
    dispatch( authThunks.me() )
    setTimeout( () => {
      dispatch(appActions.setIsLoading({isLoading: false}))
    }, 3000)
  },[])
  
  return (
      <div className="App">
        { !isLoading && isLoggedIn !== null ? <Layout/> : <h1>Preloader</h1>}
      </div>
  );
}

export default App;
