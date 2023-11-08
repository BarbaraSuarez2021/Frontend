package pe.edu.upc.food_hunger_tf.serviceinterfaces;

import pe.edu.upc.food_hunger_tf.dtos.Tipo_Alimento_DTO;
import pe.edu.upc.food_hunger_tf.entities.Tipo_alimento;
import java.util.List;

public interface ITipo_Alimento_Service {

    public void insert(Tipo_Alimento_DTO tipo_alimento);

    public List<Tipo_alimento> list();

    public void delete(int id_Tipo_Alimento);

    public void modificar(int id, Tipo_Alimento_DTO tipo_alimento_dto);

    public List<String[]> cantidadAlimentosXtipoAlimento();
}