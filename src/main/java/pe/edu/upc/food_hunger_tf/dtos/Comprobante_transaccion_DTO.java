package pe.edu.upc.food_hunger_tf.dtos;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;
import pe.edu.upc.food_hunger_tf.entities.Metodo_Pago;
import pe.edu.upc.food_hunger_tf.entities.Usuario;

import javax.persistence.*;

@Data
public class Comprobante_transaccion_DTO {

    private Long idComprobanteTransaccion;

    private int idMetodo_Pago;

    private int idU;

    private Double montoTotal;

}
