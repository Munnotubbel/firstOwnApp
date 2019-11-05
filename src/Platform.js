import React from 'react'


const Platform = ({platform}) =>{
/* const  backgroundSrc={platform}; */
return(
    <div style={{color:'white',width:'200px',height:'200px', backgroundColor:'#8800ff', margin:'10px'}}><p>{platform.name}</p></div>
)

}

export default Platform