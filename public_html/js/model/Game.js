var COLORS = {red: '#FF0000', blue: '#0000FF', green: '#31B404', purple: '#B40486', yellow: '#FFFF00', orange: '#FF4000', cyan: '#01DFA5'};
var Game = function () {
    this.map;
    this.playerScore = 0;
    this.playerMaxScore = 0;
    this.pieces;
    this.currentPiece;
    this.nextPiece;
};
Game.prototype.initializeGame = function () {
    Game.prototype.initializeMap.call(this);
    Game.prototype.initializePieces.call(this);
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
    this.currentPiece.moveDown();
    this.printPieceOnMap();
};
Game.prototype.printPieceOnMap = function () {
    var piece = this.currentPiece;
    for (var i = 0; i < 4; i++) {
        for (var u = 0; u < 4; u++) {
            if (piece.shapes[piece.currentShape][i][u] === 1) {
                 this.map[piece.y+i][piece.x+u]=1;
            }
        }
    }
};
Game.prototype.setCurrentPiece = function () {
    this.currentPiece = Game.prototype.getRandomPiece.call(this);
};
Game.prototype.setNextPiece = function () {
    this.currentPiece = Game.prototype.getRandomPiece.call(this);
};
Game.prototype.initializePieces = function () {
    this.pieces = [
        this.createLine(),
        this.createSquare(),
        this.createLShape(),
        this.createJShape(),
        this.createTee(),
        this.createZShape(),
        this.createSShape()
    ];

};
Game.prototype.setMapCell = function (x, y) {
        this.map[x][y]=1;
};
Game.prototype.getRandomPiece = function () {
    return this.pieces[Math.floor(Math.random() * 7)];
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
            [0, 0, 0, 0],
            [1, 1, 1, 0],
            [0, 0, 1, 0]
        ]
    ];
    return new Piece(3, COLORS.green, shapes);
};
Game.prototype.createJShape = function () {
    var shapes = [
        [
            [0, 1, 0, 0],
            [0, 1, 0, 0],
            [0, 1, 0, 0],
            [0, 1, 0, 0]
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