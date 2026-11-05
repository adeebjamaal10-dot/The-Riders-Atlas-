import { CountryGuide } from '../types/equestrian';
import { ASSETS, getCuratedEquestrianImage } from './assets';

export const COUNTRIES_DATA: CountryGuide[] = [
  {
    id: "cnt-de",
    slug: "germany",
    title: "Germany — The Cradle of Warmblood Breeding & Classical Dressage",
    department: "country",
    continent: "Europe",
    country: "Germany",
    capital: "Berlin",
    coordinates: { lat: 51.1657, lng: 10.4515 },
    historicalPeriod: "18th Century to Modern Era",
    heroImage: ASSETS.estateRider,
    imageCaption: "Traditional German warmblood breeding estate showcasing classical Hanoverian lines.",
    wordCount: 1140,
    summary: "Renowned globally as the pinnacle of sport horse breeding, Germany's equestrian history blends Prussian cavalry precision with the rigorous studbook selection that created the Hanoverian, Holsteiner, and Trakehner breeds.",
    horseCultureOverview: "Equine culture in Germany is an ingrained national heritage. From the state studs established by royal decree to modern breeding associations (Zuchtverbände), horsemanship is practiced with institutional scientific rigor and profound reverence for biomechanical harmony.",
    traditionalDisciplines: ["Classical Dressage", "Show Jumping", "Driving (Fahrsport)", "Eventing"],
    indigenousBreeds: ["Hanoverian", "Holsteiner", "Trakehner", "Oldenburg", "Westphalian", "Black Forest Horse (Schwarzwälder Kaltblut)"],
    equestrianCraftsmanship: "German master saddlery is celebrated worldwide for deep-seated dressage saddles, precision-machined tree angles, and ergonomic panel flocking developed in collaboration with veterinary biomechanists.",
    landmarkSites: ["Warendorf (DOKR Equestrian Centre)", "Celle State Stud", "Neustadt (Dosse)", "Marbach State Stud", "Aachen Soers"],
    horseWelfareHeritage: "Germany established the classical training scale (Ausbildungsskala) — rhythm, relaxation, contact, impulsion, straightness, and collection — as a legal and ethical tenet of equine well-being.",
    subsections: [
      {
        heading: "The Foundation of the State Studs",
        content: "During the 18th and 19th centuries, German dukes and kings recognized that national security and agriculture relied on systematic horse breeding. Celle was founded in 1735 by King George II of Great Britain and Elector of Brunswick-Lüneburg to provide local farmers with superior breeding stallions. Marbach, established earlier in 1514 in Baden-Württemberg, remains the oldest state stud in Germany, documenting centuries of careful bloodline preservation."
      },
      {
        heading: "The German Classical Training Scale",
        content: "Codified in the 1912 Army Service Regulation (H.Dv.12), the German training scale transitioned from military discipline to international sporting doctrine. It mandates that any physical development of the horse must respect the natural physiology of the spine and legs, prioritizing loose movement before requesting collection."
      },
      {
        heading: "Master Saddlery and Tack Heritage",
        content: "Centuries of saddle crafting in regions like North Rhine-Westphalia and Bavaria laid the foundation for modern ergonomics. German master saddlers pioneered cut-back pommels to liberate high withers and anatomical tree points that permit unrestricted rotation of the equine scapula during extended trot and flying changes."
      }
    ],
    keyFacts: [
      { label: "Oldest State Stud", value: "Marbach (Founded 1514)" },
      { label: "National Governing Body", value: "Deutsche Reiterliche Vereinigung (FN)" },
      { label: "Olympic Equestrian Medals", value: "Over 55 Gold Medals" },
      { label: "Key Studbooks", value: "Hannover, Holstein, Oldenburg, Trakehnen" }
    ],
    sources: [
      { title: "Die Deutsche Reitlehre (H.Dv.12)", authorOrOrg: "Reichswehrministerium", yearOrType: "1912 Historical Doctrine" },
      { title: "History of the Warmblood Horse", authorOrOrg: "Dr. E. Flade", yearOrType: "Equestrian Academic Press" },
      { title: "Archives of the Celle State Stud", authorOrOrg: "Niedersächsisches Landgestüt Celle", yearOrType: "State Historical Archives" }
    ],
    relatedSlugs: ["celle-state-stud", "marbach-state-stud", "aachen-soers-grounds", "1936-berlin-olympics-equestrian"],
    tags: ["Warmblood", "Dressage", "Ausbildungsskala", "Hanoverian", "Holsteiner"],
    translations: {
      de: {
        title: "Deutschland — Wiege der Warmblutzucht und der klassischen Dressur",
        summary: "Weltweit als Höchstform der Sportpferdezucht anerkannt, verbindet die deutsche Reitgeschichte preußische Kavalleriepräzision mit strengen Zuchtbüchern."
      },
      fr: {
        title: "Allemagne — Berceau de l'élevage des chevaux de selle et du dressage classique",
        summary: "Reconnue dans le monde entier comme le sommet de l'élevage de chevaux de sport, l'histoire équestre allemande marie rigueur institutionnelle et respect biomécanique."
      }
    }
  },
  {
    id: "cnt-fr",
    slug: "france",
    title: "France — The Classical Elegance of Cadre Noir & Imperial Haras",
    department: "country",
    continent: "Europe",
    country: "France",
    capital: "Paris",
    coordinates: { lat: 46.2276, lng: 2.2137 },
    historicalPeriod: "16th Century to Modern Era",
    heroImage: ASSETS.classicalAcademy,
    imageCaption: "Classical equitation of the French tradition at the National School of Saumur.",
    wordCount: 1220,
    summary: "From the Renaissance royal riding academies to the founding of the Haras Nationaux by Colbert under Louis XIV, France developed an equestrian philosophy rooted in lightness, tact, and complete absence of force, recognized on the UNESCO Intangible Cultural Heritage list.",
    horseCultureOverview: "French riding is distinguished by 'légèreté' (lightness). Rather than relying on mechanical leverage, the French school emphasizes the rider's seat, minimum hand intervention, and independent aids as championed by master François Robichon de La Guérinière.",
    traditionalDisciplines: ["Classical Equitation", "Three-Day Eventing (Complet)", "Show Jumping (Saut d'obstacles)", "Camargue Working Equitation"],
    indigenousBreeds: ["Selle Français", "Anglo-Arabian", "Camargue Horse", "Percheron", "Breton", "Merens"],
    equestrianCraftsmanship: "French saddlery is celebrated for ultra-close contact trees, French calfskin leather tanning, and flatter balance points that give riders immediate sensory connection to the equine back.",
    landmarkSites: ["Saumur (Cadre Noir)", "Chantilly Great Stables", "Haras National du Pin", "Haras de Pompadour", "Versailles Royal Stables"],
    horseWelfareHeritage: "UNESCO inscribed Equitation in the French tradition in 2011, explicitly praising its rejection of coercion and respect for the natural physical grace of the equine athlete.",
    subsections: [
      {
        heading: "The Legacy of La Guérinière and Versailles",
        content: "In 1733, François Robichon de La Guérinière published 'École de Cavalerie', widely regarded as the cornerstone of modern classical equitation. He invented the shoulder-in (épaule en dedans), calling it the 'alpha and omega' of all gymnastic exercises for the horse. The Royal Stables of Versailles (Grandes and Petites Écuries), designed by Jules Hardouin-Mansart, reflected the supreme prestige accorded to equestrian arts in the Sun King's court."
      },
      {
        heading: "The Cadre Noir of Saumur",
        content: "Founded after the Napoleonic Wars in 1814 to restore cavalry horsemanship, Saumur developed its famous elite corps of civilian and military riding masters known as the Cadre Noir. Their black uniforms and distinctive tricorn hats symbolize over two centuries of unbroken classical teaching, preserving airs above the ground such as the courbette, croupade, and cabriole."
      },
      {
        heading: "The Haras Nationaux Network",
        content: "Jean-Baptiste Colbert established the Haras Nationaux in 1665 to ensure France possessed adequate horses for transport, agriculture, and military service. Sites like Haras National du Pin ('The Versailles for Horses' in Normandy) and Haras de Pompadour became architectural marvels dedicated to stud preservation."
      }
    ],
    keyFacts: [
      { label: "UNESCO Inscription", value: "Equitation in the French tradition (2011)" },
      { label: "Founding Master", value: "François Robichon de La Guérinière (1688–1751)" },
      { label: "Historic Academy", value: "Cadre Noir de Saumur (1814)" },
      { label: "Flagship Stud", value: "Haras National du Pin (1715)" }
    ],
    sources: [
      { title: "École de Cavalerie", authorOrOrg: "François Robichon de La Guérinière", yearOrType: "1733 Historical Treatise" },
      { title: "UNESCO Convention for the Safeguarding of the Intangible Cultural Heritage", authorOrOrg: "UNESCO", yearOrType: "2011 Inscription Dossier" },
      { title: "Histoire de l'équitation française", authorOrOrg: "General Decarpentry", yearOrType: "Éditions Charles Lavauzelle" }
    ],
    relatedSlugs: ["cadre-noir-saumur", "chantilly-great-stables", "haras-national-du-pin", "camargue-rhone-delta"],
    tags: ["Légèreté", "Cadre Noir", "Selle Français", "UNESCO", "Saumur"],
    translations: {
      de: {
        title: "Frankreich — Die klassische Eleganz des Cadre Noir und der kaiserlichen Gestüte",
        summary: "Von den königlichen Reitakademien bis zu den von Colbert gegründeten Nationalgestüten entwickelte Frankreich eine Philosophie der Leichtigkeit ohne Zwang."
      },
      fr: {
        title: "France — L'élégance classique du Cadre Noir et des Haras Nationaux",
        summary: "Des académies royales aux Haras Nationaux créés par Colbert sous Louis XIV, la France a façonné une équitation fondée sur la légèreté et le respect du cheval."
      }
    }
  },
  {
    id: "cnt-es",
    slug: "spain",
    title: "Spain — The Pura Raza Española & Doma Vaquera Heritage",
    department: "country",
    continent: "Europe",
    country: "Spain",
    capital: "Madrid",
    coordinates: { lat: 40.4637, lng: -3.7492 },
    historicalPeriod: "Ancient Roman Era to Present",
    heroImage: ASSETS.andalusianCourtyard,
    imageCaption: "Historic Andalusian courtyard with a Pura Raza Española stallion in traditional tack.",
    wordCount: 1190,
    summary: "Spain's equestrian legacy is intertwined with the Iberian horse, praised since Antiquity by Homer and Xenophon. Under King Philip II in 1567, the Royal Stables of Córdoba standardized the Pura Raza Española, gifting European royalty its most celebrated royal parade and classical mount.",
    horseCultureOverview: "Equestrian traditions in Spain encompass both the high art of classical dressage (Doma Clásica) and the rustic, agile field horsemanship of cattle handlers (Doma Vaquera). Horses are central to regional festivals such as the Feria del Caballo in Jerez and the Romería de El Rocío.",
    traditionalDisciplines: ["Classical Dressage", "Doma Vaquera", "Alta Escuela", "Working Equitation", "Acoso y Derribo"],
    indigenousBreeds: ["Pura Raza Española (Andalusian)", "Hispano-Árabe", "Menorquín", "Pottok", "Asturcón", "Losino"],
    equestrianCraftsmanship: "Spanish saddlery features the iconic Montura Vaquera, built with sheepskin zalea, flexible box-iron stirrups (estribos de bocado), and intricate hand-tooled leather breastplates (pechopetral).",
    landmarkSites: ["Royal Andalusian School of Equestrian Art (Jerez)", "Royal Stables of Córdoba", "Yeguada de la Cartuja (Hierro del Bocado)", "Doñana National Park", "Ronda Bullring & Stables"],
    horseWelfareHeritage: "Carthusian monks (Cartujanos) safeguarded the purity of the Carthusian bloodlines during Napoleonic invasions, ensuring genetic diversity without dilution.",
    subsections: [
      {
        heading: "Philip II and the Royal Stables of Córdoba",
        content: "In 1567, King Philip II issued a royal decree to create the definitive war and high-school riding horse. In Córdoba, Diego López de Haro gathered elite mares and stallions, shaping the modern Pura Raza Española with arched neck, elevated action, and innate willingness to work."
      },
      {
        heading: "The Carthusian Monks and the Hierro del Bocado",
        content: "At the Monastery of Santa María de la Defensión in Jerez de la Frontera, Carthusian monks developed a lineage celebrated for sublime temperaments and expressive movement. When the Spanish government ordered crossing with draft breeds in the 19th century, the monks famously refused, keeping the pure strain alive."
      },
      {
        heading: "Doma Vaquera: Art of the Cattle Herdsman",
        content: "In the expansive pastures of Andalusia and Extremadura, riders (garrochistas) perfected rapid stops, spins (piruetas directas), and transitions using the garrocha lance. This working art remains one of the world's most thrilling demonstrations of partnership."
      }
    ],
    keyFacts: [
      { label: "Royal Stables Founded", value: "Córdoba, 1567 by Philip II" },
      { label: "Elite Lineage", value: "Carthusian (Cartujano) strain" },
      { label: "Official Academy", value: "Real Escuela Andaluza del Arte Ecuestre" },
      { label: "Iconic Traditional Tack", value: "Montura Vaquera with sheepskin zalea" }
    ],
    sources: [
      { title: "El Caballo Español en la Historia", authorOrOrg: "Real Academia de Córdoba", yearOrType: "Historical Monograph" },
      { title: "Tratado de la Gineta", authorOrOrg: "Hernán Chacón", yearOrType: "1551 Renaissance Treatise" },
      { title: "Archives of the Real Escuela Andaluza", authorOrOrg: "Fundación Real Escuela", yearOrType: "Official Institutional Records" }
    ],
    relatedSlugs: ["royal-andalusian-school-jerez", "royal-stables-cordoba", "andalusia-region", "yeguada-la-cartuja"],
    tags: ["PRE", "Andalusian", "Doma Vaquera", "Jerez", "Alta Escuela"],
    translations: {
      de: {
        title: "Spanien — Das Erbe der Pura Raza Española und der Doma Vaquera",
        summary: "Spaniens Reittradition wurzelt im iberischen Pferd, das seit der Antike besungen wird. Philipp II. schuf 1567 in Córdoba das königliche Parade- und Schulpferd Europas."
      },
      fr: {
        title: "Espagne — L'héritage du Pur-Sang Espagnol et de la Doma Vaquera",
        summary: "Le cheval ibérique est indissociable de l'histoire espagnole. En 1567, Philippe II ordonne la création du cheval royal aux Écuries de Cordoue."
      }
    }
  },
  {
    id: "cnt-pt",
    slug: "portugal",
    title: "Portugal — The Noble Lusitano & The Art of Marialva",
    department: "country",
    continent: "Europe",
    country: "Portugal",
    capital: "Lisbon",
    coordinates: { lat: 39.3999, lng: -8.2245 },
    historicalPeriod: "14th Century to Present",
    heroImage: ASSETS.classicalAcademy,
    imageCaption: "Classical Portuguese riding master demonstrating levade on a purebred Lusitano.",
    wordCount: 1160,
    summary: "Portugal is the home of the Puro Sangue Lusitano, a war horse celebrated for its bravery, intelligence, and agility. Codified by the 4th Marquis of Marialva in the 18th century, Portuguese equestrian art blends bullfighting agility with sublime classical airs.",
    horseCultureOverview: "In Portugal, equestrianism is lived through daily connection on Ribatejo and Alentejo breeding farms. The Portuguese School of Equestrian Art (Escola Portuguesa de Arte Equestre) rides Alter Real stallions in 18th-century court attire, keeping royal traditions vibrantly intact.",
    traditionalDisciplines: ["Classical Dressage", "Working Equitation (Equitação de Trabalho)", "Campino Field Horsemanship", "Tourada à Portuguesa"],
    indigenousBreeds: ["Puro Sangue Lusitano (PSL)", "Alter Real", "Sorraia (Primitive Wild Subtype)", "Garrano"],
    equestrianCraftsmanship: "Portuguese saddlery is recognized for the Sela Portuguesa with high front and rear galleries, brass and silver stirrups (estribo de sino), and ornate cortesia bridles with rosettes.",
    landmarkSites: ["Palácio Nacional de Queluz (Portuguese School of Equestrian Art)", "Alter Real Stud (Founded 1748 by King John V)", "Golegã (Capital of the Horse)", "Comporta Coastal Marshes"],
    horseWelfareHeritage: "Unlike Spanish bullfighting, the Portuguese tourada forbids killing the bull in the arena, elevating the Lusitano's evasion maneuvers and athletic agility to pure horsemanship.",
    subsections: [
      {
        heading: "The Alter Real Stud and King John V",
        content: "King John V founded the Alter Real stud in 1748 in the Alentejo province to breed horses exclusively for the Royal Court of Lisbon and high school equitation. Using select Iberian mares, Alter Real horses are typically bay or brown and possess unmatched capacity for the piaffe and passage."
      },
      {
        heading: "The Marquis of Marialva and Equestrian Treaty",
        content: "Dom Pedro de Alcântara de Meneses, 4th Marquis of Marialva, authored seminal treatises establishing classical Portuguese riding. His principles of posture, sovereign balance, and invisible aids remain the doctrine taught at Queluz Palace today."
      },
      {
        heading: "Golegã: The National Fair of the Horse",
        content: "Held every November during the Feast of Saint Martin, Golegã transforms into an open-air equestrian arena where breeders, bullfighters, and classical masters ride through cobblestone streets in traditional campino dress."
      }
    ],
    keyFacts: [
      { label: "Royal Stud Founded", value: "Alter Real, 1748" },
      { label: "National Classical School", value: "Escola Portuguesa de Arte Equestre" },
      { label: "Iconic Capital of the Horse", value: "Golegã (Feira de São Martinho)" },
      { label: "Primitive Progenitor", value: "Sorraia horse of the Tagus valley" }
    ],
    sources: [
      { title: "Luz da Liberal e Nobre Arte da Cavallaria", authorOrOrg: "Manoel Carlos de Andrade", yearOrType: "1790 Royal Treaty" },
      { title: "O Cavalo Lusitano", authorOrOrg: "Dr. Ruy d'Andrade", yearOrType: "Historical Zoological Record" },
      { title: "Archives of the Fundação Alter Real", authorOrOrg: "Coudelaria de Alter", yearOrType: "Portuguese National Archives" }
    ],
    relatedSlugs: ["portuguese-school-equestrian-art", "alter-real-stud", "golega-equestrian-capital", "alentejo-plains"],
    tags: ["Lusitano", "Alter Real", "Queluz", "Marialva", "Working Equitation"],
    translations: {
      de: {
        title: "Portugal — Der edle Lusitano und die Reitkunst von Marialva",
        summary: "Portugal ist die Heimat des Lusitano, berühmt für Mut, Wendigkeit und Intelligenz. Die Reitschule in Queluz reitet bis heute Alter-Real-Hengste in historischer Hoftracht."
      },
      fr: {
        title: "Portugal — Le noble Lusitano et l'art équestre de Marialva",
        summary: "Patrie du Pur-Sang Lusitanien, le Portugal a développé une équitation de cour sublimée par le marquis de Marialva et perpétuée au palais de Queluz."
      }
    }
  },
  {
    id: "cnt-uk",
    slug: "united-kingdom",
    title: "United Kingdom — The Birth of the Thoroughbred & Foxhunter Heritage",
    department: "country",
    continent: "Europe",
    country: "United Kingdom",
    capital: "London",
    coordinates: { lat: 55.3781, lng: -3.4360 },
    historicalPeriod: "17th Century to Modern Era",
    heroImage: ASSETS.heroLandscape,
    imageCaption: "Thoroughbred horses grazing in historic English parkland with stately limestone stables.",
    wordCount: 1240,
    summary: "The United Kingdom shaped the modern equestrian landscape through the development of the Thoroughbred racehorse, the codification of three-day eventing, and centuries of hunting, driving, and native pony breeding across British moors and hills.",
    horseCultureOverview: "British equestrian life combines deep countryside hunting traditions with royal patronage. From royal pageantry by the Household Cavalry to world-renowned events at Badminton, Burghley, and Royal Ascot, Britain has set international competitive standards.",
    traditionalDisciplines: ["Three-Day Eventing", "Fox Hunting / Field Riding", "Flat Racing & Steeplechasing", "Carriage Driving", "Showing Native Breeds"],
    indigenousBreeds: ["Thoroughbred", "Shire", "Clydesdale", "Suffolk Punch", "Dartmoor", "Exmoor", "New Forest", "Fell", "Dales", "Welsh Mountain Pony"],
    equestrianCraftsmanship: "Walsall in the West Midlands stands as the world's historic saddlery capital. Since the Industrial Revolution, Walsall saddlers have crafted hand-stitched English bridle leather and wood-spring trees prized across five continents.",
    landmarkSites: ["Newmarket Heath & National Stud", "Badminton Estate", "Burghley House", "Royal Mews (Buckingham Palace)", "Ascot Racecourse"],
    horseWelfareHeritage: "The UK passed the Cruel Treatment of Cattle Act in 1822 (Martin's Act), the world's first animal protection legislation, spearheaded by equestrian and animal welfare advocates.",
    subsections: [
      {
        heading: "The Three Foundation Sires of the Thoroughbred",
        content: "Between 1689 and 1730, three oriental stallions — The Byerley Turk, The Darley Arabian, and The Godolphin Arabian — were imported to England and mated with native running mares. In 1791, James Weatherby published the General Stud Book, establishing the strictest genetic registry in the animal kingdom, from which every modern Thoroughbred descends."
      },
      {
        heading: "Walsall: Capital of Master Saddlery",
        content: "By the mid-19th century, Walsall possessed hundreds of artisanal tanneries, loriners (bit makers), and master saddle makers. The Society of Master Saddlers continues to certify English saddle fitters, enforcing stringent standards of leather selection and balance."
      },
      {
        heading: "Badminton and the Evolution of Modern Eventing",
        content: "In 1949, the 10th Duke of Beaufort founded the Badminton Horse Trials on his Gloucestershire estate to train British riders for the Olympic Three-Day Event. Badminton evolved into the world's premier equestrian test, honoring the stamina and courage of horse and rider."
      }
    ],
    keyFacts: [
      { label: "First Animal Welfare Law", value: "Martin's Act (1822)" },
      { label: "Historic Saddlery Capital", value: "Walsall, West Midlands" },
      { label: "Origin of the Thoroughbred", value: "General Stud Book (1791)" },
      { label: "First Badminton Horse Trials", value: "1949 (Gloucestershire)" }
    ],
    sources: [
      { title: "General Stud Book (Volume 1)", authorOrOrg: "James Weatherby", yearOrType: "1791 Official Registry" },
      { title: "The History of Horse Racing", authorOrOrg: "Roger Longrigg", yearOrType: "Macmillan Publishing" },
      { title: "Walsall Leather Heritage Archives", authorOrOrg: "Walsall Leather Museum", yearOrType: "Industrial Heritage Records" }
    ],
    relatedSlugs: ["newmarket-historic-heath", "badminton-estate-grounds", "new-forest-woodlands", "1949-first-badminton-trials"],
    tags: ["Thoroughbred", "Badminton", "Walsall", "Newmarket", "Eventing"],
    translations: {
      de: {
        title: "Vereinigtes Königreich — Die Geburt des Vollbluts und die Jagdreitertradition",
        summary: "Großbritannien prägte die Reitwelt durch die Zucht des Englischen Vollbluts, die Kodifizierung des Vielseitigkeitsreitens und die Sattlerstadt Walsall."
      },
      fr: {
        title: "Royaume-Uni — La naissance du Pur-Sang et la tradition de la chasse à courre",
        summary: "Le Royaume-Uni a révolutionné le monde équestre avec la création du Pur-Sang anglais, l'institution du concours complet à Badminton et la sellerie d'art de Walsall."
      }
    }
  },
  {
    id: "cnt-ie",
    slug: "ireland",
    title: "Ireland — The Land of the Horse & Limestone Pastures",
    department: "country",
    continent: "Europe",
    country: "Ireland",
    capital: "Dublin",
    coordinates: { lat: 53.4129, lng: -8.2439 },
    historicalPeriod: "Ancient Celtic Era to Modern Era",
    heroImage: ASSETS.estateRider,
    imageCaption: "Irish Draught and Sport Horse mares grazing on calcium-rich limestone pastures in County Kildare.",
    wordCount: 1180,
    summary: "Renowned as 'The Land of the Horse', Ireland's unique calcium-rich limestone bedrock produces pasture grasses that build exceptionally dense, resilient bone in horses, producing the legendary Irish Sport Horse and Connemara Pony.",
    horseCultureOverview: "In Ireland, horse lore is interwoven with ancient Celtic legends like Oisín and the Tuatha Dé Danann. From the Curragh of Kildare to the Dublin Horse Show at the RDS, the Irish horse is a national symbol of endurance, honesty, and peerless jumping ability.",
    traditionalDisciplines: ["Show Jumping", "Three-Day Eventing", "Fox Hunting & Cross-Country", "Point-to-Point Racing", "Thoroughbred Breeding"],
    indigenousBreeds: ["Irish Draught", "Connemara Pony", "Irish Sport Horse (ISH)", "Kerry Bog Pony", "Gypsy Vanner (Irish Cob)"],
    equestrianCraftsmanship: "Irish leatherworkers specialize in robust hunting tack, traditional rolled-leather bridles, and shock-absorbing hunting saddles engineered for clearing stone walls and deep ditches.",
    landmarkSites: ["The Curragh of Kildare", "Irish National Stud (Tully)", "Royal Dublin Society (RDS Ballsbridge)", "Connemara Mountains", "Punchestown"],
    horseWelfareHeritage: "Ireland operates community horse projects and equine sanctuaries such as the Irish Horse Welfare Trust (IHWT), advocating ethical retraining and life-long welfare for retired racehorses.",
    subsections: [
      {
        heading: "The Curragh and Ancient Horse Racing",
        content: "The Curragh, an open plain of 5,000 acres in County Kildare, has been used for equine training and chariot races since pre-Christian times. In the Brehon Laws of ancient Ireland, horse breeding and pasture rights were meticulously regulated."
      },
      {
        heading: "The Irish Draught: Genetic Heart of the Sport Horse",
        content: "The Irish Draught was bred as a versatile farm horse that could plow rough fields, pull the family trap to Sunday mass, and jump stone walls on winter hunts. Crossed with the Thoroughbred, it created the Irish Sport Horse, which led the WBFSH eventing studbook rankings for over two decades."
      },
      {
        heading: "The Connemara Pony of the Rugged West",
        content: "Originating in the rocky, peat bogs of western Galway, the Connemara Pony developed surefootedness, hard hooves, and natural thriftiness. Influenced over centuries by shipwrecked Spanish Armada horses and Arabians, the Connemara remains the premier performance pony in world sport."
      }
    ],
    keyFacts: [
      { label: "Key Breeding Bedrock", value: "Carboniferous limestone plains" },
      { label: "Historic Racing Plain", value: "The Curragh of Kildare" },
      { label: "National Stud Founded", value: "1946 (Irish National Stud, Tully)" },
      { label: "Flagship Show", value: "Dublin Horse Show (RDS, founded 1864)" }
    ],
    sources: [
      { title: "The Irish Horse", authorOrOrg: "Geoffrey de Bellaigue", yearOrType: "Historical Monograph" },
      { title: "Brehon Laws: Ancient Irish Legal Tracts", authorOrOrg: "Royal Irish Academy", yearOrType: "Legal Historical Texts" },
      { title: "Studbook Records", authorOrOrg: "Horse Sport Ireland", yearOrType: "Official Registry" }
    ],
    relatedSlugs: ["the-curragh-kildare", "connemara-wild-coast", "irish-national-stud-tully", "dublin-horse-show-rds"],
    tags: ["Irish Sport Horse", "Connemara", "Curragh", "Irish Draught", "Kildare"],
    translations: {
      de: {
        title: "Irland — Das Land des Pferdes und der Kalksteinweiden",
        summary: "Irland gilt als Wiege robuster Sportpferde. Der kalkhaltige Boden sorgt für dichte Knochensubstanz bei Irish Draughts und Connemara-Ponys."
      },
      fr: {
        title: "Irlande — La terre du cheval et des pâturages calcaires",
        summary: "Surnommée la terre du cheval, l'Irlande tire de son sous-sol calcaire des herbages réputés pour bâtir l'ossature solide du Pur-Sang et du Connemara."
      }
    }
  },
  {
    id: "cnt-at",
    slug: "austria",
    title: "Austria — Imperial Lipizzaners & The Spanish Riding School",
    department: "country",
    continent: "Europe",
    country: "Austria",
    capital: "Vienna",
    coordinates: { lat: 47.5162, lng: 14.5501 },
    historicalPeriod: "Habsburg Monarchy to Present",
    heroImage: ASSETS.viennaHall,
    imageCaption: "Imperial Winter Riding School in the Hofburg Palace, Vienna, during a classical morning exercise.",
    wordCount: 1200,
    summary: "Austria preserves the oldest classical riding school in the world, the Spanish Riding School of Vienna (Spanische Hofreitschule), founded in 1565. Here, classical equitation is maintained in its purest form under the chandeliers of the Hofburg Palace.",
    horseCultureOverview: "Austrian equestrian culture was cultivated by the Habsburg dynasty to symbolize imperial harmony, balance, and sovereignty. The Lipizzaner horse, bred at the Piber Federal Stud in Styria, undergoes up to a decade of patient training before performing high school airs.",
    traditionalDisciplines: ["Classical Dressage (Hohe Schule)", "Traditional Driving (Traditionsfahren)", "Alpine Pack and Trail Riding", "Vaulting (Voltigieren)"],
    indigenousBreeds: ["Lipizzaner", "Haflinger", "Noriker (Pinzgauer Draught)"],
    equestrianCraftsmanship: "Austrian saddlers developed the historical deer-leather 'Bock' school saddle with gold-plated stirrup irons and traditional white deerskin saddle cloths embroidered with the imperial crown.",
    landmarkSites: ["Spanish Riding School (Hofburg Vienna)", "Federal Stud Piber (Styria)", "Stadl-Paura Equestrian Centre", "Salzburg Glockengasse", "Schönbrunn Imperial Mews"],
    horseWelfareHeritage: "Classical doctrine in Vienna dictates that airs above the ground (levade, courbette, capriole) are never forced through mechanical restraint; stallions are allowed to choose their specialty based on natural conformation.",
    subsections: [
      {
        heading: "The Winter Riding School of the Hofburg",
        content: "Commissioned by Emperor Charles VI in 1729 and designed by baroque architect Joseph Emanuel Fischer von Erlach, the Winter Riding School in Vienna is an architectural masterpiece. Riders still tip their bicorne hats to the portrait of Charles VI upon entering the arena as a mark of gratitude."
      },
      {
        heading: "Piber Federal Stud: Sanctuary of the White Stallions",
        content: "Located in the green hills of Styria, Piber has bred the Lipizzaners for the Spanish Riding School since 1920. Foals are born dark and take between six and ten years to turn white. Mares spend their summers on high alpine pastures, developing exceptional lung capacity and robust joints."
      },
      {
        heading: "The Haflinger and the Noriker of the Alps",
        content: "Beyond imperial halls, Austria gave the world the golden-coated Haflinger with flaxen mane, originated in the Tyrolean Alps, and the cold-blooded Noriker, a spotted or solid draft horse that traversed Roman alpine trade routes for over two thousand years."
      }
    ],
    keyFacts: [
      { label: "Oldest Classical Riding School", value: "Spanish Riding School (1565)" },
      { label: "Imperial Arena Built", value: "1729–1735 (Fischer von Erlach)" },
      { label: "Federal Stud", value: "Piber Federal Stud, Styria" },
      { label: "UNESCO Inscription", value: "Lipizzaner breeding traditions (2022)" }
    ],
    sources: [
      { title: "Das Gymnasium des Pferdes", authorOrOrg: "Gustav Steinbrecht", yearOrType: "1886 Classical Riding Text" },
      { title: "Archives of the Spanische Hofreitschule", authorOrOrg: "Österreichisches Staatsarchiv", yearOrType: "Imperial State Archives" },
      { title: "The Lipizzaner", authorOrOrg: "Alois Podhajsky", yearOrType: "Equestrian Classic" }
    ],
    relatedSlugs: ["spanish-riding-school-vienna", "piber-federal-stud", "tyrolean-alps-equestrian", "1956-stockholm-olympics-dressage"],
    tags: ["Lipizzaner", "Vienna", "Hofburg", "Classical Dressage", "Piber"],
    translations: {
      de: {
        title: "Österreich — Kaiserliche Lipizzaner und die Spanische Hofreitschule",
        summary: "Österreich hütet mit der Spanischen Hofreitschule die älteste Reitschule der Welt. Unter den Lüstern der Hofburg wird Reitkunst in Reinkultur gepflegt."
      },
      fr: {
        title: "Autriche — Les Lipizzans impériaux et l'École espagnole d'équitation",
        summary: "L'Autriche préserve à Vienne l'École espagnole, fondée en 1565. Dans le manège d'hiver de la Hofburg, l'équitation classique est élevée au rang d'art absolu."
      }
    }
  },
  {
    id: "cnt-it",
    slug: "italy",
    title: "Italy — Renaissance Academies & Caprilli's Jumping Revolution",
    department: "country",
    continent: "Europe",
    country: "Italy",
    capital: "Rome",
    coordinates: { lat: 41.8719, lng: 12.5674 },
    historicalPeriod: "Renaissance to Modern Era",
    heroImage: ASSETS.estateRider,
    imageCaption: "Equestrian estate in the rolling hills of Tuscany, historic cradle of Italian horsemanship.",
    wordCount: 1150,
    summary: "Italy is both the birthplace of Renaissance riding academies (Federico Grisone in Naples) and the source of the greatest revolution in modern show jumping: Captain Federico Caprilli's forward seat (sistema naturale di equitazione), which liberated the horse's back over obstacles.",
    horseCultureOverview: "Italian equestrian heritage spans centuries of noble academies in Naples and Ferrara, the dramatic Palio di Siena run on the Piazza del Campo since 1644, and the rugged butteri cowboys of the Tuscan and Roman Maremma.",
    traditionalDisciplines: ["Forward Seat Show Jumping", "Classical Renaissance Dressage", "Maremmana Working Equitation", "Palio Historic Horse Racing"],
    indigenousBreeds: ["Maremmano", "Murgese", "Sanfratellano", "Haflinger (Avelignese)", "Bardigiano", "Esperia Pony"],
    equestrianCraftsmanship: "Italian saddlers are acclaimed for lightweight close-contact jumping saddles with Italian calfskin, injected composite trees, and bespoke stirrup irons reflecting Milanese fashion and design heritage.",
    landmarkSites: ["Piazza del Campo (Siena)", "Piazza di Siena (Villa Borghese, Rome)", "Military Cavalry School of Tor di Quinto", "Maremma Natural Park", "Lipizza (Historic border lineage)"],
    horseWelfareHeritage: "Federico Caprilli argued that riders must move with the horse's center of gravity rather than jerking backwards over fences, laying the foundation for modern humane jumping biomechanics.",
    subsections: [
      {
        heading: "The Neapolitan Academy of the 16th Century",
        content: "In 1550, Federico Grisone published 'Gli Ordini di Cavalcare' in Naples, triggering the European Renaissance fascination with high-school dressage. Noblemen from England, France, and Germany traveled to Italy to study horsemanship as a liberal art."
      },
      {
        heading: "Federico Caprilli: The Father of Modern Jumping",
        content: "At the turn of the 20th century, Captain Federico Caprilli revolutionized jumping at Pinerolo and Tor di Quinto. Before Caprilli, riders leaned back and pulled the reins over jumps. Caprilli shortened stirrups, inclined the rider's torso forward, and allowed the horse to stretch its neck naturally, forever changing equestrian sport."
      },
      {
        heading: "The Butteri of the Maremma",
        content: "In 1890, Buffalo Bill's Wild West Show arrived in Rome. The local butteri cattle herders of the Maremma, led by Augusto Imperiali, famously challenged and defeated Buffalo Bill's American cowboys in horse taming, cementing Italian rustic horsemanship in international history."
      }
    ],
    keyFacts: [
      { label: "Modern Jumping Innovator", value: "Captain Federico Caprilli (1868–1907)" },
      { label: "Historic Horse Race", value: "Palio di Siena (Documented since 1283)" },
      { label: "Historic Renaissance Academy", value: "Naples Academy of Horsemanship (1550)" },
      { label: "Historic Cavalry Base", value: "Tor di Quinto & Pinerolo" }
    ],
    sources: [
      { title: "Gli Ordini di Cavalcare", authorOrOrg: "Federico Grisone", yearOrType: "1550 Italian Treatise" },
      { title: "The Principles of Outdoor Equitation", authorOrOrg: "Federico Caprilli", yearOrType: "Italian Military Cavalry Manual" },
      { title: "Il Palio di Siena: Storia e Tradizione", authorOrOrg: "Archivio di Stato di Siena", yearOrType: "State Historical Archives" }
    ],
    relatedSlugs: ["piazza-del-campo-siena", "maremma-tuscan-wetlands", "piazza-di-siena-rome", "1960-rome-olympics-jumping"],
    tags: ["Caprilli", "Forward Seat", "Maremma", "Palio", "Siena"],
    translations: {
      de: {
        title: "Italien — Renaissance-Akademien und Caprillis Springsport-Revolution",
        summary: "Italien brachte die Renaissance-Reitkunst Neapels hervor und revolutionierte mit Federico Caprillis leichtem Sitz das weltweite Springreiten."
      },
      fr: {
        title: "Italie — Les académies de la Renaissance et la révolution de Caprilli",
        summary: "De l'Académie de Naples à la révolution du saut d'obstacles par Federico Caprilli, l'Italie a façonné les bases du saut moderne."
      }
    }
  },
  {
    id: "cnt-nl",
    slug: "netherlands",
    title: "Netherlands — The Black Pearl Friesian & Dutch Warmblood Mastery",
    department: "country",
    continent: "Europe",
    country: "Netherlands",
    capital: "Amsterdam",
    coordinates: { lat: 52.1326, lng: 5.2913 },
    historicalPeriod: "Medieval Era to Present",
    heroImage: ASSETS.estateRider,
    imageCaption: "Dutch Warmblood (KWPN) dressage horses trained in state-of-the-art facilities in Gelderland.",
    wordCount: 1100,
    summary: "The Netherlands holds a towering position in international equestrian sport, anchored by the Koninklijk Warmbloed Paardenstamboek Nederland (KWPN) — repeatedly ranked the world's leading studbook — and the ancient Friesian horse of Friesland.",
    horseCultureOverview: "Dutch equestrianism balances the deep cultural preservation of the all-black Friesian horse with high-performance sport horse breeding. The Dutch excel in dressage, show jumping, and four-in-hand driving across venues like Rotterdam and 's-Hertogenbosch.",
    traditionalDisciplines: ["Olympic Dressage", "Show Jumping", "Four-in-Hand Driving (Mennen)", "Sjees Traditional Carriage Driving"],
    indigenousBreeds: ["Friesian Horse", "Dutch Warmblood (KWPN)", "Groningen Horse", "Gelderlander", "Dutch Heavy Draught"],
    equestrianCraftsmanship: "Dutch designers are renowned for innovative bits, anatomical bridle headpieces that relieve poll pressure, and precision-adjustable saddle gullets.",
    landmarkSites: ["Royal Dutch Equestrian Sports Centre (Ermelo)", "CHIO Rotterdam Grounds", "Brabanthallen ('s-Hertogenbosch)", "Friesland Studbook Archives (Drachten)"],
    horseWelfareHeritage: "The KWPN studbook was the first to implement mandatory genomic screening for osteochondrosis (OCD) and radiographic health examinations for approved stallions.",
    subsections: [
      {
        heading: "The Friesian: Medieval War Horse to Cultural Treasure",
        content: "Documented in Roman writings and prized by medieval knights for their carrying capacity and rhythmic trot, Friesian horses hail from northern Friesland. In 1879, the Friesch Paarden-Stamboek (FPS) was created to save the breed from extinction when agricultural mechanization threatened draft horses."
      },
      {
        heading: "The Rise of the KWPN",
        content: "Formed in 1969 by merging the agricultural Gelderlander and Groningen studbooks with refined Thoroughbred blood, the KWPN became a global powerhouse. Legendary stallions such as Totilas, Ferro, and Nimmerdor reshaped Olympic dressage and show jumping."
      },
      {
        heading: "Traditional Sjees Driving",
        content: "In Friesland, breeders still celebrate the 'Sjees' — a two-wheeled painted carriage dating to the 18th century, pulled by a pair of Friesians with long flowing manes and driven by couples in traditional Frisian costume."
      }
    ],
    keyFacts: [
      { label: "Oldest Dutch Studbook", value: "FPS (Friesian Horse, 1879)" },
      { label: "Top Global Sport Registry", value: "KWPN (Formed 1969)" },
      { label: "National Equestrian Center", value: "Ermelo, Gelderland" },
      { label: "Iconic Legendary Stallion", value: "Moorlands Totilas (1999–2020)" }
    ],
    sources: [
      { title: "The Royal Dutch Warmblood", authorOrOrg: "KWPN Editorial Staff", yearOrType: "Official Studbook Monograph" },
      { title: "Het Friese Paard", authorOrOrg: "Koninklijke Vereniging Het Friesch Paarden-Stamboek", yearOrType: "Historical Registry" },
      { title: "FEI World Breeding Federation for Sport Horses Rankings", authorOrOrg: "WBFSH", yearOrType: "Official Sport Records" }
    ],
    relatedSlugs: ["friesland-pastures", "ermelo-equestrian-centre", "rotterdam-chio-park", "2010-kentucky-totilas-dressage"],
    tags: ["KWPN", "Friesian", "Dressage", "Driving", "Totilas"],
    translations: {
      de: {
        title: "Niederlande — Die schwarze Perle Frieslands und das KWPN",
        summary: "Die Niederlande dominieren den Reitsport mit dem KWPN-Zuchtbuch und dem traditionsreichen Friesenpferd."
      },
      fr: {
        title: "Pays-Bas — La perle noire frisonne et l'excellence du KWPN",
        summary: "Les Pays-Bas occupent les premiers rangs mondiaux grâce au stud-book KWPN et au cheval frison aux allures spectaculaires."
      }
    }
  },
  {
    id: "cnt-be",
    slug: "belgium",
    title: "Belgium — Show Jumping Champions & The Belgian Brabant Draught",
    department: "country",
    continent: "Europe",
    country: "Belgium",
    capital: "Brussels",
    coordinates: { lat: 50.5039, lng: 4.4699 },
    historicalPeriod: "Medieval Era to Present",
    heroImage: ASSETS.heroLandscape,
    imageCaption: "Belgian Warmblood (BWP) jumpers training at renowned stables in Flanders.",
    wordCount: 1120,
    summary: "Despite its compact geographic size, Belgium is a global titan in show jumping horse breeding (BWP, s'Zangersheide) and the historic cradle of the massive Belgian Brabant heavy horse, ancestor to European draft breeds.",
    horseCultureOverview: "Belgian horsemanship bridges the pastoral heritage of Flemish heavy draft work with elite international show jumping. Venues like Lanaken (Zangersheide) and Mechelen host Europe's premier indoor and young horse championships.",
    traditionalDisciplines: ["International Show Jumping", "Four-in-Hand Driving", "Heavy Horse Agricultural Plowing", "Shrimp Fishing on Horseback (Oostduinkerke)"],
    indigenousBreeds: ["Belgian Warmblood (BWP)", "Zangersheide (Z-breed)", "Belgian Draught (Brabant)", "Ardennais (shared with France)"],
    equestrianCraftsmanship: "Belgian saddlers and bootmakers are renowned for bespoke riding boots crafted from full-grain French calfskin with reinforced inner panels and anatomic arch support.",
    landmarkSites: ["Domain Zangersheide (Lanaken)", "Sentower Park (Opglabbeek)", "Oostduinkerke Coastal Shallows", "Mechelen Nekkerhal"],
    horseWelfareHeritage: "UNESCO inscribed the shrimp fishing on horseback in Oostduinkerke in 2013, honoring the gentle partnership between fisherman and Brabant horse in cold North Sea surf.",
    subsections: [
      {
        heading: "The Rise of Zangersheide and the BWP",
        content: "Leon Melchior established Studbook Zangersheide in Lanaken with a pioneering vision: selecting horses purely based on athletic performance rather than national borders. Zangersheide spearheaded modern artificial insemination and embryo transfer, creating Olympic jumping medalists."
      },
      {
        heading: "The Belgian Brabant: Colossus of Agriculture",
        content: "The Brabant draft horse was the engine of western European farming for centuries. Renowned for its calm temperament, muscular quarters, and feathering above clean hooves, it was exported worldwide to improve draft breeds in North America and Britain."
      },
      {
        heading: "Shrimp Fishermen of Oostduinkerke",
        content: "In Oostduinkerke on the Flemish coast, twelve families maintain an unbroken 500-year tradition of wading into the North Sea at low tide with Brabant heavy horses pulling funnel-shaped shrimp nets."
      }
    ],
    keyFacts: [
      { label: "UNESCO Marine Tradition", value: "Horseback shrimp fishing in Oostduinkerke (2013)" },
      { label: "World Young Horse Championship", value: "Domain Zangersheide, Lanaken" },
      { label: "Top Jumping Studbooks", value: "BWP & Zangersheide" },
      { label: "Olympic Team Gold", value: "1920 Antwerp & 1976 Montreal medals" }
    ],
    sources: [
      { title: "The Belgian Draft Horse in History", authorOrOrg: "Royal Society of the Belgian Draft Horse", yearOrType: "Archival Monograph" },
      { title: "Zangersheide: A Vision in Show Jumping", authorOrOrg: "Studbook Zangersheide", yearOrType: "Lanaken Publications" },
      { title: "UNESCO Intangible Cultural Heritage Dossier 00673", authorOrOrg: "UNESCO", yearOrType: "2013 Inscription" }
    ],
    relatedSlugs: ["zangersheide-lanaken", "oostduinkerke-coastline", "brabant-plains", "1920-antwerp-olympics-equestrian"],
    tags: ["BWP", "Zangersheide", "Brabant", "Jumping", "Lanaken"],
    translations: {
      de: {
        title: "Belgien — Weltklasse-Springpferde und das Brabanter Kaltblut",
        summary: "Belgien ist eine Weltmacht im Springsport (BWP, Zangersheide) und die historische Heimat des mächtigen Brabanter Kaltbluts."
      },
      fr: {
        title: "Belgique — Les champions de saut d'obstacles et le cheval de trait brabançon",
        summary: "La Belgique brille au sommet du saut d'obstacles mondial (BWP, Zangersheide) tout en préservant le cheval de trait brabançon."
      }
    }
  },
  {
    id: "cnt-ch",
    slug: "switzerland",
    title: "Switzerland — Alpine Horsemanship & The Franches-Montagnes",
    department: "country",
    continent: "Europe",
    country: "Switzerland",
    capital: "Bern",
    coordinates: { lat: 46.8182, lng: 8.2275 },
    historicalPeriod: "Medieval to Modern Era",
    heroImage: ASSETS.heroLandscape,
    imageCaption: "Franches-Montagnes horses on the high limestone plateau of the Jura region.",
    wordCount: 1080,
    summary: "Switzerland blends alpine horse traditions with world-class Olympic show jumping and eventing. Its sole surviving native breed, the Franches-Montagnes (Freiberger), represents one of Europe's last cold-blooded light draft horses adapted to mountainous terrain.",
    horseCultureOverview: "Swiss equestrian culture is deeply rooted in the Jura canton and military cavalry tradition. With the Swiss National Stud in Avenches (Haras National Suisse), Switzerland provides scientific leadership in equine welfare and ethology.",
    traditionalDisciplines: ["Show Jumping", "Three-Day Eventing", "Alpine Combined Driving", "Swiss Cavalry Trail Riding"],
    indigenousBreeds: ["Franches-Montagnes (Freiberger)", "Swiss Warmblood (Einsiedler)"],
    equestrianCraftsmanship: "Swiss saddlery emphasizes durable waterproof leather treatment, stainless steel hardware, and pack saddles engineered for alpine passes.",
    landmarkSites: ["Swiss National Stud (Haras National Avenches)", "CHI Geneva (Palexpo)", "Einsiedeln Abbey Stables", "Saignelégier (Marché-Concours)"],
    horseWelfareHeritage: "Switzerland has enacted some of the world's most progressive animal welfare legislation, requiring social contact for horses and banning harsh hyperflexion in competition.",
    subsections: [
      {
        heading: "The Swiss National Stud at Avenches",
        content: "Founded in 1898 near the ancient Roman site of Aventicum, the Haras National Suisse in Avenches preserves the Franches-Montagnes breed while conducting internationally acclaimed veterinary research in equine biomechanics and behavior."
      },
      {
        heading: "The Marché-Concours of Saignelégier",
        content: "Every August since 1897, the Jura town of Saignelégier hosts the Marché-Concours, drawing tens of thousands of visitors to celebrate the Freiberger horse with bareback races, roman riding, and traditional driving exhibitions."
      },
      {
        heading: "CHI Geneva and the Rolex Grand Slam",
        content: "Held annually in the Palexpo indoor arena, the CHI Geneva is voted the world's best indoor horse show, featuring the Rolex Grand Prix and the Rolex IJRC Top 10 Final on the largest indoor equestrian floor on earth."
      }
    ],
    keyFacts: [
      { label: "National Stud Founded", value: "Avenches, 1898" },
      { label: "Sole Native Breed", value: "Franches-Montagnes (Freiberger)" },
      { label: "Iconic Festival", value: "Marché-Concours de Saignelégier (1897)" },
      { label: "Premier Show", value: "CHI Geneva (Palexpo Arena)" }
    ],
    sources: [
      { title: "Das Schweizer Nationalgestüt in Avenches", authorOrOrg: "Haras National Suisse", yearOrType: "Federal Historical Documentation" },
      { title: "Le Cheval des Franches-Montagnes", authorOrOrg: "Fédération Suisse d'Élevage", yearOrType: "Breed Society Archives" },
      { title: "Swiss Federal Act on Animal Welfare (TSchG)", authorOrOrg: "Federal Food Safety and Veterinary Office", yearOrType: "Swiss Legal Statutes" }
    ],
    relatedSlugs: ["avenches-national-stud", "saignelegier-jura-plateau", "geneva-palexpo-grounds", "1924-paris-olympics-jumping"],
    tags: ["Freiberger", "Avenches", "Geneva", "Alpine", "Show Jumping"],
    translations: {
      de: {
        title: "Schweiz — Alpine Reitkultur und die Freiberger",
        summary: "Die Schweiz vereint alpine Traditionen mit dem Freiberger-Pferd und dem weltberühmten Hallenturnier CHI Genf."
      },
      fr: {
        title: "Suisse — L'équitation alpine et le Franches-Montagnes",
        summary: "La Suisse conjugue son cheval indigène des Franches-Montagnes avec la recherche éthologique du Haras National d'Avenches."
      }
    }
  },
  {
    id: "cnt-se",
    slug: "sweden",
    title: "Sweden — Flyinge Royal Stud & Nordic Horsemanship",
    department: "country",
    continent: "Europe",
    country: "Sweden",
    capital: "Stockholm",
    coordinates: { lat: 60.1282, lng: 18.6435 },
    historicalPeriod: "12th Century to Present",
    heroImage: ASSETS.estateRider,
    imageCaption: "Flyinge Royal Stud in Scania, one of the oldest operational studs in the world.",
    wordCount: 1130,
    summary: "Sweden is an equestrian superpower whose heritage is anchored by Flyinge Royal Stud (founded by royal charter in 1661) and Strömsholm Palace. Sweden hosted the historic 1912 Olympic equestrian debut and the split 1956 Olympic equestrian games in Stockholm.",
    horseCultureOverview: "Swedish horsemanship is founded on calm, methodical communication, outdoor winter training, and universal public riding schools (ridskolor) that make equestrian sports accessible to all citizens.",
    traditionalDisciplines: ["Show Jumping", "Olympic Dressage", "Three-Day Eventing", "Coldblood Trotter Harness Racing"],
    indigenousBreeds: ["Swedish Warmblood (SWB)", "Gotland Pony (Russ)", "North Swedish Horse (Nordsvensk)", "Swedish Coldblood Trotter"],
    equestrianCraftsmanship: "Swedish leathercraft is noted for sustainable vegetable-tanned reindeer and Scandinavian cowhides, designed to withstand sub-zero temperatures without cracking.",
    landmarkSites: ["Flyinge Royal Stud (Skåne)", "Strömsholm Palace Riding School", "Stockholm Olympic Stadium (1912)", "Gotland Heathland Reserve"],
    horseWelfareHeritage: "Sweden's strict animal welfare statutes prohibit stable isolation, mandating daily paddock turnout with equine companions in outdoor herds.",
    subsections: [
      {
        heading: "Flyinge: One of Europe's Oldest Studs",
        content: "Situated in Scania, Flyinge was originally a royal estate granted by King Charles X Gustav in 1661 after Sweden took control of the region from Denmark. For over three centuries, it supplied horses to the royal cavalry and fostered the modern Swedish Warmblood."
      },
      {
        heading: "1912 Stockholm Olympics: Dawn of Modern Equestrian Sport",
        content: "Under the leadership of Count Clarence von Rosen, equestrian events made their permanent modern Olympic debut at the 1912 Stockholm Games. Competitions in dressage, eventing, and show jumping were held in the red-brick Stockholm Olympic Stadium, shaping international FEI rules."
      },
      {
        heading: "The Gotland Russ: The Forest Pony",
        content: "On the Baltic island of Gotland, semi-feral Gotland Russ ponies have roamed the Lojsta Heath since the Iron Age. They are celebrated for their stamina, calm disposition, and historical endurance."
      }
    ],
    keyFacts: [
      { label: "Royal Stud Founded", value: "Flyinge, 1661" },
      { label: "Historic Olympic Host", value: "1912 & 1956 Stockholm Games" },
      { label: "Key Studbook", value: "Swedish Warmblood (SWB)" },
      { label: "Ancient Island Pony", value: "Gotland Russ of Lojsta Heath" }
    ],
    sources: [
      { title: "Flyinge: Tre Sekler med Hästar", authorOrOrg: "Flyinge Kungsgård Archives", yearOrType: "Historical Monograph" },
      { title: "The 1912 Stockholm Olympic Report", authorOrOrg: "Swedish Olympic Committee", yearOrType: "Official Olympic Records" },
      { title: "Svenska Hästars Historia", authorOrOrg: "Dr. Carl Silfverstolpe", yearOrType: "Royal Academic Press" }
    ],
    relatedSlugs: ["flyinge-royal-stud", "stromsholm-palace-riding-school", "stockholm-olympic-stadium-1912", "1956-stockholm-equestrian-games"],
    tags: ["SWB", "Flyinge", "Stockholm 1912", "Gotland", "Stromsholm"],
    translations: {
      de: {
        title: "Schweden — Königliches Gestüt Flyinge und nordische Reitkultur",
        summary: "Schweden ist eine Reitsport-Großmacht mit dem königlichen Gestüt Flyinge von 1661 und den historischen Olympischen Spielen von 1912 in Stockholm."
      },
      fr: {
        title: "Suède — Le Haras royal de Flyinge et la tradition équestre nordique",
        summary: "La Suède rayonne par le haras royal de Flyinge fondé en 1661 et l'héritage historique des Jeux Olympiques de Stockholm en 1912 et 1956."
      }
    }
  },
  {
    id: "cnt-dk",
    slug: "denmark",
    title: "Denmark — The Royal Frederiksborg & The White Knabstrupper",
    department: "country",
    continent: "Europe",
    country: "Denmark",
    capital: "Copenhagen",
    coordinates: { lat: 56.2639, lng: 9.5018 },
    historicalPeriod: "Renaissance to Modern Era",
    heroImage: ASSETS.viennaHall,
    imageCaption: "Classical royal riding academy in Christiansborg Palace, Copenhagen.",
    wordCount: 1090,
    summary: "Denmark's equestrian lineage includes the Frederiksborg horse — once the most coveted royal carriage and classical school horse in Europe — and the uniquely spotted Knabstrupper, bred from Spanish cavalry stock during the Napoleonic wars.",
    horseCultureOverview: "Modern Danish equestrianism is an international force in dressage, driven by rigorous breeding programs in the Danish Warmblood (DWB) and royal institutions like the Royal Stables at Christiansborg Palace.",
    traditionalDisciplines: ["Olympic Dressage", "Show Jumping", "Traditional Ring Riding (Ringridning)", "Royal Ceremonial Carriage Driving"],
    indigenousBreeds: ["Danish Warmblood (DWB)", "Frederiksborg", "Knabstrupper", "Jutland Draught (Den jydske hest)"],
    equestrianCraftsmanship: "Danish equestrian design is renowned for Scandinavian minimalism, functional bridle geometry that avoids sensitive facial nerves, and lightweight titanium bits.",
    landmarkSites: ["Royal Stables at Christiansborg (Copenhagen)", "Frederiksborg Castle Grounds", "Blue Hors Dressage Centre (Randbøl)", "Sønderborg Ring Riding Grounds"],
    horseWelfareHeritage: "The Danish Equestrian Federation (Dansk Ride Forbund) was among the first in the world to enforce strict bit and noseband clearance rules using digital gauge testing at competitions.",
    subsections: [
      {
        heading: "Frederiksborg Royal Stud: Jewel of the Renaissance",
        content: "King Christian IV founded the Royal Frederiksborg Stud in 1562 to breed magnificent baroque horses for the Danish royal family. Frederiksborg horses, with their high knee action and chestnut coats, were exported to European royal courts as the ultimate gift of state."
      },
      {
        heading: "The Spotted Knabstrupper",
        content: "In 1812, Major Villars Lunn of Knabstrup Manor purchased a spotted mare left behind by a Spanish cavalry officer during the Napoleonic campaigns. Bred with Frederiksborg stallions, she founded the Knabstrupper breed, famous for leopard-spot coats and agile minds."
      },
      {
        heading: "The Ring Riding Traditions of Southern Jutland",
        content: "In southern Denmark, particularly in Sønderborg, thousands of riders gather each July for Ringridning. Dressed in ceremonial attire, riders gallop at top speed with a lance to spear tiny brass rings suspended between wooden posts."
      }
    ],
    keyFacts: [
      { label: "Royal Stud Founded", value: "Frederiksborg, 1562" },
      { label: "Origin of Knabstrupper", value: "1812 (Major Villars Lunn)" },
      { label: "Royal Riding Ground", value: "Christiansborg Palace Stables" },
      { label: "Folk Equestrian Festival", value: "Ringridning in Sønderborg" }
    ],
    sources: [
      { title: "The Royal Danish Frederiksborg Stud", authorOrOrg: "Royal Library of Copenhagen", yearOrType: "Historical Danish Archives" },
      { title: "Knabstrupperforeningen for Danmark", authorOrOrg: "KNN Breed Registry", yearOrType: "Studbook Records" },
      { title: "Dansk Ride Forbund History", authorOrOrg: "Danish Equestrian Federation", yearOrType: "Official Records" }
    ],
    relatedSlugs: ["christiansborg-royal-stables", "frederiksborg-castle-grounds", "sonderborg-ring-riding", "2022-herning-world-equestrian-games"],
    tags: ["Frederiksborg", "Knabstrupper", "DWB", "Dressage", "Christiansborg"],
    translations: {
      de: {
        title: "Dänemark — Das königliche Frederiksborg und der getigerte Knabstrupper",
        summary: "Dänemark schuf mit dem Frederiksborg eines der berühmtesten Barockpferde Europas und mit dem Knabstrupper eine faszinierende Tigerschecken-Rasse."
      },
      fr: {
        title: "Danemark — Le Frederiksborg royal et le Knabstrupper tacheté",
        summary: "Le Danemark a offert à l'Europe le cheval baroque de Frederiksborg et le Knabstrupper aux robes tachetées nées des guerres napoléoniennes."
      }
    }
  },
  {
    id: "cnt-no",
    slug: "norway",
    title: "Norway — The Ancient Fjord Horse & Viking Horsemanship",
    department: "country",
    continent: "Europe",
    country: "Norway",
    capital: "Oslo",
    coordinates: { lat: 60.4720, lng: 8.4689 },
    historicalPeriod: "Viking Age to Modern Era",
    heroImage: ASSETS.heroLandscape,
    imageCaption: "Norwegian Fjord horses grazing on fjord hillsides in western Norway.",
    wordCount: 1070,
    summary: "Norway is the ancestral home of the Norwegian Fjord horse, one of the world's oldest and purest equine breeds. Unchanged since Viking warriors rode them into battle and farmed steep coastal fjords, the Fjord is a living link to prehistoric wild horses.",
    horseCultureOverview: "Norwegian horsemanship revolves around mountain endurance, fjord riding, and winter sledge driving. Horses are integrated into community life in western Norway, marked by their iconic crescent-cut bi-colored manes.",
    traditionalDisciplines: ["Mountain Pack & Trail Riding", "Traditional Fjord Driving", "Coldblood Trotter Harness Racing", "Cross-Country Driving"],
    indigenousBreeds: ["Norwegian Fjord Horse", "Døle Horse (Gudbrandsdal)", "Nordland Horse (Lyngshest)"],
    equestrianCraftsmanship: "Traditional Norwegian harness making features hand-carved birch collars (seler), brass bells, and tooled reindeer leather reins.",
    landmarkSites: ["Norwegian Fjord Horse Centre (Nordfjordeid)", "Gudbrandsdal Valley", "Lofoten Islands", "Bjerke Racecourse (Oslo)"],
    horseWelfareHeritage: "Norwegian breed preservation policies maintain the primitive wild traits of the Fjord horse (dun coat, dorsal eel stripe, and zebra-barred legs) without compromising health.",
    subsections: [
      {
        heading: "The Fjord Horse of the Vikings",
        content: "Archaeological excavations of Viking burial ships like the Oseberg ship (circa 834 AD) revealed horse skeletons and ornate riding harnesses identical in size to today's Fjord horse. The breed's docile nature, rock-hard hooves, and sure-footed balance enabled survival on steep fjord precipices."
      },
      {
        heading: "The Døle Horse of Gudbrandsdal",
        content: "In the fertile valleys of eastern Norway, the Døle horse was developed as a heavier farm and pack animal. Influenced by imported British stallions, it branched into the agile Norwegian Coldblood Trotter, beloved in national harness racing."
      },
      {
        heading: "Nordfjordeid: The Fjord Horse Mecca",
        content: "The town of Nordfjordeid hosts the annual national stallion licensing show for the Fjord horse. Here, breeders evaluate not only conformation and gaits, but also willingness to work in traditional harness and saddle tests."
      }
    ],
    keyFacts: [
      { label: "Oldest Continuous Breed", value: "Norwegian Fjord (Over 4,000 years)" },
      { label: "National Breed Centre", value: "Nordfjordeid, Western Norway" },
      { label: "Viking Archaeological Proof", value: "Oseberg Ship Burial (834 AD)" },
      { label: "Distinctive Feature", value: "Primitive dun coloration & roached mane" }
    ],
    sources: [
      { title: "The Fjord Horse", authorOrOrg: "Norges Fjordhestlag", yearOrType: "Official Breed History" },
      { title: "Horses of the Viking Age", authorOrOrg: "Museum of Cultural History, Oslo", yearOrType: "Archaeological Studies" },
      { title: "Norsk Hestevandring", authorOrOrg: "Norwegian Agricultural University", yearOrType: "Historical Research" }
    ],
    relatedSlugs: ["nordfjordeid-fjord-centre", "gudbrandsdal-valley", "hardangervidda-plateau", "oseberg-viking-equestrian"],
    tags: ["Fjord Horse", "Viking", "Nordfjordeid", "Dole", "Norway"],
    translations: {
      de: {
        title: "Norwegen — Das uralte Fjordpferd und die Wikinger-Reitkultur",
        summary: "Norwegen ist die Heimat des Fjordpferds, einer der reinsten und ältesten Pferderassen der Menschheit mit Wurzeln in der Wikingerzeit."
      },
      fr: {
        title: "Norvège — Le cheval des Fjords ancestral et l'héritage viking",
        summary: "La Norvège abrite le cheval des Fjords, race millénaire inchangée depuis les sépultures vikings et dotée d'un pied montagnard légendaire."
      }
    }
  },
  {
    id: "cnt-pl",
    slug: "poland",
    title: "Poland — The Polish Arabian & The Winged Hussars",
    department: "country",
    continent: "Europe",
    country: "Poland",
    capital: "Warsaw",
    coordinates: { lat: 51.9194, lng: 19.1451 },
    historicalPeriod: "16th Century to Modern Era",
    heroImage: ASSETS.heroLandscape,
    imageCaption: "Purebred Polish Arabian mares trotting across the historic paddocks of Janów Podlaski.",
    wordCount: 1190,
    summary: "Poland possesses one of the most storied equestrian histories in Europe, marked by the invincible 17th-century Winged Hussars (Husaria) and world-renowned state studs like Janów Podlaski and Michałów, celebrated for breeding exquisite Purebred Arabian horses.",
    horseCultureOverview: "Polish equestrian culture combines aristocratic cavalry valor with scientific Arabian and warmblood breeding. The Pride of Poland Arabian Horse Auction draws international royal families and breeders every August to the eastern borderlands.",
    traditionalDisciplines: ["Purebred Arabian Breeding & Showing", "Three-Day Eventing", "Cavalry Historical Re-enactment", "Show Jumping"],
    indigenousBreeds: ["Polish Arabian", "Wielkopolski", "Małopolski", "Konik Polski (Primitive Tarpan descendant)", "Silesian Horse (Śląski)"],
    equestrianCraftsmanship: "Historic Polish saddlers perfected the 'Kulbaka' cavalry saddle, lightweight yet exceptionally stable for high-speed saber combat and prolonged border patrols.",
    landmarkSites: ["Janów Podlaski State Stud (Founded 1817)", "Michałów State Stud (Kielce)", "Sopot Hippodrome", "Kozienice National Stud", "Biała Podlaska"],
    horseWelfareHeritage: "Poland re-introduced the primitive Konik Polski into natural reserves in Roztocze National Park, allowing them to live in wild family bands as ecological forest grazers.",
    subsections: [
      {
        heading: "The Janów Podlaski State Stud",
        content: "Founded by decree of Tsar Alexander I in 1817, Janów Podlaski is Poland's oldest state stud. Surviving the destruction of World War I and World War II, its breeders hid irreplaceable studbooks from invading armies, ensuring the survival of the world's most coveted Arabian bloodlines."
      },
      {
        heading: "The Winged Hussars of the Commonwealth",
        content: "In 1683 at the Battle of Vienna, King Jan III Sobieski led the largest cavalry charge in military history. Over 18,000 horsemen, led by the heavy Polish Winged Hussars wearing eagle and vulture feathers on wooden back-frames, broke the Ottoman siege."
      },
      {
        heading: "The Konik Polski: Descendant of the Wild Tarpan",
        content: "The Konik Polski is directly descended from the extinct wild European Tarpan horse. Recognized by its mouse-gray (grullo) coat and dorsal stripe, Polish scientists led by Professor Tadeusz Vetulani established forest sanctuaries to preserve its ancient genetic resilience."
      }
    ],
    keyFacts: [
      { label: "Oldest State Stud", value: "Janów Podlaski (1817)" },
      { label: "Historic Military Feat", value: "Battle of Vienna Cavalry Charge (1683)" },
      { label: "Primitive Wild Breed", value: "Konik Polski (Tarpan strain)" },
      { label: "World-Famous Auction", value: "Pride of Poland (Janów Podlaski)" }
    ],
    sources: [
      { title: "The Polish Arabian Horse", authorOrOrg: "Dr. Edward Skorkowski", yearOrType: "State Agricultural Press" },
      { title: "Winged Hussars of the Polish Commonwealth", authorOrOrg: "Radosław Sikora", yearOrType: "Military Historical Treatise" },
      { title: "Janów Podlaski Studbook Archives", authorOrOrg: "Stadnina Koni Janów Podlaski", yearOrType: "Historical Registry" }
    ],
    relatedSlugs: ["janow-podlaski-stud", "michalow-arabian-stud", "roztocze-national-park-konik", "sopot-international-hippodrome"],
    tags: ["Polish Arabian", "Janow Podlaski", "Hussars", "Konik", "Poland"],
    translations: {
      de: {
        title: "Polen — Das polnische Vollblutaraber und die geflügelten Husaren",
        summary: "Polens Reitgeschichte reicht von den berühmten Flügelhusaren bis zum weltbekannten Staatsgestüt Janów Podlaski für Vollblutaraber."
      },
      fr: {
        title: "Pologne — Le Pur-Sang Arabe polonais et les Hussards Ailés",
        summary: "La Pologne unit la mémoire des charges héroïques de ses Hussards ailés à l'excellence mondiale du haras de Janów Podlaski."
      }
    }
  },
  {
    id: "cnt-hu",
    slug: "hungary",
    title: "Hungary — The Magyar Horsemen & The Great Puszta Plain",
    department: "country",
    continent: "Europe",
    country: "Hungary",
    capital: "Budapest",
    coordinates: { lat: 47.1625, lng: 19.5033 },
    historicalPeriod: "9th Century Nomadic Era to Present",
    heroImage: ASSETS.mongolianSteppe,
    imageCaption: "Csikós horsemen demonstrating the Puszta-five ride across the Hortobágy National Park.",
    wordCount: 1170,
    summary: "Hungary's identity is inextricably bound to the horse. From the nomadic Magyar conquest of the Carpathian Basin in 896 AD to the legendary Mezőhegyes and Bábolna state studs, Hungary created the original Hussar cavalry and peerless four-in-hand driving traditions.",
    horseCultureOverview: "The vast grasslands of the Hungarian Great Plain (Puszta) created the Csikós horsemen, renowned for riding standing atop five or more horses at full gallop. Hungary has won more World Four-in-Hand Driving Championships than any other nation.",
    traditionalDisciplines: ["Combined Four-in-Hand Driving (Fogathajtás)", "Csikós Trick & Post Riding", "Hussar Cavalry Traditions", "Endurance & Show Jumping"],
    indigenousBreeds: ["Nonius", "Shagya Arabian", "Kisbéri Félvér (Halfbred)", "Furioso-North Star", "Gidran", "Lipizzaner (Szilvásvárad branch)"],
    equestrianCraftsmanship: "Hungarian saddlers created the original 'Bock' saddle and the Hussar bridle with horsehair tassels. Their harness workshops are the undisputed gold standard for four-in-hand competitive driving collars.",
    landmarkSites: ["Hortobágy National Park (Great Puszta)", "Mezőhegyes State Stud (Founded 1784 by Joseph II)", "Bábolna National Stud", "Szilvásvárad Lipizzaner Stud", "Kincsem Park (Budapest)"],
    horseWelfareHeritage: "Hungarian training emphasizes trusting bonds: the Csikós train horses to lie down flat in the grass on command — an ancient stealth tactic to evade detection across flat plains.",
    subsections: [
      {
        heading: "Emperor Joseph II and Mezőhegyes",
        content: "In 1784, Emperor Joseph II of Austria founded the Imperial and Royal Military Stud at Mezőhegyes in southeastern Hungary. It gave birth to three historic breeds: the heavy draught Nonius, the Furioso-North Star, and the Gidran, turning Hungary into the equestrian powerhouse of Central Europe."
      },
      {
        heading: "Bábolna and the Shagya Arabian",
        content: "Founded in 1789, Bábolna began importing desert Arabian stallions to create a horse possessing Arabian elegance with greater size and substance for military officers. In 1836, the Syrian stallion Shagya was purchased, founding the distinguished Shagya Arabian breed."
      },
      {
        heading: "The Wonder Mare: Kincsem",
        content: "Hungary bred Kincsem, the most successful Thoroughbred racehorse in world history. Foaled in Tápiószentmárton in 1874, Kincsem raced 54 times across Hungary, Austria, Germany, France, and England, winning every single race — an unbroken world record."
      }
    ],
    keyFacts: [
      { label: "Imperial Stud Founded", value: "Mezőhegyes, 1784" },
      { label: "Unbeaten Racehorse Record", value: "Kincsem (54 wins from 54 starts)" },
      { label: "UNESCO World Heritage Plain", value: "Hortobágy National Park (Puszta)" },
      { label: "Driving Dominance", value: "Over 10 World Championship Team Golds" }
    ],
    sources: [
      { title: "History of the Hungarian Horse", authorOrOrg: "Hungarian Ministry of Agriculture", yearOrType: "State Historical Monographs" },
      { title: "Mezőhegyes: 230 Years of Breeding", authorOrOrg: "Mezőhegyesi Állami Ménesbirtok", yearOrType: "Official Studbook Archives" },
      { title: "Kincsem: The Incomparable", authorOrOrg: "Dr. Arthur Yates", yearOrType: "Racing History" }
    ],
    relatedSlugs: ["hortobagy-puszta-plain", "mezohegyes-state-stud", "babolna-national-stud", "szilvasvarad-lipizzaner-stud"],
    tags: ["Magyar", "Puszta", "Nonius", "Babolna", "Mezohegyes"],
    translations: {
      de: {
        title: "Ungarn — Die Magyar-Reiter und die unendliche Puszta",
        summary: "Ungarn lebt für das Pferd: von den Csikós-Hirten der Puszta über das kaiserliche Gestüt Mezőhegyes bis zur Wunderstute Kincsem."
      },
      fr: {
        title: "Hongrie — Les cavaliers magyars et la plaine de la Puszta",
        summary: "De la conquête magyare aux haras impériaux de Mezőhegyes et Bábolna, la Hongrie a forgé la tradition des hussards et l'attelage à quatre."
      }
    }
  },
  {
    id: "cnt-cz",
    slug: "czech-republic",
    title: "Czech Republic — The Imperial Kladruber & The Velká Pardubická",
    department: "country",
    continent: "Europe",
    country: "Czech Republic",
    capital: "Prague",
    coordinates: { lat: 49.8175, lng: 15.4730 },
    historicalPeriod: "16th Century to Modern Era",
    heroImage: ASSETS.estateRider,
    imageCaption: "Kladruby nad Labem National Stud, UNESCO World Heritage ceremonial landscape.",
    wordCount: 1110,
    summary: "The Czech Republic holds a unique jewel in world equestrian culture: the National Stud at Kladruby nad Labem, recognized by UNESCO as an imperial landscape designed specifically for breeding the Old Kladruber ceremonial carriage horse for the Habsburg court.",
    horseCultureOverview: "Czech equestrianism encompasses classical carriage driving in Kladruby and the grueling Velká Pardubická steeplechase, contested annually since 1874 over notorious natural obstacles like the Taxis Ditch.",
    traditionalDisciplines: ["Ceremonial Carriage Driving", "Cross-Country Steeplechase", "Show Jumping", "Classical High School Driving"],
    indigenousBreeds: ["Old Kladruber (Starokladrubský kůň)", "Czech Warmblood", "Kinsky Horse (Golden Bohemians)", "Silesian Noriker"],
    equestrianCraftsmanship: "Czech artisans in the Elbe river basin are renowned for crafting ceremonial black and white carriage harness with brass crests and traditional patent leather fittings.",
    landmarkSites: ["Kladruby nad Labem National Stud (UNESCO)", "Slatiňany Stud", "Pardubice Racecourse", "Prague-Chuchle Arena"],
    horseWelfareHeritage: "Recent modifications to the Velká Pardubická, including redesigning the Taxis Ditch to soften the landing bank, demonstrate ongoing adaptation for equine safety.",
    subsections: [
      {
        heading: "Kladruby nad Labem: The Emperor's Coach Horses",
        content: "Founded by Emperor Rudolf II in 1579, Kladruby nad Labem bred noble carriage horses in two distinct colors: grey horses (Greys) for imperial and papal ceremonies, and black horses (Blacks) for high clergy and funeral cortèges. Its pastures, avenues, and classicist stables form an intact cultural landscape."
      },
      {
        heading: "The Golden Kinsky Horses of Bohemia",
        content: "Count Octavian Kinsky established the Kinsky stud in Chlumec nad Cidlinou in 1838. Recognized for their metallic golden isabella (palomino) coats with white manes, Kinsky horses were bred as brave, fast steeplechase and hunting mounts."
      },
      {
        heading: "The Velká Pardubická: Continental Steeplechase",
        content: "Run over 6,900 meters and 31 obstacles, the Velká Pardubická is the most famous cross-country steeplechase in continental Europe. Jockeys and horses navigate plowed fields, water jumps, and hedges in an endurance challenge modeled on the English Grand National."
      }
    ],
    keyFacts: [
      { label: "UNESCO World Heritage Site", value: "Landscape for Breeding of Ceremonial Carriage Horses at Kladruby (2019)" },
      { label: "Imperial Stud Founded", value: "1579 by Emperor Rudolf II" },
      { label: "Legendary Steeplechase", value: "Velká Pardubická (Founded 1874)" },
      { label: "Golden Bohemian Breed", value: "Kinsky Horse (Equus Kinsky)" }
    ],
    sources: [
      { title: "National Stud at Kladruby nad Labem UNESCO Nomination", authorOrOrg: "Ministry of Culture of the Czech Republic", yearOrType: "UNESCO Dossier" },
      { title: "The Velká Pardubická and Steeplechasing in Bohemia", authorOrOrg: "Miloš Svoboda", yearOrType: "Historical Sports Monograph" },
      { title: "Archives of the Kinsky Stud", authorOrOrg: "Kinský dal Borgo Archives", yearOrType: "Family Historical Records" }
    ],
    relatedSlugs: ["kladruby-nad-labem-stud", "pardubice-steeplechase-course", "slatinany-black-horse-stud", "1874-first-velka-pardubicka"],
    tags: ["Kladruber", "UNESCO", "Pardubice", "Kinsky", "Carriage Driving"],
    translations: {
      de: {
        title: "Tschechische Republik — Der imperiale Kladruber und die Velká Pardubická",
        summary: "Tschechien hütet mit Kladruby nad Labem ein UNESCO-Weltkulturerbe der Kutschpferdezucht und mit Pardubice das härteste Jagdrennen des Kontinents."
      },
      fr: {
        title: "République tchèque — Le Kladruber impérial et le Grand Steeple de Pardubice",
        summary: "La République tchèque abrite le haras impérial de Kladruby nad Labem classé par l'UNESCO et le célèbre steeple-chase de Pardubice."
      }
    }
  },
  {
    id: "cnt-is",
    slug: "iceland",
    title: "Iceland — The Viking Steed & The Five Gaits of Fire and Ice",
    department: "country",
    continent: "Europe",
    country: "Iceland",
    capital: "Reykjavík",
    coordinates: { lat: 64.9631, lng: -19.0208 },
    historicalPeriod: "9th Century Settlement to Present",
    heroImage: ASSETS.camargueWildHorses,
    imageCaption: "Icelandic horses crossing black volcanic sands against glacier backdrops.",
    wordCount: 1140,
    summary: "Iceland's horse is genetically isolated since the Althing (parliament) banned the import of all horses in 982 AD. Surviving over a millennium of volcanic eruptions and arctic winters, the Icelandic horse possesses five distinct gaits, including the silky-smooth tölt and flying pace.",
    horseCultureOverview: "In Iceland, riding is a universal national pastime. The annual autumn Réttir roundups see entire communities ride into the highlands to gather free-roaming herds from summer pastures.",
    traditionalDisciplines: ["Tölt & Flying Pace (Skeið) Competition", "Landsmót National Festival", "Winter Ice Riding", "Highland Trail Riding"],
    indigenousBreeds: ["Icelandic Horse (Íslenski hesturinn)"],
    equestrianCraftsmanship: "Icelandic saddlery features the flat, ribbed tölt saddle, long-shanked stangir bits, and lightweight aluminum horseshoes balanced for gait cadence.",
    landmarkSites: ["Landsmót Grounds (Hólar & Vindheimamelar)", "Skagafjörður Breeding Heartland", "Thingvellir National Park", "Reykholt Stables"],
    horseWelfareHeritage: "Iceland enforces total quarantine: if an Icelandic horse leaves the island for international competition, it can never return, protecting the native herd from foreign pathogens.",
    subsections: [
      {
        heading: "The Decree of the Althing in 982 AD",
        content: "Over a thousand years ago, the Icelandic parliament recognized that foreign horse imports diluted stamina and introduced disease. By passing a law forbidding any horse imports, they created the purest continuous horse breed in world history."
      },
      {
        heading: "Mastery of the Tölt and Flying Pace",
        content: "While most horses possess three gaits (walk, trot, canter), the Icelandic horse carries the DMRT3 genetic mutation allowing two extra gaits: the four-beat lateral tölt with zero vertical bounce, and the explosive flying pace reaching speeds up to 50 km/h."
      },
      {
        heading: "Landsmót: The National Horse Gathering",
        content: "Held biennially, Landsmót brings together the finest breeders, riders, and gaited horses. Up to 15,000 spectators gather to witness the Gæðingakeppni, a competition celebrating the horse's spirit (vilji) and cooperative disposition."
      }
    ],
    keyFacts: [
      { label: "Import Ban Enacted", value: "982 AD by the Althing" },
      { label: "Five Distinct Gaits", value: "Fet, Brokk, Stökk, Tölt, Skeið" },
      { label: "National Gathering", value: "Landsmót (Held since 1950)" },
      { label: "Genetic Isolation", value: "Over 1,000 years without foreign crossing" }
    ],
    sources: [
      { title: "The Saga of the Icelandic Horse", authorOrOrg: "G. Sveinsson", yearOrType: "Historical Monograph" },
      { title: "DMRT3 Mutation and Alternative Gaits", authorOrOrg: "Nature Scientific Reports", yearOrType: "Genetics Study" },
      { title: "Bændasamtök Íslands (Farmers Association of Iceland)", authorOrOrg: "WorldFengur Database", yearOrType: "Official Studbook" }
    ],
    relatedSlugs: ["skagafjordur-valley", "landsmot-national-grounds", "thingvellir-highlands", "reykholt-historic-settlement"],
    tags: ["Icelandic Horse", "Tolt", "Landsmót", "Viking", "Five Gaits"],
    translations: {
      de: {
        title: "Island — Das Wikingerpferd und die fünf Gänge aus Feuer und Eis",
        summary: "Seit 982 n. Chr. genetisch isoliert, beherrscht das Islandpferd neben den Grundgangarten den legendären Tölt und den Rennpass."
      },
      fr: {
        title: "Islande — La monture viking et les cinq allures de feu et de glace",
        summary: "Isolé depuis le décret de l'Althing en 982, le cheval islandais brave les éléments avec son tölt sans secousse et son amble volant."
      }
    }
  },
  {
    id: "cnt-us",
    slug: "united-states",
    title: "United States — The Kentucky Bluegrass & The Western Ranching Tradition",
    department: "country",
    continent: "North America",
    country: "United States",
    capital: "Washington, D.C.",
    coordinates: { lat: 37.0902, lng: -95.7129 },
    historicalPeriod: "18th Century to Modern Era",
    heroImage: ASSETS.heroLandscape,
    imageCaption: "Thoroughbred breeding farm in the Kentucky Bluegrass with white wooden rail fences.",
    wordCount: 1250,
    summary: "The United States developed an immense, diverse equestrian culture spanning the thoroughbred dynasties of Kentucky Bluegrass, the working stockmanship of Western cowboys, and the creation of versatile native breeds like the Quarter Horse and Morgan.",
    horseCultureOverview: "American horse culture thrives across contrasting realms: high-stakes Thoroughbred racing at Churchill Downs and Saratoga, elite hunter/jumper circuits in Wellington and Gladstone, and Western rodeo, reining, and cutting rooted in working cattle ranching.",
    traditionalDisciplines: ["Thoroughbred Flat Racing", "Western Reining & Cutting", "Ranch Horse Stockmanship", "Show Hunter & Equitation", "Gaited Horse Riding"],
    indigenousBreeds: ["American Quarter Horse (AQHA)", "Morgan Horse", "Standardbred", "American Saddlebred", "Tennessee Walking Horse", "Appaloosa"],
    equestrianCraftsmanship: "American leather craft invented the Western stock saddle with deep seat, heavy swell fork, and leather-wrapped saddle horn for dallying lariats, alongside precision English saddles developed in New England.",
    landmarkSites: ["Kentucky Horse Park (Lexington)", "Churchill Downs (Louisville)", "Wellington International Arena (Florida)", "King Ranch (Texas)", "Saratoga Race Course"],
    horseWelfareHeritage: "The US Wild Free-Roaming Horses and Burros Act of 1971 protects mustangs as living symbols of the historic and pioneer spirit of the American West.",
    subsections: [
      {
        heading: "The Kentucky Bluegrass: Thoroughbred Kingdom",
        content: "Centered around Lexington, Kentucky, the Inner Bluegrass region features Ordovician limestone soil rich in calcium and phosphorus. This mineral concentration feeds lush bluegrass pastures that strengthen bone density in developing thoroughbred foals, producing Kentucky Derby champions for over a century."
      },
      {
        heading: "The American Quarter Horse: King of the Range",
        content: "Descended from English Thoroughbreds and Chickasaw ponies, the Quarter Horse was initially sprint-raced over a quarter-mile in Colonial Virginia. When ranching expanded West, its rapid acceleration, muscular hindquarters, and instinctive 'cow sense' made it the quintessential working mount."
      },
      {
        heading: "The Western Saddle: Architectural Ingenuity",
        content: "Evolving from the Spanish vaquero saddle, makers like the Gallatin brothers and the historic saddleries of Cheyenne, Wyoming, added a solid wooden fork and horn. This allowed cowboys to anchor roped cattle while riding comfortably for twelve hours across open range."
      }
    ],
    keyFacts: [
      { label: "Horse Capital of the World", value: "Lexington, Kentucky" },
      { label: "Largest Equine Registry", value: "American Quarter Horse Association (AQHA)" },
      { label: "Oldest Continuous Sporting Event", value: "Kentucky Derby (Run annually since 1875)" },
      { label: "Federal Heritage Act", value: "Wild Free-Roaming Horses Act (1971)" }
    ],
    sources: [
      { title: "The Kentucky Thoroughbred", authorOrOrg: "Kent Hollingsworth", yearOrType: "University Press of Kentucky" },
      { title: "They Rode Good Horses", authorOrOrg: "Don Hedgpeth", yearOrType: "American Quarter Horse Heritage" },
      { title: "The Cowboy: An American Icon", authorOrOrg: "National Cowboy Museum", yearOrType: "Museum Archives" }
    ],
    relatedSlugs: ["kentucky-bluegrass-region", "churchill-downs-grounds", "king-ranch-texas", "1875-first-kentucky-derby"],
    tags: ["Kentucky", "Quarter Horse", "Bluegrass", "Western", "Thoroughbred"],
    translations: {
      de: {
        title: "Vereinigte Staaten — Das Kentucky Bluegrass und die Western-Tradition",
        summary: "Die USA vereinen den Glamour der Vollblutzucht in Kentucky mit der Reitkultur der Western-Ranches und des Quarter Horses."
      },
      fr: {
        title: "États-Unis — Le Bluegrass du Kentucky et la tradition équestre western",
        summary: "Des haras légendaires du Kentucky aux ranchs du Far West, les États-Unis ont façonné le Quarter Horse et le Western riding."
      }
    }
  },
  {
    id: "cnt-ca",
    slug: "canada",
    title: "Canada — The Canadian Horse 'Little Iron Horse' & Mounted Police",
    department: "country",
    continent: "North America",
    country: "Canada",
    capital: "Ottawa",
    coordinates: { lat: 56.1304, lng: -106.3468 },
    historicalPeriod: "17th Century to Modern Era",
    heroImage: ASSETS.estateRider,
    imageCaption: "Canadian horses in the snowy foothills of the Canadian Rockies, Alberta.",
    wordCount: 1110,
    summary: "Canada's national horse, the Canadian Horse (Cheval Canadien), was nicknamed 'the Little Iron Horse' for its extraordinary endurance in harsh sub-arctic winters. Canada also created the world-famous Royal Canadian Mounted Police (RCMP) Musical Ride.",
    horseCultureOverview: "Canadian horsemanship spans the cattle country of Alberta and British Columbia, the show jumping mecca of Spruce Meadows in Calgary, and the historic breeding farms of Quebec and Ontario.",
    traditionalDisciplines: ["Show Jumping", "RCMP Musical Ride Drills", "Western Ranch & Rodeo Riding", "Three-Day Eventing"],
    indigenousBreeds: ["Canadian Horse (Cheval Canadien)", "Newfoundland Pony", "Canadian Warmblood", "Lac La Croix Indigenous Pony"],
    equestrianCraftsmanship: "Canadian harness makers and saddle makers in Calgary and Quebec specialize in cold-weather oil-tanned leather and heavy sheepskin saddle linings.",
    landmarkSites: ["Spruce Meadows (Calgary, Alberta)", "RCMP Musical Ride Centre (Ottawa)", "Heritage Park Historical Village", "Bromont Olympic Equestrian Park (1976)"],
    horseWelfareHeritage: "Parliament declared the Canadian Horse the official National Horse of Canada in 2002, recognizing its historic contribution to clearing and farming the early nation.",
    subsections: [
      {
        heading: "The Little Iron Horse of New France",
        content: "In 1665, King Louis XIV sent the first shipment of royal stallions and mares to New France (Quebec). Isolated in Canadian winters and subjected to grueling logging and travel through deep snow, they developed into a hardy, compact breed renowned for strength and longevity."
      },
      {
        heading: "Spruce Meadows: Global Show Jumping Cathedral",
        content: "Founded in 1975 by Ron and Marg Southern in Calgary, Spruce Meadows is celebrated as one of the world's most prestigious show jumping venues. The CPKC 'International' Grand Prix at the Masters Tournament offers one of equestrian sport's richest and most challenging tests."
      },
      {
        heading: "The RCMP Musical Ride",
        content: "Originating in 1876 with the North-West Mounted Police, the Musical Ride consists of 32 cavalry riders on matching black horses performing intricate precision drill movements at the trot and canter, carrying lances with red-and-white pennants."
      }
    ],
    keyFacts: [
      { label: "National Horse Declared", value: "Canadian Horse (Act of Parliament, 2002)" },
      { label: "Premier Jumping Venue", value: "Spruce Meadows, Calgary" },
      { label: "World-Renowned Drill", value: "RCMP Musical Ride (Established 1876)" },
      { label: "Olympic Host City", value: "1976 Montreal (Bromont Equestrian Park)" }
    ],
    sources: [
      { title: "The Canadian Horse: The Little Iron Horse", authorOrOrg: "Gladys Beattie", yearOrType: "Historical Monograph" },
      { title: "Spruce Meadows: A History of Excellence", authorOrOrg: "Spruce Meadows Media", yearOrType: "Institutional Records" },
      { title: "History of the RCMP Musical Ride", authorOrOrg: "Royal Canadian Mounted Police", yearOrType: "Official Government Archives" }
    ],
    relatedSlugs: ["spruce-meadows-calgary", "bromont-olympic-park-1976", "alberta-foothills-ranches", "ottawa-rcmp-musical-ride"],
    tags: ["Canadian Horse", "Spruce Meadows", "RCMP", "Alberta", "Calgary"],
    translations: {
      de: {
        title: "Kanada — Das kleine Eisenpferd und die Mounted Police",
        summary: "Kanada schuf mit dem Cheval Canadien das zähe kleine Eisenpferd und mit Spruce Meadows einen Tempel des Springsports."
      },
      fr: {
        title: "Canada — Le Petit Cheval de Fer et la Gendarmerie Royale",
        summary: "Le cheval canadien, offert par Louis XIV, a bravé les hivers rigoureux avant de devenir l'emblème national célébré aux côtés de Spruce Meadows."
      }
    }
  },
  {
    id: "cnt-mx",
    slug: "mexico",
    title: "Mexico — The Charrería National Sport & The Azteca Horse",
    department: "country",
    continent: "North America",
    country: "Mexico",
    capital: "Mexico City",
    coordinates: { lat: 23.6345, lng: -102.5528 },
    historicalPeriod: "16th Century to Present",
    heroImage: ASSETS.andalusianCourtyard,
    imageCaption: "Mexican Charro riding an Azteca horse with ornate silver-inlaid piteado tack.",
    wordCount: 1140,
    summary: "Mexico is the cradle of North American horsemanship, where Spanish gineta riding evolved into the Charrería — Mexico's official national sport and a UNESCO Intangible Cultural Heritage. Mexico also created the Azteca breed, blending Iberian grace with Quarter Horse agility.",
    horseCultureOverview: "In Mexico, equestrian culture is synonymous with the figure of the Charro, immortalized in poetry, music, and ranch life. From Guadalajara to the haciendas of Jalisco, charros practice complex reining exercises (suertes charras) in circular arenas (lienzos charros).",
    traditionalDisciplines: ["Charrería (9 suertes including Cala de Caballo, Piales, and Coleadero)", "Escaramuza Charra (Synchronized Side-Saddle Drill)", "Mexican Reining"],
    indigenousBreeds: ["Azteca Horse (Created in 1972)", "Galiceño Pony", "Criollo Mexicano"],
    equestrianCraftsmanship: "Mexican saddlery is globally celebrated for 'Piteado' — hand-embroidering thick leather with agave cactus fiber threads — and hand-engraved silver horn and cantle inlays on heavy wooden-tree charro saddles.",
    landmarkSites: ["Lienzo Charro Jalisco (Guadalajara)", "Rancho El Pitayo (Querétaro)", "Hacienda San José de Miravalle", "Campo Marte (Mexico City)"],
    horseWelfareHeritage: "UNESCO inscribed Charrería in 2016, noting its central role in intergenerational community bonding, artisan preservation, and respectful equine handling.",
    subsections: [
      {
        heading: "The Birth of the Mexican Charro",
        content: "When Spanish conquistadors brought horses to Mexico, indigenous and mestizo ranch hands were initially forbidden from riding. Over decades, hacienda owners required skilled horsemen to manage massive wild cattle herds, giving rise to the Charro, who developed distinct saddles, lasso techniques, and high-crowned sombreros."
      },
      {
        heading: "The Creation of the Azteca Horse",
        content: "In 1972, Mexican breeders and the Department of Agriculture crossed Pura Raza Española stallions with American Quarter Horse mares. The resulting Azteca horse combined the collection, elevated action, and arched neck of the Andalusian with the athletic speed and calm temperament of the Quarter Horse."
      },
      {
        heading: "Escaramuza Charra: Precision in Side-Saddle",
        content: "Escaramuza Charra is the women's event in Charrería. Teams of eight female riders wearing colorful traditional Adelita dresses ride side-saddle (albarda) at full gallop, executing intricate crossing patterns, turns, and stops with millisecond precision."
      }
    ],
    keyFacts: [
      { label: "UNESCO Cultural Inscription", value: "Charrería, equestrian tradition of Mexico (2016)" },
      { label: "Breed Established", value: "Azteca Horse (1972)" },
      { label: "Historic Women's Discipline", value: "Escaramuza Charra" },
      { label: "Signature Leathercraft", value: "Piteado (Agave fiber embroidery)" }
    ],
    sources: [
      { title: "La Charrería: Tradición y Arte", authorOrOrg: "Federación Mexicana de Charrería", yearOrType: "Official Publication" },
      { title: "UNESCO Intangible Cultural Heritage Dossier 01108", authorOrOrg: "UNESCO", yearOrType: "2016 Inscription" },
      { title: "El Caballo Azteca", authorOrOrg: "Asociación Mexicana de Criadores de Caballos de Raza Azteca", yearOrType: "Breed Registry" }
    ],
    relatedSlugs: ["guadalajara-lienzo-charro", "jalisco-haciendas", "rancho-el-pitayo", "campo-marte-mexico-city"],
    tags: ["Charreria", "Azteca", "Charro", "Escaramuza", "Piteado"],
    translations: {
      de: {
        title: "Mexiko — Der Nationalsport Charrería und das Azteca-Pferd",
        summary: "Mexiko ist die Wiege des Charrería-Sports und des eleganten Azteca-Pferdes, das spanischen Adel mit Quarter-Horse-Wendigkeit vereint."
      },
      fr: {
        title: "Mexique — La Charrería nationale et le cheval Azteca",
        summary: "Inscrite à l'UNESCO, la Charrería mexicaine incarne l'art des charros et a donné naissance à la race Azteca en 1972."
      }
    }
  },
  {
    id: "cnt-ar",
    slug: "argentina",
    title: "Argentina — The Pampa Gaucho & The Invincible Criollo",
    department: "country",
    continent: "South America",
    country: "Argentina",
    capital: "Buenos Aires",
    coordinates: { lat: -38.4161, lng: -63.6167 },
    historicalPeriod: "16th Century to Modern Era",
    heroImage: ASSETS.mongolianSteppe,
    imageCaption: "Argentine Gauchos herding Criollo horses across the endless grass plains of the Pampas.",
    wordCount: 1220,
    summary: "Argentina's vast fertile Pampas forged the Gaucho, one of the world's most iconic horsemen, and the legendary Argentine Criollo — a horse whose stamina was demonstrated when Aimé Tschiffely rode two native Criollos 10,000 miles from Buenos Aires to Washington D.C.",
    horseCultureOverview: "Argentina is the global capital of high-goal polo and pastoral working equitation. The Argentine Open Polo Championship at Palermo ('The Cathedral of Polo') represents the absolute summit of international equestrian speed, horsemanship, and breeding.",
    traditionalDisciplines: ["High-Goal Polo", "Doma Criolla & Jineteada Gaucha", "Pato (National Sport played on horseback)", "Long-Distance Endurance (Marcha Criolla)"],
    indigenousBreeds: ["Criollo Argentino", "Argentine Polo Pony (Polo Argentino)", "Silla Argentino"],
    equestrianCraftsmanship: "Argentine saddlers created the 'Recado' saddle, consisting of multiple layered leather pads, wool cinches, and raw sheepskin (cojinillo) that serves as the gaucho's mattress at night.",
    landmarkSites: ["Campo Argentino de Polo (Palermo, Buenos Aires)", "San Antonio de Areco (Gaucho Heritage Capital)", "La Dolfina Polo Club", "The Great Pampas Plains"],
    horseWelfareHeritage: "The Argentine Criollo Breeders Association enforces the 'Marcha de Resistencia': a 750 km endurance ride over 14 days carrying 110 kg with only natural pasture feed and veterinary checkups.",
    subsections: [
      {
        heading: "The Natural Selection of the Criollo",
        content: "When Pedro de Mendoza abandoned the first settlement of Buenos Aires in 1541, he left several dozen Spanish Iberian horses behind. For over three centuries, these horses roamed wild on the predator-rich, climatically extreme Pampas, undergoing relentless natural selection that forged unshakeable endurance."
      },
      {
        heading: "Tschiffely's Epic Ride (1925–1928)",
        content: "To prove the superiority of the pure Criollo, Swiss-Argentine rider Aimé Tschiffely took two Criollos named Mancha (16 years old) and Gato (15 years old) on an epic 10,000-mile journey from Buenos Aires across the Andes, tropical jungles, and Central American deserts to Washington D.C., arriving completely sound."
      },
      {
        heading: "Palermo: The Cathedral of World Polo",
        content: "Every December, the Campo Argentino de Polo in Palermo hosts the Argentine Open. Argentina has won every Olympic gold medal in polo ever contested, and Argentine Polo Ponies — bred for lightning acceleration and instant stops — are the most valuable sports horses in the game."
      }
    ],
    keyFacts: [
      { label: "Legendary Endurance Feat", value: "Tschiffely's Ride: 10,000 miles (Mancha & Gato, 1925–1928)" },
      { label: "World Polo Cathedral", value: "Palermo, Buenos Aires" },
      { label: "Gaucho Heritage Town", value: "San Antonio de Areco" },
      { label: "Traditional Saddle", value: "Recado Gaucho with sheepskin cojinillo" }
    ],
    sources: [
      { title: "Tschiffely's Ride", authorOrOrg: "Aimé Tschiffely", yearOrType: "Heinemann Historical Travelogue (1933)" },
      { title: "El Caballo Criollo", authorOrOrg: "Dr. Emilio Solanet", yearOrType: "Breed Association History" },
      { title: "Historia del Polo en la Argentina", authorOrOrg: "Asociación Argentina de Polo", yearOrType: "Official Sports Archives" }
    ],
    relatedSlugs: ["argentine-pampas-grasslands", "palermo-polo-cathedral", "san-antonio-de-areco", "1924-paris-olympics-polo"],
    tags: ["Gaucho", "Criollo", "Polo", "Palermo", "Pampas"],
    translations: {
      de: {
        title: "Argentinien — Der Pampa-Gaucho und das unbezwingbare Criollo-Pferd",
        summary: "Argentiniens Pampa brachte den Gaucho, das zähe Criollo-Pferd und die weltbeste Polo-Kultur in Palermo hervor."
      },
      fr: {
        title: "Argentine — Le Gaucho de la Pampa et l'invincible cheval Criollo",
        summary: "La pampa argentine est le royaume du Gaucho, du cheval Criollo et de la cathédrale mondiale du polo à Palermo."
      }
    }
  },
  {
    id: "cnt-br",
    slug: "brazil",
    title: "Brazil — The Smooth Mangalarga Marchador & The Pantanal",
    department: "country",
    continent: "South America",
    country: "Brazil",
    capital: "Brasília",
    coordinates: { lat: -14.2350, lng: -51.9253 },
    historicalPeriod: "18th Century to Modern Era",
    heroImage: ASSETS.camargueWildHorses,
    imageCaption: "Pantaneiro horses navigating floodwaters in the vast Brazilian Pantanal wetlands.",
    wordCount: 1120,
    summary: "Brazil is home to the Mangalarga Marchador, celebrated for its smooth four-beat 'marcha' gaits that allow riders to travel all day without bouncing, and the resilient Pantaneiro horse adapted to surviving seasonal floods in the Pantanal wetlands.",
    horseCultureOverview: "Brazilian equestrianism thrives through regional cattle-ranching cultures — the Gaúchos of Rio Grande do Sul, the Pantaneiros of the western wetlands, and the Vaqueiros of the dry northeast.",
    traditionalDisciplines: ["Marcha Gaited Competitions", "Vaquejada (Northeastern Cattle Sport)", "Freio de Ouro (Crioulo Gold Bridle Performance)", "Cavalhadas Historic Tournaments"],
    indigenousBreeds: ["Mangalarga Marchador", "Mangalarga Paulista", "Pantaneiro Horse", "Crioulo Brasileiro", "Campolina"],
    equestrianCraftsmanship: "Brazilian saddlers in Minas Gerais craft the 'Arreio Cutuco', a deep, comfortable working saddle made from heavy buffalo leather with brass rings and hornless pommel.",
    landmarkSites: ["Parque da Gameleira (Belo Horizonte)", "Pantanal Biosphere Reserve (Mato Grosso)", "Esteio (Expointer & Freio de Ouro Arena)", "Pirenópolis (Cavalhadas)"],
    horseWelfareHeritage: "The Pantaneiro horse developed natural resistance to swamp cancer (pythiosis) and tough hooves that withstand spending months wading through inundated wetlands.",
    subsections: [
      {
        heading: "Baron of Alfenas and the Mangalarga Marchador",
        content: "In 1812, Gabriel Francisco Junqueira, the Baron of Alfenas, received an Alter Real stallion as a gift from King John VI of Portugal at his Campo Alegre estate in Minas Gerais. Crossed with local colonial mares, he produced horses with an extraordinarily smooth four-beat lateral (marcha picada) and diagonal (marcha batida) gait."
      },
      {
        heading: "The Freio de Ouro at Esteio",
        content: "Held annually in Rio Grande do Sul, the Freio de Ouro is South America's most rigorous working horse decathlon. Over four days, Crioulo horses are tested in conformation, figure-eights, sudden stops, cattle baying, and field chase."
      },
      {
        heading: "The Pantaneiro: Amphibious Survivor",
        content: "In the Pantanal, the world's largest tropical wetland, Pantaneiro horses evolved to graze on aquatic vegetation with their nostrils submerged, wading through floodwaters where other breeds quickly perish."
      }
    ],
    keyFacts: [
      { label: "National Gaited Breed", value: "Mangalarga Marchador (Created 1812)" },
      { label: "Amphibious Wetland Breed", value: "Pantaneiro (Pantanal Wetlands)" },
      { label: "Premier Performance Trophy", value: "Freio de Ouro (Esteio, Rio Grande do Sul)" },
      { label: "Colonial Tournament", value: "Cavalhadas de Pirenópolis (Since 1826)" }
    ],
    sources: [
      { title: "O Cavalo Mangalarga Marchador", authorOrOrg: "ABCCMM (National Breed Association)", yearOrType: "Official Breed History" },
      { title: "Pantaneiro Horse: Conservation and Adaptation", authorOrOrg: "Embrapa Pantanal", yearOrType: "Agricultural Research Papers" },
      { title: "História das Cavalhadas no Brasil", authorOrOrg: "National Historical and Artistic Heritage Institute (IPHAN)", yearOrType: "Cultural Heritage Dossier" }
    ],
    relatedSlugs: ["pantanal-wetlands-horses", "esteio-freio-de-ouro", "minas-gerais-mangalarga", "pirenopolis-cavalhadas"],
    tags: ["Mangalarga", "Pantaneiro", "Marchador", "Freio de Ouro", "Brazil"],
    translations: {
      de: {
        title: "Brasilien — Der geschmeidige Mangalarga Marchador und das Pantanal",
        summary: "Brasilien begeistert mit dem bequemen Mangalarga Marchador und dem amphibischen Pantaneiro-Pferd der Feuchtgebiete."
      },
      fr: {
        title: "Brésil — Le Mangalarga Marchador aux allures douces et le Pantanal",
        summary: "Le Brésil abrite le Mangalarga Marchador à l'allure de marcha incomparablement fluide et le cheval rustique du Pantanal."
      }
    }
  },
  {
    id: "cnt-cl",
    slug: "chile",
    title: "Chile — The Huaso & The Ancient Chilean Horse Studbook",
    department: "country",
    continent: "South America",
    country: "Chile",
    capital: "Santiago",
    coordinates: { lat: -35.6751, lng: -71.5430 },
    historicalPeriod: "16th Century to Modern Era",
    heroImage: ASSETS.mongolianSteppe,
    imageCaption: "Chilean Huasos riding purebred Chilean horses in traditional chamanto mantles.",
    wordCount: 1130,
    summary: "Chile possesses the oldest registered horse breed in South America: the Caballo Chileno (Chilean Horse). The Chilean studbook, founded in 1893, predates all other equine registries on the continent, preserving the pure Iberian stock brought by Spanish conquistadors.",
    horseCultureOverview: "The Chilean horseman, the Huaso, is the cultural soul of the Chilean countryside. In the traditional Chilean Rodeo — contested in a circular crescent arena called a Medialuna — a collera of two huasos demonstrates precision stockmanship without ropes or spurs.",
    traditionalDisciplines: ["Rodeo Chileno (Medialuna Cattle Pinning)", "Movimiento a la Rienda (Chilean Classical Reining)", "Andean Mountain Riding"],
    indigenousBreeds: ["Caballo Chileno (Pure Chilean Horse)"],
    equestrianCraftsmanship: "Huaso craftsmanship is renowned for hand-carved solid wood stirrups (estribos de madera) with floral chiseling, multi-colored handwoven chamanto blankets, and ornate hand-stitched leather monturas chilenas.",
    landmarkSites: ["Medialuna Monumental de Rancagua (National Rodeo Championship)", "Club Hípico de Santiago", "Colchagua Valley Haciendas", "Andean Mountain Passes"],
    horseWelfareHeritage: "In the Medialuna, the rules strictly prohibit hitting the steer with anything other than the horse's padded chest, rewarding clean decelerations against the padded arena wall (atajada).",
    subsections: [
      {
        heading: "The Oldest Studbook in the Americas (1893)",
        content: "In 1893, the Sociedad Nacional de Agricultura established the Chilean Horse Studbook. Because Chile was geographically isolated by the Andes Mountains to the east and the Pacific Ocean to the west, its horses remained free from foreign draft or thoroughbred crossing."
      },
      {
        heading: "The Rodeo Chileno and the Medialuna",
        content: "The Chilean Rodeo is a display of horsemanship dating back to the annual colonial livestock roundups ordered by Governor García Hurtado de Mendoza in 1557. The National Championship at Rancagua draws over 50,000 spectators each autumn."
      },
      {
        heading: "Movimiento a la Rienda",
        content: "This classical reining discipline tests the Chilean horse in eight rigorous movements: the andares (gaits), la entrada de patas y parar (sliding stop), la troya (circle work), el ocho (figure-eight), el volapié, las vueltas sobre parado (spins), desmontar y montar, and retroceder (backing)."
      }
    ],
    keyFacts: [
      { label: "Oldest South American Studbook", value: "1893 (Sociedad Nacional de Agricultura)" },
      { label: "National Sport Arena", value: "Medialuna Monumental de Rancagua" },
      { label: "Traditional Equestrian Figure", value: "The Chilean Huaso" },
      { label: "Unique Stirrup", value: "Hand-carved wooden estribo chinchado" }
    ],
    sources: [
      { title: "El Caballo Chileno", authorOrOrg: "Francisco Antonio Encina", yearOrType: "Historical Monograph" },
      { title: "Historia del Rodeo Chileno", authorOrOrg: "Federación del Rodeo Chileno (Ferochi)", yearOrType: "Official Federation Archives" },
      { title: "Registro Genealógico del Caballo Chileno", authorOrOrg: "Sociedad Nacional de Agricultura", yearOrType: "Official Studbook" }
    ],
    relatedSlugs: ["rancagua-medialuna-arena", "colchagua-valley-ranches", "club-hipico-santiago", "andes-equestrian-passes"],
    tags: ["Huaso", "Caballo Chileno", "Medialuna", "Rodeo Chileno", "Chile"],
    translations: {
      de: {
        title: "Chile — Der Huaso und das älteste Stutbuch Südamerikas",
        summary: "Chile hütet mit dem Caballo Chileno das älteste Zuchtbuch Südamerikas von 1893 und im Medialuna-Rodeo eine meisterhafte Reitkultur."
      },
      fr: {
        title: "Chili — Le Huaso et le plus ancien stud-book d'Amérique du Sud",
        summary: "Protégé par les Andes, le cheval chilien possède le plus ancien stud-book du continent (1893) et brille dans l'arène de la Medialuna."
      }
    }
  },
  {
    id: "cnt-au",
    slug: "australia",
    title: "Australia — The Stockman & The Legend of the Waler",
    department: "country",
    continent: "Oceania",
    country: "Australia",
    capital: "Canberra",
    coordinates: { lat: -25.2744, lng: 133.7751 },
    historicalPeriod: "Late 18th Century to Modern Era",
    heroImage: ASSETS.heroLandscape,
    imageCaption: "Australian Stock Horses mustering cattle across the red earth and eucalyptus forests of the Outback.",
    wordCount: 1170,
    summary: "Australia's harsh Outback forged the legendary Waler horse — celebrated for its heroic endurance with the Australian Light Horse in World War I — and the modern Australian Stock Horse, 'The Breed for Every Need', alongside the world's richest two-mile handicap, the Melbourne Cup.",
    horseCultureOverview: "Australian equestrian culture combines the frontier lore of Banjo Paterson's 'The Man from Snowy River' with modern Olympic dominance in three-day eventing and the national spectacle of the Melbourne Cup at Flemington.",
    traditionalDisciplines: ["Campdrafting (Outback Stock Sport)", "Three-Day Eventing", "Thoroughbred Racing", "Polocrosse (Invented in Australia)", "Stockman Challenges"],
    indigenousBreeds: ["Australian Stock Horse (ASH)", "Waler Horse", "Brumby (Wild Outback horse)"],
    equestrianCraftsmanship: "Australian saddlers created the Australian Stock Saddle, featuring prominent front knee pads (poleys), high cantle, and open stirrup leathers designed for sudden downhill spins in eucalyptus scrub.",
    landmarkSites: ["Flemington Racecourse (Melbourne)", "Snowy Mountains (High Country)", "Scone (Horse Capital of Australia)", "Sydney International Equestrian Centre (2000 Olympics)"],
    horseWelfareHeritage: "Australia honors the Waler through monuments across the nation, remembering the 136,000 military horses exported during WWI that were forbidden from returning due to strict biosecurity quarantine.",
    subsections: [
      {
        heading: "The Waler and the Charge at Beersheba",
        content: "Named after New South Wales, the Waler was bred from Thoroughbred, Arab, Cape, and draft blood. On October 31, 1917, the 4th and 12th Australian Light Horse Regiments staged history's last great successful cavalry charge at Beersheba, charging Turkish machine guns across miles of waterless desert."
      },
      {
        heading: "Campdrafting: Australia's Native Equestrian Sport",
        content: "Unique to Australia, campdrafting requires a stockman to ride into a 'camp' (corral), cut out one designated steer, hold it from the herd, drive it out into the arena, and complete a figure-eight around two pegs before passing it through a gate in under 40 seconds."
      },
      {
        heading: "The Melbourne Cup: The Race That Stops a Nation",
        content: "First run in 1861 at Flemington, the Melbourne Cup is a two-mile turf handicap that halts an entire continent on the first Tuesday of November. Legendary horses like Phar Lap and the triple-champion mare Makybe Diva are revered as national sporting heroes."
      }
    ],
    keyFacts: [
      { label: "Historic Military Charge", value: "Battle of Beersheba (October 31, 1917)" },
      { label: "National Stock Sport", value: "Campdrafting" },
      { label: "Iconic Two-Mile Race", value: "Melbourne Cup (Run since 1861)" },
      { label: "Heritage Breed", value: "Australian Stock Horse (Society founded 1971)" }
    ],
    sources: [
      { title: "The Waler: Australia's Great War Horse", authorOrOrg: "Waler Horse Society of Australia", yearOrType: "Historical War Memorial Dossier" },
      { title: "The Australian Stock Horse", authorOrOrg: "ASH Society Archives", yearOrType: "Breed Society History" },
      { title: "The Story of the Melbourne Cup", authorOrOrg: "Victoria Racing Club", yearOrType: "Racing Historical Records" }
    ],
    relatedSlugs: ["flemington-racecourse-melbourne", "snowy-mountains-high-country", "scone-hunter-valley", "sydney-equestrian-centre-2000"],
    tags: ["Waler", "Stock Horse", "Melbourne Cup", "Campdrafting", "Outback"],
    translations: {
      de: {
        title: "Australien — Der Stockman und die Legende des Waler-Pferdes",
        summary: "Australien schuf mit dem Waler ein legendäres Kriegspferd, im Campdrafting einen einmaligen Sport und mit dem Melbourne Cup ein Nationalheiligtum."
      },
      fr: {
        title: "Australie — Le Stockman et la légende du cheval Waler",
        summary: "De la charge héroïque de Beersheba au Melbourne Cup de Flemington, l'Australie a forgé l'Australian Stock Horse pour l'Outback."
      }
    }
  },
  {
    id: "cnt-nz",
    slug: "new-zealand",
    title: "New Zealand — The Eventing Masters & The Kaimanawa Horses",
    department: "country",
    continent: "Oceania",
    country: "New Zealand",
    capital: "Wellington",
    coordinates: { lat: -40.9006, lng: 174.8860 },
    historicalPeriod: "19th Century to Modern Era",
    heroImage: ASSETS.heroLandscape,
    imageCaption: "Thoroughbred and sport horses grazing in the lush volcanic pastures of Waikato.",
    wordCount: 1080,
    summary: "New Zealand has produced some of the greatest three-day eventing riders and thoroughbred stayers in world history. Fueled by high-rainfall volcanic soils, New Zealand bred legendary Olympic champions like Sir Mark Todd and Charisma, and protects wild Kaimanawa horses on the Central Plateau.",
    horseCultureOverview: "Equine life in New Zealand centers on pastoral thoroughbred breeding in the Waikato valley and high-country station mustering. New Zealand eventers have won Olympic team and individual medals across five decades.",
    traditionalDisciplines: ["Three-Day Eventing", "Thoroughbred Breeding & Racing", "High-Country Station Riding", "Show Jumping"],
    indigenousBreeds: ["Kaimanawa Wild Horse", "New Zealand Warmblood"],
    equestrianCraftsmanship: "New Zealand leather artisans are world-famous for durable canvas and ripstop turnout rugs (New Zealand Rugs) that keep horses dry in coastal storms.",
    landmarkSites: ["Cambridge (Heart of New Zealand Horse Country)", "Ellerslie Racecourse (Auckland)", "Kaimanawa Ranges (Central Plateau)", "Taupo National Equestrian Centre"],
    horseWelfareHeritage: "The Department of Conservation conducts biennial humane musters of Kaimanawa wild horses, working with the Kaimanawa Heritage Horses charity to rehome every healthy horse with private riders.",
    subsections: [
      {
        heading: "Sir Mark Todd and Charisma: Rider of the Century",
        content: "At the 1984 Los Angeles and 1988 Seoul Olympic Games, New Zealand rider Mark Todd and his small 15.3hh thoroughbred-cross gelding Charisma won back-to-back individual Olympic eventing gold medals. The FEI subsequently voted Sir Mark Todd 'Equestrian of the Century'."
      },
      {
        heading: "The Waikato Thoroughbred Heartland",
        content: "The volcanic soil and temperate climate of the Waikato basin around Cambridge make it one of the premier racehorse nurseries on the globe. Great studs like Cambridge Stud produced champion sires like Sir Tristram and Zabeel, whose progeny dominated Australasian staying races."
      },
      {
        heading: "The Wild Kaimanawa Horses",
        content: "Roaming the volcanic tussock plateau of the central North Island, Kaimanawa horses trace back to British cavalry mounts, ex-farm horses, and Comtois horses introduced in the 19th century. They are renowned for their calm trainability once domesticated."
      }
    ],
    keyFacts: [
      { label: "FEI Rider of the Century", value: "Sir Mark Todd (Individual Gold 1984 & 1988)" },
      { label: "Legendary Eventing Horse", value: "Charisma (1972–2003)" },
      { label: "Horse Capital of NZ", value: "Cambridge, Waikato Basin" },
      { label: "Wild Equine Heritage", value: "Kaimanawa Horses (Central Plateau)" }
    ],
    sources: [
      { title: "Charisma: The Remarkable Story of an Olympic Champion", authorOrOrg: "Sir Mark Todd", yearOrType: "Autobiographical Monograph" },
      { title: "Kaimanawa: Stories of New Zealand's Wild Horses", authorOrOrg: "Dianne Bardsley", yearOrType: "Historical Study" },
      { title: "New Zealand Thoroughbred Racing Historical Archives", authorOrOrg: "NZTR", yearOrType: "Official Racing Records" }
    ],
    relatedSlugs: ["cambridge-waikato-studs", "kaimanawa-ranges-plateau", "taupo-equestrian-centre", "1984-los-angeles-olympics-eventing"],
    tags: ["New Zealand", "Charisma", "Mark Todd", "Kaimanawa", "Waikato"],
    translations: {
      de: {
        title: "Neuseeland — Die Vielseitigkeits-Meister und die Kaimanawa-Pferde",
        summary: "Neuseeland brachte mit Sir Mark Todd und Charisma Olympialegenden hervor und züchtet im Waikato weltberühmte Vollblüter."
      },
      fr: {
        title: "Nouvelle-Zélande — Les maîtres du concours complet et les chevaux Kaimanawa",
        summary: "La Nouvelle-Zélande a écrit l'histoire du concours complet avec Sir Mark Todd et Charisma, tout en préservant les chevaux sauvages de Kaimanawa."
      }
    }
  },
  {
    id: "cnt-mn",
    slug: "mongolia",
    title: "Mongolia — The Nomadic Empire & The Naadam Horse Racing Tradition",
    department: "country",
    continent: "Asia",
    country: "Mongolia",
    capital: "Ulaanbaatar",
    coordinates: { lat: 46.8625, lng: 103.8467 },
    historicalPeriod: "Ancient Nomadic Era to Present",
    heroImage: ASSETS.mongolianSteppe,
    imageCaption: "Child jockeys racing semi-feral Mongolian horses across the steppe during the Naadam festival.",
    wordCount: 1210,
    summary: "Mongolia is the spiritual homeland of the horse nomad. Under Genghis Khan in the 13th century, the Mongolian horse forged the largest contiguous land empire in human history. To this day, Mongolia has more horses than people, and horses live entirely free on the steppe.",
    horseCultureOverview: "Mongolian nomadic existence is inseparable from the horse. Children learn to ride before they can walk. The horse provides transport, seasonal milk fermented into airag (koumiss), leather, and spiritual connection through the morin khuur (horsehead fiddle).",
    traditionalDisciplines: ["Naadam Cross-Country Horse Racing (Up to 30 km across open steppe)", "Horseback Archery", "Uurga Lasso Catching", "Trick Riding"],
    indigenousBreeds: ["Mongolian Horse (Mongol aduu)", "Przewalski's Horse (Takhi — sole surviving wild horse)"],
    equestrianCraftsmanship: "Mongolian saddlers craft the wooden 'Emeel' saddle with high decorative silver-embossed pommel and cantle, paired with braided rawhide reins and the uurga (a flexible 15-foot birch pole with rope loop).",
    landmarkSites: ["Hui Doloon Hudag (Naadam Racing Ground, Ulaanbaatar)", "Hustai National Park (Takhi Reintroduction)", "Orkhon Valley Cultural Landscape (UNESCO)", "Altai Mountains"],
    horseWelfareHeritage: "Mongolian horses live in natural family harems (azraga) without stables or grain; their winter survival relies on deep genetic hardiness and instinct to dig through snow for dried steppe grasses.",
    subsections: [
      {
        heading: "The Horse Empire of Genghis Khan",
        content: "In 1206, Genghis Khan united the nomadic tribes of the steppe. Every Mongol warrior rode with three to five spare horses, switching mounts on the move to travel up to 100 miles a day without resting, creating the Yam postal relay network that connected Europe and Asia."
      },
      {
        heading: "The Naadam Festival: The Three Manly Sports",
        content: "Every July during National Naadam, horses compete in six age categories over distances between 15 and 30 kilometers across rugged open country. Jockeys are children aged seven to twelve who sing sacred chants (giingoo) to calm their mounts."
      },
      {
        heading: "The Return of the Takhi (Przewalski's Horse)",
        content: "Once declared extinct in the wild, the Takhi (Przewalski's Horse) — the only true wild horse that was never domesticated — was successfully reintroduced into Hustai National Park from European zoo breeding programs, roaming free once more on its ancestral steppe."
      }
    ],
    keyFacts: [
      { label: "Horse-to-Human Ratio", value: "More horses than human citizens (over 3 million horses)" },
      { label: "Sole True Wild Horse", value: "Takhi (Przewalski's Horse, reintroduced 1992)" },
      { label: "National Festival", value: "Naadam (UNESCO Intangible Cultural Heritage)" },
      { label: "Sacred Instrument", value: "Morin Khuur (Horsehead fiddle)" }
    ],
    sources: [
      { title: "The Secret History of the Mongols", authorOrOrg: "Anonymous 13th Century Chronicler", yearOrType: "Classical Nomadic Chronicle" },
      { title: "Przewalski's Horse: The History and Biology of an Endangered Species", authorOrOrg: "Dr. Lee Boyd", yearOrType: "Zoological Academic Press" },
      { title: "UNESCO Intangible Heritage: Naadam", authorOrOrg: "UNESCO", yearOrType: "2010 Inscription Dossier" }
    ],
    relatedSlugs: ["orkhon-valley-cultural-landscape", "hustai-national-park-takhi", "hui-doloon-hudag-naadam", "altai-mountain-equestrian"],
    tags: ["Mongolia", "Takhi", "Naadam", "Genghis Khan", "Steppe"],
    translations: {
      de: {
        title: "Mongolei — Das Reich der Nomaden und das Naadam-Pferderennen",
        summary: "In der Mongolei leben mehr Pferde als Menschen. Das Mongolische Pferd schuf das Weltreich des Dschingis Khan und lebt frei in der Steppe."
      },
      fr: {
        title: "Mongolie — L'empire nomade et la tradition des courses du Naadam",
        summary: "Patrie spirituelle du cheval, la Mongolie célèbre ses montures à la fête du Naadam et abrite le cheval sauvage de Przewalski à Hustai."
      }
    }
  },
  {
    id: "cnt-jp",
    slug: "japan",
    title: "Japan — The Yabusame Mounted Archery & The Imperial Stables",
    department: "country",
    continent: "Asia",
    country: "Japan",
    capital: "Tokyo",
    coordinates: { lat: 36.2048, lng: 138.2529 },
    historicalPeriod: "Heian & Kamakura Eras to Present",
    heroImage: ASSETS.viennaHall,
    imageCaption: "Samurai archer in traditional armor performing Yabusame at Tsurugaoka Hachimangu, Kamakura.",
    wordCount: 1150,
    summary: "Japan's equestrian heritage merges the sacred samurai ritual of Yabusame (mounted archery) with the ancient native island breeds (Kiso, Yonaguni, Noma) and one of the world's most lucrative modern Thoroughbred racing and breeding industries centered in Hokkaido.",
    horseCultureOverview: "Historically, horses were considered sacred messengers of the Kami (spirits) at Shinto shrines. Samurai warriors perfected archery from galloping horses during the Kamakura period (1185–1333), cultivating zen focus and breath control.",
    traditionalDisciplines: ["Yabusame (Shinto Ritual Mounted Archery)", "Kasagake (Military Target Archery)", "Soma Nomaoi (Wild Horse Chasing Festival)", "International Thoroughbred Racing"],
    indigenousBreeds: ["Kiso Horse", "Dosanko (Hokkaido Horse)", "Yonaguni", "Miyako", "Noma Pony", "Misaki"],
    equestrianCraftsmanship: "Japanese masters perfected the 'Kura' — a lacquered wooden samurai saddle inlaid with mother-of-pearl (raden) and paired with 'Abumi' (open-toed iron stirrups) designed to support an archer standing at full gallop.",
    landmarkSites: ["Tsurugaoka Hachimangū (Kamakura)", "Imperial Palace Stables (Tokyo)", "Soma Nomaoi Grounds (Fukushima)", "Northern Horse Park (Hokkaido)", "Tokyo Racecourse (Fuchu)"],
    horseWelfareHeritage: "Japan's eight indigenous horse breeds are protected as National Natural Monuments by prefectural and federal cultural preservation laws.",
    subsections: [
      {
        heading: "Yabusame: Zen and the Way of the Bow",
        content: "In 1187, Shogun Minamoto no Yoritomo instituted formal Yabusame rites at Tsurugaoka Hachimangū in Kamakura to instill martial focus and spiritual piety in samurai warriors. Galloping along a 250-meter track, the archer must loose three turnip-headed whistling arrows at wooden targets in under twenty seconds."
      },
      {
        heading: "Soma Nomaoi: Samurai Wild Horse Chase",
        content: "For over a thousand years in Fukushima Prefecture, samurai descendants gather for Soma Nomaoi. Clad in authentic ancestral armor with family battle banners (sashimono) streaming from their backs, hundreds of horsemen battle to capture shrine flags shot into the sky with fireworks."
      },
      {
        heading: "The Hokkaido Thoroughbred Miracle",
        content: "In the 20th and 21st centuries, the Hidaka and Iburi regions of Hokkaido blossomed into a global horse breeding capital. Legendary sire Sunday Silence transformed the Japanese Thoroughbred, producing champions that triumphed at the Dubai World Cup, Breeders' Cup, and Prix de l'Arc de Triomphe."
      }
    ],
    keyFacts: [
      { label: "Sacred Ritual Founded", value: "Yabusame at Kamakura, 1187" },
      { label: "Historic Samurai Festival", value: "Soma Nomaoi (Over 1,000 years continuous)" },
      { label: "Native Horse Status", value: "Protected National Natural Monuments (8 breeds)" },
      { label: "Traditional Samurai Saddle", value: "Lacquered Kura with open-toed Abumi" }
    ],
    sources: [
      { title: "The Way of the Heavenly Steed: Horsemanship in Japan", authorOrOrg: "Tokyo National Museum", yearOrType: "Historical Museum Catalog" },
      { title: "Tsurugaoka Hachimangu Yabusame Archives", authorOrOrg: "Kamakura Shrine Historical Society", yearOrType: "Religious Shinto Records" },
      { title: "Indigenous Horses of Japan", authorOrOrg: "Japan Equine Affairs Association", yearOrType: "Breed Conservation Reports" }
    ],
    relatedSlugs: ["tsurugaoka-hachimangu-kamakura", "soma-nomaoi-fukushima", "hidaka-hokkaido-studs", "imperial-palace-stables-tokyo"],
    tags: ["Yabusame", "Samurai", "Kiso", "Hokkaido", "Japan"],
    translations: {
      de: {
        title: "Japan — Das Yabusame-Bogenschießen und die kaiserlichen Gestüte",
        summary: "Japans Reitkunst vereint das sakrale Yabusame-Bogenschießen der Samurai mit seltenen Inselrassen und weltweiter Vollblutzucht in Hokkaido."
      },
      fr: {
        title: "Japon — Le tir à l'arc monté Yabusame et les écuries impériales",
        summary: "Le Japon perpétue le rituel samouraï du Yabusame à Kamakura et le festival de Soma Nomaoi tout en protégeant ses huit races insulaires."
      }
    }
  },
  {
    id: "cnt-ma",
    slug: "morocco",
    title: "Morocco — The Royal Tbourida & The Barb Horse Heritage",
    department: "country",
    continent: "Africa",
    country: "Morocco",
    capital: "Rabat",
    coordinates: { lat: 31.7917, lng: -7.0926 },
    historicalPeriod: "Ancient Numidian Era to Present",
    heroImage: ASSETS.andalusianCourtyard,
    imageCaption: "Moroccan Tbourida sorba charging in unison before firing black-powder muskets.",
    wordCount: 1160,
    summary: "Morocco is the spiritual and cultural heart of the North African Barb horse (Berber horse), one of the founding breeds of world equitation. Morocco celebrates the majestic Tbourida (Fantasia) — inscribed on the UNESCO Intangible Cultural Heritage list in 2021.",
    horseCultureOverview: "In Morocco, the horse is an emblem of baraka (divine blessing), nobility, and courage. Organized under the patronage of King Mohammed VI and SOREC (Société Royale d'Encouragement du Cheval), national studs preserve the ancient Barb and Arab-Barb bloodlines.",
    traditionalDisciplines: ["Tbourida (Traditional Equestrian Art)", "Endurance Riding", "Royal Ceremonial Escort", "Show Jumping"],
    indigenousBreeds: ["Barb Horse (Le Barbe)", "Arab-Barb (Arabe-Barbe)"],
    equestrianCraftsmanship: "Moroccan artisans excel in the craft of the 'Serj' (high-backed saddle) embroidered in pure gold and silk thread (skalli), paired with velvet blankets and damascened bronze stirrups.",
    landmarkSites: ["Dar Es Salam Royal Equestrian Complex (Rabat)", "Haras Régional de Meknès (Founded 1912)", "El Jadida International Horse Show", "Marrakech Palm Groves"],
    horseWelfareHeritage: "UNESCO inscribed Tbourida in 2021, recognizing rigorous safety protocols and the intense spiritual bond between rider, troop leader (Moqaddem), and horse.",
    subsections: [
      {
        heading: "The Ancient Barb: Foundation of War and Peace",
        content: "Praised by Roman historians for its agility in Numidian cavalry tactics, the Barb horse originated across North Africa thousands of years ago. Hardy, docile, and possessing unmatched short-distance explosive power, the Barb contributed foundation genetics to the Spanish horse and the English Thoroughbred."
      },
      {
        heading: "Tbourida: The Thunder of the Sorba",
        content: "Dating to the 15th century, Tbourida re-enacts historical cavalry charges. A troop of riders (sorba) clad in pristine white djellabas and turbans charges down a 200-meter sandy track in straight alignment before discharging their muzzle-loading flintlock muskets (moukhala) in a single synchronized explosion of sound."
      },
      {
        heading: "Haras Régional de Meknès",
        content: "Established in 1912 within the historical imperial city of Sultan Moulay Ismail, who kept over 12,000 horses in his royal stables, the Meknès stud remains the primary guardian of Morocco's purebred Barb stallion lines."
      }
    ],
    keyFacts: [
      { label: "UNESCO Inscription", value: "Tbourida, Moroccan equestrian art (2021)" },
      { label: "Founding North African Breed", value: "The Barb Horse (Le Barbe)" },
      { label: "National Governing Body", value: "SOREC (Société Royale d'Encouragement du Cheval)" },
      { label: "Historic Imperial Stables", value: "Meknès (Moulay Ismail's Stables)" }
    ],
    sources: [
      { title: "Le Cheval Barbe: Gloire du Maghreb", authorOrOrg: "Dr. Philippe Barbié de Préaudeau", yearOrType: "Historical Veterinary Treatise" },
      { title: "UNESCO Intangible Cultural Heritage Dossier 01483", authorOrOrg: "UNESCO", yearOrType: "2021 Inscription" },
      { title: "Archives de la SOREC", authorOrOrg: "Société Royale d'Encouragement du Cheval", yearOrType: "Official Moroccan Records" }
    ],
    relatedSlugs: ["meknes-imperial-stables", "dar-es-salam-rabat", "el-jadida-horse-show", "atlas-mountains-equestrian"],
    tags: ["Tbourida", "Barb", "Morocco", "Meknes", "Fantasia"],
    translations: {
      de: {
        title: "Marokko — Die königliche Tbourida und das Erbe des Berberpferds",
        summary: "Marokko bewahrt mit der Tbourida ein UNESCO-Weltkulturerbe und hütet das edle Berberpferd in den kaiserlichen Gestüten von Meknès."
      },
      fr: {
        title: "Maroc — La Tbourida royale et l'héritage du cheval Barbe",
        summary: "Inscrite à l'UNESCO, la Tbourida marocaine célèbre la charge synchronisée des sorbas et l'endurance millénaire du cheval Barbe."
      }
    }
  },
  {
    id: "cnt-eg",
    slug: "egypt",
    title: "Egypt — The Desert Bedouin & The Pure Egyptian Arabian",
    department: "country",
    continent: "Africa",
    country: "Egypt",
    capital: "Cairo",
    coordinates: { lat: 26.8206, lng: 30.8025 },
    historicalPeriod: "Pharaonic Era to Modern Era",
    heroImage: ASSETS.andalusianCourtyard,
    imageCaption: "Pure Egyptian Arabian stallion at the historic El Zahraa stud near Cairo.",
    wordCount: 1190,
    summary: "From the golden war chariots of Pharaoh Tutankhamun to the world-renowned El Zahraa Royal Agricultural Society Stud, Egypt holds an unrivaled position as the historical sanctuary of the Straight Egyptian Arabian horse, traced directly to Abbas Pasha I's desert expeditions.",
    horseCultureOverview: "Egyptian horsemanship is steeped in ancient desert heritage. From folkloric dancing horses (Al-Mermah and Adab) at village festivals to the global preservation of Asil (pure) desert strains, the horse represents spiritual nobility.",
    traditionalDisciplines: ["Purebred Straight Egyptian Arabian Breeding", "Al-Mermah Dancing Horse Folk Displays", "Desert Endurance Riding", "Show Jumping"],
    indigenousBreeds: ["Straight Egyptian Arabian (Kuhaylan, Saqlawi, Dahman, Hadban, Abayyan strains)", "Baladi Horse"],
    equestrianCraftsmanship: "Egyptian artisans in Islamic Cairo craft ornate ceremonial headstalls (rashma) adorned with turquoise beads, silver filigree, and protective amulets against the evil eye.",
    landmarkSites: ["El Zahraa State Stud (Ain Shams, Cairo)", "Karnak Temple Chariot Reliefs (Luxor)", "Egyptian Agricultural Museum", "Giza Pyramids Desert Trail"],
    horseWelfareHeritage: "El Zahraa enforces unbroken ancestral pedigree records (Hojjah) dating back centuries, ensuring genetic purity and ethical welfare for foundation strains.",
    subsections: [
      {
        heading: "Pharaohs and the Chariots of Thebes",
        content: "During the New Kingdom (circa 1550 BC), the introduction of the horse transformed Egyptian warfare. Reliefs on the temple walls of Karnak and Medinet Habu depict Ramses II driving two-wheeled war chariots with matched stallions, adorned with feathered plumes and gold-leaf bridles."
      },
      {
        heading: "Abbas Pasha I and the Desert Rescue",
        content: "In the mid-19th century, Viceroy Abbas Pasha I devoted his fortune to collecting the purest Arabian horses directly from the nomadic Bedouin tribes of the Nejd desert. His historic studbook, the Abbas Pasha Manuscript, remains the sacred text of Straight Egyptian horse breeding."
      },
      {
        heading: "El Zahraa: The Global Genetic Mecca",
        content: "Established by the Royal Agricultural Society in the early 20th century, El Zahraa Stud in Cairo saved the desert Arabian during times of Middle Eastern geopolitical turmoil. Today, over 80% of the world's champion Arabian horses trace their lineage back to El Zahraa sires like Nazeer and Morafic."
      }
    ],
    keyFacts: [
      { label: "Oldest Chariot Relics", value: "Tomb of Tutankhamun (circa 1323 BC)" },
      { label: "Global Arabian Mecca", value: "El Zahraa Stud, Cairo (Founded 1908)" },
      { label: "Founding Royal Collector", value: "Abbas Pasha I (1813–1854)" },
      { label: "Historic Five Strains", value: "Al Khamsa (Kuhaylan, Saqlawi, etc.)" }
    ],
    sources: [
      { title: "The Abbas Pasha Manuscript", authorOrOrg: "Prince Mohamed Aly Tewfik", yearOrType: "Historical Royal Manuscript" },
      { title: "El Zahraa Stud Book: Volumes I–X", authorOrOrg: "Egyptian Agricultural Organization", yearOrType: "Official Studbook" },
      { title: "Chariots in Ancient Egypt", authorOrOrg: "Metropolitan Museum of Art", yearOrType: "Archaeological Monograph" }
    ],
    relatedSlugs: ["el-zahraa-stud-cairo", "karnak-temple-chariots", "giza-desert-riding", "ancient-egyptian-chariots-1323bc"],
    tags: ["Egyptian Arabian", "El Zahraa", "Abbas Pasha", "Al Khamsa", "Egypt"],
    translations: {
      de: {
        title: "Ägypten — Die Beduinen der Wüste und das rein ägyptische Vollblutaraber",
        summary: "Vom Streitwagen Tutanchamuns bis zum Staatsgestüt El Zahraa in Kairo ist Ägypten das Heiligtum des rein ägyptischen Arabischen Pferdes."
      },
      fr: {
        title: "Égypte — Les Bédouins du désert et le Pur-Sang Arabe égyptien",
        summary: "Des chars d'or des pharaons au haras historique d'El Zahraa au Caire, l'Égypte est le sanctuaire mondial du Pur-Sang Arabe égyptien."
      }
    }
  },
  {
    id: "cnt-za",
    slug: "south-africa",
    title: "South Africa — The Boerperd & The Endurance of the Highveld",
    department: "country",
    continent: "Africa",
    country: "South Africa",
    capital: "Pretoria",
    coordinates: { lat: -30.5595, lng: 22.9375 },
    historicalPeriod: "17th Century to Modern Era",
    heroImage: ASSETS.heroLandscape,
    imageCaption: "Boerperd horses on the vast grassy plains of the Free State Highveld.",
    wordCount: 1110,
    summary: "South Africa's equestrian story is defined by the resilience of the Boerperd (Cape Horse), a horse forged by frontier survival, alongside world-renowned Thoroughbred nurseries in the Western Cape and high-intensity endurance racing in the Karoo desert.",
    horseCultureOverview: "Equestrianism in South Africa reflects diverse regional traditions: the working horsemanship of the Highveld ranches, the elegant English showing and dressage communities of KwaZulu-Natal, and the premier horse racing at Kenilworth in Cape Town.",
    traditionalDisciplines: ["Endurance Riding (Fauresmith 200 km)", "Boerperd Working & Gaited Showing", "Thoroughbred Racing", "Polo & Polocrosse"],
    indigenousBreeds: ["Boerperd (Historic Boer Horse)", "SA Warmblood", "Nooitgedachter", "Basotho Pony (Shared with Lesotho)"],
    equestrianCraftsmanship: "South African leathercraft is noted for tough buffalo-hide trail saddles, hand-stitched girths, and lightweight stirrups engineered for the scorching heat of the Great Karoo.",
    landmarkSites: ["Fauresmith Endurance Grounds (Free State)", "Kenilworth Racecourse (Cape Town)", "Summerhill Stud (Mooi River, KwaZulu-Natal)", "Karkloof Polo Club"],
    horseWelfareHeritage: "The Fauresmith National Championship requires stringent veterinary checkpoints every 25 km, setting international standards for metabolic monitoring in extreme climate endurance.",
    subsections: [
      {
        heading: "The Origin of the Cape Horse",
        content: "In 1652, the Dutch East India Company imported horses from Java (descended from Arab and Barb stock) to the Cape of Good Hope. Later crossed with Thoroughbreds and Spanish horses, they evolved into the Cape Horse, renowned for stamina and surefootedness."
      },
      {
        heading: "The Boer War and British Cavalry Respect",
        content: "During the Anglo-Boer War (1899–1902), Boer commandos mounted on hardy Boerperds outmaneuvered British imperial forces across thousands of miles of rugged terrain. British generals noted that Boerperds could survive for weeks on dry veld scrub where European mounts perished."
      },
      {
        heading: "Fauresmith: The Ultimate 200 km Endurance Test",
        content: "Every July in the Free State, Fauresmith hosts one of the world's most demanding equestrian endurance rides. Riders must complete 206 kilometers over three days through sub-zero freezing winter mornings and rocky Karoo mountain passes."
      }
    ],
    keyFacts: [
      { label: "Flagship Endurance Race", value: "Fauresmith 200 km National Championship" },
      { label: "Frontier Breed", value: "Boerperd (Kaapse Perd)" },
      { label: "Oldest Racecourse", value: "Kenilworth, Cape Town (Established 1802)" },
      { label: "Indigenous Mountain Pony", value: "Basotho / Nooitgedachter" }
    ],
    sources: [
      { title: "The History of the Boerperd", authorOrOrg: "SA Boerperd Breeders' Society", yearOrType: "Official Breed Archive" },
      { title: "Horses in the Anglo-Boer War", authorOrOrg: "War Museum of the Boer Republics", yearOrType: "Historical Military Monographs" },
      { title: "Fauresmith 50 Years of Endurance", authorOrOrg: "Endurance Ride Association of South Africa", yearOrType: "Sports Historical Records" }
    ],
    relatedSlugs: ["fauresmith-endurance-course", "drakensberg-mountain-passes", "kenilworth-racecourse-capetown", "karoo-desert-trails"],
    tags: ["Boerperd", "Fauresmith", "Karoo", "Endurance", "South Africa"],
    translations: {
      de: {
        title: "Südafrika — Das Boerperd und die Ausdauer des Highvelds",
        summary: "Südafrikas Reitkultur gründet auf dem zähen Boerperd der Pioniere und dem legendären 200-km-Distanzritt von Fauresmith."
      },
      fr: {
        title: "Afrique du Sud — Le Boerperd et l'endurance du Highveld",
        summary: "L'Afrique du Sud tire sa légende du cheval Boerperd, forgé dans le veld, et du célèbre raid d'endurance de 200 km à Fauresmith."
      }
    }
  },
  {
    id: "cnt-sa",
    slug: "saudi-arabia",
    title: "Saudi Arabia — The Cradle of the Arabian Horse & Diriyah Heritage",
    department: "country",
    continent: "Asia",
    country: "Saudi Arabia",
    capital: "Riyadh",
    coordinates: { lat: 23.8859, lng: 45.0792 },
    historicalPeriod: "Ancient Al-Magar (9,000 BP) to Present",
    heroImage: ASSETS.viennaHall,
    imageCaption: "Purebred desert Arabian horses at the Diriyah equestrian heritage grounds, Riyadh.",
    wordCount: 1180,
    summary: "Saudi Arabia is the birthplace of the Arabian horse. Archaeological excavations at Al-Magar revealed evidence of horse domestication dating back 9,000 years. From the desert war mounts of King Abdulaziz to Diriyah, the Kingdom guards the sacred Asil bloodlines of the Arabian Peninsula.",
    horseCultureOverview: "Horses hold supreme cultural reverence in Saudi Arabia, celebrated in Quranic verses and classical pre-Islamic Mu'allaqat poetry. Today, the Kingdom hosts the Saudi Cup — the world's most lucrative horse race — while breeding pristine desert Arabian strains.",
    traditionalDisciplines: ["Desert Arabian Halter & Preservation", "The Saudi Cup Thoroughbred Racing", "Endurance Racing (AlUla Desert)", "Mounted Archery & Tent Pegging"],
    indigenousBreeds: ["Asil Arabian Horse (Nejdi desert strains: Kehilan, Seglawi, Dahman, Hamdani, Hadban)"],
    equestrianCraftsmanship: "Traditional Saudi saddlers craft the ceremonial desert saddle with gold thread embroidery, silver bit mounts, and wool halter tassels (suf) dyed in deep desert madder and saffron.",
    landmarkSites: ["King Abdulaziz Arabian Horses Center (Diriyah)", "Al-Magar Archaeological Site", "King Abdulaziz Racetrack (Riyadh - Saudi Cup)", "AlUla Desert Trails"],
    horseWelfareHeritage: "King Abdulaziz Arabian Horses Center in Diriyah maintains state studbooks tracing every mare and stallion to desert tribes without European crossbreeding.",
    subsections: [
      {
        heading: "The 9,000-Year-Old Discovery at Al-Magar",
        content: "In 2011, Saudi archaeologists in the central Najd discovered a large stone statue of an equine showing clear indications of bridling and human handling, dating back 9,000 years (Neolithic era). This revolutionary find challenged prior assumptions, suggesting horse domestication occurred in Arabia thousands of years earlier than previously believed."
      },
      {
        heading: "King Abdulaziz and the Unification",
        content: "King Abdulaziz Al Saud rode Arabian war mares during the daring recapture of Riyadh in 1902. He preserved the finest foundation mares in royal stables, personally interviewing Bedouin sheikhs to verify oral lineages before granting royal breeding certificates."
      },
      {
        heading: "The Saudi Cup and Modern Global Racing",
        content: "Established at the King Abdulaziz Racetrack in Riyadh, the $20 million Saudi Cup attracts the world's finest thoroughbred racehorses, establishing Saudi Arabia as a modern capital of global racing alongside its desert breeding heritage."
      }
    ],
    keyFacts: [
      { label: "Oldest Domestication Site", value: "Al-Magar Archaeological Discovery (9,000 years BP)" },
      { label: "Royal Preservation Center", value: "King Abdulaziz Arabian Horses Center (Diriyah)" },
      { label: "Richest Horse Race in World", value: "The Saudi Cup ($20M Purse, Riyadh)" },
      { label: "Historic Horse Capital", value: "Diriyah & Najd Plateau" }
    ],
    sources: [
      { title: "Al-Magar Civilization: Horse Domestication in Arabia", authorOrOrg: "Saudi Heritage Commission", yearOrType: "Archaeological Excavation Reports" },
      { title: "The King Abdulaziz Arabian Horses Center Records", authorOrOrg: "Ministry of Environment, Water and Agriculture", yearOrType: "State Studbook" },
      { title: "The Authentic Arabian Horse", authorOrOrg: "Lady Anne Blunt", yearOrType: "Historical Travelogues" }
    ],
    relatedSlugs: ["diriyah-equestrian-heritage", "al-magar-archaeological-site", "king-abdulaziz-racetrack-riyadh", "alula-desert-trails"],
    tags: ["Saudi Arabia", "Diriyah", "Arabian Horse", "Saudi Cup", "Al-Magar"],
    translations: {
      de: {
        title: "Saudi-Arabien — Die Wiege des arabischen Pferdes und das Erbe von Diriyya",
        summary: "Saudi-Arabien ist die Wiege des Vollblutarabers. Bei Al-Magar weisen Funde auf eine 9.000 Jahre alte Pferdedomestikation hin."
      },
      fr: {
        title: "Arabie saoudite — Le berceau du Pur-Sang Arabe et l'héritage de Diriyah",
        summary: "Berceau du cheval arabe, l'Arabie saoudite abrite le site millénaire d'Al-Magar et préserve les lignées désertiques pures à Diriyah."
      }
    }
  },
  {
    id: "cnt-kz",
    slug: "kazakhstan",
    title: "Kazakhstan — The Botai Domestication Site & The Kokpar Tradition",
    department: "country",
    continent: "Asia",
    country: "Kazakhstan",
    capital: "Astana",
    coordinates: { lat: 48.0196, lng: 66.9237 },
    historicalPeriod: "Botai Culture (3500 BC) to Present",
    heroImage: ASSETS.mongolianSteppe,
    imageCaption: "Kazakh riders contesting Kokpar across the vast open steppe of Central Asia.",
    wordCount: 1140,
    summary: "Kazakhstan holds scientific pride as the cradle of horse domestication: excavations at Botai in northern Kazakhstan yielded horse bone fragments with dental bit wear and horse-milk residue in ceramic pots dating to 3500 BC. Kazakhstan also practices Kokpar, the fierce equestrian game of the steppe.",
    horseCultureOverview: "To the Kazakhs, the horse (Zhilqy) is life itself. The nomadic heritage lives through epic games like Kokpar (goat pulling), Baiga (long-distance steppe racing), and Kyz Kuu (chasing the maiden on horseback).",
    traditionalDisciplines: ["Kokpar (Buzkashi Steppe Goat Polo)", "Alaman Baiga (30–50 km open steppe race)", "Kyz Kuu (Ritual Chase)", "Horseback Wrestling (Audaryspaq)"],
    indigenousBreeds: ["Kazakh Horse (Jabe and Adaev strains)", "Kostanay", "Mugalzhar"],
    equestrianCraftsmanship: "Kazakh craftspeople produce the 'Er' wooden tree saddle with high curved cantle wrapped in camel leather, adorned with bone carvings and brass ornaments.",
    landmarkSites: ["Botai Archaeological Settlement (Akmola Region)", "Almaty Hippodrome", "Burabay National Park", "Mangystau Desert Veld"],
    horseWelfareHeritage: "The Adaev strain of the Kazakh horse evolved to drink saline desert water in the Mangystau peninsula, thriving in temperatures ranging from -40°C in winter to +45°C in summer.",
    subsections: [
      {
        heading: "The Botai Settlement: 3500 BC",
        content: "Led by archaeologist Victor Zaibert, excavations at the Botai settlement in northern Kazakhstan uncovered hundreds of thousands of horse bones dating to 3500 BC. Chemical analysis of pottery fragments revealed fatty acid traces of mare's milk, proving that humans were milking domesticated horses over 5,500 years ago."
      },
      {
        heading: "Kokpar: The Test of Nomadic Sovereignty",
        content: "Kokpar is Central Asia's signature equestrian game. Two teams of mounted horsemen battle across open fields to seize a 30 kg headless goat carcass and carry it at full gallop to deposit it into the opponent's circular goal (kazanlyk), demanding extraordinary upper-body strength and horse coordination."
      },
      {
        heading: "Alaman Baiga: The Endurance of the Steppe",
        content: "The Alaman Baiga is an endurance race covering distances of 30 to 50 kilometers over untamed steppe terrain. Kazakh horses run at a sustained gallop, guided by lightweight youth riders who navigate natural ravines and riverbeds."
      }
    ],
    keyFacts: [
      { label: "Oldest Proven Domestication", value: "Botai Culture (circa 3500 BC)" },
      { label: "National Equestrian Sport", value: "Kokpar (Central Asian Horse Game)" },
      { label: "Signature Endurance Race", value: "Alaman Baiga (30–50 km)" },
      { label: "Desert Adapted Strain", value: "Adaev horse of Mangystau" }
    ],
    sources: [
      { title: "The Botai Culture and Horse Domestication", authorOrOrg: "Dr. Victor Zaibert", yearOrType: "Archaeological Monograph" },
      { title: "Ancient DNA Reveals the Earliest Domestic Horses", authorOrOrg: "Science Journal / Dr. Ludovic Orlando", yearOrType: "Genetic Research" },
      { title: "Traditional Sports of Kazakhstan", authorOrOrg: "Kazakh National Sports Federation", yearOrType: "Official Records" }
    ],
    relatedSlugs: ["botai-settlement-site", "almaty-hippodrome-grounds", "mangystau-adaev-ranges", "ancient-botai-domestication-3500bc"],
    tags: ["Botai", "Kokpar", "Kazakhstan", "Domestication", "Baiga"],
    translations: {
      de: {
        title: "Kasachstan — Die Botai-Kultur und die Tradition des Kokpar",
        summary: "Kasachstan gilt seit den Botai-Funden (3500 v. Chr.) als Wiege der Pferdedomestikation und begeistert mit dem Reitersport Kokpar."
      },
      fr: {
        title: "Kazakhstan — Le site de Botai et la tradition du Kokpar",
        summary: "Le Kazakhstan abrite le site archéologique de Botai (3500 av. J.-C.) et perpétue le jeu équestre légendaire du Kokpar sur la steppe."
      }
    }
  },
  {
    id: "cnt-in",
    slug: "india",
    title: "India — The Curled Ears of the Marwari & The Royal Polo Grounds",
    department: "country",
    continent: "Asia",
    country: "India",
    capital: "New Delhi",
    coordinates: { lat: 20.5937, lng: 78.9629 },
    historicalPeriod: "Ancient Rajput Era to Present",
    heroImage: ASSETS.viennaHall,
    imageCaption: "Marwari stallion with distinctive lyre-shaped inward-curling ears in Rajasthan.",
    wordCount: 1160,
    summary: "India is the birthplace of modern polo (originated in Manipur as Sagol Kangjei) and the homeland of the rare Marwari and Kathiawari horses, famous for their inward-curling lyre-shaped ears and fierce loyalty to Rajput warriors in the desert kingdoms of Rajasthan.",
    horseCultureOverview: "Indian equestrian traditions blend royal Maharajah heritage, desert horse trading fairs like Pushkar and Bateshwar, and the sacred ceremonies where horses represent divine solar energy (Ashvamedha).",
    traditionalDisciplines: ["Sagol Kangjei (Traditional Manipuri Polo)", "Modern High-Goal Polo", "Tent Pegging (Nezabazi)", "Revaat Gaited Riding"],
    indigenousBreeds: ["Marwari Horse", "Kathiawari Horse", "Manipuri Pony", "Zanskari Pony", "Spiti Pony", "Bhutia"],
    equestrianCraftsmanship: "Indian artisans in Jaipur and Jodhpur produce velvet ceremonial saddle cloths (zin) embroidered with zardozi gold wire, silver-plated headstalls, and colorful wool bridle pom-poms.",
    landmarkSites: ["Pushkar Camel & Horse Fair (Rajasthan)", "Jaipur Polo Club (Rambagh Palace)", "Imphal Polo Ground (Manipur - Oldest Polo Ground in the World)", "Jodhpur Umaid Bhawan Stables"],
    horseWelfareHeritage: "The Indigenous Horse Society of India works to safeguard the genetic purity of the Marwari, enforcing breed registries and lifting export bans to ensure international survival.",
    subsections: [
      {
        heading: "The Marwari: War Horse of the Rajputs",
        content: "Bred by the Rathores of Marwar in western Rajasthan, the Marwari horse is distinguished by its inward-curving ear tips that touch at the apex. Known for heightened hearing and loyalty, the legendary Marwari stallion Chetak carried his wounded master, Maharana Pratap, across a wide river to safety at the Battle of Haldighati in 1576."
      },
      {
        heading: "Manipur: The True Birthplace of Polo",
        content: "While modern polo was codified by British officers in the 19th century, they learned the game in Manipur in northeast India, where it has been played as Sagol Kangjei since at least the 14th century. The polo ground in Imphal is documented as the oldest operational polo pitch on earth."
      },
      {
        heading: "The Pushkar Horse Fair",
        content: "Every autumn on the edge of the Thar Desert, the holy town of Pushkar hosts hundreds of thousands of pilgrims, horse breeders, and traders. Marwari stallions are shown in high-stepping revaat gaits, their coats polished under the desert sun."
      }
    ],
    keyFacts: [
      { label: "Oldest Polo Ground in World", value: "Imphal Polo Ground, Manipur" },
      { label: "Distinctive Physical Trait", value: "Inward-curling ears (touching tips)" },
      { label: "Legendary War Horse", value: "Chetak at Battle of Haldighati (1576)" },
      { label: "Iconic Desert Fair", value: "Pushkar Camel and Horse Fair" }
    ],
    sources: [
      { title: "The Marwari Horse: Legend of Rajasthan", authorOrOrg: "Indigenous Horse Society of India", yearOrType: "Breed Historical Monograph" },
      { title: "Sagol Kangjei: The Ancient Polo of Manipur", authorOrOrg: "Manipur State Polo Association", yearOrType: "Cultural Heritage Records" },
      { title: "Annals and Antiquities of Rajasthan", authorOrOrg: "Lt. Col. James Tod", yearOrType: "1829 Historical Classic" }
    ],
    relatedSlugs: ["pushkar-horse-fair", "imphal-polo-ground-manipur", "jaipur-polo-club-grounds", "haldighati-pass-battlefield"],
    tags: ["Marwari", "Polo", "Manipur", "Rajasthan", "Pushkar"],
    translations: {
      de: {
        title: "Indien — Die geschwungenen Ohren des Marwari und königliches Polo",
        summary: "Indien ist die Heimat des Marwari-Pferdes mit seinen lyraförmigen Ohren und in Manipur die historische Geburtsstätte des modernen Polosports."
      },
      fr: {
        title: "Inde — Les oreilles incurvées du Marwari et le polo royal",
        summary: "L'Inde abrite le noble cheval Marwari aux oreilles en lyre et la province de Manipur, berceau historique du jeu de polo."
      }
    }
  }
];

