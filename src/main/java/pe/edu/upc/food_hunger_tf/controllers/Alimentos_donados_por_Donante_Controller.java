package pe.edu.upc.food_hunger_tf.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pe.edu.upc.food_hunger_tf.dtos.Alimentos_donados_por_Donante_DTO;
import pe.edu.upc.food_hunger_tf.entities.Alimentos_donados_por_Donante;
import pe.edu.upc.food_hunger_tf.serviceinterfaces.IAlimentoDonado_Service;
import pe.edu.upc.food_hunger_tf.serviceinterfaces.IAlimentos_donados_por_Donante_Service;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/Alimentos_donados_por_Donante")
public class Alimentos_donados_por_Donante_Controller {
    @Autowired
    private IAlimentos_donados_por_Donante_Service iAlimentos_donados_por_Donante_Service;

    @PostMapping("/Registrar")
    public void registrar(@RequestBody Alimentos_donados_por_Donante_DTO alimentos_donados_por_DonanteDto){
        iAlimentos_donados_por_Donante_Service.agregar(alimentos_donados_por_DonanteDto);
    }

    @GetMapping("/Listar")
    public ResponseEntity<List<Alimentos_donados_por_Donante>> listar(){
       return new ResponseEntity<>(iAlimentos_donados_por_Donante_Service.list(), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable("id") Long id){iAlimentos_donados_por_Donante_Service.delete(id);}


    @PutMapping("/{id}")
    public void modificar(@PathVariable("id") Long id,@RequestBody Alimentos_donados_por_Donante_DTO alimentos_donados_por_DonanteDto){
        iAlimentos_donados_por_Donante_Service.modificar(id,alimentos_donados_por_DonanteDto);
    }

    @GetMapping("/ListarPorDonanteAndFecha/{idDonante}/{fechaInicio}/{fechaFin}")
    public ResponseEntity<List<Alimentos_donados_por_Donante>> listarPorDonanteAndFecha(
            @PathVariable("idDonante") Integer idDonante,
            @PathVariable("fechaInicio") @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate fechaInicio,
            @PathVariable("fechaFin") @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate fechaFin) {
        return new ResponseEntity<>(iAlimentos_donados_por_Donante_Service.getByDonanteAndFecha(idDonante, fechaInicio, fechaFin), HttpStatus.OK);
    }
}
