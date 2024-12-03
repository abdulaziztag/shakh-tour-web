FROM node:20.9.0-slim
WORKDIR /app  
COPY . .
RUN npm set progress=false
RUN npm cache clean --force
RUN npm install --force  
RUN npm run build   
EXPOSE 3000
CMD ["npm", "start"]