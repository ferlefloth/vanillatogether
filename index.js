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

var isOpen = false; // Esto es un Flag que se implementara papra mostrar y esconder los clones que se muestran por pantalla, por defecto, no muestra ningún clon 

/**
 * Create n clones and append the behind the target element.
 * @param {HTML Element} target 
 * @param {int} numberOfClones 
 */


 function createOffsetClones(target, numberOfClones){ //el parámetro que se pasa por target, es BOX y el numberOfClones la cantidad total de clones que se quieren crear
  let createdElements = [];
  let indice=0  //Contador que determina el indice de los colores de la variable Pallete
  
  for(let i=0; i<numberOfClones; i++){ //Por cada número de clones a crear :
   
    target.style.margin = 10 
    

    var cln = target.cloneNode(true); 
    createdElements.push(cln)  //se puseha  el clon a el array created elements
    
 
    
    if(indice==3){ //Se resetea el valor del indice de la variable pallete (colores)

      indice=0
  
    }
    cln.style.backgroundColor= palette[indice]
    indice=indice+1
    cln.classList.add("clonebot"); //se le agrega una class a ese cln , llamada clonebot
  }

  return createdElements;

}


function hideElemnts(){ //Función que esconde los clones mostrador por pantalla

  isOpen=false //Vuelve el flag a false

  var cloneToHide=  Array.from(document.getElementsByClassName('clonebot')); //introduce los clonebot dentro de un array para luego eliminarlos
  

  cloneToHide.forEach(element => {  //de cada elemento de la array CloneToHide, se elimina cada clone
     element.parentNode.removeChild(element);
   });

}



function displayedOffSetClones(createdElements,container){
  
  isOpen=true //Flag que activa la funcion para que se muestrn los clones

  createdElements.forEach(element => { //De cada elemento  de CreatedElements se adjunta a el Container que tiene una disposición en columna
    
    container.appendChild(element)  
  });
  
  
}

/**
 * The function to execute when the container is clicked. This should trigger the transition of the clones!
 * @param {MouseEvent} event 
 */

 function click(event){

    
      if (typeof event === 'object') {
        switch (event.container) { //Se escucha a la variable container y se propone 2 casos.
          case 0:
            
            alert('Estas cliqueando otra cosa'); // En el caso que no escuche a el container.
            break;


          default:
           
            if(isOpen === false){     
              displayedOffSetClones(elems,container)  //Esta funcion activa y muestra por pantalla los clones
            }else{
              hideElemnts() //esta función hace que se escondan los clones que se muestran por pantalla
            }
        }
      }

}




// container element reference. This should be clicked. // 
container = null;
container= document.getElementsByClassName('container')[0] //El getElementsByClassName devuelve los elementos en una HtmlObjetCOLLLETCTION con una clase (similar a un Array), como bien dice el enunciado, no se modificó el HTML. El getElementById es mucho más manipulable.
console.log(container)

// box element reference. This should be cloned.
box = null;
box= document.getElementsByClassName('box')[0] //El getElementsByClassName devuelve los elementos en una HtmlObjetCOLLLETCTION con una clase (similar a un Array), como bien dice el enunciado, no se modificó el HTML. El getElementById es mucho más manipulable.
console.log(box)

////////////////////Ejecución del click///////////////////
// get the elemens
elems = createOffsetClones(box, 12);
container.addEventListener("click", click); //Se llama un AddEventListener que disparará la funcion CLICK para que luego se ejecuten 2 posibles opciones
//createOffsetClones(box, 12)