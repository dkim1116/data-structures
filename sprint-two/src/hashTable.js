var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._storage.each(function (value, key, list) {
    list[key] = [];
  });
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(i,v)
  // console.log(this._storage)

};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  
  return this._storage.get(i);

};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(i,null);  
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
