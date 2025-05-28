# 🩺 Doutor Agenda

Sistema web desenvolvido com **Next.js** e **TypeScript**, com configuração de linting personalizada para garantir código limpo, organizado e com boas práticas.

---

## 🚀 Tecnologias Utilizadas

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [ESLint](https://eslint.org/)
- [eslint-plugin-simple-import-sort](https://github.com/lydell/eslint-plugin-simple-import-sort)
- [Tailwind CSS](https://tailwindcss.com/) (presumido com base no `className="bg-red-500"`)

---

## 📂 Estrutura do Projeto

O projeto utiliza `@/*` como **alias para `src/`**, facilitando a importação de módulos internos:

```ts
import { Button } from "@/components/ui/button";
```

---

## 🧠 Linting e Estilo de Código

O projeto utiliza uma configuração customizada com o pacote `@eslint/eslintrc` e plugin de importação ordenada:

### 📦 Dependências relevantes do ESLint

- `@eslint/eslintrc`
- `eslint-plugin-simple-import-sort`
- `next/core-web-vitals`
- `next/typescript`

### 📄 Regras definidas:

```js
"simple-import-sort/imports": "error",
"simple-import-sort/exports": "error"
```

Essa configuração ordena automaticamente os imports e exports, melhorando a legibilidade e consistência do código.

---

## ⚙️ Configuração do TypeScript (`tsconfig.json`)

- Alvo: ES2017
- Módulo: `esnext` com `bundler` resolution
- JSX: Preservado (ideal para Next.js)
- Alias: `@/*` mapeia para `./src/*`
- Plugins: Suporte a `next`

---

## 🧪 Exemplo de componente

```tsx
import { Button } from "@/components/ui/button";

export default function Home() {
  return <Button className="bg-red-500 items-center flex">Teste button Tayse Rosadsfs2</Button>;
}
```

---

## 📥 Instalação

```bash
# Clonar o projeto
git clone https://github.com/seu-usuario/doutor-agenda.git

# Instalar dependências
cd doutor-agenda
npm install
```

---

## 🧪 Scripts disponíveis

```bash
# Rodar o servidor em desenvolvimento
npm run dev

# Verificar erros de lint
npm run lint

# Build para produção
npm run build
```

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

---

## ✨ Autoria

Desenvolvido com ❤️ por Tayse Rosa.
