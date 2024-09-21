import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
reportWebVitals();



// import React from "react"
// import { createRoot } from "react-dom/client"
// import { Provider } from "react-redux"
// import App from "./App"
// import { store } from "./app/store"
// import "./index.css"
// import reportWebVitals from "./reportWebVitals"

// const container = document.getElementById("root")

// if (container) {
//   const root = createRoot(container)

//   root.render(
//     <React.StrictMode>
//       <Provider store={store}>
//         <App />
//       </Provider>
//     </React.StrictMode>,
//   )
// } else {
//   throw new Error(
//     "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file.",
//   )
// }