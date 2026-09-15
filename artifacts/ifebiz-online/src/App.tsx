import { useEffect, useState, type ComponentType } from 'react';
import { Route, Switch, Router as WouterRouter } from 'wouter';
import {
  ArrowDownRight,
  ArrowLeft,
  ArrowRight,
  BarChart3,
  BookOpen,
  Building2,
  CalendarDays,
  Check,
  ChevronRight,
  Church,
  CircleDollarSign,
  Clock3,
  Compass,
  Cross,
  ExternalLink,
  Facebook,
  Gem,
  GraduationCap,
  Handshake,
  HeartHandshake,
  Instagram,
  Laptop,
  LineChart,
  MapPin,
  Menu,
  MessageCircle,
  Minus,
  MoreHorizontal,
  Package,
  Palette,
  Phone,
  Play,
  Scissors,
  Search,
  Send,
  ShoppingBag,
  ShoppingCart,
  Sparkles,
  Store,
  Target,
  ThumbsUp,
  Truck,
  Users,
  Utensils,
  X,
  Youtube,
} from 'lucide-react';
import logo from '@assets/file_0000000005207246a2be1cd475cd154d_1786135011946.png';
import ochelImage from '@assets/Screenshot_20260807-203608_1786135027905.jpg';
import techademImage from '@assets/Screenshot_20260807-204424~2_1786135027960.jpg';
import aboImage from '@assets/Screenshot_20260807-204451~2_1786135028004.jpg';
import NotFound from '@/pages/not-found';

type IconType = ComponentType<{ size?: number; strokeWidth?: number }>;

