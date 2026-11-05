export type ContentDepartment = 'country' | 'destination' | 'landmark' | 'event';

export type Continent = 
  | 'Europe' 
  | 'North America' 
  | 'South America' 
  | 'Asia' 
  | 'Africa' 
  | 'Oceania';

export interface VerifiedSource {
  title: string;
  authorOrOrg: string;
  yearOrType: string;
  url?: string;
  archiveReference?: string;
}

export interface BaseProfile {
  id: string;
  slug: string;
  title: string;
  department: ContentDepartment;
  continent: Continent;
  country: string;
  region?: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  summary: string;
  historicalPeriod: string;
  heroImage: string;
  imageCaption: string;
  wordCount: number;
  subsections: {
    heading: string;
    content: string;
  }[];
  keyFacts: {
    label: string;
    value: string;
  }[];
  sources: VerifiedSource[];
  relatedSlugs: string[];
  tags: string[];
  // Multilingual translations
  translations?: {
    de?: {
      title: string;
      summary: string;
    };
    fr?: {
      title: string;
      summary: string;
    };
  };
}

export interface CountryGuide extends BaseProfile {
  department: 'country';
  capital: string;
  horseCultureOverview: string;
  traditionalDisciplines: string[];
  indigenousBreeds: string[];
  equestrianCraftsmanship: string;
  landmarkSites: string[];
  horseWelfareHeritage: string;
}

export interface EquestrianDestination extends BaseProfile {
  department: 'destination';
  landscapeType: string;
  associatedBreeds: string[];
  ridingTradition: string;
  conservationAndTourism: string;
  scenicHighlights: string[];
}

export interface HeritageLandmark extends BaseProfile {
  department: 'landmark';
  institutionType: 
    | 'Classical Riding School' 
    | 'National Stud Farm' 
    | 'Historic Stables' 
    | 'Historic Racecourse' 
    | 'Equestrian Museum' 
    | 'Royal Academy' 
    | 'Architectural Heritage'
    | 'Historic equestrian arenas';
  foundedYear: string;
  architecturalStyle: string;
  heritageStatus: string;
  modernVisitorNotice: string;
}

export interface HistoricEvent extends BaseProfile {
  department: 'event';
  eventCategory: 
    | 'Olympic Milestone' 
    | 'Classical Championship' 
    | 'Show Jumping Milestone' 
    | 'Three-Day Eventing Milestone' 
    | 'Traditional Festival' 
    | 'Ancient & Renaissance Milestone';
  year: number;
  historicalEra: string;
  primaryDiscipline: string;
  keyHistoricalFigures: string[];
  impactOnHorsemanship: string;
}

export type EquestrianProfile = CountryGuide | EquestrianDestination | HeritageLandmark | HistoricEvent;

export interface TimelineMilestone {
  year: number | string;
  yearNumeric: number;
  title: string;
  era: string;
  location: string;
  summary: string;
  relatedSlug: string;
  category: 'origins' | 'classical' | 'sport' | 'studs' | 'olympics';
}
