package pe.edu.upc.food_hunger_tf.entities;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Generated;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "Alimentos_donados_por_Donante")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Alimentos_donados_por_Donante {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idAlimentos_donados_por_Donante", nullable = false)
    private Long idAlimentosDonadosPorDonante;

    @JoinColumn(name = "idAlimentos_Donados")
    @ManyToOne(fetch = FetchType.LAZY)
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    private Alimentos_Donados alimentosDonados;

    @JoinColumn(name = "idU")
    @ManyToOne(fetch = FetchType.LAZY)
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    private Usuario usuario;

    @Column(name = "fecha_Donacion", nullable = false)
    private LocalDate fechaDonacion;

    @Column(name = "cantidad_Alimentos", nullable = false)
    private int cantidadAlimentos;

}
