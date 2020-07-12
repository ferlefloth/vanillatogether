/*
===========================================================================================================================

==================================
Vanilla JS \ CLONES
==================================

1
Create a function that stacks n clones behind the a target element.
This function should create and append each clone behind the target, while assigning a background color following
the order of a static array of colors.

2
Clones will be displayed when the user clicks the main container.
Once the click is fired, clones should move down stacking one below the other on a single column.
A video reference is provided with the desired behaviour.


RULES:
- HTML should NOT be edited.
- LIBRARIES ARE NOT ALLOWED. Only good old js.
- Clones amount is an integer value.
- Color array can have any number of colors declared.
- Color order must be followed.


Tips:
- Use the video as reference, it's just more simple to understand.
- JS and CSS are both aviliable to edit, use it!
- If you have questions related to the challenge, just ask.

===========================================================================================================================
 */
// Deleting this line = cheating.
"use strict";

const palette = ["F38785", "C9CBA6", "EA4A66"];
const margin = 10;

var container;
var elems;
var box;

var isOpen = false;

/**
 * Create n clones and append the behind the target element.
 * @param {HTML Element} target 
 * @param {int} numberOfClones 
 */

//1- Hacer un bucle que cree N CLONES y haga el push ---------->OK 
//2- Modificar clone que coincida con margin y estilo en base a los datos dados

 function createOffsetClones(target, numberOfClones){
  let createdElements = [];
  let indice=0
  
  for(let i=0; i<numberOfClones; i++){
   
    target.style.margin = 10
    
    
   //target.style.backgroundColor= palette[indice]

    
    
    var cln = target.cloneNode(true);
    createdElements.push(cln)
    
 
    
    if(indice==3){

      indice=0
  
    }
    cln.style.backgroundColor= palette[indice]
    indice=indice+1
    cln.classList.add("clonebot");
  }

  return createdElements;

}


function hideElemnts(){

  isOpen=false

  var cloneToHide=  Array.from(document.getElementsByClassName('clonebot'));
  
  //alert(cloneToHide)
  
  cloneToHide.forEach(element => {
     element.parentNode.removeChild(element);
   });

}



function displayedOffSetClones(createdElements,container){
  
  isOpen=true

  createdElements.forEach(element => {
    
    container.appendChild(element)  
  });
  
  
}

/**
 * The function to execute when the container is clicked. This should trigger the transition of the clones!
 * @param {MouseEvent} event 
 */

 function click(event){

    
      if (typeof event === 'object') {
        switch (event.container) {
          case 0:
            
            alert('Estas cliqueando otra cosa');
            break;


          default:
           
            if(isOpen === false){
              displayedOffSetClones(elems,container)
            }else{
              hideElemnts()
            }
        }
      }

}




// container element reference. This should be clicked. // ---------> OK
container = null;
container= document.getElementsByClassName('container')[0]
console.log(container)

// box element reference. This should be cloned.---------> Clonar el elemento box

box = null;
box= document.getElementsByClassName('box')[0]
console.log(box)


// get the elemens
elems = createOffsetClones(box, 12);

container.addEventListener("click", click);
//createOffsetClones(box, 12)