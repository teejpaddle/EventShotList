/**
 * Photo Settings page content. Edit the text here; the page layout updates itself.
 * Brand-specific values use { sony, canon, nikon }.
 */
import type { MenuRow, Scenario, SettingCard } from './brands';

export const triangle = [
  {
    name: 'Shutter speed',
    what: 'How long the camera collects light for each photo.',
    effect: 'Fast (1/500 s) freezes movement. Slow (1/30 s) lets moving people and shaky hands blur.',
    brighter: 'Slower = brighter',
  },
  {
    name: 'Aperture (f-number)',
    what: 'How wide the opening in the lens is.',
    effect: 'A small number (f/2.8) lets in more light and blurs the background. A big number (f/8) keeps more of the scene sharp.',
    brighter: 'Smaller number = brighter',
  },
  {
    name: 'ISO',
    what: 'How much the camera boosts the light it receives.',
    effect: 'Higher ISO brightens the photo but adds grain, called noise. Use only as much as you need.',
    brighter: 'Higher = brighter',
  },
];

export const modeAdvice = {
  title: 'Start in Aperture Priority with Auto ISO',
  body: [
    'You pick the aperture, which decides how much of the scene is sharp. You set a minimum shutter speed so moving people do not blur. The camera picks the ISO to make the photo bright enough.',
    'Switch to Manual when the light stays the same but the camera keeps getting it wrong. Examples: a performer in a spotlight against a black stage, or a series of group photos that must all match. In Manual, you set shutter speed and aperture yourself, and Auto ISO can still handle brightness.',
  ],
};

export const cards: SettingCard[] = [
  {
    setting: 'Shooting mode',
    start: { sony: 'A (Aperture Priority)', canon: 'Av (Aperture-priority AE)', nikon: 'A (Aperture-priority auto)' },
    why: 'You control how much is in focus, and the camera handles brightness.',
    fix: 'Photos too bright or too dark? Use exposure compensation (below) before switching to Manual.',
  },
  {
    setting: 'ISO',
    start: 'Auto ISO, highest ISO about 12800',
    why: 'The camera brightens the photo in dim halls without slowing the shutter.',
    fix: 'Too grainy? Open the aperture (smaller f-number) or move closer to the light.',
  },
  {
    setting: 'Minimum shutter speed',
    start: '1/250 s (1/125 s for a seated audience)',
    why: 'People move. Below this speed, hands, faces, and dancers smear.',
    fix: 'Still blurry? Raise it to 1/500 s. Too dark even at the highest ISO? Lower it to 1/125 s.',
  },
  {
    setting: 'Focus mode',
    start: { sony: 'Continuous AF (AF-C)', canon: 'Servo AF', nikon: 'AF-C (Continuous AF)' },
    why: 'Focus keeps adjusting while you half-press the shutter button, so people who move stay sharp.',
    fix: 'Focus lands on the background? Use a smaller focus area or turn on eye detection.',
  },
  {
    setting: 'Focus area',
    start: { sony: 'Zone', canon: 'Expand AF area: Around', nikon: 'Wide-area AF (L)' },
    why: 'A medium-size area is easy to place on a person and rarely grabs the wrong thing.',
    fix: 'Camera picks the wrong person? Switch to a single small point and put it on your subject.',
  },
  {
    setting: 'Face and eye detection',
    start: {
      sony: 'Face/Eye Prior. in AF: On · Face/Eye Subject: Human',
      canon: 'Subject to detect: People · Eye detection: Auto',
      nikon: 'AF/MF subject detection options: People',
    },
    why: 'The camera finds faces and eyes for you. Eyes are what must be sharp.',
    fix: 'Focus jumps between faces? Move the focus area over the person you want.',
  },
  {
    setting: 'White balance',
    start: {
      sony: 'Auto, with Priority Set in AWB: Ambience',
      canon: 'Auto (Ambience priority)',
      nikon: 'Keep overall atmosphere',
    },
    why: 'Halls mix warm bulbs, LED panels, and daylight. Auto handles the mix, and this option keeps the warm glow of diyas.',
    fix: {
      sony: 'Skin looks too orange? Change Priority Set in AWB to White. RAW files can also be fixed later.',
      canon: 'Skin looks too orange? Switch to Auto (White priority). RAW files can also be fixed later.',
      nikon: 'Skin looks too orange? Switch to Keep white (reduce warm colors). RAW files can also be fixed later.',
    },
  },
  {
    setting: 'File format',
    start: { sony: 'RAW & JPEG', canon: 'RAW + JPEG L', nikon: 'RAW + JPEG fine★' },
    why: 'The JPEG is ready to share right away. The RAW keeps extra detail so an editor can rescue dark, bright, or orange photos.',
    fix: 'Card filling up too fast? Bring a bigger or second card rather than turning off RAW.',
  },
  {
    setting: 'Drive mode (burst)',
    start: { sony: 'Continuous Shooting: Mid', canon: 'Low-speed continuous', nikon: 'Continuous L' },
    why: 'Hold the button for 3 to 5 frames at key moments. One will have open eyes and the best expression.',
    fix: {
      sony: 'Too many near-duplicates? Use short taps. Missing fast dance moves? Use Continuous Shooting: Hi.',
      canon: 'Too many near-duplicates? Use short taps. Missing fast dance moves? Use High-speed continuous.',
      nikon: 'Too many near-duplicates? Use short taps. Missing fast dance moves? Use Continuous H.',
    },
  },
  {
    setting: 'Exposure compensation (+/−)',
    start: '0, then adjust in steps of 0.3',
    why: 'Tells the camera "brighter" or "darker" without leaving Aperture Priority.',
    fix: 'Faces too bright against a dark stage? Try −0.7. Person in front of a bright window? Try +0.7 to +1.0.',
  },
];

