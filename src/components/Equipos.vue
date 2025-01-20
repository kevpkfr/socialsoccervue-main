<template>
  <div class="fc-barcelona-page">
    <header class="header">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzD-oxpXbVukNqd8tcDZEmCNcjgK2sG1gang&s" alt="FC Barcelona" class="logo" />
      <h1>FC Barcelona</h1>
      <button class="btn-ver-jugadores">Ver jugadores</button>
    </header>

    <nav class="navigation">
      <ul>
        <li class="active">Resumen</li>
        <li>Noticias</li>
        <li>Partidos</li>
        <li>Resultados</li>
        <li>Plantilla</li>
        <li>Fichajes</li>
        <li>Oficial</li>
      </ul>
    </nav>

    <!-- Sección principal -->
    <main class="main-content">
      <div class="resultado-container">
        <section class="ultimo-resultado">
          <h2>Último Resultado</h2>
          <div class="card">
            <p><strong>FC Barcelona</strong> 5</p>
            <p><strong>Real Betis</strong> 1</p>
            <p>Finalizado</p>
            <p>Copa del Rey</p>
          </div>
          <a href="#">Ver todos los resultados ></a>
        </section>

        <section class="siguiente-partido">
          <h2>Siguiente Partido</h2>
          <div class="card">
            <p><strong>Getafe</strong></p>
            <p>18/01/25 - 15:00</p>
            <p>La Liga</p>
          </div>
          <a href="#">Ver todos los partidos ></a>
        </section>
      </div>

      <section class="clasificaciones">
        <h2>Clasificaciones</h2>
        <table>
          <thead>
            <tr>
              <th>Posición</th>
              <th>Equipo</th>
              <th>PJ</th>
              <th>G</th>
              <th>D</th>
              <th>DG</th>
              <th>PTS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Atlético de Madrid</td>
              <td>19</td>
              <td>15</td>
              <td>1</td>
              <td>22</td>
              <td>44</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Real Madrid</td>
              <td>19</td>
              <td>13</td>
              <td>4</td>
              <td>24</td>
              <td>43</td>
            </tr>
            <tr>
              <td>3</td>
              <td>FC Barcelona</td>
              <td>19</td>
              <td>12</td>
              <td>5</td>
              <td>29</td>
              <td>38</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Athletic Club</td>
              <td>19</td>
              <td>10</td>
              <td>6</td>
              <td>15</td>
              <td>36</td>
            </tr>
            <tr>
              <td>5</td>
              <td>Villarreal</td>
              <td>19</td>
              <td>10</td>
              <td>6</td>
              <td>12</td>
              <td>36</td>
            </tr>
          </tbody>
        </table>
        <a href="#">Ver toda la clasificación ></a>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: "FCBarcelonaPage",
};
</script>

<style scoped>
.fc-barcelona-page {
  font-family: Arial, sans-serif;
  background-color: #1e1e2d;
  color: white;
  padding: 5%;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 0.5% solid white;
  padding-bottom: 1%;
}

.logo {
  width: 10%;
  height: auto;
  border-radius: 5%;
}

.btn-ver-jugadores {
  background-color: white;
  color: black;
  border: none;
  padding: 1% 2%;
  border-radius: 5%;
  cursor: pointer;
}

.navigation ul {
  display: flex;
  list-style: none;
  gap: 3%;
  padding: 2% 0;
  border-bottom: 0.5% solid white;
}

.navigation li {
  cursor: pointer;
  padding: 1%;
}

.navigation li:hover {
  background-color: green;
  color: white;
  border-radius: 5%;
}

.navigation .active {
  background-color: green;
  color: white;
  border-radius: 5%;
}

.main-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5%;
  margin-top: 5%;
}

.resultado-container {
  display: flex;
  justify-content: space-between;
  gap: 5%;
}

.card {
  background-color: #2c2c3c;
  padding: 5%;
  border-radius: 5%;
}

.clasificaciones {
  grid-column: span 2;
  margin-top: 5%;
}

.clasificaciones table {
  width: 100%;
  border-collapse: collapse;
}

.clasificaciones th,
.clasificaciones td {
  border: 0.5% solid white;
  padding: 1%;
  text-align: center;
}

.clasificaciones th {
  border: 0.5% solid white;
  background-color: #2c2c3c;
}

.clasificaciones a {
  display: block;
  margin-top: 2%;
  text-align: right;
  color: #ccc;
  text-decoration: none;
}

.clasificaciones a:hover {
  text-decoration: underline;
}
</style>