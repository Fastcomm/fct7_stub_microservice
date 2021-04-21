//  === Requirements ===
const faker = require('faker')

//  === Controller ===
module.exports = {
    index_payment: function(request)
    {
        console.log("payment_management_controller.index_payment")

        return [
            {
                id: faker.datatype.uuid(),
                routeDetails: {
                    controller: 'Payment Management',
                    action: 'index_payment'
                },
                "@type": "string",
                "@schemaLocation": "string",
                correlatorId: "string",
                paymentDate: new Date(),
                name: "string",
                description: "string",
                authorizationCode: "string",
                amount: {
                    amount: 0,
                    units: "string"
                },
                taxAmount: {
                    amount: 0,
                    units: "string"
                },
                totalAmount: {
                    amount: 0,
                    units: "string"
                },
                channel: {
                    id: "string",
                    href: "string",
                    "@referredType": "string",
                    name: "string",
                    description: "string"
                },
                account: {
                    id: "string",
                    href: "string",
                    "@referredType": "string",
                    name: "string",
                    description: "string"
                },
                paymentItem: [
                    {
                        amount: {
                            amount: 0,
                            units: "string"
                        },
                        taxAmount: {
                            amount: 0,
                            units: "string"
                        },
                        totalAmount: {
                            amount: 0,
                            units: "string"
                        },
                        item: {
                            id: "string",
                            href: "string",
                            "@referredType": "string",
                            name: "string",
                            description: "string"
                        }
                    }
                ],
                paymentMethod: {
                    id: "string",
                    href: "string",
                    "@referredType": "string",
                    name: "string",
                    description: "string",
                    validFor: {
                        startDateTime: new Date(),
                        endDateTime: new Date()    
                    },
                    account: [
                        {
                            id: "string",
                            href: "string",
                            "@referredType": "string",
                            name: "string",
                            description: "string" 
                        }
                    ],
                    preferred: true,
                    relatedParty: [
                        {
                            id: "string",
                            href: "string",
                            "@referredType": "string",
                            name: "string",
                            role: "string"
                        }
                    ],
                    "@type": "cash",
                    authorizationCode: "string",
                    status: "string",
                    statusDate: new Date(),
                    details: {}
                },
                status: "string",
                statusDate: new Date(),
                payer: {
                    id: "string",
                    href: "string",
                    "@referredType": "string",
                    name: "string",
                    role: "string"
                }
            }
        ]  
    },
    create_payment: function(request)
    {
        console.log('payment_management_controller.create_payment')
        return {
            id: faker.datatype.uuid(),
            routeDetails: {
                controller: 'Payment Management',
                action: 'create_payment'
            },
            "@type": "string",
            "@schemaLocation": "string",
            correlatorId: "string",
            paymentDate: new Date(),
            name: "string",
            description: "string",
            authorizationCode: "string",
            amount: {
                amount: 0,
                units: "string"
            },
            taxAmount: {
                amount: 0,
                units: "string"
            },
            totalAmount: {
                amount: 0,
                units: "string"
            },
            channel: {
                id: "string",
                href: "string",
                "@referredType": "string",
                name: "string",
                description: "string"
            },
            account: {
                id: "string",
                href: "string",
                "@referredType": "string",
                name: "string",
                description: "string"
            },
            paymentItem: [
                {
                    amount: {
                        amount: 0,
                        units: "string"
                    },
                    taxAmount: {
                        amount: 0,
                        units: "string"
                    },
                    totalAmount: {
                        amount: 0,
                        units: "string"
                    },
                    item: {
                        id: "string",
                        href: "string",
                        "@referredType": "string",
                        name: "string",
                        description: "string"
                    }
                }
            ],
            paymentMethod: {
                id: "string",
                href: "string",
                "@referredType": "string",
                name: "string",
                description: "string",
                validFor: {
                    startDateTime: new Date(),
                    endDateTime: new Date()    
                },
                account: [
                    {
                        id: "string",
                        href: "string",
                        "@referredType": "string",
                        name: "string",
                        description: "string" 
                    }
                ],
                preferred: true,
                relatedParty: [
                    {
                        id: "string",
                        href: "string",
                        "@referredType": "string",
                        name: "string",
                        role: "string"
                    }
                ],
                "@type": "cash",
                authorizationCode: "string",
                status: "string",
                statusDate: new Date(),
                details: {}
            },
            status: "string",
            statusDate: new Date(),
            payer: {
                id: "string",
                href: "string",
                "@referredType": "string",
                name: "string",
                role: "string"
            }
        }
    },
    show_payment: function(request)
    {
        console.log('payment_management_controller.show_payment')
        return {
            id: request.params.payment_id,
            routeDetails: {
                controller: 'Payment Management',
                action: 'show_payment'
            },
            href: faker.internet.url(),
            "@type": "string",
            "@schemaLocation": "string",
            correlatorId: "string",
            paymentDate: new Date(),
            name: "string",
            description: "string",
            authorizationCode: "string",
            amount: {
                amount: 0,
                units: "string"
            },
            taxAmount: {
                amount: 0,
                units: "string"
            },
            totalAmount: {
                amount: 0,
                units: "string"
            },
            channel: {
                id: "string",
                href: "string",
                "@referredType": "string",
                name: "string",
                description: "string"
            },
            account: {
                id: "string",
                href: "string",
                "@referredType": "string",
                name: "string",
                description: "string"
            },
            paymentItem: [
                {
                    amount: {
                        amount: 0,
                        units: "string"
                    },
                    taxAmount: {
                        amount: 0,
                        units: "string"
                    },
                    totalAmount: {
                        amount: 0,
                        units: "string"
                    },
                    item: {
                        id: "string",
                        href: "string",
                        "@referredType": "string",
                        name: "string",
                        description: "string"
                    }
                }
            ],
            paymentMethod: {
                id: "string",
                href: "string",
                "@referredType": "string",
                name: "string",
                description: "string",
                validFor: {
                    startDateTime: new Date(),
                    endDateTime: new Date()    
                },
                account: [
                    {
                        id: "string",
                        href: "string",
                        "@referredType": "string",
                        name: "string",
                        description: "string" 
                    }
                ],
                preferred: true,
                relatedParty: [
                    {
                        id: "string",
                        href: "string",
                        "@referredType": "string",
                        name: "string",
                        role: "string"
                    }
                ],
                "@type": "cash",
                authorizationCode: "string",
                status: "string",
                statusDate: new Date(),
                details: {}
            },
            status: "string",
            statusDate: new Date(),
            payer: {
                id: "string",
                href: "string",
                "@referredType": "string",
                name: "string",
                role: "string"
            }
            
            
        }
    },

    index_refund: function(request)
    {
        console.log("payment_management_controller.index_refund")

        return [
            {
                id: faker.datatype.uuid(),
                routeDetails: {
                    controller: 'Payment Management',
                    action: 'index_refund'
                },
                "@type": "string",
                "@schemaLocation": "string",
                correlatorId: "string",
                refundDate: new Date(),
                description: "string",
                authorizationCode: "string",
                amount: {
                    amount: 0,
                    units: "string"
                },
                taxAmount: {
                    amount: 0,
                    units: "string"
                },
                totalAmount: {
                    amount: 0,
                    units: "string"
                },
                channel: {
                    id: "string",
                    href: "string",
                    "@referredType": "string",
                    name: "string",
                    description: "string"
                },
                account: {
                    id: "string",
                    href: "string",
                    "@referredType": "string",
                    name: "string",
                    description: "string"
                },
                paymentMethod: {
                    id: "string",
                    href: "string",
                    "@referredType": "string",
                    name: "string",
                    description: "string",
                    validFor: {
                        startDateTime: new Date(),
                        endDateTime: new Date()    
                    },
                    account: [
                        {
                            id: "string",
                            href: "string",
                            "@referredType": "string",
                            name: "string",
                            description: "string" 
                        }
                    ],
                    preferred: true,
                    relatedParty: [
                        {
                            id: "string",
                            href: "string",
                            "@referredType": "string",
                            name: "string",
                            role: "string"
                        }
                    ],
                    "@type": "cash",
                    authorizationCode: "string",
                    status: "string",
                    statusDate: new Date(),
                    details: {}
                },
                relatedPayment: {
                    id: "string",
                    href: "string",
                    "@referredType": "string",
                    name: "string",
                    description: "string"
                },
                reason: "string",
                status: "pendingAuthorization",
                statusDate: new Date(),
                relatedParty: [
                    {
                        id: "string",
                        href: "string",
                        "@referredType": "string",
                        name: "string",
                        role: "string"
                    }
                ]
            }
        ]  
    },
    create_refund: function(request)
    {
        console.log('payment_management_controller.create_refund')
        return {
            id: faker.datatype.uuid(),
            routeDetails: {
                controller: 'Payment Management',
                action: 'create_refund'
            },
            "@type": "string",
            "@schemaLocation": "string",
            correlatorId: "string",
            refundDate: new Date(),
            description: "string",
            authorizationCode: "string",
            amount: {
                amount: 0,
                units: "string"
            },
            taxAmount: {
                amount: 0,
                units: "string"
            },
            totalAmount: {
                amount: 0,
                units: "string"
            },
            channel: {
                id: "string",
                href: "string",
                "@referredType": "string",
                name: "string",
                description: "string"
            },
            account: {
                id: "string",
                href: "string",
                "@referredType": "string",
                name: "string",
                description: "string"
            },
            paymentMethod: {
                id: "string",
                href: "string",
                "@referredType": "string",
                name: "string",
                description: "string",
                validFor: {
                    startDateTime: new Date(),
                    endDateTime: new Date()    
                },
                account: [
                    {
                        id: "string",
                        href: "string",
                        "@referredType": "string",
                        name: "string",
                        description: "string" 
                    }
                ],
                preferred: true,
                relatedParty: [
                    {
                        id: "string",
                        href: "string",
                        "@referredType": "string",
                        name: "string",
                        role: "string"
                    }
                ],
                "@type": "cash",
                authorizationCode: "string",
                status: "string",
                statusDate: new Date(),
                details: {}
            },
            relatedPayment: {
                id: "string",
                href: "string",
                "@referredType": "string",
                name: "string",
                description: "string"
            },
            reason: "string",
            status: "pendingAuthorization",
            statusDate: new Date(),
            relatedParty: [
                {
                    id: "string",
                    href: "string",
                    "@referredType": "string",
                    name: "string",
                    role: "string"
                }
            ]
        }
    },
    show_refund: function(request)
    {
        console.log('payment_management_controller.show_refund')
        return {
            id: request.params.payment_id,
            routeDetails: {
                controller: 'Payment Management',
                action: 'show_refund'
            },
            href: faker.internet.url(),
            "@type": "string",
            "@schemaLocation": "string",
            correlatorId: "string",
            refundDate: new Date(),
            description: "string",
            authorizationCode: "string",
            amount: {
                amount: 0,
                units: "string"
            },
            taxAmount: {
                amount: 0,
                units: "string"
            },
            totalAmount: {
                amount: 0,
                units: "string"
            },
            channel: {
                id: "string",
                href: "string",
                "@referredType": "string",
                name: "string",
                description: "string"
            },
            account: {
                id: "string",
                href: "string",
                "@referredType": "string",
                name: "string",
                description: "string"
            },
            paymentMethod: {
                id: "string",
                href: "string",
                "@referredType": "string",
                name: "string",
                description: "string",
                validFor: {
                    startDateTime: new Date(),
                    endDateTime: new Date()    
                },
                account: [
                    {
                        id: "string",
                        href: "string",
                        "@referredType": "string",
                        name: "string",
                        description: "string" 
                    }
                ],
                preferred: true,
                relatedParty: [
                    {
                        id: "string",
                        href: "string",
                        "@referredType": "string",
                        name: "string",
                        role: "string"
                    }
                ],
                "@type": "cash",
                authorizationCode: "string",
                status: "string",
                statusDate: new Date(),
                details: {}
            },
            relatedPayment: {
                id: "string",
                href: "string",
                "@referredType": "string",
                name: "string",
                description: "string"
            },
            reason: "string",
            status: "pendingAuthorization",
            statusDate: new Date(),
            relatedParty: [
                {
                    id: "string",
                    href: "string",
                    "@referredType": "string",
                    name: "string",
                    role: "string"
                }
            ]   
        }
    }
}