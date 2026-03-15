# CodeLeapNetwork

## Leia em outros idiomas

- [English](../README.md)

## Demo ao Vivo

[Ver aplicação em funcionamento](https://codeleap-network-mari.vercel.app)

## Preview

### Feed

![Feed](/docs/preview/feed.png)

### Skeleton de Carregamento

![Skeleton](/docs/preview/skeleton.png)

### Criar Post

![Create Post](/docs/preview/post.png)

---

Aplicação frontend do **CodeLeapNetwork**, um pequeno feed social onde usuários podem criar, editar, deletar e interagir com posts.

A aplicação permite que os usuários publiquem posts, editem ou excluam seus próprios posts, curtam posts e filtrem o feed por:

- posts mais recentes
- todos os posts
- apenas seus próprios posts

A interface é responsiva e inclui **skeleton loaders** para melhorar a experiência do usuário enquanto os dados estão sendo carregados.

Este projeto foi desenvolvido utilizando **React**, **TypeScript**, **Vite** e **SCSS modular com arquitetura BEM**, com gerenciamento de estado do servidor feito através do **React Query**.

O frontend consome a API disponibilizada pela CodeLeap:

```
https://dev.codeleap.co.uk/careers/
```

---

## Tech Stack

| Tecnologia              | Propósito                                         |
| ----------------------- | ------------------------------------------------- |
| **React**               | Biblioteca para construção da interface           |
| **TypeScript**          | Tipagem estática e segurança de tipos             |
| **Vite**                | Servidor de desenvolvimento e ferramenta de build |
| **SCSS (Sass Modules)** | Estilização dos componentes                       |
| **BEM**                 | Metodologia de organização de CSS                 |
| **React Query**         | Gerenciamento de estado do servidor               |
| **Prettier**            | Formatação automática do código                   |
| **Custom Hooks**        | Separação e reutilização de lógica                |

---

## Funcionalidades da Aplicação

- Criar posts
- Editar posts
- Deletar posts
- Curtir posts

- Filtrar o feed por:
  - posts mais recentes
  - todos os posts
  - apenas posts do usuário

- Layout responsivo
- Skeleton loaders durante carregamento de dados
- Componentes modulares e reutilizáveis
- Separação clara de lógica através de **custom hooks**

---

## Gerenciamento de Estado

O estado do servidor é gerenciado utilizando **React Query**.

Benefícios:

- cache automático
- refetch em segundo plano
- controle de estados de loading e erro
- simplificação das mutações de dados

Exemplo de query:

```ts
const { data, isLoading } = useQuery({
  queryKey: ['posts'],
  queryFn: fetchPosts,
});
```

As mutações invalidam automaticamente o cache de posts para manter a interface atualizada.

---

## Estilização

O projeto utiliza **SCSS Modules** combinado com a metodologia **BEM**.

Benefícios:

- estilos isolados por componente
- nomenclatura previsível
- arquitetura modular de CSS
- manutenção mais simples

Exemplo de padrão de nomes:

```
postCard
postCard__header
postCard__title
postCard__actions
```

```

## Design Responsivo

A interface é totalmente responsiva utilizando **mixins Sass** e **breakpoints**.

Exemplos de breakpoints:

- mobile
- tablet
- desktop

Os ajustes de layout garantem boa usabilidade em dispositivos móveis, tablets e desktops.

---

## Estados de Carregamento

A aplicação exibe **skeleton loaders** enquanto os posts estão sendo carregados.

Isso melhora a percepção de performance e evita mudanças bruscas de layout.

```

---

## Desenvolvimento

Instalar dependências:

```bash
npm install
```

Iniciar o servidor de desenvolvimento:

```bash
npm run dev
```

Build para produção:

```bash
npm run build
```

Visualizar build de produção localmente:

```bash
npm run preview
```
