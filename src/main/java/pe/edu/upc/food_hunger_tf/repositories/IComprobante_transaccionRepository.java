package pe.edu.upc.food_hunger_tf.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import pe.edu.upc.food_hunger_tf.entities.Comprobante_transaccion;

public interface IComprobante_transaccionRepository extends JpaRepository<Comprobante_transaccion, Long> {
}
