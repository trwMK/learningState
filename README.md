/\*
State is the most important concept in React:
Data that a component can hold over time, nexessary for information that it needs to
remember throughout the app`s lifecycle
State is the "COMPONENT`S MEMORY"
(like notification count, text-content of input field or the content of a shopping card)
"State varibale" / "piece of state": A single variable in a component (component state)
Updating COMPONENT STATE triggers React to RE-RENDER THE COMPONENT
STATE ALLOWS US TO:

1. Update the component´s view (by re-rendering it)
2. Persist local variables between renders
   State is a TOOL. Mastering state will unlock the power of React development
   \*/

THE MECHANICS OF STATE IN REACT (62) React is called "React" because REACT REACTS TO STATE CHANGES BY RE-RENDERING THE UI
We don´t do direct DOM manipulations (because React is declarative) -> How is a componenten view updated then? -> In React, a view is updated by re-rendering the component (Important React principle!) -> A component is re-rendered when its state is updated -> So to update a view, we update state

State (React calls the component function again) -> Render / Re-render (state is preserved throughout re-render) -> Updated view

To update state based on the current state use setStep((curStep) => curStep + 1); instead of setStep(step + 1) or onClick={() => setIsOpen((tglIsOpen) => !tglIsOpen)}
instead of onClick={() => setIsOpen(!isOpen)}
When we´re not setting state based on a current state than we can pass in the value as normal (then we need no callback)

One Component, One state
Each component has and manages ITS OWN STATE, no matter how many times we render the same component (If we have multiple components from the same function every component is handled independently)

UI = f(state ) UI is just a representation of all states of all components
Declarative, revisited:
-> With state, we view UI as a REFLECTION OF DATA CHANGING OVER TIME
-> We DESCRIBE THAT REFLECTION of data using state, event handlers, and JSX

PRACTICAL GUIDELINES ABOUT STATE
-> Use a state varibale for any data that the component should keep track of ("remember") over time. THIS IS DATA THAT WILL CHANGE AT SOME POINT. IN Vanilla JS, that´s a let varibale, or an [] or {}
-> Whenever you want something in the component to be DYNAMIC, create a piece of state related to that "thing", and update the state when the "thing" should change (aka "be dynamic") -> Example: A modal window can be open or closed. So we create a state varibale isOpen that tracks whether the modal is open or not. On isOpen = true we display the window, on isOpen = false we hide it
-> If you want to change the way a component looks, or the data it displays, UPDATE ITS STATE. This usually happens in an EVENT HANDLER function
-> When building a component, image its view as a REFLECTION OF STATE CHANGING OVER TIME
-> For data that should not trigger component re-renders, DON`T USE STATE. Use a regular varibale instead. This is a common BEGINNER MISTAKE.
