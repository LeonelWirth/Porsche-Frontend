FROM node:20-alpine as build

#ARG VITE_AUTH0_CLIENT_ID
#ARG VITE_AUTH0_DOMAIN
#ARG VITE_LANGSERVE_URL
# ARG VITE_BACKEND_URL

#ENV VITE_AUTH0_CLIENT_ID=$VITE_AUTH0_CLIENT_ID
#ENV VITE_AUTH0_DOMAIN=$VITE_AUTH0_DOMAIN
#ENV VITE_LANGSERVE_URL=$VITE_LANGSERVE_URL
# ENV VITE_BACKEND_URL=$VITE_BACKEND_URL

# RUN echo $VITE_AUTH0_CLIENT_ID

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application code
COPY . .

# Build the application
RUN npm run build


# Ahora usamos una imagen base de NGINX para servir la aplicación
FROM nginx:alpine

# Copiamos el archivo de configuración de NGINX
COPY nginx/nginx.conf /etc/nginx/nginx.conf

# Copiamos los archivos del build de Vite al directorio de NGINX
COPY --from=build /app/dist /usr/share/nginx/html


# Iniciamos NGINX
CMD ["nginx", "-g", "daemon off;"]