// var autoprefixer = require('autoprefixer');
// var CleanWebpackPlugin = require('clean-webpack-plugin');
// var HtmlWebpackPlugin = require('html-webpack-plugin');
// var webpack = require('webpack');
// var path = require('path');
// var ExtractTextPlugin = require("extract-text-webpack-plugin");

// var HtmlWebpackPlugin = require('html-webpack-plugin');

// //var CopyWebpackPlugin = require('copy-webpack-plugin');
// var ManifestPlugin = require('webpack-manifest-plugin');

// var publicPath = 'http://localhost:8080/';

// module.exports = {
//   // path.join(__dirname, 'src/js/index.jsx'),
//   entry: {
//     index: path.join(__dirname, '/src/js')
//   },
//   output: {
//     path:__dirname+'build',
//     filename: '[name].js',
//     publicPath:publicPath
//   },
//   watch: false,
//   resolve: {
//    extensions: ['','.css','.js','.jsx','.coffee','json','scss']
//   },
//   module: {
//     // preLoaders: [{
//     //   test: /\.js$/,
//     //   loader: "eslint",
//     //   exclude: /node_modules/
//     // }],
//     loaders: [
//       {test: /\.jsx$/, loader: 'babel?presets[]=es2015',exclude:/(node_modules)/ },
//       {test: /\.css$/, loader: "style!css",exclude:/(node_modules)/},
//       {test: /\.(jpg|png)$/, loader: "url?limit=8192",exclude:/(node_modules)/},
//       {test: /\.scss$/, loader: "style!css!sass",exclude:/(node_modules)/}
//     ]
//   },
//   plugins: [
//     // new CleanWebpackPlugin(packPath, {
//     //   root: __dirname,
//     //   verbose: true,
//     //   dry: false
//     // }),
//     // new ExtractTextPlugin("style-[contenthash].css", {
//     //   allChunks: true
//     // }),
//     // new HtmlWebpackPlugin({
//     //   //template: './projects/yaofang/home.html',
//     //   filename: 'main.html',
//     //   //chunks:'',
//     //   //hash: true
//     // }),
//     // new HtmlWebpackPlugin({
//     //   template: './projects/yaofang/home.html',
//     //   filename: 'home.html'
//     //   //hash: true
//     // }),
//     // new webpack.DefinePlugin({
//     //   "process.env": {
//     //      NODE_ENV: JSON.stringify(env)
//     //    }
//     // }),
//     // new webpack.ProvidePlugin({
//     //   ReactRouter: 'react-router',
//     //   React: 'react',
//     //   Util: path.join(__dirname,'./common/js/lib/util.js'),
//     //   ErrorCode: path.join(__dirname,'./common/js/constants/ErrorCode.js'),
//     //   Global: path.join(__dirname,'./common/js/constants/Global'),
//     //   AutoConfig: path.join(__dirname,'./autoconfig.js'),
//     //   CommonActions: path.join(__dirname, './common/js/actions/index'),
//     //   TouchSlide: path.join(__dirname, './common/js/lib/TouchSlide.1.1'),
//     //   TitleMgr: path.join(__dirname, './common/js/components/TitleMgr.react')
//     // }),
//     // new webpack.optimize.CommonsChunkPlugin("lib", "lib-[chunkhash].js"),
//     // new ManifestPlugin({
//     //   fileName: 'rev.json'
//     // })
//   ]
// };





var babelpolyfill = require("babel-polyfill");
var webpack = require('webpack');
var path=require('path');
var publicPath = '/';
var HtmlWebpackPlugin=require('html-webpack-plugin');
module.exports = {
  
    entry:{index: path.join(__dirname, '/src/js/index.jsx')},
    output:{
      path:__dirname+'build',
      filename: '[name].js',
      publicPath:publicPath
    },
    module:{
      loaders:[
        {
          test:/\.(css|scss)$/,
          loaders:['style','css','sass'],
          exclude:/node_modules/
        },
        {
          test:/\.jsx?$/,
          exclude: /node_modules/,
          loaders:['react-hot','babel'],
          include:path.resolve(__dirname,'src')
        },
        {
          test:/\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
          exclude: /node_modules/,
          loader:'url?limit=40000',
          include:path.resolve(__dirname,'src')
        }
      ]
    },
    externals: [{

    }],
    resolve:{
      extensions:['','.js','.css','.jsx','.html','.scss'],
      alias:{
        // jquery: "jquery/src/jquery"
      }
    },
    plugins:[
      new webpack.NoErrorsPlugin()
      //提公用js到common.js文件中
      // new webpack.optimize.CommonsChunkPlugin('src','js/common.js'),
      //使用ProvidePlugin加载使用频率高的模块
      // new webpack.ProvidePlugin({
      //       $: "webpack-zepto"
      // })
      // //将样式统一发布到style.css中
      // new ExtractTextPlugin("style.css", {
      //     allChunks: true,
      //     disable: false
      // }),
      // new HtmlWebpackPlugin({
      //   title:'Leave a message',
      //   chunks:'./react_build/react.js',
      //   filename:'index.html',
      //   inject:'body',
      //   hash:'true',
      //   showErrors:'true',
      //   chunksSortMode:'none',
      //   excludeChunks:/node_modules/,
      //   template:'./react/html_template/index.html'
      // })
    ]
}