const phone = '2347054839417';
const whatsapp = (message: string) => `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

const navItems = [
  ['Home', 'home'],
  ['Packages', 'packages'],
  ['Why a Website', 'why'],
  ['Website Types', 'types'],
  ['Testimonials', 'testimonials'],
  ['Sample Websites', 'samples'],
  ['Contact', 'contact'],
];

const benefits = [
  ['Look more professional', 'Make a strong first impression before the first conversation.', Laptop],
  ['Be found on Google', 'Give customers searching nearby a clear way to discover you.', Search],
  ['Receive enquiries 24/7', 'Your best introduction stays open, even after business hours.', Clock3],
  ['Accept online orders', 'Give ready-to-buy customers a simple path to place an order.', ShoppingCart],
  ['Showcase products & services beautifully', 'Put your best work, offers and story in one polished place.', Sparkles],
  ['Connect customers directly to WhatsApp', 'Turn a website visit into a friendly, familiar enquiry.', MessageCircle],
] as const;

const stories = [
  ['01', 'Build Trust', 'A thoughtful website makes your business feel established, dependable and ready to serve.'],
  ['02', 'Be Found on Google', 'Meet people at the exact moment they are looking for what your business offers.'],
  ['03', 'Open 24 Hours', 'Let customers learn about you, browse your services and reach out whenever it suits them.'],
  ['04', 'Increase Sales', 'A clear online journey helps curious visitors become confident customers.'],
  ['05', 'Look Bigger Than Your Competitors', 'Present your business with the care and confidence it deserves.'],
  ['06', 'Own Your Online Presence', 'Your website gives your business a home you control, beyond a social feed.'],
];

const packages = [
  {
    name: 'Starter', price: '₦30,000', intro: 'Perfect for small businesses.',
    features: ['Beautiful mobile-friendly website', 'Up to 5 pages', 'WhatsApp integration', 'Google Maps', 'Contact Form', 'Social Media links', 'Basic SEO'],
  },
  {
    name: 'Business', price: '₦60,000', intro: 'Best for growing businesses.', popular: true,
    features: ['Everything in Starter', 'Product/Service catalogue', 'Photo gallery', 'Testimonials', 'Google indexing', 'Multiple enquiry forms', 'Premium animations', 'Better SEO'],
  },
  {
    name: 'Premium', price: '₦80,000', intro: 'Designed for businesses ready to grow.',
    features: ['Everything in Business', 'Blog', 'Customer reviews', 'Booking/Appointment system', 'Admin Dashboard', 'Advanced contact options', 'Promotional banners', 'Analytics ready'],
  },
  {
    name: 'Enterprise', price: '₦120,000', intro: 'For businesses needing advanced functionality.',
    features: ['Everything in Premium', 'E-commerce', 'Customer accounts', 'Order history', 'Online payments', 'Admin Dashboard', 'Product management', 'Sales tracking', 'Advanced reports', 'Future scalability'],
  },
];

const websiteTypes: [string, string, IconType][] = [
  ['Restaurant Websites', 'Menus, specials and a direct route to reservations or orders.', Utensils],
  ['Online Stores', 'A clear shopfront for products, orders and growing sales.', ShoppingBag],
  ['Fashion Websites', 'Let every collection, look and detail speak for itself.', Palette],
  ['Beauty & Spa Websites', 'A calm, polished home for services and appointments.', Scissors],
  ['Real Estate Websites', 'Present properties with confidence and clarity.', Building2],
  ['Hotel Websites', 'Help guests picture their stay and make an enquiry.', Compass],
  ['School Websites', 'Keep families informed with a welcoming digital front door.', GraduationCap],
  ['Church Websites', 'Share your community, services and weekly rhythm.', Church],
  ['Hospital Websites', 'Make essential information easier for people to find.', HeartHandshake],
  ['Corporate Websites', 'A focused, credible presence for your company.', LineChart],
  ['Portfolio Websites', 'Put your best work in front of the right people.', Gem],
  ['Blog Websites', 'A beautiful place to publish ideas and updates.', BookOpen],
  ['Professional Service Websites', 'Explain your expertise and make contact simple.', Handshake],
  ['Event Websites', 'Bring the details, excitement and next steps together.', CalendarDays],
  ['Pharmacy Websites', 'Make products, services and location easy to access.', CircleDollarSign],
  ['Agriculture Websites', 'Showcase your produce, process and supply with pride.', Store],
];

const samples = [
  ['Restaurant', 'A warm, appetising presentation for a food business.', 'KarYwIoz88I'],
  ['Fashion', 'A bold, visual showcase for a style-led brand.', 'Iw0kHSQbQQU'],
  ['Beauty & Spa', 'A calm digital welcome for beauty and self-care.', 'Vao0eZztv1k'],
  ['Business', 'A confident online home built around clear enquiries.', 'ESuUoLtQdK4'],
  ['Services', 'A simple, polished path from interest to conversation.', 'bq9RhBNx7EA'],
];

const chooseItems = [
  'Professional designs', 'Fast delivery', 'Affordable pricing', 'Mobile responsive',
  'WhatsApp integration', 'Google-friendly', 'Built for Nigerian businesses',
  'Reliable after-sales support', 'Future upgrades available',
];

function Brand() {
  return (
    <a href="#home" className="brand" aria-label="IfeBiz Online home" data-testid="link-brand">
      <img src={logo} alt="IfeBiz Online logo mark" />
      <span className="brand-name">IfeBiz Online<span>Digital presence for local business</span></span>
    </a>
  );
}

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const jump = (id: string) => { setMenuOpen(false); scrollTo(id); };
  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav">
        <Brand />
        <nav className="nav-links" aria-label="Primary navigation">
          {navItems.map(([label, id]) => <a key={id} href={`#${id}`} data-testid={`link-nav-${id}`}>{label}</a>)}
        </nav>
        <div className="nav-actions">
          <a className="button button-gold button-small" href={whatsapp("Hello, I'd like to get a website for my business.")} target="_blank" rel="noreferrer" data-testid="link-header-whatsapp">
            <MessageCircle size={15} /> Get Your Website
          </a>
        </div>
        <button className="icon-button menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} data-testid="button-menu">
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {menuOpen && <div className="mobile-menu">
        {navItems.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => jump(id)} data-testid={`link-mobile-nav-${id}`}>{label}</a>)}
        <a className="button button-gold" href={whatsapp("Hello, I'd like to get a website for my business.")} target="_blank" rel="noreferrer" data-testid="link-mobile-whatsapp"><MessageCircle size={15} /> Get Your Website</a>
      </div>}
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-grid">
        <div className="hero-copy reveal">
          <div className="eyebrow hero-kicker">Made for Ile-Ife businesses</div>
          <h1>Give Your Business a <em>Professional</em> Online Presence</h1>
          <p className="hero-description">We help businesses in Ile-Ife attract more customers, build trust, receive enquiries 24/7 and grow with beautiful mobile-friendly websites.</p>
          <div className="hero-actions">
            <a className="button button-primary" href={whatsapp("Hello, I'd like to get a website for my business.")} target="_blank" rel="noreferrer" data-testid="link-hero-whatsapp"><MessageCircle size={17} /> Get Your Website</a>
            <a className="button button-outline" href="#packages" data-testid="link-hero-packages">View Packages <ArrowDownRight size={16} /></a>
          </div>
          <div className="hero-note"><span className="note-dot" /><span><strong>Local knowledge.</strong> Professional presentation.</span></div>
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  const trust: [string, IconType][] = [['Restaurants', Utensils], ['Fashion', Palette], ['Beauty', Scissors], ['Real Estate', Building2], ['Hotels', Compass], ['Schools', GraduationCap], ['Churches', Church], ['Pharmacies', CircleDollarSign], ['Supermarkets', ShoppingCart], ['Professionals', Handshake]];
  return <section className="trust-bar" aria-label="Business categories">
    <div className="container trust-inner">
      <div className="trust-copy">Helping businesses in Ile-Ife build their online presence.<span>From first impression to WhatsApp enquiry.</span></div>
      <div className="trust-items">{trust.map(([label, Icon]) => <span className="trust-item" key={label}><Icon size={14} />{label}</span>)}</div>
    </div>
  </section>;
}

