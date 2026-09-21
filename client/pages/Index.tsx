import {
  ArrowRight,
  Award,
  BrainCircuit,
  BriefcaseBusiness,
  Code2,
  Database,
  ExternalLink,
  FileDown,
  GraduationCap,
  Layers,
  Mail,
  MapPin,
  Phone,
  Sparkles,
  Trophy,
  Wrench,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GithubIcon, LinkedinIcon } from "@/components/icons/BrandIcons";

const SKILLS = [
  { title: "Languages", icon: Code2, items: ["Java", "Python", "JavaScript"] },
  { title: "Web & Frameworks", icon: Layers, items: ["HTML5", "CSS3", "React.js", "Bootstrap", "Django", "Node.js", "Express.js"] },
  { title: "Databases", icon: Database, items: ["MySQL", "SQL", "MongoDB"] },
  { title: "Core Concepts", icon: BrainCircuit, items: ["OOP", "Data Structures & Algorithms", "DBMS", "Operating Systems", "Computer Networks"] },
  { title: "Tools & APIs", icon: Wrench, items: ["Git", "GitHub", "REST APIs"] },
];

const EDUCATION = [
  {
    degree: "Bachelor of Technology in Computer Science and Engineering",
    school: "Aditya College of Engineering and Technology",
    place: "Surampalem, Andhra Pradesh",
    period: "2023 – 2027",
    detail: "CGPA: 7.7/10",
  },
  {
    degree: "Intermediate — MPC",
    school: "Vikas Junior College",
    place: "Samisragudem",
    period: "2021 – 2023",
    detail: "CGPA/Percentage: 88.5%",
  },
  {
    degree: "SSC",
    school: "St Ann's English Medium School",
    place: "Nidadavole",
    period: "2013 – 2021",
    detail: "CGPA/Percentage: 96%",
  },
];

const PROJECTS = [
  {
    title: "E-Commerce Website using MERN Stack",
    subtitle: "Project Team Leader",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
    accent: "bg-brand-gradient",
    image: "https://images.pexels.com/photos/29502371/pexels-photo-29502371.jpeg",
    bullets: [
      "Led a team in developing a full-stack e-commerce application using the MERN stack, coordinating tasks and project implementation.",
      "Developed frontend features using React.js and contributed to backend development using Node.js, Express.js, and REST APIs.",
      "Integrated MongoDB for data management and performed testing and debugging to improve application functionality.",
    ],
  },
  {
    title: "Online Shopping E-Commerce Website using Django",
    subtitle: "Web Development",
    tech: ["Python", "Django", "HTML", "CSS", "JavaScript"],
    accent: "bg-[linear-gradient(135deg,hsl(172_66%_45%),hsl(190_75%_38%))]",
    bullets: [
      "Developed an e-commerce web application using Python and Django with product browsing and shopping functionalities.",
      "Designed responsive web pages using HTML, CSS, and JavaScript and integrated backend functionality with the database.",
      "Tested and debugged application features to improve usability, functionality, and reliability.",
    ],
  },
];

const INTERNSHIPS = [
  {
    company: "SmartBridge Educational Services Pvt. Ltd.",
    role: "Full Stack Developer – MERN Stack Intern",
    meta: "Virtual · 120 Hours · 2 Months",
    period: "2026",
    bullets: [
      "Completed a practical internship focused on MongoDB, Express.js, React.js, and Node.js.",
      "Gained hands-on exposure to full-stack web application development and frontend-backend integration.",
      "Developed an understanding of API-based communication, database integration, and modern web development practices.",
    ],
  },
  {
    company: "Andhra Pradesh State Skill Development Corporation (APSSDC)",
    role: "Web Development using Django Intern",
    meta: "Online Summer Internship",
    period: "May 2025 – July 2025",
    bullets: [
      "Completed a summer internship focused on web application development using Python and Django.",
      "Gained practical exposure to Python, Django, HTML, and CSS for developing web applications.",
      "Developed an understanding of Django-based backend development and application functionality.",
    ],
  },
];

