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
  edges: {
  	color: {
  		inherit: "both"
  	},
  	selectionWidth: 8,
  },
  layout: {
    randomSeed: 191006,    // Optional; insert your value here
    improvedLayout: true
  },

  physics: {
    enabled: true,
    // stabilization: {
    //   iterations: 20     // Change this to whatever is convenient for you
    // }
  },
};
var network = new vis.Network(container, data, options);
