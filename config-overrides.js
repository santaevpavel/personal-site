const { injectBabelPlugin } = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');

module.exports = function override(config, env) {
  config = injectBabelPlugin(
    ['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }], // change importing css to less
    config,
  );
  config = rewireLess.withLoaderOptions({
    modifyVars: {
      '@primary-color': '#006d75',
      '@menu-dark-bg': '#ffffff00',
      '@menu-dark-item-active-bg': '@primary-color',
      '@font-size-base' : '18px',
      '@font-size-lg' : '@font-size-base + 2px',
      '@font-size-sm' : '14px',
      '@text-color' : '#000000',
      '@text-color-dark' : '#000000',
      '@font-family' : 'Consolas'
    },
    javascriptEnabled: true,
  })(config, env);
  return config;
};
