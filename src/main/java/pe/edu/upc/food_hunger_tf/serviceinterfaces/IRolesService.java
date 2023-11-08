package pe.edu.upc.food_hunger_tf.serviceinterfaces;


import pe.edu.upc.food_hunger_tf.dtos.RolesDTO;
import pe.edu.upc.food_hunger_tf.entities.Roles;

import java.util.List;

public interface IRolesService {
    public void insert(Roles roles);

    public List<Roles> list();

    public void delete(int idRoles);

    public void modify(int id, RolesDTO rolesDTO);

    public Roles getRolesById(int idRoles);
}
