package pe.edu.upc.food_hunger_tf.dtos;

import lombok.Data;

@Data
public class Detalle_Transaccion_DTO {
    private Long idDetalleTransaccion;

    private long idComprobanteTransaccion;

    private Double montoTransaccion;
}
