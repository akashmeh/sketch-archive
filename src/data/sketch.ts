import p10_4 from "@/assets/photos/p10_4.jpg";
import p10_5 from "@/assets/photos/p10_5.jpg";
import p10_6 from "@/assets/photos/p10_6.jpg";
import p11_2 from "@/assets/photos/p11_2.jpg";
import p11_3 from "@/assets/photos/p11_3.jpg";
import p11_4 from "@/assets/photos/p11_4.jpg";
import p11_5 from "@/assets/photos/p11_5.jpg";
import p11_6 from "@/assets/photos/p11_6.jpg";
import p11_7 from "@/assets/photos/p11_7.jpg";
import p11_8 from "@/assets/photos/p11_8.jpg";
import p13_5 from "@/assets/photos/p13_5.jpg";
import p13_6 from "@/assets/photos/p13_6.jpg";
import p13_7 from "@/assets/photos/p13_7.jpg";
import p14_2 from "@/assets/photos/p14_2.jpg";
import p14_6 from "@/assets/photos/p14_6.jpg";
import p14_7 from "@/assets/photos/p14_7.jpg";
import p15_5 from "@/assets/photos/p15_5.jpg";
import p16_2 from "@/assets/photos/p16_2.jpg";
import p16_3 from "@/assets/photos/p16_3.jpg";
import p17_2 from "@/assets/photos/p17_2.jpg";
import p17_3 from "@/assets/photos/p17_3.jpg";
import p17_4 from "@/assets/photos/p17_4.jpg";
import p22_2 from "@/assets/photos/p22_2.jpg";
import p22_3 from "@/assets/photos/p22_3.jpg";
import p22_4 from "@/assets/photos/p22_4.jpg";
import p23_2 from "@/assets/photos/p23_2.jpg";
import p23_3 from "@/assets/photos/p23_3.jpg";
import p23_4 from "@/assets/photos/p23_4.jpg";
import p25_3 from "@/assets/photos/p25_3.jpg";
import p25_9 from "@/assets/photos/p25_9.jpg";
import p26_2 from "@/assets/photos/p26_2.jpg";
import p26_4 from "@/assets/photos/p26_4.jpg";

/** Registration link — swap this for the club's real registration URL. */
export const REGISTER_URL = "#register";

export const FOUNDED = new Date("2015-01-01T00:00:00Z");

export type SketchEvent = {
  id: string;
  index: string;
  title: string;
  /** Year bucket used by the archive filters. */
  year: string;
  /** Category used by the archive filters. */
  category: "Workshop" | "Flagship" | "Webinar" | "Collab" | "Hackathon" | "Community";
  date?: string;
  time?: string;
  venue?: string;
  description: string;
  outcome?: string;
  photos: { src: string; alt: string }[];
};

