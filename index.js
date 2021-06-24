import Vue from 'vue';

import buttonOpen from './buttonOpen';
import lightbox from './lightbox';

buttonOpen();
lightbox();

new Vue({
  el: '#app',
  data: { lightboxState: true },
  methods: {
    updateState: function(state) {
      this.lightboxState = state;
    }
  }
});
