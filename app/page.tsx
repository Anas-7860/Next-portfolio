import Navbar from '../components/Navbar';
import Section from '../components/Section';
import ProjectCard from '../components/ProjectCard';
import TimelineItem from '../components/TimelineItem';
import ProfileCard from '../components/ProfileCard';
import Card from '../components/Card';
import Reveal from '../components/Reveal';
import Typewriter from '@/components/TypeWriter';
import Highlight from '@/components/Highlight';
import CertificationCard from '../components/CertificationCard';

const skillGroups = [
  {
    title: 'Core Languages',
    items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'C/C++', 'SQL', 'Python', 'Solidity'],
  },
  {
    title: 'Frameworks & Libraries',
    items: ['React', 'Next.js', 'Node.js', 'Express.js', 'Tailwind CSS', 'Flask'],
  },
  {
    title: 'Databases & Tools',
    items: ['MongoDB', 'MySQL', 'Supabase', 'Git', 'VS Code', 'Postman', 'Figma', 'Clerk', 'SendGrid', 'Twilio', 'MetaMask', 'Ethereum', 'OOP', 'Data Structures & Algorithms', 'REST APIs'],
  },
];

export default function Page() {
  const leetcodeQuestions = 500;
  const skillColors: Record<string, string> = {
    'HTML': 'bg-orange-500/10 text-orange-700 border-orange-500/30',
    'CSS': 'bg-blue-500/10 text-blue-700 border-blue-500/30',
    'JavaScript': 'bg-yellow-500/10 text-yellow-700 border-yellow-500/30',
    'TypeScript': 'bg-blue-600/10 text-blue-700 border-blue-600/30',
    'C/C++': 'bg-slate-500/10 text-slate-700 border-slate-500/30',
    'SQL': 'bg-teal-500/10 text-teal-700 border-teal-500/30',
    'Python': 'bg-green-600/10 text-green-700 border-green-600/30',
    'Solidity': 'bg-emerald-700/10 text-emerald-800 border-emerald-700/30',
    'React': 'bg-cyan-500/10 text-cyan-700 border-cyan-500/30',
    'Next.js': 'bg-neutral-500/10 text-neutral-700 border-neutral-500/30',
    'Node.js': 'bg-green-500/10 text-green-700 border-green-500/30',
    'Express.js': 'bg-zinc-500/10 text-zinc-700 border-zinc-500/30',
    'Tailwind CSS': 'bg-sky-500/10 text-sky-700 border-sky-500/30',
    'Flask': 'bg-amber-500/10 text-amber-700 border-amber-500/30',
    'MongoDB': 'bg-emerald-500/10 text-emerald-700 border-emerald-500/30',
    'MySQL': 'bg-indigo-500/10 text-indigo-700 border-indigo-500/30',
    'Supabase': 'bg-emerald-600/10 text-emerald-700 border-emerald-600/30',
    'Git': 'bg-red-500/10 text-red-700 border-red-500/30',
    'VS Code': 'bg-blue-500/10 text-blue-700 border-blue-500/30',
    'Postman': 'bg-orange-500/10 text-orange-700 border-orange-500/30',
    'Figma': 'bg-violet-500/10 text-violet-700 border-violet-500/30',
    'Clerk': 'bg-purple-500/10 text-purple-700 border-purple-500/30',
    'SendGrid': 'bg-sky-600/10 text-sky-700 border-sky-600/30',
    'Twilio': 'bg-rose-500/10 text-rose-700 border-rose-500/30',
    'MetaMask': 'bg-orange-600/10 text-orange-700 border-orange-600/30',
    'Ethereum': 'bg-indigo-600/10 text-indigo-700 border-indigo-600/30',
    'OOP': 'bg-fuchsia-500/10 text-fuchsia-700 border-fuchsia-500/30',
    'Data Structures & Algorithms': 'bg-amber-500/10 text-amber-700 border-amber-500/30',
    'REST APIs': 'bg-lime-500/10 text-lime-700 border-lime-500/30',
  };

  return (
    <>
      <Navbar />
      <main id="home" className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="pt-8 md:hidden">
          <ProfileCard leetcodeQuestions={leetcodeQuestions} />
        </div>

        <div className="pt-6 md:grid md:grid-cols-[360px,1fr] md:gap-8 md:pt-10">
          <div className="hidden md:sticky md:top-24 md:block md:self-start">
            <ProfileCard leetcodeQuestions={leetcodeQuestions} />
          </div>

          <div className="space-y-6">
            <Section id="hero" ariaLabel="Hero" className="pt-2">
              <Card className="overflow-hidden rounded-[28px] border border-slate-200/80 bg-white/80 p-7 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/70">
                <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                  <div className="max-w-2xl">
                    <p className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-500/10 px-3 py-1 text-sm font-medium text-emerald-700 dark:border-emerald-800 dark:text-emerald-300">
                      <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" /> Available for opportunities
                    </p>
                    <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 dark:text-slate-100 sm:text-5xl">Anas Khan</h1>
                    <p className="mt-3 text-lg font-medium text-emerald-600 dark:text-emerald-400">
                      <Typewriter />
                    </p>
                    <p className="mt-4 text-base leading-8 text-slate-700 dark:text-slate-300 sm:text-lg">
                      I build polished full-stack web applications with a focus on <Highlight variant="amber">clean architecture</Highlight>, <Highlight variant="emerald">performance</Highlight>, and <Highlight variant="violet">thoughtful user experiences</Highlight>.
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                    <a href="/Anas-resume.pdf" download className="inline-flex min-h-11 items-center justify-center whitespace-nowrap rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:-translate-y-0.5 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200">
                      Download CV
                    </a>
                    <a href="#projects" className="inline-flex min-h-11 items-center justify-center whitespace-nowrap rounded-full bg-[rgb(var(--color-accent))] px-4 py-2.5 text-sm font-medium text-[rgb(var(--color-surface))] transition hover:-translate-y-0.5 hover:opacity-90">
                      View Projects
                    </a>
                  </div>
                </div>
              </Card>
            </Section>

            <Section id="about" ariaLabel="About" className="pt-2">
              <Card className="rounded-[24px] border border-slate-200/80 bg-white/70 p-7 shadow-[0_20px_60px_rgba(15,23,42,0.05)] backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/70">
                <div className="grid gap-6 lg:grid-cols-[1.3fr,0.7fr] lg:items-start">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[rgb(var(--color-accent))]">About me</p>
                    <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">Crafting reliable software with modern frontend and backend fluency.</h2>
                    <p className="mt-4 text-base leading-8 text-slate-700 dark:text-slate-300">
                      I’m Anas Khan, a Computer Science student and web developer who enjoys building dependable digital products from idea to deployment. I work primarily with <Highlight variant="sky">MERN</Highlight> and <Highlight variant="accent">Next.js</Highlight>, and I’m comfortable taking a product from concept to launch with strong engineering habits.
                    </p>
                  </div>
                  <div className="rounded-[22px] border border-slate-200/80 bg-slate-50/80 p-5 dark:border-slate-800 dark:bg-slate-950/60">
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-600 dark:text-slate-400">Currently</p>
                    <ul className="mt-4 space-y-3 text-sm text-slate-700 dark:text-slate-300">
                      <li>• Building polished, production-ready web apps</li>
                      <li>• Strengthening problem-solving through DSA practice</li>
                      <li>• Exploring scalable architecture and UX details</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </Section>

            <Section id="skills" ariaLabel="Skills" className="pt-2">
              <Card className="rounded-[24px] border border-slate-200/80 bg-white/80 p-7 shadow-[0_20px_60px_rgba(15,23,42,0.06)] backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/70">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[rgb(var(--color-accent))]">Skills</p>
                    <h2 className="mt-2 text-2xl font-semibold tracking-tight">A practical toolkit for modern product development.</h2>
                  </div>
                </div>
                <div className="mt-6 grid gap-4 lg:grid-cols-3">
                  {skillGroups.map((group) => (
                    <div key={group.title} className="rounded-[20px] border border-slate-200/70 bg-slate-50/80 p-4 dark:border-slate-800 dark:bg-slate-950/70">
                      <h3 className="text-sm font-semibold">{group.title}</h3>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {group.items.map((s) => (
                          <span key={s} className={`rounded-full border px-2.5 py-1 text-[11px] ${skillColors[s] ?? 'bg-slate-500/10 text-slate-700 border-slate-500/30'}`}>
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </Section>

            <Section id="projects" ariaLabel="Projects" className="pt-2">
              <div className="rounded-[24px] border border-slate-200/70 bg-white/70 p-7 shadow-[0_20px_60px_rgba(15,23,42,0.05)] backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/70">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[rgb(var(--color-accent))]">Projects</p>
                    <h2 className="mt-2 text-2xl font-semibold tracking-tight">Selected work that blends product thinking with solid engineering.</h2>
                  </div>
                </div>
                <div className="mt-6 grid gap-4 lg:grid-cols-2">
                  <Reveal><ProjectCard title="StealthTalk" description="Anonymous real-time chat application with authentication and live messaging." stack={['React', 'Node.js', 'MongoDB', 'Socket.IO']} githubUrl="https://github.com/Anas-7860/StealthTalk---A-Chat-App" /></Reveal>
                  <Reveal><ProjectCard title="FunkyTutor – AI Learning Platform" description="An interactive AI-powered learning platform offering 1:1 real-time voice tutoring across multiple subjects with fast responses and a smooth user experience." stack={['Next.js', 'TypeScript', 'Supabase', 'Clerk', 'Web Audio', 'Tailwind CSS']} githubUrl="https://github.com/Anas-7860/lms-saas-app" liveUrl="https://funkytutor.vercel.app" /></Reveal>
                  <Reveal><ProjectCard title="Unhesitate" description="Psychology-inspired dream journal. Capture dreams and nightmares, reflect on patterns, turn insights into growth." stack={['Next.js', 'TypeScript', 'MongoDB', 'Clerk', 'Tailwind CSS']} githubUrl="https://github.com/Anas-7860/unhesitate" liveUrl="https://unhesitate.vercel.app" /></Reveal>
                </div>
              </div>
            </Section>

            <Section id="certifications" ariaLabel="Certifications" className="pt-2">
              <Card className="rounded-[24px] border border-slate-200/80 bg-white/80 p-7 shadow-[0_20px_60px_rgba(15,23,42,0.06)] backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/70">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[rgb(var(--color-accent))]">Certifications</p>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight">Credibility built through practical learning and hands-on progress.</h2>
                <div className="mt-6 grid gap-4 lg:grid-cols-2">
                  <CertificationCard title="Backend Development and APIs" org="freeCodeCamp" brand="freecodecamp" href="https://www.freecodecamp.org/certification/fcc382bf290-a819-42a7-bf90-f675c3122080/back-end-development-and-apis" detail="Completed hands-on projects covering REST APIs, auth, databases, and deployment." />
                  <CertificationCard title="Foundations of UX Design" org="Google / Coursera" brand="coursera" href="https://www.coursera.org/account/accomplishments/verify/ZGWG8YCQ584Z" detail="Learned user research, wireframing, accessibility, and iterative design principles." />
                  <CertificationCard title="Summer Training Certification" org="MetaCrafters" brand="metacrafters" detail="Focused on software development fundamentals and modern web practices." />
                </div>
              </Card>
            </Section>

            <Section id="experience" ariaLabel="Experience" className="pt-2">
              <Card className="rounded-[24px] border border-slate-200/80 bg-white/80 p-7 shadow-[0_20px_60px_rgba(15,23,42,0.06)] backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/70">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[rgb(var(--color-accent))]">Experience</p>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight">A growing engineering profile shaped by real product work.</h2>
                <div className="mt-6 space-y-4">
                  <TimelineItem title="Associate Software Engineer Intern" org="Better Software (Remote, India)" period="Jan 2026 – Mar 2026" logoSrc="/better.webp" detail="Upgraded a legacy Flask-based notification system to a fully asynchronous architecture, integrated SendGrid and Twilio for email and SMS automation, and implemented failure-recovery logic to keep the core application resilient to third-party outages." />
                  <TimelineItem title="Blockchain Development Trainee" org="MetaCrafters (Remote, USA)" period="June 2024 – Aug 2024" logoSrc="/metacrafters.jpeg" detail="Developed and deployed Solidity-based dApps on Ethereum testnets, built React frontends with MetaMask connectivity, and managed the full lifecycle of basic blockchain projects from smart contracts to UI event handling." />
                </div>
              </Card>
            </Section>

            <Section id="education" ariaLabel="Education" className="pt-2">
              <Card className="rounded-[24px] border border-slate-200/80 bg-white/80 p-7 shadow-[0_20px_60px_rgba(15,23,42,0.06)] backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/70">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[rgb(var(--color-accent))]">Education</p>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight">Formal foundation with a strong focus on computer science and software engineering.</h2>
                <div className="mt-6 space-y-4">
                  <TimelineItem title="B.E. in Computer Science" org="Chandigarh University" period="2022 – 2026" detail="CGPA: 7.815/10" />
                  <TimelineItem title="Class 12 (CBSE)" org="CBSE" period="Completed" detail="84%" />
                  <TimelineItem title="Class 10 (CBSE)" org="CBSE" period="Completed" detail="83%" />
                </div>
              </Card>
            </Section>

            <Section id="achievements" ariaLabel="Achievements" className="pt-2">
              <Card className="rounded-[24px] border border-slate-200/80 bg-white/80 p-7 shadow-[0_20px_60px_rgba(15,23,42,0.06)] backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/70">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[rgb(var(--color-accent))]">Achievements</p>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight">Recognitions that reflect both technical depth and competitive energy.</h2>
                <ul className="mt-6 space-y-3 text-sm text-[rgb(var(--color-muted))]">
                  <li>• Ranked Top 5 in a Web Designing competition among 40+ participants</li>
                  <li>• Solved 500+ Data Structures & Algorithms problems (LeetCode)</li>
                  <li>• Football Interdepartmental Champions (2025)</li>
                </ul>
              </Card>
            </Section>

            <Section id="contact" ariaLabel="Contact" className="pt-2">
              <Card className="rounded-[24px] border border-slate-200/80 bg-white/80 p-7 shadow-[0_20px_60px_rgba(15,23,42,0.06)] backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/70">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[rgb(var(--color-accent))]">Contact</p>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight">Let’s build something meaningful together.</h2>
                <ul className="mt-6 space-y-3 text-sm text-[rgb(var(--color-muted))]">
                  <li className="flex items-center gap-2"><svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4"><rect x="3" y="5" width="18" height="14" rx="2" fill="none" stroke="currentColor" strokeWidth="2" /><path d="M3 7l9 6 9-6" fill="none" stroke="currentColor" strokeWidth="2" /></svg><span>Email:</span><a className="text-[rgb(var(--color-accent))] hover:underline" href="mailto:anaskhan.cse4@gmail.com">anaskhan.cse4@gmail.com</a></li>
                  <li className="flex items-center gap-2"><svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4"><path d="M12 .5a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.57 0-.28-.01-1.02-.02-2-3.34.73-4.04-1.6-4.04-1.6-.55-1.4-1.35-1.77-1.35-1.77-1.1-.75.08-.74.08-.74 1.22.09 1.86 1.25 1.86 1.25 1.08 1.84 2.83 1.31 3.52 1 .11-.78.42-1.31.76-1.61-2.66-.3-5.46-1.33-5.46-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1-.32 3.29 1.23a11.5 11.5 0 0 1 5.99 0c2.28-1.55 3.29-1.23 3.29-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.9 1.24 3.22 0 4.61-2.8 5.62-5.48 5.92.43.37.81 1.1.81 2.22 0 1.6-.02 2.88-.02 3.27 0 .31.22.68.83.57A12 12 0 0 0 12 .5z" fill="currentColor" /></svg><span>GitHub:</span><a className="text-[rgb(var(--color-accent))] hover:underline" href="https://github.com/Anas-7860" target="_blank" rel="noopener noreferrer">github.com/Anas-7860</a></li>
                  <li className="flex items-center gap-2"><svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4"><path d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM3 8.98h4v12H3v-12Zm7 0h3.8v1.64h.05c.53-.98 1.82-2.02 3.75-2.02 4.01 0 4.75 2.64 4.75 6.07v6.31h-4v-5.6c0-1.34-.03-3.06-1.87-3.06-1.88 0-2.17 1.46-2.17 2.96v5.7h-4v-12Z" fill="currentColor" /></svg><span>LinkedIn:</span><a className="text-[rgb(var(--color-accent))] hover:underline" href="https://www.linkedin.com/in/anas-khan-dev/" target="_blank" rel="noopener noreferrer">linkedin.com/in/anas-khan-dev/</a></li>
                </ul>
              </Card>
            </Section>
          </div>
        </div>
      </main>
      <footer className="mx-auto max-w-6xl px-4 pb-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3 border-t border-slate-200/70 pt-5 text-center text-sm leading-6 text-[rgb(var(--color-muted))] sm:flex-row sm:items-center sm:justify-between sm:text-left dark:border-slate-800">
          <p className="mx-auto max-w-[28rem] sm:mx-0">© 2026 Anas Khan. Built with Next.js and Tailwind CSS.</p>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:justify-end">
            <a className="transition hover:text-[rgb(var(--color-text))]" href="#home">Top</a>
            <a className="transition hover:text-[rgb(var(--color-text))]" href="https://github.com/Anas-7860" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
      </footer>
    </>
  );
}
