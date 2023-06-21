# Here i Display-Data-Using-React

```
Welcome to My Github Profile.
as I Display A Json Data Using React Js
```
here Is the Simple Explaination Of this Code

1) The code consists of two components: App and Entry.
2) App component is the main component that renders the emojipedia data.
3) Entry component is a child component that displays an individual emoji entry.
4) The emojipedia data is imported from a separate file named emojipedia.
5) The App component renders a container div with a heading and a dictionary list (dl).
6) Inside the dictionary list, emojipedia.map() is used to iterate over each emoji entry in the emojipedia array.
7) For each emoji entry, an Entry component is rendered with the appropriate props (emoji, name, meaning).
8) The Entry component displays the emoji, name, and meaning in a styled format.
9) The emoji prop is displayed using a span element with the CSS class "emoji".
10) The name prop is displayed as plain text.
11) The meaning prop is displayed as a description using a dd element.
12) Each Entry component is given a unique key using the key prop to aid React's reconciliation process.
13) The code also includes a commented out function handleEmojis, which was an alternative way to render the emoji entries.
14) The handleEmojis function would take an emoji entry as an argument and return an Entry component with the appropriate props.

However, in the final code, the emojipedia.map() is used directly to render the emoji entries.
Overall, this code fetches data from the emojipedia array and dynamically renders it using the Entry component. Each emoji entry is displayed with its emoji, name, and meaning, creating an emojipedia display in React.

![image](https://github.com/ParagUnhale1998/Display-Data-React/blob/main/Thumbnail.png)
