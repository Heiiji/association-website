<template>
    <div class="main">
        <div class="gCol">
            <div v-if="selected === -1" class="card">
                <h3 style="color: green;">L’adoption : source de stress</h3>
                <p style="text-align: left">L’arrivée d’un jeune chat est un vrai bonheur pour toute la famille. Mais pour votre chaton, l’adoption correspond aussi à une série de situation pour le moins stressantes :<br/><br/>
                <ul>
                    <li>Une séparation brutale avec sa mère et sa fratrie.</li>
                    <li>La découverte d’un nouveau territoire parfois très éloigné de celui qu’il connaissait et où il doit trouver rapidement ses marques.</li>
                    <li>La rencontre avec des personnes jusqu’alors inconnues et avec lesquelles il devra tisser des liens affectifs. La confrontation éventuelle avec les animaux de la maison (chien, chats…) pas forcément accueillants !</li>
                </ul><br/><br/>
                Que de bouleversements et d’émotions pour une si petite boule de poils ! Il sera perdu les premiers jours et aura besoin de toute votre patience et de tout votre amour pour se sentir apaisé et s’adapter à sa nouvelle vie. A vous de faire en sorte que tout se passe bien.</p>
            </div>


            <div v-else-if="selected === 0" class="card">
                <h3 style="color: green;">L'accueil</h3>
                <h3 style="text-align: left; font-size: 1.4em">Comment lui préparer le meilleur acceuil</h3>
                <p style="text-align: left">Pas d’improvisation : tout doit être prêt avant sa venue, son bac à litière garni, ses gamelles, ses jouets, sa nourriture, sa caisse de transport, son griffoir … n’oubliez pas de remplir le réfrigérateur et de faire le ménage, cela vous évitera le jour de son arrivée de « l’abandonner » pour faire des courses ou de lui faire subir l’épreuve de l’aspirateur.
<br/><br/>
                    Consacrez-lui du temps : allez le chercher la veille d’un week-end. Il a besoin d’être entouré et rassuré les premiers jours. Comment peut-il s’attacher à vous si vous partez travailler le lendemain de son arrivée ? Plus que tout, il a besoin d’un repère affectif, d’une mère de substitution.
<br/><br/>
                    Un accueil sans fanfare : l’arrivée dans son nouveau foyer doit se faire dans le calme, il est déjà impressionné, n’en rajoutez pas ! N’invitez pas famille et voisins, demandez aux enfants de ne pas crier et de ne pas trop le solliciter. Restons Zen…
<br/><br/>
                    ASTUCE : allez le chercher le matin pour qu’il ait déjà toute la journée pour faire connaissance avec la famille et la maison.</p>
            </div>


            <div v-else-if="selected === 1" class="card">
                <h3 style="color: green;">Problème de comportement</h3>
                <h3 style="text-align: left; font-size: 1.4em">Il se cache sous votre armoire ?</h3>
                <p style="text-align: left">
                    A peine arrivé chez vous, votre chaton trop intimidé est parti se réfugier sus un meuble et refuse d’en sortir. N’essayez pas de l’y en contraindre, cela ne ferait qu’augmenter son stress. Il a besoin de temps pour explorer son nouvel univers.
                    <br/><br/>
                    Votre vétérinaire peut vous aider à raccourcir cette phase d’adaptation.
                </p>
                <h3 style="text-align: left; font-size: 1.4em">Il est pétrifié de peur ?</h3>
                <p style="text-align: left">
                    La première entrevue avec le chat résident a été si sonore que le chaton n’ose plus bouger de sa cachette ? si aucun appel au jeu, aucune caresse, aucune friandise ne l’en déloge, faites appel à votre vétérinaire pour trouver une solution.
