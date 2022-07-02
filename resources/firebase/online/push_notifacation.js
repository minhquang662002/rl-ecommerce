import { ref, set } from "firebase/database"
import { db } from "../index"
import { v4 as uuidv4 } from "uuid"

export const p_notifications= async (id_user, username, avatar_user, content, id_product, link)=> {
    return await set(ref(db, "notifications/"+id_user+"/"+ uuidv4() + "/detail"), {
        avatar_user: avatar_user,
        content: content,
        id_user: id_user,
        read: false,
        time: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().slice(0, -1),
        user_name: username,
        id_product: id_product || "none",
        see: {state: false},
        link: link || "none"
    })
}
