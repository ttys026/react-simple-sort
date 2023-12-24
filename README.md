# React Simple Sort

## Overview

`react-simple-sort` is a lightweight and straightforward sorting library for React, designed with simplicity and minimal bundle size. It is ideal for users who prioritize simplicity over advanced features, making it perfect for proof of concept projects.

[Demo](https://codesandbox.io/p/sandbox/react-simple-sort-775d7k)

## Features

- **Ease of Use:** Simple API for quick integration into your React projects.

- **Zero Dependency:** Created without external dependencies besides React to minimize impact on your project's bundle size and keep your project lean.

## Usage

### Installation

```bash
npm install react-simple-sort
```

### Example

```jsx
import React from "react";
import { Sortable } from "react-simple-sort";

const App = () => {
  return (
    <Sortable direction="vertical" onSortEnd={console.log}>
      <div>Element 1</div>
      <div>Element 2</div>
      <div>Element 3</div>
    </Sortable>
  );
};

export default App;
```

## Notes

- This library is optimized for simplicity and may not be suitable for projects requiring advanced features like flip animations or virtual list support. Perfect for scenarios where you need a basic sorting functionality without unnecessary extras.

- Designed for modern browsers by using [HTML Drag and Drop API](https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API). Please make sure it meets your requirement.

Feel free to customize and extend according to your project's needs. If you have any questions or feedback, please open an issue on GitHub.

Happy coding! 🚀
