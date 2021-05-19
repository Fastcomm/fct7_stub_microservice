//  === Requirements ===
const faker = require('faker')

//  === Controller ===
module.exports = {
    index: function(request)
    {
        console.log("product_offering_qualification_controller.index")
        return [
            {
                id: faker.datatype.uuid(),
                routeDetails: {
                    controller: 'Product Offering Qualification',
                    action: 'index'
                },
                href: faker.internet.url(),
                description: "string",
                effectiveQualificationDate: new Date(),
                expectedPOQCompletionDate: new Date(),
                expirationDate: new Date(),
                instantSyncQualification: true,
                productOfferingQualificationDate: new Date(),
                provideAlternative: true,
                provideOnlyAvailable: true,
                provideUnavailabilityReason: true,
                qualificationResult: "string",
                requestedPOQCompletionDate: new Date(),
                category: {
                  id: "string",
                  href: "string",
                  name: "string",
                  version: "string",
                  "@baseType": "string",
                  "@schemaLocation": "string",
                  "@type": "string",
                  "@referredType": "string"
                },
                channel: {
                  id: "string",
                  href: "string",
                  name: "string",
                  "@baseType": "string",
                  "@schemaLocation": "string",
                  "@type": "string",
                  "@referredType": "string"
                },
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
                productOfferingQualificationItem: [
                  {
                    id: "string",
                    expectedActivationDate: new Date(),
                    qualificationItemResult: "string",
                    action: "add",
                    alternateProductOfferingProposal: [
                      {
                        id: "string",
                        alternateActivationDate: new Date(),
                        alternateProduct: {
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
                        alternateProductOffering: {
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
                    eligibilityUnavailabilityReason: [
                      {
                        code: "string",
                        label: "string",
                        "@baseType": "string",
                        "@schemaLocation": "string",
                        "@type": "string"
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
                    qualificationItemRelationship: [
                      {
                        id: "string",
                        relationshipType: "string",
                        "@baseType": "string",
                        "@schemaLocation": "string",
                        "@type": "string"
                      }
                    ],
                    state: "acknowledged",
                    terminationError: [
                      {
                        id: "string",
                        value: "string",
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
        console.log("product_offering_qualification_controller.create")
        return [
            {
                id: faker.datatype.uuid(),
                routeDetails: {
                    controller: 'Product Offering Qualification',
                    action: 'create'
                },
                href: faker.internet.url(),
                description: "string",
                effectiveQualificationDate: new Date(),
                expectedPOQCompletionDate: new Date(),
                expirationDate: new Date(),
                instantSyncQualification: true,
                productOfferingQualificationDate: new Date(),
                provideAlternative: true,
                provideOnlyAvailable: true,
                provideUnavailabilityReason: true,
                qualificationResult: "string",
                requestedPOQCompletionDate: new Date(),
                category: {
                  id: "string",
                  href: "string",
                  name: "string",
                  version: "string",
                  "@baseType": "string",
                  "@schemaLocation": "string",
                  "@type": "string",
                  "@referredType": "string"
                },
                channel: {
                  id: "string",
                  href: "string",
                  name: "string",
                  "@baseType": "string",
                  "@schemaLocation": "string",
                  "@type": "string",
                  "@referredType": "string"
                },
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
                productOfferingQualificationItem: [
                  {
                    id: "string",
                    expectedActivationDate: new Date(),
                    qualificationItemResult: "string",
                    action: "add",
                    alternateProductOfferingProposal: [
                      {
                        id: "string",
                        alternateActivationDate: new Date(),
                        alternateProduct: {
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
                        alternateProductOffering: {
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
                    eligibilityUnavailabilityReason: [
                      {
                        code: "string",
                        label: "string",
                        "@baseType": "string",
                        "@schemaLocation": "string",
                        "@type": "string"
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
                    qualificationItemRelationship: [
                      {
                        id: "string",
                        relationshipType: "string",
                        "@baseType": "string",
                        "@schemaLocation": "string",
                        "@type": "string"
                      }
                    ],
                    state: "acknowledged",
                    terminationError: [
                      {
                        id: "string",
                        value: "string",
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
    show: function(request)
    {
        console.log("product_offering_qualification_controller.show")
        return [
            {
                id: request.params.id,
                routeDetails: {
                    controller: 'Product Offering Qualification',
                    action: 'show'
                },
                href: faker.internet.url(),
                description: "string",
                effectiveQualificationDate: new Date(),
                expectedPOQCompletionDate: new Date(),
                expirationDate: new Date(),
                instantSyncQualification: true,
                productOfferingQualificationDate: new Date(),
                provideAlternative: true,
                provideOnlyAvailable: true,
                provideUnavailabilityReason: true,
                qualificationResult: "string",
                requestedPOQCompletionDate: new Date(),
                category: {
                  id: "string",
                  href: "string",
                  name: "string",
                  version: "string",
                  "@baseType": "string",
                  "@schemaLocation": "string",
                  "@type": "string",
                  "@referredType": "string"
                },
                channel: {
                  id: "string",
                  href: "string",
                  name: "string",
                  "@baseType": "string",
                  "@schemaLocation": "string",
                  "@type": "string",
                  "@referredType": "string"
                },
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
                productOfferingQualificationItem: [
                  {
                    id: "string",
                    expectedActivationDate: new Date(),
                    qualificationItemResult: "string",
                    action: "add",
                    alternateProductOfferingProposal: [
                      {
                        id: "string",
                        alternateActivationDate: new Date(),
                        alternateProduct: {
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
                        alternateProductOffering: {
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
                    eligibilityUnavailabilityReason: [
                      {
                        code: "string",
                        label: "string",
                        "@baseType": "string",
                        "@schemaLocation": "string",
                        "@type": "string"
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
                    qualificationItemRelationship: [
                      {
                        id: "string",
                        relationshipType: "string",
                        "@baseType": "string",
                        "@schemaLocation": "string",
                        "@type": "string"
                      }
                    ],
                    state: "acknowledged",
                    terminationError: [
                      {
                        id: "string",
                        value: "string",
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
    update: function(request)
    {
        console.log("product_offering_qualification_controller.update")
        return [
            {
                id: request.params.id,
                routeDetails: {
                    controller: 'Product Offering Qualification',
                    action: 'update'
                },
                href: faker.internet.url(),
                description: "string",
                effectiveQualificationDate: new Date(),
                expectedPOQCompletionDate: new Date(),
                expirationDate: new Date(),
                instantSyncQualification: true,
                productOfferingQualificationDate: new Date(),
                provideAlternative: true,
                provideOnlyAvailable: true,
                provideUnavailabilityReason: true,
                qualificationResult: "string",
                requestedPOQCompletionDate: new Date(),
                category: {
                  id: "string",
                  href: "string",
                  name: "string",
                  version: "string",
                  "@baseType": "string",
                  "@schemaLocation": "string",
                  "@type": "string",
                  "@referredType": "string"
                },
                channel: {
                  id: "string",
                  href: "string",
                  name: "string",
                  "@baseType": "string",
                  "@schemaLocation": "string",
                  "@type": "string",
                  "@referredType": "string"
                },
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
                productOfferingQualificationItem: [
                  {
                    id: "string",
                    expectedActivationDate: new Date(),
                    qualificationItemResult: "string",
                    action: "add",
                    alternateProductOfferingProposal: [
                      {
                        id: "string",
                        alternateActivationDate: new Date(),
                        alternateProduct: {
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
                        alternateProductOffering: {
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
                    eligibilityUnavailabilityReason: [
                      {
                        code: "string",
                        label: "string",
                        "@baseType": "string",
                        "@schemaLocation": "string",
                        "@type": "string"
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
                    qualificationItemRelationship: [
                      {
                        id: "string",
                        relationshipType: "string",
                        "@baseType": "string",
                        "@schemaLocation": "string",
                        "@type": "string"
                      }
                    ],
                    state: "acknowledged",
                    terminationError: [
                      {
                        id: "string",
                        value: "string",
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
    destroy: function(request)
    {
        console.log("product_offering_qualification_controller.destroy")
        return {
            id: request.params.id,
            routeDetails: {
                controller: 'product_offering_qualification_controller',
                action: 'destroy'
            },
            code: 204
        }
    },

    create_listener_create_event: function(request)
    {
        console.log("product_offering_qualification_controller.create_listener_create_event")
        return {
            id: faker.datatype.uuid(),
            routeDetails: {
                controller: 'product_offering_qualification_controller',
                action: 'create_listener_create_event'
            },
            "callback": "string",
            "query": "string" 
        }
    },
    create_listener_attribute_value_change: function(request)
    {
        console.log("product_offering_qualification_controller.create_listener_attribute_value_change")
        return {
            id: faker.datatype.uuid(),
            routeDetails: {
                controller: 'product_offering_qualification_controller',
                action: 'create_listener_attribute_value_change'
            },
            "callback": "string",
            "query": "string" 
        }
    },
    create_listener_state_change_event: function(request)
    {
        console.log("product_offering_qualification_controller.create_listener_state_change_event")
        return {
            id: faker.datatype.uuid(),
            routeDetails: {
                controller: 'product_offering_qualification_controller',
                action: 'create_listener_state_change_event'
            },
            "callback": "string",
            "query": "string" 
        }
    },
    create_listener_delete_event: function(request)
    {
        console.log("product_offering_qualification_controller.create_listener_delete_event")
        return {
            id: faker.datatype.uuid(),
            routeDetails: {
                controller: 'product_offering_qualification_controller',
                action: 'create_listener_delete_event'
            },
            "callback": "string",
            "query": "string" 
        }
    },
    create_listener_information_required_event: function(request)
    {
        console.log("product_offering_qualification_controller.create_listener_information_required_event")
        return {
            id: faker.datatype.uuid(),
            routeDetails: {
                controller: 'product_offering_qualification_controller',
                action: 'create_listener_information_required_event'
            },
            "callback": "string",
            "query": "string" 
        }
    },

    create_hub: function(request)
    {
        console.log("product_offering_qualification_controller.create_hub")
        
        return {
            id: faker.datatype.uuid(),
            routeDetails: {
                controller: 'product_offering_qualification_controller',
                action: 'create_hub'
            },
            callback: "string",
            query: null
        }
    },
    destroy_hub: function(request)
    {
        console.log("product_offering_qualification_controller.destroy_hub")

        return {
            id: request.params.hub_id,
            routeDetails: {
                controller: 'product_offering_qualification_controller',
                action: 'destroy_hub'
            },
            code: 204
        }
    }
}