// prototypal instantiation 
// build a set constructor 
var Set = function(){
  // 
  var set = Object.create(setPrototype);
  set._storage = undefined;
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
  if(this._storage === undefined){
    this._storage = [];
  }
  // for (var i = 0; i < this._storage.length; i++) {
    // if(this._storage[i] !== item){
    // }
  // };
  if(this.contains(item) === false){
    this._storage.push(item)  
  }
};

setPrototype.contains = function(item){
  for (var i = 0; i < this._storage.length; i++) {
    if(this._storage[i] === item){
      return true;
    }
  };
  return false;
};

setPrototype.remove = function(item){
  for (var i = 0; i < this._storage.length; i++) {
    if(this._storage[i] === item){
      this._storage.splice(i,1);
    }
  };
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
//Astronomical