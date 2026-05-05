import { useState, useEffect, useRef } from 'react';

interface Service {
  title: string;
  description: string;
  href?: string;
}

interface ServiceCategory {
  title: string;
  services: Service[];
}

interface Props {
  title: string;
  description: string;
  categories: ServiceCategory[];
}

const serviceIcons: { keywords: string[]; icon: React.ReactNode }[] = [
  {
    keywords: ['kitchen'],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
        <path d="M7 2v20" />
        <path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
      </svg>
    ),
  },
  {
    keywords: ['bathroom', 'bath'],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.5C4.683 3 4 3.683 4 4.5V17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5" />
        <line x1="10" y1="5" x2="8" y2="7" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <line x1="7" y1="19" x2="7" y2="21" />
        <line x1="17" y1="19" x2="17" y2="21" />
      </svg>
    ),
  },
  {
    keywords: ['leak detection', 'leak repair', 'leak prevention', 'leak'],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z" />
        <path d="M9.5 15.5a3 3 0 0 0 4.5 2" />
      </svg>
    ),
  },
  {
    keywords: ['water heater', 'water heating'],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z" />
        <circle cx="12" cy="17" r="1" />
      </svg>
    ),
  },
  {
    keywords: ['drain', 'sewer', 'hydro jetting', 'jetting'],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3v3" /><path d="M18.5 5.5 16.4 7.6" /><path d="M21 12h-3" />
        <path d="M18.5 18.5 16.4 16.4" /><path d="M12 21v-3" />
        <path d="M5.5 18.5 7.6 16.4" /><path d="M3 12h3" /><path d="M5.5 5.5 7.6 7.6" />
        <circle cx="12" cy="12" r="4" />
      </svg>
    ),
  },
  {
    keywords: ['gas', 'gas line', 'gas piping'],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
      </svg>
    ),
  },
  {
    keywords: ['backflow', 'filtration', 'filter', 'purification', 'purif', 'indoor air', 'air quality'],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z" />
      </svg>
    ),
  },
  {
    keywords: ['maintenance', 'preventative', 'appliance', 'tune-up', 'tune up'],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    keywords: ['pipe', 'repiping', 'repipe', 'sewer line', 'trenchless'],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    keywords: ['building', 'commercial', 'green', 'eco'],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21h18" /><path d="M5 21V7l8-4v18" /><path d="M19 21V11l-6-4" />
        <path d="M9 9v.01" /><path d="M9 12v.01" /><path d="M9 15v.01" />
      </svg>
    ),
  },
  {
    keywords: ['ac', 'air conditioning', 'cooling', 'cool'],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
        <circle cx="12" cy="12" r="3"/>
      </svg>
    ),
  },
  {
    keywords: ['heat', 'furnace', 'boiler', 'warm'],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z" />
        <circle cx="12" cy="17" r="1" />
      </svg>
    ),
  },
  {
    keywords: ['thermostat', 'smart'],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <circle cx="12" cy="14" r="4" />
        <path d="M12 6v4" />
      </svg>
    ),
  },
  {
    keywords: ['mini-split', 'ductless', 'split'],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="8" rx="1" />
        <path d="M12 12v4" />
        <path d="M8 16h8" />
        <path d="M6 20h12" />
      </svg>
    ),
  },
  {
    keywords: ['install', 'replacement', 'replace'],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
];

const fallbackIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
  </svg>
);

function getIconForService(title: string): React.ReactNode {
  const lower = title.toLowerCase();
  for (const entry of serviceIcons) {
    if (entry.keywords.some((kw) => lower.includes(kw))) return entry.icon;
  }
  return fallbackIcon;
}

export function ServicesSection({ title, description, categories }: Props) {
  const [activeTab, setActiveTab] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const activeCategory = categories[activeTab];

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-white py-20 md:py-32">
      {/* Subtle Background Accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--brand-primary)]/5 rounded-full blur-[100px] pointer-events-none z-0"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[var(--brand-highlight)]/5 rounded-full blur-[100px] pointer-events-none z-0"></div>

      <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10">

        {/* Premium Header */}
        <div className={`transition-all duration-1000 ease-out mb-16 lg:mb-20 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="mb-8">
            <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-[var(--brand-primary)]/5 rounded-full border border-[var(--brand-primary)]/10 shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-[var(--brand-highlight)] shadow-[0_0_8px_rgba(var(--brand-highlight-rgb),0.5)] animate-pulse"></span>
              <span className="text-xs font-black text-[var(--brand-primary)] uppercase tracking-[0.2em]">Our Services</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[var(--brand-primary)] uppercase tracking-tight leading-[1.05]">
              {title}
            </h2>
            <div className="text-gray-500 text-lg lg:text-xl font-medium leading-relaxed pt-2">
              {description}
            </div>
          </div>
        </div>

        {/* Modern Tabs */}
        {categories.length > 1 && (
          <div className={`flex flex-wrap gap-2 mb-16 transition-all duration-700 delay-200 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            {categories.map((cat, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                className={`group relative px-6 py-3 rounded-full font-black text-[0.7rem] uppercase tracking-widest transition-all duration-300 ${
                  activeTab === i 
                    ? 'bg-[var(--brand-primary)] text-white shadow-lg shadow-[var(--brand-primary)]/20 translate-y-[-2px]' 
                    : 'bg-white text-gray-400 border border-gray-100 hover:border-[var(--brand-highlight)] hover:text-[var(--brand-primary)]'
                }`}
              >
                {cat.title}
                {activeTab === i && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[var(--brand-highlight)] rounded-full"></span>
                )}
              </button>
            ))}
          </div>
        )}

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {activeCategory.services.map((service, i) => {
            const isLink = !!service.href;
            const Tag = isLink ? 'a' : 'div';

            return (
              <Tag
                key={`${activeTab}-${i}`}
                {...(isLink ? { href: service.href } : {})}
                className={`group relative bg-white rounded-[2rem] p-8 border border-gray-100 shadow-[0_15px_40px_-10px_rgba(0,0,0,0.05)] transition-all duration-500 ease-out hover:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.12)] hover:-translate-y-2 hover:border-[var(--brand-highlight)]/50 no-underline text-inherit flex flex-col h-full ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {/* Animated Accent Line */}
                <div className="absolute top-0 left-0 right-0 h-[4px] bg-[var(--brand-highlight)] scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100 rounded-t-full"></div>
                
                <div className="w-14 h-14 bg-[var(--brand-primary)]/5 rounded-2xl flex items-center justify-center text-[var(--brand-primary)] mb-6 transition-all duration-500 group-hover:bg-[var(--brand-highlight)] group-hover:scale-110 group-hover:rotate-3 shadow-sm group-hover:shadow-lg group-hover:shadow-[var(--brand-highlight)]/20">
                  {getIconForService(service.title)}
                </div>

                <h4 className="text-lg font-black uppercase text-[var(--brand-primary)] tracking-tight mb-4 transition-colors duration-300 group-hover:text-[var(--brand-highlight)] leading-tight">{service.title}</h4>
                <div className="text-sm text-gray-500 font-medium leading-relaxed mb-8 flex-grow">
                  {service.description}
                </div>

                {isLink && (
                  <div className="mt-auto self-start">
                    <div className="w-10 h-10 bg-[var(--brand-primary)]/5 rounded-xl flex items-center justify-center text-[var(--brand-primary)] transition-all duration-500 group-hover:bg-[var(--brand-primary)] group-hover:text-white group-hover:translate-x-1 group-hover:shadow-lg group-hover:shadow-[var(--brand-primary)]/20">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                )}
              </Tag>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
