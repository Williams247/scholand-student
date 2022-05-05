import React from 'react';
import ReactDOM from 'react-dom/client';
// import { Provider } from 'react-redux';
// @ts-ignore
// import { store } from "./redux/store.ts";
// @ts-ignore
import Project from "./routes/index.tsx";
import './styles/index.scss';
import './index.css';

const root: ReactDOM.Root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Project />
  </React.StrictMode>
);

// const root: ReactDOM.Root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <Project />
//     </Provider>
//   </React.StrictMode>
// );
