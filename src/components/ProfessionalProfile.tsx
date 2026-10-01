import {
  Award,
  BriefcaseBusiness,
  CalendarDays,
  CheckCircle2,
  Code2,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
  Sparkles,
  UserRound,
} from "lucide-react";

const experience = [
  {
    role: "Senior Frontend Engineer",
    company: "OLX Group Europe & Round Circle",
    location: "India & Europe (Remote)",
    period: "Jan 2025 – Feb 2026",
    highlights: [
      "Delivered scalable React marketplace solutions across 5+ European countries with 100% feature parity.",
      "Led AI Customer Support Chat frontend, improving response time by 30%+.",
      "Mentored 6+ engineers and improved delivery efficiency by 20%.",
    ],
  },
  {
    role: "Senior Frontend Developer",
    company: "Solera Holdings",
    location: "London, India & USA (Remote)",
    period: "July 2022 – Dec 2024",
    highlights: [
      "Aligned frontend roadmap with executive leadership and business priorities.",
      "Led end-to-end UI/UX transformation, improving frontend performance by 30%.",
      "Increased user retention by 20%+ and engineering velocity by 20%.",
    ],
  },
  {
    role: "Senior Frontend Developer",
    company: "Dotdash Meredith",
    location: "India & USA (Remote)",
    period: "Sept 2019 – June 2022",
    highlights: [
      "Directed React.js migration for high-traffic media platforms.",
      "Improved page load speed by 30% and SEO performance across 5+ properties.",
      "Built reusable UI component libraries that reduced feature time-to-market by 30%.",
    ],
  },
  {
    role: "Senior Software Developer",
    company: "SimpleTire & Webmatrix",
    location: "India & USA (Remote)",
    period: "Oct 2017 – May 2019",
    highlights: [
      "Executed end-to-end UI/UX transformation with 30% frontend performance improvement.",
      "Built reusable UI components across multiple platforms.",
    ],
  },
  {
    role: "Software Engineer",
    company: "IYUNO Media Group",
    location: "Bangalore, India",
    period: "April 2017 – Aug 2017",
    highlights: [
      "Refined backend service architecture and database schemas.",
      "Improved system uptime to 99.9% and reduced server latency by 15%.",
    ],
  },
  {
    role: "Software Developer",
    company: "Eclectic Solutions Private Limited",
    location: "Kolkata, India",
    period: "May 2016 – April 2017",
    highlights: [
      "Led CMS integrations for 10+ B2B client accounts.",
      "Reduced content update turnaround time by 40%.",
    ],
  },
  {
    role: "Web Developer",
    company: "Remote Programmer Private Limited",
    location: "Kolkata, India",
    period: "Dec 2014 – April 2016",
    highlights: [
      "Developed enterprise-grade asset management tools.",
      "Reclaimed 20+ manual hours per week through workflow digitization.",
    ],
  },
  {
    role: "Junior Web Developer",
    company: "Codends Solutions Private Limited",
    location: "Kolkata, India",
    period: "Feb 2014 – Nov 2014",
    highlights: [
      "Constructed 5+ digital financial modules focused on user-centered design.",
      "Reduced customer support tickets by 15%.",
    ],
  },
];

const skillGroups = [
  {
    title: "Frontend",
    skills: [
      "React.js",
      "JavaScript",
      "TypeScript",
      "Next.js",
      "HTML5",
      "CSS3",
      "Responsive Design",
    ],
  },
  {
    title: "Architecture",
    skills: [
      "System Design",
      "Scalable UI Architecture",
      "Component Design",
      "Micro-frontends",
      "Design Systems",
    ],
  },
  {
    title: "State & Data",
    skills: [
      "Redux",
      "Context API",
      "React Query",
      "REST APIs",
      "GraphQL",
      "Axios",
      "Fetch API",
    ],
  },
  {
    title: "Performance",
    skills: [
      "Code Splitting",
      "Lazy Loading",
      "Web Vitals",
      "Performance Optimization",
      "Debugging",
    ],
  },
  {
    title: "Testing & Quality",
    skills: [
      "Jest",
      "React Testing Library",
      "Accessibility",
      "Clean Code",
      "Code Reviews",
    ],
  },
  {
    title: "Tools & Cloud",
    skills: [
      "Git",
      "Webpack",
      "Vite",
      "AWS S3",
      "CloudFront",
      "CI/CD",
      "Jira",
      "Figma",
      "Agile/Scrum",
    ],
  },
  {
    title: "AI & Automation",
    skills: [
      "AI Chatbots",
      "AI Integration APIs",
      "Prompt Engineering",
      "Workflow Automation",
      "Recommendation Systems",
    ],
  },
];

