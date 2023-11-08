package pe.edu.upc.food_hunger_tf.serviceinterfaces;

import pe.edu.upc.food_hunger_tf.dtos.Usuario_DTO;
import pe.edu.upc.food_hunger_tf.entities.Tipo_donacion;
import pe.edu.upc.food_hunger_tf.entities.Usuario;

import java.util.List;

public interface IUsuario_Service {
    public void registrar(Usuario_DTO udto);

    public List<Usuario_DTO> list();

    public void delete(int idUsuario);

    public void modificar(int id, Usuario_DTO usdto);

    public List<String[]> TotaldeAlimentosDonadosPorUsuario();

    public Usuario_DTO getUsuarioById(int idUsuario);

    public Usuario_DTO getUsuarioByUsername(String username);

}
