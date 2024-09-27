const { FusesPlugin } = require('@electron-forge/plugin-fuses');
const { FuseV1Options, FuseVersion } = require('@electron/fuses');
const path = require('path');

module.exports = {
  packagerConfig: {
    icon: path.join(__dirname, 'assets/app'), // 自定义图标路径
    asar: true, // 可选：将应用打包为 ASAR 格式
  },
  rebuildConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-squirrel', // 为 Windows 添加 Squirrel 打包工具
      config: {
        name: 'MdEditorPlus', // 可选：设置应用名称
        // 其他配置项，如 setupIcon 等
        setupIcon: path.join(__dirname, 'assets/app.ico'), // 可选：自定义安装程序图标
      },
    },
    {
      name: '@electron-forge/maker-zip',
      platforms: ['darwin'],
    },
    {
      name: '@electron-forge/maker-deb',
      config: {},
    },
    {
      name: '@electron-forge/maker-rpm',
      config: {},
    },
  ],
};

  plugins: [
    {
      name: '@electron-forge/plugin-auto-unpack-natives',
      config: {},
    },
    // Fuses are used to enable/disable various Electron functionality
    // at package time, before code signing the application
    new FusesPlugin({
      version: FuseVersion.V1,
      [FuseV1Options.RunAsNode]: false,
      [FuseV1Options.EnableCookieEncryption]: true,
      [FuseV1Options.EnableNodeOptionsEnvironmentVariable]: false,
      [FuseV1Options.EnableNodeCliInspectArguments]: false,
      [FuseV1Options.EnableEmbeddedAsarIntegrityValidation]: true,
      [FuseV1Options.OnlyLoadAppFromAsar]: true,
    }),
  ]

