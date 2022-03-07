import expect from "unexpected";
import { renderHook, cleanup } from "@testing-library/react-hooks";
import { makeVar, useReactiveVar } from "../src/index.mjs";

describe("useReactiveVar", () => {
  it("returns a reactive variable", () => {
    const messageVar = makeVar("Hello");

    const { result } = renderHook(() => useReactiveVar(messageVar));

    expect(result.current, "to equal", "Hello");
  });

  describe("when the variable is updated", () => {
    it("re-renders", () => {
      const messageVar = makeVar("Hello");

      const { result } = renderHook(() => useReactiveVar(messageVar));

      messageVar("Hello world");

      expect(result.current, "to equal", "Hello world");
    });
  });

  describe("when the variable is updated before a subjection", () => {
    it("reflect the updated value when subscribing", () => {
      const messageVar = makeVar("Hello");

      messageVar("Hello world");

      const { result } = renderHook(() => useReactiveVar(messageVar));

      expect(result.current, "to equal", "Hello world");
    });
  });

  describe("when updating multiple variables", () => {
    let count;
    beforeEach(() => {
      count = 0;
    });

    const useConcatenation = (aVar, bVar) => {
      const a = useReactiveVar(aVar);
      const b = useReactiveVar(bVar);

      count++;

      return a + b;
    };

    it("re-renders for each update", () => {
      const aVar = makeVar("a");
      const bVar = makeVar("b");

      const { result } = renderHook(() => useConcatenation(aVar, bVar));

      expect(result.current, "to equal", "ab");
      expect(count, "to equal", 1);

      aVar("foo");
      bVar("bar");

      expect(result.current, "to equal", "foobar");
      expect(count, "to equal", 3);
    });
  });

  describe("when the reactive var is unmounted", () => {
    it("no longer re-renders", () => {
      const messageVar = makeVar("Hello");

      const { result } = renderHook(() => useReactiveVar(messageVar));

      messageVar("Hello world");

      cleanup();

      messageVar("Hello beautiful world");

      expect(result.current, "to equal", "Hello world");
    });
  });
});
