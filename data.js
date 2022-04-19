const events = [
  {
    id: 'ayayay',
    featured: true,
    // title: 'Christian Nodal',
    // text: 'AYAYAY! 2022 tour',
    artist: { id: 'nodal', name: 'Christian Nodal' },
    priceRange: { min: 10, max: 2000 },
    bigImage: '/images1/events/nodal/ayayay/big.jpg',
    rate: '4.7',
  },
  {
    id: 'papi',
    featured: true,
    // title: 'Maluma',
    // text: "Papi Juancho Europe Tour 2022",
    artist: { id: 'maluma', name: 'Maluma' },
    bigImage: '/images1/events/maluma/papi/big.webp',
    bigImageHasTitle: true,
    rate: '5',
  },
  {
    id: '40años',
    featured: true,
    // title: 'NFL Tickets',
    // text: "Grab tickets today and be there live in the stands!",
    artist: { id: 'angeles', name: 'Los Ángeles Azules' },
    bigImage: '/images1/events/angeles/40años/big.jpg',
    bigImageHasTitle: true,
    rate: '5'
  },
];
const americanExpresses = [
  { time1 : "PRESALE: THU-NOV-9PM", time2 : "SUN.MAR.8:00 PM", title: "Elton Jonhn: Farewell Yellow Brick Road", text: "Lincoln, NE.Pinnacle Bank Arena", url: "/images/Homepage1/Rectangle 188.png" },
  { time1: "PRESALE: THU-DEC-7PM", time2: "WED.APR 27.6:30 PM", title: "HAIM One More HAIM Tour", text: "Berkeley, CA.Greek Theatre-U.C.Berkeley", url: "/images/Homepage1/Rectangle 18 (2).png" },
  { time1: "PRESALE: THU-NOV-9PM", time2: "SUN.MAR 28.8:00 PM", title: "Elton Jonhn: Farewell Yellow Brick Road", text: "Lincoln, NE.Pinnacle Bank Arena", url: "/images/Homepage1/Rectangle 18 (1).png" },
];
const browseCategories = [
  { title: "Concerts", url1: "/images/Homepage1/Mask Group.png", url2: "/images/Homepage1/Group 90.png" },
  { title: "Sports", url1: "/images/Homepage1/Group 94.png", url2: "/images/Homepage1/Group 91.png" },
  { title: "Arts & Theatre", url1: "/images/Homepage1/Group 95.png", url2: "/images/Homepage1/Group 92.png" },
  { title: "Family", url1: "/images/Homepage1/Group 96.png", url2: "/images/Homepage1/Group 93.png" },
];
const topSellings = [
  { title: "Eagles", text: "In today&apos;s faddish, fractured rock landscape, it&apos;s refreshing that classic", events: "17", star: "5", url: "/images/Homepage1/Group 97.png"  },
  { title: "Imagine Dragons", text: "What happens in Vegas doesnot always stay in Vegas, and Imagine Dragons", events: "15", star: "5", url: "/images/Homepage1/Group 98.png"  },
  { title: "Bad Bunny", text: "It&apos;s undeniable that Bad Bunny is one of the hottest Latin trap stars of our time", events: "26", star: "5", url: "/images/Homepage1/Group 99.png"  },
  ];
