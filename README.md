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
  - pnpm i react-router-dom localforage match-sorter sort-by
    - Adiciona rotas
  - pnpm i react-helmet-async
    - 
      
