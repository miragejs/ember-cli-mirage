import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class extends Route {
  @service router;
  @service store;

  model({ post_slug_and_id }) {
    let matches = post_slug_and_id.match(/\d+$/);
    if (!matches) {
      let path = document.location.pathname.replace(/^\/|\/$/g, '');
      this.router.transitionTo('not-found', path);
    }

    let postId = matches[0];

    return this.store.findRecord('post', postId);
  }
}
