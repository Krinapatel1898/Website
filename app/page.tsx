import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Download, Github, Linkedin, Mail, Phone } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]">
      {/* Hero Section with Gradient Background */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-background/80 -z-10" />
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Krina Patel</h1>
                <p className="text-xl text-muted-foreground">Full Stack Developer</p>
              </div>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Experienced software engineer specializing in full-stack development with expertise in C#, .NET,
                Angular, and database management.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/contact">
                  <Button className="w-full min-[400px]:w-auto">
                    Contact Me <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Button variant="outline" className="w-full min-[400px]:w-auto">
                  Download Resume <Download className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="flex items-center gap-4 mt-4">
                <a
                  href="https://linkedin.com/in/krina-patel"
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
              <div className="relative aspect-square overflow-hidden rounded-full border bg-muted p-2">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/50 to-primary-foreground/20 opacity-50" />
                <img
                  alt="Krina Patel"
                  className="aspect-square object-cover"
                  height="500"
                  src="/profile.jpg"
                  width="600"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-12 md:py-16 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Technical Skills</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                A comprehensive set of skills and technologies I work with
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border bg-card p-4 shadow-sm">
              <h3 className="font-semibold">Programming Languages</h3>
              <p className="text-sm text-muted-foreground mt-2">
                C#, Python, C/C++, Java, HTML5, CSS3, JavaScript, node.js, React JS, Angular, Hibernate
              </p>
            </div>
            <div className="rounded-lg border bg-card p-4 shadow-sm">
              <h3 className="font-semibold">Database</h3>
              <p className="text-sm text-muted-foreground mt-2">
                MS SQL Server, Oracle, MySQL, MongoDB, PostgreSQL, NoSQL
              </p>
            </div>
            <div className="rounded-lg border bg-card p-4 shadow-sm">
              <h3 className="font-semibold">Frameworks and Libraries</h3>
              <p className="text-sm text-muted-foreground mt-2">
                ASP.Net Core, Microservices, Spring (Boot, Cloud, MVC), RESTful API, JSF, Servlets, JSP
              </p>
            </div>
            <div className="rounded-lg border bg-card p-4 shadow-sm">
              <h3 className="font-semibold">Build Tools</h3>
              <p className="text-sm text-muted-foreground mt-2">
                Maven, Gradle, JUnit, SonarQube, Docker, Jenkins, Jira, Elasticsearch, Azure DevOps, RabbitMQ, Flask
              </p>
            </div>
            <div className="rounded-lg border bg-card p-4 shadow-sm">
              <h3 className="font-semibold">Cloud Platforms</h3>
              <p className="text-sm text-muted-foreground mt-2">
                Amazon Web Services (IAM, EC2, S3, Elastic Load Balancing, Elastic Beanstalk, Dynamo DB)
              </p>
            </div>
            <div className="rounded-lg border bg-card p-4 shadow-sm">
              <h3 className="font-semibold">Methodology & Version Control</h3>
              <p className="text-sm text-muted-foreground mt-2">SDLC, Waterfall, Agile, Git, GitHub, Bitbucket</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

