# Dashgo
Simple dashboard using ReactJS, NextJS and ChakraUI. Using MirageJS to mock the API.

## Install Next and dependencies
To create a NextJS project in an existing directory, run `yarn create next-app .`

### Dependencies
```
# Typescript
yarn add typescript sass @types/react @types/react @types/node -D

# Chakra
yarn add @chakra-ui/react @chakra-ui/core @emotion/react @emotion/styled framer-motion

# Icons
yarn add react-icons

# Charts
yarn add apexcharts react-apexcharts

# Form
yarn add react-hook-form

# Form Validation
yarn add yup @hookform/resolvers

# MirageJS Mocked Server
yarn add miragejs -D

# Fake Data
yarn add faker @types/faker -D

# React Query (Stale While Revalidate && Revalidate on focus)
yarn add react-query

# Axios
yarn add axios
```

## Getting Started
First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Structure
- public
- src
    - components
        - Form
            - Input.tsx
        - Header.tsx
        - Pagination.tsx
        - Sidebar.tsx
    - pages
        - users
            - create.tsx
            - index.tsx
        - _app.tsx
        - _document.tsx
        - dashboard.tsx
        - index.tsx
    - styles
    - services
        - mirage

## Documentation:
- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.