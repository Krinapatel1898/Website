import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ProjectsPage() {
  return (
    <div className="container py-12 md:py-16">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Projects</h1>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Showcasing my technical skills through real-world applications
          </p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="flex flex-col h-full">
          <CardHeader>
            <CardTitle>Wonder Boon</CardTitle>
            <CardDescription>Java, Spring, HTML</CardDescription>
          </CardHeader>
          <CardContent className="flex-1">
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Developed a web-based online gift application using Java servlets, creating an intuitive and visually
                appealing interface with WordPress.
              </li>
              <li>
                Led the creation of database tables, class diagrams (UML), and use case diagrams, resulting in a useful
                mapping between relational database tables.
              </li>
              <li>
                Exhibited originality by leveraging HTML and CSS to design and create an eye-catching webpage, hence
                elevating the project's overall visual appeal.
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="flex flex-col h-full">
          <CardHeader>
            <CardTitle>Intrusion Detection System</CardTitle>
            <CardDescription>Graylog Server, Snort INS tool</CardDescription>
          </CardHeader>
          <CardContent className="flex-1">
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Implemented Snort IPS on Ubuntu to detect and mitigate real-time threats, preventing future attacks by
                tracking and analyzing system activity logs of gateways and network devices.
              </li>
              <li>
                Monitored device logs and analyzed network connections using Graylog, assessing message frequencies via
                a centralized dashboard for efficient threat detection and event investigation.
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="flex flex-col h-full">
          <CardHeader>
            <CardTitle>Dietary Discernment Plan</CardTitle>
            <CardDescription>Python (Pandas, NumPy), Tableau</CardDescription>
          </CardHeader>
          <CardContent className="flex-1">
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Deployed Python's powerful tools, such as Pandas and NumPy, to input data and produce perceptive plot
                diagrams that successfully displayed the project's outcomes.
              </li>
              <li>
                Used NumPy and Pandas, two of Python's most potent tools, to process data and create insightful plot
                diagrams that effectively displayed the project.
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

