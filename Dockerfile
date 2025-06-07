# --- ETAPA 1: Construcción (Build Stage) ---
# Usamos una imagen oficial de Node.js como base. La versión 'alpine' es más ligera.
FROM node:18-alpine AS build

# Establecemos el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiamos package.json y package-lock.json para instalar las dependencias
# Se copian por separado para aprovechar el caché de Docker
COPY package*.json ./

# Instalamos las dependencias del proyecto
RUN npm install

# Copiamos el resto del código fuente de la aplicación
COPY . .

# Ejecutamos el script de construcción de Vite para generar los archivos de producción
RUN npm run build

# --- ETAPA 2: Servicio (Serve Stage) ---
# Usamos una imagen ligera de Nginx para servir nuestro contenido estático
FROM nginx:alpine

# Copiamos nuestro archivo de configuración personalizado para Nginx
# Primero, crea una carpeta 'nginx' en la raíz de tu proyecto y coloca 'nginx.conf' dentro.
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

# Copiamos los archivos de producción de la etapa 'build' a la carpeta pública de Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Exponemos el puerto 80 para que el contenedor pueda recibir tráfico web
EXPOSE 80

# El comando por defecto de la imagen de Nginx ya se encarga de iniciar el servidor,
# así que no necesitamos un CMD explícito.

