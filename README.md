# Instalar ambiente
 1 - No GIT Bash:
  - npm install -g pnpm
  - pnpm -v
  - pnpm create vite@latest
  - "nome do projeto"
  - "nome do pacote"
  - "Typscript"
  - pnpm install
  - cd "pasta do projeto"
  - pnpm install
  - code .
2 - No Terminal do VSCode
 - pnpm i 
3 - Acessar o link para configurar o Vite com shadcn/ui
  - https://ui.shadcn.com/docs/installation/vite


                              }


# Extensões para instalar
- PostCSS Language Support
- Tailwind CSS IntelliSense
- Prettier - Code formatter

# Plugins para instalar
No terminal do VSCode
  - pnpm i eslint @rocketseat/eslint-config -D
    - Criar um arquivo "eslintrc.json" e inserir o código
            {
    "extends": ["@rocketseat/eslint-config/react"]
            }
  - pnpm i -D prettier-plugin-tailwindcss (Dependência Automatic Class Sorting with Prettier)
      - Criar um arquivo "prettier.config.js" e inserir o código:
            module.exports = {
            "plugins": ["prettier-plugin-tailwindcss"]
  - pnpm -i -D --save-dev eslint-plugin-simple-import-sort
    - Adicionar ao "eslintrc.json":
      "plugins": ["simple-import-sort"],
        "rules": {
          "simple-import-sort/imports": "error",
        },
        "parserOptions": {
          "sourceType": "module",
          "ecmaVersion": "latest"
        }
      

# React + TypeScript + Vite



This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
