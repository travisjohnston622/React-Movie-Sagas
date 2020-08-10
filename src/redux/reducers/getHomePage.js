//Stores list of movies returned from the database 
const getHomePageReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_HOMEPAGE':
            return action.payload
        default:
            return state;
    }
};

export default getHomePageReducer;