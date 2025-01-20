<template>
    <div class="contendor-marcador">
      <div class="marcador">
        <div class="scoreboard">
          <div class="team">
              <img src="@/assets/perfil/imagen1.png" alt="FC Barcelona">
              <div class="team-name">FC Barcelona</div>
          </div>
          
          <div class="score">
              <span>5</span>
              <span class="score-separator">:</span>
              <span>1</span>
          </div>
  
          <div class="team">
              <img src="@/assets/perfil/imagen2.png" alt="Real Betis">
              <div class="team-name">Real Betis</div>
          </div>
      </div>
  
        <div class="goles">
          <table class="tabla-goles">
            <thead>
              <tr>
                <th>Equipo Local</th>
                <th>-</th>
                <th>Equipo Visitante</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Gaby</td>
                <td>3'</td>
                <td></td>
              </tr>
              <tr>
                <td>Jules Koundé</td>
                <td>27'</td>
                <td></td>
              </tr>
              <tr>
                <td>Raphinha</td>
                <td>58'</td>
                <td></td>
              </tr>
              <tr>
                <td>Ferran Torres</td>
                <td>67'</td>
                <td></td>
              </tr>
              <tr>
                <td>Lamine Yamal</td>
                <td>75'</td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td>84'</td>
                <td>Vitor Roque</td>
              </tr>
            </tbody>
          </table>
        </div>
  
        <div class="arbitro">
          Árbitro del encuentro: <span>Mateo Solís</span>
        </div>
      </div>
    </div>
  </template>
  
  <style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');
  
  .contendor-marcador {
    background-color: #1E1E1E;
    color: white;
    padding: 2rem;
    font-family: Arial, sans-serif;
   width: 90%;
  }
  
  .scoreboard {
    background-color: rgb(23, 26, 29);
              width: 95%;
              border-radius: 15px;
              padding: 20px;
              display: flex;
              justify-content: space-between;
              align-items: center;
          }
  
          .team {
              display: flex;
              flex-direction: column;
              align-items: center;
              gap: 10px;
              width: 200px;
          }
  
          .team img {
              width: 60px;
              height: 60px;
              object-fit: contain;
          }
  
          .team-name {
              color: white;
              font-size: 18px;
              text-align: center;
          }
  
          .score {
              color: white;
              font-size: 36px;
              font-weight: bold;
              display: flex;
              align-items: center;
              gap: 10px;
          }
  
          .score-separator {
              color: #666;
          }
  
  .marcador {
    justify-content: center;
    background: #1E1E1E;
    color: white;
    height: 80vh; 
    text-align: center;
    padding: 20px;
    border-radius: 10px;
    width: 100%;
  }
  
  .header {
    font-size: 20px;
    display: flex;
    justify-content: space-between;
    margin: 10px;
    border-radius: 15px;
    background-color: rgba(0, 0, 0, 0.43);
    align-items: center;
    padding: 20px;
  }
  
  .equipo {
    display: flex;
    align-items: center;
    padding: 10px;
    justify-content: center;
  }
  
  .equipo img {
    width: 20%;;
    height: auto;
    border-radius: 50%;
    margin: 10px;
  }
  
  .resultado {
    font-size: 32px;
    font-weight: bold;
  }
  
  .estado {
    font-size: 14px;
    color: #bbb;
    margin-bottom: 15px;
  }
  
  .goles {
    width: 90%;
    margin: auto;
  }
  
  .tabla-goles {
    width: 100%;
    border-collapse: collapse;
    margin: 10px 0;
  }
  
  .tabla-goles th, .tabla-goles td {
    padding: 15px;
    text-align: center;
    border: 10px solid #1E1E1E;
  }
  
  .tabla-goles th {
    background: rgba(56, 54, 54, 0.1);
    font-weight: bold;
  }
  
  .tabla-goles td {
    background: rgba(255, 255, 255, 0.1);
  }
  
  .tabla-goles tr:nth-child(even) td {
    background: rgba(255, 255, 255, 0.1);
  }
  
  .arbitro {
    font-size: 14px;
    color: #bbb;
    margin-top: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
  }
  </style>
  