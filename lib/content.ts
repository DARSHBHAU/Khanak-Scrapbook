/**
 * ─────────────────────────────────────────────────────────────
 *  KHANAK — SCRAPBOOK CONTENT
 *  Everything personal lives in this one file. Edit freely.
 * ─────────────────────────────────────────────────────────────
 *
 *  HOW TO ADD A PHOTOGRAPH
 *  1. Drop your image into /public/memories (e.g. /public/memories/beach.jpg).
 *  2. Add an entry to `photos` below with a unique `id` and `src: '/memories/beach.jpg'`.
 *  3. Pick a `shape` ('portrait' | 'landscape' | 'square') that suits the picture,
 *     an optional `decoration` ('tape-blue' | 'tape-red' | 'pin' | 'clip' | 'none'),
 *     and a small `rotate` value in degrees (between -4 and 4 looks natural).
 *  It will appear in the Memory Gallery automatically.
 *
 *  HOW TO ADD A BOOK PAGE, CARD OR NOTE
 *  Copy an existing entry in `bookPages`, `memoryCards` or `hiddenNotes`
 *  and change the words. Book pages reference photos by their `id`.
 *
 *  All text below is placeholder — replace it with your own words.
 */

export type PhotoShape = 'portrait' | 'landscape' | 'square'
export type PhotoDecoration = 'tape-blue' | 'tape-red' | 'pin' | 'clip' | 'none'

export type Photo = {
  id: string
  src: string
  alt: string
  caption: string
  date?: string
  story?: string
  shape: PhotoShape
  decoration?: PhotoDecoration
  rotate?: number
  objectPosition?: string
}

export const site = {
  name: 'Khanak',
  volume: 'Volume One — Kept for Khanak',
  title: 'A Little Book of',
  titleAccent: 'Memories.',
  subtitle: 'Little moments, lovely memories, and everything worth keeping.',
}


export const photos: Photo[] = [
  {
    id: 'roses',
    src: '/memories/memory-01.jpg',
    alt: 'A favourite memory',
    caption: 'Best Diwali Present',
    date: '2025 Diwali',
    story: 'It was the diwali of 2025, at around 9 or 10 a message popped saying "Khanak has sent an attachment" my heart ran. But it sank on seeing the beauty of yours on the festival of lights',
    shape: 'portrait',
    decoration: 'tape-blue',
    rotate: -2.5,
  },
  {
    id: 'sea',
    src: '/memories/memory-02.jpg',
    alt: 'A cherished memory',
    caption: 'the colour of that sky',
    date: 'Summer',
    story: 'Whenever I capture some photo. I always dream of you standing by my side where both me and you talk and admire the beauty of nature or... Yours.',
    shape: 'portrait',
    decoration: 'pin',
    rotate: 2,
  },
  {
    id: 'coffee',
    src: '/memories/memory-08.jpg',
    alt: 'A quiet afternoon',
    caption: 'Fun and Love',
    date: 'Summer Holidays 2026',
    story: 'I guess you would be remembering this time more vividly than me. You said that the cut hairs looked ugly but I just looked at your smile, which glowed as eternally as it could.',
    shape: 'landscape',
    decoration: 'clip',
    rotate: -1,
  },
  {
    id: 'street',
    src: '/memories/memory-04.jpg',
    alt: 'An evening walk',
    caption: 'falling even more`',
    date: 'Evening',
    story: 'I always from the beginning had only one photo of yours but if I am not wrong this was the second time I got picture of yours which as always was preserved in the bank of mine.',
    shape: 'square',
    decoration: 'tape-red',
    rotate: 1.5,
  },
  {
    id: 'wildflowers',
    src: '/memories/memory-05.jpg',
    alt: 'A special memory',
    caption: 'place of the best memory',
    date: '8th Class',
    story: 'It was the Science City trip of our school where I approached you for the first time all the planning at trip went in vein, as I was humbled by your beauty. Crowd gathered we both in center before I asked a stupid question and you blushed and laughed off the answer. It was false but memory was real.',
    shape: 'landscape',
    decoration: 'none',
    rotate: 1,
  },
  {
    id: 'letters',
    src: '/memories/memory-06.jpg',
    alt: 'Year of beginning',
    caption: 'the class where it all began',
    date: '2021',
    story: 'Those were the times when you sat infront of me as now. Neither I nor you had courage to speak to each other. But the feelings matched without any words.',
    shape: 'portrait',
    decoration: 'tape-blue',
    rotate: -1.5,
  },
  {
    id: 'night',
    src: '/memories/memory-07.jpg',
    alt: 'A quiet night',
    caption: 'unsettling night',
    date: 'Evening',
    story: 'The strands of hair over your beautiful face made this photo special. No glamour nothing special, just you in your comfort and your beauty in my heart.',
    shape: 'square',
    decoration: 'pin',
    rotate: -2,
  },
  {
    id: 'nook',
    src: '/memories/memory-08.jpg',
    objectPosition: 'top',
    alt: 'A slow morning',
    caption: 'silly you',
    date: 'Morning',
    story: 'The day when your fine hairs were cut. You sent me photos but apart from hairs my eyes were gazing the unmatchable smile of yours. Your face looked different somehow but it was you who made it look perfect in all aspects!',
    shape: 'portrait',
    decoration: 'clip',
    rotate: 2.5,
  },
]

export const galleryNotes = [
  { afterIndex: 1, text: 'Warning! The following is too beautiful to handle for you eyes.', tone: 'blue' as const },
]

