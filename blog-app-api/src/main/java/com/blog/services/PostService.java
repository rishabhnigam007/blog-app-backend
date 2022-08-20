package com.blog.services;

import com.blog.payloads.PostDto;

import java.util.List;

public interface PostService {

    PostDto createPost(PostDto postDto, Integer userId, Integer categoryId);

    PostDto updatePost(PostDto postDto, Integer postId);

    void deletePost(Integer postId);

    List<PostDto> getAllPost();

    PostDto getPostById(Integer postId);

    List<PostDto> getAllPostsByCategoryId(Integer categoryId);

    List<PostDto> getAllPostsByUserId(Integer UserId);

    List<PostDto> searchPosts(String keyword);
}