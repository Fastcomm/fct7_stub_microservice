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
                name: "string",
                description: faker.random.words(),
                version: "1.0",
                validFor: {
                    startDateTime: new Date(),
                    endDateTime: new Date()    
                },
                lastUpdate: new Date(),
                lifecycleStatus: "Active",
                isBundle: false,
                isSellable: true,
                statusReason: "string",
                place: [
                    {
                        id: faker.datatype.uuid(),
                        href: faker.internet.url(),
                        name: "string",
                        "@referredType": "GeographicAddress"
                    }
                ],
                serviceLevelAgreement: {
                    id: faker.datatype.uuid(),
                    href: faker.internet.url(),
                    name: "string",
                    "@referredType": "BusinessSLA"
                },
                productSpecification: {
                    id: faker.datatype.uuid(),
                    href: faker.internet.url(),
                    version: "1.0",
                    name: "string",
                    "@referredType": "DeviceSpecification"
                },
                channel: [
                    {
                        id: faker.datatype.uuid(),
                        href: faker.internet.url(),
                        name: "string"
                    }
                ],
                serviceCandidate: {
                    id: faker.datatype.uuid(),
                    href: faker.internet.url(),
                    version: "1.0",
                    name: "string"
                },
                category: [
                    {
                        id: faker.datatype.uuid(),
                        href: faker.internet.url(),
                        version: "1.0",
                        name: "string"
                    }
                ],
                resourceCandidate: {
                    id: faker.datatype.uuid(),
                    href: faker.internet.url(),
                    name: "string"
                },
                productOfferingTerm: [
                    {
                        name: "string",
                        description: faker.random.words(),
                        duration: {
                            amount: 3,
                            units: "string"
                        },
                        validFor: {
                            startDateTime: new Date(),
                            endDateTime: new Date()    
                        }
                    }
                ],
                productOfferingPrice: [
                    {
                        id: faker.datatype.uuid(),
                        href: faker.internet.url(),
                        name: "string"
                    }
                ],
                attachment: [
                    {
                        description: faker.random.words(),
                        mimeType: "string",
                        url: faker.internet.url()
                    }
                ],
                marketSegment: [
                    {
                        id: faker.datatype.uuid(),
                        href: faker.internet.url(),
                        name: "string" 
                    }
                ],
                prodSpecCharValueUse: [
                    {
                        name: "string",
                        description: faker.random.words(),
                        valueType: "number",
                        minCardinality: 1,
                        maxCardinality: 1,
                        validFor: {
                            startDateTime: new Date(),
                            endDateTime: new Date()    
                        },
                        productSpecCharacteristicValue: [
                            {
                                isDefault: true,
                                valueType: "number",
                                validFor: {
                                    startDateTime: new Date(),
                                    endDateTime: new Date()    
                                },
                                value: 8
                            },
                            {
                                isDefault: true,
                                valueType: "number",
                                validFor: {
                                    startDateTime: new Date(),
                                    endDateTime: new Date()    
                                },
                                value: 16 
                            }
                        ],
                        productSpecification: {
                            id: faker.datatype.uuid(),
                            href: faker.internet.url(),
                            version: "1.1" 
                        }
                    }
                ],
                "@type": "ProductOffering"
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
            name: "string",
            description: faker.random.words(),
            version: "1.0",
            validFor: {
                startDateTime: new Date(),
                endDateTime: new Date()    
            },
            lastUpdate: new Date(),
            lifecycleStatus: "Active",
            isBundle: false,
            isSellable: true,
            statusReason: "string",
            place: [
                {
                    id: faker.datatype.uuid(),
                    href: faker.internet.url(),
                    name: "string",
                    "@referredType": "GeographicAddress"
                }
            ],
            serviceLevelAgreement: {
                id: faker.datatype.uuid(),
                href: faker.internet.url(),
                name: "string",
                "@referredType": "BusinessSLA"
            },
            productSpecification: {
                id: faker.datatype.uuid(),
                href: faker.internet.url(),
                version: "1.0",
                name: "string",
                "@referredType": "DeviceSpecification"
            },
            channel: [
                {
                    id: faker.datatype.uuid(),
                    href: faker.internet.url(),
                    name: "string"
                }
            ],
            serviceCandidate: {
                id: faker.datatype.uuid(),
                href: faker.internet.url(),
                version: "1.0",
                name: "string"
            },
            category: [
                {
                    id: faker.datatype.uuid(),
                    href: faker.internet.url(),
                    version: "1.0",
                    name: "string"
                }
            ],
            resourceCandidate: {
                id: faker.datatype.uuid(),
                href: faker.internet.url(),
                name: "string"
            },
            productOfferingTerm: [
                {
                    name: "string",
                    description: faker.random.words(),
                    duration: {
                        amount: 3,
                        units: "string"
                    },
                    validFor: {
                        startDateTime: new Date(),
                        endDateTime: new Date()    
                    }
                }
            ],
            productOfferingPrice: [
                {
                    id: faker.datatype.uuid(),
                    href: faker.internet.url(),
                    name: "string"
                }
            ],
            attachment: [
                {
                    description: faker.random.words(),
                    mimeType: "string",
                    url: faker.internet.url()
                }
            ],
            marketSegment: [
                {
                    id: faker.datatype.uuid(),
                    href: faker.internet.url(),
                    name: "string" 
                }
            ],
            prodSpecCharValueUse: [
                {
                    name: "string",
                    description: faker.random.words(),
                    valueType: "number",
                    minCardinality: 1,
                    maxCardinality: 1,
                    validFor: {
                        startDateTime: new Date(),
                        endDateTime: new Date()    
                    },
                    productSpecCharacteristicValue: [
                        {
                            isDefault: true,
                            valueType: "number",
                            validFor: {
                                startDateTime: new Date(),
                                endDateTime: new Date()    
                            },
                            value: 8
                        },
                        {
                            isDefault: true,
                            valueType: "number",
                            validFor: {
                                startDateTime: new Date(),
                                endDateTime: new Date()    
                            },
                            value: 16 
                        }
                    ],
                    productSpecification: {
                        id: faker.datatype.uuid(),
                        href: faker.internet.url(),
                        version: "1.1" 
                    }
                }
            ],
            "@type": "ProductOffering"
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
            name: "string",
            description: faker.random.words(),
            version: "1.0",
            validFor: {
                startDateTime: new Date(),
                endDateTime: new Date()    
            },
            isBundle: false,
            isSellable: true,
            statusReason: "string",
            place: [
                {
                    id: faker.datatype.uuid(),
                    href: faker.internet.url(),
                    name: "string",
                    "@referredType": "GeographicAddress"
                }
            ],
            serviceLevelAgreement: {
                id: faker.datatype.uuid(),
                href: faker.internet.url(),
                name: "string",
                "@referredType": "BusinessSLA"
            },
            productSpecification: {
                id: faker.datatype.uuid(),
                href: faker.internet.url(),
                version: "1.0",
                name: "string",
                "@referredType": "DeviceSpecification"
            },
            channel: [
                {
                    id: faker.datatype.uuid(),
                    href: faker.internet.url(),
                    name: "string"
                }
            ],
            serviceCandidate: {
                id: faker.datatype.uuid(),
                href: faker.internet.url(),
                version: "1.0",
                name: "string"
            },
            category: [
                {
                    id: faker.datatype.uuid(),
                    href: faker.internet.url(),
                    version: "1.0",
                    name: "string"
                }
            ],
            resourceCandidate: {
                id: faker.datatype.uuid(),
                href: faker.internet.url(),
                name: "string"
            },
            productOfferingTerm: [
                {
                    name: "string",
                    description: faker.random.words(),
                    duration: {
                        amount: 3,
                        units: "string"
                    },
                    validFor: {
                        startDateTime: new Date(),
                        endDateTime: new Date()    
                    }
                }
            ],
            productOfferingPrice: [
                {
                    id: faker.datatype.uuid(),
                    href: faker.internet.url(),
                    name: "string"
                }
            ],
            attachment: [
                {
                    description: faker.random.words(),
                    mimeType: "string",
                    url: faker.internet.url()
                }
            ],
            marketSegment: [
                {
                    id: faker.datatype.uuid(),
                    href: faker.internet.url(),
                    name: "string" 
                }
            ],
            prodSpecCharValueUse: [
                {
                    name: "string",
                    description: faker.random.words(),
                    valueType: "number",
                    minCardinality: 1,
                    maxCardinality: 1,
                    validFor: {
                        startDateTime: new Date(),
                        endDateTime: new Date()    
                    },
                    productSpecCharacteristicValue: [
                        {
                            isDefault: true,
                            valueType: "number",
                            validFor: {
                                startDateTime: new Date(),
                                endDateTime: new Date()    
                            },
                            value: 8
                        },
                        {
                            isDefault: true,
                            valueType: "number",
                            validFor: {
                                startDateTime: new Date(),
                                endDateTime: new Date()    
                            },
                            value: 16 
                        }
                    ],
                    productSpecification: {
                        id: faker.datatype.uuid(),
                        href: faker.internet.url(),
                        version: "1.1" 
                    }
                }
            ],
            "@type": "ProductOffering"
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
            name: "string",
            description: faker.random.words(),
            version: "1.0",
            validFor: {
                startDateTime: new Date(),
                endDateTime: new Date()    
            },
            lastUpdate: new Date(),
            lifecycleStatus: "Active",
            isBundle: false,
            isSellable: true,
            statusReason: "string",
            place: [
                {
                    id: faker.datatype.uuid(),
                    href: faker.internet.url(),
                    name: "string",
                    "@referredType": "GeographicAddress"
                }
            ],
            serviceLevelAgreement: {
                id: faker.datatype.uuid(),
                href: faker.internet.url(),
                name: "string",
                "@referredType": "BusinessSLA"
            },
            productSpecification: {
                id: faker.datatype.uuid(),
                href: faker.internet.url(),
                version: "1.0",
                name: "string",
                "@referredType": "DeviceSpecification"
            },
            channel: [
                {
                    id: faker.datatype.uuid(),
                    href: faker.internet.url(),
                    name: "string"
                }
            ],
            serviceCandidate: {
                id: faker.datatype.uuid(),
                href: faker.internet.url(),
                version: "1.0",
                name: "string"
            },
            category: [
                {
                    id: faker.datatype.uuid(),
                    href: faker.internet.url(),
                    version: "1.0",
                    name: "string"
                }
            ],
            resourceCandidate: {
                id: faker.datatype.uuid(),
                href: faker.internet.url(),
                name: "string"
            },
            productOfferingTerm: [
                {
                    name: "string",
                    description: faker.random.words(),
                    duration: {
                        amount: 3,
                        units: "string"
                    },
                    validFor: {
                        startDateTime: new Date(),
                        endDateTime: new Date()    
                    }
                }
            ],
            productOfferingPrice: [
                {
                    id: faker.datatype.uuid(),
                    href: faker.internet.url(),
                    name: "string"
                }
            ],
            attachment: [
                {
                    description: faker.random.words(),
                    mimeType: "string",
                    url: faker.internet.url()
                }
            ],
            marketSegment: [
                {
                    id: faker.datatype.uuid(),
                    href: faker.internet.url(),
                    name: "string" 
                }
            ],
            prodSpecCharValueUse: [
                {
                    name: "string",
                    description: faker.random.words(),
                    valueType: "number",
                    minCardinality: 1,
                    maxCardinality: 1,
                    validFor: {
                        startDateTime: new Date(),
                        endDateTime: new Date()    
                    },
                    productSpecCharacteristicValue: [
                        {
                            isDefault: true,
                            valueType: "number",
                            validFor: {
                                startDateTime: new Date(),
                                endDateTime: new Date()    
                            },
                            value: 8
                        },
                        {
                            isDefault: true,
                            valueType: "number",
                            validFor: {
                                startDateTime: new Date(),
                                endDateTime: new Date()    
                            },
                            value: 16 
                        }
                    ],
                    productSpecification: {
                        id: faker.datatype.uuid(),
                        href: faker.internet.url(),
                        version: "1.1" 
                    }
                }
            ],
            "@type": "ProductOffering"
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
            code: 204
        }
    },

    index_product_offering_price: function(request)
    {
        console.log("product_catalog_management_controller.index_product_offering_price")
        return [
            {
                id: faker.datatype.uuid(),
                routeDetails: {
                    controller: 'Product Catalog Management',
                    action: 'index_product_offering_price'
                },
                href: faker.internet.url(),
                name: "string",
                description: faker.random.words(),
                version: "1.0",
                validFor: {
                    startDateTime: new Date(),
                    endDateTime: new Date()    
                },
                priceType: "Recurring",
                recurringChargePeriodType: "monthly",
                recurringChargePeriodLength: 1,
                lastUpdate: new Date(),
                isBundle: false,
                lifecycleStatus: "Active",
                price: {
                    unit: "EUR",
                    amount: 50
                },
                percentage: 0.0,
                productOfferingTerm: [
                    {
                        name: "string",
                        description: "string",
                        duration: {
                            amount: 12,
                            units: "month"
                        },
                        validFor: {
                            startDateTime: new Date(),
                            endDateTime: new Date()    
                        }
                    }
                ],
                place: [
                    {
                        id: faker.datatype.uuid(),
                        href: faker.internet.url(),
                        name: "string",
                        "@referredType": "GeographicAddress"
                    }
                ],
                constraint: [
                    {
                        "@referredType": "PriceConstraint",
                        name: "string",
                        id: faker.datatype.uuid(),
                        href: faker.internet.url()
                    }
                ],
                pricingLogicAlgorithm: {
                    id: faker.datatype.uuid(),
                    href: faker.internet.url(),
                    "@type": "RecurringRatingPLA",
                    "@baseType": "PricingLogicAlgorithm",
                    "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Product/RecurringRatingPLA.schema.json",
                    name: "string",
                    description: faker.random.words(),
                    plaSpecId: "525",
                    validFor: {
                        startDateTime: new Date(),
                        endDateTime: new Date()    
                    }
                },
                tax: [
                    {
                        taxAmount: {
                            unit: "EUR",
                            amount: 50
                        },
                        taxCategory: "VAT",
                        taxRate: 20.00
                    }
                ],
                "@type": "ProductOfferingPrice"
            }
        ]
    },
    show_product_offering_price: function(request)
    {
        console.log("product_catalog_management_controller.show_product_offering_price")
        return {
            id: request.params.id,
            routeDetails: {
                controller: 'Product Catalog Management',
                action: 'show_product_offering_price'
            },
            href: faker.internet.url(),
            name: "string",
            description: faker.random.words(),
            version: "1.0",
            validFor: {
                startDateTime: new Date(),
                endDateTime: new Date()    
            },
            priceType: "Recurring",
            recurringChargePeriodType: "monthly",
            recurringChargePeriodLength: 1,
            lastUpdate: new Date(),
            isBundle: false,
            lifecycleStatus: "Active",
            price: {
                unit: "EUR",
                amount: 50
            },
            percentage: 0.0,
            productOfferingTerm: [
                {
                    name: "string",
                    description: "string",
                    duration: {
                        amount: 12,
                        units: "month"
                    },
                    validFor: {
                        startDateTime: new Date(),
                        endDateTime: new Date()    
                    }
                }
            ],
            place: [
                {
                    id: faker.datatype.uuid(),
                    href: faker.internet.url(),
                    name: "string",
                    "@referredType": "GeographicAddress"
                }
            ],
            constraint: [
                {
                    "@referredType": "PriceConstraint",
                    name: "string",
                    id: faker.datatype.uuid(),
                    href: faker.internet.url()
                }
            ],
            pricingLogicAlgorithm: {
                id: faker.datatype.uuid(),
                href: faker.internet.url(),
                "@type": "RecurringRatingPLA",
                "@baseType": "PricingLogicAlgorithm",
                "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Product/RecurringRatingPLA.schema.json",
                name: "string",
                description: faker.random.words(),
                plaSpecId: "525",
                validFor: {
                    startDateTime: new Date(),
                    endDateTime: new Date()    
                }
            },
            tax: [
                {
                    taxAmount: {
                        unit: "EUR",
                        amount: 50
                    },
                    taxCategory: "VAT",
                    taxRate: 20.00
                }
            ],
            "@type": "ProductOfferingPrice"
        }
    },
    create_product_offering_price: function(request)
    {
        console.log("product_catalog_management_controller.create_product_offering_price")
        return {
            id: faker.datatype.uuid(),
            routeDetails: {
                controller: 'Product Catalog Management',
                action: 'create_product_offering_price'
            },
            href: faker.internet.url(),
            name: "string",
            description: faker.random.words(),
            version: "1.0",
            validFor: {
                startDateTime: new Date(),
                endDateTime: new Date()    
            },
            priceType: "Recurring",
            recurringChargePeriodType: "monthly",
            recurringChargePeriodLength: 1,
            isBundle: false,
            price: {
                unit: "EUR",
                amount: 50
            },
            percentage: 0.0,
            productOfferingTerm: [
                {
                    name: "string",
                    description: "string",
                    duration: {
                        amount: 12,
                        units: "month"
                    },
                    validFor: {
                        startDateTime: new Date(),
                        endDateTime: new Date()    
                    }
                }
            ],
            place: [
                {
                    id: faker.datatype.uuid(),
                    href: faker.internet.url(),
                    name: "string",
                    "@referredType": "GeographicAddress"
                }
            ],
            constraint: [
                {
                    "@referredType": "PriceConstraint",
                    name: "string",
                    id: faker.datatype.uuid(),
                    href: faker.internet.url()
                }
            ],
            pricingLogicAlgorithm: {
                id: faker.datatype.uuid(),
                href: faker.internet.url(),
                "@type": "RecurringRatingPLA",
                "@baseType": "PricingLogicAlgorithm",
                "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Product/RecurringRatingPLA.schema.json",
                name: "string",
                description: faker.random.words(),
                plaSpecId: "525",
                validFor: {
                    startDateTime: new Date(),
                    endDateTime: new Date()    
                }
            },
            tax: [
                {
                    taxAmount: {
                        unit: "EUR",
                        amount: 50
                    },
                    taxCategory: "VAT",
                    taxRate: 20.00
                }
            ],
            "@type": "ProductOfferingPrice"
        }
    },
    update_product_offering_price: function(request)
    {
        console.log("product_catalog_management_controller.update_product_offering_price")
        return {
            id: request.params.id,
            routeDetails: {
                controller: 'Product Catalog Management',
                action: 'update_product_offering_price'
            },
            href: faker.internet.url(),
            name: "string",
            description: faker.random.words(),
            version: "1.0",
            validFor: {
                startDateTime: new Date(),
                endDateTime: new Date()    
            },
            priceType: "Recurring",
            recurringChargePeriodType: "monthly",
            recurringChargePeriodLength: 1,
            lastUpdate: new Date(),
            isBundle: false,
            lifecycleStatus: "Active",
            price: {
                unit: "EUR",
                amount: 50
            },
            percentage: 0.0,
            productOfferingTerm: [
                {
                    name: "string",
                    description: "string",
                    duration: {
                        amount: 12,
                        units: "month"
                    },
                    validFor: {
                        startDateTime: new Date(),
                        endDateTime: new Date()    
                    }
                }
            ],
            place: [
                {
                    id: faker.datatype.uuid(),
                    href: faker.internet.url(),
                    name: "string",
                    "@referredType": "GeographicAddress"
                }
            ],
            constraint: [
                {
                    "@referredType": "PriceConstraint",
                    name: "string",
                    id: faker.datatype.uuid(),
                    href: faker.internet.url()
                }
            ],
            pricingLogicAlgorithm: {
                id: faker.datatype.uuid(),
                href: faker.internet.url(),
                "@type": "RecurringRatingPLA",
                "@baseType": "PricingLogicAlgorithm",
                "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Product/RecurringRatingPLA.schema.json",
                name: "string",
                description: faker.random.words(),
                plaSpecId: "525",
                validFor: {
                    startDateTime: new Date(),
                    endDateTime: new Date()    
                }
            },
            tax: [
                {
                    taxAmount: {
                        unit: "EUR",
                        amount: 50
                    },
                    taxCategory: "VAT",
                    taxRate: 20.00
                }
            ],
            "@type": "ProductOfferingPrice"
        }
    },
    destroy_product_offering_price: function(request)
    {
        console.log("product_catalog_management_controller.destroy_product_offering_price")
        return {
            id: request.params.id,
            routeDetails: {
                controller: 'Product Catalog Management',
                action: 'destroy_product_offering_price'
            },
            code: 204
        }
    },

    index_product_specification: function(request)
    {
        console.log("product_catalog_management_controller.index_product_specification")
        return [
            {
                id: faker.datatype.uuid(),
                routeDetails: {
                    controller: 'Product Catalog Management',
                    action: 'index_product_specification'
                },
                href: faker.internet.url(),
                name: "string",
                brand: "string",
                productNumber: "string",
                description: faker.random.words(),
                isBundle: true,
                lastUpdate: new Date(),
                lifecycleStatus: "Active",
                validFor: {
                    startDateTime: new Date(),
                    endDateTime: new Date()    
                },
                version: "2.1",
                relatedParty: [
                    {
                        id: faker.datatype.uuid(),
                        href: faker.internet.url(),
                        role: "string",
                        name: "string",
                        validFor: {
                            startDateTime: new Date()
                        }
                    }
                ],
                attachment: [
                    {
                        name: "Product Picture",
                        mimeType: "image/jpeg",
                        url: faker.internet.url()
                    },
                    {
                        name: "Product Picture",
                        mimeType: "image/jpeg",
                        url: faker.internet.url()
                    }
                ],
                bundledProductSpecification: [
                    {
                        id: faker.datatype.uuid(),
                        href: faker.internet.url(),
                        name: "string"
                    },
                    {
                        id: faker.datatype.uuid(),
                        href: faker.internet.url(),
                        name: "string"
                    }
                ],
                targetProductSchema:{
                    "@type": "Firewall",
                    "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Product/Firewall.schema.json"
                },
                productSpecificationRelationship: [
                    {
                        id: faker.datatype.uuid(),
                        href: faker.internet.url(),
                        relationshipType: "string",
                        validFor: {
                            startDateTime: new Date()
                        }
                    }
                ],
                serviceSpecification: [
                    {
                        id: faker.datatype.uuid(),
                        href: faker.internet.url(),
                        name: "string",
                        version: "1.0"
                    }
                ],
                resourceSpecification: [
                    {
                        id: faker.datatype.uuid(),
                        href: faker.internet.url(),
                        name: "string",
                        version: "1.0"
                    }
                ],
                productSpecCharacteristic: [
                    {
                        name: "string",
                        description: faker.random.words(),
                        valueType: "string",
                        configurable: true,
                        minCardinality: 1,
                        maxCardinality: 1,
                        isUnique: true,
                        productSpecCharRelationship: [
                            {
                                id: faker.datatype.uuid(),
                                href: faker.internet.url(),
                                relationshipType: "string",
                                name: "string",
                                validFor: {
                                    startDateTime: new Date()
                                }
                            }
                        ],
                        productSpecCharacteristicValue: [
                            {
                                isDefault: true,
                                valueType: "number",
                                validFor: {
                                    startDateTime: new Date(),
                                    endDateTime: new Date()    
                                },
                                value: 8
                            },
                            {
                                isDefault: true,
                                valueType: "number",
                                validFor: {
                                    startDateTime: new Date(),
                                    endDateTime: new Date()    
                                },
                                value: 16 
                            },
                            {
                                isDefault: false,
                                valueType: "number",
                                validFor: {
                                    startDateTime: new Date(),
                                    endDateTime: new Date()    
                                },
                                value: 24
                            }
                        ],
                        validFor: {
                            startDateTime: new Date()
                        }
                    },
                    {
                        name: "string",
                        description: faker.random.words(),
                        valueType: "string",
                        configurable: true,
                        minCardinality: 1,
                        maxCardinality: 1,
                        isUnique: true,
                        productSpecCharacteristicValue: [
                            {
                                isDefault: true,
                                valueType: "string",
                                value: "Black"
                            },
                            {
                                isDefault: false,
                                valueType: "string",
                                value: "White" 
                            }
                        ],
                        validFor: {
                            startDateTime: new Date()
                        }
                    }
                ],
                "@type": "ProductSpecification"
            }
        ]
    },
    show_product_specification: function(request)
    {
        console.log("product_catalog_management_controller.show_product_specification")
        return {
            id: request.params.id,
            routeDetails: {
                controller: 'Product Catalog Management',
                action: 'show_product_specification'
            },
            href: faker.internet.url(),
            name: "string",
            brand: "string",
            productNumber: "string",
            description: faker.random.words(),
            isBundle: true,
            lastUpdate: new Date(),
            lifecycleStatus: "Active",
            validFor: {
                startDateTime: new Date(),
                endDateTime: new Date()    
            },
            version: "2.1",
            relatedParty: [
                {
                    id: faker.datatype.uuid(),
                    href: faker.internet.url(),
                    role: "string",
                    name: "string",
                    validFor: {
                        startDateTime: new Date()
                    }
                }
            ],
            attachment: [
                {
                    name: "Product Picture",
                    mimeType: "image/jpeg",
                    url: faker.internet.url()
                },
                {
                    name: "Product Picture",
                    mimeType: "image/jpeg",
                    url: faker.internet.url()
                }
            ],
            bundledProductSpecification: [
                {
                    id: faker.datatype.uuid(),
                    href: faker.internet.url(),
                    name: "string"
                },
                {
                    id: faker.datatype.uuid(),
                    href: faker.internet.url(),
                    name: "string"
                }
            ],
            targetProductSchema:{
                "@type": "Firewall",
                "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Product/Firewall.schema.json"
            },
            productSpecificationRelationship: [
                {
                    id: faker.datatype.uuid(),
                    href: faker.internet.url(),
                    relationshipType: "string",
                    validFor: {
                        startDateTime: new Date()
                    }
                }
            ],
            serviceSpecification: [
                {
                    id: faker.datatype.uuid(),
                    href: faker.internet.url(),
                    name: "string",
                    version: "1.0"
                }
            ],
            resourceSpecification: [
                {
                    id: faker.datatype.uuid(),
                    href: faker.internet.url(),
                    name: "string",
                    version: "1.0"
                }
            ],
            productSpecCharacteristic: [
                {
                    name: "string",
                    description: faker.random.words(),
                    valueType: "string",
                    configurable: true,
                    minCardinality: 1,
                    maxCardinality: 1,
                    isUnique: true,
                    productSpecCharRelationship: [
                        {
                            id: faker.datatype.uuid(),
                            href: faker.internet.url(),
                            relationshipType: "string",
                            name: "string",
                            validFor: {
                                startDateTime: new Date()
                            }
                        }
                    ],
                    productSpecCharacteristicValue: [
                        {
                            isDefault: true,
                            valueType: "number",
                            validFor: {
                                startDateTime: new Date(),
                                endDateTime: new Date()    
                            },
                            value: 8
                        },
                        {
                            isDefault: true,
                            valueType: "number",
                            validFor: {
                                startDateTime: new Date(),
                                endDateTime: new Date()    
                            },
                            value: 16 
                        },
                        {
                            isDefault: false,
                            valueType: "number",
                            validFor: {
                                startDateTime: new Date(),
                                endDateTime: new Date()    
                            },
                            value: 24
                        }
                    ],
                    validFor: {
                        startDateTime: new Date()
                    }
                },
                {
                    name: "string",
                    description: faker.random.words(),
                    valueType: "string",
                    configurable: true,
                    minCardinality: 1,
                    maxCardinality: 1,
                    isUnique: true,
                    productSpecCharacteristicValue: [
                        {
                            isDefault: true,
                            valueType: "string",
                            value: "Black"
                        },
                        {
                            isDefault: false,
                            valueType: "string",
                            value: "White" 
                        }
                    ],
                    validFor: {
                        startDateTime: new Date()
                    }
                }
            ],
            "@type": "ProductSpecification"
            
        }
    },
    create_product_specification: function(request)
    {
        console.log("product_catalog_management_controller.create_product_specification")
        return {
            id: faker.datatype.uuid(),
            routeDetails: {
                controller: 'Product Catalog Management',
                action: 'create_product_specification'
            },
            href: faker.internet.url(),
            name: "string",
            brand: "string",
            productNumber: "string",
            description: faker.random.words(),
            isBundle: true,
            validFor: {
                startDateTime: new Date(),
                endDateTime: new Date()    
            },
            version: "2.1",
            relatedParty: [
                {
                    id: faker.datatype.uuid(),
                    href: faker.internet.url(),
                    role: "string",
                    name: "string",
                    validFor: {
                        startDateTime: new Date()
                    }
                }
            ],
            attachment: [
                {
                    name: "Product Picture",
                    mimeType: "image/jpeg",
                    url: faker.internet.url()
                },
                {
                    name: "Product Picture",
                    mimeType: "image/jpeg",
                    url: faker.internet.url()
                }
            ],
            bundledProductSpecification: [
                {
                    id: faker.datatype.uuid(),
                    href: faker.internet.url(),
                    name: "string"
                },
                {
                    id: faker.datatype.uuid(),
                    href: faker.internet.url(),
                    name: "string"
                }
            ],
            targetProductSchema:{
                "@type": "Firewall",
                "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Product/Firewall.schema.json"
            },
            productSpecificationRelationship: [
                {
                    id: faker.datatype.uuid(),
                    href: faker.internet.url(),
                    relationshipType: "string",
                    validFor: {
                        startDateTime: new Date()
                    }
                }
            ],
            serviceSpecification: [
                {
                    id: faker.datatype.uuid(),
                    href: faker.internet.url(),
                    name: "string",
                    version: "1.0"
                }
            ],
            resourceSpecification: [
                {
                    id: faker.datatype.uuid(),
                    href: faker.internet.url(),
                    name: "string",
                    version: "1.0"
                }
            ],
            productSpecCharacteristic: [
                {
                    name: "string",
                    description: faker.random.words(),
                    valueType: "string",
                    configurable: true,
                    minCardinality: 1,
                    maxCardinality: 1,
                    isUnique: true,
                    productSpecCharRelationship: [
                        {
                            id: faker.datatype.uuid(),
                            href: faker.internet.url(),
                            relationshipType: "string",
                            name: "string",
                            validFor: {
                                startDateTime: new Date()
                            }
                        }
                    ],
                    productSpecCharacteristicValue: [
                        {
                            isDefault: true,
                            valueType: "number",
                            validFor: {
                                startDateTime: new Date(),
                                endDateTime: new Date()    
                            },
                            value: 8
                        },
                        {
                            isDefault: true,
                            valueType: "number",
                            validFor: {
                                startDateTime: new Date(),
                                endDateTime: new Date()    
                            },
                            value: 16 
                        },
                        {
                            isDefault: false,
                            valueType: "number",
                            validFor: {
                                startDateTime: new Date(),
                                endDateTime: new Date()    
                            },
                            value: 24
                        }
                    ],
                    validFor: {
                        startDateTime: new Date()
                    }
                },
                {
                    name: "string",
                    description: faker.random.words(),
                    valueType: "string",
                    configurable: true,
                    minCardinality: 1,
                    maxCardinality: 1,
                    isUnique: true,
                    productSpecCharacteristicValue: [
                        {
                            isDefault: true,
                            valueType: "string",
                            value: "Black"
                        },
                        {
                            isDefault: false,
                            valueType: "string",
                            value: "White" 
                        }
                    ],
                    validFor: {
                        startDateTime: new Date()
                    }
                }
            ],
            "@type": "ProductSpecification"   
        }
    },
    update_product_specification: function(request)
    {
        console.log("product_catalog_management_controller.update_product_specification")
        return {
            id: request.params.id,
            routeDetails: {
                controller: 'Product Catalog Management',
                action: 'update_product_specification'
            },
            href: faker.internet.url(),
            name: "string",
            brand: "string",
            productNumber: "string",
            description: faker.random.words(),
            isBundle: true,
            lastUpdate: new Date(),
            lifecycleStatus: "Active",
            validFor: {
                startDateTime: new Date(),
                endDateTime: new Date()    
            },
            version: "2.1",
            relatedParty: [
                {
                    id: faker.datatype.uuid(),
                    href: faker.internet.url(),
                    role: "string",
                    name: "string",
                    validFor: {
                        startDateTime: new Date()
                    }
                }
            ],
            attachment: [
                {
                    name: "Product Picture",
                    mimeType: "image/jpeg",
                    url: faker.internet.url()
                },
                {
                    name: "Product Picture",
                    mimeType: "image/jpeg",
                    url: faker.internet.url()
                }
            ],
            bundledProductSpecification: [
                {
                    id: faker.datatype.uuid(),
                    href: faker.internet.url(),
                    name: "string"
                },
                {
                    id: faker.datatype.uuid(),
                    href: faker.internet.url(),
                    name: "string"
                }
            ],
            targetProductSchema:{
                "@type": "Firewall",
                "@schemaLocation": "https://mycsp.com:8080/tmf-api/schema/Product/Firewall.schema.json"
            },
            productSpecificationRelationship: [
                {
                    id: faker.datatype.uuid(),
                    href: faker.internet.url(),
                    relationshipType: "string",
                    validFor: {
                        startDateTime: new Date()
                    }
                }
            ],
            serviceSpecification: [
                {
                    id: faker.datatype.uuid(),
                    href: faker.internet.url(),
                    name: "string",
                    version: "1.0"
                }
            ],
            resourceSpecification: [
                {
                    id: faker.datatype.uuid(),
                    href: faker.internet.url(),
                    name: "string",
                    version: "1.0"
                }
            ],
            productSpecCharacteristic: [
                {
                    name: "string",
                    description: faker.random.words(),
                    valueType: "string",
                    configurable: true,
                    minCardinality: 1,
                    maxCardinality: 1,
                    isUnique: true,
                    productSpecCharRelationship: [
                        {
                            id: faker.datatype.uuid(),
                            href: faker.internet.url(),
                            relationshipType: "string",
                            name: "string",
                            validFor: {
                                startDateTime: new Date()
                            }
                        }
                    ],
                    productSpecCharacteristicValue: [
                        {
                            isDefault: true,
                            valueType: "number",
                            validFor: {
                                startDateTime: new Date(),
                                endDateTime: new Date()    
                            },
                            value: 8
                        },
                        {
                            isDefault: true,
                            valueType: "number",
                            validFor: {
                                startDateTime: new Date(),
                                endDateTime: new Date()    
                            },
                            value: 16 
                        },
                        {
                            isDefault: false,
                            valueType: "number",
                            validFor: {
                                startDateTime: new Date(),
                                endDateTime: new Date()    
                            },
                            value: 24
                        }
                    ],
                    validFor: {
                        startDateTime: new Date()
                    }
                },
                {
                    name: "string",
                    description: faker.random.words(),
                    valueType: "string",
                    configurable: true,
                    minCardinality: 1,
                    maxCardinality: 1,
                    isUnique: true,
                    productSpecCharacteristicValue: [
                        {
                            isDefault: true,
                            valueType: "string",
                            value: "Black"
                        },
                        {
                            isDefault: false,
                            valueType: "string",
                            value: "White" 
                        }
                    ],
                    validFor: {
                        startDateTime: new Date()
                    }
                }
            ],
            "@type": "ProductSpecification"
           
            
           
        }

    },
    destroy_product_specification: function(request)
    {
        console.log("product_catalog_management_controller.destroy_product_specification")
        return {
            id: request.params.id,
            routeDetails: {
                controller: 'Product Catalog Management',
                action: 'destroy_product_specification'
            },
            code: 204
        }
    },

    index_import_job: function(request)
    {
        console.log("product_catalog_management_controller.index_import_job")
        return [
            {
                id: faker.datatype.uuid(),
                routeDetails: {
                    controller: 'Product Catalog Management',
                    action: 'index_import_job'
                },
                href: faker.internet.url(),
                contentType: "application/json",
                creationDate: new Date(),
                completionDate: new Date(),
                path: "https://mycsp.com:8080/tmf-api/productCatalogManagement/v4/Catalog/3830",
                status: "completed",
                url: faker.internet.url(),
                errorLog: faker.internet.url(),
                "@type": "ImportJob"

                
            }
        ]
    },
    show_import_job: function(request)
    {
        console.log("product_catalog_management_controller.show_import_job")
        return {
            id: request.params.id,
            routeDetails: {
                controller: 'Product Catalog Management',
                action: 'show_import_job'
            },
            href: faker.internet.url(),
            contentType: "application/json",
            creationDate: new Date(),
            completionDate: new Date(),
            path: "https://mycsp.com:8080/tmf-api/productCatalogManagement/v4/Catalog/3830",
            status: "completed",
            url: faker.internet.url(),
            errorLog: faker.internet.url(),
            "@type": "ImportJob"
            
        }
    },
    create_import_job: function(request)
    {
        console.log("product_catalog_management_controller.create_import_job")
        return {
            id: faker.datatype.uuid(),
            routeDetails: {
                controller: 'Product Catalog Management',
                action: 'create_import_job'
            },
            href: faker.internet.url(),
            contentType: "application/json",
            creationDate: new Date(),
            path: "https://mycsp.com:8080/tmf-api/productCatalogManagement/v4/Catalog/3830",
            status: "completed",
            url: faker.internet.url(),
            errorLog: faker.internet.url(),
            "@type": "ImportJob"
            
            
        }
    },
    destroy_import_job: function(request)
    {
        console.log("product_catalog_management_controller.destroy_import_job")
        return {
            id: request.params.id,
            routeDetails: {
                controller: 'Product Catalog Management',
                action: 'destroy_import_job'
            },
            code: 204
        }
    },

    index_export_job: function(request)
    {
        console.log("product_catalog_management_controller.index_export_job")
        return [
            {
                id: faker.datatype.uuid(),
                routeDetails: {
                    controller: 'Product Catalog Management',
                    action: 'index_export_job'
                },
                href: faker.internet.url(),
                contentType: "application/json",
                creationDate: new Date(),
                path: "https://mycsp.com:8080/tmf-api/productCatalogManagement/v4/Catalog/3830",
                query: "category.id=7757",
                status: "completed",
                url: faker.internet.url(),
                errorLog: faker.internet.url(),
                "@type": "ImportJob"
                

                
            }
        ]
    },
    show_export_job: function(request)
    {
        console.log("product_catalog_management_controller.show_export_job")
        return {
            id: request.params.id,
            routeDetails: {
                controller: 'Product Catalog Management',
                action: 'show_export_job'
            },
            href: faker.internet.url(),
            contentType: "application/json",
            creationDate: new Date(),
            path: "https://mycsp.com:8080/tmf-api/productCatalogManagement/v4/Catalog/3830",
            query: "category.id=7757",
            status: "completed",
            url: faker.internet.url(),
            errorLog: faker.internet.url(),
            "@type": "ImportJob"
            
        }
    },
    create_export_job: function(request)
    {
        console.log("product_catalog_management_controller.create_export_job")
        return {
            id: faker.datatype.uuid(),
            routeDetails: {
                controller: 'Product Catalog Management',
                action: 'create_export_job'
            },
            href: faker.internet.url(),
            contentType: "application/json",
            creationDate: new Date(),
            path: "https://mycsp.com:8080/tmf-api/productCatalogManagement/v4/Catalog/3830",
            query: "category.id=7757",
            status: "completed",
            url: faker.internet.url(),
            errorLog: faker.internet.url(),
            "@type": "ImportJob"
            
            
        }
    },
    destroy_export_job: function(request)
    {
        console.log("product_catalog_management_controller.destroy_export_job")
        return {
            id: request.params.id,
            routeDetails: {
                controller: 'Product Catalog Management',
                action: 'destroy_export_job'
            },
            code: 204
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
            callback: "string",
            query: null
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
            code: 204
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
           code: 201
        }
    },

}