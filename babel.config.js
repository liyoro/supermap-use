module.exports = {
  presets: ['@vue/cli-plugin-babel/preset'],
  plugins: [
    [
      'component',
      {
        libraryName: 'element-ui',
        styleLibraryName: 'theme-chalk'
      }
    ],
    [
      '@supermap/babel-plugin-import',
      {
        libraryName: '@supermap/iclient-ol'
      }
    ]
    // [
    //   'import',
    //   {
    //     libraryName: '@supermap/vue-iclient-mapboxgl',
    //     style: 'css'
    //   }
    // ]
  ]
}
