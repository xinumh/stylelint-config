module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-rational-order',
    'stylelint-config-prettier'
  ],
  // plugins: ['stylelint-order'],
  rules: {
    'at-rule-no-unknown': null,
    'selector-pseudo-class-no-unknown': null
  }
}
