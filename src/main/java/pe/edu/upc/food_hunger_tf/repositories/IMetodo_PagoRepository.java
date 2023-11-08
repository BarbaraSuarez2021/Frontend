package pe.edu.upc.food_hunger_tf.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pe.edu.upc.food_hunger_tf.entities.Metodo_Pago;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface IMetodo_PagoRepository extends JpaRepository<Metodo_Pago, Integer> {

}
