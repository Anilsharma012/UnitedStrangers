
import React, { useRef, useState, useEffect } from 'react';

const TeamRetreats: React.FC = () => {
  const sfRef = useRef<HTMLDivElement>(null);
  const mexicoRef = useRef<HTMLDivElement>(null);
  const amsterdamRef = useRef<HTMLDivElement>(null);
  const parisRef = useRef<HTMLDivElement>(null);
  const portoRef = useRef<HTMLDivElement>(null);
  const viennaRef = useRef<HTMLDivElement>(null);
  const othersRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);

  const [activeLocation, setActiveLocation] = useState<string>('SAN FRANCISCO');

  const navItems = [
    { name: 'SAN FRANCISCO', ref: sfRef },
    { name: 'MEXICO CITY', ref: mexicoRef },
    { name: 'AMSTERDAM', ref: amsterdamRef },
    { name: 'PARIS', ref: parisRef },
    { name: 'PORTO', ref: portoRef },
    { name: 'VIENNA', ref: viennaRef },
    { name: 'OTHERS', ref: othersRef }
  ];

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-150px 0px -70% 0px',
      threshold: 0
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const item = navItems.find(n => n.ref.current === entry.target);
          if (item) setActiveLocation(item.name);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    navItems.forEach(item => {
      if (item.ref.current) observer.observe(item.ref.current);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToRef = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      const yOffset = -220;
      const y = ref.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const locations = [
    {
      ref: sfRef,
      city: 'SAN FRANCISCO - PACIFIC HEIGHTS',
      country: 'United States',
      tagline: 'Airy, modern residence in San Francisco - Pacific Heights.',
      description: 'Make yourself at home in this four-floor house in Pacific Heights, San Francisco. There are 9 private bedrooms total, 6 of which have a shared bathroom, and 3 of which have their own en-suite. There’s a backyard for summer barbecues, a modern, fully equipped kitchen and workspace in-house.',
      imgMain: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=1200',
      imgGrid: [
        'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=600',
        'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=600',
        'https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=600'
      ],
      specs: {
        size: 'Ideal for up to 9 people.',
        rooms: '3 Private Rooms with Private Bathroom | 6 Private Rooms with 2.5 Shared Bathrooms',
        workspace: 'This property includes flexible workspace available in-house, with HDMI cord/TV. Each room is also equipped with a desk.',
        amenities: ['WiFi 100 Mbps', 'Laundry on-site', 'Smart TV', 'Outdoor space', 'Desks in all rooms', 'BBQ', 'Secure building entry', 'Hairdryers', 'Outdoor space', 'Printer', 'Room door locks', 'Free Specialty Coffee', 'Community Events']
      },
      testimonial: {
        text: "Such a great location in Pacific Heights, you can really walk just about anywhere from this spot. The kitchen is huge, and we had some awesome dinner parties!",
        author: "Jordan V."
      },
      why: {
        title: "Why San Francisco?",
        text: "Pacific Heights is best known for its French Chateau and Spanish-style houses - it's picture perfect as far as neighborhoods go. You'll be within walking distance to 2 local parks, and just a short walk from Fillmore Street and Cow Hollow.",
        activities: ['Outdoor Yoga or Pilates', 'Painting Workshop', 'Wine Tasting Tour in Napa Valley', 'Historical Walking Tour']
      }
    },
    {
      ref: mexicoRef,
      city: 'MEXICO CITY - ROMA SUR',
      country: 'Mexico',
      tagline: 'Airy, modern residence in Mexico City - Roma Sur.',
      description: 'Set on a quiet street in Roma Sur, this bright, modern space features airy studios, floor-to-ceiling windows, and inviting communal areas for both work and downtime. With fast WiFi, a friendly community and cafes, restaurants, and leafy parks just steps away.',
      imgMain: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=1200',
      imgGrid: [
        'https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=600',
        'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=600',
        'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=600'
      ],
      specs: {
        size: 'Ideal for up to 35 people.',
        rooms: '20 Apartments with One Bedroom | 8 Studios | 7 Private Rooms with Private Bathroom',
        workspace: 'This property includes a spacious coworking space with phone booths and a meeting room for 6.',
        amenities: ['WiFi 200 Mbps', 'Room door locks', 'Desks in all rooms', 'Fully Equipped Kitchens', 'Dedicated Workspaces', 'Towels', 'Secure building entry', 'Hairdryers', 'Self check in', 'Outdoor space', 'Free Specialty Coffee']
      },
      testimonial: {
        text: "I absolutely loved the Roma Sur location! My queen studio was more like a 1-bedroom with sunny windows. It was a 15-20 min walk to Roma Norte and Condesa.",
        author: "Alyson V."
      },
      why: {
        title: "Why Mexico City?",
        text: "Roma Sur is peppered with hole-in-the-wall taco stops, late-night mezcal bars and lush canopied streets. French architecture stand shoulder to shoulder.",
        activities: ['Street Food Tour', 'Team Cooking Class', 'Hot Air Balloon Ride', 'Day Trip to Teotihuacán']
      }
    },
    {
      ref: amsterdamRef,
      city: 'AMSTERDAM',
      country: 'Netherlands',
      tagline: 'Airy, modern residence in Amsterdam.',
      description: 'Zoku Amsterdam provides a home for business travelers who want to live in the city for a few days to a few months. Stay in a private Loft in their city-centre complex, with complimentary access to co-working spaces.',
      imgMain: 'https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?q=80&w=1200',
      imgGrid: [
        'https://images.unsplash.com/photo-1555854817-57739d8995a0?q=80&w=600',
        'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=600',
        'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=600'
      ],
      specs: {
        size: 'Ideal for up to 75 people.',
        rooms: 'Private Lofts with private bathroom, living room and workspace.',
        workspace: 'This property includes a coworking space, private meeting rooms, and soundproof phone booths for focused work.',
        amenities: ['WiFi 100 Mbps', 'Fully Equipped Kitchens', 'Soaps and shampoos', 'Towels', 'Secure building entry', 'Room door locks', 'A/C', '24/7 staff', 'Bikes', 'Desks in all rooms', 'Dedicated Workspaces', 'In-Room Kitchenette', 'Printer', 'Outdoor space', 'Hairdryers', 'Laundry on-site', 'Bedroom linens', 'Community Events']
      },
      testimonial: {
        text: "It felt like I was in a hotel, with more open co-working space. The actual loft space was great and super convenient - had its own bathroom and little kitchen area.",
        author: "Anna-Rose L."
      },
      why: {
        title: "Why Amsterdam?",
        text: "Zoku Amsterdam is located in the vibrant Eastern Canal District, known for its picturesque canals and street-side cafes. Ideal for exploring museums and nightlife.",
        activities: ['Self-guided team building', 'Communal Dinner in Living Kitchen', 'Murder Mystery Dinner', 'After-work Drinks rooftop']
      }
    },
    {
      ref: parisRef,
      city: 'PARIS',
      country: 'France',
      tagline: 'Airy, modern residence in Paris.',
      description: 'Zoku Paris provides a home for business travelers who want to live in a city for between a few days and a few months. Choose from a loft or private room in their city-centre complex, with a coworking space.',
      imgMain: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1200',
      imgGrid: [
        'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600',
        'https://images.unsplash.com/photo-1543783230-278358633ef2?q=80&w=600',
        'https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=600'
      ],
      specs: {
        size: 'Ideal for up to 150 people.',
        rooms: 'Zoku Paris offers private lofts and rooms with workspaces. Some units include kitchens.',
        workspace: 'The property features a coworking space, restaurant, gym, and laundry. Secure access and essential amenities provided.',
        amenities: ['WiFi 100 Mbps', '24/7 staff', 'A/C in rooms', 'Soaps and shampoos', 'Dedicated Workspaces', 'Towels', 'Room door locks', 'In-Room Kitchenette (selected)', 'Bedroom linens', 'Hairdryers', 'Laundry on-site', 'Secure building entry', 'Smart TV', 'Desks in all rooms', 'Printer', 'Outdoor space', 'Bikes for hire', 'Gym', 'Community Events']
      },
      testimonial: {
        text: "Zoku Paris is a great lifestyle hotel with a cool and relaxed vibe. Right across the road from a metro, its easy access into the center of Paris.",
        author: "Sally M."
      },
      why: {
        title: "Why Paris?",
        text: "Nestled in the heart of Paris, the 17th arrondissement holds the city's best-kept secrets through the leafy serenity of Parc Monceau and bohemian streets.",
        activities: ['Self-guided team building', 'Communal Dinner', 'Murder Mystery Dinner', 'Wine tasting in Living Kitchen']
      }
    },
    {
      ref: portoRef,
      city: 'PORTO - MOUCO',
      country: 'Portugal',
      tagline: 'Airy, modern residence in Porto - Mouco.',
      description: 'This is a blink-and-you’ll miss it home, tucked into a side street in Bonfim. The cowork cafe is the place to get work done, and the weekly events are ideal for unwinding after work.',
      imgMain: 'https://images.unsplash.com/photo-1555854817-57739d8995a0?q=80&w=1200',
      imgGrid: [
        'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=600',
        'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=400',
        'https://images.unsplash.com/photo-1539020140153-e479b8c22e70?q=80&w=600'
      ],
      specs: {
        size: 'Ideal for up to 77 people.',
        rooms: 'Private rooms with ensuite bathrooms and distinct minimalist design.',
        workspace: 'This property includes a spacious coworking space with phone booths, meeting rooms, and AV equipment. There is a cowork cafe on-site.',
        amenities: ['Yoga room', 'In-Room Kitchenette (selected)', 'Smart TV', 'Pool', 'Self check in', 'Desks in all rooms', 'Secure building entry', 'Outdoor space', 'Hairdryers', 'Room door locks', 'Printer', 'Podcast Studio', 'A/C', 'Free Specialty Coffee', 'Community Events']
      },
      testimonial: {
        text: "The only place to stay in Porto. Stop looking - this is the one. Mid-century aesthetic, gorgeous room, cool company. What more could you ask for?",
        author: "J. Bayona"
      },
      why: {
        title: "Why Porto?",
        text: "Bonfim has previously been voted one of the top 10 coolest neighborhoods in Europe, home to a young, creative crowd, independent stores and old-school restaurants.",
        activities: ['Bike Tour of Porto', 'Culinary Workshops', 'River Cruise on the Douro', 'Beach Day at Praia de Matosinhos']
      }
    },
    {
      ref: viennaRef,
      city: 'VIENNA',
      country: 'Austria',
      tagline: 'Airy, modern residence in Vienna.',
      description: 'Zoku Vienna provides a home for business travelers who want to live in the city for a few days to a few months. Stay in a private Loft in their city-centre complex.',
      imgMain: 'https://images.unsplash.com/photo-1516550893923-42d28e5677af?q=80&w=1200',
      imgGrid: [
        'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=600',
        'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=600',
        'https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=600'
      ],
      specs: {
        size: 'Ideal for up to 128 people.',
        rooms: 'Private lofts with kitchens, living areas, and workspaces. Secure access provided.',
        workspace: 'This property features private lofts with kitchens, living areas, and workspaces. Enjoy access to coworking spaces, a restaurant, and gym.',
        amenities: ['WiFi 100 Mbps', 'Dedicated Workspaces', 'Soaps and shampoos', 'Outdoor space', 'Gym', 'Fully Equipped Kitchens', 'A/C', 'Bikes', 'Desks in all rooms', 'Towels', 'Smart TV', 'Secure building entry', 'In-Room Kitchenette', 'Room door locks', 'Hairdryers', 'Laundry on-site', 'In-Room Kitchenette (selected)', 'Bedroom linens', '24/7 staff', 'Printer', 'Community Events']
      },
      testimonial: {
        text: "I recently had the pleasure of staying at Zoku Austria. Their customer service is second to none—genuine, attentive, and incredibly accommodating.",
        author: "Juliet S."
      },
      why: {
        title: "Why Vienna?",
        text: "You can explore the beautiful 2nd district and gaze upon the famous Prater right from our very own rooftop. Leopoldstadt neighborhood is home to plenty of cozy cafes.",
        activities: ['Self-guided team building', 'Communal Dinner rooftop', 'Murder Mystery Dinner', 'Wine tasting in Living Kitchen']
      }
    }
  ];

  return (
    <div className="fade-in bg-[#FAF9F6] min-h-screen pt-[95px]">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row border-b border-black h-auto md:h-[600px]">
        <div className="flex-1 bg-[#F2EFE6] p-12 md:p-24 flex flex-col justify-center border-r border-black">
          <div className="max-w-md">
            <h1 className="text-6xl md:text-8xl font-display text-primary leading-tight tracking-tight mb-8">Bring your team together.</h1>
            <p className="text-lg text-gray-600 font-sans font-light leading-relaxed mb-12">
              With a perfect mix of comfortable accommodations and inspiring workspaces, United Strangers is the ideal destination for your next team retreat.
            </p>
            <div className="flex flex-wrap gap-2 mb-12">
              {['Remote Team Retreats', 'Team Workations', 'Team Offsites', 'Leadership Retreats'].map(tag => (
                <span key={tag} className="px-4 py-1.5 border border-gray-300 rounded-sm text-[10px] font-bold text-gray-500 uppercase tracking-widest">{tag}</span>
              ))}
            </div>
            <button 
              onClick={() => scrollToRef(quoteRef)}
              className="bg-black text-white px-12 py-4 rounded-full font-condensed font-black uppercase tracking-ace-wide text-[13px] hover:bg-gray-800 transition-all shadow-xl"
            >
              Request a Quote
            </button>
          </div>
        </div>
        <div className="flex-1 h-[400px] md:h-auto overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop" 
            className="w-full h-full object-cover" 
            alt="Team gathering" 
          />
        </div>
      </section>

      {/* Sticky Navigation */}
      <section className="bg-white/95 backdrop-blur-md py-10 border-b border-gray-100 sticky top-[128px] z-[110] transition-all">
        <div className="max-w-[1400px] mx-auto px-12">
          <div className="text-center space-y-8">
            <h2 className="text-3xl lg:text-4xl font-display text-primary italic font-black tracking-tighter uppercase leading-none">
              Best Outsite Locations for Teams
            </h2>
            
            <div className="flex justify-center flex-wrap gap-x-10 gap-y-4">
              {navItems.map(item => (
                <button 
                  key={item.name} 
                  onClick={() => scrollToRef(item.ref)}
                  className={`text-[11px] font-bold uppercase tracking-[0.2em] transition-all pb-2 border-b-2 ${activeLocation === item.name ? 'text-primary border-primary' : 'text-gray-400 border-transparent hover:text-primary hover:border-gray-200'}`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Locations mapping */}
      <div className="space-y-40 py-24 bg-white">
        {locations.map((loc, index) => (
          <section key={index} ref={loc.ref} className="max-w-[1400px] mx-auto px-6 space-y-24 scroll-mt-[210px]">
            <div className="text-center space-y-4">
              <h3 className="text-5xl md:text-6xl font-display tracking-tight uppercase">{loc.city}</h3>
              <p className="text-[12px] font-bold text-gray-400 uppercase tracking-widest">{loc.country}</p>
            </div>

            {/* Images Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-2 aspect-[21/9]">
              <div className="md:col-span-2 md:row-span-2 relative overflow-hidden rounded-sm">
                <img src={loc.imgMain} className="w-full h-full object-cover" alt={loc.city} />
              </div>
              {loc.imgGrid.map((img, i) => (
                <div key={i} className="overflow-hidden rounded-sm">
                  <img src={img} className="w-full h-full object-cover" alt="Property grid" />
                </div>
              ))}
              <div className="overflow-hidden rounded-sm bg-gray-100 flex items-center justify-center text-gray-300">
                <span className="material-symbols-outlined text-4xl">more_horiz</span>
              </div>
            </div>

            {/* Details and Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
              <div className="space-y-12">
                <div>
                  <p className="text-[11px] font-bold text-gray-400 tracking-[0.2em] uppercase mb-4">THE SPACE</p>
                  <h4 className="text-4xl md:text-5xl font-display text-primary leading-[1.1] mb-8">{loc.tagline}</h4>
                  <p className="text-lg text-gray-500 font-sans font-light leading-relaxed">{loc.description}</p>
                </div>
              </div>
              <div className="space-y-12">
                <div className="space-y-6">
                  <h5 className="text-[11px] font-bold uppercase tracking-widest border-b border-gray-100 pb-4">Property amenities</h5>
                  <div className="grid grid-cols-2 gap-y-4 gap-x-12">
                    {loc.specs.amenities.slice(0, 10).map((amenity, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-[16px] text-gray-400">check</span>
                        <span className="text-[11px] text-gray-500">{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* Others Section */}
        <section ref={othersRef} className="max-w-[1400px] mx-auto px-6 py-24 scroll-mt-[210px]">
           <h2 className="text-5xl font-display uppercase text-center mb-16">Other Locations</h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {[
               { name: 'Lisbon', img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=500' },
               { name: 'London', img: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=500' },
               { name: 'Barcelona', img: 'https://images.unsplash.com/photo-1583997051654-7fdfafc975b9?q=80&w=500' }
             ].map(loc => (
               <div key={loc.name} className="flex flex-col group">
                  <div className="aspect-[4/3] rounded-sm overflow-hidden mb-6 shadow-md">
                     <img src={loc.img} className="w-full h-full object-cover grayscale transition-all duration-700" alt={loc.name} />
                  </div>
                  <h4 className="text-2xl font-display uppercase">{loc.name}</h4>
               </div>
             ))}
           </div>
        </section>

        {/* Final Quote Form */}
        <section ref={quoteRef} className="bg-[#FAF9F6] py-32 px-6 border-t border-black/5 scroll-mt-20">
          <div className="max-w-4xl mx-auto space-y-16">
            <h2 className="text-5xl md:text-7xl font-display italic tracking-tighter text-center">Get a Quote</h2>
            <form className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <input type="text" placeholder="First Name*" className="w-full bg-white border border-gray-200 py-5 px-6 rounded-sm outline-none font-sans" />
                <input type="text" placeholder="Last Name*" className="w-full bg-white border border-gray-200 py-5 px-6 rounded-sm outline-none font-sans" />
              </div>
              <input type="email" placeholder="Email*" className="w-full bg-white border border-gray-200 py-5 px-6 rounded-sm outline-none font-sans" />
              <button type="button" className="bg-black text-white w-full py-6 rounded-full font-condensed font-black uppercase tracking-[0.2em] text-[16px]">Send</button>
            </form>
          </div>
        </section>
      </div>

      <div className="h-20 bg-white"></div>
    </div>
  );
};

export default TeamRetreats;
