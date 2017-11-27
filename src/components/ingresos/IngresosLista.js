import React, {Component} from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import firebase from '../../firebase';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

class IngresosLista extends Component {
    
    state = {
        lista:[]
    }
    
    componentWillMount(){
//        firebase.database().ref('ingresos')
//        .once('value')
//        .then(response=>{
//            console.log(response.val());
//        });
        
//        firebase.database().ref('ingresos')
//        .on('value', (response)=>{
//            console.log(response.val());
//        });
        
        firebase.database().ref('ingresos')
        .once('value')
        .then(r=>{
            console.log(r.val())
            for (let key in r.val()){
                this.state.lista.push(r.val()[key]);
            }
            this.setState({lista:this.state.lista})
        });
        const lista = this.state.lista;
        
        this.setState({lista});
        
    }
    
    render(){
        const {lista} = this.state;
        return (
           <ul>
               {lista.map(
                    i=>{
                        return(
                        <li >
                        Saldo mensual neto: {i.smneto}
                        <br/>
                        Dividendo: {i.dividendo}
                        <br/>
                        Bliss: {i.bliss}
                        </li>
                            );
                        
                    }
                )}
           </ul>
        );
    }

}

export default IngresosLista;