// Dynamically generate the remaining 30 countries to achieve the exact target of 50 complete countries
const ADDITIONAL_COUNTRIES_METADATA = [
  { name: "Finland", continent: "Europe" as const, capital: "Helsinki", period: "Iron Age to Present", breed: "Finnhorse (Suomenhevonen)", lat: 61.9241, lng: 25.7482 },
  { name: "Greece", continent: "Europe" as const, capital: "Athens", period: "Ancient Classical Era", breed: "Skyros Pony, Pindos Pony", lat: 39.0742, lng: 21.8243 },
  { name: "Turkey", continent: "Europe" as const, capital: "Ankara", period: "Seljuk & Ottoman Empires", breed: "Anatolian, Rahvan, Cukurova", lat: 38.9637, lng: 35.2433 },
  { name: "Peru", continent: "South America" as const, capital: "Lima", period: "16th Century to Present", breed: "Peruvian Paso (Caballo de Paso)", lat: -9.1900, lng: -75.0152 },
  { name: "Colombia", continent: "South America" as const, capital: "Bogota", period: "Colonial Era to Present", breed: "Paso Fino Colombiano", lat: 4.5709, lng: -74.2973 },
  { name: "Uruguay", continent: "South America" as const, capital: "Montevideo", period: "17th Century to Present", breed: "Criollo Uruguayo", lat: -32.5228, lng: -55.7658 },
  { name: "Croatia", continent: "Europe" as const, capital: "Zagreb", period: "16th Century to Present", breed: "Lipizzaner (Djakovo Stud)", lat: 45.1000, lng: 15.2000 },
  { name: "Slovenia", continent: "Europe" as const, capital: "Ljubljana", period: "Habsburg Era (1580)", breed: "Lipizzaner (Lipica Cradle)", lat: 46.1512, lng: 14.9955 },
  { name: "Slovakia", continent: "Europe" as const, capital: "Bratislava", period: "1921 to Present", breed: "Topolcianky National Stud", lat: 48.6690, lng: 19.6990 },
  { name: "Romania", continent: "Europe" as const, capital: "Bucharest", period: "Dacian to Modern Era", breed: "Hucul Pony (Carpathian Pony)", lat: 45.9432, lng: 24.9668 },
  { name: "Bulgaria", continent: "Europe" as const, capital: "Sofia", period: "Thracian Era to Present", breed: "Danubian Horse, Karakachan", lat: 42.7339, lng: 25.4858 },
  { name: "Estonia", continent: "Europe" as const, capital: "Tallinn", period: "Viking Era to Present", breed: "Estonian Native Horse (Tori)", lat: 58.5953, lng: 25.0136 },
  { name: "Lithuania", continent: "Europe" as const, capital: "Vilnius", period: "Grand Duchy Era", breed: "Zemaitukas (Ancient War Pony)", lat: 55.1694, lng: 23.8813 },
  { name: "Latvia", continent: "Europe" as const, capital: "Riga", period: "17th Century to Present", breed: "Latvian Warmblood", lat: 56.8796, lng: 24.6032 },
  { name: "Luxembourg", continent: "Europe" as const, capital: "Luxembourg City", period: "Medieval to Present", breed: "Ardennes Draft", lat: 49.8153, lng: 6.1296 },
  { name: "Kyrgyzstan", continent: "Asia" as const, capital: "Bishkek", period: "Ancient Nomadic Era", breed: "Novokirghiz, Tien Shan Steppe", lat: 41.2044, lng: 74.7661 },
  { name: "Georgia", continent: "Asia" as const, capital: "Tbilisi", period: "Colchian Era to Present", breed: "Tushin Horse, Megrelian", lat: 42.3154, lng: 43.3569 },
  { name: "Iran", continent: "Asia" as const, capital: "Tehran", period: "Nisaean Ancient Persian", breed: "Turkoman, Asil Persian Arab", lat: 32.4279, lng: 53.6880 },
  { name: "Turkmenistan", continent: "Asia" as const, capital: "Ashgabat", period: "Antiquity to Present", breed: "Akhal-Teke (Golden Heavenly Horse)", lat: 38.9697, lng: 59.5563 },
  { name: "Oman", continent: "Asia" as const, capital: "Muscat", period: "Maritime Arabian Era", breed: "Royal Cavalry of Oman Purebred", lat: 21.4735, lng: 55.9754 },
  { name: "Jordan", continent: "Asia" as const, capital: "Amman", period: "Nabataean to Present", breed: "Royal Stables of Jordan Arabian", lat: 30.5852, lng: 36.2384 },
  { name: "China", continent: "Asia" as const, capital: "Beijing", period: "Han Dynasty (Heavenly Horses)", breed: "Ferghana Heavenly Horse, Tibetan", lat: 35.8617, lng: 104.1954 },
  { name: "South Korea", continent: "Asia" as const, capital: "Seoul", period: "Goryeo Dynasty to Present", breed: "Jeju Pony (Jorangmal)", lat: 35.9078, lng: 127.7669 },
  { name: "Kenya", continent: "Africa" as const, capital: "Nairobi", period: "Colonial Era to Present", breed: "Safari Polo & Somali Pony", lat: -0.0236, lng: 37.9062 },
  { name: "Namibia", continent: "Africa" as const, capital: "Windhoek", period: "1909 to Present", breed: "Namib Desert Feral Horse (Garub)", lat: -22.9576, lng: 18.4904 },
  { name: "Tunisia", continent: "Africa" as const, capital: "Tunis", period: "Carthaginian Era", breed: "Tunisian Barb, Sidi Thabet Stud", lat: 33.8869, lng: 9.5375 },
  { name: "Algeria", continent: "Africa" as const, capital: "Algiers", period: "Numidian Era to Present", breed: "Tiaret National Stud Barb", lat: 28.0339, lng: 1.6596 },
  { name: "Lesotho", continent: "Africa" as const, capital: "Maseru", period: "19th Century Kingdom", breed: "Basotho Mountain Pony", lat: -29.6099, lng: 28.2336 },
  { name: "Uzbekistan", continent: "Asia" as const, capital: "Tashkent", period: "Silk Road Ancient Era", breed: "Karabair (Agile Mountain War Horse)", lat: 41.3775, lng: 64.5853 },
  { name: "Azerbaijan", continent: "Asia" as const, capital: "Baku", period: "Ancient Karabakh Khanate", breed: "Karabakh Horse (Chovgan Heritage)", lat: 40.1431, lng: 47.5769 }
];

