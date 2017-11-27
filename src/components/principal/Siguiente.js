import React from 'react';
import { Menu, Icon } from 'antd';
import {Link, NavLink} from 'react-router-dom';
const { SubMenu } = Menu;


class Siguiente extends React.Component {
    render (){
        return (


        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0, float: 'left' }}
        >
          <SubMenu key="sub1" title={<span><Icon type="user" />TANQUES DE GAS</span>}>
              <Menu.Item key="1" ><NavLink to="/Deposit"> Empleados </NavLink></Menu.Item>
          <Menu.Item key="2"><NavLink to="/Deposituno"> Productos </NavLink></Menu.Item>

          </SubMenu>
          <SubMenu key="sub2" title={<span><Icon type="calculator" />Flujo</span>}>
            <Menu.Item key="5">Almacen</Menu.Item>
            <Menu.Item key="6">Pasivos</Menu.Item>

          </SubMenu>
          <SubMenu key="sub3" title={<span><Icon type="notification" />Resultados</span>}>
            <Menu.Item key="9">Progreso</Menu.Item>
            <Menu.Item key="10">Meta</Menu.Item>

          </SubMenu>
        </Menu>



);
}
}

export default Siguiente;