const sports = [
  { title: "Charlotte Hornets", text: "In today&apos;s faddish, fractured rock landscape, it&apos;s refreshing that classic", events: "12", star: "2", url: "/images/Homepage1/Group 108.png"  },
  { title: "Imagine Pacers", text: "What happens in Vegas doesnot always stay in Vegas, and Imagine Dragons", events: "31", star: "3", url: "/images/Homepage1/Group 109.png"  },
  { title: "Utah Jazz", text: "It&apos;s undeniable that Bad Bunny is one of the hottest Latin trap stars of our time", events: "12", star: "5", url: "/images/Homepage1/Group 111.png"  },
  { title: "San Antonio Spurs", text: "The world is a confusing place, but there&apos;s one resounding truth", events: "15", star: "2", url: "/images/Homepage1/Group 110.png"  },
  { title: "Altlanta Hawks", text: "It&apos;s undeniable that Bad Bunny is one of the hottest Latin trap stars of our time", events: "16", star: "1", url: "/images/Homepage1/Group 112.png"  },
  { title: "Miami Heat", text: "Coldplay is one of the best-loved British rock bands in the world, with numerous", events: "11", star: "5", url: "/images/Homepage1/Group 113.png"  },
  { title: "Memphis Grizzlies", text: "In today&apos;s faddish, fractured rock landscape, it&apos;s refreshing that classic", events: "18", star: "4", url: "/images/Homepage1/Group 114.png"  },
  { title: "Dallas Cowboys", text: "The world is a confusing place, but there&apos;s one resounding truth", events: "10", star: "5", url: "/images/Homepage1/Group 115.png"  },
];
const artsTheaters = [
  { title: "Sebastian Maniscalco", text: "In today&apos;s faddish, fractured rock landscape, it&apos;s refreshing that classic", events: "12", star: "4", url: "/images/Homepage1/Group 116.png"  },
  { title: "John Mulaney", text: "What happens in Vegas doesnot always stay in Vegas, and Imagine Dragons", events: "12", star: "4", url: "/images/Homepage1/Group 117.png"  },
  { title: "Trevor Noah", text: "It&apos;s undeniable that Bad Bunny is one of the hottest Latin trap stars of our time", events: "12", star: "4", url: "/images/Homepage1/Group 118.png"  },
  { title: "Cedic The EnterTainer", text: "The world is a confusing place, but there&apos;s one resounding truth", events: "12", star: "4", url: "/images/Homepage1/Group 119.png"  },
  { title: "Joe Hisaishi", text: "It&apos;s undeniable that Bad Bunny is one of the hottest Latin trap stars of our time", events: "12", star: "4", url: "/images/Homepage1/Group 120.png"  },
  { title: "Hasan Minhaj", text: "Coldplay is one of the best-loved British rock bands in the world, with numerous", events: "12", star: "4", url: "/images/Homepage1/Group 121.png"  },
  { title: "Jeff Dunham", text: "In today&apos;s faddish, fractured rock landscape, it&apos;s refreshing that classic", events: "12", star: "4", url: "/images/Homepage1/Group 122.png"  },
  { title: "Bill Burr", text: "The world is a confusing place, but there&apos;s one resounding truth", events: "12", star: "4", url: "/images/Homepage1/Group 123.png"  },
];
const families = [
  { artist: { id: 'nodal', name: 'Christian Nodal' }, title: "Disney On Ice presents Dream Big", text: "In today&apos;s faddish, fractured rock landscape, it&apos;s refreshing that classic", events: "12", star: "5", url: "/images/Homepage1/Group 124.png"  },
  { artist: { id: 'maluma', name: 'Maluma' }, title: "PBR: Unleash the Beast", text: "What happens in Vegas doesnot always stay in Vegas, and Imagine Dragons", events: "21", star: "3", url: "/images/Homepage1/Group 125.png"  },
  { artist: { id: 'angeles', name: 'Los Ángeles Azules' }, title: "Dude Perfect", text: "It&apos;s undeniable that Bad Bunny is one of the hottest Latin trap stars of our time", events: "4", star: "4", url: "/images/Homepage1/Group 126.png"  },
  { artist: { id: 'nodal', name: 'Christian Nodal' }, title: "World&apos;s Toughest Rodeo", text: "The world is a confusing place, but there&apos;s one resounding truth", events: "12", star: "1", url: "/images/Homepage1/Group 127.png"  },
  { artist: { id: 'nodal', name: 'Christian Nodal' }, title: "Disney On Ice presents Dream Big", text: "It&apos;s undeniable that Bad Bunny is one of the hottest Latin trap stars of our time", events: "14", star: "3", url: "/images/Homepage1/Group 128.png"  },
  { artist: { id: 'nodal', name: 'Christian Nodal' }, title: "World&apos;s Tougest Rodeo", text: "Coldplay is one of the best-loved British rock bands in the world, with numerous", events: "15", star: "4", url: "/images/Homepage1/Group 129.png"  },
  { artist: { id: 'nodal', name: 'Christian Nodal' }, title: "Disney On Ice presents Mickey and Friends", text: "In today&apos;s faddish, fractured rock landscape, it&apos;s refreshing that classic", events: "16", star: "5", url: "/images/Homepage1/Group 130.png"  },
  { artist: { id: 'nodal', name: 'Christian Nodal' }, title: "World&apos;s toughest Rodeo", text: "The world is a confusing place, but there&apos;s one resounding truth", events: "17", star: "5", url: "/images/Homepage1/Group 127.png"  },
];
const discoverMoreEvents = [
  { title: "NFL", text: "Explore NFL ticket options from te Official Ticket Exchange of the NFL", url: "/images/Homepage1/Rectangle 36.png"  },
  { title: "NBA", text: "Find great tickets for your favorite NBA teams for must-see games", url: "/images/Homepage1/Rectangle 36 (1).png"  },
  { title: "NHL", text: "Get verified tickets to watch your favourite NHL team take the ice.", url: "/images/Homepage1/Rectangle 36 (2).png"  },
  { title: "College Football Playoff", text: "Find tickets to the national college football championship on Jan. 10, 2022", url: "/images/Homepage1/Rectangle 36 (3).png"  },
  { title: "Vas Vegas", text: "Exploring what to see and do in Las Vegas.", url: "/images/Homepage1/Rectangle 36 (4).png"  },
  { title: "Broadway in New York", text: "Don&apos;t miss the hottest musicals and plays happening on Broadway.", url: "/images/Homepage1/Rectangle 36 (5).png"  },

];
const eventDates = [
  {
    artistId: 'maluma',
    eventId: 'ayayay',
    date: 'Mar 18',
    city: 'Ciudad Juárez, Mexico',
    venue: 'Estadio Juárez Vive',
  },
  {
    artistId: 'nodal',
    eventId: 'ayayay',
    date: 'Mar 19',
    city: 'Chihuahua, Mexico',
    venue: 'Estadio Monumental',
  },
  {
    artistId: 'nodal',
    eventId: 'ayayay',
    date: 'Mar 26',
    city: 'Medellín, Colombia',
    venue: 'Estadio Atanasio Girardot',
  },
  {
    artistId: '40años',
    eventId: 'angeles',
    date: 'Apr 3',
    city: 'Manta, Ecuador',
    venue: 'Estadio Jocay',
  },
  {
    artistId: 'maluma',
    eventId: 'papi',
    date: 'Apr 30',
    city: ' Tijuana, Mexico',
    venue: 'Estadio Caliente',
  },
  {
    artistId: 'nodal',
    eventId: 'ayayay',
    date: 'Jun 3',
    city: 'Outdoor',
    venue: 'Morelia, Mexico',
  },
  {
    artistId: 'nodal',
    eventId: 'ayayay',
    date: 'Jul 1',
    city: ' Santiago, Chile',
    venue: 'Movistar Arena',
  },
  {
    artistId: 'nodal',
    eventId: 'ayayay',
    date: 'Jul 8',
    city: ' Ciudad Madero, Mexico',
    venue: 'Domo Madero',
  },
];

