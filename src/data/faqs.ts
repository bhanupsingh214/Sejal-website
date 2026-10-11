import { FAQItem, Testimonial } from '../types';

export const FAQS_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'Orders & Shipping',
    question: 'How long does delivery take across India?',
    answer: 'Standard delivery takes 2 to 4 working days to 19,000 pin codes across India via our carbon-neutral logistics network. Orders placed before 1 PM IST ship on the same business day from our Bengaluru fulfillment center. Delivery is complimentary on all orders over ₹1,999 (flat ₹120 for smaller orders).'
  },
  {
    id: 'faq-2',
    category: 'Orders & Shipping',
    question: 'What is your returns and exchange policy?',
    answer: 'We provide a hassle-free 30-day return window. Every box arrives with a prepaid, pre-printed reverse shipping label. If the size or fit isn’t ideal, simply repack the item in its original recycled carton and schedule a pickup or drop it at any partner depot. Exchanges for another size dispatch immediately upon scan.'
  },
  {
    id: 'faq-3',
    category: 'Repairs & Lifetime Care',
    question: 'Are repairs really free for as long as I own the garment?',
    answer: 'Yes, unconditionally. We mend popped seams, torn pockets, missing buttons, broken zips, and minor snags for free forever. You can bring your piece into our Bengaluru (Indiranagar) or Mumbai (Bandra West) studios for same-day walk-in care, or mail it to our Tiruppur atelier using our postal repair kit (we cover return postage).'
  },
  {
    id: 'faq-4',
    category: 'Transparency & Pricing',
    question: 'Why does an everyday t-shirt cost ₹1,290?',
    answer: 'Because ₹418 goes directly to GOTS organic cotton and machinists paid 1.8× the statutory minimum wage, ₹180 to plastic-free packaging and carbon-neutral transit, ₹230 to running our studios and independent lab audits, and ₹462 is our operational margin to fund lifetime repairs. Worn once a week over five years (260 wears), it costs just ₹4.96 per wear.'
  },
  {
    id: 'faq-5',
    category: 'Transparency & Pricing',
    question: 'How can I verify that your sustainability and fair-wage claims are authentic?',
    answer: 'Every garment is tagged with a woven QR code linking to its specific harvest and production batch. You can see the exact cooperative (e.g. Vidarbha Organic Farmers Co-op), the spinning mill, our water recycling metrics (94% closed loop), and our latest SA8000 fair labour audit certificate conducted by third-party auditors.'
  },
  {
    id: 'faq-6',
    category: 'Repairs & Lifetime Care',
    question: 'How does the ₹400 recycling buyback credit work?',
    answer: 'When a piece has truly lived its full life after a decade of wear and cannot be mended further, return it to us. Our Tiruppur mill unravels the cotton to spin new recycled yarn, and we credit ₹400 to your account toward your next purchase.'
  },
  {
    id: 'faq-7',
    category: 'Wholesale & Collaborations',
    question: 'Do you offer wholesale distribution or stock in independent boutiques?',
    answer: 'We partner with a limited number of ethical concept stores, design boutiques, and independent bookshops that share our slow-fashion ethos. Select "Wholesale and stockists" on our contact form and our partnership team will share our line sheets, minimum run terms, and consignment guidelines.'
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Ananya R.',
    initials: 'AR',
    location: 'Bengaluru',
    rating: 5,
    quote: 'Three years of weekly wear and the Everyday Tee still holds its original neckline and shape without curling. I’ve stopped buying high-street basics entirely.',
    purchasedItem: 'Everyday Organic Tee',
    verified: true
  },
  {
    id: 'test-2',
    name: 'Kabir M.',
    initials: 'KM',
    location: 'Pune',
    rating: 5,
    quote: 'They repaired a torn pocket on my Field Jacket for free and posted it back in four days with a handwritten care note. Nobody provides this kind of service anymore.',
    purchasedItem: 'Field Jacket',
    verified: true
  },
  {
    id: 'test-3',
    name: 'Sneha D.',
    initials: 'SD',
    location: 'Mumbai',
    rating: 4,
    quote: 'Pricier than the high street upfront, but I’ve bought four versatile pieces in two years instead of twenty cheap ones. In terms of cost-per-wear, it’s genuinely much cheaper.',
    purchasedItem: 'Linen Wrap Dress',
    verified: true
  },
  {
    id: 'test-4',
    name: 'Vikram S.',
    initials: 'VS',
    location: 'Delhi NCR',
    rating: 5,
    quote: 'The Merino Crew Knit breathes so well during flights and cool weather. Traceable provenance and no synthetic itchiness whatsoever.',
    purchasedItem: 'Merino Crew Knit',
    verified: true
  }
];
