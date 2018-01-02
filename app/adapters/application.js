import Ember from 'ember';
import JSONAPIAdapter from 'ember-data/adapters/json-api';
import { pluralize } from 'ember-inflector';

const { String: { underscore } } = Ember;

export default JSONAPIAdapter.extend({

  pathForType(type) {
    return pluralize(underscore(type));
  }

});

