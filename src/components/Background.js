import React, {Component} from 'react';

import elvideo  from './principal/imagen/video.mp4';
/*import Ejemplo from './Ejemplo';*/
import  '../App.css' ;
import Java from  './Java';


class Background extends Component{

          render() {
            return (
                  <div>
                  <div  className = "video">

                <video autoPlay loop muted  style={{ width: "100%", height: "100%" }}>
                  <source src={elvideo} type="video/mp4"/>
                </video>

                <div className= "vi">
                
                <img src={require ('../components/principal/imagen/uni.png')} className="logodos" />
                  <h1> Bienvenidos </h1>



              </div>


                  </div>
                  </div>

        );
    }
}

export default Background;
