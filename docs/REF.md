MDX

---
title: "Home"
description: "{fullName} - Expert plumbing services in {city} and surrounding areas"
---

import HeroSection from "@/components/sections/HeroSection.astro"
import TrustBadges from "@/components/sections/TrustBadges.astro"
import CouponsSection from "@/components/sections/CouponsSection.astro"
import ContentSection from "@/components/sections/ContentSection.astro"
import ServicesSection from "@/components/sections/ServicesSection"
import MaintenancePlanSection from "@/components/sections/MaintenancePlanSection.astro"
import FinancingSection from "@/components/sections/FinancingSection.astro"
import PortfolioSection from "@/components/sections/PortfolioSection.astro"
import TestimonialsSection from "@/components/sections/TestimonialsSection.astro"
import CTAStrip from "@/components/sections/CTAStrip.astro"
import ServiceAreaSection from "@/components/sections/ServiceAreaSection.astro"


<HeroSection
  buttonText="Call Now"
  buttonHref="tel:{phoneRaw}"
  slides={[
    {
      title: `Building Your Dream Business? We're Here To Help!`,
      subtitle: `Professional plumbing solutions for residential and commercial properties in {city}.`,
      image: "https://ucarecdn.com/ce315695-0b1e-4a89-9dcc-7a35ef585fc9/-/preview/1000x562/",
      promoTitle: "5% OFF",
      promoText: "for new commercial projects"
    },
    {
      title: "Shower Installation Special!",
      subtitle: "Upgrade to a luxurious rain shower, a convenient walk-in shower, or a relaxing jetted shower.",
      image: "https://59d9vvag7y.ucarecd.net/e8a4f4fd-5048-4e3d-8e91-763d685d5bd4/-/preview/1000x665/",
      promoTitle: "15% OFF",
      promoText: "all new shower installations during your bathroom remodel."
    },
    {
      title: "Toilet Overflows & Burst Pipes? We're Your 24/7 Rescue!",
      subtitle: "Don't let water damage ruin your day. Call us now!",
      image: "https://59d9vvag7y.ucarecd.net/4029464b-0696-4b67-b02b-1870e3986759/-/preview/1000x562/",
      promoTitle: "Get 20% OFF",
      promoText: "All emergency plumbing services for bathroom issues."
    }
  ]}
/>

<TrustBadges
  badges={[
    { name: "BBB & Angie's List", image: "https://johnh1003.sg-host.com/wp-content/uploads/2024/12/BBB_Angies-List.webp" },
    { name: "Google Reviews", image: "https://johnh1003.sg-host.com/wp-content/uploads/2024/12/google-review.webp" },
    { name: "Nextdoor", image: "https://johnh1003.sg-host.com/wp-content/uploads/2024/12/Nextdoor-logo.webp", small: true },
    { name: "HomeAdvisor", image: "https://johnh1003.sg-host.com/wp-content/uploads/2024/12/HomeAdvisor.webp" },
    { name: "BBB A+", image: "https://johnh1003.sg-host.com/wp-content/uploads/2024/12/bbb-logo-a-plus.webp" },
    { name: "Google Reviews 2", image: "https://johnh1003.sg-host.com/wp-content/uploads/2024/12/google-review.webp" }
  ]}
/>

<CouponsSection
  coupons={[
    {
      label: "Senior & Military",
      discount: "10% OFF",
      description: "Senior & Military Discount. Cannot be combined with any other offer.",
      expires: "December 2024"
    },
    {
      label: "Free Camera Inspection",
      discount: "FREE",
      description: "Sewer <a href='/commercial/drain-sewer/camera-inspections'><strong>Camera Inspection</strong></a> with any standard <a href='/residential/drain/cleaning'><strong>drain cleaning</strong></a>.",
      expires: "December 2024"
    },
    {
      label: "Plumbing",
      discount: "$50 OFF",
      description: "Any Repair of $500 or More. <a href='/contact'><strong>Contact us</strong></a> now to get $50 Off today.",
      expires: "December 2024"
    }
  ]}
/>

