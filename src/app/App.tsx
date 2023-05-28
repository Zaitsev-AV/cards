import React, { useEffect } from 'react';
import 'app/App.css';
import { useAppDispatch, useAppSelector } from "app/hooks";
import { appActions } from "app/app.slice";
import { authThunks } from "features/auth/auth.slice";

function App() {
  const isLoading = useAppSelector((state) => state.app.isLoading)
  
  const dispatch = useAppDispatch()
  
  useEffect(()=> {
    dispatch(authThunks.me())
    setTimeout(()=> {
      dispatch(appActions.setIsLoading({isLoading: false}))
    }, 3000)
  },[])
  return (
      <div className="App">
        {isLoading && <h1>Loading...</h1>}
      </div>
  );
}

export default App;
