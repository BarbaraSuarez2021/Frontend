package pe.edu.upc.food_hunger_tf.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pe.edu.upc.food_hunger_tf.entities.Roles;

@Repository
public interface IRolesRepository extends JpaRepository<Roles, Integer> {
}
