package pe.edu.upc.food_hunger_tf.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pe.edu.upc.food_hunger_tf.entities.Tipo_donacion;

@Repository
public interface ITipo_DonacionRepository extends JpaRepository<Tipo_donacion, Integer> {
}
