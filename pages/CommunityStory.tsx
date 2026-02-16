
import React from 'react';

interface CommunityStoryProps {
  onBack: () => void;
}

const CommunityStory: React.FC<CommunityStoryProps> = ({ onBack }) => {
  return (
    <div className="fade-in bg-[#FAF9F6] min-h-screen pt-[120px] pb-20">
      <div className="max-w-[800px] mx-auto px-6">
        
        {/* Breadcrumb */}
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-[12px] font-bold text-gray-400 uppercase tracking-widest hover:text-primary transition-colors mb-12"
        >
          <span className="material-symbols-outlined text-[16px]">arrow_back</span>
          All posts
        </button>

        {/* Category Pill */}
        <div className="inline-block border border-gray-300 rounded-full px-5 py-1.5 mb-8">
           <span className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em]">COMMUNITY</span>
        </div>

        {/* Title Area */}
        <h1 className="text-4xl md:text-6xl font-display text-primary leading-tight mb-8 tracking-tight">
          Meet Digital Nomad Adrian Schimpf, Entrepreneur and Founder
        </h1>
        
        <p className="text-lg md:text-xl text-gray-500 font-sans font-light leading-relaxed mb-8">
          Outsite Member and digital nomad, Adrian, shares his entrepreneurial journey, favorite destinations, and what keeps him inspired on the road.
        </p>

        <div className="flex items-center gap-2 text-[12px] text-gray-400 font-bold uppercase tracking-widest mb-10">
          <span className="material-symbols-outlined text-[16px]">calendar_today</span>
          Nov 05, 2025
        </div>

        {/* Social Share */}
        <div className="flex gap-2 mb-16">
          <div className="bg-[#1877F2] w-8 h-8 flex items-center justify-center text-white rounded-sm cursor-pointer hover:opacity-80"><span className="material-symbols-outlined text-[18px]">facebook</span></div>
          <div className="bg-[#1DA1F2] w-8 h-8 flex items-center justify-center text-white rounded-sm cursor-pointer hover:opacity-80"><span className="material-symbols-outlined text-[18px]">poker_chip</span></div>
          <div className="bg-[#0A66C2] w-8 h-8 flex items-center justify-center text-white rounded-sm cursor-pointer hover:opacity-80"><span className="material-symbols-outlined text-[18px]">work</span></div>
          <div className="bg-[#25D366] w-8 h-8 flex items-center justify-center text-white rounded-sm cursor-pointer hover:opacity-80"><span className="material-symbols-outlined text-[18px]">chat</span></div>
          <div className="bg-[#7D7D7D] w-8 h-8 flex items-center justify-center text-white rounded-sm cursor-pointer hover:opacity-80"><span className="material-symbols-outlined text-[18px]">mail</span></div>
        </div>

        {/* Main Image */}
        <div className="aspect-[4/5] md:aspect-[16/10] overflow-hidden rounded-sm mb-16 shadow-lg">
          <img src="https://images.unsplash.com/photo-1502680390469-be75c86b636f?q=80&w=1600&auto=format&fit=crop" className="w-full h-full object-cover" alt="Adrian surfing" />
        </div>

        {/* Article Body */}
        <div className="space-y-12 text-primary font-sans">
          <p className="text-[16px] leading-relaxed font-light">
            Meet Adrian <span className="font-bold">Schimpf</span>, a digital nomad and entrepreneur from Switzerland. Founder of Aivie, he combines his passion for business with a love for travel and exploration.
          </p>

          <div className="space-y-6">
            <h3 className="text-3xl font-display">The Essentials:</h3>
            <ul className="space-y-4 text-[15px] font-light list-disc pl-5">
              <li><span className="font-bold">Hometown:</span> Zurich</li>
              <li><span className="font-bold">Born in:</span> 1984</li>
              <li><span className="font-bold">Lifestyle:</span> Digital Nomad</li>
              <li><span className="font-bold">Employer:</span> <span className="underline decoration-gray-300">Aivie</span> (Founder)</li>
              <li><span className="font-bold">Industry:</span> Marketing Automation</li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-3xl font-display">Tell us about yourself:</h3>
            <p className="text-[15px] leading-relaxed font-light text-gray-600">
              I’m the founder of Aivie, a European marketing automation company that’s a competition to HubSpot or Mailchimp. We differentiate through data ownership, price and individual service. I love working very closely with my customers and therefore being able to provide solutions that solve their Marketing needs.
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-3xl font-display">When did you start working remotely?</h3>
            <p className="text-[15px] leading-relaxed font-light text-gray-600">
              I founded my fintech smolio.ch in 2017. I quit my very comfortable enterprise job and embarked on the unknown journey of “digital nomading”. I started to travel in general when I was 20 years old. Back then I went for 4 months to Vancouver, Canada for learning English and snowboarding. Ever since, travelling was a big part of my life, and I always carved out time to do it for at least one month a year. So when the whole idea of digital nomading became a thing, it was too tempting not to try it. So I decided to quit, and try it for 6 months in South East Asia. I never looked back.
            </p>
          </div>

          {/* Secondary Image */}
          <div className="aspect-[16/9] overflow-hidden rounded-sm shadow-md">
            <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop" className="w-full h-full object-cover" alt="Working remotely" />
          </div>

          <div className="space-y-6">
            <h3 className="text-3xl font-display">What’s your favorite Outsite location?</h3>
            <p className="text-[15px] leading-relaxed font-light text-gray-600">
              There are many great Outsites. Most recently it is Sagres. But I also had a very good time in Ericeira, San Diego and Santa Cruz. In the end, it’s all about the people. So I enjoy staying in the ones where there is a good community with similar interests and a good professional exchange too sometimes. Even the idea for Aivie formed in the Outsite in San Diego, during talks with a HubSpot consultant.
            </p>
          </div>

          {/* Third Image */}
          <div className="aspect-[16/12] overflow-hidden rounded-sm shadow-md">
            <img src="https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=1600&auto=format&fit=crop" className="w-full h-full object-cover" alt="Adrian in mountains" />
          </div>

          <div className="space-y-6">
            <h3 className="text-3xl font-display">Where was your most recent trip?</h3>
            <p className="text-[15px] leading-relaxed font-light text-gray-600">
              Sagres. After staying here in March, I had to come back. I love the easy beach life and the incredible seafood.
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-3xl font-display">What’s one thing you always travel with?</h3>
            <p className="text-[15px] leading-relaxed font-light text-gray-600">
              My slippers (if it's cold), my electronic toothbrush, and, of course, my surfboard!
            </p>
          </div>

          {/* Community CTA */}
          <div className="pt-20 border-t border-gray-200">
             <p className="text-2xl md:text-3xl font-display leading-tight">
               Curious about the Outsite Community? <a className="underline decoration-primary/30 hover:decoration-primary transition-all cursor-pointer">Become a Member</a> today and get connected.
             </p>
          </div>
        </div>

        {/* Latest Posts Section */}
        <section className="mt-40 pt-20 border-t border-gray-200">
          <div className="space-y-12">
            <div>
              <h4 className="text-2xl font-display mb-8">Search the blog</h4>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Type here to search..." 
                  className="w-full bg-white border border-gray-200 rounded-full py-4 px-8 outline-none focus:ring-1 focus:ring-primary font-sans italic"
                />
              </div>
            </div>

            <div className="space-y-10">
              <h4 className="text-2xl font-display">Latest posts</h4>
              <div className="space-y-8">
                {[
                  { title: "Best Neighborhood to Stay in Lisbon as a Digital Nomad: Your Complete 2026 Guide", tag: "LOCATION", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=300&auto=format" },
                  { title: "Best Digital Nomad Backpacks", tag: "NOMAD LIFE", img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=300&auto=format" },
                  { title: "Remote Worker's Guide to San Francisco", tag: "LOCATION", img: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=300&auto=format" }
                ].map((post, i) => (
                  <div key={i} className="flex gap-6 group cursor-pointer">
                    <div className="w-24 h-24 shrink-0 overflow-hidden rounded-sm">
                       <img src={post.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt={post.title} />
                    </div>
                    <div className="space-y-2">
                       <h5 className="text-[14px] font-medium leading-snug group-hover:text-gray-500 transition-colors">{post.title}</h5>
                       <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">{post.tag}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Subscription Box */}
            <div className="bg-[#D1D8DB]/30 p-10 md:p-12 rounded-sm space-y-8">
              <div className="space-y-2">
                <h4 className="text-2xl font-display">Be the first to know</h4>
                <p className="text-[14px] text-gray-500 font-light">Find out first about new launches, exclusive deals and news from Outsite.</p>
              </div>
              <div className="flex flex-col md:flex-row gap-4">
                <input type="email" placeholder="Enter your email" className="flex-1 bg-white border border-gray-200 py-4 px-6 rounded-sm outline-none font-sans" />
                <button className="bg-primary text-white px-10 py-4 rounded-full font-condensed font-black uppercase tracking-widest text-[12px]">Sign me up</button>
              </div>
              <div className="space-y-4 pt-6">
                <p className="text-[12px] font-bold text-gray-400 uppercase tracking-widest">Follow us</p>
                <div className="flex gap-4">
                  {['facebook', 'photo_camera', 'poker_chip', 'work', 'play_circle'].map((icon, i) => (
                    <span key={i} className="material-symbols-outlined text-gray-400 cursor-pointer hover:text-primary transition-colors">{icon}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CommunityStory;
