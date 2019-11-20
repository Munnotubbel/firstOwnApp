import React from "react";
let ratingUrl = "";
const AgeRating = ratingID => {
  const rating = ratingID.ratingID;

  switch (rating) {
    case 0:
      ratingUrl =
        "https://res.cloudinary.com/munnotubbel/image/upload/v1573406759/gamerspilot/earlyChild_far9pa.png";
      break;
    case 1:
      ratingUrl =
        "https://res.cloudinary.com/munnotubbel/image/upload/v1573406759/gamerspilot/everyone_fguptx.png";
      break;
    case 2:
      ratingUrl =
        "https://res.cloudinary.com/munnotubbel/image/upload/v1573406759/gamerspilot/everyoneTenPlus_idl5jh.png";
      break;
    case 3:
      ratingUrl =
        "https://res.cloudinary.com/munnotubbel/image/upload/v1573406759/gamerspilot/teenPlus_k8kb8e.png";
      break;
    case 4:
      ratingUrl =
        "https://res.cloudinary.com/munnotubbel/image/upload/v1573406759/gamerspilot/mature_vo4sm1.png";
      break;
    case 5:
      ratingUrl =
        "https://res.cloudinary.com/munnotubbel/image/upload/v1573406759/gamerspilot/adultsOnly_kpoahs.png";
      break;
    case 6:
      ratingUrl =
        "https://res.cloudinary.com/munnotubbel/image/upload/v1573406759/gamerspilot/ratingPending_krafuu.png";
      break;
  }

  return (
    <img width="82px" height="124" src={`${ratingUrl}`} alt="age rating" />
  );
};

export default AgeRating;
