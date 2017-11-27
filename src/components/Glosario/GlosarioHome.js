import React, {Component} from 'react';
import { Card } from 'antd';
import Imagen from './Imagen';
import './Glosario.css';
import {Link, NavLink} from 'react-router-dom';

import { Icon, Button, Input, AutoComplete } from 'antd';
import { Collapse } from 'antd';
const Panel = Collapse.Panel;


const Option = AutoComplete.Option;



class GlosarioHome extends Component{  


    

   
    changeRoute = () => {
        this.props.history.push("/");  
    }

    
    render(){
        

         
        
         return(
        
            
          <div className="titulo"> 
            
              
               <div className="Imagen"> 
                 <Imagen/> <h1>QUIENES SOMOS</h1>
                
                  
    
                 </div>

<div>
  <Card>
    
    
<div style={{ background: '#BF9BBD', padding: '4px', width:'100%'}}>
   <Collapse accordion  >
   
    <Panel header={'Quienes'} key="1" >
      <p>Todos los que trabajamos!</p>
    </Panel>
  
  </Collapse> </div>   </Card>
            
             
                    



  

  
</div> 
</div> 
        
        );
    }
}

export default GlosarioHome;