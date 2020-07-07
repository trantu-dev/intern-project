import { app } from './app';

// Load environment with .env file and DotEnv extension VS Code (database user + password, ...)

// App connect to database server

// Open port server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}`);
});
