// init canva on document
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

// initial position of ball on canva
var x = canvas.width / 2;
var y = canvas.height - 30;

// updated ball position on canva
var dx = 2;
var dy = -2;

// ball dimensions and color
var ballRadius = 10;
var ballColor = "#344966";

// paddle dimensions and initial position on canva
var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = (canvas.width - paddleWidth) / 2;

// keyboard touch  status
var rightPressed = false;
var leftPressed = false;

// brick definition
var brickRowCount = 3;
var brickColumnCount = 5;
var brickWidth = 75;
var brickHeight = 20;
var brickPadding = 10;
var brickOffsetTop = 30;
var brickOffsetLeft = 30;

// bricks contruction
var bricks = [];
for (var c = 0; c < brickColumnCount; c++) {
    bricks[c] = [];
    for (var r = 0; r < brickRowCount; r++) {
        bricks[c][r] = { x: 0, y: 0, status: 1 };
    }
}

// score and live count
var score = 0;
var lives = 3;