import {CHANGE_BUSINESS_TYPE} from "./actions";
const initialstate = {
    currentLocale: "en_College"
}

const reducer = (state = initialstate, action) => {
    switch (action.type) {
        case CHANGE_BUSINESS_TYPE:
            return {
                ...state,
                currentLocale: action.payload
            }
        default:
            return state;
    }

}

export default reducer;