import type { Config } from 'jest'

const config: Config = {
  verbose: true,
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.(css|less)$': 'indentity-obj-proxy'
  }
}

export default config
