# Project Three

**Trello:** https://trello.com/b/RokWmkyx/seca-project-3

1. [Overview](#overview)
2. [Proposal](#proposal)
3. [Client Problem](#client-problem)
4. [Personas](#personas)
5. [User One Flow](#user-one-flow)
6. [Problem Statement for Persona One](#problem-statment-persona-one)
7. [User One Flow](#user-two-flow)
8. [Problem Statement for Persona Two](#problem-statment-persona-two)
9. [Business Problem](#business-problem)
10. [Technical Requirements](#technical-requirements)
11. [Monolith vs. Microservices](#monolith-vs-microservices)
12. [Case Study](#case-study)
13. [The Code](#the-code)
14. [Front End](#front-end)
15. [Back End](#back-end)
16. [Unit Testing](#unit-testing)

## Overview <a name="overview"></a>

The City of New York has a data API they would like to add a front-end to. The API handles the ability to search for keywords or limit results you will be making requests to this API and displaying it's results. On top of a front-end, the City would also like the ability to save and manage User information (without any need for authentication).

## Proposal <a name="proposal"></a>

### Problem as described by Client <a name="client-problem"></a>

The City of New York would like an intuitive, user-friendly way of interacting with the data API that they currently use. Moreover, the City of New York would also like there to be a client management system, whereby they could update and delete user information.

### Personas <a name="personas"></a>

**Persona #1:**

**Persona #2:**

#### User One Flow <a name="user-one-flow"></a>

#### Problem Statement for Persona One <a name="problem-statement-persona-one"></a>

#### User Two Flow <a name="user-two-flow"></a>

#### Problem Statement for Persona Two <a name="problem-statement-persona-two"></a>

### Business Problem <a name="business-problem"></a>

### Technical Requirements <a name="technical-requirements"></a>

### Monolith vs. Microservices <a name="monolith-vs-microservices"></a>

Based on the use cases of John and Jane, an analysis of the best archictecture for constructing this web application was necessary. The current paradigms that exist are both monolithic and microservices architectures. 

A monolith, as it suggests, is an application where the code, put simply, is all together in one place, each piece being plugged in and added on over time to create a large code base.

A microservice, on the other hand, is an application that only handles one very specific functionality of an application. As such, many microservices create a larger appliation when summed together, but remain separate from each other in their own bubbles, so to speak.

With this in mind, and due to the population and ever evolving offerings and structure of governmental services, the decisions to go with a microservices architecture was clear.

The City of New York has over 8.5 million residents, a sizeable amount of which interact with government every day. If we are planning for a large number of users to interact with the website every day, we need a solution that can handle those requests and, if a part of it fails or falters, has the ability to continue operation even when one service is overwhelmed. For that reason, a microservices architecture is the only thing that makes sense because the pieces all work independently of each other. 

### Case Study <a name="case-study"></a>

## Resources <a name="resources"></a>

City of New York Data Fields on Socrata: https://dev.socrata.com/foundry/data.cityofnewyork.us/buex-bi6w
SoQL on Socrata: https://dev.socrata.com/docs/queries/