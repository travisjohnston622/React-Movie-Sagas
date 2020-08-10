//Reducer delivers payload of movies.id from the details to the edit page
const putDetailsReducer = (state = [], action) => {
    switch (action.type) {
        case 'PUT_DETAILS':
            return action.payload;
        default:
            return state;
    }
};

export default putDetailsReducer;