const artists = [
  {
    id: 'nodal',
    featured: true,
    name: 'Christian Nodal',
    currentTour: 'ayayay',
    smallImage: 'small.png',
    description:
      'Nodal has won three Latin Grammy Awards, a Lo Nuestro Award, two Billboard Latin Music Awards, and a Latin American Music Award.',
  },
  {
    id: 'maluma',
    featured: true,
    name: 'Maluma',
    smallImage: 'small.jpg',
    description:
      'Maluma has become one of the biggest male superstars in Latin music, filling stadiums around the world.',
  },
  {
    id: 'angeles',
    featured: true,
    name: 'Los Ángeles Azules',
    smallImage: 'small.webp',
    description:
      'Los Ángeles Azules are a Mexican musical group that plays the cumbia sonidera genre.',
  },
];

const venues = [
  {
    id: 'monumental',
    featured: true,
    name: 'Plaza de Toros Monumental de Morelia',
    smallImage: 'venues/monumental/small.jpg',
    description:
      'Plaza Monumental de Morelia, is a multi-purpose complex in Morelia, in the state of Michoacán, Mexico. ',
  },
  {
    id: 'caliente',
    featured: true,
    name: 'Estadio Caliente',
    smallImage: 'venues/caliente/small.webp',
    description:
      'The Estadio Caliente Xoloitzcuintles is a multi-use stadium in Tijuana, Baja California, Mexico. ',
  },
];

