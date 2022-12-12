<template>
  <div class="under-header padding-bottom">
    <div class="container">
      <div class="panel">
        <h1>Informació important</h1>
        <h3 class="text-centered margin-bottom">Credencials pel Wi-Fi</h3>
        <div class="flex-containers">
          <div>
            <div class="panel-info text-centered" style="font-size: 13px">
              <p class="label text-normal"><b>Xarxa:</b> <span> #BITSxLAMARATO </span></p>
              <p class="label text-normal"><b>Contrasenya:</b> <span> 400?BxM22 </span> </p>
            </div>
          </div>
        </div>
        <div>
          <div>
            <h3 class="text-centered margin-bottom" style="margin-top: 0">Links</h3>
          </div>
          <div class="buttons margin-bottom">
            <a target="_blank" href="https://bitsxlamarato-2021.devpost.com/" class="external-link">Devpost</a>
          </div>
          <p><b>Estudiants de la FIB!</b> Recordeu que per obtenir els dos crèdits és obligatori penjar el projecte a Devpost!</p>
        </div>
      </div>
      <div class="panel" style="align-self: flex-start;">
        <h1>Contacte</h1>
        <div class="text-centered">
          <p class="icon"><i class="fab fa-slack" aria-hidden="true"></i></p>
          <span><a href="https://bitsxlamarato2021.slack.com/" target="_blank">Slack bitsxlaMarato 2021</a></span>
        </div>
        <div class="text-centered">
            <p class="icon"><i class="fa fa-envelope" aria-hidden="true"></i></p>
            <span><a href="mailto:bitsxlamarato@fib.upc.edu" target="_blank">bitsxlamarato@fib.upc.edu</a></span>
          </div>
        <div>
          <h3 class="text-centered margin-bottom">Xarxes socials de Hackers@UPC</h3>
          <div class="buttons">
            <a class="fb" target="_blank" href="https://www.facebook.com/hackersupc"><i class="fab fa-facebook" aria-hidden="true"></i></a>
            <a class="tw" target="_blank" href="https://twitter.com/hackersupc"><i class="fab fa-twitter" aria-hidden="true"></i></a>
            <a class="ig" target="_blank" href="https://instagram.com/hackersupc"><i class="fab fa-instagram" aria-hidden="true"></i></a>
            <a class="yt" target="_blank" href="https://www.youtube.com/c/HackersUPC"><i class="fab fa-youtube" aria-hidden="true"></i></a>
            <a class="yt" target="_blank" href="https://www.twitch.tv/hackersupc"><i class="fab fa-twitch" aria-hidden="true"></i></a>
            <a class="gt" target="_blank" href="https://github.com/hackupc"><i class="fab fa-github" aria-hidden="true"></i></a>
            <a class="me" target="_blank" href="https://medium.com/@hackupc"><i class="fab fa-medium" aria-hidden="true"></i></a>
          </div>
        </div>
        <div>
          <h3 class="text-centered margin-bottom">Xarxes socials de FIB</h3>
          <div class="buttons">
            <a class="fb" target="_blank" href="https://www.facebook.com/fib.upc"><i class="fab fa-facebook" aria-hidden="true"></i></a>
            <a class="tw" target="_blank" href="https://twitter.com/fib_upc"><i class="fab fa-twitter" aria-hidden="true"></i></a>
            <a class="ig" target="_blank" href="https://www.instagram.com/fib.upc/"><i class="fab fa-instagram" aria-hidden="true"></i></a>
            <a class="yt" target="_blank" href="https://www.youtube.com/user/mediafib"><i class="fab fa-youtube" aria-hidden="true"></i></a>
          </div>
        </div>
      </div>
      <div class="panel large">
        <h1>Com arribar a bitsxlamarato</h1>
        <div class="get-there">
          <h2 class="get-title text-centered margin-bottom"><i class="fa fa-train" aria-hidden="true"></i> Amb tren</h2>
          <div class="flex-containers">
            <div class="margin-bottom text-centered">
              <p>Si veniu amb tren, heu d'agafar l'L3, direcció <b>Zona Universitària</b> fins a l'estació de <b>Palau Reial</b>. <br><br> Des de palau reial heu de pujar cap al Campus Nord, situat al damunt de la facultat d'economia de la UB. També podeu agafar el tram fins a la parada de <b>Palau Reial</b>.</p>
            </div>
          </div>
        </div>
        <div class="get-there">
          <h2 class="get-title text-centered margin-bottom"><i class="fa fa-bus" aria-hidden="true"></i> Amb autobús</h2>
          <div class="flex-containers">
            <div class="margin-bottom text-centered">
              <p>Si veniu amb autobús, us serviran qualsevol dels següents autobusos:</p>
              <b>33</b> fins a la parada <b>Jordi Girona - John M Keynes</b>  un cop allà estareu al costat del campus. <br>
              <b>7</b>, <b>67</b>, <b>75</b>, <b>113</b> o <b>H6</b>  fins a la parada <b>Palau Reial</b>, des de palau reial heu de pujar cap al Campus Nord, situat al damunt de la facultat d'economia de la UB.
            </div>
          </div>
        </div>
        <div class="get-there">
          <h2 class="get-title text-centered margin-bottom"><i class="fa fa-car" aria-hidden="true"></i> Amb cotxe</h2>
          <div class="flex-containers">
            <div class="margin-bottom text-centered">
              <p>Si veniu amb cotxe, podreu trobar lloc on aparcar a la part superior del campus, pels carrers: <i>Sor Eulàlia d'Anzizu</i> o <i>Cavallers</i>.</p>
            </div>
          </div>
        </div>
        <div class="buttons margin-bottom">
          <a target="_blank" href="https://goo.gl/maps/6cPXChrm9GZVXimC7" class="external-link">Google Maps</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
};

</script>

<style scoped lang="scss">
.embed-container {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  max-width: 100%;
}
.embed{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.flex-containers {
  display: flex;
  justify-content: space-around;

  @media (max-width: 720px) {
    flex-direction: column;
  }
}

.width-45-resp {
  width: 45%;
  @media (max-width: 720px) {
    width: 100%;
  }
}

@media (max-width: 720px) {
  .margin-bottom-first {
    margin-bottom: 10px;
  }
}

</style>
