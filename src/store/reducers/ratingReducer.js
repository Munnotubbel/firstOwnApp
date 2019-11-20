const initState = {};

const ratingReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_RATING":
      console.log("created rating", action.rating);
      return { ...state };
    case "CREATE_RATING_ERROR":
      console.log("create rating error", action.err);
      return { ...state };

    default:
      return { ...state };
  }
};

export default ratingReducer;
