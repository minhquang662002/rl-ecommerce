import { ref, update, onValue } from "firebase/database"
import { db } from "../index"
import moment from "moment"

export const fon=  (state, id_user)=> {
    const postdata= {
        state: state    
    }
    const updates= {}
    updates['/user_online/' + `${id_user}` + "/"]= postdata
    return update(ref(db), updates)
}

export const gol= (id_user, setOnline)=> {
    const starCountRef= ref(db, `user_online/${id_user}/`)
    onValue(starCountRef, snapshot=> {
        const data= snapshot.val()
        if(data.state==0) {
            return setOnline(()=> "")
        }
        return setOnline(moment(`${data?.state}`, "YYYY-MM-DD hh:mm:ss a").fromNow())
    })
}