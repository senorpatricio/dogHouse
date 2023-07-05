# Calendly Tech Challenge: Dog breed site

Thank you for taking the time to look over and critique my work! I worked hard and did my best with the time given to me. I wish I could have spent more time on it and built some things out more completely. The data is provided by Wikipedia as well as [The Dog API](https://api-ninjas.com/api/dogs), and uploaded to Contentful via the `contentful-cli`. It uses *Gatsby*, *Typescript*, *Styled Components*, and *Contentful*.

## Task
1. A list of dog breeds that will contain six breeds
2. A single breed page that will present a short story about a single breed as well as:
- Where the breed originated
- How long it will live (range)
- The friendliness of the breed (scale of 1-5)
- How much they shed (scale of 1-5)

I have replicated these tasks to the best of my ability. A few additional things I would have liked to do with more time are: 
- Breed list page: 
    - Create cards, and add more information on the card itself for the user to read. This would give quick info on the breed's attributes. 
    - Also, I would have implemented a search that would allow the user to search among the available breeds, and eventually view a map of where breeds originated.
    - A way to filter breeds by different attributes, or origin location
    - Pagination
- Breed detail page: 
    - I would have like to build this out more. I wanted to give it a more defined container, and provide some better visuals to indicate the values of the attributes of the breed. 

## Design System
In the time that I've been given I tried to utilize a design system that will scale and handle more types of data. I created reusable components, and attempted to make them flexible. 

## Crucial Commands

### `npm run dev`

This will perform a `clean` and run the project locally with live reload in development mode.

### `npm run codegen`

While the project is running in `dev` mode, this command will pull down and create a `graphql-types.ts` file. 

### `npm run build`

Run a production build into `./public`. The result is ready to be put on any static hosting you prefer.

### `npm run serve`

Spin up a production-ready server with your blog. Don't forget to build your page beforehand.



