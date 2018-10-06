# Testing React and Redux 

### create-react-app
create react app comes with jest and JSDOM

### JSDOM
allows for the use of document.createElement(...) etc..

## enzyme
note that you may need to reinstal node_modules after installing enzyme

### render methods
### Static 
- render the given component and return plain HTML

### Shallow 
- render just the component and none of its children
- great for testing single components in isolation, no assuptions about child components
- native DOM elements will be rendered, just no React components

### Full DOM
- render component and all its children
- plus we can interact with them after like test click events



