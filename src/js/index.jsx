import React, { Component } from "react";
import ReactDOM from "react-dom";
import App from './components/App/App.jsx';
import { ThemeProvider } from './components/Theme/Theme_Context.js';
  
ReactDOM.render(
    <ThemeProvider>
        <App />
    </ThemeProvider>, document.getElementById('root'));