module.exports = {
    "parser": '@typescript-eslint/parser',
    "plugins": ['@typescript-eslint'],
    "extends": "plugin:@typescript-eslint/recommended",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "rules": {
        "indent": "off",
        "@typescript-eslint/no-unused-vars": ["error", { "argsIgnorePattern": "(next|res|req)" }],
        "@typescript-eslint/indent": ["error", 2],
        "@typescript-eslint/member-delimiter-style": ["error", {
            "singleline": {
                "delimiter": "comma"
            },
            "multiline": {
                "delimiter": "comma"
            }
        }]
    }
};