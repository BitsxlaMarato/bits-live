<template>
  <div id="activities" class="under-header padding-bottom">
    <div class="container" style="text-align: justify;">
      <div class="panel large">
        <h1 class="activity-title">Activitats</h1>
      </div>
      <div class="panel">
        <h1>Team Building</h1>
        <div>
          <div class="margin-bottom text-centered">
            <p class="icon"><i class="fas fa-map-marker-alt" aria-hidden="true"></i></p>
            <span>A6002</span>
          </div>
          <p class="margin-bottom"> Si estàs buscant un equip o un membre pel teu equip, aquesta és la teva oportunitat! Vine a l'aula A6002, on trobarem un equip per tu o completarem el teu! </p>
        </div>
      </div>
      <div class="panel">
        <h1>Xerrada Git</h1>
        <div>
          <div class="margin-bottom text-centered">
            <p class="icon"><i class="fas fa-map-marker-alt" aria-hidden="true"></i></p>
            <span>A6001</span>
          </div>
          <p class="margin-bottom"> Tens dubtes amb Git i GitHub? Vols descobrir per què no saps de què parlem? Vine a la xerrada i resol tots els teus dubtes sobre com treballar en equip en un projecte de software! </p>
        </div>
      </div>
      <!--<div class="panel large">
        <h1>IndoorBits</h1>
        <div>
          <div class="margin-bottom text-centered">
            <p class="icon"><i class="fas fa-map-marker-alt" aria-hidden="true"></i></p>
            <span>Poliesportiu de l'UPC, Sala Hard</span>
          </div>
          <p class="margin-bottom">Per participar descarregat l'aplicació "SPIVI" al teu mòbil</p>
          <p class="margin-bottom"> Vine a participar en una activitat de ciclisme indoor en la que entre tots es lluitarà per aconseguir el nombre de kilòmetres més alt. Per aconseguir-ho, hi haurà dos torns de 30 minuts. Estigues atent a Slack i no t'oblidis portar una tovallola si vols participar. Anima't, serà divertit!!</p>
          <div class="videos-challenge">
            <div class="embed-container">
              <iframe src="/assets/img/activities/indoor1.mp4" class="embed" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div class="embed-container">
              <iframe src="/assets/img/activities/indoor2.mp4" class="embed" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </div>
        </div>
      </div>-->
      <div class="panel large">
        <h1 style="text-transform: uppercase;">Posa els teus pulmons a prova</h1>
        <div>
          <div class="margin-bottom text-centered">
            <p class="icon"><i class="fas fa-map-marker-alt" aria-hidden="true"></i></p>
            <span>Exterior de l'edifici A6</span>
          </div>
          <p>
            Posa a prova la teva capacitat pulmonar amb aquesta divertida i dinàmica activitat. Podràs aprendre a millorar amb l'ajuda de fisioterapeutes.
          </p>
          <br>
          <p>
            <strong>Activitat dirigida per: </strong>Maria Molina, de IDIBELL.
          </p>
        </div>
      </div>
      <div class="panel">
        <h1 style="text-transform: uppercase;">Karaoke!</h1>
        <div>
          <div class="margin-bottom text-centered">
            <p class="icon"><i class="fas fa-map-marker-alt" aria-hidden="true"></i></p>
            <span>Exterior de l'edifici A6</span>
          </div>
          <p>Posarem un altaveu amb micròfons, vine a desconnectar del teu projecte per cantar una mica.</p>
        </div> 
      </div>
      <div class="panel">
        <h1 style="text-transform: uppercase;">Mataconills</h1>
        <div>
          <div class="margin-bottom text-centered">
            <p class="icon"><i class="fas fa-map-marker-alt" aria-hidden="true"></i></p>
            <span>Exterior de l'edifici A6</span>
          </div>
          <p>Fes un descans de la pantalla de la manera més saludable possible: gaudeix jugant al mataconills amb els teus companys!</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Activities',
};
</script>

<style scoped>
.embed-container {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  width: 50%;
}
.embed{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.videos-challenge {
  display: flex;
  gap: 10px;
}

@media (max-width: 768px) {
  .videos-challenge {
    flex-direction: column;
  }

  .embed-container {
    width: 100%;
  }
}
</style>
