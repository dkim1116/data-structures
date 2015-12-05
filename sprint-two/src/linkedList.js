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
  //   for(var key in list){
  //     if(list[key].value===target){
  //       return true;
  //     } 
  //   }
  // console.log(this)
  //   return false;
  var switch1 = false;
// console.log(this.head.next.next.value)
  if(this.head.value === target){
    return true;
  } else {
    var recFun = function(x){
      console.log(switch1);
      // if(!switch1){
      if(x.value === target){
        switch1 = true;
      } else {
        if(x.next !== null){
          recFun(x.next)
        } 
      }
    }
    console.log(this)
    recFun(this.head);
  }
  return switch1;
}

  // var recFun = function(x){
  //   if(x.value === target){
  //         // console.log(x.value)
  //         switch1 = true;
  //         return
  //       } else if(this.next !== null && this.next !== undefined){
  //         // console.log('hi')
  //         recFun(this.next)
  //       } 
  //     }

  //     recFun(this.head)

  //     return switch1
  //   };

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