const artistDetails = [
  {
    artistId: 'nodal',
    bio: '<b>Christian Nodal</b> is the most important youth soloist of the Mexican Regional genre, with only 19 years of age, he has managed to place 5 singles in the first place of the specialized charts for several weeks “No Te Contaron Mal”, “ Me Deje Llevar”, “Adios Amor”, “Te Fallé”, “Eres”", and on Youtube, he has more than a trillion visits, on Spotify more than 3.7 million listeners per month.  Multi-awarded in Mexico and the United States, the only Mexican regional artist in the 21st 21, with 3 awards on Billboard, 2 on iHeartradio, a Latin Grammy to name a few, is a singer who has broken the schemes of this competitive and difficult genre. Proving that to achieve success, age does not matter, it matters the talent, discipline, dedication to 100% and a great team.<p>After his already successful tour in Mexico and the USA, "DE TU MANO TOUR", he is starting 2019 with his "Ahora" tour, where besides his traditional Mariacheño, he will present several surprises that will surely please his fans.</p>',
  },
  {
    artistId: 'maluma',
    bio: '<b>Maluma </b> is the most important youth soloist of the Mexican Regional genre, with only 19 years of age, he has managed to place 5 singles in the first place of the specialized charts for several weeks “No Te Contaron Mal”, “ Me Deje Llevar”, “Adios Amor”, “Te Fallé”, “Eres”", and on Youtube, he has more than a trillion visits, on Spotify more than 3.7 million listeners per month.  Multi-awarded in Mexico and the United States, the only Mexican regional artist in the 21st 21, with 3 awards on Billboard, 2 on iHeartradio, a Latin Grammy to name a few, is a singer who has broken the schemes of this competitive and difficult genre. Proving that to achieve success, age does not matter, it matters the talent, discipline, dedication to 100% and a great team.<p>After his already successful tour in Mexico and the USA, "DE TU MANO TOUR", he is starting 2019 with his "Ahora" tour, where besides his traditional Mariacheño, he will present several surprises that will surely please his fans.</p>',
  },
  {
    artistId: 'angeles',
    bio: '<b>Angeles </b> is the most important youth soloist of the Mexican Regional genre, with only 19 years of age, he has managed to place 5 singles in the first place of the specialized charts for several weeks “No Te Contaron Mal”, “ Me Deje Llevar”, “Adios Amor”, “Te Fallé”, “Eres”", and on Youtube, he has more than a trillion visits, on Spotify more than 3.7 million listeners per month.  Multi-awarded in Mexico and the United States, the only Mexican regional artist in the 21st 21, with 3 awards on Billboard, 2 on iHeartradio, a Latin Grammy to name a few, is a singer who has broken the schemes of this competitive and difficult genre. Proving that to achieve success, age does not matter, it matters the talent, discipline, dedication to 100% and a great team.<p>After his already successful tour in Mexico and the USA, "DE TU MANO TOUR", he is starting 2019 with his "Ahora" tour, where besides his traditional Mariacheño, he will present several surprises that will surely please his fans.</p>',
  },
];

