const nextConfig = {
  reactStrictMode: false,
  optimizeFonts: true,
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],

  // Add transpilation for packages using ES modules
  transpilePackages: [
    'rc-util',
    'rc-pagination',
    'rc-picker',
    'rc-input',
    'antd',
    '@ant-design/icons',
    '@ant-design/icons-svg',
    'rc-table',
    'rc-tooltip',
    'rc-collapse',
    'rc-tabs',
    'rc-drawer',
  ],

  compiler: {
    styledComponents: true,
  },

  env: {
    weatherMapApiBaseUrl: process.env.WEATHER_MAP_API_BASE_URL,
    weatherMapApiKey: process.env.WEATHER_MAP_API_KEY,
    weatherMapApiTimeout: '10000',
  },
};

export default nextConfig;
