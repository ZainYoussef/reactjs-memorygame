This is a card-matching game built with React.js, where cards are flipped to find matching pairs. If two cards match, they turn green and remain fixed. If they don't match, they return to their previous position.

Azure SWA URL:
<h2>https://red-bush-0bc799103.5.azurestaticapps.net/<h2/>

  
![chrome-capture-2024-9-17 (2)](https://github.com/user-attachments/assets/bed39cee-079c-4924-bd47-3a4fd65c336b)

Game features:
- [x] hint button - Added Hint functionality that flips a random card for 1 second.
- [x] reset button - Resets the game to its initial state and randomizes the cards(items).
- [x] congrats pane win the player wins - Displays a congratulatory message when the player wins.

What I learned from this project so far:

1. useEffect: Used for side effects, invoked during component mounting, re-rendering, or both.
2. PropTypes: Useful for debugging by ensuring props are passed correctly.
3. useState: Manages the state within components and can be passed down to child components.
4. State Lifting: States can be passed from child to parent by invoking a parent function from the child and passing the state as a parameter.
5. State setters can be passed down to child components
6. Passing states from child to parents: state of a child component can't directly be passed to a parent (as React follows a unidirectional data flow where data is passed from parent to child). However, a function can be passed from the parent to the child as a prop, and then have the child call that function with its own state as an argument.
7. CSS modules and inline CSS are better than using a single CSS file (better readability and scope management) - in the other hand single file CSS has better performance
8. CSS Frameworks: Not necessary for small projects but can save time in larger ones.



Not too bad for a first React.js project as a self-learner! 😄
