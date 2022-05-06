export function getsepa(state= {}, action) {
    switch (action.type) {
        case "get_se_pa": 
            return {
                ...state, sepa: action.payload
            }
        default: 
            return state
    }
}