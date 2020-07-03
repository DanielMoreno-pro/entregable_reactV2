import React, { Component } from "react";
import '../styles/header.css';
import AreasView from '../view/Areas';
import Header from './header';

import Footer from './footer';



class Areas extends Component{


    state = {  }

    render() { 
        return(
    <div>
        <Header name="AREAS" />
        <AreasView />
        <Footer />
    </div>
        );
    }
}
export default Areas;