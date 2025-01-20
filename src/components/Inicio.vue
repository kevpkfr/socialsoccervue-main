<template>
  <div class="dashboard">
    <header class="header">
      <div class="welcome">
        <h1>BIENVENIDO</h1>
        <h2>JUAN FERNANDO</h2>
        <p>"El fútbol se vive con pasión en cada rincón y en cada corazón."</p>
      </div>
    </header>
    <hr>

    <section class="filters">
      <div>
        <label for="teams">Mis equipos</label>
        <select id="teams" v-model="selectedTeam">
          <option v-for="team in teams" :key="team">{{ team }}</option>
        </select>
      </div>
      <div>
        <label for="competitions">Competencias</label>
        <select id="competitions" v-model="selectedCompetition">
          <option v-for="competition in competitions" :key="competition">
            {{ competition }}
          </option>
        </select>
      </div>
    </section>

    <section class="rankings">
      <h3>Top</h3>
      <div class="top-teams">
        <div class="team-card" v-for="(team, index) in topTeams" :key="index">
          <img :src="team.logo" :alt="team.name" />
          <span>{{ team.name }}</span>
          <div class="vertical-line"></div>
          <span>#{{ index + 1 }}</span>
        </div>
      </div>

      <h3>Top goleadores</h3>
      <div class="top-players">
        <div class="player-card" v-for="player in topScorers" :key="player.name">
          <img :src="player.photo" :alt="player.name" />
          <span>{{ player.name }}</span>
          <div class="vertical-line"></div>
          <div class="player-info">
            <span>{{ player.goals }}</span>
          </div>
        </div>
      </div>

      <h3>Top asistencias</h3>
      <div class="top-players">
        <div class="player-card" v-for="player in topAssists" :key="player.name">
          <img :src="player.photo" :alt="player.name" />
          <span>{{ player.name }}</span>
          <div class="vertical-line"></div>
          <div class="player-info">
            <span>{{ player.assists }}</span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "TablaDePosiciones",
  data() {
    return {
      selectedTeam: "Real Betis",
      selectedCompetition: "Bundesliga",
      teams: ["Real Betis", "LDU"],
      competitions: ["Bundesliga", "UEFA Champions League"],
      topTeams: [
        { name: "Real Betis", logo: "https://logos-download.com/wp-content/uploads/2016/05/Real_Betis_logo_logotipo.png" },
        { name: "Real Betis", logo: "https://logos-download.com/wp-content/uploads/2016/05/Real_Betis_logo_logotipo.png" },
        { name: "Real Betis", logo: "https://logos-download.com/wp-content/uploads/2016/05/Real_Betis_logo_logotipo.png" },
      ],
      topScorers: [
        {
          name: "Jugador 1",
          goals: 15,
          photo: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/06/03/08/cristiano-ronaldo.jpg" // Enlace a la foto del jugador
        },
        {
          name: "Jugador 2",
          goals: 9,
          photo: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/06/03/08/cristiano-ronaldo.jpg" // Cambia este enlace por la foto real
        },
        {
          name: "Jugador 3",
          goals: 5,
          photo: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/06/03/08/cristiano-ronaldo.jpg"
        },
      ],
      topAssists: [
        {
          name: "Jugador 1",
          assists: 15,
          photo: "https://static.foxnews.com/foxnews.com/content/uploads/2022/12/lionel-messi1.jpg"
        },
        {
          name: "Jugador 2",
          assists: 9,
          photo: "https://static.foxnews.com/foxnews.com/content/uploads/2022/12/lionel-messi1.jpg"
        },
        {
          name: "Jugador 3",
          assists: 5,
          photo: "https://static.foxnews.com/foxnews.com/content/uploads/2022/12/lionel-messi1.jpg"
        },
      ],
    };
  },
};
</script>

<style scoped>
.dashboard {
  font-family: Arial, sans-serif;
  color: #87888C;
  background-color: #1e1e2f;
  padding: 1rem;
}

.header {
  text-align: center;
}

.header h1 {
  font-size: 2rem;
  font-weight: bold;
}

.header h2 {
  font-size: 1.5rem;
  color: #00ff00;
}

.filters {
  display: flex;
  justify-content: flex-start;
  margin: 1rem 0;
}

.top-players,
.top-teams {
  display: flex;
  gap: 1rem;
  justify-content: space-around;
  overflow-x: auto;
}

.rankings {
  margin-top: 1rem;
}

.team-card,
.player-card {
  background-color: #2b2b3d;
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
  display: flex;
  align-items: center;
  padding-right: 10;
  min-width: 150px;
  
}

img {
  max-width: 50px;
  border-radius: 50%;
}

.player-card img {
  margin-right: 0.5rem;
}

.vertical-line {
  width: 2px;
  height: 70px;
  background-color: #87888C;
  margin: 0 0.5rem;
}
</style>
