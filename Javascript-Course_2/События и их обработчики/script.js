let btn = document.querySelectorAll("button");
let wrap = document.querySelector(".wrapper");
let link = document.querySelector("a");

// btn[0].onclick = function () {
//     alert("You click first button!");
// };

// btn[0].onclick = function () {
//     alert("You again click first button!");
// };

// btn[0].addEventListener("click", function (event) {
// console.log(event);
// let target = event.target;
// target.style.display = "none";
//     console.log("Произошло событие: " + event.type + " на элементе " + event.target);
// });

// wrap.addEventListener("click", function () {
//     console.log("Произошло событие: " + event.type + " на элементе " + event.target);
// });

link.addEventListener("click", function (event) {
    event.preventDefault();// отмена действий по умолчанию
    console.log("Произошло событие: " + event.type + " на элементе " + event.target);
});

btn.forEach(function (item) {
    item.addEventListener("mouseleave", function () {
        console.log("Hello!");
    });
});

// btn[0].addEventListener("mouseenter", function () {
//     alert("You focus in first button");
// });

