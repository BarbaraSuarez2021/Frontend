package pe.edu.upc.food_hunger_tf.serviceimplements;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pe.edu.upc.food_hunger_tf.dtos.Alimentos_donados_por_Donante_DTO;
import pe.edu.upc.food_hunger_tf.entities.Alimentos_Donados;
import pe.edu.upc.food_hunger_tf.entities.Alimentos_donados_por_Donante;
import pe.edu.upc.food_hunger_tf.entities.Usuario;
import pe.edu.upc.food_hunger_tf.repositories.IAlimentoDonadoRepository;
import pe.edu.upc.food_hunger_tf.repositories.IAlimentos_donados_por_DonanteRepository;
import pe.edu.upc.food_hunger_tf.repositories.IUsuarioRepository;
import pe.edu.upc.food_hunger_tf.serviceinterfaces.IAlimentos_donados_por_Donante_Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class Alimentos_donados_por_Donante_Implement implements IAlimentos_donados_por_Donante_Service {

    @Autowired
    public IAlimentos_donados_por_DonanteRepository aDPD;

    @Autowired
    public IAlimentoDonadoRepository aD;

    @Autowired
    public IUsuarioRepository uR;

    @Override
    public void agregar(Alimentos_donados_por_Donante_DTO alimentosDonadosPorDonanteDto) {
        Usuario usuario = uR.findById(alimentosDonadosPorDonanteDto.getIdU())
                .orElseThrow(() -> new RuntimeException("No se encontró el usuario con ID " + alimentosDonadosPorDonanteDto.getIdU()));

        Alimentos_Donados alimentos_donados = aD.findById(alimentosDonadosPorDonanteDto.getIdAlimentos_Donados())
                .orElseThrow(() -> new RuntimeException("No se encontró el alimento donado con ID " + alimentosDonadosPorDonanteDto.getIdAlimentos_Donados()));

        Alimentos_donados_por_Donante alimentos_donados_por_donante = new Alimentos_donados_por_Donante();
        alimentos_donados_por_donante.setUsuario(usuario);
        alimentos_donados_por_donante.setAlimentosDonados(alimentos_donados);
        alimentos_donados_por_donante.setCantidadAlimentos(alimentosDonadosPorDonanteDto.getCantidadAlimentos());
        alimentos_donados_por_donante.setFechaDonacion(alimentosDonadosPorDonanteDto.getFechaDonacion());
        aDPD.save(alimentos_donados_por_donante);

    }

    @Override
    public List<Alimentos_donados_por_Donante> list() {
        return aDPD.findAll();
    }

    @Override
    public void delete(Long idAlimentoDonadoPorDonante) {
        aDPD.deleteById(idAlimentoDonadoPorDonante);
    }

    @Override
    public void modificar(Long id, Alimentos_donados_por_Donante_DTO adpdDto) {
        Alimentos_donados_por_Donante alimentos_donados_por_donante = aDPD.findById(id)
                .orElseThrow(() -> new RuntimeException("No se encontró el alimento donado por donante con ID " + id));

        Usuario usuario = uR.findById(adpdDto.getIdU())
                .orElseThrow(() -> new RuntimeException("No se encontró el usuario con ID " + adpdDto.getIdU()));

        Alimentos_Donados alimentos_donados = aD.findById(adpdDto.getIdAlimentos_Donados())
                .orElseThrow(() -> new RuntimeException("No se encontró el alimento donado con ID " + adpdDto.getIdAlimentos_Donados()));

        alimentos_donados_por_donante.setUsuario(usuario);
        alimentos_donados_por_donante.setAlimentosDonados(alimentos_donados);
        alimentos_donados_por_donante.setCantidadAlimentos(adpdDto.getCantidadAlimentos());
        alimentos_donados_por_donante.setFechaDonacion(adpdDto.getFechaDonacion());
        aDPD.save(alimentos_donados_por_donante);
    }

    @Override
    public List<Alimentos_donados_por_Donante> getByDonanteAndFecha(Integer id, LocalDate fechaInicio, LocalDate fechaFin) {
        return aDPD.findByDonanteAndFecha(id, fechaInicio, fechaFin);
    }
}
