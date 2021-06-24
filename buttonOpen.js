import Vue from 'vue';

const buttonOpen = () =>
  Vue.component('button-open', {
    template: `
    <button class="bg-orange-500 text-white p-2 rounded m-5">I want to do it!</button>
      `
  });

export default buttonOpen;
