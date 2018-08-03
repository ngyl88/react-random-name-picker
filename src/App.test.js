import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import App from "./App";

// ES6 mocking
import { randomInt } from "mathjs";
jest.mock("mathjs", () => {
  return {
    randomInt: jest.fn()
  };
});

it("renders App without crashing", () => {
  const renderer = new ShallowRenderer();
  renderer.render(<App />);

  const output = renderer.getRenderOutput();
  expect(output).toMatchSnapshot();
});

it("renders App correctly after addNewName is called", () => {
  const renderer = new ShallowRenderer();
  renderer.render(<App />);

  const instance = renderer.getMountedInstance();
  instance.addNewName("Christmas");

  const output = renderer.getRenderOutput();
  expect(output).toMatchSnapshot();
});

it("renders App correctly after handleClick is called", () => {
  // randomInt.mockReset();
  randomInt.mockImplementationOnce(num => 2);

  const renderer = new ShallowRenderer();
  renderer.render(<App />);

  const instance = renderer.getMountedInstance();
  instance.handleClick();

  const output = renderer.getRenderOutput();
  expect(output).toMatchSnapshot();
});
