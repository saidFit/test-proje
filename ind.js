const AllImages = document.querySelectorAll("img");
const numberr = document.querySelector(".number");
const bold = document.querySelector("b");
const button_start = document.querySelector("#btn_start");

let conter = 0;
let timLimite = 7;
let time = 700;

function randomFunc() {
    let remo = setInterval(random, time);

    function random() {
        const random = Math.trunc(Math.random() * AllImages.length);
        console.log(random);
        const element = AllImages[random];
        console.log(element);
        element.classList.add("popUp");
        setTimeout(() => {
            element.classList.remove("popUp");
        }, 1400);
        if (timLimite == 0) {
            bold.classList.remove('danger');
            console.log("oui");
            bold.textContent = `you are finish !!`;
            element.classList.remove("popUp");
            clearInterval(remo);
        }
    }
}

function start() {
    timLimite = 7;
    bold.textContent = timLimite;
    conter = 0;
    numberr.textContent = conter;
    randomFunc();
    let under_number = setInterval(myinterval, 1000)

    function myinterval() {
        timLimite -= 1;
        bold.textContent = timLimite;
        if (timLimite <= 4) {
            bold.classList.add('danger');
        }
        if (timLimite <= 0) {
            console.log(true);
            clearInterval(under_number);
        }
    }
}

btn_start.addEventListener("click", start);

AllImages.forEach((elementclick) => {
    elementclick.addEventListener("click", (e) => {
        conter++;
        numberr.textContent = conter;
        elementclick.src = `yoda2.png`;
        const addo = elementclick.classList.remove("popUp");
        setTimeout(addo, 300)

        setTimeout(() => {
            elementclick.src = `yoda1.png`;
        }, 600);
    });
});