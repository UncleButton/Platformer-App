var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

var currentLevel = 9;
var backgroundType = "training";

//var signTxt = createFont("minstral", 20);

//var level = [0];

var R = 'Red';
var B = 'Blue';
var Y = 'Yellow';
var G = 'Green';
var P = 'Purple';
var S = 'Sign';
var W = 'White';
var T = 'transport';
var A = 'air';


var level1 = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, S, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

var level2 = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, S, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

var level3 = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 1, 2, 2, 2, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 1, 2, 2, 2, 1],
    [1, 2, 2, 2, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 1, 2, 2, 2, 1],
    [1, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 1, 2, 2, 2, 1],
    [1, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1],
    [1, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1],
    [1, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 2, 2, 2, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 2, 2, 2, 2, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 2, 2, 2, 2, 2, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, S, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

var level4 = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1],
    [1, 0, 0, 0, 0, 1, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1],
    [1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 4, 0, 0, S, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

var level5 = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1],
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
    [1, 2, 1, 1, 1, 1, 4, 4, 1, 1, 1, 1, 1, 1, 1, 4, 4, 4, 1, 0, 0, 0, 0, 0, 1],
    [1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 1, 4, 4, 4, 4, 1, 1, 0, 0, 0, S, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];


var level6 = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 5, 2, 2, 2, 2, 2, 2, G, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 2, 2, 2, 2, 2, 2, 2, G, 2, 2, G, G, G, G, G, G, G, 0, 0, 0, 0, 0, 0, 1],
    [1, 2, 2, 2, 2, 2, 2, 2, G, 2, 2, G, 0, 0, 0, 0, 0, 0, G, 0, 0, 0, 0, 0, 1],
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, G, 0, 0, 0, 0, G, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, G, G, G, G, G, G, G, G, G, G, G, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, G, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, G, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, G, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, G, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, G, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, G, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, G, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 0, 0, 0, 0, G, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 2, G, G, G, G, G, G, G, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, G, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, G, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, G, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, G, G, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, G, 2, 2, 2, 2, 2, 2, 2, 2, G, G, G, G, 0, S, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

var level7 = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 2, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, Y, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, B, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, G, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, R, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, S, 0, 0, 0, 1, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

var level8 = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 4, 4, 4, 4, 4, 4, 4, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 4, 2, 2, 2, 2, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 4, 2, 2, 2, 2, 4, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 2, 2, 2, 2, 4, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 4, 2, 2, 2, 2, 1, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 1, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 1, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 2, 2, 4, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 4, 4, 0, 4, 4, 4, 4, 4, 0, 0, 1, 2, 2, 0, S, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

