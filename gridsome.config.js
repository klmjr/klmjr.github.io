// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const path = require('path')

function addStyleResource (rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/assets/sass/*.scss'),
      ],
    })
}
module.exports = {
  siteName: 'The Coding Quest',
  siteUrl: 'https://klmjr.github.io',
  pathPrefix: '/klmjr.github.io',
  transformers: {
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
      plugins: [
        // ...global plugins
      ]
    }
  },
  plugins: [
 
    {
      use: 'gridsome-source-storyblok',
      options: {
        client: {
          accessToken: 'idFLM3JjIHCZsr4U1hEKBQtt'
        },
        types: {
          story: {
            typeName: 'StoryblokEntry'
          }
        }
      }
    }
  
  ],
 


  chainWebpack (config) {
    // Load variables for all vue-files
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']


    // or if you use scss
    types.forEach(type => {
      addStyleResource(config.module.rule('scss').oneOf(type))
    })
  }
}
