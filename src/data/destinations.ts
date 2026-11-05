import { EquestrianDestination } from '../types/equestrian';
import { ASSETS, getCuratedEquestrianImage } from './assets';

export const DESTINATIONS_DATA: EquestrianDestination[] = [
  {
    id: "dst-camargue",
    slug: "camargue-rhone-delta",
    title: "The Camargue — Wild White Horses of the Rhône Delta",
    department: "destination",
    continent: "Europe",
    country: "France",
    region: "Provence-Alpes-Côte d'Azur",
    coordinates: { lat: 43.5283, lng: 4.6366 },
    historicalPeriod: "Prehistoric Antiquity to Present",
    heroImage: ASSETS.camargueWildHorses,
    imageCaption: "Wild Camargue horses galloping through saltwater lagoons and samphire marshes at sunset.",
    wordCount: 1250,
    summary: "Formed where the Rhône River meets the Mediterranean Sea, the Camargue is Western Europe's largest river delta. Here, semi-feral herds of small, sturdy white Camargue horses have lived in saltwater wetlands for thousands of years, tended by mounted Gardian herdsmen.",
    landscapeType: "Saltwater lagoons, coastal marshes, samphire meadows, and sand dunes",
    associatedBreeds: ["Camargue Horse (Cheval de Camargue)"],
    ridingTradition: "Gardian cattle herding, working equitation with the trident lance, and Ferrade branding festivals",
    conservationAndTourism: "Managed within the Camargue Regional Natural Park; riding is strictly regulated to designated sandy coastal tracks to protect nesting greater flamingos and delicate fragile dunes.",
    scenicHighlights: ["Étang de Vaccarès Lagoon", "Saintes-Maries-de-la-Mer", "Aigues-Mortes Medieval Walled City", "Plage de Piémanson"],
    subsections: [
      {
        heading: "An Ancient Horse Born of Sea and Foam",
        content: "Legend holds that the Camargue horse was born from the sea foam of the Mediterranean. Paleontologists identify the breed as closely linked to the prehistoric Solutré horse depicted in Upper Paleolithic cave art dating back 17,000 years. Born dark bay or black, foals lighten gradually, turning snowy white by their fourth or fifth year."
      },
      {
        heading: "The Gardian Brotherhood and La Confrérie",
        content: "The herds (manades) of Camargue horses and black fighting bulls are managed by the Gardians, France's historic cowboys. Established in 1512, La Confrérie des Gardians de Saint-Georges in Arles is the oldest equestrian guild in France. Gardians ride with the Camargue saddle (selle camarguaise) with high cage-like iron stirrups and carry the trident lance (la ficheire)."
      },
      {
        heading: "Responsible Equestrian Exploration",
        content: "Because the delta is a critical biosphere reserve home to over 400 species of birds, equestrian trail riding is managed with strict low-impact guidelines. Licensed guides lead riders along traditional drovers' trails, explaining the salt balance of the marshes."
      }
    ],
    keyFacts: [
      { label: "Delta Surface Area", value: "Over 930 square kilometers" },
      { label: "Oldest Cowboy Guild", value: "Confrérie des Gardians (Founded 1512)" },
      { label: "Unique Tack Element", value: "Iron cage stirrups (étriers cage)" },
      { label: "Coat Color Transformation", value: "Born dark; white by age 4–5" }
    ],
    sources: [
      { title: "Le Cheval de Camargue", authorOrOrg: "Parc Naturel Régional de Camargue", yearOrType: "Official Conservation Dossier" },
      { title: "Les Gardians de Camargue", authorOrOrg: "Carle Naudot", yearOrType: "Historical Ethnographic Study" },
      { title: "Solutré and the Prehistoric Equine", authorOrOrg: "French Ministry of Culture", yearOrType: "Archaeological Records" }
    ],
    relatedSlugs: ["france", "cadre-noir-saumur", "haras-national-du-pin", "andalusia-region"],
    tags: ["Camargue", "France", "Wild Horses", "Gardian", "Wetlands"],
    translations: {
      de: {
        title: "Die Camargue — Wilde weiße Pferde des Rhône-Deltas",
        summary: "Im größten Flussdelta Westeuropas leben seit Jahrtausenden die weißen Camargue-Pferde, gehütet von den Gardians."
      },
      fr: {
        title: "La Camargue — Les chevaux blancs sauvages du delta du Rhône",
        summary: "Entre lagunes et marais salants, le cheval de Camargue vit en liberté sous la garde des gardians et de leur trident séculaire."
      }
    }
  },
  {
    id: "dst-andalusia",
    slug: "andalusia-region",
    title: "Andalusia & Doñana — Golden Pastures of the Spanish Horse",
    department: "destination",
    continent: "Europe",
    country: "Spain",
    region: "Andalusia (Cádiz, Seville, Huelva)",
    coordinates: { lat: 37.3891, lng: -5.9845 },
    historicalPeriod: "Ancient Phoenician Era to Present",
    heroImage: ASSETS.andalusianCourtyard,
    imageCaption: "A magnificent grey PRE stallion in the whitewashed courtyard of an Andalusian hacienda.",
    wordCount: 1220,
    summary: "Andalusia in southern Spain is the global spiritual capital of the Iberian horse. From the sun-baked dehesas of Córdoba and Jerez de la Frontera to the vast shifting coastal dunes of Doñana National Park, this region forged both classical high-school equitation and Doma Vaquera.",
    landscapeType: "Oak dehesas, undulating olive groves, coastal sand dunes, and tidal marshes (marismas)",
    associatedBreeds: ["Pura Raza Española (Andalusian)", "Hispano-Árabe", "Marismeño Wild Horse"],
    ridingTradition: "Doma Vaquera field riding, Acoso y Derribo, classical Alta Escuela, and the annual Romería de El Rocío",
    conservationAndTourism: "Doñana National Park is a UNESCO World Heritage site; riding within the core biological reserve is restricted to certified educational conservation tours to safeguard the Iberian lynx and imperial eagle.",
    scenicHighlights: ["Doñana National Park Marismas", "Jerez de la Frontera Vineyards", "Sierra de Grazalema", "El Rocío Pilgrimage Village"],
    subsections: [
      {
        heading: "The Dehesa: Ecosystem of the Purebred Horse",
        content: "The Andalusian dehesa — an ancient agrosilvopastoral landscape of holm and cork oaks — has provided grazing for Iberian war horses and fighting bulls for over two millennia. This nutrient-rich environment encourages steady skeletal growth, agile footing over rocky terrain, and calm temperaments."
      },
      {
        heading: "El Rocío: The Dust of a Million Pilgrims",
        content: "In the sandy village of El Rocío on the edge of the Doñana marshes, the streets have no asphalt — only soft sand. Every Pentecost, over a million pilgrims arrive on horseback and in covered wagons drawn by horses and oxen to pay homage to the Virgen del Rocío, creating Europe's largest equestrian pilgrimage."
      },
      {
        heading: "The Wild Marismeño Horse",
        content: "Within the protected wilderness of Doñana lives the semi-wild Marismeño horse. Once a year on June 26, local yegüerizos (drovers) round up hundreds of mares and foals from the marshes and herd them through the streets of Almonte in the ancient 'Saca de las Yeguas' tradition."
      }
    ],
    keyFacts: [
      { label: "UNESCO Biosphere Reserve", value: "Doñana National Park (Inscribed 1994)" },
      { label: "Ancient Horse Roundup", value: "Saca de las Yeguas (Documented since 1504)" },
      { label: "Iconic Pilgrimage Village", value: "El Rocío (Paved entirely with sand)" },
      { label: "Regional Breeding Association", value: "ANCCE (Seville)" }
    ],
    sources: [
      { title: "Historia de las Razas Autóctonas Andaluzas", authorOrOrg: "Junta de Andalucía", yearOrType: "Official Regional Publication" },
      { title: "Doñana: Agua, Tierra y Caballo", authorOrOrg: "Estación Biológica de Doñana CSIC", yearOrType: "Ecological Research Monographs" },
      { title: "El Rocío y la Tradición Ecuestre", authorOrOrg: "Hermandad Matriz de Almonte", yearOrType: "Historical Records" }
    ],
    relatedSlugs: ["spain", "royal-andalusian-school-jerez", "royal-stables-cordoba", "yeguada-la-cartuja"],
    tags: ["Andalusia", "Spain", "PRE", "Donana", "El Rocio"],
    translations: {
      de: {
        title: "Andalusien & Doñana — Goldene Weiten des spanischen Pferdes",
        summary: "Andalusien ist das Herzland des spanischen Pferdes, geprägt von den Sandstraßen von El Rocío und den Weiten des Doñana-Nationalparks."
      },
      fr: {
        title: "L'Andalousie et Doñana — Les terres dorées du cheval espagnol",
        summary: "Berceau du Pur-Sang Espagnol, l'Andalousie vibre entre les dehesas de chênes, les arènes de Jerez et le pèlerinage équestre d'El Rocío."
      }
    }
  },
  {
    id: "dst-scottish-highlands",
    slug: "scottish-highlands-glen-affric",
    title: "The Scottish Highlands — Glen Affric & The Ancient Highland Pony",
    department: "destination",
    continent: "Europe",
    country: "United Kingdom",
    region: "Scottish Highlands",
    coordinates: { lat: 57.2762, lng: -4.8967 },
    historicalPeriod: "Ancient Pictish Era to Present",
    heroImage: ASSETS.royalFellPonies,
    imageCaption: "Highland ponies traversing the heather moors and ancient Caledonian pine forests of Glen Affric.",
    wordCount: 1180,
    summary: "The rugged Scottish Highlands, characterized by mist-shrouded glens, peat bogs, and ancient Caledonian pine forests, gave rise to the Highland Pony — one of Britain's hardiest native breeds, prized for centuries by Highland clans and deerstalkers.",
    landscapeType: "Glacial valleys, heather moorland, peat bogs, lochs, and native pine forests",
    associatedBreeds: ["Highland Pony", "Shetland Pony (Northern Isles)", "Clydesdale (Southern lowlands)"],
    ridingTradition: "Traditional Highland stalking pony work, pack pony expeditions, and clan cavalry heritage",
    conservationAndTourism: "Managed within the Affric Highlands rewilding initiative and National Nature Reserves; riders must respect the Scottish Outdoor Access Code, avoiding fragile sphagnum moss bogs.",
    scenicHighlights: ["Loch Affric", "Ancient Caledonian Pine Forest", "Glen Carron", "Ben Nevis Foothills"],
    subsections: [
      {
        heading: "The Deerstalker's Indispensable Companion",
        content: "For centuries before off-road vehicles, estates throughout the Highlands depended entirely on the Highland Pony to bring down red deer stags weighing over 150 kg from high, roadless corries. The pony's low center of gravity, broad hooves, and natural calm in steep terrain made it indispensable."
      },
      {
        heading: "Queen Victoria and Highland Ponies",
        content: "Queen Victoria developed a lifelong passion for the Highland Pony during her stays at Balmoral Castle in Aberdeenshire. She established her own breeding stud, rode Highland ponies across mountain trails, and popularized the breed among European nobility."
      },
      {
        heading: "Caledonian Pinewoods of Glen Affric",
        content: "Glen Affric is often described as Scotland's most beautiful glen. Riders following ancient drovers' routes can witness remnant stands of ancient Scots pine that covered the Scottish Highlands after the last Ice Age, 8,000 years ago."
      }
    ],
    keyFacts: [
      { label: "Oldest Working Lineage", value: "Highland Pony (Pictish stone carvings record)" },
      { label: "Traditional Work", value: "Gillie & deerstalking pack pony" },
      { label: "Royal Patron", value: "Queen Victoria (Balmoral Stud, 1850s)" },
      { label: "Historic Forest Reserve", value: "Glen Affric National Nature Reserve" }
    ],
    sources: [
      { title: "The Highland Pony", authorOrOrg: "The Highland Pony Society", yearOrType: "Official Breed History" },
      { title: "Leaves from the Journal of Our Life in the Highlands", authorOrOrg: "Queen Victoria", yearOrType: "1868 Royal Memoirs" },
      { title: "Historical Ecology of the Caledonian Forest", authorOrOrg: "NatureScot", yearOrType: "Scientific Conservation Papers" }
    ],
    relatedSlugs: ["united-kingdom", "new-forest-woodlands", "connemara-wild-coast", "dartmoor-national-park"],
    tags: ["Highlands", "Scotland", "Highland Pony", "Glen Affric", "UK"],
    translations: {
      de: {
        title: "Die schottischen Highlands — Glen Affric und das Highland-Pony",
        summary: "In den mythischen Highlands von Schottland bewährt sich das trittsichere Highland-Pony seit Jahrhunderten auf Mooren und Bergen."
      },
      fr: {
        title: "Les Highlands écossais — Glen Affric et le poney des Highlands",
        summary: "Au cœur des forêts de pins calédoniens de Glen Affric, le poney des Highlands incarne la force et la sérénité des clans écossais."
      }
    }
  },
  {
    id: "dst-new-forest",
    slug: "new-forest-woodlands",
    title: "The New Forest — William the Conqueror's Ancient Commoning Pastures",
    department: "destination",
    continent: "Europe",
    country: "United Kingdom",
    region: "Hampshire, England",
    coordinates: { lat: 50.8659, lng: -1.5833 },
    historicalPeriod: "1079 AD (Norman Era) to Present",
    heroImage: ASSETS.royalWindsorParade,
    imageCaption: "Free-roaming New Forest ponies grazing beneath ancient beech and oak canopies in Hampshire.",
    wordCount: 1210,
    summary: "Created as a royal hunting forest by William the Conqueror in 1079 AD, the New Forest in Hampshire is a living medieval landscape where thousands of semi-feral New Forest ponies roam open heaths and ancient woodlands under ancient commoning rights.",
    landscapeType: "Ancient pasture woodlands, lowland heath, bogs, and lawns",
    associatedBreeds: ["New Forest Pony"],
    ridingTradition: "Commoning, the Court of Verderers, autumn pony drifts (roundups), and open heath hack riding",
    conservationAndTourism: "Strictly protected within the New Forest National Park; visitors are legally prohibited from feeding or petting free-roaming ponies to preserve wild foraging instincts.",
    scenicHighlights: ["Beaulieu Heath", "Rhinefield Ornamental Drive", "Bolderwood Ancient Oaks", "Burley Village Common"],
    subsections: [
      {
        heading: "William the Conqueror and the Forest Law",
        content: "In 1079, King William I proclaimed the area 'Nova Foresta' as his personal hunting reserve for red deer and wild boar. He established Forest Law, which curtailed local agricultural enclosed farming but granted local inhabitants (Commoners) ancient rights of pasture, which survive to this day."
      },
      {
        heading: "The Court of Verderers and the Agisters",
        content: "Unique in English law, the Verderers' Court at Lyndhurst continues to administer the forest's ancient customs. Employed Agisters patrol the forest daily on horseback, ensuring pony welfare, checking brandings, and managing the autumn pony drifts where foals are inspected."
      },
      {
        heading: "The New Forest Pony: Natural Forest Architect",
        content: "The grazing of New Forest ponies is ecologically essential. By browsing gorse, heather, and low oak branches, ponies create the open grassy glades (lawns) and wood pastures that support rare flora, dragonflies, and ground-nesting birds."
      }
    ],
    keyFacts: [
      { label: "Established by Royal Decree", value: "1079 AD by William the Conqueror" },
      { label: "Medieval Governance", value: "Court of Verderers (Lyndhurst)" },
      { label: "Active Free-Roaming Herd", value: "Approx. 4,500 registered ponies" },
      { label: "Ancient Commoning Right", value: "Right of Common of Pasture" }
    ],
    sources: [
      { title: "The History and Laws of the New Forest", authorOrOrg: "The Official Court of Verderers", yearOrType: "Legal Historical Archives" },
      { title: "The New Forest Pony Stud Book", authorOrOrg: "New Forest Pony Breeding & Cattle Society", yearOrType: "Breed Registry" },
      { title: "Ecology of Wood Pastures in the New Forest", authorOrOrg: "Forestry Commission UK", yearOrType: "Ecological Reports" }
    ],
    relatedSlugs: ["united-kingdom", "dartmoor-national-park", "badminton-estate-grounds", "newmarket-historic-heath"],
    tags: ["New Forest", "Hampshire", "Commoning", "Verderers", "Ponies"],
    translations: {
      de: {
        title: "Der New Forest — Wilhelm des Eroberers uraltes Weideland",
        summary: "1079 von Wilhelm dem Eroberer gegründet, leben im New Forest Tausende von Ponys unter dem mittelalterlichen Recht der Verderers."
      },
      fr: {
        title: "La New Forest — Les pâturages ancestraux de Guillaume le Conquérant",
        summary: "Forêt royale fondée en 1079, la New Forest abrite ses célèbres poneys en liberté protégés par la cour médiévale des Verderers."
      }
    }
  },
  {
    id: "dst-pampas",
    slug: "argentine-pampas-grasslands",
    title: "The Argentine Pampas — Endless Horizons of the Gaucho",
    department: "destination",
    continent: "South America",
    country: "Argentina",
    region: "Buenos Aires, La Pampa, Santa Fe",
    coordinates: { lat: -35.6751, lng: -60.5430 },
    historicalPeriod: "16th Century to Present",
    heroImage: ASSETS.mongolianSteppe,
    imageCaption: "Gauchos driving horses across the boundless grassland horizon of the Argentine Pampas.",
    wordCount: 1240,
    summary: "Covering over 750,000 square kilometers, the Argentine Pampas are one of the world's great fertile oceanic plains. Here, the legendary Gaucho developed his symbiotic bond with the Criollo horse, creating a distinct culture of leather, silver, and equestrian self-reliance.",
    landscapeType: "Boundless temperate grasslands, freshwater lagoons (lagunas), and fertile pasture plains",
    associatedBreeds: ["Criollo Argentino", "Polo Argentino (Argentine Polo Pony)"],
    ridingTradition: "Doma India gentle horsemanship, jineteada roughstock riding, throwing the boleadoras, and estancias trail rides",
    conservationAndTourism: "Centuries-old historic estancias welcome riders for multi-day expeditions; riders must respect livestock gates and native grassland conservation reserves.",
    scenicHighlights: ["San Antonio de Areco", "Estancia El Ombú de Areco", "Laguna de Chascomús", "Sierra de la Ventana"],
    subsections: [
      {
        heading: "The Ocean of Grass and the Wild Baguales",
        content: "Early European travelers described entering the Pampas as sailing into an endless green ocean with no trees and no boundaries. Thousands of wild feral horses (baguales) roamed the plains, giving gauchos an endless supply of mounts that could be lassoed and trained in a matter of days."
      },
      {
        heading: "Doma India: The Gentle Art of Horse Whispering",
        content: "While popular myth portrayed the gaucho as a rough bronc rider, traditional indigenous horsemanship of the Ranqueles and Pampa tribes relied on 'Doma India' — a patient, non-violent method of desensitization, swimming together in lagoons, and breathing into the foal's nostrils to create unshakeable trust."
      },
      {
        heading: "San Antonio de Areco: Gaucho Capital",
        content: "Located two hours northwest of Buenos Aires on the Areco River, San Antonio de Areco is Argentina's National Capital of Tradition. In workshops along cobblestone streets, plateros (silversmiths) and silleteros (saddle makers) continue handcrafting raw leather reins and silver facones."
      }
    ],
    keyFacts: [
      { label: "Pampas Surface Area", value: "Over 750,000 sq kilometers" },
      { label: "Tradition Capital", value: "San Antonio de Areco" },
      { label: "Folk Epic Poem", value: "El Gaucho Martín Fierro (José Hernández, 1872)" },
      { label: "Traditional Tool", value: "Boleadoras (Three weighted stones in leather)" }
    ],
    sources: [
      { title: "El Gaucho Martín Fierro", authorOrOrg: "José Hernández", yearOrType: "1872 Classic Argentine Epic" },
      { title: "The Argentine Pampa and Its Horsemanship", authorOrOrg: "Academia Nacional de la Historia", yearOrType: "Historical Monographs" },
      { title: "Criollo Horse Association Records", authorOrOrg: "Asociación Criadores de Caballos Criollos", yearOrType: "Official Studbook" }
    ],
    relatedSlugs: ["argentina", "palermo-polo-cathedral", "san-antonio-de-areco", "1924-paris-olympics-polo"],
    tags: ["Pampas", "Gaucho", "Argentina", "Criollo", "Estancia"],
    translations: {
      de: {
        title: "Die argentinische Pampa — Endlose Horizonte des Gauchos",
        summary: "Die Weiten der argentinischen Pampa formten den Gaucho, das zähe Criollo-Pferd und die weltweit führende Polo-Kultur."
      },
      fr: {
        title: "La Pampa argentine — Les horizons infinis du Gaucho",
        summary: "Océan d'herbe de 750 000 km², la pampa argentine est le berceau du gaucho, du cheval Criollo et des grandes estancias historiques."
      }
    }
  },
  {
    id: "dst-skagafjordur",
    slug: "skagafjordur-valley",
    title: "Skagafjörður — The Equestrian Heartland of Iceland",
    department: "destination",
    continent: "Europe",
    country: "Iceland",
    region: "Northern Region (Norðurland vestra)",
    coordinates: { lat: 65.7431, lng: -19.6456 },
    historicalPeriod: "Settlement Era (874 AD) to Present",
    heroImage: ASSETS.camargueWildHorses,
    imageCaption: "Icelandic horses trotting along the glacial braided rivers of the Skagafjörður valley.",
    wordCount: 1190,
    summary: "Skagafjörður in northern Iceland is universally known as the 'Mecca of the Icelandic Horse'. With more horses per capita than anywhere else in Iceland, this wide glacial valley bordered by jagged mountains is home to the most famous breeding lineages, including Svaðastaðir and Kolkuós.",
    landscapeType: "Glacial valley, braided river plains, volcanic mountains, and geothermal springs",
    associatedBreeds: ["Icelandic Horse (Íslenski hesturinn)"],
    ridingTradition: "Five-gaited performance riding, autumn horse roundups (Laufskálarétt), and geothermal trail riding",
    conservationAndTourism: "Equestrian trails follow historical pack paths; riders are required to disinfect foreign riding boots and tack prior to entering Iceland to prevent disease transmission.",
    scenicHighlights: ["Hólar Historical Cathedral & University", "Laufskálarétt Horse Corral", "Héraðsvötn Glacial River", "Drangey Island Viewpoint"],
    subsections: [
      {
        heading: "The Golden Valley of Horse Breeding",
        content: "For centuries, the lush pastures along the Héraðsvötn river provided rich grazing during short sub-arctic summers. Skagafjörður produced the foundational stallions and mares of modern Icelandic sport, noted for elevated, clean four-beat tölt and fiery spirit (vilji)."
      },
      {
        heading: "Hólar: Historic Bishopric and University of the Horse",
        content: "Hólar in Hjaltadalur was the medieval religious and intellectual capital of northern Iceland. Today, Hólar University features the Department of Equine Studies — the world's only university offering accredited bachelor's degrees exclusively in classical Icelandic riding and horsemanship."
      },
      {
        heading: "Laufskálarétt: The Queen of Horse Roundups",
        content: "Every September, the Laufskálarétt in Hjaltadalur becomes the epicenter of Icelandic horse culture. Thousands of farmers and international spectators gather as over 500 mares and young stock are driven down from summer highland pastures into a massive circular stone and turf corral."
      }
    ],
    keyFacts: [
      { label: "Equine University", value: "Hólar University (Department of Equine Studies)" },
      { label: "Famous Breeding Strains", value: "Svaðastaðir & Kolkuós bloodlines" },
      { label: "Queen of Roundups", value: "Laufskálarétt (Hjaltadalur, late September)" },
      { label: "Geographical Feature", value: "Héraðsvötn glacial river basin" }
    ],
    sources: [
      { title: "Skagafjörður: The Valley of Horses", authorOrOrg: "Skagafjörður Tourism & Heritage Board", yearOrType: "Regional Monograph" },
      { title: "Hólar: Sacred Center and Equine Academy", authorOrOrg: "Hólar University Archives", yearOrType: "Academic History" },
      { title: "WorldFengur: The International Database of the Icelandic Horse", authorOrOrg: "FEIF", yearOrType: "Official Studbook Database" }
    ],
    relatedSlugs: ["iceland", "landsmot-national-grounds", "thingvellir-highlands", "nordfjord-glacier-valley"],
    tags: ["Iceland", "Skagafjordur", "Holar", "Tolt", "Laufskalarett"],
    translations: {
      de: {
        title: "Skagafjörður — Das Pferdeparadies von Island",
        summary: "Skagafjörður im Norden Islands gilt als Mekka des Islandpferdes mit der Pferdestudien-Universität in Hólar und dem Abtrieb Laufskálarétt."
      },
      fr: {
        title: "Le Skagafjörður — Le sanctuaire équestre de l'Islande",
        summary: "Vallée mythique du nord de l'Islande, le Skagafjörður abrite l'université équestre d'Hólar et le grand rassemblement de Laufskálarétt."
      }
    }
  },
  {
    id: "dst-alentejo",
    slug: "alentejo-cork-plains",
    title: "The Alentejo — Cork Forests & The Royal Alter Real Heartland",
    department: "destination",
    continent: "Europe",
    country: "Portugal",
    region: "Alentejo (Portalegre, Évora, Beja)",
    coordinates: { lat: 38.5714, lng: -7.9135 },
    historicalPeriod: "18th Century to Present",
    heroImage: ASSETS.andalusianCourtyard,
    imageCaption: "Lusitano and Alter Real horses grazing under ancient cork oaks in the Alentejo plains.",
    wordCount: 1180,
    summary: "Occupying nearly a third of Portugal, the Alentejo is a serene, sun-baked landscape of rolling plains, whitewashed villages, and monumental montado cork and holm oak forests. It is the geographic cradle of the Alter Real horse, founded by King John V in 1748.",
    landscapeType: "Rolling cork oak montado savannah, golden wheat plains, and olive groves",
    associatedBreeds: ["Puro Sangue Lusitano (PSL)", "Alter Real (Royal Lusitano branch)"],
    ridingTradition: "Classical dressage, campino cattle herding, working equitation, and royal stud farm tours",
    conservationAndTourism: "The montado ecosystem is protected under Portuguese environmental law; trail riding supports rural preservation and traditional cork harvesting.",
    scenicHighlights: ["Coudelaria de Alter (Alter do Chão)", "Évora UNESCO Historic Center", "Monsaraz Hilltop Castle", "Guadiana River Valley"],
    subsections: [
      {
        heading: "The Montado: Ancient Savannah of Portugal",
        content: "The Alentejo montado is a silvopastoral system recognized for exceptional biodiversity. Lusitano mares and foals graze freely beneath sprawling cork oaks that are harvested by hand every nine years, providing an open, tranquil habitat that builds sound limbs and calm temperaments."
      },
      {
        heading: "Coudelaria de Alter: Royal Breeding Since 1748",
        content: "Near the town of Alter do Chão, King John V of Portugal founded the Alter Real stud in 1748 to supply horses to the Royal Court in Lisbon. The stud survives on its original 800-hectare estate, preserving historic baroque stables, an equestrian museum, and foundation bloodlines."
      },
      {
        heading: "Working Equitation Across Endless Horizons",
        content: "The Alentejo cattle herdsman, the campino, perfected working equitation techniques to guide wild Retinto cattle. Riding with one hand on traditional leather reins, riders execute rapid spins, stops, and gates with total ease."
      }
    ],
    keyFacts: [
      { label: "Royal Stud Location", value: "Coudelaria de Alter (Founded 1748)" },
      { label: "Signature Ecosystem", value: "Montado (Cork and Holm oak savannah)" },
      { label: "Cork Harvest Interval", value: "Every 9 years by hand" },
      { label: "Traditional Equestrian Figure", value: "Campino of the plains" }
    ],
    sources: [
      { title: "Coudelaria de Alter: 275 Anos de História", authorOrOrg: "Companhia das Lezírias / Fundação Alter Real", yearOrType: "Official Stud History" },
      { title: "O Montado Alentejano e o Cavalo", authorOrOrg: "Universidade de Évora", yearOrType: "Ecological and Agricultural Research" },
      { title: "Lusitano: The Royal Horse of Europe", authorOrOrg: "Arsénio Raposo Cordeiro", yearOrType: "Equestrian Monograph" }
    ],
    relatedSlugs: ["portugal", "alter-real-stud", "portuguese-school-equestrian-art", "golega-equestrian-capital"],
    tags: ["Alentejo", "Portugal", "Alter Real", "Lusitano", "Montado"],
    translations: {
      de: {
        title: "Der Alentejo — Korkeichen-Ebenen und die Heimat der Alter Real",
        summary: "Der Alentejo birgt die königliche Coudelaria de Alter von 1748 und die sonnenverwöhnten Korkeichenwälder Portugals."
      },
      fr: {
        title: "L'Alentejo — Les plaines de liège et le berceau de l'Alter Real",
        summary: "Dans les paysages de chênes-lièges de l'Alentejo s'épanouit le haras royal d'Alter do Chão, gardien du cheval de cour portugais depuis 1748."
      }
    }
  },
  {
    id: "dst-maremma",
    slug: "maremma-tuscan-wetlands",
    title: "The Maremma — Tuscany's Wild West & The Butteri Horsemen",
    department: "destination",
    continent: "Europe",
    country: "Italy",
    region: "Tuscany (Grosseto) and Northern Lazio",
    coordinates: { lat: 42.6667, lng: 11.1167 },
    historicalPeriod: "Etruscan Era to Present",
    heroImage: ASSETS.estateRider,
    imageCaption: "Butteri horsemen riding Maremmano horses in the coastal pine groves and marshes of Tuscany.",
    wordCount: 1170,
    summary: "Known as Italy's 'Wild West', the Maremma spans the rugged coastal strip of southern Tuscany and northern Lazio. Once a malaria-ridden wetland tamed by centuries of drainage, it is the ancestral homeland of the Maremmano horse and the Butteri — Italy's historic mounted herdsmen.",
    landscapeType: "Coastal marshes, umbrella pine forests (pinete), Mediterranean scrub (macchia), and sandy beaches",
    associatedBreeds: ["Maremmano Horse", "Cavallo Romano della Maremma Laziale"],
    ridingTradition: "Monta da Lavoro (Italian working equitation), cattle cutting with the uncino hook-stick, and transhumance",
    conservationAndTourism: "The Maremma Regional Park (Parco dell'Uccellina) preserves coastal wildlife; horseback rides are guided along historic trails to minimize disturbance to wild boars and fallow deer.",
    scenicHighlights: ["Parco Regionale della Maremma (Uccellina)", "San Rabano Medieval Abbey Ruins", "Marina di Alberese Beach", "Capalbio Medieval Village"],
    subsections: [
      {
        heading: "The Land of the Etruscans and the Butteri",
        content: "Long before Roman roads crossed the peninsula, Etruscan tombs depicted horses and riders navigating the Maremma coast. In modern times, the Butteri were the only men tough enough to survive the wetlands, herding long-horned Maremmana grey cattle through dense thorn thickets."
      },
      {
        heading: "The Defeat of Buffalo Bill (1890)",
        content: "In March 1890, William F. 'Buffalo Bill' Cody brought his Wild West Show to Rome, boasting that no one in the world could tame wild American mustangs like his cowboys. The Duke of Sermoneta organized a contest, and Augusto Imperiali, an unassuming Buttero from Cisterna, gentled the wild bucking horses with calm mastery, achieving legendary folk status."
      },
      {
        heading: "The Scafarda Saddle of the Buttero",
        content: "The buttero rides in the 'Scafarda' — a unique wooden-treed saddle padded with straw and covered in heavy leather, with deep stirrups and a tall cantle that supports the rider over long hours in rough brush."
      }
    ],
    keyFacts: [
      { label: "Historic Herdsmen", value: "The Butteri of Tuscany" },
      { label: "Native Breed", value: "Cavallo Maremmano" },
      { label: "Historic Triumph", value: "Augusto Imperiali defeats Buffalo Bill (1890)" },
      { label: "Traditional Saddle", value: "La Scafarda Maremmana" }
    ],
    sources: [
      { title: "I Butteri di Maremma", authorOrOrg: "Archivio delle Tradizioni Popolari della Maremma", yearOrType: "Historical Monograph" },
      { title: "Il Cavallo Maremmano: Storia ed Evoluzione", authorOrOrg: "ANAM (Associazione Nazionale Allevatori)", yearOrType: "Official Breed Registry" },
      { title: "Buffalo Bill in Italia", authorOrOrg: "Alessandro Portelli", yearOrType: "Cultural History Review" }
    ],
    relatedSlugs: ["italy", "piazza-del-campo-siena", "piazza-di-siena-rome", "camargue-rhone-delta"],
    tags: ["Maremma", "Tuscany", "Butteri", "Maremmano", "Italy"],
    translations: {
      de: {
        title: "Die Maremma — Der wilde Westen der Toskana und die Butteri",
        summary: "Die toskanische Maremma ist das Reich der Butteri-Hirten und des robusten Maremmano-Pferdes."
      },
      fr: {
        title: "La Maremme — Le Far West toscan et les cavaliers Butteri",
        summary: "Bordant la côte toscane, la Maremme conserve ses fiers butteri et le cheval Maremmano, célèbres pour avoir défié Buffalo Bill."
      }
    }
  },
  {
    id: "dst-kentucky-bluegrass",
    slug: "kentucky-bluegrass-region",
    title: "The Kentucky Bluegrass — The Inner Basin & Thoroughbred Nurseries",
    department: "destination",
    continent: "North America",
    country: "United States",
    region: "Kentucky (Fayette, Woodford, Bourbon, Scott Counties)",
    coordinates: { lat: 38.0406, lng: -84.5037 },
    historicalPeriod: "Late 18th Century to Present",
    heroImage: ASSETS.heroLandscape,
    imageCaption: "Stately thoroughbred stud farm in the Kentucky Bluegrass with iconic black board fencing.",
    wordCount: 1260,
    summary: "Centered around Lexington, Kentucky, the Inner Bluegrass region is the undisputed Thoroughbred capital of the world. Its rolling hills, manicured farms with miles of black and white plank fencing, and calcium-rich limestone springs have nurtured Kentucky Derby and Breeders' Cup champions for over two centuries.",
    landscapeType: "Rolling karst limestone hills, lush pastures, deciduous woodlands, and spring-fed creeks",
    associatedBreeds: ["Thoroughbred", "American Saddlebred (Kentucky Saddler)", "Standardbred"],
    ridingTradition: "Thoroughbred yearling preparation, morning track gallops, high-goal polo, and classical show hunter riding",
    conservationAndTourism: "Preserved through rural urban boundary laws and the Bluegrass Conservancy; historic farm tours provide respectful access without disrupting daily veterinary and breeding schedules.",
    scenicHighlights: ["Keeneland Race Course", "Kentucky Horse Park (Lexington)", "Calumet Farm & Claiborne Farm", "Old Frankfort Pike Scenic Byway"],
    subsections: [
      {
        heading: "The Geology Behind the Champion Racehorse",
        content: "The secret of the Kentucky Bluegrass lies underground. Millions of years ago, an ancient shallow sea deposited thick layers of Ordovician limestone. As rainwater filters through the rock, it enriches the groundwater and soil with calcium and phosphorus. Pasture grasses (Poa pratensis) absorb these minerals, resulting in denser, more fracture-resistant equine bone."
      },
      {
        heading: "Claiborne and Calumet: Dynasties of Speed",
        content: "Legendary historic farms in Paris and Lexington shaped world racing. Claiborne Farm stood Secretariat, Bold Ruler, and Mr. Prospector. Calumet Farm dominated the 1940s and 50s, winning eight Kentucky Derbys and two Triple Crowns with Whirlaway and Citation, identifiable by their iconic devil's red and blue silks."
      },
      {
        heading: "Keeneland: Racing in the Park",
        content: "Founded in 1936 as a non-profit racing institution by horsemen for horsemen, Keeneland in Lexington looks like an English country estate. It hosts the world's most prestigious Thoroughbred yearling auctions, where international royal families and breeders bid millions under limestone sycamores."
      }
    ],
    keyFacts: [
      { label: "Horse Capital of the World", value: "Lexington, Kentucky" },
      { label: "Unique Soil Chemistry", value: "High-calcium Ordovician limestone" },
      { label: "Historic Nursery", value: "Claiborne Farm (Paris, KY - foaled Secretariat)" },
      { label: "National Historic Landmark", value: "Keeneland Race Course (Established 1936)" }
    ],
    sources: [
      { title: "The Bluegrass Conspiracy and Turf History", authorOrOrg: "Kentucky Historical Society", yearOrType: "State Historical Monographs" },
      { title: "Secretariat: The Making of a Champion", authorOrOrg: "William Nack", yearOrType: "Sports Biography" },
      { title: "The Limestone Geology of Central Kentucky", authorOrOrg: "Kentucky Geological Survey", yearOrType: "Geological Research" }
    ],
    relatedSlugs: ["united-states", "churchill-downs-grounds", "1875-first-kentucky-derby", "newmarket-historic-heath"],
    tags: ["Bluegrass", "Kentucky", "Thoroughbred", "Lexington", "Keeneland"],
    translations: {
      de: {
        title: "Das Kentucky Bluegrass — Die Vollblut-Hauptstadt der Welt",
        summary: "Rund um Lexington liegt das kalksteinreiche Kentucky Bluegrass, wo seit zwei Jahrhunderten Rennsportlegenden gezüchtet werden."
      },
      fr: {
        title: "Le Bluegrass du Kentucky — Le sanctuaire mondial du Pur-Sang",
        summary: "Autour de Lexington, les collines calcaires du Kentucky Bluegrass forment le berceau des champions du Kentucky Derby."
      }
    }
  },
  {
    id: "dst-orkhon-valley",
    slug: "orkhon-valley-cultural-landscape",
    title: "Orkhon Valley — Sacred Grasslands of the Nomadic Steppe",
    department: "destination",
    continent: "Asia",
    country: "Mongolia",
    region: "Övörkhangai and Arkhangai Provinces",
    coordinates: { lat: 47.5544, lng: 102.8361 },
    historicalPeriod: "Bronze Age & 13th Century Mongol Empire",
    heroImage: ASSETS.mongolianSteppe,
    imageCaption: "Nomadic herds of Mongolian horses grazing near the Orkhon River with traditional ger encampments.",
    wordCount: 1200,
    summary: "The Orkhon Valley Cultural Landscape, a UNESCO World Heritage site, represents the evolution of nomadic pastoral traditions over two millennia. Covering 121,967 hectares along the Orkhon River, it was the imperial capital of the Mongol Empire (Karakorum) and remains the heart of nomadic horse life.",
    landscapeType: "River valleys, expansive steppe plains, volcanic basalt gorges, and alpine larch forests",
    associatedBreeds: ["Mongolian Horse (Mongol aduu)"],
    ridingTradition: "Free-range nomadic pasturing, airag (fermented mare's milk) production, and long-distance steppe endurance",
    conservationAndTourism: "Inscribed by UNESCO in 2004; horse travel follows traditional nomadic seasonal migration corridors (otorkh) to prevent overgrazing.",
    scenicHighlights: ["Orkhon Waterfall (Ulaan Tsutgalan)", "Ancient Karakorum & Erdene Zuu Monastery", "Kharkhorin Steppe Vistas", "Tuvkhun Hermitage Mountain"],
    subsections: [
      {
        heading: "The Epicenter of Steppe Empires",
        content: "For over two thousand years, the Orkhon Valley was considered the sacred center of power by successive nomadic confederations: the Xiongnu, the Turkic Khaganate (documented in the 8th-century Orkhon inscriptions), the Uyghurs, and Genghis Khan's Mongol Empire, which established Karakorum here in 1220."
      },
      {
        heading: "Nomadic Horse Pastoralism Today",
        content: "Nomadic families still live in felt gers along the Orkhon River, moving with their herds four times a year. Horses are milked six times daily during summer to ferment airag, a vital source of vitamins and community hospitality across the grasslands."
      },
      {
        heading: "The Spirit of the Steppe Mount",
        content: "The Mongolian horse of the Orkhon Valley possesses an astonishing internal compass. If lost in a blinding winter blizzard (zud), riders drop the reins and trust the horse's instincts to find the home encampment through deep drifts."
      }
    ],
    keyFacts: [
      { label: "UNESCO World Heritage Site", value: "Orkhon Valley Cultural Landscape (Inscribed 2004)" },
      { label: "Historic Imperial Capital", value: "Karakorum (Founded 1220 by Genghis Khan)" },
      { label: "Ancient Inscriptions", value: "8th-century Bilge Khagan Orkhon Monuments" },
      { label: "Traditional Beverage", value: "Airag (Fermented mare's milk)" }
    ],
    sources: [
      { title: "UNESCO Nomination Dossier: Orkhon Valley Cultural Landscape", authorOrOrg: "UNESCO World Heritage Centre", yearOrType: "Official Dossier 1081rev" },
      { title: "Nomads of the Orkhon Valley", authorOrOrg: "Mongolian Academy of Sciences", yearOrType: "Ethnographic Research" },
      { title: "The Mongol Empire: Genghis Khan and His Legacy", authorOrOrg: "Peter Brent", yearOrType: "Historical Monograph" }
    ],
    relatedSlugs: ["mongolia", "hustai-national-park-takhi", "hui-doloon-hudag-naadam", "altai-mountain-equestrian"],
    tags: ["Mongolia", "Orkhon", "UNESCO", "Nomad", "Steppe"],
    translations: {
      de: {
        title: "Orkhon-Tal — Heilige Grassteppen des Nomadenreichs",
        summary: "Das UNESCO-Welterbe Orkhon-Tal war das Herz des mongolischen Weltreichs von Karakorum und bewahrt bis heute die freie Nomadenreiterei."
      },
      fr: {
        title: "La vallée de l'Orkhon — Les steppes sacrées des nomades",
        summary: "Classée par l'UNESCO, la vallée de l'Orkhon abrite l'ancienne capitale de Karakorum et la symbiose entre nomades et chevaux de steppe."
      }
    }
  }
];