<ContentSection
  badge="Welcome to {fullName}"
  title="Expert Plumbing Services You Can Trust"
  description="With over 20 years of experience, {fullName} has been the trusted choice for plumbing services in {city}. Our licensed and insured plumbers provide quality solutions for residential and commercial properties, ensuring every job is done right the first time. From leaky faucets to complete pipe installations, we're here to help."
  features={[
    "Licensed & Insured Plumbers",
    "Affordable Pricing with No Hidden Costs",
    "High-Quality Workmanship Guaranteed",
    "Fast Response Times"
  ]}
  buttonText="Learn More About Our Plumbing Services"
  buttonHref="/about"
  images={[
    "https://ucarecdn.com/514fa2a4-9e6c-417b-8e38-fdab8ec5364a/-/preview/999x1000/",
    "https://ucarecdn.com/315825d3-5856-474f-8ac1-f793441976f7/-/preview/1000x666/"
  ]}
  imagePosition="left"
/>


<ServicesSection
  client:visible
  title="Our Professional Plumbing Services"
  description="We specialize in providing top-notch plumbing solutions tailored to meet your needs. Whether you're dealing with an urgent repair or planning a plumbing upgrade, our team is here to deliver reliable, efficient, and affordable services."
  categories={[
    {
      title: "Residential Plumbing Services",
      services: [
        { title: "Kitchen Plumbing", description: "Complete <a href='/residential/kitchen/faucet-sink'><strong>kitchen plumbing</strong></a> solutions", icon: "https://johnh1003.sg-host.com/wp-content/uploads/2024/12/water-faucet.webp" },
        { title: "Bathroom Plumbing", description: "Expert <a href='/residential/bathroom/sink-faucet'><strong>bathroom plumbing</strong></a> services", icon: "https://johnh1003.sg-host.com/wp-content/uploads/2024/12/Bathroom-Plumbing-Icon.webp" },
        { title: "Leak Detection and Repair", description: "Find and fix leaks fast", icon: "https://johnh1003.sg-host.com/wp-content/uploads/2024/12/leaking.webp" },
        { title: "Water Heaters", description: "Installation and repair services", icon: "https://johnh1003.sg-host.com/wp-content/uploads/2024/12/water-heater.webp" },
        { title: "Drain and Sewer Services", description: "Keep your drains flowing", icon: "https://johnh1003.sg-host.com/wp-content/uploads/2024/12/drain-sewer-icon.webp" },
        { title: "View All Residential Plumbing", description: "New construction and remodels", icon: "https://johnh1003.sg-host.com/wp-content/uploads/2024/12/plumbing-icon.webp" }
      ]
    },
    {
      title: "Commercial Plumbing Services",
      services: [
        { title: "Building Plumbing Systems", description: "Complete commercial systems", icon: "https://johnh1003.sg-host.com/wp-content/uploads/2025/01/building-plumbing-system-icon.webp" },
        { title: "Drain and Sewer Services", description: "Commercial drain solutions", icon: "https://johnh1003.sg-host.com/wp-content/uploads/2024/12/drain-sewer-icon.webp" },
        { title: "Gas Plumbing", description: "Safe gas line services", icon: "https://johnh1003.sg-host.com/wp-content/uploads/2024/12/gas-pipeline-icon.webp" },
        { title: "Backflow Prevention", description: "Protect your water supply", icon: "https://johnh1003.sg-host.com/wp-content/uploads/2024/12/pipe-prevention.webp" },
        { title: "Water Heaters", description: "Commercial water heating", icon: "https://johnh1003.sg-host.com/wp-content/uploads/2024/12/water-heater.webp" },
        { title: "View All Commercial Plumbing", description: "See all our commercial services", icon: "https://johnh1003.sg-host.com/wp-content/uploads/2024/12/plumbing-icon.webp" }
      ]
    },
    {
      title: "Specialty Plumbing Services",
      services: [
        { title: "Advanced Leak Detection", description: "State-of-the-art detection", icon: "https://johnh1003.sg-host.com/wp-content/uploads/2024/12/leaking.webp" },
        { title: "Sewer Line Services", description: "Complete sewer solutions", icon: "https://johnh1003.sg-host.com/wp-content/uploads/2025/01/sewer-line-icon.webp" },
        { title: "Water Filtration", description: "Clean water systems", icon: "https://johnh1003.sg-host.com/wp-content/uploads/2025/01/water-filter-icon.webp" },
        { title: "Green Plumbing Solutions", description: "Eco-friendly options", icon: "https://johnh1003.sg-host.com/wp-content/uploads/2025/01/green-plumbing-icon.webp" },
        { title: "Hydro Jetting", description: "High-pressure cleaning", icon: "https://johnh1003.sg-host.com/wp-content/uploads/2025/01/hydro-jetting-icon.webp" },
        { title: "View All Specialty Plumbing", description: "See all specialty services", icon: "https://johnh1003.sg-host.com/wp-content/uploads/2024/12/plumbing-icon.webp" }
      ]
    },
    {
      title: "Maintenance Services",
      services: [
        { title: "Preventative Maintenance", description: "Stay ahead of problems", icon: "https://johnh1003.sg-host.com/wp-content/uploads/2024/12/pipe-prevention.webp" },
        { title: "Drain and Sewer Maintenance", description: "Keep drains clear", icon: "https://johnh1003.sg-host.com/wp-content/uploads/2024/12/drain-sewer-icon.webp" },
        { title: "Leak Prevention", description: "Prevent costly damage", icon: "https://johnh1003.sg-host.com/wp-content/uploads/2024/12/leaking.webp" },
        { title: "Appliance Maintenance", description: "Keep appliances running", icon: "https://johnh1003.sg-host.com/wp-content/uploads/2024/12/appliance-maintenance-icon.webp" },
        { title: "Gas System Maintenance", description: "Safe gas system care", icon: "https://johnh1003.sg-host.com/wp-content/uploads/2024/12/gas-pipeline-icon.webp" },
        { title: "View All Maintenance Services", description: "See all maintenance options", icon: "https://johnh1003.sg-host.com/wp-content/uploads/2024/12/plumbing-icon.webp" }
      ]
    }
  ]}
