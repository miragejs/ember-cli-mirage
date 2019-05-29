import Schema from "ember-cli-mirage/orm/schema";
import Model from "ember-cli-mirage/orm/model";
import Db from "ember-cli-mirage/db";
import Collection from "ember-cli-mirage/orm/collection";
import { module, test } from "qunit";

const mockedInflector = {
  inflector: { singularize: () => "", pluralize: () => "" }
};

module("Integration | ORM | #all", function() {
  test("it can return all models", function(assert) {
    let db = new Db(
      {
        users: [{ id: 1, name: "Link" }, { id: 2, name: "Zelda" }]
      },
      {},
      mockedInflector
    );
    let User = Model.extend();
    let schema = new Schema(db, {
      user: User
    });

    let users = schema.users.all();
    assert.ok(users instanceof Collection, "it returns a collection");
    assert.ok(
      users.models[0] instanceof User,
      "each member of the collection is a model"
    );
    assert.equal(users.models.length, 2);
    assert.deepEqual(users.models[1].attrs, { id: "2", name: "Zelda" });
  });

  test("it returns an empty array when no models exist", function(assert) {
    let db = new Db({ users: [] }, {}, mockedInflector);

    let User = Model.extend();
    let schema = new Schema(
      db,
      {
        user: User
      },
      {},
      mockedInflector
    );

    let users = schema.users.all();

    assert.ok(users instanceof Collection, "it returns a collection");
    assert.equal(users.modelName, "user", "the collection knows its type");
    assert.equal(users.models.length, 0);
  });
});
