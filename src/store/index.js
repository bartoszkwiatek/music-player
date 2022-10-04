import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentSongIndex: 0,
    settings: {
      volume: 50,
      random: false,
      repeat: false,
      loop: false,
    },
    songs: [],
  },
  getters: {
    nextSongIndex(state) {
      const nextSongIndex = state.currentSongIndex + 1;
      const lastSongIndex = state.songs.length - 1;
      // return random song index
      if (state.settings.random)
        return Math.floor(Math.random() * state.songs.length);
      // return first song index
      if (nextSongIndex > lastSongIndex && state.settings.loop) return 0;
      // return null (for UI)
      if (nextSongIndex > lastSongIndex) return null;
      // return next song index
      return nextSongIndex;
    },
    previousSongIndex(state) {
      const previousSongIndex = state.currentSongIndex - 1;
      // return random song index
      if (state.settings.random)
        return Math.floor(Math.random() * state.songs.length);
      // return last song index
      if (previousSongIndex < 0 && state.settings.loop)
        return state.songs.length - 1;
      // return null (for UI)
      if (previousSongIndex < 0) return null;
      // return previous song index
      return previousSongIndex;
    },
  },
  mutations: {
    addSongs(state, songs) {
      state.songs = [...state.songs, ...songs];
    },
    playSong(state, songIndex) {
      if (state.songs[songIndex] !== undefined)
        state.currentSongIndex = songIndex;
    },
    setSettings(state, settings) {
      state.settings = { ...state.settings, ...settings };
    },
    toggleFavourite(state, songIndex) {
      state.songs.splice(songIndex, 1, {
        ...state.songs[songIndex],
        favourite: !state.songs[songIndex].favourite,
      });
    },
  },
});
