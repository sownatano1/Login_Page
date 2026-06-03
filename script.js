function Submit(){
    let email = document.getElementById("email").value.trim()
    let password = document.getElementById("psw").value.trim()

    let paragraph = document.createElement("p")

    const container = document.getElementById("incorrect-container")
    const count = container.children.length

    const button = document.getElementById("submit")

    button.classList.add("active")
    setTimeout(() => button.classList.remove("active"), 150)

    if (count >= 1){
        container.removeChild(container.lastChild)
    }

    if (email == "admin@" && password == "1234"){
        window.location.href = "page.html"
    }

    else{
        container.appendChild(paragraph)
        paragraph.textContent = "Invalid email or password!"
        paragraph.classList.add("incorrect")
    }
}
