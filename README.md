# Incognitee App

This repository contains the sources for the Incognitee app statically deployed on [try.incognitee.io](https://try.incognitee.io) for Testnets and [app.incognitee.io](https://app.incognitee.io) for production.

## Note

The `@encointer/worker-api` uses the browser's built-in `webcrypto` api. This library is only available in secure
secure contexts. Hence, in local development you must use `localhost`. `webcrypto` is undefined on `127.0.0.1` and
`0.0.0.0`.

## Configuration

This dapp uses `.env` to configure deployment settings like default networks and endpoints.

- `SHIELDING_TARGET` The L1 chain whose native token shall be shielded to Incognitee
- `INCOGNITEE_SIDECHAIN` The Incognitee sidechain where the native token shall be shielded to
- `INTEGRITEE_NETWORK` The Integritee network where the Incognitee sidechain is anchored and TEERdays are collected
- `SHARD` The Incognitee shard where the native token shall be shielded to
- `SHIELDING_LIMIT` The maximum amount of native tokens that can be shielded
- `LIVE` Whether any actions should be enabled or not

please check [./configs/chains.ts](./configs/chains.ts) for the available options.

### local testing

Create a `.env` file in the root folder and set your preferences

```
SHIELDING_TARGET=PaseoRelay
INCOGNITEE_SIDECHAIN=IncogniteePaseoRelay
INTEGRITEE_NETWORK=IntegriteePaseo
SHARD=5wePd1LYa5M49ghwgZXs55cepKbJKhj5xfzQGfPeMS7c
SHIELDING_LIMIT=50
LIVE=true
```

### try.incognitee.io

For testnets, GH actions will automatically use the `.env.testnet` file to deploy the app.

### app.incognitee.io

For production, GH actions will automatically use the `.env.production` file to deploy the app.

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
