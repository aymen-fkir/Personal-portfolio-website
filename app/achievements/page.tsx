import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Quote } from "lucide-react"

export default function AchievementsPage() {
  const journeySteps = [
    {
      year: "2018",
      title: "Started Programming Journey",
      description: "Began learning python and game development",
      type: "enthusiast",
      icon: "🎮",
    },
    {
      year: "2022",
      title: "Started College",
      description: "Pursued a Bachelor's degree in Computer Science",
      type: "education",
      icon: "🎓",
    },
    {
      year: "2024",
      title: "First Internship",
      description: `Data Scientist at Deepvolt: built a GeoPandas pipeline to map optimal EV charging stations in Istanbul  
      and deployed a scalable recommendation system with AWS Lambda + API Gateway (2.4s avg. response).`,
      type: "work",
      icon: "💼",
    },
    {
      year: "2025",
      title: "Second Internship",
      description: `Built a scalable ETL pipeline (20+ GB FCD, £40K savings), \n
      created a traffic upscaling model (R²=0.9, MAPE=0.35), and enhanced DeepVolt’s DLIA model R² by 25% \n 
      my work completed their MVP and helped secure their first client`,
      type: "work",
      icon: "💼",
    },
    {
      year: "2025",
      title: "Graduated",
      description: "Graduated with a Bachelor's degree in Computer Science",
      type: "achievement",
      icon: "🎓",
    },
  ]

  const achievements = [
    {
      image: "/dataquest.jpg",
      category: "Competition",
      title: "3rd Place in DataQuest Challenge",
      author: "IEEE INSAT SB",
    },
    {
      image: "/iastam.jpg",
      category: "Competition",
      title: "3rd Place in IASTAM Hackathon",
      author: "IEEE IAS ESSTHS SB",
    },
    {
      image: "/nashvile.jpg",
      category: "Recognition",
      title: "Recognition for Contributions to IAS Global",
      author: "IAS CHAPTER BOARD",
    },
    {
      image: "/pes_challenge_winner.jpg",
      category: "Competition",
      title: "1st Place in PESTAM Technical Challenge",
      author: "IEEE PES ESSTHS",
    },
    {
      image: "/chair_ias_enig.jpg",
      category: "Leadership",
      title: "Chair of IAS ENIG",
      author: "IEEE ENIG SB",
    },
    {
      image: "/workshop_at_Enig.jpg",
      category: "Knowledge Sharing",
      title: "Hosted Deep Learning WorkShop",
      author: "IEEE ENIG IAS",
    },
  ]

  const recognitions = [
    {
      quote:
        "I had the pleasure of working with Aymen during his internship at DeepVolt, and he proved to be an exceptional addition to our team. Technically gifted and consistently up-to-date with the latest industry trends, Aymen brought fresh insights and innovative ideas to every project he worked on. Beyond his technical prowess, he demonstrated a collaborative spirit and a positive attitude that made him a true team player. His dedication, eagerness to learn, and ability to adapt quickly were invaluable to our team. I highly recommend Aymen for any opportunity where his skills and work ethic can shine.",
      author: "Ala Chalghaf",
      position: "Lead Data Scientist",
      company: "Deepvolt",
      avatar: "/ala.jpeg",
    },
    
  ]

  return (
    <div className="min-h-screen relative bg-nature-pattern">
      <div className="relative z-10">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-6xl mx-auto">

            {/* My Journey Section - Roadmap Style */}
            <section className="mb-20">
              <h2 className="text-3xl font-bold mb-12 text-center" style={{ color: "#0D4715" }}>
                My Journey
              </h2>
              <div className="relative">
                {/* Timeline Line */}
                <div
                  className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full rounded-full"
                  style={{ backgroundColor: "#41644A" }}
                ></div>

                <div className="space-y-12">
                  {journeySteps.map((step, index) => (
                    <div
                      key={index}
                      className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                    >
                      {/* Content Card */}
                      <div className="w-5/12">
                        <Card
                          className="backdrop-blur-sm border hover:shadow-lg transition-all duration-300"
                          style={{
                            backgroundColor: "rgba(241, 240, 233, 0.9)",
                            borderColor: "rgba(65, 100, 74, 0.3)",
                          }}
                        >
                          <CardContent className="p-6">
                            <div className="flex items-center gap-3 mb-3">
                              <span className="text-2xl">{step.icon}</span>
                              <Badge
                                className="text-xs"
                                style={{
                                  backgroundColor: "#E9762B",
                                  color: "#FFFFFF",
                                }}
                              >
                                {step.year}
                              </Badge>
                            </div>
                            <h3 className="text-lg font-semibold mb-2" style={{ color: "#0D4715" }}>
                              {step.title}
                            </h3>
                            <p className="text-sm" style={{ color: "#41644A" }}>
                              {step.description}
                            </p>
                          </CardContent>
                        </Card>
                      </div>

                      {/* Timeline Dot */}
                      <div className="w-2/12 flex justify-center">
                        <div
                          className="w-4 h-4 rounded-full border-4 z-10"
                          style={{
                            backgroundColor: "#E9762B",
                            borderColor: "#FFFFFF",
                            boxShadow: "0 0 0 4px #41644A",
                          }}
                        ></div>
                      </div>

                      {/* Empty Space */}
                      <div className="w-5/12"></div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* My Achievements Section */}
            <section className="mb-20">
              <h2 className="text-3xl font-bold mb-12 text-center" style={{ color: "#0D4715" }}>
                My Achievements
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {achievements.map((achievement, index) => (
                  <div key={index} className="achievement-card">
                    <div className="achievement-card-image">
                      <img
                        src={achievement.image || "/placeholder.svg"}
                        alt={achievement.title}
                        className="w-full h-full object-cover rounded-t-md hover:scale-98 transition-transform duration-200"
                      />
                    </div>
                    <div className="achievement-category">{achievement.category}</div>
                    <div className="achievement-heading">
                      {achievement.title}
                      <div className="achievement-author">
                        By <span className="achievement-name">{achievement.author}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Recognition Section */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-12 text-center" style={{ color: "#0D4715" }}>
                Recognition from Employers
              </h2>
              <div className="flex flex-wrap justify-center gap-8">
                {recognitions.map((recognition, index) => (
                  <Card
                    key={index}
                    className="recognition-card backdrop-blur-sm border hover:shadow-xl transition-all duration-300 relative overflow-hidden"
                    style={{
                      backgroundColor: "rgba(241, 240, 233, 0.95)",
                      borderColor: "rgba(65, 100, 74, 0.3)",
                    }}
                  >
                    <CardContent className="p-6">
                      {/* Quote Icon */}
                      <Quote className="absolute top-4 right-4 opacity-20" size={32} style={{ color: "#E9762B" }} />

                      {/* Quote Text */}
                      <p className="text-sm leading-relaxed mb-6 italic" style={{ color: "#0D4715" }}>
                        "{recognition.quote}"
                      </p>

                      {/* Author Info */}
                      <div className="flex items-center gap-3">
                        <img
                          src={recognition.avatar || "/placeholder.svg"}
                          alt={recognition.author}
                          className="w-12 h-12 rounded-full object-cover border-2"
                          style={{ borderColor: "#E9762B" }}
                        />
                        <div>
                          <h4 className="font-semibold text-sm" style={{ color: "#0D4715" }}>
                            {recognition.author}
                          </h4>
                          <p className="text-xs" style={{ color: "#41644A" }}>
                            {recognition.position}
                          </p>
                          <p className="text-xs font-medium" style={{ color: "#E9762B" }}>
                            {recognition.company}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
