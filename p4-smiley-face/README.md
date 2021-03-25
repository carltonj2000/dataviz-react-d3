# Smiley face with React

Smiley face with React

The rollup setup is based on the
[Trying Rollup for React Applications](https://blog.bitsrc.io/trying-rollup-for-react-applications-d3c2304d16bf)
article.
From the article I excluded bundling css and

```bash
npm init -y
npm i react react-dom
npm i -D rollup \
  rollup-plugin-serve \
  rollup-plugin-livereload \
  @rollup/plugin-node-resolve \
  @rollup/plugin-babel \
  @rollup/plugin-commonjs \
  @rollup/plugin-replace
npm i -D @babel/core \
  @babel/preset-react
```
