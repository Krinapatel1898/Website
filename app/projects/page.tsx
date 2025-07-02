import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Github } from "lucide-react"

export default function ProjectsPage() {
  return (
    <div className="container py-12 md:py-16">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/55 via-background to-background/80 -z-10" />
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl transition-transform duration-500 ease-out transform hover:scale-105">
            Projects
          </h1>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Showcasing my technical skills through real-world applications
          </p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* 1. Wonder Boon */}
        <Card className="flex flex-col h-full transition-transform duration-500 ease-out transform hover:scale-105">
          <CardHeader>
            <div className="flex justify-between items-start">
              <CardTitle>Wonder Boon</CardTitle>
              <a
                href="https://github.com/Krinapatel1898/WonderBoon"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
            <CardDescription>Java, Spring, HTML</CardDescription>
          </CardHeader>
          <CardContent className="flex-1">
            <ul className="list-disc pl-5 space-y-2">
              <li>Developed a web-based online gift application using Java servlets with a visually appealing WordPress UI.</li>
              <li>Created UML diagrams and relational database mappings.</li>
              <li>Enhanced UI using HTML and CSS for better engagement.</li>
            </ul>
          </CardContent>
        </Card>
        
        {/* 2. Sticky Planner */}
        <Card className="flex flex-col h-full transition-transform duration-500 ease-out transform hover:scale-105">
          <CardHeader>
            <div className="flex justify-between items-start">
              <CardTitle>Sticky Planner</CardTitle>
              <a
                href="https://github.com/Krinapatel1898/sticky-planner"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
            <CardDescription>React, Tailwind CSS</CardDescription>
          </CardHeader>
          <CardContent className="flex-1">
            <ul className="list-disc pl-5 space-y-2">
              <li>Created a React component-based sticky notes planner with a clean and consistent layout.</li>
              <li>Organized notes under Daily, Monthly, Yearly, and Special Occasions sections with square-bullet formatting.</li>
              <li>Styled with Tailwind CSS for responsive and visually cohesive UI.</li>
            </ul>
          </CardContent>
        </Card>

        {/* 3. Occasion Reminder */}
        <Card className="flex flex-col h-full transition-transform duration-500 ease-out transform hover:scale-105">
          <CardHeader>
            <div className="flex justify-between items-start">
              <CardTitle>Occasion Reminder</CardTitle>
              <a
                href="https://github.com/Krinapatel1898/Occasion_Reminder"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
            <CardDescription>Java, Android</CardDescription>
          </CardHeader>
          <CardContent className="flex-1">
            <ul className="list-disc pl-5 space-y-2">
              <li>Android app that lets users set reminders for special occasions.</li>
              <li>Built using Java with Android Studio, leveraging calendar APIs.</li>
              <li>Push notifications remind users based on selected dates.</li>
            </ul>
          </CardContent>
        </Card>

        {/* 4. Zealthy Onboarding */}
        <Card className="flex flex-col h-full transition-transform duration-500 ease-out transform hover:scale-105">
          <CardHeader>
            <div className="flex justify-between items-start">
              <CardTitle>Zealthy Onboarding</CardTitle>
              <a
                href="https://github.com/Krinapatel1898/zealthy-onboarding"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
            <CardDescription>React, Node.js, SQL Server</CardDescription>
          </CardHeader>
          <CardContent className="flex-1">
            <ul className="list-disc pl-5 space-y-2">
              <li>Built a full-stack onboarding app with user flow, admin panel, and data views.</li>
              <li>Utilized Tailwind, React, Node.js, Express, and SQL Server.</li>
              <li>Responsive design and proper step-based state management.</li>
            </ul>
          </CardContent>
        </Card>        

        {/* 5. Intrusion Detection System (No GitHub link) */}
        <Card className="flex flex-col h-full transition-transform duration-500 ease-out transform hover:scale-105">
          <CardHeader>
            <CardTitle>Intrusion Detection System</CardTitle>
            <CardDescription>Graylog Server, Snort INS tool</CardDescription>
          </CardHeader>
          <CardContent className="flex-1">
            <ul className="list-disc pl-5 space-y-2">
              <li>Implemented Snort IPS on Ubuntu for real-time threat mitigation.</li>
              <li>Monitored device logs and analyzed traffic using Graylog dashboards.</li>
            </ul>
          </CardContent>
        </Card>

        {/* 6. Dietary Discernment Plan (No GitHub link) */}
        <Card className="flex flex-col h-full transition-transform duration-500 ease-out transform hover:scale-105">
          <CardHeader>
            <CardTitle>Dietary Discernment Plan</CardTitle>
            <CardDescription>Python (Pandas, NumPy), Tableau</CardDescription>
          </CardHeader>
          <CardContent className="flex-1">
            <ul className="list-disc pl-5 space-y-2">
              <li>Used Pandas and NumPy for data processing and plot generation.</li>
              <li>Created insightful visualizations to represent dietary outcomes.</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
