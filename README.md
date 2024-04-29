# OPTOMATICA-TASK
This is a fullstack task provided by optomatica

## technologies
- Nestjs
- prisma
- postgresql
- pgadmin4
- postman

## Back-End setup
### steps to run project (in dev mode locally)
- create db in pgadmin4 called optomatica after installing postgresql
- change .env file connection string to yours
- npm i
- npx prisma migrate dev --name initialize-database
- npm run start:dev

## Front-End setup
### steps to prepare react webapp
- npm i
- npm run dev
