package com.example.react.repository;

import com.example.react.model.Spotify;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;

@Transactional
public interface ISpotifyRepository extends JpaRepository<Spotify, Long> {
    @Query(nativeQuery = true, value = "select * from spotify")
    Page<Spotify> getAllSong(Pageable pageable);

    @Modifying
    @Query(nativeQuery = true, value = "insert into spotify (name, single, artist, time, likes, song_status) " +
            "values (:#{#spotify.name},:#{#spotify.single},:#{#spotify.artist},:#{#spotify.time},:#{#spotify.likes},:#{#spotify.songStatus});")
    void addNewSong(@Param("spotify") Spotify spotify);

    @Modifying
    @Query(nativeQuery = true, value = "update spotify " +
            "set song_status = true where id = :idEdit")
    void publicSong(@Param("idEdit") Long idEdit);

    @Query(nativeQuery = true, value = "select * from spotify where id = :idSearch")
    Spotify getSongById(@Param("idSearch") Long idSearch);

    @Query(nativeQuery = true, value = "select * from spotify where name like concat('%', :name, '%')")
    Page<Spotify> findSongByName(@Param("name") String name, Pageable pageable);

    @Modifying
    @Query(nativeQuery = true, value = "update spotify " +
            "set name = :#{#spotify.name}, single = :#{#spotify.single} ," +
            "artist = :#{#spotify.artist}, time = :#{#spotify.time} " +
            "where id = :#{#spotify.id}")
    void editSong(@Param("spotify") Spotify spotify);

    @Modifying
    @Query(nativeQuery = true, value = "delete from spotify where id = :id")
    void deleteSongById(@Param("id") Long id);
}
