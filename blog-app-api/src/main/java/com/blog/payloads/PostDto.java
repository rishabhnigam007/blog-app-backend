package com.blog.payloads;

import lombok.Data;

import java.util.Date;

@Data
public class PostDto {

    private String title;
    private String content;
    private String imageName;
    private Date addedDate;
    private UserDto user;
    private CategoryDto category;
}
