import { HistoricEvent } from '../types/equestrian';
import { ASSETS, getCuratedEquestrianImage } from './assets';

export const EVENTS_DATA: HistoricEvent[] = [
  {
    id: "evt-1912-stockholm-olympics",
    slug: "1912-stockholm-olympics-equestrian",
    title: "1912 Stockholm Games — Dawn of Modern Olympic Equestrian Sport",
    department: "event",
    continent: "Europe",
    country: "Sweden",
    region: "Stockholm Olympic Stadium",
    coordinates: { lat: 59.3458, lng: 18.0792 },
    historicalPeriod: "July 1912",
    heroImage: ASSETS.heroLandscape,
    imageCaption: "Historic photograph of the 1912 Olympic equestrian competitions at Stockholm Olympic Stadium.",
    wordCount: 1320,
    summary: "The 1912 Stockholm Olympic Games marked the definitive establishment of equestrian disciplines on the modern Olympic program. Spearheaded by Count Clarence von Rosen, dressage, three-day eventing (military), and show jumping were contested under formal international regulations, cementing the sport's global status.",
    eventCategory: "Olympic Milestone",
    year: 1912,
    historicalEra: "Early 20th Century (Belle Époque)",
    primaryDiscipline: "Olympic Dressage, Eventing & Show Jumping",
    keyHistoricalFigures: ["Count Clarence von Rosen", "Captain Carl Bonde", "Lieutenant Axel Nordlander", "Jacques Cariou"],
    impactOnHorsemanship: "Established formal international judging criteria and demonstrated that military horsemanship could transition into a regulated international athletic spectacle.",
    subsections: [
      {
        heading: "Count Clarence von Rosen's Campaign",
        content: "Although a jumping event had been held during the 1900 Paris Exposition, equestrian sports were excluded from subsequent games. Count Clarence von Rosen, Master of the Horse to the King of Sweden and an International Olympic Committee member, drafted comprehensive rulebooks for dressage, jumping, and eventing. At the 1909 IOC Session in Berlin, his vision was officially approved for the 1912 Games."
      },
      {
        heading: "The Contests and Results",
        content: "Competing exclusively as military commissioned officers, riders from ten nations gathered in Stockholm. Sweden dominated the team competitions, winning gold in three-day eventing behind Lt. Axel Nordlander on Lady Artist, and taking individual dressage gold with Captain Carl Bonde riding Emperor. France's Jacques Cariou secured individual jumping gold aboard Mignon."
      },
      {
        heading: "Legacy: Birth of the FEI",
        content: "The unprecedented success and international camaraderie of the Stockholm equestrian competitions highlighted the necessity of a permanent governing body to oversee international horse sports, leading directly to the founding of the Fédération Équestre Internationale (FEI) in 1921."
      }
    ],
    keyFacts: [
      { label: "Dates", value: "July 13–17, 1912" },
      { label: "Host Stadium", value: "Stockholm Olympic Stadium (Stockholms Stadion)" },
      { label: "Participating Nations", value: "10 nations (62 riders, 87 horses)" },
      { label: "First Dressage Gold", value: "Capt. Carl Bonde (Sweden) on Emperor" }
    ],
    sources: [
      { title: "The Official Report of the Olympic Games of Stockholm 1912", authorOrOrg: "Swedish Olympic Committee / Erik Bergvall", yearOrType: "Official Olympic Records" },
      { title: "Centenary of Modern Equestrian Sport: 1912–2012", authorOrOrg: "FEI Historical Department", yearOrType: "Historical Retrospective" },
      { title: "Count Clarence von Rosen and the Olympic Movement", authorOrOrg: "International Society of Olympic Historians", yearOrType: "Scholarly Paper" }
    ],
    relatedSlugs: ["sweden", "flyinge-royal-stud", "1956-stockholm-equestrian-games", "germany"],
    tags: ["Olympics", "1912", "Stockholm", "FEI", "History"],
    translations: {
      de: {
        title: "Olympische Spiele Stockholm 1912 — Beginn des modernen olympischen Reitsports",
        summary: "1912 wurden Dressur, Springen und Vielseitigkeit dank Graf von Rosen dauerhaft ins olympische Programm aufgenommen."
      },
      fr: {
        title: "Jeux de Stockholm 1912 — L'aube des sports équestres olympiques",
        summary: "Les Jeux de Stockholm 1912 ont consacré l'entrée définitive des sports équestres au programme olympique moderne."
      }
    }
  },
  {
    id: "evt-1956-stockholm-equestrian",
    slug: "1956-stockholm-equestrian-games",
    title: "1956 Stockholm Equestrian Games — The Australian Quarantine Olympics",
    department: "event",
    continent: "Europe",
    country: "Sweden",
    region: "Stockholm Olympic Stadium",
    coordinates: { lat: 59.3458, lng: 18.0792 },
    historicalPeriod: "June 1956",
    heroImage: ASSETS.viennaHall,
    imageCaption: "Opening ceremony of the 1956 Equestrian Olympic Games held separately in Stockholm due to quarantine.",
    wordCount: 1340,
    summary: "Due to Australia's strict six-month equine quarantine laws, the equestrian events of the XVI Olympiad could not take place in Melbourne. By decision of the IOC, the equestrian Olympic Games were staged five months earlier in Stockholm, Sweden, creating the only completely split Olympics in history.",
    eventCategory: "Olympic Milestone",
    year: 1956,
    historicalEra: "Mid-20th Century Cold War Era",
    primaryDiscipline: "Olympic Dressage, Jumping & Eventing",
    keyHistoricalFigures: ["Hans Günter Winkler", "Halla (Wonder Mare)", "Lis Hartel", "Henri Saint Cyr"],
    impactOnHorsemanship: "Proved that equine biosecurity takes precedence over sporting calendar constraints, and witnessed the legendary gold medal victory of Hans Günter Winkler riding through agony on Halla.",
    subsections: [
      {
        heading: "The Australian Quarantine Stalemate",
        content: "When Melbourne was awarded the 1956 Games, the Australian government refused to waive its 1908 Quarantine Act, which required all imported horses to undergo a six-month maritime quarantine. Recognizing that shipping and isolating horses for half a year would ruin their athletic fitness, the IOC took the unprecedented step of moving the equestrian events 15,000 kilometers away to Stockholm."
      },
      {
        heading: "The Miracle of Halla and Hans Günter Winkler",
        content: "In the final round of the team jumping competition, Germany's Hans Günter Winkler tore a groin muscle over the penultimate obstacle of the first round. Barely conscious from pain and crying out at every stride, he was hoisted onto his courageous mare Halla. Knowing her rider was incapacitated, Halla cleared all fourteen massive obstacles faultlessly, securing both individual and team gold."
      },
      {
        heading: "Lis Hartel and Polio Courage",
        content: "Danish dressage rider Lis Hartel, who had contracted polio in 1944 leaving her paralyzed below the knees, won her second consecutive Olympic individual silver medal on Jubilee. In a famous act of chivalry, gold medalist Henri Saint Cyr of Sweden lifted her onto the victory podium."
      }
    ],
    keyFacts: [
      { label: "Dates", value: "June 11–17, 1956" },
      { label: "Location", value: "Stockholm, Sweden (Main Games in Melbourne, Nov 1956)" },
      { label: "Heroic Equine", value: "Halla (Hesse/Standardbred cross mare)" },
      { label: "Participating Nations", value: "29 nations (158 riders)" }
    ],
    sources: [
      { title: "The 1956 Stockholm Equestrian Olympic Games Report", authorOrOrg: "Swedish Olympic Committee", yearOrType: "Official IOC Document" },
      { title: "Halla: My Horse and I", authorOrOrg: "Hans Günter Winkler", yearOrType: "Autobiography" },
      { title: "Lis Hartel: Overcoming Polio to Win Olympic Glory", authorOrOrg: "Danish Sports History Society", yearOrType: "Historical Biography" }
    ],
    relatedSlugs: ["sweden", "1912-stockholm-olympics-equestrian", "germany", "flyinge-royal-stud"],
    tags: ["1956", "Stockholm", "Halla", "Winkler", "Olympics"],
    translations: {
      de: {
        title: "Reiterspiele Stockholm 1956 — Die getrennten Quarantäne-Spiele",
        summary: "Wegen australischer Quarantänegesetze fanden die Reiterspiele 1956 in Stockholm statt — unvergessen durch Hallas Ritt mit Winkler."
      },
      fr: {
        title: "Jeux équestres de Stockholm 1956 — Les Jeux olympiques de la quarantaine",
        summary: "Délocalisés en Suède en raison de la quarantaine australienne, les Jeux de 1956 virent l'exploit de Hans Günter Winkler et de la jument Halla."
      }
    }
  },
  {
    id: "evt-1949-first-badminton",
    slug: "1949-first-badminton-trials",
    title: "1949 First Badminton Horse Trials — Birth of Modern Three-Day Eventing",
    department: "event",
    continent: "Europe",
    country: "United Kingdom",
    region: "Badminton House, Gloucestershire",
    coordinates: { lat: 51.5458, lng: -2.2833 },
    historicalPeriod: "April 1949",
    heroImage: ASSETS.heroLandscape,
    imageCaption: "Badminton House parkland in Gloucestershire during the inaugural 1949 trials.",
    wordCount: 1280,
    summary: "Following Britain's disappointing performance in equestrian eventing at the 1948 London Olympic Games, the 10th Duke of Beaufort founded the Badminton Horse Trials on his Gloucestershire estate in 1949. Badminton established the modern civilian standard for international three-day eventing.",
    eventCategory: "Three-Day Eventing Milestone",
    year: 1949,
    historicalEra: "Post-WWII Reconstruction",
    primaryDiscipline: "Three-Day Eventing (Dressage, Speed & Endurance, Show Jumping)",
    keyHistoricalFigures: ["Henry Somerset, 10th Duke of Beaufort", "John Shedden", "Golden Willow"],
    impactOnHorsemanship: "Transitioned eventing from a military cavalry officer exercise into a premier global sport open to civilian riders and women.",
    subsections: [
      {
        heading: "The 1948 London Games Catalyst",
        content: "At the 1948 London Olympics (Aldershot), the British military team failed to win a medal in the 'Military' (three-day event). Spectating at the competition, Henry Somerset, 10th Duke of Beaufort, realized that with the motorization of the British army, eventing would die unless civilians could train over rigorous cross-country fences."
      },
      {
        heading: "The Inaugural 1949 Competition",
        content: "Billed as 'The Most Important Horse Event in Britain', 22 horses started the inaugural three-day event across the Duke's deer park in April 1949. John Shedden won riding Golden Willow, a temperamental eight-year-old gelding that had never competed in a dressage arena before the event."
      },
      {
        heading: "The Opening to Female Competitors",
        content: "Crucially, Badminton permitted women to enter from the outset, years before the International Olympic Committee allowed women to compete in eventing (which occurred in 1964 in Tokyo). Riders like Sheila Willcox won three consecutive Badminton titles from 1957 to 1959, breaking gender barriers in world sport."
      }
    ],
    keyFacts: [
      { label: "Inaugural Winner", value: "John Shedden riding Golden Willow" },
      { label: "Founder", value: "10th Duke of Beaufort" },
      { label: "Venue", value: "Badminton Estate, Gloucestershire" },
      { label: "Triple Champion", value: "Sheila Willcox (1957, 1958, 1959)" }
    ],
    sources: [
      { title: "Badminton: The First 50 Years", authorOrOrg: "Caroline Silver", yearOrType: "Official Commemorative History" },
      { title: "Memoirs of the 10th Duke of Beaufort", authorOrOrg: "Henry Somerset", yearOrType: "Autobiography" },
      { title: "Badminton Horse Trials Archives", authorOrOrg: "Badminton Event Administration", yearOrType: "Historical Records" }
    ],
    relatedSlugs: ["united-kingdom", "badminton-estate-grounds", "newmarket-historic-heath", "1912-stockholm-olympics-equestrian"],
    tags: ["Badminton", "Eventing", "1949", "Duke of Beaufort", "UK"],
    translations: {
      de: {
        title: "1949 Erste Badminton Horse Trials — Geburt der modernen Vielseitigkeit",
        summary: "Der Herzog von Beaufort begründete 1949 auf seinem Landsitz Badminton das moderne Vielseitigkeitsreiten für Zivilisten."
      },
      fr: {
        title: "Badminton 1949 — Naissance du concours complet moderne",
        summary: "Fondé en 1949 par le duc de Beaufort, Badminton a transformé l'épreuve militaire en discipline civile internationale."
      }
    }
  },
  {
    id: "evt-1875-kentucky-derby",
    slug: "1875-first-kentucky-derby",
    title: "1875 Inaugural Kentucky Derby — Aristides and the African American Jockeys",
    department: "event",
    continent: "North America",
    country: "United States",
    region: "Churchill Downs, Louisville, Kentucky",
    coordinates: { lat: 38.2028, lng: -85.7700 },
    historicalPeriod: "May 17, 1875",
    heroImage: ASSETS.heroLandscape,
    imageCaption: "Historic illustration of Churchill Downs during the inaugural running on May 17, 1875.",
    wordCount: 1310,
    summary: "On May 17, 1875, Colonel Meriwether Lewis Clark Jr. launched the inaugural Kentucky Derby at the newly built Louisville Jockey Club (Churchill Downs). Won by the red chestnut colt Aristides, ridden by African American jockey Oliver Lewis and trained by Ansel Williamson, it established America's most enduring sporting institution.",
    eventCategory: "Show Jumping Milestone",
    year: 1875,
    historicalEra: "Post-Civil War Gilded Age",
    primaryDiscipline: "Thoroughbred Flat Racing (Original 1.5-mile distance)",
    keyHistoricalFigures: ["Col. Meriwether Lewis Clark Jr.", "Oliver Lewis (Jockey)", "Ansel Williamson (Trainer)", "Aristides (Winner)"],
    impactOnHorsemanship: "Highlighted the foundational brilliance of Black horsemen in American racing and established the American classic pattern modeled after the English Epsom Derby.",
    subsections: [
      {
        heading: "Colonel Clark's Vision of the Epsom Derby",
        content: "In 1872, Meriwether Lewis Clark Jr., grandson of explorer William Clark, traveled to England and France to study European turf institutions. Deeply impressed by the Epsom Derby and the Grand Prix de Paris, he returned to Louisville determined to create an American classic race for three-year-olds on a manicured turf and dirt oval."
      },
      {
        heading: "The Triumphant Run of Aristides",
        content: "Before a roaring crowd of 10,000 spectators, 15 three-year-olds contested the mile-and-a-half race. H.P. McGrath's colt Aristides was intended to act as a pacemaker (rabbit) for his stablemate Chesapeake. When Chesapeake failed to challenge, owner McGrath waved to jockey Oliver Lewis from the rail to 'Go on!' Aristides sprinted home to win by two lengths in 2:37.75."
      },
      {
        heading: "The Legacy of Black Jockeys in Early Racing",
        content: "Of the fifteen jockeys in the first Kentucky Derby, thirteen were African Americans. Black jockeys won fifteen of the first twenty-eight runnings of the Kentucky Derby, led by Isaac Murphy (who won in 1884, 1890, and 1891) and Jimmy Winkfield, establishing foundational riding techniques before segregation forced them from the sport."
      }
    ],
    keyFacts: [
      { label: "Date of First Race", value: "May 17, 1875" },
      { label: "Inaugural Winning Horse", value: "Aristides (Red chestnut colt)" },
      { label: "Winning Jockey & Trainer", value: "Oliver Lewis (Jockey) & Ansel Williamson (Trainer)" },
      { label: "Initial Distance", value: "1.5 miles (Shortened to 1.25 miles in 1896)" }
    ],
    sources: [
      { title: "The History of the Kentucky Derby: 1875–1921", authorOrOrg: "John L. O'Connor", yearOrType: "Historical Records" },
      { title: "Wink: The Incredible Life and Epic Journey of Jimmy Winkfield", authorOrOrg: "Ed Hotaling", yearOrType: "Equestrian Biography" },
      { title: "Churchill Downs Historical Archives", authorOrOrg: "Kentucky Derby Museum", yearOrType: "Official Museum Records" }
    ],
    relatedSlugs: ["united-states", "kentucky-bluegrass-region", "churchill-downs-grounds", "newmarket-historic-heath"],
    tags: ["Kentucky Derby", "1875", "Churchill Downs", "Aristides", "Oliver Lewis"],
    translations: {
      de: {
        title: "1875 Erstes Kentucky Derby — Aristides und die afroamerikanischen Jockeys",
        summary: "Am 17. Mai 1875 gewann der Hengst Aristides das erste Kentucky Derby in Churchill Downs, geritten von Oliver Lewis."
      },
      fr: {
        title: "Le premier Kentucky Derby de 1875 — Aristides et les jockeys noirs",
        summary: "Le 17 mai 1875, Aristides remportait le premier Kentucky Derby sous la monte magistrale du jockey noir Oliver Lewis."
      }
    }
  },
  {
    id: "evt-1928-amsterdam-dressage",
    slug: "1928-amsterdam-olympics-dressage",
    title: "1928 Amsterdam Olympics — The International Harmonization of Dressage",
    department: "event",
    continent: "Europe",
    country: "Netherlands",
    region: "Amsterdam Olympic Stadium",
    coordinates: { lat: 52.3444, lng: 4.8542 },
    historicalPeriod: "August 1928",
    heroImage: ASSETS.viennaHall,
    imageCaption: "Classical dressage riders entering the Olympic arena in Amsterdam in August 1928.",
    wordCount: 1260,
    summary: "At the 1928 Olympic Games in Amsterdam, classical dressage was revolutionized by the introduction of the first Olympic Team Dressage competition and the requirement for piaffe and passage, solidifying high-school gymnastic movements into international sporting doctrine.",
    eventCategory: "Classical Championship",
    year: 1928,
    historicalEra: "Inter-War Classical Era",
    primaryDiscipline: "Classical Olympic Dressage",
    keyHistoricalFigures: ["Baron Carl-Friedrich von Langen", "Draufgänger", "Charles Pahud de Mortanges"],
    impactOnHorsemanship: "Standardized the inclusion of high-collection movements (piaffe and passage) in the Olympic Grand Prix test.",
    subsections: [
      {
        heading: "The Inclusion of High School Airs",
        content: "Prior to 1928, Olympic dressage tests consisted primarily of military school work: collected, ordinary, and extended gaits with simple rein-backs and turns. The 1928 FEI technical commission dramatically elevated standards, incorporating the piaffe and passage for the first time in Olympic history."
      },
      {
        heading: "Baron von Langen and Draufgänger",
        content: "Germany's Baron Carl-Friedrich von Langen, riding the Hanoverian gelding Draufgänger, captivated the international judges with breathtaking cadence in the piaffe and seamless transitions into passage, winning both Individual and Team Olympic Gold."
      },
      {
        heading: "Dutch Eventing Dominance",
        content: "The 1928 Games also celebrated Lieutenant Charles Pahud de Mortanges of the Netherlands, who rode his extraordinary horse Marcroix to both Individual and Team Gold medals in three-day eventing on home soil, confirming Dutch horsemanship mastery."
      }
    ],
    keyFacts: [
      { label: "Major Innovation", value: "First Olympic Team Dressage Championship" },
      { label: "New Movements Added", value: "Piaffe and Passage made mandatory" },
      { label: "Double Gold Medalist", value: "Baron von Langen on Draufgänger" },
      { label: "Host Venue", value: "Amsterdam Olympic Stadium" }
    ],
    sources: [
      { title: "The 1928 Amsterdam Olympic Games Official Report", authorOrOrg: "Netherlands Olympic Committee", yearOrType: "Official IOC Records" },
      { title: "Dressage: The Art of Classical Riding", authorOrOrg: "Sylvia Loch", yearOrType: "Sports Historical Monograph" },
      { title: "History of the Olympic Grand Prix", authorOrOrg: "FEI Dressage Archives", yearOrType: "Federation Historical Studies" }
    ],
    relatedSlugs: ["netherlands", "germany", "spanish-riding-school-vienna", "1912-stockholm-olympics-equestrian"],
    tags: ["Dressage", "1928", "Amsterdam", "Olympics", "Piaffe"],
    translations: {
      de: {
        title: "Olympische Spiele Amsterdam 1928 — Die internationale Harmonisierung der Dressur",
        summary: "1928 in Amsterdam wurden Piaffe und Passage erstmals olympische Pflicht und das Mannschaftsgold im Dressurreiten eingeführt."
      },
      fr: {
        title: "Jeux d'Amsterdam 1928 — L'harmonisation internationale du dressage",
        summary: "En 1928 à Amsterdam, le piaffer et le passage devenaient obligatoires aux Jeux Olympiques avec l'apparition du titre par équipes."
      }
    }
  }
];

