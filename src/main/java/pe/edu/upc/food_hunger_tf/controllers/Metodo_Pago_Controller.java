package pe.edu.upc.food_hunger_tf.controllers;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.*;
import pe.edu.upc.food_hunger_tf.dtos.Metodo_Pago_DTO;
import pe.edu.upc.food_hunger_tf.dtos.Tipo_Alimento_DTO;
import pe.edu.upc.food_hunger_tf.entities.Metodo_Pago;
import pe.edu.upc.food_hunger_tf.serviceinterfaces.IMetodo_Pago_Service;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/MetodoPago")
public class Metodo_Pago_Controller {
    @Autowired
    private IMetodo_Pago_Service mS;

    @PostMapping("/Registrar")
    public void registrar(@RequestBody Metodo_Pago_DTO dto) {
        ModelMapper m = new ModelMapper();
        Metodo_Pago u = m.map(dto, Metodo_Pago.class);
        mS.insert(u);
    }

    @GetMapping("/Lista")
    public List<Metodo_Pago_DTO> listar() {
        return mS.list().stream().map(x -> {
            ModelMapper m = new ModelMapper();
            return m.map(x, Metodo_Pago_DTO.class);
        }).collect(Collectors.toList());
    }

    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable("id") Integer id) {
        mS.delete(id);
    }

    @PutMapping("/{id}")
    public void modificar(@PathVariable("id") int id,@RequestBody Metodo_Pago_DTO dto) {
        mS.modificar(id,dto);
    }
}