export const flashNote = {
  title: 'Flash etiquette',
  points: [
    'Always ask the event lead before using flash.',
    'Do not use flash during prayers, arti, or murti darshan unless the event lead explicitly allows it.',
    'Flash distracts devotees and flattens the warm light that makes these moments beautiful. Raise the ISO or open the aperture instead.',
  ],
};

export const scenarios: Scenario[] = [
  {
    id: 'hall',
    title: 'Indoor hall or sabha',
    when: 'Seated assembly, speakers, kirtan, general coverage indoors.',
    values: [
      { label: 'Aperture', value: 'f/2.8 to f/4' },
      { label: 'Min. shutter', value: '1/125 s for seated people, 1/250 s for people moving' },
      { label: 'ISO', value: 'Auto, up to 12800' },
      { label: 'Focus', value: 'Continuous + face/eye detection' },
      { label: 'White balance', value: 'Auto' },
      { label: 'Drive', value: 'Continuous, low speed' },
    ],
    tip: 'Shoot from the sides and back. Never block the audience’s view of the stage.',
  },
  {
    id: 'stage',
    title: 'Stage performance',
    when: 'Dance, drama, and kids’ performances under stage lights.',
    values: [
      { label: 'Aperture', value: 'As wide as your lens allows (f/2.8 or lower)' },
      { label: 'Min. shutter', value: '1/500 s for dance, 1/250 s for speakers' },
      { label: 'ISO', value: 'Auto, up to 12800 (25600 if needed)' },
      { label: 'Exposure comp.', value: '−0.7 (dark stages make the camera overexpose faces)' },
      { label: 'Focus', value: 'Continuous + eye detection' },
      { label: 'Drive', value: 'Continuous, high speed' },
    ],
    tip: 'Stage lights change color fast. Shoot RAW so the color can be corrected later.',
  },
  {
    id: 'arti',
    title: 'Low-light arti and diya moments',
    when: 'Arti, diya lighting, and other moments lit only by flame.',
    values: [
      { label: 'Aperture', value: 'Widest your lens allows (f/1.8 to f/2.8)' },
      { label: 'Min. shutter', value: '1/125 s (1/60 s if the person is still and you brace yourself)' },
      { label: 'ISO', value: 'Auto, up to 25600' },
      { label: 'Exposure comp.', value: '−0.3 to −0.7, so the flames keep their shape' },
      { label: 'White balance', value: 'Auto with the ambience option, to keep the warm glow' },
      { label: 'Flash', value: 'Off' },
    ],
    tip: 'Focus on a lit face, not the flame itself. Tuck your elbows against your body to stay steady.',
  },
  {
    id: 'outdoor',
    title: 'Outdoor daylight (e.g. Walkathon)',
    when: 'Walking, outdoor games, and anything in sunshine.',
    values: [
      { label: 'Aperture', value: 'f/5.6 to f/8' },
      { label: 'Min. shutter', value: '1/500 s' },
      { label: 'ISO', value: 'Auto (will stay low, around 100 to 400)' },
      { label: 'Focus', value: 'Continuous + face detection' },
      { label: 'White balance', value: 'Auto or Daylight' },
      { label: 'Drive', value: 'Continuous, low speed' },
    ],
    tip: 'Keep the sun behind you or to your side. If faces are in shadow, add +0.7 exposure compensation.',
  },
  {
    id: 'group',
    title: 'Group photos',
    when: 'Volunteers, families, guests, and sant photos.',
    values: [
      { label: 'Aperture', value: 'f/5.6 to f/8, so every row is sharp' },
      { label: 'Shutter', value: '1/200 s' },
      { label: 'ISO', value: 'Auto' },
      { label: 'Focus', value: 'On a face in the front third of the group' },
      { label: 'Drive', value: 'A short burst of 3 to 5, to beat blinks' },
    ],
    tip: 'Stand a little above the group, zoom to about 35 to 50 mm, and count down out loud.',
  },
];