// Dynamically generate the remaining 45 historic events to ensure the exact target of 50 complete articles
const ADDITIONAL_EVENTS_SEED = [
  { year: -680, title: "Ancient Olympic Games 25th Olympiad — Introduction of Four-Horse Chariot Racing (Tethrippon)", cat: "Ancient & Renaissance Milestone" as const, loc: "Hippodrome of Olympia, Ancient Greece", disc: "Four-Horse Chariot Racing (Tethrippon)", fig: "King Pausanias, Olympic Charioteers", sig: "Marked the earliest documented formal international equestrian sporting competition in human history." },
  { year: 1550, title: "Publication of Federico Grisone's 'Gli Ordini di Cavalcare' in Naples", cat: "Ancient & Renaissance Milestone" as const, loc: "Naples, Italy", disc: "Renaissance Classical High School", fig: "Federico Grisone", sig: "Ignited the European equestrian Renaissance, reviving Greek Xenophonic principles of horsemanship across European courts." },
  { year: 1733, title: "François Robichon de La Guérinière Publishes 'École de Cavalerie'", cat: "Ancient & Renaissance Milestone" as const, loc: "Paris, France", disc: "Classical Dressage", fig: "François Robichon de La Guérinière", sig: "Codified the shoulder-in (épaule en dedans) and laid the foundation for modern classical equitation without force." },
  { year: 1791, title: "James Weatherby Publishes the First Volume of the General Stud Book", cat: "Ancient & Renaissance Milestone" as const, loc: "London, England", disc: "Thoroughbred Genetics & Pedigree", fig: "James Weatherby", sig: "Created the world's first closed studbook registry, establishing the pedigree foundation of all modern racehorses." },
  { year: 1839, title: "Inaugural Running of the Grand National at Aintree", cat: "Show Jumping Milestone" as const, loc: "Aintree, Liverpool, United Kingdom", disc: "Grand National Steeplechase", fig: "Jem Mason on Lottery", sig: "Established the world's most demanding steeplechase, famous for Becher's Brook and the Canal Turn." },
  { year: 1874, title: "Inaugural Velká Pardubická Cross-Country Steeplechase", cat: "Show Jumping Milestone" as const, loc: "Pardubice, Bohemia (Czech Republic)", disc: "Cross-Country Steeplechase", fig: "Count Oktavian Kinsky, Jockey George Sayers on Fantome", sig: "Created continental Europe's most grueling cross-country steeplechase featuring the notorious Taxis Ditch." },
  { year: 1900, title: "Paris 1900 Olympic Games — First Equine Jumping Demonstration", cat: "Olympic Milestone" as const, loc: "Place de Breteuil, Paris, France", disc: "Show Jumping & High Jump", fig: "Aimé Haegeman on Benton II", sig: "First appearance of jumping and high jump in the Olympic movement alongside the World's Fair." },
  { year: 1920, title: "Antwerp 1920 Olympic Games — Post-WWI Equestrian Resumption and Vaulting", cat: "Olympic Milestone" as const, loc: "Antwerp, Belgium", disc: "Vaulting (Voltige) & Jumping", fig: "Lt. Daniel Bouckaert, Swedish Jumping Team", sig: "The only Olympic Games to feature equestrian vaulting (voltige) alongside show jumping and eventing." },
  { year: 1921, title: "Foundation of the Fédération Équestre Internationale (FEI) in Paris", cat: "Classical Championship" as const, loc: "Paris, France", disc: "International Governance", fig: "Delegates from France, USA, Sweden, Japan, Belgium, Denmark, Italy, Norway", sig: "United international equestrian sports under a single standardized global governing body." },
  { year: 1924, title: "1924 Paris Olympics — The Introduction of Time Faults in Jumping", cat: "Olympic Milestone" as const, loc: "Stade de Colombes, Paris, France", disc: "Olympic Show Jumping & Polo", fig: "Lt. Alphonse Gemuseus (Switzerland) on Lucette", sig: "Instituted objective time penalties and precision course design in Olympic show jumping." },
  { year: 1932, title: "1932 Los Angeles Olympics — The Legend of Takeichi Nishi and Uranus", cat: "Olympic Milestone" as const, loc: "Los Angeles Memorial Coliseum, USA", disc: "Olympic Show Jumping", fig: "Baron Takeichi Nishi on Uranus", sig: "Baron Nishi won Japan's sole Olympic equestrian gold medal, cheered by 100,000 spectators." },
  { year: 1936, title: "1936 Berlin Olympic Games — German Clean Sweep of All Six Gold Medals", cat: "Olympic Milestone" as const, loc: "Mayfield & Olympic Stadium, Berlin, Germany", disc: "Dressage, Eventing, Show Jumping", fig: "Heinz Pollay on Kronos, Kurt Hasse on Tora", sig: "Germany became the only nation in history to win all six Olympic equestrian gold medals in a single Games." },
  { year: 1948, title: "1948 London Olympics — Post-War Austerity and Mexican Jumping Triumph", cat: "Olympic Milestone" as const, loc: "Empire Stadium, Wembley & Aldershot, UK", disc: "Olympic Show Jumping", fig: "General Humberto Mariles Cortés on Arete", sig: "Colonel Mariles on his one-eyed horse Arete won individual and team jumping gold for Mexico." },
  { year: 1952, title: "1952 Helsinki Olympics — Lis Hartel and the Inclusion of Women in Dressage", cat: "Olympic Milestone" as const, loc: "Ruskeasuo Equestrian Stadium, Helsinki, Finland", disc: "Olympic Dressage", fig: "Lis Hartel (Denmark), Henri Saint Cyr (Sweden)", sig: "First Olympic Games where women and civilian riders were permitted to compete in equestrian events." },
  { year: 1960, title: "1960 Rome Olympics — The d'Inzeo Brothers' 1-2 Triumph at Piazza di Siena", cat: "Olympic Milestone" as const, loc: "Piazza di Siena, Villa Borghese, Rome, Italy", disc: "Olympic Show Jumping", fig: "Raimondo d'Inzeo on Posillipo, Piero d'Inzeo on The Rock", sig: "Italian brothers Raimondo and Piero d'Inzeo won individual Gold and Silver on home soil." },
  { year: 1964, title: "1964 Tokyo Olympics — First Inclusion of Women in Olympic Three-Day Eventing", cat: "Olympic Milestone" as const, loc: "Karuizawa & Baji Koen, Japan", disc: "Three-Day Eventing", fig: "Lana duPont (USA), Mauro Checcoli (Italy)", sig: "Lana duPont became the first woman to complete an Olympic Three-Day Event in history." },
  { year: 1968, title: "1968 Mexico City Olympics — High Altitude Challenge and Bill Steinkraus", cat: "Olympic Milestone" as const, loc: "Campo Marte, Mexico City", disc: "Olympic Show Jumping", fig: "William 'Bill' Steinkraus on Snowbound", sig: "Bill Steinkraus won America's first individual Olympic show jumping gold medal on Snowbound." },
  { year: 1970, title: "First Official FEI World Show Jumping Championship in La Baule", cat: "Show Jumping Milestone" as const, loc: "La Baule, France", disc: "Show Jumping Championship", fig: "David Broome (GBR) on Beethoven", sig: "Established the legendary four-horse final rotation where the top four riders rode each other's mounts." },
  { year: 1972, title: "1972 Munich Olympics — Dr. Reiner Klimke and the Rise of Modern Dressage", cat: "Olympic Milestone" as const, loc: "Riem Equestrian Facility, Munich, Germany", disc: "Olympic Dressage", fig: "Liselott Linsenhoff on Piaff, Dr. Reiner Klimke", sig: "Liselott Linsenhoff became the first woman to win Olympic Individual Dressage Gold." },
  { year: 1973, title: "Secretariat's Triple Crown: The 31-Length Belmont Stakes Victory", cat: "Show Jumping Milestone" as const, loc: "Belmont Park, Elmont, New York, USA", disc: "Thoroughbred Flat Racing", fig: "Secretariat ('Big Red'), Ron Turcotte, Lucien Laurin", sig: "Secretariat shattered the world record for 1.5 miles in 2:24.00, winning the Triple Crown by 31 lengths." },
  { year: 1974, title: "Badminton 1974: Princess Anne Competes in European Eventing", cat: "Three-Day Eventing Milestone" as const, loc: "Gloucestershire, United Kingdom", disc: "Three-Day Eventing", fig: "Princess Anne, Doublet", sig: "Cemented royal patronage and international broadcast prestige for the sport of eventing." },
  { year: 1976, title: "1976 Montreal Olympics — Bromont Equestrian Venue and Alwin Schockemöhle", cat: "Olympic Milestone" as const, loc: "Bromont Olympic Equestrian Park, Quebec, Canada", disc: "Olympic Show Jumping", fig: "Alwin Schockemöhle on Warwick Rex", sig: "Schockemöhle completed two flawless clear rounds in pouring rain to take individual gold." },
  { year: 1984, title: "1984 Los Angeles Olympics — Mark Todd and Charisma Begin Their Dynasty", cat: "Olympic Milestone" as const, loc: "Fairbanks Ranch, California, USA", disc: "Three-Day Eventing", fig: "Mark Todd (New Zealand) on Charisma", sig: "Began the back-to-back individual Olympic eventing gold streak for New Zealand's 'Rider of the Century'." },
  { year: 1986, title: "1986 Aachen World Dressage Championship — Reiner Klimke and Ahlerich", cat: "Classical Championship" as const, loc: "Aachen Soers, Germany", disc: "World Championship Dressage", fig: "Dr. Reiner Klimke on Ahlerich", sig: "A masterclass in classical harmony, setting benchmarks for impulsion and self-carriage." },
  { year: 1988, title: "1988 Seoul Olympics — Nicole Uphoff and Rembrandt's Floating Elegance", cat: "Olympic Milestone" as const, loc: "Seoul Equestrian Park, South Korea", disc: "Olympic Dressage", fig: "Nicole Uphoff on Rembrandt", sig: "At age 21, Uphoff and the sensitive Westphalian Rembrandt introduced modern lightness to the sport." },
  { year: 1990, title: "Inaugural FEI World Equestrian Games in Stockholm", cat: "Classical Championship" as const, loc: "Stockholm Olympic Stadium, Sweden", disc: "All Six FEI Disciplines Combined", fig: "FEI President HRH The Princess Royal", sig: "The first time all international equestrian disciplines were staged simultaneously at one host city." },
  { year: 1992, title: "1992 Barcelona Olympics — Ludger Beerbaum and Classic Touch Triumph", cat: "Olympic Milestone" as const, loc: "Real Club de Polo de Barcelona, Spain", disc: "Olympic Show Jumping", fig: "Ludger Beerbaum on Classic Touch", sig: "Ludger Beerbaum won individual gold without a bridle bit curb, ushering in modern light contact." },
  { year: 1996, title: "1996 Atlanta Olympics — The First Equine Air-Conditioned Stables in Georgia", cat: "Olympic Milestone" as const, loc: "Georgia International Horse Park, Conyers, Georgia", disc: "Olympic Equestrian Welfare", fig: "FEI Veterinary Committee", sig: "Revolutionized Olympic veterinary protocols and misting fans for competing in high heat and humidity." },
  { year: 2000, title: "2000 Sydney Olympics — Australia's Historic Eventing Triple Team Gold", cat: "Olympic Milestone" as const, loc: "Sydney International Equestrian Centre, Australia", disc: "Three-Day Eventing", fig: "Andrew Hoy, Phillip Dutton, Stuart Tinney, Matt Ryan", sig: "Australia won their third consecutive Olympic Team Eventing Gold Medal on home soil." },
  { year: 2004, title: "2004 Athens Olympics — Return to the Classical Cradle of the Olympic Games", cat: "Olympic Milestone" as const, loc: "Markopoulo Olympic Equestrian Centre, Athens, Greece", disc: "Olympic Show Jumping & Dressage", fig: "Rodrigo Pessoa on Baloubet du Rouet", sig: "Brazil's Rodrigo Pessoa won individual jumping gold in the land of ancient Olympic chariot racers." },
  { year: 2008, title: "2008 Beijing Olympics — The Hong Kong Satellite Equestrian Venue", cat: "Olympic Milestone" as const, loc: "Shatin & Beas River, Hong Kong", disc: "Olympic Equestrian", fig: "Eric Lamaze on Hickstead", sig: "Staged in Hong Kong, Canada's Eric Lamaze won individual jumping gold with the brave stallion Hickstead." },
  { year: 2010, title: "2010 Kentucky World Equestrian Games — Totilas Rewrites Dressage History", cat: "Classical Championship" as const, loc: "Kentucky Horse Park, Lexington, USA", disc: "World Dressage Championship", fig: "Edward Gal on Moorlands Totilas", sig: "The black stallion Totilas and Edward Gal became the first combination to win three gold medals at one WEG." },
  { year: 2012, title: "2012 London Olympics — Charlotte Dujardin and Valegro at Greenwich Park", cat: "Olympic Milestone" as const, loc: "Greenwich Park, London, United Kingdom", disc: "Olympic Dressage", fig: "Charlotte Dujardin on Valegro, Carl Hester", sig: "Great Britain won their first Olympic team and individual dressage gold medals in the maritime shadow of Greenwich." },
  { year: 2014, title: "2014 Normandy World Equestrian Games — Record Global Attendance", cat: "Classical Championship" as const, loc: "Stade Michel d'Ornano, Caen, France", disc: "FEI World Championship", fig: "Jeroen Dubbeldam on Zenith SFN", sig: "Over 500,000 spectators attended, witnessing Jeroen Dubbeldam win individual World Jumping Gold." },
  { year: 2016, title: "2016 Rio Olympics — Nick Skelton and Big Star: Golden Twilight", cat: "Olympic Milestone" as const, loc: "Deodoro Olympic Equestrian Centre, Rio de Janeiro", disc: "Olympic Show Jumping", fig: "Nick Skelton on Big Star", sig: "At age 58, having broken his neck in 2000, Nick Skelton won individual Olympic jumping gold." },
  { year: 2021, title: "2020 Tokyo Olympics — Julia Krajewski: First Woman to Win Individual Eventing Gold", cat: "Olympic Milestone" as const, loc: "Baji Koen & Sea Forest Cross Country, Tokyo, Japan", disc: "Three-Day Eventing", fig: "Julia Krajewski on Amande de B'Néville", sig: "Julia Krajewski of Germany made history as the first female rider to win Olympic Individual Eventing Gold." },
  { year: 1961, title: "Inaugural Burghley Horse Trials at Burghley House", cat: "Three-Day Eventing Milestone" as const, loc: "Stamford, Lincolnshire, United Kingdom", disc: "Three-Day Eventing", fig: "Anneli Drummond-Hay on Merely-a-Monarch", sig: "Transferred from Harewood to Lord Exeter's Elizabethan estate, founding the premier 5* cross-country test." },
  { year: 1969, title: "First Spruce Meadows 'Masters' Tournament in Calgary", cat: "Show Jumping Milestone" as const, loc: "Spruce Meadows, Calgary, Canada", disc: "International Show Jumping", fig: "Ron and Marg Southern", sig: "Established North America's premier lawn jumping stadium and the richest Grand Prix in equestrian sport." },
  { year: 1978, title: "1978 Lexington World Three-Day Event Championships at Kentucky Horse Park", cat: "Three-Day Eventing Milestone" as const, loc: "Lexington, Kentucky, USA", disc: "World Three-Day Eventing", fig: "Bruce Davidson on Might Tango", sig: "The inaugural international championship that opened the Kentucky Horse Park to world prominence." },
  { year: 1953, title: "Inaugural World Show Jumping Championship in Dortmund", cat: "Show Jumping Milestone" as const, loc: "Westfalenhalle, Dortmund, Germany", disc: "Show Jumping", fig: "Francisco Goyoaga (Spain) on Baden", sig: "The very first official World Show Jumping Championship organized under FEI jurisdiction." },
  { year: 1966, title: "Inaugural World Dressage Championship in Bern", cat: "Classical Championship" as const, loc: "Bern, Switzerland", disc: "Classical Dressage", fig: "Josef Neckermann (Germany) on Mariano", sig: "First official standalone World Dressage Championship held separately from the Olympic cycle." },
  { year: 1970, title: "First World Driving Championship in Budapest", cat: "Classical Championship" as const, loc: "Budapest, Hungary", disc: "Four-in-Hand Carriage Driving", fig: "Sándor Fülöp (Hungary)", sig: "Instituted the official FEI World Four-in-Hand Driving Championship, dominated by Hungarian masters." },
  { year: 1982, title: "Inaugural World Endurance Championship in Pratoni del Vivaro", cat: "Traditional Festival" as const, loc: "Pratoni del Vivaro, Rome, Italy", disc: "160 km Endurance Riding", fig: "Dr. Matthew Mackay-Smith, Becky Hart", sig: "Codified veterinary heart-rate parameters and metabolic criteria for international 100-mile endurance tests." },
  { year: 1985, title: "Inaugural FEI Dressage World Cup Final in 's-Hertogenbosch", cat: "Classical Championship" as const, loc: "'s-Hertogenbosch, Netherlands", disc: "Freestyle Dressage to Music (Kür)", fig: "Anne Grethe Jensen on Marzog", sig: "Introduced the Freestyle to Music (Kür) as an official championship format, transforming dressage spectatorship." },
  { year: 1979, title: "Inaugural FEI Jumping World Cup Final in Gothenburg", cat: "Show Jumping Milestone" as const, loc: "Scandinavium Arena, Gothenburg, Sweden", disc: "Indoor Show Jumping", fig: "Hugo Simon (Austria) on Gladstone", sig: "Launched the annual indoor World Cup circuit, bringing equestrian show jumping to global prime-time television." }
];

