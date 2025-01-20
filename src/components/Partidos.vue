<template>
  <div class="results-container">
    <h1 class="page-title">Últimos Resultados</h1>

    <div class="team-results">
      <h2>FC Barcelona - Últimos Partidos</h2>
      <div class="match" v-for="(match, index) in barcelonaMatches" :key="index" :class="match.result.toLowerCase()">
        <div class="score">
          <span>{{ match.score }}</span>
        </div>
        <div class="teams">
          <img :src="match.homeTeamLogo" alt="Home Team" class="team-logo" />
          <img :src="match.awayTeamLogo" alt="Away Team" class="team-logo" />
        </div>
        <div class="date">{{ match.date }}</div>
      </div>
    </div>

    <div class="team-results">
      <h2>Real Betis - Últimos Partidos</h2>
      <div class="match" v-for="(match, index) in betisMatches" :key="index" :class="match.result.toLowerCase()">
        <div class="score">
          <span>{{ match.score }}</span>
        </div>
        <div class="teams">
          <img :src="match.homeTeamLogo" alt="Home Team" class="team-logo" />
          <img :src="match.awayTeamLogo" alt="Away Team" class="team-logo" />
        </div>
        <div class="date">{{ match.date }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      barcelonaMatches: [
        { result: 'VICTORIA', score: '5 - 1', homeTeamLogo: 'https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona_%28crest%29.svg', awayTeamLogo: 'https://upload.wikimedia.org/wikipedia/sco/5/56/Real_Madrid_CF.svg', date: '15/01' },
        { result: 'VICTORIA', score: '2 - 5', homeTeamLogo: 'https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona_%28crest%29.svg', awayTeamLogo: 'https://upload.wikimedia.org/wikipedia/sco/5/56/Real_Madrid_CF.svg', date: '12/01' },
        { result: 'VICTORIA', score: '0 - 2', homeTeamLogo: 'https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona_%28crest%29.svg', awayTeamLogo: 'https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona_%28crest%29.svg', date: '08/01' },
        { result: 'VICTORIA', score: '0 - 4', homeTeamLogo: 'https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona_%28crest%29.svg', awayTeamLogo: 'https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona_%28crest%29.svg', date: '04/01' },
        { result: 'DERROTA', score: '1 - 2', homeTeamLogo: 'https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona_%28crest%29.svg', awayTeamLogo: 'https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona_%28crest%29.svg', date: '21/12' },
      ],
      betisMatches: [
        { result: 'DERROTA', score: '5 - 1', homeTeamLogo: 'https://upload.wikimedia.org/wikipedia/sco/5/56/Real_Madrid_CF.svg', awayTeamLogo: 'https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona_%28crest%29.svg', date: '15/01' },
        { result: 'DERROTA', score: '1 - 0', homeTeamLogo: 'https://upload.wikimedia.org/wikipedia/sco/5/56/Real_Madrid_CF.svg', awayTeamLogo: 'https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona_%28crest%29.svg', date: '11/01' },
        { result: 'VICTORIA', score: '0 - 1', homeTeamLogo: 'https://upload.wikimedia.org/wikipedia/sco/5/56/Real_Madrid_CF.svg', awayTeamLogo: 'https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona_%28crest%29.svg', date: '04/01' },
        { result: 'EMPATE', score: '1 - 1', homeTeamLogo: 'https://upload.wikimedia.org/wikipedia/sco/5/56/Real_Madrid_CF.svg', awayTeamLogo: 'https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona_%28crest%29.svg', date: '22/12' },
        { result: 'VICTORIA', score: '1 - 0', homeTeamLogo: 'https://upload.wikimedia.org/wikipedia/sco/5/56/Real_Madrid_CF.svg', awayTeamLogo: 'https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona_%28crest%29.svg', date: '19/12' },
      ],
    };
  },
};
</script>

<style scoped>
.results-container {
  padding: 20px;
  background-color: #1d1f23;
  color: #fff;
  font-family: Arial, sans-serif;
}

.page-title {
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;
}

.team-results {
  margin-bottom: 30px;
}

.team-results h2 {
  font-size: 20px;
  margin-bottom: 15px;
}

.match {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #2e3238;
  border-radius: 8px;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid transparent;
}

.match.victoria {
  border-color: #4caf50;
}

.match.derrota {
  border-color: #f44336;
}

.match.empate {
  border-color: #ffeb3b;
}

.score {
  font-size: 18px;
  font-weight: bold;
}

.teams {
  display: flex;
  gap: 10px;
}

.team-logo {
  width: 40px;
  height: 40px;
}

.date {
  font-size: 14px;
  color: #ccc;
}
</style>