const buildQuery = () => ({
  queryType: {
    name: "Query",
  },
  mutationType: {
    name: "Mutation",
  },
  subscriptionType: null,
  types: [
    {
      kind: "OBJECT",
      name: "OrderItem",
      description: null,
      fields: [
        {
          name: "id",
          description: null,
          args: [],
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "String",
              ofType: null,
            },
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: "ref",
          description: null,
          args: [],
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "String",
              ofType: null,
            },
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: "name",
          description: null,
          args: [],
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "String",
              ofType: null,
            },
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: "quantity",
          description: null,
          args: [],
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "Int",
              ofType: null,
            },
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: "size",
          description: null,
          args: [],
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "ENUM",
              name: "SizeValue",
              ofType: null,
            },
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: "price",
          description: null,
          args: [],
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "Int",
              ofType: null,
            },
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: "reduction",
          description: null,
          args: [],
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "Int",
              ofType: null,
            },
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: "dateAdd",
          description: null,
          args: [],
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "DateTime",
              ofType: null,
            },
          },
          isDeprecated: false,
          deprecationReason: null,
        },
      ],
      inputFields: null,
      interfaces: [],
      enumValues: null,
      possibleTypes: null,
    },
    {
      kind: "SCALAR",
      name: "String",
      description:
        "The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.",
      fields: null,
      inputFields: null,
      interfaces: null,
      enumValues: null,
      possibleTypes: null,
    },
    {
      kind: "SCALAR",
      name: "Int",
      description:
        "The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.",
      fields: null,
      inputFields: null,
      interfaces: null,
      enumValues: null,
      possibleTypes: null,
    },
    {
      kind: "ENUM",
      name: "SizeValue",
      description: "The posible values for the size",
      fields: null,
      inputFields: null,
      interfaces: null,
      enumValues: [
        {
          name: "SMALL",
          description: null,
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: "MEDIUM",
          description: null,
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: "LARGE",
          description: null,
          isDeprecated: false,
          deprecationReason: null,
        },
      ],
      possibleTypes: null,
    },
    {
      kind: "SCALAR",
      name: "DateTime",
      description:
        "The javascript `Date` as string. Type represents date and time as the ISO Date string.",
      fields: null,
      inputFields: null,
      interfaces: null,
      enumValues: null,
      possibleTypes: null,
    },
    {
      kind: "OBJECT",
      name: "ShippingInfo",
      description: null,
      fields: [
        {
          name: "carrier",
          description: null,
          args: [],
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "String",
              ofType: null,
            },
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: "price",
          description: null,
          args: [],
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "Int",
              ofType: null,
            },
          },
          isDeprecated: false,
          deprecationReason: null,
        },
      ],
      inputFields: null,
      interfaces: [],
      enumValues: null,
      possibleTypes: null,
    },
    {
      kind: "OBJECT",
      name: "Address",
      description: null,
      fields: [
        {
          name: "firstName",
          description: null,
          args: [],
          type: {
            kind: "SCALAR",
            name: "String",
            ofType: null,
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: "lastName",
          description: null,
          args: [],
          type: {
            kind: "SCALAR",
            name: "String",
            ofType: null,
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: "countryIso",
          description: null,
          args: [],
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "String",
              ofType: null,
            },
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: "address",
          description: null,
          args: [],
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "String",
              ofType: null,
            },
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: "number",
          description: null,
          args: [],
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "String",
              ofType: null,
            },
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: "complement",
          description: null,
          args: [],
          type: {
            kind: "SCALAR",
            name: "String",
            ofType: null,
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: "city",
          description: null,
          args: [],
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "String",
              ofType: null,
            },
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: "zipcode",
          description: null,
          args: [],
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "String",
              ofType: null,
            },
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: "phone",
          description: null,
          args: [],
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "String",
              ofType: null,
            },
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: "nickname",
          description: null,
          args: [],
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "String",
              ofType: null,
            },
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: "main",
          description: null,
          args: [],
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "Boolean",
              ofType: null,
            },
          },
          isDeprecated: false,
          deprecationReason: null,
        },
      ],
      inputFields: null,
      interfaces: [],
      enumValues: null,
      possibleTypes: null,
    },
    {
      kind: "SCALAR",
      name: "Boolean",
      description: "The `Boolean` scalar type represents `true` or `false`.",
      fields: null,
      inputFields: null,
      interfaces: null,
      enumValues: null,
      possibleTypes: null,
    },
    {
      kind: "OBJECT",
      name: "Profile",
      description: null,
      fields: [
        {
          name: "firstName",
          description: null,
          args: [],
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "String",
              ofType: null,
            },
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: "lastName",
          description: null,
          args: [],
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "String",
              ofType: null,
            },
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: "gender",
          description: null,
          args: [],
          type: {
            kind: "ENUM",
            name: "Gender",
            ofType: null,
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: "dateOfBirth",
          description: null,
          args: [],
          type: {
            kind: "SCALAR",
            name: "String",
            ofType: null,
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: "addresses",
          description: null,
          args: [],
          type: {
            kind: "LIST",
            name: null,
            ofType: {
              kind: "NON_NULL",
              name: null,
              ofType: {
                kind: "OBJECT",
                name: "Address",
                ofType: null,
              },
            },
          },
          isDeprecated: false,
          deprecationReason: null,
        },
      ],
      inputFields: null,
      interfaces: [],
      enumValues: null,
      possibleTypes: null,
    },
    {
      kind: "ENUM",
      name: "Gender",
      description: null,
      fields: null,
      inputFields: null,
      interfaces: null,
      enumValues: [
        {
          name: "FEMALE",
          description: null,
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: "MALE",
          description: null,
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: "OTHER",
          description: null,
          isDeprecated: false,
          deprecationReason: null,
        },
      ],
      possibleTypes: null,
    },
    {
      kind: "OBJECT",
      name: "Size",
      description: null,
      fields: [
        {
          name: "size",
          description: null,
          args: [],
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "ENUM",
              name: "SizeValue",
              ofType: null,
            },
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: "quantity",
          description: null,
          args: [],
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "Int",
              ofType: null,
            },
          },
          isDeprecated: false,
          deprecationReason: null,
        },
      ],
      inputFields: null,
      interfaces: [],
      enumValues: null,
      possibleTypes: null,
    },
    {
      kind: "OBJECT",
      name: "Discount",
      description: null,
      fields: [
        {
          name: "isPercent",
          description: null,
          args: [],
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "Boolean",
              ofType: null,
            },
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: "amount",
          description: null,
          args: [],
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "Int",
              ofType: null,
            },
          },
          isDeprecated: false,
          deprecationReason: null,
        },
      ],
      inputFields: null,
      interfaces: [],
      enumValues: null,
      possibleTypes: null,
    },
    {
      kind: "OBJECT",
      name: "User",
      description: null,
      fields: [
        {
          name: "id",
          description: null,
          args: [],
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "ID",
              ofType: null,
            },
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: "email",
          description: null,
          args: [],
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "String",
              ofType: null,
            },
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: "isActive",
          description: null,
          args: [],
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "String",
              ofType: null,
            },
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: "profile",
          description: null,
          args: [],
          type: {
            kind: "OBJECT",
            name: "Profile",
            ofType: null,
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: "permissions",
          description: null,
          args: [],
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "LIST",
              name: null,
              ofType: {
                kind: "NON_NULL",
                name: null,
                ofType: {
                  kind: "SCALAR",
                  name: "String",
                  ofType: null,
                },
              },
            },
          },
          isDeprecated: false,
          deprecationReason: null,
        },
      ],
      inputFields: null,
      interfaces: [],
      enumValues: null,
      possibleTypes: null,
    },
    {
      kind: "SCALAR",
      name: "ID",
      description:
        'The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.',
      fields: null,
      inputFields: null,
      interfaces: null,
      enumValues: null,
      possibleTypes: null,
    },
    {
      kind: "OBJECT",
      name: "Product",
      description: null,
      fields: [
        {
          name: "id",
          description: null,
          args: [],
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "ID",
              ofType: null,
            },
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: "name",
          description: null,
          args: [],
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "String",
              ofType: null,
            },
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: "reference",
          description: null,
          args: [],
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "String",
              ofType: null,
            },
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: "price",
          description: null,
          args: [],
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "Int",
              ofType: null,
            },
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: "description",
          description: null,
          args: [],
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "String",
              ofType: null,
            },
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: "active",
          description: null,
          args: [],
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "Boolean",
              ofType: null,
            },
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: "showPrice",
          description: null,
          args: [],
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "Boolean",
              ofType: null,
            },
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: "categories",
          description: null,
          args: [],
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "LIST",
              name: null,
              ofType: {
                kind: "NON_NULL",
                name: null,
                ofType: {
                  kind: "OBJECT",
                  name: "Category",
                  ofType: null,
                },
              },
            },
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: "images",
          description: null,
          args: [],
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "LIST",
              name: null,
              ofType: {
                kind: "NON_NULL",
                name: null,
                ofType: {
                  kind: "SCALAR",
                  name: "String",
                  ofType: null,
                },
              },
            },
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: "sizes",
          description: null,
          args: [],
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "LIST",
              name: null,
              ofType: {
                kind: "NON_NULL",
                name: null,
                ofType: {
                  kind: "OBJECT",
                  name: "Size",
                  ofType: null,
                },
              },
            },
          },
          isDeprecated: false,
          deprecationReason: null,
        },
      ],
      inputFields: null,
      interfaces: [],
      enumValues: null,
      possibleTypes: null,
    },
    {
      kind: "OBJECT",
      name: "Category",
      description: null,
      fields: [
        {
          name: "name",
          description: null,
          args: [],
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "String",
              ofType: null,
            },
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: "slug",
          description: null,
          args: [],
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "String",
              ofType: null,
            },
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: "active",
          description: null,
          args: [],
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "Boolean",
              ofType: null,
            },
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: "products",
          description: null,
          args: [],
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "LIST",
              name: null,
              ofType: {
                kind: "NON_NULL",
                name: null,
                ofType: {
                  kind: "OBJECT",
                  name: "Product",
                  ofType: null,
                },
              },
            },
          },
          isDeprecated: false,
          deprecationReason: null,
        },
      ],
      inputFields: null,
      interfaces: [],
      enumValues: null,
      possibleTypes: null,
    },
    {
      kind: "OBJECT",
      name: "Order",
      description: null,
      fields: [
        {
          name: "id",
          description: null,
          args: [],
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "ID",
              ofType: null,
            },
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: "active",
          description: null,
          args: [],
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "Boolean",
              ofType: null,
            },
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: "items",
          description: null,
          args: [],
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "LIST",
              name: null,
              ofType: {
                kind: "NON_NULL",
                name: null,
                ofType: {
                  kind: "OBJECT",
                  name: "OrderItem",
                  ofType: null,
                },
              },
            },
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: "addressDelivery",
          description: null,
          args: [],
          type: {
            kind: "OBJECT",
            name: "Address",
            ofType: null,
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: "paymentUrl",
          description: null,
          args: [],
          type: {
            kind: "SCALAR",
            name: "String",
            ofType: null,
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: "status",
          description: null,
          args: [],
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "ENUM",
              name: "OrderStatus",
              ofType: null,
            },
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: "shippingFee",
          description: null,
          args: [],
          type: {
            kind: "OBJECT",
            name: "ShippingInfo",
            ofType: null,
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: "discount",
          description: null,
          args: [],
          type: {
            kind: "OBJECT",
            name: "Discount",
            ofType: null,
          },
          isDeprecated: false,
          deprecationReason: null,
        },
      ],
      inputFields: null,
      interfaces: [],
      enumValues: null,
      possibleTypes: null,
    },
    {
      kind: "ENUM",
      name: "OrderStatus",
      description: null,
      fields: null,
      inputFields: null,
      interfaces: null,
      enumValues: [
        {
          name: "OPENED",
          description: null,
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: "PENDING",
          description: null,
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: "CLOSED",
          description: null,
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: "PAID",
          description: null,
          isDeprecated: false,
          deprecationReason: null,
        },
      ],
      possibleTypes: null,
    },
    {
      kind: "OBJECT",
      name: "Country",
      description: null,
      fields: [
        {
          name: "name",
          description: null,
          args: [],
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "String",
              ofType: null,
            },
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: "isoCode",
          description: null,
          args: [],
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "String",
              ofType: null,
            },
          },
          isDeprecated: false,
          deprecationReason: null,
        },
      ],
      inputFields: null,
      interfaces: [],
      enumValues: null,
      possibleTypes: null,
    },
    {
      kind: "OBJECT",
      name: "Carrier",
      description: null,
      fields: [
        {
          name: "id",
          description: null,
          args: [],
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "ID",
              ofType: null,
            },
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: "name",
          description: null,
          args: [],
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "String",
              ofType: null,
            },
          },
          isDeprecated: false,
          deprecationReason: null,
        },
      ],
      inputFields: null,
      interfaces: [],
      enumValues: null,
      possibleTypes: null,
    },
    {
      kind: "OBJECT",
      name: "RangeCarrier",
      description: null,
      fields: [
        {
          name: "id",
          description: null,
          args: [],
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "ID",
              ofType: null,
            },
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: "rangeStart",
          description: null,
          args: [],
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "Int",
              ofType: null,
            },
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: "rangeEnd",
          description: null,
          args: [],
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "Int",
              ofType: null,
            },
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: "countries",
          description: null,
          args: [],
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "JSON",
              ofType: null,
            },
          },
          isDeprecated: false,
          deprecationReason: null,
        },
      ],
      inputFields: null,
      interfaces: [],
      enumValues: null,
      possibleTypes: null,
    },
    {
      kind: "SCALAR",
      name: "JSON",
      description:
        "The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf).",
      fields: null,
      inputFields: null,
      interfaces: null,
      enumValues: null,
      possibleTypes: null,
    },
    {
      kind: "OBJECT",
      name: "PromoCode",
      description: null,
      fields: [
        {
          name: "id",
          description: null,
          args: [],
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "ID",
              ofType: null,
            },
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: "code",
          description: null,
          args: [],
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "String",
              ofType: null,
            },
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: "isPercent",
          description: null,
          args: [],
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "Boolean",
              ofType: null,
            },
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: "amount",
          description: null,
          args: [],
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "Int",
              ofType: null,
            },
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: "expiredIn",
          description: null,
          args: [],
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "String",
              ofType: null,
            },
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: "isActive",
          description: null,
          args: [],
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "Boolean",
              ofType: null,
            },
          },
          isDeprecated: false,
          deprecationReason: null,
        },
      ],
      inputFields: null,
      interfaces: [],
      enumValues: null,
      possibleTypes: null,
    },
    {
      kind: "OBJECT",
      name: "ShippingFee",
      description: null,
      fields: [
        {
          name: "carrier",
          description: null,
          args: [],
          type: {
            kind: "SCALAR",
            name: "String",
            ofType: null,
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: "price",
          description: null,
          args: [],
          type: {
            kind: "SCALAR",
            name: "Int",
            ofType: null,
          },
          isDeprecated: false,
          deprecationReason: null,
        },
      ],
      inputFields: null,
      interfaces: [],
      enumValues: null,
      possibleTypes: null,
    },
    {
      kind: "OBJECT",
      name: "PaginatedCategory",
      description: null,
      fields: [
        {
          name: "data",
          description: null,
          args: [],
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "LIST",
              name: null,
              ofType: {
                kind: "NON_NULL",
                name: null,
                ofType: {
                  kind: "OBJECT",
                  name: "Category",
                  ofType: null,
                },
              },
            },
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: "count",
          description: null,
          args: [],
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "Int",
              ofType: null,
            },
          },
          isDeprecated: false,
          deprecationReason: null,
        },
      ],
      inputFields: null,
      interfaces: [],
      enumValues: null,
      possibleTypes: null,
    },
    {
      kind: "OBJECT",
      name: "PaginatedProduct",
      description: null,
      fields: [
        {
          name: "data",
          description: null,
          args: [],
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "LIST",
              name: null,
              ofType: {
                kind: "NON_NULL",
                name: null,
                ofType: {
                  kind: "OBJECT",
                  name: "Product",
                  ofType: null,
                },
              },
            },
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: "count",
          description: null,
          args: [],
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "Int",
              ofType: null,
            },
          },
          isDeprecated: false,
          deprecationReason: null,
        },
      ],
      inputFields: null,
      interfaces: [],
      enumValues: null,
      possibleTypes: null,
    },
    {
      kind: "OBJECT",
      name: "LoginResponse",
      description: null,
      fields: [
        {
          name: "token",
          description: null,
          args: [],
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "String",
              ofType: null,
            },
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: "permissions",
          description: null,
          args: [],
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "LIST",
              name: null,
              ofType: {
                kind: "NON_NULL",
                name: null,
                ofType: {
                  kind: "SCALAR",
                  name: "String",
                  ofType: null,
                },
              },
            },
          },
          isDeprecated: false,
          deprecationReason: null,
        },
      ],
      inputFields: null,
      interfaces: [],
      enumValues: null,
      possibleTypes: null,
    },
    {
      kind: "INPUT_OBJECT",
      name: "AddressArgs",
      description: null,
      fields: null,
      inputFields: [
        {
          name: "firstName",
          description: null,
          type: {
            kind: "SCALAR",
            name: "String",
            ofType: null,
          },
          defaultValue: null,
        },
        {
          name: "lastName",
          description: null,
          type: {
            kind: "SCALAR",
            name: "String",
            ofType: null,
          },
          defaultValue: null,
        },
        {
          name: "countryIso",
          description: null,
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "String",
              ofType: null,
            },
          },
          defaultValue: null,
        },
        {
          name: "address",
          description: null,
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "String",
              ofType: null,
            },
          },
          defaultValue: null,
        },
        {
          name: "number",
          description: null,
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "String",
              ofType: null,
            },
          },
          defaultValue: null,
        },
        {
          name: "complement",
          description: null,
          type: {
            kind: "SCALAR",
            name: "String",
            ofType: null,
          },
          defaultValue: null,
        },
        {
          name: "city",
          description: null,
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "String",
              ofType: null,
            },
          },
          defaultValue: null,
        },
        {
          name: "zipcode",
          description: null,
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "String",
              ofType: null,
            },
          },
          defaultValue: null,
        },
        {
          name: "phone",
          description: null,
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "String",
              ofType: null,
            },
          },
          defaultValue: null,
        },
        {
          name: "nickname",
          description: null,
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "String",
              ofType: null,
            },
          },
          defaultValue: null,
        },
        {
          name: "main",
          description: null,
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "Boolean",
              ofType: null,
            },
          },
          defaultValue: null,
        },
      ],
      interfaces: null,
      enumValues: null,
      possibleTypes: null,
    },
    {
      kind: "INPUT_OBJECT",
      name: "OrderItemsArgs",
      description: null,
      fields: null,
      inputFields: [
        {
          name: "productId",
          description: null,
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "String",
              ofType: null,
            },
          },
          defaultValue: null,
        },
        {
          name: "size",
          description: null,
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "ENUM",
              name: "SizeValue",
              ofType: null,
            },
          },
          defaultValue: null,
        },
        {
          name: "quantity",
          description: null,
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "Int",
              ofType: null,
            },
          },
          defaultValue: null,
        },
      ],
      interfaces: null,
      enumValues: null,
      possibleTypes: null,
    },
    {
      kind: "INPUT_OBJECT",
      name: "CategoryArgs",
      description: null,
      fields: null,
      inputFields: [
        {
          name: "name",
          description: null,
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "String",
              ofType: null,
            },
          },
          defaultValue: null,
        },
        {
          name: "slug",
          description: null,
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "String",
              ofType: null,
            },
          },
          defaultValue: null,
        },
      ],
      interfaces: null,
      enumValues: null,
      possibleTypes: null,
    },
    {
      kind: "INPUT_OBJECT",
      name: "SizeArgs",
      description: null,
      fields: null,
      inputFields: [
        {
          name: "size",
          description: null,
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "ENUM",
              name: "SizeValue",
              ofType: null,
            },
          },
          defaultValue: null,
        },
        {
          name: "quantity",
          description: null,
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "Int",
              ofType: null,
            },
          },
          defaultValue: null,
        },
      ],
      interfaces: null,
      enumValues: null,
      possibleTypes: null,
    },
    {
      kind: "OBJECT",
      name: "Query",
      description: null,
      fields: [
        {
          name: "carriers",
          description: null,
          args: [],
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "LIST",
              name: null,
              ofType: {
                kind: "NON_NULL",
                name: null,
                ofType: {
                  kind: "OBJECT",
                  name: "Carrier",
                  ofType: null,
                },
              },
            },
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: "carrier",
          description: null,
          args: [
            {
              name: "id",
              description: null,
              type: {
                kind: "NON_NULL",
                name: null,
                ofType: {
                  kind: "SCALAR",
                  name: "String",
                  ofType: null,
                },
              },
              defaultValue: null,
            },
          ],
          type: {
            kind: "OBJECT",
            name: "RangeCarrier",
            ofType: null,
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: "getShippingFee",
          description: null,
          args: [
            {
              name: "countryIso",
              description: null,
              type: {
                kind: "NON_NULL",
                name: null,
                ofType: {
                  kind: "SCALAR",
                  name: "String",
                  ofType: null,
                },
              },
              defaultValue: null,
            },
            {
              name: "totalPrice",
              description: null,
              type: {
                kind: "NON_NULL",
                name: null,
                ofType: {
                  kind: "SCALAR",
                  name: "Float",
                  ofType: null,
                },
              },
              defaultValue: null,
            },
          ],
          type: {
            kind: "LIST",
            name: null,
            ofType: {
              kind: "NON_NULL",
              name: null,
              ofType: {
                kind: "OBJECT",
                name: "ShippingFee",
                ofType: null,
              },
            },
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: "categories",
          description: null,
          args: [
            {
              name: "limit",
              description: null,
              type: {
                kind: "SCALAR",
                name: "Float",
                ofType: null,
              },
              defaultValue: "15",
            },
            {
              name: "page",
              description: null,
              type: {
                kind: "SCALAR",
                name: "Float",
                ofType: null,
              },
              defaultValue: "1",
            },
          ],
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "OBJECT",
              name: "PaginatedCategory",
              ofType: null,
            },
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: "getCategory",
          description: null,
          args: [
            {
              name: "slug",
              description: null,
              type: {
                kind: "NON_NULL",
                name: null,
                ofType: {
                  kind: "SCALAR",
                  name: "ID",
                  ofType: null,
                },
              },
              defaultValue: null,
            },
          ],
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "OBJECT",
              name: "Category",
              ofType: null,
            },
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: "countries",
          description: null,
          args: [],
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "LIST",
              name: null,
              ofType: {
                kind: "NON_NULL",
                name: null,
                ofType: {
                  kind: "OBJECT",
                  name: "Country",
                  ofType: null,
                },
              },
            },
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: "orders",
          description: null,
          args: [],
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "LIST",
              name: null,
              ofType: {
                kind: "NON_NULL",
                name: null,
                ofType: {
                  kind: "OBJECT",
                  name: "Order",
                  ofType: null,
                },
              },
            },
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: "products",
          description: null,
          args: [
            {
              name: "search",
              description: null,
              type: {
                kind: "SCALAR",
                name: "String",
                ofType: null,
              },
              defaultValue: null,
            },
            {
              name: "limit",
              description: null,
              type: {
                kind: "SCALAR",
                name: "Float",
                ofType: null,
              },
              defaultValue: "15",
            },
            {
              name: "page",
              description: null,
              type: {
                kind: "SCALAR",
                name: "Float",
                ofType: null,
              },
              defaultValue: "1",
            },
          ],
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "OBJECT",
              name: "PaginatedProduct",
              ofType: null,
            },
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: "getProduct",
          description: null,
          args: [
            {
              name: "id",
              description: null,
              type: {
                kind: "NON_NULL",
                name: null,
                ofType: {
                  kind: "SCALAR",
                  name: "ID",
                  ofType: null,
                },
              },
              defaultValue: null,
            },
          ],
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "OBJECT",
              name: "Product",
              ofType: null,
            },
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: "getPromoCode",
          description: null,
          args: [
            {
              name: "code",
              description: null,
              type: {
                kind: "NON_NULL",
                name: null,
                ofType: {
                  kind: "SCALAR",
                  name: "String",
                  ofType: null,
                },
              },
              defaultValue: null,
            },
          ],
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "OBJECT",
              name: "PromoCode",
              ofType: null,
            },
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: "myPromoCodes",
          description: null,
          args: [],
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "LIST",
              name: null,
              ofType: {
                kind: "NON_NULL",
                name: null,
                ofType: {
                  kind: "OBJECT",
                  name: "PromoCode",
                  ofType: null,
                },
              },
            },
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: "users",
          description: null,
          args: [],
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "LIST",
              name: null,
              ofType: {
                kind: "NON_NULL",
                name: null,
                ofType: {
                  kind: "OBJECT",
                  name: "User",
                  ofType: null,
                },
              },
            },
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: "permissions",
          description: null,
          args: [],
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "LIST",
              name: null,
              ofType: {
                kind: "NON_NULL",
                name: null,
                ofType: {
                  kind: "SCALAR",
                  name: "String",
                  ofType: null,
                },
              },
            },
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: "me",
          description: null,
          args: [],
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "OBJECT",
              name: "User",
              ofType: null,
            },
          },
          isDeprecated: false,
          deprecationReason: null,
        },
      ],
      inputFields: null,
      interfaces: [],
      enumValues: null,
      possibleTypes: null,
    },
    {
      kind: "SCALAR",
      name: "Float",
      description:
        "The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point).",
      fields: null,
      inputFields: null,
      interfaces: null,
      enumValues: null,
      possibleTypes: null,
    },
    {
      kind: "OBJECT",
      name: "Mutation",
      description: null,
      fields: [
        {
          name: "registerCarrier",
          description: null,
          args: [
            {
              name: "name",
              description: null,
              type: {
                kind: "NON_NULL",
                name: null,
                ofType: {
                  kind: "SCALAR",
                  name: "String",
                  ofType: null,
                },
              },
              defaultValue: null,
            },
          ],
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "OBJECT",
              name: "Carrier",
              ofType: null,
            },
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: "upsertCarrierRanges",
          description: null,
          args: [
            {
              name: "carrierId",
              description: null,
              type: {
                kind: "NON_NULL",
                name: null,
                ofType: {
                  kind: "SCALAR",
                  name: "ID",
                  ofType: null,
                },
              },
              defaultValue: null,
            },
            {
              name: "rangeStart",
              description: null,
              type: {
                kind: "NON_NULL",
                name: null,
                ofType: {
                  kind: "SCALAR",
                  name: "Int",
                  ofType: null,
                },
              },
              defaultValue: null,
            },
            {
              name: "rangeEnd",
              description: null,
              type: {
                kind: "NON_NULL",
                name: null,
                ofType: {
                  kind: "SCALAR",
                  name: "Int",
                  ofType: null,
                },
              },
              defaultValue: null,
            },
            {
              name: "countries",
              description: null,
              type: {
                kind: "NON_NULL",
                name: null,
                ofType: {
                  kind: "SCALAR",
                  name: "JSON",
                  ofType: null,
                },
              },
              defaultValue: null,
            },
          ],
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "OBJECT",
              name: "RangeCarrier",
              ofType: null,
            },
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: "createCategory",
          description: null,
          args: [
            {
              name: "name",
              description: null,
              type: {
                kind: "NON_NULL",
                name: null,
                ofType: {
                  kind: "SCALAR",
                  name: "String",
                  ofType: null,
                },
              },
              defaultValue: null,
            },
            {
              name: "parentId",
              description: null,
              type: {
                kind: "SCALAR",
                name: "String",
                ofType: null,
              },
              defaultValue: null,
            },
          ],
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "OBJECT",
              name: "Category",
              ofType: null,
            },
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: "upsertCountry",
          description: null,
          args: [
            {
              name: "isoCode",
              description: null,
              type: {
                kind: "NON_NULL",
                name: null,
                ofType: {
                  kind: "SCALAR",
                  name: "String",
                  ofType: null,
                },
              },
              defaultValue: null,
            },
            {
              name: "name",
              description: null,
              type: {
                kind: "NON_NULL",
                name: null,
                ofType: {
                  kind: "SCALAR",
                  name: "String",
                  ofType: null,
                },
              },
              defaultValue: null,
            },
          ],
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "OBJECT",
              name: "Country",
              ofType: null,
            },
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: "addToOrder",
          description: null,
          args: [
            {
              name: "items",
              description: null,
              type: {
                kind: "NON_NULL",
                name: null,
                ofType: {
                  kind: "LIST",
                  name: null,
                  ofType: {
                    kind: "NON_NULL",
                    name: null,
                    ofType: {
                      kind: "INPUT_OBJECT",
                      name: "OrderItemsArgs",
                      ofType: null,
                    },
                  },
                },
              },
              defaultValue: null,
            },
            {
              name: "address",
              description: null,
              type: {
                kind: "NON_NULL",
                name: null,
                ofType: {
                  kind: "INPUT_OBJECT",
                  name: "AddressArgs",
                  ofType: null,
                },
              },
              defaultValue: null,
            },
            {
              name: "promocode",
              description: null,
              type: {
                kind: "SCALAR",
                name: "String",
                ofType: null,
              },
              defaultValue: null,
            },
            {
              name: "carrier",
              description: null,
              type: {
                kind: "NON_NULL",
                name: null,
                ofType: {
                  kind: "SCALAR",
                  name: "String",
                  ofType: null,
                },
              },
              defaultValue: null,
            },
          ],
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "OBJECT",
              name: "Order",
              ofType: null,
            },
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: "createOrder",
          description: null,
          args: [
            {
              name: "items",
              description: null,
              type: {
                kind: "NON_NULL",
                name: null,
                ofType: {
                  kind: "LIST",
                  name: null,
                  ofType: {
                    kind: "NON_NULL",
                    name: null,
                    ofType: {
                      kind: "INPUT_OBJECT",
                      name: "OrderItemsArgs",
                      ofType: null,
                    },
                  },
                },
              },
              defaultValue: null,
            },
            {
              name: "address",
              description: null,
              type: {
                kind: "NON_NULL",
                name: null,
                ofType: {
                  kind: "INPUT_OBJECT",
                  name: "AddressArgs",
                  ofType: null,
                },
              },
              defaultValue: null,
            },
            {
              name: "promocode",
              description: null,
              type: {
                kind: "SCALAR",
                name: "String",
                ofType: null,
              },
              defaultValue: null,
            },
            {
              name: "carrier",
              description: null,
              type: {
                kind: "NON_NULL",
                name: null,
                ofType: {
                  kind: "SCALAR",
                  name: "String",
                  ofType: null,
                },
              },
              defaultValue: null,
            },
          ],
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "OBJECT",
              name: "Order",
              ofType: null,
            },
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: "registerProduct",
          description: null,
          args: [
            {
              name: "name",
              description: null,
              type: {
                kind: "NON_NULL",
                name: null,
                ofType: {
                  kind: "SCALAR",
                  name: "String",
                  ofType: null,
                },
              },
              defaultValue: null,
            },
            {
              name: "reference",
              description: null,
              type: {
                kind: "NON_NULL",
                name: null,
                ofType: {
                  kind: "SCALAR",
                  name: "String",
                  ofType: null,
                },
              },
              defaultValue: null,
            },
            {
              name: "description",
              description: null,
              type: {
                kind: "SCALAR",
                name: "String",
                ofType: null,
              },
              defaultValue: null,
            },
            {
              name: "price",
              description: null,
              type: {
                kind: "NON_NULL",
                name: null,
                ofType: {
                  kind: "SCALAR",
                  name: "Int",
                  ofType: null,
                },
              },
              defaultValue: null,
            },
            {
              name: "categorySlug",
              description: null,
              type: {
                kind: "NON_NULL",
                name: null,
                ofType: {
                  kind: "LIST",
                  name: null,
                  ofType: {
                    kind: "NON_NULL",
                    name: null,
                    ofType: {
                      kind: "SCALAR",
                      name: "ID",
                      ofType: null,
                    },
                  },
                },
              },
              defaultValue: null,
            },
            {
              name: "sizes",
              description: null,
              type: {
                kind: "NON_NULL",
                name: null,
                ofType: {
                  kind: "LIST",
                  name: null,
                  ofType: {
                    kind: "NON_NULL",
                    name: null,
                    ofType: {
                      kind: "INPUT_OBJECT",
                      name: "SizeArgs",
                      ofType: null,
                    },
                  },
                },
              },
              defaultValue: null,
            },
          ],
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "OBJECT",
              name: "Product",
              ofType: null,
            },
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: "updateProduct",
          description: null,
          args: [
            {
              name: "name",
              description: null,
              type: {
                kind: "NON_NULL",
                name: null,
                ofType: {
                  kind: "SCALAR",
                  name: "String",
                  ofType: null,
                },
              },
              defaultValue: null,
            },
            {
              name: "reference",
              description: null,
              type: {
                kind: "NON_NULL",
                name: null,
                ofType: {
                  kind: "SCALAR",
                  name: "String",
                  ofType: null,
                },
              },
              defaultValue: null,
            },
            {
              name: "description",
              description: null,
              type: {
                kind: "SCALAR",
                name: "String",
                ofType: null,
              },
              defaultValue: null,
            },
            {
              name: "price",
              description: null,
              type: {
                kind: "NON_NULL",
                name: null,
                ofType: {
                  kind: "SCALAR",
                  name: "Int",
                  ofType: null,
                },
              },
              defaultValue: null,
            },
            {
              name: "categorySlug",
              description: null,
              type: {
                kind: "NON_NULL",
                name: null,
                ofType: {
                  kind: "LIST",
                  name: null,
                  ofType: {
                    kind: "NON_NULL",
                    name: null,
                    ofType: {
                      kind: "SCALAR",
                      name: "ID",
                      ofType: null,
                    },
                  },
                },
              },
              defaultValue: null,
            },
            {
              name: "sizes",
              description: null,
              type: {
                kind: "NON_NULL",
                name: null,
                ofType: {
                  kind: "LIST",
                  name: null,
                  ofType: {
                    kind: "NON_NULL",
                    name: null,
                    ofType: {
                      kind: "INPUT_OBJECT",
                      name: "SizeArgs",
                      ofType: null,
                    },
                  },
                },
              },
              defaultValue: null,
            },
            {
              name: "productId",
              description: null,
              type: {
                kind: "NON_NULL",
                name: null,
                ofType: {
                  kind: "SCALAR",
                  name: "ID",
                  ofType: null,
                },
              },
              defaultValue: null,
            },
          ],
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "OBJECT",
              name: "Product",
              ofType: null,
            },
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: "upsertProductImage",
          description: null,
          args: [
            {
              name: "productId",
              description: null,
              type: {
                kind: "NON_NULL",
                name: null,
                ofType: {
                  kind: "SCALAR",
                  name: "ID",
                  ofType: null,
                },
              },
              defaultValue: null,
            },
            {
              name: "toInsert",
              description: null,
              type: {
                kind: "SCALAR",
                name: "String",
                ofType: null,
              },
              defaultValue: null,
            },
            {
              name: "toRemove",
              description: null,
              type: {
                kind: "SCALAR",
                name: "String",
                ofType: null,
              },
              defaultValue: null,
            },
          ],
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "OBJECT",
              name: "Product",
              ofType: null,
            },
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: "registerPromoCode",
          description: null,
          args: [
            {
              name: "code",
              description: null,
              type: {
                kind: "NON_NULL",
                name: null,
                ofType: {
                  kind: "SCALAR",
                  name: "String",
                  ofType: null,
                },
              },
              defaultValue: null,
            },
            {
              name: "isPercent",
              description: null,
              type: {
                kind: "NON_NULL",
                name: null,
                ofType: {
                  kind: "SCALAR",
                  name: "Boolean",
                  ofType: null,
                },
              },
              defaultValue: null,
            },
            {
              name: "amount",
              description: null,
              type: {
                kind: "NON_NULL",
                name: null,
                ofType: {
                  kind: "SCALAR",
                  name: "Int",
                  ofType: null,
                },
              },
              defaultValue: null,
            },
            {
              name: "expiredIn",
              description: null,
              type: {
                kind: "NON_NULL",
                name: null,
                ofType: {
                  kind: "SCALAR",
                  name: "String",
                  ofType: null,
                },
              },
              defaultValue: null,
            },
            {
              name: "userId",
              description: null,
              type: {
                kind: "SCALAR",
                name: "String",
                ofType: null,
              },
              defaultValue: null,
            },
          ],
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "OBJECT",
              name: "PromoCode",
              ofType: null,
            },
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: "givePermissions",
          description: null,
          args: [
            {
              name: "userId",
              description: null,
              type: {
                kind: "NON_NULL",
                name: null,
                ofType: {
                  kind: "SCALAR",
                  name: "ID",
                  ofType: null,
                },
              },
              defaultValue: null,
            },
            {
              name: "permissions",
              description: null,
              type: {
                kind: "NON_NULL",
                name: null,
                ofType: {
                  kind: "LIST",
                  name: null,
                  ofType: {
                    kind: "NON_NULL",
                    name: null,
                    ofType: {
                      kind: "SCALAR",
                      name: "String",
                      ofType: null,
                    },
                  },
                },
              },
              defaultValue: null,
            },
          ],
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "OBJECT",
              name: "User",
              ofType: null,
            },
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: "login",
          description: null,
          args: [
            {
              name: "email",
              description: null,
              type: {
                kind: "NON_NULL",
                name: null,
                ofType: {
                  kind: "SCALAR",
                  name: "String",
                  ofType: null,
                },
              },
              defaultValue: null,
            },
            {
              name: "password",
              description: null,
              type: {
                kind: "NON_NULL",
                name: null,
                ofType: {
                  kind: "SCALAR",
                  name: "String",
                  ofType: null,
                },
              },
              defaultValue: null,
            },
          ],
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "OBJECT",
              name: "LoginResponse",
              ofType: null,
            },
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: "registerUser",
          description: null,
          args: [
            {
              name: "firstName",
              description: null,
              type: {
                kind: "NON_NULL",
                name: null,
                ofType: {
                  kind: "SCALAR",
                  name: "String",
                  ofType: null,
                },
              },
              defaultValue: null,
            },
            {
              name: "lastName",
              description: null,
              type: {
                kind: "NON_NULL",
                name: null,
                ofType: {
                  kind: "SCALAR",
                  name: "String",
                  ofType: null,
                },
              },
              defaultValue: null,
            },
            {
              name: "gender",
              description: null,
              type: {
                kind: "NON_NULL",
                name: null,
                ofType: {
                  kind: "ENUM",
                  name: "Gender",
                  ofType: null,
                },
              },
              defaultValue: null,
            },
            {
              name: "dateOfBirth",
              description: null,
              type: {
                kind: "SCALAR",
                name: "String",
                ofType: null,
              },
              defaultValue: null,
            },
            {
              name: "addresses",
              description: null,
              type: {
                kind: "LIST",
                name: null,
                ofType: {
                  kind: "NON_NULL",
                  name: null,
                  ofType: {
                    kind: "INPUT_OBJECT",
                    name: "AddressArgs",
                    ofType: null,
                  },
                },
              },
              defaultValue: null,
            },
            {
              name: "email",
              description: null,
              type: {
                kind: "NON_NULL",
                name: null,
                ofType: {
                  kind: "SCALAR",
                  name: "String",
                  ofType: null,
                },
              },
              defaultValue: null,
            },
            {
              name: "password",
              description: null,
              type: {
                kind: "NON_NULL",
                name: null,
                ofType: {
                  kind: "SCALAR",
                  name: "String",
                  ofType: null,
                },
              },
              defaultValue: null,
            },
          ],
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "Boolean",
              ofType: null,
            },
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: "updateProfile",
          description: null,
          args: [
            {
              name: "firstName",
              description: null,
              type: {
                kind: "NON_NULL",
                name: null,
                ofType: {
                  kind: "SCALAR",
                  name: "String",
                  ofType: null,
                },
              },
              defaultValue: null,
            },
            {
              name: "lastName",
              description: null,
              type: {
                kind: "NON_NULL",
                name: null,
                ofType: {
                  kind: "SCALAR",
                  name: "String",
                  ofType: null,
                },
              },
              defaultValue: null,
            },
            {
              name: "gender",
              description: null,
              type: {
                kind: "NON_NULL",
                name: null,
                ofType: {
                  kind: "ENUM",
                  name: "Gender",
                  ofType: null,
                },
              },
              defaultValue: null,
            },
            {
              name: "dateOfBirth",
              description: null,
              type: {
                kind: "SCALAR",
                name: "String",
                ofType: null,
              },
              defaultValue: null,
            },
            {
              name: "addresses",
              description: null,
              type: {
                kind: "LIST",
                name: null,
                ofType: {
                  kind: "NON_NULL",
                  name: null,
                  ofType: {
                    kind: "INPUT_OBJECT",
                    name: "AddressArgs",
                    ofType: null,
                  },
                },
              },
              defaultValue: null,
            },
          ],
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "OBJECT",
              name: "User",
              ofType: null,
            },
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: "forgotPassword",
          description: null,
          args: [
            {
              name: "email",
              description: null,
              type: {
                kind: "NON_NULL",
                name: null,
                ofType: {
                  kind: "SCALAR",
                  name: "String",
                  ofType: null,
                },
              },
              defaultValue: null,
            },
          ],
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "Boolean",
              ofType: null,
            },
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: "recoveryPassword",
          description: null,
          args: [
            {
              name: "recoveryToken",
              description: null,
              type: {
                kind: "NON_NULL",
                name: null,
                ofType: {
                  kind: "SCALAR",
                  name: "String",
                  ofType: null,
                },
              },
              defaultValue: null,
            },
            {
              name: "password",
              description: null,
              type: {
                kind: "NON_NULL",
                name: null,
                ofType: {
                  kind: "SCALAR",
                  name: "String",
                  ofType: null,
                },
              },
              defaultValue: null,
            },
          ],
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "Boolean",
              ofType: null,
            },
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: "changePassword",
          description: null,
          args: [
            {
              name: "oldPassword",
              description: null,
              type: {
                kind: "NON_NULL",
                name: null,
                ofType: {
                  kind: "SCALAR",
                  name: "String",
                  ofType: null,
                },
              },
              defaultValue: null,
            },
            {
              name: "newPassword",
              description: null,
              type: {
                kind: "NON_NULL",
                name: null,
                ofType: {
                  kind: "SCALAR",
                  name: "String",
                  ofType: null,
                },
              },
              defaultValue: null,
            },
          ],
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "Boolean",
              ofType: null,
            },
          },
          isDeprecated: false,
          deprecationReason: null,
        },
      ],
      inputFields: null,
      interfaces: [],
      enumValues: null,
      possibleTypes: null,
    },
    {
      kind: "OBJECT",
      name: "__Schema",
      description:
        "A GraphQL Schema defines the capabilities of a GraphQL server. It exposes all available types and directives on the server, as well as the entry points for query, mutation, and subscription operations.",
      fields: [
        {
          name: "description",
          description: null,
          args: [],
          type: {
            kind: "SCALAR",
            name: "String",
            ofType: null,
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: "types",
          description: "A list of all types supported by this server.",
          args: [],
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "LIST",
              name: null,
              ofType: {
                kind: "NON_NULL",
                name: null,
                ofType: {
                  kind: "OBJECT",
                  name: "__Type",
                  ofType: null,
                },
              },
            },
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: "queryType",
          description: "The type that query operations will be rooted at.",
          args: [],
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "OBJECT",
              name: "__Type",
              ofType: null,
            },
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: "mutationType",
          description:
            "If this server supports mutation, the type that mutation operations will be rooted at.",
          args: [],
          type: {
            kind: "OBJECT",
            name: "__Type",
            ofType: null,
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: "subscriptionType",
          description:
            "If this server support subscription, the type that subscription operations will be rooted at.",
          args: [],
          type: {
            kind: "OBJECT",
            name: "__Type",
            ofType: null,
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: "directives",
          description: "A list of all directives supported by this server.",
          args: [],
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "LIST",
              name: null,
              ofType: {
                kind: "NON_NULL",
                name: null,
                ofType: {
                  kind: "OBJECT",
                  name: "__Directive",
                  ofType: null,
                },
              },
            },
          },
          isDeprecated: false,
          deprecationReason: null,
        },
      ],
      inputFields: null,
      interfaces: [],
      enumValues: null,
      possibleTypes: null,
    },
    {
      kind: "OBJECT",
      name: "__Type",
      description:
        "The fundamental unit of any GraphQL Schema is the type. There are many kinds of types in GraphQL as represented by the `__TypeKind` enum.\n\nDepending on the kind of a type, certain fields describe information about that type. Scalar types provide no information beyond a name, description and optional `specifiedByUrl`, while Enum types provide their values. Object and Interface types provide the fields they describe. Abstract types, Union and Interface, provide the Object types possible at runtime. List and NonNull types compose other types.",
      fields: [
        {
          name: "kind",
          description: null,
          args: [],
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "ENUM",
              name: "__TypeKind",
              ofType: null,
            },
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: "name",
          description: null,
          args: [],
          type: {
            kind: "SCALAR",
            name: "String",
            ofType: null,
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: "description",
          description: null,
          args: [],
          type: {
            kind: "SCALAR",
            name: "String",
            ofType: null,
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: "specifiedByUrl",
          description: null,
          args: [],
          type: {
            kind: "SCALAR",
            name: "String",
            ofType: null,
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: "fields",
          description: null,
          args: [
            {
              name: "includeDeprecated",
              description: null,
              type: {
                kind: "SCALAR",
                name: "Boolean",
                ofType: null,
              },
              defaultValue: "false",
            },
          ],
          type: {
            kind: "LIST",
            name: null,
            ofType: {
              kind: "NON_NULL",
              name: null,
              ofType: {
                kind: "OBJECT",
                name: "__Field",
                ofType: null,
              },
            },
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: "interfaces",
          description: null,
          args: [],
          type: {
            kind: "LIST",
            name: null,
            ofType: {
              kind: "NON_NULL",
              name: null,
              ofType: {
                kind: "OBJECT",
                name: "__Type",
                ofType: null,
              },
            },
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: "possibleTypes",
          description: null,
          args: [],
          type: {
            kind: "LIST",
            name: null,
            ofType: {
              kind: "NON_NULL",
              name: null,
              ofType: {
                kind: "OBJECT",
                name: "__Type",
                ofType: null,
              },
            },
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: "enumValues",
          description: null,
          args: [
            {
              name: "includeDeprecated",
              description: null,
              type: {
                kind: "SCALAR",
                name: "Boolean",
                ofType: null,
              },
              defaultValue: "false",
            },
          ],
          type: {
            kind: "LIST",
            name: null,
            ofType: {
              kind: "NON_NULL",
              name: null,
              ofType: {
                kind: "OBJECT",
                name: "__EnumValue",
                ofType: null,
              },
            },
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: "inputFields",
          description: null,
          args: [],
          type: {
            kind: "LIST",
            name: null,
            ofType: {
              kind: "NON_NULL",
              name: null,
              ofType: {
                kind: "OBJECT",
                name: "__InputValue",
                ofType: null,
              },
            },
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: "ofType",
          description: null,
          args: [],
          type: {
            kind: "OBJECT",
            name: "__Type",
            ofType: null,
          },
          isDeprecated: false,
          deprecationReason: null,
        },
      ],
      inputFields: null,
      interfaces: [],
      enumValues: null,
      possibleTypes: null,
    },
    {
      kind: "ENUM",
      name: "__TypeKind",
      description: "An enum describing what kind of type a given `__Type` is.",
      fields: null,
      inputFields: null,
      interfaces: null,
      enumValues: [
        {
          name: "SCALAR",
          description: "Indicates this type is a scalar.",
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: "OBJECT",
          description:
            "Indicates this type is an object. `fields` and `interfaces` are valid fields.",
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: "INTERFACE",
          description:
            "Indicates this type is an interface. `fields`, `interfaces`, and `possibleTypes` are valid fields.",
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: "UNION",
          description:
            "Indicates this type is a union. `possibleTypes` is a valid field.",
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: "ENUM",
          description:
            "Indicates this type is an enum. `enumValues` is a valid field.",
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: "INPUT_OBJECT",
          description:
            "Indicates this type is an input object. `inputFields` is a valid field.",
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: "LIST",
          description:
            "Indicates this type is a list. `ofType` is a valid field.",
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: "NON_NULL",
          description:
            "Indicates this type is a non-null. `ofType` is a valid field.",
          isDeprecated: false,
          deprecationReason: null,
        },
      ],
      possibleTypes: null,
    },
    {
      kind: "OBJECT",
      name: "__Field",
      description:
        "Object and Interface types are described by a list of Fields, each of which has a name, potentially a list of arguments, and a return type.",
      fields: [
        {
          name: "name",
          description: null,
          args: [],
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "String",
              ofType: null,
            },
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: "description",
          description: null,
          args: [],
          type: {
            kind: "SCALAR",
            name: "String",
            ofType: null,
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: "args",
          description: null,
          args: [],
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "LIST",
              name: null,
              ofType: {
                kind: "NON_NULL",
                name: null,
                ofType: {
                  kind: "OBJECT",
                  name: "__InputValue",
                  ofType: null,
                },
              },
            },
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: "type",
          description: null,
          args: [],
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "OBJECT",
              name: "__Type",
              ofType: null,
            },
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: "isDeprecated",
          description: null,
          args: [],
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "Boolean",
              ofType: null,
            },
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: "deprecationReason",
          description: null,
          args: [],
          type: {
            kind: "SCALAR",
            name: "String",
            ofType: null,
          },
          isDeprecated: false,
          deprecationReason: null,
        },
      ],
      inputFields: null,
      interfaces: [],
      enumValues: null,
      possibleTypes: null,
    },
    {
      kind: "OBJECT",
      name: "__InputValue",
      description:
        "Arguments provided to Fields or Directives and the input fields of an InputObject are represented as Input Values which describe their type and optionally a default value.",
      fields: [
        {
          name: "name",
          description: null,
          args: [],
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "String",
              ofType: null,
            },
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: "description",
          description: null,
          args: [],
          type: {
            kind: "SCALAR",
            name: "String",
            ofType: null,
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: "type",
          description: null,
          args: [],
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "OBJECT",
              name: "__Type",
              ofType: null,
            },
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: "defaultValue",
          description:
            "A GraphQL-formatted string representing the default value for this input value.",
          args: [],
          type: {
            kind: "SCALAR",
            name: "String",
            ofType: null,
          },
          isDeprecated: false,
          deprecationReason: null,
        },
      ],
      inputFields: null,
      interfaces: [],
      enumValues: null,
      possibleTypes: null,
    },
    {
      kind: "OBJECT",
      name: "__EnumValue",
      description:
        "One possible value for a given Enum. Enum values are unique values, not a placeholder for a string or numeric value. However an Enum value is returned in a JSON response as a string.",
      fields: [
        {
          name: "name",
          description: null,
          args: [],
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "String",
              ofType: null,
            },
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: "description",
          description: null,
          args: [],
          type: {
            kind: "SCALAR",
            name: "String",
            ofType: null,
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: "isDeprecated",
          description: null,
          args: [],
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "Boolean",
              ofType: null,
            },
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: "deprecationReason",
          description: null,
          args: [],
          type: {
            kind: "SCALAR",
            name: "String",
            ofType: null,
          },
          isDeprecated: false,
          deprecationReason: null,
        },
      ],
      inputFields: null,
      interfaces: [],
      enumValues: null,
      possibleTypes: null,
    },
    {
      kind: "OBJECT",
      name: "__Directive",
      description:
        "A Directive provides a way to describe alternate runtime execution and type validation behavior in a GraphQL document.\n\nIn some cases, you need to provide options to alter GraphQL's execution behavior in ways field arguments will not suffice, such as conditionally including or skipping a field. Directives provide this by describing additional information to the executor.",
      fields: [
        {
          name: "name",
          description: null,
          args: [],
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "String",
              ofType: null,
            },
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: "description",
          description: null,
          args: [],
          type: {
            kind: "SCALAR",
            name: "String",
            ofType: null,
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: "isRepeatable",
          description: null,
          args: [],
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "Boolean",
              ofType: null,
            },
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: "locations",
          description: null,
          args: [],
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "LIST",
              name: null,
              ofType: {
                kind: "NON_NULL",
                name: null,
                ofType: {
                  kind: "ENUM",
                  name: "__DirectiveLocation",
                  ofType: null,
                },
              },
            },
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: "args",
          description: null,
          args: [],
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "LIST",
              name: null,
              ofType: {
                kind: "NON_NULL",
                name: null,
                ofType: {
                  kind: "OBJECT",
                  name: "__InputValue",
                  ofType: null,
                },
              },
            },
          },
          isDeprecated: false,
          deprecationReason: null,
        },
      ],
      inputFields: null,
      interfaces: [],
      enumValues: null,
      possibleTypes: null,
    },
    {
      kind: "ENUM",
      name: "__DirectiveLocation",
      description:
        "A Directive can be adjacent to many parts of the GraphQL language, a __DirectiveLocation describes one such possible adjacencies.",
      fields: null,
      inputFields: null,
      interfaces: null,
      enumValues: [
        {
          name: "QUERY",
          description: "Location adjacent to a query operation.",
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: "MUTATION",
          description: "Location adjacent to a mutation operation.",
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: "SUBSCRIPTION",
          description: "Location adjacent to a subscription operation.",
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: "FIELD",
          description: "Location adjacent to a field.",
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: "FRAGMENT_DEFINITION",
          description: "Location adjacent to a fragment definition.",
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: "FRAGMENT_SPREAD",
          description: "Location adjacent to a fragment spread.",
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: "INLINE_FRAGMENT",
          description: "Location adjacent to an inline fragment.",
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: "VARIABLE_DEFINITION",
          description: "Location adjacent to a variable definition.",
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: "SCHEMA",
          description: "Location adjacent to a schema definition.",
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: "SCALAR",
          description: "Location adjacent to a scalar definition.",
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: "OBJECT",
          description: "Location adjacent to an object type definition.",
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: "FIELD_DEFINITION",
          description: "Location adjacent to a field definition.",
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: "ARGUMENT_DEFINITION",
          description: "Location adjacent to an argument definition.",
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: "INTERFACE",
          description: "Location adjacent to an interface definition.",
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: "UNION",
          description: "Location adjacent to a union definition.",
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: "ENUM",
          description: "Location adjacent to an enum definition.",
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: "ENUM_VALUE",
          description: "Location adjacent to an enum value definition.",
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: "INPUT_OBJECT",
          description: "Location adjacent to an input object type definition.",
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          name: "INPUT_FIELD_DEFINITION",
          description: "Location adjacent to an input object field definition.",
          isDeprecated: false,
          deprecationReason: null,
        },
      ],
      possibleTypes: null,
    },
  ],
  directives: [
    {
      name: "include",
      description:
        "Directs the executor to include this field or fragment only when the `if` argument is true.",
      locations: ["FIELD", "FRAGMENT_SPREAD", "INLINE_FRAGMENT"],
      args: [
        {
          name: "if",
          description: "Included when true.",
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "Boolean",
              ofType: null,
            },
          },
          defaultValue: null,
        },
      ],
    },
    {
      name: "skip",
      description:
        "Directs the executor to skip this field or fragment when the `if` argument is true.",
      locations: ["FIELD", "FRAGMENT_SPREAD", "INLINE_FRAGMENT"],
      args: [
        {
          name: "if",
          description: "Skipped when true.",
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "Boolean",
              ofType: null,
            },
          },
          defaultValue: null,
        },
      ],
    },
    {
      name: "deprecated",
      description:
        "Marks an element of a GraphQL schema as no longer supported.",
      locations: ["FIELD_DEFINITION", "ENUM_VALUE"],
      args: [
        {
          name: "reason",
          description:
            "Explains why this element was deprecated, usually also including a suggestion for how to access supported similar data. Formatted using the Markdown syntax, as specified by [CommonMark](https://commonmark.org/).",
          type: {
            kind: "SCALAR",
            name: "String",
            ofType: null,
          },
          defaultValue: '"No longer supported"',
        },
      ],
    },
    {
      name: "specifiedBy",
      description: "Exposes a URL that specifies the behaviour of this scalar.",
      locations: ["SCALAR"],
      args: [
        {
          name: "url",
          description: "The URL that specifies the behaviour of this scalar.",
          type: {
            kind: "NON_NULL",
            name: null,
            ofType: {
              kind: "SCALAR",
              name: "String",
              ofType: null,
            },
          },
          defaultValue: null,
        },
      ],
    },
  ],
});
export default buildQuery;
