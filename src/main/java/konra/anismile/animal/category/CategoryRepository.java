package konra.anismile.animal.category;

import konra.anismile.animal.category.Category;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CategoryRepository extends JpaRepository<Category, Integer> {

    List<Category> findAll();
    Category findCategoryById(Integer id);
    Category findCategoryByName(String name);
}
