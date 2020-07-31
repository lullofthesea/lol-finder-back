'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Champions', [
      { championId: 266, championName: "Aatrox", createdAt: new Date(), updatedAt: new Date() },
      { championId: 103, championName: "Ahri", createdAt: new Date(), updatedAt: new Date() },
      { championId: 84, championName: "Akali", createdAt: new Date(), updatedAt: new Date() },
      { championId: 12, championName: "Alistar", createdAt: new Date(), updatedAt: new Date() },
      { championId: 32, championName: "Amumu", createdAt: new Date(), updatedAt: new Date() },
      { championId: 34, championName: "Anivia", createdAt: new Date(), updatedAt: new Date() },
      { championId: 1, championName: "Annie", createdAt: new Date(), updatedAt: new Date() },
      { championId: 523, championName: "Aphelios", createdAt: new Date(), updatedAt: new Date() },
      { championId: 22, championName: "Ashe", createdAt: new Date(), updatedAt: new Date() },
      { championId: 136, championName: "AurelionSol", createdAt: new Date(), updatedAt: new Date() },
      { championId: 268, championName: "Azir", createdAt: new Date(), updatedAt: new Date() },
      { championId: 432, championName: "Bard", createdAt: new Date(), updatedAt: new Date() },
      { championId: 53, championName: "Blitzcrank", createdAt: new Date(), updatedAt: new Date() },
      { championId: 63, championName: "Brand", createdAt: new Date(), updatedAt: new Date() },
      { championId: 201, championName: "Braum", createdAt: new Date(), updatedAt: new Date() },
      { championId: 51, championName: "Caitlyn", createdAt: new Date(), updatedAt: new Date() },
      { championId: 164, championName: "Camille", createdAt: new Date(), updatedAt: new Date() },
      { championId: 69, championName: "Cassiopeia", createdAt: new Date(), updatedAt: new Date() },
      { championId: 31, championName: "Chogath", createdAt: new Date(), updatedAt: new Date() },
      { championId: 42, championName: "Corki", createdAt: new Date(), updatedAt: new Date() },
      { championId: 122, championName: "Darius", createdAt: new Date(), updatedAt: new Date() },
      { championId: 131, championName: "Diana", createdAt: new Date(), updatedAt: new Date() },
      { championId: 119, championName: "Draven", createdAt: new Date(), updatedAt: new Date() },
      { championId: 36, championName: "DrMundo", createdAt: new Date(), updatedAt: new Date() },
      { championId: 245, championName: "Ekko", createdAt: new Date(), updatedAt: new Date() },
      { championId: 60, championName: "Elise", createdAt: new Date(), updatedAt: new Date() },
      { championId: 28, championName: "Evelynn", createdAt: new Date(), updatedAt: new Date() },
      { championId: 81, championName: "Ezreal", createdAt: new Date(), updatedAt: new Date() },
      { championId: 9, championName: "Fiddlesticks", createdAt: new Date(), updatedAt: new Date() },
      { championId: 114, championName: "Fiora", createdAt: new Date(), updatedAt: new Date() },
      { championId: 105, championName: "Fizz", createdAt: new Date(), updatedAt: new Date() },
      { championId: 3, championName: "Galio", createdAt: new Date(), updatedAt: new Date() },
      { championId: 41, championName: "Gangplank", createdAt: new Date(), updatedAt: new Date() },
      { championId: 86, championName: "Garen", createdAt: new Date(), updatedAt: new Date() },
      { championId: 150, championName: "Gnar", createdAt: new Date(), updatedAt: new Date() },
      { championId: 79, championName: "Gragas", createdAt: new Date(), updatedAt: new Date() },
      { championId: 104, championName: "Graves", createdAt: new Date(), updatedAt: new Date() },
      { championId: 120, championName: "Hecarim", createdAt: new Date(), updatedAt: new Date() },
      { championId: 74, championName: "Heimerdinger", createdAt: new Date(), updatedAt: new Date() },
      { championId: 420, championName: "Illaoi", createdAt: new Date(), updatedAt: new Date() },
      { championId: 39, championName: "Irelia", createdAt: new Date(), updatedAt: new Date() },
      { championId: 427, championName: "Ivern", createdAt: new Date(), updatedAt: new Date() },
      { championId: 40, championName: "Janna", createdAt: new Date(), updatedAt: new Date() },
      { championId: 59, championName: "JarvanIV", createdAt: new Date(), updatedAt: new Date() },
      { championId: 24, championName: "Jax", createdAt: new Date(), updatedAt: new Date() },
      { championId: 126, championName: "Jayce", createdAt: new Date(), updatedAt: new Date() },
      { championId: 202, championName: "Jhin", createdAt: new Date(), updatedAt: new Date() },
      { championId: 222, championName: "Jinx", createdAt: new Date(), updatedAt: new Date() },
      { championId: 145, championName: "Kaisa", createdAt: new Date(), updatedAt: new Date() },
      { championId: 429, championName: "Kalista", createdAt: new Date(), updatedAt: new Date() },
      { championId: 43, championName: "Karma", createdAt: new Date(), updatedAt: new Date() },
      { championId: 30, championName: "Karthus", createdAt: new Date(), updatedAt: new Date() },
      { championId: 38, championName: "Kassadin", createdAt: new Date(), updatedAt: new Date() },
      { championId: 55, championName: "Katarina", createdAt: new Date(), updatedAt: new Date() },
      { championId: 10, championName: "Kayle", createdAt: new Date(), updatedAt: new Date() },
      { championId: 141, championName: "Kayn", createdAt: new Date(), updatedAt: new Date() },
      { championId: 85, championName: "Kennen", createdAt: new Date(), updatedAt: new Date() },
      { championId: 121, championName: "Khazix", createdAt: new Date(), updatedAt: new Date() },
      { championId: 203, championName: "Kindred", createdAt: new Date(), updatedAt: new Date() },
      { championId: 240, championName: "Kled", createdAt: new Date(), updatedAt: new Date() },
      { championId: 96, championName: "KogMaw", createdAt: new Date(), updatedAt: new Date() },
      { championId: 7, championName: "Leblanc", createdAt: new Date(), updatedAt: new Date() },
      { championId: 64, championName: "LeeSin", createdAt: new Date(), updatedAt: new Date() },
      { championId: 89, championName: "Leona", createdAt: new Date(), updatedAt: new Date() },
      { championId: 876, championName: "Lillia", createdAt: new Date(), updatedAt: new Date() },
      { championId: 127, championName: "Lissandra", createdAt: new Date(), updatedAt: new Date() },
      { championId: 236, championName: "Lucian", createdAt: new Date(), updatedAt: new Date() },
      { championId: 117, championName: "Lulu", createdAt: new Date(), updatedAt: new Date() },
      { championId: 99, championName: "Lux", createdAt: new Date(), updatedAt: new Date() },
      { championId: 54, championName: "Malphite", createdAt: new Date(), updatedAt: new Date() },
      { championId: 90, championName: "Malzahar", createdAt: new Date(), updatedAt: new Date() },
      { championId: 57, championName: "Maokai", createdAt: new Date(), updatedAt: new Date() },
      { championId: 11, championName: "MasterYi", createdAt: new Date(), updatedAt: new Date() },
      { championId: 21, championName: "MissFortune", createdAt: new Date(), updatedAt: new Date() },
      { championId: 82, championName: "Mordekaiser", createdAt: new Date(), updatedAt: new Date() },
      { championId: 25, championName: "Morgana", createdAt: new Date(), updatedAt: new Date() },
      { championId: 267, championName: "Nami", createdAt: new Date(), updatedAt: new Date() },
      { championId: 75, championName: "Nasus", createdAt: new Date(), updatedAt: new Date() },
      { championId: 111, championName: "Nautilus", createdAt: new Date(), updatedAt: new Date() },
      { championId: 518, championName: "Neeko", createdAt: new Date(), updatedAt: new Date() },
      { championId: 76, championName: "Nidalee", createdAt: new Date(), updatedAt: new Date() },
      { championId: 56, championName: "Nocturne", createdAt: new Date(), updatedAt: new Date() },
      { championId: 20, championName: "Nunu", createdAt: new Date(), updatedAt: new Date() },
      { championId: 2, championName: "Olaf", createdAt: new Date(), updatedAt: new Date() },
      { championId: 61, championName: "Orianna", createdAt: new Date(), updatedAt: new Date() },
      { championId: 516, championName: "Ornn", createdAt: new Date(), updatedAt: new Date() },
      { championId: 80, championName: "Pantheon", createdAt: new Date(), updatedAt: new Date() },
      { championId: 78, championName: "Poppy", createdAt: new Date(), updatedAt: new Date() },
      { championId: 555, championName: "Pyke", createdAt: new Date(), updatedAt: new Date() },
      { championId: 246, championName: "Qiyana", createdAt: new Date(), updatedAt: new Date() },
      { championId: 133, championName: "Quinn", createdAt: new Date(), updatedAt: new Date() },
      { championId: 497, championName: "Rakan", createdAt: new Date(), updatedAt: new Date() },
      { championId: 33, championName: "Rammus", createdAt: new Date(), updatedAt: new Date() },
      { championId: 421, championName: "Rek'Sai", createdAt: new Date(), updatedAt: new Date() },
      { championId: 58, championName: "Renekton", createdAt: new Date(), updatedAt: new Date() },
      { championId: 107, championName: "Rengar", createdAt: new Date(), updatedAt: new Date() },
      { championId: 92, championName: "Riven", createdAt: new Date(), updatedAt: new Date() },
      { championId: 68, championName: "Rumble", createdAt: new Date(), updatedAt: new Date() },
      { championId: 13, championName: "Ryze", createdAt: new Date(), updatedAt: new Date() },
      { championId: 113, championName: "Sejuani", createdAt: new Date(), updatedAt: new Date() },
      { championId: 235, championName: "Senna", createdAt: new Date(), updatedAt: new Date() },
      { championId: 875, championName: "Sett", createdAt: new Date(), updatedAt: new Date() },
      { championId: 35, championName: "Shaco", createdAt: new Date(), updatedAt: new Date() },
      { championId: 98, championName: "Shen", createdAt: new Date(), updatedAt: new Date() },
      { championId: 102, championName: "Shyvana", createdAt: new Date(), updatedAt: new Date() },
      { championId: 27, championName: "Singed", createdAt: new Date(), updatedAt: new Date() },
      { championId: 14, championName: "Sion", createdAt: new Date(), updatedAt: new Date() },
      { championId: 15, championName: "Sivir", createdAt: new Date(), updatedAt: new Date() },
      { championId: 72, championName: "Skarner", createdAt: new Date(), updatedAt: new Date() },
      { championId: 37, championName: "Sona", createdAt: new Date(), updatedAt: new Date() },
      { championId: 16, championName: "Soraka", createdAt: new Date(), updatedAt: new Date() },
      { championId: 50, championName: "Swain", createdAt: new Date(), updatedAt: new Date() },
      { championId: 517, championName: "Sylas", createdAt: new Date(), updatedAt: new Date() },
      { championId: 134, championName: "Syndra", createdAt: new Date(), updatedAt: new Date() },
      { championId: 223, championName: "TahmKench", createdAt: new Date(), updatedAt: new Date() },
      { championId: 163, championName: "Taliyah", createdAt: new Date(), updatedAt: new Date() },
      { championId: 91, championName: "Talon", createdAt: new Date(), updatedAt: new Date() },
      { championId: 44, championName: "Taric", createdAt: new Date(), updatedAt: new Date() },
      { championId: 17, championName: "Teemo", createdAt: new Date(), updatedAt: new Date() },
      { championId: 412, championName: "Thresh", createdAt: new Date(), updatedAt: new Date() },
      { championId: 18, championName: "Tristana", createdAt: new Date(), updatedAt: new Date() },
      { championId: 48, championName: "Trundle", createdAt: new Date(), updatedAt: new Date() },
      { championId: 23, championName: "Tryndamere", createdAt: new Date(), updatedAt: new Date() },
      { championId: 4, championName: "TwistedFate", createdAt: new Date(), updatedAt: new Date() },
      { championId: 29, championName: "Twitch", createdAt: new Date(), updatedAt: new Date() },
      { championId: 77, championName: "Udyr", createdAt: new Date(), updatedAt: new Date() },
      { championId: 6, championName: "Urgot", createdAt: new Date(), updatedAt: new Date() },
      { championId: 110, championName: "Varus", createdAt: new Date(), updatedAt: new Date() },
      { championId: 67, championName: "Vayne", createdAt: new Date(), updatedAt: new Date() },
      { championId: 45, championName: "Veigar", createdAt: new Date(), updatedAt: new Date() },
      { championId: 161, championName: "Velkoz", createdAt: new Date(), updatedAt: new Date() },
      { championId: 254, championName: "Vi", createdAt: new Date(), updatedAt: new Date() },
      { championId: 112, championName: "Viktor", createdAt: new Date(), updatedAt: new Date() },
      { championId: 8, championName: "Vladimir", createdAt: new Date(), updatedAt: new Date() },
      { championId: 106, championName: "Volibear", createdAt: new Date(), updatedAt: new Date() },
      { championId: 19, championName: "Warwick", createdAt: new Date(), updatedAt: new Date() },
      { championId: 62, championName: "MonkeyKing", createdAt: new Date(), updatedAt: new Date() },
      { championId: 498, championName: "Xayah", createdAt: new Date(), updatedAt: new Date() },
      { championId: 101, championName: "Xerath", createdAt: new Date(), updatedAt: new Date() },
      { championId: 5, championName: "XinZhao", createdAt: new Date(), updatedAt: new Date() },
      { championId: 157, championName: "Yasuo", createdAt: new Date(), updatedAt: new Date() },
      { championId: 83, championName: "Yorick", createdAt: new Date(), updatedAt: new Date() },
      { championId: 350, championName: "Yuumi", createdAt: new Date(), updatedAt: new Date() },
      { championId: 154, championName: "Zac", createdAt: new Date(), updatedAt: new Date() },
      { championId: 238, championName: "Zed", createdAt: new Date(), updatedAt: new Date() },
      { championId: 115, championName: "Ziggs", createdAt: new Date(), updatedAt: new Date() },
      { championId: 26, championName: "Zilean", createdAt: new Date(), updatedAt: new Date() },
      { championId: 142, championName: "Zoe", createdAt: new Date(), updatedAt: new Date() },
      { championId: 143, championName: "Zyra", createdAt: new Date(), updatedAt: new Date() },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Champions', null, {});
  }
};
