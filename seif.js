

//add element 
//compteur ajout +1 

let plusBtn = document.getElementsByClassName('btn-plus');

console.log(plusBtn);

for (let plus of plusBtn) {
  plus.addEventListener('click', function () {
    plus.previousElementSibling.innerText++;
   
  });

}


//diminuer 

let minusBtn = document.getElementsByClassName('btn-moins');
for(let minus of minusBtn){

minus.addEventListener('click', function (){

if ( minus.nextElementSibling.innerText >0 ){
    minus.nextElementSibling.innerText--;
}

})

};




//delete:


let deletebtn = document.querySelectorAll('.btn-delete');

for (let i=0 ; i < deletebtn.length ;i++){
    deletebtn[i].addEventListener('click', function(){
        deletebtn[i].parentElement.parentElement.remove();
       
    })
  
 
}


//changement de couleur 

let hearts=document.getElementsByClassName('fa-heart');

console.log(hearts,'hearts')

for(let colors of hearts ){
  colors.addEventListener('click',function(){
    if(colors.style.color === 'gray' ){
      colors.style.color="red"
    }else{
      colors.style.color = "gray"
    }
  })
}