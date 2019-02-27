const setCurrentUser = configureStore => {
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: {currentUserId: window.currentUser.id}
    };
    delete window.currentUser;
    return configureStore(preloadedState);
  } else {
    return configureStore();
  }
};

export default setCurrentUser;