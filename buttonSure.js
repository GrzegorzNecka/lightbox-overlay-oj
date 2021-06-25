import Vue from 'vue';

const buttonSure = () =>
  Vue.component('button-sure', {
    props: ['btnTxt'],
    template: `
    <button class="focus:outline-none py-1 px-2 md:py-2 md:px-3 w-24 mr-2 bg-black text-white rounded">{{btnTxt}}</button>
      `
  });

export default buttonSure;
