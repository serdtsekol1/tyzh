module.exports = {
  future: {
    webpack5: true,
  },
  webpack: (config, options) => {
    config.module.rules.push(
      {
        test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ]
      }
    );
    return config
  },
  env: {
    apiDomain: 'https://tyzhden.ua/api/',
  },
}
