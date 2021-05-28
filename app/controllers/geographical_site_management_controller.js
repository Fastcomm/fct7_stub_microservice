//  === Requirements ===
const faker = require('faker')

//  === Controller ===
module.exports = {
    index: function(request)
    {
        console.log("geographical_site_management_controller.index")
        return [
            {
                id: faker.datatype.uuid(),
                routeDetails: {
                    controller: 'Geographical Site Management',
                    action: 'index'
                },
                href: faker.internet.url(),
                code: "string",
                description: "string",
                name: "string",
                status: "string",
                calendar: [
                  {
                    day: "string",
                    status: "string",
                    timeZone: "string",
                    hourPeriod: [
                      {
                        endHour: "string",
                        startHour: "string",
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
                siteRelationship: [
                  {
                    id: "string",
                    href: "string",
                    relationshipType: "string",
                    role: "string",
                    validFor: {
                      endDateTime: new Date(),
                      startDateTime: new Date()
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
        ]
    },
    create: function(request)
    {
        console.log("geographical_site_management_controller.create")
        return {
            id: faker.datatype.uuid(),
            routeDetails: {
                controller: 'Geographical Site Management',
                action: 'create'
            },
            href: faker.internet.url(),
            code: "string",
            description: "string",
            name: "string",
            status: "string",
            calendar: [
              {
                day: "string",
                status: "string",
                timeZone: "string",
                hourPeriod: [
                  {
                    endHour: "string",
                    startHour: "string",
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
            siteRelationship: [
              {
                id: "string",
                href: "string",
                relationshipType: "string",
                role: "string",
                validFor: {
                  endDateTime: new Date(),
                  startDateTime: new Date()
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
            code: "string",
            description: "string",
            name: "string",
            status: "string",
            calendar: [
              {
                day: "string",
                status: "string",
                timeZone: "string",
                hourPeriod: [
                  {
                    endHour: "string",
                    startHour: "string",
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
            siteRelationship: [
              {
                id: "string",
                href: "string",
                relationshipType: "string",
                role: "string",
                validFor: {
                  endDateTime: new Date(),
                  startDateTime: new Date()
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
            code: "string",
            description: "string",
            name: "string",
            status: "string",
            calendar: [
              {
                day: "string",
                status: "string",
                timeZone: "string",
                hourPeriod: [
                  {
                    endHour: "string",
                    startHour: "string",
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
            siteRelationship: [
              {
                id: "string",
                href: "string",
                relationshipType: "string",
                role: "string",
                validFor: {
                  endDateTime: new Date(),
                  startDateTime: new Date()
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
            code: 204
        }
    },

    create_client_listener_site_create_event: function(request)
    {
        console.log("geographical_site_management_controller.create_client_listener_site_create_event")

        return {
            id: faker.datatype.uuid(),
            routeDetails: {
                controller: 'Geographical Site Management',
                action: 'create_client_listener_site_create_event'
            },
            callback: "string",
            query: "string" 
        }
    },
    create_client_listener_attribute_value_change_event: function(request)
    {
        console.log("geographical_site_management_controller.create_client_listener_attribute_value_change_event")

        return {
            id: faker.datatype.uuid(),
            routeDetails: {
                controller: 'Geographical Site Management',
                action: 'create_client_listener_attribute_value_change_event'
            },
            callback: "string",
            query: "string" 
        }
    },
    create_client_listener_status_change_event: function(request)
    {
        console.log("geographical_site_management_controller.create_client_listener_status_change_event")

        return {
            id: faker.datatype.uuid(),
            routeDetails: {
                controller: 'Geographical Site Management',
                action: 'create_client_listener_status_change_event'
            },
            callback: "string",
            query: "string" 
        }
    },
    create_client_listener_delete_event: function(request)
    {
        console.log("geographical_site_management_controller.create_client_listener_delete_event")

        return {
            id: faker.datatype.uuid(),
            routeDetails: {
                controller: 'Geographical Site Management',
                action: 'create_client_listener_delete_event'
            },
            callback: "string",
            query: "string" 
        }
    },

    create_hub: function(request)
    {
        console.log("geographical_site_management_controller.create_hub")
        return [
            { 
                id: faker.datatype.uuid(),
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
            code: 204
        }
    }
}