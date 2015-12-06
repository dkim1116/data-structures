//In a pseudoclassical instantiation

// ###Graph Solution

// Instantiate a new graph
// build a graph constructor
var Graph = function(){
  //creates a node property and set it to an empty object
  this.nodes = {};
  //creates a size property equals zero
  this.size = 0;

};

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(input){
  //Add the input value into the nodes' object as the key, 
  //with an empty array as the value to keep track of its edges
  this.nodes[input] = [];
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node){
  //iterate through the keys in the nodes' object
  for (var key in this.nodes) {
    //if the key matches the node, return true
    if (key === node) {
      return true;
    }
  };
  //else return false
  return false;
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node){
  //iterate through the keys in the nodes' object
  for (var key in this.nodes) {
    //if the key matches the node
    if (key === node) {
      //delete the key from the nodes' object, which gets rid of the value together
      delete this.nodes[key];
    }
  };
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode){
  //iterate through the fromNode's array with edges
  for (var i = 0; i < this.nodes[fromNode].length; i++) {
    //if an element inside the array matches toNode
    if (this.nodes[fromNode][i] === toNode){
      //return true
      return true;
    }
  };
  //else return false
  return false;
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode){
  // add toNode to the fromNode's array with edges 
  this.nodes[fromNode].push(toNode);
  // add fromNode to the toNode's array with edges
  this.nodes[toNode].push(fromNode);
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode){
  // iterate through the fromNode's array of edges
    for (var i = 0; i < this.nodes[fromNode].length; i++) {
      // check if the current element is the node that we're looking for
      if (this.nodes[fromNode][i] === toNode) {
        //if found, cut it out then put it together
        this.nodes[fromNode].splice(i,1);
      }
    };
    //repeat the other way
    for (var i = 0; i < this.nodes[toNode].length; i++) {
      if (this.nodes[toNode][i] === fromNode) {
        this.nodes[toNode].splice(i,1);
      }
    };
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb){
  //iterate through the keys in the main nodes' object
  for (var key in this.nodes) {
    //pass each key as an argument into the callback
    cb(key)
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



