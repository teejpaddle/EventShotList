/**
 * Coverage plan — the source of truth for every event on the site.
 *
 * To add or change an event, edit the `events` list below. Each staffing line
 * is one entry: { count, side, roles }.
 *   count  how many people
 *   side   'Bhaiyo' or 'Baheno' (the two wings' media teams)
 *   roles  ['Primary'], ['Secondary'], ['Primary', 'Secondary'], or [] if the plan
 *          lists no role (leave it empty rather than guessing)
 *
 * `gallery` picks which example-shot gallery appears on the event page
 * (see src/data/galleries.ts), or null if there are no examples yet.
 * `parent` links a Mahila event to its main event.
 * Summary counts on the site are calculated from this list automatically.
 */

export type Season = 'Spring' | 'Summer' | 'Fall' | 'Winter';
export type Coverage = 'Photo Only' | 'Photo & Video';
export type Side = 'Bhaiyo' | 'Baheno';
export type Role = 'Primary' | 'Secondary';

export interface Staff {
  count: number;
  side: Side;
  roles: Role[];
}

export interface EventItem {
  slug: string;
  name: string;
  season: Season;
  coverage: Coverage;
  photo: Staff[];
  video: Staff[];
  gallery: 'diwali' | 'kdc' | 'samaiyo' | null;
  parent?: string;
}

export const SEASONS: Season[] = ['Spring', 'Summer', 'Fall', 'Winter'];

