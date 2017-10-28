package konra.anismile.animal;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AnimalRepository extends JpaRepository<Animal, Integer> {

    Page<Animal> findAll(Pageable pageable);
    Page<Animal> findAllByCategory(String category, Pageable pageable);
    Animal findAnimalById(Integer id);
    Animal findAnimalByName(String name);
    Page<Animal> findAnimalsByPriceBetween(Integer from, Integer to, Pageable pageable);
}
