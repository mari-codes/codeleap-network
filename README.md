# CodeLeapNetwork

## Read this in other languages

- [Português (Brasil)](./docs/README.pt-BR.md)

Frontend application for **CodeLeapNetwork**, a small social feed where users can create, edit, delete, and interact with posts.

The application allows users to publish posts, edit or delete their own posts, like posts, and filter the feed by:

- newest posts
- all posts
- only their own posts

The interface is responsive and includes loading skeletons to improve the user experience while data is being fetched.

This project was built using **React**, **TypeScript**, **Vite**, and **modular SCSS with BEM architecture**, with server state management handled by **React Query**.

The frontend consumes the API provided by CodeLeap:

```
https://dev.codeleap.co.uk/careers/
```
---
## Tech Stack

| Technology | Purpose |
|---|---|
| **React** | UI library |
| **TypeScript** | Type safety and application logic |
| **Vite** | Development server and build tool |
| **SCSS (Sass Modules)** | Component styling |
| **BEM** | CSS architecture methodology |
| **React Query** | Server state management |
| **Prettier** | Code formatting |
| **Custom Hooks** | Logic separation and reuse |
---

## Application Features

- Create posts  
- Edit posts  
- Delete posts  
- Like posts  

- Filter feed:
  - newest posts
  - all posts
  - only user posts

- Responsive layout  
- Loading skeletons while fetching data  
- Modular and reusable components  
- Clean separation of logic using custom hooks
---
## State Management

Server state is handled using **React Query**.

Benefits:

- automatic caching
- background refetching
- loading and error states
- simplified data mutations

Example query:

```ts
const { data, isLoading } = useQuery({
  queryKey: ['posts'],
  queryFn: fetchPosts
});
```
Mutations automatically invalidate the posts cache to keep the UI updated

---
## Styling

The project uses **SCSS Modules** combined with the **BEM methodology**.

Benefits:

- scoped styles
- predictable naming
- modular CSS architecture
- easier maintenance

Example naming pattern:
```
postCard
postCard__header
postCard__title
postCard__actions
```
---

## Responsive Design

The interface is fully responsive using Sass mixins and breakpoints.

Example breakpoints:

- mobile  
- tablet  
- desktop  

Layout adjustments ensure usability across mobile, tablet, and desktop screens.

---

## Loading States

The application displays **skeleton loaders** while fetching posts.

This improves perceived performance and avoids layout shifts.

---
## Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```