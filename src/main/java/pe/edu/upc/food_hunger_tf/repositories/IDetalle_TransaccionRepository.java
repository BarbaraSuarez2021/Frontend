package pe.edu.upc.food_hunger_tf.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import pe.edu.upc.food_hunger_tf.entities.Detalle_transaccion;

public interface IDetalle_TransaccionRepository extends JpaRepository<Detalle_transaccion,Long> {
}
