const container = document.getElementById("container");
const selectGrid = document.getElementById("grid");
const selectPlaystyle = document.getElementById("playstyle");
const totalClicksDiv = document.getElementById("totalClicks");
const hitsDiv = document.getElementById("hits");
const accuracyDiv = document.getElementById("accuracy");
let playstyle = selectPlaystyle.value;
let interval = playstyle * 1000;
let grid = selectGrid.value; //initially the first option in the select tag
let totalClicks = 0; //incremented on click in container
let hits = 0; //incremented on mole click
let gridBoxes = container.getElementsByClassName("box");
let intervalID;