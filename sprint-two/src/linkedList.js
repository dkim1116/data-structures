var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;
  
  // a method to add a node to the end of a list and create the nec references
  list.addToTail = function(value){
      //Create a new node
      var newNode = Node(value);
      //If there is no tail, 
      if(list.tail === null){
      //make the node the tail.
        list.tail = newNode;
      }
      //if there there is a tail
      else {
        // make the new tail and assign a reference to it on the already existing tail
        list.tail.next = newNode;
        // then overwrite the already existing tail with the already made reference to our new node
        list.tail = list.tail.next;
      }
      // if there is no head
      if(list.head === null) {
        // make the tail the head
        list.head = list.tail;
      }
    };
    // returns the head and removes it. Then makes next node the head
    list.removeHead = function(){
      // save the already existing head value into a seperate var.
      var returnVal = list.head.value;
      // overwrite the head with the next node.
      list.head = list.head.next
      // return the removed heads value.
      return returnVal;
    };
    // recursively checks the list for the target
    list.contains = function(target){
    // create a switch var, that turns true when found and exits the recursive call
    var switch1 = false;
    // if the heads value equals the target.
    if(this.head.value === target){
      // flip the switch.
      switch1 = true;
    } else {
    // make a seperate function for a conditional. 
    var recFun = function(x){
      // if the argument's value equals the target.
      if(x.value === target){
        // flip the switch.
        switch1 = true;
      } else {
        // if there is a next value of the passed in arg.
        if(x.next !== null){
          // recursively call itself with the next value.
          recFun(x.next);
        } 
      }
    }
    // start the recursion by invoking recFun with the list's head
    recFun(this.head);
  }
  // return the switch
  return switch1;
}
    // return the list
    return list;
  };
  // Build a node constructor
  var Node = function(value){
    // create a node var and set it to an empty obj.
    var node = {};
    // set the value property to the argument
    node.value = value;
    // set the next property to null.
    node.next = null;
    // return the constructed node instance
    return node;
  };

/*
 * Complexity: What is the time complexity of the above functions?
 */
//LINEAR