export const menus: MenuRow[] = [
  {
    setting: 'Aperture Priority',
    path: {
      sony: 'Still/Movie/S&Q dial → Still, then mode dial → A',
      canon: 'Mode dial → Av',
      nikon: 'Mode dial → A',
    },
  },
  {
    setting: 'Minimum shutter speed for Auto ISO',
    path: {
      sony: 'Set ISO to ISO AUTO, then MENU → Exposure/Color → Exposure → ISO AUTO Min. SS → choose 1/250',
      canon: 'Shooting menu → ISO speed settings → Min. shutter spd. → Manual → 1/250',
      nikon: 'Photo shooting menu → ISO sensitivity settings → Auto ISO sensitivity control: ON → Minimum shutter speed → 1/250 s',
    },
  },
  {
    setting: 'Continuous focus',
    path: {
      sony: 'MENU → Focus → AF/MF → Focus Mode → Continuous AF',
      canon: 'AF menu → AF operation → Servo AF',
      nikon: 'Photo shooting menu → Focus mode → AF-C',
    },
  },
  {
    setting: 'Focus area',
    path: {
      sony: 'MENU → Focus → Focus Area → Zone (or Tracking for moving subjects)',
      canon: 'AF menu → AF area → Expand AF area: Around',
      nikon: 'Photo shooting menu → AF-area mode → Wide-area AF (L) (or 3D-tracking)',
    },
  },
  {
    setting: 'Face and eye detection',
    path: {
      sony: 'MENU → Focus → Face/Eye AF → Face/Eye Prior. in AF: On, and Face/Eye Subject: Human',
      canon: 'AF menu → Subject to detect: People, and Eye detection: Auto',
      nikon: 'Photo shooting menu → AF/MF subject detection options → People',
    },
  },
  {
    setting: 'White balance',
    path: {
      sony: 'MENU → Exposure/Color → White Balance → White Balance: Auto, and Priority Set in AWB: Ambience or White',
      canon: 'Shooting menu → White balance → Auto (Ambience priority) or Auto (White priority)',
      nikon: 'Photo shooting menu → White balance → Keep overall atmosphere, or Keep white (reduce warm colors)',
    },
  },
  {
    setting: 'RAW + JPEG',
    path: {
      sony: 'MENU → Shooting → Image Quality → Image Quality Settings → File Format → RAW & JPEG',
      canon: 'Shooting menu → Image quality → choose RAW and JPEG L together',
      nikon: 'Photo shooting menu → Image quality settings → Image quality → RAW + JPEG fine★',
    },
  },
  {
    setting: 'Burst (continuous shooting)',
    path: {
      sony: 'Drive Mode (on the control wheel) → Cont. Shooting → Continuous Shooting: Mid',
      canon: 'Drive mode → Low-speed continuous',
      nikon: 'Hold the release mode button and turn the main command dial → Continuous L',
    },
  },
];
