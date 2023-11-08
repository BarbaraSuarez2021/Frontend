package pe.edu.upc.food_hunger_tf.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import pe.edu.upc.food_hunger_tf.entities.Alimentos_donados_por_Donante;

import java.time.LocalDate;
import java.util.List;

public interface IAlimentos_donados_por_DonanteRepository extends JpaRepository<Alimentos_donados_por_Donante, Long> {

    @Query("SELECT a FROM Alimentos_donados_por_Donante a JOIN a.alimentosDonados d JOIN a.usuario u WHERE u.idU = :idDonante AND a.fechaDonacion BETWEEN :fechaInicio AND :fechaFin")
    List<Alimentos_donados_por_Donante> findByDonanteAndFecha(@Param("idDonante") Integer idDonante, @Param("fechaInicio") LocalDate fechaInicio, @Param("fechaFin") LocalDate fechaFin);

}
