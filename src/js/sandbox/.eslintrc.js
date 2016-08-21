/* eslint quote-props: ['error', 'consistent'] */
module.exports = {
    'env': {
        'browser': true,
    },
    'rules': {
        'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    },
};
