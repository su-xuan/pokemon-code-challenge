# pokemon-code-challenge

## About technology

I used node.js as the server, react.js with react bootstrap for the frontend and sass for the styling.
The project also applies TypeScript.

## About functions

The project presents a pokemon gallery on the homepage. With each card displaying the pokemon profile image and name, on click the link redirects to the individual profile page, which display pokemon features in detail with a back to home page button.

## Core elements

For routing i used React Router and Switch.
I extracted Pokemon id with function getId using Regex, which avoided having to fetch the data twice from the API to get the id.
I created a route with a parameter "pokeId" to redirect to profile page with selected pokemon info, using a react hook useParams.
I also fixed the problem that the given api for images return a 404 error by finding a new source with the corelating ids.

## Improvement

For pagination I could have used a Pagination component with react useState handling onChange, fetch pokemon list for each page with offset and limit params setting in the API endpoint.

For search bar I could have built a search-bar component that takes input, a pokelist component that stores the pokelist data from the first fetch (name, url), a filter function to compare the input with the name attribute and call getId on the url attribute, and returns the relating pokeId.

The profile page can also be improved by putting attributes into expandable components.

The fetch functions can be standardized by typescript interface/type.

## Observations

The API endpoint of pokemon list could be improved by returning id attribute in the list.
I looked implementing next.js, and I really like the features such as dynamic routing, hybrid rendering and lazy loading images by default. For this project, i would use static generation for home page and server-side rendering for profile page, but I'm not so sure how it works with pagination.
