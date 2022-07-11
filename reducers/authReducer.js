const authReducer = (state, action) => {
    let newState;
    switch(action.type) {
        case 'GET_CURRENT_USER':
            newState = {...state};
            const {id, email, firstName, lastName, username} = action.payload;

            newState.profileId = id;
            newState.profileEmail = email;
            newState.profileFirstName = firstName;
            newState.profileLastName = lastName;
            newState.profileUsername = username;
            newState.profileInitials = newState.profileFirstName.match(/(\b\S)?/g).join("") + newState.profileLastName.match(/(\b\S)?/g).join("");
            console.log(newState);
            return newState;
        
        case 'UPDATE_USER':
            newState = {...state};
            newState.user = action.payload;
            console.log(newState);
            return newState;
    }
}

export default authReducer;