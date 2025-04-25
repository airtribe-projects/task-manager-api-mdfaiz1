Features

1. Create a new task
2. Get all tasks
3. Get a single task by ID
4. Update a task
5. Delete a task

Tech Stack

1. Node.js
2. Express.
3. MongoDB (with Mongoose)

API EndPoints

1. Create Task
   Method: POST
   Endpoint: /api/v1/tasks
   Description: Creates a new task.

2. Get All Tasks
   Method: GET
   Endpoint: /api/v1/tasks
   Description: Retrieves a list of all tasks.

3. Get Single Task
   Method: GET
   Endpoint: /api/v1/tasks/:id
   Description: Retrieves a single task by its unique ID.

4. Update Task
   Method: PUT
   Endpoint: /api/v1/tasks/:id
   Description: Updates an existing task by ID.

5. Delete Task
   Method: DELETE
   Endpoint: /api/v1/tasks/:id
   Description: Deletes a task by ID.

# Clone the repository

git clone "paste link here"

# Navigate into the directory

cd task-todo-api

# Install dependencies

npm install or npm i

# Create a .env file and add your MongoDB URI

MONGO_URL = your_mongodb_uri
PORT = port Number
DB_NAME = database name

# Start the server

npm run dev
