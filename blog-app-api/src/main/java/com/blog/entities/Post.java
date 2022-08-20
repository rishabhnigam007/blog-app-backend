package com.blog.entities;

import lombok.Data;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "posts")
@Data
public class Post {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer postId;

    @Column(name = "post_title", length = 100, nullable = false)
    private String title;

    @Column(length = 1000, nullable = false)
    private String content;

    private String imageName;

    private Date addedDate;

    @ManyToOne
    private User user;

    @ManyToOne
    @JoinColumn(name = "category_id")
    private Category category;
}
