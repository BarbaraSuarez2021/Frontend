package pe.edu.upc.food_hunger_tf.dtos;

public class Metodo_Pago_DTO {
    private int idMetodoPago;
    private String nombreMP;

    public int getIdMetodoPago() {
        return idMetodoPago;
    }

    public void setIdMetodoPago(int idMetodoPago) {
        this.idMetodoPago = idMetodoPago;
    }

    public String getNombreMP() {
        return nombreMP;
    }

    public void setNombreMP(String nombreMP) {
        this.nombreMP = nombreMP;
    }
}
