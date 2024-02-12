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
      const animeapi = await axios.get(`https://e994cdea-0a2f-4920-b7a4-6bf665882a01-00-1p6ijggn5e2t1.janeway.replit.dev/anime/serie/add?link=${encodedUrl}`, {
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
      const animeapi = await axios.get(`https://e994cdea-0a2f-4920-b7a4-6bf665882a01-00-1p6ijggn5e2t1.janeway.replit.dev/anime/season/add?id=${mal_id}&season=${season_number}`, {
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
      const animeapi = await axios.get(`https://e994cdea-0a2f-4920-b7a4-6bf665882a01-00-1p6ijggn5e2t1.janeway.replit.dev/anime/episode/add?id=${mal_id}&season=${season_number}&episode=${episode_number}&mp4urluploader=${download_uploader_videomp4_url}`, {
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
      const animeapi = await axios.get(`https://e994cdea-0a2f-4920-b7a4-6bf665882a01-00-1p6ijggn5e2t1.janeway.replit.dev/anime/movie/add?link=${mal_url}&mp4urluploader=${download_uploader_videomp4_url}`, {
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
  async getAnimeSerieInfo({ mal_name, mal_url }) {
    try {
      if (!mal_name && !mal_url) {
        throw new Error("Você deve fornecer pelo menos um dos parâmetros 'mal_name' ou 'mal_url'.");
      }

      let apiUrl;

      if (mal_name) {
        apiUrl = `https://e994cdea-0a2f-4920-b7a4-6bf665882a01-00-1p6ijggn5e2t1.janeway.replit.dev/anime/serie/get?name=${encodeURIComponent(mal_name)}`;
      } else {
        apiUrl = `https://e994cdea-0a2f-4920-b7a4-6bf665882a01-00-1p6ijggn5e2t1.janeway.replit.dev/anime/serie/get?link=${encodeURIComponent(mal_url)}`;
      }

      const animeapi = await axios.get(apiUrl, {
        headers: {
          "content-type": "application/json",
        },
      });

      return animeapi.data;
    } catch (error) {
      throw new Error("Erro: " + error.message);
    }
  };

  // Função para obter as informações de uma temporada de anime na database Kandaraku
  async getAnimeSeasonInfo({ mal_name, mal_id, season_number }) {
    try {
      if (!mal_name && !mal_id) {
        throw new Error("Você deve fornecer pelo menos um dos parâmetros 'mal_name' ou 'mal_id'.");
      }

      let apiUrl;

      if (mal_name) {
        apiUrl = `https://e994cdea-0a2f-4920-b7a4-6bf665882a01-00-1p6ijggn5e2t1.janeway.replit.dev/anime/season/get?name=${encodeURIComponent(mal_name)}&season=${season_number}`;
      } else if (mal_id) {
        apiUrl = `https://e994cdea-0a2f-4920-b7a4-6bf665882a01-00-1p6ijggn5e2t1.janeway.replit.dev/anime/season/get?id=${mal_id}&season=${season_number}`;
      }

      const animeapi = await axios.get(apiUrl, {
        headers: {
          "content-type": "application/json",
        },
      });

      return animeapi.data;
    } catch (error) {
      throw new Error("Erro: " + error.message);
    }
  };

  // Função para obter as informações de um episódio de anime na database Kandaraku
  async getAnimeEpisodeInfo({ mal_name, mal_id, season_number, episode_number }) {
    try {
      if (!mal_name && !mal_id) {
        throw new Error("Você deve fornecer pelo menos um dos parâmetros 'mal_name' ou 'mal_id'.");
      }

      let apiUrl;

      if (mal_name) {
        apiUrl = `https://e994cdea-0a2f-4920-b7a4-6bf665882a01-00-1p6ijggn5e2t1.janeway.replit.dev/anime/episode/get?name=${encodeURIComponent(mal_name)}&season=${season_number}&episode=${episode_number}`;
      } else if (mal_id) {
        apiUrl = `https://e994cdea-0a2f-4920-b7a4-6bf665882a01-00-1p6ijggn5e2t1.janeway.replit.dev/anime/episode/get?id=${mal_id}&season=${season_number}&episode=${episode_number}`;
      }

      const animeapi = await axios.get(apiUrl, {
        headers: {
          "content-type": "application/json",
        },
      });

      return animeapi.data;
    } catch (error) {
      throw new Error("Erro: " + error.message);
    }
  };

  // Função para obter as informações de um filme de anime na database Kandaraku
  async getAnimeMovieInfo({ mal_name, mal_url }) {
    try {
      if (!mal_name && !mal_url) {
        throw new Error("Você deve fornecer pelo menos um dos parâmetros 'mal_name' ou 'mal_url'.");
      }

      let apiUrl;

      if (mal_name) {
        apiUrl = `https://e994cdea-0a2f-4920-b7a4-6bf665882a01-00-1p6ijggn5e2t1.janeway.replit.dev/anime/movie/get?name=${encodeURIComponent(mal_name)}`;
      } else {
        apiUrl = `https://e994cdea-0a2f-4920-b7a4-6bf665882a01-00-1p6ijggn5e2t1.janeway.replit.dev/anime/movie/get?link=${encodeURIComponent(mal_url)}`;
      }

      const animeapi = await axios.get(apiUrl, {
        headers: {
          "content-type": "application/json",
        },
      });

      return animeapi.data;
    } catch (error) {
      throw new Error("Erro: " + error.message);
    }
  };

  // Função para iniciar uma conversa com um chatbot (GPT-4) na api Kandaraku
  async conversationAnimeBotChat({ message }) {
    try{
      const animeapi = await axios.get(`https://e994cdea-0a2f-4920-b7a4-6bf665882a01-00-1p6ijggn5e2t1.janeway.replit.dev/anime/bot/chat?message=${message}`, {
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
      const animeapi = await axios.get(`https://e994cdea-0a2f-4920-b7a4-6bf665882a01-00-1p6ijggn5e2t1.janeway.replit.dev/anime/bot/image?prompt=${prompt}`, {
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
      const infoapi = await axios.get(`https://e994cdea-0a2f-4920-b7a4-6bf665882a01-00-1p6ijggn5e2t1.janeway.replit.dev/api/info/get`, {
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