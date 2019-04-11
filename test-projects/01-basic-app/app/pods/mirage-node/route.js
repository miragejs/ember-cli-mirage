import Route from '@ember/routing/route';

export default Route.extend({

  model() {
    return fetch('/node-endpoint').then(res => res.json())
      .then(json => {
        return JSON.stringify(json, 0, 2);
      });
  }

});
