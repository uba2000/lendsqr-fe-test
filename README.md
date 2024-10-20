# Project Name

A LendSQR test assessment with 4 pages, Login, Dashboard, User page, User details page.

---

## Getting Started

This section explains how other developers can set up and run the project locally.

### Prerequisites

- Node.js: Ensure that you have Node.js installed on your machine.
  - Minimum required version: v14.x.x
- npm or yarn: This project uses npm (or yarn) as a package manager.

### Installation

Instructions for cloning the project and installing dependencies.

```bash
# Clone the repository
git clone git@github.com:uba2000/lendsqr-repo.git

# Navigate into the project directory
cd lendsqr-repo

# Install dependencies
npm install
# or
yarn install
```

### Running the Development Server

```bash
npm run dev
# or
yarn dev
```

The project should now be running on http://localhost:5173/ (or whichever port you have configured).

---

## Features

List the key features of your project. For example:

- Responsive design using SCSS with media queries.
- Built with React and TypeScript.
- Custom font integration.
- Jest testing setup for unit and integration tests.
- API integration using mocky.io

---

## Tech Stack

List all the technologies used in this project, including frameworks, libraries, and tools.

- React (JavaScript library for building user interfaces)
- TypeScript (for static typing)
- Vite (for bundling and faster builds)
- SCSS (for styling and CSS preprocessing)
- Jest (for testing)
- React Testing Library (for testing React components)
- SVGR (for importing SVG files as React components)

---

## Project Structure

```bash
root/
├── __tests__               # Test files
├── dist/                   # Build output directory
├── node_modules/           # Dependencies
├── public/                 # Static assets
├── src/                    # Source code
│   ├── assets/             # Project assets (fonts, images, etc.)
│   │   ├── fonts/          # Font files
│   │   ├── images/         # Image assets
│   │   └── navigation/     # Router configuration
│   ├── components/         # Reusable components
│   │   ├── InputField/     # Input field component
│   │   ├── Select/         # Select component
│   │   └── UserTable/      # UserTable component
│   ├── pages/              # Page components (e.g., login, user)
│   ├── queries/            # React-Query queries
│   ├── services/           # API services for React-Query
│   ├── styles/             # Global styles (SCSS)
│   │   ├── _fonts.scss     # Font styles
│   │   ├── _mixins.scss    # SCSS mixins
│   │   ├── _variables.scss # SCSS variables
│   │   └── index.scss      # Entry point for global styles
│   ├── types/              # TypeScript type definitions
│   ├── utils/              # Utility functions
│   ├── views/              # View-specific components
│   └── wrappers/           # Higher-order wrappers
├── .babelrc                # Babel configuration
├── .gitignore              # Git ignore file
├── eslint.config.js        # ESLint configuration
├── index.html              # Entry HTML file
├── jest.config.mjs         # Jest configuration
├── jest.setup.js           # Jest setup file
├── package.json            # Project dependencies and scripts
├── README.md               # Project documentation
├── tsconfig.json           # TypeScript configuration
├── vite.config.ts          # Vite configuration
└── ...
```

---

## License

```bash
MIT License
```
