# Tree 类型定义

## ITreeNode

```ts
interface ITreeNode {
  label: string;
  id?: string;
  children?: ITreeNode[];

  selected?: boolean;
  checked?: boolean;
  expanded?: boolean;

  disableSelect?: boolean;
  disableCheck?: boolean;
  disableToggle?: boolean;
}
```

## ICheck

```ts
type ICheck = boolean | 'upward' | 'downward' | 'both' | 'none';
```

## IDragdrop

```ts
type IDragdrop =
  | boolean
  | {
      dropPrev?: boolean;
      dropNext?: boolean;
      dropInner?: boolean;
    };
```