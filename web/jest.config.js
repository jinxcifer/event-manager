module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/test/jestSetup.ts'],
  roots: ['<rootDir>/src', '<rootDir>/test'],
  modulePaths: ['<rootDir>/src', '<rootDir>/test'],
  moduleNameMapper: {
    '^@app/(.*)$': '<rootDir>/src/$1',
    '^@test/(.*)$': '<rootDir>/test/$1',
    '^.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/test/mocks/file-mock.ts',
    '\\.(css|less|sass|scss)$': '<rootDir>/test/mocks/style-mock.ts',
  },
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleFileExtensions: ['tsx', 'ts', 'js'],
};
