package pe.edu.upc.food_hunger_tf.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import pe.edu.upc.food_hunger_tf.entities.Tipo_alimento;

import java.util.List;

@Repository
public interface ITipo_AlimentoRepository extends JpaRepository<Tipo_alimento, Integer> {
    @Query(value = "select t.nombre_ta, count(*) from tipo_alimento t join alimentos_donados a \n" +
            " on t.id_tipo_alimento = a.id_tipo_alimento\n" +
            " group by t.nombre_ta\n",nativeQuery = true)
    public List<String[]> cantidadAlimentosXtipoAlimento();
}
