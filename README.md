### Directory Layout
```
├── /build/                     # The folder for compiled output
├── /docs/                      # Documentation files for the project
├── /node_modules/              # 3rd-party libraries and utilities
├── /src/                       # The source code of the application
│   ├── /actions/               # Action creators that allow to trigger a dispatch to stores
│   ├── /components/            # React components
        ├── /App/               # What does this do?
        ├── /ContentPage/       #
        ├── /ErrorPage/
        ├── /Feedback/
        ├── /Footer/
        ├── /Link/
        ├── /Navigation/
        ├── /NotFoundPage/      # 404 page
        ├── /TextBox/           # What does this do?
        ├── /

│   ├── /constants/             # Constants (action types etc.)
│   ├── /content/               # Static content (plain HTML or Markdown, Jade, you name it)
│   ├── /core/                  # Core framework and utility functions
│   ├── /data/                  # GraphQL server schema
│   ├── /decorators/            # Higher-order React components
│   ├── /public/                # Static files which are copied into the /build/public folder
│   ├── /routes/                # Page/screen components along with the routing information

│   ├── /stores/                # Stores contain the application state and logic
│   ├── /views/                 # Express.js views for index and error pages
│   ├── /client.js              # Client-side startup script
│   ├── /config.js              # Global application settings
│   ├── /routes.js              # Universal (isomorphic) application routes
│   └── /server.js              # Server-side startup script
├── /tools/                     # Build automation scripts and utilities
│   ├── /lib/                   # Library for utility snippets
│   ├── /build.js               # Builds the project from source to output (build) folder
│   ├── /bundle.js              # Bundles the web resources into package(s) through Webpack
│   ├── /clean.js               # Cleans up the output (build) folder
│   ├── /copy.js                # Copies static files to output (build) folder
│   ├── /deploy.js              # Deploys your web application
│   ├── /run.js                 # Helper function for running build automation tasks
│   ├── /runServer.js           # Launches (or restarts) Node.js server
│   ├── /start.js               # Launches the development web server with "live reload"
│   └── /webpack.config.js      # Configurations for client-side and server-side bundles
│── package.json                # The list of 3rd party libraries and utilities
└── preprocessor.js             # ES6 transpiler settings for Jest
```
### To Dos
1. Review all the component's html and start to convert it to mock-up
2. Review all the component's css and start to convert it to Grid based on the mock-up
import s from './Contact.scss'
3. Data
4. Content - Lorem Ipsum
