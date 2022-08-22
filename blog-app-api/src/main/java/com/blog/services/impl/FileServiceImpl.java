package com.blog.services.impl;

import com.blog.entities.Post;
import com.blog.exceptions.ImageNotFoundException;
import com.blog.repositories.PostRepo;
import com.blog.services.FileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.*;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.UUID;

@Service
public class FileServiceImpl implements FileService {

    @Autowired
    private PostRepo postRepo;

    @Override
    public String uploadImage(String path, MultipartFile file) throws IOException {

        //File name
        String name = file.getOriginalFilename();

        //Random file generate file
        String randomID = UUID.randomUUID().toString();
        String fileName = randomID.concat(name.substring(name.lastIndexOf(".")));

        //Full path
        String filePath = path + File.separator + fileName;

        //create folder if not created
        File f = new File(path);
        if (!f.exists()) {
            f.mkdir();
        }

        //File copy
        Files.copy(file.getInputStream(), Paths.get(filePath));

        return name;
    }

    @Override
    public InputStream getResource(String path, String fileName) throws FileNotFoundException {

        Post post = this.postRepo.findByImageName(fileName).orElseThrow(() -> new ImageNotFoundException("Image", "Name", fileName));
        String fullPath = path + File.separator + fileName;
        InputStream is = new FileInputStream(fullPath);
        return is;
    }
}
