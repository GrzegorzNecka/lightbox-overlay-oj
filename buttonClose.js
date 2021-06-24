import Vue from 'vue';

const buttonClose = () =>
  Vue.component('button-close', {
    props: ['lightboxState'],
    template: `
    <div 
    
        v-on:click=" $emit('button', !lightboxState)"
    
        class="absolute right-0 top-0 -mr-2 -mt-2 border cursor-pointer shadow-lg 
        
        bg-white z-10 p-1 rounded-full p-2">
        
    <img src="https://image.flaticon.com/icons/svg/151/151882.svg" class="w-2 h-2">
    
    </div>
    
      `
  });

export default buttonClose;
