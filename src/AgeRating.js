import React from 'react'
const ratingUrl = ""
const AgeRating = ratingID => {
    
    console.log(ratingID.ratingID);
        if (ratingID.ratingID === 0) {
            ratingUrl+= "https://res.cloudinary.com/munnotubbel/image/upload/v1573406759/gamerspilot/earlyChild_far9pa.png";
            console.log("ist in 1")} else if (ratingID === 1) {
            ratingUrl+= "https://res.cloudinary.com/munnotubbel/image/upload/v1573406759/gamerspilot/everyone_fguptx.png";
            console.log("ist in 2")} else if (ratingID === 2) {
            ratingUrl+= "https://res.cloudinary.com/munnotubbel/image/upload/v1573406759/gamerspilot/everyoneTenPlus_idl5jh.png";
            console.log("ist in 3")} else if (ratingID === 3) {
            ratingUrl+= "https://res.cloudinary.com/munnotubbel/image/upload/v1573406759/gamerspilot/teenPlus_k8kb8e.png";
            console.log("ist in 4")} else if (ratingID === 4) {
            ratingUrl+= "https://res.cloudinary.com/munnotubbel/image/upload/v1573406759/gamerspilot/mature_vo4sm1.png";
            console.log("ist in 5")} else if (ratingID === 5) {
            ratingUrl+= "https://res.cloudinary.com/munnotubbel/image/upload/v1573406759/gamerspilot/adultsOnly_kpoahs.png";
            console.log("ist in 6")} else if (ratingID === 6) {
            ratingUrl+= "https://res.cloudinary.com/munnotubbel/image/upload/v1573406759/gamerspilot/ratingPending_krafuu.png";
        }
        console.log("ende der fahnenstange")
        console.log(ratingUrl)
return (<img width="82px" height="124" src={ratingUrl}/>)

      };

      export default AgeRating