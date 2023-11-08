package pe.edu.upc.food_hunger_tf.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import pe.edu.upc.food_hunger_tf.entities.Usuario;

import java.util.List;
import java.util.Optional;

@Repository
public interface IUsuarioRepository extends JpaRepository<Usuario, Integer> {
    @Query("SELECT u FROM Usuario u WHERE u.NombreU = :NombreU")
    Optional<Usuario> findByNombreU(@Param("NombreU")String NombreU);

    @Query("SELECT u FROM Usuario u WHERE u.UsernameU = :UsernameU")
    Optional<Usuario> findByUsernameU(@Param("UsernameU")String UsernameU);

    @Query(value = "select u.nombreu, sum(a.cantidad_alimentos) as Cantidad from usuario u " +
            "join alimentos_donados_por_donante a\n" +
            " on u.idu = a.idu\n" +
            " group by u.nombreu\n" +
            " order by Cantidad asc",nativeQuery = true)
    public List<String[]> TotaldeAlimentosDonadosPorUsuario();


}
