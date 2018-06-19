let HtmlWebpackPlugin = require('html-webpack-plugin');
let mix = require('laravel-mix');

mix.sass('assets/sass/app.scss', 'css/');
mix.js('src/index.js', 'js/');

mix.setPublicPath(__dirname + "/dist");
mix.webpackConfig({
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 9000
  },
  plugins: [new HtmlWebpackPlugin({
    favicon: 'assets/img/favicon.ico',
    template: 'src/index.html'
  })]
});
mix.disableNotifications();
if (mix.config.inProduction) {
  mix.version();
}
