
import React, { Component } from "react";
import Platform from "./Platform"
import {NavLink} from "react-router-dom";
import Box from '@material-ui/core/Box';
import { createStyles, withStyles } from '@material-ui/core/styles';





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
      name:"Apple Mac",
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



  _handleClick() {
    var num = Math.floor((Math.random() * 10) + 1);
    this.setState({
      active: num
    });
  }

  _handleWheel(e) {
    const delta = Math.abs(e.deltaY) === 125 ? e.deltaY * -120 : e.deltaY < 0 ? -600000 : 600000;
    const count = Math.ceil(Math.abs(delta) / 120);

    if (count > 0) {
      const sign = Math.abs(delta) / delta;
      let func = null;

      if (sign > 0 && this._hasPrevFigure()) {
        e.preventDefault();
        func = this._handlePrevFigure();
      } else if (sign < 0 && this._hasNextFigure()) {
        e.preventDefault();
        func = this._handleNextFigure();
      }

      if (typeof func === 'function') {
        for (let i = 0; i < count; i++) func();
      }
    }
  }


   render() {
document.body.style.backgroundColor = "lightblue";
  return (
    <div>

    <Box display="flex"  flexDirection="row" flexWrap="wrap" alignContent="flex-end" justifyContent="center">{this.state.platforms.map((platform,index) => (<NavLink key={index} style={{textDecoration:"none"}} to={{pathname:'/genres', platform:{id: `${platform.id}`}}}>
            <Platform start={index}  platform={platform}></Platform></NavLink>))} </Box>
    
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

      {/*     <div>
          <StyleRoot>
        <Coverflow
          width={960}
          height={480}
          displayQuantityOfSide={2}
          navigation={true}
          infiniteScroll={true}
          enableHeading={false}
          active={this.state.active}
          media={{
        '@media (max-width: 900px)': {
          width: '600px',
          height: '300px'
        },
        '@media (min-width: 900px)': {
          width: '960px',
          height: '600px'
        }
      }}
        >
          <div
            onClick={() => fn()}
            onKeyDown={() => fn()}
            onWheel={()=> this._handleWheel()}
            role="menuitem"
            tabIndex="0"
          >
         
          </div>
         {this.state.platforms.map(platform => (<NavLink to={{pathname:'/genres', platform:{id: `${platform.id}`}}}>
            <Platform platform={platform}></Platform></NavLink>))}
        </Coverflow>
        </StyleRoot>
      </div>
    );
  }

};
 */}




  </div>
  )
}}

export default withStyles(styles)(PlatformSelect)