var level9 = [
    [1, T, 1, 1, T, 1, 1, 1, 1, T, 1, 1, 1, 1, T, 1, 1, 1, 1, T, 1, 1, 1, 1, 1],
    [1, 5, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [T, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, T],
    [1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [T, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, T],
    [T, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, T],
    [1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, T, T, 1, 0, 0, 0, 1, 1, 1, T, 1, 1, 1, 1, 1, 1],
    [T, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, T],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, S, 0, 0, 0, 0, 0, 0, 1],
    [1, T, 1, 1, T, 1, 1, 1, 1, T, 1, 1, 1, 1, T, 1, 1, 1, 1, T, 1, 1, 1, 1, 1]
];

var level10 = [
    [P, R, B, G, T, Y, R, G, B, Y, G, T, T, R, P, T, B, G, Y, R, P, B, G, P, R],
    [Y, 5, 1, 0, 0, 0, 0, 0, 2, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 2, 0, 0, 0, G],
    [P, 0, 1, 1, 1, 1, 0, 0, 0, 2, 4, 2, 4, 2, 4, 2, 4, 2, 4, 2, 0, 0, 0, 0, B],
    [B, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 4, 2, 4, 2, 4, 2, 4, 2, 0, 0, 0, 0, 0, Y],
    [Y, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 2, 4, 2, 4, 2, 4, 2, 0, 0, 0, 0, 0, 0, G],
    [T, 0, 1, 0, 0, R, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, T],
    [R, 1, 1, 0, 0, R, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, B],
    [T, 0, 1, 0, 0, R, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, T],
    [P, 1, 0, 0, 0, R, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, Y],
    [G, 0, 0, 1, 0, 0, B, B, B, B, T, T, T, T, Y, Y, Y, Y, G, 0, 0, 0, 0, 0, P],
    [Y, 0, 0, 0, 0, 0, 0, 0, G, 0, 0, 0, 0, 0, 0, 0, Y, 0, 0, G, 0, 0, 0, 0, G],
    [R, 0, 1, 0, 0, 0, 0, 0, R, 0, 0, 0, 0, 0, 0, 0, P, 0, 0, G, 0, 0, 0, 0, B],
    [P, 0, 0, 0, 0, 0, 0, 0, B, 0, 0, 0, 0, 0, 0, 0, R, 0, 0, 0, 1, 1, 1, 1, G],
    [G, 0, 0, 0, 0, 0, 0, 0, Y, 0, 0, 0, 0, 0, 0, 0, G, 0, 0, 0, 0, 0, 0, 0, B],
    [R, 0, 0, 0, 0, 0, 0, 0, G, 0, 0, 0, 0, 0, 0, 0, Y, 0, 0, 0, 0, 0, 0, 0, Y],
    [T, 1, 0, 0, 0, 0, 0, 0, R, 0, 0, 0, 0, 0, 0, 0, P, 0, 0, 0, 0, 0, 0, 0, T],
    [Y, 0, 0, 0, 0, 0, 0, P, 0, G, B, Y, R, B, G, R, R, 0, 0, 0, 0, 0, 0, 0, P],
    [P, 0, 0, 0, 0, 0, 0, P, 0, 0, 0, R, 0, 0, 0, 0, G, B, R, Y, B, P, B, R, B],
    [G, 0, 0, 0, 0, 0, 0, G, 0, 0, 0, G, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, B],
    [B, 2, 1, 4, 1, 4, 1, 4, 0, 0, 0, Y, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, G],
    [Y, 2, 2, 2, 2, 2, 2, 1, R, Y, G, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, P],
    [R, 2, 2, 2, 2, 2, 2, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, G],
    [P, 2, 2, 2, 2, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, R],
    [B, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, S, 0, 0, 0, 0, 0, 0, Y],
    [R, P, G, Y, T, G, B, P, G, B, R, T, T, P, P, T, P, G, P, Y, B, R, G, B, P]
];


var level11 = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, A, A, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, A, A, A, A, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, A, A, A, A, A, A, 1, 0, 0, 0, 0, 0, A, A, A, 0, 0, 0, B, B, B, B, B, 1],
    [1, A, A, A, A, A, A, A, 1, 0, 0, 0, 0, A, A, A, 0, 0, 0, 0, 0, 0, S, 0, 1],
    [1, A, A, A, A, A, A, A, 0, 0, 0, 0, 0, A, A, A, 0, 0, B, B, B, B, B, B, 1],
    [1, A, A, A, A, A, A, A, 0, 0, 0, 0, 0, 0, 0, 0, 0, B, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];




var signText = ["    Welcome to *instert title*!\n   Read signs along the way to\n    help you progress through \n levels! Pink blocks are portals\n they take you to the next level!", "\n    Falling from high platforms\n           does not hurt you!", "You float in water! \nUse it to your advantage!\npress the down arrow key to\nswim downward!", "Lava is not as helpful as water...\nHit lava and you will imediately\ndie! DONT DIE!", "This is the last level of training!\n  Pass this level and head on to \n the first world! If you get stuck \n in a level, press the \"r\" key and \n     you will restart the level.", "   Welcome to the earth world!\n  Here on earth, there is a lot of\n water, and not very much lava.\nRemember that \"r\" restarts each\n                      level!", "Consider yourself stuck! \nPress\"r\"", "8", "Oh! I cant believe i forgot to \nmention portals! I will let you\nfigure out how they work...\nWARNING! they are always \nbright blue!", "ALL TOGETHER NOW!\nbeat this level and move on to \nthe underwater world!\noh, and are you dizzy yet?", "Welcome to water world! \nIn this world, you float \neverywhere! Lava is very scarce.\nThere is water in this world...\nnormally under pockets of rock."];

