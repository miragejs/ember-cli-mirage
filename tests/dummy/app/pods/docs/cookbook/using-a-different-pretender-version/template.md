# Using a different Pretender version

Mirage depends on [Pretender](https://github.com/pretenderjs/pretender), and for the most part you shouldn't need to worry about it.

But if Pretender releases a new version that has some features you'd like to use, you can specify it as a dependency in your own project, and Mirage will use your supplied version.

All you need to do is add it as a `devDependency` to your project

```sh
yarn add pretender
npm install --save-dev pretender
```

and Mirage will do the rest.
