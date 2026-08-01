/* =========================================================
   IMPLANCIA — PRODUCT PRICING / OPTIONS ENGINE
   ---------------------------------------------------------
   NOTE FOR IMPLANCIA TEAM:
   The prices below (basePrice + modifiers) are DEMO / PLACEHOLDER
   values only — real catalog prices were not supplied. Edit the
   numbers in PRODUCTS_PRICING to match actual pricing before
   going live.

   Every product now exposes FOUR independent dropdowns:
     1. material  — Material (e.g. Stainless Steel / Titanium)
     2. diameter  — Diameter (mm), shown even when only one size
                     exists, so Material + Diameter are always
                     two separate fields (never combined into one)
     3. option3   — Holes / Length / Side (varies by product type)
     4. option4   — Side / Packaging (varies by product type)

   Everything else (dropdown population, live price update,
   gallery, video toggle) works automatically off this data —
   you only need to edit the numbers/labels below.
========================================================= */

const PRODUCTS_PRICING = {
  "safety-locking-screw": {
    "basePrice": 0.99,
    "optionLabels": {
      "material": "Material",
      "diameter": "Diameter",
      "option3": "Length",
      "option4": "Head Type"
    },
    "material": [
      {
        "value": "stainless-steel",
        "label": "Stainless Steel (316L)",
        "modifier": 0
      },
      {
        "value": "titanium",
        "label": "Titanium (Ti-6Al-4V)",
        "modifier": 0.5
      }
    ],
    "diameter": [
      {
        "value": "all",
        "label": "All Diameters",
        "modifier": 0
      },
      {
        "value": "2.4",
        "label": "2.4 mm",
        "modifier": 0,
        "lengths": [
          {
            "value": "all",
            "label": "All Lengths",
            "modifier": 0
          },
          {
            "value": "6",
            "label": "6 mm",
            "modifier": 0
          },
          {
            "value": "8",
            "label": "8 mm",
            "modifier": 0
          },
          {
            "value": "10",
            "label": "10 mm",
            "modifier": 0
          },
          {
            "value": "12",
            "label": "12 mm",
            "modifier": 0
          },
          {
            "value": "14",
            "label": "14 mm",
            "modifier": 0
          },
          {
            "value": "16",
            "label": "16 mm",
            "modifier": 0
          },
          {
            "value": "18",
            "label": "18 mm",
            "modifier": 0
          },
          {
            "value": "20",
            "label": "20 mm",
            "modifier": 0
          },
          {
            "value": "22",
            "label": "22 mm",
            "modifier": 0
          },
          {
            "value": "24",
            "label": "24 mm",
            "modifier": 0
          },
          {
            "value": "26",
            "label": "26 mm",
            "modifier": 0
          },
          {
            "value": "28",
            "label": "28 mm",
            "modifier": 0
          },
          {
            "value": "30",
            "label": "30 mm",
            "modifier": 0
          },
          {
            "value": "32",
            "label": "32 mm",
            "modifier": 0
          },
          {
            "value": "34",
            "label": "34 mm",
            "modifier": 0
          },
          {
            "value": "36",
            "label": "36 mm",
            "modifier": 0
          },
          {
            "value": "38",
            "label": "38 mm",
            "modifier": 0
          },
          {
            "value": "40",
            "label": "40 mm",
            "modifier": 0
          }
        ]
      },
      {
        "value": "2.7",
        "label": "2.7 mm",
        "modifier": 0,
        "lengths": [
          {
            "value": "all",
            "label": "All Lengths",
            "modifier": 0
          },
          {
            "value": "6",
            "label": "6 mm",
            "modifier": 0
          },
          {
            "value": "8",
            "label": "8 mm",
            "modifier": 0
          },
          {
            "value": "10",
            "label": "10 mm",
            "modifier": 0
          },
          {
            "value": "12",
            "label": "12 mm",
            "modifier": 0
          },
          {
            "value": "14",
            "label": "14 mm",
            "modifier": 0
          },
          {
            "value": "16",
            "label": "16 mm",
            "modifier": 0
          },
          {
            "value": "18",
            "label": "18 mm",
            "modifier": 0
          },
          {
            "value": "20",
            "label": "20 mm",
            "modifier": 0
          },
          {
            "value": "22",
            "label": "22 mm",
            "modifier": 0
          },
          {
            "value": "24",
            "label": "24 mm",
            "modifier": 0
          },
          {
            "value": "26",
            "label": "26 mm",
            "modifier": 0
          },
          {
            "value": "28",
            "label": "28 mm",
            "modifier": 0
          },
          {
            "value": "30",
            "label": "30 mm",
            "modifier": 0
          },
          {
            "value": "32",
            "label": "32 mm",
            "modifier": 0
          },
          {
            "value": "34",
            "label": "34 mm",
            "modifier": 0
          },
          {
            "value": "36",
            "label": "36 mm",
            "modifier": 0
          },
          {
            "value": "38",
            "label": "38 mm",
            "modifier": 0
          },
          {
            "value": "40",
            "label": "40 mm",
            "modifier": 0
          }
        ]
      },
      {
        "value": "3.5",
        "label": "3.5 mm",
        "modifier": 0,
        "lengths": [
          {
            "value": "all",
            "label": "All Lengths",
            "modifier": 0
          },
          {
            "value": "10",
            "label": "10 mm",
            "modifier": 0
          },
          {
            "value": "12",
            "label": "12 mm",
            "modifier": 0
          },
          {
            "value": "14",
            "label": "14 mm",
            "modifier": 0
          },
          {
            "value": "16",
            "label": "16 mm",
            "modifier": 0
          },
          {
            "value": "18",
            "label": "18 mm",
            "modifier": 0
          },
          {
            "value": "20",
            "label": "20 mm",
            "modifier": 0
          },
          {
            "value": "22",
            "label": "22 mm",
            "modifier": 0
          },
          {
            "value": "24",
            "label": "24 mm",
            "modifier": 0
          },
          {
            "value": "26",
            "label": "26 mm",
            "modifier": 0
          },
          {
            "value": "28",
            "label": "28 mm",
            "modifier": 0
          },
          {
            "value": "30",
            "label": "30 mm",
            "modifier": 0
          },
          {
            "value": "32",
            "label": "32 mm",
            "modifier": 0
          },
          {
            "value": "34",
            "label": "34 mm",
            "modifier": 0
          },
          {
            "value": "36",
            "label": "36 mm",
            "modifier": 0
          },
          {
            "value": "38",
            "label": "38 mm",
            "modifier": 0
          },
          {
            "value": "40",
            "label": "40 mm",
            "modifier": 0
          },
          {
            "value": "42",
            "label": "42 mm",
            "modifier": 0
          },
          {
            "value": "44",
            "label": "44 mm",
            "modifier": 0
          },
          {
            "value": "46",
            "label": "46 mm",
            "modifier": 0
          },
          {
            "value": "48",
            "label": "48 mm",
            "modifier": 0
          },
          {
            "value": "50",
            "label": "50 mm",
            "modifier": 0
          },
          {
            "value": "52",
            "label": "52 mm",
            "modifier": 0
          },
          {
            "value": "54",
            "label": "54 mm",
            "modifier": 0
          },
          {
            "value": "56",
            "label": "56 mm",
            "modifier": 0
          },
          {
            "value": "58",
            "label": "58 mm",
            "modifier": 0
          },
          {
            "value": "60",
            "label": "60 mm",
            "modifier": 0
          }
        ]
      },
      {
        "value": "4.5",
        "label": "4.5 mm",
        "modifier": 0.3,
        "lengths": [
          {
            "value": "all",
            "label": "All Lengths",
            "modifier": 0
          },
          {
            "value": "10",
            "label": "10 mm",
            "modifier": 0
          },
          {
            "value": "12",
            "label": "12 mm",
            "modifier": 0
          },
          {
            "value": "14",
            "label": "14 mm",
            "modifier": 0
          },
          {
            "value": "16",
            "label": "16 mm",
            "modifier": 0
          },
          {
            "value": "18",
            "label": "18 mm",
            "modifier": 0
          },
          {
            "value": "20",
            "label": "20 mm",
            "modifier": 0
          },
          {
            "value": "22",
            "label": "22 mm",
            "modifier": 0
          },
          {
            "value": "24",
            "label": "24 mm",
            "modifier": 0
          },
          {
            "value": "26",
            "label": "26 mm",
            "modifier": 0
          },
          {
            "value": "28",
            "label": "28 mm",
            "modifier": 0
          },
          {
            "value": "30",
            "label": "30 mm",
            "modifier": 0
          },
          {
            "value": "32",
            "label": "32 mm",
            "modifier": 0
          },
          {
            "value": "34",
            "label": "34 mm",
            "modifier": 0
          },
          {
            "value": "36",
            "label": "36 mm",
            "modifier": 0
          },
          {
            "value": "38",
            "label": "38 mm",
            "modifier": 0
          },
          {
            "value": "40",
            "label": "40 mm",
            "modifier": 0
          },
          {
            "value": "42",
            "label": "42 mm",
            "modifier": 0
          },
          {
            "value": "44",
            "label": "44 mm",
            "modifier": 0
          },
          {
            "value": "46",
            "label": "46 mm",
            "modifier": 0
          },
          {
            "value": "48",
            "label": "48 mm",
            "modifier": 0
          },
          {
            "value": "50",
            "label": "50 mm",
            "modifier": 0
          },
          {
            "value": "52",
            "label": "52 mm",
            "modifier": 0
          },
          {
            "value": "54",
            "label": "54 mm",
            "modifier": 0
          },
          {
            "value": "56",
            "label": "56 mm",
            "modifier": 0
          },
          {
            "value": "58",
            "label": "58 mm",
            "modifier": 0
          },
          {
            "value": "60",
            "label": "60 mm",
            "modifier": 0
          }
        ]
      }
    ],
    "option4": [
      {
        "value": "star-head",
        "label": "Star Head",
        "modifier": 0
      },
      {
        "value": "hex-head",
        "label": "Hexagonal Head",
        "modifier": 0
      }
    ]
  },
  "star-head-cortical-screw": {
    "basePrice": 0.99,
    "optionLabels": {
      "material": "Material",
      "diameter": "Diameter",
      "option3": "Length",
      "option4": "Head Type"
    },
    "material": [
      {
        "value": "stainless-steel",
        "label": "316L Stainless Steel",
        "modifier": 0
      },
      {
        "value": "titanium",
        "label": "Titanium Grade (Ti-6Al-4V)",
        "modifier": 0.5
      }
    ],
    "diameter": [
      {
        "value": "all",
        "label": "All Diameters",
        "modifier": 0
      },
      {
        "value": "2.0",
        "label": "2.0 mm",
        "modifier": 0,
        "lengths": [
          {
            "value": "all",
            "label": "All Lengths",
            "modifier": 0
          },
          {
            "value": "6",
            "label": "6 mm",
            "modifier": 0
          },
          {
            "value": "8",
            "label": "8 mm",
            "modifier": 0
          },
          {
            "value": "10",
            "label": "10 mm",
            "modifier": 0
          },
          {
            "value": "12",
            "label": "12 mm",
            "modifier": 0
          },
          {
            "value": "14",
            "label": "14 mm",
            "modifier": 0
          },
          {
            "value": "16",
            "label": "16 mm",
            "modifier": 0
          },
          {
            "value": "18",
            "label": "18 mm",
            "modifier": 0
          },
          {
            "value": "20",
            "label": "20 mm",
            "modifier": 0
          },
          {
            "value": "22",
            "label": "22 mm",
            "modifier": 0
          },
          {
            "value": "24",
            "label": "24 mm",
            "modifier": 0
          },
          {
            "value": "26",
            "label": "26 mm",
            "modifier": 0
          },
          {
            "value": "28",
            "label": "28 mm",
            "modifier": 0
          },
          {
            "value": "30",
            "label": "30 mm",
            "modifier": 0
          },
          {
            "value": "32",
            "label": "32 mm",
            "modifier": 0
          },
          {
            "value": "34",
            "label": "34 mm",
            "modifier": 0
          },
          {
            "value": "36",
            "label": "36 mm",
            "modifier": 0
          },
          {
            "value": "38",
            "label": "38 mm",
            "modifier": 0
          },
          {
            "value": "40",
            "label": "40 mm",
            "modifier": 0
          }
        ]
      },
      {
        "value": "2.4",
        "label": "2.4 mm",
        "modifier": 0,
        "lengths": [
          {
            "value": "all",
            "label": "All Lengths",
            "modifier": 0
          },
          {
            "value": "6",
            "label": "6 mm",
            "modifier": 0
          },
          {
            "value": "8",
            "label": "8 mm",
            "modifier": 0
          },
          {
            "value": "10",
            "label": "10 mm",
            "modifier": 0
          },
          {
            "value": "12",
            "label": "12 mm",
            "modifier": 0
          },
          {
            "value": "14",
            "label": "14 mm",
            "modifier": 0
          },
          {
            "value": "16",
            "label": "16 mm",
            "modifier": 0
          },
          {
            "value": "18",
            "label": "18 mm",
            "modifier": 0
          },
          {
            "value": "20",
            "label": "20 mm",
            "modifier": 0
          },
          {
            "value": "22",
            "label": "22 mm",
            "modifier": 0
          },
          {
            "value": "24",
            "label": "24 mm",
            "modifier": 0
          },
          {
            "value": "26",
            "label": "26 mm",
            "modifier": 0
          },
          {
            "value": "28",
            "label": "28 mm",
            "modifier": 0
          },
          {
            "value": "30",
            "label": "30 mm",
            "modifier": 0
          },
          {
            "value": "32",
            "label": "32 mm",
            "modifier": 0
          },
          {
            "value": "34",
            "label": "34 mm",
            "modifier": 0
          },
          {
            "value": "36",
            "label": "36 mm",
            "modifier": 0
          },
          {
            "value": "38",
            "label": "38 mm",
            "modifier": 0
          },
          {
            "value": "40",
            "label": "40 mm",
            "modifier": 0
          }
        ]
      },
      {
        "value": "2.7",
        "label": "2.7 mm",
        "modifier": 0,
        "lengths": [
          {
            "value": "all",
            "label": "All Lengths",
            "modifier": 0
          },
          {
            "value": "6",
            "label": "6 mm",
            "modifier": 0
          },
          {
            "value": "8",
            "label": "8 mm",
            "modifier": 0
          },
          {
            "value": "10",
            "label": "10 mm",
            "modifier": 0
          },
          {
            "value": "12",
            "label": "12 mm",
            "modifier": 0
          },
          {
            "value": "14",
            "label": "14 mm",
            "modifier": 0
          },
          {
            "value": "16",
            "label": "16 mm",
            "modifier": 0
          },
          {
            "value": "18",
            "label": "18 mm",
            "modifier": 0
          },
          {
            "value": "20",
            "label": "20 mm",
            "modifier": 0
          },
          {
            "value": "22",
            "label": "22 mm",
            "modifier": 0
          },
          {
            "value": "24",
            "label": "24 mm",
            "modifier": 0
          },
          {
            "value": "26",
            "label": "26 mm",
            "modifier": 0
          },
          {
            "value": "28",
            "label": "28 mm",
            "modifier": 0
          },
          {
            "value": "30",
            "label": "30 mm",
            "modifier": 0
          },
          {
            "value": "32",
            "label": "32 mm",
            "modifier": 0
          },
          {
            "value": "34",
            "label": "34 mm",
            "modifier": 0
          },
          {
            "value": "36",
            "label": "36 mm",
            "modifier": 0
          },
          {
            "value": "38",
            "label": "38 mm",
            "modifier": 0
          },
          {
            "value": "40",
            "label": "40 mm",
            "modifier": 0
          }
        ]
      },
      {
        "value": "3.5",
        "label": "3.5 mm",
        "modifier": 0,
        "lengths": [
          {
            "value": "all",
            "label": "All Lengths",
            "modifier": 0
          },
          {
            "value": "10",
            "label": "10 mm",
            "modifier": 0
          },
          {
            "value": "12",
            "label": "12 mm",
            "modifier": 0
          },
          {
            "value": "14",
            "label": "14 mm",
            "modifier": 0
          },
          {
            "value": "16",
            "label": "16 mm",
            "modifier": 0
          },
          {
            "value": "18",
            "label": "18 mm",
            "modifier": 0
          },
          {
            "value": "20",
            "label": "20 mm",
            "modifier": 0
          },
          {
            "value": "22",
            "label": "22 mm",
            "modifier": 0
          },
          {
            "value": "24",
            "label": "24 mm",
            "modifier": 0
          },
          {
            "value": "26",
            "label": "26 mm",
            "modifier": 0
          },
          {
            "value": "28",
            "label": "28 mm",
            "modifier": 0
          },
          {
            "value": "30",
            "label": "30 mm",
            "modifier": 0
          },
          {
            "value": "32",
            "label": "32 mm",
            "modifier": 0
          },
          {
            "value": "34",
            "label": "34 mm",
            "modifier": 0
          },
          {
            "value": "36",
            "label": "36 mm",
            "modifier": 0
          },
          {
            "value": "38",
            "label": "38 mm",
            "modifier": 0
          },
          {
            "value": "40",
            "label": "40 mm",
            "modifier": 0
          },
          {
            "value": "42",
            "label": "42 mm",
            "modifier": 0
          },
          {
            "value": "44",
            "label": "44 mm",
            "modifier": 0
          },
          {
            "value": "46",
            "label": "46 mm",
            "modifier": 0
          },
          {
            "value": "48",
            "label": "48 mm",
            "modifier": 0
          },
          {
            "value": "50",
            "label": "50 mm",
            "modifier": 0
          },
          {
            "value": "52",
            "label": "52 mm",
            "modifier": 0
          },
          {
            "value": "54",
            "label": "54 mm",
            "modifier": 0
          },
          {
            "value": "56",
            "label": "56 mm",
            "modifier": 0
          },
          {
            "value": "58",
            "label": "58 mm",
            "modifier": 0
          },
          {
            "value": "60",
            "label": "60 mm",
            "modifier": 0
          }
        ]
      },
      {
        "value": "4.5",
        "label": "4.5 mm",
        "modifier": 0.3,
        "lengths": [
          {
            "value": "all",
            "label": "All Lengths",
            "modifier": 0
          },
          {
            "value": "14",
            "label": "14 mm",
            "modifier": 0
          },
          {
            "value": "16",
            "label": "16 mm",
            "modifier": 0
          },
          {
            "value": "18",
            "label": "18 mm",
            "modifier": 0
          },
          {
            "value": "20",
            "label": "20 mm",
            "modifier": 0
          },
          {
            "value": "22",
            "label": "22 mm",
            "modifier": 0
          },
          {
            "value": "24",
            "label": "24 mm",
            "modifier": 0
          },
          {
            "value": "26",
            "label": "26 mm",
            "modifier": 0
          },
          {
            "value": "28",
            "label": "28 mm",
            "modifier": 0
          },
          {
            "value": "30",
            "label": "30 mm",
            "modifier": 0
          },
          {
            "value": "32",
            "label": "32 mm",
            "modifier": 0
          },
          {
            "value": "34",
            "label": "34 mm",
            "modifier": 0
          },
          {
            "value": "36",
            "label": "36 mm",
            "modifier": 0
          },
          {
            "value": "38",
            "label": "38 mm",
            "modifier": 0
          },
          {
            "value": "40",
            "label": "40 mm",
            "modifier": 0
          },
          {
            "value": "42",
            "label": "42 mm",
            "modifier": 0
          },
          {
            "value": "44",
            "label": "44 mm",
            "modifier": 0
          },
          {
            "value": "46",
            "label": "46 mm",
            "modifier": 0
          },
          {
            "value": "48",
            "label": "48 mm",
            "modifier": 0
          },
          {
            "value": "50",
            "label": "50 mm",
            "modifier": 0
          },
          {
            "value": "52",
            "label": "52 mm",
            "modifier": 0
          },
          {
            "value": "54",
            "label": "54 mm",
            "modifier": 0
          },
          {
            "value": "56",
            "label": "56 mm",
            "modifier": 0
          },
          {
            "value": "58",
            "label": "58 mm",
            "modifier": 0
          },
          {
            "value": "60",
            "label": "60 mm",
            "modifier": 0
          },
          {
            "value": "62",
            "label": "62 mm",
            "modifier": 0
          },
          {
            "value": "64",
            "label": "64 mm",
            "modifier": 0
          },
          {
            "value": "66",
            "label": "66 mm",
            "modifier": 0
          },
          {
            "value": "68",
            "label": "68 mm",
            "modifier": 0
          },
          {
            "value": "70",
            "label": "70 mm",
            "modifier": 0
          },
          {
            "value": "72",
            "label": "72 mm",
            "modifier": 0
          },
          {
            "value": "74",
            "label": "74 mm",
            "modifier": 0
          },
          {
            "value": "76",
            "label": "76 mm",
            "modifier": 0
          },
          {
            "value": "78",
            "label": "78 mm",
            "modifier": 0
          },
          {
            "value": "80",
            "label": "80 mm",
            "modifier": 0
          },
          {
            "value": "82",
            "label": "82 mm",
            "modifier": 0
          },
          {
            "value": "84",
            "label": "84 mm",
            "modifier": 0
          },
          {
            "value": "86",
            "label": "86 mm",
            "modifier": 0
          },
          {
            "value": "88",
            "label": "88 mm",
            "modifier": 0
          },
          {
            "value": "90",
            "label": "90 mm",
            "modifier": 0
          },
          {
            "value": "92",
            "label": "92 mm",
            "modifier": 0
          },
          {
            "value": "94",
            "label": "94 mm",
            "modifier": 0
          },
          {
            "value": "96",
            "label": "96 mm",
            "modifier": 0
          },
          {
            "value": "98",
            "label": "98 mm",
            "modifier": 0
          },
          {
            "value": "100",
            "label": "100 mm",
            "modifier": 0
          }
        ]
      }
    ],
    "option4": [
      {
        "value": "star-head",
        "label": "Star Head",
        "modifier": 0
      },
      {
        "value": "hex-head",
        "label": "Hexagonal Head",
        "modifier": 0
      }
    ]
  },
  "cannulated-herbert-screw": {
    "basePrice": 1.99,
    "optionLabels": {
      "material": "Material",
      "diameter": "Diameter",
      "option3": "Length",
      "option4": "Packaging & Sterility"
    },
    "material": [
      {
        "value": "stainless-steel",
        "label": "Stainless Steel 316L",
        "modifier": 0
      },
      {
        "value": "titanium",
        "label": "Titanium Grade (Ti-6Al-4V)",
        "modifier": 2
      }
    ],
    "diameter": [
      {
        "value": "all",
        "label": "All Diameters",
        "modifier": 0
      },
      {
        "value": "2.5",
        "label": "2.5 mm",
        "modifier": 0,
        "lengths": [
          {
            "value": "all",
            "label": "All Lengths",
            "modifier": 0
          },
          {
            "value": "10",
            "label": "10 mm",
            "modifier": 0
          },
          {
            "value": "14",
            "label": "14 mm",
            "modifier": 0
          },
          {
            "value": "16",
            "label": "16 mm",
            "modifier": 0
          },
          {
            "value": "18",
            "label": "18 mm",
            "modifier": 0
          },
          {
            "value": "20",
            "label": "20 mm",
            "modifier": 0
          },
          {
            "value": "22",
            "label": "22 mm",
            "modifier": 0
          },
          {
            "value": "24",
            "label": "24 mm",
            "modifier": 0
          }
        ]
      },
      {
        "value": "3.0",
        "label": "3 mm",
        "modifier": 0,
        "lengths": [
          {
            "value": "all",
            "label": "All Lengths",
            "modifier": 0
          },
          {
            "value": "18",
            "label": "18 mm",
            "modifier": 0
          },
          {
            "value": "20",
            "label": "20 mm",
            "modifier": 0
          },
          {
            "value": "22",
            "label": "22 mm",
            "modifier": 0
          },
          {
            "value": "24",
            "label": "24 mm",
            "modifier": 0
          },
          {
            "value": "26",
            "label": "26 mm",
            "modifier": 0
          },
          {
            "value": "28",
            "label": "28 mm",
            "modifier": 0
          },
          {
            "value": "30",
            "label": "30 mm",
            "modifier": 0
          }
        ]
      },
      {
        "value": "3.5",
        "label": "3.5 mm",
        "modifier": 0,
        "lengths": [
          {
            "value": "all",
            "label": "All Lengths",
            "modifier": 0
          },
          {
            "value": "24",
            "label": "24 mm",
            "modifier": 0
          },
          {
            "value": "26",
            "label": "26 mm",
            "modifier": 0
          },
          {
            "value": "28",
            "label": "28 mm",
            "modifier": 0
          },
          {
            "value": "30",
            "label": "30 mm",
            "modifier": 0
          },
          {
            "value": "32",
            "label": "32 mm",
            "modifier": 0
          },
          {
            "value": "34",
            "label": "34 mm",
            "modifier": 0
          },
          {
            "value": "36",
            "label": "36 mm",
            "modifier": 0
          }
        ]
      },
      {
        "value": "4.5",
        "label": "4.5 mm",
        "modifier": 1.5,
        "lengths": [
          {
            "value": "all",
            "label": "All Lengths",
            "modifier": 0
          },
          {
            "value": "30",
            "label": "30 mm",
            "modifier": 0
          },
          {
            "value": "35",
            "label": "35 mm",
            "modifier": 0
          },
          {
            "value": "40",
            "label": "40 mm",
            "modifier": 0
          },
          {
            "value": "45",
            "label": "45 mm",
            "modifier": 0
          },
          {
            "value": "50",
            "label": "50 mm",
            "modifier": 0
          }
        ]
      },
      {
        "value": "5.5",
        "label": "5.5 mm",
        "modifier": 1.5,
        "lengths": [
          {
            "value": "all",
            "label": "All Lengths",
            "modifier": 0
          },
          {
            "value": "40",
            "label": "40 mm",
            "modifier": 0
          },
          {
            "value": "45",
            "label": "45 mm",
            "modifier": 0
          },
          {
            "value": "50",
            "label": "50 mm",
            "modifier": 0
          },
          {
            "value": "55",
            "label": "55 mm",
            "modifier": 0
          },
          {
            "value": "60",
            "label": "60 mm",
            "modifier": 0
          }
        ]
      },
      {
        "value": "6.5",
        "label": "6.5 mm",
        "modifier": 1.5,
        "lengths": [
          {
            "value": "all",
            "label": "All Lengths",
            "modifier": 0
          },
          {
            "value": "50",
            "label": "50 mm",
            "modifier": 0
          },
          {
            "value": "55",
            "label": "55 mm",
            "modifier": 0
          },
          {
            "value": "60",
            "label": "60 mm",
            "modifier": 0
          },
          {
            "value": "65",
            "label": "65 mm",
            "modifier": 0
          },
          {
            "value": "70",
            "label": "70 mm",
            "modifier": 0
          },
          {
            "value": "75",
            "label": "75 mm",
            "modifier": 0
          }
        ]
      }
    ],
    "option3": [
      {
        "value": "all",
        "label": "All Lengths",
        "modifier": 0
      },
      {
        "value": "14",
        "label": "14 mm",
        "modifier": 0
      },
      {
        "value": "16",
        "label": "16 mm",
        "modifier": 0
      },
      {
        "value": "18",
        "label": "18 mm",
        "modifier": 0
      },
      {
        "value": "20",
        "label": "20 mm",
        "modifier": 0
      },
      {
        "value": "22",
        "label": "22 mm",
        "modifier": 0
      },
      {
        "value": "24",
        "label": "24 mm",
        "modifier": 0
      },
      {
        "value": "26",
        "label": "26 mm",
        "modifier": 0
      },
      {
        "value": "28",
        "label": "28 mm",
        "modifier": 0
      },
      {
        "value": "30",
        "label": "30 mm",
        "modifier": 0
      },
      {
        "value": "32",
        "label": "32 mm",
        "modifier": 0
      },
      {
        "value": "34",
        "label": "34 mm",
        "modifier": 0
      },
      {
        "value": "36",
        "label": "36 mm",
        "modifier": 0
      },
      {
        "value": "40",
        "label": "40 mm",
        "modifier": 0
      },
      {
        "value": "45",
        "label": "45 mm",
        "modifier": 0
      },
      {
        "value": "50",
        "label": "50 mm",
        "modifier": 0
      },
      {
        "value": "55",
        "label": "55 mm",
        "modifier": 0
      },
      {
        "value": "60",
        "label": "60 mm",
        "modifier": 0
      },
      {
        "value": "65",
        "label": "65 mm",
        "modifier": 0
      },
      {
        "value": "70",
        "label": "70 mm",
        "modifier": 0
      },
      {
        "value": "75",
        "label": "75 mm",
        "modifier": 0
      }
    ],
    "option4": [
      {
        "value": "bulk",
        "label": "Standard Packing (Non-Sterile, Bulk Box)",
        "modifier": 0
      },
      {
        "value": "sterile",
        "label": "Sterile Packing (Individually Wrapped, Ready for OR)",
        "modifier": 1
      }
    ]
  },
  "lateral-tibial-head-buttress-locking-plate": {
    "basePrice": 22,
    "optionLabels": {
      "material": "Material",
      "diameter": "Diameter",
      "option3": "Holes",
      "option4": "Side"
    },
    "material": [
      {
        "value": "stainless-steel",
        "label": "Stainless Steel 316L",
        "modifier": 0
      },
      {
        "value": "titanium",
        "label": "Titanium (Ti-6Al-4V)",
        "modifier": 7
      }
    ],
    "diameter": [
      {
        "value": "all",
        "label": "All Diameters",
        "modifier": 0
      },
      {
        "value": "4.5",
        "label": "4.5 mm",
        "modifier": 0
      },
      {
        "value": "5.0",
        "label": "5.0 mm",
        "modifier": 0
      }
    ],
    "option3": [
      {
        "value": "all",
        "label": "All Hole Configurations",
        "modifier": 0
      },
      {
        "value": "4",
        "label": "4 Holes",
        "modifier": 0
      },
      {
        "value": "6",
        "label": "6 Holes",
        "modifier": 8
      },
      {
        "value": "8",
        "label": "8 Holes",
        "modifier": 16
      },
      {
        "value": "10",
        "label": "10 Holes",
        "modifier": 24
      },
      {
        "value": "12",
        "label": "12 Holes",
        "modifier": 32
      }
    ],
    "option4": [
      {
        "value": "left",
        "label": "Left",
        "modifier": 0
      },
      {
        "value": "right",
        "label": "Right",
        "modifier": 0
      }
    ]
  },
  "distal-clavicular-locking-plate": {
    "basePrice": 16,
    "optionLabels": {
      "material": "Material",
      "diameter": "Diameter",
      "option3": "Holes",
      "option4": "Side"
    },
    "material": [
      {
        "value": "stainless-steel",
        "label": "Stainless Steel 316L",
        "modifier": 0
      },
      {
        "value": "titanium",
        "label": "Titanium (Ti-6Al-4V)",
        "modifier": 6
      }
    ],
    "diameter": [
      {
        "value": "2.7",
        "label": "2.7 mm",
        "modifier": 0
      }
    ],
    "option3": [
      {
        "value": "all",
        "label": "All Hole Configurations",
        "modifier": 0
      },
      {
        "value": "4",
        "label": "4 Holes",
        "modifier": 0
      },
      {
        "value": "5",
        "label": "5 Holes",
        "modifier": 8
      },
      {
        "value": "6",
        "label": "6 Holes",
        "modifier": 16
      },
      {
        "value": "7",
        "label": "7 Holes",
        "modifier": 24
      },
      {
        "value": "8",
        "label": "8 Holes",
        "modifier": 32
      }
    ],
    "option4": [
      {
        "value": "all",
        "label": "All Sides (Left + Right)",
        "modifier": 0
      },
      {
        "value": "left",
        "label": "Left",
        "modifier": 0
      },
      {
        "value": "right",
        "label": "Right",
        "modifier": 0
      }
    ]
  },
  "proximal-humeral-locking-plate-3-5mm": {
    "basePrice": 20,
    "optionLabels": {
      "material": "Material",
      "diameter": "Diameter",
      "option3": "Holes",
      "option4": "Packaging & Sterility"
    },
    "material": [
      {
        "value": "stainless-steel",
        "label": "Stainless Steel 316L",
        "modifier": 0
      },
      {
        "value": "titanium",
        "label": "Titanium (Ti-6Al-4V)",
        "modifier": 7
      }
    ],
    "diameter": [
      {
        "value": "3.5",
        "label": "3.5 mm",
        "modifier": 0
      }
    ],
    "option3": [
      {
        "value": "all",
        "label": "All Hole Configurations",
        "modifier": 0
      },
      {
        "value": "3",
        "label": "3 Holes",
        "modifier": 0
      },
      {
        "value": "4",
        "label": "4 Holes",
        "modifier": 8
      },
      {
        "value": "5",
        "label": "5 Holes",
        "modifier": 16
      },
      {
        "value": "6",
        "label": "6 Holes",
        "modifier": 24
      },
      {
        "value": "8",
        "label": "8 Holes",
        "modifier": 32
      }
    ],
    "option4": [
      {
        "value": "bulk",
        "label": "Standard Packing (Non-Sterile, Bulk Box)",
        "modifier": 0
      },
      {
        "value": "sterile",
        "label": "Sterile Packing (Individually Wrapped, Ready for OR)",
        "modifier": 1
      }
    ]
  },
  "clavicle-s-safety-locking-plate-3-5mm": {
    "basePrice": 18,
    "optionLabels": {
      "material": "Material",
      "diameter": "Diameter",
      "option3": "Holes",
      "option4": "Side"
    },
    "material": [
      {
        "value": "stainless-steel",
        "label": "Stainless Steel 316L",
        "modifier": 0
      },
      {
        "value": "titanium",
        "label": "Titanium (Ti-6Al-4V)",
        "modifier": 6
      }
    ],
    "diameter": [
      {
        "value": "3.5",
        "label": "3.5 mm",
        "modifier": 0
      }
    ],
    "option3": [
      {
        "value": "all",
        "label": "All Hole Configurations",
        "modifier": 0
      },
      {
        "value": "6",
        "label": "6 Holes",
        "modifier": 0
      },
      {
        "value": "7",
        "label": "7 Holes",
        "modifier": 8
      },
      {
        "value": "8",
        "label": "8 Holes",
        "modifier": 16
      },
      {
        "value": "9",
        "label": "9 Holes",
        "modifier": 24
      },
      {
        "value": "10",
        "label": "10 Holes",
        "modifier": 32
      }
    ],
    "option4": [
      {
        "value": "all",
        "label": "All Sides (Left + Right)",
        "modifier": 0
      },
      {
        "value": "left",
        "label": "Left",
        "modifier": 0
      },
      {
        "value": "right",
        "label": "Right",
        "modifier": 0
      }
    ]
  },
  "one-third-tubular-locking-plate": {
    "basePrice": 9,
    "optionLabels": {
      "material": "Material",
      "diameter": "Diameter",
      "option3": "Holes",
      "option4": "Packaging & Sterility"
    },
    "material": [
      {
        "value": "stainless-steel",
        "label": "Stainless Steel 316L",
        "modifier": 0
      },
      {
        "value": "titanium",
        "label": "Titanium (Ti-6Al-4V)",
        "modifier": 4
      }
    ],
    "diameter": [
      {
        "value": "3.5",
        "label": "3.5 mm",
        "modifier": 0
      }
    ],
    "option3": [
      {
        "value": "all",
        "label": "All Hole Configurations",
        "modifier": 0
      },
      {
        "value": "4",
        "label": "4 Holes",
        "modifier": 0
      },
      {
        "value": "6",
        "label": "6 Holes",
        "modifier": 8
      },
      {
        "value": "8",
        "label": "8 Holes",
        "modifier": 16
      },
      {
        "value": "10",
        "label": "10 Holes",
        "modifier": 24
      },
      {
        "value": "12",
        "label": "12 Holes",
        "modifier": 32
      }
    ],
    "option4": [
      {
        "value": "bulk",
        "label": "Standard Packing (Non-Sterile, Bulk Box)",
        "modifier": 0
      },
      {
        "value": "sterile",
        "label": "Sterile Packing (Individually Wrapped, Ready for OR)",
        "modifier": 1
      }
    ]
  },
  "distal-femoral-locking-plate": {
    "basePrice": 26,
    "optionLabels": {
      "material": "Material",
      "diameter": "Diameter",
      "option3": "Holes",
      "option4": "Side"
    },
    "material": [
      {
        "value": "stainless-steel",
        "label": "Stainless Steel 316L",
        "modifier": 0
      },
      {
        "value": "titanium",
        "label": "Titanium (Ti-6Al-4V)",
        "modifier": 8
      }
    ],
    "diameter": [
      {
        "value": "all",
        "label": "All Diameters",
        "modifier": 0
      },
      {
        "value": "4.5",
        "label": "4.5 mm",
        "modifier": 0
      },
      {
        "value": "5.0",
        "label": "5.0 mm",
        "modifier": 0
      }
    ],
    "option3": [
      {
        "value": "all",
        "label": "All Hole Configurations",
        "modifier": 0
      },
      {
        "value": "4",
        "label": "4 Holes",
        "modifier": 0
      },
      {
        "value": "6",
        "label": "6 Holes",
        "modifier": 8
      },
      {
        "value": "8",
        "label": "8 Holes",
        "modifier": 16
      },
      {
        "value": "10",
        "label": "10 Holes",
        "modifier": 24
      },
      {
        "value": "12",
        "label": "12 Holes",
        "modifier": 32
      }
    ],
    "option4": [
      {
        "value": "all",
        "label": "All Sides (Left + Right)",
        "modifier": 0
      },
      {
        "value": "left",
        "label": "Left",
        "modifier": 0
      },
      {
        "value": "right",
        "label": "Right",
        "modifier": 0
      }
    ]
  },
  "medial-distal-tibia-locking-plate-5-0mm": {
    "basePrice": 25,
    "optionLabels": {
      "material": "Material",
      "diameter": "Diameter",
      "option3": "Holes",
      "option4": "Side"
    },
    "material": [
      {
        "value": "stainless-steel",
        "label": "Stainless Steel 316L",
        "modifier": 0
      },
      {
        "value": "titanium",
        "label": "Titanium (Ti-6Al-4V)",
        "modifier": 8
      }
    ],
    "diameter": [
      {
        "value": "5.0",
        "label": "5.0 mm",
        "modifier": 0
      }
    ],
    "option3": [
      {
        "value": "all",
        "label": "All Hole Configurations",
        "modifier": 0
      },
      {
        "value": "4",
        "label": "4 Holes",
        "modifier": 0
      },
      {
        "value": "6",
        "label": "6 Holes",
        "modifier": 8
      },
      {
        "value": "8",
        "label": "8 Holes",
        "modifier": 16
      },
      {
        "value": "10",
        "label": "10 Holes",
        "modifier": 24
      },
      {
        "value": "12",
        "label": "12 Holes",
        "modifier": 32
      }
    ],
    "option4": [
      {
        "value": "all",
        "label": "All Sides (Left + Right)",
        "modifier": 0
      },
      {
        "value": "left",
        "label": "Left",
        "modifier": 0
      },
      {
        "value": "right",
        "label": "Right",
        "modifier": 0
      }
    ]
  },
  "t-type-locking-plate-titanium": {
    "basePrice": 12,
    "optionLabels": {
      "material": "Material",
      "diameter": "Diameter",
      "option3": "Holes",
      "option4": "Packaging & Sterility"
    },
    "material": [
      {
        "value": "titanium",
        "label": "Titanium (Ti-6Al-4V)",
        "modifier": 0
      }
    ],
    "diameter": [
      {
        "value": "all",
        "label": "All Diameters",
        "modifier": 0
      },
      {
        "value": "2.0",
        "label": "2.0 mm",
        "modifier": 0
      },
      {
        "value": "2.7",
        "label": "2.7 mm",
        "modifier": 2
      },
      {
        "value": "3.5",
        "label": "3.5 mm",
        "modifier": 5
      }
    ],
    "option3": [
      {
        "value": "all",
        "label": "All Hole Configurations",
        "modifier": 0
      },
      {
        "value": "3",
        "label": "3+3 Holes",
        "modifier": 0
      },
      {
        "value": "4",
        "label": "3+4 Holes",
        "modifier": 3
      },
      {
        "value": "5",
        "label": "3+5 Holes",
        "modifier": 6
      },
      {
        "value": "6",
        "label": "3+6 Holes",
        "modifier": 9
      }
    ],
    "option4": [
      {
        "value": "bulk",
        "label": "Standard Packing (Non-Sterile, Bulk Box)",
        "modifier": 0
      },
      {
        "value": "sterile",
        "label": "Sterile Packing (Individually Wrapped, Ready for OR)",
        "modifier": 1
      }
    ]
  },
  "straight-reconstruction-locking-plate": {
    "basePrice": 17,
    "optionLabels": {
      "material": "Material",
      "diameter": "Diameter",
      "option3": "Holes",
      "option4": "Packaging & Sterility"
    },
    "material": [
      {
        "value": "stainless-steel",
        "label": "Stainless Steel 316L",
        "modifier": 0
      },
      {
        "value": "titanium",
        "label": "Titanium (Ti-6Al-4V)",
        "modifier": 6
      }
    ],
    "diameter": [
      {
        "value": "all",
        "label": "All Diameters",
        "modifier": 0
      },
      {
        "value": "3.5",
        "label": "3.5 mm",
        "modifier": 0
      },
      {
        "value": "4.5",
        "label": "4.5 mm",
        "modifier": 4
      }
    ],
    "option3": [
      {
        "value": "all",
        "label": "All Hole Configurations",
        "modifier": 0
      },
      {
        "value": "5",
        "label": "5 Holes",
        "modifier": 0
      },
      {
        "value": "6",
        "label": "6 Holes",
        "modifier": 8
      },
      {
        "value": "8",
        "label": "8 Holes",
        "modifier": 16
      },
      {
        "value": "10",
        "label": "10 Holes",
        "modifier": 24
      },
      {
        "value": "12",
        "label": "12 Holes",
        "modifier": 32
      }
    ],
    "option4": [
      {
        "value": "bulk",
        "label": "Standard Packing (Non-Sterile, Bulk Box)",
        "modifier": 0
      },
      {
        "value": "sterile",
        "label": "Sterile Packing (Individually Wrapped, Ready for OR)",
        "modifier": 1
      }
    ]
  },
  "lcp-distal-radius-volar-plate-2-7mm": {
    "basePrice": 15,
    "optionLabels": {
      "material": "Material",
      "diameter": "Diameter",
      "option3": "Holes",
      "option4": "Side"
    },
    "material": [
      {
        "value": "stainless-steel",
        "label": "Stainless Steel 316L",
        "modifier": 0
      },
      {
        "value": "titanium",
        "label": "Titanium (Ti-6Al-4V)",
        "modifier": 5
      }
    ],
    "diameter": [
      {
        "value": "2.7",
        "label": "2.7 mm",
        "modifier": 0
      }
    ],
    "option3": [
      {
        "value": "all",
        "label": "All Hole Configurations",
        "modifier": 0
      },
      {
        "value": "2",
        "label": "2 Holes",
        "modifier": 0
      },
      {
        "value": "3",
        "label": "3 Holes",
        "modifier": 8
      },
      {
        "value": "4",
        "label": "4 Holes",
        "modifier": 16
      },
      {
        "value": "5",
        "label": "5 Holes",
        "modifier": 24
      }
    ],
    "option4": [
      {
        "value": "all",
        "label": "All Sides (Left + Right)",
        "modifier": 0
      },
      {
        "value": "left",
        "label": "Left",
        "modifier": 0
      },
      {
        "value": "right",
        "label": "Right",
        "modifier": 0
      }
    ]
  },
  "one-third-tubular-trauma-locking-plate": {
    "basePrice": 9,
    "optionLabels": {
      "material": "Material",
      "diameter": "Diameter",
      "option3": "Holes",
      "option4": "Packaging & Sterility"
    },
    "material": [
      {
        "value": "stainless-steel",
        "label": "Stainless Steel 316L",
        "modifier": 0
      },
      {
        "value": "titanium",
        "label": "Titanium (Ti-6Al-4V)",
        "modifier": 5
      }
    ],
    "diameter": [
      {
        "value": "3.5",
        "label": "3.5 mm",
        "modifier": 0
      }
    ],
    "option3": [
      {
        "value": "all",
        "label": "All Hole Configurations",
        "modifier": 0
      },
      {
        "value": "4",
        "label": "4 Holes",
        "modifier": 0
      },
      {
        "value": "6",
        "label": "6 Holes",
        "modifier": 8
      },
      {
        "value": "8",
        "label": "8 Holes",
        "modifier": 16
      },
      {
        "value": "10",
        "label": "10 Holes",
        "modifier": 24
      },
      {
        "value": "12",
        "label": "12 Holes",
        "modifier": 32
      }
    ],
    "option4": [
      {
        "value": "bulk",
        "label": "Standard Packing (Non-Sterile, Bulk Box)",
        "modifier": 0
      },
      {
        "value": "sterile",
        "label": "Sterile Packing (Individually Wrapped, Ready for OR)",
        "modifier": 1
      }
    ]
  },
  "mini-fragment-straight-bridge-plate": {
    "basePrice": 8,
    "optionLabels": {
      "material": "Material",
      "diameter": "Diameter",
      "option3": "Holes",
      "option4": "Packaging & Sterility"
    },
    "material": [
      {
        "value": "titanium",
        "label": "Titanium (Ti-6Al-4V)",
        "modifier": 0
      }
    ],
    "diameter": [
      {
        "value": "all",
        "label": "All Diameters",
        "modifier": 0
      },
      {
        "value": "2.0",
        "label": "2.0 mm",
        "modifier": 0
      },
      {
        "value": "2.7",
        "label": "2.7 mm",
        "modifier": 3
      }
    ],
    "option3": [
      {
        "value": "all",
        "label": "All Hole Configurations",
        "modifier": 0
      },
      {
        "value": "5",
        "label": "5 Holes",
        "modifier": 0
      },
      {
        "value": "6",
        "label": "6 Holes",
        "modifier": 8
      },
      {
        "value": "7",
        "label": "7 Holes",
        "modifier": 16
      },
      {
        "value": "8",
        "label": "8 Holes",
        "modifier": 24
      },
      {
        "value": "9",
        "label": "9 Holes",
        "modifier": 32
      },
      {
        "value": "10",
        "label": "10 Holes",
        "modifier": 40
      }
    ],
    "option4": [
      {
        "value": "bulk",
        "label": "Standard Packing (Non-Sterile, Bulk Box)",
        "modifier": 0
      },
      {
        "value": "sterile",
        "label": "Sterile Packing (Individually Wrapped, Ready for OR)",
        "modifier": 1
      }
    ]
  },
  "tplo-arc-plate-veterinary": {
    "basePrice": 22,
    "optionLabels": {
      "material": "Material",
      "diameter": "Diameter",
      "option3": "Side",
      "option4": "Packaging & Sterility"
    },
    "material": [
      {
        "value": "stainless-steel",
        "label": "Stainless Steel 316L",
        "modifier": 0
      },
      {
        "value": "titanium",
        "label": "Titanium (Ti-6Al-4V)",
        "modifier": 8
      }
    ],
    "diameter": [
      {
        "value": "3.5",
        "label": "3.5 mm",
        "modifier": 0
      }
    ],
    "option3": [
      {
        "value": "all",
        "label": "All Sides (Left + Right)",
        "modifier": 0
      },
      {
        "value": "left",
        "label": "Left",
        "modifier": 0
      },
      {
        "value": "right",
        "label": "Right",
        "modifier": 0
      }
    ],
    "option4": [
      {
        "value": "bulk",
        "label": "Standard Packing (Non-Sterile, Bulk Box)",
        "modifier": 0
      },
      {
        "value": "sterile",
        "label": "Sterile Packing (Individually Wrapped, Ready for OR)",
        "modifier": 2
      }
    ]
  },
  "acl-peek-interference-screw-9mm": {
    "basePrice": 24.99,
    "optionLabels": {
      "material": "Material",
      "diameter": "Diameter",
      "option3": "Length",
      "option4": "Packaging & Sterility"
    },
    "material": [
      {
        "value": "peek",
        "label": "PEEK Polymer",
        "modifier": 0
      }
    ],
    "diameter": [
      {
        "value": "all",
        "label": "All Diameters",
        "modifier": 0
      },
      {
        "value": "7",
        "label": "7 mm",
        "modifier": 0
      },
      {
        "value": "8",
        "label": "8 mm",
        "modifier": 0
      },
      {
        "value": "9",
        "label": "9 mm",
        "modifier": 0
      }
    ],
    "option3": [
      {
        "value": "all",
        "label": "All Available Lengths",
        "modifier": 0
      },
      {
        "value": "20",
        "label": "20 mm",
        "modifier": 0
      },
      {
        "value": "25",
        "label": "25 mm",
        "modifier": 0
      },
      {
        "value": "30",
        "label": "30 mm",
        "modifier": 0
      },
      {
        "value": "35",
        "label": "35 mm",
        "modifier": 0
      }
    ],
    "option4": [
      {
        "value": "bulk",
        "label": "Standard Packing (Non-Sterile, Bulk Box)",
        "modifier": 0
      },
      {
        "value": "sterile",
        "label": "Sterile Packing (Individually Wrapped, Ready for OR)",
        "modifier": 1
      }
    ]
  },
  "acl-titanium-interference-screw": {
    "basePrice": 3.49,
    "optionLabels": {
      "material": "Material",
      "diameter": "Diameter",
      "option3": "Length",
      "option4": "Packaging & Sterility"
    },
    "material": [
      {
        "value": "titanium",
        "label": "Titanium (Ti-6Al-4V Grade V)",
        "modifier": 0
      }
    ],
    "diameter": [
      {
        "value": "all",
        "label": "All Diameters",
        "modifier": 0
      },
      {
        "value": "7",
        "label": "7 mm",
        "modifier": 0
      },
      {
        "value": "8",
        "label": "8 mm",
        "modifier": 0
      },
      {
        "value": "9",
        "label": "9 mm",
        "modifier": 0
      },
      {
        "value": "10",
        "label": "10 mm",
        "modifier": 0
      },
      {
        "value": "11",
        "label": "11 mm",
        "modifier": 0
      }
    ],
    "option3": [
      {
        "value": "all",
        "label": "All Available Lengths",
        "modifier": 0
      },
      {
        "value": "20",
        "label": "20 mm",
        "modifier": 0
      },
      {
        "value": "25",
        "label": "25 mm",
        "modifier": 0
      },
      {
        "value": "30",
        "label": "30 mm",
        "modifier": 0
      },
      {
        "value": "35",
        "label": "35 mm",
        "modifier": 0
      }
    ],
    "option4": [
      {
        "value": "bulk",
        "label": "Standard Packing (Non-Sterile, Bulk Box)",
        "modifier": 0
      },
      {
        "value": "sterile",
        "label": "Sterile Packing (Individually Wrapped, Ready for OR)",
        "modifier": 1
      }
    ]
  },
  "alps-mini-t-type-locking-plate": {
    "basePrice": 10,
    "optionLabels": {
      "material": "Material",
      "diameter": "Diameter",
      "option3": "Holes",
      "option4": "Packaging & Sterility"
    },
    "material": [
      {
        "value": "titanium",
        "label": "Titanium",
        "modifier": 0
      },
      {
        "value": "stainless-steel",
        "label": "Stainless Steel",
        "modifier": 2
      }
    ],
    "diameter": [
      {
        "value": "all",
        "label": "All Diameters",
        "modifier": 0
      },
      {
        "value": "1.5",
        "label": "1.5 mm",
        "modifier": 0
      },
      {
        "value": "2.0",
        "label": "2.0 mm",
        "modifier": 2
      },
      {
        "value": "2.4",
        "label": "2.4 mm",
        "modifier": 4
      },
      {
        "value": "2.7",
        "label": "2.7 mm",
        "modifier": 6
      }
    ],
    "option3": [
      {
        "value": "all",
        "label": "All Hole Configurations",
        "modifier": 0
      },
      {
        "value": "4",
        "label": "4 Holes",
        "modifier": 0
      },
      {
        "value": "5",
        "label": "5 Holes",
        "modifier": 8
      },
      {
        "value": "6",
        "label": "6 Holes",
        "modifier": 16
      },
      {
        "value": "7",
        "label": "7 Holes",
        "modifier": 24
      },
      {
        "value": "8",
        "label": "8 Holes",
        "modifier": 32
      }
    ],
    "option4": [
      {
        "value": "bulk",
        "label": "Standard Packing (Non-Sterile, Bulk Box)",
        "modifier": 0
      },
      {
        "value": "sterile",
        "label": "Sterile Packing (Individually Wrapped, Ready for OR)",
        "modifier": 1
      }
    ]
  },
  "dhs-dynamic-hip-lag-screw": {
    "basePrice": 3.99,
    "optionLabels": {
      "material": "Material",
      "diameter": "Diameter",
      "option3": "Length",
      "option4": "Packaging & Sterility"
    },
    "material": [
      {
        "value": "stainless-steel",
        "label": "Stainless Steel 316L",
        "modifier": 0
      },
      {
        "value": "titanium",
        "label": "Titanium (Ti-6Al-4V)",
        "modifier": 6
      }
    ],
    "diameter": [
      {
        "value": "12.5",
        "label": "12.5 mm (standard DHS thread OD)",
        "modifier": 0
      }
    ],
    "option3": [
      {
        "value": "all",
        "label": "All Available Lengths",
        "modifier": 0
      },
      {
        "value": "60",
        "label": "60 mm",
        "modifier": 0
      },
      {
        "value": "65",
        "label": "65 mm",
        "modifier": 0
      },
      {
        "value": "70",
        "label": "70 mm",
        "modifier": 0
      },
      {
        "value": "75",
        "label": "75 mm",
        "modifier": 0
      },
      {
        "value": "80",
        "label": "80 mm",
        "modifier": 0
      },
      {
        "value": "85",
        "label": "85 mm",
        "modifier": 0
      },
      {
        "value": "90",
        "label": "90 mm",
        "modifier": 0
      },
      {
        "value": "95",
        "label": "95 mm",
        "modifier": 0
      },
      {
        "value": "100",
        "label": "100 mm",
        "modifier": 0
      }
    ],
    "option4": [
      {
        "value": "bulk",
        "label": "Standard Packing (Non-Sterile, Bulk Box)",
        "modifier": 0
      },
      {
        "value": "sterile",
        "label": "Sterile Packing (Individually Wrapped, Ready for OR)",
        "modifier": 1
      }
    ]
  },
  "cancellous-cannulated-screw-half-thread": {
    "basePrice": 1.49,
    "optionLabels": {
      "material": "Material",
      "diameter": "Diameter",
      "option3": "Length",
      "option4": "Thread Type"
    },
    "material": [
      {
        "value": "stainless-steel",
        "label": "Stainless Steel 316L",
        "modifier": 0
      },
      {
        "value": "titanium",
        "label": "Titanium (Ti-6Al-4V)",
        "modifier": 2.5
      }
    ],
    "diameter": [
      {
        "value": "all",
        "label": "All Diameters",
        "modifier": 0
      },
      {
        "value": "4.0",
        "label": "4.0 mm",
        "modifier": 0,
        "lengths": [
          {
            "value": "all",
            "label": "All Lengths",
            "modifier": 0
          },
          {
            "value": "10",
            "label": "10 mm",
            "modifier": 0
          },
          {
            "value": "12",
            "label": "12 mm",
            "modifier": 0
          },
          {
            "value": "14",
            "label": "14 mm",
            "modifier": 0
          },
          {
            "value": "16",
            "label": "16 mm",
            "modifier": 0
          },
          {
            "value": "18",
            "label": "18 mm",
            "modifier": 0
          },
          {
            "value": "20",
            "label": "20 mm",
            "modifier": 0
          },
          {
            "value": "22",
            "label": "22 mm",
            "modifier": 0
          },
          {
            "value": "24",
            "label": "24 mm",
            "modifier": 0
          },
          {
            "value": "26",
            "label": "26 mm",
            "modifier": 0
          },
          {
            "value": "28",
            "label": "28 mm",
            "modifier": 0
          },
          {
            "value": "30",
            "label": "30 mm",
            "modifier": 0
          },
          {
            "value": "32",
            "label": "32 mm",
            "modifier": 0
          },
          {
            "value": "34",
            "label": "34 mm",
            "modifier": 0
          },
          {
            "value": "36",
            "label": "36 mm",
            "modifier": 0
          },
          {
            "value": "38",
            "label": "38 mm",
            "modifier": 0
          },
          {
            "value": "40",
            "label": "40 mm",
            "modifier": 0
          },
          {
            "value": "42",
            "label": "42 mm",
            "modifier": 0
          },
          {
            "value": "44",
            "label": "44 mm",
            "modifier": 0
          },
          {
            "value": "46",
            "label": "46 mm",
            "modifier": 0
          },
          {
            "value": "48",
            "label": "48 mm",
            "modifier": 0
          },
          {
            "value": "50",
            "label": "50 mm",
            "modifier": 0
          }
        ]
      },
      {
        "value": "4.5",
        "label": "4.5 mm",
        "modifier": 0,
        "lengths": [
          {
            "value": "all",
            "label": "All Lengths",
            "modifier": 0
          },
          {
            "value": "20",
            "label": "20 mm",
            "modifier": 0
          },
          {
            "value": "22",
            "label": "22 mm",
            "modifier": 0
          },
          {
            "value": "24",
            "label": "24 mm",
            "modifier": 0
          },
          {
            "value": "26",
            "label": "26 mm",
            "modifier": 0
          },
          {
            "value": "28",
            "label": "28 mm",
            "modifier": 0
          },
          {
            "value": "30",
            "label": "30 mm",
            "modifier": 0
          },
          {
            "value": "32",
            "label": "32 mm",
            "modifier": 0
          },
          {
            "value": "34",
            "label": "34 mm",
            "modifier": 0
          },
          {
            "value": "36",
            "label": "36 mm",
            "modifier": 0
          },
          {
            "value": "38",
            "label": "38 mm",
            "modifier": 0
          },
          {
            "value": "40",
            "label": "40 mm",
            "modifier": 0
          },
          {
            "value": "42",
            "label": "42 mm",
            "modifier": 0
          },
          {
            "value": "44",
            "label": "44 mm",
            "modifier": 0
          },
          {
            "value": "46",
            "label": "46 mm",
            "modifier": 0
          },
          {
            "value": "48",
            "label": "48 mm",
            "modifier": 0
          },
          {
            "value": "50",
            "label": "50 mm",
            "modifier": 0
          },
          {
            "value": "52",
            "label": "52 mm",
            "modifier": 0
          },
          {
            "value": "54",
            "label": "54 mm",
            "modifier": 0
          },
          {
            "value": "56",
            "label": "56 mm",
            "modifier": 0
          },
          {
            "value": "58",
            "label": "58 mm",
            "modifier": 0
          },
          {
            "value": "60",
            "label": "60 mm",
            "modifier": 0
          },
          {
            "value": "62",
            "label": "62 mm",
            "modifier": 0
          },
          {
            "value": "64",
            "label": "64 mm",
            "modifier": 0
          },
          {
            "value": "66",
            "label": "66 mm",
            "modifier": 0
          },
          {
            "value": "68",
            "label": "68 mm",
            "modifier": 0
          },
          {
            "value": "70",
            "label": "70 mm",
            "modifier": 0
          },
          {
            "value": "72",
            "label": "72 mm",
            "modifier": 0
          },
          {
            "value": "74",
            "label": "74 mm",
            "modifier": 0
          },
          {
            "value": "76",
            "label": "76 mm",
            "modifier": 0
          },
          {
            "value": "78",
            "label": "78 mm",
            "modifier": 0
          },
          {
            "value": "80",
            "label": "80 mm",
            "modifier": 0
          },
          {
            "value": "82",
            "label": "82 mm",
            "modifier": 0
          },
          {
            "value": "84",
            "label": "84 mm",
            "modifier": 0
          },
          {
            "value": "86",
            "label": "86 mm",
            "modifier": 0
          },
          {
            "value": "88",
            "label": "88 mm",
            "modifier": 0
          },
          {
            "value": "90",
            "label": "90 mm",
            "modifier": 0
          },
          {
            "value": "92",
            "label": "92 mm",
            "modifier": 0
          },
          {
            "value": "94",
            "label": "94 mm",
            "modifier": 0
          },
          {
            "value": "96",
            "label": "96 mm",
            "modifier": 0
          },
          {
            "value": "98",
            "label": "98 mm",
            "modifier": 0
          },
          {
            "value": "100",
            "label": "100 mm",
            "modifier": 0
          }
        ]
      },
      {
        "value": "6.5",
        "label": "6.5 mm",
        "modifier": 0,
        "lengths": [
          {
            "value": "all",
            "label": "All Lengths",
            "modifier": 0
          },
          {
            "value": "60",
            "label": "60 mm",
            "modifier": 0
          },
          {
            "value": "65",
            "label": "65 mm",
            "modifier": 0
          },
          {
            "value": "70",
            "label": "70 mm",
            "modifier": 0
          },
          {
            "value": "75",
            "label": "75 mm",
            "modifier": 0
          },
          {
            "value": "80",
            "label": "80 mm",
            "modifier": 0
          },
          {
            "value": "85",
            "label": "85 mm",
            "modifier": 0
          },
          {
            "value": "90",
            "label": "90 mm",
            "modifier": 0
          },
          {
            "value": "95",
            "label": "95 mm",
            "modifier": 0
          },
          {
            "value": "100",
            "label": "100 mm",
            "modifier": 0
          },
          {
            "value": "105",
            "label": "105 mm",
            "modifier": 0
          },
          {
            "value": "110",
            "label": "110 mm",
            "modifier": 0
          },
          {
            "value": "115",
            "label": "115 mm",
            "modifier": 0
          },
          {
            "value": "120",
            "label": "120 mm",
            "modifier": 0
          },
          {
            "value": "125",
            "label": "125 mm",
            "modifier": 0
          },
          {
            "value": "130",
            "label": "130 mm",
            "modifier": 0
          }
        ]
      },
      {
        "value": "7.3",
        "label": "7.3 mm",
        "modifier": 0,
        "lengths": [
          {
            "value": "all",
            "label": "All Lengths",
            "modifier": 0
          },
          {
            "value": "60",
            "label": "60 mm",
            "modifier": 0
          },
          {
            "value": "65",
            "label": "65 mm",
            "modifier": 0
          },
          {
            "value": "70",
            "label": "70 mm",
            "modifier": 0
          },
          {
            "value": "75",
            "label": "75 mm",
            "modifier": 0
          },
          {
            "value": "80",
            "label": "80 mm",
            "modifier": 0
          },
          {
            "value": "85",
            "label": "85 mm",
            "modifier": 0
          },
          {
            "value": "90",
            "label": "90 mm",
            "modifier": 0
          },
          {
            "value": "95",
            "label": "95 mm",
            "modifier": 0
          },
          {
            "value": "100",
            "label": "100 mm",
            "modifier": 0
          },
          {
            "value": "105",
            "label": "105 mm",
            "modifier": 0
          },
          {
            "value": "110",
            "label": "110 mm",
            "modifier": 0
          },
          {
            "value": "115",
            "label": "115 mm",
            "modifier": 0
          },
          {
            "value": "120",
            "label": "120 mm",
            "modifier": 0
          },
          {
            "value": "125",
            "label": "125 mm",
            "modifier": 0
          },
          {
            "value": "130",
            "label": "130 mm",
            "modifier": 0
          }
        ]
      }
    ],
    "option4": [
      {
        "value": "full-thread",
        "label": "Full Thread",
        "modifier": 0
      },
      {
        "value": "half-thread",
        "label": "Half Thread",
        "modifier": 0
      }
    ]
  },
  "cmf-maxillofacial-cross-drive-mini-screw": {
    "basePrice": 1.09,
    "optionLabels": {
      "material": "Material",
      "diameter": "Diameter",
      "option3": "Length",
      "option4": "Type"
    },
    "material": [
      {
        "value": "stainless-steel",
        "label": "Stainless Steel 316L",
        "modifier": 0
      },
      {
        "value": "titanium",
        "label": "Titanium (Ti-6Al-4V)",
        "modifier": 0.4
      }
    ],
    "diameter": [
      {
        "value": "all",
        "label": "All Diameters",
        "modifier": 0
      },
      {
        "value": "1.5",
        "label": "1.5 mm",
        "modifier": 0
      },
      {
        "value": "2.0",
        "label": "2.0 mm",
        "modifier": 0
      },
      {
        "value": "2.5",
        "label": "2.5 mm",
        "modifier": 0
      }
    ],
    "option3": [
      {
        "value": "all",
        "label": "All Available Lengths",
        "modifier": 0
      },
      {
        "value": "4",
        "label": "4 mm",
        "modifier": 0
      },
      {
        "value": "5",
        "label": "5 mm",
        "modifier": 0
      },
      {
        "value": "6",
        "label": "6 mm",
        "modifier": 0
      },
      {
        "value": "7",
        "label": "7 mm",
        "modifier": 0
      },
      {
        "value": "8",
        "label": "8 mm",
        "modifier": 0
      },
      {
        "value": "9",
        "label": "9 mm",
        "modifier": 0
      },
      {
        "value": "10",
        "label": "10 mm",
        "modifier": 0
      },
      {
        "value": "11",
        "label": "11 mm",
        "modifier": 0
      },
      {
        "value": "12",
        "label": "12 mm",
        "modifier": 0
      }
    ],
    "option4": [
      {
        "value": "self-tapping",
        "label": "Self-Tapping",
        "modifier": 0
      },
      {
        "value": "self-drilling",
        "label": "Self-Drilling",
        "modifier": 0
      }
    ]
  },
  "distal-fibula-lcp-plate": {
    "basePrice": 16,
    "optionLabels": {
      "material": "Material",
      "diameter": "Diameter",
      "option3": "Holes",
      "option4": "Side"
    },
    "material": [
      {
        "value": "stainless-steel",
        "label": "Stainless Steel 316L",
        "modifier": 0
      },
      {
        "value": "titanium",
        "label": "Titanium (Ti-6Al-4V)",
        "modifier": 6
      }
    ],
    "diameter": [
      {
        "value": "all",
        "label": "All Diameters",
        "modifier": 0
      },
      {
        "value": "2.7",
        "label": "2.7 mm",
        "modifier": 0
      },
      {
        "value": "3.5",
        "label": "3.5 mm",
        "modifier": 3
      }
    ],
    "option3": [
      {
        "value": "all",
        "label": "All Hole Configurations",
        "modifier": 0
      },
      {
        "value": "3",
        "label": "3 Holes",
        "modifier": 0
      },
      {
        "value": "4",
        "label": "4 Holes",
        "modifier": 8
      },
      {
        "value": "5",
        "label": "5 Holes",
        "modifier": 16
      },
      {
        "value": "6",
        "label": "6 Holes",
        "modifier": 24
      },
      {
        "value": "7",
        "label": "7 Holes",
        "modifier": 32
      },
      {
        "value": "8",
        "label": "8 Holes",
        "modifier": 40
      },
      {
        "value": "9",
        "label": "9 Holes",
        "modifier": 48
      },
      {
        "value": "10",
        "label": "10 Holes",
        "modifier": 56
      }
    ],
    "option4": [
      {
        "value": "all",
        "label": "All Sides (Left + Right)",
        "modifier": 0
      },
      {
        "value": "left",
        "label": "Left",
        "modifier": 0
      },
      {
        "value": "right",
        "label": "Right",
        "modifier": 0
      }
    ]
  },
  "veterinary-lc-dcp-t-plate": {
    "basePrice": 14,
    "optionLabels": {
      "material": "Material",
      "diameter": "Diameter",
      "option3": "Holes",
      "option4": "Packaging & Sterility"
    },
    "material": [
      {
        "value": "stainless-steel",
        "label": "Stainless Steel 316L",
        "modifier": 0
      },
      {
        "value": "titanium",
        "label": "Titanium (Ti-6Al-4V)",
        "modifier": 5
      }
    ],
    "diameter": [
      {
        "value": "2.4",
        "label": "2.4 mm",
        "modifier": 0
      }
    ],
    "option3": [
      {
        "value": "all",
        "label": "All Hole Configurations",
        "modifier": 0
      },
      {
        "value": "5",
        "label": "5 Holes",
        "modifier": 0
      },
      {
        "value": "6",
        "label": "6 Holes",
        "modifier": 6
      },
      {
        "value": "7",
        "label": "7 Holes",
        "modifier": 12
      },
      {
        "value": "8",
        "label": "8 Holes",
        "modifier": 18
      },
      {
        "value": "9",
        "label": "9 Holes",
        "modifier": 24
      },
      {
        "value": "10",
        "label": "10 Holes",
        "modifier": 30
      }
    ],
    "option4": [
      {
        "value": "bulk",
        "label": "Standard Packing (Non-Sterile, Bulk Box)",
        "modifier": 0
      },
      {
        "value": "sterile",
        "label": "Sterile Packing (Individually Wrapped, Ready for OR)",
        "modifier": 1
      }
    ]
  },
  "radius-t-titanium-locking-plate-3-5mm": {
    "basePrice": 15,
    "optionLabels": {
      "material": "Material",
      "diameter": "Diameter",
      "option3": "Holes",
      "option4": "Side"
    },
    "material": [
      {
        "value": "titanium",
        "label": "Titanium (Ti-6Al-4V)",
        "modifier": 0
      },
      {
        "value": "stainless-steel",
        "label": "Stainless Steel 316L",
        "modifier": -5
      }
    ],
    "diameter": [
      {
        "value": "3.5",
        "label": "3.5 mm",
        "modifier": 0
      }
    ],
    "option3": [
      {
        "value": "all",
        "label": "All Hole Configurations",
        "modifier": 0
      },
      {
        "value": "3",
        "label": "3 Holes",
        "modifier": 0
      },
      {
        "value": "4",
        "label": "4 Holes",
        "modifier": 8
      },
      {
        "value": "5",
        "label": "5 Holes",
        "modifier": 16
      },
      {
        "value": "6",
        "label": "6 Holes",
        "modifier": 24
      },
      {
        "value": "7",
        "label": "7 Holes",
        "modifier": 32
      }
    ],
    "option4": [
      {
        "value": "all",
        "label": "All Sides (Left + Right)",
        "modifier": 0
      },
      {
        "value": "left",
        "label": "Left",
        "modifier": 0
      },
      {
        "value": "right",
        "label": "Right",
        "modifier": 0
      }
    ]
  },
  "bipolar-hip-prosthesis-37-39mm": {
    "basePrice": 65,
    "optionLabels": {
      "material": "Material",
      "diameter": "Head Size",
      "option3": "Stem Length",
      "option4": "Packaging & Sterility"
    },
    "material": [
      {
        "value": "stainless-steel",
        "label": "Stainless Steel 316L",
        "modifier": 0
      }
    ],
    "diameter": [
      {
        "value": "all",
        "label": "All Diameters",
        "modifier": 0
      },
      {
        "value": "37",
        "label": "37 mm",
        "modifier": 0
      },
      {
        "value": "39",
        "label": "39 mm",
        "modifier": 2
      }
    ],
    "option3": [
      {
        "value": "all",
        "label": "All Available Lengths",
        "modifier": 0
      },
      {
        "value": "110",
        "label": "110 mm",
        "modifier": 0
      },
      {
        "value": "120",
        "label": "120 mm",
        "modifier": 3
      },
      {
        "value": "130",
        "label": "130 mm",
        "modifier": 6
      },
      {
        "value": "140",
        "label": "140 mm",
        "modifier": 9
      }
    ],
    "option4": [
      {
        "value": "bulk",
        "label": "Standard Packing (Non-Sterile, Bulk Box)",
        "modifier": 0
      },
      {
        "value": "sterile",
        "label": "Sterile Packing (Individually Wrapped, Ready for OR)",
        "modifier": 4
      }
    ]
  },
  "distal-ulna-hook-locking-plate": {
    "basePrice": 14,
    "optionLabels": {
      "material": "Material",
      "diameter": "Diameter",
      "option3": "Holes",
      "option4": "Side"
    },
    "material": [
      {
        "value": "titanium",
        "label": "Titanium (Ti-6Al-4V)",
        "modifier": 0
      },
      {
        "value": "stainless-steel",
        "label": "Stainless Steel 316L",
        "modifier": -4
      }
    ],
    "diameter": [
      {
        "value": "2.7",
        "label": "2.7 mm",
        "modifier": 0
      }
    ],
    "option3": [
      {
        "value": "all",
        "label": "All Hole Configurations",
        "modifier": 0
      },
      {
        "value": "3",
        "label": "3 Holes",
        "modifier": 0
      },
      {
        "value": "4",
        "label": "4 Holes",
        "modifier": 8
      },
      {
        "value": "5",
        "label": "5 Holes",
        "modifier": 16
      }
    ],
    "option4": [
      {
        "value": "all",
        "label": "All Sides (Left + Right)",
        "modifier": 0
      },
      {
        "value": "left",
        "label": "Left",
        "modifier": 0
      },
      {
        "value": "right",
        "label": "Right",
        "modifier": 0
      }
    ]
  },
  "double-ended-kirschner-k-wire": {
    "basePrice": 0.35,
    "optionLabels": {
      "material": "Material",
      "diameter": "Diameter",
      "option3": "Length",
      "option4": "Tip Type"
    },
    "material": [
      {
        "value": "stainless-steel",
        "label": "Stainless Steel 316L",
        "modifier": 0
      }
    ],
    "diameter": [
      {
        "value": "all",
        "label": "All Diameters",
        "modifier": 0
      },
      {
        "value": "1.0",
        "label": "1.0 mm",
        "modifier": 0
      },
      {
        "value": "1.2",
        "label": "1.2 mm",
        "modifier": 0
      },
      {
        "value": "1.5",
        "label": "1.5 mm",
        "modifier": 0.05
      },
      {
        "value": "1.8",
        "label": "1.8 mm",
        "modifier": 0.05
      },
      {
        "value": "2.0",
        "label": "2.0 mm",
        "modifier": 0.1
      },
      {
        "value": "2.5",
        "label": "2.5 mm",
        "modifier": 0.1
      },
      {
        "value": "3.0",
        "label": "3.0 mm",
        "modifier": 0.15
      }
    ],
    "option3": [
      {
        "value": "all",
        "label": "All Available Lengths",
        "modifier": 0
      },
      {
        "value": "150",
        "label": "150 mm",
        "modifier": 0
      },
      {
        "value": "200",
        "label": "200 mm",
        "modifier": 0.05
      },
      {
        "value": "250",
        "label": "250 mm",
        "modifier": 0.1
      },
      {
        "value": "310",
        "label": "310 mm",
        "modifier": 0.15
      }
    ],
    "option4": [
      {
        "value": "trocar",
        "label": "Trocar (Double-Ended)",
        "modifier": 0
      },
      {
        "value": "diamond",
        "label": "Diamond Tip (Double-Ended)",
        "modifier": 0.05
      }
    ]
  },
  "austin-moore-hip-prosthesis": {
    "basePrice": 48,
    "optionLabels": {
      "material": "Material",
      "diameter": "Head Size",
      "option3": "Stem Length",
      "option4": "Packaging & Sterility"
    },
    "material": [
      {
        "value": "stainless-steel",
        "label": "Stainless Steel 316L",
        "modifier": 0
      }
    ],
    "diameter": [
      {
        "value": "all",
        "label": "All Diameters",
        "modifier": 0
      },
      {
        "value": "37",
        "label": "37 mm",
        "modifier": 0
      },
      {
        "value": "41",
        "label": "41 mm",
        "modifier": 1.5
      },
      {
        "value": "45",
        "label": "45 mm",
        "modifier": 3
      },
      {
        "value": "49",
        "label": "49 mm",
        "modifier": 4.5
      },
      {
        "value": "55",
        "label": "55 mm",
        "modifier": 6
      }
    ],
    "option3": [
      {
        "value": "all",
        "label": "All Stem Lengths",
        "modifier": 0
      },
      {
        "value": "short",
        "label": "Short Stem",
        "modifier": 0
      },
      {
        "value": "standard",
        "label": "Standard Stem",
        "modifier": 2
      },
      {
        "value": "long",
        "label": "Long Stem",
        "modifier": 5
      }
    ],
    "option4": [
      {
        "value": "bulk",
        "label": "Standard Packing (Non-Sterile, Bulk Box)",
        "modifier": 0
      },
      {
        "value": "sterile",
        "label": "Sterile Packing (Individually Wrapped, Ready for OR)",
        "modifier": 4
      }
    ]
  },
  "plate-bending-plier": {
    "basePrice": 38,
    "optionLabels": {
      "material": "Material",
      "diameter": "Jaw Size",
      "option3": "Handle Length",
      "option4": "Set Type"
    },
    "material": [
      {
        "value": "stainless-steel",
        "label": "Surgical Stainless Steel",
        "modifier": 0
      }
    ],
    "diameter": [
      {
        "value": "all",
        "label": "All Jaw Sizes",
        "modifier": 0
      },
      {
        "value": "small",
        "label": "Small Fragment",
        "modifier": 0
      },
      {
        "value": "large",
        "label": "Large Fragment",
        "modifier": 6
      }
    ],
    "option3": [
      {
        "value": "all",
        "label": "All Available Lengths",
        "modifier": 0
      },
      {
        "value": "180",
        "label": "180 mm",
        "modifier": 0
      },
      {
        "value": "220",
        "label": "220 mm",
        "modifier": 2
      },
      {
        "value": "260",
        "label": "260 mm",
        "modifier": 4
      }
    ],
    "option4": [
      {
        "value": "single",
        "label": "Single Plier",
        "modifier": 0
      },
      {
        "value": "set",
        "label": "Full Bending Set (3-piece)",
        "modifier": 45
      }
    ]
  },
  "titanium-elastic-nails-tens": {
    "basePrice": 6.5,
    "optionLabels": {
      "material": "Material",
      "diameter": "Diameter",
      "option3": "Length",
      "option4": "Pack Size"
    },
    "material": [
      {
        "value": "titanium",
        "label": "Titanium (Ti-6Al-4V)",
        "modifier": 0
      }
    ],
    "diameter": [
      {
        "value": "all",
        "label": "All Diameters",
        "modifier": 0
      },
      {
        "value": "2.0",
        "label": "2.0 mm",
        "modifier": 0
      },
      {
        "value": "2.5",
        "label": "2.5 mm",
        "modifier": 0.5
      },
      {
        "value": "3.0",
        "label": "3.0 mm",
        "modifier": 1
      },
      {
        "value": "3.5",
        "label": "3.5 mm",
        "modifier": 1.5
      }
    ],
    "option3": [
      {
        "value": "all",
        "label": "All Available Lengths",
        "modifier": 0
      },
      {
        "value": "420",
        "label": "420 mm",
        "modifier": 0
      }
    ],
    "option4": [
      {
        "value": "single",
        "label": "Single Nail",
        "modifier": 0
      },
      {
        "value": "set20",
        "label": "Set of 20 Pcs",
        "modifier": 110
      }
    ]
  },
  "thompson-hip-prosthesis": {
    "basePrice": 46,
    "optionLabels": {
      "material": "Material",
      "diameter": "Head Size",
      "option3": "Stem Type",
      "option4": "Packaging & Sterility"
    },
    "material": [
      {
        "value": "stainless-steel",
        "label": "Stainless Steel 316L",
        "modifier": 0
      }
    ],
    "diameter": [
      {
        "value": "all",
        "label": "All Diameters",
        "modifier": 0
      },
      {
        "value": "37",
        "label": "37 mm",
        "modifier": 0
      },
      {
        "value": "41",
        "label": "41 mm",
        "modifier": 1.5
      },
      {
        "value": "45",
        "label": "45 mm",
        "modifier": 3
      },
      {
        "value": "49",
        "label": "49 mm",
        "modifier": 4.5
      },
      {
        "value": "55",
        "label": "55 mm",
        "modifier": 6
      }
    ],
    "option3": [
      {
        "value": "all",
        "label": "All Stem Types",
        "modifier": 0
      },
      {
        "value": "narrow",
        "label": "Narrow Stem",
        "modifier": 0
      },
      {
        "value": "standard",
        "label": "Standard Stem",
        "modifier": 2
      },
      {
        "value": "extra-long",
        "label": "Extra Long Stem",
        "modifier": 5
      }
    ],
    "option4": [
      {
        "value": "bulk",
        "label": "Standard Packing (Non-Sterile, Bulk Box)",
        "modifier": 0
      },
      {
        "value": "sterile",
        "label": "Sterile Packing (Individually Wrapped, Ready for OR)",
        "modifier": 4
      }
    ]
  },
  "alps-locking-plate-system": {
    "basePrice": 13,
    "optionLabels": {
      "material": "Material",
      "diameter": "Diameter",
      "option3": "Holes",
      "option4": "Side"
    },
    "material": [
      {
        "value": "titanium",
        "label": "Titanium (Ti-6Al-4V)",
        "modifier": 0
      },
      {
        "value": "stainless-steel",
        "label": "Stainless Steel 316L",
        "modifier": -3
      }
    ],
    "diameter": [
      {
        "value": "all",
        "label": "All Diameters",
        "modifier": 0
      },
      {
        "value": "1.5",
        "label": "1.5 mm",
        "modifier": 0
      },
      {
        "value": "2.0",
        "label": "2.0 mm",
        "modifier": 0
      },
      {
        "value": "2.4",
        "label": "2.4 mm",
        "modifier": 0
      },
      {
        "value": "2.7",
        "label": "2.7 mm",
        "modifier": 0
      },
      {
        "value": "3.5",
        "label": "3.5 mm",
        "modifier": 2
      }
    ],
    "option3": [
      {
        "value": "all",
        "label": "All Hole Configurations",
        "modifier": 0
      },
      {
        "value": "4",
        "label": "4 Holes",
        "modifier": 0
      },
      {
        "value": "6",
        "label": "6 Holes",
        "modifier": 8
      },
      {
        "value": "8",
        "label": "8 Holes",
        "modifier": 16
      },
      {
        "value": "10",
        "label": "10 Holes",
        "modifier": 24
      }
    ],
    "option4": [
      {
        "value": "all",
        "label": "All Sides (Left + Right)",
        "modifier": 0
      },
      {
        "value": "left",
        "label": "Left",
        "modifier": 0
      },
      {
        "value": "right",
        "label": "Right",
        "modifier": 0
      }
    ]
  },

  "dhs-barrel-plate-dcp-lcp-135": {
    "basePrice": 28,
    "optionLabels": {
      "material": "Material",
      "diameter": "Plate Size",
      "option3": "Holes",
      "option4": "Angle"
    },
    "material": [
      {
        "value": "stainless-steel",
        "label": "Stainless Steel 316L",
        "modifier": 0
      },
      {
        "value": "titanium",
        "label": "Titanium (Ti-6Al-4V)",
        "modifier": 8
      }
    ],
    "diameter": [
      {
        "value": "all",
        "label": "All Plate Sizes",
        "modifier": 0
      },
      {
        "value": "4.5",
        "label": "4.5 mm",
        "modifier": 0
      },
      {
        "value": "5.0",
        "label": "5.0 mm",
        "modifier": 3
      }
    ],
    "option3": [
      {
        "value": "all",
        "label": "All Hole Configurations",
        "modifier": 0
      },
      {
        "value": "3",
        "label": "3 Holes",
        "modifier": 0
      },
      {
        "value": "4",
        "label": "4 Holes",
        "modifier": 4
      },
      {
        "value": "5",
        "label": "5 Holes",
        "modifier": 8
      },
      {
        "value": "6",
        "label": "6 Holes",
        "modifier": 12
      },
      {
        "value": "7",
        "label": "7 Holes",
        "modifier": 16
      },
      {
        "value": "8",
        "label": "8 Holes",
        "modifier": 20
      },
      {
        "value": "9",
        "label": "9 Holes",
        "modifier": 24
      }
    ],
    "option4": [
      {
        "value": "all",
        "label": "All Angles",
        "modifier": 0
      },
      {
        "value": "135",
        "label": "135°",
        "modifier": 0
      }
    ]
  },

  "dcp-dynamic-compression-plate-4-5mm": {
    "basePrice": 18,
    "optionLabels": {
      "material": "Material",
      "diameter": "Diameter",
      "option3": "Holes",
      "option4": "Profile"
    },
    "material": [
      {
        "value": "stainless-steel",
        "label": "Stainless Steel 316L",
        "modifier": 0
      },
      {
        "value": "titanium",
        "label": "Titanium (Ti-6Al-4V)",
        "modifier": 6
      }
    ],
    "diameter": [
      {
        "value": "all",
        "label": "All Diameters",
        "modifier": 0
      },
      {
        "value": "2.7",
        "label": "2.7 mm",
        "modifier": -6
      },
      {
        "value": "3.5",
        "label": "3.5 mm",
        "modifier": -3
      },
      {
        "value": "4.5",
        "label": "4.5 mm",
        "modifier": 0
      }
    ],
    "option3": [
      {
        "value": "all",
        "label": "All Hole Configurations",
        "modifier": 0
      },
      {
        "value": "4",
        "label": "4 Holes",
        "modifier": 0
      },
      {
        "value": "5",
        "label": "5 Holes",
        "modifier": 2
      },
      {
        "value": "6",
        "label": "6 Holes",
        "modifier": 4
      },
      {
        "value": "7",
        "label": "7 Holes",
        "modifier": 6
      },
      {
        "value": "8",
        "label": "8 Holes",
        "modifier": 8
      },
      {
        "value": "9",
        "label": "9 Holes",
        "modifier": 10
      },
      {
        "value": "10",
        "label": "10 Holes",
        "modifier": 12
      },
      {
        "value": "12",
        "label": "12 Holes",
        "modifier": 16
      }
    ],
    "option4": [
      {
        "value": "all",
        "label": "All Profiles",
        "modifier": 0
      },
      {
        "value": "narrow",
        "label": "Narrow",
        "modifier": 0
      },
      {
        "value": "broad",
        "label": "Broad",
        "modifier": 4
      }
    ]
  },

  "tplo-locking-plate-3-5mm-68mm": {
    "basePrice": 24,
    "optionLabels": {
      "material": "Material",
      "diameter": "Plate Width",
      "option3": "Side",
      "option4": "Length"
    },
    "material": [
      {
        "value": "stainless-steel",
        "label": "Stainless Steel 316L",
        "modifier": 0
      },
      {
        "value": "titanium",
        "label": "Titanium (Ti-6Al-4V)",
        "modifier": 8
      }
    ],
    "diameter": [
      {
        "value": "all",
        "label": "All Widths",
        "modifier": 0
      },
      {
        "value": "10mm",
        "label": "10 mm Width",
        "modifier": 0
      }
    ],
    "option3": [
      {
        "value": "all",
        "label": "All Sides",
        "modifier": 0
      },
      {
        "value": "left",
        "label": "Left",
        "modifier": 0
      },
      {
        "value": "right",
        "label": "Right",
        "modifier": 0
      }
    ],
    "option4": [
      {
        "value": "all",
        "label": "All Lengths",
        "modifier": 0
      },
      {
        "value": "68mm",
        "label": "68 mm Length",
        "modifier": 0
      }
    ]
  },

  "headless-compression-screws-2-5-6-5mm": {
    "basePrice": 4.99,
    "optionLabels": {
      "material": "Material",
      "diameter": "Diameter",
      "option3": "Length",
      "option4": "Thread Type"
    },
    "material": [
      {
        "value": "titanium",
        "label": "Titanium (Ti-6Al-4V)",
        "modifier": 0
      },
      {
        "value": "stainless-steel",
        "label": "Stainless Steel 316L",
        "modifier": -1
      }
    ],
    "diameter": [
      {
        "value": "all",
        "label": "All Diameters",
        "modifier": 0
      },
      {
        "value": "2.5",
        "label": "2.5 mm",
        "modifier": 0,
        "lengths": [
          {
            "value": "all",
            "label": "All Lengths",
            "modifier": 0
          },
          {
            "value": "8",
            "label": "8 mm",
            "modifier": 0
          },
          {
            "value": "10",
            "label": "10 mm",
            "modifier": 0
          },
          {
            "value": "12",
            "label": "12 mm",
            "modifier": 0
          },
          {
            "value": "14",
            "label": "14 mm",
            "modifier": 0
          },
          {
            "value": "16",
            "label": "16 mm",
            "modifier": 0
          },
          {
            "value": "18",
            "label": "18 mm",
            "modifier": 0
          },
          {
            "value": "20",
            "label": "20 mm",
            "modifier": 0
          },
          {
            "value": "22",
            "label": "22 mm",
            "modifier": 0
          },
          {
            "value": "24",
            "label": "24 mm",
            "modifier": 0
          },
          {
            "value": "26",
            "label": "26 mm",
            "modifier": 0
          },
          {
            "value": "28",
            "label": "28 mm",
            "modifier": 0
          },
          {
            "value": "30",
            "label": "30 mm",
            "modifier": 0
          },
          {
            "value": "32",
            "label": "32 mm",
            "modifier": 0
          },
          {
            "value": "34",
            "label": "34 mm",
            "modifier": 0
          },
          {
            "value": "36",
            "label": "36 mm",
            "modifier": 0
          },
          {
            "value": "38",
            "label": "38 mm",
            "modifier": 0
          },
          {
            "value": "40",
            "label": "40 mm",
            "modifier": 0
          }
        ]
      },
      {
        "value": "3.5",
        "label": "3.5 mm",
        "modifier": 1,
        "lengths": [
          {
            "value": "all",
            "label": "All Lengths",
            "modifier": 0
          },
          {
            "value": "14",
            "label": "14 mm",
            "modifier": 0
          },
          {
            "value": "16",
            "label": "16 mm",
            "modifier": 0
          },
          {
            "value": "18",
            "label": "18 mm",
            "modifier": 0
          },
          {
            "value": "20",
            "label": "20 mm",
            "modifier": 0
          },
          {
            "value": "22",
            "label": "22 mm",
            "modifier": 0
          },
          {
            "value": "24",
            "label": "24 mm",
            "modifier": 0
          },
          {
            "value": "26",
            "label": "26 mm",
            "modifier": 0
          },
          {
            "value": "28",
            "label": "28 mm",
            "modifier": 0
          },
          {
            "value": "30",
            "label": "30 mm",
            "modifier": 0
          },
          {
            "value": "32",
            "label": "32 mm",
            "modifier": 0
          },
          {
            "value": "34",
            "label": "34 mm",
            "modifier": 0
          },
          {
            "value": "36",
            "label": "36 mm",
            "modifier": 0
          },
          {
            "value": "38",
            "label": "38 mm",
            "modifier": 0
          },
          {
            "value": "40",
            "label": "40 mm",
            "modifier": 0
          },
          {
            "value": "45",
            "label": "45 mm",
            "modifier": 2
          },
          {
            "value": "50",
            "label": "50 mm",
            "modifier": 4
          }
        ]
      },
      {
        "value": "4.5",
        "label": "4.5 mm",
        "modifier": 2,
        "lengths": [
          {
            "value": "all",
            "label": "All Lengths",
            "modifier": 0
          },
          {
            "value": "16",
            "label": "16 mm",
            "modifier": 0
          },
          {
            "value": "18",
            "label": "18 mm",
            "modifier": 0
          },
          {
            "value": "20",
            "label": "20 mm",
            "modifier": 0
          },
          {
            "value": "22",
            "label": "22 mm",
            "modifier": 0
          },
          {
            "value": "24",
            "label": "24 mm",
            "modifier": 0
          },
          {
            "value": "26",
            "label": "26 mm",
            "modifier": 0
          },
          {
            "value": "28",
            "label": "28 mm",
            "modifier": 0
          },
          {
            "value": "30",
            "label": "30 mm",
            "modifier": 0
          },
          {
            "value": "32",
            "label": "32 mm",
            "modifier": 0
          },
          {
            "value": "34",
            "label": "34 mm",
            "modifier": 0
          },
          {
            "value": "36",
            "label": "36 mm",
            "modifier": 0
          },
          {
            "value": "38",
            "label": "38 mm",
            "modifier": 0
          },
          {
            "value": "40",
            "label": "40 mm",
            "modifier": 0
          },
          {
            "value": "45",
            "label": "45 mm",
            "modifier": 2
          },
          {
            "value": "50",
            "label": "50 mm",
            "modifier": 4
          },
          {
            "value": "55",
            "label": "55 mm",
            "modifier": 6
          },
          {
            "value": "60",
            "label": "60 mm",
            "modifier": 8
          },
          {
            "value": "70",
            "label": "70 mm",
            "modifier": 12
          },
          {
            "value": "80",
            "label": "80 mm",
            "modifier": 16
          },
          {
            "value": "90",
            "label": "90 mm",
            "modifier": 20
          },
          {
            "value": "100",
            "label": "100 mm",
            "modifier": 24
          },
          {
            "value": "110",
            "label": "110 mm",
            "modifier": 28
          }
        ]
      },
      {
        "value": "6.5",
        "label": "6.5 mm",
        "modifier": 4,
        "lengths": [
          {
            "value": "all",
            "label": "All Lengths",
            "modifier": 0
          },
          {
            "value": "30",
            "label": "30 mm",
            "modifier": 0
          },
          {
            "value": "35",
            "label": "35 mm",
            "modifier": 0
          },
          {
            "value": "40",
            "label": "40 mm",
            "modifier": 0
          },
          {
            "value": "45",
            "label": "45 mm",
            "modifier": 0
          },
          {
            "value": "50",
            "label": "50 mm",
            "modifier": 0
          },
          {
            "value": "55",
            "label": "55 mm",
            "modifier": 2
          },
          {
            "value": "60",
            "label": "60 mm",
            "modifier": 4
          },
          {
            "value": "65",
            "label": "65 mm",
            "modifier": 6
          },
          {
            "value": "70",
            "label": "70 mm",
            "modifier": 8
          },
          {
            "value": "75",
            "label": "75 mm",
            "modifier": 10
          },
          {
            "value": "80",
            "label": "80 mm",
            "modifier": 12
          },
          {
            "value": "85",
            "label": "85 mm",
            "modifier": 14
          },
          {
            "value": "90",
            "label": "90 mm",
            "modifier": 16
          },
          {
            "value": "95",
            "label": "95 mm",
            "modifier": 18
          },
          {
            "value": "100",
            "label": "100 mm",
            "modifier": 20
          },
          {
            "value": "105",
            "label": "105 mm",
            "modifier": 22
          },
          {
            "value": "110",
            "label": "110 mm",
            "modifier": 24
          },
          {
            "value": "115",
            "label": "115 mm",
            "modifier": 26
          },
          {
            "value": "120",
            "label": "120 mm",
            "modifier": 24
          }
        ]
      }
    ],
    "option3": [],
    "option4": [
      {
        "value": "all",
        "label": "All Thread Types",
        "modifier": 0
      },
      {
        "value": "full-thread",
        "label": "Full Thread",
        "modifier": 0
      },
      {
        "value": "partial-thread",
        "label": "Partial Thread",
        "modifier": 0
      }
    ]
  },

  "tplo-lc-dcp-plate-3-5mm-lr": {
    "basePrice": 22,
    "optionLabels": {
      "material": "Material",
      "diameter": "Diameter",
      "option3": "Side",
      "option4": "Holes"
    },
    "material": [
      {
        "value": "stainless-steel",
        "label": "Stainless Steel 316L",
        "modifier": 0
      },
      {
        "value": "titanium",
        "label": "Titanium (Ti-6Al-4V)",
        "modifier": 7
      }
    ],
    "diameter": [
      {
        "value": "all",
        "label": "All Diameters",
        "modifier": 0
      },
      {
        "value": "3.5",
        "label": "3.5 mm",
        "modifier": 0
      },
      {
        "value": "2.7",
        "label": "2.7 mm",
        "modifier": -2
      }
    ],
    "option3": [
      {
        "value": "all",
        "label": "All Sides",
        "modifier": 0
      },
      {
        "value": "left",
        "label": "Left",
        "modifier": 0
      },
      {
        "value": "right",
        "label": "Right",
        "modifier": 0
      }
    ],
    "option4": [
      {
        "value": "all",
        "label": "All Hole Configurations",
        "modifier": 0
      },
      {
        "value": "6",
        "label": "6 Holes",
        "modifier": 0
      }
    ]
  },

  "heavy-duty-pin-wire-cutter-18cm": {
    "basePrice": 85,
    "optionLabels": {
      "material": "Material",
      "diameter": "Length",
      "option3": "Type",
      "option4": "Cutting Capacity"
    },
    "material": [
      {
        "value": "stainless-steel",
        "label": "Surgical Stainless Steel",
        "modifier": 0
      }
    ],
    "diameter": [
      {
        "value": "all",
        "label": "All Lengths",
        "modifier": 0
      },
      {
        "value": "18cm",
        "label": "18 cm",
        "modifier": 0
      }
    ],
    "option3": [
      {
        "value": "all",
        "label": "All Types",
        "modifier": 0
      },
      {
        "value": "double-action",
        "label": "Double Action",
        "modifier": 0
      }
    ],
    "option4": [
      {
        "value": "all",
        "label": "All Capacities",
        "modifier": 0
      },
      {
        "value": "1.6mm",
        "label": "Up to 1.6mm",
        "modifier": 0
      }
    ]
  },

  "screwdriver-2-4-2-7-silicon-handle": {
    "basePrice": 75,
    "optionLabels": {
      "material": "Material",
      "diameter": "Tip Size",
      "option3": "Handle Type",
      "option4": "Screw Type"
    },
    "material": [
      {
        "value": "stainless-steel",
        "label": "Surgical Stainless Steel",
        "modifier": 0
      }
    ],
    "diameter": [
      {
        "value": "all",
        "label": "All Tip Sizes",
        "modifier": 0
      },
      {
        "value": "2.4-2.7",
        "label": "2.4mm / 2.7mm",
        "modifier": 0
      }
    ],
    "option3": [
      {
        "value": "all",
        "label": "All Handle Types",
        "modifier": 0
      },
      {
        "value": "silicon",
        "label": "Silicon Handle",
        "modifier": 0
      }
    ],
    "option4": [
      {
        "value": "all",
        "label": "All Screw Types",
        "modifier": 0
      },
      {
        "value": "tl-tc",
        "label": "Locking (TL) & Cortical (TC)",
        "modifier": 0
      }
    ]
  },
};
;