var levels = [level1, level2, level3, level4, level5, level6, level7, level8, level9, level10, level11];
//var test = 0;

var mapBlockSize = Math.ceil(400 / levels[currentLevel - 1].length);

var player1 = {
    x: mapBlockSize * 22,
    y: mapBlockSize * 22,
    size: mapBlockSize,
    speed: mapBlockSize / 10,
    jump: false,
    gvty: 1,
    gvtyTimer: 0,
    on: false,
    deathCount: 0
};

var lava = ['#FF4800', '#FF9D00', '#FF5E00', '#FF6600'];
var water = ['#7DBCFF', '#91EBFF', '#96FFFF', '#70F3FF'];


var inCave = function(x, y, w, color, dist) {
    ctx.fillStyle = "brown";

    if (player1.x < x + (w * dist) && player1.x > x - (w * dist) && player1.y < y + (dist * w) && player1.y > y - (w * dist)) {
        ctx.fillStyle = "brown";

    }

};
var up = false;
var wall = function(x, y, w) {
    //no//Stroke();
    if (player1.x < x + (w * 3) && player1.x > x - (w * 3) && player1.y < y + (3 * w) && player1.y > y - (w * 3)) {
        ctx.fillRect(x, y, mapBlockSize, mapBlockSize);


        if (player1.y + player1.size > y && player1.y < y + mapBlockSize / 8 && player1.x + player1.size > x + mapBlockSize / 8 + 1 && player1.x < x + w - mapBlockSize / 8 - 1) {
            player1.y = y - player1.size;
            //player1.on=true;
            player1.jump = false;
        } //else{player1.on=false;}
        if (player1.y < y + w && player1.y + player1.size > y && player1.x + player1.size > x + mapBlockSize / 8 + 1 && player1.x < x + w - mapBlockSize / 8 - 1) {
            player1.y = y + w;
            player1.gvty += 0.2;
            //player1.gvty+=6;
        }
        if (player1.x + player1.size > x - mapBlockSize / 16 + 1 && player1.x < x + mapBlockSize / 8 && player1.y + player1.size > y && player1.y < y + w) {
            player1.x = x - player1.size - mapBlockSize / 16 + 1;
        }
        if (player1.x < x + w  && player1.x + player1.size > x + 5 * (mapBlockSize / 16) && player1.y + player1.size > y + 7 * (mapBlockSize / 16) && player1.y < y + w - mapBlockSize / 8) {
            player1.x = x + w ;
        }
    }


    if (player1.x + player1.size > x && player1.x < x + w&& player1.y + player1.size > y -1&& player1.y < y + w ) {
        //ctx.fillStyle="brown";255, 0, 0);
        //ctx.fillRect(20,20,20,20);
        player1.on = true;
        //player1.jump = false;
        //up=false;
    } //else{player1.on=false;}



};

var waterWall = function(x, y, w) {



    ctx.fillRect(x, y, w, w);
    if (player1.x + player1.size > x && player1.x < x + w && player1.y + player1.size > y && player1.y < y + w) {
        //player1.deathCount+=1;
        //player1.x=350;
        //player1.y=350;
        player1.jump = false;
        player1.gvty = 1;
        player1.gvtyTimer = 10;
        player1.speed = 1;
        player1.gvty = -1;
    }



};

var killerWall = function(x, y, w) {



    ctx.fillRect(x, y, w, w);
    if (player1.x + player1.size > x && player1.x < x + w && player1.y + player1.size > y + 3 && player1.y < y + w - 3) {
        player1.deathCount += 1;
        player1.x = mapBlockSize * 22;
        player1.y = mapBlockSize * 22;
        player1.jump = false;
        player1.gvty = 1;
        player1.gvtyTimer = 0;
        player1.speed = 1;
    }



};

