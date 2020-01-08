export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5e15dd2f87aa6ef921c444ec',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-laurence-studio',
                  apiId: '86bd89af-f751-475f-90b2-f531124bd60e'
                },
                {
                  buildHookId: '5e15dd2fd808745a5864d0e0',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-laurence',
                  apiId: '3a65cf4f-5923-4d40-bdc3-204104b37798'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jamesgrubb/sanity-gatsby-laurence',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-laurence.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
