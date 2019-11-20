export const createProject = project => {
  return (dispatch, getState, { getFirestore, getFirebase }) => {
    console.log(project);
    const profile = getState().firebase.profile;
    const authorID = getState().firebase.auth.uid;

    // make async call to database
    const firebase = getFirebase();
    const firestore = getFirestore();
    const gamename = project.slug;
    const purpose = project.purpose;
    const commentPost = {
      ...project,
      authorFirstName: profile.firstName,
      authorLastName: profile.lastName,
      authorID: authorID,
      username: profile.displayName,
      createdAt: new Date()
    };
    console.log(gamename);
    firestore
      .collection("projects")
      .doc(gamename)
      .set(
        {
          comments: firebase.firestore.FieldValue.arrayUnion(commentPost)
        },
        { merge: true }
      )

      .then(() => {
        dispatch({ type: "CREATE_PROJECT", project });
      })
      .catch(err => {
        dispatch({ type: "CREATE_PROJECT_ERROR", err });
      });
  };
};
