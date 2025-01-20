<template>
  <div class="background">
    <div class="live-and-next">
      <div class="match-result">
        <div class="team-row">
          <img :src="matchResult.team1Logo" alt="{{ matchResult.team1 }}" class="team-logo">
          <span>{{ matchResult.team1 }}</span>
          <span>{{ matchResult.score1 }}</span>
        </div>
        <div class="team-row">
          <img :src="matchResult.team2Logo" alt="{{ matchResult.team2 }}" class="team-logo">
          <span>{{ matchResult.team2 }}</span>
          <span>{{ matchResult.score2 }}</span>
        </div>
        <div class="status">{{ matchResult.status }}</div>
        <div class="competition">{{ matchResult.competition }}</div>
      </div>
      
      <div class="next-match">
        <div class="team-row">
          <img :src="nextMatch.team1Logo" alt="{{ nextMatch.team1 }}" class="team-logo">
          <span>{{ nextMatch.team1 }}</span>
        </div>
        <div class="team-row">
          <img :src="nextMatch.team2Logo" alt="{{ nextMatch.team2 }}" class="team-logo">
          <span>{{ nextMatch.team2 }}</span>
        </div>
        <div class="date-time">
          <span>{{ nextMatch.date }}</span>
          <span>{{ nextMatch.time }}</span>
        </div>
        <div class="competition">{{ nextMatch.competition }}</div>
      </div>
    </div>
    <h1>Clasificaciones</h1>
    <table>
      <thead>
        <tr>
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
        <tr v-for="team in standings" :key="team.name">
          <td>
            <img :src="team.logo" alt="Escudo de {{ team.name }}" class="team-logo">
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
    <router-link to="/tabla-completa">Ver toda la clasificación ></router-link>
  </div>
</template>

<script>
export default {
  name: 'TablaDePosiciones',
  data() {
    return {
      matchResult: {
        team1: 'FC Barcelona',
        team1Logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_%28crest%29.svg/1200px-FC_Barcelona_%28crest%29.svg.png',
        score1: 5,
        team2: 'Real Betis',
        team2Logo: 'https://logos-download.com/wp-content/uploads/2016/05/Real_Betis_logo_logotipo.png',
        score2: 1,
        status: 'Finalizado',
        competition: 'Copa del Rey'
      },
      nextMatch: {
        team1: 'Getafe',
        team1Logo: 'https://th.bing.com/th/id/OIP.6Ce_4zsqb207MgZGm9phDgHaHp?rs=1&pid=ImgDetMain',
        team2: 'FC Barcelona',
        team2Logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_%28crest%29.svg/1200px-FC_Barcelona_%28crest%29.svg.png',
        date: '18/01/25',
        time: '15:00',
        competition: 'La Liga'
      },
      standings: [
        {
          name: 'Atlético de Madrid',
          logo: 'https://img.planetafobal.com/2016/12/atletico-de-madrid-escudo-nuevo-2017-g.jpg',
          played: 19,
          wins: 13,
          draws: 5,
          losses: 1,
          goalDifference: 22,
          points: 44
        },
        {
          name: 'Real Madrid',
          logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Real_Madrid_CF.svg/800px-Real_Madrid_CF.svg.png',
          played: 19,
          wins: 13,
          draws: 4,
          losses: 2,
          goalDifference: 24,
          points: 43
        },
        {
          name: 'FC Barcelona',
          logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_%28crest%29.svg/1200px-FC_Barcelona_%28crest%29.svg.png',
          played: 19,
          wins: 12,
          draws: 2,
          losses: 5,
          goalDifference: 29,
          points: 38
        }
      ]
    };
  }
};
</script>


<style scoped>
.background {
  background-color: #2b2b3d;
  padding: 20px;
  border-radius: 10px;
  color: #fff;
}

a{
  color: #fff;
}

.live-and-next {
  background-color: #2b2b3d;
  border-radius: 10px;
  color: #fff;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  
}

.match-result, .next-match {
  margin-bottom: 20px;
  border: 1px solid #fff;
  width: 40%;

}

.team-row {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  padding-left: 5px;
}

.team-logo {
  width: 30px;
  height: 30px;
  margin-right: 10px;
}

.status, .competition {
  text-align: center;
  margin-top: 10px;
  color: #ccc;
}

.date-time {
  text-align: center;
  margin-top: 10px;
  color: #ccc;
}

h1 {
  color: #fff;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

thead th {
  background-color: #2b2b3d;
  color: #fff;
  padding: 10px;
}

tbody td {
 
  padding: 10px;
  text-align: center;
}
</style>
