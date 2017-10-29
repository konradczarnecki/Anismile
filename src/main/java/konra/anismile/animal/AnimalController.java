package konra.anismile.animal;

import konra.anismile.animal.category.Category;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/animals")
@CrossOrigin(origins = "http://localhost:4200")
public class AnimalController {

    private final static Logger log = Logger.getLogger(AnimalController.class);

    AnimalService service;

    @Autowired
    public AnimalController(AnimalService service) {
        this.service = service;
    }

    @RequestMapping("/get-all")
    public Page<Animal> getAll(@RequestParam(name = "page") Integer page){

        return service.getAllAnimals(page);
    }

    @RequestMapping("/get-by-id")
    public Animal getById(@RequestParam(name = "id") Integer id){

        return service.getAnimalById(id);
    }

    @RequestMapping("/categories")
    public List<Category> getCategories(){

        return service.getCategories();
    }
}
