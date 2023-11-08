package pe.edu.upc.food_hunger_tf.serviceimplements;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pe.edu.upc.food_hunger_tf.dtos.Detalle_Transaccion_DTO;
import pe.edu.upc.food_hunger_tf.entities.Comprobante_transaccion;
import pe.edu.upc.food_hunger_tf.entities.Detalle_transaccion;
import pe.edu.upc.food_hunger_tf.repositories.IComprobante_transaccionRepository;
import pe.edu.upc.food_hunger_tf.repositories.IDetalle_TransaccionRepository;
import pe.edu.upc.food_hunger_tf.serviceinterfaces.IDetalle_transaccion_Service;

import java.util.List;

@Service
public class Detalle_Transaccion_Implement implements IDetalle_transaccion_Service {
    @Autowired
    public IComprobante_transaccionRepository cR;

    @Autowired
    public IDetalle_TransaccionRepository dtR;

    @Override
    public void agregar(Detalle_Transaccion_DTO detalleTransaccionDto) {
        Comprobante_transaccion comprobante_transaccion = cR.findById(detalleTransaccionDto.getIdComprobanteTransaccion())
                .orElseThrow(() -> new RuntimeException("No se encontró el comprobante con ID " + detalleTransaccionDto.getIdComprobanteTransaccion()));

        Detalle_transaccion detalleTransaccion = new Detalle_transaccion();
        detalleTransaccion.setComprobanteTransaccion(comprobante_transaccion);
        detalleTransaccion.setMontoTransaccion(detalleTransaccionDto.getMontoTransaccion());
        dtR.save(detalleTransaccion);
    }
    @Override
    public List<Detalle_transaccion> list() {return dtR.findAll();}

    @Override
    public void delete(Long idDetalleTransaccion) {dtR.deleteById(idDetalleTransaccion);}

    @Override
    public void modificar(Long id, Detalle_Transaccion_DTO dtDTO){
        Detalle_transaccion detalleTransaccion = dtR.findById(id)
                .orElseThrow(()-> new RuntimeException("No se encontro detalle de transaccion con ID " + id));

        Comprobante_transaccion comprobante_transaccion = cR.findById(dtDTO.getIdComprobanteTransaccion())
                .orElseThrow(() -> new RuntimeException("No se encontró detalle de transaccion con ID " + dtDTO.getIdComprobanteTransaccion()));

        detalleTransaccion.setComprobanteTransaccion(comprobante_transaccion);
        detalleTransaccion.setMontoTransaccion(dtDTO.getMontoTransaccion());
        dtR.save(detalleTransaccion);
    }

}
