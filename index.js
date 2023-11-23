const express = require('express');
const bodyParser = require('body-parser');
const PrismaClient = require('prisma/prisma-client');

const prisma = new PrismaClient();
const app = express();
const port = 3000;

app.use(bodyParser.json());

// Rotas
app.get('/tasks', async (req, res) => {
  const tasks = await prisma.task.findMany();
  res.json(tasks);
});

app.post('/tasks', async (req, res) => {
  const { title, details, deadline } = req.body;
  const status = 'pending';

  const newTask = await prisma.task.create({
    data: { title, details, deadline, status },
  });

  res.status(201).json(newTask);
});

app.put('/tasks/:taskId', async (req, res) => {
  const taskId = parseInt(req.params.taskId);
  const { title, details, deadline, status } = req.body;

  const updatedTask = await prisma.task.update({
    where: { id: taskId },
    data: { title, details, deadline, status },
  });

  res.json(updatedTask);
});

app.delete('/tasks/:taskId', async (req, res) => {
  const taskId = parseInt(req.params.taskId);

  await prisma.task.delete({
    where: { id: taskId },
  });

  res.status(204).send();
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
