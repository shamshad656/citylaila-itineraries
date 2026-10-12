/* =========================================================
   CITYLAILA ITINERARY DATA

   FUTURE WORKFLOW:
   Normally ONLY this file changes for a new itinerary.
========================================================= */

window.ITINERARY = {


  /* =====================================================
     BASIC PACKAGE DETAILS
  ===================================================== */

  packageName: "Dubai & Abu Dhabi Signature Escape",

  destinationLine: "Dubai & Abu Dhabi, UAE",

  duration: "7 Nights / 8 Days",

  travelDates: "4th – 11th February 2027",

  guests: "2 Adults",

  packageType: "Land Package Only",


  /* =====================================================
     COVER
  ===================================================== */

  coverImageKey: "dubai_cover",

  coverSubtitle:
    "Dubai Icons • Desert • Culture • Marina | 7 Nights / 8 Days",

  coverTags: [
    "🏨 Premier Inn Dubai Al Jaddaf",
    "🛂 UAE Tourist Visa Included",
    "🏜️ Premium Desert Experience"
  ],


  /* =====================================================
     HOTEL
  ===================================================== */

  hotel: {

    name: "Premier Inn Dubai Al Jaddaf",

    location: "Dubai, UAE",

    nights: "7 Nights",

    mealPlan: "Daily Breakfast"

  },


  /* =====================================================
     PACKAGE SETUP PAGE
  ===================================================== */

  setup: {

    leftTitle: "🏨 Stay Details",

    leftItems: [
      "👫 2 Adults",
      "🌙 7 Nights",
      "🍳 Daily Breakfast",
      "📦 Land Package Only"
    ],

    rightTitle: "🎟️ Package Highlights",

    rightItems: [
      "🛂 Tourist Visas for 2 Adults",
      "🚘 Private Airport Transfers",
      "🌇 Burj Khalifa + Dubai Aquarium",
      "🏜️ Desert Safari + Marina Dhow Cruise"
    ]

  },


  /* =====================================================
     DAY-WISE ITINERARY
  ===================================================== */

  days: [


    /* ===================================================
       DAY 1
    =================================================== */

    {

      date: "4 February",

      shortDate: "04 Feb",

      title: "Arrival in Dubai",

      description:
        "Arrive at Dubai International Airport and begin the holiday with a private transfer to Premier Inn Dubai Al Jaddaf.",

      highlights: [
        "🛬 Arrival at Dubai International Airport",
        "🚘 Private airport transfer to hotel",
        "🏨 Hotel check-in & time to relax",
        "🌙 Evening at leisure"
      ],

      imageKeys: [
        "dubai_airport_arrival",
        "private_transfer"
      ],

      overnight: "Dubai",

      meals: {
        breakfast: "Arrival Day",
        lunch: "Not Included",
        dinner: "Not Included"
      }

    },


    /* ===================================================
       DAY 2
    =================================================== */

    {

      date: "5 February",

      shortDate: "05 Feb",

      title: "Dubai Half-Day City Tour",

      description:
        "After breakfast, discover Dubai's coastline, modern landmarks and traditional markets on a shared guided half-day city tour.",

      highlights: [
        "🏖️ Jumeirah Beach • Burj Al Arab photo stop",
        "🌴 Palm Jumeirah • Atlantis The Palm photo stop",
        "🌊 Dubai Marina • JBR",
        "🛍️ Gold Souk • Spice Souk"
      ],

      imageKeys: [
        "burj_al_arab",
        "palm_jumeirah",
        "atlantis_the_palm",
        "dubai_marina_jbr",
        "gold_souk"
      ],

      overnight: "Dubai",

      meals: {
        breakfast: "Included",
        lunch: "Not Included",
        dinner: "Not Included"
      }

    },


    /* ===================================================
       DAY 3
    =================================================== */

    {

      date: "6 February",

      shortDate: "06 Feb",

      title: "Premium Desert Safari",

      description:
        "Spend the morning at leisure before an afternoon Premium Desert Safari in a shared 4x4 vehicle.",

      highlights: [
        "🍳 Breakfast • Morning at leisure",
        "🚙 Premium Desert Safari in shared 4x4",
        "🏜️ Dune bashing • Sunset photography",
        "🍽️ BBQ dinner • Live entertainment • Anniversary cake"
      ],

      imageKeys: [
        "premium_desert_safari"
      ],

      note:
        "Traditional desert activities are subject to availability and operation on the day.",

      overnight: "Dubai",

      meals: {
        breakfast: "Included",
        lunch: "Not Included",
        dinner: "BBQ Dinner Included"
      }

    },


    /* ===================================================
       DAY 4
    =================================================== */

    {

      date: "7 February",

      shortDate: "07 Feb",

      title: "Burj Khalifa, Dubai Mall & Aquarium",

      description:
        "Explore Downtown Dubai with Burj Khalifa, Dubai Mall and the Dubai Aquarium, followed by time around the Fountain area.",

      highlights: [
        "🍳 Breakfast at hotel",
        "🌇 Burj Khalifa • Levels 124 & 125",
        "🛍️ Explore Dubai Mall",
        "🐠 Dubai Aquarium • Fountain area"
      ],

      imageKeys: [
        "burj_khalifa",
        "dubai_mall",
        "dubai_aquarium"
      ],

      note:
        "Dubai Fountain viewing is subject to the operating show schedule.",

      overnight: "Dubai",

      meals: {
        breakfast: "Included",
        lunch: "Not Included",
        dinner: "Not Included"
      }

    },


    /* ===================================================
       DAY 5
    =================================================== */

    {

      date: "8 February",

      shortDate: "08 Feb",

      title: "Abu Dhabi City Tour",

      description:
        "Travel to Abu Dhabi for a cultural sightseeing day featuring BAPS Hindu Mandir, Sheikh Zayed Grand Mosque and city landmarks.",

      highlights: [
        "🛕 BAPS Hindu Mandir",
        "🕌 Sheikh Zayed Grand Mosque",
        "🌊 Abu Dhabi Corniche drive",
        "🏨 Emirates Palace photo stop"
      ],

      imageKeys: [
        "baps_hindu_mandir",
        "sheikh_zayed_grand_mosque"
      ],

      note:
        "Sightseeing may be adjusted according to temple and mosque visiting hours and entry requirements.",

      overnight: "Dubai",

      meals: {
        breakfast: "Included",
        lunch: "Not Included",
        dinner: "Not Included"
      }

    },


    /* ===================================================
       DAY 6
    =================================================== */

    {

      date: "9 February",

      shortDate: "09 Feb",

      title: "Leisure Day",

      description:
        "Enjoy a relaxed day in Dubai with free time for shopping, personal activities or rest at your own pace.",

      highlights: [
        "🍳 Breakfast at hotel",
        "🌤️ Day at leisure",
        "🛍️ Shopping or personal activities",
        "🎟️ Optional attractions at additional cost"
      ],

      imageKeys: [
        "dubai_cover"
      ],

      note:
        "Optional attractions can be arranged separately at an additional cost.",

      overnight: "Dubai",

      meals: {
        breakfast: "Included",
        lunch: "Not Included",
        dinner: "Not Included"
      }

    },


    /* ===================================================
       DAY 7
    =================================================== */

    {

      date: "10 February",

      shortDate: "10 Feb",

      title: "Dubai Marina Dhow Cruise",

      description:
        "Spend the day at leisure before an evening transfer to Dubai Marina for a relaxing dinner cruise experience.",

      highlights: [
        "🍳 Breakfast at hotel",
        "🌤️ Day at leisure",
        "🚐 Evening transfer to Dubai Marina",
        "🚢 Dhow Cruise • Dinner • Entertainment • Return transfer"
      ],

      imageKeys: [
        "dubai_marina_jbr",
        "dubai_marina_dhow_cruise"
      ],

      note:
        "Cruise services and onboard entertainment will operate as per the selected cruise package.",

      overnight: "Dubai",

      meals: {
        breakfast: "Included",
        lunch: "Not Included",
        dinner: "Cruise Dinner Included"
      }

    },


    /* ===================================================
       DAY 8
    =================================================== */

    {

      date: "11 February",

      shortDate: "11 Feb",

      title: "Departure from Dubai",

      description:
        "Enjoy breakfast, complete hotel check-out and proceed by private transfer to Dubai International Airport for departure to Delhi.",

      highlights: [
        "🍳 Breakfast at hotel",
        "🧳 Hotel check-out",
        "🚘 Private airport transfer",
        "🛫 Departure to Delhi"
      ],

      imageKeys: [
        "departure"
      ],

      overnight: "Tour Ends",

      departure: true,

      meals: {
        breakfast: "Included",
        lunch: "Not Included",
        dinner: "Not Included"
      }

    }

  ],


  /* =====================================================
     PACKAGE INCLUSIONS

     Keep main package services grouped.
     Do not split every sub-feature into separate cards.
  ===================================================== */

  inclusions: [

    "🏨 7 Nights – Premier Inn Dubai Al Jaddaf",

    "🍳 Daily Breakfast",

    "🛂 Tourist Visas for 2 Adults",

    "🚘 Private Airport Arrival & Departure Transfers",

    "🚌 Shared Dubai Half-Day City Tour with Professional Guide",

    "🏜️ Premium Desert Safari – Shared 4x4, Dune Bashing, BBQ Dinner, Live Entertainment & Anniversary Cake",

    "🌇 Burj Khalifa – 124th & 125th Floors",

    "🐠 Dubai Aquarium Admission",

    "🕌 Abu Dhabi City Tour – BAPS Hindu Mandir & Sheikh Zayed Grand Mosque",

    "🚢 Dubai Marina Dhow Cruise with Dinner & Entertainment",

    "🚐 Sightseeing Transfers as Specified"

  ],


  /* =====================================================
     PACKAGE EXCLUSIONS
  ===================================================== */

  exclusions: [

    "✈️ International Airfare",

    "🍽️ Lunches & Dinners except meals specifically included",

    "🛍️ Personal Expenses & Shopping",

    "🛡️ Travel Insurance",

    "🎟️ Optional Attractions & Activities not listed under inclusions",

    "📌 Any services not specifically mentioned under Package Includes"

  ],


  /* =====================================================
     PRICE
  ===================================================== */

  price: {

    currency: "INR",

    amount: "149,000",

    label: "Grand Total Package Price",

    paxLabel: "For 2 Adults"

  },


  /* =====================================================
     FINAL PACKAGE NOTE
  ===================================================== */

  finalNote:
    "Hotel, attraction tickets, visa and transfer arrangements are subject to availability and final confirmation. Abu Dhabi sightseeing may be adjusted according to temple and mosque visiting hours."

};