<br/><br/>
                    ASTUCE : pour favoriser l’entente entre deux chats, ne les enfermez pas dans la même pièce mais au contraire, ouvrez les portes intérieures pour que chacun puisse se réfugier dans une pièce séparée. Faites les jouer ensemble avec une balle, une canne à pêche ou un stylo laser.
                </p>
                <h3 style="text-align: left; font-size: 1.4em">Première bêtise</h3>
                <p style="text-align: left">
                    Il a les qualités et les défauts de sont jeune âge. Joueur, attendrissant, il est aussi maladroit et inconscient. Si certains comportements s’avèrent dangereux, d’autres sont tout simplement gênants. Il faut l’éduquer dès le départ, car oui, un chaton aussi doit être éduqué.
                </p>
                <h3 style="text-align: left; font-size: 1.4em">Il mordille vos mains</h3>
                <p style="text-align: left">
                    L’idée selon laquelle un chaton mordille pour se faire ses dents est fausse. Le mordillement est un comportement normal mais il n’est pas lié à l’éruption dentaire et doit être inhibé. Si vous le laissez faire, il sera incapable de jouer sans faire mal. C’est à vous de lui apprendre à contrôler ses mâchoires mais aussi ses griffes : stoppez le jeu dès qu’il griffe ou mordille dites « non » et donnez une ou plusieurs claques sur son museau avec votre index. Ne lui donnez jamais de fessée !
                </p>
                <h3 style="text-align: left; font-size: 1.4em">Il fait ses griffes sur le canapé</h3>
                <p style="text-align: left">
                    « Faire ses griffes » est un comportement normal et inné chez le chat. Cela lui permet d’affûter ses griffes mais aussi de marquer son territoire. Les griffades vont donc s’amplifier avec l’âge. Mettez à la disposition de votre chaton dès le départ des griffoirs appropriés et le temps qu’il apprenne à les utiliser, protégez votre canapé avec des plaids.
                </p>
                <h3 style="text-align: left; font-size: 1.4em">Il grignote les plantes</h3>
                <p style="text-align: left">
                    Ce petit jeu est dangereux car beaucoup de plantes d’appartement ou de fleurs sont toxiques. Mettez les plantes hors de portée, en hauteur. Vous pouvez aussi pulvériser dessus du citron ou du Tabasco dilués dans de l’eau. Ne le grondez pas mais faites diversion en lançant une balle ou en lui balançant une paire de chaussettes enroulées dès qu’il s’intéresse de trop près à une feuille…
                </p>
                <h3 style="text-align: left; font-size: 1.4em">Il escalade la balustrade</h3>
                <p style="text-align: left">
                    ATTENTION ! la chute d’une fenêtre ou d’un balcon représente le danger domestique n°  1 pour un chat vivant en appartement. Le danger est d’autant plus élevé que l’animal est jeune en raison de sa maladresse et de son imprudence. Fermez bien fenêtres et portes-fenêtres quand vous ne pouvez pas le surveiller ou installez des filets de protection.
<br/><br/>
                    ASTUCE : pour éviter les brûlures, couvrez vos plaques de cuisson encore chaudes de couvre-plaques ou d’une casserole remplie d’eau froide.
                </p>
                <h3 style="text-align: left; font-size: 1.4em">Il boude sa gamelle</h3>
                <p style="text-align: left">
                    S’il refuse de toucher aux croquettes qu’il mangeait auparavant, ne faites pas l’erreur de lui proposer du thon ou des boîtes. Peut-être est-il malade ou tout simplement stressé par son arrivée chez vous…
<br/><br/>
                    ASTUCE : il miaule dès que vous mettez un pied dans la cuisine ? ne lui donnez pas systématiquement à manger, vous renforcerez cette mauvaise habitude. Engagez plutôt un jeu. Vous lui remplirez sa gamelle plus tard.
                </p>
                <h3 style="text-align: left; font-size: 1.4em">Ilneveut pas jouer</h3>
                <p style="text-align: left">
                    Vos sollicitations le laisse de marbre, voire l’apeurent ? il ne bouge pas de son refuge et sursaute au moindre bruit. Ce n’est pas normal, consultez éventuellement votre vétérinaire.
