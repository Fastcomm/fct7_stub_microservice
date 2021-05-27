//  === Requirements ===
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
                catalogType: "string",
                description: "string",
                lastUpdate: new Date(),
                lifecycleStatus: "string",
                name: "string",
                version: "string",
                category: [
                  {
                    id: "string",
                    href: "string",
                    name: "string",
                    version: "string",
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string",
                    "@referredType": "string"
                  }
                ],
                relatedParty: [
                  {
                    id: "string",
                    href: "string",
                    name: "string",
                    role: "string",
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string",
                    "@referredType": "string"
                  }
                ],
                validFor: {
                  endDateTime: new Date(),
                  startDateTime: new Date()
                },
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
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
            catalogType: "string",
            description: "string",
            lastUpdate: new Date(),
            lifecycleStatus: "string",
            name: "string",
            version: "string",
            category: [
              {
                id: "string",
                href: "string",
                name: "string",
                version: "string",
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string",
                "@referredType": "string"
              }
            ],
            relatedParty: [
              {
                id: "string",
                href: "string",
                name: "string",
                role: "string",
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string",
                "@referredType": "string"
              }
            ],
            validFor: {
              endDateTime: new Date(),
              startDateTime: new Date()
            },
            "@baseType": "string",
            "@schemaLocation": "string",
            "@type": "string"
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
            catalogType: "string",
            description: "string",
            lastUpdate: new Date(),
            lifecycleStatus: "string",
            name: "string",
            version: "string",
            category: [
              {
                id: "string",
                href: "string",
                name: "string",
                version: "string",
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string",
                "@referredType": "string"
              }
            ],
            relatedParty: [
              {
                id: "string",
                href: "string",
                name: "string",
                role: "string",
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string",
                "@referredType": "string"
              }
            ],
            validFor: {
              endDateTime: new Date(),
              startDateTime: new Date()
            },
            "@baseType": "string",
            "@schemaLocation": "string",
            "@type": "string"
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
            catalogType: "string",
            description: "string",
            lastUpdate: new Date(),
            lifecycleStatus: "string",
            name: "string",
            version: "string",
            category: [
              {
                id: "string",
                href: "string",
                name: "string",
                version: "string",
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string",
                "@referredType": "string"
              }
            ],
            relatedParty: [
              {
                id: "string",
                href: "string",
                name: "string",
                role: "string",
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string",
                "@referredType": "string"
              }
            ],
            validFor: {
              endDateTime: new Date(),
              startDateTime: new Date()
            },
            "@baseType": "string",
            "@schemaLocation": "string",
            "@type": "string"
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
                description: "string",
                isRoot: true,
                lastUpdate: new Date(),
                lifecycleStatus: "string",
                name: "string",
                parentId: "string",
                version: "string",
                productOffering: [
                  {
                    id: "string",
                    href: "string",
                    name: "string",
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string",
                    "@referredType": "string"
                  }
                ],
                subCategory: [
                  {
                    id: "string",
                    href: "string",
                    name: "string",
                    version: "string",
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string",
                    "@referredType": "string"
                  }
                ],
                validFor: {
                  endDateTime: new Date(),
                  startDateTime: new Date()
                },
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
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
            description: "string",
            isRoot: true,
            lastUpdate: new Date(),
            lifecycleStatus: "string",
            name: "string",
            parentId: "string",
            version: "string",
            productOffering: [
              {
                id: "string",
                href: "string",
                name: "string",
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string",
                "@referredType": "string"
              }
            ],
            subCategory: [
              {
                id: "string",
                href: "string",
                name: "string",
                version: "string",
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string",
                "@referredType": "string"
              }
            ],
            validFor: {
              endDateTime: new Date(),
              startDateTime: new Date()
            },
            "@baseType": "string",
            "@schemaLocation": "string",
            "@type": "string"
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
            description: "string",
            isRoot: true,
            lastUpdate: new Date(),
            lifecycleStatus: "string",
            name: "string",
            parentId: "string",
            version: "string",
            productOffering: [
              {
                id: "string",
                href: "string",
                name: "string",
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string",
                "@referredType": "string"
              }
            ],
            subCategory: [
              {
                id: "string",
                href: "string",
                name: "string",
                version: "string",
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string",
                "@referredType": "string"
              }
            ],
            validFor: {
              endDateTime: new Date(),
              startDateTime: new Date()
            },
            "@baseType": "string",
            "@schemaLocation": "string",
            "@type": "string"
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
            description: "string",
            isRoot: true,
            lastUpdate: new Date(),
            lifecycleStatus: "string",
            name: "string",
            parentId: "string",
            version: "string",
            productOffering: [
              {
                id: "string",
                href: "string",
                name: "string",
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string",
                "@referredType": "string"
              }
            ],
            subCategory: [
              {
                id: "string",
                href: "string",
                name: "string",
                version: "string",
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string",
                "@referredType": "string"
              }
            ],
            validFor: {
              endDateTime: new Date(),
              startDateTime: new Date()
            },
            "@baseType": "string",
            "@schemaLocation": "string",
            "@type": "string"
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
                description: "string",
                isBundle: true,
                isSellable: true,
                lastUpdate: new Date(),
                lifecycleStatus: "string",
                name: "string",
                statusReason: "string",
                version: "string",
                agreement: [
                  {
                    id: "string",
                    href: "string",
                    name: "string",
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string",
                    "@referredType": "string"
                  }
                ],
                attachment: [
                  {
                    id: "string",
                    href: "string",
                    attachmentType: "string",
                    content: "string",
                    description: "string",
                    mimeType: "string",
                    name: "string",
                    url: "string",
                    size: {
                      amount: 1,
                      units: "string"
                    },
                    validFor: {
                      endDateTime: new Date(),
                      startDateTime: new Date()
                    },
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string",
                    "@referredType": "string"
                  }
                ],
                bundledProductOffering: [
                  {
                    id: "string",
                    href: "string",
                    lifecycleStatus: "string",
                    name: "string",
                    bundledProductOfferingOption: {
                      numberRelOfferDefault: 0,
                      numberRelOfferLowerLimit: 0,
                      numberRelOfferUpperLimit: 0,
                      "@baseType": "string",
                      "@schemaLocation": "string",
                      "@type": "string"
                    },
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string"
                  }
                ],
                category: [
                  {
                    id: "string",
                    href: "string",
                    name: "string",
                    version: "string",
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string",
                    "@referredType": "string"
                  }
                ],
                channel: [
                  {
                    id: "string",
                    href: "string",
                    name: "string",
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string",
                    "@referredType": "string"
                  }
                ],
                marketSegment: [
                  {
                    id: "string",
                    href: "string",
                    name: "string",
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string",
                    "@referredType": "string"
                  }
                ],
                place: [
                  {
                    id: "string",
                    href: "string",
                    name: "string",
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string",
                    "@referredType": "string"
                  }
                ],
                prodSpecCharValueUse: [
                  {
                    description: "string",
                    maxCardinality: 0,
                    minCardinality: 0,
                    name: "string",
                    valueType: "string",
                    productSpecCharacteristicValue: [
                      {
                        isDefault: true,
                        rangeInterval: "string",
                        regex: "string",
                        unitOfMeasure: "string",
                        valueFrom: "string",
                        valueTo: "string",
                        valueType: "string",
                        validFor: {
                          endDateTime: new Date(),
                          startDateTime: new Date()
                        },
                        value: "string",
                        "@baseType": "string",
                        "@schemaLocation": "string",
                        "@type": "string"
                      }
                    ],
                    productSpecification: {
                      id: "string",
                      href: "string",
                      name: "string",
                      version: "string",
                      targetProductSchema: {
                        "@baseType": "string",
                        "@schemaLocation": "string",
                        "@type": "string"
                      },
                      "@baseType": "string",
                      "@schemaLocation": "string",
                      "@type": "string",
                      "@referredType": "string"
                    },
                    validFor: {
                      endDateTime: new Date(),
                      startDateTime: new Date()
                    },
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string"
                  }
                ],
                productOfferingPrice: [
                  {
                    id: "string",
                    href: "string",
                    name: "string",
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string",
                    "@referredType": "string"
                  }
                ],
                productOfferingTerm: [
                  {
                    description: "string",
                    name: "string",
                    duration: {
                      amount: 1,
                      units: "string"
                    },
                    validFor: {
                      endDateTime: new Date(),
                      startDateTime: new Date()
                    },
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string"
                  }
                ],
                productSpecification: {
                  id: "string",
                  href: "string",
                  name: "string",
                  version: "string",
                  targetProductSchema: {
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string"
                  },
                  "@baseType": "string",
                  "@schemaLocation": "string",
                  "@type": "string",
                  "@referredType": "string"
                },
                resourceCandidate: {
                  id: "string",
                  href: "string",
                  name: "string",
                  version: "string",
                  "@baseType": "string",
                  "@schemaLocation": "string",
                  "@type": "string",
                  "@referredType": "string"
                },
                serviceCandidate: {
                  id: "string",
                  href: "string",
                  name: "string",
                  version: "string",
                  "@baseType": "string",
                  "@schemaLocation": "string",
                  "@type": "string",
                  "@referredType": "string"
                },
                serviceLevelAgreement: {
                  id: "string",
                  href: "string",
                  name: "string",
                  "@baseType": "string",
                  "@schemaLocation": "string",
                  "@type": "string",
                  "@referredType": "string"
                },
                validFor: {
                  endDateTime: new Date(),
                  startDateTime: new Date()
                },
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
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
            description: "string",
            isBundle: true,
            isSellable: true,
            lastUpdate: new Date(),
            lifecycleStatus: "string",
            name: "string",
            statusReason: "string",
            version: "string",
            agreement: [
              {
                id: "string",
                href: "string",
                name: "string",
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string",
                "@referredType": "string"
              }
            ],
            attachment: [
              {
                id: "string",
                href: "string",
                attachmentType: "string",
                content: "string",
                description: "string",
                mimeType: "string",
                name: "string",
                url: "string",
                size: {
                  amount: 1,
                  units: "string"
                },
                validFor: {
                  endDateTime: new Date(),
                  startDateTime: new Date()
                },
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string",
                "@referredType": "string"
              }
            ],
            bundledProductOffering: [
              {
                id: "string",
                href: "string",
                lifecycleStatus: "string",
                name: "string",
                bundledProductOfferingOption: {
                  numberRelOfferDefault: 0,
                  numberRelOfferLowerLimit: 0,
                  numberRelOfferUpperLimit: 0,
                  "@baseType": "string",
                  "@schemaLocation": "string",
                  "@type": "string"
                },
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
              }
            ],
            category: [
              {
                id: "string",
                href: "string",
                name: "string",
                version: "string",
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string",
                "@referredType": "string"
              }
            ],
            channel: [
              {
                id: "string",
                href: "string",
                name: "string",
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string",
                "@referredType": "string"
              }
            ],
            marketSegment: [
              {
                id: "string",
                href: "string",
                name: "string",
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string",
                "@referredType": "string"
              }
            ],
            place: [
              {
                id: "string",
                href: "string",
                name: "string",
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string",
                "@referredType": "string"
              }
            ],
            prodSpecCharValueUse: [
              {
                description: "string",
                maxCardinality: 0,
                minCardinality: 0,
                name: "string",
                valueType: "string",
                productSpecCharacteristicValue: [
                  {
                    isDefault: true,
                    rangeInterval: "string",
                    regex: "string",
                    unitOfMeasure: "string",
                    valueFrom: "string",
                    valueTo: "string",
                    valueType: "string",
                    validFor: {
                      endDateTime: new Date(),
                      startDateTime: new Date()
                    },
                    value: "string",
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string"
                  }
                ],
                productSpecification: {
                  id: "string",
                  href: "string",
                  name: "string",
                  version: "string",
                  targetProductSchema: {
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string"
                  },
                  "@baseType": "string",
                  "@schemaLocation": "string",
                  "@type": "string",
                  "@referredType": "string"
                },
                validFor: {
                  endDateTime: new Date(),
                  startDateTime: new Date()
                },
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
              }
            ],
            productOfferingPrice: [
              {
                id: "string",
                href: "string",
                name: "string",
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string",
                "@referredType": "string"
              }
            ],
            productOfferingTerm: [
              {
                description: "string",
                name: "string",
                duration: {
                  amount: 1,
                  units: "string"
                },
                validFor: {
                  endDateTime: new Date(),
                  startDateTime: new Date()
                },
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
              }
            ],
            productSpecification: {
              id: "string",
              href: "string",
              name: "string",
              version: "string",
              targetProductSchema: {
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
              },
              "@baseType": "string",
              "@schemaLocation": "string",
              "@type": "string",
              "@referredType": "string"
            },
            resourceCandidate: {
              id: "string",
              href: "string",
              name: "string",
              version: "string",
              "@baseType": "string",
              "@schemaLocation": "string",
              "@type": "string",
              "@referredType": "string"
            },
            serviceCandidate: {
              id: "string",
              href: "string",
              name: "string",
              version: "string",
              "@baseType": "string",
              "@schemaLocation": "string",
              "@type": "string",
              "@referredType": "string"
            },
            serviceLevelAgreement: {
              id: "string",
              href: "string",
              name: "string",
              "@baseType": "string",
              "@schemaLocation": "string",
              "@type": "string",
              "@referredType": "string"
            },
            validFor: {
              endDateTime: new Date(),
              startDateTime: new Date()
            },
            "@baseType": "string",
            "@schemaLocation": "string",
            "@type": "string"
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
            description: "string",
            isBundle: true,
            isSellable: true,
            lastUpdate: new Date(),
            lifecycleStatus: "string",
            name: "string",
            statusReason: "string",
            version: "string",
            agreement: [
              {
                id: "string",
                href: "string",
                name: "string",
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string",
                "@referredType": "string"
              }
            ],
            attachment: [
              {
                id: "string",
                href: "string",
                attachmentType: "string",
                content: "string",
                description: "string",
                mimeType: "string",
                name: "string",
                url: "string",
                size: {
                  amount: 1,
                  units: "string"
                },
                validFor: {
                  endDateTime: new Date(),
                  startDateTime: new Date()
                },
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string",
                "@referredType": "string"
              }
            ],
            bundledProductOffering: [
              {
                id: "string",
                href: "string",
                lifecycleStatus: "string",
                name: "string",
                bundledProductOfferingOption: {
                  numberRelOfferDefault: 0,
                  numberRelOfferLowerLimit: 0,
                  numberRelOfferUpperLimit: 0,
                  "@baseType": "string",
                  "@schemaLocation": "string",
                  "@type": "string"
                },
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
              }
            ],
            category: [
              {
                id: "string",
                href: "string",
                name: "string",
                version: "string",
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string",
                "@referredType": "string"
              }
            ],
            channel: [
              {
                id: "string",
                href: "string",
                name: "string",
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string",
                "@referredType": "string"
              }
            ],
            marketSegment: [
              {
                id: "string",
                href: "string",
                name: "string",
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string",
                "@referredType": "string"
              }
            ],
            place: [
              {
                id: "string",
                href: "string",
                name: "string",
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string",
                "@referredType": "string"
              }
            ],
            prodSpecCharValueUse: [
              {
                description: "string",
                maxCardinality: 0,
                minCardinality: 0,
                name: "string",
                valueType: "string",
                productSpecCharacteristicValue: [
                  {
                    isDefault: true,
                    rangeInterval: "string",
                    regex: "string",
                    unitOfMeasure: "string",
                    valueFrom: "string",
                    valueTo: "string",
                    valueType: "string",
                    validFor: {
                      endDateTime: new Date(),
                      startDateTime: new Date()
                    },
                    value: "string",
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string"
                  }
                ],
                productSpecification: {
                  id: "string",
                  href: "string",
                  name: "string",
                  version: "string",
                  targetProductSchema: {
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string"
                  },
                  "@baseType": "string",
                  "@schemaLocation": "string",
                  "@type": "string",
                  "@referredType": "string"
                },
                validFor: {
                  endDateTime: new Date(),
                  startDateTime: new Date()
                },
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
              }
            ],
            productOfferingPrice: [
              {
                id: "string",
                href: "string",
                name: "string",
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string",
                "@referredType": "string"
              }
            ],
            productOfferingTerm: [
              {
                description: "string",
                name: "string",
                duration: {
                  amount: 1,
                  units: "string"
                },
                validFor: {
                  endDateTime: new Date(),
                  startDateTime: new Date()
                },
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
              }
            ],
            productSpecification: {
              id: "string",
              href: "string",
              name: "string",
              version: "string",
              targetProductSchema: {
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
              },
              "@baseType": "string",
              "@schemaLocation": "string",
              "@type": "string",
              "@referredType": "string"
            },
            resourceCandidate: {
              id: "string",
              href: "string",
              name: "string",
              version: "string",
              "@baseType": "string",
              "@schemaLocation": "string",
              "@type": "string",
              "@referredType": "string"
            },
            serviceCandidate: {
              id: "string",
              href: "string",
              name: "string",
              version: "string",
              "@baseType": "string",
              "@schemaLocation": "string",
              "@type": "string",
              "@referredType": "string"
            },
            serviceLevelAgreement: {
              id: "string",
              href: "string",
              name: "string",
              "@baseType": "string",
              "@schemaLocation": "string",
              "@type": "string",
              "@referredType": "string"
            },
            validFor: {
              endDateTime: new Date(),
              startDateTime: new Date()
            },
            "@baseType": "string",
            "@schemaLocation": "string",
            "@type": "string"
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
            description: "string",
            isBundle: true,
            isSellable: true,
            lastUpdate: new Date(),
            lifecycleStatus: "string",
            name: "string",
            statusReason: "string",
            version: "string",
            agreement: [
              {
                id: "string",
                href: "string",
                name: "string",
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string",
                "@referredType": "string"
              }
            ],
            attachment: [
              {
                id: "string",
                href: "string",
                attachmentType: "string",
                content: "string",
                description: "string",
                mimeType: "string",
                name: "string",
                url: "string",
                size: {
                  amount: 1,
                  units: "string"
                },
                validFor: {
                  endDateTime: new Date(),
                  startDateTime: new Date()
                },
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string",
                "@referredType": "string"
              }
            ],
            bundledProductOffering: [
              {
                id: "string",
                href: "string",
                lifecycleStatus: "string",
                name: "string",
                bundledProductOfferingOption: {
                  numberRelOfferDefault: 0,
                  numberRelOfferLowerLimit: 0,
                  numberRelOfferUpperLimit: 0,
                  "@baseType": "string",
                  "@schemaLocation": "string",
                  "@type": "string"
                },
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
              }
            ],
            category: [
              {
                id: "string",
                href: "string",
                name: "string",
                version: "string",
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string",
                "@referredType": "string"
              }
            ],
            channel: [
              {
                id: "string",
                href: "string",
                name: "string",
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string",
                "@referredType": "string"
              }
            ],
            marketSegment: [
              {
                id: "string",
                href: "string",
                name: "string",
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string",
                "@referredType": "string"
              }
            ],
            place: [
              {
                id: "string",
                href: "string",
                name: "string",
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string",
                "@referredType": "string"
              }
            ],
            prodSpecCharValueUse: [
              {
                description: "string",
                maxCardinality: 0,
                minCardinality: 0,
                name: "string",
                valueType: "string",
                productSpecCharacteristicValue: [
                  {
                    isDefault: true,
                    rangeInterval: "string",
                    regex: "string",
                    unitOfMeasure: "string",
                    valueFrom: "string",
                    valueTo: "string",
                    valueType: "string",
                    validFor: {
                      endDateTime: new Date(),
                      startDateTime: new Date()
                    },
                    value: "string",
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string"
                  }
                ],
                productSpecification: {
                  id: "string",
                  href: "string",
                  name: "string",
                  version: "string",
                  targetProductSchema: {
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string"
                  },
                  "@baseType": "string",
                  "@schemaLocation": "string",
                  "@type": "string",
                  "@referredType": "string"
                },
                validFor: {
                  endDateTime: new Date(),
                  startDateTime: new Date()
                },
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
              }
            ],
            productOfferingPrice: [
              {
                id: "string",
                href: "string",
                name: "string",
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string",
                "@referredType": "string"
              }
            ],
            productOfferingTerm: [
              {
                description: "string",
                name: "string",
                duration: {
                  amount: 1,
                  units: "string"
                },
                validFor: {
                  endDateTime: new Date(),
                  startDateTime: new Date()
                },
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
              }
            ],
            productSpecification: {
              id: "string",
              href: "string",
              name: "string",
              version: "string",
              targetProductSchema: {
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
              },
              "@baseType": "string",
              "@schemaLocation": "string",
              "@type": "string",
              "@referredType": "string"
            },
            resourceCandidate: {
              id: "string",
              href: "string",
              name: "string",
              version: "string",
              "@baseType": "string",
              "@schemaLocation": "string",
              "@type": "string",
              "@referredType": "string"
            },
            serviceCandidate: {
              id: "string",
              href: "string",
              name: "string",
              version: "string",
              "@baseType": "string",
              "@schemaLocation": "string",
              "@type": "string",
              "@referredType": "string"
            },
            serviceLevelAgreement: {
              id: "string",
              href: "string",
              name: "string",
              "@baseType": "string",
              "@schemaLocation": "string",
              "@type": "string",
              "@referredType": "string"
            },
            validFor: {
              endDateTime: new Date(),
              startDateTime: new Date()
            },
            "@baseType": "string",
            "@schemaLocation": "string",
            "@type": "string"
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
                description: "string",
                isBundle: true,
                lastUpdate: new Date(),
                lifecycleStatus: "string",
                name: "string",
                percentage: 0,
                priceType: "string",
                recurringChargePeriodLength: 0,
                recurringChargePeriodType: "string",
                version: "string",
                bundledPopRelationship: [
                  {
                    id: "string",
                    href: "string",
                    name: "string",
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string"
                  }
                ],
                constraint: [
                  {
                    id: "string",
                    href: "string",
                    name: "string",
                    version: "string",
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string",
                    "@referredType": "string"
                  }
                ],
                place: [
                  {
                    id: "string",
                    href: "string",
                    name: "string",
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string",
                    "@referredType": "string"
                  }
                ],
                popRelationship: [
                  {
                    id: "string",
                    href: "string",
                    name: "string",
                    relationshipType: "string",
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string"
                  }
                ],
                price: {
                  unit: "string",
                  value: 0
                },
                pricingLogicAlgorithm: [
                  {
                    id: "string",
                    href: "string",
                    description: "string",
                    name: "string",
                    plaSpecId: "string",
                    validFor: {
                      endDateTime: new Date(),
                      startDateTime: new Date()
                    },
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string"
                  }
                ],
                prodSpecCharValueUse: [
                  {
                    description: "string",
                    maxCardinality: 0,
                    minCardinality: 0,
                    name: "string",
                    valueType: "string",
                    productSpecCharacteristicValue: [
                      {
                        isDefault: true,
                        rangeInterval: "string",
                        regex: "string",
                        unitOfMeasure: "string",
                        valueFrom: "string",
                        valueTo: "string",
                        valueType: "string",
                        validFor: {
                          endDateTime: new Date(),
                          startDateTime: new Date()
                        },
                        value: "string",
                        "@baseType": "string",
                        "@schemaLocation": "string",
                        "@type": "string"
                      }
                    ],
                    productSpecification: {
                      id: "string",
                      href: "string",
                      name: "string",
                      version: "string",
                      targetProductSchema: {
                        "@baseType": "string",
                        "@schemaLocation": "string",
                        "@type": "string"
                      },
                      "@baseType": "string",
                      "@schemaLocation": "string",
                      "@type": "string",
                      "@referredType": "string"
                    },
                    validFor: {
                      endDateTime: new Date(),
                      startDateTime: new Date()
                    },
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string"
                  }
                ],
                productOfferingTerm: [
                  {
                    description: "string",
                    name: "string",
                    duration: {
                      amount: 1,
                      units: "string"
                    },
                    validFor: {
                      endDateTime: new Date(),
                      startDateTime: new Date()
                    },
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string"
                  }
                ],
                tax: [
                  {
                    taxCategory: "string",
                    taxRate: 0,
                    taxAmount: {
                      unit: "string",
                      value: 0
                    },
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string"
                  }
                ],
                unitOfMeasure: {
                  amount: 1,
                  units: "string"
                },
                validFor: {
                  endDateTime: new Date(),
                  startDateTime: new Date()
                },
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
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
            description: "string",
            isBundle: true,
            lastUpdate: new Date(),
            lifecycleStatus: "string",
            name: "string",
            percentage: 0,
            priceType: "string",
            recurringChargePeriodLength: 0,
            recurringChargePeriodType: "string",
            version: "string",
            bundledPopRelationship: [
              {
                id: "string",
                href: "string",
                name: "string",
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
              }
            ],
            constraint: [
              {
                id: "string",
                href: "string",
                name: "string",
                version: "string",
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string",
                "@referredType": "string"
              }
            ],
            place: [
              {
                id: "string",
                href: "string",
                name: "string",
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string",
                "@referredType": "string"
              }
            ],
            popRelationship: [
              {
                id: "string",
                href: "string",
                name: "string",
                relationshipType: "string",
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
              }
            ],
            price: {
              unit: "string",
              value: 0
            },
            pricingLogicAlgorithm: [
              {
                id: "string",
                href: "string",
                description: "string",
                name: "string",
                plaSpecId: "string",
                validFor: {
                  endDateTime: new Date(),
                  startDateTime: new Date()
                },
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
              }
            ],
            prodSpecCharValueUse: [
              {
                description: "string",
                maxCardinality: 0,
                minCardinality: 0,
                name: "string",
                valueType: "string",
                productSpecCharacteristicValue: [
                  {
                    isDefault: true,
                    rangeInterval: "string",
                    regex: "string",
                    unitOfMeasure: "string",
                    valueFrom: "string",
                    valueTo: "string",
                    valueType: "string",
                    validFor: {
                      endDateTime: new Date(),
                      startDateTime: new Date()
                    },
                    value: "string",
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string"
                  }
                ],
                productSpecification: {
                  id: "string",
                  href: "string",
                  name: "string",
                  version: "string",
                  targetProductSchema: {
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string"
                  },
                  "@baseType": "string",
                  "@schemaLocation": "string",
                  "@type": "string",
                  "@referredType": "string"
                },
                validFor: {
                  endDateTime: new Date(),
                  startDateTime: new Date()
                },
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
              }
            ],
            productOfferingTerm: [
              {
                description: "string",
                name: "string",
                duration: {
                  amount: 1,
                  units: "string"
                },
                validFor: {
                  endDateTime: new Date(),
                  startDateTime: new Date()
                },
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
              }
            ],
            tax: [
              {
                taxCategory: "string",
                taxRate: 0,
                taxAmount: {
                  unit: "string",
                  value: 0
                },
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
              }
            ],
            unitOfMeasure: {
              amount: 1,
              units: "string"
            },
            validFor: {
              endDateTime: new Date(),
              startDateTime: new Date()
            },
            "@baseType": "string",
            "@schemaLocation": "string",
            "@type": "string"
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
            description: "string",
            isBundle: true,
            lastUpdate: new Date(),
            lifecycleStatus: "string",
            name: "string",
            percentage: 0,
            priceType: "string",
            recurringChargePeriodLength: 0,
            recurringChargePeriodType: "string",
            version: "string",
            bundledPopRelationship: [
              {
                id: "string",
                href: "string",
                name: "string",
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
              }
            ],
            constraint: [
              {
                id: "string",
                href: "string",
                name: "string",
                version: "string",
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string",
                "@referredType": "string"
              }
            ],
            place: [
              {
                id: "string",
                href: "string",
                name: "string",
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string",
                "@referredType": "string"
              }
            ],
            popRelationship: [
              {
                id: "string",
                href: "string",
                name: "string",
                relationshipType: "string",
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
              }
            ],
            price: {
              unit: "string",
              value: 0
            },
            pricingLogicAlgorithm: [
              {
                id: "string",
                href: "string",
                description: "string",
                name: "string",
                plaSpecId: "string",
                validFor: {
                  endDateTime: new Date(),
                  startDateTime: new Date()
                },
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
              }
            ],
            prodSpecCharValueUse: [
              {
                description: "string",
                maxCardinality: 0,
                minCardinality: 0,
                name: "string",
                valueType: "string",
                productSpecCharacteristicValue: [
                  {
                    isDefault: true,
                    rangeInterval: "string",
                    regex: "string",
                    unitOfMeasure: "string",
                    valueFrom: "string",
                    valueTo: "string",
                    valueType: "string",
                    validFor: {
                      endDateTime: new Date(),
                      startDateTime: new Date()
                    },
                    value: "string",
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string"
                  }
                ],
                productSpecification: {
                  id: "string",
                  href: "string",
                  name: "string",
                  version: "string",
                  targetProductSchema: {
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string"
                  },
                  "@baseType": "string",
                  "@schemaLocation": "string",
                  "@type": "string",
                  "@referredType": "string"
                },
                validFor: {
                  endDateTime: new Date(),
                  startDateTime: new Date()
                },
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
              }
            ],
            productOfferingTerm: [
              {
                description: "string",
                name: "string",
                duration: {
                  amount: 1,
                  units: "string"
                },
                validFor: {
                  endDateTime: new Date(),
                  startDateTime: new Date()
                },
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
              }
            ],
            tax: [
              {
                taxCategory: "string",
                taxRate: 0,
                taxAmount: {
                  unit: "string",
                  value: 0
                },
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
              }
            ],
            unitOfMeasure: {
              amount: 1,
              units: "string"
            },
            validFor: {
              endDateTime: new Date(),
              startDateTime: new Date()
            },
            "@baseType": "string",
            "@schemaLocation": "string",
            "@type": "string"
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
            description: "string",
            isBundle: true,
            lastUpdate: new Date(),
            lifecycleStatus: "string",
            name: "string",
            percentage: 0,
            priceType: "string",
            recurringChargePeriodLength: 0,
            recurringChargePeriodType: "string",
            version: "string",
            bundledPopRelationship: [
              {
                id: "string",
                href: "string",
                name: "string",
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
              }
            ],
            constraint: [
              {
                id: "string",
                href: "string",
                name: "string",
                version: "string",
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string",
                "@referredType": "string"
              }
            ],
            place: [
              {
                id: "string",
                href: "string",
                name: "string",
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string",
                "@referredType": "string"
              }
            ],
            popRelationship: [
              {
                id: "string",
                href: "string",
                name: "string",
                relationshipType: "string",
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
              }
            ],
            price: {
              unit: "string",
              value: 0
            },
            pricingLogicAlgorithm: [
              {
                id: "string",
                href: "string",
                description: "string",
                name: "string",
                plaSpecId: "string",
                validFor: {
                  endDateTime: new Date(),
                  startDateTime: new Date()
                },
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
              }
            ],
            prodSpecCharValueUse: [
              {
                description: "string",
                maxCardinality: 0,
                minCardinality: 0,
                name: "string",
                valueType: "string",
                productSpecCharacteristicValue: [
                  {
                    isDefault: true,
                    rangeInterval: "string",
                    regex: "string",
                    unitOfMeasure: "string",
                    valueFrom: "string",
                    valueTo: "string",
                    valueType: "string",
                    validFor: {
                      endDateTime: new Date(),
                      startDateTime: new Date()
                    },
                    value: "string",
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string"
                  }
                ],
                productSpecification: {
                  id: "string",
                  href: "string",
                  name: "string",
                  version: "string",
                  targetProductSchema: {
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string"
                  },
                  "@baseType": "string",
                  "@schemaLocation": "string",
                  "@type": "string",
                  "@referredType": "string"
                },
                validFor: {
                  endDateTime: new Date(),
                  startDateTime: new Date()
                },
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
              }
            ],
            productOfferingTerm: [
              {
                description: "string",
                name: "string",
                duration: {
                  amount: 1,
                  units: "string"
                },
                validFor: {
                  endDateTime: new Date(),
                  startDateTime: new Date()
                },
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
              }
            ],
            tax: [
              {
                taxCategory: "string",
                taxRate: 0,
                taxAmount: {
                  unit: "string",
                  value: 0
                },
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
              }
            ],
            unitOfMeasure: {
              amount: 1,
              units: "string"
            },
            validFor: {
              endDateTime: new Date(),
              startDateTime: new Date()
            },
            "@baseType": "string",
            "@schemaLocation": "string",
            "@type": "string"
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
                brand: "string",
                description: "string",
                isBundle: true,
                lastUpdate: new Date(),
                lifecycleStatus: "string",
                name: "string",
                productNumber: "string",
                version: "string",
                attachment: [
                  {
                    id: "string",
                    href: "string",
                    attachmentType: "string",
                    content: "string",
                    description: "string",
                    mimeType: "string",
                    name: "string",
                    url: "string",
                    size: {
                      amount: 1,
                      units: "string"
                    },
                    validFor: {
                      endDateTime: new Date(),
                      startDateTime: new Date()
                    },
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string",
                    "@referredType": "string"
                  }
                ],
                bundledProductSpecification: [
                  {
                    id: "string",
                    href: "string",
                    lifecycleStatus: "string",
                    name: "string",
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string"
                  }
                ],
                productSpecCharacteristic: [
                  {
                    configurable: true,
                    description: "string",
                    extensible: true,
                    isUnique: true,
                    maxCardinality: 0,
                    minCardinality: 0,
                    name: "string",
                    regex: "string",
                    valueType: "string",
                    productSpecCharRelationship: [
                      {
                        id: "string",
                        href: "string",
                        charSpecSeq: 0,
                        name: "string",
                        relationshipType: "string",
                        validFor: {
                          endDateTime: new Date(),
                          startDateTime: new Date()
                        },
                        "@baseType": "string",
                        "@schemaLocation": "string",
                        "@type": "string"
                      }
                    ],
                    productSpecCharacteristicValue: [
                      {
                        isDefault: true,
                        rangeInterval: "string",
                        regex: "string",
                        unitOfMeasure: "string",
                        valueFrom: "string",
                        valueTo: "string",
                        valueType: "string",
                        validFor: {
                          endDateTime: new Date(),
                          startDateTime: new Date()
                        },
                        value: "string",
                        "@baseType": "string",
                        "@schemaLocation": "string",
                        "@type": "string"
                      }
                    ],
                    validFor: {
                      endDateTime: new Date(),
                      startDateTime: new Date()
                    },
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string"
                  }
                ],
                productSpecificationRelationship: [
                  {
                    id: "string",
                    href: "string",
                    relationshipType: "string",
                    validFor: {
                      endDateTime: new Date(),
                      startDateTime: new Date()
                    },
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string"
                  }
                ],
                relatedParty: [
                  {
                    id: "string",
                    href: "string",
                    name: "string",
                    role: "string",
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string",
                    "@referredType": "string"
                  }
                ],
                resourceSpecification: [
                  {
                    id: "string",
                    href: "string",
                    name: "string",
                    version: "string",
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string",
                    "@referredType": "string"
                  }
                ],
                serviceSpecification: [
                  {
                    id: "string",
                    href: "string",
                    name: "string",
                    version: "string",
                    targetServiceSchema: {
                      "@baseType": "string",
                      "@schemaLocation": "string",
                      "@type": "string"
                    },
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string",
                    "@referredType": "string"
                  }
                ],
                targetProductSchema: {
                  "@baseType": "string",
                  "@schemaLocation": "string",
                  "@type": "string"
                },
                validFor: {
                  endDateTime: new Date(),
                  startDateTime: new Date()
                },
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
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
            brand: "string",
            description: "string",
            isBundle: true,
            lastUpdate: new Date(),
            lifecycleStatus: "string",
            name: "string",
            productNumber: "string",
            version: "string",
            attachment: [
              {
                id: "string",
                href: "string",
                attachmentType: "string",
                content: "string",
                description: "string",
                mimeType: "string",
                name: "string",
                url: "string",
                size: {
                  amount: 1,
                  units: "string"
                },
                validFor: {
                  endDateTime: new Date(),
                  startDateTime: new Date()
                },
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string",
                "@referredType": "string"
              }
            ],
            bundledProductSpecification: [
              {
                id: "string",
                href: "string",
                lifecycleStatus: "string",
                name: "string",
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
              }
            ],
            productSpecCharacteristic: [
              {
                configurable: true,
                description: "string",
                extensible: true,
                isUnique: true,
                maxCardinality: 0,
                minCardinality: 0,
                name: "string",
                regex: "string",
                valueType: "string",
                productSpecCharRelationship: [
                  {
                    id: "string",
                    href: "string",
                    charSpecSeq: 0,
                    name: "string",
                    relationshipType: "string",
                    validFor: {
                      endDateTime: new Date(),
                      startDateTime: new Date()
                    },
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string"
                  }
                ],
                productSpecCharacteristicValue: [
                  {
                    isDefault: true,
                    rangeInterval: "string",
                    regex: "string",
                    unitOfMeasure: "string",
                    valueFrom: "string",
                    valueTo: "string",
                    valueType: "string",
                    validFor: {
                      endDateTime: new Date(),
                      startDateTime: new Date()
                    },
                    value: "string",
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string"
                  }
                ],
                validFor: {
                  endDateTime: new Date(),
                  startDateTime: new Date()
                },
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
              }
            ],
            productSpecificationRelationship: [
              {
                id: "string",
                href: "string",
                relationshipType: "string",
                validFor: {
                  endDateTime: new Date(),
                  startDateTime: new Date()
                },
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
              }
            ],
            relatedParty: [
              {
                id: "string",
                href: "string",
                name: "string",
                role: "string",
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string",
                "@referredType": "string"
              }
            ],
            resourceSpecification: [
              {
                id: "string",
                href: "string",
                name: "string",
                version: "string",
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string",
                "@referredType": "string"
              }
            ],
            serviceSpecification: [
              {
                id: "string",
                href: "string",
                name: "string",
                version: "string",
                targetServiceSchema: {
                  "@baseType": "string",
                  "@schemaLocation": "string",
                  "@type": "string"
                },
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string",
                "@referredType": "string"
              }
            ],
            targetProductSchema: {
              "@baseType": "string",
              "@schemaLocation": "string",
              "@type": "string"
            },
            validFor: {
              endDateTime: new Date(),
              startDateTime: new Date()
            },
            "@baseType": "string",
            "@schemaLocation": "string",
            "@type": "string"
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
            brand: "string",
            description: "string",
            isBundle: true,
            lastUpdate: new Date(),
            lifecycleStatus: "string",
            name: "string",
            productNumber: "string",
            version: "string",
            attachment: [
              {
                id: "string",
                href: "string",
                attachmentType: "string",
                content: "string",
                description: "string",
                mimeType: "string",
                name: "string",
                url: "string",
                size: {
                  amount: 1,
                  units: "string"
                },
                validFor: {
                  endDateTime: new Date(),
                  startDateTime: new Date()
                },
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string",
                "@referredType": "string"
              }
            ],
            bundledProductSpecification: [
              {
                id: "string",
                href: "string",
                lifecycleStatus: "string",
                name: "string",
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
              }
            ],
            productSpecCharacteristic: [
              {
                configurable: true,
                description: "string",
                extensible: true,
                isUnique: true,
                maxCardinality: 0,
                minCardinality: 0,
                name: "string",
                regex: "string",
                valueType: "string",
                productSpecCharRelationship: [
                  {
                    id: "string",
                    href: "string",
                    charSpecSeq: 0,
                    name: "string",
                    relationshipType: "string",
                    validFor: {
                      endDateTime: new Date(),
                      startDateTime: new Date()
                    },
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string"
                  }
                ],
                productSpecCharacteristicValue: [
                  {
                    isDefault: true,
                    rangeInterval: "string",
                    regex: "string",
                    unitOfMeasure: "string",
                    valueFrom: "string",
                    valueTo: "string",
                    valueType: "string",
                    validFor: {
                      endDateTime: new Date(),
                      startDateTime: new Date()
                    },
                    value: "string",
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string"
                  }
                ],
                validFor: {
                  endDateTime: new Date(),
                  startDateTime: new Date()
                },
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
              }
            ],
            productSpecificationRelationship: [
              {
                id: "string",
                href: "string",
                relationshipType: "string",
                validFor: {
                  endDateTime: new Date(),
                  startDateTime: new Date()
                },
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
              }
            ],
            relatedParty: [
              {
                id: "string",
                href: "string",
                name: "string",
                role: "string",
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string",
                "@referredType": "string"
              }
            ],
            resourceSpecification: [
              {
                id: "string",
                href: "string",
                name: "string",
                version: "string",
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string",
                "@referredType": "string"
              }
            ],
            serviceSpecification: [
              {
                id: "string",
                href: "string",
                name: "string",
                version: "string",
                targetServiceSchema: {
                  "@baseType": "string",
                  "@schemaLocation": "string",
                  "@type": "string"
                },
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string",
                "@referredType": "string"
              }
            ],
            targetProductSchema: {
              "@baseType": "string",
              "@schemaLocation": "string",
              "@type": "string"
            },
            validFor: {
              endDateTime: new Date(),
              startDateTime: new Date()
            },
            "@baseType": "string",
            "@schemaLocation": "string",
            "@type": "string"
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
            brand: "string",
            description: "string",
            isBundle: true,
            lastUpdate: new Date(),
            lifecycleStatus: "string",
            name: "string",
            productNumber: "string",
            version: "string",
            attachment: [
              {
                id: "string",
                href: "string",
                attachmentType: "string",
                content: "string",
                description: "string",
                mimeType: "string",
                name: "string",
                url: "string",
                size: {
                  amount: 1,
                  units: "string"
                },
                validFor: {
                  endDateTime: new Date(),
                  startDateTime: new Date()
                },
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string",
                "@referredType": "string"
              }
            ],
            bundledProductSpecification: [
              {
                id: "string",
                href: "string",
                lifecycleStatus: "string",
                name: "string",
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
              }
            ],
            productSpecCharacteristic: [
              {
                configurable: true,
                description: "string",
                extensible: true,
                isUnique: true,
                maxCardinality: 0,
                minCardinality: 0,
                name: "string",
                regex: "string",
                valueType: "string",
                productSpecCharRelationship: [
                  {
                    id: "string",
                    href: "string",
                    charSpecSeq: 0,
                    name: "string",
                    relationshipType: "string",
                    validFor: {
                      endDateTime: new Date(),
                      startDateTime: new Date()
                    },
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string"
                  }
                ],
                productSpecCharacteristicValue: [
                  {
                    isDefault: true,
                    rangeInterval: "string",
                    regex: "string",
                    unitOfMeasure: "string",
                    valueFrom: "string",
                    valueTo: "string",
                    valueType: "string",
                    validFor: {
                      endDateTime: new Date(),
                      startDateTime: new Date()
                    },
                    value: "string",
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string"
                  }
                ],
                validFor: {
                  endDateTime: new Date(),
                  startDateTime: new Date()
                },
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
              }
            ],
            productSpecificationRelationship: [
              {
                id: "string",
                href: "string",
                relationshipType: "string",
                validFor: {
                  endDateTime: new Date(),
                  startDateTime: new Date()
                },
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
              }
            ],
            relatedParty: [
              {
                id: "string",
                href: "string",
                name: "string",
                role: "string",
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string",
                "@referredType": "string"
              }
            ],
            resourceSpecification: [
              {
                id: "string",
                href: "string",
                name: "string",
                version: "string",
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string",
                "@referredType": "string"
              }
            ],
            serviceSpecification: [
              {
                id: "string",
                href: "string",
                name: "string",
                version: "string",
                targetServiceSchema: {
                  "@baseType": "string",
                  "@schemaLocation": "string",
                  "@type": "string"
                },
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string",
                "@referredType": "string"
              }
            ],
            targetProductSchema: {
              "@baseType": "string",
              "@schemaLocation": "string",
              "@type": "string"
            },
            validFor: {
              endDateTime: new Date(),
              startDateTime: new Date()
            },
            "@baseType": "string",
            "@schemaLocation": "string",
            "@type": "string"
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
                completionDate: new Date(),
                contentType: "string",
                creationDate: new Date(),
                errorLog: "string",
                path: "string",
                url: "string",
                status: "Not Started",
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
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
                completionDate: new Date(),
                contentType: "string",
                creationDate: new Date(),
                errorLog: "string",
                path: "string",
                url: "string",
                status: "Not Started",
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
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
            completionDate: new Date(),
            contentType: "string",
            creationDate: new Date(),
            errorLog: "string",
            path: "string",
            url: "string",
            status: "Not Started",
            "@baseType": "string",
            "@schemaLocation": "string",
            "@type": "string"
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
                completionDate: new Date(),
                contentType: "string",
                creationDate: new Date(),
                errorLog: "string",
                path: "string",
                query: "string",
                url: "string",
                status: "Not Started",
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
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
                action: 'shwo_export_job'
            },
            href: faker.internet.url(),
            completionDate: new Date(),
            contentType: "string",
            creationDate: new Date(),
            errorLog: "string",
            path: "string",
            query: "string",
            url: "string",
            status: "Not Started",
            "@baseType": "string",
            "@schemaLocation": "string",
            "@type": "string"
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
            completionDate: new Date(),
            contentType: "string",
            creationDate: new Date(),
            errorLog: "string",
            path: "string",
            query: "string",
            url: "string",
            status: "Not Started",
            "@baseType": "string",
            "@schemaLocation": "string",
            "@type": "string"
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

    create_listener_catalog_create_event: function(request)
    {
        console.log("product_catalog_management_controller.create_listener_catalog_create_event")
        return {
            id: faker.datatype.uuid(),
            routeDetails: {
                controller: 'Product Catalog Management',
                action: 'create_listener_catalog_create_event'
            },
           callback: "string",
           query: "string"
        }
    },
    create_listener_catalog_delete_event: function(request)
    {
        console.log("product_catalog_management_controller.create_listener_catalog_delete_event")
        return {
            id: faker.datatype.uuid(),
            routeDetails: {
                controller: 'Product Catalog Management',
                action: 'create_listener_catalog_delete_event'
            },
           callback: "string",
           query: "string"
        }
    },
    create_listener_catalog_batch_event: function(request)
    {
        console.log("product_catalog_management_controller.create_listener_catalog_batch_event")
        return {
            id: faker.datatype.uuid(),
            routeDetails: {
                controller: 'Product Catalog Management',
                action: 'create_listener_catalog_batch_event'
            },
           callback: "string",
           query: "string"
        }
    },

    create_listener_category_create_event: function(request)
    {
        console.log("product_catalog_management_controller.create_listener_category_create_event")
        return {
            id: faker.datatype.uuid(),
            routeDetails: {
                controller: 'Product Catalog Management',
                action: 'create_listener_category_create_event'
            },
           callback: "string",
           query: "string"
        }
    },
    create_listener_category_delete_event: function(request)
    {
        console.log("product_catalog_management_controller.create_listener_category_delete_event")
        return {
            id: faker.datatype.uuid(),
            routeDetails: {
                controller: 'Product Catalog Management',
                action: 'create_listener_category_delete_event'
            },
           callback: "string",
           query: "string"
        }
    },

    create_listener_product_offerenig_create_event: function(request)
    {
        console.log("product_catalog_management_controller.create_listener_product_offerenig_create_event")
        return {
            id: faker.datatype.uuid(),
            routeDetails: {
                controller: 'Product Catalog Management',
                action: 'create_listener_product_offerenig_create_event'
            },
           callback: "string",
           query: "string"
        }
    },
    create_listener_product_offering_attribute_value_change_event: function(request)
    {
        console.log("product_catalog_management_controller.create_listener_product_offering_attribute_value_change_event")
        return {
            id: faker.datatype.uuid(),
            routeDetails: {
                controller: 'Product Catalog Management',
                action: 'create_listener_product_offering_attribute_value_change_event'
            },
           callback: "string",
           query: "string"
        }
    },
    create_listener_product_offering_state_change_event: function(request)
    {
        console.log("product_catalog_management_controller.create_listener_product_offering_state_change_event")
        return {
            id: faker.datatype.uuid(),
            routeDetails: {
                controller: 'Product Catalog Management',
                action: 'create_listener_product_offering_state_change_event'
            },
           callback: "string",
           query: "string"
        }
    },
    create_listener_product_offering_delete_event: function(request)
    {
        console.log("product_catalog_management_controller.create_listener_product_offering_delete_event")
        return {
            id: faker.datatype.uuid(),
            routeDetails: {
                controller: 'Product Catalog Management',
                action: 'create_listener_product_offering_delete_event'
            },
           callback: "string",
           query: "string"
        }
    },

    create_listener_product_offering_price_change_event: function(request)
    {
        console.log("product_catalog_management_controller.create_listener_product_offering_price_change_event")
        return {
            id: faker.datatype.uuid(),
            routeDetails: {
                controller: 'Product Catalog Management',
                action: 'create_listener_product_offering_price_change_event'
            },
           callback: "string",
           query: "string"
        }
    },
    create_listener_product_offering_price_attribute_value_change_event: function(request)
    {
        console.log("product_catalog_management_controller.create_listener_product_offering_price_attribute_value_change_event")
        return {
            id: faker.datatype.uuid(),
            routeDetails: {
                controller: 'Product Catalog Management',
                action: 'create_listener_product_offering_price_attribute_value_change_event'
            },
           callback: "string",
           query: "string"
        }
    },
    create_listener_product_offering_price_state_change_event: function(request)
    {
        console.log("product_catalog_management_controller.create_listener_product_offering_price_state_change_event")
        return {
            id: faker.datatype.uuid(),
            routeDetails: {
                controller: 'Product Catalog Management',
                action: 'create_listener_product_offering_price_state_change_event'
            },
           callback: "string",
           query: "string"
        }
    },
    create_listener_product_offering_price_delete_event: function(request)
    {
        console.log("product_catalog_management_controller.create_listener_product_offering_price_delete_event")
        return {
            id: faker.datatype.uuid(),
            routeDetails: {
                controller: 'Product Catalog Management',
                action: 'create_listener_product_offering_price_delete_event'
            },
           callback: "string",
           query: "string"
        }
    },

    create_listener_product_spesification_create_event: function(request)
    {
        console.log("product_catalog_management_controller.create_listener_product_spesification_create_event")
        return {
            id: faker.datatype.uuid(),
            routeDetails: {
                controller: 'Product Catalog Management',
                action: 'create_listener_product_spesification_create_event'
            },
           callback: "string",
           query: "string"
        }
    },
    create_listener_product_spesification_delete_event: function(request)
    {
        console.log("product_catalog_management_controller.create_listener_product_spesification_delete_event")
        return {
            id: faker.datatype.uuid(),
            routeDetails: {
                controller: 'Product Catalog Management',
                action: 'create_listener_product_spesification_delete_event'
            },
           callback: "string",
           query: "string"
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


}