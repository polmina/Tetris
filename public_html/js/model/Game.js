var COLORS = {red: '#FF0000', blue: '#0000FF', green: '#31B404', purple: '#B40486', yellow: '#FFFF00', orange: '#FF4000', cyan: '#01DFA5'};
var Game = function () {
    this.map;
    this.playerScore = 0;
    this.playerMaxScore = 0;
    this.currentPiece;
    this.nextPiece;
};
Game.prototype.initializeGame = function () {
    Game.prototype.initializeMap.call(this);
    Game.prototype.setCurrentPiece.call(this);
    Game.prototype.setNextPiece.call(this);
};
Game.prototype.rotateLeft = function () {
    this.currentPiece.rotateLeft();
    this.printPieceOnMap();
};
Game.prototype.rotateRight = function () {
    this.currentPiece.rotateRight();
    this.printPieceOnMap();
};
Game.prototype.moveLeft = function () {
    this.currentPiece.moveLeft();
    this.printPieceOnMap();
};
Game.prototype.moveRight = function () {
    this.currentPiece.moveRight();
    this.printPieceOnMap();
};
Game.prototype.moveDown = function () {
    if (this.checkNextMove("DOWN") === true) {
        this.deleteLastKnownPosition();
        this.currentPiece.moveDown();
        this.printPieceOnMap();
        //console.log(this.currentPiece.id + " , " + this.nextPiece.id);

    } else { //hi ha colisio detectada

        //alert("aaa");
        this.currentPiece = this.nextPiece;
        Game.prototype.setNextPiece.call(this);
        //console.log(this.currentPiece.id);
    }
};
Game.prototype.checkNextMove = function (direction) {
    var piece = this.currentPiece;

    switch (direction) {
        case "DOWN":
            for (var i = 3; i > -1; i--) {
                for (var u = 0; u < 4; u++) {
                    //console.log("y: " + (i)    + " x: " + (u) + " == " + (piece.shapes[piece.currentShape][i][u]));
                    if (this.currentPiece.id !== 1) {
                        if (piece.shapes[piece.currentShape][i][u] !== 0 && piece.shapes[piece.currentShape][i + 1][u] === 0) {
                            //console.log("y: " + (piece.y + i) + " x: " + (piece.x + u) + " == " + (piece.shapes[piece.currentShape][i][u]));
                            try {
                                if (this.map[(piece.y + i) + 1][(piece.x + u)] !== 0) {
                                    return false;
                                }
                            } catch (e) {
                                return false;
                            }


                        }
                    } else {

                        if (piece.shapes[piece.currentShape][i][u] !== 0) {
                            console.log("y: " + (piece.y + i) + " x: " + (piece.x + u) + " == " + (piece.shapes[piece.currentShape][i][u]));

                            try {
                                if (this.map[(piece.y + i) + 1][(piece.x + u)] === 0) {
                                    return true;
                                }else {return false;}
                            } catch (e) {
                                return false;
                            }


                        }
                    }
                }
            }
            return true;
            break;
    }
};
Game.prototype.deleteLastKnownPosition = function () {
    var piece = this.currentPiece;
    for (var i = 0; i < 4; i++) {
        for (var u = 0; u < 4; u++) {

            if (piece.shapes[piece.currentShape][i][u] === 1) {
                //console.log("y: " + (piece.y + i)    + " x: " + (piece.x + u) + " == " + (piece.shapes[piece.currentShape][i][u]));
                this.map[piece.y + i][piece.x + u] = 0;
            }
        }
    }
};
Game.prototype.printPieceOnMap = function () {
    var piece = this.currentPiece;
    for (var i = 0; i < 4; i++) {
        for (var u = 0; u < 4; u++) {
            if (piece.shapes[piece.currentShape][i][u] === 1) {
                //console.log("y: " + (piece.y + i) + " x: " + (piece.x + u) + " == " + (piece.shapes[piece.currentShape][i][u]));
                this.map[piece.y + i][piece.x + u] = 1;
            }
        }
    }
};
Game.prototype.setCurrentPiece = function () {
    this.currentPiece = Game.prototype.getRandomPiece.call(this);
};
Game.prototype.setNextPiece = function () {
    this.nextPiece = Game.prototype.getRandomPiece.call(this);
};