<br/><br/>
                    ASTUCE : un jouet incomparable qui désinhibera le plus timide des chatons : le stylo laser ou pointeur lumineux ! la vue de son faisceau lumineux rouge au sol génère invariablement chez lui une course poursuite. Attention à ne jamais pointer le stylo dans ses yeux (ou les yeux d’une personne) au risque de léser gravement la rétine.
                </p>
            </div>


            <div v-else-if="selected === 2" class="card">
                <h3 style="color: green;">Sociabilisation</h3>
                <h3 style="text-align: left; font-size: 1.4em">Ses premier copains</h3>
                <p style="text-align: left">
                    A partir de 2 mois, un chaton équilibré a soif d’aventures et de nouvelles rencontres.  Bipède ou a 4 pattes, pour lui, tout individu est un potentiel copain de jeu. Profitez de cette période de grande tolérance sociale (appelée période de socialisation) pour le mettre en contact et le faire jouer avec un maximum d’amis et de connaissances. Ainsi il ne développera pas de phobie sociale. Vous pouvez également faire en sorte qu’il se familiarise avec d’autres espèces (chien, lapin, cobaye …)
                </p>
                <h3 style="text-align: left; font-size: 1.4em">L'autre chat de la maison</h3>
                <p style="text-align: left">
                    Si vous possédez déjà un chat, ce dernier verra d’abord d’un mauvais œil l’intrusion sur son territoire (votre maison !) d’un inconnu. Il risque fort de l’accueillir avec des feulements et des grognements… ne vos en formalisez pas et surtout n’intervenez pas, vous ne feriez qu’envenimer les choses. Les deux chats ont besoin de temps pour se connaître et partager le territoire. Prévoyez deux bacs à litière ainsi que des gamelles séparées pour chacun dans un premier temps.
                </p>
                <h3 style="text-align: left; font-size: 1.4em">Le chien de la maison</h3>
                <p style="text-align: left">
                    Si vous possédez déjà un chat, ce dernier verra d’abord d’un mauvais œil l’intrusion sur son territoire (votre maison !) d’un inconnu. Il risque fort de l’accueillir avec des feulements et des grognements… ne vos en formalisez pas et surtout n’intervenez pas, vous ne feriez qu’envenimer les choses. Les deux chats ont besoin de temps pour se connaître et partager le territoire. Prévoyez deux bacs à litière ainsi que des gamelles séparées pour chacun dans un premier temps.
                </p>
                <h3 style="text-align: left; font-size: 1.4em">Les enfants</h3>
                <p style="text-align: left">
                    Il parait que les chat qui ont grandi avec des enfants sont les plus câlins… certaines précautions sont cependant à prendre pour le bien-être de chacun. Enseignez à vos chérubins à ne pas trop porter le chaton, à respecter son sommeil comme ses repas et à bannir le moindre geste violent envers lui. Stoppez les jeux quand le chaton griffe ou mort ou est trop énervé.
                </p>
                <h3 style="text-align: left; font-size: 1.4em">Des copain de l'exterieur</h3>
                <p style="text-align: left">
                    Si vous avez un jardin, attendez deux semaines avant de le laisser sortir, sous surveillance,  et sans lui donner à manger avant. Tant qu’il n’est pas vacciné, mieux vaut éviter les contacts avec les chats de l’extérieur.
                </p>
            </div>


            <div v-else-if="selected === 3" class="card">
                <h3 style="color: green;">Les repas</h3>
                <h3 style="text-align: left; font-size: 1.4em">Ses premiers repas</h3>
                <p style="text-align: left">
                    La croissance est une période sensible et critique qui conditionne la santé et la vie future de votre chaton. Bien le nourrir avec une alimentation qui répond à ses besoins nutritionnels bien particuliers est donc essentiel. Néanmoins les premiers temps, le plus important est de veiller à ce que ses repas se déroulent sans stress et d’éviter les initiatives dangereuses pour sa santé.
                </p>
                <h3 style="text-align: left; font-size: 1.4em">Que lui donner a manger ?</h3>
                <p style="text-align: left">
                    Tout simplement l’aliment qu’il consommait avant son adoption (même marque de boîtes ou de croquettes) et rien d’autre ! Car tout changement brusque de régime alimentaire entraîne chez le chat diarrhées et déshydratation. Son jeune âge et le stress lié à l’adoption rendent votre petit compagnon encore plus sensible à ces désordres digestifs. Si, sur conseil de votre vétérinaire, vous devez changer d’aliment, attendez une semaine, puis observez une transition alimentaire sur une dizaine de jours en remplaçant petit à petit le nouvel aliment par l’ancien.
                </p>
                <h3 style="text-align: left; font-size: 1.4em">A quel rythme lui donner à manger ?</h3>
                <p style="text-align: left">
                    A la différence du chien, le chat n’a pas besoin d’1 ou 2 repas par jour mais plutôt de ….10 ou 20 ! A l’état sauvage, ce chasseur solitaire doit en effet attraper en 24 h une quinzaine de petites proies pour couvrir ses besoins quotidiens. A la maison, ce comportement de grignoteur doit être favorisé : l’aliment sera servi quasi en libre service pour que votre chaton puisse se restaurer quand il en ressent le besoin. De lui-même, il régulera très bien sa prise alimentaire.
                </p>
                <h3 style="text-align: left; font-size: 1.4em">Faut-il lui donner du lait ?</h3>
                <p style="text-align: left">
                    Malgré l’idée largement répandue, le lait n’est pas nécessaire à la croissance d’un chaton sevré. Le lait de vache est même nocif pour sa santé, trop riche en lactose (sucre spécifique du lait) il est mal digéré par votre animal, fermente dans ses intestins et provoque des diarrhées. Donnez-lui de l’eau fraîche.
                </p>
                <h3 style="text-align: left; font-size: 1.4em">Comment stimuler son appétit ?</h3>
                <p style="text-align: left">
                    Le chat aime manger sans contrainte, ni compétition et surtout sans stress. Sa gamelle doit être posée dans un endroit calme (loin des lieux de passage ou des machines bruyantes) et loin de ses toilettes. Une fois servis, les boîtes et sachets perdent rapidement leur bon goût et leurs odeurs appétissantes. Donnez-les par petites quantités et en plusieurs repas. A contrario, les croquettes peuvent sans problème rester plusieurs heures à l’air ambiant.
                </p>
                <h3 style="text-align: left; font-size: 1.4em">Il boude sa gamelle ?</h3>
                <p style="text-align: left">
                    S’il refuse de toucher aux croquettes qu’il mangeait auparavant, ne faites pas l’erreur de lui proposer du thon ou des boîtes. Peut-être est-il malade ou tout simplement stressé par son arrivée chez vous…