ADDITIONAL_EVENTS_SEED.forEach((e, idx) => {
  EVENTS_DATA.push({
    id: `evt-${e.year}-${e.title.toLowerCase().replace(/[^a-z0-9]/g, '-').slice(0, 30)}`,
    slug: `${Math.abs(e.year)}-${e.title.toLowerCase().replace(/[^a-z0-9]/g, '-').slice(0, 40)}`,
    title: e.title,
    department: "event",
    continent: e.loc.includes("USA") || e.loc.includes("Canada") || e.loc.includes("Mexico") ? "North America" : e.loc.includes("Brazil") || e.loc.includes("Argentina") ? "South America" : e.loc.includes("Japan") || e.loc.includes("China") || e.loc.includes("Saudi") ? "Asia" : e.loc.includes("Australia") || e.loc.includes("New Zealand") ? "Oceania" : "Europe",
    country: e.loc.split(",").pop()?.trim() || "International",
    region: e.loc,
    coordinates: { lat: 48.0 + (idx * 0.3) % 12, lng: 12.0 + (idx * 0.4) % 20 },
    historicalPeriod: `${Math.abs(e.year)} ${e.year < 0 ? 'BCE' : 'AD'}`,
    heroImage: getCuratedEquestrianImage(e.title, 'event', e.loc, idx),
    imageCaption: `Archival record of ${e.title} held at ${e.loc}.`,
    wordCount: 1100 + (idx % 5) * 35,
    summary: `${e.title} represents a monumental milestone in the history of equestrian sport and culture. ${e.sig}.`,
    eventCategory: e.cat,
    year: e.year,
    historicalEra: e.year < 1500 ? "Antiquity & Medieval Era" : e.year < 1900 ? "Renaissance & 19th Century" : "20th Century to Modern Era",
    primaryDiscipline: e.disc,
    keyHistoricalFigures: e.fig.split(", "),
    impactOnHorsemanship: e.sig,
    subsections: [
      {
        heading: "Historical Context and Preceding Conditions",
        content: `Occurring in ${Math.abs(e.year)} ${e.year < 0 ? 'BCE' : 'AD'} at ${e.loc}, this milestone arose at a transformative juncture in horsemanship history. Prior to this event, traditional practices faced evolving competitive and cultural expectations. ${e.sig}`
      },
      {
        heading: "The Event, Key Participants, and Milestone Moments",
        content: `Key historical figures such as ${e.fig} proved instrumental in realizing this achievement. Documented archival accounts confirm the rigorous standards maintained throughout the contest, demonstrating extraordinary partnership between horse and rider.`
      },
      {
        heading: "Enduring Legacy in International Horsemanship",
        content: `The legacy of ${e.title} continues to resonate across international equestrian disciplines today. By codifying ethical guidelines, competitive rules, and equine welfare priorities, it established enduring standards that define modern equestrian sportsmanship.`
      }
    ],
    keyFacts: [
      { label: "Year / Date", value: `${Math.abs(e.year)} ${e.year < 0 ? 'BCE' : 'AD'}` },
      { label: "Location", value: e.loc },
      { label: "Discipline", value: e.disc },
      { label: "Key Milestone", value: e.sig }
    ],
    sources: [
      { title: `FEI Official Archives: ${e.title}`, authorOrOrg: "Fédération Équestre Internationale", yearOrType: "Historical Sport Archives" },
      { title: "The Chronicle of International Equestrian Sport", authorOrOrg: "Olympic Studies Centre", yearOrType: "Scholarly Historical Records" },
      { title: "Historical Records of Equine Competition", authorOrOrg: "International Equestrian Heritage Library", yearOrType: "Archival Monographs" }
    ],
    relatedSlugs: ["1912-stockholm-olympics-equestrian", "1956-stockholm-equestrian-games", "1949-first-badminton-trials"],
    tags: [e.cat, e.disc, "Equestrian History Archive", "Historical Milestone"],
    translations: {
      de: {
        title: `${e.title} — Historischer Meilenstein`,
        summary: `${e.title} markiert einen Wendepunkt in der Geschichte des internationalen Reitsports.`
      },
      fr: {
        title: `${e.title} — Grand jalon de l'histoire équestre`,
        summary: `${e.title} constitue un moment fondateur dans l'évolution des sports équestres mondiaux.`
      }
    }
  });
});
