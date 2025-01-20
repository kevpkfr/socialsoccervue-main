<template>
  <div class="contenedor">
    <div class="info-container">
      <div class="imagen-container">
        <img
          src="https://depor.com/resizer/_e-IEA38Yq_0oT-R1yN9E95FJyI=/1200x1200/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/2UWG765YB5GA3CWAAL3YCOUTQM.jpg"
          alt="Liga Deportiva"
        />
        <h3>Acuerdo Ministerial</h3>
        <p>N.º 625 del 19/09/2000</p>
      </div>
      <div class="linea-separadora"></div>
      <div class="texto-container">
        <p>
          Como cada semana, en Fondo Segunda tenemos que nombrar al que es nuestro MVP. En este caso, de la Jornada 22 de La Liga Hyperemotion. No ha sido sencillo escoger esta vez, nunca esto lo es habitual. Tenemos a cuatro candidatos y sólo nos podemos quedar con uno.
        </p>
        <p>
          Varios han sido los detalles que nos han hecho quedarnos con él. Se llama Gelabert, y es un mediocampista de Club de Cielo con una gran visión del juego.
        </p>
      </div>
    </div>

    <div class="map-container">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.808456067916!2d-78.52215313012807!3d-0.12740713514658342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d5851f76dd4599%3A0xf3c0c6b982f02929!2sLiga%20Barrial%20Comite%20La%20Campi%C3%B1a%20de%20Atucucho%20FLQ!5e0!3m2!1ses-419!2sec!4v1737137311176!5m2!1ses-419!2sec"
        width="100%"
        height="300"
        style="border:0;"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: "CampeonatoPage",
};
</script>



<style scoped>
.contenedor {
  background-color: #232629;
  color: white;
  padding: 20px;
  font-family: Arial, sans-serif;
}

.info-container {
  display: flex;
  gap: 20px;
  align-items: center;
  margin-bottom: 20px;
}

.imagen-container {
  flex: 1;
  text-align: center;
}

.imagen-container img {
  max-width: 100%;
  height: auto;
  border-radius: 10px;
}

.imagen-container h3 {
  margin: 10px 0 5px;
  font-size: 1.2rem;
}

.imagen-container p {
  font-size: 1rem;
  color: #d9d9d9;
}


.linea-separadora {
  width: 2px;
  background-color: white;
  height: 100%;
  border-radius: 1px;
}

.texto-container {
  flex: 2;
  text-align: justify;
}

.texto-container p {
  margin-bottom: 10px;
  font-size: 1rem;
  line-height: 1.5;
}

.map-container {
  margin-top: 20px;
  border: 2px solid #444;
  border-radius: 10px;
  overflow: hidden;
}
</style>