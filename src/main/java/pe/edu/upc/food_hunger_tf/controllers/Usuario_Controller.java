package pe.edu.upc.food_hunger_tf.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import pe.edu.upc.food_hunger_tf.dtos.RolesDTO;
import pe.edu.upc.food_hunger_tf.dtos.Tipo_Donacion_DTO;
import pe.edu.upc.food_hunger_tf.dtos.TotalAlimentosDonadosPorUsuario;
import pe.edu.upc.food_hunger_tf.dtos.Usuario_DTO;
import pe.edu.upc.food_hunger_tf.entities.Roles;
import pe.edu.upc.food_hunger_tf.entities.Tipo_donacion;
import pe.edu.upc.food_hunger_tf.entities.Usuario;
import pe.edu.upc.food_hunger_tf.serviceinterfaces.IRolesService;
import pe.edu.upc.food_hunger_tf.serviceinterfaces.ITipo_Donacion_Service;
import pe.edu.upc.food_hunger_tf.serviceinterfaces.IUsuario_Service;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("api/auth/Usuario")
public class Usuario_Controller {
    @Autowired
    private IUsuario_Service IUsuario_Service;

    @Autowired
    private IRolesService rolesService;

    @Autowired
    private ITipo_Donacion_Service tdS;

    @PostMapping("/RegistrarTipoDonacion")
    public void registrarTipoDonacion(@RequestBody Tipo_Donacion_DTO dto) {
        tdS.insert(dto);
    }

    @GetMapping("/ListarTipoDonacion")
    public ResponseEntity<List<Tipo_donacion>> listarTipoDonacion() {
        return new ResponseEntity<>(tdS.list(), HttpStatus.OK);
    }

    @GetMapping("/ListarTipoDonacion/{id}")
    public ResponseEntity<Tipo_donacion> listarTipoDonacionById(@PathVariable("id") int id) {
        return new ResponseEntity<>(tdS.getTipoDonacionById(id), HttpStatus.OK);
    }

    @PostMapping("/RegistrarRol")
    public void registrarRol(@RequestBody Roles roles){
      rolesService.insert(roles);
    }

    @GetMapping("/ListarRol")
    public ResponseEntity<List<Roles>> listarRol(){
        return new ResponseEntity<>(rolesService.list(), HttpStatus.OK);
    }

    @GetMapping("/ListarRol/{id}")
    public ResponseEntity<Roles> listarRolById(@PathVariable("id") int id){
        return new ResponseEntity<>(rolesService.getRolesById(id), HttpStatus.OK);
    }

    @PostMapping("/Registrar")
    public void registrar(@RequestBody Usuario_DTO usuarioDto){
      IUsuario_Service.registrar(usuarioDto);
    }

    @GetMapping("/Listar")
    public ResponseEntity<List<Usuario_DTO>> listar(){
        return new ResponseEntity<>(IUsuario_Service.list(), HttpStatus.OK);
    }

    @GetMapping("/Listar/{id}")
    public ResponseEntity<Usuario_DTO> listarById(@PathVariable("id") int id){
        return new ResponseEntity<>(IUsuario_Service.getUsuarioById(id), HttpStatus.OK);
    }

    @GetMapping("/ListarByUsername/{username}")
    public ResponseEntity<Usuario_DTO> listarByUsername(@PathVariable("username") String username){
        return new ResponseEntity<>(IUsuario_Service.getUsuarioByUsername(username), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable("id") int id){IUsuario_Service.delete(id);}

    @PutMapping("/{id}")
    public void modificar(@PathVariable("id") int id,@RequestBody Usuario_DTO usuario_dto){
    IUsuario_Service.modificar(id,usuario_dto);
    }

    @GetMapping("/TotalAlimentosDonadosPorUsuario")
    public List<TotalAlimentosDonadosPorUsuario> cantidadTotal() {
        List<String[]> lista = IUsuario_Service.TotaldeAlimentosDonadosPorUsuario();
        List<TotalAlimentosDonadosPorUsuario> listaDTO = new ArrayList<>();
        for (String[] data : lista) {
            TotalAlimentosDonadosPorUsuario dto = new TotalAlimentosDonadosPorUsuario();
            dto.setNombre(data[0]);
            dto.setCantidadTotal(Integer.parseInt(data[1]));
            listaDTO.add(dto);
        }
        return listaDTO;
    }
}
