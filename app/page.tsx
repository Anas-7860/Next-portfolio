import Navbar from '../components/Navbar';
import Section from '../components/Section';
import ProjectCard from '../components/ProjectCard';
import TimelineItem from '../components/TimelineItem';
import ProfileCard from '../components/ProfileCard';
import Card from '../components/Card';
import Reveal from '../components/Reveal';
import Typewriter from '@/components/TypeWriter';
import Highlight from '@/components/Highlight';
import Loading from './loading';
import CertificationCard from '../components/CertificationCard';

export default function Page() {
  const skillColors: Record<string, string> = {
    // Languages
    'HTML': 'bg-orange-500/10 text-orange-700 border-orange-500/30',
    'CSS': 'bg-blue-500/10 text-blue-700 border-blue-500/30',
    'JavaScript': 'bg-yellow-500/10 text-yellow-700 border-yellow-500/30',
    'TypeScript': 'bg-blue-600/10 text-blue-700 border-blue-600/30',
    'C/C++': 'bg-slate-500/10 text-slate-700 border-slate-500/30',
    'SQL': 'bg-teal-500/10 text-teal-700 border-teal-500/30',
    // Frameworks & Libraries
    'React': 'bg-cyan-500/10 text-cyan-700 border-cyan-500/30',
    'Next.js': 'bg-neutral-500/10 text-neutral-700 border-neutral-500/30',
    'Node.js': 'bg-green-500/10 text-green-700 border-green-500/30',
    'Express.js': 'bg-zinc-500/10 text-zinc-700 border-zinc-500/30',
    'Tailwind CSS': 'bg-sky-500/10 text-sky-700 border-sky-500/30',
    // Databases & Tools
    'MongoDB': 'bg-emerald-500/10 text-emerald-700 border-emerald-500/30',
    'MySQL': 'bg-indigo-500/10 text-indigo-700 border-indigo-500/30',
    'Supabase': 'bg-emerald-600/10 text-emerald-700 border-emerald-600/30',
    'Git': 'bg-red-500/10 text-red-700 border-red-500/30',
    'VS Code': 'bg-blue-500/10 text-blue-700 border-blue-500/30',
    'Postman': 'bg-orange-500/10 text-orange-700 border-orange-500/30',
    'Figma': 'bg-violet-500/10 text-violet-700 border-violet-500/30',
    'Clerk': 'bg-purple-500/10 text-purple-700 border-purple-500/30',
    'OOP': 'bg-fuchsia-500/10 text-fuchsia-700 border-fuchsia-500/30',
    'Data Structures & Algorithms': 'bg-amber-500/10 text-amber-700 border-amber-500/30',
    'REST APIs': 'bg-lime-500/10 text-lime-700 border-lime-500/30',
  };

  return (
    <>
      <Navbar />
      <main id="home" className="mx-auto max-w-5xl px-4">
        {/* Mobile profile card */}
        <div className="pt-16 md:hidden">
          <ProfileCard />
        </div>

        {/* Responsive two-column layout */}
        <div className="md:grid md:grid-cols-[400px,1fr] md:gap-8">
          {/* Left sidebar (sticky on desktop) */}
          <div className="hidden md:block md:pt-16 md:sticky md:top-16 self-start">
            <ProfileCard />
          </div>

          {/* Main content */}
          <div>
            <Section id="hero" ariaLabel="Hero" className="pt-8 pb-12 md:pt-16">
              <Card>
                <div className="flex items-center justify-between gap-4">
                  <h1 className="text-3xl font-semibold tracking-tight">Anas Khan</h1>
                  <a
                    href="/22BCS12871_Anas.pdf"
                    download
                    className="inline-flex items-center gap-2 rounded-md border px-3 py-1.5 text-sm hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                    aria-label="Download CV"
                  >
                    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4">
                      <path d="M12 3v10m0 0l-4-4m4 4 4-4M4 19h16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="hidden sm:inline">Download CV</span>
                    <span className="sm:hidden">CV</span>
                  </a>
                </div>
                <p className="mt-2 text-[rgb(var(--color-accent))] font-medium"> <Typewriter /></p>
                <p className="mt-3 text-[rgb(var(--color-muted))] max-w-prose">
                  Computer Science student and web developer, building and maintaining full-stack web applications with a focus on <Highlight variant="amber">clean architecture</Highlight>, <Highlight variant="emerald">performance</Highlight>, and <Highlight variant="violet">reliable user experiences</Highlight>.
                </p>

              </Card>
            </Section>



            <Section id="about" ariaLabel="About" className="py-10">
              <div className="rounded-lg p-6">
                <h2 className="text-xl font-semibold">About</h2>
                <p className="mt-2 text-[rgb(var(--color-muted))] max-w-prose">
                  I’m Anas Khan, a Computer Science student and web developer who enjoys building reliable, user-focused web applications. I work primarily with <Highlight variant="sky">MERN</Highlight> and <Highlight variant="accent">Next.js</Highlight>, and I’m comfortable taking a product from idea to deployment.
                  I value <Highlight variant="amber">clean architecture</Highlight>, <Highlight variant="emerald">performance</Highlight>, and thoughtful UX, and I continuously sharpen my problem-solving skills through regular DSA practice. I’m currently seeking opportunities and open to select roles that align with my long-term growth as a software engineer.
                </p>
              </div>
            </Section>

            <Section id="skills" ariaLabel="Skills" className="py-10">
              <Card>
                <h2 className="text-xl font-semibold">Skills</h2>
                <div className="mt-4 space-y-6">
                  <div>
                    <h3 className="text-sm font-medium">Languages</h3>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {['HTML', 'CSS', 'JavaScript', 'TypeScript', 'C/C++', 'SQL'].map((s) => (
                        <span key={s} className={`text-xs px-2 py-1 rounded border ${skillColors[s] ?? 'bg-gray-500/10 text-gray-700 border-gray-500/30'}`}>
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium">Frameworks & Libraries</h3>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {['React', 'Next.js', 'Node.js', 'Express.js', 'Tailwind CSS'].map((s) => (
                        <span key={s} className={`text-xs px-2 py-1 rounded border ${skillColors[s] ?? 'bg-gray-500/10 text-gray-700 border-gray-500/30'}`}>
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium">Databases & Tools</h3>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {['MongoDB', 'MySQL', 'Supabase', 'Git', 'VS Code', 'Postman', 'Figma', 'Clerk', 'OOP', 'Data Structures & Algorithms', 'REST APIs'].map((s) => (
                        <span key={s} className={`text-xs px-2 py-1 rounded border ${skillColors[s] ?? 'bg-gray-500/10 text-gray-700 border-gray-500/30'}`}>
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </Section>

            <Section id="projects" ariaLabel="Projects" className="py-10">
              <h2 className="text-xl font-semibold">Projects</h2>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <Reveal>
                  <ProjectCard
                    title="StealthTalk"
                    description="Anonymous real-time chat application with authentication and live messaging."
                    stack={['React', 'Node.js', 'MongoDB', 'Socket.IO']}
                    githubUrl="https://github.com/Anas-7860/StealthTalk---A-Chat-App"
                    // liveUrl="https://stealthtalk.vercel.app"
                    imageSrc="/stealthtalk.png"
                  />
                </Reveal>

                <Reveal>
                  <ProjectCard
                    title="FunkyTutor – AI Learning Platform"
                    description="An interactive AI-powered learning platform offering 1:1 real-time voice tutoring across multiple subjects with fast responses and a smooth user experience."
                    stack={[
                      'Next.js',
                      'TypeScript',
                      'Supabase',
                      'Clerk',
                      'Web Audio',
                      'Tailwind CSS',
                    ]}
                    githubUrl="https://github.com/Anas-7860/lms-saas-app"
                    liveUrl="https://funkytutor.vercel.app"
                    imageSrc="/Funkytutor.png"
                  />
                </Reveal>

              </div>
            </Section>
            <Section id="certifications" ariaLabel="Certifications" className="py-10">
              <h2 className="text-xl font-semibold">Certifications</h2>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <CertificationCard
                  title="Backend Development and APIs"
                  org="freeCodeCamp"
                  brand="freecodecamp"
                  href="https://www.freecodecamp.org/certification/fcc382bf290-a819-42a7-bf90-f675c3122080/back-end-development-and-apis"
                  detail="Completed hands-on projects covering REST APIs, auth, databases, and deployment."
                />
                <CertificationCard
                  title="Foundations of UX Design"
                  org="Google / Coursera"
                  brand="coursera"
                  href="https://www.coursera.org/account/accomplishments/verify/ZGWG8YCQ584Z"
                  detail="Learned user research, wireframing, accessibility, and iterative design principles."
                />
                <CertificationCard
                  title="Summer Training Certification"
                  org="MetaCrafters"
                  detail="Focused on software development fundamentals and modern web practices."
                />
              </div>
            </Section>
            <Section id="experience" ariaLabel="Experience and Education" className="py-10">
              <Card>
                <h2 className="text-xl font-semibold">Experience / Education</h2>
                <div className="mt-4 space-y-4">
                  <TimelineItem
                    title="Summer Trainee"
                    org="MetaCrafters"
                    period="June 2024 – August 2024"
                    detail="Software development exposure with React, frontend–backend interaction, REST APIs, and application logic; learned production-level development practices."
                  />
                  <TimelineItem
                    title="B.E. in Computer Science"
                    org="Chandigarh University"
                    period="2022 – 2026"
                    detail="CGPA: 7.75/10"
                  />
                  <TimelineItem
                    title="Class 12 (CBSE)"
                    org="CBSE"
                    period="Completed"
                    detail="84%"
                  />
                  <TimelineItem
                    title="Class 10 (CBSE)"
                    org="CBSE"
                    period="Completed"
                    detail="83%"
                  />
                </div>
              </Card>
            </Section>

            <Section id="achievements" ariaLabel="Achievements" className="py-10">
              <Card>
                <h2 className="text-xl font-semibold">Achievements</h2>
                <ul className="mt-2 space-y-2 text-sm text-[rgb(var(--color-muted))] list-disc list-inside marker:text-[rgb(var(--color-accent))]">
                  <li>Ranked Top 5 in a Web Designing competition among 40+ participants</li>
                  <li>Solved 400+ Data Structures & Algorithms problems (LeetCode)</li>
                  <li>Football Interdepartmental Champions (2025)</li>
                </ul>
              </Card>
            </Section>

            <Section id="contact" ariaLabel="Contact" className="py-10 mb-16">
              <Card>
                <h2 className="text-xl font-semibold">Contact</h2>
                <ul className="mt-2 space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4">
                      <rect x="3" y="5" width="18" height="14" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
                      <path d="M3 7l9 6 9-6" fill="none" stroke="currentColor" strokeWidth="2" />
                    </svg>
                    <span>Email:</span>
                    <a className="text-[rgb(var(--color-accent))] hover:underline" href="mailto:anaskhan9501499079@gmail.com">anaskhan9501499079@gmail.com</a>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4">
                      <path
                        d="M12 .5a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.57 0-.28-.01-1.02-.02-2-3.34.73-4.04-1.6-4.04-1.6-.55-1.4-1.35-1.77-1.35-1.77-1.1-.75.08-.74.08-.74 1.22.09 1.86 1.25 1.86 1.25 1.08 1.84 2.83 1.31 3.52 1 .11-.78.42-1.31.76-1.61-2.66-.3-5.46-1.33-5.46-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1-.32 3.29 1.23a11.5 11.5 0 0 1 5.99 0c2.28-1.55 3.29-1.23 3.29-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.9 1.24 3.22 0 4.61-2.8 5.62-5.48 5.92.43.37.81 1.1.81 2.22 0 1.6-.02 2.88-.02 3.27 0 .31.22.68.83.57A12 12 0 0 0 12 .5z"
                        fill="currentColor"
                      />
                    </svg>
                    <span>GitHub:</span>
                    <a className="text-[rgb(var(--color-accent))] hover:underline" href="https://github.com/Anas-7860" target="_blank" rel="noopener noreferrer">github.com/Anas-7860</a>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4">
                      <path d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM3 8.98h4v12H3v-12Zm7 0h3.8v1.64h.05c.53-.98 1.82-2.02 3.75-2.02 4.01 0 4.75 2.64 4.75 6.07v6.31h-4v-5.6c0-1.34-.03-3.06-1.87-3.06-1.88 0-2.17 1.46-2.17 2.96v5.7h-4v-12Z" fill="currentColor" />
                    </svg>
                    <span>LinkedIn:</span>
                    <a className="text-[rgb(var(--color-accent))] hover:underline" href="https://www.linkedin.com/in/anas-khan-b6722424b/" target="_blank" rel="noopener noreferrer">linkedin.com/in/anas-khan-b6722424b</a>
                  </li>
                  {/* <li className="flex items-center gap-2">
                    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4">
                      <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
                    </svg>
                    <span>LeetCode:</span>
                    <a className="text-[rgb(var(--color-accent))] hover:underline" href="https://leetcode.com/u/voldemort_007/" target="_blank" rel="noopener noreferrer">leetcode.com/u/voldemort_007</a>
                  </li> */}
                </ul>
              </Card>
            </Section>
          </div>
        </div>
      </main>
    </>
  );
}
