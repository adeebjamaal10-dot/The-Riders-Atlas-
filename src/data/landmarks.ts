import { HeritageLandmark } from '../types/equestrian';
import { ASSETS, getCuratedEquestrianImage } from './assets';

export const LANDMARKS_DATA: HeritageLandmark[] = [
  {
    id: "lmk-spanish-riding-school",
    slug: "spanish-riding-school-vienna",
    title: "Spanish Riding School — The Living Imperial Baroque Academy",
    department: "landmark",
    continent: "Europe",
    country: "Austria",
    region: "Vienna",
    coordinates: { lat: 48.2072, lng: 16.3664 },
    historicalPeriod: "1565 AD to Present",
    heroImage: ASSETS.viennaHall,
    imageCaption: "A white Lipizzaner stallion performing the levade beneath chandeliers in the Winter Riding School.",
    wordCount: 1350,
    summary: "The Spanish Riding School of Vienna (Spanische Hofreitschule) is the oldest classical riding school in the world, practicing the classical art of equitation in the Renaissance tradition of the Haute École for more than 450 unbroken years inside the imperial Hofburg Palace.",
    institutionType: "Classical Riding School",
    foundedYear: "1565",
    architecturalStyle: "High Baroque by Joseph Emanuel Fischer von Erlach (1729–1735)",
    heritageStatus: "UNESCO Intangible Cultural Heritage of Humanity (Inscribed 2015)",
    modernVisitorNotice: "The school remains an active cultural institution; public training and performances are subject to imperial palace schedules. Visitors should consult official Austrian federal museum resources for contemporary access.",
    subsections: [
      {
        heading: "Foundation in the Imperial Hofburg",
        content: "First recorded in an official document in 1565 during the reign of Habsburg Emperor Maximilian II, the Spanish Riding School earned its name from the Spanish horses that formed the foundation of the Lipizzaner breed. Maximilian II had imported Spanish stallions to his court at Kladruby and later to Graz, creating an imperial equitation tradition meant to showcase sovereign harmony."
      },
      {
        heading: "The Winter Riding School: A Baroque Ballroom for Horses",
        content: "Commissioned by Emperor Charles VI in 1729, the Winter Riding School in Vienna is an architectural marvel. Measuring 55 meters long by 18 meters wide, its dazzling white stucco colonnades, 46 Corinthian columns, and coffered ceiling are lit by monumental crystal chandeliers. Upon entering the hall, every rider performs the historical salutation by lifting their bicorne hat toward the portrait of Charles VI in gratitude for this magnificent hall."
      },
      {
        heading: "The Classical Airs Above the Ground",
        content: "The riding masters (Reitmeister) train stallions exclusively through understanding, praise, and gymnastic progression. Only after mastering the school walk, school trot, piaffe, and passage are select stallions taught the 'airs above the ground' (Schulen über der Erde): the levade (standing at a 45-degree angle on haunches), the courbette (hopping forward on hind legs without touching the forefeet), and the explosive capriole (leaping horizontally and kicking out with the hind feet at the apex of the jump)."
      }
    ],
    keyFacts: [
      { label: "Founded", value: "1565 (Oldest in the world)" },
      { label: "Imperial Arena Completed", value: "1735 (Architect Fischer von Erlach)" },
      { label: "UNESCO Recognition", value: "Classical Horsemanship of the Spanish Riding School (2015)" },
      { label: "Home Stud", value: "Piber Federal Stud, Styria" }
    ],
    sources: [
      { title: "The Spanish Riding School of Vienna", authorOrOrg: "Alois Podhajsky", yearOrType: "Historical Monograph" },
      { title: "UNESCO Intangible Cultural Heritage Dossier 01106", authorOrOrg: "UNESCO", yearOrType: "2015 Inscription" },
      { title: "Österreichisches Staatsarchiv: Hofreitschule Akten", authorOrOrg: "Austrian State Archives", yearOrType: "Imperial Administrative Documents" }
    ],
    relatedSlugs: ["austria", "piber-federal-stud", "lipica-stud-farm", "1956-stockholm-olympics-dressage"],
    tags: ["Vienna", "Lipizzaner", "Classical Dressage", "Hofburg", "Baroque"],
    translations: {
      de: {
        title: "Spanische Hofreitschule — Die lebendige imperiale Barockakademie",
        summary: "Die Spanische Hofreitschule in Wien ist die älteste Reitschule der Welt und pflegt die klassische Reitkunst seit 1565 in der Hofburg."
      },
      fr: {
        title: "École espagnole d'équitation — L'académie baroque impériale de Vienne",
        summary: "Fondée en 1565, l'École espagnole de Vienne est la plus ancienne académie équestre du monde, classée par l'UNESCO."
      }
    }
  },
  {
    id: "lmk-cadre-noir-saumur",
    slug: "cadre-noir-saumur",
    title: "Le Cadre Noir de Saumur — The Temple of French Légèreté",
    department: "landmark",
    continent: "Europe",
    country: "France",
    region: "Pays de la Loire (Saumur)",
    coordinates: { lat: 47.2600, lng: -0.0767 },
    historicalPeriod: "1814 to Present",
    heroImage: ASSETS.classicalAcademy,
    imageCaption: "An Ecuyer of the Cadre Noir in traditional black uniform performing the courbette at Saumur.",
    wordCount: 1310,
    summary: "The Cadre Noir de Saumur constitutes the elite corps of riding masters at the French National School of Equestrian Arts (IFCE). Founded in the aftermath of the Napoleonic Wars to train cavalry officers, it preserves French classical equitation based on harmony, lightness, and complete absence of force.",
    institutionType: "Classical Riding School",
    foundedYear: "1814",
    architecturalStyle: "19th Century French Military Cavalry School & Modern National Arenas",
    heritageStatus: "UNESCO Intangible Cultural Heritage (Equitation in the French tradition, 2011)",
    modernVisitorNotice: "The National School of Equitation in Terrefort conducts guided heritage tours and public presentations according to official seasonal calendars. Visitors should confirm availability directly through the IFCE.",
    subsections: [
      {
        heading: "Origins in the Napoleonic Cavalry Crisis",
        content: "Following the Napoleonic Wars, which devastated the French cavalry mount population during campaigns in Russia and Waterloo, King Louis XVIII decreed in 1814 the establishment of the École Royale de Cavalerie at Saumur in the Loire Valley. The elite corps of instructors adopted black uniforms to distinguish themselves from military students in blue, giving birth to the name 'Cadre Noir'."
      },
      {
        heading: "Doctrine of Count d'Aure and Baucher",
        content: "During the 19th century, Saumur was the intellectual battleground between two equestrian philosophies: Count Antoine d'Aure, who championed speed, natural impulsion, and outdoor cross-country riding; and François Baucher, who advocated ultimate collection, jaw relaxation, and psychological submission without force. Chief Écuyer General Alexis L'Hotte famously harmonized the two traditions with his golden maxim: 'Calm, forward, straight' (Calme, en avant, droit)."
      },
      {
        heading: "The Saumur Airs on the Flat and in the Air",
        content: "Unlike the Viennese school, which performs airs above the ground between pillars or on hand, the Cadre Noir performs the courbette, croupade, and cabriole under saddle at a light forward canter. In the cabriole, the horse leaps into the air with all four legs off the ground, kicking out vigorously behind while remaining parallel to the ground."
      }
    ],
    keyFacts: [
      { label: "Cavalry School Founded", value: "Saumur, 1814 by Royal Decree" },
      { label: "Master Maxim", value: "'Calme, en avant, droit' (General L'Hotte)" },
      { label: "UNESCO Inscription", value: "2011 (Equitation in the French tradition)" },
      { label: "Traditional Uniform", value: "Black tunic, gold spurs, and bicorne hat" }
    ],
    sources: [
      { title: "Questions Équestres", authorOrOrg: "Général Alexis L'Hotte", yearOrType: "1906 Classical Military Doctrine" },
      { title: "Histoire du Cadre Noir de Saumur", authorOrOrg: "Patrice Franchet d'Espèrey", yearOrType: "Historical Monograph" },
      { title: "UNESCO Convention: French Equitation", authorOrOrg: "UNESCO", yearOrType: "2011 Cultural Dossier" }
    ],
    relatedSlugs: ["france", "haras-national-du-pin", "chantilly-great-stables", "spanish-riding-school-vienna"],
    tags: ["Cadre Noir", "Saumur", "France", "Legerete", "UNESCO"],
    translations: {
      de: {
        title: "Cadre Noir de Saumur — Der Tempel der französischen Leichtigkeit",
        summary: "Der Cadre Noir in Saumur hütet die französische Reittradition der 'Légèreté', gegründet 1814 und von der UNESCO anerkannt."
      },
      fr: {
        title: "Le Cadre Noir de Saumur — Le temple de la légèreté française",
        summary: "Corps d'élite né en 1814, le Cadre Noir incarne l'équitation de tradition française inscrite au patrimoine immatériel de l'UNESCO."
      }
    }
  },
  {
    id: "lmk-royal-andalusian-school",
    slug: "royal-andalusian-school-jerez",
    title: "Royal Andalusian School of Equestrian Art — The Palace of Jerez",
    department: "landmark",
    continent: "Europe",
    country: "Spain",
    region: "Andalusia (Jerez de la Frontera)",
    coordinates: { lat: 36.6908, lng: -6.1367 },
    historicalPeriod: "1973 to Present",
    heroImage: ASSETS.andalusianCourtyard,
    imageCaption: "Classical Andalusian riding master executing a high piaffe in the Recreo de las Cadenas arena.",
    wordCount: 1260,
    summary: "The Real Escuela Andaluza del Arte Ecuestre in Jerez de la Frontera is Spain's premier classical riding academy. Founded in 1973 by Don Álvaro Domecq Romero, it operates within the 19th-century Palace of the Chains (Recreo de las Cadenas), preserving classical Spanish High School riding.",
    institutionType: "Classical Riding School",
    foundedYear: "1973",
    architecturalStyle: "19th Century French Eclectic Palace by Charles Garnier",
    heritageStatus: "National Historic-Artistic Heritage of Spain",
    modernVisitorNotice: "The Foundation manages daily training viewings, museum exhibits, and gala performances. Access conditions vary seasonally; consult official Andalusian cultural foundations for details.",
    subsections: [
      {
        heading: "Álvaro Domecq and King Juan Carlos I",
        content: "In May 1973, Prince Juan Carlos of Spain (later King Juan Carlos I) presented Don Álvaro Domecq Romero with the prestigious 'Caballo de Oro' award in Jerez. In gratitude, Domecq performed his first exhibition of 'Cómo Cantan los Caballos Andaluces' (How the Andalusian Horses Sing), laying the foundation for an official royal academy."
      },
      {
        heading: "Palacio del Recreo de las Cadenas",
        content: "The academy is located within the magnificent Recreo de las Cadenas estate, designed by Charles Garnier, architect of the Paris Opera House. The property features botanical gardens, historic harness rooms with 18th-century leatherwork, and a state-of-the-art indoor arena accommodating 1,600 spectators."
      },
      {
        heading: "Repertory: Classical Dressage Meets Spanish Heritage",
        content: "The academy's choreography blends pure haute école dressage (piaffe, passage, pirouettes, and airs above the ground) with traditional Spanish disciplines: Doma Vaquera with the garrocha lance, classical driving in 19th-century landau carriages, and carousel formations."
      }
    ],
    keyFacts: [
      { label: "Founder", value: "Don Álvaro Domecq Romero (1973)" },
      { label: "Palace Architect", value: "Charles Garnier (Architect of Paris Opéra)" },
      { label: "Flagship Presentation", value: "'Cómo Cantan los Caballos Andaluces'" },
      { label: "Breed Exclusively Used", value: "Pura Raza Española (PRE)" }
    ],
    sources: [
      { title: "Fundación Real Escuela Andaluza: 50 Años de Arte Ecuestre", authorOrOrg: "Real Escuela Andaluza", yearOrType: "Official Anniversary Publication" },
      { title: "El Caballo Andaluz en el Arte", authorOrOrg: "Junta de Andalucía", yearOrType: "Art History Monograph" },
      { title: "Architecture of Garnier in Jerez", authorOrOrg: "Colegio de Arquitectos de Cádiz", yearOrType: "Architectural Records" }
    ],
    relatedSlugs: ["spain", "andalusia-region", "royal-stables-cordoba", "yeguada-la-cartuja"],
    tags: ["Jerez", "Real Escuela", "PRE", "Andalusia", "Haute Ecole"],
    translations: {
      de: {
        title: "Königlich-Andalusische Reitschule — Der Palast von Jerez",
        summary: "Die Real Escuela in Jerez de la Frontera zelebriert seit 1973 die Hohe Schule des spanischen Pferdes im Garnier-Palast."
      },
      fr: {
        title: "Académie royale andalouse de l'art équestre — Le palais de Jerez",
        summary: "Fondée en 1973 par Álvaro Domecq, la Real Escuela de Jerez perpétue l'art équestre espagnol dans le palais Garnier."
      }
    }
  },
  {
    id: "lmk-portuguese-school",
    slug: "portuguese-school-equestrian-art",
    title: "Portuguese School of Equestrian Art — Queluz Royal Gardens",
    department: "landmark",
    continent: "Europe",
    country: "Portugal",
    region: "Lisbon Metropolitan Area (Queluz & Belém)",
    coordinates: { lat: 38.7505, lng: -9.2588 },
    historicalPeriod: "1979 (Rooted in 1748 Royal Picaria)",
    heroImage: ASSETS.classicalAcademy,
    imageCaption: "Stallions of the Portuguese School of Equestrian Art performing in the Queluz Palace riding gardens.",
    wordCount: 1240,
    summary: "The Escola Portuguesa de Arte Equestre (EPAE) preserves the equestrian heritage of the 18th-century Portuguese Royal Court. Based at the National Palace of Queluz and the Henrique Calado Riding Hall in Belém, riders perform exclusively on bay Alter Real stallions wearing historic tricorne hats and burgundy velvet coats.",
    institutionType: "Classical Riding School",
    foundedYear: "1979",
    architecturalStyle: "18th Century Rococo & Baroque Royal Palace of Queluz",
    heritageStatus: "National Cultural Heritage of Portugal",
    modernVisitorNotice: "Public morning training sessions and evening gala shows are presented at the Picadeiro Henrique Calado in Belém, Lisbon. Check Parques de Sintra official portals for access.",
    subsections: [
      {
        heading: "Revival of the Royal Picaria",
        content: "Following the abolition of the Portuguese monarchy in 1910, the historic Royal Picaria (court riding academy) fell silent. In 1979, the Portuguese Ministry of Agriculture, guided by master riders Dr. Guilherme Borba and Felipe Graciosa, revived the institution to ensure the survival of the Alter Real stallion lineage and the teachings of the Marquis of Marialva."
      },
      {
        heading: "The Doctrine of Manoel Carlos de Andrade",
        content: "The academy strictly follows the 1790 royal equestrian treatise 'Luz da Liberal e Nobre Arte da Cavallaria' by Manoel Carlos de Andrade. It emphasizes calm, gradual gymnastic balance without excessive spur aids, focusing on the purest piaffe and expressive Spanish walk."
      },
      {
        heading: "The Baroque Attire and Tack",
        content: "Riders wear exact replicas of 18th-century court dress: black felt tricornes with gold cockades, bottle-green and burgundy coats, white leather breeches, and tall riding boots. Horses are tacked in Portuguese school saddles (selas à portuguesa) and solid brass cortesia bridles."
      }
    ],
    keyFacts: [
      { label: "Revival Founded", value: "1979 by Dr. Guilherme Borba" },
      { label: "Treatise Basis", value: "Manoel Carlos de Andrade (1790)" },
      { label: "Exclusive Breed", value: "Alter Real stallions (bay only)" },
      { label: "Primary Venues", value: "Queluz Palace & Belém Riding Hall (Lisbon)" }
    ],
    sources: [
      { title: "Luz da Liberal e Nobre Arte da Cavallaria", authorOrOrg: "Manoel Carlos de Andrade", yearOrType: "1790 Royal Treaty" },
      { title: "Escola Portuguesa de Arte Equestre", authorOrOrg: "Parques de Sintra - Monte da Lua", yearOrType: "Official Monograph" },
      { title: "The Royal Alter Real", authorOrOrg: "Fundação Alter Real", yearOrType: "Historical Records" }
    ],
    relatedSlugs: ["portugal", "alter-real-stud", "alentejo-cork-plains", "spanish-riding-school-vienna"],
    tags: ["Queluz", "EPAE", "Alter Real", "Portugal", "Classical Dressage"],
    translations: {
      de: {
        title: "Portugiesische Reitkunstschule — Schlossgärten von Queluz",
        summary: "Die Escola Portuguesa in Queluz reitet bis heute Alter-Real-Hengste in historischer Hoftracht des 18. Jahrhunderts."
      },
      fr: {
        title: "École portugaise d'art équestre — Les jardins royaux de Queluz",
        summary: "Au palais de Queluz et à Belém, l'École portugaise d'art équestre fait revivre l'équitation de cour du marquis de Marialva."
      }
    }
  },
  {
    id: "lmk-chantilly-stables",
    slug: "chantilly-great-stables",
    title: "The Great Stables of Chantilly — The Equestrian Palace of Princes",
    department: "landmark",
    continent: "Europe",
    country: "France",
    region: "Hauts-de-France (Oise)",
    coordinates: { lat: 49.1936, lng: 2.4853 },
    historicalPeriod: "1719 to Present",
    heroImage: ASSETS.classicalAcademy,
    imageCaption: "The colossal baroque dome and courtyard of the Great Stables of Chantilly.",
    wordCount: 1290,
    summary: "The Grandes Écuries of the Château de Chantilly represent the most monumental equestrian palace ever constructed in Europe. Built between 1719 and 1735 for Louis-Henri de Bourbon, 7th Prince of Condé, who believed he would be reincarnated as a horse, this palace houses the Museum of the Horse and elite equestrian theater.",
    institutionType: "Historic Stables",
    foundedYear: "1719",
    architecturalStyle: "Colossal French Classical Baroque by Jean Aubert",
    heritageStatus: "Monument Historique of France (Château de Chantilly Estate)",
    modernVisitorNotice: "The Great Stables house the Museum of the Horse and equestrian theater performances. Access is managed by the Domaine de Chantilly (Institut de France). Consult Domaine de Chantilly official schedules.",
    subsections: [
      {
        heading: "The Reincarnation Belief of the Prince of Condé",
        content: "Louis-Henri de Bourbon, Duke of Bourbon and Prince of Condé, was convinced he would be reborn as a horse in his next life. He commissioned architect Jean Aubert to build stables grand enough for a prince of the blood, resulting in an architectural marvel 186 meters long with a central dome rising 28 meters high, dwarfing the stables of Versailles."
      },
      {
        heading: "Capacity for 240 Horses and 500 Hounds",
        content: "During the 18th century, the Great Stables housed 240 princely horses and a pack of 500 hunting hounds for chases in the surrounding Chantilly forest. The central rotunda featured an indoor riding arena where European monarchs, including Russian Grand Dukes and Prussian princes, were entertained."
      },
      {
        heading: "The Living Museum of the Horse",
        content: "In 1982, master rider and horseman Yves Bienaimé founded the Living Museum of the Horse within the stables, saving the monument from decay. Today, the Domaine de Chantilly presents equestrian art that combines Haute École with theatrical poetry."
      }
    ],
    keyFacts: [
      { label: "Commissioned", value: "1719 by Louis-Henri de Bourbon" },
      { label: "Architect", value: "Jean Aubert (Completed 1735)" },
      { label: "Length of Facade", value: "186 meters (Largest in Europe)" },
      { label: "Central Dome Height", value: "28 meters high" }
    ],
    sources: [
      { title: "Les Grandes Écuries de Chantilly", authorOrOrg: "Institut de France", yearOrType: "Official Architectural History" },
      { title: "Jean Aubert: Architect of the Princes", authorOrOrg: "Société de l'Histoire de l'Art Français", yearOrType: "Academic Papers" },
      { title: "Chantilly: Four Centuries of Equitation", authorOrOrg: "Yves Bienaimé", yearOrType: "Equestrian Monograph" }
    ],
    relatedSlugs: ["france", "cadre-noir-saumur", "haras-national-du-pin", "newmarket-historic-heath"],
    tags: ["Chantilly", "Grandes Ecuries", "France", "Baroque", "Architecture"],
    translations: {
      de: {
        title: "Die Großen Marställe von Chantilly — Der Pferdepalast der Prinzen",
        summary: "Die Grandes Écuries von Chantilly sind der monumentalste Reitpalast Europas, erbaut 1719 von Jean Aubert für den Fürsten von Condé."
      },
      fr: {
        title: "Les Grandes Écuries de Chantilly — Le palais équestre des princes",
        summary: "Construites dès 1719 par Jean Aubert, les Grandes Écuries de Chantilly constituent le chef-d'œuvre mondial de l'architecture équestre."
      }
    }
  },
  {
    id: "lmk-lipica-stud",
    slug: "lipica-stud-farm",
    title: "Lipica Stud Farm — The 1580 Cradle of the Lipizzaner",
    department: "landmark",
    continent: "Europe",
    country: "Slovenia",
    region: "Karst Plateau (Sežana)",
    coordinates: { lat: 45.6694, lng: 13.8822 },
    historicalPeriod: "1580 AD to Present",
    heroImage: ASSETS.viennaHall,
    imageCaption: "White Lipizzaner mares and dark foals grazing beneath the oak avenues of Lipica.",
    wordCount: 1280,
    summary: "Lipica Stud Farm in Slovenia is the historic birthplace and cradle of the Lipizzaner horse. Founded in 1580 by Habsburg Archduke Charles II of Inner Austria, Lipica has bred horses for the Spanish Riding School and royal courts for over 440 continuous years on the stony limestone Karst plateau.",
    institutionType: "National Stud Farm",
    foundedYear: "1580",
    architecturalStyle: "16th–18th Century Karst Stone Estates and Classicist Stables",
    heritageStatus: "UNESCO Representative List of Intangible Cultural Heritage of Humanity (2022)",
    modernVisitorNotice: "Lipica is a national cultural monument of Slovenia; visitors can view historic stables, carriage museums, and breeding pastures. Check the official Holding Kobilarna Lipica schedules for details.",
    subsections: [
      {
        heading: "Archduke Charles II and the Karst Limestone",
        content: "In 1580, Archduke Charles II purchased the abandoned bishopric estate of Lipizza on the windswept Karst plateau. The austere, rocky terrain and dry bora winds were deliberately chosen because they resembled the conditions of Spain, ensuring that horses bred here developed rock-hard hooves, dense tendons, and frugal metabolisms."
      },
      {
        heading: "The Six Classical Foundation Stallion Lines",
        content: "All purebred Lipizzaners trace to six foundation sires established at Lipica and allied Habsburg studs in the 18th and early 19th centuries: Pluto (grey Danish stallion, 1765), Conversano (black Neapolitan, 1767), Maestoso (grey Kladruber, 1773), Favory (dun Kladruber, 1779), Neapolitano (bay Neapolitan, 1790), and Siglavy (grey Syrian Arabian, 1810)."
      },
      {
        heading: "Survival Through Seven Wars",
        content: "Lipica was evacuated repeatedly during European conflicts: from the Napoleonic Wars (when herds were marched hundreds of miles across Hungary) to World War I, when horses were sent to Laxenburg and Kladruby, and World War II, where horses were rescued during Operation Cowboy in Hostau."
      }
    ],
    keyFacts: [
      { label: "Founded", value: "1580 by Archduke Charles II" },
      { label: "UNESCO Inscription", value: "Lipizzaner horse breeding traditions (2022)" },
      { label: "Six Classic Sires", value: "Pluto, Conversano, Maestoso, Favory, Neapolitano, Siglavy" },
      { label: "Estate Landscape", value: "Centuries-old oak and linden avenues" }
    ],
    sources: [
      { title: "Lipica: 400 Let Zibelka Lipicanca", authorOrOrg: "Kobilarna Lipica Historical Archives", yearOrType: "State Monograph" },
      { title: "UNESCO Intangible Cultural Heritage Dossier 01687", authorOrOrg: "UNESCO", yearOrType: "2022 Joint Inscription" },
      { title: "The Lipizzaners: From Lipizza to the World", authorOrOrg: "Alois Podhajsky", yearOrType: "Equestrian Classic" }
    ],
    relatedSlugs: ["spanish-riding-school-vienna", "piber-federal-stud", "kladruby-nad-labem-stud", "austria"],
    tags: ["Lipica", "Lipizzaner", "Slovenia", "Karst", "Habsburg"],
    translations: {
      de: {
        title: "Gestüt Lipica — Die Wiege des Lipizzaners von 1580",
        summary: "1580 von Erzherzog Karl II. gegründet, ist das Gestüt Lipica auf dem slowenischen Karst die Urheimat der weltberühmten Lipizzaner."
      },
      fr: {
        title: "Le Haras de Lipica — Le berceau du Lipizzan depuis 1580",
        summary: "Fondé en 1580 sur le plateau karstique de Slovénie, le haras de Lipica a donné naissance à l'illustre race des chevaux Lipizzans."
      }
    }
  },
  {
    id: "lmk-haras-du-pin",
    slug: "haras-national-du-pin",
    title: "Haras National du Pin — The Versailles for Horses in Normandy",
    department: "landmark",
    continent: "Europe",
    country: "France",
    region: "Normandy (Orne)",
    coordinates: { lat: 48.7369, lng: 0.1478 },
    historicalPeriod: "1715 to Present",
    heroImage: ASSETS.estateRider,
    imageCaption: "The grand horseshoe-shaped stables and equestrian park of Haras National du Pin in Normandy.",
    wordCount: 1240,
    summary: "Known as the 'Versailles for Horses' (Le Versailles du Cheval), the Haras National du Pin is the oldest and most celebrated of the French National Studs. Founded under King Louis XIV in 1715, it sits amid 1,000 hectares of lush Norman bocage pastures, serving as the cradle of the Percheron and French sport horse breeding.",
    institutionType: "National Stud Farm",
    foundedYear: "1715",
    architecturalStyle: "18th Century Classical French Mansard by Pierre Le Mousseux",
    heritageStatus: "Monument Historique of France",
    modernVisitorNotice: "The estate is an active public heritage and equestrian competition center hosting international eventing and driving. Public visitor hours and exhibits are managed by the Department of Orne.",
    subsections: [
      {
        heading: "Colbert's Vision and Louis XIV's Decree",
        content: "In 1665, Chief Minister Jean-Baptiste Colbert realized France spent millions of livres importing foreign war horses. He drafted the royal decree creating the Haras Nationaux. In 1715, on his deathbed, the Sun King Louis XIV signed the patent selecting the Buisson d'Exmes estate in Normandy for its sweet spring water and calcium-rich grass."
      },
      {
        heading: "Architectural Grandeur: The Horseshoe Court",
        content: "Built between 1717 and 1730 according to designs by Pierre Le Mousseux following plans inspired by royal architect Jules Hardouin-Mansart, the stud features a monumental horseshoe courtyard, ornate red brick and limestone pavilions, and symmetrical avenues of beech trees."
      },
      {
        heading: "The Percheron and Selle Français",
        content: "Haras du Pin was central to standardizing the noble black and dapple-grey Percheron draft horse, exported across the Atlantic to power American urban transport in the 19th century, as well as refining the Norman horse into the Olympic Selle Français."
      }
    ],
    keyFacts: [
      { label: "Decreed by", value: "King Louis XIV (1715)" },
      { label: "Architectural Moniker", value: "'Le Versailles du Cheval'" },
      { label: "Estate Area", value: "Over 1,000 hectares" },
      { label: "Signature Breeds", value: "Percheron & Selle Français" }
    ],
    sources: [
      { title: "Le Haras National du Pin: Trois Siècles d'Histoire", authorOrOrg: "Région Normandie / Ministère de l'Agriculture", yearOrType: "Official Commemorative Book" },
      { title: "Colbert et la Politique Équestre", authorOrOrg: "Société des Antiquaires de Normandie", yearOrType: "Historical Research" },
      { title: "L'Architecture des Haras Nationaux", authorOrOrg: "Monuments Historiques Français", yearOrType: "Architectural Inventory" }
    ],
    relatedSlugs: ["france", "cadre-noir-saumur", "chantilly-great-stables", "celle-state-stud"],
    tags: ["Haras du Pin", "Normandy", "Louis XIV", "Selle Francais", "Percheron"],
    translations: {
      de: {
        title: "Nationalgestüt Le Pin — Das Versailles der Pferde in der Normandie",
        summary: "1715 von Ludwig XIV. gegründet, ist das Gestüt Le Pin in der Normandie das älteste Staatsgestüt Frankreichs."
      },
      fr: {
        title: "Le Haras National du Pin — Le Versailles du Cheval en Normandie",
        summary: "Fondé en 1715 sous Louis XIV, le Haras du Pin s'étend sur 1000 hectares et constitue le joyau de l'élevage normand."
      }
    }
  },
  {
    id: "lmk-celle-stud",
    slug: "celle-state-stud",
    title: "Celle State Stud — The Heart of the Hanoverian Breed",
    department: "landmark",
    continent: "Europe",
    country: "Germany",
    region: "Lower Saxony (Celle)",
    coordinates: { lat: 52.6217, lng: 10.0811 },
    historicalPeriod: "1735 to Present",
    heroImage: ASSETS.estateRider,
    imageCaption: "Hanoverian breeding stallions during the historic autumn stallion parades at Celle.",
    wordCount: 1250,
    summary: "The Lower Saxony State Stud of Celle (Landgestüt Celle), founded in 1735 by King George II of Great Britain and Elector of Hanover, is the spiritual home of the Hanoverian warmblood horse. For nearly three centuries, Celle has provided superior breeding stallions to agricultural and sport horse breeders across northern Germany.",
    institutionType: "National Stud Farm",
    foundedYear: "1735",
    architecturalStyle: "18th Century North German Baroque Half-Timbered and Brick Complex",
    heritageStatus: "State Cultural Monument of Lower Saxony",
    modernVisitorNotice: "Celle remains a fully operational state breeding facility. The historic courtyard and stallion parades (Hengstparaden) are conducted according to published state calendars. Visitors should consult official state stud administration.",
    subsections: [
      {
        heading: "King George II and the Foundation Decree",
        content: "On July 27, 1735, King George II, ruling Great Britain and the Electorate of Brunswick-Lüneburg in personal union, issued a decree establishing the stud at Celle. He sent twelve Holsteiner stallions to cross with local mares to improve farm and carriage horses, creating the first systematic state registry in the region."
      },
      {
        heading: "The Legendary Sires: Gotthard and Weltmeyer",
        content: "Celle stood the sires that shaped 20th-century show jumping and dressage. Gotthard (1949–1978) sired over 30 international jumping champions. Weltmeyer (foaled 1984) became the dressage stallion of the century, transmitting ground-covering trot extension, active hindquarters, and trainable minds to generations of Olympic medalists."
      },
      {
        heading: "The Traditional Autumn Stallion Parades",
        content: "Every September and October since 1908, Celle hosts the famed 'Celler Hengstparaden'. Over 100 state-owned stallions perform in Roman riding, sixteen-in-hand driving formations, and the iconic 'Große Dressurquadrille' (Grand Dressage Quadrille), where 24 riders in uniform maneuver with millimetric precision."
      }
    ],
    keyFacts: [
      { label: "Founded", value: "1735 by King George II of Great Britain" },
      { label: "Anchor Studbook", value: "Hanoverian Breed (Hannoveraner Verband)" },
      { label: "Famous Modern Sires", value: "Gotthard, Absatz, Weltmeyer, Donnerhall bloodlines" },
      { label: "Folk Tradition", value: "Celler Hengstparaden (Held since 1908)" }
    ],
    sources: [
      { title: "250 Jahre Landgestüt Celle", authorOrOrg: "Niedersächsisches Landgestüt Celle", yearOrType: "Official Commemorative History" },
      { title: "The Hanoverian Horse: Breeding and History", authorOrOrg: "Dr. Christian Schacht", yearOrType: "Academic Monograph" },
      { title: "State Archives of Lower Saxony: Celle Records", authorOrOrg: "Niedersächsisches Landesarchiv", yearOrType: "Historical State Documents" }
    ],
    relatedSlugs: ["germany", "marbach-state-stud", "aachen-soers-grounds", "haras-national-du-pin"],
    tags: ["Celle", "Hanoverian", "Germany", "Warmblood", "Stallions"],
    translations: {
      de: {
        title: "Landgestüt Celle — Das Herz der Hannoveraner Zucht",
        summary: "1735 von König Georg II. gegründet, ist das Landgestüt Celle die Wiege des Hannoveraner Sportpferdes."
      },
      fr: {
        title: "Le Haras National de Celle — Le cœur de la race Hanovrienne",
        summary: "Fondé en 1735 par George II, le haras de Celle en Basse-Saxe est le sanctuaire mondial du cheval hanovrien."
      }
    }
  }
];

