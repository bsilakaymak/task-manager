package sila.taskmanager.backend.service;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import sila.taskmanager.backend.model.Task;
import sila.taskmanager.backend.repo.TaskRepo;

@Service
public class TaskService {
    private TaskRepo taskRepo;

    @Autowired
    public TaskService(TaskRepo taskRepo) {
        this.taskRepo = taskRepo;
    }

    public List<Task> getAllTasks() {
        return taskRepo.findAll();
    }

    public Task getTaskById(UUID id) {
        return taskRepo.findById(id).orElse(null);
    }

    public Task createTask(Task task) {
        return taskRepo.save(task);
    }

    public void deleteTask(UUID id) {
        taskRepo.deleteById(id);
    }

    public Task updateTask(UUID id, Task task) {
        Task existingTask = taskRepo.findById(id).orElse(null);
        if (existingTask != null) {
            existingTask.setDescription(task.getDescription());
            existingTask.setTitle(task.getTitle());
            existingTask.setDone(task.getDone());
            return taskRepo.save(existingTask);
        }
        return null;
    }
}

