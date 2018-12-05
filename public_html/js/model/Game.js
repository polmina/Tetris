var COLORS={red:'#FF0000', blue:'#0000FF', green:'#31B404', purple:'#B40486', yellow:'#FFFF00', orange: '#FF4000', cyan:'#01DFA5'};
var Game = function () {
    this.map;
    this.playerScore = 0;
    this.playerMaxScore = 0;
    this.pieces;
    this.currentPiece;
    this.nextPiece;
};
Game.prototype.initializeGame = function () {
    initializeMap();
    initializePieces();
};
Game.prototype.setCurrentPiece = function (){
    this.currentPiece = getRandomPiece();
};
Game.prototype.setNextPiece = function (){
    this.currentPiece = getRandomPiece();
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
    var row = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var map = [];
    for (var i = 0; i < 25; i++) {
        map[i] = row;
    }
    this.map = map;
};
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
    return new Piece(1,COLORS.red, shapes);
};
Game.prototype.createSquare = function () {
var shapes = [
        [
            [0, 0, 0, 0],
            [0, 1, 2, 0],
            [0, 1, 2, 0],
            [0, 0, 0, 0]
        ]
        
    ];
    return new Piece(2,COLORS.blue, shapes);
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
    return new Piece(3,COLORS.green, shapes);
};
Game.prototype.createJshape = function () {
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
    return new Piece(4,COLORS.orange, shapes);
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
    return new Piece(5,COLORS.purple, shapes);
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
    return new Piece(6,COLORS.cyan, shapes);
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
    return new Piece(7,COLORS.yellow, shapes);
};