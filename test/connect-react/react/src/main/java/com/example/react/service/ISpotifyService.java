package com.example.react.service;

import com.example.react.model.Spotify;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;


public interface ISpotifyService {
    Page<Spotify> getAll(Pageable pageable);

    void addNewSong(Spotify spotify);
    void publicSong(Long id);
    Spotify getById(Long id);
    Page<Spotify> findByName(String name, Pageable pageable);

    void editSongById(Spotify spotify);

    void deleteSong(Long id);
}
