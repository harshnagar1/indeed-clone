package com.indeed.server.services;

import com.indeed.server.dao.PostDao;
import com.indeed.server.dto.PostDTO;
import com.indeed.server.model.PostModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PostServiceImpl implements PostService{

    /**
     * @return
     */
    @Override
    public List<PostModel> getAllPosts() {
        return postDao.findAll();
    }

    @Autowired
    PostDao postDao;

    @Override
    public PostModel savePost(PostDTO postDTO) {
        PostModel postModel = new PostModel();

        postModel.setType(postDTO.getType());
        postModel.setProfile(postDTO.getProfile());
        postModel.setDescription(postDTO.getDescription());
        postModel.setExperience(postDTO.getExperience());
        postModel.setSalary(postDTO.getSalary());
        postModel.setTechnology(postDTO.getTechnology());

        return postDao.save(postModel);
    }
}
