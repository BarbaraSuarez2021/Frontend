package pe.edu.upc.food_hunger_tf.serviceinterfaces;

import pe.edu.upc.food_hunger_tf.dtos.AlimentoDonado_DTO;
import pe.edu.upc.food_hunger_tf.dtos.Alimentos_donados_por_Donante_DTO;
import pe.edu.upc.food_hunger_tf.entities.Alimentos_Donados;
import pe.edu.upc.food_hunger_tf.entities.Alimentos_donados_por_Donante;

import java.time.LocalDate;
import java.util.List;

public interface IAlimentos_donados_por_Donante_Service {
    public void agregar(Alimentos_donados_por_Donante_DTO alimentosDonadosPorDonanteDto);

    public List<Alimentos_donados_por_Donante> list();

    public void delete(Long idAlimentoDonadoPorDonante);

    public void modificar(Long id, Alimentos_donados_por_Donante_DTO adpdDto);

    public List<Alimentos_donados_por_Donante> getByDonanteAndFecha(Integer idu, LocalDate fechaInicio, LocalDate fechaFin);

}
