const mockData = [
  {
    id: "PH",
    label: "Philippines",
    provinces: [
      {
        countryId: "PH",
        id: "NCR",
        label: "National Capital Region",
        cities: [
          {
            provinceId: "NCR",
            id: "TAG",
            label: "Taguig",
            population: "28000",
          }, {
            provinceId: "NCR",
            id: "MKT",
            label: "Makati",
            population: "15020",
          }
        ],
      }, {
        countryId: "PH",
        id: "BAT",
        label: "Bataan",
        cities: [
          {
            provinceId: "BAT",
            id: "ORA",
            label: "Orani",
            population: "4004",
          }, {
            provinceId: "BAT",
            id: "BAL",
            label: "Balanga",
            population: "3700",
          }, {
            provinceId: "BAT",
            id: "SAM",
            label: "Samal",
            population: "48002",
          },
        ],
      },
    ],
  }, {
    id: "BG",
    label: "Belgium",
    provinces: [
      {
        countryId: "BG",
        id: "LX",
        label: "Luxembourg",
        cities: [
          {
            provinceId: "LX",
            id: "VRT",
            label: "Virton",
            population: "1234",
          }, {
            provinceId: "LX",
            id: "WEL",
            label: "Wellin",
            population: "3456",
          }
        ],
      }, {
        countryId: "BG",
        id: "ANT",
        label: "Antwerp",
        cities: [
          {
            provinceId: "ANT",
            id: "DFL",
            label: "Duffel",
            population: "2001",
          }, {
            provinceId: "ANT",
            id: "PUU",
            label: "Puurs",
            population: "11987",
          },
        ],
      },
    ],
  }, {
    id: "US",
    label: "United States",
    provinces: [
      {
        countryId: "US",
        id: "NY",
        label: "New York",
        cities: [
          {
            provinceId: "NY",
            id: "NYC",
            label: "New York City",
            population: "50000",
          }, {
            provinceId: "NY",
            id: "BKN",
            label: "Brooklyn",
            population: "18000",
          }
        ],
      }, {
        countryId: "US",
        id: "LA",
        label: "Los Angeles",
        cities: [
          {
            provinceId: "LA",
            id: "ING",
            label: "Inglewood",
            population: "12430",
          }, {
            provinceId: "LA",
            id: "BH",
            label: "Beverly Hills",
            population: "14010",
          },
        ],
      },
    ],
  }
];

export default mockData;