export const events: EventItem[] = [
  {
    slug: 'swaminarayan-jayanti-ram-navmi',
    name: 'Swaminarayan Jayanti & Ram Navmi',
    season: 'Spring',
    coverage: 'Photo Only',
    photo: [
      { count: 1, side: 'Bhaiyo', roles: ['Primary'] },
      { count: 1, side: 'Baheno', roles: ['Secondary'] },
    ],
    video: [],
    gallery: 'samaiyo',
  },
  {
    slug: 'swaminarayan-jayanti-ram-navmi-mahila',
    name: 'Swaminarayan Jayanti & Ram Navmi (Mahila)',
    season: 'Spring',
    coverage: 'Photo Only',
    photo: [{ count: 1, side: 'Baheno', roles: ['Primary'] }],
    video: [],
    gallery: 'samaiyo',
    parent: 'swaminarayan-jayanti-ram-navmi',
  },
  {
    slug: 'walkathon',
    name: 'Walkathon',
    season: 'Summer',
    coverage: 'Photo & Video',
    photo: [
      { count: 2, side: 'Bhaiyo', roles: ['Primary', 'Secondary'] },
      { count: 1, side: 'Baheno', roles: ['Secondary'] },
    ],
    video: [
      { count: 1, side: 'Bhaiyo', roles: ['Primary'] },
      { count: 1, side: 'Baheno', roles: [] },
    ],
    gallery: null,
  },
  {
    slug: 'janmashtami',
    name: 'Janmashtami',
    season: 'Summer',
    coverage: 'Photo Only',
    photo: [{ count: 1, side: 'Bhaiyo', roles: ['Primary'] }],
    video: [],
    gallery: 'samaiyo',
  },
  {
    slug: 'janmashtami-mahila',
    name: 'Janmashtami (Mahila)',
    season: 'Summer',
    coverage: 'Photo Only',
    photo: [{ count: 1, side: 'Baheno', roles: [] }],
    video: [],
    gallery: 'samaiyo',
    parent: 'janmashtami',
  },
  {
    slug: 'patutsav',
    name: 'Patutsav',
    season: 'Summer',
    coverage: 'Photo & Video',
    photo: [
      { count: 1, side: 'Bhaiyo', roles: ['Primary'] },
      { count: 1, side: 'Baheno', roles: [] },
    ],
    video: [{ count: 1, side: 'Bhaiyo', roles: ['Primary'] }],
    gallery: 'samaiyo',
  },
  {
    slug: 'mahant-swami-maharaj-janma-jayanti',
    name: 'Mahant Swami Maharaj Janma Jayanti',
    season: 'Fall',
    coverage: 'Photo Only',
    photo: [{ count: 1, side: 'Bhaiyo', roles: ['Primary'] }],
    video: [],
    gallery: 'samaiyo',
  },
  {
    slug: 'mahant-swami-maharaj-janma-jayanti-mahila',
    name: 'Mahant Swami Maharaj Janma Jayanti (Mahila)',
    season: 'Fall',
    coverage: 'Photo Only',
    photo: [{ count: 1, side: 'Baheno', roles: ['Primary'] }],
    video: [],
    gallery: 'samaiyo',
    parent: 'mahant-swami-maharaj-janma-jayanti',
  },
  {
    slug: 'mandir-diwali',
    name: 'Mandir Diwali',
    season: 'Fall',
    coverage: 'Photo & Video',
    photo: [
      { count: 2, side: 'Bhaiyo', roles: ['Primary', 'Secondary'] },
      { count: 1, side: 'Baheno', roles: ['Secondary'] },
    ],
    video: [{ count: 1, side: 'Bhaiyo', roles: ['Primary'] }],
    gallery: 'diwali',
  },
  {
    slug: 'kids-diwali-celebration',
    name: 'Kids Diwali Celebration (KDC)',
    season: 'Fall',
    coverage: 'Photo & Video',
    photo: [
      { count: 1, side: 'Bhaiyo', roles: ['Primary'] },
      { count: 1, side: 'Baheno', roles: ['Secondary'] },
    ],
    video: [
      { count: 1, side: 'Bhaiyo', roles: ['Primary'] },
      { count: 1, side: 'Baheno', roles: ['Secondary'] },
    ],
    gallery: 'kdc',
  },
  {
    slug: 'pramukh-swami-maharaj-janma-jayanti',
    name: 'Pramukh Swami Maharaj Janma Jayanti',
    season: 'Winter',
    coverage: 'Photo Only',
    photo: [{ count: 1, side: 'Bhaiyo', roles: ['Primary'] }],
    video: [],
    gallery: 'samaiyo',
  },
  {
    slug: 'pramukh-swami-maharaj-janma-jayanti-mahila',
    name: 'Pramukh Swami Maharaj Janma Jayanti (Mahila)',
    season: 'Winter',
    coverage: 'Photo Only',
    photo: [{ count: 1, side: 'Baheno', roles: ['Primary'] }],
    video: [],
    gallery: 'samaiyo',
    parent: 'pramukh-swami-maharaj-janma-jayanti',
  },
];

export const STAFFING_FOOTNOTE =
  'Staffing represents recommended coverage and may be adjusted based on event size, program needs, and team availability.';

export const LEGEND = [
  { term: 'Bhaiyo', meaning: 'Bhaiyo wing media team' },
  { term: 'Baheno', meaning: 'Baheno wing media team' },
  { term: 'Primary', meaning: 'Lead for that coverage' },
  { term: 'Secondary', meaning: 'Support for that coverage' },
] as const;

/** "2 Bhaiyo (Primary & Secondary)", "1 Baheno" — matches the coverage plan wording. */
export function formatStaff(s: Staff): string {
  const roles = s.roles.length ? ` (${s.roles.join(' & ')})` : '';
  return `${s.count} ${s.side}${roles}`;
}

export function formatStaffList(list: Staff[]): string {
  return list.length ? list.map(formatStaff).join(', ') : '—';
}

export const headcount = (list: Staff[]) => list.reduce((n, s) => n + s.count, 0);

export function summary(list: EventItem[] = events) {
  return {
    total: list.length,
    photoOnly: list.filter((e) => e.coverage === 'Photo Only').length,
    photoVideo: list.filter((e) => e.coverage === 'Photo & Video').length,
  };
}

export const getEvent = (slug: string) => events.find((e) => e.slug === slug);
