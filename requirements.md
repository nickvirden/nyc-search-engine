# Overview

### New York City Search Engine

The City of New York has a data API they would like to add a front-end to. `The API`
handles the ability to search for keywords or limit results you will be making
requests to this `API` and displaying it's results. On top of a front-end, the City
would also like the ability to save and manage User information (without any need for authentication).

The city has requested proposals for a solution to their problem. Your assignment is to build and execute on a solution, from proposal through delivery.

This is the current site, use this as your jump off point:
https://a856-cityrecord.nyc.gov/


API Docs:

- https://dev.socrata.com/foundry/data.cityofnewyork.us/buex-bi6w
- https://dev.socrata.com/

API endpoints

- https://data.cityofnewyork.us/resource/buex-bi6w.json
- https://data.cityofnewyork.us/City-Government/City-Record-Online/dg92-zbpx/data


# Requirements

Your proposal must include (using this template):
- A description of the problem that the client has presented
- At least two personas of your users
- User flows
- A clear problem statement from each persona
- What business problem are you trying to solve? Why do I need technology to solve this problem?
- Clearly present the technical requirements of solving the business problem
- A solution for a monolithic existing service service
- How the monolithic solution will solve the companies problems
- How to make the monolithic service scalable? Explain how to breakdown the monolithic service and when.
- The pros/cons of implementing a monolithic solution.
- Include an external case study that demonstrates a similar problem/solution

Overall, your app must:
- Consist of a back-end and front-end application
- Have clean, maintainable code
- Contain `feature`, `integration`, and `unit tests` for both the front-end and back-end, using the appropriate libraries.

### Back-end:

- Use Spring to add a new Users service. You may decide to add an API gateway to direct traffic between the existing API and your new service.
- Create a Database to `view`, `save`, `update`, and `delete` records.

### Testing

- Write End-to-End `feature` tests that use the full `docker-compose` environment
- Write Spring `controller` tests
- Write Spring `repository` tests
- Write an end-to-end test for at least one API endpoint that tests for for functionality, status codes, and error handling (Invalid params/ids, missing routes)
- Run all tests using Gradle tasks
- Use Selenide to write fluent feature tests

### Front-end:

- Build a SPA in React
- Communicate with your back-end API in order to manage User information
- Use components for reusable elements
- End to End UI tests

# Bonuses

- Build high-fidelity prototypes with a tool such as Figma or Sketch.
- Write unit tests for React components using Jest and Enzyme
- Move your Flyway migrations into their own Docker container
- Style it up!
- Deploy your app to the cloud
- Include the ability to access data with API keys using some form of authentication.

# Deliverables (turned in on Schoology)
- A Proposal deck including:
    - The problem that the client has presented
    - User personas
    - Problem statements
    - Statement of the business problem
    - Technical requirements and implementation plan
    - Data to back up your solution
- Your code, hosted on Github with:
    - At least 30 commits
    - A `README.md` file telling me:
        - What the application is
        - How to start the app
        - How to run the tests
- A set of User Stories, hosted on Trello (or an equivalent tool)
    - You must actually USE your user stories, not simply write them at the beginning and leave them behind.
    - Make sure your Trello board is PUBLIC before turning in.