//Build a tree constructor
var Tree = function(value){
  //Save a reference to an empty object in a variable newTree
  var newTree = {};
  //Set the value property equal to the argument
  newTree.value = value;

  //Create the children property and set it equal to null
  newTree.children = null;  
  //copy the treeMethod's properties into newTree
  myExtend(newTree, treeMethods)
  //return the instance of Tree
  return newTree;
};

//Make a function that copies properties from one object to the other
var myExtend = function(to, from){
  for(var key in from){
    to[key] = from[key]
  }
}

//Create an empty object to store shared methods
var treeMethods = {};

//Create a new tree instance and add it on to the existing node
treeMethods.addChild = function(value){
  //If the node doesnt have children, set it to an empty array
  if(this.children === null){
    this.children = [];
  }
  //push a new tree instance onto to an existing node's children array
  this.children.push(Tree(value))
};

//Recursively search a tree for the target value
treeMethods.contains = function(target){
  //Make a switch, then set it to false
  var result = false;
  //Define our recursive function which takes in a node
  var recursiveFunction = function(x){
    //iterate through the passed in node's children array
    for(var i =0; i<x.children.length; i++){
      //check each child's value against the target
      if(x.children[i].value === target){
        //if you find a match, flip the switch
        result = true;
      }
      //if a child's child exists
      if(x.children[i].children !== null){
        //recursivelycall the recursivefunction with each child
      recursiveFunction(x.children[i])
      }
    }
  }
  //Initiate the recursive calls with the node that called contains
  recursiveFunction(this);
  //return the switch
  return result;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
//LINEAR???