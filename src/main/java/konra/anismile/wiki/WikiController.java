package konra.anismile.wiki;

import konra.anismile.Response;
import konra.anismile.animal.Animal;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.io.IOException;

@Controller
public class WikiController {

    WikiService service;

    @Autowired
    public WikiController(WikiService service) {
        this.service = service;
    }

    @RequestMapping("/wiki-add")
    @ResponseBody
    public Response<Animal> addFromWiki(@RequestParam(name = "url") String url,
                                        @RequestParam(name = "cat") String category) throws IOException {

        Animal a = service.addFromWiki(url, category);
        String status = a == null ? Response.failure : Response.success;
        Response<Animal> rsp = new Response<>(status);
        rsp.setItem(a);
        return rsp;
    }
}
