
const buttons = document.querySelectorAll(".drum")


for (let i = 0; i < buttons.length; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        let audio = new Audio("sounds/tom-1.mp3")
        audio.play();
    })


}