<br/><br/>
                    ASTUCE : il miaule dès que vous mettez un pied dans la cuisine ? ne lui donnez pas systématiquement à manger, vous renforcerez cette mauvaise habitude. Engagez plutôt un jeu. Vous lui remplirez sa gamelle plus tard.
                </p>
            </div>


            <div v-else-if="selected === 4" class="card">
                <h3 style="color: green;">Le jeu</h3>
                <h3 style="text-align: left; font-size: 1.4em">Ses premiers jeux</h3>
                <p style="text-align: left">
                    Le jeu est le meilleur remède contre le stress, c’est pourquoi il faut en user et abuser avec votre chaton dès le début de votre histoire commune. Il permet de tisser des liens de complicité entre lui et vous et favorise son bon développement physique et comportemental et lui permet de dépenser toute l’énergie qui est en lui.
                </p>
                <h3 style="text-align: left; font-size: 1.4em">Comment l'inciter à jouer ?</h3>
                <p style="text-align: left">
                    Rien de plus facile car tout stimulus en mouvement le fait bondir : une petite balle qui roule, une plume suspendue à un fil, un bouchon en liège accroché à un élastique … chez le chaton, le jeu est un apprentissage de la chasse : le jouet doit donc mimer une proie, être de petite taille et facilement mobile sur le sol ou dans l’air. Avec un peu d’imagination on peut lui en fabriquer de très rigolos.
                </p>
                <h3 style="text-align: left; font-size: 1.4em">Quels sont les jeux interdits ?</h3>
                <p style="text-align: left">
                    Mettez hors de portée pelotes de laine et nécessaire à couture, car il risque de mâchouiller et d’ingérer des fils en jouant, ce qui entraînerait une occlusion intestinale. Il en est de même avec les ficelles de toute sorte (roastbeef, emballage cadeau, poubelle…)
                </p>
                <h3 style="text-align: left; font-size: 1.4em">Peut-il jouer tout seul ?</h3>
                <p style="text-align: left">
                    Oui, bien sur. Il suffit de lui laisser quelques jouets au sol (souris, boule de papier aluminium, balle en plastique…) et d’autres en suspension. Comme il aime jouer à cache-cache, laissez-lui les portes des placards et armoires ouvertes, un carton renversé ou même un sac en papier dont vous aurez coupé les anses. Des « tunnels à chats » et des « arbres à chat » vendus en animalerie promettent aussi de belles parties de jeu.
                </p>
                <h3 style="text-align: left; font-size: 1.4em">Il ne veut pas jouer ?</h3>
                <p style="text-align: left">

                    Vos sollicitations le laisse de marbre, voire l’apeurent ? il ne bouge pas de son refuge et sursaute au moindre bruit. Ce n’est pas normal, consultez éventuellement votre vétérinaire.
