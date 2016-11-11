import {test} from 'qunit';
import moduleForAcceptance from '../helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | Inverse Relationship');

test('Add nested comments to blog post', function(assert) {
  let blogPost = server.create('blog-post');
  let comment = server.create('comment', 1, {
    blogPostId: blogPost.id
  });
  server.createList('comment', 5, {
    blogPostId: blogPost.id,
    parentCommentId: comment.id
  });

  server.get('/blog_posts/:id', function({ blogPosts }, req) {
    let blogPost = blogPosts.find(req.params.id);
    let serialize = this.serialize(blogPost);
    let parentComment = serialize.comments.filter((comment) => !comment.parent_comment_id);
    let childComments = serialize.comments.filter((comment) => comment.parent_comment_id);

    assert.equal(serialize.blog_post.comment_ids.length, 6, 'has 6 comment ids');
    assert.equal(parentComment.length, 1, 'has 1 parent comment');
    assert.equal(childComments.length, 5, 'has 5 child comments');

    return serialize;
  });

  visit(`/blog-posts/${blogPost.id}`);

  andThen(()=> {
    assert.equal(find('.blog-parentComment').length, 1, 'parent comment');
    assert.equal(find('.blog-childComments li').length, 5, 'child comments');
  });
});
