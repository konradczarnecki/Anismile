package konra.anismile.wiki;

import konra.anismile.animal.Animal;
import konra.anismile.animal.AnimalRepository;
import konra.anismile.animal.category.Category;
import konra.anismile.animal.category.CategoryRepository;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;

@Service
public class WikiService {

    CategoryRepository categoryRepository;
    AnimalRepository animalRepository;

    @Autowired
    public WikiService(CategoryRepository categoryRepository, AnimalRepository animalRepository) {
        this.categoryRepository = categoryRepository;
        this.animalRepository = animalRepository;
    }

    public Animal addFromWiki(String url, String category) throws IOException {

        Animal animal = new Animal();

        Document doc = Jsoup.connect(url).get();
        Elements paragraphs = doc.getElementsByTag("p");

        for(Element el: paragraphs){
            if(el.text().length() > 100){
                animal.setDescription(el.text());
                break;
            }
        }

        String title = doc.title();
        title = title.substring(0, title.length() - 12);
        animal.setName(title);
        animal.setPrice(1000);

        Element image = doc.getElementsByAttributeValue("property", "og:image").get(0);
        animal.setImageUrl(image.attr("content"));

        Category cat = categoryRepository.findCategoryByName(category);

        if(category != null) animal.setCategory(cat);
        else return null;

        animalRepository.save(animal);

        return animal;
    }
}
