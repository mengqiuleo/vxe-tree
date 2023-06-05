import vue from 'rollup-plugin-vue';
import babel from 'rollup-plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import dts from 'rollup-plugin-dts'
import image from '@rollup/plugin-image';
import cssnano from "cssnano";
import postcss from "rollup-plugin-postcss";

const extensions = ['.ts', '.js', '.tsx', '.less']

//"build": "vue-tsc && vite build" 原来的打包方式
// "build": "rollup -c"
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
  external: ['jest'],
  plugins: [
    vue({ preprocessStyles: true }),
    postcss(),
    typescript({
        sourceMap: false
    }),
    babel({
        extensions: extensions
    }),
    image()
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
