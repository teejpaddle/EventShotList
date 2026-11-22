/**
 * Video Settings page content. Edit the text here; the page layout updates itself.
 * Brand-specific values use { sony, canon, nikon }.
 */
import type { MenuRow, Scenario, SettingCard } from './brands';

export const basics = [
  {
    name: 'Frame rate',
    what: 'How many pictures per second the video records.',
    effect: '30 frames per second (30p) looks smooth and natural. 24p looks like a movie. 60p can be slowed down for slow motion.',
  },
  {
    name: 'Shutter speed (the 180° rule)',
    what: 'How long each frame is exposed. In video, it changes how motion looks.',
    effect: 'Set it to about double the frame rate: 1/60 s at 30p, 1/50 s at 24p, 1/125 s at 60p. Faster looks choppy; slower looks smeary.',
  },
  {
    name: 'Resolution',
    what: 'How many pixels each frame has: 4K (3840×2160) or 1080p (1920×1080).',
    effect: '4K is sharper and lets the editor crop in. It fills cards faster, needs a fast card, and makes the camera warmer.',
  },
];

export const storageNote =
  'Rough storage math: every 100 Mbps of bit rate uses about 45 GB per hour. Check the bit rate your camera shows next to the format you choose.';

export const cards: SettingCard[] = [
  {
    setting: 'Frame rate',
    start: '30p (29.97)',
    why: 'Smooth, natural motion for speeches and programs, and it suits U.S. indoor lighting.',
    fix: 'Planning slow motion? Record that clip at 60p. Lights flicker at 24p? Go back to 30p.',
  },
  {
    setting: 'Shutter speed',
    start: '1/60 s at 30p · 1/125 s at 60p',
    why: 'About double the frame rate gives natural-looking motion blur.',
    fix: 'Motion looks choppy? The shutter is too fast; lower it. Lights flicker or roll in bands? Use 1/60 s or 1/120 s.',
  },
  {
    setting: 'Exposure mode',
    start: {
      sony: 'M (with Exposure Ctrl Type: P/A/S/M Mode), ISO AUTO',
      canon: 'M (Manual exposure), ISO Auto',
      nikon: 'M (Manual), with auto ISO',
    },
    why: 'Shutter and aperture stay put so the look stays steady. Auto ISO handles brightness.',
    fix: 'Brightness pulses as people walk past? Set a fixed ISO instead of Auto.',
  },
  {
    setting: 'Resolution and format',
    start: {
      sony: 'XAVC S 4K (XAVC S HD for 1080p)',
      canon: '3840×2160 (4K), 29.97 fps',
      nikon: '3840×2160; 30p, video file type H.264 8-bit (MP4)',
    },
    why: '4K is sharper and gives the editor room to crop. These formats are easy for most editing software.',
    fix: 'Card-speed warning, or the camera is getting hot? Switch to 1080p.',
  },
  {
    setting: 'Picture profile',
    start: {
      sony: 'Picture Profile: Off',
      canon: 'Picture Style: Standard (Canon Log: Off)',
      nikon: 'Set Picture Control: Standard',
    },
    why: 'Standard looks good straight out of the camera, so clips can be shared without color work.',
    fix: 'Footage looks flat and gray? A Log profile is probably on. Turn it off.',
  },
  {
    setting: 'White balance',
    start: 'Fixed, not Auto. Indoors: about 3200 to 4000 K. Outdoors: Daylight.',
    why: 'Auto keeps re-guessing. When someone in orange walks through the frame, the whole clip shifts color.',
    fix: 'Footage too orange? Lower the number (for example 4000 K → 3400 K). Too blue? Raise it.',
  },
  {
    setting: 'Autofocus',
    start: {
      sony: 'Continuous AF, Face/Eye Prior. in AF: On',
      canon: 'Movie Servo AF: Enable, Subject to detect: People',
      nikon: 'AF-F (Full-time AF), AF/MF subject detection: People',
    },
    why: 'Keeps a speaker or performer sharp as they move, without touching the lens.',
    fix: 'Focus hunts or jumps to the background? Switch to manual focus, especially on a tripod, for murti close-ups, or when shooting through a crowd.',
  },
  {
    setting: 'Audio level',
    start: 'External mic, loudest sounds peaking around −12 dB',
    why: 'Viewers forgive soft video but not bad sound. The built-in mic hears the room and your hands.',
    fix: 'Sound crackles? It is hitting 0 dB; turn the level down. Too quiet? Move the mic closer or ask the sound team for a mixer feed.',
  },
  {
    setting: 'Headphones',
    start: 'Plugged in and listening the whole time',
    why: 'The level meter can look fine while a mic is unplugged, buzzing, or picking up the air conditioning.',
    fix: 'Hear hum or buzz? Check the cable and move away from light dimmers and speakers.',
  },
  {
    setting: 'Stabilization',
    start: {
      sony: 'SteadyShot: Standard (Active when walking, Off on a tripod)',
      canon: 'IS mode: On. Movie digital IS: On when walking, Off on a tripod',
      nikon: 'Vibration reduction on. Electronic VR: ON when walking, OFF on a tripod',
    },
    why: 'Smooths out hand shake. The strongest modes crop the frame slightly.',
    fix: 'Footage wobbles or warps on a tripod? Turn stabilization off.',
  },
];

