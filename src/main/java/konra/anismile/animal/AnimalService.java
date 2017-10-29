package konra.anismile.animal;

import konra.anismile.animal.category.Category;
import konra.anismile.animal.category.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class AnimalService {

    AnimalRepository repository;
    CategoryRepository categoryRepository;

    @Autowired
    public AnimalService(AnimalRepository repository, CategoryRepository categoryRepository) {
        this.repository = repository;
        this.categoryRepository = categoryRepository;
    }

    public Page<Animal> getAllAnimals(int page){
        return repository.findAll(new PageRequest(page, 40));
    }

    public Animal getAnimalById(Integer id) {
        return repository.findAnimalById(id);
    }

    public List<Category> getCategories(){
        return categoryRepository.findAll();
    }
}