const lowestLists = [
  { ticketId: "1", title: "Sec 232", row: "1", comment: "VIP", price: 36.00, type: "Mobile Entry" },
  { ticketId: "2", title: "Sec 201", row: "2", comment: "BARRERA SOMBRA", price: 36.00, type: "Mobile Entry" },
  { ticketId: "3", title: "Sec 354", row: "3", comment: "1ER TENDIDO SOMBRA", price: 36.00, type: "Mobile Entry" },
  { ticketId: "4", title: "Sec 201", row: "2", comment: "2DO TENDIDO SOMBRA", price: 36.00, type: "Mobile Entry" },
  { ticketId: "5", title: "Sec 201", row: "3", comment: "BARRERA SOMBRA", price: 190.00, type: "Mobile Entry" },
  { ticketId: "6", title: "Sec 321", row: "4", comment: "GENERAL SOMBRA", price: 190.00, type: "Mobile Entry" },
  { ticketId: "7", title: "Sec 201", row: "6", comment: "2DO TENDIDO SOMBRA", price: 190.00, type: "Mobile Entry" },
  { ticketId: "8", title: "Sec 123", row: "2", comment: "Resale Ticket", price: 184.00, type: "Mobile Entry" },
  { ticketId: "9", title: "Sec 201", row: "4", comment: "BARRERA SOMBRA", price: 190.00, type: "Mobile Entry" },
  { ticketId: "10", title: "Sec 201", row: "2", comment: "GENERAL SOMBRA", price: 190.00, type: "Mobile Entry" },
  { ticketId: "11", title: "Sec 232", row: "2", comment: "BARRERA SOMBRA", price: 190.00, type: "Mobile Entry" },
  { ticketId: "12", title: "Sec 201", row: "4", comment: "1ER TENDIDO SOMBRA", price: 190.00, type: "Mobile Entry" },
  { ticketId: "13", title: "Sec 232", row: "3", comment: "T. ALTO", price: 140.00, type: "Mobile Entry" },
  { ticketId: "14", title: "Sec 242", row: "1", comment: "1ER TENDIDO SOMBRA", price: 190.00, type: "Mobile Entry" },
  { ticketId: "15", title: "Sec 201", row: "1", comment: "T. ALTO", price: 190.00, type: "Mobile Entry" },
  { ticketId: "16", title: "Sec 201", row: "2", comment: "GENERAL SOMBRA", price: 120.00, type: "Mobile Entry" },
]
const sectionLists = [
  { ticketId: "1", title: "Setion 1", row: "2", comment: "GENERAL SOMBRA", price: 190.00, type: "Mobile Entry" },
  { ticketId: "2", title: "Setion 2", row: "5", comment: "GENERAL SOMBRA", price: 36.00, type: "Mobile Entry" },
  { ticketId: "3", title: "Setion 1", row: "4", comment: "BARRERA SOMBRA", price: 36.00, type: "Mobile Entry" },
  { ticketId: "4", title: "Setion 4", row: "6", comment: "GENERAL SOMBRA", price: 36.00, type: "Mobile Entry" },
  { ticketId: "5", title: "Setion 5", row: "2", comment: "BARRERA SOMBRA", price: 36.00, type: "Mobile Entry" },
  { ticketId: "6", title: "Setion 4", row: "2", comment: "T. ALTO", price: 36.00, type: "Mobile Entry" },
  { ticketId: "7", title: "Setion 1", row: "1", comment: "BARRERA SOMBRA", price: 15.00, type: "Mobile Entry" },
  { ticketId: "8", title: "Setion 3", row: "4", comment: "T. ALTO", price: 189.00, type: "Mobile Entry" },
  { ticketId: "9", title: "Setion 1", row: "2", comment: "2DO TENDIDO SOMBRA", price: 5.00, type: "Mobile Entry" },
  { ticketId: "10", title: "Setion 3", row: "2", comment: "1ER TENDIDO SOMBRA", price: 136.00, type: "Mobile Entry" },
  { ticketId: "11", title: "Setion 2", row: "1", comment: "2DO TENDIDO SOMBRA", price: 326.00, type: "Mobile Entry" },
  { ticketId: "12", title: "Setion 5", row: "3", comment: "VIP", price: 361.00, type: "Mobile Entry" },
  { ticketId: "13", title: "Setion 6", row: "5", comment: "1ER TENDIDO SOMBRA", price: 361.00, type: "Mobile Entry" },
  { ticketId: "14", title: "Setion 2", row: "6", comment: "1ER TENDIDO SOMBRA", price: 76.00, type: "Mobile Entry" },
  { ticketId: "15", title: "Setion 2", row: "2", comment: "VIP", price: 36.00, type: "Mobile Entry" },
  { ticketId: "16", title: "Setion 1", row: "3", comment: "T. ALTO", price: 36.00, type: "Mobile Entry" },
]

