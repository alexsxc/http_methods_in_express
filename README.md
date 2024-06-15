---

# 🌐 HTTP Methods in Express

Welcome to the **HTTP Methods in Express** project! This project demonstrates the usage of various HTTP methods in an Express.js application. Dive in to learn and understand how to handle different HTTP requests in a Node.js environment using Express.

## 📋 Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Scripts](#scripts)

## 🚀 Installation

To get started with this project, follow these steps:

1. **Clone the repository:**
    ```bash
    git clone https://github.com/alexsxc/http_methods_in_express.git
    cd http_methods_in_express
    ```

2. **Install dependencies:**
    ```bash
    yarn install
    ```

## 🛠️ Usage

This project includes a few Yarn scripts to streamline your development workflow.

### Watch Mode

Launch the TypeScript compiler in watch mode. This will automatically compile your TypeScript files whenever they change.

```bash
yarn watch
```

### Development Mode

Start the project in development mode with `nodemon`. This will run your compiled JavaScript files and restart the server whenever there are changes.

```bash
yarn dev
```

## 📜 Scripts

In the `package.json` file, you will find the following scripts:

```json
"scripts": {
    "watch": "tsc -w",
    "dev": "nodemon --inspect ./dist/index.js"
}
```

- **`watch`**: Launches the TypeScript watcher.
- **`dev`**: Starts the development server with `nodemon` and enables the inspector for debugging.

---

Enjoy coding! 💻✨

If you encounter any issues or have suggestions, feel free to open an issue or submit a pull request. Contributions are always welcome! 😊

---

Feel free to customize this `README.md` file further according to your project's specific needs and details. Happy coding!
