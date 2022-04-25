import { renderHook } from "@testing-library/react-hooks";
import { useInputValue } from "./useInputValue";

describe("Test Hooks bro", () => {
  it("return current initial value", () => {
    const { result } = renderHook(() => useInputValue("TEST BROK"));
    expect(result.current.value).toEqual("TEST BROK");
  });
});