document.addEventListener('DOMContentLoaded', function () {
  var PKR_RATE = 278; // USD -> PKR interbank reference rate, Pakistani market pricing

  Object.keys(PRODUCTS_PRICING).forEach(function (productId) {
    var data = PRODUCTS_PRICING[productId];

    var materialSelect = document.getElementById('material-' + productId);
    var diameterSelect = document.getElementById('diameter-' + productId);
    var option3Select = document.getElementById('option3-' + productId);
    var option4Select = document.getElementById('option4-' + productId);
    var priceEl = document.getElementById('price-' + productId);

    if (!materialSelect || !diameterSelect || !option3Select || !option4Select || !priceEl) {
      return; // this product isn't on the current page
    }

    function getLengthOptionsFor(diameterValue) {
      var chosenDiameter = (data.diameter || []).filter(function (o) { return o.value === diameterValue; })[0];
      // If this diameter defines its own length list, use that (diameter-dependent lengths).
      if (chosenDiameter && chosenDiameter.lengths) return chosenDiameter.lengths;
      // Otherwise fall back to the shared flat option3 list (older products, unaffected).
      if (data.option3 && data.option3.length) return data.option3;
      // "All Diameters" (or any diameter without its own list) on a product whose
      // lengths are diameter-dependent: show the combined, de-duplicated set of
      // every length across all diameters instead of leaving the dropdown empty.
      var seen = {};
      var combined = [];
      (data.diameter || []).forEach(function (d) {
        (d.lengths || []).forEach(function (len) {
          if (!seen[len.value]) {
            seen[len.value] = true;
            combined.push(len);
          }
        });
      });
      return combined;
    }

    populateSelect(materialSelect, data.material);
    populateSelect(diameterSelect, data.diameter);
    populateSelect(option3Select, getLengthOptionsFor(diameterSelect.value));
    populateSelect(option4Select, data.option4);

    // When the diameter changes on a product with diameter-dependent lengths,
    // rebuild the Length dropdown to only show valid lengths for that diameter.
    diameterSelect.addEventListener('change', function () {
      populateSelect(option3Select, getLengthOptionsFor(diameterSelect.value));
      updatePrice();
    });

    function populateSelect(selectEl, options) {
      selectEl.innerHTML = '';
      (options || []).forEach(function (opt) {
        var el = document.createElement('option');
        el.value = opt.value;
        el.textContent = opt.label;
        selectEl.appendChild(el);
      });
    }

    function findModifier(options, value) {
      var match = (options || []).filter(function (o) { return o.value === value; })[0];
      return match ? match.modifier : 0;
    }

    var qtyInput = document.getElementById('qty-' + productId);
    var priceTotalEl = document.getElementById('price-total-' + productId);
    var moq = (typeof PRODUCT_DETAIL_CONTENT !== 'undefined' && PRODUCT_DETAIL_CONTENT[productId] && PRODUCT_DETAIL_CONTENT[productId].moq) || 200;

    function currentQty() {
      var q = parseInt(qtyInput ? qtyInput.value : moq, 10);
      if (isNaN(q) || q < moq) q = moq;
      return q;
    }

    function updatePrice() {
      var currentLengthOptions = getLengthOptionsFor(diameterSelect.value);
      var hasAllSelection = [materialSelect.value, diameterSelect.value, option3Select.value, option4Select.value].indexOf('all') !== -1;

      var unitPrice = data.basePrice
        + findModifier(data.material, materialSelect.value)
        + findModifier(data.diameter, diameterSelect.value)
        + findModifier(currentLengthOptions, option3Select.value)
        + findModifier(data.option4, option4Select.value);

      var qty = currentQty();
      var total = unitPrice * qty;
      var unitPkr = Math.round(unitPrice * PKR_RATE);
      var totalPkr = Math.round(total * PKR_RATE);

      var pkrNoteEl = document.getElementById('price-pkr-note-' + productId);
      var totalPkrNoteEl = document.getElementById('price-total-pkr-note-' + productId);

      if (hasAllSelection) {
        priceEl.textContent = 'Request Quote';
        if (pkrNoteEl) pkrNoteEl.textContent = 'Multi-variant order — priced on request';
        if (priceTotalEl) priceTotalEl.textContent = 'Request Quote';
        if (totalPkrNoteEl) totalPkrNoteEl.textContent = 'We will confirm pricing on WhatsApp';
      } else {
        priceEl.textContent = '$' + unitPrice.toFixed(2);
        if (pkrNoteEl) pkrNoteEl.textContent = '≈ Rs ' + unitPkr.toLocaleString('en-PK') + ' / qty';
        if (priceTotalEl) priceTotalEl.textContent = '$' + total.toFixed(2);
        if (totalPkrNoteEl) totalPkrNoteEl.textContent = '≈ Rs ' + totalPkr.toLocaleString('en-PK');
      }

      var selectedMaterial = (data.material || []).filter(function (o) { return o.value === materialSelect.value; })[0];
      var selectedDiameter = (data.diameter || []).filter(function (o) { return o.value === diameterSelect.value; })[0];
      var selectedOption3 = (currentLengthOptions || []).filter(function (o) { return o.value === option3Select.value; })[0];
      var selectedOption4 = (data.option4 || []).filter(function (o) { return o.value === option4Select.value; })[0];
      var materialLabel = selectedMaterial ? selectedMaterial.label : materialSelect.value;
      var diameterLabel = selectedDiameter ? selectedDiameter.label : diameterSelect.value;
      var option3Label = selectedOption3 ? selectedOption3.label : option3Select.value;
      var option4Label = selectedOption4 ? selectedOption4.label : option4Select.value;

      // Keep the WhatsApp "Ask on WhatsApp" link in sync with the selected options + qty
      var quoteLink = document.querySelector('.quote-link[data-product-id="' + productId + '"]');
      if (quoteLink && window.ImplanciaCart) {
        var productName = quoteLink.getAttribute('data-product-name') || productId;
        var priceLine = hasAllSelection
          ? 'This is a multi-variant request — please send me a bulk quote.'
          : 'Estimated Unit Price: $' + unitPrice.toFixed(2) + '\nEstimated Order Total: $' + total.toFixed(2);
        var message = 'Hello Implancia, I am interested in the ' + productName + '.\n' +
          'Configuration: ' + materialLabel + ', ' + diameterLabel + ', ' + option3Label + ', ' + option4Label + '\n' +
          'Quantity: ' + qty + ' units\n' +
          priceLine + '\n' +
          'Please confirm availability, exact pricing, and delivery to the USA.';
        quoteLink.setAttribute('href', 'https://wa.me/' + window.ImplanciaCart.WHATSAPP_NUMBER + '?text=' + encodeURIComponent(message));
      }

      // Keep the "Add to Cart" button in sync with the selected options + qty
      var addToCartBtn = document.querySelector('.add-to-cart-btn[data-product-id="' + productId + '"]');
      if (addToCartBtn) {
        addToCartBtn.setAttribute('data-material', materialLabel);
        addToCartBtn.setAttribute('data-diameter', diameterLabel);
        addToCartBtn.setAttribute('data-length', option3Label);
        addToCartBtn.setAttribute('data-option4', option4Label);
        addToCartBtn.setAttribute('data-price', hasAllSelection ? 'Request Quote' : '$' + unitPrice.toFixed(2));
        addToCartBtn.setAttribute('data-qty', qty);
        addToCartBtn.setAttribute('data-moq', moq);
        addToCartBtn.disabled = false;
        addToCartBtn.textContent = '+ Add to Cart';
      }
    }

    [materialSelect, option3Select, option4Select].forEach(function (sel) {
      sel.addEventListener('change', updatePrice);
    });
    if (qtyInput) {
      qtyInput.setAttribute('min', moq);
      qtyInput.value = moq;
      var noteEl = document.querySelector('.quantity-note[data-qty-note-for="' + productId + '"]');
      if (noteEl) noteEl.textContent = moq + ' Minimum per Order';
      qtyInput.addEventListener('change', function () {
        qtyInput.value = currentQty();
        updatePrice();
      });
      qtyInput.addEventListener('input', updatePrice);
    }

    updatePrice();
  });

  /* ---- Product image gallery (thumbnail click swaps main image) ---- */
  document.querySelectorAll('.gallery-thumb').forEach(function (thumb) {
    thumb.addEventListener('click', function () {
      var targetId = thumb.getAttribute('data-target');
      var mainImg = document.getElementById(targetId);
      if (mainImg) {
        mainImg.src = thumb.getAttribute('src');
      }
      var siblings = thumb.parentElement.querySelectorAll('.gallery-thumb');
      siblings.forEach(function (s) { s.classList.remove('active'); });
      thumb.classList.add('active');
    });
  });

  /* ---- Optional manufacturing video toggle (loads video only on demand) ---- */
  document.querySelectorAll('.video-toggle-btn').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      var targetId = btn.getAttribute('data-video-target');
      var container = document.getElementById(targetId);
      if (!container) return;

      if (container.hidden) {
        if (!container.dataset.loaded) {
          var videoSrc = btn.getAttribute('data-video');
          container.innerHTML =
            '<video controls preload="none" playsinline>' +
            '<source src="' + videoSrc + '" type="video/mp4">' +
            'Your browser does not support the video tag.' +
            '</video>';
          container.dataset.loaded = 'true';
        }
        container.hidden = false;
        btn.setAttribute('aria-expanded', 'true');
        btn.innerHTML = '&#9660; Hide Manufacturing Video';
      } else {
        container.hidden = true;
        btn.setAttribute('aria-expanded', 'false');
        btn.innerHTML = '&#9654; Watch Manufacturing Video';
      }
    });
  });

  /* ---- Click-to-expand product cards ----
     Shows only the compact summary (image, title, price) at first.
     Clicking it opens the full details below: image + manufacturing
     video on the left, description/options/price/specs/tags + actions
     on the right. ---- */
  function setCardExpanded(card, expand) {
    var details = card.querySelector('.product-details');
    var summary = card.querySelector('.product-summary');
    if (!details || !summary) return;

    var label = summary.querySelector('.expand-indicator');

    if (expand) {
      details.hidden = false;
      // Wait a frame so the browser registers hidden=false before animating
      requestAnimationFrame(function () {
        card.classList.add('expanded');
      });
      summary.setAttribute('aria-expanded', 'true');
      if (label) label.childNodes[0].nodeValue = 'Hide Details ';
    } else {
      card.classList.remove('expanded');
      summary.setAttribute('aria-expanded', 'false');
      if (label) label.childNodes[0].nodeValue = 'View Details ';
      // Wait for the collapse transition to finish before re-hiding
      setTimeout(function () {
        if (!card.classList.contains('expanded')) details.hidden = true;
      }, 450);
    }
  }

  document.querySelectorAll('.product-summary').forEach(function (summary) {
    function toggle() {
      var card = summary.closest('.product-card');
      if (!card) return;
      setCardExpanded(card, !card.classList.contains('expanded'));
    }
    summary.addEventListener('click', toggle);
    summary.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggle();
      }
    });
  });

  /* ---- Auto-expand + scroll to the product referenced by the URL hash
     (e.g. arriving from the homepage "View Details" link). This also
     fixes the old bug where the linked section could appear blank. ---- */
  function expandFromHash() {
    var hash = window.location.hash.replace('#', '');
    if (!hash) return;
    var titleEl = document.getElementById(hash);
    if (!titleEl) return;
    var card = titleEl.closest('.product-card');
    if (!card) return;

    setCardExpanded(card, true);

    setTimeout(function () {
      var header = document.querySelector('.site-header');
      var headerOffset = header ? header.offsetHeight + 16 : 90;
      var top = card.getBoundingClientRect().top + window.pageYOffset - headerOffset;
      window.scrollTo({ top: top < 0 ? 0 : top, behavior: 'smooth' });
    }, 120);
  }

  expandFromHash();
  window.addEventListener('hashchange', expandFromHash);

  /* Add to Cart is now handled site-wide by js/cart.js
     (see .add-to-cart-btn wiring in that file). */

  /* Prevent clicks inside the details panel (options, gallery, tags, quote
     link) from bubbling up and accidentally collapsing the card. */
  document.querySelectorAll('.product-details').forEach(function (details) {
    details.addEventListener('click', function (e) {
      e.stopPropagation();
    });
  });

});