package com.blog.payloads;

import lombok.Data;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.util.Date;

@Data
public class PostDto {

    private Integer postId;
    @NotBlank(message = "Title should not be blank")
    @Size(min = 5, message = "Title should be minimum 5 character")
    private String title;
    @NotBlank(message = "Content should not be blank")
    @Size(min = 5, message = "Content should be minimum 5 character")
    private String content;
    private String imageName;
    private Date addedDate;
    private UserDto user;
    private CategoryDto category;
}
