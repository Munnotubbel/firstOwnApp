export const createProject = project => {
  return (dispatch, getState, { getFirestore, getFirebase }) => {
    console.log(project);
    const profile = getState().firebase.profile;
    const authorID = getState().firebase.auth.uid;

    // make async call to database
    const firestore = getFirestore();
    const gamename = project.slug;
    const purpose = project.purpose;
    firestore
      .collection("projects")
      // .doc(gamename)
      .add({
        ...project,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        authorID: authorID,
        username: profile.displayName,
        createdAt: new Date()
      })

      .then(() => {
        dispatch({ type: "CREATE_PROJECT", project });
      })
      .catch(err => {
        dispatch({ type: "CREATE_PROJECT_ERROR", err });
      });
  };
};
