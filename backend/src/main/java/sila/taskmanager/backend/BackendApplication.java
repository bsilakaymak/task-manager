package sila.taskmanager.backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import sila.taskmanager.backend.model.Task;
import sila.taskmanager.backend.repo.TaskRepo;

import java.util.UUID;

@SpringBootApplication
public class BackendApplication {

	public static void main(String[] args) {
		ApplicationContext context = SpringApplication.run(BackendApplication.class, args);
		TaskRepo taskRepo = context.getBean(TaskRepo.class);
		taskRepo.save(new Task(UUID.randomUUID(), "Description 1", "Title 1", false));
		taskRepo.save(new Task(UUID.randomUUID(), "Description 2", "Title 2", false));
		taskRepo.save(new Task(UUID.randomUUID(), "Description 3", "Title 3", false));
	}



}