Game.prototype.setMapCell = function (x, y) {
    this.map[x][y] = 1;
};
Game.prototype.getRandomPiece = function () {
    var n = Math.floor(Math.random() * 7);
    switch (n) {
        case 0:
            return this.createLine();
            break;
        case 1:
            return this.createSquare();
            break;
        case 2:
            return this.createLShape();
            break;
        case 3:
            return this.createJShape();
            break;
        case 4:
            return this.createTee();
            break;
        case 5:
            return this.createZShape();
            break;
        case 6:
            return this.createSShape();
            break;
    }
//    return this.createLine();
};
Game.prototype.initializeMap = function () {
    this.map = new Array(25);
    for (var i = 0; i < 25; i++) {
        this.map[i] = new Array(10);
        for (var u = 0; u < 10; u++) {
            this.map[i][u] = 0;
        }
    }
    ;
};
Game.prototype.printMap = function () {
    var string = "";
    for (i = 0; i < this.map.length; i++) {
        for (j = 0; j < this.map[1].length; j++) {
            switch (this.map[i][j]) {
                case 0:
                    string += '.';
                    break;
                case 1:
                    string += 'H';
                    break;
            }
            string += " ";
        }
        string += '\n';
    }
    console.log(string);
}
Game.prototype.createLine = function () {
    var shapes = [
        [
            [0, 1, 0, 0],
            [0, 1, 0, 0],
            [0, 1, 0, 0],
            [0, 1, 0, 0]
        ],
        [
            [0, 0, 0, 0],
            [1, 1, 1, 1],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 0, 1, 0],
            [0, 0, 1, 0],
            [0, 0, 1, 0],
            [0, 0, 1, 0]
        ],
        [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [1, 1, 1, 1],
            [0, 0, 0, 0]
        ]
    ];
    return new Piece(1, COLORS.red, shapes);
};
Game.prototype.createSquare = function () {
    var shapes = [
        [
            [0, 0, 0, 0],
            [0, 1, 1, 0],
            [0, 1, 1, 0],
            [0, 0, 0, 0]
        ]

    ];
    return new Piece(2, COLORS.blue, shapes);
};
Game.prototype.createLShape = function () {
    var shapes = [
        [
            [1, 1, 0, 0],
            [0, 1, 0, 0],
            [0, 1, 0, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 0, 1, 0],
            [1, 1, 1, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 1, 0, 0],
            [0, 1, 0, 0],
            [0, 1, 1, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 0, 0, 0],
            [1, 1, 1, 0],
            [1, 0, 0, 0],
            [0, 0, 0, 0]
        ]
    ];
    return new Piece(3, COLORS.green, shapes);
};
Game.prototype.createJShape = function () {
    var shapes = [
        [
            [0, 1, 1, 0],
            [0, 1, 0, 0],
            [0, 1, 0, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 0, 0, 0],
            [1, 1, 1, 0],
            [0, 0, 1, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 1, 0, 0],
            [0, 1, 0, 0],
            [1, 1, 0, 0],
            [0, 0, 0, 0]
        ],
        [
            [1, 0, 0, 0],
            [1, 1, 1, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ]
    ];
    return new Piece(4, COLORS.orange, shapes);
};
Game.prototype.createTee = function () {
    var shapes = [
        [
            [0, 1, 0, 0],
            [1, 1, 1, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 1, 0, 0],
            [0, 1, 1, 0],
            [0, 1, 0, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 0, 0, 0],
            [1, 1, 1, 0],
            [0, 1, 0, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 1, 0, 0],
            [1, 1, 0, 0],
            [0, 1, 0, 0],
            [0, 0, 0, 0]
        ]
    ];
    return new Piece(5, COLORS.purple, shapes);
};
Game.prototype.createZShape = function () {
    var shapes = [
        [
            [0, 1, 0, 0],
            [1, 1, 0, 0],
            [1, 0, 0, 0],
            [0, 0, 0, 0]
        ],
        [
            [1, 1, 0, 0],
            [0, 1, 1, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 0, 1, 0],
            [0, 1, 1, 0],
            [0, 1, 0, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 0, 0, 0],
            [1, 1, 0, 0],
            [0, 1, 1, 0],
            [0, 0, 0, 0]
        ]
    ];
    return new Piece(6, COLORS.cyan, shapes);
};
Game.prototype.createSShape = function () {
    var shapes = [
        [
            [1, 0, 0, 0],
            [1, 1, 0, 0],
            [0, 1, 0, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 1, 1, 0],
            [1, 1, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 1, 0, 0],
            [0, 1, 1, 0],
            [0, 0, 1, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 0, 0, 0],
            [0, 1, 1, 0],
            [1, 1, 0, 0],
            [0, 0, 0, 0]
        ]
    ];
    return new Piece(7, COLORS.yellow, shapes);
};