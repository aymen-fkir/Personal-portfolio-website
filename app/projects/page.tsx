import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"

export default function ProjectsPage() {
  const projects = [
    {
      title: "AI-Powered E-commerce Analytics Dashboard",
      githubUrl: "https://github.com/aymen-fkir/AI-Powered-E-commerce-Analytics/tree/main",
      description: `This project is a data engineering solution that creates an entire e-commerce analytics system. It starts by generating and enhancing synthetic data, then uses a robust ETL pipeline to process and analyze it.`,
      technologies: ["Python", "Polars", "PostgreSQL", "Supabase", "Next.js", "Ollama", "llama cpp", "Mockaroo", "Ngrok", "Vercel"],
      featured: true,
      status: "COMPLETED",
      statusClass: "status-completed",
    },
    {
      title: "SensorFusion-Twin",
      githubUrl: "https://github.com/aymen-fkir/SensorFusion-Twin/tree/main",
      description: "A comprehensive project for real-time smart building monitoring. It integrates IoT sensors with a robust backend, an AI/ML model for data analysis, and an ETL pipeline to transform sensor data for a digital twin platform.",
      technologies: ["FastAPI","Docker","TensorFlow","Hugging Face","Python","Supabase","Back4App"],
      featured: true,
      status: "COMPLETED",
      statusClass: "status-completed",
    },
    {
      title: "Smart Twitter Bot",
      githubUrl: "https://github.com/aymen-fkir/twitter-bot",
      description: "An automated project designed to capture and analyze real-time trending topics. The system integrates web scraping, API requests, and data manipulation to gather and process insights for social media interaction.",
      technologies: ["Python","Google Custom Search API","PyTrends","Pandas","Langchain"],
      featured: false,
      status: "COMPLETED",
      statusClass: "status-completed",
    },

    {
      title: "MindForge DevTool",
      githubUrl: "https://github.com/aymen-fkir/mindforge_devtool",
      projectType: "AI-Powered Research & Planning Assistant",
      description: "MindGather is an intelligent assistant designed to streamline project planning. It automates information gathering from PDFs and the web, and uses an AI to generate detailed technical implementation plans based on a user's proposed solution.",
      technologies: ["Python","Google Gemini AI","Google Custom Search API","PyPDF2","Scrape.do API","Gradio","Langchain"],
      featured: false,
      status: "COMPLETED",
      statusClass: "status-completed",
    },
    {
      title: "Toxic Comment Classification and Analysis",
      githubUrl: "https://github.com/aymen-fkir/youtube_comment_classifier",
      projectType: "AI/ML & Data Analysis",
      description: "A comprehensive system for analyzing and classifying YouTube comments to identify toxic content. The project processes comments, classifies them using a machine learning model, and generates insightful visualizations of toxicity scores.",
      technologies: ["Python","Hugging Face API","YouTube API","OpenAI API","pandas","google-api-python-client"],
      featured: false,
      status: "COMPLETED",
      statusClass: "status-completed",
    }
    
    
  ]

  const featuredProjects = projects.filter((project) => project.featured)
  const otherProjects = projects.filter((project) => !project.featured)

  return (
    <div className="min-h-screen relative bg-nature-pattern">
      <div className="relative z-10">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-6xl mx-auto">

            {/* Featured Projects */}
            <section className="mb-16">
              <h2 className="text-2xl font-semibold mb-8" style={{ color: "#0D4715" }}>
                Featured Projects
              </h2>
              <div className="grid lg:grid-cols-2 gap-8">
                {featuredProjects.map((project, index) => (
                  <div key={index} className="pixel-card">
                    <div className="pixel-card-header flex justify-between items-center">
                      <span>{project.title.toUpperCase()}</span>
                      <Button className="pixel-button" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-3 w-3 mr-1" />
                          CODE
                        </a>
                      </Button>
                    </div>
                    <div className="pixel-card-body">
                      <p>Mission: {project.description}</p>
                      <p>
                        Tech Stack: <span className="font-bold">{project.technologies.slice(0, 3).join(", ")}</span>
                        {project.technologies.length > 3 && (
                          <span className="font-bold"> +{project.technologies.length - 3} more</span>
                        )}
                      </p>
                      <p>
                        Status: <span className={project.statusClass}>{project.status}</span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Other Projects */}
            <section>
              <h2 className="text-2xl font-semibold mb-8" style={{ color: "#0D4715" }}>
                Other Projects
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {otherProjects.map((project, index) => (
                  <div key={index} className="pixel-card-small">
                    <div className="pixel-card-header-small">{project.title.toUpperCase()}</div>
                    <div className="pixel-card-body">
                      <p className="text-sm leading-tight">{project.description}</p>
                      <p className="text-xs mt-2">
                        Stack: <span className="font-bold">{project.technologies.slice(0, 2).join(", ")}</span>
                        {project.technologies.length > 2 && (
                          <span className="font-bold"> +{project.technologies.length - 2}</span>
                        )}
                      </p>
                      <div className="flex justify-between items-center mt-3">
                        <span className={`text-xs ${project.statusClass}`}>{project.status}</span>
                        <Button className="pixel-button-small" asChild>
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="h-2 w-2 mr-1" />
                            CODE
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
