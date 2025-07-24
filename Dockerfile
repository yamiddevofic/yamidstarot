# Etapa 1: Build
FROM node:18-alpine AS builder

WORKDIR /app

COPY app/package*.json ./
RUN npm install

COPY app/ ./
RUN npm run build

# Etapa 2: Servidor estático para producción
FROM nginx:alpine

# Copia el build al directorio público de nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Copia una configuración personalizada de nginx si la tienes
# COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
