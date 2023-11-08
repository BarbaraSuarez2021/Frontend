package pe.edu.upc.food_hunger_tf.serviceinterfaces;

import pe.edu.upc.food_hunger_tf.dtos.Comprobante_transaccion_DTO;
import pe.edu.upc.food_hunger_tf.entities.Comprobante_transaccion;

import java.util.List;

public interface IComprobante_transaccion_Service {
    public void agregar(Comprobante_transaccion_DTO comprobanteTransaccionDto);

    public List<Comprobante_transaccion> list();

    public void delete(Long idComprobanteTransaccion);

    public void modificar(Long id, Comprobante_transaccion_DTO ctDto);
}
