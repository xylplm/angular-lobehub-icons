# Angular LobHub 图标库

> 一个漂亮易用的 Angular 图标库，完全支持 TypeScript，为你的 Angular 应用提供 ✨ 图标组件。

[![npm version](https://img.shields.io/npm/v/@luoxiao123/angular-lobehub-icons.svg?style=flat-square)](https://www.npmjs.com/package/@luoxiao123/angular-lobehub-icons)
[![npm downloads](https://img.shields.io/npm/dm/@luoxiao123/angular-lobehub-icons.svg?style=flat-square)](https://www.npmjs.com/package/@luoxiao123/angular-lobehub-icons)
[![license](https://img.shields.io/github/license/xylplm/angular-lobehub-icons.svg?style=flat-square)](LICENSE)

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

> 这些图标来自 [@lobehub/icons-static-svg](https://www.npmjs.com/package/@lobehub/icons-static-svg)

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
    <lobehub-icon name="air"></lobehub-icon>
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
<i-lobehub name="air"></i-lobehub>
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
  template: `<lobehub-icon name="air"></lobehub-icon>`,
})
export class AppComponent {}
```

## 📖 文档

更多示例和详细文档，请访问 [GitHub 仓库](https://github.com/xylplm/angular-lobehub-icons)。

## 🎯 特性

- ✨ 易于使用
- 🎨 支持自定义颜色和大小
- 📦 可树摇
- 🔧 完整的 TypeScript 支持
- 🎭 支持 Standalone 组件
- 💪 完全类型安全

## 🔗 相关项目

- [@lobehub/icons](https://www.npmjs.com/package/@lobehub/icons) - 原始图标库
- [angular-tabler-icons](https://www.npmjs.com/package/@luoxiao123/angular-tabler-icons) - Tabler 图标库

## 📄 许可证

MIT License © 2024 [xylplm](https://github.com/xylplm)
