package com.blog.payloads;

import lombok.Data;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

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

    private CategoryDto category;

    private UserDto user;

    private Set<CommentDto> comments = new HashSet<>();
}
