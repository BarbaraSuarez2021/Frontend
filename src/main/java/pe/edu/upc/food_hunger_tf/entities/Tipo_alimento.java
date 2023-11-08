package pe.edu.upc.food_hunger_tf.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table (name = "Tipo_alimento")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Tipo_alimento {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_TipoAlimento", nullable = false)
    private int id_TipoAlimento;

    @Column(name = "nombre_TA", length = 25,nullable = false)
    private String nombre_TA;

    @Column(name = "Descripcion_general",length = 50, nullable = false)
    private String Descripcion_general;

}
