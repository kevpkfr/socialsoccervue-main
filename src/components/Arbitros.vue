<template>
  <div class="main-container">

    <div class="header">
      <div class="profile-info">
        <img src="@/assets/referee.jpg" alt="Foto Árbitro" class="referee-photo" />
        <div class="referee-details">
          <h1>Andrés García</h1>
          <p><strong>Arbitraje</strong></p>
          <p>
            Árbitro con experiencia en más de 3 años, sin errores:
            <strong>amarillas 40, rojas 6</strong>, ninguna ausencia por parte
            del árbitro.
          </p>
        </div>
      </div>

      <div class="contact-functions">
        <div class="contact-box">
          <h3>Contactos</h3>
          <p><i class="fas fa-envelope"></i> juanperez10@gmail.com</p>
          <p><i class="fas fa-phone"></i> +593 987654321</p>
        </div>
        <div class="functions-box">
          <h3>Datos Adicionales</h3>
          <p><i class="fas fa-user"></i> Género: Masculino</p>
          <p><i class="fas fa-calendar-alt"></i> Pitajes desde 2010</p>
        </div>
        <div class="roles-box">
          <h3>Funciones</h3>
          <p><i class="fas fa-star"></i> Árbitro Asistente, Árbitro</p>
        </div>
      </div>
    </div>

    <div class="referee-list">
      <h2>
        Año de la lista: 
        <button @click="toggleYearDropdown" class="year-button">
          {{ selectedYear }}
        </button>
        <div v-if="showDropdown" class="year-dropdown">
          <ul>
            <li v-for="year in years" :key="year" @click="selectYear(year)">
              {{ year }}
            </li>
          </ul>
        </div>
      </h2>
      <table>
        <thead>
          <tr>
            <th>Foto Árbitro</th>
            <th>Nombre</th>
            <th>País/Ciudad</th>
            <th>Función/es</th>
            <th>Pitajes desde</th>
            <th>Género</th>
            <th>Tarjetas</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="referee in referees" :key="referee.id">
            <td><img :src="referee.photo" alt="Foto" class="small-photo" /></td>
            <td>{{ referee.name }}</td>
            <td>{{ referee.city }}</td>
            <td>{{ referee.roles.join(", ") }}</td>
            <td>{{ referee.started }}</td>
            <td>{{ referee.gender }}</td>
            <td class="cards">
              <span class="yellow-card">{{ referee.yellow }}</span>
              <span class="red-card">{{ referee.red }}</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedYear: "2024", 
      showDropdown: false, 
      years: [2020, 2021, 2022, 2023, 2024], 
      referees: [
        {
          id: 1,
          photo: "@/assets/referee.jpg",
          name: "HAMTI Edorján",
          city: "Quito",
          roles: ["Árbitro"],
          started: "2010",
          gender: "Masculino",
          yellow: 20,
          red: 8,
        },
        {
          id: 2,
          photo: "@/assets/referee2.jpg",
          name: "Elena Mena",
          city: "Cuenca",
          roles: ["Árbitro Asistente"],
          started: "2018",
          gender: "Femenino",
          yellow: 20,
          red: 6,
        },
        {
          id: 3,
          photo: "@/assets/referee.jpg",
          name: "Carlos Pérez",
          city: "Loja",
          roles: ["Árbitro"],
          started: "2015",
          gender: "Masculino",
          yellow: 25,
          red: 4,
        },
        {
          id: 4,
          photo: "@/assets/referee2.jpg",
          name: "Ana Rodríguez",
          city: "Quito",
          roles: ["Árbitro Asistente", "Árbitro"],
          started: "2012",
          gender: "Femenino",
          yellow: 30,
          red: 7,
        },
        {
          id: 5,
          photo: "@/assets/referee.jpg",
          name: "Javier Martínez",
          city: "Guayaquil",
          roles: ["Árbitro Asistente"],
          started: "2017",
          gender: "Masculino",
          yellow: 18,
          red: 5,
        },
        {
          id: 6,
          photo: "@/assets/referee2.jpg",
          name: "Fernanda López",
          city: "Cuenca",
          roles: ["Árbitro"],
          started: "2020",
          gender: "Femenino",
          yellow: 15,
          red: 3,
        },
        {
          id: 7,
          photo: "@/assets/referee.jpg",
          name: "Juan Rodríguez",
          city: "Manta",
          roles: ["Árbitro"],
          started: "2014",
          gender: "Masculino",
          yellow: 40,
          red: 9,
        },
        {
          id: 8,
          photo: "@/assets/referee2.jpg",
          name: "Camila Martínez",
          city: "Guayaquil",
          roles: ["Árbitro Asistente"],
          started: "2016",
          gender: "Femenino",
          yellow: 35,
          red: 6,
        }
        
      ],
    };
  },
  methods: {
    toggleYearDropdown() {
      this.showDropdown = !this.showDropdown;
    },
    selectYear(year) {
      this.selectedYear = year;
      this.showDropdown = false; 
    }
  },
};
</script>

