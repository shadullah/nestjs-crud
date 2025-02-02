<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">

## NestJS Backend API

This is my first backend project using NestJS and TypeScript, which I successfully completed in 10 days. The project is built with a scalable folder structure, includes CRUD operations for various resources, and integrates Cloudinary for image uploads and deletions. The backend is connected to MongoDB using Mongoose, with well-defined database schemas.

## Project setup

```bash
$ npm install
```

# create a .env file

```bash
$ MONGO_URI=your_mongodb_connection_string
$ CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
$ CLOUDINARY_API_KEY=your_cloudinary_api_key
$ CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Features

- Scalable Folder Structure for production-ready applications.

- CRUD API Endpoints for handling resources efficiently.

- Image Upload & Deletion using Cloudinary.

- MongoDB Integration with Mongoose ORM.

- TypeScript for type safety and maintainability.

- NestJS Modules, Controllers, and Services to ensure clean architecture.

## Tech Stack

Framework: NestJS (TypeScript)

Database: MongoDB with Mongoose

Storage: Cloudinary (for image uploads)

Authentication: (Add if applicable, e.g., JWT, OAuth)

Hosting: (If deployed, mention your hosting platform)

## API Endpoints

Project Routes

- POST /projects - Create a new projects

- GET /projects - Get all projects

- GET /projects/:id - Get project by ID

- PUT /projects/:id - Update project details

- DELETE /projects/:id - Delete a project

## Lessons Learned

- Setting up a scalable NestJS folder structure.

- Implementing CRUD operations efficiently.

- Managing Cloudinary integration for media storage.

- Writing Mongoose schemas and handling MongoDB connections.

- Working with TypeScript for backend development.

## Future Enhancements

Implement authentication and authorization.

Add validation with class-validator.

Improve error handling and logging.

## Contact

If you have any questions or suggestions, feel free to reach out!

This project marks an important milestone in my journey as a backend developer using NestJS and TypeScript 🚀
