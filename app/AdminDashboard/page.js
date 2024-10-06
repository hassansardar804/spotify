"use client";
import React, { useState } from "react";
import { Users, Music, PlusCircle, Trash2, Upload } from "lucide-react";

const initialSongs = [
  {
    id: 1,
    title: "Song 1",
    artist: "Artist 1",
    album: "Album 1",
    genre: "Pop",
  },
  {
    id: 2,
    title: "Song 2",
    artist: "Artist 2",
    album: "Album 2",
    genre: "Rock",
  },
];

const page = () => {
  const [songs, setSongs] = useState(initialSongs);
  const [newSong, setNewSong] = useState({
    title: "",
    artist: "",
    album: "",
    releaseDate: "",
    genre: "",
    duration: "",
    audioFile: null,
    coverArt: null,
  });
  const [userCount, setUserCount] = useState(1234);
  const [musicCount, setMusicCount] = useState(23);
  const addSong = (e) => {
    e.preventDefault();
    const id = songs.length > 0 ? Math.max(...songs.map((s) => s.id)) + 1 : 1;
    setSongs([...songs, { id, ...newSong }]);

    console.log("Song to be uploaded:", newSong);
    setNewSong({
      title: "",
      artist: "",
      album: "",
      releaseDate: "",
      genre: "",
      duration: "",
      audioFile: null,
      coverArt: null,
    });
  };

  const removeSong = (id) => {
    setSongs(songs.filter((song) => song.id !== id));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewSong((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setNewSong((prev) => ({ ...prev, [name]: files[0] }));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold rounded-md font-mono bg-green-300 py-3 text-center mb-8">
        Spotify Admin Dashboard
      </h1>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <div className="flex items-center">
          <Users className="text-blue-500 mr-4" size={32} />
          <div>
            <p className="text-sm text-gray-500">Total Users</p>
            <p className="text-2xl font-semibold">{userCount}</p>
          </div>

          <Music className="text-blue-500 ml-80 mr-4" size={32} />
          <div>
            <p className="text-sm text-gray-500">Total Songs</p>
            <p className="text-2xl font-semibold">{musicCount}</p>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-semibold mb-4 flex items-center">
          <Music className="text-green-500 mr-2" size={24} />
          Manage Songs
        </h2>

        <form onSubmit={addSong} className="mb-4 grid grid-cols-2 gap-4">
          <input
            type="text"
            name="title"
            placeholder="Song Title"
            value={newSong.title}
            onChange={handleInputChange}
            className="border p-2"
            required
          />
          <input
            type="text"
            name="artist"
            placeholder="Artist"
            value={newSong.artist}
            onChange={handleInputChange}
            className="border p-2"
            required
          />
          <input
            type="text"
            name="album"
            placeholder="Album"
            value={newSong.album}
            onChange={handleInputChange}
            className="border p-2"
          />
          <input
            type="date"
            name="releaseDate"
            value={newSong.releaseDate}
            onChange={handleInputChange}
            className="border p-2"
          />
          <input
            type="text"
            name="genre"
            placeholder="Genre"
            value={newSong.genre}
            onChange={handleInputChange}
            className="border p-2"
          />
          <input
            type="text"
            name="duration"
            placeholder="Duration (e.g., 3:45)"
            value={newSong.duration}
            onChange={handleInputChange}
            className="border p-2"
          />
          <div>
            <label className="block mb-2">Audio File:</label>
            <input
              type="file"
              name="audioFile"
              accept="audio/*"
              onChange={handleFileChange}
              className="border p-2"
              required
            />
          </div>
          <div>
            <label className="block mb-2">Cover Art:</label>
            <input
              type="file"
              name="coverArt"
              accept="image/*"
              onChange={handleFileChange}
              className="border p-2"
            />
          </div>
          <button
            type="submit"
            className="bg-green-500 text-white p-2 rounded flex items-center justify-center"
          >
            <Upload size={20} className="mr-2" /> Upload Song
          </button>
        </form>

        <ul>
          {songs.map((song) => (
            <li
              key={song.id}
              className="flex justify-between items-center border-b py-2"
            >
              <span>
                {song.title} - {song.artist} ({song.album})
              </span>
              <button
                onClick={() => removeSong(song.id)}
                className="text-red-500"
              >
                <Trash2 size={20} />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default page;
