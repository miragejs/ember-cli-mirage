# What is Mirage?

Mirage is a JavaScript library that lets frontend developers mock out backend APIs.

Unlike other mocking libraries, Mirage provides tools that make it easy to recreate entire production backends.

Equipped with a Mirage server, a frontend developer can build, test, and even share a complete working JavaScript application without relying on or configuring any backend services.

## Why?

Mirage was originally built to bring conventions to some home-grown HTTP mocking code. It ended up proving most useful by allowing frontend developers to not rely on local or staging backend services as part of their normal development workflow.

With Mirage, a developer never needs to leave the frontend codebase, even when building complete, dynamic features.

## How does it work?

Mirage runs in the browser. It uses [Pretender.js]() to intercept any network requests your JavaScript app makes, letting you respond as if the request hit a real server.

In addition to intercepting HTTP requests, Mirage provides a mock database and helper functions that make it easy to build complete JavaScript features that typically rely on being connected to dynamic backend services.

Mirage's abstractions borrow concepts from backend frameworks like

  - **routes** to handle HTTP requests
  - a **database** and **models** for storing data and defining relationships
  - **factories** and **fixtures** for stubbing data
  - **serializers** for formatting HTTP responses

## Alternatives
