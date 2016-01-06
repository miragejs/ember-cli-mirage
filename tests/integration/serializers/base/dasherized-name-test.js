import SerializerRegistry from 'ember-cli-mirage/serializer-registry';
import Serializer from 'ember-cli-mirage/serializer';
import schemaHelper from '../schema-helper';
import {module, test} from 'qunit';

module('Integration | Serializers | Base | Dasherized Name', {
  beforeEach() {
    this.schema = schemaHelper.setup();
    this.registry = new SerializerRegistry(this.schema, {
      'rofl-copter': Serializer.extend({
        attrs: ['id', 'length']
      })
    });
    this.roflCopters = [
      {id: '1', length: '0.5em', color: 'blue'},
      {id: '2', length: '1em', color: 'mauve'}
    ];
    this.schema.db.loadData({
      roflCopters: this.roflCopters
    });
  },
  afterEach() {
    this.schema.db.emptyData();
  }
});

test(`a serializer with a dasherized name can be used`, function(assert) {
  let result = this.registry.serialize([this.schema.roflCopter.all()]);

  assert.deepEqual(result, {
    roflCopters: [
      {id: '1', length: '0.5em'},
      {id: '2', length: '1em'}
    ]
  });
});
