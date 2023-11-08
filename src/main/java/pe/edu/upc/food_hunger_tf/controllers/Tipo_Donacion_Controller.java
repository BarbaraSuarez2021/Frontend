package pe.edu.upc.food_hunger_tf.controllers;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pe.edu.upc.food_hunger_tf.dtos.Tipo_Alimento_DTO;
import pe.edu.upc.food_hunger_tf.dtos.Tipo_Donacion_DTO;
import pe.edu.upc.food_hunger_tf.entities.Tipo_alimento;
import pe.edu.upc.food_hunger_tf.entities.Tipo_donacion;
import pe.edu.upc.food_hunger_tf.serviceinterfaces.ITipo_Donacion_Service;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/TipoDonacion")
public class Tipo_Donacion_Controller {
    @Autowired
    private ITipo_Donacion_Service tdS;

    @PostMapping("/Registrar")
    public void registrar(@RequestBody Tipo_Donacion_DTO dto) {
        tdS.insert(dto);
    }

    @GetMapping("/Listar")
    public ResponseEntity<List<Tipo_donacion>> listar() {
        return new ResponseEntity<>(tdS.list(), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable("id") int id) {
        tdS.delete(id);
    }
    @PutMapping("/{id}")
    public void modificar(@PathVariable("id") int id,@RequestBody Tipo_Donacion_DTO dto) {
        tdS.modificar(id,dto);
    }
}
