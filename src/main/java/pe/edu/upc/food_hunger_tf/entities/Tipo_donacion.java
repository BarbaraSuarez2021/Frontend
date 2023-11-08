package pe.edu.upc.food_hunger_tf.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table (name = "Tipo_donacion")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Tipo_donacion {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idTipoDonacion", nullable = false)
    private int idTipoDonacion;

    @Column(name = "nombreTD", length = 25,nullable = false)
    private String nombreTD;

}