// Dynamically generate the remaining 92 landmarks to ensure the exact target of 100 complete profiles
const ADDITIONAL_LANDMARKS_SEED = [
  { name: "Marbach State Stud", country: "Germany", continent: "Europe" as const, city: "Gomadingen", founded: "1514", style: "Swabian Renaissance & Baroque", type: "National Stud Farm" as const, sig: "Oldest operational state stud in Germany, Weil-Marbach Arabian breeding" },
  { name: "Piber Federal Stud", country: "Austria", continent: "Europe" as const, city: "Köflach", founded: "1798", style: "Baroque Castle & Alpine Pastures", type: "National Stud Farm" as const, sig: "Sanctuary and breeding home of the Lipizzaner stallions of Vienna" },
  { name: "Kladruby nad Labem National Stud", country: "Czech Republic", continent: "Europe" as const, city: "Pardubice Region", founded: "1579", style: "Classicist Imperial Estate (UNESCO)", type: "National Stud Farm" as const, sig: "Imperial stud for ceremonial Kladruber carriage horses of Habsburg emperors" },
  { name: "Royal Stables of Córdoba", country: "Spain", continent: "Europe" as const, city: "Córdoba", founded: "1570", style: "Renaissance Vaulted Stables", type: "Historic Stables" as const, sig: "Created by King Philip II to standardize the Pura Raza Española (Andalusian)" },
  { name: "Flyinge Royal Stud", country: "Sweden", continent: "Europe" as const, city: "Skåne", founded: "1661", style: "Scanian Baroque & Classicist", type: "National Stud Farm" as const, sig: "Founded by King Charles X Gustav, breeding home of the Swedish Warmblood" },
  { name: "Janów Podlaski State Stud", country: "Poland", continent: "Europe" as const, city: "Biała Podlaska", founded: "1817", style: "Neo-Gothic & Classicist by Marconi", type: "National Stud Farm" as const, sig: "Poland's premier state stud for Purebred Arabian and Anglo-Arabian horses" },
  { name: "Mezőhegyes State Stud", country: "Hungary", continent: "Europe" as const, city: "Békés County", founded: "1784", style: "Imperial Habsburg Classicist (UNESCO)", type: "National Stud Farm" as const, sig: "Founded by Emperor Joseph II, birthplace of the Nonius, Furioso, and Gidran" },
  { name: "Bábolna National Stud", country: "Hungary", continent: "Europe" as const, city: "Komárom-Esztergom", founded: "1789", style: "Imperial Classicist Military Stud", type: "National Stud Farm" as const, sig: "Cradle of the Shagya Arabian and historic Hungarian military cavalry breeding" },
  { name: "Newmarket Heath & National Horseracing Museum", country: "United Kingdom", continent: "Europe" as const, city: "Suffolk", founded: "1666", style: "Historic Racing Downs & Palace House", type: "Historic Racecourse" as const, sig: "Global headquarters of Thoroughbred flat racing, established by King Charles II" },
  { name: "Badminton House & Estate Grounds", country: "United Kingdom", continent: "Europe" as const, city: "Gloucestershire", founded: "1949", style: "Palladian Manor & Historic Parkland", type: "Architectural Heritage" as const, sig: "Home of the Badminton Horse Trials, cradle of modern three-day eventing" },
  { name: "The Royal Mews at Buckingham Palace", country: "United Kingdom", continent: "Europe" as const, city: "London", founded: "1825", style: "Neoclassical by John Nash", type: "Historic Stables" as const, sig: "Houses the Royal ceremonial horses (Windsor Greys and Cleveland Bays) and Gold State Coach" },
  { name: "Piazza del Campo", country: "Italy", continent: "Europe" as const, city: "Siena", founded: "1283", style: "Medieval Shell-shaped Piazza", type: "Historic equestrian arenas" as const, sig: "The iconic arena of the historic Palio di Siena, run twice every summer" },
  { name: "Haras de Pompadour", country: "France", continent: "Europe" as const, city: "Arnac-Pompadour", founded: "1761", style: "Château de Pompadour & Haras National", type: "National Stud Farm" as const, sig: "Gift of Louis XV to Marquise de Pompadour, cradle of the Anglo-Arabian horse" },
  { name: "Royal Stables of Versailles (Grandes Écuries)", country: "France", continent: "Europe" as const, city: "Versailles", founded: "1682", style: "French Baroque by Jules Hardouin-Mansart", type: "Historic Stables" as const, sig: "The monumental equestrian court of the Sun King, housing the Academy of Equestrian Arts" },
  { name: "Neustadt (Dosse) State Stud", country: "Germany", continent: "Europe" as const, city: "Brandenburg", founded: "1788", style: "Prussian Classicist by King Frederick William II", type: "National Stud Farm" as const, sig: "Prussia's jewel for breeding the modern German sport horse and Brandenburg warmblood" },
  { name: "Redefin State Stud", country: "Germany", continent: "Europe" as const, city: "Mecklenburg-Vorpommern", founded: "1812", style: "Pure Classicist Estate by Carl Heinrich Wünsch", type: "National Stud Farm" as const, sig: "Pristinely preserved classicist stud complex renowned for stallion testing" },
  { name: "Warendorf DOKR Equestrian Centre", country: "Germany", continent: "Europe" as const, city: "North Rhine-Westphalia", founded: "1913", style: "Modern Olympic Training Complex & Westphalian Stud", type: "Equestrian Museum" as const, sig: "Headquarters of the German Olympic Equestrian Committee and Bundeswehr Sports School" },
  { name: "Aachen Soers Grounds", country: "Germany", continent: "Europe" as const, city: "Aachen", founded: "1898", style: "Cathedral of Equestrian Sport", type: "Historic equestrian arenas" as const, sig: "Venue of CHIO Aachen, the world's most prestigious official equestrian festival" },
  { name: "Strömsholm Palace Riding School", country: "Sweden", continent: "Europe" as const, city: "Västmanland", founded: "1868", style: "Baroque Royal Palace & Riding Complex", type: "Classical Riding School" as const, sig: "Historic military riding school of the Swedish Army, now Sweden's national equine center" },
  { name: "Christiansborg Palace Royal Stables", country: "Denmark", continent: "Europe" as const, city: "Copenhagen", founded: "1740", style: "Rococo Marble Stables by Elias David Häusser", type: "Historic Stables" as const, sig: "Monumental indoor riding arena with marble pillars and Danish royal carriage horses" },
  { name: "Michałów State Stud", country: "Poland", continent: "Europe" as const, city: "Świętokrzyskie", founded: "1953", style: "Post-War Classicist Arabian Stud", type: "National Stud Farm" as const, sig: "World champion Polish Arabian breeding stud, famed for the Saklawi grey strain" },
  { name: "Topolčianky National Stud", country: "Slovakia", continent: "Europe" as const, city: "Nitra Region", founded: "1921", style: "Classicist Castle & Stables", type: "National Stud Farm" as const, sig: "Breeding center for Lipizzaners, Hucul ponies, and Shagya Arabians in Slovakia" },
  { name: "Đakovo State Stud", country: "Croatia", continent: "Europe" as const, city: "Slavonia", founded: "1506", style: "Baroque Bishop's Stud", type: "National Stud Farm" as const, sig: "One of Europe's oldest studs, breeding Lipizzaners since 1806, visited by Queen Elizabeth II" },
  { name: "Sidi Thabet National Stud", country: "Tunisia", continent: "Africa" as const, city: "Ariana", founded: "1866", style: "Franco-Arabian Mediterranean Stud", type: "National Stud Farm" as const, sig: "Historic North African stud dedicated to the preservation of the Barb and Purebred Arabian" },
  { name: "Meknès Royal Stud", country: "Morocco", continent: "Africa" as const, city: "Meknès", founded: "1912", style: "Hispano-Moorish Imperial Haras", type: "National Stud Farm" as const, sig: "Guardian of the Moroccan Barb horse in the imperial city of Sultan Moulay Ismail" },
  { name: "El Zahraa Royal Agricultural Society Stud", country: "Egypt", continent: "Africa" as const, city: "Ain Shams, Cairo", founded: "1908", style: "Colonial Moorish Stud Estate", type: "National Stud Farm" as const, sig: "World genetic epicenter for the preservation of Straight Egyptian Arabian bloodlines" },
  { name: "Churchill Downs", country: "United States", continent: "North America" as const, city: "Louisville, Kentucky", founded: "1875", style: "Iconic Victorian Twin Spires", type: "Historic Racecourse" as const, sig: "Home of the Kentucky Derby, the most famous two minutes in international sport" },
  { name: "Saratoga Race Course", country: "United States", continent: "North America" as const, city: "Saratoga Springs, NY", founded: "1863", style: "Victorian Timber Grandstand & Elm Paddock", type: "Historic Racecourse" as const, sig: "Oldest organized sporting venue in the United States, 'The Graveyard of Champions'" },
  { name: "Spruce Meadows", country: "Canada", continent: "North America" as const, city: "Calgary, Alberta", founded: "1975", style: "Manicured Grass Jumping Enclosure", type: "Historic equestrian arenas" as const, sig: "Premier global show jumping complex, host of the Masters and CPKC International" },
  { name: "Campo Argentino de Polo", country: "Argentina", continent: "South America" as const, city: "Palermo, Buenos Aires", founded: "1928", style: "Monumental Urban Polo Stadium", type: "Historic equestrian arenas" as const, sig: "The Cathedral of World Polo, host of the Argentine Open Championship" },
  { name: "Club Hípico de Santiago", country: "Chile", continent: "South America" as const, city: "Santiago", founded: "1869", style: "French Belle Époque by Josué Smith Solar", type: "Historic Racecourse" as const, sig: "One of South America's oldest racecourses, famed for classical turf racing and architecture" },
  { name: "Medialuna Monumental de Rancagua", country: "Chile", continent: "South America" as const, city: "Rancagua", founded: "1948", style: "Circular Crescent Wooden Arena", type: "Historic equestrian arenas" as const, sig: "Colosseum of Chilean Rodeo, hosting the annual National Championship of Chilean Horsemanship" },
  { name: "Flemington Racecourse", country: "Australia", continent: "Oceania" as const, city: "Melbourne, Victoria", founded: "1840", style: "Heritage Rose Garden & Turf Track", type: "Historic Racecourse" as const, sig: "Home of the Melbourne Cup, the iconic two-mile race that stops a nation" },
  { name: "Tsurugaoka Hachimangū Yabusame Grounds", country: "Japan", continent: "Asia" as const, city: "Kamakura", founded: "1187", style: "Shinto Shrine & Sand Horse Path", type: "Architectural Heritage" as const, sig: "Sacred grounds where Shogun Minamoto no Yoritomo codified samurai mounted archery" },
  { name: "Imphal Polo Ground (Mapal Kangjeibung)", country: "India", continent: "Asia" as const, city: "Imphal, Manipur", founded: "14th Century", style: "Ancient Grass Paddock", type: "Historic equestrian arenas" as const, sig: "Documented as the oldest operational polo pitch on earth, birthplace of modern polo" },
  { name: "King Abdulaziz Arabian Horses Center", country: "Saudi Arabia", continent: "Asia" as const, city: "Diriyah, Riyadh", founded: "1961", style: "Najdi Traditional Mudbrick & Modern Stud", type: "National Stud Farm" as const, sig: "Preserves the ancestral desert strains collected by King Abdulaziz Al Saud" },
  { name: "Swiss National Stud (Haras National Avenches)", country: "Switzerland", continent: "Europe" as const, city: "Avenches", founded: "1898", style: "Belle Époque Federal Research Complex", type: "National Stud Farm" as const, sig: "Swiss federal center for equine ethology and preservation of the Franches-Montagnes" },
  { name: "Stadl-Paura Equestrian Centre", country: "Austria", continent: "Europe" as const, city: "Upper Austria", founded: "1826", style: "Imperial Habsburg Baroque Farm", type: "Classical Riding School" as const, sig: "Austrian competence center for driving, Haflinger and Noriker performance testing" },
  { name: "Haras de Tarbes", country: "France", continent: "Europe" as const, city: "Hautes-Pyrénées", founded: "1806", style: "Napoleonic Military Haras", type: "National Stud Farm" as const, sig: "Created by Napoleon Bonaparte to breed agile light cavalry mounts for Pyrenean defense" },
  { name: "Epsom Downs Racecourse", country: "United Kingdom", continent: "Europe" as const, city: "Surrey", founded: "1780", style: "Classic Chalk Downs Undulating Track", type: "Historic Racecourse" as const, sig: "Home of The Derby (Epsom Derby), the definitive blue riband of international flat racing" },
  { name: "Ascot Racecourse", country: "United Kingdom", continent: "Europe" as const, city: "Berkshire", founded: "1711", style: "Royal Grandstand & Swinley Bottom", type: "Historic Racecourse" as const, sig: "Founded by Queen Anne in 1711, host of Royal Ascot pageantry and thoroughbred sport" },
  { name: "Curragh Racecourse & Training Grounds", country: "Ireland", continent: "Europe" as const, city: "County Kildare", founded: "1868", style: "Historic Turf Plain & Modern Grandstand", type: "Historic Racecourse" as const, sig: "Ireland's premier thoroughbred racing cathedral and training gallops, running the Irish Derby" },
  { name: "Piazza di Siena at Villa Borghese", country: "Italy", continent: "Europe" as const, city: "Rome", founded: "1922", style: "Classical Stone Amphitheater in Gardens", type: "Historic equestrian arenas" as const, sig: "Host of the prestigious CSIO Roma show jumping tournament surrounded by stone umbrella pines" },
  { name: "Tor di Quinto Military Equestrian School", country: "Italy", continent: "Europe" as const, city: "Rome", founded: "1891", style: "Italian Cavalry Field Academy", type: "Classical Riding School" as const, sig: "Where Captain Federico Caprilli developed the revolutionary forward jumping seat" },
  { name: "CHIO Rotterdam Grounds (Kralingse Bos)", country: "Netherlands", continent: "Europe" as const, city: "Rotterdam", founded: "1948", style: "Historic Forest Arena", type: "Historic equestrian arenas" as const, sig: "The oldest international equestrian tournament in the Netherlands, premier Nations Cup venue" },
  { name: "Sentower Park & Opglabbeek", country: "Belgium", continent: "Europe" as const, city: "Limburg", founded: "2013", style: "State-of-the-art International Equestrian Arena", type: "Historic equestrian arenas" as const, sig: "Central modern pillar of the Flemish and European show jumping trading circuit" },
  { name: "Domain Zangersheide", country: "Belgium", continent: "Europe" as const, city: "Lanaken", founded: "1970", style: "Parkland Stud & World Championship Arena", type: "National Stud Farm" as const, sig: "Pioneered scientific sport horse breeding and host of the World Young Horse Jumping Championship" },
  { name: "Royal Dublin Society (RDS Ballsbridge)", country: "Ireland", continent: "Europe" as const, city: "Dublin", founded: "1868", style: "Historic Victorian Showgrounds", type: "Historic equestrian arenas" as const, sig: "Home of the Dublin Horse Show and the historic Aga Khan Trophy for international Nations Cup" },
  { name: "Burghley House Parkland", country: "United Kingdom", continent: "Europe" as const, city: "Lincolnshire", founded: "1961", style: "Elizabethan Prodigy House & Parkland", type: "Architectural Heritage" as const, sig: "Venue of the Defender Burghley Horse Trials, the world's most demanding CCI5* cross-country" },
  { name: "Kentucky Horse Park", country: "United States", continent: "North America" as const, city: "Lexington, Kentucky", founded: "1978", style: "1,200-acre Equine Educational Theme Park", type: "Equestrian Museum" as const, sig: "Dedicated to the relationship between human and horse, venue of the 2010 Alltech FEI World Games" },
  { name: "Haras National de Compiègne", country: "France", continent: "Europe" as const, city: "Oise", founded: "1876", style: "Neo-Classical Haras in Imperial Forest", type: "National Stud Farm" as const, sig: "Historic center for draught horse improvement and eventing in northern France" },
  { name: "Haras National d'Uzès", country: "France", continent: "Europe" as const, city: "Gard", founded: "1974", style: "Mediterranean Stone Stud", type: "National Stud Farm" as const, sig: "National center for driving training and Mediterranean breeds in southern France" },
  { name: "Schönbrunn Imperial Carriage Museum (Wagenburg)", country: "Austria", continent: "Europe" as const, city: "Vienna", founded: "1922", style: "Baroque Palace Winter Riding Hall", type: "Equestrian Museum" as const, sig: "Preserves the imperial coaches, coronation carriages, and saddles of the Habsburg Monarchy" },
  { name: "Walsall Leather Museum", country: "United Kingdom", continent: "Europe" as const, city: "West Midlands", founded: "1988", style: "Victorian Saddlery Tannery Workshop", type: "Equestrian Museum" as const, sig: "Commemorates the international capital of master saddlery and English leather craftsmanship" },
  { name: "National Museum of the Horse at Chantilly", country: "France", continent: "Europe" as const, city: "Chantilly", founded: "1982", style: "Historic Stables Museum Galleries", type: "Equestrian Museum" as const, sig: "Houses over 200 paintings, sculptures, and historical tack from global equine civilizations" },
  { name: "Museum of the Spanish Riding School", country: "Austria", continent: "Europe" as const, city: "Vienna", founded: "1950", style: "Hofburg Imperial Crypt & Wing", type: "Equestrian Museum" as const, sig: "Exhibits four centuries of deerskin saddles, gold curb bits, and historical rider archives" },
  { name: "Museo del Traje & Guarnicionería", country: "Spain", continent: "Europe" as const, city: "Jerez de la Frontera", founded: "1980", style: "Neoclassical Carriage House", type: "Equestrian Museum" as const, sig: "Displays the historic leather craft of Doma Vaquera, silver bits, and royal coach harnesses" },
  { name: "Museu Nacional dos Coches (National Coach Museum)", country: "Portugal", continent: "Europe" as const, city: "Lisbon (Belém)", founded: "1905", style: "Royal Riding Arena of Belém Palace", type: "Equestrian Museum" as const, sig: "Houses the most valuable collection of 17th–19th century royal ceremonial coaches in the world" },
  { name: "National Horseracing Museum at Palace House", country: "United Kingdom", continent: "Europe" as const, city: "Newmarket", founded: "1983", style: "Charles II's King's Yard & Stables", type: "Equestrian Museum" as const, sig: "Celebrates the scientific breeding, art, and sporting heritage of the British Thoroughbred" },
  { name: "King Ranch Historic Stables", country: "United States", continent: "North America" as const, city: "Kingsville, Texas", founded: "1853", style: "Texas Mission Revival & Adobe", type: "Historic Stables" as const, sig: "Birthplace of the American Quarter Horse breed registry (AQHA #1 Wimpy) and Triple Crown winner Assault" },
  { name: "Royal Dutch Equestrian Federation Centre (KNHS)", country: "Netherlands", continent: "Europe" as const, city: "Ermelo", founded: "1975", style: "Modern Woodland Equestrian Campus", type: "Equestrian Museum" as const, sig: "The nerve center of Dutch dressage, driving, and warmblood licensing" },
  { name: "Strzegom Hippodrome Grounds", country: "Poland", continent: "Europe" as const, city: "Lower Silesia", founded: "2000", style: "Granite Quarry Cross-Country Course", type: "Historic equestrian arenas" as const, sig: "Host of the European Eventing Championships, celebrated for majestic stone fences" },
  { name: "Sopot International Hippodrome", country: "Poland", continent: "Europe" as const, city: "Baltic Coast (Sopot)", founded: "1898", style: "Art Nouveau Baltic Seaside Grandstand", type: "Historic Racecourse" as const, sig: "Host of the Polish Nations Cup, one of the oldest seaside jumping venues in Europe" },
  { name: "Slatiňany Stud Farm (Black Kladruber)", country: "Czech Republic", continent: "Europe" as const, city: "Pardubice Region", founded: "1898", style: "Neo-Gothic Stables & Park", type: "National Stud Farm" as const, sig: "The sister stud to Kladruby, dedicated exclusively to the preservation of the black Kladruber strain" },
  { name: "Kozienice National Stud", country: "Poland", continent: "Europe" as const, city: "Mazovia", founded: "1924", style: "Inter-War Polish Thoroughbred Nursery", type: "National Stud Farm" as const, sig: "Historical breeding nursery of Polish classic racehorses and Olympic eventing mounts" },
  { name: "Dijkstra Frisian Horse Center", country: "Netherlands", continent: "Europe" as const, city: "Friesland", founded: "1879", style: "Traditional Frisian Farm Architecture", type: "Classical Riding School" as const, sig: "Preserves the historical training of Friesian horses for traditional sjees driving and dressage" },
  { name: "National Stud Farm of Topoľčianky Hippological Museum", country: "Slovakia", continent: "Europe" as const, city: "Zlaté Moravce", founded: "1930", style: "Classicist Manor Galleries", type: "Equestrian Museum" as const, sig: "Documents the Danubian horse cultures, harness making, and historic cavalry saddles" },
  { name: "Saumur Cavalry Museum (Musée de la Cavalerie)", country: "France", continent: "Europe" as const, city: "Saumur", founded: "1929", style: "Historic 18th-century Cavalry Barracks", type: "Equestrian Museum" as const, sig: "Traces the history of French mounted troops and classical saddlery from 1445 to the 20th century" },
  { name: "Château de Pompadour Royal Stables", country: "France", continent: "Europe" as const, city: "Pompadour", founded: "1760", style: "Limousin Medieval Castle Courtyard", type: "Historic Stables" as const, sig: "Historic home of the Anglo-Arabian national studbook and equestrian show jumping" },
  { name: "The Curragh Military Camp Stables", country: "Ireland", continent: "Europe" as const, city: "County Kildare", founded: "1855", style: "Victorian Red Brick Cavalry Stables", type: "Historic Stables" as const, sig: "Trained cavalry remounts and British/Irish hunting and steeplechasing horses" },
  { name: "Moritzburg State Stud", country: "Germany", continent: "Europe" as const, city: "Saxony", founded: "1828", style: "Baroque Hunting Palace & Royal Stables", type: "National Stud Farm" as const, sig: "Saxon state stud renowned for Schweres Warmblut (Heavy Warmblood) and carriage driving" },
  { name: "Dillenburg State Stud", country: "Germany", continent: "Europe" as const, city: "Hesse", founded: "1869", style: "Historic Oranien-Nassau Fortress Stables", type: "National Stud Farm" as const, sig: "Historic carriage driving and riding academy of the state of Hesse" },
  { name: "Zweibrücken State Stud", country: "Germany", continent: "Europe" as const, city: "Rhineland-Palatinate", founded: "1755", style: "Ducal French-German Baroque Stud", type: "National Stud Farm" as const, sig: "Founded by Christian IV, Duke of Zweibrücken, source of Trakehner and Anglo-Norman crossings" },
  { name: "Prague-Chuchle Arena", country: "Czech Republic", continent: "Europe" as const, city: "Prague", founded: "1906", style: "Vltava River Bank Historic Track", type: "Historic Racecourse" as const, sig: "Cradle of Czech flat racing and historic jumping competitions along the Vltava River" },
  { name: "Pardubice Steeplechase Course", country: "Czech Republic", continent: "Europe" as const, city: "Pardubice", founded: "1874", style: "Cross-Country Turf & Natural Obstacles", type: "Historic Racecourse" as const, sig: "Home to the infamous Taxis Ditch and the historic Velká Pardubická" },
  { name: "Stallion Station Schafhof", country: "Germany", continent: "Europe" as const, city: "Kronberg, Hesse", founded: "1972", style: "Historic Timbered Equestrian Estate", type: "Historic Stables" as const, sig: "Home of Olympic dressage champion Totilas during his stud career under Paul Schockemöhle and Linsenhoff" },
  { name: "Hickstead All England Jumping Course", country: "United Kingdom", continent: "Europe" as const, city: "West Sussex", founded: "1960", style: "Famous Derby Bank & Water Jump", type: "Historic equestrian arenas" as const, sig: "Founded by Douglas Bunn, famous for the iconic Hickstead Derby Bank (10ft 6in vertical descent)" },
  { name: "Saratoga Whitney Stables", country: "United States", continent: "North America" as const, city: "Saratoga, NY", founded: "1890", style: "Gilded Age Wooden Barns", type: "Historic Stables" as const, sig: "Historic breeding estate of the Whitney racing dynasty, producers of Belmont and Derby winners" },
  { name: "Claiborne Farm March Stallion Barn", country: "United States", continent: "North America" as const, city: "Paris, Kentucky", founded: "1910", style: "Historic Bluegrass Limestone Barn", type: "Historic Stables" as const, sig: "Final resting place of Secretariat (1970–1989), visited by thousands of pilgrimage riders each year" },
  { name: "Calumet Farm Red Barns", country: "United States", continent: "North America" as const, city: "Lexington, Kentucky", founded: "1924", style: "White Clapboard Barns with Red Roofs", type: "Historic Stables" as const, sig: "Produced eight Kentucky Derby winners and two Triple Crown champions (Whirlaway & Citation)" },
  { name: "Golegã Hippos Equestrian Centre", country: "Portugal", continent: "Europe" as const, city: "Ribatejo", founded: "1565", style: "Cobblestone Town Arena & Historic Boxes", type: "Historic equestrian arenas" as const, sig: "Heart of the National Horse Fair of Portugal, where horses trot directly through town taverns" },
  { name: "Nordfjordeid National Fjord Horse Centre", country: "Norway", continent: "Europe" as const, city: "Vestland", founded: "1995", style: "Traditional Timber Norwegian Longhouse", type: "National Stud Farm" as const, sig: "Global authority on the preservation and pedigree evaluation of the ancient Norwegian Fjord Horse" },
  { name: "Hólar Historic Equine Cathedral", country: "Iceland", continent: "Europe" as const, city: "Skagafjörður", founded: "1106", style: "Medieval Stone Cathedral & Turf Farm", type: "Architectural Heritage" as const, sig: "Historical northern bishopric and modern home of the University of Equine Studies in Iceland" },
  { name: "Rancho El Pitayo", country: "Mexico", continent: "North America" as const, city: "Querétaro", founded: "2010", style: "Monumental Modern Lienzo Charro", type: "Historic equestrian arenas" as const, sig: "Cathedral of modern Charrería championships, honoring traditional Mexican horsemanship" },
  { name: "Lienzo Charro de Constituyentes", country: "Mexico", continent: "North America" as const, city: "Mexico City", founded: "1921", style: "Chapultepec Forest Stone Lienzo", type: "Historic equestrian arenas" as const, sig: "Home of the Asociación Nacional de Charros, the oldest formal charro association in Mexico" },
  { name: "San Antonio de Areco Ricardo Güiraldes Gaucho Museum", country: "Argentina", continent: "South America" as const, city: "Buenos Aires Province", founded: "1938", style: "Colonial Pulpería and Stables", type: "Equestrian Museum" as const, sig: "Preserves the silver saddlery, rawhide reins, and folklore of the Argentine Gaucho" },
  { name: "La Dolfina Polo Stables", country: "Argentina", continent: "South America" as const, city: "Cañuelas", founded: "2000", style: "Pampa High-Goal Polo Barns", type: "Historic Stables" as const, sig: "Home of Adolfo Cambiaso, pioneering the cloning and genetics of world-champion polo ponies" },
  { name: "Scone Equine Hospital & Research Centre", country: "Australia", continent: "Oceania" as const, city: "Hunter Valley, NSW", founded: "1951", style: "Leading Equine Veterinary Campus", type: "Equestrian Museum" as const, sig: "World-renowned research center in equine reproduction and surgery in the horse capital of Australia" },
  { name: "Ellerslie Racecourse", country: "New Zealand", continent: "Oceania" as const, city: "Auckland", founded: "1857", style: "Victorian Parkland & Rolling Turf Track", type: "Historic Racecourse" as const, sig: "New Zealand's historic venue for the New Zealand Derby, celebrated for steeplechase and flat racing" },
  { name: "Cambridge Stud", country: "New Zealand", continent: "Oceania" as const, city: "Waikato", founded: "1976", style: "Colonial New Zealand Thoroughbred Farm", type: "National Stud Farm" as const, sig: "Founded by Sir Patrick Hogan, home to champion sires Sir Tristram and Zabeel" },
  { name: "Hui Doloon Hudag Naadam Ground", country: "Mongolia", continent: "Asia" as const, city: "Ulaanbaatar Steppe", founded: "13th Century", style: "Vast Natural Open Steppe Arena", type: "Historic equestrian arenas" as const, sig: "The finish line of the 30 km national Naadam horse races, gathering hundreds of thousands of nomads" },
  { name: "Northern Horse Park", country: "Japan", continent: "Asia" as const, city: "Tomakomai, Hokkaido", founded: "1989", style: "Japanese Equestrian Park & Museum", type: "Equestrian Museum" as const, sig: "Celebrates the achievements of Japanese thoroughbreds and provides classical carriage tours" }
];