export const logNote = {
  title: 'Advanced: Log profiles',
  body: 'Log (Sony S-Log3, Canon Log, Nikon N-Log) records a flat, gray-looking image that keeps more detail in bright and dark areas. It only pays off if someone will color-grade the footage, and exposure is easier to get wrong. Use the standard profile unless your editor asks for Log.',
  brand: {
    sony: 'On the a7 IV, S-Log3 is in Picture Profile PP8 and PP9.',
    canon: 'On the R6 Mark II, use Shooting menu → Canon Log settings → Canon Log: On.',
    nikon: 'On the Z6III, check the manual for N-Log; it needs a 10-bit video file type.',
  },
};

export const longRecording = [
  {
    title: 'Recording-time limits',
    body: 'Some cameras stop a single clip after a set time. The Canon R6 Mark II stops at 6 hours per clip; check your model’s manual. Start a fresh clip at natural breaks so one problem never costs the whole program.',
  },
  {
    title: 'Overheating',
    body: '4K and 60p make the most heat. For long stage programs, use 4K at 30p or 1080p, keep the camera out of direct sun, and tilt the screen away from the body. If the camera shows a temperature warning, switch to a lower format at the next break.',
  },
  {
    title: 'High temperature setting',
    body: 'Sony (Auto Power OFF Temp.) and Nikon (Auto temperature cutout) offer a High setting that lets the camera run hotter. Use it only on a tripod; the manufacturers warn the body can get hot enough to cause low-temperature burns if handheld.',
  },
  {
    title: 'Batteries',
    body: 'Video drains batteries much faster than photos. Bring at least three charged batteries for a 2 to 3 hour program and swap during breaks, not mid-speech.',
  },
  {
    title: 'Cards',
    body: 'Format cards in the camera before each event, after the previous footage is backed up. Bring a spare card.',
  },
];

export const scenarios: Scenario[] = [
  {
    id: 'stage',
    title: 'Stage program',
    when: 'Speeches, kirtan, dance, and drama from the audience area.',
    values: [
      { label: 'Support', value: 'Tripod' },
      { label: 'Format', value: '4K 30p (1080p 30p for very long programs)' },
      { label: 'Shutter', value: '1/60 s' },
      { label: 'Aperture', value: 'f/2.8 to f/4' },
      { label: 'ISO', value: 'Auto, up to 6400' },
      { label: 'White balance', value: 'Fixed, about 3200 to 4000 K to match the stage lights' },
      { label: 'Focus', value: 'Continuous with face detection; manual on a locked wide shot' },
      { label: 'Audio', value: 'A feed from the sound mixer, or a mic near the stage speakers' },
    ],
    tip: 'Keep one locked wide shot of the whole stage running start to finish. That is your safety copy.',
  },
  {
    id: 'walking',
    title: 'Walking or outdoor event',
    when: 'Walkathon, processions, and outdoor activities.',
    values: [
      { label: 'Support', value: 'Handheld, or a gimbal if you have one' },
      { label: 'Format', value: '4K 30p' },
      { label: 'Shutter', value: '1/60 s with an ND filter; without one, up to 1/250 s is fine' },
      { label: 'Aperture', value: 'f/5.6 to f/8' },
      { label: 'ISO', value: 'As low as it goes' },
      { label: 'White balance', value: 'Daylight' },
      { label: 'Stabilization', value: 'Strongest setting' },
      { label: 'Audio', value: 'Wind filter on, or a mic with a fur windscreen' },
    ],
    tip: 'Walk with knees bent and elbows in. Only walk backward with a spotter guiding you.',
  },
  {
    id: 'interview',
    title: 'Interviews and testimonials',
    when: 'One person talking about their experience.',
    values: [
      { label: 'Support', value: 'Tripod at the person’s eye level' },
      { label: 'Format', value: '4K or 1080p, 30p' },
      { label: 'Shutter', value: '1/60 s' },
      { label: 'Aperture', value: 'f/2.8 to f/4, for a soft background' },
      { label: 'White balance', value: 'Fixed' },
      { label: 'Focus', value: 'Continuous with eye detection, or manual focus on the eyes' },
      { label: 'Audio', value: 'Clip-on (lav) mic about a hand’s width below the chin; headphones on' },
    ],
    tip: 'Have the person look at you, not the lens. Record 10 seconds of room silence at the end for the editor.',
  },
  {
    id: 'broll',
    title: 'B-roll',
    when: 'Short clips of details and atmosphere to cut over speeches.',
    values: [
      { label: 'Format', value: '4K 60p, so it can be slowed down' },
      { label: 'Shutter', value: '1/125 s' },
      { label: 'Aperture', value: 'f/2.8 to f/5.6' },
      { label: 'Clip length', value: '5 to 10 seconds, holding still' },
      { label: 'White balance', value: 'Fixed for each room' },
    ],
    tip: 'Get a wide, a medium, and a close-up of the same thing: diyas, decorations, hands doing seva, faces in the audience.',
  },
];

