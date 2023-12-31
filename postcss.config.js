module.exports = {
  plugins: {
    '@our-patches/postcss-px-to-viewport': {
      unitToConvert: 'px', // 要转化的单位
      viewportWidth: 1920, // UI设计稿的宽度
      unitPrecision: 6, // 转换后的精度，即小数点位数
      propList: ['*'], // 指定转换的css属性的单位，*代表全部css属性的单位都进行转换
      viewportUnit: 'vw', // 指定需要转换成的视窗单位，默认vw
      fontViewportUnit: 'vw', // 指定字体需要转换成的视窗单位，默认vw
      minPixelValue: 1, // 默认值1，小于或等于1px则不进行转换
      mediaQuery: true, // 是否在媒体查询的css代码中也进行转换，默认false
      replace: true, // 是否转换后直接更换属性值
      landscape: false, // 是否添加根据 landscapeWidth 生成的媒体查询条件 @media (orientation: landscape)
      landscapeUnit: 'rem', // 横屏时使用的单位
      landscapeWidth: 1134, // 横屏时使用的视口宽度
      include: [/src\/views\/bigscreen\//], //  /\/src\/mobile\//
      // include: /\/src\/views\/bigscreen\//,
      exclude: [/node_modules/] // 设置忽略文件，用正则做目录名匹配
    }
  }
}
