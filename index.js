const express = require('express');
const app = express();
const request = require("request");
app.get("/", (request, response) => { 
const ping = new Date(); 
ping.setHours(ping.getHours() - 3);
  response.sendStatus(200)
});
const axios = require('axios').default;
const server = require('./server');
client = require("./index");
client.config = require("./config");

app.use('/', server);
app.listen(3000);

// Script by CroneGamesPlays | AnimesWorld Studios © 2020 - 2023 × Todos os direitos reservados.

async function getAnimeEpisodeInfo({ name, season, episode }) {
  try {
      const response = await axios.get(`https://kandaraku-host-link-api.cronegames.repl.co/anime/serie/${name}/${season}/${episode}`, {
    headers: {
        "content-type": "application/json",
    },
})
    let apidata = response.data;
      return apidata;
  } catch (error) {
    throw new Error('Erro ao obter informações do anime: ' + error.message);
  }
}

//Teste de function
/*getAnimeEpisodeInfo({ name: 'sousei no onmyouji', season: '1', episode: '1' }).then(res => {
  //console.log('pronto', res);
  console.log(res.EpisodePlayerLink)
})*/

async function generatorImageAnime({ prompt, }) {
  try {
      const response = await axios.get(`https://kandaraku-host-link-api.cronegames.repl.co/anime/bot/image/${prompt}`, {
    headers: {
        "content-type": "application/json",
    },
})
    let apidata = response.data;
      return apidata;
  } catch (error) {
    throw new Error('Erro ao gerar a imagem de anime: ' + error.message);
  }
}

module.exports = {
  getAnimeEpisodeInfo,
  generatorImageAnime
}

//console.log('Online!')

process.on("uncaughtException", (err) => {
    console.log("Exceção não capturada: " + err)
});
  
process.on("unhandledRejection", (reason, promise) => {
    console.log("[GRAVE] Rejeição possivelmente não tratada em: Promise ", promise, " motivo: ", reason.message)
});