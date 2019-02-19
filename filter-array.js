// filter object based on values present in another object

var items = {
    "inheritedFieldGroups": [{
        "name": "productdetails",
        "label": "Product Details",
        "fields": [{
            "name": "make"
          },
          {
            "name": "model"
          },
          {
            "name": "itemCondition"
          },
          {
            "name": "year"
          },
          {
            "name": "price"
          },
          {
            "name": "listingType"
          },
          {
            "name": "colour"
          },
          {
            "name": "stockNumber"
          },
          {
            "name": "odometer"
          },
          {
            "name": "axleConfiguration"
          },
          {
            "name": "brakes"
          },
          {
            "name": "coupling"
          },
          {
            "name": "differential"
          },
          {
            "name": "vIN"
          },
          {
            "name": "gCM"
          },
          {
            "name": "gVM"
          },
          {
            "name": "registration"
          },
          {
            "name": "suspension"
          },
          {
            "name": "warranty"
          },
          {
            "name": "wheelBase"
          }
        ]
      },
      {
        "name": "engine",
        "label": "Engine",
        "fields": [{
            "name": "engineMake"
          },
          {
            "name": "engineModel"
          },
          {
            "name": "engineNumber"
          },
          {
            "name": "fuelCapacity"
          },
          {
            "name": "enginePower"
          },
          {
            "name": "fuelType"
          }
        ]
      },
      {
        "name": "cabinfeatures",
        "label": "Cabin Features",
        "fields": [{
            "name": "airConditioning"
          },
          {
            "name": "fridge"
          },
          {
            "name": "gPS"
          },
          {
            "name": "radio"
          },
          {
            "name": "sleeper"
          },
          {
            "name": "speedLimiter"
          },
          {
            "name": "stereo"
          }
        ]
      },
      {
        "name": "transmission",
        "label": "Transmission",
        "fields": [{
            "name": "transmissionType"
          },
          {
            "name": "transmissionManufacturer"
          },
          {
            "name": "gearsForward"
          }
        ]
      },
      {
        "name": "accessories",
        "label": "Accessories",
        "fields": [{
            "name": "bullbar"
          },
          {
            "name": "windDeflector"
          }
        ]
      },
      {
        "name": "body",
        "label": "Body",
        "fields": [{
            "name": "bodyMake"
          },
          {
            "name": "bodyCapacity"
          },
          {
            "name": "bodyDimensions"
          }
        ]
      },
      {
        "name": "description",
        "label": "Description",
        "fields": [{
          "name": "description"
        }]
      }
    ]
  };
  
  var details = {
    "regoExpiry": "02/2025",
    "model": "TestAutoModel65TW",
    "towBallWeight": 240,
    "listingType": "Used",
    "gVM": 3120,
    "serialNumber": "",
    "axleConfiguration": "4x2",
    "tare": 2860,
    "sleepingCapacity": 3,
    "atm": 3360,
    "toilet": "Yes",
    "description": "Test UI Automation Comments. This is a Test Stock Please Ignore. Dont send any enquiries for the stock.U34iqlG8ExZWsbINVPzY",
    "length": 23,
    "year": 2017,
    "seatingCapacity": 6,
    "gPS": "Yes",
    "wheels": 4,
    "suspension": "Air Bag & Independent",
    "airConditioning": "Yes",
    "registration": "TestAutoRego",
    "size": 16,
    "stockNumber": "TestAutoStockTZqt",
    "fridge": "Yes",
    "stereo": "No",
    "shower": "Yes",
    "warranty": "1 year",
    "make": "Van Cruiser",
    "brakes": "Electric"
  };
  
  // strip out any props where values equal null, undefined, ''  
  // remove any props with empty arrays 
  this.newArray = items.inheritedFieldGroups.map(_ => {
    _.fields = _.fields.filter(x => {
      return this.details[x.name] !== '' && this.details[x.name] !== undefined && this.details[x.name] !== null
    })
    return _
  }).slice(0).filter((_) => 
    _.fields.length > 0
  );

  console.log(newArray);