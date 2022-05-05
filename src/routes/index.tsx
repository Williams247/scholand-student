import React from "react";
import {
  BrowserRouter as Router,
  useRoutes,
} from "react-router-dom";
// import { useSelector } from "react-redux";
// @ts-ignore
import Home from "../pages/home/index.tsx";
// @ts-ignore
import SignUp from "../pages/signup/index.tsx";
// @ts-ignore
import Login from "../pages/login/index.tsx";


const ReactRouter = (): React.ReactElement<any, string | React.JSXElementConstructor<any>> => {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "signup", element: <SignUp /> },
    { path: "login", element: <Login /> }
  ]);
  return routes;
};

const AppRouter = (): JSX.Element => {
  // const state = useSelector(state => state.isModalOpen.value);
  return (
    <>
      <Router>
        <ReactRouter />
      </Router>
    </>
  )
}

export default AppRouter;
