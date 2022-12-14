<template>
  <div id="activities" class="under-header padding-bottom">
    <div class="container" style="text-align: justify;">
      <div class="panel large">
        <h1 class="activity-title">Activitats</h1>
      </div>
      <div class="panel large">
        <h1>TEAM BUILDING</h1>
        <div>
          <div class="margin-bottom text-centered">
            <p class="icon"><i class="fas fa-map-marker-alt" aria-hidden="true"></i></p>
            <span>A6001</span>
          </div>
          <p class="margin-bottom"> Si estàs buscant un equip o un membre pel teu equip, aquesta és l'activitat que estàs buscant! </p>
          <p class="margin-bottom"> Vine a l'aula A6001, trobarem un equip per tu o completarem el teu! </p>
        </div>
      </div>
      <div class="panel large">
        <h1>IndoorBits</h1>
        <div>
          <div class="margin-bottom text-centered">
            <p class="icon"><i class="fas fa-map-marker-alt" aria-hidden="true"></i></p>
            <span>Poliesportiu de l'UPC, Sala Hard</span>
          </div>
          <p class="margin-bottom">Per participar descarregat l'aplicació "SPIVI" al teu mòbil</p>
          <p class="margin-bottom"> Vine a participar en una activitat de ciclisme indoor en la que entre tots es lluitarà per aconseguir el nombre de kilòmetres més alt. Per aconseguir-ho, hi haurà dos torns de 30 minuts. </p>
          <div class="embed-container">
            <iframe src="/assets/img/activities/indoor1.mp4" class="embed" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <div class="embed-container">
            <iframe src="/assets/img/activities/indoor2.mp4" class="embed" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
      </div>
      <div class="panel">
        <h1 style="text-transform: uppercase;">Karaoke!</h1>
        <div>
          <div class="margin-bottom text-centered">
            <p class="icon"><i class="fas fa-map-marker-alt" aria-hidden="true"></i></p>
            <span>Edifici exterior del A6</span>
          </div>
          <p>Posarem un altaveu amb micròfons, estigues atent a Slack perquè avisarem en els moments on estigui disponible i puguis desconnectar una estoneta del codi</p>
        </div>
      </div>
      <div class="panel">
        <h1 style="text-transform: uppercase;">Construïm Lego!</h1>
        <div>
          <div class="margin-bottom text-centered">
            <p class="icon"><i class="fas fa-map-marker-alt" aria-hidden="true"></i></p>
            <span>A6001</span>
          </div>
          <p>Deixa volar la teva creativitat a la nostra activitat de Lego! En equips competireu per fer les millors figures de lego abans de que s'acabi el temps</p>
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
  max-width: 100%;
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
}
</style>
