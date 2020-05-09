export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5eb613d76b524c444459240f',
                  title: 'Sanity Studio',
                  name: 'raven-landing-page-studio',
                  apiId: '42291754-ffe6-4fe6-a413-4476df378690'
                },
                {
                  buildHookId: '5eb613d7dfd2a00e3ce25425',
                  title: 'Landing pages Website',
                  name: 'raven-landing-page-web',
                  apiId: 'e51b94fb-fbca-427b-a7a7-af0057df7711'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/joelcormack/raven-landing-page',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://raven-landing-page-web.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