var stoneWall = function(x, y, w) {
    if (player1.x < x + (w * 3) && player1.x > x - (w * 3) && player1.y < y + (3 * w) && player1.y > y - (w * 3)) {
        ctx.fillStyle = "brown";
        //stroke(0, 0, 0);
        ctx.fillRect(x, y, w, w / 2, 2);

        ctx.fillRect(x, y + w / 2, w / 2, w / 2, 2);
        ctx.fillRect(x + w / 2, y + w / 2, w / 2, w / 2, 2);

        //stroke(153, 153, 153);
        //line(x, y + w / 2 + 1, x, y + w - 1);

        //line(x + w * 3 / 4, y + w / 2 + 1, x + w - 1, y + w / 2 + 1);
        //line(x + w * 3 / 4, y + w - 1, x + w - 1, y + w - 1);



        //ctx.fillStyle = "brown";
        wall(x, y, w);
    }
};
var nextLevel = false;
var portalWall = function(x, y, w) {



    ctx.fillRect(x, y, w, w);
    if (player1.x + player1.size > x && player1.x < x + w && player1.y + player1.size > y && player1.y < y + w) {
        //test++;
        player1.x = mapBlockSize * 22;
        player1.y = mapBlockSize * 22;
        currentLevel++;
    } else {
        player1.speed = 2;
        player1.on = false;
    }
    if (currentLevel > levels.length) {
        currentLevel = 1;
    }



};

var airWall = function(x, y, w) {



    ctx.fillRect(x, y, w, w);
    if (player1.x + player1.size > x && player1.x < x + w && player1.y + player1.size > y && player1.y < y + w) {
        player1.gvty = 1;
        player1.speed = 1;
        player1.gvty = 1;
        player1.gvtyTimer = 0;
        player1.on = false;
    }



};



var keys = [];



var sign = function(x, y, w, txt) {
    ctx.fillStyle = "brown";
    ctx.fillRect(x, y, w, 1 / 2 * w);
    ctx.fillRect(x + 2 / 5 * mapBlockSize, y + 1 / 2 * mapBlockSize, 1 / 5 * mapBlockSize, 1 / 2 * mapBlockSize);
    ctx.fillStyle = "brown";
    ctx.fillRect(x + 1 / 16 * mapBlockSize, y + 1 / 16 * mapBlockSize, w - (1 / 8 * w), 1 / 2 * w - (1 / 8 * w));

    if (player1.x + player1.size > x && player1.x < x + w && player1.y + player1.size > y && player1.y < y + w) {
        ctx.fillStyle = "brown";
        ctx.fillRect(mapBlockSize * 5, mapBlockSize * 3, mapBlockSize * 15, mapBlockSize * 7);
        ctx.fillRect(mapBlockSize * 12, mapBlockSize * 10, mapBlockSize * 1, mapBlockSize * 7);
        ctx.fillStyle = "brown";
        ctx.fillRect(mapBlockSize * 5.5, mapBlockSize * 3.5, mapBlockSize * 14, mapBlockSize * 6);
        ctx.fillStyle = "brown";
        //textSize(mapBlockSize);
        //textFont(signTxt,20);
        ctx.fillText(txt, mapBlockSize * 6, mapBlockSize * 4.5);
    }





};


var outdoorBackground = function() {
    ctx.backgroundColor = "black";
    //no//Stroke();
    ctx.fillStyle = "brown";
    ctx.fillRect(-1, 304, 402, 101);
};
var castleBackground = function() {
    ctx.backgroundColor = "black";
    for (var i = 0; i < mapBlockSize * 25; i += 2 * mapBlockSize) {
        for (var x = 10; x < mapBlockSize * 25; x += 2 * mapBlockSize) {
            //stroke(0, 0, 0);
            ctx.fillStyle = "brown";
            ctx.fillRect(i, x, 2 * mapBlockSize, mapBlockSize, 2);
            ctx.fillRect(i - mapBlockSize, x - mapBlockSize, 2 * mapBlockSize, mapBlockSize, 2);
        }
    }
};

