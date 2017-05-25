import Mirage from 'ember-cli-mirage';
import Model from 'ember-cli-mirage/orm/model';
import Schema from 'ember-cli-mirage/orm/schema';
import Db from 'ember-cli-mirage/db';
import {module, test} from 'qunit';

module('Integration | ORM | Relationships', {
  beforeEach() {
    let db = new Db();
    let schema = new Schema(db);

    let Listing = Model.extend({
      cart: Mirage.belongsTo()
    });
    let Cart = Model.extend({
      listing: Mirage.hasMany()
    });

    schema.registerModels({
      cart: Cart,
      listing: Listing
    });
    
    this.favorites = schema.create('cart', {
      name: 'Favorites'
    });
    this.hidden = schema.create('cart', {
      name: 'Hidden'
    });

    this.silkStreet = schema.create('listing', {
      address: 'Silk Street'
    });
    this.otherAve = schema.create('listing', {
      address: 'Other Ave',
      cart: this.hidden
    });
  }
});

test('Updating a relationship via association ids should correctly update the associations of other records', function(assert) {
  assert.expect(2);
  let { silkStreet, otherAve, favorites, hidden } = this;
  favorites.listingIds = [silkStreet.id, otherAve.id ];

  assert.equal(favorites.listingIds.length, 2, 'favorites should have two listings');
  assert.equal(hidden.listingIds.length, 0, 'hidden should have zero listings');
});

test('Updating a relationship via associations should correctly update the associations of other records', function(assert) {
  assert.expect(2);
  let { silkStreet, otherAve, favorites, hidden } = this;
  favorites.listings = [silkStreet, otherAve];

  assert.deepEqual(favorites.listings, [silkStreet, otherAve], 'favorites should have two listings');
  assert.deepEqual(hidden.listings, [], 'hidden should have zero listings');
});

