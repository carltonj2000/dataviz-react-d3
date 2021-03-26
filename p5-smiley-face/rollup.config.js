import serve from "rollup-plugin-serve";
import livereload from "rollup-plugin-livereload";
import babel from "@rollup/plugin-babel";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import replace from "@rollup/plugin-replace";
export default {
  input: "index.js",
  output: {
    file: "dist/bundle.js",
    format: "iife",
    sourcemap: true,
  },
  plugins: [
    nodeResolve({
      extensions: [".js"],
    }),
    replace({
      "process.env.NODE_ENV": JSON.stringify("production"),
      preventAssignment: true,
    }),
    babel({
      presets: ["@babel/preset-react"],
      babelHelpers: "bundled",
    }),
    commonjs(),
    serve({
      open: false,
      verbose: true,
      contentBase: [""],
      host: "localhost",
      port: 3000,
    }),
    livereload({ watch: "dist" }),
  ],
  onwarn: function (warning, warn) {
    // hide d3 circular dependency warning
    if (warning.code === "CIRCULAR_DEPENDENCY") return;
    warn(warning);
  },
};
