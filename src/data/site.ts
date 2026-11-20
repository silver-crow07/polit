/**
 * SINGLE SOURCE OF TRUTH FOR ALL EDITABLE CONTENT
 * ------------------------------------------------
 * Replace placeholder values below with verified information and official
 * photography. Nothing in this file should be treated as a verified claim
 * unless it has been confirmed and edited here.
 */

export type NavItem = { label: string; href: string };
export type IconName = "users" | "landmark" | "handshake" | "compass" | "heart" | "building" | "megaphone";

export const images = {
  /** Official portraits used in the Home/Hero and About sections. */
  portrait: "/images/leader/sumant-kishore-singh-hero.webp",
  aboutPortrait: "/images/leader/sumant-kishore-singh-about.webp",
  publicMeeting: "/images/gallery/public-gathering.webp",
  communityMeeting: "/images/gallery/community-meeting.webp",
  communityEvent: "/images/gallery/village-gathering.webp",
  communityStall: "/images/gallery/community-stall.webp",
  publicInteraction: "/images/gallery/rural-health-education.webp",
  publicDiscussion: "/images/gallery/public-discussion.webp",
  socialActivity: "/images/gallery/community-service.webp",
  treePlanting: "/images/gallery/tree-planting.webp",
  ruralRoad: "/images/community/rural-road.webp",
  medicalCamp: "/images/community/medical-camp.webp",
  panchayatOffice: "/images/community/gram-panchayat-office.webp",
  ruralWomen: "/images/community/rural-women.webp",
  healthOutreach: "/images/news/rural-health-outreach.webp",
  newsAudience: "/images/news/public-event-audience.webp",
  newsOffice: "/images/news/local-office.webp",
  newsKitchen: "/images/news/community-kitchen.webp",
} as const;

export const site = {
  name: "Sumant Kishore Singh",
  alternateName: "Sumant Kishor Singh",
  initials: "SKS",
  role: "Former Block Pramukh, Hasayan",
  profession: "Political Figure & Public Representative",
  tagline: "Dedicated to Public Service, Leadership & Community Development",
  location: "Hasayan, Hathras, Uttar Pradesh",
  intro:
    "Sumant Kishore Singh is a political figure and public representative from Hasayan, Hathras, Uttar Pradesh, and the former Block Pramukh of Hasayan.",
  seoDescription:
    "Official portfolio of Sumant Kishore Singh, former Block Pramukh of Hasayan, Hathras, Uttar Pradesh. Explore his public leadership journey, community connect and service initiatives.",
  footerText: "© 2026 Sumant Kishore Singh. All Rights Reserved.",
  imageCreditsLabel: "Image credits",
  imageCreditsHref: "/IMAGE_CREDITS.txt",
} as const;

export const navigation: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Leadership Journey", href: "#journey" },
  { label: "Public Service", href: "#public-service" },
  { label: "Gallery", href: "#gallery" },
  { label: "News & Updates", href: "#news" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  eyebrow: "Public Representative · Hasayan, Hathras",
  nameLines: ["SUMANT", "KISHORE", "SINGH"],
  description:
    "A public life shaped by service, dialogue and a lasting connection with the people of Hasayan and the wider Hathras district.",
  facts: [site.role, "Hathras, Uttar Pradesh"],
  primaryCta: { label: "Explore My Journey", href: "#journey" },
  secondaryCta: { label: "Get in Touch", href: "#contact" },
  portraitAlt: "Portrait of Sumant Kishore Singh, former Block Pramukh of Hasayan",
  portraitCaption: "Official portrait",
} as const;

export const about = {
  eyebrow: "About",
  heading: "A Journey of Leadership & Public Service",
  paragraphs: [
    "Sumant Kishore Singh, also known as Sumant Kishor Singh, is a political figure and public representative from Hasayan in Hathras district, Uttar Pradesh. He served as the Block Pramukh of Hasayan.",
    "This space is reserved for an official biography that reflects his public life, leadership approach and engagement with the community. Verified details about his early years, education and public responsibilities will be added here once they are confirmed.",
    "His connection with the people of Hasayan and the surrounding region remains the focus of this portfolio. Photographs, milestones and updates will be published here as official material becomes available.",
  ],
  highlights: [
    {
      icon: "landmark" as IconName,
      title: "Former Block Pramukh",
      detail: "Hasayan, Hathras district",
    },
    {
      icon: "users" as IconName,
      title: "Public Representative",
      detail: "Community-focused public life",
    },
    {
      icon: "compass" as IconName,
      title: "Local Connect",
      detail: "Rooted in Hasayan, Uttar Pradesh",
    },
  ],
  note: "Biography text is an editable placeholder. Add verified personal and public details before publishing.",
} as const;

