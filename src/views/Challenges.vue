<template>
  <div id="schedule" class="under-header padding-bottom">
    <div class="container">
      <!--<div class="panel large">
        <h1>Accés a Marenostrum 4</h1>
        <p>
          Si per poder desenvolupar millor el teu repte necessites accés a MareNostrum4 durant aquest cap de setmana, el pots demanar contactant a qualsevol organizer al canal d' <span>#ajuda</span> de l'Slack i t'ajudaran a aconseguir accés.<br><br>
          Això ha estat possible gràcies al Barcelona Supercomputing Center (BSC)!
        </p>
        <div>
          <h4 class="text-centered margin-bottom">Xarxes socials BSC</h4>
          <div class="buttons">
            <a class="fb" target="_blank" href="https://www.facebook.com/BSCCNS"><i class="fab fa-facebook" aria-hidden="true"></i></a>
            <a class="tw" target="_blank" href="https://twitter.com/bsc_cns"><i class="fab fa-twitter" aria-hidden="true"></i></a>
            <a class="ig" target="_blank" href="https://www.instagram.com/bsc_cns/"><i class="fab fa-instagram" aria-hidden="true"></i></a>
            <a class="yt" target="_blank" href="https://www.youtube.com/user/BSCCNS"><i class="fab fa-youtube" aria-hidden="true"></i></a>
            <a class="li" target="_blank" href="https://www.linkedin.com/company/barcelona-supercomputing-center"><i class="fab fa-linkedin" aria-hidden="true"></i></a>
          </div>
        </div>
      </div>-->
      <div class="panel large">
        <h1>Ataquem bé al tumor infantil medul·loblastoma!</h1>
        <div class="text-centered">
          <p class="icon"><i class="fab fa-slack" aria-hidden="true"></i></p>
          <span>ataquem-be</span>
        </div>
        <div>
          <p class="margin-bottom">
              El medul·loblastoma és un tumor infantil amb origen en l’etapa de gestació embrionària i que afecta el cerebel. El primer diagnòstic pot produir-se des del primer any de vida fins a l’edat adulta, tot i que sol situar-se entre els 6 i 8 anys d’edat. És un dels tumors del sistema nerviós central més presents entre els infants. Tot i això, és una malaltia rara: afecta 5 de cada milió d’individus. Aproximadament, un 70% dels pacients sobreviuen 5 anys després del diagnòstic, però menys del 50% sobreviuen 20 anys. Aquesta prognosis varia significativament depenent de l’edat i del subgrup. Els subgrups d’una malaltia descriuen diferents formes en què la mateixa malaltia pot afectar els pacients i solen dependre tant de característiques clíniques com moleculars. El medul·loblastoma es divideix en 4 subgrups: WNT, SHH, G3 i G4. WNT i SHH són subgrups ben diferenciats entre ells i de G3 i G4, afectant fins i tot diferents àrees del cerebel. Per la seva banda, G3 i G4 són més similars a nivell molecular i es consideren part d’un continu. Tanmateix, diferents pacients mostren afectacions distintes que es reflecteixen en la seva supervivència. Aquest projecte busca dilucidar, a nivell molecular, les diferències entre els individus que pertanyen als subgrups G3 i G4.          </p>
          <div>
            <h3 class="margin-bottom">Punt de vista tecnològic</h3>
            <p>
              L’objectiu principal del repte consisteix a desenvolupar un algorisme que, a partir de les dades d’expressió genètica, pugui retornar una probabilitat que un pacient pertanyi als grups G3 o G4. Per a això, s’utilitzaran les dades de l’estudi de transcriptòmica més gran fins avui (https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE85217). Aquestes dades consisteixen en una taula amb 763 pacients i les dades d’expressió dels seus gens. A més, està disponible el grup al qual correspon cada pacient. Es recomana que aquest model es basi en intel·ligència artificial, concretament en el Conditional Variational Autoencoder (CVAE), un model que pot ser tant semi com totalment supervisat, aprenent de l’expressió i del grup de cada pacient. Fins ara, s’ha creat una mètrica similar (https://www.sciencedirect.com/science/article/pii/S2211124722009718 i https://www.sciencedirect.com/science/article/pii/S2211124722009718) basada en elements intermedis (coneguts com a “metagens”) d’un algorisme de representació dels gens. En canvi, en aquest projecte es busca atacar el problema directament a nivell dels gens. El model produït hauria de ser explicable, és a dir, hauríem de poder identificar els elements (gens) més importants que el model determina per assignar un grup o un altre.            </p>
          </div>
          <div class="margin-bottom">
            <h3 class="margin-bottom">Punt de vista de la salut</h3>
            <p>
              Els pacients de G3 mostren el pitjor pronòstic dins dels subgrups de medul·loblastoma: menys d’un 60% de supervivència 5 anys després del diagnòstic. En canvi, els pacients de G4 mostren un pronòstic més favorable. En conseqüència, l’agressivitat del tractament és diferent segons el grup assignat. Això comporta un risc: en un cas dubtós, se li podria assignar un tractament incorrecte. La creació d’un model que pugui definir, és a dir, personalitzar, una puntuació de pertinença a aquests dos subgrups, a més de determinar quins gens concrets justifiquen aquesta puntuació, podria ajudar a definir un tractament més ajustat a les necessitats de cada pacient.
            </p>
          </div>
          <br>
          <p>
            <strong>Premi: </strong>
            L'equip guanyador d'aquest repte obtindrà un premi de 100 euros (màxim 4 persones per equip). Podeu trobar les bases de <i>Judging</i> a l'apartat de <i>Regles</i>.
          </p>
          <br>
          <div class="margin-bottom text-centered">
            <b>Proposa:</b> <span>BSC, Projecte Evenflow</span>
          </div>
        </div>
      </div>
      <div class="panel large">
        <h1>Hack the Uterus!: el repte NEST (NSMP Endometrial Stratification Tool)</h1>
        <div class="text-centered">
          <p class="icon"><i class="fab fa-slack" aria-hidden="true"></i></p>
          <span>hack-the-uterus</span>
        </div>
        <div>
          <p class="margin-bottom">
              El càncer d'endometri és el tumor ginecològic més freqüent entre les dones dels països desenvolupats. Recentment, s'ha conegut l'existència de quatre gru`s moleculars. Tres d'ells ens donen molta informació del pronòstic de la malaltia, però hi ha un grup de pacients per als quals el pronòstic és incert: el grup molecular NSMP ("Non Specific Molecular Profile"). Aquest grup representa gairebé la meitat dels casos i és molt variat — hi ha dones que no tornaran a tenir cap problema i d’altres que poden patir una recaiguda o una metàstasi.          </p>
          <div>
            <h3 class="margin-bottom">Punt de vista tecnològic</h3>
            <p>
              El repte per als participants serà crear un model predictiu de risc utilitzant dades reals de pacients amb càncer d’endometri del grup NSMP. Els equips hauran d’analitzar variables com l’edat, el tipus de tumor o el tractament rebut, per descobrir patrons que ajudin a predir la probabilitat de recaiguda, i mostrar-los, de forma senzilla, als professionals de la salut.            </p>
          </div>
          <div class="margin-bottom">
            <h3 class="margin-bottom">Punt de vista de la salut</h3>
            <p>
              El repte NEST és poder predir el risc de cada pacient del grup NSMP, utilitzant la informació que ja tenim a les seves històries clíniques. Si aconseguim fer-ho, l'equip mèdic podrà adaptar millor els tractaments i evitar tant els excessos com les mancances terapèutiques. L’objectiu és desenvolupar una eina senzilla, visual i útil que pugui ajudar els professionals de la salut a prendre millors decisions en el futur.            </p>
          </div>
          <br>
          <p>
            <strong>Premi: </strong>
            L'equip guanyador d'aquest repte obtindrà un premi de 100 euros (màxim 4 persones per equip). Podeu trobar les bases de <i>Judging</i> a l'apartat de <i>Regles</i>.
          </p>
          <br>
          <div class="margin-bottom text-centered">
            <b>Proposa:</b> <span>Sant Pau</span>
          </div>
        </div>
      </div>
      <div class="panel large">
        <h1>Xuklis Quest: joc col·laboratiu per a joves en tractament oncològic</h1>
        <div class="text-centered">
          <p class="icon"><i class="fab fa-slack" aria-hidden="true"></i></p>
          <span>xuklis-quest</span>
        </div>
        <div>
          <p class="margin-bottom">
              Creació d’un joc interactiu col·laboratiu pensat per a joves entre 12 i 18 anys que estan en tractament o seguiment de càncer, i que puguin participar-hi des de l’hospital, la Casa dels Xuklis o casa seva. L’objectiu és desenvolupar un entorn digital segur i tancat, on els participants resolguin enigmes, reptes i missions tipus gimcana o escape room, que estimulin la cooperació i la creativitat. El joc tindrà un moderador o dinamitzador (educador o voluntari AFANOC) que activi les sessions i guiï els grups. L’accés estaria disponible només en moments concrets, per afavorir la participació simultània i crear una sensació de comunitat.          </p>
          <div>
            <h3 class="margin-bottom">Punt de vista tecnològic</h3>
            <p>
              Desenvolupament d’un entorn gamificat tancat i segur, amb control d’accés i gestió de sessions. Creació d’un sistema interactiu multiusuari, amb reptes cooperatius i canals de comunicació guiats. Possibilitat d’explorar intel·ligència artificial per adaptar reptes segons l’edat o estat d’ànim. Integració amb eines web o mòbils accessibles des de dispositius hospitalaris o personals.            </p>
          </div>
          <div class="margin-bottom">
            <h3 class="margin-bottom">Punt de vista de la salut</h3>
            <p>
              Reducció de l’aïllament social: permet connectar amb altres joves que viuen situacions similars. Foment de la col·laboració i l’autoestima: cada participant aporta les seves habilitats per superar reptes. Estimulació cognitiva i emocional: el joc combina pensament lògic, creativitat i empatia. Espai de diversió compartida: ofereix un temps d’evasió dins d’un entorn de joc segur i positiu.            </p>
          </div>
          <br>
          <p>
            <strong>Premi: </strong>
            L'equip guanyador d'aquest repte obtindrà un premi de 100 euros (màxim 4 persones per equip). Podeu trobar les bases de <i>Judging</i> a l'apartat de <i>Regles</i>.
          </p>
          <br>
          <div class="margin-bottom text-centered">
            <b>Proposa:</b> <span>AFANOC</span>
          </div>
        </div>
      </div>
      <div class="panel large">
        <h1>Predict to Protect: KIR Decode Challenge per a les Leucèmies Mieloides</h1>
        <div class="text-centered">
          <p class="icon"><i class="fab fa-slack" aria-hidden="true"></i></p>
          <span>predict-to-protect</span>
        </div>
        <div>
          <p class="margin-bottom">
              Els gens KIR codifiquen per uns receptors essencials del sistema immunitari, ubicats a les cèl·lules Natural Killer, amb la funció de detectar i eliminar cèl·lules tumorals. La seva complexitat rau en la seva extrema variabilitat: cada persona presenta diferències tant en el nombre de còpies dels gens KIR com en les variants específiques de cada gen. Aquesta regió del genoma ha estat tradicionalment poc estudiada a causa de la seva alta complexitat i el seu elevat grau de polimorfisme. Des del nostre laboratori, hem confirmat que la presència o absència d'algun gen KIR influeix en l'evolució de les leucèmies mieloides. Ara volem anar més enllà per identificar quines variants concretes de cada KIR modulen la resposta immunitària i determinen el curs d'aquestes malalties.          </p>
          <div>
            <h3 class="margin-bottom">Punt de vista tecnològic</h3>
            <p>
              El repte consisteix a desenvolupar un algorisme capaç d'identificar no només la presència o absència dels gens KIR, sinó també les seves variants al·lèliques específiques, utilitzant dades de seqüenciació de la regió KIR. Es podrà adaptar o redissenyar eines bioinformàtiques existents perquè funcionin amb les nostres dades de seqüenciació. Els participants podràn validar els seus mètodes amb 30 mostres de control de genotip conegut, per després aplicar-los a una cohort de 190 pacients amb Leucèmia Mieloide Crònica i 400 controls sans. L'objectiu final és crear models predictius que integrin aquesta informació genètica d'alta resolució amb dades clíniques.            </p>
          </div>
          <div class="margin-bottom">
            <h3 class="margin-bottom">Punt de vista de la salut</h3>
            <p>
              La identificació de les variants al·lèliques dels KIR representaria un avenç significatiu cap a la medicina personalitzada en malalties mieloides. Aquest coneixement permetria estratificar els pacients segons el seu risc real i adaptar les estratègies terapèutiques i de seguiment a les seves característiques genètiques individuals. La possibilitat d'identificar variants concretes d'aquest cluster genètic obre nous horitzons no només en leucèmies, sinó també en immunoteràpia, trasplantaments, infertilitat humana i malalties autoimmunitàries. L'objectiu final és oferir als professionals una eina de suport que permeti una avaluació del risc personalitzada per a cada pacient, superant les limitacions que fins ara havia imposat la complexitat d'aquesta regió genòmica.            </p>
          </div>
          <br>
          <p>
            <strong>Premi: </strong>
            L'equip guanyador d'aquest repte obtindrà un premi de 100 euros (màxim 4 persones per equip). Podeu trobar les bases de <i>Judging</i> a l'apartat de <i>Regles</i>.
          </p>
          <br>
          <div class="margin-bottom text-centered">
            <b>Proposa:</b> <span>Banc de Sang i Teixits</span> amb la col·laboració de l’<span>ICO</span>, l’<span>Institut Josep Carreras</span> i l’<span>Hospital Clínic</span>
          </div>
        </div>
      </div>
      <div class="panel large">
        <h1>Monitoritzant els efectes cognitius i de funcionalitat del càncer: detecció i reacció!</h1>
        <div class="text-centered">
          <p class="icon"><i class="fab fa-slack" aria-hidden="true"></i></p>
          <span>deteccio-i-reaccio</span>
        </div>
        <div>
          <p class="margin-bottom">
              Entre el 15 i el 50% de les persones diagnosticades de càncer presenten dificultats cognitives al llarg del procés oncològic. Aquests problemes inclouen dificultats per mantenir la concentració, pensar amb claredat o rapidesa, i recordar informació recent, noms o paraules que abans els resultaven familiars. També manifesten amb molta freqüència tenir la ment dispersa o més lenta a l’hora de processar la informació. Un dels problemes amb què ens trobem com a professionals de la salut és la detecció d’aquestes dificultats. Per tal de poder-les mesurar adequadament cal realitzar una sèrie proves que consumeixen molt temps tan de pacient com de professional, i els resultats de les quals sovint no representen els dèficits que els pacients reporten. En aquest context, ens agradaria disposar d’una eina digital que els pacients puguin utilitzar des de casa i que mesuri de manera precisa els problemes cognitius que experimenten en el seu dia a dia. A més, ens agradaria que, en funció dels problemes cognitius que reportin, se’ls propossessin recursos psicoeducatius i/o tasques de rehabilitació cognitiva per realitzar en el seu dia a dia amb un seguiment d’aquestes.          <div>
            <h3 class="margin-bottom">Punt de vista tecnològic</h3>
            <p>
              Ens agradaria comptar amb una eina que avaluï els problemes cognitius de persones amb càncer de la manera més ecològica possible. La eina podria comptar, per una banda, amb alguna prova objectiva sensible al seu dèficit, i per altre, una mesura subjectiva com en forma de preguntes diàries sobre les seves dificultats en les àrees esmentades anteriorment. Aquesta avaluació aniria associada a una intervenció en forma de recursos psicoeducatius personalitzats y/o tasques per millorar o compensar les dificultats diàries.
          </div>
          <div class="margin-bottom">
            <h3 class="margin-bottom">Punt de vista de la salut</h3>
            <p>
              Els tractaments relacionats amb les dificultats cognitives actuals ofereixen estratègies enfocades a millorar la capacitat cognitiva sense tindre en compte els problemes reals amb els que es troben en el dia a dia, allunyant-se dels reptes que pateixen a la vida diària. Disposar d’una eina digital que ajudi a detectar, monitoritzar i tractar/ compensar les dificultats cognitives que impacten en la vida diària, millorarà la qualitat de vida i funcionalitat de les persones amb càncer. En aquest marc, aquest repte pretén desenvolupar una eina digital que permeti avaluar les dificultats cognitives que presenten en la seva vida quotidiana i que puguin oferir un tractament adaptat i personalitzat a les seves necessitats diàries, sovint canviants.            </p>
          </div>
          <br>
          <p>
            <strong>Premi: </strong>
            L'equip guanyador d'aquest repte obtindrà un premi de 100 euros (màxim 4 persones per equip). Podeu trobar les bases de <i>Judging</i> a l'apartat de <i>Regles</i>.
          </p>
          <br>
          <div class="margin-bottom text-centered">
            <b>Proposa:</b> <span>ICOnnectat</span> i <span>ICO</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Challenges',
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
</style>
