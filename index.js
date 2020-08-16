
// DOM слайдер

   const left = document.querySelector("#left");
const right = document.querySelector("#right");
const itemsList = document.querySelector("#items");

const loop = (direction, e) => {
    e.preventDefault();

    if (direction == "right"){
        itemsList.appendChild(itemsList.firstElementChild);
    } else {
        itemsList.insertBefore(itemsList.lastElementChild, items.firstElementChild);
    }
}


right.addEventListener("click", e => {
   loop("right", e);

    
   
})

left.addEventListener("click", e => { 
    loop("left", e);




}) 
     
   

 







/* const computedStyles = window.getComputedStyle(itemsList);
const items = document.querySelectorAll(".item");
 */






/* const minRight = 0;
const itemWidth = getComputedStyle(items[0]).width;
const step = parseInt(itemWidth);
const presShownItems = 300 / step;
const maxRight = (items.length - presShownItems) * 150 ;

let currentRight = 0;

itemsList.style.right = currentRight;

right.addEventListener("click", e => {
    e.preventDefault();

    if (currentRight < maxRight) {
        currentRight += step ;
        itemsList.style.right = `${currentRight}px`;
    }
})

left.addEventListener("click", e => { 
    e.preventDefault();
    
    if (currentRight > minRight) {
        currentRight -= step ;
        itemsList.style.right = `${currentRight}px`;
    }
}) */
   



 /* rightBtn.addEventListener("click", e => {
    e.preventDefault();

    let currentRight = parseInt(computedStyles.right) 

    if (currentRight < 500){
        currentRight += 100;
        items.style.right = `${currentRight + 100}px`;
    }
   
});


    leftBtn.addEventListener("click", (e) => {
        e.preventDefault();
       let currentRight = parseInt(computedStyles.right); 

       if (currentRight > 0) {
           items.style.right = `${currentRight - 100}px`;
       }
    
});
  
 */


  // Модальное окно



  const openButton = document.querySelector("#openOverlay");
 const body = document.body;
 const successModal = createModal("The message has been sent");

 openButton.addEventListener("click", e => {
     body.appendChild(successModal);
     });

 function createModal(content) {   
      const overlayElement = document.createElement("div");
 overlayElement.classList.add("overlay");

 overlayElement.addEventListener("click", e => {
   if (!e.target.classList.contains("content")) {
       closeElement.click();
   }
   
    
 })

 const containerElement = document.createElement("div");
 containerElement.classList.add("modal-container");

 const contentElement = document.createElement("div");
 contentElement.classList.add("content");

 contentElement.innerHTML = content;

 const closeElement = document.createElement("a");
 closeElement.classList.add("close");
 closeElement.textContent = "x";
 closeElement.href = "#";

 closeElement.addEventListener("click", e => {
     e.preventDefault();
     body.removeChild(overlayElement);
 });


 overlayElement.appendChild(containerElement);
 containerElement.appendChild(closeElement);
 containerElement.appendChild(contentElement);

 return  overlayElement;

}  

// ннн

/*  if (e.target == overlayElement ){
        closeElement.click();
     }
      */

// #1 Создание и работа с DOM

const quantitySelector = document.querySelector(".quantity-selector");
const colorSelector = document.querySelector(".color-selector");
const blocksContainer = document.querySelector(".blocks");

const createMarkup = quantity => {
    let markup = "";

    for (let i = 0; i < quantity; i++) {
        const block = document.createElement("div");
        block.className = "item";
        block.innerText = i + 1;
  
        markup += block.outerHTML;
    }
    return markup;
};

quantitySelector.addEventListener("change", e => {
  const quantity = e.target.value;
  const markup = createMarkup(quantity);
 
 blocksContainer.innerHTML = markup;
});

const colorTheBlock = (block, color) => {
    block.style.backgroundColor = color;
};

let changed = false;



colorSelector.addEventListener("change", e => {
    const color = e.target.value;
    const items = blocksContainer.querySelectorAll(".item");

    changed = !changed;

    for (let i = 0; i < items.length; i++) {
        const currentBlock = items[i];
        const blockNumber = i + 1;
        let colorToApply = "";

        if (changed) {
            colorToApply = blockNumber % 2 != 0  ? color : "#fff";
           
        } else {
            colorToApply = blockNumber % 2 == 0 ? color : "#fff";    
        } 

        colorTheBlock(currentBlock, colorToApply); 
    }
});

