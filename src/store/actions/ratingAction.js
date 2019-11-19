export const createRating = rating => {
  return (dispatch, getState, { getFirestore, getFirebase }) => {
    console.log(project);
    const profile = getState().firebase.profile;
    const authorID = getState().firebase.auth.uid;

    // make async call to database
    const firestore = getFirestore();

    firestore
      .collection("ratings")
      // .doc(gamename)
      .add({
        ...rating,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        authorID: authorID,
        username: profile.displayName,
        createdAt: new Date()
      })

      .then(() => {
        dispatch({ type: "CREATE_RATING", project });
      })
      .catch(err => {
        dispatch({ type: "CREATE_RATING_ERROR", err });
      });
  };
};
