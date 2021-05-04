# Clean Architecture
[![Clean Architecture](assets/images/CleanArchitecture.jpg)](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)

## Entities
- No dependencies, no import or require statements
- Dependencies are received via dependency injection
- Dependencies do not have to be ready during development
    - Stubs can be used and implemented later
    - Focus on developing business logic
- Can be tested independently
- Implementation details for dependencies can be changed independently of entity code
    - Can easily swap libraries for certain behaviors without touching entity code

**Examples:**
- Campus
- Student

## Use Cases
- Describes all the valid interactions within the application
- Has dependency on entities
- Receives adapters via dependency injection
    - Not tightly coupled at compile time, but at runtime

**Examples:**
- List campuses/students
- Add campus/student
- Edit campus/student
- Remove campus/student

## Controllers
- Adapters that convert data from use cases and entities to a more convenient format for external frameworks (database or web)
- All database querying should occur in this layer
- External data can also be converted into a more convenient format to be injected into the use cases and entities

**Examples:**
- Get campuses/students
- Post campus/student
- Patch campus/student
- Delete campus/student

## Frameworks and Drivers
- Databases, web frameworks
- Not much code is written here other than to connect external existing code to inner layers

**Examples:**
- PostgreSQL: connect using Sequelize
- Express callback: connect controllers to routes

# Routes
- `/api` - route to API router
- `/api/campuses` - route to campus subrouter
    - GET `api/campuses` - gets all campuses
    - GET `api/campuses/:id` - gets a single campus by id
    - POST `api/campuses` - add a single campus
    - DELETE `api/campuses/:id` - deletes a single campus by id
- `/api/students` - route to student subrouter
    - GET `api/students` - gets all students
    - GET `api/students/:id` - gets a single student by id
    - POST `api/students` - add a single student
    - DELETE `api/students/:id` - deletes a single student by id