export default function Footer() {
  return (
    <footer className="border-t py-6 md:py-8">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          © {new Date().getFullYear()} Krina Patel. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://www.linkedin.com/in/krinapatel185/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Krinapatel1898"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            GitHub
          </a>
          <a href="mailto:patelkrina185@gmail.com" className="text-sm text-muted-foreground hover:text-foreground">
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}

