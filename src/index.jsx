import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import AppKorail from "./AppKorail";
import AppBaeman from "./AppBaeman";
import AppInsta from "./AppInsta";
import AppKikio from "./Appkikio";
import AppCoupong from "./AppCoupong";
import AppNever from "./AppNever";
import AppGov from "./AppGov";
import Appkiosc from "./Appkiosc";
import AppChrome from "./AppChrome";
import Appwatch from "./Appwatch"
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import "./global.css";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <App />
    <AppKorail />
    <AppBaeman />
    <AppInsta />
    <AppKikio />
    <AppCoupong />
    <AppNever />
    <AppGov />
    <Appkiosc />
    <AppChrome />
    <Appwatch />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
