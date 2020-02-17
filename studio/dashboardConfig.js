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
                  buildHookId: '5e4acfb854fc5801f8308964',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-1sbf5c7s',
                  apiId: 'b484716a-018d-4a87-8d10-52b9bd9a60b3'
                },
                {
                  buildHookId: '5e4acfb8cafa6f0186cefadd',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-ufafetis',
                  apiId: '369f9fd9-9d87-498a-9622-e1d33d8e1ded'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/legalhustler1/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-ufafetis.netlify.com', category: 'apps'}
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
