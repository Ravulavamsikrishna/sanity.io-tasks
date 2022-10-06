import {UserIcon} from '@sanity/icons'
export default{
name:'header',
title:'Header',
type:'document',
icon:UserIcon,
fields:[
    {
       name:'enter_name',
        type:'string'
    },
    {
       name:'iteams',
       type:'array',
of:[
    {
        type:'string',
    },
   
]
    },
    

]
}