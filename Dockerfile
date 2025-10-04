# STAGE 1

FROM node:20-slim AS builder

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci

COPY . .

RUN npm run build -- --configuration production

# STAGE 2

FROM nginx:alpine

COPY nginx-custom.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /app/dist/finki-hub/browser /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]