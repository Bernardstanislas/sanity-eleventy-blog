export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
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
                  buildHookId: '60ae09320366969dd584b846',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-qyaoc1do',
                  apiId: 'b164fa74-fe8d-4b86-9934-7ecba794dcac'
                },
                {
                  buildHookId: '60ae0932939fdea301207f11',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-87t3tjas',
                  apiId: 'd5904b53-01c3-49c0-a07c-96acc1db5cef'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Bernardstanislas/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-87t3tjas.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
