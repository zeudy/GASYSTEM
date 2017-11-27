import React from 'react';
import '../../App.css' ;
import './princi.css';
import Routes from '../../Routes';
import {Link, NavLink} from 'react-router-dom';


import {  Menu} from 'antd';

class NavP extends React.Component {
    render (){
        return (
<div>
<div>
  <NavLink to="/"> <img src={require ('./imagen/tanque.png')}
      className="logo" />   </NavLink>


        </div>
      <Menu


        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['3']}
        style={{ lineHeight: '70px' }}
      >

    <Menu.Item key="1"> <NavLink to="/loginForm">   Ingresar  </NavLink> </Menu.Item>
          <Menu.Item key="2"> <NavLink to="/Quienes"> ¿Quiénes somos? </NavLink> </Menu.Item>
          <Menu.Item key="3"> <NavLink to="/HomeMeta">  Contactanos   </NavLink> </Menu.Item>






      </Menu>

</div>

        );
    }
}
export default NavP;