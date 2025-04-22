import { types } from "../types/types";

// The reducer is a function that receives the current state and an action, and returns a new state.
 
 export const authReducer = (state = {}, action) => {  
    switch (action.type) {
      case types.login:
            return {
                ...state,
                logged: true,
                name: action.payload,  
            } ;
        
        case types.logout:  
            return {
                logged: false,

            };

        default:
            return state;

    }
 }