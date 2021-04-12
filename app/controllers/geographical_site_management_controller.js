//  === Requirements ===
const faker = require('faker')

//  === Controller ===
module.exports = {
    create: function(request)
    {
        console.log("geographical_site_management_controller.create")
        return {
            id: faker.random.uuid(),
            routeDetails: {
                controller: 'Geographical Site Management',
                action: 'create'
            },
            href: faker.internet.url(),
            name: "string",
            description: faker.lorem.sentence(),
            code: "string",
            status: "string",
            "@baseType": "string",
            "@type": "string",
            "@schemaLocation": "string",
            address: {
                id: faker.random.uuid(),
                href: faker.internet.url(),
                streetNr: "string",
                streetNrSuffix: "string",
                streetNrLast: "string",
                streetNrLastSuffix: "string",
                streetName: "string",
                streetType: "string",
                streetSuffix: "string",
                postcode: "string",
                locality: "string",
                city: "string",
                stateOrProvince: "string",
                country: "string",
                "@type": "string",
                "@schemaLocation": "string",
                geographicLocation: {
                    id: faker.random.uuid(),
                    href: faker.internet.url(),
                    name: "string",
                    geometryType: "string",
                    accuracy: "string",
                    spatialRef: "string",
                    "@type": "string",
                    "@schemaLocation": "string",
                    geometry: [
                        {
                            x: "string",
                            y: "string",
                            z: "string",
                        }
                    ]
                },
                geographicSubAddress: [
                    {
                        id: faker.random.uuid(),
                        href: faker.internet.url(),
                        type: "string",
                        name: "string",
                        subUnitType: "string",
                        subUnitNumber: "string",
                        levelType: "string",
                        levelNumber: "string",
                        buildingName: "string",
                        privateStreetName: "string",
                        privateStreetNumber: "string",
                        "@type": "string",
                        "@schemaLocation": "string"

                    }
                ]
            },
            geographicLocation: {
                id: faker.random.uuid(),
                href: faker.internet.url(),
                name: "string",
                geometryType: "string",
                accuracy: "string",
                spatialRef: "string",
                "@type": "string",
                "@schemaLocation": "string",
                geometry: [
                    {
                        x: "string",
                        y: "string",
                        z: "string"
                    }
                ]
            },
            calendar: [
                {
                    status: "string",
                    day: "string",
                    timeZone: "string",
                    hourPeriod: [
                        {
                            startHour: "string",
                            endHour: "string"
                        }
                    ]
                }
            ],
            relatedParty:[
                {
                    id: faker.random.uuid(),
                    href: faker.internet.url(),
                    name: "string",
                    role: "string",
                    validFor: {
                        startDateTime: new Date(),
                        endDateTime: new Date()    
                    },
                    "@referredType": "string"
                }
            ],
            siteRelationship: [
                {
                    id: faker.random.uuid(),
                    href: faker.internet.url(),
                    type: "string",
                    role: "string",
                    validFor: {
                        startDateTime: new Date(),
                        endDateTime: new Date()    
                    }
                }
            ]
        }
    },
    index: function(request)
    {
        console.log("geographical_site_management_controller.index")
        return [
            {
                id: faker.random.uuid(),
                routeDetails: {
                    controller: 'Geographical Site Management',
                    action: 'index'
                },
                href: faker.internet.url(),
                name: "string",
                description: faker.lorem.sentence(),
                code: "string",
                status: "string",
                "@baseType": "string",
                "@type": "string",
                "@schemaLocation": "string",
                address: {
                    id: faker.random.uuid(),
                    href: faker.internet.url(),
                    streetNr: "string",
                    streetNrSuffix: "string",
                    streetNrLast: "string",
                    streetNrLastSuffix: "string",
                    streetName: "string",
                    streetType: "string",
                    streetSuffix: "string",
                    postcode: "string",
                    locality: "string",
                    city: "string",
                    stateOrProvince: "string",
                    country: "string",
                    "@type": "string",
                    "@schemaLocation": "string",
                    geographicLocation: {
                        id: faker.random.uuid(),
                        href: faker.internet.url(),
                        name: "string",
                        geometryType: "string",
                        accuracy: "string",
                        spatialRef: "string",
                        "@type": "string",
                        "@schemaLocation": "string",
                        geometry: [
                            {
                                x: "string",
                                y: "string",
                                z: "string",
                            }
                        ]
                    },
                    geographicSubAddress: [
                        {
                            id: faker.random.uuid(),
                            href: faker.internet.url(),
                            type: "string",
                            name: "string",
                            subUnitType: "string",
                            subUnitNumber: "string",
                            levelType: "string",
                            levelNumber: "string",
                            buildingName: "string",
                            privateStreetName: "string",
                            privateStreetNumber: "string",
                            "@type": "string",
                            "@schemaLocation": "string"
    
                        }
                    ]
                },
                geographicLocation: {
                    id: faker.random.uuid(),
                    href: faker.internet.url(),
                    name: "string",
                    geometryType: "string",
                    accuracy: "string",
                    spatialRef: "string",
                    "@type": "string",
                    "@schemaLocation": "string",
                    geometry: [
                        {
                            x: "string",
                            y: "string",
                            z: "string"
                        }
                    ]
                },
                calendar: [
                    {
                        status: "string",
                        day: "string",
                        timeZone: "string",
                        hourPeriod: [
                            {
                                startHour: "string",
                                endHour: "string"
                            }
                        ]
                    }
                ],
                relatedParty:[
                    {
                        id: faker.random.uuid(),
                        href: faker.internet.url(),
                        name: "string",
                        role: "string",
                        validFor: {
                            startDateTime: new Date(),
                            endDateTime: new Date()    
                        },
                        "@referredType": "string"
                    }
                ],
                siteRelationship: [
                    {
                        id: faker.random.uuid(),
                        href: faker.internet.url(),
                        type: "string",
                        role: "string",
                        validFor: {
                            startDateTime: new Date(),
                            endDateTime: new Date()    
                        }
                    }
                ]
            }
        ]
    },
    show: function(request)
    {
        console.log("geographical_site_management_controller.show")
        return {
            id: request.params.geographic_site_id,
            routeDetails: {
                controller: 'Geographical Site Management',
                action: 'show'
            },
            href: faker.internet.url(),
            name: "string",
            description: faker.lorem.sentence(),
            code: "string",
            status: "string",
            "@baseType": "string",
            "@type": "string",
            "@schemaLocation": "string",
            address: {
                id: faker.random.uuid(),
                href: faker.internet.url(),
                streetNr: "string",
                streetNrSuffix: "string",
                streetNrLast: "string",
                streetNrLastSuffix: "string",
                streetName: "string",
                streetType: "string",
                streetSuffix: "string",
                postcode: "string",
                locality: "string",
                city: "string",
                stateOrProvince: "string",
                country: "string",
                "@type": "string",
                "@schemaLocation": "string",
                geographicLocation: {
                    id: faker.random.uuid(),
                    href: faker.internet.url(),
                    name: "string",
                    geometryType: "string",
                    accuracy: "string",
                    spatialRef: "string",
                    "@type": "string",
                    "@schemaLocation": "string",
                    geometry: [
                        {
                            x: "string",
                            y: "string",
                            z: "string",
                        }
                    ]
                },
                geographicSubAddress: [
                    {
                        id: faker.random.uuid(),
                        href: faker.internet.url(),
                        type: "string",
                        name: "string",
                        subUnitType: "string",
                        subUnitNumber: "string",
                        levelType: "string",
                        levelNumber: "string",
                        buildingName: "string",
                        privateStreetName: "string",
                        privateStreetNumber: "string",
                        "@type": "string",
                        "@schemaLocation": "string"

                    }
                ]
            },
            geographicLocation: {
                id: faker.random.uuid(),
                href: faker.internet.url(),
                name: "string",
                geometryType: "string",
                accuracy: "string",
                spatialRef: "string",
                "@type": "string",
                "@schemaLocation": "string",
                geometry: [
                    {
                        x: "string",
                        y: "string",
                        z: "string"
                    }
                ]
            },
            calendar: [
                {
                    status: "string",
                    day: "string",
                    timeZone: "string",
                    hourPeriod: [
                        {
                            startHour: "string",
                            endHour: "string"
                        }
                    ]
                }
            ],
            relatedParty:[
                {
                    id: faker.random.uuid(),
                    href: faker.internet.url(),
                    name: "string",
                    role: "string",
                    validFor: {
                        startDateTime: new Date(),
                        endDateTime: new Date()    
                    },
                    "@referredType": "string"
                }
            ],
            siteRelationship: [
                {
                    id: faker.random.uuid(),
                    href: faker.internet.url(),
                    type: "string",
                    role: "string",
                    validFor: {
                        startDateTime: new Date(),
                        endDateTime: new Date()    
                    }
                }
            ]
        }
    },
    put_update: function(request)
    {
        console.log("geographical_site_management_controller.put_update")
        return {
            id: request.params.geographic_site_id,
            routeDetails: {
                controller: 'Geographical Site Management',
                action: 'put_update'
            },
            href: faker.internet.url(),
            name: "string",
            description: faker.lorem.sentence(),
            code: "string",
            status: "string",
            "@baseType": "string",
            "@type": "string",
            "@schemaLocation": "string",
            address: {
                id: faker.random.uuid(),
                href: faker.internet.url(),
                streetNr: "string",
                streetNrSuffix: "string",
                streetNrLast: "string",
                streetNrLastSuffix: "string",
                streetName: "string",
                streetType: "string",
                streetSuffix: "string",
                postcode: "string",
                locality: "string",
                city: "string",
                stateOrProvince: "string",
                country: "string",
                "@type": "string",
                "@schemaLocation": "string",
                geographicLocation: {
                    id: faker.random.uuid(),
                    href: faker.internet.url(),
                    name: "string",
                    geometryType: "string",
                    accuracy: "string",
                    spatialRef: "string",
                    "@type": "string",
                    "@schemaLocation": "string",
                    geometry: [
                        {
                            x: "string",
                            y: "string",
                            z: "string",
                        }
                    ]
                },
                geographicSubAddress: [
                    {
                        id: faker.random.uuid(),
                        href: faker.internet.url(),
                        type: "string",
                        name: "string",
                        subUnitType: "string",
                        subUnitNumber: "string",
                        levelType: "string",
                        levelNumber: "string",
                        buildingName: "string",
                        privateStreetName: "string",
                        privateStreetNumber: "string",
                        "@type": "string",
                        "@schemaLocation": "string"

                    }
                ]
            },
            geographicLocation: {
                id: faker.random.uuid(),
                href: faker.internet.url(),
                name: "string",
                geometryType: "string",
                accuracy: "string",
                spatialRef: "string",
                "@type": "string",
                "@schemaLocation": "string",
                geometry: [
                    {
                        x: "string",
                        y: "string",
                        z: "string"
                    }
                ]
            },
            calendar: [
                {
                    status: "string",
                    day: "string",
                    timeZone: "string",
                    hourPeriod: [
                        {
                            startHour: "string",
                            endHour: "string"
                        }
                    ]
                }
            ],
            relatedParty:[
                {
                    id: faker.random.uuid(),
                    href: faker.internet.url(),
                    name: "string",
                    role: "string",
                    validFor: {
                        startDateTime: new Date(),
                        endDateTime: new Date()    
                    },
                    "@referredType": "string"
                }
            ],
            siteRelationship: [
                {
                    id: faker.random.uuid(),
                    href: faker.internet.url(),
                    type: "string",
                    role: "string",
                    validFor: {
                        startDateTime: new Date(),
                        endDateTime: new Date()    
                    }
                }
            ] 
        }
    },
    patch_update: function(request)
    {
        console.log("geographical_site_management_controller.patch_update")
        return {
            id: request.params.geographic_site_id,
            routeDetails: {
                controller: 'Geographical Site Management',
                action: 'patch_update'
            },
            href: faker.internet.url(),
            name: "string",
            description: faker.lorem.sentence(),
            code: "string",
            status: "string",
            "@baseType": "string",
            "@type": "string",
            "@schemaLocation": "string",
            address: {
                id: faker.random.uuid(),
                href: faker.internet.url(),
                streetNr: "string",
                streetNrSuffix: "string",
                streetNrLast: "string",
                streetNrLastSuffix: "string",
                streetName: "string",
                streetType: "string",
                streetSuffix: "string",
                postcode: "string",
                locality: "string",
                city: "string",
                stateOrProvince: "string",
                country: "string",
                "@type": "string",
                "@schemaLocation": "string",
                geographicLocation: {
                    id: faker.random.uuid(),
                    href: faker.internet.url(),
                    name: "string",
                    geometryType: "string",
                    accuracy: "string",
                    spatialRef: "string",
                    "@type": "string",
                    "@schemaLocation": "string",
                    geometry: [
                        {
                            x: "string",
                            y: "string",
                            z: "string",
                        }
                    ]
                },
                geographicSubAddress: [
                    {
                        id: faker.random.uuid(),
                        href: faker.internet.url(),
                        type: "string",
                        name: "string",
                        subUnitType: "string",
                        subUnitNumber: "string",
                        levelType: "string",
                        levelNumber: "string",
                        buildingName: "string",
                        privateStreetName: "string",
                        privateStreetNumber: "string",
                        "@type": "string",
                        "@schemaLocation": "string"

                    }
                ]
            },
            geographicLocation: {
                id: faker.random.uuid(),
                href: faker.internet.url(),
                name: "string",
                geometryType: "string",
                accuracy: "string",
                spatialRef: "string",
                "@type": "string",
                "@schemaLocation": "string",
                geometry: [
                    {
                        x: "string",
                        y: "string",
                        z: "string"
                    }
                ]
            },
            calendar: [
                {
                    status: "string",
                    day: "string",
                    timeZone: "string",
                    hourPeriod: [
                        {
                            startHour: "string",
                            endHour: "string"
                        }
                    ]
                }
            ],
            relatedParty:[
                {
                    id: faker.random.uuid(),
                    href: faker.internet.url(),
                    name: "string",
                    role: "string",
                    validFor: {
                        startDateTime: new Date(),
                        endDateTime: new Date()    
                    },
                    "@referredType": "string"
                }
            ],
            siteRelationship: [
                {
                    id: faker.random.uuid(),
                    href: faker.internet.url(),
                    type: "string",
                    role: "string",
                    validFor: {
                        startDateTime: new Date(),
                        endDateTime: new Date()    
                    }
                }
            ]
        }
    },
    destroy: function(request)
    {
        console.log("geographical_site_management_controller.destroy")
        return {
            id: request.params.geographic_site_id,
            routeDetails: {
                controller: 'Geographical Site Management',
                action: 'destroy'
            },
            code: faker.random.number(),
            reason: "string",
            message: "string",
            status: 0,
            referenceError: "string",
            "@type": "string",
            "@schemaLocation": "string"
        }
    },

    create_hub: function(request)
    {
        console.log("geographical_site_management_controller.create_hub")
        return [
            { 
                id: faker.random.uuid(),
                routeDetails: {
                    controller: 'Geographical Site Management',
                    action: 'create_hub'
                },
                callback: "string",
                query: "string"
            }
        ]
    },
    destroy_hub: function(request)
    {
        console.log("geographical_site_management_controller.destroy_hub")
        return {  
            id: request.params.hub_id,
            routeDetails: {
                controller: 'Geographical Site Management',
                action: 'destroy_hub'
            },
            code: faker.random.number(),
            reason: "string",
            message: "string",
            status: faker.random.number(),
            referenceError: "string"
        }
    },
    create_client_listener: function(request)
    {
        console.log("geographical_site_management_controller.create_client_listener")

        return {
            id: faker.random.uuid(),
            routeDetails: {
                controller: 'Geographical Site Management',
                action: 'create_client_listener'
            },
            event: {},
            eventType: "EVENT_TYPE",
            eventTime: "string",
            eventId: "string"
        }
    }
}