package com.blog.payloads;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;
import java.util.HashSet;
import java.util.Set;

@Data
public class UserDto {

    private int id;

    @NotEmpty(message = "Name should not be null")
    @Size(min = 3, message = "Username must be minimum of 3 characters")
    private String name;
    @Email(message = "Email address is not valid")
    private String email;
    @NotEmpty(message = "Password should not be null")
    @Size(min = 3, message = "Password must be minimum of 3 characters")

    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private String password;
    
    @NotEmpty(message = "About should not be null")
    private String about;
    private Set<RoleDto> roles = new HashSet<>();
}
