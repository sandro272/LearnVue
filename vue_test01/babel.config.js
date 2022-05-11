module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
    // 追加
    // ["es2015", { "modules": false }]
    ["@babel/preset-env", { "modules": false }]
  ],
  plugins: [
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}
