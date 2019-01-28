import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import {Home} from "./components/Home.jsx";


import React from 'react';
import ReactDom from 'react-dom';
import App from './components/app.jsx';

import './style/normalize.css';
import './style/main.scss';

let root = document.createElement('div');
document.body.appendChild(root);

ReactDom.render(<App />, root);