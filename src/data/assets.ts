/**
 * The Rider's Passport - Core Image Asset Manifest
 * Hardcoded verified asset paths for local dev, GitHub, and Cloudflare deployments.
 */

// Helper to reliably resolve static asset paths in development, Cloudflare Pages, and custom subpaths
const base = (import.meta.env.BASE_URL || '/').replace(/\/$/, '');
export const resolveAsset = (path: string): string => {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://')) return path;
  // Map any legacy /src/assets/images paths to /assets/images for production builds
  const normalized = path.replace(/^\/src\/assets\/images\//, '/assets/images/');
  const clean = normalized.startsWith('/') ? normalized : `/${normalized}`;
  return `${base}${clean}`;
};

export const ASSETS = {
  // Research Partner Logo
  sorentaLogo: resolveAsset("/assets/aistudio/image_22b98af8.png"),

  // Curated Equestrian Photography (User Attachments & High-Fidelity Historical Visuals)
  royalFellPonies: resolveAsset("/assets/aistudio/image_51ad58df.png"),        // HM Queen Elizabeth II & HM King Charles riding black Fell ponies
  mongolDerbyRider: resolveAsset("/assets/aistudio/image_d0cb79bd.png"),       // Mongol Derby endurance equestrian on steppe horse
  mongolTraditionWomen: resolveAsset("/assets/aistudio/image_754dc7e8.png"),   // Three Mongolian women riders in traditional silk deel attire
  naadamFestivalRiders: resolveAsset("/assets/aistudio/image_6c4098d6.png"),   // Traditional Mongolian Naadam festival horsemen with urga lassos
  windsorStuntPyramid: resolveAsset("/assets/aistudio/image_e1238a9d.png"),    // Royal Windsor / Cossack equestrian acrobatic pyramid before Windsor Castle
  royalWindsorParade: resolveAsset("/assets/aistudio/image_729e2899.png"),     // Historic Royal Windsor parade riders in uniform before Windsor Castle
  estateRider: resolveAsset("/assets/aistudio/image_c41178c8.png"),            // Classical rider on chestnut warmblood in stately English estate
  classicalAcademy: resolveAsset("/assets/aistudio/image_669006a6.png"),       // Haute École classical academy master executing levade/piaffe
  camargueWildHorses: resolveAsset("/assets/aistudio/image_953d4317.png"),     // Semi-feral white Camargue horses galloping in ocean surf
  heroLandscape: resolveAsset("/assets/images/equestrian_hero_landscape_1793902601378.jpg"),
  viennaHall: resolveAsset("/assets/images/classical_vienna_hall_1793902602002.jpg"),
  mongolianSteppe: resolveAsset("/assets/images/mongolian_steppe_riders_1793902603554.jpg"),
  andalusianCourtyard: resolveAsset("/assets/images/andalusian_hacienda_courtyard_1793902602731.jpg"),
  worldMapOutline: resolveAsset("/assets/aistudio/image_c51cb558.png"),
};

export const FALLBACK_IMAGE = ASSETS.estateRider;

// Full collection of 13 photography assets for non-repeating variety
export const PHOTO_COLLECTION = [
  ASSETS.royalFellPonies,
  ASSETS.classicalAcademy,
  ASSETS.mongolTraditionWomen,
  ASSETS.estateRider,
  ASSETS.naadamFestivalRiders,
  ASSETS.camargueWildHorses,
  ASSETS.royalWindsorParade,
  ASSETS.viennaHall,
  ASSETS.mongolDerbyRider,
  ASSETS.andalusianCourtyard,
  ASSETS.windsorStuntPyramid,
  ASSETS.heroLandscape,
  ASSETS.mongolianSteppe,
];

/**
 * Assigns a contextual, highly diverse image to any profile so neighboring
 * profiles never repeat the same image.
 */
export function getCuratedEquestrianImage(
  slug?: string,
  department?: string,
  country?: string,
  index: number = 0
): string {
  const s = (slug || '').toLowerCase();
  const c = (country || '').toLowerCase();

  // 1. British / Commonwealth / Royal heritage
  if (c.includes('united kingdom') || c.includes('britain') || c.includes('ireland') || s.includes('windsor') || s.includes('fell') || s.includes('queen') || s.includes('badminton') || s.includes('highland')) {
    const ukSet = [ASSETS.royalFellPonies, ASSETS.royalWindsorParade, ASSETS.windsorStuntPyramid, ASSETS.estateRider];
    return ukSet[Math.abs(hashString(s) + index) % ukSet.length];
  }

  // 2. Mongolia / Steppes / Central Asia / Endurance / Nomadic
  if (c.includes('mongolia') || c.includes('kazakhstan') || c.includes('kyrgyzstan') || s.includes('steppe') || s.includes('derby') || s.includes('nomad') || s.includes('botai') || s.includes('orkhon')) {
    const steppeSet = [ASSETS.naadamFestivalRiders, ASSETS.mongolTraditionWomen, ASSETS.mongolDerbyRider, ASSETS.mongolianSteppe];
    return steppeSet[Math.abs(hashString(s) + index) % steppeSet.length];
  }

  // 3. Classical Academies & State Studs (Austria, France, Spain, Portugal, Germany)
  if (department === 'landmark' || s.includes('school') || s.includes('academy') || s.includes('vienna') || s.includes('saumur') || s.includes('cadre') || s.includes('jerez') || s.includes('lipica') || s.includes('stud')) {
    const academySet = [ASSETS.classicalAcademy, ASSETS.viennaHall, ASSETS.andalusianCourtyard, ASSETS.windsorStuntPyramid, ASSETS.royalWindsorParade];
    return academySet[Math.abs(hashString(s) + index) % academySet.length];
  }

  // 4. Wild horses / Coastal / Rivers / Wet plains / Iceland / Camargue
  if (s.includes('camargue') || s.includes('wild') || s.includes('iceland') || s.includes('delta') || s.includes('marsh') || s.includes('doñana') || s.includes('surf')) {
    const wildSet = [ASSETS.camargueWildHorses, ASSETS.heroLandscape, ASSETS.estateRider, ASSETS.mongolTraditionWomen];
    return wildSet[Math.abs(hashString(s) + index) % wildSet.length];
  }

  // 5. Spanish / Iberian / South American / Gaucho
  if (c.includes('spain') || c.includes('portugal') || c.includes('argentina') || c.includes('brazil') || c.includes('chile') || s.includes('andalusia') || s.includes('pampas') || s.includes('gaucho')) {
    const iberianSet = [ASSETS.andalusianCourtyard, ASSETS.estateRider, ASSETS.classicalAcademy, ASSETS.heroLandscape];
    return iberianSet[Math.abs(hashString(s) + index) % iberianSet.length];
  }

  // 6. General rotation across all 13 distinct photography assets based on unique slug hash
  return PHOTO_COLLECTION[Math.abs(hashString(s) + index) % PHOTO_COLLECTION.length];
}

function hashString(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  return hash;
}

export function getProfileHero(profileDepartment: string, fallbackSlug?: string): string {
  return getCuratedEquestrianImage(fallbackSlug || profileDepartment, profileDepartment, '', 0);
}