export const events: SketchEvent[] = [
  {
    id: "inauguration",
    year: "2025",
    category: "Community",
    index: "REEL 01",
    title: "Inauguration Day",
    description:
      "We organized a stall on our college's inauguration day where freshers interacted with our club members, explored what we do, and got a glimpse of our community through flyers and conversations. We also gave away polaroids to make their first interaction memorable.",
    photos: [
      { src: p22_2, alt: "SKETCH inauguration day stall poster" },
      { src: p22_3, alt: "Students holding polaroid photos at the SKETCH stall" },
      { src: p22_4, alt: "Two students at the SKETCH inauguration stall" },
    ],
  },
  {
    id: "hormones",
    year: "2025",
    category: "Webinar",
    index: "REEL 02",
    title: "The Rollercoaster of Hormones in Your 20s",
    date: "12th July 2025",
    time: "07:00 PM",
    venue: "Online",
    description:
      "An interactive webinar focused on understanding the emotional and mental changes experienced during one's 20s. The session explored how hormones influence mood, behavior, and overall well-being.",
    outcome:
      "Participants gained clarity on the science behind mood swings and emotional fluctuations, along with practical insights to manage their mental well-being more effectively in their daily lives.",
    photos: [
      { src: p13_5, alt: "Speaker presenting during the online webinar" },
      { src: p13_6, alt: "Webinar participants in a grid view" },
      { src: p13_7, alt: "The Rollercoaster of Hormones in Your 20s event graphic" },
    ],
  },
  {
    id: "pixel",
    year: "2025",
    category: "Flagship",
    index: "REEL 03",
    title: "Pixel N' Play",
    date: "30th August 2025",
    time: "09:00 AM – 12:00 PM",
    venue: "BMS 6th Floor Lab",
    description:
      "Our first flagship event marked the official launch of the club and set the tone for our creative journey. The event focused on redesigning logos based on given themes, encouraging participants to think creatively, experiment with visual elements, and apply design thinking in a fun and engaging way.",
    outcome:
      "Participants explored their creativity, improved their design skills, and gained hands-on experience in logo redesign, making the event a strong and impactful start for the club.",
    photos: [
      { src: p14_2, alt: "Event screen displaying Pixel N' Play" },
      { src: p14_6, alt: "Two participants in front of the Pixel N' Play screen" },
      { src: p14_7, alt: "Group of students at Pixel N' Play" },
    ],
  },
  {
    id: "first-commit",
    year: "2025",
    category: "Workshop",
    index: "REEL 04",
    title: "First Commit — A Workshop on GitHub Basics",
    date: "24th September 2025",
    time: "12:20 PM – 1:10 PM",
    venue: "BMS 604",
    description:
      "A workshop conducted by SKETCH during Club Hour, introducing students to version control and collaboration using Git and GitHub.",
    outcome:
      "Participants gained a clear understanding of GitHub fundamentals, learned essential commands, and developed confidence in managing projects and collaborating using version control.",
    photos: [{ src: p15_5, alt: "Students attending the GitHub basics workshop" }],
  },
  {
    id: "among-us",
    year: "2026",
    category: "Flagship",
    index: "REEL 05",
    title: "Among Us — Control Room",
    date: "27th February 2026",
    time: "09:00 AM – 12:00 PM",
    venue: "BMS 6th Floor Lab",
    description:
      "A student-led experiential event focused on innovation, critical thinking, and creative problem-solving in an engaging environment.",
    outcome:
      "The event encouraged participants to think critically, collaborate effectively, and explore innovative solutions. It strengthened problem-solving skills and left participants feeling inspired and more confident in their creative thinking.",
    photos: [
      { src: p16_2, alt: "Students and faculty at Among Us — Control Room" },
      { src: p16_3, alt: "Participants working on computers in the lab" },
    ],
  },
  {
    id: "ai-products",
    year: "2026",
    category: "Workshop",
    index: "REEL 06",
    title: "Building Intelligent Products with AI",
    date: "8th April 2026",
    time: "12:40 PM – 1:20 PM",
    venue: "BMS 604",
    description:
      "This session kicked off a two-week product-building series, introducing students to AI-powered solutions. It covered key concepts like problem identification, user needs, and workflow design in a beginner-friendly yet practical way.",
    outcome:
      "Participants gained a basic understanding of building AI-driven products, developed a product mindset, and were encouraged to engage further in the upcoming sessions.",
    photos: [
      { src: p17_2, alt: "Speaker presenting to students" },
      { src: p17_3, alt: "Speaker addressing the session" },
      { src: p17_4, alt: "Three students at the AI product session" },
    ],
  },
  {
    id: "pinnacle",
    year: "2026",
    category: "Collab",
    index: "REEL 07",
    title: "Pinnacle Hacks — Design Partner",
    description:
      "We partnered with Pinnacle Hacks, organized by The Incite Crew, as the official design partner. Our role involved creating visual assets, branding elements, and ensuring a cohesive design language across the event. Alongside this, our SKETCH team actively participated in the hackathon, gaining hands-on experience and contributing creatively.",
    photos: [
      { src: p23_2, alt: "Pinnacle Hacks event banner" },
      { src: p23_3, alt: "Participants working on laptops at Pinnacle Hacks" },
      { src: p23_4, alt: "Pinnacle Hacks stage and audience" },
    ],
  },
  {
    id: "nxtgen",
    year: "2026",
    category: "Hackathon",
    index: "REEL 08",
    title: "NXTGEN Hackathon — Texus '26",
    venue: "EA Mall, IVB Center, Chennai",
    description:
      "As part of Texus '26, we successfully organized the NXTGEN Hackathon. The event witnessed an overwhelming response, with 4000+ registrations from students across various institutions, out of which 250 participants were shortlisted to take part in the on-ground hackathon. From conceptualization to execution, our team managed every aspect of the event — planning, coordination, branding, and overall experience design. To enhance the experience, we organized interactive sessions, including a musical night.",
    outcome:
      "NXTGEN stood as a testament to teamwork, creativity, and large-scale event execution. It brought together innovation, collaboration, and energy, making it a fulfilling experience for both participants and organizers.",
    photos: [
      { src: p25_3, alt: "NXTGEN Hackathon organizing team group photo" },
      { src: p25_9, alt: "NXTGEN countdown displayed on screen" },
      { src: p26_2, alt: "Team and faculty in front of the NXTGEN banner" },
      { src: p26_4, alt: "Participants at the NXTGEN Hackathon" },
    ],
  },
];

