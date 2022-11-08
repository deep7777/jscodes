/*
** Question 3
 
Suppose the tree

              1
             / \
            2   4
           /   / \
          3   5   6
is represented by the object

  tree = {
     value: 1,
     children: [ { value: 2,
                   children: [ { value: 3,
                                 children: []
                               }
                             ]
                 },

                 { value: 4,
                   children: [ { value: 5,
                                 children: []
                               },
                               {
                                 value: 6,
                                 children: []
                               }
                             ]
                 }
               ]
    }
 
How would you total up the "value" of all the nodes. For example, here
the answer would be 1 + 2 + 3 + 4 + 5 + 6 = 21.
*/

var tree = {
   value: 1,
   children: [{
         value: 2,
         children: [{
            value: 3,
            children: []
         }]
      },
      {
         value: 4,
         children: [{
               value: 5,
               children: []
            },
            {
               value: 6,
               children: []
            }
         ]
      }
   ]
}


// var output = 0;
// var str = '';

// // @param children is of type array

// function traverse(children) {
//   var chlen = children.length;
//   var k = 0
//   while (k < chlen) {
//     childObj = children[k];
//     k = k + 1;
//     iteratechild(childObj) // iterate the child object
//   }
// }

// // @param childObj is of type object

// function iteratechild(childObj) {
//   for (i in childObj) {
//     if (i.includes('value')) {
//       output = output + childObj[i];
//       str = str + ' + ' + childObj[i];
//     }
//     if (i.includes('children')) {
//       traverse(childObj[i]) // if child present then traverse till the end
//     }
//   }
// }

// // iterate the tree
// for (t in tree) {
//   if (t.includes('value')) {
//     output = output + tree[t];
//     str = tree[t];
//   } else if (t.includes('children')) {
//     var children = tree[t];
//     var chlen = children.length;
//     var j = 0;
//     while (j <= chlen) {
//       childObj = children[j];
//       j = j + 1;
//       iteratechild(childObj) // iterate the child object
//     }
//   }
// }

// console.log(str, '=', output);

function Q3(tree){
  let result = 0;
  
  function sumUp(object){
    
    result = result + object.value;
     
    !object.children.length ? 0 : object.children.filter(x => sumUp(x));

    return result;
  }
  console.log("Answer 3 :  Total count of the 'value' of all the nodes = ",sumUp(tree));

}

Q3(tree)