const ticketsDetails = [
  { ticketId: "11", title: "AYAYAY! TOUR", date: "Sunday, April 10, 2022 at 7.00 AM", quantity: "3", priceLevel: "Bowl", level: "BARRERA SOMBRA", section: "1", Row: "2", seats: "6-8", totalPrice: 410, orderCharge: 30, currency: "USD" },
  { ticketId: "2", title: "Imagine Ghost", date: "Monday, April 11, 2022 at 8.00 AM", quantity: "5", priceLevel: "Rowl", level: "MAIN", section: "102H", Row: "3", seats: "6-8", totalPrice: 645, orderCharge: 5, currency: "USD" },
  { ticketId: "3", title: "Imagine Crow", date: "Thesday, April 14, 2022 at 9.00 AM", quantity: "7", priceLevel: "Bowl", level: "MAIN", section: "102H", Row: "3", seats: "6-8", totalPrice: 235, orderCharge: 5, currency: "USD" },
  { ticketId: "4", title: "Imagine Dragons", date: "Sunday, April 10, 2022 at 3.00 AM", quantity: "3", priceLevel: "Cwrol", level: "MAIN", section: "102H", Row: "3", seats: "6-8", totalPrice: 363, orderCharge: 5, currency: "USD" },
  { ticketId: "5", title: "Imagine Dragons", date: "Sunday, April 10, 2022 at 5.00 PM", quantity: "2", priceLevel: "Bowl", level: "MAIN", section: "102H", Row: "3", seats: "6-8", totalPrice: 523, orderCharge: 5, currency: "USD" },
  { ticketId: "6", title: "Imagine Sven", date: "Sunday, April 10, 2022 at 7.00 AM", quantity: "6", priceLevel: "Bowl", level: "MAIN", section: "102H", Row: "3", seats: "6-8", totalPrice: 524, orderCharge: 5, currency: "USD" },
  { ticketId: "7", title: "Imagine Dragons", date: "Sunday, April 10, 2022 at 11.00 AM", quantity: "3", priceLevel: "Bowl", level: "MAIN", section: "102H", Row: "3", seats: "6-8", totalPrice: 233, orderCharge: 5, currency: "USD" },
  { ticketId: "8", title: "Imagine Dragons", date: "Sunday, April 10, 2022 at 7.00 AM", quantity: "6", priceLevel: "Bowl", level: "MAIN", section: "102H", Row: "3", seats: "6-8", totalPrice: 633, orderCharge: 5, currency: "USD" },
  { ticketId: "9", title: "Imagine Dragons", date: "Sunday, April 10, 2022 at 5.00 PM", quantity: "7", priceLevel: "Bowl", level: "MAIN", section: "102H", Row: "3", seats: "6-8", totalPrice: 433, orderCharge: 5, currency: "USD" },
  { ticketId: "10", title: "Imagine Dragons", date: "Sunday, April 10, 2022 at 7.00 AM", quantity: "2", priceLevel: "Bowl", level: "MAIN", section: "102H", Row: "3", seats: "6-8", totalPrice: 533, orderCharge: 5, currency: "USD" },
  { ticketId: "1", title: "Imagine Dragons", date: "Sunday, April 10, 2022 at 7.00 AM", quantity: "3", priceLevel: "Bowl", level: "MAIN", section: "102H", Row: "3", seats: "6-8", totalPrice: 633, orderCharge: 5, currency: "USD" },
  { ticketId: "12", title: "Imagine Dragons", date: "Sunday, April 10, 2022 at 7.12 AM", quantity: "4", priceLevel: "Bowl", level: "MAIN", section: "102H", Row: "3", seats: "6-8", totalPrice: 233, orderCharge: 5, currency: "USD" },
  { ticketId: "13", title: "Imagine Dragons", date: "Sunday, April 10, 2022 at 7.00 AM", quantity: "3", priceLevel: "Bowl", level: "MAIN", section: "102H", Row: "3", seats: "6-8", totalPrice: 533, orderCharge: 5, currency: "USD" },
]

