package com.blog.exceptions;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class InvalidUsernameOrPassword extends RuntimeException {

    private String username;
    private String password;

    public InvalidUsernameOrPassword(String username, String password) {
        super(String.format("Username : %s or Password : %s is invalid !!", username, password));
        this.username = username;
        this.password = password;
    }
}
