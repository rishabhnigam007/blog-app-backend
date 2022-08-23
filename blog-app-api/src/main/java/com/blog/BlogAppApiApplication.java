package com.blog;

import com.blog.config.AppConstants;
import com.blog.entities.Role;
import com.blog.repositories.RoleRepo;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.ArrayList;
import java.util.List;

@SpringBootApplication
public class BlogAppApiApplication implements CommandLineRunner {

    public static void main(String[] args) {
        SpringApplication.run(BlogAppApiApplication.class, args);
    }

    @Bean
    public ModelMapper modelMapper() {
        return new ModelMapper();
    }

    @Autowired
    private RoleRepo roleRepo;

    @Override
    public void run(String... args) throws Exception {
        try {
            Role adminRole = new Role();
            adminRole.setId(AppConstants.ADMIN_USER);
            adminRole.setName("ADMIN_USER");

            Role normalRole = new Role();
            normalRole.setId(AppConstants.NORMAL_USER);
            normalRole.setName("NORMAL_USER");

            List<Role> roleList = new ArrayList<>();
            roleList.add(adminRole);
            roleList.add(normalRole);

            List<Role> roles = this.roleRepo.saveAll(roleList);
            roles.forEach(r -> {
                System.out.println(r.getName());
            });
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}