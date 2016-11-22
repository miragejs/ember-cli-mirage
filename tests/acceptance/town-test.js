import {test} from 'qunit';
import moduleForAcceptance from '../helpers/module-for-acceptance';

let town;

moduleForAcceptance('Acceptance | Pets', {
  beforeEach() {
    town = server.create('address/town');
  }
});

test('I can use nested models', function(assert) {
  assert.ok(!!town, 'the server has properly recognized the nested model');
});
