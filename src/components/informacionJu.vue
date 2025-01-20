<template>
    <div class="player-info-container">
      <div class="player-header">
        <img :src="player.photo" alt="Foto del Jugador" class="player-photo" />
        <div class="player-description">
          <h1>{{ player.name }}</h1>
          <p>
            {{ player.description }}
          </p>
        </div>
      </div>
  
      <div class="player-stats">
        <h2>Estadísticas</h2>
        <table class="stats-table">
          <thead>
            <tr>
              <th>Goles</th>
              <th>Asistencias</th>
              <th>Tiros Totales</th>
              <th>Tiros al arco</th>
              <th>Regates Exitosos</th>
              <th>Duelos Ganados</th>
              <th>Fecha de Partido</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="stat in player.stats" :key="stat.year">
              <td>{{ stat.goals }}</td>
              <td>{{ stat.assists }}</td>
              <td>{{ stat.totalShots }}</td>
              <td>{{ stat.shotsOnTarget }}</td>
              <td>{{ stat.successfulDribbles }}</td>
              <td>{{ stat.duelsWon }}</td>
              <td>{{ stat.year }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "InformacionJu",
    data() {
      return {
        player: {
          name: "Lionel Messi",
          photo: "@/assets/messi.jpg",
          description: `Lionel Andrés Messi Cuccittini, conocido como Leo Messi, es un futbolista argentino que juega como delantero o centrocampista. Desde 2023, integra el plantel del Inter Miami de la MLS canadiense-estadounidense. Es considerado con frecuencia el mejor jugador del mundo y uno de los mejores de todos los tiempos.`,
          stats: [
            { year: 2010, goals: 0, assists: 0, totalShots: 0, shotsOnTarget: 0, successfulDribbles: 0, duelsWon: 0 },
            { year: 2018, goals: 0, assists: 0, totalShots: 0, shotsOnTarget: 0, successfulDribbles: 0, duelsWon: 0 },
            { year: 2020, goals: 0, assists: 0, totalShots: 0, shotsOnTarget: 0, successfulDribbles: 0, duelsWon: 0 },
            { year: 2021, goals: 0, assists: 0, totalShots: 0, shotsOnTarget: 0, successfulDribbles: 0, duelsWon: 0 },
            { year: 2022, goals: 0, assists: 0, totalShots: 0, shotsOnTarget: 0, successfulDribbles: 0, duelsWon: 0 },
          ],
        },
      };
    },
  };
  </script>
  
  <style scoped>
  .player-info-container {
    padding: 20px;
    background-color: #1d1f23;
    color: #fff;
    font-family: Arial, sans-serif;
  }
  
  .player-header {
    display: flex;
    align-items: flex-start;
    margin-bottom: 20px;
  }
  
  .player-photo {
    width: 200px;
    height: 200px;
    border-radius: 10px;
    margin-right: 20px;
    object-fit: cover;
    border: 3px solid #4caf50;
  }
  
  .player-description h1 {
    margin: 0 0 10px 0;
    font-size: 28px;
    color: #fff;
  }
  
  .player-description p {
    font-size: 16px;
    color: #ccc;
    line-height: 1.5;
  }
  
  .player-stats {
    margin-top: 30px;
  }
  
  .stats-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 10px;
  }
  
  .stats-table th,
  .stats-table td {
    padding: 10px;
    text-align: center;
    border: 1px solid #444;
  }
  
  .stats-table th {
    background-color: #2e3238;
    color: #4caf50;
    font-weight: bold;
  }
  
  .stats-table td {
    background-color: #2b2d31;
    color: #ddd;
  }
  </style>
  