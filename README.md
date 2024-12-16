# Todo List Application

This project is a **Todo List Application** built with modern web technologies. The application includes features for listing, adding, and editing tasks, and interacts with a dummy REST API for data management.

## Features

1. **Home Page**: Displays a list of tasks with their title and status.
2. **Add Task Page**: Allows users to create new tasks.
3. **Edit Task Page**: Enables users to update a task's status.

## Tech Stack

- **JavaScript**
- **React.js**
- **Redux & Redux Toolkit** for state management
- **Tailwind CSS** for styling
- **jsonplaceholder.typicode.com/todos** for dummy REST API calls

## Installation and Setup

Follow these steps to run the project locally:

### Prerequisites
- Node.js installed on your system
- npm (Node Package Manager) or yarn

### Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Susanta0/Bytive_todo.git
   cd Bytive_todo
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```
   or
   ```bash
   yarn start
   ```

4. Open your browser and navigate to `http://localhost:5173` to view the application.

## Project Structure

```plaintext
├── src
│   ├── pages         # Pages (HomePage, AddTaskPage, EditTaskPage)
│   ├── redux         # Redux slices and store configuration
│   ├── Routes        # AllRoutes 
│   ├── App.js        # Main App component
│   ├── index.js      # Entry point
├── public            # Static assets
├── package.json      # Dependencies and scripts
```

## API Integration

The application uses [jsonplaceholder.typicode.com/todos](https://jsonplaceholder.typicode.com/todos) for fetching and updating task data. The following REST API endpoints are utilized:

- **GET /todos**: Fetch the list of tasks.
- **PUT /todos/:id**: Update a task's status.

## Usage

- Navigate to the **Home Page** to view the list of tasks.
- Use the **Add Task Page** to create new tasks by filling out the form.
- Go to the **Edit Task Page** to update the status of existing tasks.

## Scripts

- `npm run dev`: Starts the development server.
- `npm build`: Builds the app for production.
- `npm test`: Runs tests (if configured).

## Learn More

- [React.js Documentation](https://reactjs.org/docs/getting-started.html)
- [Redux Toolkit Documentation](https://redux-toolkit.js.org/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [JSONPlaceholder API](https://jsonplaceholder.typicode.com/)

---

Feel free to contribute to this project or provide feedback!
