import vueSetupExtend from "unplugin-vue-setup-extend-plus/vite";
import type { UserConfigExport } from "vite";
// import DefineOptions from "unplugin-vue-define-options/vite";
import svgLoader from "vite-svg-loader";
import { resolve } from "path";

export default (): UserConfigExport => {
  return {
    plugins: [vueSetupExtend() as any, svgLoader()],
    optimizeDeps: {
      exclude: ["vitepress"],
    },
    css: {
      postcss: {
        plugins: [
          {
            postcssPlugin: "internal:charset-removal",
            AtRule: {
              charset: (atRule): void => {
                if (atRule.name === "charset") {
                  atRule.remove();
                }
              },
            },
          },
        ],
      },
    },
    resolve: {
      alias: [
        {
          find: "exam",
          replacement: resolve(__dirname, "./examples"),
        }
      ]
    }
  }
};