/>

<MaintenancePlanSection
  title="Protect Your Plumbing for the Long Term"
  description="Regular maintenance is key to preventing costly repairs and ensuring the efficiency of your plumbing system. At {fullName}, our Plumbing <a href='/maintenance-plan'><strong>Maintenance Plans</strong></a> are designed to keep your home or business running smoothly year-round."
  includedItems={[
    { title: "Annual Inspections", description: "Comprehensive checkups to detect leaks, corrosion, or potential issues" },
    { title: "Drain Cleaning", description: "Keep your drains free of clogs and buildup to maintain smooth flow" },
    { title: "Water Heater Maintenance", description: "Optimize performance and extend the lifespan of your <a href='/residential/water-heaters/standard'><strong>water heater</strong></a>" },
    { title: "Priority Scheduling", description: "Get fast-track service when you need it most" },
    { title: "Discounted Repairs", description: "Enjoy exclusive discounts on parts and labor for any required repairs" }
  ]}
  benefits={[
    "Prevent unexpected breakdowns",
    "Improve efficiency and lower utility bills",
    "Extend the lifespan of your plumbing system",
    "Gain peace of mind knowing your plumbing is in expert hands"
  ]}
  buttonText="View Maintenance Plans"
  buttonHref="/maintenance-plan"
/>


<FinancingSection
  badge="Financing"
  title="Plumbing Solutions Made Affordable"
  description="At {fullName}, we believe that every home and business deserves access to reliable plumbing services, no matter the budget. That's why we offer flexible <a href='/financing'><strong>financing options</strong></a> to make your plumbing projects manageable and stress-free."
  paymentPlans={[
    "Spread the cost of major repairs or installations over time",
    "Low-interest and no-interest plans available for qualified applicants",
    "Choose a payment schedule that fits your budget"
  ]}
  financingOptions={[
    "Water heater replacements",
    "Pipe repairs and replacements",
    "Bathroom and kitchen upgrades",
    "Sewer line repairs and more"
  ]}
  steps={[
    { title: "Contact Us", description: "<a href='/contact'><strong>Contact us</strong></a> to discuss your plumbing needs" },
    { title: "Choose a Plan", description: "Choose a plan and payment option that works for you" },
    { title: "Enjoy Quality Service", description: "Enjoy high-quality plumbing service with affordable terms" }
  ]}
/>

<PortfolioSection
  badge="Portfolio"
  title="Our Featured Works"
  images={[
    "https://ucarecdn.com/904d12f4-36c2-4c11-99c9-c22ebbc905fe/-/preview/1000x666/",
    "https://ucarecdn.com/b2b720dc-bf04-4366-a627-124001e3746e/-/preview/1000x666/",
    "https://ucarecdn.com/075a53c5-b442-4211-bd8d-baf6977b3f87/-/preview/1000x666/",
    "https://ucarecdn.com/f0f1f6f3-d381-4c74-8d86-0a5cb24648f0/-/preview/1000x666/",
    "https://ucarecdn.com/a6fafe41-c916-4595-adf6-9657af91fbbc/ReliableGarbageDisposalRepairandReplacement.webp",
    "https://ucarecdn.com/f2844f4a-fb1f-4bae-af04-38db79fe8902/-/preview/1000x562/",
    "https://ucarecdn.com/14cf294e-225e-4857-a4cb-6b31611cffec/-/preview/1000x750/",
    "https://ucarecdn.com/c43ed716-6e4c-4c93-9461-5fcd2aa79166/-/preview/1000x753/"
  ]}
