import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "app/store";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "common/routes/Routes";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const container = document.getElementById('root')!;
const root = createRoot(container);


root.render(
    <Provider store={store}>
      <RouterProvider router={router}/>
        <ToastContainer
            position="top-center"
            autoClose={ 5000 }
            closeOnClick
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
        />
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