function WhatChanges() {
  return <section className="section what-changes-section warm-section">
    <div className="container">
      <div className="benefits-stamp what-changes-banner">
        <div className="eyebrow">What changes</div>
        <p className="stamp-big">Your next customer is already looking.</p>
        <p>A good website helps them find you, trust you and take the next step without stress.</p>
      </div>
    </div>
  </section>;
}

function Packages() {
  return <section id="packages" className="section" style={{ background: '#f8f0e1' }}>
    <div className="container">
      <div className="section-heading center"><div className="eyebrow">Simple to choose</div><h2>Affordable Website Packages</h2><p>Choose a package that fits your business. Every package starts with a thoughtful design and a clear route to WhatsApp.</p></div>
      <div className="packages-grid">{packages.map((item, index) => <article className={`package-card ${item.popular ? 'featured' : ''}`} key={item.name} data-testid={`card-package-${item.name.toLowerCase()}`}>
        {item.popular && <span className="popular-badge">Most Popular</span>}
        <span className="package-tier">0{index + 1} / {item.name}</span><h3>{item.name}</h3><p className="package-intro">{item.intro}</p><div className="price">{item.price} <small>one-time</small></div>
        <ul className="feature-list">{item.features.map((feature) => <li key={feature}><Check size={14} />{feature}</li>)}</ul>
        <a className={`button ${item.popular ? 'button-primary' : 'button-outline'}`} href={whatsapp(`Hello, I'm interested in the ${item.name} website package.`)} target="_blank" rel="noreferrer" data-testid={`link-package-${item.name.toLowerCase()}`}><MessageCircle size={15} /> Chat on WhatsApp</a>
      </article>)}</div>
    </div>
  </section>;
}

