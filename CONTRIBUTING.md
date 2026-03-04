# Contributing to Angular LobHub Icons

Thank you for your interest in contributing to Angular LobHub Icons! This document provides guidelines and instructions for contributing.

## Code of Conduct

This project adheres to a Code of Conduct. By participating in this project, you are expected to uphold this code. Please report unacceptable behavior to the project maintainers.

## Getting Started

1. Fork the repository
2. Clone your fork: `git clone https://github.com/your-username/angular-lobehub-icons.git`
3. Install dependencies: `npm install`
4. Create a new branch for your feature: `git checkout -b feature/my-feature`

## Development Setup

```bash
# Install dependencies
npm install

# Start development server
npm start

# Run tests
npm test

# Build the library
npm run lib:build

# Generate icons from source
npm run lib:generate
```

## Making Changes

1. Make your changes
2. Follow the existing code style
3. Write or update tests as necessary
4. Update documentation as needed

## Submitting Changes

1. Commit your changes with clear messages: `git commit -m "description"`
2. Push to your fork: `git push origin feature/my-feature`
3. Submit a Pull Request to the main repository

## Icon Generation Workflow

When updating icons:

1. Update the icon source version in `package.json`
2. Run `npm install @lobehub/icons-static-svg@<version>`
3. Run `npm run lib:generate` to regenerate icons
4. Test the changes
5. Submit a Pull Request

## Pull Request Process

1. Ensure your code follows the project's coding style
2. Include a clear description of the changes
3. Reference any related issues
4. Ensure tests pass
5. Keep PR focused on a single feature or fix

## Questions?

Feel free to open an issue for any questions or discussions.

Thank you for contributing!
