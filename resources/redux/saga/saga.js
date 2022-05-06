import { put, takeEvery } from "redux-saga/effects"
import { SET_NEW_ADDRESS_SUCCESS, SET_NEW_ADDRESS_FAILED, SET_NEW_ADDRESS } from "../constant/constant"

function* getNewAddress(action) {
    try {
        yield put({type: "get_id_conversation", address: action.payload})
        yield put({type: SET_NEW_ADDRESS_SUCCESS, address: action.payload})
    } catch (error) {   
        yield put({type: SET_NEW_ADDRESS_FAILED, message: error.message})
    }
}

function* mySaga() {
    yield takeEvery(SET_NEW_ADDRESS, getNewAddress)
}

export default mySaga