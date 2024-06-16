import type { Config } from 'jest';
import nextJest from 'next/jest.js';
 
const createJestConfig = nextJest({
  dir: './',
})
 
// Add any custom config to be passed to Jest
const config: Config = {
  coverageProvider: 'v8',
  testEnvironment: 'jest-environment-jsdom',
  preset: "ts-jest"
}
export default createJestConfig(config)