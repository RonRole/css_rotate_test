const flipRoot = document.getElementById("flipRoot")
const front = document.getElementById("front-image")
const back = document.getElementById("back-image")
const form = document.getElementById("form")
const nameInput = document.getElementById("name")

const backWordQueue = []
 
flipRoot.addEventListener("animationiteration", _ => {
    const currentBack = backWordQueue.shift()
    if(!currentBack) return
    back.innerText = currentBack
    backWordQueue.push(currentBack)
})

form.addEventListener("submit", e => {
    e.preventDefault()
    backWordQueue.unshift(nameInput.value)
    nameInput.value = ""
})