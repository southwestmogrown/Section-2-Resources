# Forms In React

Forms are important to React applications because they enable user interaction.
Users can fill out input fields, make selections, etc., and submit the data.
You are then able to do things with the submitted data, like make entries in a
database! (Just focus on the frontend details for now.)

In JSX, forms work almost exactly like they do in HTML. You have the `<form>`
tag that encompasses everything within, from `<label>`s and `<input>`s to
`<select>`s and `<textarea>`s--and don't forget a `<button>`!

Instead of a button's having an `onClick` method, the `<form>` tag itself is
given the `onSubmit` event handler method. You can define a function for what
should occur when the form is submitted. Here is an example of a JSX form:

```jsx
<form onSubmit={handleSubmit}>
  <div className="input-label-div">
    <label htmlFor="name">Name:</label>
    <input id="name" type="text" value={name} />
  </div>
  <div className="input-label-div">
    <label htmlFor="email">Email:</label>
    <input id="email" type="text" value={email} />
  </div>
  <div className="input-label-div">
    <label htmlFor="phone">Phone:</label>
    <input id="phone" type="text" value={phone} />
  </div>
  <button>Submit</button>
</form>
```

> **Remember:** JSX uses `htmlFor` instead of HTML's `for` since `for` is a
> reserved word in JavaScript. Note that JSX also uses camelCase event names, so
> `onclick` in HTML becomes `onClick` in JSX, and so on.

## Controlled inputs

Inputs that are managed by component state are called _controlled inputs_. Controlled inputs keep your form and state in sync.

Making a controlled input in React requires three steps:

1. Create a state variable.

   ```js
   const [name, setName] = useState("");
   ```

2. Assign an input's `value` attribute to the state variable.

   ```jsx
   <input id="name" type="text" value={name} />
   ```

3. Add an `onChange` event handler to the input. The handler should use the
   state variable's setter function to update the state variable to the input's
   changed value.

   ```jsx
   <input
     id="name"
     type="text"
     onChange={(e) => setName(e.target.value)}
     value={name}
   />
   ```

   Remember that when an event is raised, the associated event handler method is
   called and passed an instance of the event object. A reference to the element
   that raised the event is available through the event object's `target`
   property. Using the reference to the form field element, you can retrieve the
   current value as the `value` property on the `target` object.

   **Important:** Always give `onChange` or `onClick` an **uninvoked function,**
   either an anonymous function or the name of a callback. You want these event
   handler methods to invoke the functions only when an event triggers them. If
   you need to give an argument to the callback, an anonymous function is the
   way to go! Examples:

   ```jsx
   <div onClick={clickFunc}>Do NOT invoke my onClick callback!</div>
   <input onChange={(e) => changeFunc(e.target.value)} />
   ```

Putting these steps together, a form with a controlled input looks like this:

```jsx
const FormWithControlledInput = () => {
  const [name, setName] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setName("");
      }}
    >
      <input
        name="name-input"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Type something!"
      />
      <button>Submit</button>
    </form>
  );
};
```

This code creates a slice of state called `name`. On each render, it sets the
input's `value`--i.e., what shows up in the input textbox--to `name`. The setter
function then appears in an `onChange` handler that effectively updates the
value of `name` any time a user changes the input text. The resulting change to
state will, of course, then prompt a re-render that shows the updated `name` in
the input box. This pattern thus keeps your form and state in sync!

(Clicking submit will clear the input box by resetting `name` to `''`.)

This pattern is especially handy when you want to pre-populate your form's
fields with data, as, e.g., in a form for updating a given record.

Learn more about [controlled inputs].

## More resources

- [MDN Docs on Forms]
- [MDN Input Types]

[controlled inputs]: https://react.dev/reference/react-dom/components/input#controlling-an-input-with-a-state-variable
[MDN Docs on Forms]: https://developer.mozilla.org/en-US/docs/Learn/Forms
[MDN Input Types]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input
