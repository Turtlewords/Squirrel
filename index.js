let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

console.log(saveEl)

function increment() {
    count += 1
    countEl.textContent = count  
}

function save() {
    let total = count + " - "
    saveEl.textContent += total
    count = 0
    countEl.textContent = count  
}


