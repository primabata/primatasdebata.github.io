export const siteConfig = {
  title: 'Prima tás de bata',
  author: 'Joana Wilton',
  description: 'Prima tás de bata | Ciência e comunicação',
  url: 'https://primatasdebata.pt',
  logo: '/images/logo1.png',
  shareImage: '/images/logo2.png',
  footerImage: '/images/footer-bg.png',
  keywords: 'science, communication, education',
  timezone: 'Europe/Lisbon',
  gtag: 'G-Y80XD5LXBY',

  navLinks: [
    { name: 'Sobre nós', href: '/about' },
    { name: 'Contacto', href: '/contact' }
  ],

  socialLinks: {
    email: 'primatasdebata@gmail.com',
    instagram: 'primatasdebata',
    linkedin: 'joanawilton'
  }
};

export type SocialNetwork = keyof typeof siteConfig.socialLinks;