<style scoped>
.year-button {
  background-color: #4caf50;
  color: #fff;
  padding: 8px 16px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-align: center;
}

.year-dropdown {
  position: absolute;
  background-color: #333;
  color: #fff;
  border-radius: 8px;
  margin-top: 8px;
  padding: 8px;
  list-style: none;
  width: 150px;
}

.year-dropdown ul {
  margin: 0;
  padding: 0;
}

.year-dropdown li {
  padding: 8px;
  cursor: pointer;
}

.year-dropdown li:hover {
  background-color: #555;
}

.year-dropdown li:active {
  background-color: #4caf50;
}

.referee-list h2 {
  display: flex;
  align-items: center;
  font-size: 18px;
  margin-bottom: 10px;
}

.referee-list h2 button {
  margin-left: 10px;
}

.navbar {
  background-color: #333;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 5px;
}

.navbar ul {
  list-style-type: none;
  display: flex;
  justify-content: space-around;
  margin: 0;
  padding: 0;
}

.navbar ul li {
  display: inline;
}

.navbar ul li a {
  text-decoration: none;
  color: #fff;
  font-size: 16px;
  padding: 8px 16px;
}

.navbar ul li a:hover {
  background-color: #555;
  border-radius: 5px;
}

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

.referee-photo {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-right: 20px;
  border: 3px solid #4caf50;
}

.referee-details h1 {
  margin: 0;
  font-size: 24px;
  color: #fff;
}

.referee-details p {
  font-size: 16px;
  color: #ddd;
}

.contact-functions {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  width: 60%;
  margin-top: 20px; 
}

.contact-box, .functions-box, .roles-box {
  background-color: #2e3238;
  padding: 15px;
  border-radius: 8px;
  border: 1px solid #555;
  width: 32%; 
}

.contact-box h3, .functions-box h3, .roles-box h3 {
  font-size: 18px;
  color: #4caf50;
  margin-bottom: 10px;
}

.contact-box p, .functions-box p, .roles-box p {
  font-size: 14px;
  color: #ccc;
}

.contact-box i, .functions-box i, .roles-box i {
  margin-right: 8px;
}

.referee-list h2 {
  margin-bottom: 10px;
  font-size: 18px;
}

table {
  width: 100%;
  border-collapse: collapse;
}

table th,
table td {
  border: 1px solid #555;
  padding: 10px;
  text-align: center;
}

table th {
  background-color: #333;
  color: #fff;
}

table td {
  background-color: #2e3238;
}

.small-photo {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

.cards {
  display: flex;
  justify-content: center;
  gap: 10px;
}

.yellow-card {
  background-color: #ffeb3b;
  padding: 5px 10px;
  border-radius: 5px;
  color: #000;
}

.red-card {
  background-color: #f44336;
  padding: 5px 10px;
  border-radius: 5px;
  color: #fff;
}

@media (max-width: 768px) {
  .contact-functions {
    flex-direction: column;
  }

  .navbar {
    flex-direction: column;
    align-items: center;
  }

  .referee-list table,
  .referee-list h2 {
    width: 100%;
  }
}
</style>