export type Domain = {
  id: string;
  code: string;
  name: string;
  short: string;
  description: string;
  leads: { name: string; role: string }[];
  members: string[];
};

export const domains: Domain[] = [
  {
    id: "design",
    code: "D-01",
    name: "Design",
    short: "Visual voice",
    description:
      "The Design domain shapes the visual voice of the club. From crafting compelling graphics and posters to building intuitive UI/UX experiences and cohesive branding systems, this team ensures every idea is presented with clarity and aesthetic impact.",
    leads: [],
    members: [
      "Hanushree",
      "Aakash",
      "Aishwarya",
      "Nishka",
      "Sanjana",
      "Raghav",
      "Varunika",
      "Richard",
      "Sunjula",
    ],
  },
  {
    id: "sponsorship",
    code: "D-02",
    name: "Sponsorship & Finance",
    short: "Strategic backbone",
    description:
      "Functioning as the strategic backbone, this domain manages partnerships and resources. It focuses on sponsorship acquisition, fundraising, and financial planning, ensuring sustainability and enabling the execution of ambitious initiatives.",
    leads: [{ name: "Karan", role: "Treasurer" }],
    members: [],
  },
  {
    id: "content",
    code: "D-03",
    name: "Content & Documentation",
    short: "The record",
    description:
      "This domain captures and communicates the essence of SKETCH. Through content creation, copywriting, documentation, and reporting, it ensures that every project, event, and idea is effectively articulated and preserved.",
    leads: [{ name: "Subhashree NS", role: "Content Lead" }],
    members: ["Vedanth", "Pranaay", "Keshav", "Ajith", "Komal"],
  },
  {
    id: "media",
    code: "D-04",
    name: "Media & Marketing",
    short: "Signal & reach",
    description:
      "Driving visibility and engagement, this domain handles the club's digital presence. From social media management and campaign execution to branding and audience outreach, it amplifies the club's voice and reach.",
    leads: [
      { name: "Harita R", role: "Marketing Lead" },
      { name: "Gautham", role: "Media Lead" },
      { name: "Vimmy Roy", role: "Media Lead" },
    ],
    members: [
      "Sreyasree",
      "Taranraj",
      "Bharanidar",
      "Vedprajeith",
      "Advait",
      "Karl",
      "Nishika",
      "Deekshita",
      "NC Gautham",
      "Chandra Kiran",
      "Amirthavarshini",
      "Yeseswini",
      "Sreenidhi",
    ],
  },
  {
    id: "rnd",
    code: "D-05",
    name: "Research & Development",
    short: "Innovation engine",
    description:
      "R&D is the innovation engine of SKETCH, dedicated to exploration and experimentation. Members engage in ideation, prototyping, testing, and development — transforming abstract concepts into tangible solutions.",
    leads: [],
    members: ["Makeshkumar", "Mrudull", "Magesh", "Kavinayaa"],
  },
  {
    id: "opr",
    code: "D-06",
    name: "O&PR",
    short: "Organizing & Public Relations",
    description:
      "Ensuring seamless execution, this domain oversees planning, logistics, coordination, and external relations. It plays a crucial role in organizing events and maintaining the club's professional interactions and collaborations.",
    leads: [
      { name: "Aniruth VS", role: "O&PR" },
      { name: "Jacob Joshy Mathew", role: "O&PR" },
    ],
    members: ["Thaarunyaa", "Nachaal", "Manvi", "Shruti", "Pranjal", "Karan", "Devesh"],
  },
];

