package pe.edu.upc.food_hunger_tf.dtos;

import lombok.Data;



@Data
public class Usuario_DTO {

    private int idU;

    private String UsernameU;

    private String NombreU;

    private String ApelidoU;

    private String DonacionU;

    private  int idTipoDonacion;

    private int idRoles;

    private String Contrasena;
}
