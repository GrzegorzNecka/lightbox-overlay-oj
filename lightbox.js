import Vue from 'vue';
import buttonClose from './buttonClose';
import buttonSure from './buttonSure';
import buttonNope from './buttonNope';

buttonClose();
buttonSure();
buttonNope();

const lightbox = () =>
  Vue.component('lightbox', {
    props: ['lightboxState', 'updateState', 'lightbox'],
    data: function() {
      return {
        lightbox: this.lightbox
      };
    },
    computed: {
      setActiveClass: function() {
        console.log(this.lightboxState);
        return this.lightboxState;
      }
    },
    template: `
    <div v-bind:class="{ 'hidden' : setActiveClass } ">
    
    <div class="h-screen absolute left-0 top-0 bottom-0 right-0 flex justify-center items-center bg-black
    
    ">
      <div class="bg-white rounded md:w-1/3 w-1/2 border shadow-lg">
        <div class="rounded-t bg-orange-500">
          <div class="relative py-3 px-2 flex">
            <span class="font-semibold text-white md:text-base text-sm">{{lightbox.title}}</span>

          <button-close
          
          v-on:button="updateState"
          
          ></button-close>
          
         </div>
        </div>
        <div class="bg-gray-200 md:text-base text-sm border-b p-2 h-24">
            <p>{{lightbox.content}}</p>
          </div>
          <div class="p-2 flex justify-end rounded-b">

           <button-sure
             v-bind:btn-txt = 'lightbox.btnAcceptTitle'
           />

           <button-nope
           v-bind:btn-txt = 'lightbox.btnUnAcceptTitle'
           />
          
           </div>
      </div>
    </div>
    </div>
      `
  });

export default lightbox;
