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
  	selectionWidth: 5,
  },
  layout: {
    randomSeed: 191006,    // Optional; insert your value here
    improvedLayout: false
  },

  physics: {
    enabled: false,
    stabilization: {
      iterations: 1     // Change this to whatever is convenient for you
    }
  },
};
var network = new vis.Network(container, data, options);
