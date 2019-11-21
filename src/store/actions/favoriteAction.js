export const addFavorite = answer => {
  return (dispatch, getState, { getFirestore, getFirebase }) => {
    const profile = getState().firebase.profile;
    const authorID = getState().firebase.auth.uid;
    const slug = answer.slug;
    const gamename = answer.gamename;
    const gameid = answer.gameid;
    // make async call to database
    const firebase = getFirebase();
    const firestore = getFirestore();

    firestore
      .collection("users")
      .doc(authorID)
      .set(
        {
          favorites: {
            [slug]: {
              slug: slug,
              gameid: gameid,
              gamename: gamename,
              isFavorite: answer.isFavorite,
              pic: answer.pic
            }
          }
        },
        { merge: true }
      )

      .then(() => {
        dispatch({ type: "CREATE_FAVORITE", answer });
      })
      .catch(err => {
        dispatch({ type: "CREATE_FAVORITE_ERROR", err });
      });
  };
};
