<template>
  <div class="main">
    <div class="gCol">
      <div class="card">
        <h3>Description</h3>
        <p>blabla</p>
      </div>
      <router-link to="/guide">
        <div class="cardSquare">
          <img alt="ilu" src="http://www.chat-alors.fr/wp-content/uploads/2018/06/DSC_0181.jpg" />
          <h3>Guide de l'adoption</h3>
          <div class="but">en savoir plus</div>
        </div>
      </router-link>
      <router-link to="/pathologie">
        <div class="cardSquare">
          <img alt="ilu" src="http://www.chat-alors.fr/wp-content/uploads/2018/06/DSC_0147.jpg" />
          <h3>Les pathologies et vaccins</h3>
          <div class="but">en savoir plus</div>
        </div>
      </router-link>
      <router-link to="/adoption">
        <div class="card" style="padding: 0px; position: relative; height: 150px; background: url('https://png.pngtree.com/thumb_back/fw800/back_pic/03/60/81/2857a6bb1811e64.jpg') center; background-size: cover; cursor: pointer">
          <h3 style="position: absolute; top: 20%; left: 48%; color: white; font-size: 2em; text-shadow: 1px 1px 2px #000;">J'adopte !</h3>
        </div>
      </router-link>
      <div class="card" style="padding: 10px; position: relative; center; background-size: cover; cursor: pointer">
        <h3>Les 10 commandements du chat</h3>
        <ul style="display: inline-block; text-align: left">
          <li>Sans panier ne me transporteras.</li>
          <li>Tous les 4 mois vermifuge tu me donneras.</li>
          <li>Propre de naissance, régulièrement ma litière tu changeras.</li>
          <li>Rappel de vaccinations chaque année tu n’oublieras.</li>
          <li>Des câlins en veux-tu en voilà tous les jours tu me feras.</li>
          <li>Mes bêtises tu me pardonneras.</li>
          <li>Bon équilibre de nourriture, croquettes eau fraîche tu  m’accorderas.</li>
          <li>De lait point ne me donneras.</li>
          <li>Solitude tu combleras et musique ou télé tu me laisseras.</li>
          <li>Chaque soir d’une page de livre « le chat révélé » de Desmond Morris tu te nourriras.</li>
        </ul>
      </div>
      <router-link to="/sterilisation">
        <div class="cardSquare">
          <img alt="ilu" src="http://www.chat-alors.fr/wp-content/uploads/2017/05/WP_20180204_15_57_20_Pro.jpg" />
          <h3>La stérilisation</h3>
          <div class="but">en savoir plus</div>
        </div>
      </router-link>
      <router-link to="/sauvage">
        <div class="cardSquare">
          <img alt="ilu" src="http://www.chat-alors.fr/wp-content/uploads/2017/05/WP_20180204_11_22_25_Pro.jpg" />
          <h3>Chats errants / libres</h3>
          <div class="but">en savoir plus</div>
        </div>
      </router-link>
      <div class="card" style="padding: 0px; position: relative; height: 150px; background: url('https://static.wamiz.fr/images/news/facebook/trouverchatonrect-fb-56e15ff28c6fc.jpg') center; background-size: cover; cursor: pointer">
        <h3 style="position: absolute; top: 20%; left: 35%; color: white; font-size: 2em; text-shadow: 1px 1px 2px #000;">Devenez famille d'accueil</h3>
      </div>
    </div>
    <div class="dCol">
      <div class="card">
        <h3>Prochaines dates</h3>
        <p style="text-align: left; margin-left: 10px;">13 octobre 2018 : Vide-grenier</p>
        <p style="text-align: left; margin-left: 10px;">10 novembre 2018 : Vide-grenier</p>
        <p style="text-align: left; margin-left: 10px;">8 decembre 2018 : Vide-grenier</p>
        <img src="http://www.animauxdico.com/img/charte_graphique/chat.jpg" alt="ico" style="height: 100px; width: 100px; border-radius: 100px; margin: 10px; opacity: 0.9;"/>
        <p>85 route de beauvoir<br/>85300 Pont habert / Sallertaine</p>
      </div>
      <div class="card">
        <h3>Partenariat</h3>
        <p>Achetez sur zooplus.fr pour aider l'assiociation. Entre 3% et 4% du prix de vos achats seront reversés à l'association.</p>
        <img alt="zooplus" src="https://marketing.net.zooplus.fr/ts/i3971185/tsv?amc=con.zooplus.382132.395161.16711&tst=!!TIMESTAMP!!" style="border-radius: 2px;" />
      </div>
      <div class="card">
        <h3 style="color: darkred;">L'abandon</h3>
        <p style="text-align: justify; text-justify: inter-word;">Le code pénal considère l’abandon comme un acte de cruauté, au même titre que la maltraitance animale.
<br/><br/>
          <div style="text-align: center">
            <img alt="zooplus" src="../assets/sad.png" style="border-radius: 2px;  width: 100px;" />
          </div>
        <br/>
        <p style="text-align: justify; text-justify: inter-word;">
          L’article 521-1 du Code pénal établit que « exercer des sévices graves, ou de nature sexuelle, ou de commettre un acte de cruauté envers un animal domestique, ou apprivoisé, ou tenu en captivité, est puni de deux ans d’emprisonnement et de 30 000 euros d’amende.</p></p>
</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .main {
    position: relative;
    width: 70%;
    margin-left: 15%;
    padding-top: 100px;
  }
  .gCol {
    display: inline-block;
    width: calc(70% - 20px);
    margin: 10px;
  }
  .dCol {
    display: inline-block;
    width: calc(30% - 20px);
    float: right;
    margin: 10px;
  }

  @media (max-width: 1270px) {
    .dCol {
      display: none;
    }
    .gCol {
      width: 100%;
    }
  }
  .card {
    background-color: rgba(230, 230, 230, 0.9);
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
    border-radius: 5px;
    padding: 10px;
    margin: 10px;
  }
  .cardSquare {
    background-color: rgba(230, 230, 230, 0.9);
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
    display: inline-block;
    width: calc(50% - 30px);
    margin: 15px;
    background-size: cover;
    position: relative;
  }
  .cardSquare img {
    width: 100%;
    cursor: pointer;
    filter: brightness(65%);
    -webkit-filter: brightness(65%);
    -moz-filter: brightness(65%);
    -o-filter: brightness(65%);
    -ms-filter: brightness(65%);
  }
  .cardSquare .but {
    position: absolute;
    cursor: pointer;
    bottom: 5%;
    left: 35%;
    border-radius: 20px;
    display: inline-block;
    padding: 10px;
    color: rgba(220, 220, 220, 0.8);
    border: 1px solid rgba(250, 250, 250, 0.8);
  }
  .cardSquare .but:hover {
    background-color: rgba(200, 200, 200, 0.1);
  }
  .cardSquare h3 {
    position: absolute;
    top: 0px;
    text-align: center;
    width: 100%;
    padding: 10px;
    color: white;
  }
</style>
