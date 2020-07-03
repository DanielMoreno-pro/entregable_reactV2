import React, { Component } from "react";
import '../styles/header.css';
import { } from "@material-ui/core";
import TecnicoView from '../view/tecnico';
import Header from './header';

import Footer from './footer';



class tecnico extends Component{


    state = {  }

    render() { 
        return(
    <div>
        <Header name="UPS" />
        <TecnicoView />
        <Footer />
    </div>
        );
    }
}
export default tecnico;