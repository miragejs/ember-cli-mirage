import Ember from 'ember';

let sequenceMap = {};

var store;
var setStore = function(passedStore) {
  store = passedStore;
};

var _factoryCreate = function(factory, modelName) {
  let obj = _factoryBuild(factory, modelName);
  let record;

  Ember.run(function(){
    let data = _.defaults(obj, {id: sequenceMap[modelName]});
    record = store.push(
      modelName,
      data
    );
  });
  return record;

};

var _factoryBuild = function(factory, modelName) {
  if (!sequenceMap.hasOwnProperty(modelName)) {
    sequenceMap[modelName] = 1;
  }
  return factory.build(sequenceMap[modelName]++);
};

var _getFactory = function(Factory, overrides={}) {
  let FactoryWithOverrides = Factory.extend(overrides);
  return new FactoryWithOverrides();
};

var build = function(Factory, modelName, overrides={}) {
  let factory = _getFactory(Factory, overrides);
  return _factoryBuild(factory, modelName);
};

var buildList = function(Factory, modelName, n, overrides={}) {
  let factory = _getFactory(Factory, overrides);
  let objects = [];
  for (let i = 1; i < n + 1; i++) {
    objects.push(_factoryBuild(factory, modelName));
  }
  return objects;
};

var make = function(Factory, modelName, overrides={}) {
  var factory = _getFactory(Factory, overrides);
  return _factoryCreate(factory, modelName);
};

var makeList = function(Factory, modelName, n, overrides={}) {
  let factory = _getFactory(Factory, overrides);
  let objects = [];
  for (let i = 1; i < n + 1; i++) {
    objects.push(_factoryCreate(factory, modelName));
  }
  return objects;
};

export {
  make,
  makeList,
  build,
  buildList,
  setStore
};
