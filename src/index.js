//引入react核心库
import {React,StrictMode } from 'react'

//引入ReactDOM
// import ReactDOM from 'react-dom'
import { createRoot } from "react-dom/client";

// 引入app
import App from './App'

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

// ReactDOM.render(<StrictMode><App/></StrictMode>, document.getElementById('root'))