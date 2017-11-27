import '../../App.css' ;
import './princi.css';
import Carru from './Carru';

import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout;

class Lay extends React.Component {
    render (){
        return (
<div>
<div> <img src={require ('./imagen/tanque.png')}
       className="logo" /></div>
      <Menu


        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '80px' }}
      >
        <Menu.Item key="1">Login</Menu.Item>
        <Menu.Item key="2">Glosario</Menu.Item>
      </Menu>

</div>

        );
    }
}
export default Lay;