export const journey: {
  eyebrow: string;
  heading: string;
  description: string;
  items: {
    id: string;
    period: string;
    title: string;
    description: string;
    icon: IconName;
    verified: boolean;
  }[];
  note: string;
} = {
  eyebrow: "Leadership Journey",
  heading: "A Path of Public Responsibility",
  description:
    "A timeline of public life and community engagement. Entries awaiting confirmation are clearly marked as placeholders.",
  items: [
    {
      id: "public-life",
      period: "To be confirmed",
      title: "Entry into Public Life",
      description:
        "Add verified details about the beginning of public life and early engagement with the people of Hasayan.",
      icon: "users",
      verified: false,
    },
    {
      id: "block-pramukh",
      period: "Tenure to be confirmed",
      title: "Former Block Pramukh, Hasayan",
      description:
        "Served as Block Pramukh of Hasayan. Confirm tenure dates and add a summary of responsibilities when official records are available.",
      icon: "landmark",
      verified: true,
    },
    {
      id: "community-engagement",
      period: "To be confirmed",
      title: "Community Engagement",
      description:
        "Placeholder for verified public meetings, dialogue with residents and engagement with local community organisations.",
      icon: "handshake",
      verified: false,
    },
    {
      id: "continued-service",
      period: "Ongoing",
      title: "Continued Public Connect",
      description:
        "Placeholder for verified ongoing public activities, announcements and engagement with the people of Hathras district.",
      icon: "compass",
      verified: false,
    },
  ],
  note: "Only the role of former Block Pramukh, Hasayan is treated as verified. All other timeline entries are editable placeholders.",
} as const;

export const service: {
  eyebrow: string;
  heading: string;
  description: string;
  items: {
    id: string;
    title: string;
    description: string;
    icon: IconName;
    image: string;
    imageAlt: string;
  }[];
  note: string;
} = {
  eyebrow: "Public Service",
  heading: "Commitment to Public Service",
  description:
    "The themes below describe areas of public focus. Replace the placeholder descriptions with verified initiatives and outcomes.",
  items: [
    {
      id: "community-development",
      title: "Community Development",
      description:
        "Placeholder text for verified community development work in and around Hasayan. Add confirmed details and photographs here.",
      icon: "building",
      image: images.ruralRoad,
      imageAlt: "Illustrative photograph of a rural road in India; not a photograph of Sumant Kishore Singh or his work",
    },
    {
      id: "public-welfare",
      title: "Public Welfare",
      description:
        "Placeholder text for verified public welfare activities. Describe the work and its reach only once details have been confirmed.",
      icon: "heart",
      image: images.medicalCamp,
      imageAlt: "Illustrative photograph of a medical camp in India; not a photograph of Sumant Kishore Singh or his work",
    },
    {
      id: "local-initiatives",
      title: "Local Development Initiatives",
      description:
        "Placeholder text for verified local development initiatives in Hasayan, Hathras. Add official information when available.",
      icon: "compass",
      image: images.panchayatOffice,
      imageAlt: "Illustrative photograph of a gram panchayat office in India; not a photograph of Sumant Kishore Singh or his work",
    },
    {
      id: "people-centric-leadership",
      title: "People-Centric Leadership",
      description:
        "Placeholder text about public interaction and a people-first approach to representation. Keep claims evidence-based.",
      icon: "users",
      image: images.ruralWomen,
      imageAlt: "Illustrative photograph of rural women in India; not a photograph of Sumant Kishore Singh or his work",
    },
  ],
  note: "No specific project, scheme or result is claimed on this website. All service descriptions are editable placeholders.",
} as const;

export const gallery: {
  eyebrow: string;
  heading: string;
  description: string;
  categories: string[];
  items: {
    id: string;
    src: string;
    alt: string;
    title: string;
    category: string;
    shape: "tall" | "medium" | "short";
  }[];
} = {
  eyebrow: "Gallery",
  heading: "Public Life & Community Themes",
  description:
    "Licensed illustrative photographs representing public gatherings and community themes. These are not photographs of Sumant Kishore Singh or his events; official photographs will be added here when supplied.",
  categories: ["All", "Public Meetings", "Community Events", "Public Interactions", "Social Activities"],
  items: [
    {
      id: "g1",
      src: images.publicMeeting,
      alt: "Illustrative photograph of an audience at a public gathering in India; not Sumant Kishore Singh",
      title: "Public Gathering",
      category: "Public Meetings",
      shape: "tall",
    },
    {
      id: "g2",
      src: images.communityMeeting,
      alt: "Illustrative photograph of a community meeting in India; not Sumant Kishore Singh",
      title: "Community Dialogue",
      category: "Public Meetings",
      shape: "medium",
    },
    {
      id: "g3",
      src: images.communityEvent,
      alt: "Illustrative photograph of a village gathering in India; not Sumant Kishore Singh",
      title: "Village Gathering",
      category: "Community Events",
      shape: "short",
    },
    {
      id: "g4",
      src: images.communityStall,
      alt: "Illustrative photograph of volunteers at a community information stall in India; not Sumant Kishore Singh",
      title: "Community Outreach",
      category: "Community Events",
      shape: "short",
    },
    {
      id: "g5",
      src: images.publicInteraction,
      alt: "Illustrative photograph of health education being given in a rural area of India; not Sumant Kishore Singh",
      title: "Public Interaction",
      category: "Public Interactions",
      shape: "medium",
    },
    {
      id: "g6",
      src: images.publicDiscussion,
      alt: "Illustrative photograph of an audience at a public discussion in India; not Sumant Kishore Singh",
      title: "Open Discussion",
      category: "Public Interactions",
      shape: "medium",
    },
    {
      id: "g7",
      src: images.socialActivity,
      alt: "Illustrative photograph of volunteers serving food at a community kitchen in India; not Sumant Kishore Singh",
      title: "Community Service",
      category: "Social Activities",
      shape: "tall",
    },
    {
      id: "g8",
      src: images.treePlanting,
      alt: "Illustrative photograph of women planting a tree in India; not Sumant Kishore Singh",
      title: "Local Initiative",
      category: "Social Activities",
      shape: "short",
    },
  ],
} as const;

