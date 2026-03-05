# Angular LobHub Icons

> A beautiful and easy-to-use Angular icon library that supports TypeScript, providing ✨ icon components for your Angular application.

[![npm version](https://img.shields.io/npm/v/@luoxiao123/angular-lobehub-icons.svg?style=flat-square)](https://www.npmjs.com/package/@luoxiao123/angular-lobehub-icons)
[![npm downloads](https://img.shields.io/npm/dm/@luoxiao123/angular-lobehub-icons.svg?style=flat-square)](https://www.npmjs.com/package/@luoxiao123/angular-lobehub-icons)
[![license](https://img.shields.io/github/license/xylplm/angular-lobehub-icons.svg?style=flat-square)](LICENSE)

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

- ✨ Easy to use
- 🎨 Customizable colors and sizes
- 📦 Tree-shakeable
- 🔧 TypeScript support
- 🎭 Standalone components support
- 💪 Fully type-safe

## 🔗 Related Projects

- [@lobehub/icons](https://www.npmjs.com/package/@lobehub/icons) - Origin icons
- [angular-tabler-icons](https://www.npmjs.com/package/@luoxiao123/angular-tabler-icons) - Tabler icons for Angular

## 📄 License

MIT License © 2024 [xylplm](https://github.com/xylplm)
