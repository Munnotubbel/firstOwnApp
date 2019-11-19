const initState = {};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("created project", action.project);
      return state;
    case "CREATE_PROJECT_ERROR":
      console.log("create project error", action.err);
      return state;
    /*  case "GET_COMMENTS":
      console.log("get comments - done", action.payload);
      return state;
    case "GET_ERROR":
      console.log("get comments error accured", action.payload);
      return state; */
    default:
      return state;
  }
};

export default projectReducer;
