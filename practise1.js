function MakeAnAlert(event) {
    event.preventDefault()
    alert("That was easy")
}
const form = document.querySelector("form")
form.addEventListener("submit", MakeAnAlert)