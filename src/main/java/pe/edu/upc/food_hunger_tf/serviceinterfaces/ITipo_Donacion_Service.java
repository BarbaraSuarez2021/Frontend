package pe.edu.upc.food_hunger_tf.serviceinterfaces;

import pe.edu.upc.food_hunger_tf.dtos.Tipo_Donacion_DTO;
import pe.edu.upc.food_hunger_tf.entities.Tipo_donacion;
import java.util.List;

public interface ITipo_Donacion_Service {

    public void insert(Tipo_Donacion_DTO tipoDonacionDto);

    public List<Tipo_donacion> list();

    public void delete(int id_Tipo_Donacion);

    public void modificar(int id, Tipo_Donacion_DTO tipo_donacion_dto);

    public Tipo_donacion getTipoDonacionById(int id_Tipo_Donacion);

}