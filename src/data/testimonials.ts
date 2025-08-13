export interface Testimonial {
  id: number;
  name?: string;       // optional für anonym
  location: string;
  beforeImg: string;
  afterImg: string;
  quote: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Familie Müller",
    location: "Osnabrück",
    beforeImg: `${process.env.PUBLIC_URL}/testimonials/before1.jpg`,
    afterImg: `${process.env.PUBLIC_URL}/testimonials/after1.jpg`,
    quote: "Unser Garten ist kaum wiederzuerkennen – tolle Arbeit!"
  },
  {
    id: 2,
    name: undefined, // anonym
    location: "Georgsmarienhütte",
    beforeImg: `${process.env.PUBLIC_URL}/testimonials/before2.jpg`,
    afterImg: `${process.env.PUBLIC_URL}/testimonials/after2.jpg`,
    quote: "Schnell, freundlich und sehr professionell."
  },
  {
    id: 3,
    name: "Herr Schmitz",
    location: "Bad Iburg",
    beforeImg: `${process.env.PUBLIC_URL}/testimonials/before3.jpg`,
    afterImg: `${process.env.PUBLIC_URL}/testimonials/after3.jpg`,
    quote: "Endlich ein Garten, in dem man sich wohlfühlt."
  }
];
