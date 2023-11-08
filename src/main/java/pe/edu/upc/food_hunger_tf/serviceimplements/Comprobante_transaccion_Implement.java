package pe.edu.upc.food_hunger_tf.serviceimplements;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pe.edu.upc.food_hunger_tf.dtos.Comprobante_transaccion_DTO;
import pe.edu.upc.food_hunger_tf.entities.Comprobante_transaccion;
import pe.edu.upc.food_hunger_tf.entities.Metodo_Pago;
import pe.edu.upc.food_hunger_tf.entities.Usuario;
import pe.edu.upc.food_hunger_tf.repositories.IComprobante_transaccionRepository;
import pe.edu.upc.food_hunger_tf.repositories.IMetodo_PagoRepository;
import pe.edu.upc.food_hunger_tf.repositories.IUsuarioRepository;
import pe.edu.upc.food_hunger_tf.serviceinterfaces.IComprobante_transaccion_Service;

import java.util.List;

@Service
public class Comprobante_transaccion_Implement implements IComprobante_transaccion_Service {

    @Autowired
    public IUsuarioRepository uR;

    @Autowired
    public IMetodo_PagoRepository mPR;

    @Autowired
    public IComprobante_transaccionRepository cTS;

    @Override
    public void agregar(Comprobante_transaccion_DTO comprobanteTransaccionDto) {
        Usuario usuario = uR.findById(comprobanteTransaccionDto.getIdU())
                .orElseThrow(() -> new RuntimeException("No se encontró el usuario con ID " + comprobanteTransaccionDto.getIdU()));

        Metodo_Pago metodoPago = mPR.findById(comprobanteTransaccionDto.getIdMetodo_Pago())
                .orElseThrow(() -> new RuntimeException("No se encontró el método de pago con ID " + comprobanteTransaccionDto.getIdMetodo_Pago()));

        Comprobante_transaccion comprobante_transaccion = new Comprobante_transaccion();
        comprobante_transaccion.setUsuario(usuario);
        comprobante_transaccion.setMetodoPago(metodoPago);
        comprobante_transaccion.setMontoTotal(comprobanteTransaccionDto.getMontoTotal());
        cTS.save(comprobante_transaccion);
    }

    @Override
    public List<Comprobante_transaccion> list() {
        return cTS.findAll();
    }

    @Override
    public void delete(Long idComprobanteTransaccion) {
        cTS.deleteById(idComprobanteTransaccion);
    }

    @Override
    public void modificar(Long id, Comprobante_transaccion_DTO ctDto) {
        Comprobante_transaccion comprobante_transaccion = cTS.findById(id)
                .orElseThrow(() -> new RuntimeException("No se encontró el comprobante de transacción con ID " + id));

        Usuario usuario = uR.findById(ctDto.getIdU())
                .orElseThrow(() -> new RuntimeException("No se encontró el usuario con ID " + ctDto.getIdU()));

        Metodo_Pago metodoPago = mPR.findById(ctDto.getIdMetodo_Pago())
                .orElseThrow(() -> new RuntimeException("No se encontró el método de pago con ID " + ctDto.getIdMetodo_Pago()));

        comprobante_transaccion.setUsuario(usuario);
        comprobante_transaccion.setMetodoPago(metodoPago);
        comprobante_transaccion.setMontoTotal(ctDto.getMontoTotal());
        cTS.save(comprobante_transaccion);

    }
}
