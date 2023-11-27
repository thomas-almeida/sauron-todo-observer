const express = require('express')
const router = express.Router()
const Task = require('./models/Tasks')

router.get('/get-tasks', async (req, res) => {
    const tasks = await Task.findAll()
    res.json(tasks)
})

router.post('/create-task', async (req, res) => {
    const { title, details, deadline } = req.body
    const task = await Task.create({ title, details, deadline })
    res.json(task)
})

router.put('/update/:id', async (req, res) => {
    const { id } = req.params
    const { title, details, deadline, completed } = req.body
    const task = await Task.findByPk(id)

    if(!task) {
        return res.status(404).json({ error: 'Tarefa nao encontrada' })
    }

    task.title = title || task.title
    task.details = details || task.details
    task.deadline = deadline || task.deadline
    task.completed = completed || task.completed

    await task.save()
    res.json(task)
})

router.delete('/delete/:id', async (req, res) => {
    const { id } = req.params
    const task = await Task.findByPk(id)
    if(!task) {
        return res.status(404).json({ error: 'Tarefa não encontrada' })
    }
    await task.destroy()
    res.json({ message: 'Tarefa excluíida' })
})

module.exports = router