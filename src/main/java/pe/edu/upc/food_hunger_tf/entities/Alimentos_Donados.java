package pe.edu.upc.food_hunger_tf.entities;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "Alimentos_Donados")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Alimentos_Donados {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idAlimentos_Donados", nullable = false)
    private int idAlimentos_Donados;

    @Column(name = "Nombre_alimento", length = 100,nullable = false)
    private String Nombre_alimento;

    @Column(name = "Descripcion_especifico", length = 100,nullable = false)
    private String Descripcion_especifico;

    @Column(name = "FechaEmision",nullable = false)
    private Date FechaEmision = new Date();

    @Column(name = "FechaVencimiento", nullable = false)
    private Date FechaVencimiento;

    @JoinColumn(name = "id_TipoAlimento")
    @ManyToOne(fetch = FetchType.LAZY)
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    private Tipo_alimento tipo_alimento;
}