function Benefits() {
  return <section id="why" className="section warm-section">
    <div className="container">
      <div className="section-heading"><div className="eyebrow">A website that works for you</div><h2>More than a page. A better way to be <span className="serif">seen.</span></h2><p>Give your business a polished place to welcome people, answer questions and make it easy to start a conversation.</p></div>
      <div className="benefit-list">{benefits.map(([title, text, Icon], index) => <article className="benefit-item" key={title} data-testid={`card-benefit-${index}`}><div className="benefit-icon"><Icon size={20} /></div><div><h3>{title}</h3><p>{text}</p></div></article>)}</div>
    </div>
  </section>;
}

function WebsiteTypes() {
  return <section id="types" className="section green-section"><div className="container">
    <div className="section-heading"><div className="eyebrow">Made for your kind of business</div><h2>Whatever you do, there is a beautiful way to show it.</h2><p>From a local store to a growing company, we shape the website around how your customers choose you.</p></div>
    <div className="type-grid">{websiteTypes.map(([title, copy, Icon], index) => <article className="type-card" key={title} data-testid={`card-website-type-${index}`}><div className="type-icon"><Icon size={20} /></div><h3>{title}</h3><p>{copy}</p></article>)}</div>
  </div></section>;
}

function Testimonials() {
  const testimonials = [[techademImage, 'Techadem', 'A polished digital presence that makes technical work feel approachable.'], [ochelImage, "O'chel Foods", 'A warm, reassuring experience for a business people can trust.'], [aboImage, 'ABO Wears', 'A confident showcase that lets the quality of the work lead.']];
  const shift = (direction: number) => document.getElementById('testimonial-track')?.scrollBy({ left: direction * 290, behavior: 'smooth' });
  return <section id="testimonials" className="section warm-section"><div className="container">
    <div className="testimonial-intro"><div className="section-heading"><div className="eyebrow">Words from the other side</div><h2>Good work should leave people <span className="serif">smiling.</span></h2><p>Real conversations from businesses we have helped bring online.</p></div><div className="carousel-controls"><button className="icon-button" onClick={() => shift(-1)} aria-label="Previous testimonial" data-testid="button-testimonial-previous"><ArrowLeft size={18} /></button><button className="icon-button" onClick={() => shift(1)} aria-label="Next testimonial" data-testid="button-testimonial-next"><ArrowRight size={18} /></button></div></div>
     <div className="testimonial-track" id="testimonial-track">{testimonials.map(([image, name, text], index) => <article className="testimonial-card" key={name} data-testid={`card-testimonial-${index}`}><div className={`phone-frame ${name === 'ABO Wears' ? 'phone-frame-wide' : ''}`}><img src={image} alt={`${name} testimonial conversation`} loading="lazy" /></div><div className="testimonial-meta"><div><strong>{name}</strong><div style={{ color: '#728077', fontSize: '11px', marginTop: '4px' }}>{text}</div></div><span>Client note</span></div></article>)}</div>
  </div></section>;
}

