# Countries.

## How did I decide on the technical and architectural choices?

I wanted to keep this project small and simple but still cover the fundamental features of Next.js (SSG, SSR, pages, dynamic routes), GraphQL and React.

I also wanted to keep the app lean so the only packages installed (aside form create-next-app) are:
* graphql-request (I thought of using Apollo Client but realized their npm package is 500MB in unpacked size which is an overkill for this app)
* graphql (part of the graphql-request)
* react-simple-maps

I thought about client side rendering aswell but it felt like there was no need for it here.

For performance testing make sure to run `npm run build` and test the prod version

## Improvements that can be made

* Add the ability to favorite countries (and store it in localStorage)
* Test the MapView component (currently this is basically impossible because react-simple-maps renders a SVG map, but react-testing-library and jsdom do not have SVG testing functionality)
* Add codegen for GraphQL and TypeScript type generation (overkill for how small the schema is)
* Others that I can't see or think of.

## What would I do if I had more time

* Just build more features, but aside from that nothing. I am satisfied with the core functionality (and the codebase).

## Why are queries named COUNTRY and not GET_COUNTRY

* At first I named it GET_COUNTRY (REST API mindset) but a gql **query** implies a GET(or a read) so I realized it is redundant. A **mutation** is not possible with the **trevorblades.countries** endpoint.

## How long did the first version take

* 2 code sessions, about 4 hours long.
