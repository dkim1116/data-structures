var Tree = function(value){
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = null;  // fix me
  myExtend(newTree, treeMethods)
  return newTree;
};


var myExtend = function(to, from){
  for(var key in from){
    to[key] = from[key]
  }
}
  // your code here
  // newTree.children = null;  // fix me


var treeMethods = {};

treeMethods.addChild = function(value){
  if(this.children === null){
    this.children = [];
  }
  this.children.push(Tree(value))
};

treeMethods.contains = function(target){
  var result = false;
  var recursiveFunction = function(x){
    for(var i =0; i<x.children.length; i++){
      if(x.children[i].value === target){
        result = true;
      }
      if(x.children[i].children !== null){
      recursiveFunction(x.children[i])
      }
    }
  }
  recursiveFunction(this);
  return result;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
//LINEAR???