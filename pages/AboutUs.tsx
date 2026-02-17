import React from 'react';

const AboutUs: React.FC = () => {
  const stats = [
    { value: '2015', label: 'Founded in Santa Cruz, California' },
    { value: '5,000+', label: 'Members worldwide' },
    { value: '50+', label: 'Spaces for remote workers' }
  ];

  const peopleCards = [
    { title: 'TRUST & SUPPORT', desc: 'Our community pledges to be part of a safe and inclusive space for everyone.', linkLabel: 'Code of Conduct', img: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=600' },
    { title: 'DIVERSITY AT OUTSITE', desc: "We're committed to becoming a place where everyone can feel at home.", linkLabel: 'Letter From Our CEO', img: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=600' },
    { title: 'MEMBER HUB', desc: 'We aim to facilitate authentic connections, online and offline.', linkLabel: 'Meet Our Community', img: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=600' }
  ];

  const placesCards = [
    { title: 'LOCAL EXPERIENCES', desc: 'Outsite stays allow you to form deep connections to the people and places you encounter.', linkLabel: 'View all Locations', img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=600' },
    { title: 'SHARED SPACES', desc: 'Outsite creates spaces for long-term travelers and the local community to connect.', linkLabel: 'Outsite Cowork Cafe', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=600' },
    { title: 'COMMUNITY INITIATIVES', desc: 'Where possible, we\'ll work with local non-profits to support those who need it the most.', linkLabel: 'Find Out More', img: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=600' }
  ];

  const team = [
    { name: 'EMMANUEL BE', role: 'CEO', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300' },
    { name: 'LIZ FR', role: 'COO', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=300' },
    { name: 'STIJN BE', role: 'CTO', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300' },
    { name: 'STEVEN US', role: 'CFO', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=300' },
    { name: 'DANI CL', role: 'Head of Design', img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300' },
    { name: 'REBECCA GB', role: 'Head of Marketing', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=300' }
  ];

  return (
    <div className="fade-in bg-[#FAF9F6] min-h-screen">
      {/* Header Section */}
      <section className="pt-32 pb-16 px-6 text-center max-w-[1400px] mx-auto">
        <div className="mb-4">
          <span className="font-condensed font-black text-gray-400 text-[10px] tracking-[0.4em] uppercase">SINCE 2015</span>
          <h1 className="text-[56px] md:text-[90px] font-serif italic text-primary leading-none tracking-tight mt-2">Our Story</h1>
        </div>
        <p className="text-gray-500 text-[15px] md:text-[18px] max-w-xl mx-auto mb-10 leading-relaxed font-sans font-light italic">
          United Strangers was founded to serve a new segment of location flexible professionals looking to integrate their life and their work.
        </p>
      </section>

      {/* Hero Visual */}
      <section className="px-6 md:px-24 max-w-[1400px] mx-auto mb-32">
        <div className="aspect-[21/9] overflow-hidden rounded-sm shadow-2xl relative group">
          <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2000" className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-105" />
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 px-6 md:px-20 text-center max-w-4xl mx-auto border-b border-black/5">
        <h2 className="text-[32px] md:text-[44px] font-serif text-primary leading-tight tracking-tight">
          Our mission is to create a world where everyone can design and live their best lives, with the freedom to live and work anywhere.
        </h2>
      </section>

      {/* Stats Section with dividers */}
      <section className="py-32 px-6 md:px-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-black/10">
          {stats.map((stat, i) => (
            <div key={i} className="py-12 md:py-0 text-center space-y-4">
              <h3 className="text-6xl md:text-8xl font-condensed font-black text-primary tracking-tighter">{stat.value}</h3>
              <p className="text-[11px] text-gray-400 font-black uppercase tracking-[0.3em]">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* People Section */}
      <section className="py-24 px-6 md:px-24 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-5xl md:text-7xl font-serif italic text-primary mb-24 tracking-tighter">Our People</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {peopleCards.map((card, i) => (
              <div key={i} className="space-y-8 group cursor-pointer">
                <div className="aspect-[4/5] overflow-hidden rounded-sm shadow-xl">
                  <img src={card.img} alt={card.title} className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105" />
                </div>
                <div className="space-y-4">
                  <h4 className="text-[12px] font-condensed font-black text-primary uppercase tracking-widest">{card.title}</h4>
                  <p className="text-[15px] text-gray-500 font-sans font-light leading-relaxed">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Profiles */}
      <section className="py-40 px-6 md:px-24 bg-[#FAF9F6]">
        <div className="max-w-[1400px] mx-auto text-center">
          <h2 className="text-5xl md:text-[6rem] font-serif italic text-primary leading-none tracking-tighter mb-32">Our Team</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-8 gap-y-16">
            {team.map((member, i) => (
              <div key={i} className="group">
                 <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-6 border border-gray-100 group-hover:border-primary transition-all">
                    <img src={member.img} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" />
                 </div>
                 <h5 className="text-[10px] font-black text-primary mb-1 uppercase tracking-tight">{member.name}</h5>
                 <p className="text-[9px] text-gray-400 font-bold uppercase">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="h-40 bg-white"></div>
    </div>
  );
};

export default AboutUs;
