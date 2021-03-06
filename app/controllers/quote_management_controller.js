//  === Requirements ===
const faker = require('faker')

//  === Controller ===
module.exports = {
    index: function(request)
    {
        console.log("quote_management_controller.index")
        return [
        {
            id: faker.datatype.uuid(),
                routeDetails: {
                    controller: 'quote_management_controller',
                    action: 'index'
                },
            href: faker.internet.url(),
            category: "string",
            description: "string",
            effectiveQuoteCompletionDate: new Date(),
            expectedFulfillmentStartDate: new Date(),
            expectedQuoteCompletionDate: new Date(),
            externalId: "string",
            instantSyncQuote: true,
            quoteDate: new Date(),
            requestedQuoteCompletionDate: new Date(),
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
            authorization: [
              {
                givenDate: new Date(),
                name: "string",
                requestedDate: new Date(),
                signatureRepresentation: "string",
                state: "string",
                approver: [
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
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
              }
            ],
            billingAccount: [
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
            contactMedium: [
              {
                mediumType: "string",
                preferred: true,
                characteristic: {
                  city: "string",
                  contactType: "string",
                  country: "string",
                  emailAddress: "string",
                  faxNumber: "string",
                  phoneNumber: "string",
                  postCode: "string",
                  socialNetworkId: "string",
                  stateOrProvince: "string",
                  street1: "string",
                  street2: "string",
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
            quoteItem: [
              {
                id: "string",
                action: "string",
                quantity: 0,
                state: "string",
                appointment: [
                  {
                    id: "string",
                    href: "string",
                    description: "string",
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
                quoteItem: [
                  "string"
                ],
                quoteItemAuthorization: [
                  {
                    givenDate: new Date(),
                    name: "string",
                    requestedDate: new Date(),
                    signatureRepresentation: "string",
                    state: "string",
                    approver: [
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
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string"
                  }
                ],
                quoteItemPrice: [
                 {
                    description: "string",
                    name: "string",
                    priceType: "string",
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
                quoteItemRelationship: [
                  {
                    id: "string",
                    relationshipType: "string",
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
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
              }
            ],
            quoteTotalPrice: [
              {
                description: "string",
                name: "string",
                priceType: "string",
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
            state: "rejected",
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
        console.log("quote_management_controller.create")
        return {
          id: faker.datatype.uuid(),
              routeDetails: {
                  controller: 'quote_management_controller',
                  action: 'create'
              },
              href: faker.internet.url(),
          category: "string",
          description: "string",
          effectiveQuoteCompletionDate: new Date(),
          expectedFulfillmentStartDate: new Date(),
          expectedQuoteCompletionDate: new Date(),
          externalId: "string",
          instantSyncQuote: true,
          quoteDate: new Date(),
          requestedQuoteCompletionDate: new Date(),
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
          authorization: [
            {
              givenDate: new Date(),
              name: "string",
              requestedDate: new Date(),
              signatureRepresentation: "string",
              state: "string",
              approver: [
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
              "@baseType": "string",
              "@schemaLocation": "string",
              "@type": "string"
            }
          ],
          billingAccount: [
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
          contactMedium: [
            {
              mediumType: "string",
              preferred: true,
              characteristic: {
                city: "string",
                contactType: "string",
                country: "string",
                emailAddress: "string",
                faxNumber: "string",
                phoneNumber: "string",
                postCode: "string",
                socialNetworkId: "string",
                stateOrProvince: "string",
                street1: "string",
                street2: "string",
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
          quoteItem: [
            {
              id: "string",
              action: "string",
              quantity: 0,
              state: "string",
              appointment: [
                {
                  id: "string",
                  href: "string",
                  description: "string",
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
              quoteItem: [
                "string"
              ],
              quoteItemAuthorization: [
                {
                  givenDate: new Date(),
                  name: "string",
                  requestedDate: new Date(),
                  signatureRepresentation: "string",
                  state: "string",
                  approver: [
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
                  "@baseType": "string",
                  "@schemaLocation": "string",
                  "@type": "string"
                }
              ],
              quoteItemPrice: [
               {
                  description: "string",
                  name: "string",
                  priceType: "string",
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
              quoteItemRelationship: [
                {
                  id: "string",
                  relationshipType: "string",
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
              "@baseType": "string",
              "@schemaLocation": "string",
              "@type": "string"
            }
          ],
          quoteTotalPrice: [
            {
              description: "string",
              name: "string",
              priceType: "string",
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
          state: "rejected",
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
        console.log("quote_management_controller.show")
        return [
        {
            id: request.params.id,
            routeDetails: {
                controller: 'quote_management_controller',
                action: 'show'
            },
            href: faker.internet.url(),
            category: "string",
            description: "string",
            effectiveQuoteCompletionDate: new Date(),
            expectedFulfillmentStartDate: new Date(),
            expectedQuoteCompletionDate: new Date(),
            externalId: "string",
            instantSyncQuote: true,
            quoteDate: new Date(),
            requestedQuoteCompletionDate: new Date(),
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
            authorization: [
              {
                givenDate: new Date(),
                name: "string",
                requestedDate: new Date(),
                signatureRepresentation: "string",
                state: "string",
                approver: [
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
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
              }
            ],
            billingAccount: [
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
            contactMedium: [
              {
                mediumType: "string",
                preferred: true,
                characteristic: {
                  city: "string",
                  contactType: "string",
                  country: "string",
                  emailAddress: "string",
                  faxNumber: "string",
                  phoneNumber: "string",
                  postCode: "string",
                  socialNetworkId: "string",
                  stateOrProvince: "string",
                  street1: "string",
                  street2: "string",
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
            quoteItem: [
              {
                id: "string",
                action: "string",
                quantity: 0,
                state: "string",
                appointment: [
                  {
                    id: "string",
                    href: "string",
                    description: "string",
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
                quoteItem: [
                  "string"
                ],
                quoteItemAuthorization: [
                  {
                    givenDate: new Date(),
                    name: "string",
                    requestedDate: new Date(),
                    signatureRepresentation: "string",
                    state: "string",
                    approver: [
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
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string"
                  }
                ],
                quoteItemPrice: [
                 {
                    description: "string",
                    name: "string",
                    priceType: "string",
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
                quoteItemRelationship: [
                  {
                    id: "string",
                    relationshipType: "string",
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
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
              }
            ],
            quoteTotalPrice: [
              {
                description: "string",
                name: "string",
                priceType: "string",
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
            state: "rejected",
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
    update: function(request)
    {
        console.log("quote_management_controller.update")
        return [
        {
            id: request.params.id,
            routeDetails: {
                controller: 'quote_management_controller',
                action: 'update'
            },
            href: faker.internet.url(),
            category: "string",
            description: "string",
            effectiveQuoteCompletionDate: new Date(),
            expectedFulfillmentStartDate: new Date(),
            expectedQuoteCompletionDate: new Date(),
            externalId: "string",
            instantSyncQuote: true,
            quoteDate: new Date(),
            requestedQuoteCompletionDate: new Date(),
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
            authorization: [
              {
                givenDate: new Date(),
                name: "string",
                requestedDate: new Date(),
                signatureRepresentation: "string",
                state: "string",
                approver: [
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
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
              }
            ],
            billingAccount: [
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
            contactMedium: [
              {
                mediumType: "string",
                preferred: true,
                characteristic: {
                  city: "string",
                  contactType: "string",
                  country: "string",
                  emailAddress: "string",
                  faxNumber: "string",
                  phoneNumber: "string",
                  postCode: "string",
                  socialNetworkId: "string",
                  stateOrProvince: "string",
                  street1: "string",
                  street2: "string",
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
            quoteItem: [
              {
                id: "string",
                action: "string",
                quantity: 0,
                state: "string",
                appointment: [
                  {
                    id: "string",
                    href: "string",
                    description: "string",
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
                quoteItem: [
                  "string"
                ],
                quoteItemAuthorization: [
                  {
                    givenDate: new Date(),
                    name: "string",
                    requestedDate: new Date(),
                    signatureRepresentation: "string",
                    state: "string",
                    approver: [
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
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string"
                  }
                ],
                quoteItemPrice: [
                 {
                    description: "string",
                    name: "string",
                    priceType: "string",
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
                quoteItemRelationship: [
                  {
                    id: "string",
                    relationshipType: "string",
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
                "@baseType": "string",
                "@schemaLocation": "string",
                "@type": "string"
              }
            ],
            quoteTotalPrice: [
              {
                description: "string",
                name: "string",
                priceType: "string",
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
            state: "rejected",
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
    destroy: function(request)
    {
        console.log("quote_management_controller.destroy")
        return {
            id: request.params.id,
            routeDetails: {
                controller: 'quote_management_controller',
                action: 'destroy'
            },
            code: 204,
        }
    },

    create_listener_create_event: function(request)
    {
        console.log("quote_management_controller.create_listener_create_event")
        return {
            id: faker.datatype.uuid(),
            routeDetails: {
                controller: 'quote_management_controller',
                action: 'create_listener_create_event'
            },
            "callback": "string",
            "query": "string"
          }
    },
    create_listener_state_change_event: function(request)
    {
        console.log("quote_management_controller.create_listener_state_change_event")
        return {
            id: faker.datatype.uuid(),
            routeDetails: {
                controller: 'quote_management_controller',
                action: 'create_listener_state_change_event'
            },
            "callback": "string",
            "query": "string"
          }
    },
    create_listener_delete_event: function(request)
    {
        console.log("quote_management_controller.create_listener_delete_event")
        return {
            id: faker.datatype.uuid(),
            routeDetails: {
                controller: 'quote_management_controller',
                action: 'create_listener_delete_event'
            },
            "callback": "string",
            "query": "string"
          }
    },
    create_listener_quote_information_required_event: function(request)
    {
        console.log("quote_management_controller.create_listener_quote_information_required_event")
        return {
            id: faker.datatype.uuid(),
            routeDetails: {
                controller: 'quote_management_controller',
                action: 'create_listener_quote_information_required_event'
            },
            "callback": "string",
            "query": "string"
          }
    },
    create_listener_attribute_value_change_event: function(request)
    {
        console.log("quote_management_controller.create_listener_attribute_value_change_event")
        return {
            id: faker.datatype.uuid(),
            routeDetails: {
                controller: 'quote_management_controller',
                action: 'create_listener_attribute_value_change_event'
            },
            "callback": "string",
            "query": "string"
          }
    },

    create_hub: function(request)
    {
        console.log("quote_management_controller.create_hub")
        return [
            { 
                id: faker.datatype.uuid(),
                routeDetails: {
                    controller: 'quote_management_controller',
                    action: 'create_hub'
                },
                callback: "string",
                query: "string"
            }
        ]
    },
    destroy_hub: function(request)
    {
        console.log("quote_management_controller.destroy_hub")
        return {  
            id: request.params.hub_id,
            routeDetails: {
                controller: 'quote_management_controller',
                action: 'destroy_hub'
            },
            code: 204
        }
    }
}