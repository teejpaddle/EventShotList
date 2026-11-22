/**
 * Camera brands used by the brand switcher on the settings pages.
 *
 * Menu names on this site were checked against each model's official online
 * manual (linked below). Other models in the same line use similar menus,
 * but names and locations can differ.
 */

export type BrandId = 'sony' | 'canon' | 'nikon';

/** Text that is the same for every brand, or different per brand. */
export type BrandText = string | Record<BrandId, string>;

export interface Brand {
  id: BrandId;
  name: string;
  /** The model the menu names were checked against. */
  basedOn: string;
  manualUrl: string;
  manualsHome: string;
  manualsHomeLabel: string;
}

export const brands: Brand[] = [
  {
    id: 'sony',
    name: 'Sony',
    basedOn: 'Sony Alpha 7 IV (ILCE-7M4)',
    manualUrl: 'https://helpguide.sony.net/ilc/2110/v1/en/index.html',
    manualsHome: 'https://helpguide.sony.net/',
    manualsHomeLabel: 'Sony Help Guides',
  },
  {
    id: 'canon',
    name: 'Canon',
    basedOn: 'Canon EOS R6 Mark II',
    manualUrl: 'https://cam.start.canon/en/C012/manual/html/',
    manualsHome: 'https://cam.start.canon/en/',
    manualsHomeLabel: 'Canon online manuals',
  },
  {
    id: 'nikon',
    name: 'Nikon',
    basedOn: 'Nikon Z6III',
    manualUrl: 'https://onlinemanual.nikonimglib.com/z6III/en/index.html',
    manualsHome: 'https://onlinemanual.nikonimglib.com/portal/en/',
    manualsHomeLabel: 'Nikon online manuals',
  },
];

export const DEFAULT_BRAND: BrandId = 'sony';

/** A setting card: the setting, a starting value, why, and what to do if it looks wrong. */
export interface SettingCard {
  setting: string;
  start: BrandText;
  why: string;
  fix: BrandText;
}

/** A scenario preset: a short list of starting values plus one tip. */
export interface Scenario {
  id: string;
  title: string;
  when: string;
  values: { label: string; value: BrandText }[];
  tip: string;
}

/** One row of "where to find it on your camera". */
export interface MenuRow {
  setting: string;
  path: Record<BrandId, string>;
}

/** Resolve brand-specific text for one brand. */
export function forBrand(value: BrandText, brand: BrandId): string {
  return typeof value === 'string' ? value : value[brand];
}
