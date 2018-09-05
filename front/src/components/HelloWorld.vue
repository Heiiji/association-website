<template>
  <div class="main">
    <div class="gCol">
      <div class="card">
        <h3>Prochain vide-grenier</h3>
        <p>Venez nombreux le 8 septembre 2018 à l'association !!!</p>
      </div>
      <div class="cardSquare">
        <img alt="ilu" src="http://www.chat-alors.fr/wp-content/uploads/2018/06/DSC_0181.jpg" />
        <h3>Guide de l'adoption</h3>
        <div class="but">en savoir plus</div>
      </div>
      <div class="cardSquare">
        <img alt="ilu" src="http://www.chat-alors.fr/wp-content/uploads/2018/03/praline.jpg" />
        <h3>Les pathologies</h3>
        <div class="but">en savoir plus</div>
      </div>
      <div class="card" style="padding: 0px; position: relative; height: 100px; background: url('https://png.pngtree.com/thumb_back/fw800/back_pic/03/60/81/2857a6bb1811e64.jpg') center; background-size: cover; cursor: pointer">
        <h3 style="position: absolute; top: 25%; left: 48%; color: white; text-shadow: 1px 1px #000;">J'adopte !</h3>
      </div>
    </div>
    <div class="dCol">
      <div class="card">
        <h3>Prochaines dates</h3>
        <p style="text-align: left; margin-left: 10px;">8 septembre 2018 : Vide-grenier</p>
        <p style="text-align: left; margin-left: 10px;">13 octobre 2018 : Vide-grenier</p>
        <img src="http://www.animauxdico.com/img/charte_graphique/chat.jpg" alt="ico" style="height: 100px; width: 100px; border-radius: 100px; margin: 10px; opacity: 0.9;"/>
      </div>
      <div class="card">
        <h3>Partenariat</h3>
        <p>Acheter sur zooplus.fr pour aider l'assiociation. Entre 3% et 4% du prix de vos achats seront reversés à l'association.</p>
        <img alt="zooplus" src="https://marketing.net.zooplus.fr/ts/i3971185/tsv?amc=con.zooplus.382132.395161.16711&tst=!!TIMESTAMP!!" />
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
