# pull official base image
FROM node:14

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
# RUN npm install react-scripts@3.4.1 -g --silent
RUN chown -R node.node /app

RUN chmod 777 node_modules

EXPOSE 3000
# add app
COPY . ./

# start app
CMD ["npm", "start"]