<br/><br/>
                    ASTUCE : un jouet incomparable qui désinhibera le plus timide des chatons : le stylo laser ou pointeur lumineux ! la vue de son faisceau lumineux rouge au sol génère invariablement chez lui une course poursuite. Attention à ne jamais pointer le stylo dans ses yeux (ou les yeux d’une personne) au risque de léser gravement la rétine.
                </p>
            </div>


            <div v-else-if="selected === 5" class="card">
                <h3 style="color: green;">Le sommeil</h3>
                <h3 style="text-align: left; font-size: 1.4em">Ses premières nuits</h3>
                <p style="text-align: left">
                    Première nuit, première épreuve : dormir seul loin du nid maternel… Egaré dans cette maison soudain si calme, il va miauler de détresse, chercher une présence humaine ou féline en parcourant toutes les pièces, gratter à la porte de votre chambre, tenter d’escalader votre lit …
                </p>
                <h3 style="text-align: left; font-size: 1.4em">Peut-il dormir sur le lit ?</h3>
                <p style="text-align: left">
                    Le chat n’a pas un mais des lieux de couchage qui varient dans la journée au gré de ses envies et besoins. Son choix se porte de préférence sur des endroits moelleux et confortables, en hauteur et près d’une source de chaleur. Un couffin posé à terre dans un coin d’une pièce ne lui convient pas. Ce n’est pas un chien. Naturellement les premiers temps, votre chaton cherchera à dormir à vos côtés car votre compagnie le rassure. Vous pouvez l’accepter sur votre lit à condition que celui-ci ne soit pas dangereux pour lui (trop haut), sinon installez lui au pied du lit un nid bien douillet et chaud, de préférence fermé et caressez le pour qu’il s’endorme en ronronnant.
                </p>
                <h3 style="text-align: left; font-size: 1.4em">Peut-il dormir avec les enfants ?</h3>
                <p style="text-align: left">
                    Non pour des questions d’hygiène ; Le chaton peut porter des vers intestinaux dont certains sont transmissibles à l’homme et dangereux pour les enfants. Apprenez d’ailleurs aux vôtres à se laver les mains après avoir touché le chaton et à ne pas partager leur assiette avec lui. Vermifugez régulièrement votre protégé.
                </p>
                <h3 style="text-align: left; font-size: 1.4em">Pourquoi ne fait-il pas ses nuits ?</h3>
                <p style="text-align: left">
                    Vous êtes réveillés en pleine nuit par ses miaulements ou tout simplement parce qu’il joue avec une balle bruyante ou avec vos pieds ? Petit ou grand, le chat ne dort pas huit heures d’affilée comme un humain. Il est adepte de multiples siestes entrecoupées de périodes d’activités. Il est donc normal qu’il se réveille la nuit d’autant que pour les félins, c’est le moment idéal pour chasser les rongeurs ! câlinez le pour le calmer et prenez votre mal en patience, il finira bien par calquer son rythme au vôtre.

                </p>
                <h3 style="text-align: left; font-size: 1.4em">Pourquoi dort-il autant dans la journée ?</h3>
                <p style="text-align: left">
                    Le chat domestique est un des plus gros dormeurs qui existent sur terre. Adulte, il dort en moyenne 14 heures par jour. Le chaton, lui, a besoin d’au moins 20 heures de sommeil ! car, comme chez l’enfant, les rêves favorisent chez lui le bon développement cérébral, la mémorisation, l’apprentissage et la synthèse de l’hormone de croissance. C’est pourquoi il ne faut jamais réveiller un chat qui dort.
