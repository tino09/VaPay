import React from "react";
import ReactDOM from "react-dom";
import { toast } from "react-toastify";
import App from './App'


import "react-toastify/dist/ReactToastify.css";
import "./styles.css";

toast.configure()

ReactDOM.render(<App />, document.getElementById("root"));
