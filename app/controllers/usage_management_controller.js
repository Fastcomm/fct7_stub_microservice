//  === Requirements ===
const faker = require('faker')

//  === Controller ===
module.exports = {
    index: function(request)
    {
        console.log('usage_management_controller.index')
        return [
            {
                id: faker.datatype.uuid(),
                routeDetails: {
                    controller: 'Usage Management',
                    action: 'index'
                },
                href: faker.internet.url(),
                description: "Voicemail Retrieval",
                usageDate: new Date(),
                usageType: "string",
                ratedProductUsage: [
                  {
                    isBilled: true,
                    isTaxExempt: true,
                    offerTariffType: "string",
                    ratingAmountType: "string",
                    ratingDate: new Date(),
                    taxRate: 0,
                    usageRatingTag: "string",
                    bucketValueConvertedInAmount: {
                      id: "string",
                      href: "string",
                      unit: "string",
                      value: 0,
                      "@baseType": "string",
                      "@schemaLocation": "string",
                      "@type": "string"
                    },
                    productRef: {
                      id: "string",
                      href: "string",
                      name: "string",
                      "@baseType": "string",
                      "@schemaLocation": "string",
                      "@type": "string",
                      "@referredType": "string"
                    },
                    taxExcludedRatingAmount: {
                      id: "string",
                      href: "string",
                      unit: "string",
                      value: 0,
                      "@baseType": "string",
                      "@schemaLocation": "string",
                      "@type": "string"
                    },
                    taxIncludedRatingAmount: {
                      id: "string",
                      href: "string",
                      unit: "string",
                      value: 0,
                      "@baseType": "string",
                      "@schemaLocation": "string",
                      "@type": "string"
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
                status: "received",
                usageCharacteristic: [
                  {
                    id: "string",
                    name: "string",
                    valueType: "string",
                    characteristicRelationship: [
                      {
                        id: "string",
                        href: "string",
                        relationshipType: "string",
                        "@baseType": "string",
                        "@schemaLocation": "string",
                        "@type": "string"
                      }
                    ],
                    value: "string",
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string"
                  }
                ],
                usageSpecification: {
                  id: "string",
                  href: "string",
                  name: "string",
                  "@baseType": "string",
                  "@schemaLocation": "string",
                  "@type": "string",
                  "@referredType": "string"
                },
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
              }
        ]
    },
    create: function(request)
    {
        console.log('usage_management_controller.create')
        return {
            id: faker.datatype.uuid(),
            routeDetails: {
                controller: 'Usage Management',
                action: 'create'
            },
            href: faker.internet.url(),
            description: "Voicemail Retrieval",
            usageDate: new Date(),
            usageType: "string",
            ratedProductUsage: [
              {
                isBilled: true,
                isTaxExempt: true,
                offerTariffType: "string",
                ratingAmountType: "string",
                ratingDate: new Date(),
                taxRate: 0,
                usageRatingTag: "string",
                bucketValueConvertedInAmount: {
                  id: "string",
                  href: "string",
                  unit: "string",
                  value: 0,
                  "@baseType": "string",
                  "@schemaLocation": "string",
                  "@type": "string"
                },
                productRef: {
                  id: "string",
                  href: "string",
                  name: "string",
                  "@baseType": "string",
                  "@schemaLocation": "string",
                  "@type": "string",
                  "@referredType": "string"
                },
                taxExcludedRatingAmount: {
                  id: "string",
                  href: "string",
                  unit: "string",
                  value: 0,
                  "@baseType": "string",
                  "@schemaLocation": "string",
                  "@type": "string"
                },
                taxIncludedRatingAmount: {
                  id: "string",
                  href: "string",
                  unit: "string",
                  value: 0,
                  "@baseType": "string",
                  "@schemaLocation": "string",
                  "@type": "string"
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
            status: "received",
            usageCharacteristic: [
              {
                id: "string",
                name: "string",
                valueType: "string",
                characteristicRelationship: [
                  {
                    id: "string",
                    href: "string",
                    relationshipType: "string",
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string"
                  }
                ],
                value: "string",
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
              }
            ],
            usageSpecification: {
              id: "string",
              href: "string",
              name: "string",
              "@baseType": "string",
              "@schemaLocation": "string",
              "@type": "string",
              "@referredType": "string"
            },
            "@baseType": "string",
            "@schemaLocation": "string",
            "@type": "string"
        }
    },
    show: function(request)
    {
        console.log('usage_management_controller.show')
        return {
            id: request.params.id,
            routeDetails: {
                controller: 'Usage Management',
                action: 'show'
            },
            href: faker.internet.url(),
            description: "Voicemail Retrieval",
            usageDate: new Date(),
            usageType: "string",
            ratedProductUsage: [
              {
                isBilled: true,
                isTaxExempt: true,
                offerTariffType: "string",
                ratingAmountType: "string",
                ratingDate: new Date(),
                taxRate: 0,
                usageRatingTag: "string",
                bucketValueConvertedInAmount: {
                  id: "string",
                  href: "string",
                  unit: "string",
                  value: 0,
                  "@baseType": "string",
                  "@schemaLocation": "string",
                  "@type": "string"
                },
                productRef: {
                  id: "string",
                  href: "string",
                  name: "string",
                  "@baseType": "string",
                  "@schemaLocation": "string",
                  "@type": "string",
                  "@referredType": "string"
                },
                taxExcludedRatingAmount: {
                  id: "string",
                  href: "string",
                  unit: "string",
                  value: 0,
                  "@baseType": "string",
                  "@schemaLocation": "string",
                  "@type": "string"
                },
                taxIncludedRatingAmount: {
                  id: "string",
                  href: "string",
                  unit: "string",
                  value: 0,
                  "@baseType": "string",
                  "@schemaLocation": "string",
                  "@type": "string"
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
            status: "received",
            usageCharacteristic: [
              {
                id: "string",
                name: "string",
                valueType: "string",
                characteristicRelationship: [
                  {
                    id: "string",
                    href: "string",
                    relationshipType: "string",
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string"
                  }
                ],
                value: "string",
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
              }
            ],
            usageSpecification: {
              id: "string",
              href: "string",
              name: "string",
              "@baseType": "string",
              "@schemaLocation": "string",
              "@type": "string",
              "@referredType": "string"
            },
            "@baseType": "string",
            "@schemaLocation": "string",
            "@type": "string"
        }
    },
    update: function(request)
    {
        console.log('usage_management_controller.update')
        return {
            id: request.params.id,
            routeDetails: {
                controller: 'Usage Management',
                action: 'update'
            },
            href: faker.internet.url(),
            description: "Voicemail Retrieval",
            usageDate: new Date(),
            usageType: "string",
            ratedProductUsage: [
              {
                isBilled: true,
                isTaxExempt: true,
                offerTariffType: "string",
                ratingAmountType: "string",
                ratingDate: new Date(),
                taxRate: 0,
                usageRatingTag: "string",
                bucketValueConvertedInAmount: {
                  id: "string",
                  href: "string",
                  unit: "string",
                  value: 0,
                  "@baseType": "string",
                  "@schemaLocation": "string",
                  "@type": "string"
                },
                productRef: {
                  id: "string",
                  href: "string",
                  name: "string",
                  "@baseType": "string",
                  "@schemaLocation": "string",
                  "@type": "string",
                  "@referredType": "string"
                },
                taxExcludedRatingAmount: {
                  id: "string",
                  href: "string",
                  unit: "string",
                  value: 0,
                  "@baseType": "string",
                  "@schemaLocation": "string",
                  "@type": "string"
                },
                taxIncludedRatingAmount: {
                  id: "string",
                  href: "string",
                  unit: "string",
                  value: 0,
                  "@baseType": "string",
                  "@schemaLocation": "string",
                  "@type": "string"
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
            status: "received",
            usageCharacteristic: [
              {
                id: "string",
                name: "string",
                valueType: "string",
                characteristicRelationship: [
                  {
                    id: "string",
                    href: "string",
                    relationshipType: "string",
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string"
                  }
                ],
                value: "string",
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
              }
            ],
            usageSpecification: {
              id: "string",
              href: "string",
              name: "string",
              "@baseType": "string",
              "@schemaLocation": "string",
              "@type": "string",
              "@referredType": "string"
            },
            "@baseType": "string",
            "@schemaLocation": "string",
            "@type": "string"
        }
    },
    destroy: function(request)
    {
        console.log('usage_management_controller.destroy')
        return {
            id: request.params.id,
            routeDetails: {
                controller: 'Usage Management',
                action: 'destroy'
            },
            code:204
        }
    },

    index_specification: function(request)
    {
        console.log('usage_management_controller.index_specification')
        return [
            {
                id: faker.datatype.uuid(),
                routeDetails: {
                    controller: 'Usage Management',
                    action: 'index_specification'
                },
                href: faker.internet.url(),
                description: "string",
                isBundle: true,
                lastUpdate: new Date(),
                lifecycleStatus: "string",
                name: "string",
                version: "string",
                attachment: [
                  {
                    id: "sting",
                    href: "http://host/Attachment/4aafacbd-11ff-4dc8-b445-305f2215715f",
                    attachmentType: "video",
                    content: "string",
                    description: "Photograph of the Product",
                    mimeType: "string",
                    name: "string",
                    url: "http://host/Content/4aafacbd-11ff-4dc8-b445-305f2215715f",
                    size: {
                      amount: 1,
                      units: "string"
                    },
                    validFor: {
                      id: "string",
                      href: "string",
                      endDateTime: new Date(),
                      startDateTime: new Date(),
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
                entitySpecRelationship: [
                  {
                    id: "string",
                    href: "string",
                    name: "string",
                    relationshipType: "string",
                    role: "string",
                    associationSpec: {
                      id: "string",
                      href: "string",
                      name: "string",
                      "@baseType": "string",
                      "@schemaLocation": "string",
                      "@type": "string",
                      "@referredType": "string"
                    },
                    validFor: {
                      id: "string",
                      href: "string",
                      endDateTime: new Date(),
                      startDateTime: new Date(),
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
                specCharacteristic: [
                  {
                    id: "string",
                    configurable: true,
                    description: "string",
                    extensible: true,
                    isUnique: true,
                    maxCardinality: 0,
                    minCardinality: 0,
                    name: "string",
                    regex: "string",
                    valueType: "string",
                    charSpecRelationship: [
                      {
                        id: "string",
                        href: "string",
                        characteristicSpecificationId: "string",
                        name: "string",
                        parentSpecificationHref: "string",
                        parentSpecificationId: "string",
                        relationshipType: "string",
                        validFor: {
                          id: "string",
                          href: "string",
                          endDateTime: new Date(),
                          startDateTime: new Date(),
                          "@baseType": "string",
                          "@schemaLocation": "string",
                          "@type": "string"
                        },
                        "@baseType": "string",
                        "@schemaLocation": "string",
                        "@type": "string"
                      }
                    ],
                    characteristicValueSpecification: [
                      {
                        isDefault: true,
                        rangeInterval: "string",
                        regex: "string",
                        unitOfMeasure: "string",
                        valueFrom: 0,
                        valueTo: 0,
                        valueType: "string",
                        validFor: {
                          id: "string",
                          href: "string",
                          endDateTime: new Date(),
                          startDateTime: new Date(),
                          "@baseType": "string",
                          "@schemaLocation": "string",
                          "@type": "string"
                        },
                        value: "string",
                        "@baseType": "string",
                        "@schemaLocation": "string",
                        "@type": "string"
                      }
                    ],
                    validFor: {
                      id: "string",
                      href: "string",
                      endDateTime: new Date(),
                      startDateTime: new Date(),
                      "@baseType": "string",
                      "@schemaLocation": "string",
                      "@type": "string"
                    },
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string",
                    "@valueSchemaLocation": "string"
                  }
                ],
                targetEntitySchema: {
                  "@schemaLocation": "string",
                  "@type": "string"
                },
                validFor: {
                  id: "string",
                  href: "string",
                  endDateTime: new Date(),
                  startDateTime: new Date(),
                  "@baseType": "string",
                  "@schemaLocation": "string",
                  "@type": "string"
                },
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
            }
        ]
    },
    create_specification: function(request)
    {
        console.log('usage_management_controller.create_specification')
        return {
            id: faker.datatype.uuid(),
            routeDetails: {
                controller: 'Usage Management',
                action: 'create_specification'
            },
            href: faker.internet.url(),
            description: "string",
            isBundle: true,
            lastUpdate: new Date(),
            lifecycleStatus: "string",
            name: "string",
            version: "string",
            attachment: [
              {
                id: "sting",
                href: "http://host/Attachment/4aafacbd-11ff-4dc8-b445-305f2215715f",
                attachmentType: "video",
                content: "string",
                description: "Photograph of the Product",
                mimeType: "string",
                name: "string",
                url: "http://host/Content/4aafacbd-11ff-4dc8-b445-305f2215715f",
                size: {
                  amount: 1,
                  units: "string"
                },
                validFor: {
                  id: "string",
                  href: "string",
                  endDateTime: new Date(),
                  startDateTime: new Date(),
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
            entitySpecRelationship: [
              {
                id: "string",
                href: "string",
                name: "string",
                relationshipType: "string",
                role: "string",
                associationSpec: {
                  id: "string",
                  href: "string",
                  name: "string",
                  "@baseType": "string",
                  "@schemaLocation": "string",
                  "@type": "string",
                  "@referredType": "string"
                },
                validFor: {
                  id: "string",
                  href: "string",
                  endDateTime: new Date(),
                  startDateTime: new Date(),
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
            specCharacteristic: [
              {
                id: "string",
                configurable: true,
                description: "string",
                extensible: true,
                isUnique: true,
                maxCardinality: 0,
                minCardinality: 0,
                name: "string",
                regex: "string",
                valueType: "string",
                charSpecRelationship: [
                  {
                    id: "string",
                    href: "string",
                    characteristicSpecificationId: "string",
                    name: "string",
                    parentSpecificationHref: "string",
                    parentSpecificationId: "string",
                    relationshipType: "string",
                    validFor: {
                      id: "string",
                      href: "string",
                      endDateTime: new Date(),
                      startDateTime: new Date(),
                      "@baseType": "string",
                      "@schemaLocation": "string",
                      "@type": "string"
                    },
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string"
                  }
                ],
                characteristicValueSpecification: [
                  {
                    isDefault: true,
                    rangeInterval: "string",
                    regex: "string",
                    unitOfMeasure: "string",
                    valueFrom: 0,
                    valueTo: 0,
                    valueType: "string",
                    validFor: {
                      id: "string",
                      href: "string",
                      endDateTime: new Date(),
                      startDateTime: new Date(),
                      "@baseType": "string",
                      "@schemaLocation": "string",
                      "@type": "string"
                    },
                    value: "string",
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string"
                  }
                ],
                validFor: {
                  id: "string",
                  href: "string",
                  endDateTime: new Date(),
                  startDateTime: new Date(),
                  "@baseType": "string",
                  "@schemaLocation": "string",
                  "@type": "string"
                },
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string",
                "@valueSchemaLocation": "string"
              }
            ],
            targetEntitySchema: {
              "@schemaLocation": "string",
              "@type": "string"
            },
            validFor: {
              id: "string",
              href: "string",
              endDateTime: new Date(),
              startDateTime: new Date(),
              "@baseType": "string",
              "@schemaLocation": "string",
              "@type": "string"
            },
            "@baseType": "string",
            "@schemaLocation": "string",
            "@type": "string"
        }
    },
    show_specification: function(request)
    {
        console.log('usage_management_controller.show_specification')
        return {
            id: request.params.id,
            routeDetails: {
                controller: 'Usage Management',
                action: 'show_specification'
            },
            href: faker.internet.url(),
            description: "string",
            isBundle: true,
            lastUpdate: new Date(),
            lifecycleStatus: "string",
            name: "string",
            version: "string",
            attachment: [
              {
                id: "sting",
                href: "http://host/Attachment/4aafacbd-11ff-4dc8-b445-305f2215715f",
                attachmentType: "video",
                content: "string",
                description: "Photograph of the Product",
                mimeType: "string",
                name: "string",
                url: "http://host/Content/4aafacbd-11ff-4dc8-b445-305f2215715f",
                size: {
                  amount: 1,
                  units: "string"
                },
                validFor: {
                  id: "string",
                  href: "string",
                  endDateTime: new Date(),
                  startDateTime: new Date(),
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
            entitySpecRelationship: [
              {
                id: "string",
                href: "string",
                name: "string",
                relationshipType: "string",
                role: "string",
                associationSpec: {
                  id: "string",
                  href: "string",
                  name: "string",
                  "@baseType": "string",
                  "@schemaLocation": "string",
                  "@type": "string",
                  "@referredType": "string"
                },
                validFor: {
                  id: "string",
                  href: "string",
                  endDateTime: new Date(),
                  startDateTime: new Date(),
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
            specCharacteristic: [
              {
                id: "string",
                configurable: true,
                description: "string",
                extensible: true,
                isUnique: true,
                maxCardinality: 0,
                minCardinality: 0,
                name: "string",
                regex: "string",
                valueType: "string",
                charSpecRelationship: [
                  {
                    id: "string",
                    href: "string",
                    characteristicSpecificationId: "string",
                    name: "string",
                    parentSpecificationHref: "string",
                    parentSpecificationId: "string",
                    relationshipType: "string",
                    validFor: {
                      id: "string",
                      href: "string",
                      endDateTime: new Date(),
                      startDateTime: new Date(),
                      "@baseType": "string",
                      "@schemaLocation": "string",
                      "@type": "string"
                    },
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string"
                  }
                ],
                characteristicValueSpecification: [
                  {
                    isDefault: true,
                    rangeInterval: "string",
                    regex: "string",
                    unitOfMeasure: "string",
                    valueFrom: 0,
                    valueTo: 0,
                    valueType: "string",
                    validFor: {
                      id: "string",
                      href: "string",
                      endDateTime: new Date(),
                      startDateTime: new Date(),
                      "@baseType": "string",
                      "@schemaLocation": "string",
                      "@type": "string"
                    },
                    value: "string",
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string"
                  }
                ],
                validFor: {
                  id: "string",
                  href: "string",
                  endDateTime: new Date(),
                  startDateTime: new Date(),
                  "@baseType": "string",
                  "@schemaLocation": "string",
                  "@type": "string"
                },
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string",
                "@valueSchemaLocation": "string"
              }
            ],
            targetEntitySchema: {
              "@schemaLocation": "string",
              "@type": "string"
            },
            validFor: {
              id: "string",
              href: "string",
              endDateTime: new Date(),
              startDateTime: new Date(),
              "@baseType": "string",
              "@schemaLocation": "string",
              "@type": "string"
            },
            "@baseType": "string",
            "@schemaLocation": "string",
            "@type": "string"
        }
    },
    update_specification: function(request)
    {
        console.log('usage_management_controller.update_specification')
        return {
            id: request.params.id,
            routeDetails: {
                controller: 'Usage Management',
                action: 'update_specification'
            },
            href: faker.internet.url(),
            description: "string",
            isBundle: true,
            lastUpdate: new Date(),
            lifecycleStatus: "string",
            name: "string",
            version: "string",
            attachment: [
              {
                id: "sting",
                href: "http://host/Attachment/4aafacbd-11ff-4dc8-b445-305f2215715f",
                attachmentType: "video",
                content: "string",
                description: "Photograph of the Product",
                mimeType: "string",
                name: "string",
                url: "http://host/Content/4aafacbd-11ff-4dc8-b445-305f2215715f",
                size: {
                  amount: 1,
                  units: "string"
                },
                validFor: {
                  id: "string",
                  href: "string",
                  endDateTime: new Date(),
                  startDateTime: new Date(),
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
            entitySpecRelationship: [
              {
                id: "string",
                href: "string",
                name: "string",
                relationshipType: "string",
                role: "string",
                associationSpec: {
                  id: "string",
                  href: "string",
                  name: "string",
                  "@baseType": "string",
                  "@schemaLocation": "string",
                  "@type": "string",
                  "@referredType": "string"
                },
                validFor: {
                  id: "string",
                  href: "string",
                  endDateTime: new Date(),
                  startDateTime: new Date(),
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
            specCharacteristic: [
              {
                id: "string",
                configurable: true,
                description: "string",
                extensible: true,
                isUnique: true,
                maxCardinality: 0,
                minCardinality: 0,
                name: "string",
                regex: "string",
                valueType: "string",
                charSpecRelationship: [
                  {
                    id: "string",
                    href: "string",
                    characteristicSpecificationId: "string",
                    name: "string",
                    parentSpecificationHref: "string",
                    parentSpecificationId: "string",
                    relationshipType: "string",
                    validFor: {
                      id: "string",
                      href: "string",
                      endDateTime: new Date(),
                      startDateTime: new Date(),
                      "@baseType": "string",
                      "@schemaLocation": "string",
                      "@type": "string"
                    },
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string"
                  }
                ],
                characteristicValueSpecification: [
                  {
                    isDefault: true,
                    rangeInterval: "string",
                    regex: "string",
                    unitOfMeasure: "string",
                    valueFrom: 0,
                    valueTo: 0,
                    valueType: "string",
                    validFor: {
                      id: "string",
                      href: "string",
                      endDateTime: new Date(),
                      startDateTime: new Date(),
                      "@baseType": "string",
                      "@schemaLocation": "string",
                      "@type": "string"
                    },
                    value: "string",
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string"
                  }
                ],
                validFor: {
                  id: "string",
                  href: "string",
                  endDateTime: new Date(),
                  startDateTime: new Date(),
                  "@baseType": "string",
                  "@schemaLocation": "string",
                  "@type": "string"
                },
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string",
                "@valueSchemaLocation": "string"
              }
            ],
            targetEntitySchema: {
              "@schemaLocation": "string",
              "@type": "string"
            },
            validFor: {
              id: "string",
              href: "string",
              endDateTime: new Date(),
              startDateTime: new Date(),
              "@baseType": "string",
              "@schemaLocation": "string",
              "@type": "string"
            },
            "@baseType": "string",
            "@schemaLocation": "string",
            "@type": "string"
        }
    },
    destroy_specification: function(request)
    {
        console.log('usage_management_controller.destroy_specification')
        return {
            id: request.params.id,
            routeDetails: {
                controller: 'Usage Management',
                action: 'destroy_specification'
            },
            scode: 204
        }
    },

    create_hub: function(request)
    {
        console.log('usage_management_controller.create_hub')
        return {
            id: faker.datatype.uuid(),
            routeDetails: {
                controller: 'Usage Management',
                action: 'create_hub'
            },
            callback: faker.internet.url(),
            query: faker.hacker.verb()
        }
    },
    destroy_hub: function(request)
    {
        console.log('usage_management_controller.destroy_hub')
        return {
            id: request.params.id,
            routeDetails: {
                controller: 'Usage Management',
                action: 'destroy_hub'
            },
            status: "usage_hub entry destroyed successfully"
        }
    }
}