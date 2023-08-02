package com.example.react.service.impl;

import com.example.react.model.Spotify;
import com.example.react.repository.ISpotifyRepository;
import com.example.react.service.ISpotifyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class SpotifyService implements ISpotifyService {
    @Autowired
    private ISpotifyRepository spotifyRepository;


    @Override
    public Page<Spotify> getAll(Pageable pageable) {
        return spotifyRepository.getAllSong(pageable);
    }

    @Override
    public void addNewSong(Spotify spotify) {
        spotifyRepository.addNewSong(spotify);
    }

    @Override
    public void publicSong(Long id) {
        spotifyRepository.publicSong(id);
    }

    @Override
    public Spotify getById(Long id) {
        return spotifyRepository.getSongById(id);
    }

    @Override
    public Page<Spotify> findByName(String name, Pageable pageable) {
        return spotifyRepository.findSongByName(name, pageable);
    }

    @Override
    public void editSongById(Spotify spotify) {
        spotifyRepository.editSong(spotify);
    }

    @Override
    public void deleteSong(Long id) {
        spotifyRepository.deleteSongById(id);
    }
}
