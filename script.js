const btn = document.getElementById("btn");
const foodHolder = document.getElementById("foodHolder");
btn.addEventListener("click", findYum)

async function findYum() {
    const response = await fetch("https://foodish-api.herokuapp.com/api/images/dessert");
    const data = await response.json();
    foodHolder.innerHTML = `<img src=${data.image} alt="random dessert image" />`
}

