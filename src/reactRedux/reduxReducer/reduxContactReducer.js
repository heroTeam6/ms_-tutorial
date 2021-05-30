const initialState = [
    {
        id:0,
        name: "Raman Sharma",
        phone: 1234567890,
        email: "rs@g.com"
    },
    {
        id:1,
        name: "test Name",
        phone: 1234563333,
        email: "test@test.com"
    },
    {
        id:2,
        name: "tt me",
        phone: 1234563336,
        email: "tt@test.com"
    }
];

const reduxContactReducer = (state = initialState, action) => {
    switch(action.type){
        case "ADD_CONTACT":
            state = [...state, action.payload];
            return state
        case "UPDATE_CONTACT":
            const updateState = state.map(contact => contact.id === action.payload.id? action.payload : contact)   
            state = updateState
            return state 
        case "DELETE_CONTACT":
            const filterContacts = state.filter(contact => contact.id !== action.payload && contact)
            state = filterContacts
            return state
        default:
            return state;
    }
};

export default reduxContactReducer;