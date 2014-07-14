import Ember from 'ember';

var cache = {};

export default Ember.Object.extend({
  find: function(name, id) {

    if (cache[name] && cache[name][id]) {
      return cache[name][id];
    }

    var adapter = this.container.lookup('adapter:' + name);
    return adapter.find(name, id).then(function(record) {
      cache[name] = cache[name] || {};
      cache[name][id] = record;
      return record;
    });
  }
});

