## Just a demo

FROM node:18-alpine3.18

EXPOSE 8000

ENV FLASK_APP=app
ENV FLASK_DEBUG=True

WORKDIR /app

# COPY <LOCAL DIR PATH> <IMAGE DIR PATH>
COPY package.json .

RUN npm install
RUN pip install

COPY . .

CMD ["npm", "run", "dev"]