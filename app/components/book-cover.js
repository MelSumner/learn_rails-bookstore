import Component from '@ember/component';

export default Component.extend({
  classNames: ['list-item'],
  tagName: 'li',
  
  actions: {
    open() {
      this.get('book').reload().then(() => {
        this.set('isShowingModal', true);
      });      
    },

    close() {
      this.set('isShowingModal', false);
    }
  }
});
