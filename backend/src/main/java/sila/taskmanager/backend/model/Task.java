package sila.taskmanager.backend.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import org.hibernate.annotations.UuidGenerator;

import java.util.UUID;
@Entity
public class Task {
    @Id
    @GeneratedValue
    @UuidGenerator

    private final UUID id;
    private  String description;
    private  String title;
    private  Boolean done;

    public Task(@JsonProperty("id") UUID id, @JsonProperty("description") String description, @JsonProperty("title") String title, @JsonProperty("done") Boolean done) {
        this.id = id;
        this.description = description;
        this.title = title;
        this.done = done;
    }

    public Task() {
        this.id = UUID.randomUUID();
        this.description = null;
        this.title = null;
        this.done = false;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setDone(Boolean done) {
        this.done = done;
    }

    public UUID getId() {
        return id;
    }

    public String getDescription() {
        return description;
    }

    public Boolean getDone(){ return done;}
    public String getTitle(){ return title;}

}
