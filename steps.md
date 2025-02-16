# Steps

## Stage 1: Requirements Analysis

### Assignment Highlights
> https://www.figma.com/board/gdp9kWPmC4uLLOebgO33i1/maihem-chat-ui?node-id=5-1398&t=sf7BpifNCoPfVy5X-4

### ⁠Persona(s) Deep Dive
> https://www.figma.com/board/gdp9kWPmC4uLLOebgO33i1/maihem-chat-ui?node-id=5-1399&t=sf7BpifNCoPfVy5X-4

### ⁠User Flows
> https://www.figma.com/board/gdp9kWPmC4uLLOebgO33i1/maihem-chat-ui?node-id=5-1502&t=sf7BpifNCoPfVy5X-4

## Stage 2: Design
- ⁠Design inspirations
> https://www.figma.com/board/gdp9kWPmC4uLLOebgO33i1/maihem-chat-ui?node-id=4-293&t=sf7BpifNCoPfVy5X-4
- Wireframes / Page Layouts
> https://www.figma.com/board/gdp9kWPmC4uLLOebgO33i1/maihem-chat-ui?node-id=19-248&t=sf7BpifNCoPfVy5X-4
- Design Iterations
> TODO: design-decisions.md
- ⁠Mockup 
> https://www.figma.com/design/1CvrnGAnsa4QvIaXdl6zoe/maihem-chat-ui-mockup?node-id=2-287&t=9qWfOfr9yfsJpzVr-1

## Stage 3: Architecture
- Tech Stack: React.js, Next.js 14.2.24, Tailwind, shadcn/ui 2.3.0
  - Rationale for React.js: ASSIGNMENT REQUIREMENT. 
  - Rationale for Next.js 14.2.24: ASSIGNMENT REQUIREMENT. 
    - Avoiding latest version `15` (going with `14.2.24`) to avoid issues with shadcn/ui's stable version.
  - Rationale for Tailwind: ASSIGNMENT REQUIREMENT. 
  - Rationale for shadcn 2.3.0: https://www.figma.com/board/PYMpkOPFgRV6PotVSzAVkk/maihem-chat-ui-arch?node-id=2-27&t=5KgCnz9j5Lexgxte-4 
    - Latest stable version.
- ⁠Modules
> https://www.figma.com/board/PYMpkOPFgRV6PotVSzAVkk/maihem-chat-ui-arch?node-id=3-58&t=5KgCnz9j5Lexgxte-4 
- Data Structure
> https://www.figma.com/board/PYMpkOPFgRV6PotVSzAVkk/maihem-chat-ui-arch?node-id=3-83&t=5KgCnz9j5Lexgxte-4 
- Deployment
  - Webapp: Vercel
  - DB: <mocked_in_frontend>

## Stage 4: Development
- ⁠DevOps Setup
  - Code Versioning
    - `main`: Development branch.
    - `release/v...`: Contains code released in particular version. NOT USED FOR THIS EXECRISE.
    - `uat`: Contains code that is LIVE (+ auto-deployed via CI/CD) in `UAT` environment.
    - `production`: Contains code that is LIVE (+ auto-deployed via CI/CD) in `PRD` environment. NOT USED FOR THIS EXECRISE.
- ⁠Implementation
  - Code available in `webapp/src/` folder

## Stage 5: Testing
- Test Suite: SKIPPED FOR THIS EXPERCISE.

## Stage 6: Deployment
- CI/CD Setup
    - Github Actions workflows for `UAT` and `PRD` environments (in Vercel). ONLY `PRD` IMPLEMENTED FOR THIS EXERCISE.

# Future Scope
- Integrations: Authentication, Database, Analytics, Emailing Service, etc.
- Responsive UI (mobile view)
- UI rendering optimizations: SSG (Static-site generation), ISR (Incremental static regeneration), SSR (Server-side rendering), CSR (Client-side rendering)