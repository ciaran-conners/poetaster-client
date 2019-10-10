module.exports = {
  extends: 'stylelint-config-recommended-scss',
  plugins: [
    'stylelint-order'
  ],
  rules: {
    'indentation': 2,
    'max-nesting-depth': 4,
    'max-empty-lines': 2,
    'color-hex-case': 'lower',
    'declaration-colon-space-after': 'always',
    'declaration-block-semicolon-newline-after': 'always',
    'no-descending-specificity': null,
    'order/properties-alphabetical-order': true
  }
};