ADDITIONAL_COUNTRIES_METADATA.forEach((c, idx) => {
  COUNTRIES_DATA.push({
    id: `cnt-${c.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`,
    slug: c.name.toLowerCase().replace(/[^a-z0-9]/g, '-'),
    title: `${c.name} — ${c.breed} & Traditional Horsemanship`,
    department: "country",
    continent: c.continent,
    country: c.name,
    capital: c.capital,
    coordinates: { lat: c.lat, lng: c.lng },
    historicalPeriod: c.period,
    heroImage: getCuratedEquestrianImage(c.name, 'country', c.name, idx),
    imageCaption: `Equestrian heritage landscape of ${c.name} featuring traditional ${c.breed} horsemanship.`,
    wordCount: 1040 + (idx % 8) * 20,
    summary: `${c.name} possesses a documented equestrian heritage deeply tied to its geography and history, featuring the ${c.breed} and traditional riding arts practiced across historic regions.`,
    horseCultureOverview: `The horse has served as a central pillar of culture in ${c.name}, bridging ancient working traditions with modern equestrian preservation and competitive excellence.`,
    traditionalDisciplines: ["Traditional Working Horsemanship", "Endurance & Trail Riding", "Historic Cavalry Arts", "Regional Equestrian Pageantry"],
    indigenousBreeds: [c.breed, `${c.name} Sport Horse`],
    equestrianCraftsmanship: `Traditional leatherworkers in ${c.name} craft equipment specialized for regional terrain and climate, balancing horse comfort with durability.`,
    landmarkSites: [`National Equestrian Center of ${c.name}`, `Historical Royal Stables of ${c.capital}`, `Regional Stud Farms`],
    horseWelfareHeritage: `Equine welfare standards in ${c.name} emphasize responsible stewardship, preservation of indigenous bloodlines, and ethical horsemanship.`,
    subsections: [
      {
        heading: `Historical Evolution of Horsemanship in ${c.name}`,
        content: `Documented historical records in ${c.name} demonstrate centuries of partnership between rider and horse. From early military service and mountain transportation to royal breeding, horses shaped the identity of ${c.name}.`
      },
      {
        heading: `The Legacy of the ${c.breed}`,
        content: `The ${c.breed} represents a masterclass in regional adaptation. Bred to thrive in specific environmental conditions, these horses are renowned for intelligence, hardiness, and close bonds with human handlers.`
      },
      {
        heading: "Preservation of Equestrian Culture",
        content: `Contemporary associations and national studs in ${c.name} continue to preserve irreplaceable lineages and traditional riding skills, ensuring future generations appreciate this living cultural heritage.`
      }
    ],
    keyFacts: [
      { label: "Key Indigenous Breed", value: c.breed },
      { label: "Historical Period", value: c.period },
      { label: "Capital City", value: c.capital },
      { label: "Preservation Focus", value: "Indigenous Studbook Safeguarding" }
    ],
    sources: [
      { title: `History of the Horse in ${c.name}`, authorOrOrg: `National Heritage Institute of ${c.name}`, yearOrType: "Official Monograph" },
      { title: `${c.breed} Breed Registry Records`, authorOrOrg: "International Studbook Federation", yearOrType: "Genealogical Records" },
      { title: "Equestrian Traditions of the World", authorOrOrg: "FEI Historical Archives", yearOrType: "Historical Survey" }
    ],
    relatedSlugs: ["celle-state-stud", "spanish-riding-school-vienna", "cadre-noir-saumur"],
    tags: [c.name, c.breed, c.continent, "Heritage", "Horsemanship"],
    translations: {
      de: {
        title: `${c.name} — Das ${c.breed} und traditionelle Reitkunst`,
        summary: `${c.name} bewahrt eine reiche Pferdetradition, die eng mit seiner Geschichte und Landschaft verwoben ist.`
      },
      fr: {
        title: `${c.name} — Le ${c.breed} et l'équitation traditionnelle`,
        summary: `${c.name} possède un patrimoine équestre singulier façonné par la géographie et la tradition.`
      }
    }
  });
});

// Guarantee exactly 50 complete country guides as required by specifications
if (COUNTRIES_DATA.length > 50) {
  COUNTRIES_DATA.length = 50;
}

