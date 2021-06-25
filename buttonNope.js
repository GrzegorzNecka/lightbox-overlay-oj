import Vue from 'vue';

const buttonNope = () =>
  Vue.component('button-nope', {
    props: ['btnTxt'],
    template: `
    <button class="focus:outline-none py-1 px-2 md:py-2 md:px-3 w-24 bg-white text-black rounded">{{btnTxt}}</button>
      `
  });

export default buttonNope;
