export const createProject = project => {
  return (dispatch, getState, { getFirestore, getFirebase }) => {
    console.log(project);
    // make async call to database
    const firestore = getFirestore();
    const gamename = project.slug;
    const purpose = project.purpose;
    firestore
      .collection("projects")
      .add({
        [gamename]: {
          [purpose]: {
            ...project,
            createdAt: new Date()
          }
        }

        //same as project.title + project.content + project.username
        // authorFirstName: "Walter",
        // authorLastName: "Mutter",
        // authorId: "1337",
      })
      .then(() => {
        dispatch({ type: "CREATE_PROJECT", project });
      })
      .catch(err => {
        dispatch({ type: "CREATE_PROJECT_ERROR", err });
      });
  };
};
