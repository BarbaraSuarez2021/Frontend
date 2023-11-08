package pe.edu.upc.food_hunger_tf.entities;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.management.relation.Role;
import javax.persistence.*;
import java.util.Collection;
import java.util.List;

@Entity
@Table(name = "Usuario")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Usuario implements UserDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idU", nullable = false)
    private int idU;
    @Column(name = "UsernameU", length = 30,nullable = false)
    private String UsernameU;
    @Column(name = "NombreU", length = 30,nullable = false)
    private String NombreU;
    @Column(name = "ApellidoU", length = 30,nullable = false)
    private String ApelidoU;
    @Column(name = "DonacionU", length = 40,nullable = false)
    private String DonacionU;
    private String Contrasena;

    @JoinColumn(name = "id_Roles")
    @ManyToOne(targetEntity = Roles.class)
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    private Roles roles;

    @JoinColumn(name = "idTipoDonacion")
    @ManyToOne(targetEntity = Tipo_donacion.class)
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    private Tipo_donacion tipoDonacion;

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(new SimpleGrantedAuthority(roles.getTipo()));
    }

    @Override
    public String getPassword() {
        return Contrasena;
    }

    @Override
    public String getUsername() {
        return UsernameU;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }


}
