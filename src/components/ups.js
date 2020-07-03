import React, { Component } from "react";
import '../styles/header.css';
import { } from "@material-ui/core";
import UPSView from '../view/Ups';
import Header from './header';

import Footer from './footer';



class ups extends Component{


    state = {  }

    render() { 
        return(
    <div>
        <Header name="UPS" />
        <UPSView />
        <Footer />
    </div>
        );
    }
}
export default ups;