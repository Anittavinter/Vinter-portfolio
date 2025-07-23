import Link from 'next/link'
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="mt-20 border-t pt-10 pb-6 text-sm text-muted-foreground">
      <div className="container mx-auto max-w-3xl flex flex-col items-center gap-6 text-center md:flex-row md:justify-between">
        {/* Left Side: Credits */}
        <p>
          © {new Date().getFullYear()} Vinter Achieno. Crafted with vision & purpose.
        </p>

        {/* Right Side: Social Links */}
        <div className="flex gap-4 text-lg">
          <Link
            href="https://www.linkedin.com/in/anitta-vinter-4622a9189/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-foreground transition-colors"
          >
            <FaLinkedin />
          </Link>
          <Link
            href="https://github.com/Anittavinter"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-foreground transition-colors"
          >
            <FaGithub />
          </Link>
          <Link
            href="https://www.instagram.com/anittavinter"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-foreground transition-colors"
          >
            <FaInstagram />
          </Link>
        </div>
      </div>
    </footer>
  )
}
