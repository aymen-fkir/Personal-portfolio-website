import type React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin, Mail, ArrowRight, Cloud, BarChart, Settings,Database, ArrowDown, Download } from "lucide-react"

function hexToRgba(hex: string, alpha: number) {
  const cleanHex = hex.replace("#", "").slice(0, 6); // drop alpha if present
  const r = parseInt(cleanHex.slice(0, 2), 16);
  const g = parseInt(cleanHex.slice(2, 4), 16);
  const b = parseInt(cleanHex.slice(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}


const technicalSkills = [
  { name: "Nextjs", color: "#E9762B" },
  { name: "Python", color: "#41644A" },
  { name: "AWS", color: "#0D4715" },
  { name: "Docker", color: "#E9762B" },
  { name: "Git", color: "#232129ff" },
  { name: "TensorFlow", color: "#d18b34ff" },
  { name: "PostgreSQL", color: "#5cd4c6ff" },
  { name: "SQL", color: "#E9762B" },
  { name: "Tailwind CSS", color: "#0D4715" },
  { name: "Spark", color: "#bc852dff" },
  { name: "DataBricks", color: "#e92b2bff" },
]

const SkillBadge = ({ skill }: { skill: (typeof technicalSkills)[0] }) => (
  <span
    className="text-lg font-medium px-4 py-2 rounded-full transition-all duration-300 hover:scale-105 cursor-pointer relative group"
    style={{
      backgroundColor: hexToRgba(skill.color, 0.12),
      color: skill.color,
      border: `1px solid rgba(${parseInt(skill.color.slice(1, 3), 16)}, 
                              ${parseInt(skill.color.slice(3, 5), 16)}, 
                              ${parseInt(skill.color.slice(5, 7), 16)}, 0.3)`,
    }}
  >
    {skill.name}
    
  </span>
)

export default function HomePage() {
const services = [
  {
    icon: Database,
    title: "Data Pipeline Development",
    description: "Designing and implementing scalable ETL/ELT pipelines for structured and unstructured data.",
    color: "from-blue-500 to-blue-600",
    delay: "0s",
  },
  {
    icon: Settings,
    title: "Data Infrastructure",
    description: "Building and maintaining reliable data warehouses and lakes using tools like Spark.",
    color: "from-indigo-600 to-indigo-700",
    delay: "0.2s",
  },
  {
    icon: Cloud,
    title: "Cloud Data Engineering",
    description: "Orchestrating data workflows on cloud platforms",
    color: "from-purple-700 to-purple-800",
    delay: "0.4s",
  },
  {
    icon: BarChart,
    title: "Data Quality & Governance",
    description: "Ensuring clean, consistent, and secure data through validation, monitoring, and compliance practices.",
    color: "from-teal-600 to-teal-700",
    delay: "0.6s",
  },
]
  

  return (
    <div className="min-h-screen relative bg-nature-pattern">
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Side - Text Content */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <h1 className="text-6xl lg:text-7xl font-bold leading-tight" style={{ color: "#0D4715" }}>
                    Hi I'm{" "}
                    <span
                      className="bg-gradient-to-r bg-clip-text text-transparent"
                      style={{
                        backgroundImage: "linear-gradient(45deg, #E9762B, #41644A)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      Aymen
                    </span>
                  </h1>
                  <p className="text-xl mb-4" style={{ color: "#41644A" }}>
                    Data Engineer
                  </p>
                  <p className="text-lg max-w-lg leading-relaxed" style={{ color: "#0D4715" }}>
                    Passionate about building scalable systems that transform raw information into actionable insights, 
                    driving smarter decisions and impactful solutions.
                  </p>
                </div>

                <div className="flex gap-4 mb-8">
                  <Button
                    variant="outline"
                    size="icon"
                    className="border-2 hover:bg-opacity-20 bg-transparent"
                    style={{
                      borderColor: "#41644A",
                      color: "#41644A",
                      backgroundColor: "transparent",
                    }}
                  >
                    <a href="https://github.com/aymen-fkir"><Github className="h-5 w-5" /></a>
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="border-2 hover:bg-opacity-20 bg-transparent"
                    style={{
                      borderColor: "#41644A",
                      color: "#41644A",
                      backgroundColor: "transparent",
                    }}
                  >
                    <a href="https://www.linkedin.com/in/aymen-fkir/"><Linkedin className="h-5 w-5" /></a>
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="border-2 hover:bg-opacity-20 bg-transparent"
                    style={{
                      borderColor: "#41644A",
                      color: "#41644A",
                      backgroundColor: "transparent",
                    }}
                  >
                    <a href="mailto:aymenfkir23@gmail.com"><Mail className="h-5 w-5" /></a>
                  </Button>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    asChild
                    size="lg"
                    className="text-white hover:opacity-90"
                    style={{ backgroundColor: "#E9762B" }}
                  >
                    <Link href="/projects">
                      View My Work <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  {/*when it cliecke it shouldd downloa my cv*/}
                  <Button
                    asChild
                    size="lg"
                    className="text-white hover:opacity-90"
                    style={{ backgroundColor: "#09451cff" }}
                  >
                    <a href="/Aymen_Fkir_Resume.pdf" download>
                      Download CV <Download className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                  
                </div>
                
              </div>

              {/* Right Side - Image */}
              <div className="flex justify-center lg:justify-end">
                <div className="relative">
                  <div
                    className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 shadow-2xl"
                    style={{ borderColor: "rgba(233, 118, 43, 0.3)" }}
                  >
                    <img
                      src="/my_image.jpg"
                      alt="Aymen - Data Engeneer/Science"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Decorative elements */}
                  <div
                    className="absolute -top-4 -right-4 w-8 h-8 rounded-full opacity-80"
                    style={{ backgroundColor: "#E9762B" }}
                  ></div>
                  <div
                    className="absolute -bottom-6 -left-6 w-12 h-12 rounded-full opacity-60"
                    style={{ backgroundColor: "#41644A" }}
                  ></div>
                  <div
                    className="absolute top-1/2 -left-8 w-6 h-6 rounded-full opacity-70"
                    style={{ backgroundColor: "#0D4715" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="space-y-8">
              {/* Technical Proficiency */}
              <section className="mb-16">
                <div className="text-center mb-12">
                  <h2 className="animated-title technical">
                    <span className="title-word">
                      <span>T</span>
                      <span>e</span>
                      <span>c</span>
                      <span>h</span>
                      <span>n</span>
                      <span>i</span>
                      <span>c</span>
                      <span>a</span>
                      <span>l</span>
                    </span>
                    <span className="title-word">
                      <span>P</span>
                      <span>r</span>
                      <span>o</span>
                      <span>f</span>
                      <span>i</span>
                      <span>c</span>
                      <span>i</span>
                      <span>e</span>
                      <span>n</span>
                      <span>c</span>
                      <span>y</span>
                    </span>
                  </h2>
                  <div className="title-underline"></div>
                </div>
                <Card
                  className="backdrop-blur-sm border"
                  style={{
                    backgroundColor: "rgba(241, 240, 233, 0.8)",
                    borderColor: "rgba(65, 100, 74, 0.3)",
                  }}
                >
                  <CardContent className="p-6">
                    <div className="overflow-hidden">
                      <div className="flex animate-scroll whitespace-nowrap">
                        <div className="flex space-x-8 animate-scroll-content">
                          {technicalSkills.map((skill, index) => (
                            <SkillBadge key={`scroll-1-${index}`} skill={skill} />
                          ))}
                        </div>
                        <div className="flex space-x-8 animate-scroll-content ml-8">
                          {technicalSkills.map((skill, index) => (
                            <SkillBadge key={`scroll-2-${index}`} skill={skill} />
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* What I Do - Vertical Animated Cards */}
              <section className="mb-16">
                <div className="text-center mb-12">
                  <h2 className="animated-title services">
                    <span className="title-word">
                      <span>W</span>
                      <span>h</span>
                      <span>a</span>
                      <span>t</span>
                    </span>
                    <span className="title-word">
                      <span>I</span>
                    </span>
                    <span className="title-word">
                      <span>D</span>
                      <span>o</span>
                    </span>
                  </h2>
                  <div className="title-underline"></div>
                </div>
                <div className="space-y-6">
                  {services.map((service, index) => {
                    const IconComponent = service.icon
                    return (
                      <div
                        key={index}
                        className="service-card"
                        style={{ animationDelay: service.delay } as React.CSSProperties}
                      >
                        <div className="service-card-inner">
                          <div className="service-icon-container">
                            <div className={`service-icon bg-gradient-to-r ${service.color}`}>
                              <IconComponent className="h-8 w-8 text-white" />
                            </div>
                          </div>
                          <div className="service-content">
                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-description">{service.description}</p>
                          </div>
                          <div className="service-glow bg-gradient-to-r ${service.color}"></div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </section>

              {/* Interests Glass Cards */}

              <section className="mb-16">      
                  <div className="text-center mb-12">
                    <h2 className="animated-title services">
                      <span className="title-word">
                        <span>W</span>
                        <span>h</span>
                        <span>a</span>
                        <span>t</span>
                      </span>
                      <span className="title-word">
                        <span>I</span>
                      </span>
                      <span className="title-word">
                        <span>L</span>
                        <span>i</span>
                        <span>k</span>
                        <span>e</span>
                      </span>
                    </h2>
                    <div className="title-underline"></div>
                  </div>
                <div className="glass-container">
                  <div className="glass-card" data-text="Art" style={{ "--r": -15 } as React.CSSProperties}>
                    <img src="/art.jpg" alt="Art" className="glass-image" />
                  </div>
                  <div className="glass-card" data-text="Coding" style={{ "--r": 5 } as React.CSSProperties}>
                    <img src="/coding.jpg" alt="Coding" className="glass-image" />
                  </div>
                  <div className="glass-card" data-text="Traveling" style={{ "--r": 25 } as React.CSSProperties}>
                    <img src="/traveling.jpg" alt="Traveling" className="glass-image" />
                  </div>
                  <div className="glass-card" data-text="Data" style={{ "--r": -10 } as React.CSSProperties}>
                    <img src="/data.jpg" alt="Data" className="glass-image" />
                  </div>
                </div>
              </section>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
