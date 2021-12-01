FROM node:14
ENV PORT 80
ENV TZ=Europe/Kiev
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone
EXPOSE ${PORT} 
WORKDIR /app
COPY app/package.json .
RUN yarn
RUN npx browserslist@latest --update-db
COPY app/ .
CMD yarn start --host=0.0.0.0