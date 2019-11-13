import React from "react";

const MediaSlider = props => {
  function getPrice() {
    if (props.storeID === 1) {
      var partSteam = props.url.split("/");
      var steamId = partSteam.pop() || partSteam.pop();
      if (isNaN(steamId) === true) {
        steamId = partSteam.pop() || partSteam.pop();
      }

      fetch(
        `https://ubiqum-cors-anywhere.herokuapp.com/http://store.steampowered.com/api/appdetails?appids=${steamId}&cc=de&filters=price_overview`
      )
        .then(response => response.json())
        .then(response => {
          if (
            response[steamId].data.price_overview != null &&
            response[steamId].data.price_overview.final_formatted != null
          ) {
            document.getElementById(`${"store" + props.storeID}`).innerHTML =
              response[steamId].data.price_overview.final_formatted;
          }
        });
    } else if (props.storeID === 8) {
      var parts = props.url.split("=");
      var gogId = parts[1];
      var laenge = gogId.length;
      var inge = gogId.slice(0, laenge - 3);

      fetch(
        `https://api.appmonsta.com/v1/stores/android/details/${inge}.json?country=US`,

        {
          method: "GET",
          headers: {
            Host: "api.appmonsta.com",

            "Accept-Encoding": "gzip, deflate",
            Accept: "*/*",
            "Content-Type": "application/json",
            Authorization:
              "Basic YjNlMmQ2ODdkMDk4MTk3ZGIwMTg2Y2YwNDg1Njc5OGUzNzYyZjBkNjpY"
          }
        }
      )
        .then(response => response.json())
        .then(response => {
          document.getElementById(`${"store" + props.storeID}`).innerHTML =
            response.price;
        });
    }

    //    else if (props.storeID===3){
    //     console.log("look for googlePlay Price")
    //     var parts= props.url.split('=')
    //     console.log(parts)
    //    var gogId=parts[1]
    //    var laenge = gogId.length
    //    var inge = gogId.slice(0,laenge-3)

    //  console.log(steamId)

    //  fetch(
    //   `https://api.appmonsta.com/v1/stores/android/details/${inge}.json?country=US`,

    //   {
    //     method: "GET",
    //     headers: {
    //         "Host": "api.appmonsta.com",

    //         "Accept-Encoding": "gzip, deflate",
    //         "Accept": "*/*",
    //       "Content-Type": "application/json",
    //       "Authorization": "Basic YjNlMmQ2ODdkMDk4MTk3ZGIwMTg2Y2YwNDg1Njc5OGUzNzYyZjBkNjpY"
    //   }})
    //   .then(response => response.json())
    //   .then(response => {document.getElementById(`${"store"+props.storeID}`).innerHTML=(response.price)});
    //        }
  }

  return <span id={"store" + props.storeID}>{getPrice()}</span>;
};

export default MediaSlider;
