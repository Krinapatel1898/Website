import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function AcademicPage() {
  return (
    <div className="container py-12 md:py-16">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Academic Background</h1>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            My educational journey and qualifications
          </p>
        </div>
      </div>

      <div className="space-y-8">
        <Card>
          <CardHeader className="pb-2">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
              <div>
                <CardTitle>Arizona State University</CardTitle>
                <CardDescription>Master's in Information Technology</CardDescription>
              </div>
              <div className="text-sm text-muted-foreground">2021 - May 2023</div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <p className="font-medium">GPA: 3.67/4</p>
                <p className="text-sm text-muted-foreground">Tempe, Arizona</p>
              </div>
              <div>
                <p className="font-medium">Key Courses:</p>
                <p className="text-sm">NLP, Analyzing Big Data, Cloud Architecture, Developing Security Policy</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
              <div>
                <CardTitle>Gujarat Technological University</CardTitle>
                <CardDescription>B.Tech in Computer Engineering</CardDescription>
              </div>
              <div className="text-sm text-muted-foreground">2016 - 2020</div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <p className="font-medium">GPA: 3.33/4</p>
                <p className="text-sm text-muted-foreground">Ahmedabad, Gujarat</p>
              </div>
              <div>
                <p className="font-medium">Key Courses:</p>
                <p className="text-sm">
                  OOP, Software Engineering, Web Technology, Distributed DBMS, AI, Python Programming
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

