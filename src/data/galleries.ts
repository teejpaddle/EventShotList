/**
 * Example-shot galleries.
 *
 * Each gallery is a list of sections, shown in this order. A section's photos
 * live in src/assets/shots/<gallery>/<section slug>/ and their captions in
 * src/data/captions.json. To add photos, see the README ("Add photos").
 *
 *   shotType  the kind of shot, so beginners learn what a complete set looks like
 *   capture   one sentence on what to look for
 */

export type ShotType =
  | 'Wide / establishing'
  | 'Medium'
  | 'Close-up / detail'
  | 'Candid'
  | 'Stage / performance'
  | 'Group'
  | 'Ceremony';

export interface GallerySection {
  slug: string;
  title: string;
  shotType: ShotType;
  capture: string;
}

export interface Gallery {
  title: string;
  intro: string;
  sections: GallerySection[];
}

const COPR_TITLE = 'Community Outreach & Public Relations (COPR)';

export const galleries: Record<string, Gallery> = {
  samaiyo: {
    title: 'Samaiyo (festival assembly)',
    intro: 'Shared by every samaiyo-style event: the stage program, the audience, and outreach guests.',
    sections: [
      {
        slug: 'stage-program',
        title: 'Stage program',
        shotType: 'Stage / performance',
        capture: 'Speakers, kirtan, and performers. Get a wide of the whole stage, then tighter shots of each person.',
      },
      {
        slug: 'audience',
        title: 'Audience',
        shotType: 'Candid',
        capture: 'Real reactions: listening, singing, clapping. Shoot from the side aisles, not in front of the stage.',
      },
      {
        slug: 'copr',
        title: COPR_TITLE,
        shotType: 'Group',
        capture: 'Guests and dignitaries: greetings, presentations, and a posed photo with the people they met.',
      },
    ],
  },

  diwali: {
    title: 'Mandir Diwali',
    intro: 'From the outside of the mandir to the Annakut, the rituals, and the volunteers behind them.',
    sections: [
      {
        slug: 'exterior',
        title: 'Exterior',
        shotType: 'Wide / establishing',
        capture: 'The mandir from outside to set the scene. Lights and decorations look best at dusk.',
      },
      {
        slug: 'darshan',
        title: 'Darshan',
        shotType: 'Candid',
        capture: 'Devotees doing darshan: folded hands, lines, families together.',
      },
      {
        slug: 'annakut-murti',
        title: 'Annakut murti',
        shotType: 'Close-up / detail',
        capture: 'Each murti with its Annakut offering, straight on and level, plus a few wides of the full mandir.',
      },
      {
        slug: 'annakut',
        title: 'Annakut',
        shotType: 'Wide / establishing',
        capture: 'The full spread of food offerings, plus the kirtan and people around it.',
      },
      {
        slug: 'annakut-thal',
        title: 'Annakut thal',
        shotType: 'Close-up / detail',
        capture: 'Close detail of individual dishes and the arrangement.',
      },
      {
        slug: 'arti',
        title: 'Arti',
        shotType: 'Ceremony',
        capture: 'The arti flame and the faces lit by it. No flash; this is a low-light moment.',
      },
      {
        slug: 'chopda-pujan',
        title: 'Chopda Pujan',
        shotType: 'Ceremony',
        capture: 'The pujan from start to finish: the wide room, families at their seats, and close-ups of hands and books.',
      },
      {
        slug: 'exhibition',
        title: 'Exhibition',
        shotType: 'Medium',
        capture: 'Each display, plus visitors reading and interacting with it.',
      },
      {
        slug: 'seva',
        title: 'Seva',
        shotType: 'Candid',
        capture: 'Volunteers at work preparing, decorating, and serving. Hands and focus tell the story.',
      },
      {
        slug: 'copr',
        title: COPR_TITLE,
        shotType: 'Group',
        capture: 'Guests and dignitaries: arrival, darshan, meeting sants, and a posed group photo.',
      },
    ],
  },

  kdc: {
    title: 'Kids Diwali Celebration',
    intro: 'A day for kids: welcome, decorations, murti darshan, mahapuja, the program, and activities.',
    sections: [
      {
        slug: 'welcome',
        title: 'Welcome',
        shotType: 'Candid',
        capture: 'Kids and families arriving and checking in. Catch the excitement at the door.',
      },
      {
        slug: 'decoration',
        title: 'Decoration',
        shotType: 'Wide / establishing',
        capture: 'The decorated hall and stage before people fill it.',
      },
      {
        slug: 'murti',
        title: 'Murti',
        shotType: 'Close-up / detail',
        capture: 'The murtis and their shringar, straight on and level.',
      },
      {
        slug: 'mahapuja',
        title: 'Mahapuja',
        shotType: 'Ceremony',
        capture: 'Kids taking part in the puja. Get down to their eye level.',
      },
      {
        slug: 'program',
        title: 'Program',
        shotType: 'Stage / performance',
        capture: 'Performances and the audience watching them.',
      },
      {
        slug: 'activities',
        title: 'Activities',
        shotType: 'Candid',
        capture: 'Games and activities in action. Shoot in bursts to catch peak moments.',
      },
    ],
  },

  murti: {
    title: 'Murti',
    intro: 'Reference shots of each murti in the mandir. Shoot straight on, level, and without flash.',
    sections: [
      {
        slug: 'murti',
        title: 'Murti darshan',
        shotType: 'Close-up / detail',
        capture: 'Center the murtis, keep the camera level with them, and include the full shringar.',
      },
    ],
  },
};
