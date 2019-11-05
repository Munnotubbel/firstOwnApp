import React from 'react'


const Genre = ({genre}) =>{
    
/* const backgroundSrc={genre.image_background}; */
return(
    <div style={{color:'white',width:'200px',height:'200px',backgroundImage: `url(${genre.image_background})`, backgroundSize: '200px 200px', margin:'10px'}}><p>{genre.name}</p></div>
)

}

export default Genre