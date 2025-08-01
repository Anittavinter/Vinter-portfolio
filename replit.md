# Overview

This is a personal portfolio website built with Next.js 14, showcasing a UI/UX Designer and Full-Stack Developer's work. The site features a modern, responsive design with blog posts and project showcases, built using the App Router architecture. It includes content management through MDX files, email functionality, and a comprehensive component library using shadcn/ui.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: Next.js 14 with App Router for modern React development and server-side rendering
- **Styling**: Tailwind CSS with custom design system using CSS variables for theming
- **Component Library**: shadcn/ui components built on Radix UI primitives for accessible, customizable UI elements
- **Typography**: Custom font loading with Inter (sans-serif) and Playfair Display (serif) via next/font
- **Animations**: Framer Motion for smooth page transitions and interactive elements
- **Theme Management**: next-themes for dark/light mode switching with system preference detection

## Content Management
- **Content Structure**: File-based content management using MDX files stored in `/content` directories
- **Blog System**: Posts stored as MDX files with frontmatter metadata, supporting syntax highlighting via sugar-high
- **Project Showcase**: Similar MDX-based system for project portfolios with image support
- **Content Processing**: gray-matter for parsing frontmatter, custom utilities for sorting and filtering content

## Form Handling & Validation
- **Form Management**: React Hook Form for efficient form state management
- **Validation**: Zod schemas for type-safe form validation on both client and server
- **User Feedback**: Sonner toast notifications for user interaction feedback

## Email Integration
- **Email Service**: Resend API for transactional emails
- **Contact Forms**: Server actions for handling contact form submissions with email notifications
- **Newsletter**: Subscription functionality with email validation and automated responses

## Developer Experience
- **TypeScript**: Full TypeScript implementation for type safety
- **Code Quality**: ESLint with Next.js and TypeScript configurations
- **Styling Tools**: Prettier with Tailwind CSS plugin for consistent code formatting
- **Path Mapping**: Absolute imports using `@/` prefix for cleaner import statements

## Performance & SEO
- **Image Optimization**: Next.js Image component for optimized image delivery
- **Static Generation**: Static site generation for blog posts and projects using generateStaticParams
- **Font Optimization**: Automatic font optimization with next/font
- **Meta Management**: Built-in Next.js metadata API for SEO optimization

# External Dependencies

## UI & Styling
- **shadcn/ui**: Component library built on Radix UI primitives
- **Tailwind CSS**: Utility-first CSS framework with custom design tokens
- **Radix UI**: Accessible, unstyled UI primitives for complex components
- **Lucide React**: Icon library for consistent iconography
- **React Icons**: Additional icon sets for social media and branding

## Content & Media
- **MDX**: Markdown with JSX support for rich content authoring
- **gray-matter**: Frontmatter parsing for content metadata
- **sugar-high**: Syntax highlighting for code blocks
- **next-mdx-remote**: Server-side MDX rendering capabilities

## Communication Services
- **Resend**: Email delivery service for contact forms and newsletters
- **React Hook Form**: Form state management and validation
- **Zod**: Schema validation library for type-safe data handling

## Development Tools
- **TypeScript**: Static type checking and enhanced developer experience
- **Prettier**: Code formatting with Tailwind CSS class sorting
- **ESLint**: Code linting with Next.js specific rules
- **Framer Motion**: Animation library for enhanced user interactions

## Deployment & Hosting
- **Vercel**: Recommended deployment platform (as indicated in README)
- **Node.js**: Runtime environment for server-side functionality