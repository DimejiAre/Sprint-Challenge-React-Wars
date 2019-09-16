# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

=> React JS is a javascript library that is used to build UI components. Handling rich and complex user interfaces can be difficult for the DOM, React solves this problem by abstracting away this complexity and introducing easy to use reusable components which are dynamic and updates the DOM as things change.

For large scale applications like Facebook that has many user clicks, data changes and almost instant status updates, React is very important as it offloads a lot of the state (data) that our apps need to use, from the DOM and takes care of the changes.

1. What does it mean to think in react?

=> Thinking in react means to think of a web application as a collection of components. Individual and reusable components are created and then rendered on the DOM to display the app.

1. Describe state.

=> State holds a value for a component. It is used when a component needs to keep track of information between renderings.

1. Describe props.

=> Props is short for properties, and is passed to the component from above, just like function parameters for use in the rendering of that component.

1. What are side effects, and how do you sync effects in a React component to state or prop changes?

=> A side effect is anything that affects something outside the scope of the function being executed. Fetching data from an API, timers, logging, and manually manipulating the DOM are all examples of side effects.

Using the effect hook, A side effect can be synced to a state or a prop by passing in a dependency array after the callback function and will only fire after changes in the state on the prop, A lack of sync can lead to an infinite number of side effects as they are not constrained.