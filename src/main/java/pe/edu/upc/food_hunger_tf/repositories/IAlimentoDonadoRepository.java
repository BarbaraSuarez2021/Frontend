package pe.edu.upc.food_hunger_tf.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import pe.edu.upc.food_hunger_tf.entities.Alimentos_Donados;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface IAlimentoDonadoRepository extends JpaRepository<Alimentos_Donados, Integer>{
    @Query("SELECT a FROM Alimentos_Donados a WHERE a.tipo_alimento.id_TipoAlimento = :idTipoAlimento AND a.FechaVencimiento >= :fechaActual")
    List<Alimentos_Donados> findByTipoAlimentoAndFechaVencimiento(@Param("idTipoAlimento") Integer idTipoAlimento, @Param("fechaActual") LocalDate fechaActual);
}
