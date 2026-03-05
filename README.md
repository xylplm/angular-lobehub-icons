<a name="readme-top"></a>

<div align="center">

<img height="120" src="https://registry.npmmirror.com/@lobehub/assets-logo/1.0.0/files/assets/logo-3d.webp">
<img height="120" src="https://gw.alipayobjects.com/zos/kitchen/qJ3l3EPsdW/split.svg">
<img height="120" src="https://registry.npmmirror.com/@lobehub/fluent-emoji-3d/1.1.0/files/assets/1f968.webp">

</div>

# Angular LobHub Icons

> An Angular icon component library wrapper around [@lobehub/icons](https://github.com/lobehub/lobe-icons), providing a comprehensive collection of beautiful and customizable icons for your Angular applications.

[![npm version](https://img.shields.io/npm/v/@luoxiao123/angular-lobehub-icons.svg?style=flat-square)](https://www.npmjs.com/package/@luoxiao123/angular-lobehub-icons)
[![npm downloads](https://img.shields.io/npm/dm/@luoxiao123/angular-lobehub-icons.svg?style=flat-square)](https://www.npmjs.com/package/@luoxiao123/angular-lobehub-icons)
[![license](https://img.shields.io/github/license/xylplm/angular-lobehub-icons.svg?style=flat-square)](LICENSE)

## ⚡ About

This project is an Angular wrapper for [**LobHub Icons**](https://github.com/lobehub/lobe-icons), a comprehensive icon library that includes:

- 🎨 **Extensive Icon Collection** - Thousands of professionally designed icons covering various categories
- 🌈 **Multiple Variants** - Each icon comes with color, outline, and text variants
- 🧠 **AI & Tech Icons** - Specialized icons for AI models, tools, and technology brands
- 📦 **SVG Based** - Pure SVG icons for crisp quality at any size
- 🔄 **Regularly Updated** - New icons added regularly to keep up with latest technologies

> Visit [LobHub Icons](https://github.com/lobehub/lobe-icons) for the complete icon showcase and documentation.
<div align="center">
![](https://github.com/lobehub/lobe-icons/assets/17870709/7e2c56d2-d7ea-4cb8-842b-22de162d6486)
</div>

## 📦 Installation

```bash
npm install @luoxiao123/angular-lobehub-icons
```

or

```bash
yarn add @luoxiao123/angular-lobehub-icons
```

or with pnpm

```bash
pnpm add @luoxiao123/angular-lobehub-icons
```

## 🚀 Usage

> The icons are generated from [@lobehub/icons-static-svg](https://www.npmjs.com/package/@lobehub/icons-static-svg)

### As Module

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
    // Initialize module with icons
    LobehubIconsModule.pick(LobehubIcons);
  }
}
```

### As Directive

You can also use the icon as a directive:

```html
<i-lobehub name="openai"></i-lobehub>
```

### With Standalone API (Recommended)

Using the new standalone API:

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

## 📖 Documentation

For more examples and detailed documentation, please visit the [GitHub repository](https://github.com/xylplm/angular-lobehub-icons).

## 🎯 Features

- ✨ **Easy to use** - Simple component and directive APIs for quick integration
- 🎨 **Customizable** - Full support for colors, sizes, and custom styling
- 📦 **Tree-shakeable** - Only bundle the icons you use
- 🔧 **TypeScript support** - Fully typed for excellent IDE support
- 🎭 **Standalone components** - Works seamlessly with Angular standalone API
- 💪 **Type-safe** - Compile-time icon name checking
- 🚀 **Performance optimized** - Efficient rendering with OnPush change detection
- 🌍 **Comprehensive coverage** - Access to thousands of icons from LobHub

## 🔗 Related Projects

- [@lobehub/icons](https://github.com/lobehub/lobe-icons) - The original icon library
- [@lobehub/icons-static-svg](https://www.npmjs.com/package/@lobehub/icons-static-svg) - Static SVG exports
- [angular-tabler-icons](https://www.npmjs.com/package/@luoxiao123/angular-tabler-icons) - Tabler icons for Angular

## 📄 License

MIT License © 2024 [xylplm](https://github.com/xylplm)
