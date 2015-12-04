var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
      //Create a new node, link the last node to new node, 
      //then make new node the tail
      var newNode = Node(value);
      //If there is no tail, make a node
      if(list.tail === null){
      list.tail = newNode;
    }
      //Once the tail exists,
      else {
      list.tail.next = newNode;
      list.tail = list.tail.next;
      }

    if(list.head === null){
      list.head = list.tail;
    }


  };

  list.removeHead = function(){
    var returnVal = list.head.value;
    list.head = list.head.next
    return returnVal;
  };

  list.contains = function(target){
    // var switch1 = false;
    for(var key in list){
      if(list[key].value===target){
        return true;
      } 
    }
    return false;
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
//LINEAR