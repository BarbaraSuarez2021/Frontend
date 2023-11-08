package pe.edu.upc.food_hunger_tf.serviceimplements;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pe.edu.upc.food_hunger_tf.dtos.Tipo_Alimento_DTO;
import pe.edu.upc.food_hunger_tf.entities.Tipo_alimento;
import pe.edu.upc.food_hunger_tf.repositories.ITipo_AlimentoRepository;
import pe.edu.upc.food_hunger_tf.serviceinterfaces.ITipo_Alimento_Service;

import javax.persistence.EntityNotFoundException;
import java.util.List;

@Service
public class Tipo_Alimento_Implement implements ITipo_Alimento_Service {
    @Autowired
    public ITipo_AlimentoRepository tP;

    @Override
    public void insert(Tipo_Alimento_DTO tipoAlimentoDto) {
        Tipo_alimento tipo_alimento = new Tipo_alimento();
        tipo_alimento.setNombre_TA(tipoAlimentoDto.getNombre_TA());
        tipo_alimento.setDescripcion_general(tipoAlimentoDto.getDescripcion_general());
        tP.save(tipo_alimento);
    }

    @Override
    public List<Tipo_alimento> list() {
        return tP.findAll();
    }

    @Override
    public void delete(int id_TipoAlimento) {tP.deleteById(id_TipoAlimento);}

    @Override
    public void modificar(int id, Tipo_Alimento_DTO tipo_alimento_dto) {
        Tipo_alimento tipo_alimento = tP.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("No se encontró el usuario con ID " + id));
        tipo_alimento.setNombre_TA(tipo_alimento_dto.getNombre_TA());
        tipo_alimento.setDescripcion_general(tipo_alimento_dto.getDescripcion_general());
        tP.save(tipo_alimento);
    }

    @Override
    public List<String[]> cantidadAlimentosXtipoAlimento() {
        return tP.cantidadAlimentosXtipoAlimento();
    }
}
