export function rippleButton(e) {
    const button = e.target;
    const circle= document.createElement("div")
    const diameter= Math.max(button.clientWidth, button.clientHeight)
    const radius= diameter /2
    console.log(e.clientX , e.clientY)
    console.log(button.offsetLeft, button.offsetTop)
    console.log(radius)
    circle.style.width= circle.style.height= `${diameter}px`
    circle.style.left= `${e.clientX- button.offsetLeft- radius}px`
    circle.style.top= `${e.clientY- button.offsetTop-radius}px`
    circle.classList.add("ripple")

    const ripple= document.querySelector(".ripple")
    if(ripple) {
        ripple.remove()
    }
    button.appendChild(circle)
}