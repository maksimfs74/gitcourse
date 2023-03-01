const popup = document.getElementById('popup');
const popup__inner = document.getElementById('popup__inner');
const body = document.getElementsByTagName('body')[0];
const btns = document.querySelectorAll('.popup__btn');
const btnOnTop = document.getElementById('btn__top');
const close__btn = document.getElementById('close__btn');
btnOnTop.addEventListener('click',()=>{
   window.scrollTo({
      top:0,
      behavior:"smooth"
   })
})
btns.forEach((button)=>{
   button.addEventListener('click',()=>{
      showPopup();
   })
})

const closePopup = () =>{
   popup.classList.remove('__show');
      popup__inner.classList.remove('__show');
      body.classList.remove('__lock')
}

close__btn.addEventListener('click', ()=>{
closePopup();
})

const showPopup = function(){
   popup.classList.toggle('__show');
   popup__inner.classList.toggle('__show');
   body.classList.add('__lock')
}


document.addEventListener('click',(e)=>{
   let click = e.target.classList.value;
   console.log(e.target)
   if(click == 'popup__inner __show'){
      closePopup();
   }
})
document.addEventListener('keydown',(e)=>{
   if(e.keyCode === 27){
      closePopup();
   }
})


///


const burer__btn = document.getElementById('burger');
const burger__menu = document.getElementById('burger__inner')
burer__btn.addEventListener('click',()=>{
   burer__btn.classList.toggle('__active');
   burger__menu.classList.toggle('isvisible');
   body.classList.toggle('__lock')
})


