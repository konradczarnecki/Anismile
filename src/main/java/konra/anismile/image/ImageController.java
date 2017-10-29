package konra.anismile.image;

import org.apache.commons.io.IOUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.io.IOException;
import java.io.InputStream;

@Controller
@RequestMapping("/images")
@Scope("session")
public class ImageController {

    private int lastImage = 0;

    @GetMapping(value = "/banner", produces = MediaType.IMAGE_JPEG_VALUE)
    public ResponseEntity<byte[]> getBannerPhoto() throws IOException {

        int chosenImage;
        do chosenImage = (int) (Math.random() * 11) + 1;
        while(chosenImage == lastImage);
        lastImage = chosenImage;

        Resource rsc = new ClassPathResource("/images/"+ chosenImage +".jpg");
        InputStream is = rsc.getInputStream();
        byte[] arr = IOUtils.toByteArray(is);

        return ResponseEntity.ok().
                header("Cache-Control", "no-cache").
                contentLength(arr.length).body(arr);
    }
}
