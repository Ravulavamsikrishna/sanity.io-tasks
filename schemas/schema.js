// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'


import schemaTypes from 'all:part:@sanity/base/schema-type'
import assetSources from './assetSources'
import dashboardConfi from './dashboardConfi'
import deskStructure from './deskStructure'
import initialValueTemp from './initialValueTemp'
import logo1 from './logo1'


export default createSchema({

  name: 'default',

  types: schemaTypes.concat([
    assetSources,
    dashboardConfi,
    deskStructure,
    initialValueTemp,
    logo1,

  ]),
})
