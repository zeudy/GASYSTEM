import React, {Component} from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import {Link, NavLink} from 'react-router-dom';
import './Login.css';



class LoginForm extends Component{
    state = {
        usuario:{
            email: '',
            password: ''
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const {usuario} = this.state;
        const {userPassLogin} = this.props;
        userPassLogin(usuario.email, usuario.password);
      }

    handleChange = (e) => {
        const nombre = e.target.name;
        const valor = e.target.value;
        let usuario = this.state.usuario;
        usuario[nombre] = valor;
        this.setState({usuario});
    }
      render() {
        const center = {
          display:"flex",
          justifyContent:"center",
            alignItems:"center",
               widht:"150%",
                height:"100vh",

            };


          const {usuario} = this.state;
          const {socialLogin, googleLogin, twitterLogin} = this.props;

            return (
              <div style={center}>
                  <form onSubmit={this.handleSubmit} className="login-form" >
                      <div style={{textAlign:"center"}}>
                          <h3>Inicia con : </h3>
                          
                          <h3>o</h3>
                      </div>



                      <label htmlFor="email">Correo</label>
                      <input value={usuario.correo} type="text" id="email" name="email" placeholder="email" onChange={this.handleChange}/>

                      <label htmlFor="pass">Contraseña</label>
                      <input value={usuario.password} type="password" id="pass " name="password" placeholder="Contraseña" onChange={this.handleChange}/>


                      <input type="submit" value="Iniciar sesión"/>
                      <p>
                        <NavLink to="/signup">
                        <p>
                         Registrarse
                        </p>
                        </NavLink>
                        </p>


                  </form>

          </div>

    );
  }
}


export default LoginForm;


