/**
 * 全局设置文件
 */

module.exports = {
  title: 'Vue2 Admin',
  /**
   * 这里方便代码里面使用而已，注意要和vue.config.js里面的同步修改
   */
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',

  /**
   * @type {boolean} true | false
   * @description Whether show the logo in sidebar
   */
  sidebarLogo: false,

  /**
   * @type {boolean} true | false
   * @description Whether need tagsView
   */
  tagsView: true,

  /**
   * @type {boolean} true | false
   * @description Whether fix the header
   */
  fixedHeader: false
}
