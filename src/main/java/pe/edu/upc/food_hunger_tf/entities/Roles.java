package pe.edu.upc.food_hunger_tf.entities;

import javax.persistence.*;
import java.io.Serializable;

@Entity
//Implementar la tabla usuario -_-
//@Table(name = "Roles", uniqueConstraints = {@UniqueConstraint(columnNames = {"idU", "id_Roles"})})

public class Roles implements Serializable {
    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_Roles", nullable = false)
    private int id_Roles;

    private String tipo;

    public int getId_Roles() {
        return id_Roles;
    }

    public void setId_Roles(int id_Roles) {
        this.id_Roles = id_Roles;
    }

    public String getTipo() {
        return tipo;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }
}
