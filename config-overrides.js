const { alias } = require('react-app-rewire-alias')

module.exports = function override(config, env) {
    alias({
        '@components':'src/components',
        '@ui': 'src/components/UI',
        '@constants':'src/constants',
        '@containers':'src/containers',
        '@hoc-helper':'src/hoc-helper',
        '@services':'src/services',
        '@utils':'src/utils',
        '@styles' : 'src/styles',
        '@routes' : 'src/routes',
        '@static': 'src/static',
        '@hooks' : 'src/hooks'
    })(config)

    
    return config;
  }