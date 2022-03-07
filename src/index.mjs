import { useEffect, useState } from "react";

const createReactiveVar = (initialValue) => {
  let value = initialValue;
  const listeners = new Set();

  const reactiveVar = (...args) => {
    if (args.length === 0) {
      return value;
    } else {
      value = args[0];
      listeners.forEach((listener) => listener());
    }
  };

  reactiveVar._subscribe = (listener) => {
    listeners.add(listener);

    return () => listeners.delete(listener);
  };

  return reactiveVar;
};

export const makeVar = (initialValue) => createReactiveVar(initialValue);

export const useReactiveVar = (reactiveVar) => {
  const [value, setValue] = useState(reactiveVar());

  useEffect(
    () =>
      reactiveVar._subscribe(() => {
        setValue(reactiveVar());
      }),
    [reactiveVar]
  );

  return value;
};
