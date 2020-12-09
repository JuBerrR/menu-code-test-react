module.exports = {
    roots: ['<rootDir>/src'],
    transform: {
        '\\.(js|jsx)?$': 'babel-jest',
    },
    testRegex: '(/*\\.(test|spec))\\.(jsx|js)$',
    moduleFileExtensions: ['js', 'jsx'],
    testPathIgnorePatterns: ['/node_modules/', '/public/'],
    moduleNameMapper: {
        '^.+\\.(css|less|scss)$': 'babel-jest',
    },
};
