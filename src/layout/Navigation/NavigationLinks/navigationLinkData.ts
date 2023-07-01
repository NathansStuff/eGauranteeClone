import { DropdownMenuProps } from '@/components/DropdownMenu/DropdownMenu';

export const navigationLinksData: DropdownMenuProps[] = [
  {
    title: 'Why eGaurantee',
    options: [
      {
        title: 'Our Difference',
        link: '/our-difference',
      },
      {
        title: 'Who We Are',
        link: '/who-we-are',
      },
      {
        title: 'Who We Work With',
        link: '/who-we-work-with',
      },
      {
        title: 'Careers',
        link: '/careers',
      },
    ],
  },
  {
    title: 'Solutions',
    options: [
      {
        title: 'Tenants',
        link: '/tenants',
      },
      {
        title: 'Landlords',
        link: '/landlords',
      },
      {
        title: 'Intermediaries',
        link: '/intermediaries',
      },
      {
        title: 'Savings Calculator',
        link: '/savings-calculator',
      },
    ],
  },
  {
    title: 'Resources',
    options: [
      {
        title: 'In the media',
        link: '/in-the-media',
      },
      {
        title: 'Blog',
        link: '/blog',
      },
      {
        title: 'FAQs',
        link: '/faqs',
      },
      {
        title: 'Happy Customers',
        link: '/happy-customers',
      },
    ],
  },
];
