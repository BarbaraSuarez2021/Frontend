package pe.edu.upc.food_hunger_tf.auth;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import pe.edu.upc.food_hunger_tf.entities.Tipo_donacion;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class RegisterRequest {
    String username;
    String password;
    String lastname;
    int tdonacion;
    int idRoles;
    String DonacionU;

}
