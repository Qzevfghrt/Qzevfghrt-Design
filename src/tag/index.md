---
title: Tag 标签
nav:
  path: /components
  title: 组件
group:
  path: /data-view
  title: 数据展示
---

```tsx
import React from 'react';
import { Tag } from 'qzevfghrt-design';
import { Icon } from 'qzevfghrt-design';

export default () => {
  return (
    <div>
      <div className="tag-wrapper">
        <Tag>this is Tag</Tag>
        <Tag variant="light" closable="true">
          this is a Tag
        </Tag>
        <Tag variant="outlined" color="blue" endIcon={<Icon type="icon-code" />}>
          this is a Tag
        </Tag>
        <Tag variant="stroked" color="error" startIcon={<Icon type="icon-code" />}>
          this is a Tag
        </Tag>
        <Tag variant="stroked" color="error" startIcon={<Icon type="icon-code" />} size="sm">
          this is a small Tag
        </Tag>
      </div>
    </div>
  );
};
```

# Tag 标签

进行标记和分类的小标签。

## 何时使用

- 用于标记事物的属性和维度。
- 进行分类。

## Variants 变体

在 Qzevfghrt Design 中我们提供了四种标签的变体

- `filled`
- `light`
- `outlined`
- `stroked`

```tsx
import React from 'react';
import { Tag } from 'qzevfghrt-design';

export default () => (
  <div className="tag-wrapper">
    <Tag>filled</Tag>
    <Tag variant="light">light</Tag>
    <Tag variant="outlined">outlined</Tag>
    <Tag variant="stroked">stroked</Tag>
  </div>
);
```

## Color 颜色

在 Qzevfghrt Design 中我们提供了八种标签的颜色，来表示不同的状态

- `purple`
- `cyan`
- `blue`
- `success`
- `error`
- `warning`
- `black`
- `gray`

```tsx
import React from 'react';
import { Tag } from 'qzevfghrt-design';

export default () => (
  <div className="tag-wrapper">
    <Tag color="purple">purple</Tag>
    <Tag color="cyan">cyan</Tag>
    <Tag color="blue">blue</Tag>
    <Tag color="success">success</Tag>
    <Tag color="error">error</Tag>
    <Tag color="warning">warning</Tag>
    <Tag color="black">black</Tag>
    <Tag color="gray">gary</Tag>
  </div>
);
```

## Size 尺寸

在 Qzevfghrt Design 中我们提供了两种标签的尺寸

- `md(default)`
- `sm`

```tsx
import React from 'react';
import { Tag } from 'qzevfghrt-design';

export default () => (
  <div>
    <div className="tag-wrapper">
      <Tag size="sm">small</Tag>
      <Tag variant="light" size="sm">
        small
      </Tag>
      <Tag variant="outlined" size="sm">
        small
      </Tag>
      <Tag variant="stroked" size="sm">
        small
      </Tag>
    </div>
    <div className="tag-wrapper">
      <Tag>middle</Tag>
      <Tag variant="light">middle</Tag>
      <Tag variant="outlined">middle</Tag>
      <Tag variant="stroked">middle</Tag>
    </div>
  </div>
);
```

## startIcon 文字前面的图标

可以在文字前面导入任意的图标

```tsx
import React from 'react';
import { Tag, Icon } from 'qzevfghrt-design';

export default () => (
  <div>
    <div className="tag-wrapper">
      <Tag startIcon={<Icon type="icon-WeChat" />}>WeChat</Tag>
      <Tag startIcon={<Icon type="icon-code" />} color="blue">
        code
      </Tag>
      <Tag startIcon={<Icon type="icon-voice" />} variant="outlined">
        voice
      </Tag>
      <Tag startIcon={<Icon type="icon-draft1" />} color="black" variant="outlined">
        draft
      </Tag>
      <Tag startIcon={<Icon type="icon-github-fill" />} color="black" variant="light">
        GitHub
      </Tag>
    </div>
  </div>
);
```

## endIcon 文字后面的图标

可以在文字后面导入任意的图标，但是当你设置 closable 为 true 时，该属性失效

```tsx
import React from 'react';
import { Tag, Icon } from 'qzevfghrt-design';

export default () => (
  <div>
    <div className="tag-wrapper">
      <Tag endIcon={<Icon type="icon-WeChat" />}>WeChat</Tag>
      <Tag endIcon={<Icon type="icon-code" />} color="blue">
        code
      </Tag>
      <Tag endIcon={<Icon type="icon-voice" />} variant="outlined">
        voice
      </Tag>
      <Tag endIcon={<Icon type="icon-draft1" />} color="black" variant="outlined">
        draft
      </Tag>
      <Tag endIcon={<Icon type="icon-github-fill" />} color="black" variant="light">
        GitHub
      </Tag>
    </div>
  </div>
);
```

## closable 可关闭标签

设置 closable 属性为 true 后，标签变成可关闭标签。可以使用 onClose 设置相关的回调函数，然后通过点击文字后面的图标来实现该事件

```tsx
import React from 'react';
import { Tag, Icon } from 'qzevfghrt-design';

function preventDefault(e) {
  e.preventDefault();
  console.log('Clicked! But prevent default.');
}

export default () => (
  <div>
    <div className="tag-wrapper">
      <Tag closable="true">closable</Tag>
      <Tag
        closable="true"
        color="error"
        variant="outlined"
        onClose={() => console.log('this is closable')}
      >
        closable
      </Tag>
      <Tag closable="true" color="black" variant="light" onClose={preventDefault}>
        GitHub
      </Tag>
    </div>
  </div>
);
```

## closeIcon 自定义关闭按钮

使用该属性需要先设置 closable 属性,通过该属性可以更换关闭按钮

```tsx
import React from 'react';
import { Tag, Icon } from 'qzevfghrt-design';

export default () => (
  <div>
    <div className="tag-wrapper">
      <Tag closable="true">default</Tag>
      <Tag closeIcon={<Icon type="icon-WeChat" />}>without closable</Tag>
      <Tag closable="true" closeIcon={<Icon type="icon-code" />}>
        with closable
      </Tag>
    </div>
  </div>
);
```

## API

标签的属性说明如下：

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| closable | 设置关闭标签 | `boolean` | `false` |
| closIcon | 自定义关闭按钮 | `ReactNode` | `-` |
| color | 设置标签的颜色 | `purple` \| `cyan` \| `blue` \| `success` \| `error` \| `warning` \| `black` \| `gray` | `purple` |
| endIcon | 自定义文字后面的图标 | `ReactNode` | `-` |
| size | 设置标签尺寸 | `sm` \| `md` | `md` |
| startIcon | 自定义文字前面的图标 | `ReactNode` | `-` |
| variant | 设置标签类型 | `filled` \| `light` \| `outlined` \| `stroked` | `filled` |

<style>
.tag-wrapper {
  display: flex;
  flex-wrap: wrap;
}

.tag-wrapper > .qzevfghrt-tag {
  margin: 0 12px 8px;
}
</style>