//keydown action


function init() {
    window.requestAnimationFrame(draw);
}

document.onkeypress = function(e) {
    e = e || window.event;
    // use e.keyCode
    console.log(e.keyCode);
};


//document.addEventListener("keydown", keyDownTextField, false);

var right = false;
var left = false;
var down = false;

var restart = false;

document.onkeydown = function(e) {
        var key = e.keyCode;
        if (key===37) {//left arrow pressed
            right=true;
        } 
        if(key===39){
            left=true;
        }
        if(key===38){
            up=true;
            //player1.jump=true;
        }
        if(key===40){
            down=true;
        }
        if(key===82){
            restart=true;
        }

}

document.onkeyup = function(e) {
        var key = e.keyCode;
        if (key===37) {//left arrow pressed
            right=false;
        } 
        if(key===39){
            left=false;
        }
        if(key==38){
            up=true;
            //player1.jump=true;
        }
        if(key===40){
            down=false;
        }
        if(key===82){
            restart=false;
        }
}




   


function draw() {

    mapBlockSize = Math.ceil(400 / levels[currentLevel - 1].length);

if(right==true){
    player1.x+=-player1.speed;
    //alert("PLEASE WORK!")
}
if(left==true){
    player1.x+=player1.speed;
}
if(down==true){
    player1.y+=1.5;
}
if(up==true&&player1.on==true){
    
        player1.y+=-5;
     
    player1.jump=true;
    console.log("should be true");
}
if(restart==true){
    //player1.deathCount++;
    player1.x = mapBlockSize * 22;
    player1.y = mapBlockSize * 22;
    player1.jump = false;
    player1.gvty = 1;
    player1.gvtyTimer = 0;
    player1.speed = 1;
}
//if()

    //player1.speed = Math.ceil(400/levels[test].length);



    //no//Stroke();



    for (var y = 0; y < levels[currentLevel - 1].length; y++) {
        for (var x = 0; x < levels[currentLevel - 1][y].length; x++) {
            switch (levels[currentLevel - 1][y][x]) {

                case 0:
                    {
                        ctx.fillStyle = "green";
                        if (backgroundType === "water") {
                            waterWall(x * mapBlockSize, y * mapBlockSize, mapBlockSize);
                        }
                    } //noBlock
                    break;

                case 1:
                    {
                        ctx.fillStyle = "grey";
                        if (backgroundType === "cave") {
                            inCave(x * mapBlockSize, y * mapBlockSize, mapBlockSize, color(51, 51, 51), 2);
                        }
                        wall(x * mapBlockSize, y * mapBlockSize, mapBlockSize);
                    } //regular, grey brick (cave too)
                    break;

                case 2:
                    {
                        ctx.fillStyle = water[Math.round(Math.random(0, 3))];
                        waterWall(x * mapBlockSize, y * mapBlockSize, mapBlockSize);
                    } //water blocks
                    break;

                case 4:
                    {
                        ctx.fillStyle = lava[Math.round(Math.random(0, 3))];
                        ctx.fillRect(x * mapBlockSize, y * mapBlockSize, mapBlockSize, mapBlockSize);
                        killerWall(x * mapBlockSize, y * mapBlockSize + 2, mapBlockSize);
                    } //lava blocks
                    break;

                case 5:
                    {
                        ctx.fillStyle = "black";
                        portalWall(x * mapBlockSize, y * mapBlockSize, mapBlockSize);
                    } //portal
                    break;

                case 6:
                    {
                        stoneWall(x * mapBlockSize, y * mapBlockSize, mapBlockSize);
                    } //stone walls
                    break;

                case G:
                    {
                        ctx.fillStyle = "red";
                        wall(x * mapBlockSize, y * mapBlockSize, mapBlockSize);
                    } //regular green block
                    break;

                case R:
                    {
                        ctx.fillStyle = "brown";
                        wall(x * mapBlockSize, y * mapBlockSize, mapBlockSize);
                    } //regular red block
                    break;

                case S:
                    {
                        sign(x * mapBlockSize, y * mapBlockSize, mapBlockSize, signText[currentLevel - 1]);

                    }
                    break;

                case W:
                    {
                        ctx.fillStyle = "brown";
                        wall(x * mapBlockSize, y * mapBlockSize, mapBlockSize);
                    } //regular white block
                    break;

                case Y:
                    {
                        ctx.fillStyle = "brown";
                        wall(x * mapBlockSize, y * mapBlockSize, mapBlockSize);
                    } //regular yellow block
                    break;

                case P:
                    {
                        ctx.fillStyle = "brown";
                        wall(x * mapBlockSize, y * mapBlockSize, mapBlockSize);
                    } //regular purple block
                    break;

                case B:
                    {
                        ctx.fillStyle = "brown";
                        wall(x * mapBlockSize, y * mapBlockSize, mapBlockSize);
                    } //regular blue block
                    break;

                case T:
                    {
                        ctx.fillStyle = "#00DD99";

                    } //teleport block
                    break;

                case A:
                    {
                        ctx.fillStyle = "brown";
                        airWall(x * mapBlockSize, y * mapBlockSize, mapBlockSize);

                    } //regular blue block
                    break;

            }

            ctx.fillRect(x * mapBlockSize, y * mapBlockSize, mapBlockSize, mapBlockSize);

        }
    }




    //textSize(15);
    ctx.fillStyle = "brown";
    ctx.fillText("Deaths: " + player1.deathCount, 325, 345);

    ctx.fillStyle = "brown";
    //stroke(71, 0, 0);
    ////strokeWeight(mapBlockSize / 16);
    ctx.fillRect(player1.x, player1.y, player1.size, player1.size);

    player1.speed = mapBlockSize / 8;



    


    //if (38 == 30) {
        //console.log("test");
    //}
    //if (38 == 30 && player1.on === true) {
        //player1.jump = true;
        //console.log("test!!!!!");
    //}
    //if (e.83 || e.40) {
    //player1.y += 5;
    //}
    //if (39 == 30) {
        //ctx.translate(0, 20); //player1.x += player1.speed;
    //}
    //if (e == 97) {
        //player1.x += -player1.speed;
    //}
    //if (82 == 30) {
        //player1.deathCount++;
        //player1.x = mapBlockSize * 22;
        //player1.y = mapBlockSize * 22;
        //player1.jump = false;
        //player1.gvty = 1;
        //player1.gvtyTimer = 0;
        //player1.speed = 1;
    //} //r for restart

    player1.y += player1.gvty;

    if (player1.jump === true) {
        player1.gvtyTimer += 1;
        //player1.on=false;
        if (player1.gvtyTimer < 9) {

            player1.gvty += -mapBlockSize / 20;
        }
        if (player1.gvtyTimer > 9) {
            player1.gvty += mapBlockSize / 100;
        }
    }
    if (player1.jump === false) {
        player1.gvty = 1 / 6.6 * mapBlockSize;
        player1.gvtyTimer = 0;
        up=false;
    }



    if (player1.y > mapBlockSize * 25) {
        player1.y = mapBlockSize * -0.5;
    }
    if (player1.y < mapBlockSize * -0.5) {
        player1.y = mapBlockSize * 24;
    }

    if (player1.x > mapBlockSize * 25) {
        player1.x = mapBlockSize * -0.5;
    }
    if (player1.x < mapBlockSize * -0.5) {
        player1.x = mapBlockSize * 24;
    }


    /*if(player1.y>300){
            player1.on=true;
            player1.y=300;
        }
    
        if(player1.y>250&&player1.x>300){
            player1.on=true;
            player1.y=250;
        }*/



    //textSize(20);
    ctx.fillText("Level: " + player1.on, 170, 15);


    if (backgroundType === "water") {
        ctx.fillStyle = "brown";
        ctx.fillRect(-1, -1, 402, 402);
    }




    if (currentLevel - 1 > levels.length) {
        currentLevel = 1;
    }

    window.requestAnimationFrame(draw);
}
//player1.x+=-1;

init();
