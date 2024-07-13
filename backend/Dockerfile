
FROM node

WORKDIR /code

COPY package.json package-lock.json ./

# Run npm install with --legacy-peer-deps
RUN npm install --legacy-peer-dep

COPY . .

EXPOSE 80

CMD ["npm", "dev"]
