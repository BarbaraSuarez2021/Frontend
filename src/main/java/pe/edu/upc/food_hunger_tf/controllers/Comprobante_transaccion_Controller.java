package pe.edu.upc.food_hunger_tf.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pe.edu.upc.food_hunger_tf.dtos.Comprobante_transaccion_DTO;
import pe.edu.upc.food_hunger_tf.entities.Comprobante_transaccion;
import pe.edu.upc.food_hunger_tf.serviceinterfaces.IComprobante_transaccion_Service;

import java.util.List;

@RestController
@RequestMapping("/Comprobante_transaccion")
public class Comprobante_transaccion_Controller {
    @Autowired
    private IComprobante_transaccion_Service iComprobante_transaccion_Service;

    @PostMapping("/Registrar")
    public void registrar(@RequestBody Comprobante_transaccion_DTO comprobante_transaccionDto)
    {
        iComprobante_transaccion_Service.agregar(comprobante_transaccionDto);
    }

    @GetMapping("/Listar")
    public ResponseEntity<List<Comprobante_transaccion>> listar(){
        return new ResponseEntity<>(iComprobante_transaccion_Service.list(), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable("id") Long id){
        iComprobante_transaccion_Service.delete(id);
    }


    @PutMapping("/{id}")
    public void modificar(@PathVariable("id") Long id,@RequestBody Comprobante_transaccion_DTO comprobante_transaccionDto){
        iComprobante_transaccion_Service.modificar(id,comprobante_transaccionDto);
    }
}
