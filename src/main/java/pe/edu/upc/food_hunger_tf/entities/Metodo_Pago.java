package pe.edu.upc.food_hunger_tf.entities;

import javax.persistence.*;

@Entity
@Table(name = "Metodo_Pago")
public class Metodo_Pago {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idMetodoPago;
    @Column(name = "nombreMP", length = 25,nullable = false)
    private String nombreMP;

    public Metodo_Pago() {
    }

    public Metodo_Pago(int idMetodoPago, String nombreMP) {
        this.idMetodoPago = idMetodoPago;
        this.nombreMP = nombreMP;
    }

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
