const initState = {};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("created project", action.project);
      return state;
    case "CREATE_PROJECT_ERROR":
      console.log("create project error", action.err);
      return state;

    case "GET_PROJECT":
      console.log("get project", action.project);
      return state;

    case "GET_PROJECT_ERROR":
      console.log("get project error", action.err);
      return state;

    default:
      return state;
  }
};

export default projectReducer;
