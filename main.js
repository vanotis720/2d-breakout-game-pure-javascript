// mouse and keyboard listener
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
document.addEventListener("mousemove", mouseMoveHandler, false);

//check user device
if (deviceType() === "desktop") {
    // run game
    draw();
    alertDiv.classList.add("invisible")
}
else {
    alertDiv.classList.remove("invisible");
    alertDiv.classList.add("visible")
    // alert('please use desktop device to start the game');
}
