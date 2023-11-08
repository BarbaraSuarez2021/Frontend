package pe.edu.upc.food_hunger_tf.dtos;

public class TotalAlimentosDonadosPorUsuario {
    private String nombre;
    private int CantidadTotal;

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public int getCantidadTotal() {
        return CantidadTotal;
    }

    public void setCantidadTotal(int cantidadTotal) {
        CantidadTotal = cantidadTotal;
    }
}
