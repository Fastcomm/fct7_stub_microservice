//  === Requirements ===
const faker = require('faker')

//  === Controller ===
module.exports = {
    index: function(request)
    {
        console.log("shopping_cart_management_controller.index")
        return [
            {  
                id: faker.datatype.uuid(),
                routeDetails: {
                    controller: 'Shopping Cart Management',
                    action: 'index'
                },
                cartTotalPrice:[ 
                    {
                        priceType: "allowance",
                        price: {
                            dutyFreeAmount: {
                                unit: "EUR",
                                value: 26.02
                            },
                            percentage: 23,
                            taxIncludedAmount: {
                                unit: "EUR",
                                value: 26.02
                            }
                        }
                    },
                    {
                        priceType: "recurring",
                        recurringChargePeriod: "montly",
                        price: {
                            dutyFreeAmount: {
                                unit: "EUR",
                                value: 44.72
                            },
                            percentage: 23,
                            taxIncludedAmount: {
                                unit: "EUR",
                                value: 10.28
                            }
                        }
                    }
                ],
                cartItem: [
                    {
                        action: "add",
                        quantity: 1,
                        cartItem: [],
                        product: {
                            characteristic: [
                                {
                                    name: "Color",
                                    value: "Space Grey"
                                },
                                {
                                    name: "Capacity",
                                    value: "64 GB" 
                                }
                            ],
                            productSpecification: {
                                id: "POS123"
                            }
                        },
                        itemPrice: [
                            {
                                priceType: "allowance",
                                price: {
                                    dutyFreeAmount: {
                                        unit: "EUR",
                                        value: 26.02
                                    },
                                    percentage: 23,
                                    taxIncludedAmount: {
                                        unit: "EUR",
                                        value: 5.02
                                    }
                                }
                            },
                            {
                                priceType: "recurring",
                                recurringChargePeriod: "montly",
                                price: {
                                    dutyFreeAmount: {
                                        unit: "EUR",
                                        value: 44.02
                                    },
                                    percentage: 23,
                                    taxIncludedAmount: {
                                        unit: "EUR",
                                        value: 10.02
                                    }
                                }
                            }
                        ],
                        itemTotalPrice: [
                            {
                                priceType: "allowance",
                                price: {
                                    dutyFreeAmount: {
                                        unit: "EUR",
                                        value: 26.02
                                    },
                                    percentage: 23,
                                    taxIncludedAmount: {
                                        unit: "EUR",
                                        value: 5.02
                                    }
                                }
                            },
                            {
                                priceType: "recurring",
                                recurringChargePeriod: "montly",
                                price: {
                                    dutyFreeAmount: {
                                        unit: "EUR",
                                        value: 44.02
                                    },
                                    percentage: 23,
                                    taxIncludedAmount: {
                                        unit: "EUR",
                                        value: 10.02
                                    }
                                }
                            }
                        ],
                        productOffering: {
                            id: "P0123",
                            name: "iPhone XS"
                        }
                    }
                ],
                relatedParty: [
                    {
                        id: "33601010101",
                        name: "rosemary",
                        role: "Customer"
                    }
                ] 
            }
        ]
    },
    create: function(request)
    {
        console.log("shopping_cart_management_controller.create")
        return {  
            id: faker.datatype.uuid(),
            routeDetails: {
                controller: 'Shopping Cart Management',
                action: 'create'
            },
            "@baseType": "string",
            "@schemaLocation": "string",
            "@type": "string",
            validFor: {
                startDateTime: new Date(),
                endDateTime: new Date()    
            },
            contactMedium: [
                {
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string",
                    preferred: true,
                    type: "string",
                    validFor: {
                        startDateTime: new Date(),
                        endDateTime: new Date()    
                    },
                    characteristic: {
                        city: "string",
                        country: "string",
                        emailAddress: "string",
                        faxNumber: "string",
                        phoneNumber: "string",
                        postCode: "string",
                        stateOrProvince: "string",
                        street1: "string",
                        street2: "string",
                        type: "string"
                    }
                }
            ],
            cartTotalPrice: [
                {
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string",
                    description:  "string",
                    name:  "string",
                    priceType:  "string",
                    recurringChargePeriod:  "string",
                    unitOfMeasure:  "string",
                    price: {
                        "@baseType": "string",
                        "@schemaLocation": "string",
                        "@type": "string",
                        dutyFreeAmount: {
                            unit: "string",
                            value: 0
                        },
                        percentage: 0,
                        taxIncludedAmount: {
                            unit: "string",
                            value: 0
                        },
                        taxRate: 0
                    },
                    priceAlteration: [
                        {
                            "@baseType": "string",
                            "@schemaLocation": "string",
                            "@type": "string",
                            applicationDuration: 0,
                            description: "string",
                            name: "string",
                            priceType: "string",
                            priority: 0,
                            recurringChargePeriod: "string",
                            unitOfMeasure: "string",
                            price: {
                                "@baseType": "string",
                                "@schemaLocation": "string",
                                "@type": "string",
                                dutyFreeAmount: {
                                    unit: "string",
                                    value: 0
                                },
                                taxRate: 0
                            }
                        }
                    ]
                }
            ],
            cartItem: [
                {
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string",
                    action: "string",
                    id: "string",
                    quantity: 0,
                    status: "string",
                    itemTerm: [
                        {
                            "@baseType": "string",
                            "@schemaLocation": "string",
                            "@type": "string",
                            description:  "string",
                            duration: {
                                amount: 0,
                                value: "string",
                            },
                            name: "string",
                        }
                    ],
                    cartItem: [
                        "string"
                    ],
                    note: [
                        {
                            author: "string",
                            date: new Date(),
                            text: "string"
                        }
                    ],
                    itemTotalPrice: [
                        {
                            "@baseType": "string",
                            "@schemaLocation": "string",
                            "@type": "string",
                            description: "string",
                            name: "string",
                            priceType: "string",
                            recurringChargePeriod: "string",
                            unitOfMeasure: "string",
                            price: {
                                "@baseType": "string",
                                "@schemaLocation": "string",
                                "@type": "string",
                                dutyFreeAmount: {
                                    unit: "string",
                                    value: 0
                                },
                                percentage: 0,
                                taxIncludedAmount: {
                                    unit: "string",
                                    value: 0
                                },
                                taxRate: 0
                            },
                            priceAlteration: [
                                {
                                    "@baseType": "string",
                                    "@schemaLocation": "string",
                                    "@type": "string",
                                    applicationDuration: 0,
                                    description: "string",
                                    name: "string",
                                    priceType: "string",
                                    priority: 0,
                                    recurringChargePeriod: "string",
                                    unitOfMeasure: "string",
                                    price: {
                                        "@baseType": "string",
                                        "@schemaLocation": "string",
                                        "@type": "string",
                                        dutyFreeAmount: {
                                            unit: "string",
                                            value: 0
                                        },
                                        percentage: 0,
                                        taxIncludedAmount: {
                                            unit: "string",
                                            value: 0
                                        },
                                        taxRate: 0
                                    }
                                }
                            ]
                        }
                    ],
                    product: {
                        "@baseType": "string",
                        "@referredType": "string",
                        "@schemaLocation": "string",
                        "@type": "string",
                        href: "string",
                        id: "string",
                        name: "string",
                        productRelationship: [
                            {
                                type: "string",
                                product: "string"
                            }
                        ],
                        place: [
                            {
                                "@baseType": "string",
                                "@referredType": "string",
                                "@schemaLocation": "string",
                                "@type": "string",
                                href: "string",
                                id: "string",
                                name: "string",
                                role: "string"
                            }
                        ],
                        characteristic: [
                            {
                                name: "string",
                                value: "string"
                            }
                        ],
                        relatedParty: [
                            {
                                "@referredType": "string",
                                href: "string",
                                id: "string",
                                name: "string",
                                role: "string"
                            }
                        ],
                        productSpecification: {
                            "@referredType": "string",
                            href: "string",
                            id: "string",
                            name: "string",
                            version: "string"
                        }
                    },
                    itemPrice: [
                        {
                            "@baseType": "string",
                            "@schemaLocation": "string",
                            "@type": "string",
                            description: "string",
                            name: "string",
                            priceType: "string",
                            recurringChargePeriod: "string",
                            unitOfMeasure: "string",
                            price: {
                                "@baseType": "string",
                                "@schemaLocation": "string",
                                "@type": "string",
                                dutyFreeAmount: {
                                    unit: "string",
                                    value: 0
                                },
                                percentage: 0,
                                taxIncludedAmount: {
                                    unit: "string",
                                    value: 0
                                },
                                taxRate: 0
                            },
                            priceAlteration: [
                                {
                                    "@baseType": "string",
                                    "@schemaLocation": "string",
                                    "@type": "string",
                                    applicationDuration: 0,
                                    description: "string",
                                    name: "string",
                                    priceType: "string",
                                    priority: 0,
                                    recurringChargePeriod: "string",
                                    unitOfMeasure: "string",
                                    price: {
                                        "@baseType": "string",
                                        "@schemaLocation": "string",
                                        "@type": "string",
                                        dutyFreeAmount: {
                                            unit: "string",
                                            value: 0
                                        },
                                        percentage: 0,
                                        taxIncludedAmount: {
                                            unit: "string",
                                            value: 0
                                        },
                                        taxRate: 0
                                    }   
                                }
                            ]
                        }
                    ],
                    productOffering:{
                        "@referredType": "string",
                        href: "string",
                        id: "string",
                        name: "string"
                    },
                    cartItemRelationship: [
                        {
                            id: "string",
                            type: "string",
                            cartItem: [
                                {
                                    "@referredType": "string",
                                    id: "string"
                                }
                            ]
                        }
                    ]
                }
            ],
            relatedParty: [
                {
                    "@referredType": "string",
                    href: "string",
                    id: "string",
                    name: "string",
                    role: "string"
                }
            ]
        }
    },
    show: function(request)
    {
        console.log("shopping_cart_management_controller.show")
        return {  
            id: request.params.id,
            routeDetails: {
                controller: 'Shopping Cart Management',
                action: 'show'
            },
            cartTotalPrice:[ 
                {
                    priceType: "allowance",
                    price: {
                        dutyFreeAmount: {
                            unit: "EUR",
                            value: 26.02
                        },
                        percentage: 23,
                        taxIncludedAmount: {
                            unit: "EUR",
                            value: 26.02
                        }
                    }
                },
                {
                    priceType: "recurring",
                    recurringChargePeriod: "montly",
                    price: {
                        dutyFreeAmount: {
                            unit: "EUR",
                            value: 44.72
                        },
                        percentage: 23,
                        taxIncludedAmount: {
                            unit: "EUR",
                            value: 10.28
                        }
                    }
                }
            ],
            cartItem: [
                {
                    action: "add",
                    quantity: 1,
                    cartItem: [],
                    product: {
                        characteristic: [
                            {
                                name: "Color",
                                value: "Space Grey"
                            },
                            {
                                name: "Capacity",
                                value: "64 GB" 
                            }
                        ],
                        productSpecification: {
                            id: "POS123"
                        }
                    },
                    itemPrice: [
                        {
                            priceType: "allowance",
                            price: {
                                dutyFreeAmount: {
                                    unit: "EUR",
                                    value: 26.02
                                },
                                percentage: 23,
                                taxIncludedAmount: {
                                    unit: "EUR",
                                    value: 5.02
                                }
                            }
                        },
                        {
                            priceType: "recurring",
                            recurringChargePeriod: "montly",
                            price: {
                                dutyFreeAmount: {
                                    unit: "EUR",
                                    value: 44.02
                                },
                                percentage: 23,
                                taxIncludedAmount: {
                                    unit: "EUR",
                                    value: 10.02
                                }
                            }
                        }
                    ],
                    itemTotalPrice: [
                        {
                            priceType: "allowance",
                            price: {
                                dutyFreeAmount: {
                                    unit: "EUR",
                                    value: 26.02
                                },
                                percentage: 23,
                                taxIncludedAmount: {
                                    unit: "EUR",
                                    value: 5.02
                                }
                            }
                        },
                        {
                            priceType: "recurring",
                            recurringChargePeriod: "montly",
                            price: {
                                dutyFreeAmount: {
                                    unit: "EUR",
                                    value: 44.02
                                },
                                percentage: 23,
                                taxIncludedAmount: {
                                    unit: "EUR",
                                    value: 10.02
                                }
                            }
                        }
                    ],
                    productOffering: {
                        id: "P0123",
                        name: "iPhone XS"
                    }
                }
            ],
            relatedParty: [
                {
                    id: "33601010101",
                    name: "rosemary",
                    role: "Customer"
                }
            ] 
        }
    },
    update: function(request)
    {
        console.log("shopping_cart_management_controller.update")
        return {  
            id: request.params.id,
            routeDetails: {
                controller: 'Shopping Cart Management',
                action: 'update'
            },
            "@baseType": "string",
            "@schemaLocation": "string",
            "@type": "string",
            contactMedium: [
                {
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string",
                    preferred: true,
                    type: "string",
                    validFor: {
                        startDateTime: new Date(),
                        endDateTime: new Date()    
                    },
                    characteristic: {
                        city: "string",
                        country: "string",
                        emailAddress: "string",
                        faxNumber: "string",
                        phoneNumber: "string",
                        postCode: "string",
                        stateOrProvince: "string",
                        street1: "string",
                        street2: "string",
                        type: "string"
                    }
                }
            ],
            cartItem: [
                {
                    "@baseType": "string",
                    "@schemaLocation": "string",
                    "@type": "string",
                    action: "string",
                    id: "string",
                    quantity: 0,
                    status: "string",
                    itemTerm: [
                        {
                            "@baseType": "string",
                            "@schemaLocation": "string",
                            "@type": "string",
                            description:  "string",
                            duration: {
                                amount: 0,
                                value: "string",
                            },
                            name: "string",
                        }
                    ],
                    cartItem: [
                        "string"
                    ],
                    note: [
                        {
                            author: "string",
                            date: new Date(),
                            text: "string"
                        }
                    ],
                    itemTotalPrice: [
                        {
                            "@baseType": "string",
                            "@schemaLocation": "string",
                            "@type": "string",
                            description: "string",
                            name: "string",
                            priceType: "string",
                            recurringChargePeriod: "string",
                            unitOfMeasure: "string",
                            price: {
                                "@baseType": "string",
                                "@schemaLocation": "string",
                                "@type": "string",
                                dutyFreeAmount: {
                                    unit: "string",
                                    value: 0
                                },
                                percentage: 0,
                                taxIncludedAmount: {
                                    unit: "string",
                                    value: 0
                                },
                                taxRate: 0
                            },
                            priceAlteration: [
                                {
                                    "@baseType": "string",
                                    "@schemaLocation": "string",
                                    "@type": "string",
                                    applicationDuration: 0,
                                    description: "string",
                                    name: "string",
                                    priceType: "string",
                                    priority: 0,
                                    recurringChargePeriod: "string",
                                    unitOfMeasure: "string",
                                    price: {
                                        "@baseType": "string",
                                        "@schemaLocation": "string",
                                        "@type": "string",
                                        dutyFreeAmount: {
                                            unit: "string",
                                            value: 0
                                        },
                                        percentage: 0,
                                        taxIncludedAmount: {
                                            unit: "string",
                                            value: 0
                                        },
                                        taxRate: 0
                                    }
                                }
                            ]
                        }
                    ],
                    product: {
                        "@baseType": "string",
                        "@referredType": "string",
                        "@schemaLocation": "string",
                        "@type": "string",
                        href: "string",
                        id: "string",
                        name: "string",
                        productRelationship: [
                            {
                                type: "string",
                                product: "string"
                            }
                        ],
                        place: [
                            {
                                "@baseType": "string",
                                "@referredType": "string",
                                "@schemaLocation": "string",
                                "@type": "string",
                                href: "string",
                                id: "string",
                                name: "string",
                                role: "string"
                            }
                        ],
                        characteristic: [
                            {
                                name: "string",
                                value: "string"
                            }
                        ],
                        relatedParty: [
                            {
                                "@referredType": "string",
                                href: "string",
                                id: "string",
                                name: "string",
                                role: "string"
                            }
                        ],
                        productSpecification: {
                            "@referredType": "string",
                            href: "string",
                            id: "string",
                            name: "string",
                            version: "string"
                        }
                    },
                    itemPrice: [
                        {
                            "@baseType": "string",
                            "@schemaLocation": "string",
                            "@type": "string",
                            description: "string",
                            name: "string",
                            priceType: "string",
                            recurringChargePeriod: "string",
                            unitOfMeasure: "string",
                            price: {
                                "@baseType": "string",
                                "@schemaLocation": "string",
                                "@type": "string",
                                dutyFreeAmount: {
                                    unit: "string",
                                    value: 0
                                },
                                percentage: 0,
                                taxIncludedAmount: {
                                    unit: "string",
                                    value: 0
                                },
                                taxRate: 0
                            },
                            priceAlteration: [
                                {
                                    "@baseType": "string",
                                    "@schemaLocation": "string",
                                    "@type": "string",
                                    applicationDuration: 0,
                                    description: "string",
                                    name: "string",
                                    priceType: "string",
                                    priority: 0,
                                    recurringChargePeriod: "string",
                                    unitOfMeasure: "string",
                                    price: {
                                        "@baseType": "string",
                                        "@schemaLocation": "string",
                                        "@type": "string",
                                        dutyFreeAmount: {
                                            unit: "string",
                                            value: 0
                                        },
                                        percentage: 0,
                                        taxIncludedAmount: {
                                            unit: "string",
                                            value: 0
                                        },
                                        taxRate: 0
                                    }   
                                }
                            ]
                        }
                    ],
                    productOffering:{
                        "@referredType": "string",
                        href: "string",
                        id: "string",
                        name: "string"
                    },
                    cartItemRelationship: [
                        {
                            id: "string",
                            type: "string",
                            cartItem: [
                                {
                                    "@referredType": "string",
                                    id: "string"
                                }
                            ]
                        }
                    ]
                }
            ],
            relatedParty: [
                {
                    "@referredType": "string",
                    href: "string",
                    id: "string",
                    name: "string",
                    role: "string"
                }
            ]
        }
    },
    destroy: function(request)
    {
        console.log("shopping_cart_management_controller.destroy")
        return {  
            id: request.params.id,
            routeDetails: {
                controller: 'Shopping Cart Management',
                action: 'destroy'
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
    create_hub: function(request)
    {
        console.log("shopping_cart_management_controller.create_hub")
        return [
            { 
                id: faker.datatype.uuid(),
                routeDetails: {
                    controller: 'Shopping Cart Management',
                    action: 'create_hub'
                },
                callback: "string",
                query: "string"
            }
        ]
    },
    destroy_hub: function(request)
    {
        console.log("shopping_cart_management_controller.destroy_hub")
        return {  
            id: request.params.id,
            routeDetails: {
                controller: 'Shopping Cart Management',
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
    }
}