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

## Use Cases
- Describes all the valid interactions within the application
- Has dependency on entities
- Receives adapters via dependency injection
    - Not tightly coupled at compile time, but at runtime