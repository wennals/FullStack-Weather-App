FROM node:16-alpine AS build
WORKDIR /usr/src/app
RUN npm cache clean --force
COPY ./weather-display .
RUN npm install
RUN npm run build

FROM node:16-alpine
WORKDIR /usr/src/app
COPY --from=build /usr/src/app/dist/weather-app /usr/src/app/public
COPY ./backend . 
RUN npm install 
CMD ["npm", "start"]
EXPOSE 3000