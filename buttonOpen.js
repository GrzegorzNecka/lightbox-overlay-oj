import Vue from 'vue';

const buttonOpen = () =>
  Vue.component('button-open', {
    props: ['lightboxState', 'buttonOpenTitle'],
    computed: {
      setActiveClass: function() {
        return !this.lightboxState;
      }
    },
    template: `
    <div v-bind:class="{ 'hidden' : setActiveClass }">
        <button 

        v-on:click=" $emit('button', !lightboxState)"

        class="bg-orange-500 text-white p-2 rounded m-5">{{buttonOpenTitle}}</button>
    </div>
      `
  });

export default buttonOpen;
