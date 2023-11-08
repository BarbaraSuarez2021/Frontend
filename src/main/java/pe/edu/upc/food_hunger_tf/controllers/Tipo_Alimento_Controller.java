package pe.edu.upc.food_hunger_tf.controllers;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pe.edu.upc.food_hunger_tf.dtos.CantidadAlimentosXtipoAlimento;
import pe.edu.upc.food_hunger_tf.dtos.Tipo_Alimento_DTO;
import pe.edu.upc.food_hunger_tf.entities.Tipo_alimento;
import pe.edu.upc.food_hunger_tf.serviceinterfaces.ITipo_Alimento_Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/TipoAlimento")
public class Tipo_Alimento_Controller {
    @Autowired
    private ITipo_Alimento_Service taS;

    @PostMapping("/Registrar")
    public void registrar(@RequestBody Tipo_Alimento_DTO dto) {
            taS.insert(dto);
    }

    @GetMapping("/Listar")
    public ResponseEntity<List<Tipo_alimento>> listar() {
        return new ResponseEntity<>(taS.list(), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable("id") int id) {
        taS.delete(id);
    }

    @PutMapping("/{id}")
    public void modificar(@PathVariable("id") int id,@RequestBody Tipo_Alimento_DTO dto) {
        taS.modificar(id,dto);
    }

    @GetMapping("/CantidadDeAlimentosXtipoAlimento")
    public List<CantidadAlimentosXtipoAlimento> cantidadTotal() {
        List<String[]> lista = taS.cantidadAlimentosXtipoAlimento();
        List<CantidadAlimentosXtipoAlimento> listaDTO = new ArrayList<>();
        for (String[] data : lista) {
            CantidadAlimentosXtipoAlimento dto = new CantidadAlimentosXtipoAlimento();
            dto.setName(data[0]);
            dto.setCantidad(Integer.parseInt(data[1]));
            listaDTO.add(dto);
        }
        return listaDTO;
    }
}