const tickets = require('./data/tickets.json');

function getAllEvents() {
  return events;
}
function getAmericanExpress() {
  return americanExpresses;
}
function getBrowseCategory() {
  return browseCategories;
}
function getTopSelling() {
  return topSellings;
}
function getSport() {
  return sports;
}
function getArtsTheater() {
  return artsTheaters;
}
function getFamily() {
  return families;
}
function getDiscoverMoreEvent() {
  return discoverMoreEvents;
}
function getLowestLists(minState, maxState) {
  return lowestLists.filter((lowestList) => 
    lowestList.price >= minState &&
    lowestList.price < maxState
  );
}
function getSectionLists(minState, maxState) {
  return sectionLists.filter((sectionList) => 
    sectionList.price >= minState &&
    sectionList.price < maxState
  );
}

async function getHeaderEvents() {
  return events.filter((event) => event.featured);
}

function getFamilyById(artistId) {
  return families.find(
    (family) => family.artist.id == artistId
  );
}

async function getEvent(artistId, eventId) {
  return events.find(
    (event) => event.id == eventId && event.artist.id == artistId
  );
}

function getEventsByMonth(year, month) {
  return events.filter((event) => event.year === year && eve);
}

function getAllArtists() {
  return artists;
}

function getArtist(artistId) {
  return artists.find((artist) => artist.id === artistId);
}

async function getArtistDetails(id) {
  return artistDetails.find((ad) => ad.artistId == id);
}

async function getFeaturedArtists() {
  return artists.filter((artist) => artist.featured);
}

async function getFeaturedVenues() {
  return venues.filter((venue) => venue.featured);
}

async function getTickets(
  artistId,
  eventId,
  numberOfTickets,
  zone,
  priceRange
) {
  return tickets.filter(
    (ticket) =>
      ticket.event.artist.id == artistId &&
      ticket.event.id == eventId &&
      ticket.seats.count >= numberOfTickets &&
      (!zone || ticket.zone.id == zone) &&
      (!priceRange ||
        (ticket.price.value >= priceRange.min &&
          ticket.price.value <= priceRange.max))
  );
}

async function getEventDates(artistId, eventId) {
  return eventDates.filter(
    (eventDate) =>
      eventDate.artistId == artistId && eventDate.eventId == eventId
  );
}

async function getTicketDetails(ticketId) {
  return ticketsDetails.find(
    (ticketsDetail) =>
    ticketsDetail.ticketId == ticketId
  );
}

async function getEventDate(artistId, eventId, date) {
  return eventDates.find(
    (eventDate) =>
      eventDate.artistId == artistId && eventDate.eventId == eventId && eventDate.date == date 
  );
}

function getVenueSetupByEvent(venueId) {
  return {
    maxTickets: 8,
    zones: [
      { value: 1, label: 'VIP' },
      { value: 2, label: 'BARRERA SOMBRA' },
      { value: 3, label: '1ER TENDIDO SOMBRA' },
      { value: 4, label: '2DO TENDIDO SOMBRA' },
      { value: 5, label: 'GENERAL SOMBRA' },
      { value: 6, label: 'T. ALTO' },
    ],
  };
}

module.exports = {
  getAllEvents,
  getHeaderEvents,
  getAmericanExpress,
  getBrowseCategory,
  getTopSelling,
  getSport,
  getArtsTheater,
  getFamily,
  getFamilyById,
  getDiscoverMoreEvent,
  getEvent,
  getFeaturedArtists,
  getArtist,
  getArtistDetails,
  getFeaturedVenues,
  getTickets,
  getTicketDetails,
  getEventDates,
  getEventDate,
  getVenueSetupByEvent,
  getLowestLists,
  getSectionLists,
};
