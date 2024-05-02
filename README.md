# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Note
The `@encointer/worker-api` uses the browser's built-in `webcrypto` api. This library is only available in secure 
secure contexts. Hence, in local development you must use `localhost`. `webcrypto` is undefined on `127.0.0.1` and 
`0.0.0.0`.

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install
```

## Development Server

Start the development server on `http://localhost:3000`

```bash
yarn run dev
```

## Production

Build the application for production:

```bash
yarn run build
```

Locally preview production build:

```bash
yarn run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