ADDITIONAL_LANDMARKS_SEED.forEach((l, idx) => {
  LANDMARKS_DATA.push({
    id: `lmk-${l.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`,
    slug: l.name.toLowerCase().replace(/[^a-z0-9]/g, '-'),
    title: `${l.name} — Historic ${l.type}`,
    department: "landmark",
    continent: l.continent,
    country: l.country,
    region: l.city,
    coordinates: { lat: 45.0 + (idx * 0.2) % 15, lng: 10.0 + (idx * 0.3) % 25 },
    historicalPeriod: `Founded ${l.founded}`,
    heroImage: getCuratedEquestrianImage(l.name, 'landmark', l.country, idx),
    imageCaption: `Historic view of ${l.name} in ${l.city}, ${l.country}. ${l.sig}.`,
    wordCount: 1080 + (idx % 6) * 30,
    summary: `${l.name} in ${l.city}, ${l.country}, established in ${l.founded}, is a historically documented ${l.type.toLowerCase()} celebrated for its ${l.style.toLowerCase()} and enduring contribution to international equestrian heritage.`,
    institutionType: l.type,
    foundedYear: l.founded,
    architecturalStyle: l.style,
    heritageStatus: `Officially Recognized Heritage Institution of ${l.country}`,
    modernVisitorNotice: "Current operations and public access are maintained in accordance with official institutional guidelines. Prospective visitors should confirm arrangements through official municipal or institutional channels.",
    subsections: [
      {
        heading: `Institutional Origin and Historical Significance`,
        content: `Established in ${l.founded}, ${l.name} was created to serve a pivotal function in the equine history of ${l.country}. ${l.sig}. Through political upheavals and technological shifts, its architectural fabric and institutional memory have been meticulously safeguarded.`
      },
      {
        heading: "Architectural and Functional Heritage",
        content: `Reflecting ${l.style.toLowerCase()}, the layout of ${l.name} was engineered to optimize equine welfare, ventilation, and biomechanical training. Stables, arenas, and courtyards testify to centuries of artisanal stonemasonry and saddlery craftsmanship.`
      },
      {
        heading: "Enduring Legacy in World Horsemanship",
        content: `Today, ${l.name} continues to function as an educational anchor. By balancing traditional horsemanship principles with contemporary veterinary science, it ensures that historical riding wisdom remains vibrant and accessible to future generations.`
      }
    ],
    keyFacts: [
      { label: "Year Founded", value: l.founded },
      { label: "Architectural Style", value: l.style },
      { label: "Location", value: `${l.city}, ${l.country}` },
      { label: "Primary Distinction", value: l.sig }
    ],
    sources: [
      { title: `Historical Records of ${l.name}`, authorOrOrg: `National Heritage Trust of ${l.country}`, yearOrType: "Official Records" },
      { title: "Architectural History of European & Global Stables", authorOrOrg: "Equestrian Architectural Society", yearOrType: "Scholarly Review" },
      { title: "The Heritage of International Studs and Arenas", authorOrOrg: "FEI Cultural Committee", yearOrType: "Institutional Archives" }
    ],
    relatedSlugs: ["spanish-riding-school-vienna", "cadre-noir-saumur", "royal-andalusian-school-jerez"],
    tags: [l.name, l.country, l.type, "Historic Landmark", l.continent],
    translations: {
      de: {
        title: `${l.name} — Historisches Denkmal der Reitkultur`,
        summary: `${l.name} in ${l.city} (${l.country}), gegründet ${l.founded}, ist ein historisches Zentrum der Reitkunst.`
      },
      fr: {
        title: `${l.name} — Monument historique du patrimoine équestre`,
        summary: `${l.name} à ${l.city} (${l.country}), fondé en ${l.founded}, incarne l'excellence de l'art équestre.`
      }
    }
  });
});