function Samples() {
  return <section id="samples" className="section samples-section"><div className="container">
    <div className="testimonial-intro"><div className="section-heading"><div className="eyebrow">A little look around</div><h2>Sample Websites</h2><p>See how a strong online presence can look across different kinds of businesses.</p></div><div className="carousel-controls"><a className="button button-outline button-small" href="https://www.youtube.com/@IfeBizOnline" target="_blank" rel="noreferrer" data-testid="link-youtube-channel">More demos <ExternalLink size={14} /></a></div></div>
    <div className="sample-track">{samples.map(([category, copy, id], index) => <article className="sample-card" key={id} data-testid={`card-sample-${index}`}><div className="video-wrap"><iframe src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&mute=1&playsinline=1&loop=1&playlist=${id}&rel=0`} title={`${category} sample website`} loading="lazy" allow="autoplay; encrypted-media; picture-in-picture" /></div><div className="sample-info"><h3>{category} website</h3><p>{copy}</p><a className="button button-primary button-small" href={`https://youtube.com/shorts/${id}?feature=share`} target="_blank" rel="noreferrer" data-testid={`link-sample-demo-${index}`}><Play size={13} /> View Demo</a></div></article>)}</div>
  </div></section>;
}

function Choose() {
  return <section className="section"><div className="container choose-wrap"><div className="choose-mark"><span className="choose-mark-note">Built around your business</span><img src={logo} alt="IfeBiz Online logo mark" loading="lazy" /></div><div><div className="section-heading"><div className="eyebrow">Why choose IfeBiz Online</div><h2>Local insight. <span className="serif">Premium</span> care.</h2><p>You get a website made for how business happens here: clear, welcoming and ready to turn interest into a conversation.</p></div><div className="choose-list">{chooseItems.map((item, index) => <div className="choose-item" key={item} data-testid={`text-choose-${index}`}><Check size={16} />{item}</div>)}</div></div></div></section>;
}

function Contact() {
  return <section id="contact" className="section contact-section"><div className="container contact-grid"><div><div className="section-heading"><div className="eyebrow">The next step is simple</div><h2>Let’s Build Your Website</h2><p className="contact-copy">Whether you're just starting or already running an established business, we'll create a website that helps you attract more customers and grow your brand.</p></div><div className="contact-info"><div><MapPin size={18} /> Megatron Studios, Ede Road, Odo Eran, Ile-Ife</div><a href={`tel:07054839417`} data-testid="link-contact-phone"><Phone size={18} /> 07054839417</a></div></div><div className="contact-card"><h3>Have a business in mind?</h3><p>Tell us a little about what you do and we will help you find the right starting point.</p><a className="button button-primary" href={whatsapp("Hello, I'd like to get started with a website for my business. Please tell me what you need from me.")} target="_blank" rel="noreferrer" data-testid="link-contact-whatsapp"><Send size={16} /> Get Started on WhatsApp</a></div></div></section>;
}

function Footer() {
  return <footer className="footer"><div className="container"><div className="footer-top"><div><Brand /><p className="footer-tagline">Helping Ile-Ife businesses look professional online and turn visitors into WhatsApp enquiries.</p></div><div><h4>Explore</h4><div className="footer-links">{navItems.slice(1, 5).map(([label, id]) => <a href={`#${id}`} key={id} data-testid={`link-footer-${id}`}>{label}</a>)}</div></div><div><h4>Contact</h4><div className="footer-links"><a href="tel:07054839417" data-testid="link-footer-phone">07054839417</a><a href="#contact" data-testid="link-footer-address">Megatron Studios, Ede Road<br />Odo Eran, Ile-Ife</a></div></div><div><h4>Keep in touch</h4><div className="socials"><a className="icon-button" href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram" data-testid="link-instagram"><Instagram size={16} /></a><a className="icon-button" href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook" data-testid="link-facebook"><Facebook size={16} /></a><a className="icon-button" href="https://www.youtube.com/@IfeBizOnline" target="_blank" rel="noreferrer" aria-label="YouTube" data-testid="link-youtube"><Youtube size={16} /></a></div></div></div><div className="footer-bottom"><span>© 2026 IfeBiz Online.</span><span>Helping Ile-Ife Businesses Grow Online.</span></div></div></footer>;
}

function Home() {
  return <div className="site-shell"><Header /><main><Hero /><TrustBar /><WhatChanges /><Packages /><Testimonials /><Samples /><Benefits /><WebsiteTypes /><Choose /><Contact /></main><Footer /><a className="float-whatsapp" href={whatsapp("Hello, I'd like to get a website for my business.")} target="_blank" rel="noreferrer" aria-label="Chat with IfeBiz Online on WhatsApp" data-testid="link-floating-whatsapp"><MessageCircle size={20} /> <span>Chat on WhatsApp</span></a></div>;
}

function Router() {
  return <Switch><Route path="/" component={Home} /><Route component={NotFound} /></Switch>;
}

function App() {
  return <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}><Router /></WouterRouter>;
}

export default App;