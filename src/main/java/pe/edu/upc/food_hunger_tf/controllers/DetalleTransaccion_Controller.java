package pe.edu.upc.food_hunger_tf.controllers;

import org.modelmapper.ModelMapper;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pe.edu.upc.food_hunger_tf.dtos.Detalle_Transaccion_DTO;
import pe.edu.upc.food_hunger_tf.dtos.Metodo_Pago_DTO;
import pe.edu.upc.food_hunger_tf.entities.Detalle_transaccion;
import pe.edu.upc.food_hunger_tf.entities.Metodo_Pago;
import pe.edu.upc.food_hunger_tf.serviceinterfaces.IDetalle_transaccion_Service;

import javax.persistence.Entity;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/Detalle_Transaccion")
public class DetalleTransaccion_Controller {
    private final IDetalle_transaccion_Service iDetalleTransaccionService;

    public DetalleTransaccion_Controller(IDetalle_transaccion_Service iDetalleTransaccionService) {
        this.iDetalleTransaccionService = iDetalleTransaccionService;
    }

    @PostMapping("/Registar")
    public void registrar(@RequestBody Detalle_Transaccion_DTO detalleTransaccionDto){
        iDetalleTransaccionService.agregar(detalleTransaccionDto);
    }

    @GetMapping("/Lista")
    public List<Detalle_Transaccion_DTO> listar() {
        return iDetalleTransaccionService.list().stream().map(x-> {
            ModelMapper mp = new ModelMapper();
            return mp.map(x, Detalle_Transaccion_DTO.class);
        }) .collect(Collectors.toList());
    }

    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable("id") Long id ) {
        iDetalleTransaccionService.delete(id);
    }

    @PutMapping("/{id}")
    public void modificar(@PathVariable ("id") Long id,@RequestBody Detalle_Transaccion_DTO detalleTransaccionDto) {
        iDetalleTransaccionService.modificar(id,detalleTransaccionDto);
    }

}
