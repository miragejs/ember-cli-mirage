---
---

# Why Mirage?

Skeptic: So, what's this library for?

Link: It's for mocking out HTTP requests so you can work on your Ember app without an API.

S: Ok...but can't I use Pretender for that?

L: Yep you sure can. But if things get complex (which they will), you could end up with a mess. Also, you'll organize things one way, and a colleague another. Why not let Mirage provide some conventions?

S: What sort of conventions?

L: Well a database, for one.

S: ...huh?

L: Most people return data directly from mock routes, but this is usually what causes maintenance problems. Mirage lets you access a database in your routes.

S: Where does the data live?

L: On the client. It's a very simple in-memory store.

S: Ok. So, to mock out my backend, I set up routes, and fiddle with a database. Sounds like writing an entirely new backend.

L: Something like that.

S: Well what's the point, if I'm going to have to write a real backend anyway?

L: Mirage's conventions do most of the heavy lifting, so your server ends up being considerably simpler than a real backend. If you're going to mock out your backend, better to take the task head-on, and use a tool designed specifically for it.

S: I suppose. But sometimes I don't even have to, I just use my actual API.

L: And that's great, when you can. But you probably can't always do that, right?

S: Right.

L: Sometimes you haven't written it yet, or sometimes it's private, and in those cases it's really nice to have a mock. It's also nice during testing.

S: What do you mean?

L: Well, your Mirage server runs in the client and initializes with your app. So you can use it for acceptance tests, and you don't need any other processes running. Just `ember test`, and you're good to go, either on a CI server or developing locally.

S: 
