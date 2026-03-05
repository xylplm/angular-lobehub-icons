<a name="readme-top"></a>

<div align="center">

<img height="120" src="https://registry.npmmirror.com/@lobehub/assets-logo/1.0.0/files/assets/logo-3d.webp">
<img height="120" src="https://gw.alipayobjects.com/zos/kitchen/qJ3l3EPsdW/split.svg">
<img height="120" src="https://registry.npmmirror.com/@lobehub/fluent-emoji-3d/1.1.0/files/assets/1f968.webp">

</div>

# Angular LobHub 图标库

> 一个围绕 [@lobehub/icons](https://github.com/lobehub/lobe-icons) 打造的 Angular 图标组件库，为你的 Angular 应用提供数千个精心设计的、可自定义的图标。

[![npm version](https://img.shields.io/npm/v/@luoxiao123/angular-lobehub-icons.svg?style=flat-square)](https://www.npmjs.com/package/@luoxiao123/angular-lobehub-icons)
[![npm downloads](https://img.shields.io/npm/dm/@luoxiao123/angular-lobehub-icons.svg?style=flat-square)](https://www.npmjs.com/package/@luoxiao123/angular-lobehub-icons)
[![license](https://img.shields.io/github/license/xylplm/angular-lobehub-icons.svg?style=flat-square)](LICENSE)

## ⚡ 项目介绍

这是 [**LobHub 图标库**](https://github.com/lobehub/lobe-icons) 的 Angular 包装器，该项目提供：

- 🎨 **丰富的图标集合** - 数千个专业设计的图标，覆盖各种分类
- 🌈 **多种变体** - 每个图标都有彩色、轮廓和文字变体
- 🧠 **AI 和技术图标** - 专为 AI 模型、工具和科技品牌设计的图标
- 📦 **基于 SVG** - 单纯的 SVG 图标，在任何尺寸下都能获得清晰的质量
- 🔄 **定期更新** - 定期添加新图标，紧跟最新技术发展

> 访问 [LobHub 图标库](https://github.com/lobehub/lobe-icons) 查看完整的图标展示和文档。
<div align="center">
![](https://github.com/lobehub/lobe-icons/assets/17870709/7e2c56d2-d7ea-4cb8-842b-22de162d6486)
</div>
## 📦 安装

```bash
npm install @luoxiao123/angular-lobehub-icons
```

或者使用 yarn

```bash
yarn add @luoxiao123/angular-lobehub-icons
```

或者使用 pnpm

```bash
pnpm add @luoxiao123/angular-lobehub-icons
```

## 🚀 使用方法

### 作为模块使用

```typescript
import { Component } from '@angular/core';
import { LobehubIconsModule } from '@luoxiao123/angular-lobehub-icons';
import * as LobehubIcons from '@luoxiao123/angular-lobehub-icons';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LobehubIconsModule],
  template: `
    <lobehub-icon name="openai"></lobehub-icon>
  `,
})
export class AppComponent {
  constructor() {
    // 初始化模块
    LobehubIconsModule.pick(LobehubIcons);
  }
}
```

### 使用指令方式

你也可以使用指令方式：

```html
<i-lobehub name="openai"></i-lobehub>
```

### 使用 Standalone API（推荐）

使用新的 Standalone API：

```typescript
import { Component } from '@angular/core';
import { provideLobehubIcons, LobehubIconComponent } from '@luoxiao123/angular-lobehub-icons';
import * as LobehubIcons from '@luoxiao123/angular-lobehub-icons';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LobehubIconComponent],
  providers: [provideLobehubIcons(LobehubIcons)],
  template: `<lobehub-icon name="openai"></lobehub-icon>`,
})
export class AppComponent {}
```

## 📖 文档

更多示例和详细文档，请访问 [GitHub 仓库](https://github.com/xylplm/angular-lobehub-icons)。

## 🎯 特性

- ✨ **易于使用** - 简洁的组件和指令 API，快速集成
- 🎨 **高度可定制** - 完全支持颜色、大小和自定义样式
- 📦 **可树摇** - 仅打包你使用的图标
- 🔧 **TypeScript 支持** - 完整的类型定义，享受完善的 IDE 支持
- 🎭 **Standalone 组件** - 与 Angular Standalone API 无缝配合
- 💪 **类型安全** - 编译时图标名称检查
- 🚀 **性能优化** - 采用 OnPush 变更检测，高效渲染
- 🌍 **覆盖广泛** - 接入 LobHub 提供的数千个图标

## 🔗 相关项目

- [@lobehub/icons](https://github.com/lobehub/lobe-icons) - 原始图标库
- [@lobehub/icons-static-svg](https://www.npmjs.com/package/@lobehub/icons-static-svg) - 静态 SVG 导出
- [angular-tabler-icons](https://www.npmjs.com/package/@luoxiao123/angular-tabler-icons) - Tabler 图标库

## 📄 许可证

MIT License © 2024 [xylplm](https://github.com/xylplm)