<br/><br/>
                    ASTUCE : un linge imprégné de votre odeur (pull, tee-shirt) placé dans son couffin l’apaisera et l’aidera à s’endormir.
                </p>
            </div>
        </div>
        <div class="dCol">
            <div class="card">
                <h3>Sommaire</h3>
                    <span v-on:click="goTo(0)" :class="selected === 0 ? 'sommaireActive' : 'sommaire'">L'accueil</span>
                    <span v-on:click="goTo(1)" :class="selected === 1 ? 'sommaireActive' : 'sommaire'">Problèmes de comportement</span>
                    <span v-on:click="goTo(2)" :class="selected === 2 ? 'sommaireActive' : 'sommaire'">Sociabilisation</span>
                    <span v-on:click="goTo(3)" :class="selected === 3 ? 'sommaireActive' : 'sommaire'">Les repas</span>
                    <span v-on:click="goTo(4)" :class="selected === 4 ? 'sommaireActive' : 'sommaire'">Le jeu</span>
                    <span v-on:click="goTo(5)" :class="selected === 5 ? 'sommaireActive' : 'sommaire'">Le sommeil</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Adoption',
        data: function () {
            return ({
                selected: -1
            })
        },
        methods: {
            goTo (target) {
                if (target >= 0 && target <= 5) {
                    this.selected = target;
                }
            },
            goNext () {
                if (this.target < 5) {
                    this.target += 1;
                }
            },
            goBack () {
                if (this.target > 0) {
                    this.target -= 1;
                }
            }
        },
        mounted() {
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
    .sommaire {
        padding: 10px;
        display: block;
        font-size: 1.2em;
    }
    .sommaireActive {
        padding: 10px;
        display: block;
        font-size: 1.2em;
        border-radius: 30px;
        background-color: rgba(40, 40, 40, 0.2);
    }
    .sommaire:hover {
        background-color: rgba(0, 0, 0, 0.1);
        border-radius: 30px;
        cursor: pointer;
    }
    .gCol {
        display: inline-block;
        width: calc(70% - 20px);
        margin: 10px;
    }
    .dCol {
        display: inline-block;
        width: calc(30% - 20px);
        float: left;
        margin: 10px;
    }
    .card {
        background-color: rgba(230, 230, 230, 0.9);
        box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
        border-radius: 5px;
        padding: 10px;
        margin: 10px;
    }
    .select {
        display: inline-block;
        width: 250px;
        height: 250px;
        position: relative;
        cursor: pointer;
        margin: 10px;
    }
    .select h3 {
        display: none;
    }
    .select:hover h3 {
        background: rgba(0, 0, 0, 0.3);
        display: inline-block;
        position: absolute;
        top: -20px;
        left: 0px;
        height: calc(100% - 20px);
        width: calc(100% - 20px);
        padding: 10px;
        color: white;
        vertical-align: middle;
    }
</style>
