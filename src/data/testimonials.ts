export interface Testimonial {
  id: string;
  name: string;
  designation: string;
  quote: string;
  photo: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: "ahmed-raza",
    name: "Ahmed Raza",
    designation: "Operations Manager, Distribution",
    quote:
      "IA Perma rebuilt our entire inventory workflow. What used to take our team hours of manual counting now happens in real time. It changed how we operate.",
    photo:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
    rating: 5,
  },
  {
    id: "sana-malik",
    name: "Sana Malik",
    designation: "Retail Chain Owner",
    quote:
      "The POS system they built fit our exact pricing rules and multi-branch setup perfectly. Support has been fast every single time we've needed it.",
    photo:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&q=80",
    rating: 5,
  },
  {
    id: "bilal-hussain",
    name: "Bilal Hussain",
    designation: "Finance Director",
    quote:
      "Professional from day one. They understood our processes better than we could explain them, and the ERP they delivered just works.",
    photo:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80",
    rating: 5,
  },
];