const savedDog = JSON.parse(localStorage.getItem("selectedDog"));

const initialState = {
    id_dog: savedDog ? savedDog.id_dog : 0,
    age: savedDog ? savedDog.age : 0,
    birthday_date: savedDog ? savedDog.birthday_date : "",
    first_name: savedDog ? savedDog.first_name : "",
    height: savedDog ? savedDog.height : 0,
    id_user: savedDog ? savedDog.id_user : 0,
    preferences: savedDog ? savedDog.preferences : "",
    profile_img: savedDog ? savedDog.profile_img : "",
    selected: Boolean(savedDog),
};

function dogReducer(state = initialState, action) {
    switch (action.type){
        case "SELECT_DOG": 
            return {...action.payload, selected: true};
        case "DELETE_DOG": 
            return {...initialState, selected: false};    
        default: 
            return state;
    };
};

export default dogReducer;