package com.blog.payloads;

import lombok.Data;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Data
public class CategoryDto {

    private Integer categoryId;
    @NotBlank(message = "Category title should not be blank")
    @Size(min = 5, message = "Category title should be minimum 5 character")
    private String categoryTitle;
    @NotBlank(message = "Category Description should not be blank")
    @Size(min = 10, message = "Category Description should be minimum 10 character")
    private String categoryDescription;
}