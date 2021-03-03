module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/recommended", // or 'plugin:vue/base'
  ],
  rules: {
    // 0:off 1:on 2:error
    eqeqeq: 1,
    "no-console": 0,
    // 解决iview x-invalid-end-tag eslint报错问题
    "vue/no-parsing-error": [2, { "x-invalid-end-tag": false }],
    "vue/no-unused-components": 1,
    "vue/no-unused-vars": 1,
    "vue/require-default-prop": 0,
    "no-irregular-whitespace": 0,
    "no-unused-vars": 1,
    camelcase: 0,
    semi: [1, "always"], //末尾需要分号结束
    "no-extra-semi": 1, //禁用不必要的分号
    "no-lonely-if": 1, // 禁止 if 语句作为唯一语句出现在 else 语句块中
    "no-multiple-empty-lines": [1, { max: 3 }], //不允许多个空行,最大空行为3
    "no-whitespace-before-property": 1, //禁止属性前有空白
    // "arrow-parens": [1,"as-needed"],  // 要求箭头函数在有多个参数情况下使用圆括号
    "space-before-function-paren": 0, // 函数括号前后需要空格
    "no-useless-escape": 0,
    "no-var": 1, //不允许 var
    "prefer-arrow-callback": 1, //回调函数使用箭头函数
    "prefer-const": 1, //使用 const 声明那些声明后不再被修改的变量
    "vue/order-in-components": 0,  //按顺讯书写vue option
    // "vue/require-v-for-key": 0
    "vue/max-attributes-per-line": [1,{"singleline": 5}]  //每行最多5个属性，超过5个就换行
  },
  parserOptions: {
    parser: "babel-eslint",
  },
};
