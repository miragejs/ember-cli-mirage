const FastBoot = require('fastboot');
const { execFileSync } = require('child_process');
const { module: Qmodule, test } = require('qunit');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

findTextFromHtml = (html, selector) => {
  let document = new JSDOM(html).window.document;
  return document.querySelector(selector)
    .textContent
    .trim();
}

Qmodule('basic-app | fastboot | included files in development', function(hooks) {

  let fastboot;

  hooks.before(async function() {
    execFileSync('node', [require.resolve('ember-cli/bin/ember'), 'build']);
    fastboot = new FastBoot({
      distPath: 'dist',
      resilient: false
    });
  });

  test('it includes modules in development', async function(assert) {
    let page = await fastboot.visit('/');
    let html = await page.html();

    assert.equal(findTextFromHtml(html, '[data-test-id="environment"]'), 'development');
    assert.ok(+findTextFromHtml(html, '[data-test-id="mirage-module-count"]') > 1);
    assert.ok(+findTextFromHtml(html, '[data-test-id="other-module-count"]') > 1);
  })

});
