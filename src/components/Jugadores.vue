<template>
  <div class="main-container">
    <div class="header">
      <div class="profile-info">
        <img :src="player.photo" alt="Foto Jugador" class="player-photo" />
        <div class="player-details">
          <h1>{{ player.name }}</h1>
          <p><strong>{{ player.position }}</strong></p>
          <p>
            Futbolista, con edad de {{ player.age }} años, juega actualmente en el
            {{ player.team }}, su nombre completo es {{ player.fullName }}.
          </p>
          <button class="more-info-button" @click="goToPlayerInfo">
            Más detalles sobre su carrera
          </button>
        </div>
      </div>

      <div class="contact-functions">
        <div class="contact-box">
          <h3>Contacto</h3>
          <p><i class="fas fa-envelope"></i> {{ player.contact.email }}</p>
          <p><i class="fas fa-phone"></i> {{ player.contact.phone }}</p>
        </div>
        <div class="functions-box">
          <h3>Datos Adicionales</h3>
          <p><i class="fas fa-user"></i> Género: {{ player.gender }}</p>
          <p><i class="fas fa-shield-alt"></i> Funciones: {{ player.roles }}</p>
        </div>
      </div>
    </div>

    <div class="trophies-section">
      <div class="trophy-group">
        <h2>Trofeos Grupales</h2>
        <div class="trophies">
          <div v-for="trophy in player.groupTrophies" :key="trophy.id" class="trophy">
            <img :src="trophy.image" :alt="trophy.name" />
            <p>{{ trophy.name }}</p>
          </div>
        </div>
      </div>

      <div class="trophy-group">
        <h2>Trofeos Individuales</h2>
        <div class="trophies">
          <div v-for="trophy in player.individualTrophies" :key="trophy.id" class="trophy">
            <img :src="trophy.image" :alt="trophy.name" />
            <p>{{ trophy.name }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      player: {
        name: "Lionel Messi",
        fullName: "Lionel Andrés Messi Cuccittini",
        age: 36,
        position: "DEL/MC",
        team: "Inter de Miami",
        photo: "@/assets/messi.jpg",
        gender: "Masculino",
        contact: {
          email: "messi10@gmail.com",
          phone: "+593 987654321",
        },
        roles: "Delantero, Mediocampista",
        groupTrophies: [
          { id: 1, name: "Copa Mundial", image: "@/assets/world_cup.jpg" },
          { id: 2, name: "Liga España", image: "@/assets/la_liga.jpg" },
          { id: 3, name: "Copa América", image: "@/assets/copa_america.jpg" },
          { id: 4, name: "Mundial Clubes", image: "@/assets/club_world_cup.jpg" },
          { id: 5, name: "Champions", image: "@/assets/champions.jpg" },
        ],
        individualTrophies: [
          { id: 1, name: "Balón de Oro", image: "@/assets/ballon_dor.jpg" },
          { id: 2, name: "Mejor Jugador UEFA", image: "@/assets/uefa_best.jpg" },
          { id: 3, name: "MVP Mundial", image: "@/assets/world_cup_mvp.jpg" },
        ],
      },
    };
  },
  methods: {
    goToPlayerInfo() {
      this.$router.push('/informacion-ju');
    },
  },
};
</script>

<style scoped>
.main-container {
  padding: 20px;
  background-color: #1d1f23;
  color: #fff;
  font-family: Arial, sans-serif;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 20px;
  background-color: #2e3238;
  border-radius: 10px;
  margin-bottom: 20px;
  flex-wrap: wrap;
}

.profile-info {
  display: flex;
  align-items: center;
}

.player-photo {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-right: 20px;
  border: 3px solid #4caf50;
}

.player-details h1 {
  margin: 0;
  font-size: 24px;
  color: #fff;
}

.player-details p {
  font-size: 16px;
  color: #ddd;
}

.more-info-button {
  margin-top: 10px;
  padding: 10px 15px;
  font-size: 14px;
  color: #fff;
  background-color: #4caf50;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.more-info-button:hover {
  background-color: #45a049;
}

.contact-functions {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  width: 60%;
  margin-top: 20px;
}

.contact-box,
.functions-box {
  background-color: #2e3238;
  padding: 15px;
  border-radius: 8px;
  border: 1px solid #555;
  width: 48%;
}

.contact-box h3,
.functions-box h3 {
  font-size: 18px;
  color: #4caf50;
  margin-bottom: 10px;
}

.trophies-section {
  margin-top: 20px;
}

.trophy-group {
  margin-bottom: 20px;
}

.trophies {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.trophy {
  width: 120px;
  text-align: center;
}

.trophy img {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 8px;
  border: 2px solid #4caf50;
}

.trophy p {
  margin-top: 5px;
  font-size: 14px;
  color: #ddd;
}
</style>