export const news: {
  eyebrow: string;
  heading: string;
  description: string;
  items: {
    id: string;
    category: string;
    date: string;
    title: string;
    excerpt: string;
    image: string;
    imageAlt: string;
    featured?: boolean;
  }[];
  note: string;
} = {
  eyebrow: "News & Updates",
  heading: "Latest Updates",
  description:
    "A place for verified updates, public event information, announcements and media coverage.",
  items: [
    {
      id: "n1",
      category: "Latest Update",
      date: "Date to be confirmed",
      title: "Official update from Hasayan",
      excerpt:
        "Add a verified update here. Include the date, context and a link to the official source where relevant.",
      image: images.healthOutreach,
      imageAlt: "Illustrative photograph of rural health outreach in India; not Sumant Kishore Singh",
      featured: true,
    },
    {
      id: "n2",
      category: "Public Event",
      date: "Date to be confirmed",
      title: "Public event announcement",
      excerpt:
        "Placeholder for details of a verified public event, including venue and timing once confirmed.",
      image: images.newsAudience,
      imageAlt: "Illustrative photograph of an audience at a public event in India; not Sumant Kishore Singh",
    },
    {
      id: "n3",
      category: "Announcement",
      date: "Date to be confirmed",
      title: "Announcement placeholder",
      excerpt:
        "Placeholder for an official announcement. Replace with verified information before publication.",
      image: images.newsOffice,
      imageAlt: "Illustrative photograph of a local government office in India; not Sumant Kishore Singh",
    },
    {
      id: "n4",
      category: "Media Coverage",
      date: "Date to be confirmed",
      title: "Media coverage placeholder",
      excerpt:
        "Placeholder for verified media coverage. Add publication details and a source link when available.",
      image: images.newsKitchen,
      imageAlt: "Illustrative photograph of a community kitchen in India; not Sumant Kishore Singh",
    },
  ],
  note: "News cards contain placeholder content only. Images are generic licensed illustrations, not photographs of Sumant Kishore Singh. No event, date or media claim is verified.",
} as const;

export const contact = {
  eyebrow: "Contact",
  heading: "Connect With Us",
  description:
    "For public enquiries, invitations or correspondence, please use the contact details below. Placeholder values should be replaced with verified contact information before publishing.",
  phone: {
    label: "Contact Number",
    value: "+91 00000 00000",
    note: "Placeholder number",
  },
  email: {
    label: "Email Address",
    value: "office@example.com",
    note: "Placeholder email",
  },
  office: {
    label: "Office Address",
    value: "Office address to be added, Hasayan, Hathras",
    note: "Placeholder address",
  },
  location: {
    label: "Location",
    value: "Hasayan, Hathras, Uttar Pradesh, India",
    note: "Verified location",
  },
  /** Replace with the verified WhatsApp number in international format, digits only. */
  whatsappNumber: "910000000000",
  whatsappNote: "Demo number — replace in src/data/site.ts before publishing.",
  /** Optional endpoint. Leave empty to keep the form in demonstration mode. */
  formEndpoint: "",
  formFields: {
    fullName: "Full Name",
    mobile: "Mobile Number",
    email: "Email",
    message: "Message",
  },
} as const;

export const socials: { label: string; href: string; icon: "facebook" | "instagram" | "youtube" | "twitter" }[] = [
  { label: "Facebook", href: "", icon: "facebook" },
  { label: "Instagram", href: "", icon: "instagram" },
  { label: "YouTube", href: "", icon: "youtube" },
  { label: "X", href: "", icon: "twitter" },
];
