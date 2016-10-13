# belongsTo
Given Post, Author models
For the Post model

## basic
author: belongsTo()

## named
writer: belongsTo('author')

## reflexive
post: belongsTo()

## named reflexive
childPost: belongsTo('post')

## inverse (implicit)
author: belongsTo()

(author)
posts: hasMany()

## inverse (explicit)
author: belongsTo('author', { inverse: 'redPosts' })

(author)
posts: hasMany('post', { inverse: 'author' })
drafts: hasMany('post')

## multiple (conflict)
primaryAuthor: belongsTo('author')
secondaryAuthor: belongsTo('author')

(author)
posts: hasMany()

















let post = schema.posts.find(1);

post.authorId;







post
  tags: hasMany tags

let post = schema.posts.find(1)
post.tagIds
server.create('tag', { post });
post.reload().tagIds

posts
---------------------
id | title | tagIds |
---------------------
1  | Lorem | [1]

tags
---------------------
id | title     |
---------------------
1  | Economics
