package pe.edu.upc.food_hunger_tf.dtos;

public class Monto_TotalXmetodo_pago {
    private String nameMetodo;
    private Double montoTotal;

    public String getNameMetodo() {
        return nameMetodo;
    }

    public void setNameMetodo(String nameMetodo) {
        this.nameMetodo = nameMetodo;
    }

    public Double getMontoTotal() {
        return montoTotal;
    }

    public void setMontoTotal(Double montoTotal) {
        this.montoTotal = montoTotal;
    }
}
