// This file sets a custom webpack configuration to use your Next.js app
// with Sentry.
// https://nextjs.org/docs/api-reference/next.config.js/introduction
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

const { withSentryConfig } = require('@sentry/nextjs');

const moduleExports = {
  async redirects() { return [ { source: '/Publications/BusinessAndState/:path*', destination: '/BusinessAndState/:path*', permanent: true, }, { source: '/Publications/Politics/:path*', destination: '/Politics/:path*', permanent: true, }, { source: '/Publications/Economics/:path*', destination: '/Economics/:path*', permanent: true, }, { source: '/Publications/World/:path*', destination: '/World/:path*', permanent: true, }, { source: '/Publications/Society/:path*', destination: '/Society/:path*', permanent: true, }, { source: '/Publications/Culture/:path*', destination: '/Culture/:path*', permanent: true, }, {
    source: '/Publications/History/:path*',
    destination: '/History/:path*',
    permanent: true,
  },
    {
      source: '/Publications/Science/:path*',
      destination: '/Science/:path*',
      permanent: true,
    },
    {
      source: '/Publications/Pandemic/:path*',
      destination: '/Pandemic/:path*',
      permanent: true,
    },
    {
      source: '/Publications/Election/:path*',
      destination: '/Election/:path*',
      permanent: true,
    },
  ]
  },
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
    apiDomain: 'https://tyzhden.ua/api',
    domain: 'https://tyzhden.ua',
  },
};

const sentryWebpackPluginOptions = {
  // Additional config options for the Sentry Webpack plugin. Keep in mind that
  // the following options are set automatically, and overriding them is not
  // recommended:
  //   release, url, org, project, authToken, configFile, stripPrefix,
  //   urlPrefix, include, ignore

  silent: true, // Suppresses all logs
  // For all available options, see:
  // https://github.com/getsentry/sentry-webpack-plugin#options.
};

// Make sure adding Sentry options is the last code to run before exporting, to
// ensure that your source maps include changes from all other Webpack plugins
module.exports = withSentryConfig(moduleExports, sentryWebpackPluginOptions);
