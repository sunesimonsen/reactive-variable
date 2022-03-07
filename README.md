# reactive-variable

An implementation of the [Apollo Reactive Variables](https://www.apollographql.com/docs/react/local-state/reactive-variables/) that can be used as stepping stone for upgrading from v2 to v3.

## Installation

```sh
npm install reactive-variable
```

## Usage

### Making a reactive variable

You can create a reactive variable like this:

```js
import { makeVar } from "reactive-variable";

const titleVar = makeVar("This is the initial title");
```

### Reading the value of a reactive variable

To read the value of a reactive variable outside of a component, you call the
reactive variable without any parameters.

```js
console.log(titleVar());
```

To read the value of a reactive variable in a component, you use `useReactiveVar`.

```js
import { useReactiveVar } from "reactive-variable";

const AppTitle = () => {
  const title = useReactiveVar(titleVar);

  return <h1>{title}</h1>;
};
```

### Updating a reactive variable

To change a reactive variable, you call the variable with a new value:

```js
titleVar("This is my updated title");
```

## MIT License

Copyright (c) 2022 Sune Simonsen <mailto:sune@we-knowhow.dk>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
