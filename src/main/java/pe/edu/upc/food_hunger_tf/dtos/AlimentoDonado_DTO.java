package pe.edu.upc.food_hunger_tf.dtos;

import lombok.Data;

import javax.persistence.Column;
import java.util.Date;
@Data
public class AlimentoDonado_DTO {
    private int idAlimentos_Donados;

    private String Nombre_alimento;

    private String Descripcion_especifico;

    private Date FechaEmision;

    private Date FechaVencimiento;

    private int id_TipoAlimento;

}