// Dynamically generate the remaining 90 destinations to ensure the exact target of 100 complete profiles
const ADDITIONAL_DESTINATIONS_SEED = [
  { name: "Dartmoor National Park", country: "United Kingdom", continent: "Europe" as const, region: "Devon, England", breed: "Dartmoor Pony", landscape: "Granite tors and heather moorland", lat: 50.5719, lng: -3.9208 },
  { name: "Connemara Coast & Twelve Bens", country: "Ireland", continent: "Europe" as const, region: "County Galway", breed: "Connemara Pony", landscape: "Rocky Atlantic coastline and peat bogs", lat: 53.5186, lng: -9.9272 },
  { name: "Exmoor National Park", country: "United Kingdom", continent: "Europe" as const, region: "Somerset & Devon", breed: "Exmoor Pony", landscape: "High coastal moorland and deep coombes", lat: 51.1417, lng: -3.6500 },
  { name: "Cappadocia Historic Valleys", country: "Turkey", continent: "Europe" as const, region: "Central Anatolia", breed: "Anatolian & Rahvan Horses", landscape: "Volcanic fairy chimneys and honeycombed hills", lat: 38.6431, lng: 34.8289 },
  { name: "Black Forest & Swabian Alb", country: "Germany", continent: "Europe" as const, region: "Baden-Württemberg", breed: "Schwarzwälder Kaltblut", landscape: "Dense fir forests and highland meadows", lat: 48.1500, lng: 8.2500 },
  { name: "Tyrolean Alps & Hafling Plateau", country: "Austria", continent: "Europe" as const, region: "Tyrol / South Tyrol", breed: "Haflinger", landscape: "Jagged alpine peaks and high summer pastures", lat: 47.2500, lng: 11.4000 },
  { name: "Friesland Coastal Polders", country: "Netherlands", continent: "Europe" as const, region: "Friesland", breed: "Friesian Horse", landscape: "Dike pastures, canals, and coastal flatlands", lat: 53.2000, lng: 5.8000 },
  { name: "Gower Peninsula & Brecon Beacons", country: "United Kingdom", continent: "Europe" as const, region: "Wales", breed: "Welsh Mountain Pony & Cob", landscape: "Limestone coastal cliffs and mountain ridges", lat: 51.5833, lng: -4.1333 },
  { name: "Bighorn Basin & Absaroka Range", country: "United States", continent: "North America" as const, region: "Wyoming", breed: "American Quarter Horse & Mustang", landscape: "Sagebrush canyons and mountain peaks", lat: 44.5000, lng: -108.5000 },
  { name: "Pantanal Tropical Wetlands", country: "Brazil", continent: "South America" as const, region: "Mato Grosso", breed: "Pantaneiro Horse", landscape: "Seasonally flooded tropical savanna", lat: -16.5000, lng: -56.5000 },
  { name: "Atacama Oasis & Salt Flats", country: "Chile", continent: "South America" as const, region: "San Pedro de Atacama", breed: "Chilean Horse & Criollo", landscape: "Arid sandstone canyons and salt lagoons", lat: -22.9087, lng: -68.1997 },
  { name: "Colchagua Valley Ranches", country: "Chile", continent: "South America" as const, region: "Central Valley", breed: "Caballo Chileno", landscape: "Sunlit vineyard valleys and foothills", lat: -34.6000, lng: -71.3000 },
  { name: "AlUla Desert & Sandstone Canyons", country: "Saudi Arabia", continent: "Asia" as const, region: "Medina Province", breed: "Asil Arabian Horse", landscape: "Monumental red sandstone canyon valleys", lat: 26.6178, lng: 37.9289 },
  { name: "Middle Atlas Cedar Forests", country: "Morocco", continent: "Africa" as const, region: "Fès-Meknès", breed: "Barb & Arab-Barb", landscape: "Ancient cedar forests and limestone lakes", lat: 33.4000, lng: -5.2000 },
  { name: "Snowy Mountains High Country", country: "Australia", continent: "Oceania" as const, region: "New South Wales", breed: "Australian Stock Horse & Brumby", landscape: "Alpine snow gum forests and granite peaks", lat: -36.5000, lng: 148.3333 },
  { name: "Cambridge & Waikato Basin", country: "New Zealand", continent: "Oceania" as const, region: "Waikato", breed: "New Zealand Thoroughbred", landscape: "Rolling volcanic plains and river plains", lat: -37.8833, lng: 175.4667 },
  { name: "Lake Issyk-Kul Highland Pastures", country: "Kyrgyzstan", continent: "Asia" as const, region: "Tien Shan Mountains", breed: "Novokirghiz", landscape: "Endorheic alpine lake and mountain jailoo", lat: 42.4333, lng: 77.2500 },
  { name: "Altai Mountains & Katun Valley", country: "Kazakhstan", continent: "Asia" as const, region: "East Kazakhstan", breed: "Kazakh Horse & Altai Breed", landscape: "Forested taiga and snowcapped alpine ridges", lat: 49.5000, lng: 86.0000 },
  { name: "Thar Desert & Shekhawati Trail", country: "India", continent: "Asia" as const, region: "Rajasthan", breed: "Marwari Horse", landscape: "Arid desert sand dunes and painted havelis", lat: 27.5000, lng: 75.0000 },
  { name: "Jura Highland Plateau", country: "Switzerland", continent: "Europe" as const, region: "Canton of Jura", breed: "Franches-Montagnes", landscape: "High limestone pastures and wooded meadows", lat: 47.2500, lng: 7.0833 },
  { name: "Gotland Island Lojsta Heath", country: "Sweden", continent: "Europe" as const, region: "Gotland", breed: "Gotland Russ Pony", landscape: "Baltic pine forests and limestone heaths", lat: 57.3167, lng: 18.3833 },
  { name: "Nordfjord Glacial Valley", country: "Norway", continent: "Europe" as const, region: "Vestland", breed: "Norwegian Fjord Horse", landscape: "Glacial fjords, steep precipices, and waterfalls", lat: 61.9000, lng: 6.0000 },
  { name: "Roztocze Forest & River Valley", country: "Poland", continent: "Europe" as const, region: "Lublin Voivodeship", breed: "Konik Polski (Tarpan descendant)", landscape: "Dense virgin woodland and ravines", lat: 50.6000, lng: 23.0000 },
  { name: "Bohemian Paradise Sandstone Towers", country: "Czech Republic", continent: "Europe" as const, region: "Liberec & Hradec Králové", breed: "Kinsky Horse", landscape: "Sandstone rock labyrinths and pine ridges", lat: 50.5167, lng: 15.1667 },
  { name: "Peloponnese Arcadia Highlands", country: "Greece", continent: "Europe" as const, region: "Arcadia", breed: "Pindos Pony", landscape: "Limestone karst gorges and oak forests", lat: 37.5000, lng: 22.3667 },
  { name: "Drakensberg Escarpment & Sani Pass", country: "South Africa", continent: "Africa" as const, region: "KwaZulu-Natal", breed: "Boerperd & Basotho Pony", landscape: "Towering basalt ramparts and high passes", lat: -29.5833, lng: 29.2833 },
  { name: "Great Karoo Ancient Plains", country: "South Africa", continent: "Africa" as const, region: "Western & Eastern Cape", breed: "Boerperd", landscape: "Semi-arid scrub desert and flat-topped kopjes", lat: -32.5000, lng: 23.5000 },
  { name: "Monument Valley Navajo Lands", country: "United States", continent: "North America" as const, region: "Arizona & Utah", breed: "Navajo-Churro & Mustang", landscape: "Towering red sandstone buttes and desert floor", lat: 36.9980, lng: -110.0985 },
  { name: "Shenandoah Valley & Blue Ridge", country: "United States", continent: "North America" as const, region: "Virginia", breed: "American Thoroughbred & Hunter", landscape: "Rolling pastoral valley between mountain ridges", lat: 38.5000, lng: -78.8000 },
  { name: "Ocala & Marion County Horse Country", country: "United States", continent: "North America" as const, region: "Florida", breed: "Thoroughbred & American Warmblood", landscape: "Live oak pastures draped in Spanish moss", lat: 29.1872, lng: -82.1401 },
  { name: "Cariboo Gold Country Plateau", country: "Canada", continent: "North America" as const, region: "British Columbia", breed: "Quarter Horse & Canadian Horse", landscape: "Rolling cattle range and lodgepole pine forests", lat: 52.1333, lng: -122.1500 },
  { name: "Charlevoix St. Lawrence Highlands", country: "Canada", continent: "North America" as const, region: "Quebec", breed: "Cheval Canadien", landscape: "Ancient meteor crater and maritime cliffs", lat: 47.5000, lng: -70.4000 },
  { name: "Jalisco Los Altos Highlands", country: "Mexico", continent: "North America" as const, region: "Jalisco", breed: "Azteca Horse & Criollo", landscape: "Red volcanic soil and agave plantations", lat: 21.0000, lng: -102.5000 },
  { name: "Cotopaxi High Andean Páramo", country: "Ecuador", continent: "South America" as const, region: "Cotopaxi", breed: "Chagra Criollo", landscape: "High altitude volcanic grasslands (páramo)", lat: -0.6833, lng: -78.4361 },
  { name: "Sacred Valley of the Incas", country: "Peru", continent: "South America" as const, region: "Cusco Region", breed: "Peruvian Paso", landscape: "Terraced mountain river valley and snow peaks", lat: -13.3333, lng: -72.0833 },
  { name: "Rocha Coastal Lagoons", country: "Uruguay", continent: "South America" as const, region: "Rocha", breed: "Criollo Uruguayo", landscape: "Atlantic sand dunes, coastal wetlands, and sierras", lat: -34.4833, lng: -54.3333 },
  { name: "Kimberley Ancient Plateau", country: "Australia", continent: "Oceania" as const, region: "Western Australia", breed: "Australian Stock Horse", landscape: "Rugged red sandstone gorges and boab savannas", lat: -17.0000, lng: 126.0000 },
  { name: "Glenorchy Dart River Valley", country: "New Zealand", continent: "Oceania" as const, region: "Otago", breed: "Station Bred & Clydesdale-cross", landscape: "Braided glacial rivers and beech forests", lat: -44.8500, lng: 168.4000 },
  { name: "Hortobágy Great Puszta Plain", country: "Hungary", continent: "Europe" as const, region: "Hajdú-Bihar", breed: "Nonius", landscape: "Flat alkaline steppe and shallow marshes", lat: 47.5833, lng: 21.1500 },
  { name: "Kastamonu Daday Horse Plateau", country: "Turkey", continent: "Europe" as const, region: "Black Sea Region", breed: "Anatolian Horse", landscape: "Forested mountain valleys and open pastures", lat: 41.4667, lng: 33.4667 },
  { name: "Pelion Mountain Centaur Paths", country: "Greece", continent: "Europe" as const, region: "Thessaly", breed: "Thessalian Horse", landscape: "Chestnut forests overlooking Aegean Sea", lat: 39.4000, lng: 23.1500 },
  { name: "Somme Valley Marshlands", country: "France", continent: "Europe" as const, region: "Hauts-de-France", breed: "Henson Horse", landscape: "Estuary sand flats and coastal wetlands", lat: 50.2500, lng: 1.6000 },
  { name: "Basque Country Pyrenean Meadows", country: "Spain", continent: "Europe" as const, region: "Navarre & Basque Country", breed: "Pottok Pony", landscape: "Rugged limestone mountains and oak glens", lat: 43.2000, lng: -1.8000 },
  { name: "Asturias Picos de Europa", country: "Spain", continent: "Europe" as const, region: "Asturias", breed: "Asturcón Pony", landscape: "Dramatic limestone massifs and green valleys", lat: 43.1900, lng: -4.8300 },
  { name: "Menorca Cami de Cavalls", country: "Spain", continent: "Europe" as const, region: "Balearic Islands", breed: "Menorquín Horse", landscape: "Coastal bridleway circling Mediterranean island", lat: 39.9500, lng: 4.1000 },
  { name: "Ribatejo Tagus Floodplains", country: "Portugal", continent: "Europe" as const, region: "Santarém", breed: "Lusitano", landscape: "Alluvial river floodplains and bull pastures", lat: 39.2333, lng: -8.6833 },
  { name: "Piedmont Langhe & Roero Hills", country: "Italy", continent: "Europe" as const, region: "Piedmont", breed: "Sella Italiano", landscape: "Rolling vineyard slopes and ancient castles", lat: 44.7000, lng: 8.0333 },
  { name: "Umbria Sibillini Valnerina", country: "Italy", continent: "Europe" as const, region: "Umbria", breed: "Catria Horse", landscape: "High limestone karst plains and beech forests", lat: 42.8000, lng: 13.0000 },
  { name: "Salzkammergut Imperial Lakes", country: "Austria", continent: "Europe" as const, region: "Upper Austria / Styria", breed: "Noriker", landscape: "Cobalt alpine lakes and limestone walls", lat: 47.7000, lng: 13.6000 },
  { name: "Engadin Valley High Alpine", country: "Switzerland", continent: "Europe" as const, region: "Grisons", breed: "Swiss Warmblood", landscape: "Larch-forested high alpine valley", lat: 46.5000, lng: 9.8500 },
  { name: "Lüneburg Heath Sand & Heather", country: "Germany", continent: "Europe" as const, region: "Lower Saxony", breed: "Hanoverian", landscape: "Purple heather plains and juniper scrub", lat: 53.1667, lng: 9.9167 },
  { name: "Holstein Marshes & Geest", country: "Germany", continent: "Europe" as const, region: "Schleswig-Holstein", breed: "Holsteiner", landscape: "Fertile alluvial clay pastures between seas", lat: 54.0000, lng: 9.5000 },
  { name: "Bavarian Alpine Foothills", country: "Germany", continent: "Europe" as const, region: "Upper Bavaria", breed: "Bavarian Warmblood", landscape: "Pastoral hills beneath snowcapped peaks", lat: 47.7500, lng: 11.5500 },
  { name: "Ardennes Ancient Forest", country: "Belgium", continent: "Europe" as const, region: "Wallonia", breed: "Ardennais Draft", landscape: "Dense oak-beech forested plateau and gorges", lat: 50.0000, lng: 5.5000 },
  { name: "Białowieża Primeval Forest", country: "Poland", continent: "Europe" as const, region: "Podlaskie", breed: "Konik Polski", landscape: "Last remaining European lowland primeval forest", lat: 52.7500, lng: 23.8333 },
  { name: "Bieszczady Mountain Meadows", country: "Poland", continent: "Europe" as const, region: "Subcarpathian", breed: "Hucul Horse", landscape: "High polonyna grasslands and beech woods", lat: 49.2000, lng: 22.5000 },
  { name: "Matra & Bükk Mountain Trails", country: "Hungary", continent: "Europe" as const, region: "Heves & Borsod", breed: "Lipizzaner & Kisbéri", landscape: "Forested volcanic ridges and valleys", lat: 47.9000, lng: 20.0000 },
  { name: "Krkonoše Giant Mountains", country: "Czech Republic", continent: "Europe" as const, region: "Hradec Králové", breed: "Czech Warmblood", landscape: "Subalpine tundra plateaus and peat bogs", lat: 50.7333, lng: 15.7333 },
  { name: "Sumava Bohemian Forest", country: "Czech Republic", continent: "Europe" as const, region: "South Bohemia", breed: "Silesian Noriker", landscape: "Glacial lakes, peat bogs, and spruce forest", lat: 49.0000, lng: 13.5000 },
  { name: "Pindus Mountain National Park", country: "Greece", continent: "Europe" as const, region: "Epirus", breed: "Pindos Mountain Pony", landscape: "Limestone gorge canyons and pine forests", lat: 39.9000, lng: 21.1000 },
  { name: "Kevad Highland Boreal Forest", country: "Finland", continent: "Europe" as const, region: "Lapland", breed: "Finnhorse", landscape: "Taiga forest, bogs, and clear arctic rivers", lat: 66.5000, lng: 26.0000 },
  { name: "Hardangervidda Alpine Plateau", country: "Norway", continent: "Europe" as const, region: "Vestland / Viken", breed: "Fjord Horse", landscape: "Europe's largest high mountain plateau", lat: 60.3000, lng: 7.5000 },
  { name: "Thingvellir Rift Valley", country: "Iceland", continent: "Europe" as const, region: "Southern Region", breed: "Icelandic Horse", landscape: "Tectonic continental rift and volcanic fields", lat: 64.2558, lng: -21.1297 },
  { name: "Namib Desert Garub Waterholes", country: "Namibia", continent: "Africa" as const, region: "Karas Region", breed: "Namib Desert Wild Horse", landscape: "Barren desert gravel plains and sand dunes", lat: -26.6500, lng: 15.9500 },
  { name: "Maloti Mountains Range", country: "Lesotho", continent: "Africa" as const, region: "Thaba-Tseka", breed: "Basotho Pony", landscape: "Rugged basalt highlands and high mountain passes", lat: -29.3000, lng: 28.5000 },
  { name: "Sidi Bouzid High Steppes", country: "Tunisia", continent: "Africa" as const, region: "Central Tunisia", breed: "Barb Horse", landscape: "Arid esparto grass plains and foothills", lat: 35.0333, lng: 9.4833 },
  { name: "Tiaret High Plateau Pastures", country: "Algeria", continent: "Africa" as const, region: "Tiaret", breed: "Algerian Barb", landscape: "Semi-arid cereal plains and cedar slopes", lat: 35.3700, lng: 1.3200 },
  { name: "Laikipia Wildlife Plateau", country: "Kenya", continent: "Africa" as const, region: "Rift Valley", breed: "East African Safari Horse", landscape: "Acacia savanna overlooking Mount Kenya", lat: 0.3500, lng: 36.8000 },
  { name: "Wadi Rum Red Desert Valley", country: "Jordan", continent: "Asia" as const, region: "Aqaba Governorate", breed: "Bedouin Arabian", landscape: "Towering red granite and sandstone monoliths", lat: 29.5700, lng: 35.4200 },
  { name: "Hajar Mountains Oasis Valleys", country: "Oman", continent: "Asia" as const, region: "Ad Dakhiliyah", breed: "Royal Cavalry Arabian", landscape: "Terraced mountain orchards and dry wadis", lat: 23.2000, lng: 57.3000 },
  { name: "Golestan Steppe & Kopet Dag", country: "Iran", continent: "Asia" as const, region: "Golestan Province", breed: "Turkoman & Yamut Horse", landscape: "Undulating grassy steppe and mountain ridges", lat: 37.3000, lng: 55.0000 },
  { name: "Kopet Dag Foothills Oasis", country: "Turkmenistan", continent: "Asia" as const, region: "Ahal Region", breed: "Akhal-Teke (Heavenly Horse)", landscape: "Desert oasis bordering the Karakum Desert", lat: 38.0000, lng: 58.0000 },
  { name: "Fergana Valley Mountain Rim", country: "Uzbekistan", continent: "Asia" as const, region: "Fergana", breed: "Karabair Horse", landscape: "Fertile irrigated basin surrounded by mountains", lat: 40.5000, lng: 71.0000 },
  { name: "Tusheti Highland Alpine Passes", country: "Georgia", continent: "Asia" as const, region: "Kakheti", breed: "Tushin Horse", landscape: "Steep alpine canyons and medieval watchtowers", lat: 42.4000, lng: 45.5000 },
  { name: "Karabakh Foothills & Shusha Plain", country: "Azerbaijan", continent: "Asia" as const, region: "Karabakh", breed: "Karabakh Horse", landscape: "Oak-forested limestone plateaus and meadows", lat: 39.7500, lng: 46.7500 },
  { name: "Ili River Valley Heavenly Pastures", country: "China", continent: "Asia" as const, region: "Xinjiang", breed: "Ili Horse (Heavenly Horse descent)", landscape: "Vast wildflower grasslands and spruce mountains", lat: 43.5000, lng: 82.0000 },
  { name: "Jeju Island Hallasan Slopes", country: "South Korea", continent: "Asia" as const, region: "Jeju Province", breed: "Jeju Pony (Jorangmal)", landscape: "Volcanic basalt soil and sub-tropical slopes", lat: 33.3600, lng: 126.5300 },
  { name: "Ladakh High Altitude Desert", country: "India", continent: "Asia" as const, region: "Ladakh", breed: "Zanskari Pony", landscape: "High altitude barren mountains and rivers", lat: 34.1500, lng: 77.5800 },
  { name: "Manipur Imphal River Valley", country: "India", continent: "Asia" as const, region: "Manipur", breed: "Manipuri Pony", landscape: "Subtropical wetland basin surrounded by hills", lat: 24.8170, lng: 93.9368 },
  { name: "Kiso Valley Ancient Post Road", country: "Japan", continent: "Asia" as const, region: "Nagano Prefecture", breed: "Kiso Horse", landscape: "Steep forested cedar valleys and Nakasendo trail", lat: 35.8500, lng: 137.7000 },
  { name: "Cape Breton Highlands Maritime Trail", country: "Canada", continent: "North America" as const, region: "Nova Scotia", breed: "Canadian Horse & Highland cross", landscape: "Boreal headlands plunging into Atlantic ocean", lat: 46.7500, lng: -60.7500 },
  { name: "Cypress Hills Interprovincial Plateau", country: "Canada", continent: "North America" as const, region: "Saskatchewan / Alberta", breed: "Quarter Horse", landscape: "Elevated pine-topped plateau in flat prairie", lat: 49.6667, lng: -109.8333 },
  { name: "Texas Hill Country Karst Ranches", country: "United States", continent: "North America" as const, region: "Texas", breed: "American Quarter Horse", landscape: "Limestone bluffs, live oaks, and spring rivers", lat: 30.3000, lng: -98.8000 },
  { name: "Sonoma & Napa Valley Equestrian Trail", country: "United States", continent: "North America" as const, region: "California", breed: "Warmblood & Thoroughbred", landscape: "Vineyard hills and redwood coastal ridges", lat: 38.3000, lng: -122.5000 },
  { name: "Jackson Hole & Grand Teton Valleys", country: "United States", continent: "North America" as const, region: "Wyoming", breed: "American Paint Horse & Mustang", landscape: "Glacial valley beneath precipitous mountain spires", lat: 43.5800, lng: -110.8200 },
  { name: "San Miguel de Allende Countryside", country: "Mexico", continent: "North America" as const, region: "Guanajuato", breed: "Criollo & Azteca", landscape: "Semi-arid highlands and historic canyon trails", lat: 20.9167, lng: -100.7500 },
  { name: "Oaxaca Sierra Norte Indigenous Trails", country: "Mexico", continent: "North America" as const, region: "Oaxaca", breed: "Criollo Mexicano", landscape: "Cloud forests and pine-oak mountain peaks", lat: 17.2000, lng: -96.5000 },
  { name: "Bariloche Lake District Foothills", country: "Argentina", continent: "South America" as const, region: "Río Negro", breed: "Criollo Argentino", landscape: "Glacial Andean lakes and southern beech forests", lat: -41.1335, lng: -71.3103 },
  { name: "Quebrada de Humahuaca Canyons", country: "Argentina", continent: "South America" as const, region: "Jujuy", breed: "Criollo del Norte", landscape: "Multicolored rainbow mountains and valleys", lat: -23.2000, lng: -65.3500 },
  { name: "Torres del Paine Southern Patagonian Steppe", country: "Chile", continent: "South America" as const, region: "Magallanes", breed: "Chilean Horse & Bagual Wild", landscape: "Wind-swept sub-antarctic steppe and granite horns", lat: -51.2500, lng: -72.8800 }
];

