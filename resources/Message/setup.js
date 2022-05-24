import Echo from "laravel-echo"

export const option= {
    broadcaster: "pusher",
    key: "95583842a488fce99dee",
    cluster: "ap1",
    encrypted: true,
    auth: {
        headers: {
            Authorization: 'Bearer '+ document.querySelector('meta[name="csrf-token"]').getAttribute("content") ,
            'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute("content")
        }
    }, 
}

export const echo= new Echo(option)