export const menus: MenuRow[] = [
  {
    setting: 'Video mode and manual exposure',
    path: {
      sony: 'Still/Movie/S&Q dial → Movie. In MENU set Exposure Ctrl Type: P/A/S/M Mode, then mode dial → M',
      canon: 'Still photo/movie switch → movie, then Mode dial → M',
      nikon: 'Photo/video selector → video, then mode dial → M',
    },
  },
  {
    setting: 'Resolution and format',
    path: {
      sony: 'MENU → Shooting → Image Quality → File Format → XAVC S 4K (or XAVC S HD)',
      canon: 'Shooting menu → Movie rec. size → 3840×2160, 29.97 fps',
      nikon: 'Video recording menu → Video file type → H.264 8-bit (MP4), then Frame size/frame rate → 3840×2160; 30p',
    },
  },
  {
    setting: 'Frame rate',
    path: {
      sony: 'MENU → Shooting → Image Quality → Movie Settings → Rec Frame Rate',
      canon: 'Part of Movie rec. size (frame rate follows the Video system setting: NTSC)',
      nikon: 'Part of Video recording menu → Frame size/frame rate',
    },
  },
  {
    setting: 'Standard picture look',
    path: {
      sony: 'Picture Profile: Off',
      canon: 'Shooting menu → Picture Style → Standard; Canon Log settings → Canon Log: Off',
      nikon: 'Video recording menu → Set Picture Control → Standard',
    },
  },
  {
    setting: 'Fixed white balance',
    path: {
      sony: 'MENU → Exposure/Color → White Balance → White Balance → Daylight, Incandescent, or a color temperature',
      canon: 'Shooting menu → White balance → Daylight, Tungsten light, or color temperature (K)',
      nikon: 'Video recording menu → White balance → Direct sunlight, Incandescent, or a color temperature',
    },
  },
  {
    setting: 'Video autofocus',
    path: {
      sony: 'MENU → Focus → AF/MF → Focus Mode → Continuous AF; Face/Eye AF → Face/Eye Prior. in AF: On. Smoothness: AF Transition Speed, AF Subj. Shift Sensitivity',
      canon: 'AF menu → Movie Servo AF: Enable; Subject to detect: People; Eye detection: Auto. Smoothness: Movie Servo AF speed, Movie Servo AF track sens.',
      nikon: 'Video recording menu → Focus mode → AF-F; AF/MF subject detection options → People. Smoothness: Custom settings g5 AF speed, g6 AF tracking sensitivity',
    },
  },
  {
    setting: 'Audio level',
    path: {
      sony: 'MENU → Shooting → Audio Recording → Audio Rec Level; turn on Audio Level Display',
      canon: 'Shooting menu → Sound recording → Manual → Rec. level. Outdoors: Wind filter: Auto',
      nikon: 'Video recording menu → Audio input sensitivity. Outdoors: Wind noise reduction. Mixer feed: Audio input selection',
    },
  },
  {
    setting: 'Headphone volume',
    path: {
      sony: 'See your Help Guide (headphone volume is set in the camera’s volume settings)',
      canon: 'Adjust while recording with headphones connected; see Sound recording in the manual',
      nikon: 'Video recording menu → Headphone volume',
    },
  },
  {
    setting: 'Stabilization',
    path: {
      sony: 'MENU → Shooting → Image Stabilization → SteadyShot → Active / Standard / Off',
      canon: 'Shooting menu → IS (Image Stabilizer) mode → IS mode, and Movie digital IS → Off / On / Enhanced',
      nikon: 'Video recording menu → Vibration reduction, and Electronic VR',
    },
  },
  {
    setting: 'Heat',
    path: {
      sony: 'MENU → Setup → Power Setting Option → Auto Power OFF Temp. (keep on Standard when handheld)',
      canon: 'Watch the temperature indicator on screen; it changes color as the camera heats up',
      nikon: 'Setup menu → Auto temperature cutout (keep on Standard when handheld)',
    },
  },
];