const certifications = [
  "React Development Certification — Simplilearn | Coursera",
  "Data Structures & Algorithms in JavaScript — Udemy",
  "AI for Product Management — Pendo",
  "Product Management Certification — Great Learning",
  "Project Management Certification — Coursera",
];

export default function ProfessionalProfile() {
  return (
    <div className="mx-auto max-w-7xl space-y-6">
      {/* Profile Header */}
      <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="h-28 bg-linear-to-r from-slate-900 via-indigo-900 to-indigo-600" />

        <div className="px-5 pb-6 sm:px-8">
          <div className="-mt-12 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end">
              <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-2xl border-4 border-white bg-indigo-100 text-3xl font-bold text-indigo-700 shadow-md">
                <img
  src="https://media.licdn.com/dms/image/v2/D5635AQHpRSvgwKUymw/profile-framedphoto-shrink_800_800/B56ZvXR37eIoAg-/0/1768843346002?e=1791468000&v=beta&t=Rq2sBDAV4pM71xf2GDzoGpl7A_gFpu-3Ao_L-ZwalCo"
  alt="Chanchal Kumar Mandal"
  className="h-24 w-24 shrink-0 rounded-2xl border-4 border-white object-cover shadow-md"
/>
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-2xl font-bold tracking-tight text-slate-900">
                    Chanchal Kumar Mandal
                  </h1>
                  <CheckCircle2 className="h-5 w-5 text-indigo-600" />
                </div>

                <p className="mt-1 text-sm font-medium text-slate-600">
                  Senior Frontend Engineer
                </p>

                <div className="mt-2 flex flex-wrap gap-x-4 gap-y-2 text-xs text-slate-500">
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5" />
                    Bengaluru, India
                  </span>

                  <span className="inline-flex items-center gap-1.5">
                    <CalendarDays className="h-3.5 w-3.5" />
                    12+ years experience
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <a
                href="mailto:ckmandal9@gmail.com"
                className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-slate-800"
              >
                <Mail className="h-4 w-4" />
                Contact
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Summary */}
      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
        <SectionHeader
          icon={<UserRound className="h-5 w-5" />}
          title="Professional Summary"
        />

        <p className="mt-4 max-w-5xl text-sm leading-7 text-slate-600">
          Lead / Senior Frontend Engineer with 12+ years of experience building
          scalable, high-performance web applications using React.js,
          TypeScript, Next.js, Redux, GraphQL, and Micro-frontends for global
          platforms serving 175M+ users. Expertise in System Design, Web
          Vitals optimization, and AWS (S3, CloudFront, CI/CD), consistently
          delivering 20–30% performance improvements. Proven technical leader
          with experience mentoring engineers, driving Agile delivery,
          collaborating with cross-functional teams, and integrating
          AI-powered solutions.
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {[
            "React.js",
            "TypeScript",
            "Next.js",
            "System Design",
            "Micro-frontends",
            "AWS",
            "AI Integration",
          ].map((skill) => (
            <span
              key={skill}
              className="rounded-full bg-indigo-50 px-3 py-1.5 text-xs font-medium text-indigo-700"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
        <SectionHeader
          icon={<BriefcaseBusiness className="h-5 w-5" />}
          title="Work Experience"
        />

        <div className="mt-6 space-y-8">
          {experience.map((item, index) => (
            <div
              key={`${item.company}-${item.role}`}
              className="relative pl-7"
            >
              {index !== experience.length - 1 && (
                <div className="absolute left-[7px] top-7 h-[calc(100%+1rem)] w-px bg-slate-200" />
              )}

              <div className="absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-indigo-600 bg-white" />

              <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="font-semibold text-slate-900">
                    {item.role}
                  </h3>

                  <p className="mt-0.5 text-sm font-medium text-indigo-600">
                    {item.company}
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    {item.location}
                  </p>
                </div>

                <span className="mt-1 text-xs font-medium text-slate-500 sm:mt-0">
                  {item.period}
                </span>
              </div>

              <ul className="mt-3 space-y-2">
                {item.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex gap-2 text-sm leading-6 text-slate-600"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Technical Skills */}
      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
        <SectionHeader
          icon={<Code2 className="h-5 w-5" />}
          title="Technical Skills"
        />

        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-xl border border-slate-100 bg-slate-50 p-4"
            >
              <h3 className="text-sm font-semibold text-slate-900">
                {group.title}
              </h3>

              <div className="mt-3 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-xs text-slate-600"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications & Education */}
      <div className="grid gap-6 lg:grid-cols-2">
        <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <SectionHeader
            icon={<Award className="h-5 w-5" />}
            title="Certifications"
          />

          <div className="mt-5 space-y-3">
            {certifications.map((certification) => (
              <div
                key={certification}
                className="flex gap-3 rounded-xl bg-slate-50 p-3.5"
              >
                <Award className="mt-0.5 h-4 w-4 shrink-0 text-indigo-600" />
                <p className="text-sm leading-6 text-slate-600">
                  {certification}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <SectionHeader
            icon={<GraduationCap className="h-5 w-5" />}
            title="Education"
          />

          <div className="mt-5 space-y-4">
            <EducationItem
              degree="Master of Computer Applications (MCA)"
              field="Computer Applications"
              institution="Maulana Abul Kalam Azad University of Technology, West Bengal, India"
              year="June 2010"
            />

            <EducationItem
              degree="Bachelor of Science (B.Sc)"
              field="Mathematics (Honours)"
              institution="University of Kalyani, West Bengal, India"
              year="June 2005"
            />
          </div>
        </section>
      </div>

      {/* Contact Details */}
      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
        <SectionHeader
          icon={<Sparkles className="h-5 w-5" />}
          title="Contact & Professional Links"
        />

        <div className="mt-5 grid gap-3 sm:grid-cols-3">
          <ContactItem
            icon={<Mail className="h-4 w-4" />}
            label="Email"
            value="ckmandal9@gmail.com"
          />

          <ContactItem
            icon={<Phone className="h-4 w-4" />}
            label="Phone"
            value="+91-9110258141"
          />

          <ContactItem
            icon={<BriefcaseBusiness className="h-4 w-4" />}
            label="LinkedIn"
            value="linkedin.com/in/ckmandal9"
          />
        </div>
      </section>
    </div>
  );
}

function SectionHeader({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
        {icon}
      </div>

      <h2 className="text-lg font-semibold text-slate-900">{title}</h2>
    </div>
  );
}

function EducationItem({
  degree,
  field,
  institution,
  year,
}: {
  degree: string;
  field: string;
  institution: string;
  year: string;
}) {
  return (
    <div className="rounded-xl bg-slate-50 p-4">
      <h3 className="text-sm font-semibold text-slate-900">{degree}</h3>

      <p className="mt-1 text-sm text-indigo-600">{field}</p>

      <p className="mt-2 text-xs leading-5 text-slate-500">{institution}</p>

      <p className="mt-2 text-xs font-medium text-slate-500">{year}</p>
    </div>
  );
}

function ContactItem({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 p-4">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white text-indigo-600 shadow-sm">
        {icon}
      </div>

      <div className="min-w-0">
        <p className="text-xs text-slate-500">{label}</p>
        <p className="truncate text-sm font-medium text-slate-700">
          {value}
        </p>
      </div>
    </div>
  );
}