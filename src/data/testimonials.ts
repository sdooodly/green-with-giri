export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  location: string;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    quote: 'Every plant arrived wrapped like a gift from an old friend — with a handwritten note about its personality. Three years later, my monstera has taken over the living room, and I wouldn\u2019t have it any other way.',
    author: 'Meera S.',
    location: 'Bangalore',
  },
  {
    id: '2',
    quote: 'I killed every plant I ever owned before finding Green with Giri. Their care guides actually made sense, and now I have a thriving jungle in my 1BHK. My neighbours think I\u2019m a wizard.',
    author: 'Arjun K.',
    location: 'Mumbai',
  },
  {
    id: '3',
    quote: 'The Philodendron Pink Princess I ordered was the healthiest specimen I\u2019ve ever seen online. Packed with so much love — even the soil smelled like a forest after rain.',
    author: 'Priya R.',
    location: 'Chennai',
  },
  {
    id: '4',
    quote: 'Ordered a Snake Plant for my mother\u2019s birthday. She called me crying because it came with a tiny card that said \u201cI\u2019ll watch over her while you can\u2019t.\u201d Absolutely beautiful touch.',
    author: 'Rohan D.',
    location: 'Delhi',
  },
  {
    id: '5',
    quote: 'I\u2019ve been buying plants online for years. Nobody else sends a follow-up message two weeks later asking how the plant is settling in. That\u2019s not a store, that\u2019s a relationship.',
    author: 'Ananya M.',
    location: 'Pune',
  },
];
