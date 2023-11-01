client = require("./index");
client.config = require("./config");

// Script by CroneGamesPlays Developer & NeoKurai Studios © 2020 - 2023 × Todos os direitos reservados.

const axios = require('axios');
//const fetch = require("node-fetch");

class Kandaraku {
  constructor() {
    // Você pode inicializar instâncias aqui, se necessário
  }

  //Métodos da class do Kandaraku

  //Animes -->

  // Função para adicionar animes em séries na database do Kandaraku importando dados do MyAnimeList
  async addAnimeSerieInfo({ mal_url }) {
    try{
      const encodedUrl = encodeURI(mal_url);
      const animeapi = await axios.get(`https://kandaraku-hosted-database-api.cronegames.repl.co/anime/serie/add?link=${encodedUrl}`, {
        headers: {
            "content-type": "application/json",
        },
      })
      return animeapi.data;
    } catch(error){
    throw new Error("Erro: "+ error.message)   
    }
  };

  // Função para adicionar informações de temporadas de animes na api Kandaraku
  async addAnimeSeasonInfo({ mal_id, season_number }) {
    try{
      const animeapi = await axios.get(`https://kandaraku-hosted-database-api.cronegames.repl.co/anime/season/add?id=${mal_id}&season=${season_number}`, {
        headers: {
            "content-type": "application/json",
        },
      })
      return animeapi.data;
    } catch(error) {
      throw new Error("Erro: "+ error.message) 
    }
  };

  // Função para adicionar as informações de um episódio na database Kandaraku
  async addAnimeEpisodeInfo({ mal_id, season_number, episode_number, download_uploader_videomp4_url }) {
    try{
      const animeapi = await axios.get(`https://kandaraku-hosted-database-api.cronegames.repl.co/anime/episode/add?id=${mal_id}&season=${season_number}&episode=${episode_number}&mp4urluploader=${download_uploader_videomp4_url}`, {
        headers: {
            "content-type": "application/json",
        },
      })
      return animeapi.data;
    } catch(error) {
      throw new Error("Erro: "+ error.message) 
    }
  };

  // Função para adicionar as informações de um filme na database Kandaraku
  async addAnimeMovieInfo({ mal_url, download_uploader_videomp4_url }) {
    try{
      const animeapi = await axios.get(`https://kandaraku-hosted-database-api.cronegames.repl.co/anime/movie/add?link=${mal_url}&mp4urluploader=${download_uploader_videomp4_url}`, {
        headers: {
            "content-type": "application/json",
        },
      })
      return animeapi.data;
    } catch(error) {
      throw new Error("Erro: "+ error.message) 
    }
  };

  // Função para obter as informações de um anime na database Kandaraku
  async getAnimeSerieInfo({ mal_url }) {
    try{
      const encodedUrl = encodeURI(mal_url);
      const animeapi = await axios.get(`https://kandaraku-hosted-database-api.cronegames.repl.co/anime/serie/get?link=${encodedUrl}`, {
        headers: {
            "content-type": "application/json",
        },
      })
      return animeapi.data;
    } catch(error){
    throw new Error("Erro: "+ error.message)   
    }
  };

// Função para obter as informações de uma temporada de anime na database Kandaraku
  async getAnimeSeasonInfo({ mal_id, season_number }) {
    try{
      const animeapi = await axios.get(`https://kandaraku-hosted-database-api.cronegames.repl.co/anime/season/get?id=${mal_id}&season=${season_number}`, {
        headers: {
            "content-type": "application/json",
        },
      })
      return animeapi.data;
    } catch(error){
    throw new Error("Erro: "+ error.message)   
    }
  };

  // Função para obter as informações de um episódio de anime na database Kandaraku
  async getAnimeEpisodeInfo({ mal_id, season_number, episode_number }) {
    try{
      const animeapi = await axios.get(`https://kandaraku-hosted-database-api.cronegames.repl.co/anime/episode/get?id=${mal_id}&season=${season_number}&episode=${episode_number}`, {
        headers: {
            "content-type": "application/json",
        },
      })
      return animeapi.data;
    } catch(error){
    throw new Error("Erro: "+ error.message)   
    }
  };

  // Função para obter as informações de um filme de anime na database Kandaraku
  async getAnimeMovieInfo({ mal_url }) {
    try{
      const encodedUrl = encodeURI(mal_url);
      const animeapi = await axios.get(`https://kandaraku-hosted-database-api.cronegames.repl.co/anime/movie/get?link=${encodedUrl}`, {
        headers: {
            "content-type": "application/json",
        },
      })
      return animeapi.data;
    } catch(error){
    throw new Error("Erro: "+ error.message)   
    }
  };

  // Função para iniciar uma conversa com um chatbot (GPT-4) na api Kandaraku
  async conversationAnimeBotChat({ message }) {
    try{
      const animeapi = await axios.get(`https://kandaraku-hosted-database-api.cronegames.repl.co/anime/bot/chat?message=${message}`, {
        headers: {
            "content-type": "application/json",
        },
      })
      return animeapi.data;
    } catch(error){
    throw new Error("Erro: "+ error.message)   
    }
  };

  // Função para gerar imagens de anime na api Kandaraku
  async generatorAnimeBotImage({ prompt }) {
    try{
      const animeapi = await axios.get(`https://kandaraku-hosted-database-api.cronegames.repl.co/anime/bot/image?prompt=${prompt}`, {
        headers: {
            "content-type": "application/json",
        },
      })
      return animeapi.data;
    } catch(error){
    throw new Error("Erro: "+ error.message)   
    }
  };

  // Mangas -->

  // API -->

  // Função para obter as informações de status da api Kandaraku
  async getKandarakuApiInfoStatus() {
    try{
      const infoapi = await axios.get(`https://kandaraku-hosted-database-api.cronegames.repl.co/api/info/get`, {
        headers: {
            "content-type": "application/json",
        },
      })
      return infoapi.data;
    } catch(error){
    throw new Error("Erro: "+ error.message)   
    }
  };
}

module.exports = Kandaraku;

require("./test");
require("./update");

process.on("uncaughtException", (err) => {
    console.log("Exceção não capturada: " + err)
});

process.on("unhandledRejection", (reason, promise) => {
    console.log("[GRAVE] Rejeição possivelmente não tratada em: Promise ", promise, " motivo: ", reason.message)
});