export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  rating: number;
  date: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Priya Sharma",
    role: "Food Critic, Pune Mirror",
    quote: "Saffron & Stone redefines what Modern Indian dining means. The Truffle Paneer Tikka is nothing short of revelatory — smoky, earthy, and impossibly elegant. A must-visit in Pune.",
    rating: 5,
    date: "October 2026",
  },
  {
    id: "t2",
    name: "Rahul & Ananya Mehta",
    role: "Couple | Anniversary Dinner",
    quote: "We celebrated our 5th anniversary here and it was absolutely magical. The ambiance, the service, the Dum Biryani — every detail was perfect. We'll be back every year.",
    rating: 5,
    date: "September 2026",
  },
  {
    id: "t3",
    name: "Vikram Nair",
    role: "Corporate Client",
    quote: "Hosted a business dinner for 12 people. The private dining room was impeccable, the service was white-glove, and the Raan-e-Stone carved tableside was a showstopper. Our clients were blown away.",
    rating: 5,
    date: "August 2026",
  },
  {
    id: "t4",
    name: "Shalini Joshi",
    role: "Food Blogger | @platewithshalini",
    quote: "The Chocolate Lava Cake with edible gold is what dessert dreams are made of. Paired with the Saffron Lemonade, it's a combination I keep coming back for.",
    rating: 5,
    date: "October 2026",
  },
];
