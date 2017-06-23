import { JSONAPISerializer } from 'ember-cli-mirage';

export default JSONAPISerializer.extend({
  links(blogPost) {
    return {
      comments: {
        related: `/api/blog-posts/${blogPost.id}/comments`
      }
    };
  }
});

