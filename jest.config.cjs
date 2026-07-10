module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/src/test/setupTests.ts"],
  moduleNameMapper: {
  "^.+/environments/environment$": "<rootDir>/src/environments/environment.mock.ts",
  "\\.(css|less|scss|sass)$": "identity-obj-proxy",
},
  testMatch: ["**/*.(test|spec).(ts|tsx)"],
};