export const featuredMemory = {
  photoId: 'letters',
  kicker: 'The Favourite Memory',
  heading: 'If this book could keep only one page, it would be this one.',
  body: 'There are a lot of hilarious and lovely moments with you. But of those all this is the best which I find in my opinion — It was the day 24th February 2025. I think you can recall the day and I also think that you are having a little smile on your face too. The day started as a normal day but it was not meant to be normal. As evening approached, that moment came closer. It was evening, when mostly we both talked, we played truth or dare and I asked you for a dare. In return You gave me one too. But out of many times when my heart said to do it this time that feeling grew. I ran to the roof. Sat on a chair and clicked record button and with a racing heart I said it "I Love You!" I couldnt believe it so couldnt you. Your messages paused for a minute but after a while you responded too. With the same words and then finally my racing heart beated normally. This is the most vivid moment I remember out of many and it has a reason too!!',
  note: 'the best one, still',
}

export type BookPage = {
  kicker: string
  title: string
  body: string
  photoId: string
  note: string
}

export const bookPages: BookPage[] = [
  {
    kicker: 'Chapter One',
    title: 'Where the pages begin',
    body: 'Every good book starts with a reason. This one starts with Khanak — with all the small moments worth holding onto, the days that passed too quickly, and the ones that felt like they were made to be remembered.',
    photoId: 'roses',
    note: 'page one, for Khanak',
  },
  {
    kicker: 'Chapter Two',
    title: 'The ordinary days',
    body: 'Not every memory needs to be grand. Some of the best ones are the quiet afternoons, the unhurried cups of tea, the conversations that went on longer than expected. The ordinary days, kept.',
    photoId: 'coffee',
    note: 'the little things count',
  },
  {
    kicker: 'Chapter Three',
    title: 'Places and skies',
    body: 'Whenevey I take photos of nature, I always wish you were by my side, where you looked at the nature and I at the perfect creation of it.',
    photoId: 'sea',
    note: 'dreams and reality',
  },
  {
    kicker: 'Chapter Four',
    title: 'Evenings that stayed',
    body: 'Oh those late night and evenings with endless textings. How can I forget them? Whenever I read your messages, I could hear your voices coming off the texts and screens!',
    photoId: 'street',
    note: 'feeling the love of yours',
  },
  {
    kicker: 'Chapter Five',
    title: 'Still being written',
    body: 'The best books are never really finished. There are always more pages to fill, more moments to keep. Consider this chapter a promise — that the story is still going, and the best parts may still be ahead.',
    photoId: 'night',
    note: 'to be continued',
  },
]

export const memoryCards = [
  {
    label: 'Little Moments',
    title: 'The small, quiet things',
    preview: 'The special moments embedde in my heart',
    body: [
      'Coming to school was a neccessity since you became one of mine. And every little eye contact every little approach felt unreal',
      'These are the moments that do not make it into photographs but live in memory all the same — small, quiet, and entirely worth keeping.',
    ],
  },
  {
    label: 'Favourite Memories',
    title: 'The ones worth retelling',
    preview: 'The stories that get better every time.',
    body: [
      'The memories like that trip incident and the times when I approached you outside school via Manyata or the times when I played badminton after dispersal are the stories which I would recite forever to my heart and soul',
      'These memories always made me smile or giggle even after recalling them so many times',
    ],
  },
  {
    label: 'Things Worth Remembering',
    title: 'A short list of good things',
    preview: 'Small truths, kept safely in one place.',
    body: [
      'I bet you, an active song listener must have listened to "One love" by Shubh. Each and every line of that song just matches you, your walk, your talk, just everything.',
      'Small things. Good things. Worth writing down.',
    ],
  },
  {
    label: 'A Page Just for You',
    title: 'For Khanak, and no one else',
    preview: 'A few words written only for you.',
    body: [
      'Some pages are not meant for everyone. This one is just for Khanak — a quiet corner of the book where the words are personal and the sentiment is simple.',
      'Khanak, I always want to be a bestfriend/ close friend/ love of yours. I would never want us to part our ways neither would you. I also want to see you succeed in your life. Even if the times are dark I promise I would be always there to listen you and your heart. Just Remember Me...',
    ],
  },
  {
    label: 'The Little Details',
    title: 'Everything in between',
    preview: 'The details that make a memory feel real.',
    body: [
      'The details are what make a memory feel real — the colour of the light, the smell of the air, the exact words someone used.',
      'I always wanted love. After my papa went Pune it was rare I experienced one. But the presence of yours in my life has fulfilled this little wish. Every small effort of yours is noticed by me. And love is not neccessary from my end I just want to help you throughout this journey of yours.',
    ],
  },
]

export const hiddenNotes = [
  { label: 'Open when you need a smile', message: 'You are doing better than you think. And you are more loved than you know.' },
  { label: 'Open on a quiet day', message: 'On the quiet days, remember the good ones. There have been many, and there are more to come.' },
  { label: 'Open whenever', message: 'Wherever you are when you read this — I hope it is somewhere good. And I hope you are happy.' },
]

export const closing = {
  kicker: 'The Last Page',
  heading: 'Not the end — just the last page, for now.',
  message:
    'Every book has to end somewhere, even the ones you never want to put down. This is that page — not a goodbye, just a pause. A place to say thank you for all the moments that made it in, and all the ones still to come. Here is to more pages, more memories, and more reasons to keep them.',
  signature: '— with love, always',
}
