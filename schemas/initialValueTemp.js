import T from '@sanity/base/initial-value-template-builder'

export default [
  ...T.defaults(),

  T.template({
    id: 'authorWithRole',
    title: 'Author with role',
    schemaType: 'author',
   
    value: {
      name: 'developer'
    }
  })
]

