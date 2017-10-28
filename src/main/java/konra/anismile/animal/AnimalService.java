package konra.anismile.animal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@Transactional
public class AnimalService {

    AnimalRepository repository;

    @Autowired
    public AnimalService(AnimalRepository repository) {
        this.repository = repository;
    }

    public Page<Animal> getAllAnimals(int page){
        return repository.findAll(new PageRequest(page, 5));
    }

    public Animal getAnimalById(Integer id) {
        return repository.findAnimalById(id);
    }
}
