package pe.edu.upc.food_hunger_tf.serviceimplements;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pe.edu.upc.food_hunger_tf.dtos.Tipo_Donacion_DTO;
import pe.edu.upc.food_hunger_tf.entities.Tipo_donacion;
import pe.edu.upc.food_hunger_tf.repositories.ITipo_DonacionRepository;
import pe.edu.upc.food_hunger_tf.serviceinterfaces.ITipo_Donacion_Service;

import javax.persistence.EntityNotFoundException;
import java.util.List;

@Service
public class Tipo_Donacion_Implement implements ITipo_Donacion_Service {
    @Autowired
    public ITipo_DonacionRepository tdP;
    @Override
    public void insert(Tipo_Donacion_DTO tipoDonacionDto) {
        Tipo_donacion tipo_donacion = new Tipo_donacion();
        tipo_donacion.setNombreTD(tipoDonacionDto.getNombreTD());
        tdP.save(tipo_donacion);
    }
    @Override
    public List<Tipo_donacion> list() {return tdP.findAll();}
    @Override
    public void delete(int id_Tipo_Donacion) {tdP.deleteById(id_Tipo_Donacion);}

    @Override
    public void modificar(int id, Tipo_Donacion_DTO tipo_donacion_dto) {
        Tipo_donacion tipo_donacion = tdP.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("No se encontró el usuario con ID " + id));
        tipo_donacion.setNombreTD(tipo_donacion_dto.getNombreTD());
        tdP.save(tipo_donacion);
    }

    @Override
    public Tipo_donacion getTipoDonacionById(int id) {
        return tdP.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("No se encontró el usuario con ID " + id));
    }
}