export const coreTeam = [
  { name: "Shanjo Benadict", role: "President", photo: p10_4 },
  { name: "Jhalak D", role: "Vice President", photo: p10_6 },
  { name: "Karan", role: "Treasurer", photo: p10_5 },
];

export const leads = [
  { name: "Aniruth VS", role: "O&PR", photo: p11_2 },
  { name: "Jacob Joshy Mathew", role: "O&PR", photo: p11_3 },
  { name: "Alan Gilchrist", role: "Lead", photo: p11_4 },
  { name: "Harita R", role: "Marketing", photo: p11_5 },
  { name: "Subhashree NS", role: "Content", photo: p11_6 },
  { name: "Gautham", role: "Media", photo: p11_7 },
  { name: "Vimmy Roy", role: "Media", photo: p11_8 },
];

export const faculty = [
  {
    name: "Dr. M. S. Bennet Praba",
    detail:
      "Over 18 years of teaching experience, with expertise in programming, research, and emerging technologies. Her contributions through publications, patents, and academic excellence reflect her commitment to innovation and student development.",
  },
  {
    name: "Ms. M. Devika",
    detail:
      "A dedicated educator with a strong foundation in Computer Science and active research contributions. Her commitment to teaching, continuous learning, and student mentorship makes her an invaluable guide to aspiring learners.",
  },
];

export const timeline = [
  {
    year: "2015",
    label: "BOOT",
    title: "SKETCH is founded",
    body: "A multidisciplinary technical community is founded to empower students to transform ideas into impactful solutions through design thinking, innovation, and practical implementation.",
  },
  {
    year: "2015+",
    label: "MOTTO",
    title: "Design. Develop. Deliver.",
    body: "Guided by its core motto, the club fosters a culture of creativity, collaboration, and execution — enabling members to build technology-driven solutions that address real-world challenges.",
  },
  {
    year: "GROWTH",
    label: "SCALE",
    title: "A platform for student innovation",
    body: "Since its inception, SKETCH has evolved into a dynamic platform for student innovation, bringing together individuals from diverse domains to ideate, experiment, and create.",
  },
  {
    year: "BRIDGE",
    label: "PRACTICE",
    title: "Academics meets industry",
    body: "Its journey reflects a strong commitment to bridging the gap between academic learning and industry expectations, with members engaging in hands-on projects, workshops, and collaborative initiatives.",
  },
  {
    year: "MISSION",
    label: "PURPOSE",
    title: "Nurturing creators and innovators",
    body: "With a mission to nurture creators and innovators with industry-relevant skills, SKETCH empowers students through hands-on learning and critical thinking, building a student-driven ecosystem where ideas create impact.",
  },
  {
    year: "2025-26",
    label: "NOW",
    title: "Six domains, one community",
    body: "Design, Sponsorship & Finance, Content & Documentation, Media & Marketing, Research & Development and O&PR run the club's projects, workshops and flagship events.",
  },
];

export const achievements = [
  "Jacob Joshy Mathew — served as a judge for the MUN conducted at MVM School",
  "Hanushree & Venkatesh — won the hackathon under the cyber security track, securing a cash prize of ₹50,000",
  "Shanjo Bennadict & NC Gautham — first place at Project Expo 2026",
  "Subhashree N S — 3rd place at the hackathon conducted by Sairam Engineering College",
  "Aniruth V S & Karan Shyam Sundar — won a track prize at the Vyuhatech 2.0 hackathon",
  "Jhalak D & Shruti Singh — 2nd place in the Prototype Website Development event at Innotech '25",
];
