const path = require('path')

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve('ts-loader'),
        options: {
          transpileOnly: true,
          configFile: path.resolve(__dirname, './tsconfig.json')
        }
      }
    ]
  })

  config.resolve.alias = {
    '~': path.resolve(__dirname, '../src')
  }

  config.resolve.extensions.push('.ts', '.tsx')

  return config
}
