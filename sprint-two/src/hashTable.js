var HashTable = function(){

  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

  //Get the info at the index, and add da new data 
  //to it, then put it back in with an array with data  
    //If there is a subarray at the index, then push the next value in dere, wif the key
    //If inside the subarray, there is da same key, den over rite da value

HashTable.prototype.insert = function(k, v){
  // get data at index
  var i = getIndexBelowMaxForKey(k, this._limit);
  console.log(i);
  // save data to a variable
  var returnArr = this._storage.get(i);
  console.log('return array in insert',returnArr)
  // if its null or undefined
  if ( returnArr === null || returnArr === undefined) {
    // put key and value in an array.
    // returnArr = [k,v];
    this._storage.set(i,[k,v])
  } else {
    // if it isnt null or undefined iterate
    for (var i = 0; i < returnArr.length; i++) {
      if (returnArr[i] === k) {
        returnArr[i+1] = v;
        return this._storage.set(i,returnArr);
      } else {
        returnArr.push(k,v);
        return this._storage.set(i,returnArr);
      }
    };
  // else push key and value into exsisting array.
  }
};
  //At the index, if there is nothing in it, then then return null
  //Otherwise, iterate through da subarray, and return the index of key + 1
        // console.log(returnArr)

HashTable.prototype.retrieve = function(k){
  // get index for our key
  var i = getIndexBelowMaxForKey(k, this._limit);
  // get data with the special index and save to a variable.
  var returnArr = this._storage.get(i);
  console.log('this is the return array in retrieve',returnArr)
  // if the variable is undefined
  if ( returnArr === undefined ) {
    // change the value to null.
    returnArr = null
    console.log(i);
    // return returnArr.
    return returnArr;  
  } else {
  // else iterate through the sub array
    for (var i = 0; i < returnArr.length; i++) {
      if (returnArr[i] === k) {
        // return the value at index of key + 1
        return returnArr[i+1];
      }
    };
  };
};

  //using the same var i line above, get the special i of the key, then go to the i at the storage, then iterate through the subarray, den remove the value at the key and key + 1
HashTable.prototype.remove = function(k){
  // get index for our key
  var i = getIndexBelowMaxForKey(k, this._limit);
  // get data with the special i and save to a var
  var returnArr = this._storage.get(i);
  // if the variable isnt undefined or null.
  if (returnArr !== undefined || returnArr !== null) {
    // iterate through find the position of the key.
    for (var i = 0; i < returnArr.length; i++) {
      if (returnArr[i] === k ) {
        // returnArr[i] = null;
        returnArr[i + 1] = null;  
        return this._storage.set(i,returnArr);
      }
        console.log(this._storage.get(i))
    }
  } else {
    return null;
  }
  // splice 2 values at the index.
};

 

/*
 * Complexity: What is the time complexity of the above functions?
 */
