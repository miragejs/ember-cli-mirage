import SerializerRegistry from 'ember-cli-mirage/serializer-registry';
import Serializer from 'ember-cli-mirage/serializer';
import schemaHelper from '../schema-helper';
import { module, test } from 'qunit';

module('Integration | Serializers | Base | Array of Models', {
  beforeEach() {
    this.schema = schemaHelper.setup();
    this.schema.wordSmith.create({ id: 1, title: 'Link' });
  },
  afterEach() {
    this.schema.db.emptyData();
  }
});

test(`it applies correct serializer when the response is an array of models`, function(assert) {
  assert.expect(1);

  let wordSmiths = this.schema.wordSmith.all().filter(() => true);
  let registry = new SerializerRegistry(this.schema, {
    wordSmith: Serializer.extend({
      serialize(response, request) {
        assert.ok('serializer ran');
        return {};
      }
    })
  });

  registry.serialize(wordSmiths);
});