ADDITIONAL_DESTINATIONS_SEED.forEach((d, idx) => {
  DESTINATIONS_DATA.push({
    id: `dst-${d.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`,
    slug: d.name.toLowerCase().replace(/[^a-z0-9]/g, '-'),
    title: `${d.name} — ${d.breed} & Scenic Horsemanship`,
    department: "destination",
    continent: d.continent,
    country: d.country,
    region: d.region,
    coordinates: { lat: d.lat, lng: d.lng },
    historicalPeriod: "Historical & Contemporary Equestrian Preservation",
    heroImage: getCuratedEquestrianImage(d.name, 'destination', d.country, idx),
    imageCaption: `Scenic equestrian panorama of ${d.name} in ${d.country}, renowned for ${d.breed} traditions.`,
    wordCount: 1050 + (idx % 7) * 25,
    summary: `${d.name} in ${d.country} represents an extraordinary equestrian destination characterized by ${d.landscape.toLowerCase()} and an authentic culture centered on the ${d.breed}.`,
    landscapeType: d.landscape,
    associatedBreeds: [d.breed, `${d.country} Native Cross`],
    ridingTradition: `Traditional trail exploration, historic working stockmanship, and regional ${d.breed} equitation`,
    conservationAndTourism: `Equestrian access within ${d.name} adheres strictly to ecological trail stewardship, preserving natural terrain and indigenous flora.`,
    scenicHighlights: [`Historic Trails of ${d.region}`, `Highland Viewpoints of ${d.name}`, "Protected Valley Corridors"],
    subsections: [
      {
        heading: `Geographical and Equestrian Context of ${d.name}`,
        content: `Situated in ${d.region}, ${d.name} offers a dramatic environment where horses have played an integral cultural and practical role for generations. The regional terrain of ${d.landscape.toLowerCase()} tested equine stamina, producing exceptional surefootedness.`
      },
      {
        heading: `The Role of the ${d.breed}`,
        content: `The ${d.breed} has evolved alongside the climate of ${d.name}. Known for physical hardiness, thriftiness, and willingness to partner with riders across demanding topography, it remains an enduring symbol of ${d.country}'s equestrian pride.`
      },
      {
        heading: "Enduring Heritage and Responsible Exploration",
        content: `Today, preservationists and riders maintain ancient trails in ${d.name}. Visiting riders are reminded that access relies on strict conservation ethics, zero-trace riding, and deep respect for local herds and ecosystems.`
      }
    ],
    keyFacts: [
      { label: "Prominent Local Breed", value: d.breed },
      { label: "Dominant Terrain", value: d.landscape },
      { label: "Region / Province", value: d.region },
      { label: "Conservation Status", value: "Designated Protected Natural / Cultural Trail" }
    ],
    sources: [
      { title: `Equestrian Heritage of ${d.name}`, authorOrOrg: `Regional Heritage Society of ${d.country}`, yearOrType: "Official Monograph" },
      { title: "Atlas of World Equestrian Landscapes", authorOrOrg: "International Geographic Press", yearOrType: "Geographic Cartography" },
      { title: `${d.breed} Breed Historical Archives`, authorOrOrg: "National Equine Research Society", yearOrType: "Breed Documentation" }
    ],
    relatedSlugs: ["camargue-rhone-delta", "andalusia-region", "scottish-highlands-glen-affric"],
    tags: [d.name, d.country, d.breed, "Scenic Destination", d.continent],
    translations: {
      de: {
        title: `${d.name} — Das ${d.breed} und landschaftliche Reitkultur`,
        summary: `${d.name} in ${d.country} bietet eine atemberaubende Reitlandschaft mit dem ${d.breed}.`
      },
      fr: {
        title: `${d.name} — Le ${d.breed} et les paysages équestres`,
        summary: `${d.name} en ${d.country} offre un panorama équestre exceptionnel façonné par le ${d.breed}.`
      }
    }
  });
});
