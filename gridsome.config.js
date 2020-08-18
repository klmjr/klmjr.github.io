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
  siteName: 'My portfolio',
  pathPrefix: '/path',
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
  plugins: [{
    use: '@gridsome/source-filesystem',
    options: {
      path: 'posts/**/*.md',
      typeName: 'Post',
      remark: {
        plugins: [
          // ...local plugins
        ]
      }
    }
    
  },
 { use: 'gridsome-source-google-sheets',
      options: {
        sheetId: '1GojviMk7-L_3E0Uuj3gCrdBZkKikdmPM6RSGpfJAHEk', 
        apiKey: 'GOOGLE_API_KEY',
        // type: 'TYPE_NAME', //Optional - default is googleSheet. Used for graphql queries.
      }
    },
  
  {
    use: `gridsome-plugin-netlify-cms`,
    options: {
      publicPath: `/admin`
    }
  },],
  chainWebpack (config) {
    // Load variables for all vue-files
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']


    // or if you use scss
    types.forEach(type => {
      addStyleResource(config.module.rule('scss').oneOf(type))
    })
  }
}
