import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Download, Github, Linkedin, Mail, Phone } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]">
      {/* Hero Section with Gradient Background */}
      <section className="relative py-20 md:py-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/55 via-background to-background/80 -z-10" />
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none transition-transform duration-500 ease-out transform hover:scale-105">Krina Patel</h1>
                <p className="text-1xl font-bold tracking-tighter sm:text-1xl xl:text-2xl/none transition-transform duration-500 ease-out transform hover:scale-105">Full Stack Developer</p>
              </div>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
              Software Engineer with 3+ years of experience building scalable web applications using C#, .NET, Java, and Spring Boot, with strong frontend skills in Angular and React, and solid expertise in SQL Server and database optimization.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/contact">
                  <Button className="w-full min-[400px]:w-auto">
                    Contact Me <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Button variant="outline" className="w-full min-[400px]:w-auto">
                    <a href="/Krina_Resume.pdf" download className="flex items-center">
                    Download Resume <Download className="ml-2 h-4 w-4" />
                    </a>
                </Button>
              </div>
              <div className="flex items-center gap-4 mt-4">
                <a
                  href="https://www.linkedin.com/in/krinapatel185/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
                </a>
                <a
                  href="https://github.com/Krinapatel1898"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
                </a>
                <a href="mailto:patelkrina185@gmail.com" aria-label="Email">
                  <Mail className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
                </a>
                <a href="tel:4804549878" aria-label="Phone">
                  <Phone className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
                </a>
              </div>
            </div>
            <div className="flex items-center justify-center">
            <div className="relative w-[220px] h-[220px] sm:w-[300px] sm:h-[3000px] md:w-[460px] md:h-[460px] overflow-hidden rounded-full border-4 border-primary">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-primary-foreground/20 opacity-60 rounded-full" />
                <img
                alt="Krina Patel"
                className="w-full h-auto object-cover transition-transform duration-500 ease-in-out transform hover:scale-125"
                src="/9898.jpg"
              />
            </div>
            </div>
          </div>
        </div>
      </section>
      {/* Skills Section */}
      <section className="relative py-12 md:py-16 bg-muted/50">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-background to-background/80 -z-10" />
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl transition-transform duration-500 ease-out transform hover:scale-105">Technical Skills</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                A comprehensive set of skills and technologies I work with
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border bg-card p-4 shadow-sm transition-transform duration-500 ease-out transform hover:scale-105">
              <h3 className="font-semibold transition-transform duration-500 ease-out transform hover:scale-105">Programming Languages</h3>
              <p className="text-sm text-muted-foreground mt-2">
                C#, Python, C/C++, Java, HTML5, CSS3, JavaScript, node.js, React JS, Angular, Hibernate
              </p>
            </div>
            <div className="rounded-lg border bg-card p-4 shadow-sm transition-transform duration-500 ease-out transform hover:scale-105">
              <h3 className="font-semibold transition-transform duration-500 ease-out transform hover:scale-105">Database</h3>
              <p className="text-sm text-muted-foreground mt-2">
                MS SQL Server, Oracle, MySQL, MongoDB, PostgreSQL, NoSQL
              </p>
            </div>
            <div className="rounded-lg border bg-card p-4 shadow-sm transition-transform duration-500 ease-out transform hover:scale-105">
              <h3 className="font-semibold transition-transform duration-500 ease-out transform hover:scale-105">Frameworks and Libraries</h3>
              <p className="text-sm text-muted-foreground mt-2">
                ASP.Net Core, Microservices, Spring (Boot, Cloud, MVC), RESTful API, JSF, Servlets, JSP
              </p>
            </div>
            <div className="rounded-lg border bg-card p-4 shadow-sm transition-transform duration-500 ease-out transform hover:scale-105">
              <h3 className="font-semibold transition-transform duration-500 ease-out transform hover:scale-105">Build Tools</h3>
              <p className="text-sm text-muted-foreground mt-2">
                Maven, Gradle, JUnit, SonarQube, Docker, Jenkins, Jira, Elasticsearch, Azure DevOps, RabbitMQ, Flask
              </p>
            </div>
            <div className="rounded-lg border bg-card p-4 shadow-sm transition-transform duration-500 ease-out transform hover:scale-105">
              <h3 className="font-semibold transition-transform duration-500 ease-out transform hover:scale-105">Cloud Platforms</h3>
              <p className="text-sm text-muted-foreground mt-2">
                Amazon Web Services (IAM, EC2, S3, Elastic Load Balancing, Elastic Beanstalk, Dynamo DB)
              </p>
            </div>
            <div className="rounded-lg border bg-card p-4 shadow-sm transition-transform duration-500 ease-out transform hover:scale-105">
              <h3 className="font-semibold transition-transform duration-500 ease-out transform hover:scale-105">Methodology & Version Control</h3>
              <p className="text-sm text-muted-foreground mt-2">SDLC, Waterfall, Agile, Git, GitHub, Bitbucket</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

