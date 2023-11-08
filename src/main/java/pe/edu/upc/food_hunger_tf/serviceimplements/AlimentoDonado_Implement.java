package pe.edu.upc.food_hunger_tf.serviceimplements;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pe.edu.upc.food_hunger_tf.dtos.AlimentoDonado_DTO;

import pe.edu.upc.food_hunger_tf.entities.*;
import pe.edu.upc.food_hunger_tf.repositories.IAlimentoDonadoRepository;
import pe.edu.upc.food_hunger_tf.repositories.ITipo_AlimentoRepository;

import pe.edu.upc.food_hunger_tf.serviceinterfaces.IAlimentoDonado_Service;

import javax.persistence.EntityNotFoundException;
import java.time.LocalDate;
import java.util.List;

@Service
public class AlimentoDonado_Implement implements IAlimentoDonado_Service {
    @Autowired
    public IAlimentoDonadoRepository aD;

    @Autowired
    public ITipo_AlimentoRepository tA;

    public void agregar(AlimentoDonado_DTO donadoDto){

        Tipo_alimento talimento = tA.findById(donadoDto.getId_TipoAlimento())
                .orElseThrow(() -> new EntityNotFoundException("No se encontró el rol con ID " + donadoDto.getId_TipoAlimento()));

        Alimentos_Donados adonado = new Alimentos_Donados();

        adonado.setNombre_alimento(donadoDto.getNombre_alimento());
        adonado.setTipo_alimento(talimento);
        adonado.setDescripcion_especifico(donadoDto.getDescripcion_especifico());
        adonado.setFechaEmision(donadoDto.getFechaEmision());
        adonado.setFechaVencimiento(donadoDto.getFechaVencimiento());
        aD.save(adonado);
    }
    @Override
    public List<Alimentos_Donados> list() {return aD.findAll();}

    @Override
    public void delete(int idAlimentoD) {aD.deleteById(idAlimentoD);}

    public void modificar(int id, AlimentoDonado_DTO adto){
        Alimentos_Donados alimentod = aD.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("No se encontró el usuario con ID " + id));

        Tipo_alimento tipo_alimento = tA.findById(adto.getId_TipoAlimento())
                .orElseThrow(() -> new EntityNotFoundException("No se encontró el rol con ID " + adto.getId_TipoAlimento()));

        alimentod.setNombre_alimento(adto.getNombre_alimento());

        alimentod.setTipo_alimento(tipo_alimento);

        alimentod.setDescripcion_especifico(adto.getDescripcion_especifico());
        alimentod.setFechaEmision(adto.getFechaEmision());
        alimentod.setFechaVencimiento(adto.getFechaVencimiento());
        aD.save(alimentod);
    }

    @Override
    public List<Alimentos_Donados> getByTipoAlimentoAndFechaVencimiento(Integer idTipoAlimento) {
        LocalDate fechaActual = LocalDate.now();
        return aD.findByTipoAlimentoAndFechaVencimiento(idTipoAlimento, fechaActual);
    }

}
