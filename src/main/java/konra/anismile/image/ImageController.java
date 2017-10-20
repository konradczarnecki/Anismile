package konra.anismile.image;

import org.apache.commons.io.IOUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.core.io.ResourceLoader;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.io.IOException;
import java.io.InputStream;

@Controller("/images")
public class ImageController {

    @Autowired
    ResourceLoader rl;

    @GetMapping(value = "/banner", produces = MediaType.IMAGE_JPEG_VALUE)
    public ResponseEntity<byte[]> getBannerPhoto() throws IOException {

        Resource rsc = new ClassPathResource("/images/jungle.jpg");
        InputStream is = rsc.getInputStream();
        byte[] arr = IOUtils.toByteArray(is);

        return ResponseEntity.ok().contentLength(arr.length).body(arr);
    }
}
