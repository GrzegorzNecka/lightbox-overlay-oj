import Vue from 'vue';

import buttonOpen from './buttonOpen';
import lightbox from './lightbox';

buttonOpen();
lightbox();

new Vue({
  el: '#app',
  data: {
    lightboxState: true,
    lightbox: {
      title: 'Popup Title',
      content: 'hey! Are u sure u want to do this?',
      btnAcceptTitle: 'Sure!',
      btnUnAcceptTitle: 'Nope'
    },
    buttonOpenTitle: 'I want to do it!'
  },
  methods: {
    updateState: function(state) {
      this.lightboxState = state;
    }
  }
});