/>

<TestimonialsSection
  badge="Testimonials"
  title="What Our Clients Say"
  description="At {fullName}, we believe that every home and business deserves access to reliable plumbing services, no matter the budget. That's why we offer flexible <a href='/financing'><strong>financing options</strong></a> to make your plumbing projects manageable and stress-free."
  testimonials={[
    {
      name: "Mark Porter",
      initials: "MP",
      date: "1 year ago",
      rating: 5,
      content: "The team was professional and efficient. They fixed our plumbing issue quickly and at a fair price. Highly recommend their services!"
    },
    {
      name: "Eric Borges",
      initials: "EB",
      date: "1 year ago",
      rating: 5,
      content: "Outstanding service from start to finish. The plumber was knowledgeable and took the time to explain everything. Will definitely use again!"
    },
    {
      name: "Nicholas Abraczinskas",
      initials: "NA",
      date: "1 year ago",
      rating: 5,
      content: `{fullName} has been such a great partner for our business. Their <a href="/commercial"><strong>commercial plumbing</strong></a> expertise is unmatched in the {city} area.`
    },
    {
      name: "David Einstein",
      initials: "DE",
      date: "1 year ago",
      rating: 5,
      content: "I couldn't be more grateful for the incredible experience. From the moment I called, the support provided was exceptional."
    },
    {
      name: "Rachel Kim",
      initials: "RK",
      date: "8 months ago",
      rating: 5,
      content: "Had a <a href='/residential/specialty/emergency-plumbing/burst-pipe-response'><strong>burst pipe</strong></a> at 2 AM and they were at my door within 45 minutes. Saved us from serious water damage. True emergency pros!"
    },
    {
      name: "Tom Alvarez",
      initials: "TA",
      date: "6 months ago",
      rating: 5,
      content: "They repiped our entire 1960s home in just three days. Clean work, fair price, and the crew was respectful of our space the whole time."
    },
    {
      name: "Linda Nguyen",
      initials: "LN",
      date: "5 months ago",
      rating: 5,
      content: "Installed a <a href='/residential/water-heaters/tankless'><strong>tankless water heater</strong></a> for us. The technician walked us through all the options and helped us pick the right unit for our family."
    },
    {
      name: "James O'Brien",
      initials: "JO",
      date: "3 months ago",
      rating: 5,
      content: `We've used {fullName} for our restaurant for years. Their <a href="/commercial/specialty-piping/grease-trap"><strong>grease trap</strong></a> maintenance keeps us code-compliant without any hassle.`
    },
    {
      name: "Patricia Gomez",
      initials: "PG",
      date: "2 months ago",
      rating: 5,
      content: "<a href='/residential/kitchen/remodel'><strong>Kitchen remodel</strong></a> plumbing was done perfectly. They coordinated with our contractor seamlessly and everything passed inspection first try."
    },
    {
      name: "Steve Hartley",
      initials: "SH",
      date: "1 month ago",
      rating: 5,
      content: "Honest and upfront about pricing. No surprise charges. The slab <a href='/residential/leak/detection'><strong>leak detection</strong></a> saved us thousands compared to what another company quoted."
    },
    {
      name: "Angela Wu",
      initials: "AW",
      date: "3 weeks ago",
      rating: 5,
      content: "Their <a href='/maintenance-plan'><strong>maintenance plan</strong></a> is worth every penny. Regular inspections have caught small issues before they became expensive problems."
    },
    {
      name: "Carlos Rivera",
      initials: "CR",
      date: "1 week ago",
      rating: 5,
      content: "Whole-house <a href='/residential/specialty/water-filtration/whole-house-filtration'><strong>water filtration</strong></a> install was seamless. The water quality difference is night and day. Great team, great results."
    }
  ]}
/>

<CTAStrip
  buttonText="SCHEDULE NOW"
  buttonHref="/contact"
  phoneLabel="Call or Text for Great Service"
  phone="{phone}"
  features={[
    { icon: "siren", text: "24/7 Emergency Service" },
    { icon: "award", text: "Experienced & Certified Technicians" }
  ]}
