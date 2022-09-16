FROM node:lts as dependencies
WORKDIR /openclarity.io
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

FROM node:lts as builder
WORKDIR /openclarity.io
COPY openclarity.io .
COPY --from=dependencies /node_modules ./node_modules
RUN yarn build
RUN npx prisma generate

EXPOSE 3000
CMD ["npm", "start"]
