export default {
    widgets: [
      {
        name: 'document-list',
        options: {
          title: 'Last edited documents',
          order: '_updatedAt desc',
        },
        layout: {
          width: 'auto',
          height: 'large'
        }
      },
      {
        name: 'document-list',
        options: {
          title: 'Last edited posts',
          order: '_updatedAt desc',
          types: ['post']
        }
      }
    ]
  }