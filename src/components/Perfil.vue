<template>
  <body>
    
  
  <div class="profile-header">
    <div class="container-perfil">
    <div class="welcome-section">
      <span class="welcome">BIENVENIDO</span>
      <span class="date">2024-01-17</span>
    </div>
    
    <div class="profile-content">
          <div class="user-section">
              <div class="avatar"></div>
              <div class="user-info">
                  <h3 class="name" id="userName">JUAN JUAN PEREZ</h3>
                  <p class="description" id="userDescription">Usuario activo en plataforma desde el inicio hasta y a partir del último...</p>
                  <button id="editarBtn">Editar perfil</button>
              </div>
          </div>
          <div class="container">
              <div class="card">
                  <div class="card-content">
                      <div class="title">Contacto:</div>
                      <div class="info" id="userEmail">juanperez70@gmail.com</div>
                      <div class="info" id="userPhone">+593 987654321</div>
                  </div>
                  <div class="icon">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="60" height="60">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                  </div>
              </div>
  
              <div class="card">
                  <div class="card-content">
                      <div class="title">Datos adicionales:</div>
                      <div class="info" id="userGender">Género: Masculino</div>
                      <div class="info" id="userTeam">Equipo: Equipo 1</div>
                  </div>
                  <div class="icon">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="60" height="60">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                  </div>
              </div>
  
              <div class="card">
                  <div class="card-content">
                      <div class="title">Habilidades</div>
                      <div class="info" id="userSkills">Velocidad explosiva</div>
                  </div>
                  <div class="icon">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke="none" width="60" height="60" class="star">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                  </div>
              </div>
          </div>
      </div>
  
      <div id="editModal" class="modal">
          <div class="modal-content">
              <h2>Editar Perfil</h2>
              <form id="editForm">
                  <div class="form-group">
                      <label for="editName">Nombre:</label>
                      <input type="text" id="editName" name="name" required>
                  </div>
                  <div class="form-group">
                      <label for="editDescription">Descripción:</label>
                      <textarea id="editDescription" name="description" required></textarea>
                  </div>
                  <div class="form-group">
                      <label for="editEmail">Email:</label>
                      <input type="email" id="editEmail" name="email" required>
                  </div>
                  <div class="form-group">
                      <label for="editPhone">Teléfono:</label>
                      <input type="tel" id="editPhone" name="phone" required>
                  </div>
                  <div class="form-group">
                      <label for="editGender">Género:</label>
                      <input type="text" id="editGender" name="gender" required>
                  </div>
                  <div class="form-group">
                      <label for="editTeam">Equipo:</label>
                      <input type="text" id="editTeam" name="team" required>
                  </div>
                  <div class="form-group">
                      <label for="editSkills">Habilidades:</label>
                      <input type="text" id="editSkills" name="skills" required>
                  </div>
                  <div class="form-actions">
                      <button type="submit">Guardar Cambios</button>
                      <button type="button" id="cancelBtn">Cancelar</button>
                  </div>
              </form>
          </div>
      </div>
      <div class="containerline">
          <div class="separator"></div>
  
      </div>
    </div>
  </div>
  <div class="contenedor-equipos">
  
    <section>
          <h2>MIS EQUIPOS (03)</h2>
          <div class="icon-grid">
              <div class="icon-container">
                  <img src="" alt="Bayern Munich">
                  <span class="text">Equipo</span>
              </div>

              <div class="icon-container">
                  <img src="" alt="Equipo dos">
                  <span class="text">Equipo</span>
                </div>
              <div class="icon-container">
                  <img src="" alt="Equipo tres">
                  <span class="text">Equipo</span>
              </div>
              <div class="icon-container">
                  <img src="" alt="Equipo cuatro">
                  <span class="text">Equipo</span>
                </div>
                <div class="icon-container">
                  <img src="" alt="Equipo cuatro">
                  <span class="text">Equipo</span>
                </div>
              <div class="icon-container">
                  <div class="add-button">+</div>
              </div>
          </div>
      </section>
  
      <section>
          <h2>MIS COMPETENCIAS (03)</h2>
          <div class="icon-grid">
              <div class="icon-container">
                  <img src="" alt="Bundesliga">
                  <span class="text">Competencia</span>
              </div>
              
              <div class="icon-container">
                  <img src="" alt="Champions League">
                  <span class="text">Competencia</span>
                </div>
              <div class="icon-container">
                  <img src="" alt="Bundesliga">
                  <span class="text">Competencia</span>
                </div>
                <div class="icon-container">
                  <img src="" alt="Bundesliga">
                  <span class="text">Competencia</span>
                </div>
              <div class="icon-container">
                  <img src="" alt="Champions League">
                  <span class="text">Competencia</span>
                </div>
              <div class="icon-container">
                  <div class="add-button">+</div>
              </div>
          </div>
      </section>
  
      <section>
          <h2>MIS JUGADORES (03)</h2>
          <div class="icon-grid">
              <div class="icon-container">
                <img src="" alt="Jugador 2">
                  <span class="text">Jugador</span>
              </div>
              
              <div class="icon-container">
                  <img src="" alt="Jugador 2">
                  <span class="text">Jugador</span> 
                 </div>
                 <div class="icon-container">
                  <img src="" alt="Jugador 2">
                  <span class="text">Jugador</span>  </div>
              <div class="icon-container">
                <img src="" alt="Jugador 2">
                  <span class="text">Jugador</span>
              </div>
              <div class="icon-container">
                <img src="" alt="Jugador 2">
                  <span class="text">Jugador</span>
                </div>
              <div class="icon-container">
                  <div class="add-button">+</div>
              </div>
          </div>
      </section>
  </div>
  </body>
  
  
  
  </template>
  
  <script>
  document.addEventListener('DOMContentLoaded', function() {
      const editBtn = document.getElementById('editarBtn');
      const modal = document.getElementById('editModal');
      const cancelBtn = document.getElementById('cancelBtn');
      const editForm = document.getElementById('editForm');
  
      editBtn.onclick = function() {
          modal.style.display = "block";
          document.getElementById('editName').value = document.getElementById('userName').textContent;
          document.getElementById('editDescription').value = document.getElementById('userDescription').textContent;
          document.getElementById('editEmail').value = document.getElementById('userEmail').textContent;
          document.getElementById('editPhone').value = document.getElementById('userPhone').textContent;
          document.getElementById('editGender').value = document.getElementById('userGender').textContent.split(': ')[1];
          document.getElementById('editTeam').value = document.getElementById('userTeam').textContent.split(': ')[1];
          document.getElementById('editSkills').value = document.getElementById('userSkills').textContent;
      }
  
  
      cancelBtn.onclick = function() {
          modal.style.display = "none";
      }
  
    
      window.onclick = function(event) {
          if (event.target == modal) {
              modal.style.display = "none";
          }
      }
  
    
      editForm.onsubmit = function(e) {
          e.preventDefault();
          
          document.getElementById('userName').textContent = document.getElementById('editName').value;
          document.getElementById('userDescription').textContent = document.getElementById('editDescription').value;
          document.getElementById('userEmail').textContent = document.getElementById('editEmail').value;
          document.getElementById('userPhone').textContent = document.getElementById('editPhone').value;
          document.getElementById('userGender').textContent = 'Género: ' + document.getElementById('editGender').value;
          document.getElementById('userTeam').textContent = 'Equipo: ' + document.getElementById('editTeam').value;
          document.getElementById('userSkills').textContent = document.getElementById('editSkills').value;
  
          modal.style.display = "none";
  
      
          console.log('Perfil actualizado');
      }
  });
  
  </script>
  
  <style>
   
  body{
    background-color: #1E1E1E;
    padding: 10px;
  }
  
  .container-perfil{
    width: 100%;
    margin: auto;
  }
  .profile-header {
    background-color: #1E1E1E;
    color: white;
    padding: 1.5rem;
    font-family: Arial, sans-serif;
    max-width: 100%;
    border-radius: 8px;
  }
  
  .welcome-section {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.5rem;
  }
  
  .welcome {
    font-size: 1.5rem;
    color: #999;
  }
  
  .date {
    font-size: 0.85rem;
    color: #999;
  }
  
  .profile-content {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  
  .user-section {
    display: flex;
    gap: 2rem;
    align-items: flex-start;
  }
  
  .avatar {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background-color: #fff;
    flex-shrink: 0;
  }
  
  .user-info {
    flex-grow: 2;
  }
  
  .name {
    font-size: 1.5rem;
    margin: 0 0 1.5rem 0;
    font-weight: normal;
  }
  
  .description {
    color: #999;
    font-size: 0.91rem;
    margin: 0 0 0.80rem 0;
    line-height: 1.4;
  }
  
  #editarBtn {
    background-color: transparent;
    border: 1px solid #666;
    color: white;
    padding: 0.9rem 1.4rem;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1rem;
  }
  #editarBtn:hover{
    background-color: #504e4e;
  }
  
  
  .container {
   
              display: flex;
              gap: 16px;
              max-width: 100%;
          }
  
          .card {
              background-color: #272830;
              border-radius: 12px;
              padding: 20px;
              display: flex;
              align-items: center;
              gap: 12px;
              flex: 1;
              justify-content: space-between; 
          }
  
          .card-content {
            padding: 0px 20px 0 0;
              display: flex;
              flex-direction: column;
              gap: 4px;
          }
  
          .title {
              color: #9ca3af;
              font-size: 12px;
              margin-bottom: 4px;
          }
  
          .info {
              color: white;
              font-size: 14px;
              margin-bottom: 0.5rem;
          }
  
          .icon {
              width: 20%;
              height: 50px;
              display: flex;
              align-items: center;
              justify-content: center;
              order: 2; 
          }
  
          .star {
              color: #fbbf24;
          }
  
  
          .containerline {
              max-width: 100%;
          }
  
          .separator {
              height: 1px;
              background-color: #3f3f46;
              margin: 20px 0;
          }
  
  .contenedor-equipos{
    text-align: center;
    justify-content: center;
  }
    section {
              margin-bottom: 32px;
          }
  
          h2 {
              color: #9ca3af;
              font-size: 14px;
              font-weight: 500;
              margin-bottom: 16px;
          }
  
          .icon-grid {
            justify-content: center;
              display: flex;
              gap: 25px;
          }
  
          .icon-container {
              width: 140px;
              height: 120px;
              background-color: #272830;
              border: 1px solid rgb(119, 117, 117);
              border-radius: 25px;
              display: flex;
              align-items: center;
              justify-content: center;
              padding: 16px;
              box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
              flex-direction: column;
             
          }
          .text{
  
            color: #9ca3af;
              font-family: Arial, sans-serif;
              font-size: 14px;
              text-align: center;
          }
          .icon-container img {
            aspect-ratio: 1;
              width: 100%;
              height: 100%;
              border-radius: 50%;
              object-fit: contain;
          }
  
          .add-button {
              color: #6b7280;
              font-size: 24px;
              display: flex;
              align-items: center;
              justify-content: center;
              width: 100%;
              height: 100%;
          }
  
          .player-icon {
              width: 32px;
              height: 32px;
              color: #6b7280;
          }
  
    .modal {
    display: none;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.4);
  }
  
  .modal-content {
    background-color: #fefefe;
    margin: 15% auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
    max-width: 500px;
    position: relative;
    border-radius: 5px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
    cursor: pointer;
    position: absolute;
    top: 10px;
    right: 20px;
  }
  
  .close:hover,
  .close:focus {
    color: #000;
    text-decoration: none;
    cursor: pointer;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
  }
  
  input[type="text"],
  input[type="email"],
  input[type="tel"],
  textarea {
    width: 100%;
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
  
  .form-actions {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
  }
  
  .btn-save {
    background-color: #000;
    color: #fff;
  }
  
  .btn-cancel {
    background-color: #fff;
    color: #000;
    border: 1px solid #000;
  }
  
  .btn-save:hover {
    background-color: #333;
  }
  
  .btn-cancel:hover {
    background-color: #f0f0f0;
  }
  button {
    padding: 10px 20px;
    background-color: #000;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  button:hover {
    background-color: #333;
  }
  
  @media (max-width: 768px) {
    .user-section {
      flex-direction: column;
      align-items: flex-start;
    }
  
    .avatar {
      margin-bottom: 10px;
    }
  
    .modal-content {
      width: 90%;
      margin: 10% auto;
    }
  }
 
@media (max-width: 480px) {
  .container-perfil {
    width: 100%;
    padding: 0 10px;
  }

  .welcome-section {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }

  .user-section {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .avatar {
    width: 100px;
    height: 100px;
  }

  .user-info {
    margin-top: 10px;
  }

  .container {
    flex-direction: column;
    gap: 16px;
  }

  .card {
    flex-direction: column;
    text-align: center;
  }

  .icon {
    order: 1;
    margin-bottom: 10px;
  }

  .contenedor-equipos .icon-grid {
    flex-wrap: wrap;
    gap: 16px;
    justify-content: center;
  }

  .icon-container {
    width: 100px;
    height: 100px;
  }
}

@media (max-width: 768px) {
  .container-perfil {
    width: 90%;
  }

  .welcome-section {
    justify-content: center;
    text-align: center;
  }

  .user-section {
    flex-direction: row;
    align-items: center;
    gap: 16px;
  }

  .avatar {
    width: 120px;
    height: 120px;
  }

  .container {
    flex-direction: column;
    gap: 20px;
  }

  .contenedor-equipos .icon-grid {
    flex-wrap: wrap;
    gap: 20px;
  }

  .icon-container {
    width: 120px;
    height: 120px;
  }
}

@media (max-width: 1024px) {
  .container {
    gap: 24px;
  }

  .card {
    padding: 16px;
  }

  .contenedor-equipos .icon-grid {
    gap: 24px;
  }

  .icon-container {
    width: 130px;
    height: 130px;
  }
}

@media (max-width: 480px) {
  .avatar {
    width: 90px; 
    height: 90px;
  }

  .button {
    font-size: 14px; 
    padding: 8px 12px; 
  }
}

@media (max-width: 768px) {
  .avatar {
    width: 110px; 
    height: 110px;
  }

  .button {
    font-size: 16px; 
    padding: 10px 16px; 
  }
}

  </style>