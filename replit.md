# Replit Clone Project

## Overview

This is a web application that replicates Replit's project creation interface. The application allows users to create projects by entering descriptions and selecting categories (Web app, Data app, or 3D Game). It features a modern, minimalist design focused on clarity and functionality, built with React, TypeScript, Express, and includes a comprehensive UI component library based on shadcn/ui.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build Tool**
- **React 18** with TypeScript for type-safe component development
- **Vite** as the build tool and development server, configured for fast HMR (Hot Module Replacement)
- **Wouter** for client-side routing (lightweight alternative to React Router)

**UI Component System**
- **shadcn/ui** component library using Radix UI primitives
- **Tailwind CSS** for utility-first styling with custom design tokens
- **Class Variance Authority (CVA)** for component variant management
- Custom design system following the "new-york" style with neutral base colors

**State Management**
- **TanStack Query (React Query)** for server state management and data fetching
- Custom query client configuration with disabled auto-refetching for stability
- Local component state using React hooks

**Design System**
- Light mode only (dark mode not required per design guidelines)
- System-based utility-focused interface
- Custom color palette centered around Replit blue (0 120 212)
- Inter font family for typography
- Tailwind spacing primitives (2, 3, 4, 6, 8, 12, 16) for consistent rhythm

### Backend Architecture

**Server Framework**
- **Express.js** running on Node.js with ES modules
- TypeScript for type safety across the entire stack
- Custom middleware for request logging and error handling

**API Design**
- RESTful API endpoints under `/api` namespace
- JSON request/response format
- Endpoints:
  - `GET /api/projects` - Retrieve all projects
  - `GET /api/projects/:id` - Retrieve single project
  - `POST /api/projects` - Create new project

**Data Validation**
- **Zod** schemas for runtime type validation
- **drizzle-zod** integration for automatic schema generation from database models
- Validation applied at API boundaries to ensure data integrity

**Development Tools**
- Custom Vite middleware for SSR development
- Hot module replacement in development
- Replit-specific plugins for enhanced developer experience (cartographer, dev-banner, runtime-error-modal)

### Data Storage Solutions

**Current Implementation**
- **In-Memory Storage** using a custom `MemStorage` class
- Map-based data structure for O(1) lookups
- UUID-based project identifiers using Node's crypto module

**Database Schema (Prepared for PostgreSQL)**
- **Drizzle ORM** configured for PostgreSQL dialect
- Schema defined in `shared/schema.ts` for code sharing between client and server
- Projects table with fields:
  - `id`: UUID primary key (auto-generated)
  - `description`: Text field for project description
  - `category`: Varchar(50) for project category
  - `createdAt`: Timestamp with automatic default

**Migration Strategy**
- Drizzle Kit configured for schema migrations
- Migration files output to `./migrations` directory
- `db:push` script available for direct schema pushing (development)

**Database Provider**
- **Neon Serverless** PostgreSQL client configured
- Environment variable `DATABASE_URL` required for database connection
- Connection pooling handled by Neon's serverless driver

### External Dependencies

**UI Component Library**
- **Radix UI** primitives for 25+ accessible components (dialogs, dropdowns, tooltips, etc.)
- **Lucide React** for icon system
- **embla-carousel-react** for carousel functionality
- **cmdk** for command palette patterns

**Form Management**
- **React Hook Form** for form state management
- **@hookform/resolvers** for validation integration

**Development Tools**
- **Replit Vite Plugins**:
  - `@replit/vite-plugin-cartographer` - Code navigation
  - `@replit/vite-plugin-dev-banner` - Development indicator
  - `@replit/vite-plugin-runtime-error-modal` - Error overlay
- **TSX** for TypeScript execution in development
- **esbuild** for production bundling

**Database & ORM**
- **Drizzle ORM** (v0.39.1) - Type-safe SQL query builder
- **@neondatabase/serverless** - PostgreSQL client for serverless environments
- **drizzle-kit** - CLI for migrations and schema management

**Session Management**
- **connect-pg-simple** - PostgreSQL session store (configured but not actively used)
- Prepared for future authentication implementation

**Utility Libraries**
- **clsx** & **tailwind-merge** - Conditional className management
- **date-fns** - Date manipulation and formatting
- **nanoid** - Unique ID generation

**Styling**
- **Tailwind CSS** with PostCSS and Autoprefixer
- Custom configuration with HSL color system
- CSS variables for theme tokens