package pe.edu.upc.food_hunger_tf.serviceimplements;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pe.edu.upc.food_hunger_tf.dtos.RolesDTO;
import pe.edu.upc.food_hunger_tf.entities.Metodo_Pago;
import pe.edu.upc.food_hunger_tf.entities.Roles;
import pe.edu.upc.food_hunger_tf.repositories.IRolesRepository;
import pe.edu.upc.food_hunger_tf.serviceinterfaces.IRolesService;

import javax.persistence.EntityNotFoundException;
import java.util.List;

@Service
public class RolesServiceImpl implements IRolesService {

    @Autowired
    public IRolesRepository rR;

    @Override
    public void insert(Roles roles) {
        rR.save(roles);
    }

    @Override
    public List<Roles> list() {
        return rR.findAll();
    }

    @Override
    public void delete(int idRoles) {
        rR.deleteById(idRoles);
    }

    @Override
    public void modify(int id, RolesDTO rolesDTO) {
        Roles roles = rR.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("No se encontró el metodo de pago con ID " + id));
        roles.setTipo(roles.getTipo());
        rR.save(roles);
    }

    @Override
    public Roles getRolesById(int idRoles){
        return rR.findById(idRoles).orElseThrow(() -> new EntityNotFoundException("No se encontró el metodo de pago con ID " + idRoles));
    }
}
