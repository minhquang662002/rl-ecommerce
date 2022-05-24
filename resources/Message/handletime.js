const handletime= (time)=> {
    const date= new Date()
    const datet= new Date(parseInt(time))
    if(date.getDate()== datet.getDate() && date.getMonth()== datet.getMonth() && date.getFullYear()== datet.getFullYear()) {
        return `${datet.getHours()}:${parseInt(datet.getMinutes())< 10 ? "0"+datet.getMinutes() : datet.getMinutes()}`
    }
    return `${datet.getDate()}/${datet.getMonth()}/${datet.getFullYear()} ${datet.getHours()}:${datet.getMinutes()}`
}

export { handletime }