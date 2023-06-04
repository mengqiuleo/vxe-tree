import vue from 'rollup-plugin-vue';
import babel from 'rollup-plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import dts from 'rollup-plugin-dts'
import svg from 'rollup-plugin-svg'
import image from '@rollup/plugin-image';
import cssnano from "cssnano";
import postcss from "rollup-plugin-postcss";
import svgToVue from 'rollup-plugin-svg-to-vue';
// import from "rollup-plugin-vue3-svg-inline"

//"build": "vue-tsc && vite build" 原来的打包方式
export default [{
  input: './src/tree.ts',
  output: [
    {
      file: "dist/index.cjs.js",
      format: "cjs"
    },
    {
      file: "dist/index.esm.js",
      format: "esm"
    }
  ],
  plugins: [
    babel({
      exclude: 'node_modules/**'
    }),
    resolve({
      extensions: ['.js', '.ts', '.tsx'],
    }),
    commonjs(),
    typescript(),
    svgToVue(),
    vue(),
    svg(),
    image(),
    postcss({
      plugins: [cssnano],
    }),
  ]
},
{
  //汇总.d.ts 类型声明文件
  input: './src/tree.ts',
  output: {
    file: 'dist/index.d.ts',
  },
  plugins: [
    dts()
  ],
}
]
