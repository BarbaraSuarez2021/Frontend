package pe.edu.upc.food_hunger_tf.entities;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table (name = "Detalle_transaccion")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Detalle_transaccion {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idDetalle_transaccion", nullable = false)
    private Long idDetalleTransaccion;

    @JoinColumn(name = "idComprobante_Transaccion")
    @ManyToOne(fetch = FetchType.LAZY)
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    private Comprobante_transaccion ComprobanteTransaccion;

    @Column(name = "monto_transaccion", nullable = false, scale = 2)
    private Double montoTransaccion;
}
