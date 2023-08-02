package com.example.react.controller;

import com.example.react.dto.SpotifyDto;
import com.example.react.model.Spotify;
import com.example.react.service.ISpotifyService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import javax.validation.Valid;


@RestController
@RequestMapping("/spotifys")
@CrossOrigin("*")
public class SpotifyController {

    @Autowired
    private ISpotifyService spotifyService;

    @GetMapping("/{page}/{limit}")
    public ResponseEntity<Page<Spotify>> getAll(@PathVariable Integer page,
                                                @PathVariable Integer limit
    ) {
        Pageable pageable = PageRequest.of(page, limit);
        if (spotifyService.getAll(pageable).isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(spotifyService.getAll(pageable), HttpStatus.OK);
    }

    @PostMapping()
    public ResponseEntity<?> createSong(@Valid @RequestBody SpotifyDto spotifyDto) {
        Spotify spotify = new Spotify();
        BeanUtils.copyProperties(spotifyDto, spotify);
        spotifyService.addNewSong(spotify);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PutMapping("/{id}")
    @ResponseBody
    public ResponseEntity<?> publicSong(@PathVariable Long id) {
        if (spotifyService.getById(id) == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        spotifyService.publicSong(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PutMapping()
    public ResponseEntity<?> editSong(@RequestBody Spotify spotify) {
        if (spotifyService.getById(spotify.getId()) == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        spotifyService.editSongById(spotify);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/{id}")
    @ResponseBody
    public ResponseEntity<?> getSongById(@PathVariable Long id) {
        if (spotifyService.getById(id) == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(spotifyService.getById(id), HttpStatus.OK);
    }

    @GetMapping("/search/{name}/{page}")
    @ResponseBody
    public ResponseEntity<?> findByName(@PathVariable String name, @PathVariable Integer page) {
        Pageable pageable = PageRequest.of(page, 2);
        return new ResponseEntity<>(spotifyService.findByName(name, pageable), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteSong(@PathVariable Long id) {
        if (spotifyService.getById(id) == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        spotifyService.deleteSong(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
