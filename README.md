# Shoppingify

## Architecture of the site

Developed following a MERN architecture:
- Client side : React + Redux
- Server side (API): NodeJS + Express + MongoDB
- Style : Sass

## Details

### Redux
To manage all the states of the application, I use Redux. Having never used it, I had to learn this library. I realized that it was extremely powerful for an application of this size (there are a lot of sub-components). With Redux, you don't need to lower the props from the component to the child components, which means that you can access the states anywhere in the application (amazing). I optimized the performance of the site, by dividing my components as much as possible so that each time a component is rendered, it only re-renders the part that needs to be re-rendered (this avoids unnecessary re-rendering).  You develop faster and the components are cleaner. The Redux store manages the login / signup, the created lists, the displayed products etc...   


### MongoDB

I chose MongoDB because I had never used it before. It's a good alternative to a SQL database. It's even simpler to use it with a JS library since we already work with objects.

### Security

- Passwords are hashed in the database.
- Validation (min length, special characters not authorized) of the form data in client side and in server side 
- Sanitaze pseudo and shopping list name

## API

| Routes                        | HTTP Methods  | Description              |
| ------------------------------|:-------------:| ------------------------:|
| /api/item                     | GET           | Get the products         |
| /api/category                 | GET           | Get category of products |
| /api/history-list/:pseudo     | GET           | Get pseudo               |
| /api/history-list/add-list    | POST          | Add shopping list        |
| /api/history-list/change-list | PUT           | Modify shopping list     |
| /api/history-list/delete-list | DELETE        | Delete list              |
| /api/auth/signup              | POST          | Create an account        |
| /api/auth/login               | POST          | Login to account         |

