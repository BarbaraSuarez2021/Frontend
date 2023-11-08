package pe.edu.upc.food_hunger_tf.controllers;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pe.edu.upc.food_hunger_tf.dtos.AlimentoDonado_DTO;
import pe.edu.upc.food_hunger_tf.dtos.Usuario_DTO;
import pe.edu.upc.food_hunger_tf.entities.Alimentos_Donados;
import pe.edu.upc.food_hunger_tf.serviceinterfaces.IAlimentoDonado_Service;
import pe.edu.upc.food_hunger_tf.serviceinterfaces.IUsuario_Service;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/AlimentoDonado")
public class AlimentoDonado_Controller {
    @Autowired
    private IAlimentoDonado_Service iAlimentoDonadoService;

    @PostMapping("/Registrar")
    public void registrar(@RequestBody AlimentoDonado_DTO alimentoDonadoDto){
        iAlimentoDonadoService.agregar(alimentoDonadoDto);
    }

    @GetMapping("/Listar")
    public ResponseEntity<List<Alimentos_Donados>> listar(){
        return new ResponseEntity<>(iAlimentoDonadoService.list(), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable("id") int id){iAlimentoDonadoService.delete(id);}

    @PutMapping("/{id}")
    public void modificar(@PathVariable("id") int id,@RequestBody AlimentoDonado_DTO alimentoDonadoDto){
        iAlimentoDonadoService.modificar(id,alimentoDonadoDto);
    }

    @GetMapping("/ListarPorTipoAlimentoAndFechaVencimiento/{idTipoAlimento}")
    public ResponseEntity<List<Alimentos_Donados>> listarPorTipoAlimentoAndFechaVencimiento(@PathVariable("idTipoAlimento") Integer idTipoAlimento) {
        return new ResponseEntity<>(iAlimentoDonadoService.getByTipoAlimentoAndFechaVencimiento(idTipoAlimento), HttpStatus.OK);
    }

}
