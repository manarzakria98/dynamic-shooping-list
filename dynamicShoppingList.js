var list = document.querySelector('ul');
var button = document.querySelector('button');
var input = document.querySelector('input');

// Enter Handler
input.addEventListener("keyup", function(event){
    if(event.keyCode === 13) {                                             // Enter code
       button.click();
      }
})
     
button.addEventListener("click", myListItem);                            // addItem Button


function myListItem(){
   
   var letters = /^[A-Za-z]+$/;                                          //letters only
   if(input.value.match(letters)) {
        var myItem = input.value;
      
      const listItem = document.createElement('li');                           //create li dynamic
      const listText = document.createElement('span');                         // create span
      const listBtn = document.createElement('button');                        // create delete button

      listItem.appendChild(listText);
      listText.textContent = myItem;
      input.value = '';
      listItem.appendChild(listBtn);
      listBtn.textContent = 'Delete';
      list.appendChild(listItem);


      listBtn.addEventListener("click", () =>{
         list.removeChild(listItem); 
      });

      input.focus();
   }
}
