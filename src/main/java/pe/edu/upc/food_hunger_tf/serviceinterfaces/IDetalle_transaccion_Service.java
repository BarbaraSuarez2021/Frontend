package pe.edu.upc.food_hunger_tf.serviceinterfaces;

import org.hibernate.IdentifierLoadAccess;
import pe.edu.upc.food_hunger_tf.dtos.Detalle_Transaccion_DTO;
import pe.edu.upc.food_hunger_tf.entities.Detalle_transaccion;

import java.util.List;

public interface IDetalle_transaccion_Service {
    public void agregar(Detalle_Transaccion_DTO detalleTransaccionDto);
    public List<Detalle_transaccion> list ();
    public void delete (Long idDetalleTransaccion);
    public void modificar(Long id, Detalle_Transaccion_DTO dtDTO);
}
