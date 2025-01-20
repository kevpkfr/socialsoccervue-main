<template>
    <div class="background">
      <h1>Tabla de Posiciones</h1>
      <table class="standings-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Equipo</th>
            <th>PJ</th>
            <th>G</th>
            <th>E</th>
            <th>P</th>
            <th>DG</th>
            <th>PTS</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(team, index) in standings" :key="team.name">
            <td>{{ index + 1 }}</td>
            <td>
              <img :src="team.logo" :alt="'Logo de ' + team.name" class="team-logo" />
              {{ team.name }}
            </td>
            <td>{{ team.played }}</td>
            <td>{{ team.wins }}</td>
            <td>{{ team.draws }}</td>
            <td>{{ team.losses }}</td>
            <td>{{ team.goalDifference }}</td>
            <td>{{ team.points }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    name: 'TablaDePosiciones',
    data() {
      return {
        standings: [
          {
            name: 'Atlético de Madrid',
            logo: 'https://img.planetafobal.com/2016/12/atletico-de-madrid-escudo-nuevo-2017-g.jpg',
            played: 19,
            wins: 13,
            draws: 5,
            losses: 1,
            goalDifference: 22,
            points: 44,
          },
          {
            name: 'Real Madrid',
            logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Real_Madrid_CF.svg/800px-Real_Madrid_CF.svg.png',
            played: 19,
            wins: 13,
            draws: 4,
            losses: 2,
            goalDifference: 24,
            points: 43,
          },
          {
            name: 'FC Barcelona',
            logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_%28crest%29.svg/1200px-FC_Barcelona_%28crest%29.svg.png',
            played: 19,
            wins: 12,
            draws: 2,
            losses: 5,
            goalDifference: 29,
            points: 38,
          },
          {
            name: 'Athletic Club',
            logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/98/Club_Athletic_Bilbao_logo.svg/800px-Club_Athletic_Bilbao_logo.svg.png',
            played: 19,
            wins: 10,
            draws: 6,
            losses: 3,
            goalDifference: 12,
            points: 36,
          },
          {
            name: 'Villarreal',
            logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/70/Villarreal_CF_logo.svg/800px-Villarreal_CF_logo.svg.png',
            played: 19,
            wins: 8,
            draws: 6,
            losses: 5,
            goalDifference: 3,
            points: 30,
          },
          {
            name: 'Sevilla FC',
            logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/3c/Sevilla_FC_logo.svg/800px-Sevilla_FC_logo.svg.png',
            played: 19,
            wins: 7,
            draws: 8,
            losses: 4,
            goalDifference: 6,
            points: 29,
          },
          {
            name: 'Real Sociedad',
            logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f1/Real_Sociedad_logo.svg/800px-Real_Sociedad_logo.svg.png',
            played: 19,
            wins: 7,
            draws: 6,
            losses: 6,
            goalDifference: 1,
            points: 27,
          },
          {
            name: 'Betis',
            logo: 'https://logos-download.com/wp-content/uploads/2016/05/Real_Betis_logo_logotipo.png',
            played: 19,
            wins: 7,
            draws: 5,
            losses: 7,
            goalDifference: -2,
            points: 26,
          },
          {
            name: 'Valencia CF',
            logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/ce/Valenciacf.svg/800px-Valenciacf.svg.png',
            played: 19,
            wins: 6,
            draws: 7,
            losses: 6,
            goalDifference: 0,
            points: 25,
          },
          {
            name: 'Celta de Vigo',
            logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/12/RC_Celta_de_Vigo_logo.svg/800px-RC_Celta_de_Vigo_logo.svg.png',
            played: 19,
            wins: 6,
            draws: 5,
            losses: 8,
            goalDifference: -5,
            points: 23,
          },
          {
            name: 'Osasuna',
            logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/d6/CA_Osasuna_logo.svg/800px-CA_Osasuna_logo.svg.png',
            played: 19,
            wins: 5,
            draws: 7,
            losses: 7,
            goalDifference: -3,
            points: 22,
          },
          {
            name: 'Getafe',
            logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/7f/Getafe_CF_logo.svg/800px-Getafe_CF_logo.svg.png',
            played: 19,
            wins: 5,
            draws: 6,
            losses: 8,
            goalDifference: -7,
            points: 21,
          },
          {
            name: 'Espanyol',
            logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f0/RCD_Espanyol_de_Barcelona_logo.svg/800px-RCD_Espanyol_de_Barcelona_logo.svg.png',
            played: 19,
            wins: 4,
            draws: 7,
            losses: 8,
            goalDifference: -9,
            points: 19,
          },
          {
            name: 'Mallorca',
            logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a5/RCD_Mallorca_logo.svg/800px-RCD_Mallorca_logo.svg.png',
            played: 19,
            wins: 4,
            draws: 6,
            losses: 9,
            goalDifference: -11,
            points: 18,
          },
          {
            name: 'Granada',
            logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/88/Granada_CF_logo.svg/800px-Granada_CF_logo.svg.png',
            played: 19,
            wins: 4,
            draws: 5,
            losses: 10,
            goalDifference: -12,
            points: 17,
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .background {
    background-color: #2b2b3d;
    padding: 20px;
    border-radius: 10px;
    color: #fff;
    font-family: Arial, sans-serif;
  }
  
  h1 {
    text-align: center;
    margin-bottom: 20px;
    color: #fff;
  }
  
  .standings-table {
    width: 100%;
    border-collapse: collapse;
    background-color: #1e1e2f;
    border-radius: 10px;
    overflow: hidden;
  }
  
  .standings-table thead {
    background-color: #2b2b3d;
  }
  
  .standings-table th,
  .standings-table td {
    padding: 10px;
    text-align: center;
    color: #fff;
  }
  
  .standings-table th {
    font-weight: bold;
  }
  
  .standings-table tbody tr:nth-child(even) {
    background-color: #34344a;
  }
  
  .standings-table tbody tr:hover {
    background-color: #454564;
  }
  
  .team-logo {
    width: 20px;
    height: 20px;
    margin-right: 10px;
    vertical-align: middle;
  }
  </style>
  