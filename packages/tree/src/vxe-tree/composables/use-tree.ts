import { ref, SetupContext } from 'vue';
import { IInnerTreeNode, ITreeNode, IUseCore, IUseTree } from './use-tree-types';
import { useToggle } from './use-toggle';
import { useCore } from './use-core';
import { useLazyLoad } from './use-lazy-load';
import { generateInnerTree } from './utils';

export const DEFAULT_TREE_PLUGINS = [useToggle()];

/**
 * 返回拍平的数组
 * 将每个 plugin 都传入已经拍平的数组，然后返回所有的plugin
 * core: 提供一些工具函数，比如：getLevel，getParent， getIndex，getExpendedTree，getNode
 */
export function useTree(tree: ITreeNode[], plugins = [], context: SetupContext): Partial<IUseTree> {
  const treeData = ref<IInnerTreeNode[]>(generateInnerTree(tree)); //先生成拍平数组
  const core: IUseCore = useCore()(treeData);

  // 因为展开操作和懒加载有耦合，需要此处引入
  const lazyLode = useLazyLoad()(treeData, core, context);//这里hook返回的其实就是 lazyLoadNodes 事件

  //注册所有的plugin，然后返回这些plugin暴露的方法
  const pluginMethods = DEFAULT_TREE_PLUGINS.concat(plugins).reduce((acc, plugin) => {
    return { ...acc, ...plugin(treeData, core, context, lazyLode) }; //这里穿的lazyLoad参数是为use-toggle传的
  }, {});

  return {
    treeData,
    ...pluginMethods,
    ...core,
  };
}
