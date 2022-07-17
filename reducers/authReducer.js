const authReducer = (state, action) => {
  switch (action.type) {
    case "GET_CURRENT_USER": {
      const newState = { ...state };
      const { id, email, firstName, lastName, username, userId, role } =
        action.payload;

      newState.profileId = id;
      newState.profileEmail = email;
      newState.profileFirstName = firstName;
      newState.profileLastName = lastName;
      newState.profileUsername = username;
      newState.profileInitials =
        newState.profileFirstName.match(/(\b\S)?/g).join("") +
        newState.profileLastName.match(/(\b\S)?/g).join("");
      newState.profileId = userId;
      newState.profileAdmin = role === 'admin' ? true : false;
      console.log(newState);
      return newState;
    }

    case "UPDATE_USER": {
      const newState = { ...state };
      newState.isAuthLoading = false;
      newState.user = action.payload;
      console.log(newState);
      return newState;
    }

    case "UPDATE_USER_SETTING": {
        const newState = {...state};
        const {firstName, lastName, username} = action.payload;
        newState.profileFirstName = firstName;
        newState.profileLastName = lastName;
        newState.profileUsername = username;
        console.log(newState);
        return newState;
    }
  }
};

export default authReducer;
