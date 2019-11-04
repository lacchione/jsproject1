let colorChange = <HTMLElement>document.body.querySelector("#colorChange");
let biggerFont = <HTMLElement>document.body.querySelector("#biggerFont");

colorChange.addEventListener("click", function() {

    let currentColor = document.body.style.backgroundColor;
    let html = document.getElementsByTagName('html');

    if(currentColor === "") {

        document.body.style.backgroundColor = "#ffffff";
        document.body.style.color = "#ffffff";

    } else {

        document.body.style.backgroundColor = "";
        document.body.style.color = "";
    }
});

biggerFont.addEventListener("click", function() {

    let currentFont = document.body.style.fontSize;

    if(currentFont === "") {

        document.body.style.fontSize = "24px";

    } else {

        document.body.style.fontSize = "";
    }
})