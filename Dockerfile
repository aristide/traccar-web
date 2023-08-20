########## Run developement client app 
# Pull node to build client
FROM node:18.12.0-alpine as client-development

WORKDIR /home/atmmotors

COPY ./modern/ .

RUN npm install 

VOLUME /home/atmmotors
VOLUME /home/atmmotors/node_modules 

EXPOSE 3000

CMD ["npm", "start"]