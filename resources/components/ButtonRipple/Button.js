import "./Button.sass"

const ButtonRipple= ({children})=> {
    const createRipple= (e)=> {
        const button= e.currentTarget
        const circle= document.createElement("div")
        const diameter= Math.max(button.clientWidth, button.clientHeight)
        const radius= diameter / 2
        circle.style.width= circle.style.height= `${diameter}px`
        circle.style.left= `${e.pageX }px`
        circle.style.top= `${e.pageY}px`
        circle.classList.add("ripple-vippro")
        const ripple= button.querySelector(".ripple-vippro")
        if(ripple) {
            ripple.remove() 
        }
        button.appendChild(circle)
        
    }
    return (
        <div className="btn-ripple-vippro" onClick={(e)=> createRipple(e)}>{children}</div>
    )
}

export { ButtonRipple }