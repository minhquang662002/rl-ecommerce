import { onValue, orderByChild, query, ref, update } from "firebase/database"
import { db } from "../index"
import _ from "lodash"

export const fetchnotifications= (setData,id_user ,setLoading )=> {
    setLoading(()=> true)
    const starCountRef= query(ref(db, `/notifications/${id_user}/`, orderByChild("time")))
    onValue(starCountRef, async snapshot=> {
       const data= await snapshot.val()
       setData(data)
       setLoading(()=> false)
    })
    return
}

export const fetchquantitynotifications= (id_user, setUnWatch)=> {
    const starCountRef= query(ref(db, `/notifications/${id_user}/`, orderByChild("time")))
    onValue(starCountRef, async snapshot=> {
        const data= await snapshot.val()
        const watched= []
        Object.values(data).map(item=> Object.values(item).map(item2=> watched.push(item2.see.state)))
        const countwatch= watched.filter(item=> item !== true)
        console.log(countwatch)
        return setUnWatch(countwatch.length || 0)
    })
}
export const sawnotifications= (id_user)=> {    
    const starCountRef= query(ref(db, `/notifications/${id_user}`))
    onValue(starCountRef, async snapshot=> {
        // Object.keys(snapshot.val()).map(item=> )
        const e= []
        Object.keys(snapshot.val()).map(item=> e.push(item))
        e.map(item=> {
            const updates= {}
            updates['/notifications/' + `${id_user}` + "/" + `${item}` + "/detail/see"]= {state: true}
            return update(ref(db), updates)
        })
    })
}