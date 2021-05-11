const { override, fixBabelImports, addLessLoader } = require('customize-cra');

module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
    }),
    addLessLoader({//改主题颜色
        javascriptEnabled: true,
        modifyVars: { '@primary-color': '#1DA57A' },
    }),
);

const { addWebpackAlias } = require('customize-cra');
const { resolve } = require("path");
module.exports = override(
    addWebpackAlias({//改别名
        "@": resolve("src")
    }),
);

const { addDecoratorsLegacy } = require('customize-cra');
module.exports = override(
    addDecoratorsLegacy(),
);
