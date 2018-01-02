import Ember from 'ember';
import Publisher from './publisher';
import { hasMany } from 'ember-data/relationships';

export default Publisher.extend({
  books: hasMany('book', { async: true }),

  loadedAt: Ember.on('didLoad', function() {
    this.set('loadedAt', new Date());
  })

});