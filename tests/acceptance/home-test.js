import { module, test } from "qunit";
import { visit, currentURL } from "@ember/test-helpers";
import { setupApplicationTest } from "ember-qunit";
import {
  // General functions for checking against Ember version
  gte
} from 'ember-compatibility-helpers';

module("Acceptance | home", function(hooks) {
  setupApplicationTest(hooks);

  //  Ember Addon docs will fail for sources less then 3.16.0
  if (gte('3.16.0')) {
    test("the homepage renders without error", async function(assert) {
      await visit("/");

      assert.equal(currentURL(), "/", "Correct URL is shown");
    });
  }
});
