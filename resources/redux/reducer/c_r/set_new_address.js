import { SET_NEW_ADDRESS_FAILED, SET_NEW_ADDRESS_SUCCESS } from "../../constant/constant";

export function setnewaddress(state={}, action) {
    switch (action.type) {
        case SET_NEW_ADDRESS_SUCCESS:
            return {
                ...state, address: action.payload
            }
        case SET_NEW_ADDRESS_FAILED:
            return "err"
        default:
            return state
    }
}

export function getidconversation(state={}, action) {
    switch (action.type) {
        case "get_id_conversation":
            return {
                ...state, id_conversation: action.payload
            }
        default:
            return state
    }
}