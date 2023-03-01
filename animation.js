const animItems = document.querySelectorAll('.__anim-items');

if(animItems.length>0){
   window.addEventListener('scroll',animOnScroll);
   function animOnScroll(params){
      for( let index=0; index< animItems.length; index++){
         const animItem = animItems[index];
       
         const animItemHeight = animItem.offsetHeight;
         
         const animItmeOffset = offset(animItem).top;
         const animStart = 4;

         let animItemPoint = window.innerHeight - animItemHeight / animStart;

         if(animItemHeight > window.innerHeight){
            animItemPoint = window.innerHeight - window.innerHeight / animStart;
         }
         if((window.scrollY > animItmeOffset - animItemPoint) && window.scrollY < (animItmeOffset + animItemHeight)){
            animItem.classList.add('_active');
          } else {
            animItem.classList.remove('_active');
          }
      
      } 
   }
   function offset(el){
      const rect = el.getBoundingClientRect(),
      scrollLeft = window.scrollY || document.documentElement.scrollLeft,
      scrollTop = window.scrollY || document.documentElement.scrollTop;
      return { top: rect.top + scrollTop, left: rect.left + scrollLeft}
   }
   animOnScroll();
}


