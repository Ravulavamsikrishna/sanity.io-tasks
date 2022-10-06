export default{
        name:'example',
        type:'document',
        fields:[
            {
        name:'geopoint',
        type:'geopoint',
            },
            {
                name:'array',
                type:'array',
                of:[
                  
                    {
                    type:'url', 
                    },
                    {
                        type:'reference',
                        to:[
                            {
                                type:'person'
                            }
                        ]
    
                    },
                    {
                        type:'image',
                        options:{
                            hotspot:true
                        },
    
                    
                    
                        list:[
                            {
                                title:'Center',value:'center'
                            },
                            {
                                title:'Rightr',value:'right'
                            },
                            {
                            title:'Left',value:'left'
                            }
                        ],
                        options:{
                            isHighLighted:true,
                            layought:'radio'
                        }
    
            }
                ]
            }
        ]
    }