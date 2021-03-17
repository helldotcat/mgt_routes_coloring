// create an array with nodes
var nodes = new vis.DataSet([
{ id: 0, label: "1", color: "green", font: { color: "white"} },
{ id: 1, label: "10", color: "red", font: { color: "white"} },
{ id: 2, label: "11", color: "purple", font: { color: "white"} },
{ id: 3, label: "12", color: "brown", font: { color: "white"} },
{ id: 4, label: "13", color: "red", font: { color: "white"} },
{ id: 5, label: "14", color: "blue", font: { color: "white"} },
{ id: 6, label: "15", color: "green", font: { color: "white"} },
{ id: 7, label: "16", color: "blue", font: { color: "white"} },
{ id: 8, label: "17", color: "pink", font: { color: "black"} },
{ id: 9, label: "2", color: "green", font: { color: "white"} },
{ id: 10, label: "20", color: "pink", font: { color: "black"} },
{ id: 11, label: "21", color: "brown", font: { color: "white"} },
{ id: 12, label: "23", color: "blue", font: { color: "white"} },
{ id: 13, label: "24", color: "red", font: { color: "white"} },
{ id: 14, label: "25", color: "red", font: { color: "white"} },
{ id: 15, label: "26", color: "red", font: { color: "white"} },
{ id: 16, label: "27", color: "red", font: { color: "white"} },
{ id: 17, label: "28", color: "orange", font: { color: "black"} },
{ id: 18, label: "29", color: "brown", font: { color: "white"} },
{ id: 19, label: "3", color: "brown", font: { color: "white"} },
{ id: 20, label: "30", color: "pink", font: { color: "black"} },
{ id: 21, label: "31", color: "purple", font: { color: "white"} },
{ id: 22, label: "34", color: "pink", font: { color: "black"} },
{ id: 23, label: "36", color: "pink", font: { color: "black"} },
{ id: 24, label: "37", color: "orange", font: { color: "black"} },
{ id: 25, label: "38", color: "green", font: { color: "white"} },
{ id: 26, label: "39", color: "pink", font: { color: "black"} },
{ id: 27, label: "43", color: "blue", font: { color: "white"} },
{ id: 28, label: "45", color: "green", font: { color: "white"} },
{ id: 29, label: "46", color: "red", font: { color: "white"} },
{ id: 30, label: "47", color: "orange", font: { color: "black"} },
{ id: 31, label: "49", color: "pink", font: { color: "black"} },
{ id: 32, label: "4Л", color: "orange", font: { color: "black"} },
{ id: 33, label: "4П", color: "blue", font: { color: "white"} },
{ id: 34, label: "50", color: "brown", font: { color: "white"} },
{ id: 35, label: "6", color: "brown", font: { color: "white"} },
{ id: 36, label: "7", color: "pink", font: { color: "black"} },
{ id: 37, label: "9", color: "red", font: { color: "white"} },
{ id: 38, label: "А", color: "orange", font: { color: "black"} },
{ id: 39, label: "Б", color: "blue", font: { color: "white"} },
]);

// create an array with edges
var edges = new vis.DataSet([
{ from: 8, to: 2},{ from: 31, to: 7},{ from: 2, to: 3},{ from: 10, to: 28},{ from: 34, to: 13},{ from: 12, to: 21},{ from: 30, to: 15},{ from: 19, to: 31},{ from: 32, to: 36},{ from: 34, to: 28},{ from: 9, to: 2},{ from: 17, to: 6},{ from: 24, to: 39},{ from: 16, to: 17},{ from: 33, to: 29},{ from: 16, to: 12},{ from: 0, to: 19},{ from: 18, to: 20},{ from: 3, to: 23},{ from: 5, to: 15},{ from: 27, to: 3},{ from: 18, to: 12},{ from: 35, to: 6},{ from: 26, to: 15},{ from: 26, to: 5},{ from: 9, to: 23},{ from: 3, to: 22},{ from: 1, to: 11},{ from: 19, to: 15},{ from: 19, to: 5},{ from: 33, to: 4},{ from: 4, to: 23},{ from: 34, to: 39},{ from: 30, to: 31},{ from: 32, to: 28},{ from: 26, to: 19},{ from: 32, to: 29},{ from: 9, to: 36},{ from: 9, to: 29},{ from: 29, to: 38},{ from: 2, to: 23},{ from: 33, to: 28},{ from: 32, to: 33},{ from: 32, to: 23},{ from: 4, to: 28},{ from: 21, to: 6},{ from: 24, to: 34},{ from: 24, to: 25},{ from: 33, to: 23},{ from: 1, to: 6},{ from: 36, to: 29},{ from: 19, to: 7},{ from: 24, to: 23},{ from: 30, to: 7},{ from: 36, to: 37},{ from: 34, to: 37},{ from: 2, to: 14},{ from: 32, to: 2},{ from: 34, to: 36},{ from: 17, to: 35},{ from: 24, to: 28},{ from: 35, to: 12},{ from: 33, to: 2},{ from: 32, to: 4},{ from: 24, to: 13},{ from: 34, to: 4},{ from: 25, to: 15},{ from: 24, to: 27},{ from: 3, to: 38},{ from: 16, to: 21},{ from: 27, to: 23},{ from: 28, to: 39},{ from: 19, to: 30},{ from: 25, to: 23},{ from: 32, to: 14},{ from: 13, to: 39},{ from: 27, to: 28},{ from: 5, to: 30},{ from: 35, to: 20},{ from: 1, to: 20},{ from: 20, to: 6},{ from: 26, to: 30},{ from: 1, to: 17},{ from: 19, to: 38},{ from: 24, to: 29},{ from: 16, to: 18},{ from: 20, to: 21},{ from: 33, to: 36},{ from: 4, to: 36},{ from: 1, to: 21},{ from: 35, to: 21},{ from: 25, to: 27},{ from: 25, to: 3},{ from: 32, to: 9},{ from: 17, to: 20},{ from: 26, to: 38},{ from: 2, to: 29},{ from: 8, to: 14},{ from: 17, to: 12},{ from: 27, to: 29},{ from: 28, to: 36},{ from: 16, to: 35},{ from: 16, to: 6},{ from: 17, to: 21},{ from: 9, to: 4},{ from: 24, to: 4},{ from: 3, to: 29},{ from: 11, to: 6},{ from: 27, to: 13},{ from: 11, to: 21},{ from: 24, to: 36},{ from: 25, to: 30},{ from: 12, to: 6},{ from: 25, to: 19},{ from: 0, to: 7},{ from: 28, to: 38},{ from: 25, to: 29},{ from: 29, to: 23},{ from: 17, to: 11},{ from: 27, to: 38},{ from: 24, to: 3},{ from: 4, to: 39},{ from: 12, to: 20},{ from: 33, to: 14},{ from: 25, to: 26},{ from: 28, to: 29},{ from: 2, to: 36},{ from: 25, to: 38},{ from: 2, to: 22},{ from: 36, to: 39},{ from: 10, to: 27},{ from: 34, to: 27},{ from: 9, to: 33},{ from: 11, to: 20},{ from: 16, to: 20},
]);

// create a network
var container = document.getElementById("mynetwork");
var data = {
  nodes: nodes,
  edges: edges,
};
var options = {
  nodes: {
    shape: "circle",
  },
};
var network = new vis.Network(container, data, options);
