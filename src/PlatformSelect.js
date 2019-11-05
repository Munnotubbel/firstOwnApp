
import React, { Component } from "react";
import Platform from "./Platform"
import {
  
  NavLink,
  
} from "react-router-dom";

export class PlatformSelect extends Component {
  state ={
    loading:false,
    platforms:[
      {id:1,
      name:"PC",      
    },
    {id:2,
      name:"Playstation",      
    },
    {id:3,
      name:"Xbox",      
    },
  
    {id:4,
      name:"iOS",      
    },
  
    {id:5,
      name:"Apple Macintosh",      
    },
  
    {id:6,
      name:"Linux",      
    },
  
    {id:7,
      name:"Nintendo",      
    },
  
    {id:8,
      name:"Android",      
    },
  
    {id:9,
      name:"Atari",      
    },
  
    {id:10,
      name:"Commodore",      
    },
  
    {id:11,
      name:"Sega",      
    },
  
    {id:13,
      name:"3DO",      
    },
  
    {id:14,
      name:"Web",      
    },  
  ],
      };
   render() {
/*     if (this.state.platforms) console.log(this.state.platforms[0].name) */
  return (
    
    <div>
    <h1>pick platform dude</h1>
     
    <div>{this.state.platforms.map((platform)=>{
      return (
        <NavLink to={{pathname:'/genres', platform:{id: `${platform.id}`}}}>
        <Platform platform={platform}></Platform>
        </NavLink>)
      })}</div>
    </div>
  )
}}

export default PlatformSelect;
