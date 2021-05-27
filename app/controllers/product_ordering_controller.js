//  === Requirements ===
const faker = require('faker')

//  === Controller ===
module.exports = {
    index: function(request)
    {
        console.log("product_ordering_controller.index")
        return [
            {
                id: faker.datatype.uuid(),
                routeDetails: {
                    controller: 'Product Ordering',
                    action: 'index'
                },
                href: faker.internet.url(),
                cancellationDate: new Date(),
                cancellationReason: "string",
                category: "string",
                completionDate: new Date(),
                description: "string",
                expectedCompletionDate: new Date(),
                externalId: "string",
                notificationContact: "string",
                orderDate: new Date(),
                priority: "string",
                requestedCompletionDate: new Date(),
                requestedStartDate: new Date(),
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
                billingAccount: {
                  id: "string",
                  href: "string",
                  name: "string",
                  "@baseType": "string",
                  "@schemaLocation": "string",
                  "@type": "string",
                  "@referredType": "string"
                },
                channel: [
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
                note: [
                  {
                    id: "string",
                    author: "string",
                    date: new Date(),
                    text: "string",
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string"
                  }
                ],
                orderTotalPrice: [
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
                    priceAlteration: [
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
                payment: [
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
                productOfferingQualification: [
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
                    id: "string",
                    quantity: 0,
                    action: "add",
                    appointment: {
                      id: "string",
                      href: "string",
                      description: "string",
                      "@baseType": "string",
                      "@schemaLocation": "string",
                      "@type": "string",
                      "@referredType": "string"
                    },
                    billingAccount: {
                      id: "string",
                      href: "string",
                      name: "string",
                      "@baseType": "string",
                      "@schemaLocation": "string",
                      "@type": "string",
                      "@referredType": "string"
                    },
                    itemPrice: [
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
                        priceAlteration: [
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
                    itemTerm: [
                      {
                        description: "string",
                        name: "string",
                        duration: {
                          amount: 1,
                          units: "string"
                        },
                        "@baseType": "string",
                        "@schemaLocation": "string",
                        "@type": "string"
                      }
                    ],
                    itemTotalPrice: [
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
                        priceAlteration: [
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
                    payment: [
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
                          name: "string",
                          valueType: "string",
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
                          name: "string",
                          value: "string",
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
                    productOfferingQualificationItem: {
                      id: "string",
                      href: "string",
                      name: "string",
                      productOfferingQualificationHref: "string",
                      productOfferingQualificationId: "string",
                      productOfferingQualificationName: "string",
                      "@baseType": "string",
                      "@schemaLocation": "string",
                      "@type": "string",
                      "@referredType": "string"
                    },
                    productOrderItem: [
                      "string"
                    ],
                    productOrderItemRelationship: [
                      {
                        id: "string",
                        relationshipType: "string",
                        "@baseType": "string",
                        "@schemaLocation": "string",
                        "@type": "string"
                      }
                    ],
                    qualification: [
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
                    quoteItem: {
                      id: "string",
                      href: "string",
                      name: "string",
                      quoteHref: "string",
                      quoteId: "string",
                      quoteName: "string",
                      "@baseType": "string",
                      "@schemaLocation": "string",
                      "@type": "string",
                      "@referredType": "string"
                    },
                    state: "acknowledged",
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string"
                  }
                ],
                quote: [
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
                state: "acknowledged",
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
            }
        ]
    },
    create: function(request)
    {
        console.log("product_ordering_controller.create")
        return {
            id: faker.datatype.uuid(),
            routeDetails: {
                controller: 'Product Ordering',
                action: 'create'
            },
            href: faker.internet.url(),
            cancellationDate: new Date(),
            cancellationReason: "string",
            category: "string",
            completionDate: new Date(),
            description: "string",
            expectedCompletionDate: new Date(),
            externalId: "string",
            notificationContact: "string",
            orderDate: new Date(),
            priority: "string",
            requestedCompletionDate: new Date(),
            requestedStartDate: new Date(),
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
            billingAccount: {
              id: "string",
              href: "string",
              name: "string",
              "@baseType": "string",
              "@schemaLocation": "string",
              "@type": "string",
              "@referredType": "string"
            },
            channel: [
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
            note: [
              {
                id: "string",
                author: "string",
                date: new Date(),
                text: "string",
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
              }
            ],
            orderTotalPrice: [
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
                priceAlteration: [
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
            payment: [
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
            productOfferingQualification: [
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
                id: "string",
                quantity: 0,
                action: "add",
                appointment: {
                  id: "string",
                  href: "string",
                  description: "string",
                  "@baseType": "string",
                  "@schemaLocation": "string",
                  "@type": "string",
                  "@referredType": "string"
                },
                billingAccount: {
                  id: "string",
                  href: "string",
                  name: "string",
                  "@baseType": "string",
                  "@schemaLocation": "string",
                  "@type": "string",
                  "@referredType": "string"
                },
                itemPrice: [
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
                    priceAlteration: [
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
                itemTerm: [
                  {
                    description: "string",
                    name: "string",
                    duration: {
                      amount: 1,
                      units: "string"
                    },
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string"
                  }
                ],
                itemTotalPrice: [
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
                    priceAlteration: [
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
                payment: [
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
                      name: "string",
                      valueType: "string",
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
                      name: "string",
                      value: "string",
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
                productOfferingQualificationItem: {
                  id: "string",
                  href: "string",
                  name: "string",
                  productOfferingQualificationHref: "string",
                  productOfferingQualificationId: "string",
                  productOfferingQualificationName: "string",
                  "@baseType": "string",
                  "@schemaLocation": "string",
                  "@type": "string",
                  "@referredType": "string"
                },
                productOrderItem: [
                  "string"
                ],
                productOrderItemRelationship: [
                  {
                    id: "string",
                    relationshipType: "string",
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string"
                  }
                ],
                qualification: [
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
                quoteItem: {
                  id: "string",
                  href: "string",
                  name: "string",
                  quoteHref: "string",
                  quoteId: "string",
                  quoteName: "string",
                  "@baseType": "string",
                  "@schemaLocation": "string",
                  "@type": "string",
                  "@referredType": "string"
                },
                state: "acknowledged",
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
              }
            ],
            quote: [
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
            state: "acknowledged",
            "@baseType": "string",
            "@schemaLocation": "string",
            "@type": "string"
        }
    },
    show: function(request)
    {
        console.log("product_ordering_controller.show")
        return {
            id: request.params.id,
            routeDetails: {
                controller: 'Product Ordering',
                action: 'show'
            },
            href: faker.internet.url(),
            cancellationDate: new Date(),
            cancellationReason: "string",
            category: "string",
            completionDate: new Date(),
            description: "string",
            expectedCompletionDate: new Date(),
            externalId: "string",
            notificationContact: "string",
            orderDate: new Date(),
            priority: "string",
            requestedCompletionDate: new Date(),
            requestedStartDate: new Date(),
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
            billingAccount: {
              id: "string",
              href: "string",
              name: "string",
              "@baseType": "string",
              "@schemaLocation": "string",
              "@type": "string",
              "@referredType": "string"
            },
            channel: [
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
            note: [
              {
                id: "string",
                author: "string",
                date: new Date(),
                text: "string",
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
              }
            ],
            orderTotalPrice: [
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
                priceAlteration: [
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
            payment: [
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
            productOfferingQualification: [
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
                id: "string",
                quantity: 0,
                action: "add",
                appointment: {
                  id: "string",
                  href: "string",
                  description: "string",
                  "@baseType": "string",
                  "@schemaLocation": "string",
                  "@type": "string",
                  "@referredType": "string"
                },
                billingAccount: {
                  id: "string",
                  href: "string",
                  name: "string",
                  "@baseType": "string",
                  "@schemaLocation": "string",
                  "@type": "string",
                  "@referredType": "string"
                },
                itemPrice: [
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
                    priceAlteration: [
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
                itemTerm: [
                  {
                    description: "string",
                    name: "string",
                    duration: {
                      amount: 1,
                      units: "string"
                    },
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string"
                  }
                ],
                itemTotalPrice: [
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
                    priceAlteration: [
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
                payment: [
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
                      name: "string",
                      valueType: "string",
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
                      name: "string",
                      value: "string",
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
                productOfferingQualificationItem: {
                  id: "string",
                  href: "string",
                  name: "string",
                  productOfferingQualificationHref: "string",
                  productOfferingQualificationId: "string",
                  productOfferingQualificationName: "string",
                  "@baseType": "string",
                  "@schemaLocation": "string",
                  "@type": "string",
                  "@referredType": "string"
                },
                productOrderItem: [
                  "string"
                ],
                productOrderItemRelationship: [
                  {
                    id: "string",
                    relationshipType: "string",
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string"
                  }
                ],
                qualification: [
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
                quoteItem: {
                  id: "string",
                  href: "string",
                  name: "string",
                  quoteHref: "string",
                  quoteId: "string",
                  quoteName: "string",
                  "@baseType": "string",
                  "@schemaLocation": "string",
                  "@type": "string",
                  "@referredType": "string"
                },
                state: "acknowledged",
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
              }
            ],
            quote: [
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
            state: "acknowledged",
            "@baseType": "string",
            "@schemaLocation": "string",
            "@type": "string"
        }
    },
    update: function(request)
    {
        console.log("product_ordering_controller.update")
        return {
            id: request.params.id,
            routeDetails: {
                controller: 'Product Ordering',
                action: 'update'
            },
            href: faker.internet.url(),
            cancellationDate: new Date(),
            cancellationReason: "string",
            category: "string",
            completionDate: new Date(),
            description: "string",
            expectedCompletionDate: new Date(),
            externalId: "string",
            notificationContact: "string",
            orderDate: new Date(),
            priority: "string",
            requestedCompletionDate: new Date(),
            requestedStartDate: new Date(),
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
            billingAccount: {
              id: "string",
              href: "string",
              name: "string",
              "@baseType": "string",
              "@schemaLocation": "string",
              "@type": "string",
              "@referredType": "string"
            },
            channel: [
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
            note: [
              {
                id: "string",
                author: "string",
                date: new Date(),
                text: "string",
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
              }
            ],
            orderTotalPrice: [
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
                priceAlteration: [
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
            payment: [
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
            productOfferingQualification: [
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
                id: "string",
                quantity: 0,
                action: "add",
                appointment: {
                  id: "string",
                  href: "string",
                  description: "string",
                  "@baseType": "string",
                  "@schemaLocation": "string",
                  "@type": "string",
                  "@referredType": "string"
                },
                billingAccount: {
                  id: "string",
                  href: "string",
                  name: "string",
                  "@baseType": "string",
                  "@schemaLocation": "string",
                  "@type": "string",
                  "@referredType": "string"
                },
                itemPrice: [
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
                    priceAlteration: [
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
                itemTerm: [
                  {
                    description: "string",
                    name: "string",
                    duration: {
                      amount: 1,
                      units: "string"
                    },
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string"
                  }
                ],
                itemTotalPrice: [
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
                    priceAlteration: [
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
                payment: [
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
                      name: "string",
                      valueType: "string",
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
                      name: "string",
                      value: "string",
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
                productOfferingQualificationItem: {
                  id: "string",
                  href: "string",
                  name: "string",
                  productOfferingQualificationHref: "string",
                  productOfferingQualificationId: "string",
                  productOfferingQualificationName: "string",
                  "@baseType": "string",
                  "@schemaLocation": "string",
                  "@type": "string",
                  "@referredType": "string"
                },
                productOrderItem: [
                  "string"
                ],
                productOrderItemRelationship: [
                  {
                    id: "string",
                    relationshipType: "string",
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string"
                  }
                ],
                qualification: [
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
                quoteItem: {
                  id: "string",
                  href: "string",
                  name: "string",
                  quoteHref: "string",
                  quoteId: "string",
                  quoteName: "string",
                  "@baseType": "string",
                  "@schemaLocation": "string",
                  "@type": "string",
                  "@referredType": "string"
                },
                state: "acknowledged",
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
              }
            ],
            quote: [
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
            state: "acknowledged",
            "@baseType": "string",
            "@schemaLocation": "string",
            "@type": "string"
        }

    },
    destroy: function(request)
    {
        console.log("product_ordering_controller.destroy")
        return {
            id: request.params.id,
            routeDetails: {
                controller: 'Product Ordering',
                action: 'destroy'
            },
            code: 204
        }
    },

    index_cancel: function(request)
    {
        console.log("product_ordering_controller.index_cancel")
        return {
            id: faker.datatype.uuid(),
            routeDetails: {
                controller: 'Product Ordering',
                action: 'index_cancel'
            },
            href: faker.internet.url(),
            cancellationReason: "string",
            effectiveCancellationDate: new Date(),
            requestedCancellationDate: new Date(),
            productOrder: {
              id: "string",
              href: "string",
              name: "string",
              "@baseType": "string",
              "@schemaLocation": "string",
              "@type": "string",
              "@referredType": "string"
            },
            state: "acknowledged",
            "@baseType": "string",
            "@schemaLocation": "string",
            "@type": "string"
        }
    },
    create_cancel: function(request)
    {
        console.log("product_ordering_controller.create_cancel")
        return {
            id: faker.datatype.uuid(),
            routeDetails: {
                controller: 'Product Ordering',
                action: 'create_cancel'
            },
            href: faker.internet.url(),
            cancellationReason: "string",
            effectiveCancellationDate: new Date(),
            requestedCancellationDate: new Date(),
            productOrder: {
              id: "string",
              href: "string",
              name: "string",
              "@baseType": "string",
              "@schemaLocation": "string",
              "@type": "string",
              "@referredType": "string"
            },
            state: "acknowledged",
            "@baseType": "string",
            "@schemaLocation": "string",
            "@type": "string"
        }
    },
    show_cancel: function(request)
    {
        console.log("product_ordering_controller.show_cancel")
        return {
            id: request.params.cancel_id,
            routeDetails: {
                controller: 'Product Ordering',
                action: 'show_cancel'
            },
            href: faker.internet.url(),
            cancellationReason: "string",
            effectiveCancellationDate: new Date(),
            requestedCancellationDate: new Date(),
            productOrder: {
              id: "string",
              href: "string",
              name: "string",
              "@baseType": "string",
              "@schemaLocation": "string",
              "@type": "string",
              "@referredType": "string"
            },
            state: "acknowledged",
            "@baseType": "string",
            "@schemaLocation": "string",
            "@type": "string"
        }
    },

    create_listener_create_event: function(request)
    {
        console.log("product_ordering_controller.create_listener_create_event")

        return {
            id: faker.datatype.uuid(),
            routeDetails: {
                controller: 'product_ordering_controller',
                action: 'create_listener_create_event'
            },
            code: 204
        }
    },
    create_listener_attribute_value_change_event: function(request)
    {
        console.log("product_ordering_controller.create_listener_attribute_value_change_event")

        return {
            id: faker.datatype.uuid(),
            routeDetails: {
                controller: 'product_ordering_controller',
                action: 'create_listener_attribute_value_change_event'
            },
            code: 204
        }
    },
    create_listener_delete_event: function(request)
    {
        console.log("product_ordering_controller.create_listener_delete_event")

        return {
            id: faker.datatype.uuid(),
            routeDetails: {
                controller: 'product_ordering_controller',
                action: 'create_listener_delete_event'
            },
            code: 204
        }
    },
    create_listener_state_change_event: function(request)
    {
        console.log("product_ordering_controller.create_listener_state_change_event")

        return {
            id: faker.datatype.uuid(),
            routeDetails: {
                controller: 'product_ordering_controller',
                action: 'create_listener_state_change_event'
            },
            code: 204
        }
    },
    create_listener_information_required_event: function(request)
    {
        console.log("product_ordering_controller.create_listener_information_required_event")

        return {
            id: faker.datatype.uuid(),
            routeDetails: {
                controller: 'product_ordering_controller',
                action: 'create_listener_information_required_event'
            },
            code: 204
        }
    },

    create_listener_cancel_create_event: function(request)
    {
        console.log("product_ordering_controller.create_listener_cancel_create_event")

        return {
            id: faker.datatype.uuid(),
            routeDetails: {
                controller: 'product_ordering_controller',
                action: 'create_listener_cancel_create_event'
            },
            code: 204
        }
    },
    create_listener_cancel_attribute_value_change_event: function(request)
    {
        console.log("product_ordering_controller.create_listener_cancel_attribute_value_change_event")

        return {
            id: faker.datatype.uuid(),
            routeDetails: {
                controller: 'product_ordering_controller',
                action: 'create_listener_cancel_attribute_value_change_event'
            },
            code: 204
        }
    },
    create_listener_cancel_delete_event: function(request)
    {
        console.log("product_ordering_controller.create_listener_cancel_delete_event")

        return {
            id: faker.datatype.uuid(),
            routeDetails: {
                controller: 'product_ordering_controller',
                action: 'create_listener_cancel_delete_event'
            },
            code: 204
        }
    },
    create_listener_cancel_state_change_event: function(request)
    {
        console.log("product_ordering_controller.create_listener_cancel_state_change_event")

        return {
            id: faker.datatype.uuid(),
            routeDetails: {
                controller: 'product_ordering_controller',
                action: 'create_listener_cancel_state_change_event'
            },
            code: 204
        }
    },
    create_listener_cancel_information_required_event: function(request)
    {
        console.log("product_ordering_controller.create_listener_cancel_information_required_event")

        return {
            id: faker.datatype.uuid(),
            routeDetails: {
                controller: 'product_ordering_controller',
                action: 'create_listener_cancel_information_required_event'
            },
            code: 204
        }
    },

    create_hub: function(request)
    {
        console.log("product_ordering_controller.create_hub")
        
        return {
            id: faker.datatype.uuid(),
            routeDetails: {
                controller: 'product_ordering_controller',
                action: 'create_hub'
            },
            callback: "string",
            query: null
        }
    },
    destroy_hub: function(request)
    {
        console.log("product_ordering_controller.destroy_hub")
        return {
            id: request.params.hub_id,
            routeDetails: {
                controller: 'product_ordering_controller',
                action: 'destroy_hub'
            },
            code: 204
        }
    }
}