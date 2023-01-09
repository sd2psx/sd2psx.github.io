module.exports = {
  title: 'SD2PSX',
  description: 'SD2PSX documentation',
  themeConfig: {
    sidebar: [
      {
        title: 'Get Started',
        path: '/get-started.html',
        collapsable: false,
        sidebarDepth: 1,
        children: [
          '/update-firmware.html',
          '/format-microsd.html',
          '/navigation.html',
          '/deploy-civ.html'
        ]
      }
    ]
  }
}
