export const createProject = project => {
  return (dispatch, getState, { getFirestore, getFirebase }) => {
    console.log(project);
    const newData = {
      username: project.username,
      title: project.title,
      content: project.content,
      createdAt: new Date()
    };
    console.log(newData);
    // make async call to database
    const firestore = getFirestore();
    const gamename = project.slug;
    const purpose = project.purpose;
    firestore
      .collection("projects")
      .doc(gamename)
      .set(newData)

      .then(() => {
        dispatch({ type: "CREATE_PROJECT", project });
      })
      .catch(err => {
        dispatch({ type: "CREATE_PROJECT_ERROR", err });
      });
  };
};
