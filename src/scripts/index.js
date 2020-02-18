import "../styles/main.scss";
import "babel-polyfill"

const modal = document.getElementById("myModal");

// w the Promise constructor

// let promiseOfModal = new Promise(function (resolve) {
//     window.setTimeout(function () {
//         resolve(modal)
//     }, (1000 * 60));
// });

// promiseOfModal.then(function(val) {
//     console.log("User has been on the page for 60 seconds");
//     val.style.display = "block";
// })


// w the async await function


async function asyncFunc() {
    let promiseOfModal = new Promise((resolve) => {
        setTimeout(() => {
            resolve(modal)
        }, (1000 * 60));

    });
    const result = await promiseOfModal;
    console.log("User has been on the page for 60 seconds");
    result.style.display = "block";
}
asyncFunc()


// to close the popUp modal

modal.addEventListener("click", (e) => {
    switch (e.target.className) {
        case "close":
        case "modal":
            modal.style.display = "none"
            break;
    }
})

const button = document.getElementById('continue');

const animation = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Continue to subscription")
    }, 2000);
})

async function animationFunc() {
    button.style.background = 'red';
    const result = await animation
    alert(result)
}

button.addEventListener('mouseover', animationFunc)
