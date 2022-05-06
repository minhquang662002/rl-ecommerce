import { combineReducers } from "redux"
import { setnewaddress, getidconversation } from "./c_r/set_new_address"
import { getsepa } from "./c_r/se_pa"

export default combineReducers({
    setnewaddress,
    getidconversation,
    getsepa
})