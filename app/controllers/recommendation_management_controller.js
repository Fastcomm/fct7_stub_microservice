//  === Requirements ===
const faker = require('faker')

//  === Controller ===
module.exports = {
    index: function(request)
    {
        console.log("recommendation_management_controller.index")
        return [
            {
                id: faker.datatype.uuid(),
                routeDetails: {
                    controller: 'Recommendation Management',
                    action: 'index'
                },
                href: faker.internet.url(),
                description: "string",
                instantSyncRecommendation: true,
                name: "string",
                recommendationType: "string",
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
                place: {
                  id: "string",
                  href: "string",
                  name: "string",
                  role: "string",
                  "@baseType": "string",
                  "@schemaLocation": "string",
                  "@type": "string",
                  "@referredType": "string"
                },
                productOrder: [
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
                productOrderItem: [
                  {
                    entityHref: "string",
                    entityId: "string",
                    itemId: "string",
                    name: "string",
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string",
                    "@referredType": "string"
                  }
                ],
                recommendationItem: [
                  {
                    id: "string",
                    priority: 0,
                    product: {
                      id: "string",
                      href: "string",
                      description: "string",
                      isBundle: true,
                      isCustomerVisible: true,
                      name: "string",
                      orderDate: new Date(),
                      productSerialNumber: "string",
                      startDate: new Date(),
                      terminationDate: new Date(),
                      agreement: [
                        {
                          id: "string",
                          href: "string",
                          agreementItemId: "string",
                          name: "string",
                          "@baseType": "string",
                          "@schemaLocation": "string",
                          "@type": "string",
                          "@referredType": "string"
                        }
                      ],
                      billingAccount: {
                        id: "string",
                        href: "string",
                        name: "string",
                        "@baseType": "string",
                        "@schemaLocation": "string",
                        "@type": "string",
                        "@referredType": "string"
                      },
                      place: [
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
                      product: [
                        "string"
                      ],
                      productCharacteristic: [
                        {
                          id: "string",
                          name: "string",
                          valueType: "string",
                          characteristicRelationship: [
                            {
                              id: "string",
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
                      productOffering: {
                        id: "string",
                        href: "string",
                        name: "string",
                        "@baseType": "string",
                        "@schemaLocation": "string",
                        "@type": "string",
                        "@referredType": "string"
                      },
                      productOrderItem: [
                        {
                          orderItemAction: "string",
                          orderItemId: "string",
                          productOrderHref: "string",
                          productOrderId: "string",
                          role: "string",
                          "@baseType": "string",
                          "@schemaLocation": "string",
                          "@type": "string",
                          "@referredType": "string"
                        }
                      ],
                      productPrice: [
                        {
                          description: "string",
                          name: "string",
                          priceType: "string",
                          recurringChargePeriod: "string",
                          unitOfMeasure: "string",
                          billingAccount: {
                            id: "string",
                            href: "string",
                            name: "string",
                            "@baseType": "string",
                            "@schemaLocation": "string",
                            "@type": "string",
                            "@referredType": "string"
                          },
                          price: {
                            percentage: 0,
                            taxRate: 0,
                            dutyFreeAmount: {
                              unit: "string",
                              value: 0
                            },
                            taxIncludedAmount: {
                              unit: "string",
                              value: 0
                            },
                            "@baseType": "string",
                            "@schemaLocation": "string",
                            "@type": "string"
                          },
                          productOfferingPrice: {
                            id: "string",
                            href: "string",
                            name: "string",
                            "@baseType": "string",
                            "@schemaLocation": "string",
                            "@type": "string",
                            "@referredType": "string"
                          },
                          productPriceAlteration: [
                            {
                              applicationDuration: 0,
                              description: "string",
                              name: "string",
                              priceType: "string",
                              priority: 0,
                              recurringChargePeriod: "string",
                              unitOfMeasure: "string",
                              price: {
                                percentage: 0,
                                taxRate: 0,
                                dutyFreeAmount: {
                                  unit: "string",
                                  value: 0
                                },
                                taxIncludedAmount: {
                                  unit: "string",
                                  value: 0
                                },
                                "@baseType": "string",
                                "@schemaLocation": "string",
                                "@type": "string"
                              },
                              productOfferingPrice: {
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
                          ],
                          "@baseType": "string",
                          "@schemaLocation": "string",
                          "@type": "string"
                        }
                      ],
                      productRelationship: [
                        {
                          relationshipType: "string",
                          product: "string",
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
                      productTerm: [
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
                      realizingResource: [
                        {
                          id: "string",
                          href: "string",
                          "@baseType": "string",
                          "@schemaLocation": "string",
                          "@type": "string",
                          "@referredType": "string"
                        }
                      ],
                      realizingService: [
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
                      status: "created",
                      "@baseType": "string",
                      "@schemaLocation": "string",
                      "@type": "string",
                      "@referredType": "string"
                    },
                    productOffering: {
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
                ],
                relatedParty: {
                  id: "string",
                  href: "string",
                  name: "string",
                  role: "string",
                  "@baseType": "string",
                  "@schemaLocation": "string",
                  "@type": "string",
                  "@referredType": "string"
                },
                shoppingCart: [
                  {
                    id: "string",
                    href: "string",
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string",
                    "@referredType": "string"
                  }
                ],
                shoppingCartItem: [
                  {
                    entityHref: "string",
                    entityId: "string",
                    itemId: "string",
                    name: "string",
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string",
                    "@referredType": "string"
                  }
                ],
                state: "accepted",
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
    create: function(request)
    {
        console.log("recommendation_management_controller.create")
        return {
            id: faker.datatype.uuid(),
            routeDetails: {
                controller: 'Recommendation Management',
                action: 'create'
            },
            href: faker.internet.url(),
            description: "string",
            instantSyncRecommendation: true,
            name: "string",
            recommendationType: "string",
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
            place: {
              id: "string",
              href: "string",
              name: "string",
              role: "string",
              "@baseType": "string",
              "@schemaLocation": "string",
              "@type": "string",
              "@referredType": "string"
            },
            productOrder: [
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
            productOrderItem: [
              {
                entityHref: "string",
                entityId: "string",
                itemId: "string",
                name: "string",
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string",
                "@referredType": "string"
              }
            ],
            recommendationItem: [
              {
                id: "string",
                priority: 0,
                product: {
                  id: "string",
                  href: "string",
                  description: "string",
                  isBundle: true,
                  isCustomerVisible: true,
                  name: "string",
                  orderDate: new Date(),
                  productSerialNumber: "string",
                  startDate: new Date(),
                  terminationDate: new Date(),
                  agreement: [
                    {
                      id: "string",
                      href: "string",
                      agreementItemId: "string",
                      name: "string",
                      "@baseType": "string",
                      "@schemaLocation": "string",
                      "@type": "string",
                      "@referredType": "string"
                    }
                  ],
                  billingAccount: {
                    id: "string",
                    href: "string",
                    name: "string",
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string",
                    "@referredType": "string"
                  },
                  place: [
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
                  product: [
                    "string"
                  ],
                  productCharacteristic: [
                    {
                      id: "string",
                      name: "string",
                      valueType: "string",
                      characteristicRelationship: [
                        {
                          id: "string",
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
                  productOffering: {
                    id: "string",
                    href: "string",
                    name: "string",
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string",
                    "@referredType": "string"
                  },
                  productOrderItem: [
                    {
                      orderItemAction: "string",
                      orderItemId: "string",
                      productOrderHref: "string",
                      productOrderId: "string",
                      role: "string",
                      "@baseType": "string",
                      "@schemaLocation": "string",
                      "@type": "string",
                      "@referredType": "string"
                    }
                  ],
                  productPrice: [
                    {
                      description: "string",
                      name: "string",
                      priceType: "string",
                      recurringChargePeriod: "string",
                      unitOfMeasure: "string",
                      billingAccount: {
                        id: "string",
                        href: "string",
                        name: "string",
                        "@baseType": "string",
                        "@schemaLocation": "string",
                        "@type": "string",
                        "@referredType": "string"
                      },
                      price: {
                        percentage: 0,
                        taxRate: 0,
                        dutyFreeAmount: {
                          unit: "string",
                          value: 0
                        },
                        taxIncludedAmount: {
                          unit: "string",
                          value: 0
                        },
                        "@baseType": "string",
                        "@schemaLocation": "string",
                        "@type": "string"
                      },
                      productOfferingPrice: {
                        id: "string",
                        href: "string",
                        name: "string",
                        "@baseType": "string",
                        "@schemaLocation": "string",
                        "@type": "string",
                        "@referredType": "string"
                      },
                      productPriceAlteration: [
                        {
                          applicationDuration: 0,
                          description: "string",
                          name: "string",
                          priceType: "string",
                          priority: 0,
                          recurringChargePeriod: "string",
                          unitOfMeasure: "string",
                          price: {
                            percentage: 0,
                            taxRate: 0,
                            dutyFreeAmount: {
                              unit: "string",
                              value: 0
                            },
                            taxIncludedAmount: {
                              unit: "string",
                              value: 0
                            },
                            "@baseType": "string",
                            "@schemaLocation": "string",
                            "@type": "string"
                          },
                          productOfferingPrice: {
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
                      ],
                      "@baseType": "string",
                      "@schemaLocation": "string",
                      "@type": "string"
                    }
                  ],
                  productRelationship: [
                    {
                      relationshipType: "string",
                      product: "string",
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
                  productTerm: [
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
                  realizingResource: [
                    {
                      id: "string",
                      href: "string",
                      "@baseType": "string",
                      "@schemaLocation": "string",
                      "@type": "string",
                      "@referredType": "string"
                    }
                  ],
                  realizingService: [
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
                  status: "created",
                  "@baseType": "string",
                  "@schemaLocation": "string",
                  "@type": "string",
                  "@referredType": "string"
                },
                productOffering: {
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
            ],
            relatedParty: {
              id: "string",
              href: "string",
              name: "string",
              role: "string",
              "@baseType": "string",
              "@schemaLocation": "string",
              "@type": "string",
              "@referredType": "string"
            },
            shoppingCart: [
              {
                id: "string",
                href: "string",
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string",
                "@referredType": "string"
              }
            ],
            shoppingCartItem: [
              {
                entityHref: "string",
                entityId: "string",
                itemId: "string",
                name: "string",
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string",
                "@referredType": "string"
              }
            ],
            state: "accepted",
            validFor: {
              endDateTime: new Date(),
              startDateTime: new Date()
            },
            "@baseType": "string",
            "@schemaLocation": "string",
            "@type": "string"
        }
    },
    show: function(request)
    {
        console.log("recommendation_management_controller.show")
        return {
            id: request.params.id,
            routeDetails: {
                controller: 'Recommendation Management',
                action: 'show'
            },
            href: faker.internet.url(),
            description: "string",
            instantSyncRecommendation: true,
            name: "string",
            recommendationType: "string",
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
            place: {
              id: "string",
              href: "string",
              name: "string",
              role: "string",
              "@baseType": "string",
              "@schemaLocation": "string",
              "@type": "string",
              "@referredType": "string"
            },
            productOrder: [
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
            productOrderItem: [
              {
                entityHref: "string",
                entityId: "string",
                itemId: "string",
                name: "string",
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string",
                "@referredType": "string"
              }
            ],
            recommendationItem: [
              {
                id: "string",
                priority: 0,
                product: {
                  id: "string",
                  href: "string",
                  description: "string",
                  isBundle: true,
                  isCustomerVisible: true,
                  name: "string",
                  orderDate: new Date(),
                  productSerialNumber: "string",
                  startDate: new Date(),
                  terminationDate: new Date(),
                  agreement: [
                    {
                      id: "string",
                      href: "string",
                      agreementItemId: "string",
                      name: "string",
                      "@baseType": "string",
                      "@schemaLocation": "string",
                      "@type": "string",
                      "@referredType": "string"
                    }
                  ],
                  billingAccount: {
                    id: "string",
                    href: "string",
                    name: "string",
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string",
                    "@referredType": "string"
                  },
                  place: [
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
                  product: [
                    "string"
                  ],
                  productCharacteristic: [
                    {
                      id: "string",
                      name: "string",
                      valueType: "string",
                      characteristicRelationship: [
                        {
                          id: "string",
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
                  productOffering: {
                    id: "string",
                    href: "string",
                    name: "string",
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string",
                    "@referredType": "string"
                  },
                  productOrderItem: [
                    {
                      orderItemAction: "string",
                      orderItemId: "string",
                      productOrderHref: "string",
                      productOrderId: "string",
                      role: "string",
                      "@baseType": "string",
                      "@schemaLocation": "string",
                      "@type": "string",
                      "@referredType": "string"
                    }
                  ],
                  productPrice: [
                    {
                      description: "string",
                      name: "string",
                      priceType: "string",
                      recurringChargePeriod: "string",
                      unitOfMeasure: "string",
                      billingAccount: {
                        id: "string",
                        href: "string",
                        name: "string",
                        "@baseType": "string",
                        "@schemaLocation": "string",
                        "@type": "string",
                        "@referredType": "string"
                      },
                      price: {
                        percentage: 0,
                        taxRate: 0,
                        dutyFreeAmount: {
                          unit: "string",
                          value: 0
                        },
                        taxIncludedAmount: {
                          unit: "string",
                          value: 0
                        },
                        "@baseType": "string",
                        "@schemaLocation": "string",
                        "@type": "string"
                      },
                      productOfferingPrice: {
                        id: "string",
                        href: "string",
                        name: "string",
                        "@baseType": "string",
                        "@schemaLocation": "string",
                        "@type": "string",
                        "@referredType": "string"
                      },
                      productPriceAlteration: [
                        {
                          applicationDuration: 0,
                          description: "string",
                          name: "string",
                          priceType: "string",
                          priority: 0,
                          recurringChargePeriod: "string",
                          unitOfMeasure: "string",
                          price: {
                            percentage: 0,
                            taxRate: 0,
                            dutyFreeAmount: {
                              unit: "string",
                              value: 0
                            },
                            taxIncludedAmount: {
                              unit: "string",
                              value: 0
                            },
                            "@baseType": "string",
                            "@schemaLocation": "string",
                            "@type": "string"
                          },
                          productOfferingPrice: {
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
                      ],
                      "@baseType": "string",
                      "@schemaLocation": "string",
                      "@type": "string"
                    }
                  ],
                  productRelationship: [
                    {
                      relationshipType: "string",
                      product: "string",
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
                  productTerm: [
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
                  realizingResource: [
                    {
                      id: "string",
                      href: "string",
                      "@baseType": "string",
                      "@schemaLocation": "string",
                      "@type": "string",
                      "@referredType": "string"
                    }
                  ],
                  realizingService: [
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
                  status: "created",
                  "@baseType": "string",
                  "@schemaLocation": "string",
                  "@type": "string",
                  "@referredType": "string"
                },
                productOffering: {
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
            ],
            relatedParty: {
              id: "string",
              href: "string",
              name: "string",
              role: "string",
              "@baseType": "string",
              "@schemaLocation": "string",
              "@type": "string",
              "@referredType": "string"
            },
            shoppingCart: [
              {
                id: "string",
                href: "string",
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string",
                "@referredType": "string"
              }
            ],
            shoppingCartItem: [
              {
                entityHref: "string",
                entityId: "string",
                itemId: "string",
                name: "string",
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string",
                "@referredType": "string"
              }
            ],
            state: "accepted",
            validFor: {
              endDateTime: new Date(),
              startDateTime: new Date()
            },
            "@baseType": "string",
            "@schemaLocation": "string",
            "@type": "string"
        }
    },

    create_hub: function(request)
    {
        console.log("Recommendation Management.create_hub")
        return [
            { 
                id: faker.datatype.uuid(),
                routeDetails: {
                    controller: 'Recommendation Management',
                    action: 'create_hub'
                },
                callback: "string",
                query: "string"
            }
        ]
    },
    destroy_hub: function(request)
    {
        console.log("Recommendation Management.destroy_hub")
        return {  
            id: request.params.id,
            routeDetails: {
                controller: 'Recommendation Management',
                action: 'destroy_hub'
            },
            code: 0,
            reason: 0,
            message: "string",
            status: 0,
            referenceError: "string",
            "@type": "string",
            "@schemaLocation": "string"
        }
    },

    create_listener_create_event: function(request)
    {
        console.log("Recommendation Management.create_listener_create_event")

        return {
            id: faker.datatype.uuid(),
            routeDetails: {
                controller: 'Recommendation Management',
                action: 'create_listener_create_event'
            },
            callback: "string",
            query: "string"
        }
    },
    create_listener_state_change_event: function(request)
    {
        console.log("Recommendation Management.create_listener_state_change_event")

        return {
            id: faker.datatype.uuid(),
            routeDetails: {
                controller: 'Recommendation Management',
                action: 'create_listener_state_change_event'
            },
            callback: "string",
            query: "string"
        }
    }
}