/>

<ServiceAreaSection
  title="Expert Plumbing Services in {city} and Surrounding Areas"
  description="Looking for reliable plumbing services in {city}? We provide expert residential and commercial solutions across the city. Whether you need <a href='/residential/leak/detection'><strong>leak detection</strong></a>, <a href='/residential/drain/cleaning'><strong>drain cleaning</strong></a>, <a href='/residential/water-heaters/standard'><strong>water heater</strong></a> repairs, or advanced options like <a href='/residential/specialty/sewer-line-services/trenchless-sewer-repair'><strong>trenchless sewer repair</strong></a> and whole-house <a href='/residential/specialty/water-filtration/whole-house-filtration'><strong>water filtration</strong></a>, our team is here to help. We also offer routine maintenance and 24/7 emergency services to keep your plumbing in top shape. Call us today to schedule your service!"
  areas={[
    "Santa Monica", "Pasadena", "Glendale", "Downtown {city}", "Hollywood",
    "Beverly Hills", "Venice", "Westwood", "Culver City", "San Fernando Valley",
    "Studio City", "North Hollywood", "Sherman Oaks", "Encino", "Burbank",
    "Torrance", "Long Beach", "Inglewood", "El Segundo", "Brentwood",
    "Silver Lake", "Echo Park", "Hancock Park", "Marina del Rey", "Manhattan Beach"
  ]}
  mapAddress="{city}, {state}"
/>


ASTRO 

---
import { getLocationText } from "@/config/site"

interface Step {
  title: string;
  description: string;
}

interface Props {
  badge?: string;
  title: string;
  description: string;
  paymentPlans: string[];
  financingOptions: string[];
  steps: Step[];
}

const { badge: raw_badge = "Financing", title: raw_title, description: raw_description, paymentPlans, financingOptions, steps } = Astro.props;

// Process text placeholders
const title = raw_title ? getLocationText(raw_title) : raw_title;
const description = raw_description ? getLocationText(raw_description) : raw_description;
const badge = raw_badge ? getLocationText(raw_badge) : raw_badge;
---

<section class="py-16 md:py-24">
  <div class="container mx-auto px-4">
    <div class="text-center mb-12" data-animate="fade-up">
      <span class="inline-block text-sm font-semibold text-accent uppercase tracking-wide border-b-2 border-accent pb-1">{badge}</span>
      <h2 class="text-3xl md:text-4xl font-bold mt-4 mb-4">{title}</h2>
      <p class="text-muted-foreground max-w-3xl mx-auto" set:html={description} />
    </div>
    
    <div class="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12" data-animate-stagger>
      <div class="bg-card border rounded-lg p-8">
        <h3 class="text-xl font-bold mb-6">Flexible Payment Plans</h3>
        <ul class="space-y-3">
          {paymentPlans.map((plan) => (
            <li class="flex items-start gap-3">
              <span class="w-2 h-2 rounded-full bg-accent mt-2 shrink-0"></span>
              <span>{plan}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div class="bg-card border rounded-lg p-8">
        <h3 class="text-xl font-bold mb-6">What Can You Finance?</h3>
        <ul class="space-y-3">
          {financingOptions.map((option) => (
            <li class="flex items-start gap-3">
              <span class="w-2 h-2 rounded-full bg-accent mt-2 shrink-0"></span>
              <span>{option}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
    
    <div class="max-w-5xl mx-auto">
      <h3 class="text-2xl font-bold mb-10 text-center">How to Apply</h3>
      <div class="relative grid md:grid-cols-3 gap-8" data-animate-stagger>
        {/* Connecting line between steps (desktop only) */}
        <div class="hidden md:block absolute top-10 left-[20%] right-[20%] h-0.5 bg-gradient-to-r from-accent/20 via-accent to-accent/20"></div>
        {steps.map((step, index) => (
          <div class="relative text-center bg-card border rounded-xl p-8 hover:shadow-lg hover:border-accent/20 transition-all duration-300">
            <div class="relative z-10 w-14 h-14 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-xl font-bold mx-auto mb-5 shadow-md ring-4 ring-background">{index + 1}</div>
            <h4 class="font-bold text-lg mb-2">{step.title}</h4>
            <p class="text-sm text-muted-foreground leading-relaxed" set:html={step.description} />
          </div>
        ))}
      </div>
    </div>
  </div>
</section>