const STRENGTHS = ["Problem Solving", "Team Leadership", "Quick Learning", "Analytical Thinking", "Teamwork", "Communication"];

export default function Index() {
  const printResume = () => window.print();

  return (
    <div id="top" className="relative overflow-x-hidden">
      <section className="relative flex min-h-screen items-center bg-brand-radial pb-16 pt-24">
        <div aria-hidden className="pointer-events-none absolute -right-[10%] -top-24 h-72 w-72 animate-float rounded-full bg-primary/20 blur-3xl sm:h-96 sm:w-96" />
        <div aria-hidden className="pointer-events-none absolute -bottom-[10%] -left-[10%] h-72 w-72 animate-float rounded-full bg-accent/20 blur-3xl" style={{ animationDelay: "1.5s" }} />
        <div className="container relative grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="animate-fade-up">
            <Badge variant="secondary" className="mb-6 border border-primary/20 bg-primary/10 px-4 py-1.5 text-primary">
              <Sparkles className="mr-1.5 h-3.5 w-3.5" /> Open to Software Developer roles
            </Badge>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-primary">Software Developer · Full Stack Developer</p>
            <h1 className="font-display text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Hi, I&apos;m <span className="bg-brand-gradient bg-clip-text text-transparent">Bhanusri Manukonda</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg text-muted-foreground">
              Computer Science and Engineering student skilled in Java, SQL, JavaScript, Django, and the MERN stack, with hands-on experience building web applications and solving technical problems.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button size="lg" className="rounded-full bg-brand-gradient text-white shadow-lg shadow-primary/25 hover:opacity-90" asChild>
                <a href="#projects">View Projects <ArrowRight className="h-4 w-4" /></a>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full border-primary/30" onClick={printResume}>
                <FileDown className="h-4 w-4" /> Download Resume
              </Button>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-5">
              <a href="https://github.com/Bhanusri-274" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"><GithubIcon className="h-5 w-5" /> GitHub</a>
              <a href="https://linkedin.com/in/bhanusri-manukonda-2a30233b3" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"><LinkedinIcon className="h-5 w-5" /> LinkedIn</a>
              <a href="mailto:manukondabhanusri6@gmail.com" className="flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"><Mail className="h-5 w-5" /> Email me</a>
            </div>
          </div>
          <div className="relative mx-auto animate-fade-up" style={{ animationDelay: "0.15s" }}>
            <div className="absolute -inset-5 animate-pulse rounded-[2.5rem] bg-primary/20 blur-2xl" />
            <div className="group relative mx-auto h-72 w-64 rotate-2 overflow-hidden rounded-[2rem] bg-brand-gradient p-1 shadow-2xl shadow-primary/30 transition-transform duration-500 hover:rotate-0 hover:scale-[1.03] sm:h-[25rem] sm:w-80">
              <div className="h-full overflow-hidden rounded-[1.75rem] bg-background">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F2aedf655f1a2490889ceedeb5dc30895%2F49e6698fa1224d00825cf75ae52d1be6?format=webp&width=800&height=1200"
                  alt="Bhanusri Manukonda in professional attire"
                  className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="pointer-events-none absolute inset-1 rounded-[1.75rem] bg-gradient-to-t from-black/30 via-transparent to-white/10" />
            </div>
            <div className="absolute -bottom-5 -right-5 flex items-center gap-2 rounded-2xl border border-border bg-card px-4 py-3 shadow-lg transition-transform duration-300 hover:-translate-y-1">
              <GraduationCap className="h-5 w-5 text-primary" /><div><p className="text-xs font-semibold text-foreground">B.Tech CSE</p><p className="text-[11px] text-muted-foreground">Class of 2027</p></div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 sm:py-28">
        <div className="container"><SectionHeading eyebrow="About Me" title="Building with purpose" />
          <div className="mt-10 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">I am a fresher and Computer Science and Engineering student seeking an entry-level Software Developer or Full Stack Developer role. With a foundation in Java, Python, SQL, JavaScript, Django, and MERN Stack, I enjoy turning ideas into reliable web applications. I bring strong problem-solving, analytical thinking, teamwork, and communication skills to every project, and I am always eager to learn new technologies.</p>
            <div className="space-y-4"><InfoRow icon={MapPin} label="West Godavari, Andhra Pradesh" /><InfoRow icon={Phone} label="+91 81212 08428" /><InfoRow icon={Mail} label="manukondabhanusri6@gmail.com" /><div className="pt-2"><p className="mb-3 text-sm font-semibold text-foreground">Languages</p><div className="flex flex-wrap gap-2"><Badge variant="secondary">English</Badge><Badge variant="secondary">Telugu</Badge></div></div></div>
          </div>
        </div>
      </section>

      <section id="skills" className="bg-secondary/40 py-20 sm:py-28"><div className="container"><SectionHeading eyebrow="Skills" title="My technical toolkit" /><div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{SKILLS.map((group) => <div key={group.title} className="group rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-primary hover:shadow-lg"><div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-brand-gradient text-white"><group.icon className="h-5 w-5" /></div><h3 className="font-display text-lg font-semibold text-foreground">{group.title}</h3><div className="mt-3 flex flex-wrap gap-2">{group.items.map((item) => <span key={item} className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">{item}</span>)}</div></div>)}</div><div className="mt-12"><p className="text-sm font-semibold uppercase tracking-widest text-primary">Secondary skills</p><div className="mt-4 flex flex-wrap gap-3">{STRENGTHS.map((strength) => <span key={strength} className="rounded-full border border-primary/40 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground">{strength}</span>)}</div></div></div></section>

      <section id="projects" className="py-20 sm:py-28"><div className="container"><SectionHeading eyebrow="Projects" title="Featured work" /><div className="mt-10 grid gap-8">{PROJECTS.map((project) => <article key={project.title} className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm">{"image" in project && <img src={project.image} alt="E-commerce shopping website displayed on a laptop and phone" className="h-56 w-full object-cover sm:h-72" />}<div className="grid gap-0 lg:grid-cols-[0.9fr_1.4fr]"><div className={`flex flex-col justify-center p-8 text-white sm:p-10 ${project.accent}`}><Badge className="mb-4 w-fit border-white/30 bg-white/15 text-white">{project.subtitle}</Badge><h3 className="font-display text-2xl font-bold sm:text-3xl">{project.title}</h3><div className="mt-6 flex flex-wrap gap-2">{project.tech.map((tag) => <span key={tag} className="rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-medium">{tag}</span>)}</div></div><div className="p-8 sm:p-10"><ul className="space-y-3 text-sm text-muted-foreground sm:text-base">{project.bullets.map((bullet) => <li key={bullet} className="flex gap-3"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />{bullet}</li>)}</ul><a href="https://github.com/Bhanusri-274" target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline">View GitHub profile <ExternalLink className="h-3.5 w-3.5" /></a></div></div></article>)}</div></div></section>

      <section id="experience" className="bg-secondary/40 py-20 sm:py-28"><div className="container"><SectionHeading eyebrow="Experience" title="Internships & education" /><div className="mt-10 grid gap-10 lg:grid-cols-2"><div><h3 className="mb-5 flex items-center gap-2 font-display text-xl font-semibold text-foreground"><BriefcaseBusiness className="h-5 w-5 text-primary" /> Internships</h3><div className="space-y-5">{INTERNSHIPS.map((internship) => <div key={internship.company} className="rounded-2xl border border-border bg-card p-6 shadow-sm"><div className="flex flex-wrap items-baseline justify-between gap-2"><p className="font-semibold text-foreground">{internship.company}</p><span className="text-xs font-medium text-muted-foreground">{internship.period}</span></div><p className="mt-1 text-sm font-medium text-primary">{internship.role}</p><p className="text-xs italic text-muted-foreground">{internship.meta}</p><ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">{internship.bullets.map((bullet) => <li key={bullet} className="flex gap-3"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />{bullet}</li>)}</ul></div>)}</div></div><div id="education"><h3 className="mb-5 flex items-center gap-2 font-display text-xl font-semibold text-foreground"><GraduationCap className="h-5 w-5 text-primary" /> Educational Details</h3><div className="space-y-5 border-l-2 border-primary/20 pl-6">{EDUCATION.map((edu) => <div key={edu.degree} className="relative"><span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full bg-primary" /><div className="flex flex-wrap items-baseline justify-between gap-2"><p className="font-semibold text-foreground">{edu.degree}</p><span className="text-xs font-medium text-muted-foreground">{edu.period}</span></div><p className="text-sm text-muted-foreground">{edu.school}</p><p className="text-xs text-muted-foreground">{edu.place} · {edu.detail}</p></div>)}</div><h3 className="mb-5 mt-12 flex items-center gap-2 font-display text-xl font-semibold text-foreground"><Award className="h-5 w-5 text-primary" /> Certifications</h3><div className="rounded-2xl border border-border bg-card p-6 shadow-sm"><p className="font-semibold text-foreground">Internship Certificates</p><p className="mt-1 text-sm text-muted-foreground">SmartBridge Educational Services · APSSDC</p></div></div></div></div></section>

      <section id="achievements" className="bg-secondary/40 py-20 sm:py-28"><div className="container"><SectionHeading eyebrow="Achievements" title="How I contribute" /><div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"><Achievement icon={Trophy} title="Team Leadership" text="Led a MERN stack project team, coordinated implementation, and kept collaborative delivery on track." /><Achievement icon={BrainCircuit} title="Technical Growth" text="Built practical experience across Java, Python, Django, MERN, REST APIs, and database integration." /><Achievement icon={Sparkles} title="Always Learning" text="Quick learner with a strong interest in improving communication and learning new technologies." /></div><div className="mt-8 flex flex-wrap gap-2">{STRENGTHS.map((strength) => <Badge key={strength} variant="secondary" className="bg-secondary">{strength}</Badge>)}</div></div></section>

      <section id="contact" className="py-20 sm:py-28"><div className="container"><div className="relative overflow-hidden rounded-3xl bg-brand-gradient px-6 py-14 text-center text-white sm:px-16 sm:py-20"><div aria-hidden className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-3xl" /><h2 className="font-display text-3xl font-bold sm:text-4xl">Let&apos;s build something great together</h2><p className="mx-auto mt-4 max-w-xl text-white/85">I&apos;m looking for an entry-level Software Developer or Full Stack Developer opportunity. Let&apos;s connect.</p><div className="mt-8 flex flex-wrap items-center justify-center gap-4"><Button size="lg" variant="secondary" className="rounded-full bg-white text-primary hover:bg-white/90" asChild><a href="mailto:manukondabhanusri6@gmail.com"><Mail className="h-4 w-4" /> Email me</a></Button><Button size="lg" variant="outline" className="rounded-full border-white/50 bg-transparent text-white hover:bg-white/10" asChild><a href="https://linkedin.com/in/bhanusri-manukonda-2a30233b3" target="_blank" rel="noreferrer"><LinkedinIcon className="h-4 w-4" /> LinkedIn</a></Button><Button size="lg" variant="outline" className="rounded-full border-white/50 bg-transparent text-white hover:bg-white/10" asChild><a href="https://github.com/Bhanusri-274" target="_blank" rel="noreferrer"><GithubIcon className="h-4 w-4" /> GitHub</a></Button></div></div></div></section>
    </div>
  );
}

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) { return <div><p className="text-sm font-semibold uppercase tracking-widest text-primary">{eyebrow}</p><h2 className="mt-2 font-display text-3xl font-bold text-foreground sm:text-4xl">{title}</h2></div>; }
function InfoRow({ icon: Icon, label }: { icon: typeof MapPin; label: string }) { return <div className="flex items-center gap-3 text-sm text-foreground"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-secondary text-primary"><Icon className="h-4 w-4" /></span>{label}</div>; }
function Achievement({ icon: Icon, title, text }: { icon: typeof Trophy; title: string; text: string }) { return <div className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"><div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-brand-gradient text-white"><Icon className="h-5 w-5" /></div><h3 className="font-display text-lg font-semibold text-foreground">{title}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p></div>; }
