// Test away
import React from "react"
import {render} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Dashboard from "./Dashboard";

test('dashboard renders without crashing', () => {
    render(<Dashboard />);
  });
  
  test('dashboard gate displaying, defaulting to unlocked and open', () => {
    const { getByText } = render(<Dashboard />);
  
    getByText(/unlocked/i);
    getByText(/open/i);
  });
  
  test('dashboard controls displaying', () => {
    const { getByText } = render(<Dashboard />);
  
    getByText(/lock gate/i);
    getByText(/close gate/i);
  });