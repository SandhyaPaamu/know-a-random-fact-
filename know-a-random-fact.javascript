let inputEl = document.getElementById('userInput')
let factEl = document.getElementById('fact')
let spinnerEl = document.getElementById("spinner");

function enterNumber(event) {
    if (event.key === "Enter") {
        let userVal = userInput.value

        if (userInput.value === "") {
            alert("Enter a Number")
            return
        }
        let url = "https://apis.ccbp.in/numbers-fact?number=" + userVal
        let options = {
            method: "GET"
        }
        spinnerEl.classList.remove("d-none")
        factEl.classList.add("d-none")
        fetch(url, options)
            .then(function(response) {
                return response.json();
            })
            .then(function(jsonData) {
                spinnerEl.classList.add("d-none")
                factEl.classList.remove("d-none")
                let {
                    fact
                } = jsonData
                factEl.textContent = fact
            })
    }
}




inputEl.addEventListener("keyup", enterNumber)
