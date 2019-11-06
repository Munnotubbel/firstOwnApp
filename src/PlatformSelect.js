
import React, { Component } from "react";
import Platform from "./Platform"
import {NavLink} from "react-router-dom";
import Box from '@material-ui/core/Box';
import { createStyles, withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import Grid from '@material-ui/core/Grid';




const styles = createStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 'auto',
    height: 'auto'  ,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

 class PlatformSelect extends Component {
  
  state ={
    loading:false,
    platforms:[
      {id:1,
      name:"PC",
      url:  "https://res.cloudinary.com/munnotubbel/image/upload/v1573056924/gamerspilot/windows_l1jv86.png"   
    },
    {id:2,
      name:"Playstation",
      url: "https://res.cloudinary.com/munnotubbel/image/upload/v1573056924/gamerspilot/playstation_gha6db.png"     
    },
    {id:3,
      name:"Xbox", 
      url: "https://res.cloudinary.com/munnotubbel/image/upload/v1573056925/gamerspilot/xbox_lczfio.png"    
    },
  
    {id:4,
      name:"iOS",    
      url: "https://res.cloudinary.com/munnotubbel/image/upload/v1573056924/gamerspilot/iOS_eswdbt.png"  
    },
  
    {id:5,
      name:"Apple Macintosh",
      url: "https://res.cloudinary.com/munnotubbel/image/upload/v1573056923/gamerspilot/apple_qdo0bs.png"      
    },
  
    {id:6,
      name:"Linux",  
      url: "https://res.cloudinary.com/munnotubbel/image/upload/v1573056924/gamerspilot/linux_hmel9y.png"   
    },
  
    {id:7,
      name:"Nintendo", 
      url: "https://res.cloudinary.com/munnotubbel/image/upload/v1573056924/gamerspilot/nintendo_jttzpt.png"     
    },
  
    {id:8,
      name:"Android",   
      url: "https://res.cloudinary.com/munnotubbel/image/upload/v1573056923/gamerspilot/android_xsbckp.png"   
    },
  
    {id:9,
      name:"Atari", 
      url: "https://res.cloudinary.com/munnotubbel/image/upload/v1573056923/gamerspilot/atari_wz0btg.png"     
    },
  
    {id:10,
      name:"Commodore",
      url: "https://res.cloudinary.com/munnotubbel/image/upload/v1573056923/gamerspilot/commodore_o10jkq.png"      
    },
  
    {id:11,
      name:"Sega", 
      url: "https://res.cloudinary.com/munnotubbel/image/upload/v1573056924/gamerspilot/playstation_gha6db.png"     
    },
  
    {id:13,
      name:"3DO",  
      url: "https://res.cloudinary.com/munnotubbel/image/upload/v1573056923/gamerspilot/3do_tgt0vr.png"    
    },
  
    {id:14,
      name:"Web", 
      url: "https://res.cloudinary.com/munnotubbel/image/upload/v1573056923/gamerspilot/browser_p8z5rw.png"     
    },  
  ],
  };




   render() {
    
const {classes} = this.props

  return (
    <div style={{ width: '95%' }}>>

    <Box display="flex" flexDirection="row" p={1} m={1}>{this.state.platforms.map(platform => (<NavLink to={{pathname:'/genres', platform:{id: `${platform.id}`}}}>
            <Platform platform={platform}></Platform></NavLink>))} </Box>
    
{/*     <div className={classes.root}>    
      <GridList container
        cellHeight={200} className={classes.gridList}>      
        {this.state.platforms.map(platform => (    
          <GridListTile key={platform.id}>      
            <NavLink to={{pathname:'/genres', platform:{id: `${platform.id}`}}}>
            <Platform platform={platform}></Platform>
          </NavLink>
      </GridListTile>))}
    </GridList>    
  </div> */}
  
{/* <GridListTileBar align="center"
            title={platform.name}                
          /> */}


  </div>
  )
}}

export default withStyles(styles)(PlatformSelect)
