import Ember from 'ember';
import Controller from '@ember/controller';

const { computed } = Ember;

export default Controller.extend({
  queryParams: ['limit'],
  limit: 6,

  total: computed('model.meta', function() {
    return this.get('model.meta').total;
  }),

  showAll: computed('total', 'model', function() {
    return this.get('total') > this.get('model.length');
  })
});
