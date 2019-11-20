export const createRating = rating => {
  return (dispatch, getState, { getFirestore, getFirebase }) => {
    console.log(rating);
    const profile = getState().firebase.profile;
    const authorID = getState().firebase.auth.uid;
    const gamename = rating.slug;
    // make async call to database
    const firebase = getFirebase();
    const firestore = getFirestore();
    const value = rating.value;
    const incrementOne = firebase.firestore.FieldValue.increment(1);
    const incrementVal = firebase.firestore.FieldValue.increment(value);
    const userVoted = firebase.firestore.FieldValue.arrayUnion([rating.id]);
    firestore
      .collection("projects")
      .doc(gamename)
      .set(
        {
          ratings: {
            counter: incrementOne,
            rate: incrementVal,
            usersVoted: firebase.firestore.FieldValue.arrayUnion(rating.uid)
          }
        },
        { merge: true }
      )

      .then(() => {
        dispatch({ type: "CREATE_RATING", rating });
      })
      .catch(err => {
        dispatch({ type: "CREATE_RATING_ERROR", err });
      });
  };
};

export const createRatingEntry = rating => {
  return (dispatch, getState, { getFirestore, getFirebase }) => {
    console.log(rating);

    const gamename = rating.slug;
    // make async call to database
    const firebase = getFirebase();
    const firestore = getFirestore();

    firestore
      .collection("projects")
      .doc(gamename)
      .set({
        comments: [
          {
            authorID: null,
            createdAt: null,
            title: null,
            username: null,
            content: null
          }
        ],

        ratings: {
          counter: null,
          rate: null,
          usersVoted: [null]
        }
      })

      .then(() => {
        dispatch({ type: "CREATE_RATING_ENTRY", rating });
      })
      .catch(err => {
        dispatch({ type: "CREATE_RATING__ENTRY_ERROR", err });
      });
  };
};
