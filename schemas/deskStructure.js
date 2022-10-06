// /deskStructure.js
import S from '@sanity/desk-tool/structure-builder'
import React from 'react'


const JsonPreview = ({document}) => (
  <> 
    <h1>JSON Data for "{`${document.displayed.title}`}"</h1>
    
    // Stringifying a JSON representation of the displayed data
    <pre>{JSON.stringify(document.displayed, null, 2)}</pre>
 
  </>
)
  
  export const getDefaultDocumentNode = () => {
    // Give all documents the JSON preview, 
    // as well as the default form view
    return S.document().views([
      S.view.form(),
      S.view.component(JsonPreview).title('JSON')
    ])
  }

export default () =>
  S.list()
    .title('MYown')
    .items([
      S.listItem()
        .title('Settings')
        .child(           
          S.list()
            // Sets a title for our new list
            .title('Filtered Posts')
            .items([            
                S.listItem()
                .title('Filters').child(
                    S.list().title('just').items([
                        S.listItem()
                        .title('Posts By Category')
                        .child(
                            S.documentTypeList('category')
      .title('Posts by Category').child(categoryId =>
        S.documentList()
          .title('Posts')
          .filter('_type == "post" && $categoryId in categories[]._ref')
          .params({ categoryId })
      )
                        ),
                        
                     
                      S.listItem()
                        .title('Posts By Author')
                        .child(
                            S.documentTypeList('author')
                              .title('Posts by Author')
                              .child(authorId =>
                                S.documentList()
                                  .title('Posts')
                                  .filter('_type == "post" && $authorId == author._ref')
                                  .params({ authorId })
                              )
                          )
                        
                    ])
            // Sets a title for our new list
                )
            ]

            )           
        )
        ,
        S.divider(),
      S.listItem()
        .title('All Posts')
        .child(
          /* Create a list of all posts */
          S.documentList()
            .title('All Posts')
            .filter('_type == "post"')
        ),   
        S.divider(),
        
      // We also need to remove the new singletons from the main list
      ...S.documentTypeListItems().filter(listItem => !['post','siteSettings', 'colors', 'navigation'].includes(listItem.getId()))
    ])