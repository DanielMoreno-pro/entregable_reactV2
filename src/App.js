import React from 'react';
import Areas from "./components/areas"
import Ups from "./components/ups"
import Menu from './components/Menu';
import tecnico from './components/tecnico';
import './styles/App.css';

import { BrowserRouter, Switch, Route } from "react-router-dom";



function App() {
  return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Menu} />
          <Route path="/areas" exact component={Areas} />
          <Route path="/ups" exact component={Ups} />
          <Route path="/tecnico" exact component={tecnico} />
          
    
        </Switch>
      </BrowserRouter>
  );
}



    /*
    <div className="App">
      <Header />
      <Areas />
      <Footer />
    </div>
  );
  
}
*/

export default App;
