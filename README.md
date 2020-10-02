# Basket Techtest for MMT Digital

Deployed > URL: [https://fe-test-ad.vercel.app/](https://fe-test-ad.vercel.app/)

### Available Scripts

In the project directory, you can run:

#### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

#### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


# Tech Choices

## React

Pretty much a widely regarded tooling for frontend so it made sense to use it for this.

Could have gone with Next.js but I didn't have any need for SSR, or any routing.

## Chakra UI Component Library.

Very ultra modern component library built on top of the styled-system and emotion's CSS-in-JS libraries which are popular in the design system / component library world. 

It makes rapid prototyping and development a breeze.

The Styled System approach to CSS is controversial (especially for those that like some degree of seperation, which I usually call for too) but for the usecase of this techtest with the limited amount of time I had, it was the right tool for the job.

Requires you to know your way around CSS and thus it may not be beginner friendly if we are thinking about how easy it is for junior developers to make changes. 

Since its a techtest with limited time,
I felt it was a good tradeoff to make, when considering the pros and cons

## React Testing Library
I've been using this more recently instead of enzyme and I really like the approach it tries to push users towards. 

I've seen codebases with alot of brittle tests that test implementation details and css classes rather than output so it's refreshing to see people encourage others to lean away from doing these things. I really like the encouragement of using data-attributes.
  
## Context for state management
React Context and the state management hooks are more than capable of managing state for small apps.

Perhaps the lack of big codebases and established patterns of use have stopped people from using this more.

### Why Not Redux?
I would find it innapropriate to bring in an extra dependency like Redux for such a small state management technical task.

### Assumptions
  - As this is a frontend tech test, I was abit liberal with recreating the design. I assume this is ok (In this tech test context, in the real world the designers would lose their socks!). 
  
  - I neeed to meet all the user stories. 

### Approach

I kept my approach simple. The bulk of the UI is in 3 different components, the Price Summary, The Product Card, and the ProductsBox, which holds multiple product cards. I think going any granular than that may veer on overengineering. 

Made sure colours met AAA standards and major accessibility issues were ironed out

Having worked on design systems at Tesco & Clearscore, I've learnt its best not trying to predict the future when it comes to React Component code reuse to avoid bloating a codebase with unused stuff.  Do it when it's really obvious, or when there are clear signs of code repition & when data/info/context backs up your choiceto do so.

### If I Had More Time
  - More extensive testing.
  - Added snapshot tests for simpler sub components that I extracted out of the larger integrated component
  - DRY up some of the test code
  - Touched on more of the stretch goals.
  Thought about how to portray the information better on smaller devices.
  - skeleton or spinners for the basket item images.
  - Tested for more sad paths ie, NaN types etc. 
  Added an error boundary fallback UI for any issues. 
  - Thought about how I would display errors to the user ie. wierd type bugs etc. 
  - Used TypeScript for type safety. I was running behind on time as I was completing a project due today so I opted for delivery speed.
  - Fixed width for the quantity number.
  - Allow users to input a quantity from keyboard
  - Set a Max Quantity etc.
  - Set The HTML Title in Head 😅



  Thanks for reading.

  Alfie Darko

