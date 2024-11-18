const games = [
  {
    id: 1,
    title: "Axie Infinity",
    genres: ["RPG", "Strategy"],
    image:
      "https://gam3s.gg/_next/image/?url=https%3A%2F%2Fassets.polkastarter.gg%2Flife_beyond_cover_33cfd26884%2Flife_beyond_cover_33cfd26884.jpg&w=640&q=80",
    platforms: ["PC", "Mobile"],
  },
  {
    id: 2,
    title: "Gods Unchained",
    genres: ["Card Game", "Strategy"],
    image:
      "https://gam3s.gg/_next/image/?url=https%3A%2F%2Fassets.polkastarter.gg%2Fmetaops_28b2d1c9f0%2Fmetaops_28b2d1c9f0.jpg&w=640&q=80",
    platforms: ["PC"],
  },
  {
    id: 3,
    title: "The Sandbox",
    genres: ["Metaverse", "Adventure"],
    image:
      "https://gam3s.gg/_next/image/?url=https%3A%2F%2Fassets.polkastarter.gg%2FAstra_Nova_cover_9ecc4a347e%2FAstra_Nova_cover_9ecc4a347e.jpg&w=640&q=80",
    platforms: ["PC"],
  },
  {
    id: 4,
    title: "Illuvium",
    genres: ["RPG", "Adventure"],
    image:
      "https://gam3s.gg/_next/image/?url=https%3A%2F%2Fassets.polkastarter.gg%2Flife_beyond_cover_33cfd26884%2Flife_beyond_cover_33cfd26884.jpg&w=640&q=80",
    platforms: ["PC"],
  },
  {
    id: 5,
    title: "Splinterlands",
    genres: ["Card Game", "Strategy"],
    image:
      "https://gam3s.gg/_next/image/?url=https%3A%2F%2Fassets.polkastarter.gg%2Fmetaops_28b2d1c9f0%2Fmetaops_28b2d1c9f0.jpg&w=640&q=80",
    platforms: ["PC", "Mobile"],
  },
  {
    id: 6,
    title: "Alien Worlds",
    genres: ["Simulation", "Adventure"],
    image:
      "https://gam3s.gg/_next/image/?url=https%3A%2F%2Fassets.polkastarter.gg%2FAstra_Nova_cover_9ecc4a347e%2FAstra_Nova_cover_9ecc4a347e.jpg&w=640&q=80",
    platforms: ["PC"],
  },
  {
    id: 7,
    title: "Star Atlas",
    genres: ["Space Exploration", "Strategy"],
    image:
      "https://gam3s.gg/_next/image/?url=https%3A%2F%2Fassets.polkastarter.gg%2Flife_beyond_cover_33cfd26884%2Flife_beyond_cover_33cfd26884.jpg&w=640&q=80",
    platforms: ["PC"],
  },
  {
    id: 8,
    title: "Big Time",
    genres: ["RPG", "Adventure"],
    image:
      "https://gam3s.gg/_next/image/?url=https%3A%2F%2Fassets.polkastarter.gg%2Fmetaops_28b2d1c9f0%2Fmetaops_28b2d1c9f0.jpg&w=640&q=80",
    platforms: ["PC"],
  },
  {
    id: 9,
    title: "CryptoBlades",
    genres: ["RPG", "Strategy"],
    image:
      "https://gam3s.gg/_next/image/?url=https%3A%2F%2Fassets.polkastarter.gg%2FAstra_Nova_cover_9ecc4a347e%2FAstra_Nova_cover_9ecc4a347e.jpg&w=640&q=80",
    platforms: ["PC"],
  },
  {
    id: 10,
    title: "F1 Delta Time",
    genres: ["Racing", "Simulation"],
    image:
      "https://gam3s.gg/_next/image/?url=https%3A%2F%2Fassets.polkastarter.gg%2Flife_beyond_cover_33cfd26884%2Flife_beyond_cover_33cfd26884.jpg&w=640&q=80",
    platforms: ["PC"],
  },
  {
    id: 11,
    title: "My Neighbor Alice",
    genres: ["Simulation", "Adventure"],
    image:
      "https://gam3s.gg/_next/image/?url=https%3A%2F%2Fassets.polkastarter.gg%2Fmetaops_28b2d1c9f0%2Fmetaops_28b2d1c9f0.jpg&w=640&q=80",
    platforms: ["PC"],
  },
  {
    id: 12,
    title: "TownStar",
    genres: ["Simulation", "Strategy"],
    image:
      "https://gam3s.gg/_next/image/?url=https%3A%2F%2Fassets.polkastarter.gg%2FAstra_Nova_cover_9ecc4a347e%2FAstra_Nova_cover_9ecc4a347e.jpg&w=640&q=80",
    platforms: ["PC"],
  },
  {
    id: 13,
    title: "Blankos Block Party",
    genres: ["Action", "Adventure"],
    image:
      "https://gam3s.gg/_next/image/?url=https%3A%2F%2Fassets.polkastarter.gg%2Flife_beyond_cover_33cfd26884%2Flife_beyond_cover_33cfd26884.jpg&w=640&q=80",
    platforms: ["PC"],
  },
  {
    id: 14,
    title: "Chain Guardians",
    genres: ["RPG", "Strategy"],
    image:
      "https://gam3s.gg/_next/image/?url=https%3A%2F%2Fassets.polkastarter.gg%2Fmetaops_28b2d1c9f0%2Fmetaops_28b2d1c9f0.jpg&w=640&q=80",
    platforms: ["PC"],
  },
  {
    id: 15,
    title: "WorldWide Webb",
    genres: ["Metaverse", "Social"],
    image:
      "https://gam3s.gg/_next/image/?url=https%3A%2F%2Fassets.polkastarter.gg%2FAstra_Nova_cover_9ecc4a347e%2FAstra_Nova_cover_9ecc4a347e.jpg&w=640&q=80",
    platforms: ["PC"],
  },
  {
    id: 16,
    title: "Sorare",
    genres: ["Sports", "Card Game"],
    image:
      "https://gam3s.gg/_next/image/?url=https%3A%2F%2Fassets.polkastarter.gg%2Flife_beyond_cover_33cfd26884%2Flife_beyond_cover_33cfd26884.jpg&w=640&q=80",
    platforms: ["PC"],
  },
  {
    id: 17,
    title: "Mirandus",
    genres: ["RPG", "Adventure"],
    image:
      "https://gam3s.gg/_next/image/?url=https%3A%2F%2Fassets.polkastarter.gg%2Fmetaops_28b2d1c9f0%2Fmetaops_28b2d1c9f0.jpg&w=640&q=80",
    platforms: ["PC"],
  },
  {
    id: 18,
    title: "League of Kingdoms",
    genres: ["Strategy", "MMO"],
    image:
      "https://gam3s.gg/_next/image/?url=https%3A%2F%2Fassets.polkastarter.gg%2FAstra_Nova_cover_9ecc4a347e%2FAstra_Nova_cover_9ecc4a347e.jpg&w=640&q=80",
    platforms: ["PC"],
  },
  {
    id: 19,
    title: "CryptoKitties",
    genres: ["Collectible", "Simulation"],
    image:
      "https://gam3s.gg/_next/image/?url=https%3A%2F%2Fassets.polkastarter.gg%2Flife_beyond_cover_33cfd26884%2Flife_beyond_cover_33cfd26884.jpg&w=640&q=80",
    platforms: ["PC"],
  },
  {
    id: 20,
    title: "Zed Run",
    genres: ["Simulation", "Racing"],
    image:
      "https://gam3s.gg/_next/image/?url=https%3A%2F%2Fassets.polkastarter.gg%2Fmetaops_28b2d1c9f0%2Fmetaops_28b2d1c9f0.jpg&w=640&q=80",
    platforms: ["PC"],
  },
];

export default games;
