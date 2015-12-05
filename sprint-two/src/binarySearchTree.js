var BinarySearchTree = function(value){
  var obj = Object.create(BinaryMethods)
  obj.left = null;
  obj.right = null;
  obj.value = value;
  
  return obj;
};

var BinaryMethods = {};


BinaryMethods.insert = function(input){
  //RECURSION
  var thiz = this;
  //Base case
    //If this.value equals input, return to exit out of recursion
  //else if this.value is greater than input, recur with this.left
  //else recur with this.right
  if(thiz.contains(input)){
    console.log("Its chillin")
  } else {
    //If it isnt contained
    var recursiveFunction = function(x){
      //if thiz.value is less than target, recursively call with thiz.right
      // if(thiz.value === null){
        // thiz.value = input;
    // console.log(thiz)
      if (x.value < input) {
        if (x.right === null) {
          x.right = BinarySearchTree(input);
        } else {
        recursiveFunction(x.right);
        }
      } else if( x.value > input ){
        if(x.left === null){
          // BinarySearchTree
          x.left = BinarySearchTree(input);
        } else {
          recursiveFunction(x.left);
        }
      } 
      //if thiz.value is greater than target, recursively call with this.left
      //if this.value is null, then assign input into the nodddddde
    }
    recursiveFunction(thiz)
  }
};
BinaryMethods.contains = function(target){
  //RECURSION
  var thiz = this;
    var result = false;
  //Base case'
  // if(!result){
    function recFun (input) {
      if(!result){
    if(input.value === target){
      // console.log('input',input)
      // console.log('target', target)
    //If input.value equals target, return true
        result = true;
      } else if(input.value < target) {
        if(input.right !== null){
        recFun(input.right)     

        }
      //else if input.value is less than target, recursively call contains in input.right
      } else if(input.value > target) {
        if(input.left !== null){
        recFun(input.left)
      }
      }
    //   for(var key in this) {

    //   }
    //   if(this.value === target){
    //     return (switched = true);
    //   }
     } else {
      return 
     }   
    }
    // console.log(result)
    recFun(thiz)
      return result
  //else if this.value is greater than targetrecursively call contains in this.left
  //else if this.value = null return false

};
BinaryMethods.depthFirstLog = function(cb){
  //
  cb(this.value)
  cb(this.left.value)
  cb(this.left.right.value)
  // console.log(this)
  // return [5,2,3] 
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
