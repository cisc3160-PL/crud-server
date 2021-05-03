# CRUD Server
Backend using PERN stack (PostgreSQL, Express, React, Node).

## Installation
Install dependencies using yarn:
```sh
yarn
```

## Running the Server
Using nodemon to run the Express app with live reloading:
```sh
yarn dev
```

## Testing
Using Jest to test in watch mode:
```sh
yarn test
```

# Clean Architecture
![Clean Architecture](assets/images/CleanArchitecture.jpg)

## Entities
- No dependencies, no import or require statements
- Dependencies are received via dependency injection
- Dependencies do not have to be ready during development
    - Stubs can be used and implemented later
    - Focus on developing business logic
- Can be tested independently
- Implementation details for dependencies can be changed independently of entity code
    - Can easily swap libraries for certain behaviors without touching entity code