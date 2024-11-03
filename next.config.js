/** @type {import('next').NextConfig} */

// NOTE(milo): For some reason, the `webpack.config.js` file was not being picked up by Next.js.
// Any changes need to happen here.
// https://stackoverflow.com/questions/62639858/webpack-loader-for-md-file-import-for-react-markdown-npm-library
// https://nextjs.org/docs/pages/api-reference/next-config-js/webpack
module.exports = {
  webpack: (
    config,
    { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
  ) => {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader'
    })

    config.module.rules.push({
      test: /\.mdx$/,
      use: [
        {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react'],
          },
        },
        {
          loader: '@mdx-js/loader',
          options: {
            remarkPlugins: [
              // require('remark-slug'),
              // require('remark-autolink-headings'),
              // require('remark-external-links'),
            ],
          },
        },
      ],
    })

    // Important: return the modified config
    return config
  },
}