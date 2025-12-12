const config = {
  title: 'Cien API',
  tagline: 'Cien API Documentation',
  favicon: 'img/favicon.ico',

  // 🔴 CRITICAL FOR GITHUB PAGES
  url: 'https://cienai.github.io',
  baseUrl: '/cien-api-documentation/',

  organizationName: 'cienai',
  projectName: 'cien-api-documentation',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};

module.exports = config;