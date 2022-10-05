# [openclarity.io](https://openclarity.io/)

<!-- TODO: Fix this link to point to OpenClarity logo -->

![OpenClarity logo](/openclarity.io/public/assets/shared/logos/logo-light-horizantal-svg.svg)

[![Netlify Status](https://api.netlify.com/api/v1/badges/6e125b48-7420-4bf2-b53f-285a7fda2b7e/deploy-status)](https://app.netlify.com/sites/openclarity/deploys)

This is the repository for [openclarity.io](https://openclarity.io/), the website
containing information on [OpenClarity](https://github.com/openclarity) projects.

<!-- TODO: Fix this text to reference OpenClarity -->

> APIClarity, an open source cloud native visibility tool for APIs, utilizes a Service Mesh framework to capture and analyze API traffic, and identify potential risks.
>
> Use APIClarity to compare your OpenAPI specification to its state at runtime. For apps that don’t have an OpenAPI specification, leverage APIClarity to reconstruct a specification in a live environment.
>
> Cloud native applications use and expose APIs, which have been the source of many highly publicized cyber-attacks and breaches. Leverage APIClarity to improve your API visibility and your applications security posture.

## Getting Started

Install `node_modules`:

```bash
yarn
```

Run the project in development mode:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to access the project in development mode.

It is helpful to build the project before committing code, in case there are any issues uncaught by development mode.

Build and export the project:

```bash
yarn build
```

Launch the build locally:

```bash
yarn start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to access the project in production mode.

*Note: Next/Image is not currently working when using next export, so we are using standard HTML img tags for now. In the future, we will either stop using export or the issue will be fixed and we will update accordingly.*

### Technologies Used

- React/NextJS
- Sass
- TypeScript
