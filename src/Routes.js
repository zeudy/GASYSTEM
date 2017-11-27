import React from 'react';
import {Route, Switch} from 'react-router-dom';

import HomePage from './components/HomePage';
import HomeMeta from './components/Results/HomeMeta';

import GlosarioHome from './components/Glosario/GlosarioHome';
import Carru from './components/principal/Carru';
import LoginForm from './components/login/LoginForm';
import DepositPro from './components/ingresos/DepositPro';





const Routes = () => (
    <Switch>
     
      <Route exact path="/" component={HomePage}/>
        <Route path="/HomeMeta" component={HomeMeta}/>
          <Route path="/Quienes" component={GlosarioHome}/>
          <Route path="/Carru" component={Carru}/>
          <Route path="/LoginForm" component={LoginForm}/>
           <Route path="/Deposituno" component={DepositPro} />

        


    </Switch>

);

export default Routes;