'use strict';

const modal=document.querySelector('.modal');
const overlay=document.querySelector('.overlay');
const closeBtn=document.querySelector('.close-modal');
const openModal=document.querySelectorAll('.show-modal');


function show(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}
function hide(){
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
}

// show the modal
for(let i=0;i<openModal.length;i++){
    openModal[i].addEventListener("click",show);    
}
// close the modal
closeBtn.addEventListener("click",hide);
document.addEventListener("keydown",function(e){
    if(e.key==='Escape' && !modal.classList.contains('hidden')){
        hide();
    }
});
