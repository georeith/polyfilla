module.exports = {
    'extends': 'airbnb-base',
    'rules': {
        'no-console': 0,
        'no-use-before-define': [2, 'nofunc'],
        'indent': [2, 4, { 'SwitchCase': 1, 'VariableDeclarator': 1 }],
        'max-len': [0, 100, 4],
    },
};
