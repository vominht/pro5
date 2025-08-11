"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowRight, Cpu, Code2, Sparkles, Trophy, Calendar, MapPin, Star, Download, ExternalLink, Briefcase, GraduationCap, Award, BookOpen, Users, Zap } from "lucide-react";
import TerminalCard from "@/components/TerminalCard";
import TiltCard from "@/components/TiltCard";
import AnimatedGrid from "@/components/AnimatedGrid";
import Particles from "@/components/Particles";
import Parallax from "@/components/Parallax";
import AvatarOrb from "@/components/AvatarOrb";

import SectionHeading from "@/components/SectionHeading";
import StatCard from "@/components/StatCard";
import TimelineItem from "@/components/TimelineItem";
import GlobalBackground from "@/components/GlobalBackground";
import ScrollReveal from "@/components/ScrollReveal";
import HolographicCard from "@/components/HolographicCard";
import InteractiveSpotlight from "@/components/InteractiveSpotlight";
import SpringCard from "@/components/SpringCard";
import Enhanced3DButton from "@/components/Enhanced3DButton";
import { AnimatedArrow, AnimatedMail, AnimatedDownload } from "@/components/AnimatedIcons";

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24 relative py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/3 to-transparent opacity-30" />
      <div className="max-w-6xl mx-auto px-6 md:px-10 relative">
        <ScrollReveal>
          <SectionHeading>{title}</SectionHeading>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <div className="grid gap-6">{children}</div>
        </ScrollReveal>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="font-sans min-h-screen relative">
      <GlobalBackground />
      
      {/* Dedicated Mouse Spotlight - Subtle & Harmonious */}
      <div className="fixed inset-0 pointer-events-none z-50">
        <InteractiveSpotlight strength={180} className="opacity-60" />
      </div>
      
      {/* Hero */}
      <header className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-2 items-center gap-10"
          >
            <div>
              <div className="inline-flex items-center gap-2 text-xs tracking-wide uppercase text-muted mb-3">
                <Sparkles size={14} className="text-accent" />
                <span>Full-stack Developer — Vietnam</span>
              </div>
              <Parallax offset={24}>
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  Xin chào, mình là <span className="text-gradient">tuil4tu</span>
                </h1>
              </Parallax>
              <p className="mt-4 text-base md:text-lg text-muted max-w-[60ch]">
                Chuyên gia phát triển <span className="text-accent">Full-stack</span> đam mê tạo ra những sản phẩm web hiện đại với <span className="text-accent">TypeScript</span>, <span className="text-accent">Next.js</span> và kiến trúc sạch. Đã hoàn thành <span className="text-primary">50+ dự án</span> và đạt <span className="text-success">3 giải thưởng</span> hackathon.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <Enhanced3DButton href="#projects" variant="primary">
                  {(isHovered) => (
                    <>
                      Xem dự án <AnimatedArrow size={16} isHovered={isHovered} />
                    </>
                  )}
                </Enhanced3DButton>
                
                <Enhanced3DButton href="#contact" variant="secondary">
                  {(isHovered) => (
                    <>
                      <AnimatedMail size={16} isHovered={isHovered} /> Liên hệ
                    </>
                  )}
                </Enhanced3DButton>
                
                <Enhanced3DButton href="/cv" variant="outline">
                  {(isHovered) => (
                    <>
                      <AnimatedDownload size={16} isHovered={isHovered} /> Tải CV
                    </>
                  )}
                </Enhanced3DButton>
              </div>
              <div className="mt-6 flex items-center gap-4 text-muted">
                <a href="https://github.com/tuil4tu" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">
                  <Github />
                </a>
                <a href="https://linkedin.com/in/tuil4tu" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">
                  <Linkedin />
                </a>
                <a href="#contact" className="hover:text-foreground transition-colors">
                  <Mail />
                </a>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative lg:ml-auto w-full max-w-[500px]"
            >
              <div className="absolute -inset-6 bg-gradient-to-tr from-primary/20 via-accent/10 to-transparent blur-2xl rounded-full" />
              <div className="grid gap-4">
                <div className="flex items-center gap-4">
                  <Parallax offset={-16}>
                    <AvatarOrb size={120} />
                  </Parallax>
                  <div className="flex flex-col gap-2 text-sm">
                    <div className="flex items-center gap-2 text-muted">
                      <MapPin size={14} />
                      <span>TP.HCM, Việt Nam</span>
                    </div>

                    <div className="flex items-center gap-2 text-success">
                      <Star size={14} />
                      <span>Có sẵn cho freelance</span>
                    </div>
                  </div>
                </div>
                <ScrollReveal delay={0.4}>
                  <TerminalCard />
                </ScrollReveal>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </header>

      {/* Stats */}
      <section className="py-20 border-t border-border relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/3 via-transparent to-accent/3" />
        <div className="max-w-6xl mx-auto px-6 md:px-10 relative">
          <ScrollReveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: Code2, value: "50+", label: "Dự án hoàn thành", description: "Web apps & Libraries" },
                { icon: Trophy, value: "3", label: "Giải thưởng", description: "Hackathon winners" },
                { icon: Users, value: "25+", label: "Khách hàng", description: "Satisfied clients" },
                { icon: Star, value: "4.9", label: "Đánh giá", description: "Average rating" }
              ].map((stat, i) => (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <StatCard icon={stat.icon} value={stat.value} label={stat.label} description={stat.description} />
                </ScrollReveal>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Skills */}
      <Section id="skills" title="Kỹ năng & Công nghệ">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[{
              icon: <Code2 className="text-primary" />, title: "Frontend", items: ["React 19", "Next.js 15", "TypeScript", "Tailwind CSS", "Framer Motion", "Zustand"]
            }, {
              icon: <Cpu className="text-accent" />, title: "Backend", items: ["Node.js", "Express", "Prisma", "PostgreSQL", "MongoDB", "Redis"]
            }, {
              icon: <Zap className="text-warning" />, title: "DevOps", items: ["Docker", "Vercel", "GitHub Actions", "AWS", "Nginx", "Linux"]
            }, {
              icon: <BookOpen className="text-success" />, title: "Khác", items: ["Clean Architecture", "TDD", "Microservices", "GraphQL", "WebSockets", "SEO"]
            }].map((s, i) => (
              <SpringCard key={i} className="h-full">
                <div className="glass rounded-xl p-6 border border-border/50 backdrop-blur-sm bg-card/90 h-full hover:border-primary/50 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    {s.icon}
                    <h3 className="font-semibold text-lg">{s.title}</h3>
                  </div>
                  <ul className="text-sm text-muted space-y-3">
                    {s.items.map((it) => (
                      <li key={it} className="flex items-center gap-2 hover:text-foreground transition-colors">
                        <div className="w-1.5 h-1.5 rounded-full bg-current opacity-60" />
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              </SpringCard>
            ))}
        </div>
      </Section>

      {/* Experience */}
      <Section id="experience" title="Kinh nghiệm làm việc">
        <div className="max-w-3xl">
          <TimelineItem
            year="2024"
            title="Senior Full-stack Developer"
            company="TechViet Solutions"
            description="Phát triển và duy trì hệ thống e-commerce xử lý 10K+ giao dịch/ngày. Tối ưu hóa hiệu năng giảm 40% thời gian tải trang. Dẫn dắt team 5 developers junior."
            skills={["Next.js", "TypeScript", "PostgreSQL", "Redis", "Docker"]}
          />
          <TimelineItem
            year="2023-2024"
            title="Freelance Developer"
            description="Phát triển 15+ dự án web cho các startup và SME. Chuyên sâu về JAMstack và serverless architecture. Đạt 100% khách hàng hài lòng."
            skills={["React", "Node.js", "Prisma", "Vercel", "Stripe"]}
          />
          <TimelineItem
            year="2023"
            title="Frontend Developer Intern"
            company="Innovation Lab"
            description="Xây dựng dashboard analytics với 50+ components tái sử dụng. Implement real-time data visualization với D3.js và WebSocket."
            skills={["React", "D3.js", "WebSocket", "Chart.js"]}
            isLast
          />
        </div>
      </Section>

      {/* Education & Achievements */}
      <Section id="education" title="Học vấn & Thành tích">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <GraduationCap className="text-primary" size={20} />
              Học vấn
            </h3>
            <div className="space-y-4">
              <div className="glass rounded-lg p-4 border border-border">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-medium">Cử nhân Kĩ thuật phần mềm</h4>
                  <span className="badge badge-primary">2022-2026</span>
                </div>
                <p className="text-sm text-muted">Đại Công nghệ thông tin - ĐHQG TP.HCM</p>
                <p className="text-sm text-muted mt-1">GPA: 3.8/4.0 | Top 10% lớp</p>
              </div>
              <div className="glass rounded-lg p-4 border border-border">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-medium">Google Cloud Certified</h4>
                  <span className="badge badge-success">2024</span>
                </div>
                <p className="text-sm text-muted">Professional Cloud Developer</p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Trophy className="text-accent" size={20} />
              Giải thưởng
            </h3>
            <div className="space-y-4">
              <div className="glass rounded-lg p-4 border border-border">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-medium">🥇 Best Young Developer 2024</h4>
                  <span className="badge badge-warning">2024</span>
                </div>
                <p className="text-sm text-muted">Vietnam Tech Awards</p>
              </div>
              <div className="glass rounded-lg p-4 border border-border">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-medium">🏆 Hackathon Winner</h4>
                  <span className="badge badge-primary">2023-2024</span>
                </div>
                <p className="text-sm text-muted">3x Champion: Code Tour, DevFest, TechFest</p>
              </div>
              <div className="glass rounded-lg p-4 border border-border">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-medium">⭐ Open Source Contributor</h4>
                  <span className="badge badge-success">2023+</span>
                </div>
                <p className="text-sm text-muted">500+ commits to popular libraries</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Projects */}
      <Section id="projects" title="Dự án nổi bật">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "EcoCommerce Platform",
              desc: "Nền tảng thương mại điện tử xanh với AI recommendation và blockchain payment. Xử lý 10K+ giao dịch/ngày.",
              stack: ["Next.js 15", "TypeScript", "Prisma", "PostgreSQL", "Stripe"],
              link: "https://ecocommerce.demo",
              status: "🚀 Production",
              metrics: "10K+ users"
            },
            {
              name: "DevFlow - Project Management",
              desc: "Tool quản lý dự án cho dev teams với realtime collaboration, AI code review và integrtion với Git.",
              stack: ["React", "Node.js", "WebSocket", "MongoDB", "Docker"],
              link: "https://devflow.demo",
              status: "⭐ Award Winner",
              metrics: "500+ teams"
            },
            {
              name: "VietAI - Chatbot Platform",
              desc: "Platform tạo chatbot AI tiếng Việt cho businesses. Support voice, image và sentiment analysis.",
              stack: ["Next.js", "Python", "TensorFlow", "Redis", "AWS"],
              link: "https://vietnai.demo",
              status: "🔥 Trending",
              metrics: "1M+ messages"
            },
            {
              name: "CryptoTracker Pro",
              desc: "Ứng dụng theo dõi cryptocurrency với real-time charts, portfolio management và trading signals.",
              stack: ["React Native", "TypeScript", "GraphQL", "Firebase"],
              link: "https://cryptotracker.demo",
              status: "📱 Mobile App",
              metrics: "50K+ downloads"
            },
            {
              name: "SmartHealth Dashboard",
              desc: "Dashboard y tế thông minh với IoT integration, AI diagnosis và telemedicine features.",
              stack: ["Vue.js", "Node.js", "InfluxDB", "WebRTC", "MQTT"],
              link: "https://smarthealth.demo",
              status: "🏥 Healthcare",
              metrics: "100+ hospitals"
            },
            {
              name: "EduTech Learning Platform",
              desc: "Platform học tập online với interactive courses, live streaming và AR/VR experiences.",
              stack: ["Next.js", "WebRTC", "Three.js", "MongoDB", "AWS"],
              link: "https://edutech.demo",
              status: "📚 Education",
              metrics: "25K+ students"
            }
          ].map((p) => (
            <HolographicCard key={p.name} className="h-full">
              <a href={p.link} target="_blank" rel="noopener noreferrer" className="block h-full group">
                <div className="h-full flex flex-col">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300">{p.name}</h3>
                    <ExternalLink size={18} className="text-muted group-hover:text-primary transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0" />
                  </div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="badge badge-primary">{p.status}</span>
                    <span className="badge badge-success">{p.metrics}</span>
                  </div>
                  <p className="text-muted mb-6 flex-1 leading-relaxed">{p.desc}</p>
                  <div className="flex gap-2 flex-wrap">
                    {p.stack.map((s) => (
                      <span key={s} className="badge bg-card/50 text-foreground border-border/50 hover:border-primary/50 transition-colors">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            </HolographicCard>
          ))}
        </div>
      </Section>

      {/* Blog & Articles */}
      <Section id="blog" title="Blog & Bài viết">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Building Scalable Next.js Apps in 2024",
              excerpt: "Deep dive vào performance optimization, caching strategies và deployment best practices cho Next.js applications.",
              readTime: "8 min read",
              date: "Dec 2024",
              tags: ["Next.js", "Performance", "React"],
              link: "/blog/nextjs-scalable-2024"
            },
            {
              title: "TypeScript Advanced Patterns",
              excerpt: "Khám phá advanced TypeScript patterns như conditional types, mapped types và template literal types trong real-world projects.",
              readTime: "12 min read", 
              date: "Nov 2024",
              tags: ["TypeScript", "Advanced", "Patterns"],
              link: "/blog/typescript-patterns"
            },
            {
              title: "Microservices với Node.js & Docker",
              excerpt: "Hướng dẫn xây dựng microservices architecture với Node.js, Docker, và event-driven communication.",
              readTime: "15 min read",
              date: "Oct 2024", 
              tags: ["Microservices", "Docker", "Node.js"],
              link: "/blog/microservices-nodejs"
            }
          ].map((article) => (
            <motion.article
              key={article.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass rounded-xl p-6 border border-border hover:border-primary/50 transition-colors"
            >
              <div className="flex items-center justify-between text-xs text-muted mb-3">
                <span>{article.date}</span>
                <span>{article.readTime}</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 hover:text-primary transition-colors">
                <a href={article.link}>{article.title}</a>
              </h3>
              <p className="text-sm text-muted mb-4">{article.excerpt}</p>
              <div className="flex gap-1.5 flex-wrap">
                {article.tags.map((tag) => (
                  <span key={tag} className="badge badge-primary text-xs">{tag}</span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" title="Liên hệ & Hợp tác">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="glass rounded-xl p-6 border border-border">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Briefcase className="text-primary" size={20} />
              Dịch vụ
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span>Full-stack Web Development</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-accent" />
                <span>Mobile App Development (React Native)</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-success" />
                <span>API Development & Integration</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-warning" />
                <span>DevOps & Cloud Deployment</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-destructive" />
                <span>Technical Consulting & Code Review</span>
              </div>
            </div>
          </div>
          
          <div className="glass rounded-xl p-6 border border-border">
            <h3 className="text-lg font-semibold mb-4">Thông tin liên hệ</h3>
            <div className="space-y-4">
              <a href="mailto:hello@tuil4tu.dev" className="flex items-center gap-3 text-muted hover:text-primary transition-colors">
                <Mail size={18} />
                <span>hello@tuil4tu.dev</span>
              </a>
              <a href="https://github.com/tuil4tu" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-muted hover:text-primary transition-colors">
                <Github size={18} />
                <span>github.com/tuil4tu</span>
              </a>
              <a href="https://linkedin.com/in/tuil4tu" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-muted hover:text-primary transition-colors">
                <Linkedin size={18} />
                <span>linkedin.com/in/tuil4tu</span>
              </a>
            </div>
            
            <div className="mt-6 p-4 bg-primary/5 border border-primary/20 rounded-lg">
              <div className="flex items-center gap-2 text-primary text-sm font-medium mb-1">
                <Star size={14} />
                Trạng thái
              </div>
              <p className="text-sm text-muted">
                🟢 Sẵn sàng nhận dự án mới | Phản hồi trong 24h
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="mt-24 border-t border-border relative">
        <div className="absolute inset-0 bg-gradient-to-t from-card/10 to-transparent" />
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-16 relative">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-lg font-semibold mb-3 text-gradient">tuil4tu</h3>
              <p className="text-sm text-muted mb-4 max-w-md">
                Full-stack Developer 18 tuổi chuyên tạo ra những sản phẩm web hiện đại, 
                hiệu năng cao và user-friendly. Luôn cập nhật với công nghệ mới nhất.
              </p>
              <div className="flex items-center gap-4">
                <a href="https://github.com/tuil4tu" target="_blank" rel="noreferrer" className="text-muted hover:text-primary transition-colors">
                  <Github size={18} />
                </a>
                <a href="https://linkedin.com/in/tuil4tu" target="_blank" rel="noreferrer" className="text-muted hover:text-primary transition-colors">
                  <Linkedin size={18} />
                </a>
                <a href="mailto:hello@tuil4tu.dev" className="text-muted hover:text-primary transition-colors">
                  <Mail size={18} />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-medium mb-3">Dịch vụ</h4>
              <div className="space-y-2 text-sm text-muted">
                <div><a href="#" className="hover:text-primary transition-colors">Web Development</a></div>
                <div><a href="#" className="hover:text-primary transition-colors">Mobile Apps</a></div>
                <div><a href="#" className="hover:text-primary transition-colors">API Development</a></div>
                <div><a href="#" className="hover:text-primary transition-colors">Consulting</a></div>
              </div>
            </div>
            
            <div>
              <h4 className="font-medium mb-3">Liên kết</h4>
              <div className="space-y-2 text-sm text-muted">
                <div><a href="#projects" className="hover:text-primary transition-colors">Dự án</a></div>
                <div><a href="#blog" className="hover:text-primary transition-colors">Blog</a></div>
                <div><a href="/cv" className="hover:text-primary transition-colors">CV</a></div>
                <div><a href="#contact" className="hover:text-primary transition-colors">Liên hệ</a></div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-muted">
              © {new Date().getFullYear()} tuil4tu. Built with ❤️ using Next.js, TypeScript & Tailwind CSS.
            </p>
            <div className="flex items-center gap-4 text-xs text-muted">
              <span>Made in Vietnam 🇻🇳</span>
              <span>•</span>
              <span>Open for opportunities</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
