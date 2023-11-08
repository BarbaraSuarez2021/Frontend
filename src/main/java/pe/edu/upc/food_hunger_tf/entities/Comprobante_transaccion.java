package pe.edu.upc.food_hunger_tf.entities;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name = "Comprobante_transaccion")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Comprobante_transaccion {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idComprobante_Transaccion", nullable = false)
    private Long idComprobanteTransaccion;

    @JoinColumn(name = "idMetodo_Pago")
    @ManyToOne(fetch = FetchType.LAZY)
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    private Metodo_Pago metodoPago;

    @JoinColumn(name = "idU")
    @ManyToOne(fetch = FetchType.LAZY)
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    private Usuario usuario;

    @Column(name = "monto_Total", nullable = false, scale = 2)
    private Double montoTotal;

}
