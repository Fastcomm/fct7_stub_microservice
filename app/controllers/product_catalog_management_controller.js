//  === Requirements ===
const { fake } = require('faker')
const faker = require('faker')

//  === Controller ===
module.exports = {
    
    index_catalog: function(request)
    {
        console.log("product_catalog_management_controller.index_catalog")
        return [
            {
                id: faker.datatype.uuid(),
                routeDetails: {
                    controller: 'Product Catalog Management',
                    action: 'index_catalog'
                },
                href: faker.internet.url(),
                name: "string",
                description: faker.random.words(),
                catalogType: faker.random.words(),
                version: "1.0",
                validFor: {
                    startDateTime: new Date(),
                    endDateTime: new Date()    
                },
                lastUpdate: new Date(),
                lifecycleStatus: "active",
                relatedParty: [
                    {
                        href: faker.internet.url(),
                        id: faker.datatype.uuid(),
                        name: "string",
                        role: "string"
                    },
                    {
                        href: faker.internet.url(),
                        id: faker.datatype.uuid(),
                        name: "string",
                        role: "string"
                    }
                ],
                category: [
                    {
                        href: faker.internet.url(),
                        id: faker.datatype.uuid(),
                        name: "string"
                    }
                ],
                "@type": "Catalog"
            }
        ]
    },
    show_catalog: function(request)
    {
        console.log("product_catalog_management_controller.show_catalog")
        return {
            id: request.params.id,
            routeDetails: {
                controller: 'Product Catalog Management',
                action: 'show_catalog'
            },
            href: faker.internet.url(),
            name: "string",
            description: faker.random.words(),
            catalogType: faker.random.words(),
            version: "1.0",
            validFor: {
                startDateTime: new Date(),
                endDateTime: new Date()    
            },
            lastUpdate: new Date(),
            lifecycleStatus: "active",
            relatedParty: [
                {
                    href: faker.internet.url(),
                    id: faker.datatype.uuid(),
                    name: "string",
                    role: "string"
                },
                {
                    href: faker.internet.url(),
                    id: faker.datatype.uuid(),
                    name: "string",
                    role: "string"
                }
            ],
            category: [
                {
                    href: faker.internet.url(),
                    id: faker.datatype.uuid(),
                    name: "string"
                }
            ],
            "@type": "Catalog"
        }
    },
    create_catalog: function(request)
    {
        console.log("product_catalog_management_controller.create_catalog")
        return {
            id: faker.datatype.uuid(),
            routeDetails: {
                controller: 'Product Catalog Management',
                action: 'create_catalog'
            },
            href: faker.internet.url(),
            name: "string",
            description: faker.random.words(),
            lastUpdate: new Date(),
            lifecycleStatus: "active",
            "@type": "Catalog" 
        }
    },
    update_catalog: function(request)
    {
        console.log("product_catalog_management_controller.update_catalog")
        return {
            id: request.params.id,
            routeDetails: {
                controller: 'Product Catalog Management',
                action: 'update_catalog'
            },
            href: faker.internet.url(),
            name: "string",
            description: faker.random.words(),
            catalogType: faker.random.words(),
            version: "1.0",
            validFor: {
                startDateTime: new Date(),
                endDateTime: new Date()    
            },
            lastUpdate: new Date(),
            lifecycleStatus: "active",
            relatedParty: [
                {
                    href: faker.internet.url(),
                    id: faker.datatype.uuid(),
                    name: "string",
                    role: "string"
                },
                {
                    href: faker.internet.url(),
                    id: faker.datatype.uuid(),
                    name: "string",
                    role: "string"
                }
            ],
            category: [
                {
                    href: faker.internet.url(),
                    id: faker.datatype.uuid(),
                    name: "string"
                }
            ],
            "@type": "Catalog"
           
            
           
        }

    },
    destroy_catalog: function(request)
    {
        console.log("product_catalog_management_controller.destroy_catalog")
        return {
            id: request.params.id,
            routeDetails: {
                controller: 'Product Catalog Management',
                action: 'destroy_catalog'
            },
            code: 204
        }
    },

    index_category: function(request)
    {
        console.log("product_catalog_management_controller.index_category")
        return [
            {
                id: faker.datatype.uuid(),
                routeDetails: {
                    controller: 'Product Catalog Management',
                    action: 'index_category'
                },
                href: faker.internet.url(),
                name: "string",
                description: faker.random.words(),
                version: "1.0",
                validFor: {
                    startDateTime: new Date(),
                    endDateTime: new Date()    
                },
                lifecycleStatus: "active",
                isRoot: true,
                lastUpdate: new Date(),

                catalogType: faker.random.words(),
                subCategory: [
                    {
                        href: faker.internet.url(),
                        id: faker.datatype.uuid(),
                        name: "string",
                        version: "1.0"
                    },
                    {
                        href: faker.internet.url(),
                        id: faker.datatype.uuid(),
                        name: "string",
                        version: "1.0"
                    }
                ],
                productOffering: [
                    {
                        id: faker.datatype.uuid(),
                        href: faker.internet.url(),
                        name: "string"
                    }
                ],
                "@type": "Category"
            }
        ]
    },
    show_category: function(request)
    {
        console.log("product_catalog_management_controller.show_category")
        return {
            id: request.params.id,
            routeDetails: {
                controller: 'Product Catalog Management',
                action: 'show_category'
            },
            href: faker.internet.url(),
            name: "string",
            description: faker.random.words(),
            version: "1.0",
            validFor: {
                startDateTime: new Date(),
                endDateTime: new Date()    
            },
            lifecycleStatus: "active",
            lastUpdate: new Date(),
            subCategory: [
                {
                    href: faker.internet.url(),
                    id: faker.datatype.uuid(),
                    name: "string",
                    version: "1.0"
                },
                {
                    href: faker.internet.url(),
                    id: faker.datatype.uuid(),
                    name: "string",
                    version: "1.0"
                }
            ],
            productOffering: [
                {
                    id: faker.datatype.uuid(),
                    href: faker.internet.url(),
                    name: "string"
                }
            ],
            "@type": "Category"
        }
    },
    create_category: function(request)
    {
        console.log("product_catalog_management_controller.create_category")
        return {
            id: faker.datatype.uuid(),
            routeDetails: {
                controller: 'Product Catalog Management',
                action: 'create_category'
            },
            href: faker.internet.url(),
            name: "string",
            description: faker.random.words(),
            version: "1.0",
            lastUpdate: new Date(),
            "@type": "Category"
        }
    },
    update_category: function(request)
    {
        console.log("product_catalog_management_controller.update_category")
        return {
            id: request.params.id,
            routeDetails: {
                controller: 'Product Catalog Management',
                action: 'update_category'
            },
            href: faker.internet.url(),
            name: "string",
            description: faker.random.words(),
            version: "1.0",
            validFor: {
                startDateTime: new Date(),
                endDateTime: new Date()    
            },
            lifecycleStatus: "active",
            isRoot: true,
            lastUpdate: new Date(),
            subCategory: [
                {
                    href: faker.internet.url(),
                    id: faker.datatype.uuid(),
                    name: "string",
                    version: "1.0"
                },
                {
                    href: faker.internet.url(),
                    id: faker.datatype.uuid(),
                    name: "string",
                    version: "1.0"
                }
            ],
            productOffering: [
                {
                    id: faker.datatype.uuid(),
                    href: faker.internet.url(),
                    name: "string"
                }
            ],
            "@type": "Category"
        }
    },
    destroy_category: function(request)
    {
        console.log("product_catalog_management_controller.destroy_category")
        return {
            id: request.params.id,
            routeDetails: {
                controller: 'Product Catalog Management',
                action: 'destroy_category'
            },
            code: 204
        }
    },

    index_product_offering: function(request)
    {
        console.log("product_catalog_management_controller.index_product_offering")
        return [
            {
                id: faker.datatype.uuid(),
                routeDetails: {
                    controller: 'Product Catalog Management',
                    action: 'index_product_offering'
                },
                href: faker.internet.url(),
                

                
            }
        ]
    },
    show_product_offering: function(request)
    {
        console.log("product_catalog_management_controller.show_product_offering")
        return {
            id: request.params.id,
            routeDetails: {
                controller: 'Product Catalog Management',
                action: 'show_product_offering'
            },
            href: faker.internet.url(),
            
        }
    },
    create_product_offering: function(request)
    {
        console.log("product_catalog_management_controller.create_product_offering")
        return {
            id: faker.datatype.uuid(),
            routeDetails: {
                controller: 'Product Catalog Management',
                action: 'create_product_offering'
            },
            href: faker.internet.url(),
            
            
        }
    },
    update_product_offering: function(request)
    {
        console.log("product_catalog_management_controller.update_product_offering")
        return {
            id: request.params.id,
            routeDetails: {
                controller: 'Product Catalog Management',
                action: 'update_product_offering'
            },
            href: faker.internet.url(),
           
            
           
        }

    },
    destroy_product_offering: function(request)
    {
        console.log("product_catalog_management_controller.destroy_product_offering")
        return {
            id: request.params.id,
            routeDetails: {
                controller: 'Product Catalog Management',
                action: 'destroy_product_offering'
            },
            code: faker.datatype.number(),
            reason: "string",
            message: "string",
            status: "Appointment entry destroyed successfully",
            referenceError: "string",
            "@type": "string",
            "@schemaLocation": "string"
        }
    },

    index: function(request)
    {
        console.log("product_catalog_management_controller.index")
        return [
            {
                id: faker.datatype.uuid(),
                routeDetails: {
                    controller: 'Product Catalog Management',
                    action: 'index_appointment'
                },
                href: faker.internet.url(),
                

                
            }
        ]
    },
    show: function(request)
    {
        console.log("product_catalog_management_controller.show")
        return {
            id: request.params.id,
            routeDetails: {
                controller: 'Product Catalog Management',
                action: 'show_appointment'
            },
            href: faker.internet.url(),
            
        }
    },
    create: function(request)
    {
        console.log("product_catalog_management_controller.create")
        return {
            id: faker.datatype.uuid(),
            routeDetails: {
                controller: 'Product Catalog Management',
                action: 'create_appointment'
            },
            href: faker.internet.url(),
            
            
        }
    },
    update: function(request)
    {
        console.log("product_catalog_management_controller.update")
        return {
            id: request.params.id,
            routeDetails: {
                controller: 'Product Catalog Management',
                action: 'update_appointment'
            },
            href: faker.internet.url(),
           
            
           
        }

    },
    destroy: function(request)
    {
        console.log("product_catalog_management_controller.destroy")
        return {
            id: request.params.id,
            routeDetails: {
                controller: 'Product Catalog Management',
                action: 'destroy_appointment'
            },
            code: faker.datatype.number(),
            reason: "string",
            message: "string",
            status: "Appointment entry destroyed successfully",
            referenceError: "string",
            "@type": "string",
            "@schemaLocation": "string"
        }
    },

    index: function(request)
    {
        console.log("product_catalog_management_controller.index")
        return [
            {
                id: faker.datatype.uuid(),
                routeDetails: {
                    controller: 'Product Catalog Management',
                    action: 'index_appointment'
                },
                href: faker.internet.url(),
                

                
            }
        ]
    },
    show: function(request)
    {
        console.log("product_catalog_management_controller.show")
        return {
            id: request.params.id,
            routeDetails: {
                controller: 'Product Catalog Management',
                action: 'show_appointment'
            },
            href: faker.internet.url(),
            
        }
    },
    create: function(request)
    {
        console.log("product_catalog_management_controller.create")
        return {
            id: faker.datatype.uuid(),
            routeDetails: {
                controller: 'Product Catalog Management',
                action: 'create_appointment'
            },
            href: faker.internet.url(),
            
            
        }
    },
    update: function(request)
    {
        console.log("product_catalog_management_controller.update")
        return {
            id: request.params.id,
            routeDetails: {
                controller: 'Product Catalog Management',
                action: 'update_appointment'
            },
            href: faker.internet.url(),
           
            
           
        }

    },
    destroy: function(request)
    {
        console.log("product_catalog_management_controller.destroy")
        return {
            id: request.params.id,
            routeDetails: {
                controller: 'Product Catalog Management',
                action: 'destroy_appointment'
            },
            code: faker.datatype.number(),
            reason: "string",
            message: "string",
            status: "Appointment entry destroyed successfully",
            referenceError: "string",
            "@type": "string",
            "@schemaLocation": "string"
        }
    },

    index: function(request)
    {
        console.log("product_catalog_management_controller.index")
        return [
            {
                id: faker.datatype.uuid(),
                routeDetails: {
                    controller: 'Product Catalog Management',
                    action: 'index_appointment'
                },
                href: faker.internet.url(),
                

                
            }
        ]
    },
    show: function(request)
    {
        console.log("product_catalog_management_controller.show")
        return {
            id: request.params.id,
            routeDetails: {
                controller: 'Product Catalog Management',
                action: 'show_appointment'
            },
            href: faker.internet.url(),
            
        }
    },
    create: function(request)
    {
        console.log("product_catalog_management_controller.create")
        return {
            id: faker.datatype.uuid(),
            routeDetails: {
                controller: 'Product Catalog Management',
                action: 'create_appointment'
            },
            href: faker.internet.url(),
            
            
        }
    },

    destroy: function(request)
    {
        console.log("product_catalog_management_controller.destroy")
        return {
            id: request.params.id,
            routeDetails: {
                controller: 'Product Catalog Management',
                action: 'destroy_appointment'
            },
            code: faker.datatype.number(),
            reason: "string",
            message: "string",
            status: "Appointment entry destroyed successfully",
            referenceError: "string",
            "@type": "string",
            "@schemaLocation": "string"
        }
    },

    index: function(request)
    {
        console.log("product_catalog_management_controller.index")
        return [
            {
                id: faker.datatype.uuid(),
                routeDetails: {
                    controller: 'Product Catalog Management',
                    action: 'index_appointment'
                },
                href: faker.internet.url(),
                

                
            }
        ]
    },
    show: function(request)
    {
        console.log("product_catalog_management_controller.show")
        return {
            id: request.params.id,
            routeDetails: {
                controller: 'Product Catalog Management',
                action: 'show_appointment'
            },
            href: faker.internet.url(),
            
        }
    },
    create: function(request)
    {
        console.log("product_catalog_management_controller.create")
        return {
            id: faker.datatype.uuid(),
            routeDetails: {
                controller: 'Product Catalog Management',
                action: 'create_appointment'
            },
            href: faker.internet.url(),
            
            
        }
    },
    destroy: function(request)
    {
        console.log("product_catalog_management_controller.destroy")
        return {
            id: request.params.id,
            routeDetails: {
                controller: 'Product Catalog Management',
                action: 'destroy_appointment'
            },
            code: faker.datatype.number(),
            reason: "string",
            message: "string",
            status: "Appointment entry destroyed successfully",
            referenceError: "string",
            "@type": "string",
            "@schemaLocation": "string"
        }
    },

    create_hub: function(request)
    {
        console.log("product_catalog_management_controller.create_hub")
        
        return {
            id: faker.datatype.uuid(),
            routeDetails: {
                controller: 'Product Catalog Management',
                action: 'create_hub'
            },
            callback: "string"
        }
    },
    destroy_hub: function(request)
    {
        console.log("product_catalog_management_controller.destroy_hub")

        return {
            id: request.params.hub_id,
            routeDetails: {
                controller: 'Product Catalog Management',
                action: 'destroy_hub'
            },
            message: "Have succesfully removed"
        }
    },
    create_client_listener: function(request)
    {
        console.log("product_catalog_management_controller.create_client_listener")

        return {
            id: faker.datatype.uuid(),
            routeDetails: {
                controller: 'Product Catalog Management',
                action: 'create_client_listener'
            },
            eventId : faker.datatype.uuid(),
            eventType: "string",
            event: {
                id: faker.datatype.uuid(),
                callback: "string",
                query: "string"
            }
        }
    },

}