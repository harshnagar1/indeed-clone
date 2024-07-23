package com.indeed.server.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.indeed.server.constants.APIConstants;
import com.indeed.server.dto.PostDTO;
import com.indeed.server.model.PostModel;
import com.indeed.server.services.PostService;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@RestController
@Slf4j
@RequiredArgsConstructor
public class PostController {

    final PostService postService;

    @PostMapping(APIConstants.SAVE_POST)
    public PostModel savePost(@Valid @RequestBody PostDTO PostDTORequest) {
        log.info("saving post #######");
        log.info("Saving post #######");
        log.info("Received PostDTO: {}", PostDTORequest);
        // System.out.println("this is post ",PostDTORequest);

        return this.postService.savePost(PostDTORequest);
    }

    @GetMapping(APIConstants.SAVE_ALL_POSTS)
    public List<PostModel> getAllPosts() {
        log.info(" getting all posts");
        return this.postService.getAllPosts();
    }
}
