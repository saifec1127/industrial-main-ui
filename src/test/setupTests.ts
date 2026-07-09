import "@testing-library/jest-dom";
import { TextEncoder, TextDecoder } from "node:util";

Object.defineProperty(globalThis, "TextEncoder", {
  value: TextEncoder,
});

Object.defineProperty(globalThis, "TextDecoder", {
  value: TextDecoder,
});