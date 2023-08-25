![KandarakuThumb](https://cdn.discordapp.com/attachments/921914162475593809/1144472062820352000/kandaraku-api.jpg)
# Kandaraku - Informações sobre a biblioteca

Bem-vindo à documentação da biblioteca **Kandaraku**! Esta biblioteca fornece uma API para interagir com a Kandaraku Cloud, inteligência artificial, e obter informações sobre episódios de anime. Desenvolvida por **Crone Games Plays**, a Kandaraku oferece uma maneira fácil e conveniente de acessar detalhes de episódios de seus animes favoritos e usar outros recursos de IA.

## Instalação

Para começar a usar a biblioteca Kandaraku, você precisa instalá-la em seu projeto. Use o seguinte comando no seu Terminal ou Shell:

```shell
npm install kandaraku
```

## Recursos de Anime

Funções:
- `getAnimeEpisodeInfo(anime, season, episode)`
- `generatorImageAnime(prompt)`

#### Parâmetros

- `anime` (string): O nome do anime do qual você deseja obter informações.
- `season` (string): A temporada do anime que contém o episódio desejado.
- `episode` (string): O número do episódio que você deseja obter.
- `prompt` (string): O texto de prompt para indicar quais caractericas o seu desenho vai ter.

#### getAnimeEpisodeInfo - Exemplo em código de informações de episódios:

```js
const { getAnimeEpisodeInfo } = require("kandaraku");

getAnimeEpisodeInfo({ anime: "Oshi no Ko", season: "1", episode: "1").then(kand => {

const infoconsole = {
  kand.EpisodeNumber, //Exibe o número do episódio do anime
  kand.EpisodeTitle, //Exibe o titúlo do episódio do anime
  kand.AnimeName, //Exibe o nome do anime
  kand.AnimeNameJP, //Exibe o nome do anime em japonês
  kand.EpisodeDescription, //Exibe a descrição do episódio
  kand.EpisodeGenre, //Exibe o genêro do episódio
  kand.AiredAnime, //Exibe a data de lançamento do anime
  kand.EpisodeDuration, //Exibe a duração do episódio
  kand.AnimeTrailer, //Exibe o trailer do anime
  kand.EpisodeThumbnail, //Exibe a thumbnail do episódio
  kand.EpisodeScore, //Exibe a pontuação do episódio
  kand.EpisodeCast, //Exibe o elenco do episódio
  kand.EpisodePlayerLink //Exibe o link do player para assistir o episódio online gratis em legendado ou dublado
}

console.log(infoconsole)
})
```

#### generatorImageAnime - Exemplo em código de geração de imagem

```js
const { generatorImageAnime } = require("kandaraku");

generatorImageAnime({ prompt: 'boy wallpaper 4k' }).then(kand => {

  const image = kand.ResultImage; //Envia o link da imagem gerada

  console.log(image)
})
```

## Suporte

Se você tiver alguma dúvida, sugestão ou precisar de assistência, não hesite em entrar em contato conosco por meio do nosso servidor no Discord: [AnimesWorld Support](https://dsc.gg/animesworld).

Developer: CroneGamesPlays (Discord: cronegamesplays)
Editor: Guilhermewal (Discord: guilhermewal)