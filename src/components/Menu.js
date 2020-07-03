import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../styles/App.css';

// Importar Componentes
import Header from './header';
//import Areas from '../view/Areas';
import Footer from './footer';
import Inicio from '../view/Inicio';




class Menu extends Component {
        

    render() { 
        return ( 
            <div>
                <Header />
                <Inicio />
                <Footer />
            </div>
         );
    }
}

 
export default Menu;