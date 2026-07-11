// GENERATED FILE — do not edit by hand. Run `npm run pokedex:data`.
// Types + two localised fun facts per roster pokémon, bundled from PokéAPI.
// pt has no PokéAPI flavor text, so its facts fall back to English.
import type { Lang } from "../lib/i18n";

export interface DexEntryData {
  /** Type keys, e.g. ["water", "flying"]. Localised names live in ./types. */
  types: string[];
  /** Exactly two fun-fact blurbs per app language. */
  facts: Record<Lang, [string, string]>;
}

export const POKEDEX_DATA: Record<number, DexEntryData> = {
  2: {
    types: ["grass","poison"],
    facts: {
      en: ["When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs.", "The bulb on its back grows by drawing energy. It gives off an aroma when it is ready to bloom."],
      pt: ["When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs.", "The bulb on its back grows by drawing energy. It gives off an aroma when it is ready to bloom."],
      es: ["Este Pokémon tiene un bulbo en el lomo. Dicen que, al absorber nutrientes, el bulbo se transforma en una flor grande.", "Cuando el bulbo de su lomo se hincha, desprende un dulce aroma para indicar el florecimiento."],
      fr: ["Lorsque le bourgeon sur son dos éclot, il répand un doux parfum pour célébrer sa floraison.", "Il y a un bulbe sur son dos. On dit que s’il absorbe assez de nutriments, ce bulbe se transforme en une jolie fleur."],
      de: ["Es trägt eine Knospe auf seinem Rücken. Nimmt es Nahrung zu sich, soll aus der Knospe eine große blühende Blume werden.", "Sobald die Knospe auf seinem Rücken ein süßes Aroma abgibt, steht die Blüte kurz bevor."],
    },
  },
  6: {
    types: ["fire","flying"],
    facts: {
      en: ["It is said that Charizard’s fire burns hotter if it has experienced harsh battles.", "Spits fire that is hot enough to melt boulders. Known to cause forest fires unintentionally."],
      pt: ["It is said that Charizard’s fire burns hotter if it has experienced harsh battles.", "Spits fire that is hot enough to melt boulders. Known to cause forest fires unintentionally."],
      es: ["Cuando lanza una descarga de fuego supercaliente, la roja llama de su cola brilla más intensamente.", "Con las alas que tiene puede alcanzar una altura de casi 1400 m. Suele escupir fuego por la boca."],
      fr: ["On raconte que la flamme du Dracaufeu s’intensifie après un combat difficile.", "Quand il crache son souffle brûlant, la flamme au bout de sa queue s’embrase."],
      de: ["Wenn dieses Pokémon einen Strahl glühenden Feuers speit, leuchtet seine Schwanzspitze auf.", "Dieses Pokémon kann mit seinen Flügeln eine Höhe von bis zu 1 400 m erreichen. Es spuckt sehr heißes Feuer."],
    },
  },
  7: {
    types: ["water"],
    facts: {
      en: ["After birth, its back swells and hardens into a shell. Powerfully sprays foam from its mouth.", "Shoots water at prey while in the water. Withdraws into its shell when in danger."],
      pt: ["After birth, its back swells and hardens into a shell. Powerfully sprays foam from its mouth.", "Shoots water at prey while in the water. Withdraws into its shell when in danger."],
      es: ["Se protege con su caparazón y luego contraataca lanzando agua a presión cuando tiene oportunidad.", "Lanza agua a su presa desde el agua. Se esconde en su concha cuando se siente en peligro."],
      fr: ["Il se réfugie dans sa carapace et réplique en éclaboussant l’ennemi à la première occasion.", "Caché sous l’eau, il crache un jet d’eau sur sa proie et se cache à l’intérieur de sa carapace."],
      de: ["Es zieht sich in seinen Panzer zurück und greift dann mit Wasserstrahlen seine Gegner an.", "Dieses Pokémon jagt mit einem Wasserstrahl. Bei Gefahr zieht es sich in seinen Panzer zurück."],
    },
  },
  10: {
    types: ["bug"],
    facts: {
      en: ["Its short feet are tipped with suction pads that enable it to tirelessly climb slopes and walls.", "If you touch the feeler on top of its head, it will release a horrible stink to protect itself."],
      pt: ["Its short feet are tipped with suction pads that enable it to tirelessly climb slopes and walls.", "If you touch the feeler on top of its head, it will release a horrible stink to protect itself."],
      es: ["Para protegerse despide un hedor horrible de sus antenas, con el que repele a sus enemigos.", "Sus patas tienen ventosas con las que se adhiere a cualquier sitio. Escala árboles buscando forraje."],
      fr: ["Ses antennes rouges libèrent une puanteur qui repousse l’ennemi. Il grandit par mues régulières.", "Pour se protéger, il émet un gaz puant par ses antennes, qui fait fuir ses ennemis audacieux."],
      de: ["Als Schutz vor Feinden sondert es einen übel riechenden Gestank mit seinen Antennen ab.", "Die Saugnäpfe an den Beinen haften auf jedem Untergrund. Es sucht hartnäckig in Bäumen nach Futter."],
    },
  },
  11: {
    types: ["bug"],
    facts: {
      en: ["This POKéMON is vulnerable to attack while its shell is soft, exposing its weak and tender body.", "Hardens its shell to protect itself. However, a large impact may cause it to pop out of its shell."],
      pt: ["This POKéMON is vulnerable to attack while its shell is soft, exposing its weak and tender body.", "Hardens its shell to protect itself. However, a large impact may cause it to pop out of its shell."],
      es: ["Su frágil cuerpo está recubierto de una coraza dura como el acero. Permanece quieto en su desarrollo.", "Este Pokémon es vulnerable al ataque cuando su coraza es blanda y no lo protege del todo."],
      fr: ["Son corps frêle est protégé par sa carapace d’acier. Il encaisse les coups durs en attendant d’évoluer.", "Il est vulnérable aux attaques tant que sa carapace est molle, car il expose son corps tendre et mou."],
      de: ["Der stahlharte Panzer schützt seinen zarten Körper. Es wartet geduldig auf seine Entwicklung.", "Während der Panzer dieses Pokémon sehr weich ist, bietet er keinen großen Schutz vor Attacken."],
    },
  },
  25: {
    types: ["electric"],
    facts: {
      en: ["When several of these POKéMON gather, their electricity could build and cause lightning storms.", "It keeps its tail raised to monitor its surroundings. If you yank its tail, it will try to bite you."],
      pt: ["When several of these POKéMON gather, their electricity could build and cause lightning storms.", "It keeps its tail raised to monitor its surroundings. If you yank its tail, it will try to bite you."],
      es: ["Levanta su cola para vigilar los alrededores. A veces, puede ser alcanzado por un rayo en esa pose.", "Las bolsas de las mejillas están llenas de electricidad, que libera cuando se siente amenazado."],
      fr: ["Il lui arrive de remettre d’aplomb un Pikachu allié en lui envoyant une décharge électrique.", "Il élève sa queue pour surveiller les environs. Elle attire souvent la foudre dans cette position."],
      de: ["Es streckt seinen Schweif nach oben, um seine Umgebung zu prüfen. Häufig fährt ein Blitz hinein.", "Es hat kleine Backentaschen, die mit Elektrizität gefüllt sind. Bei Gefahr entlädt es sie."],
    },
  },
  39: {
    types: ["normal","fairy"],
    facts: {
      en: ["When its huge eyes light up, it sings a mysteriously soothing melody that lulls its enemies to sleep.", "Uses its alluring eyes to enrapture its foe. It then sings a pleasing melody that lulls the foe to sleep."],
      pt: ["When its huge eyes light up, it sings a mysteriously soothing melody that lulls its enemies to sleep.", "Uses its alluring eyes to enrapture its foe. It then sings a pleasing melody that lulls the foe to sleep."],
      es: ["Cautiva con la mirada a su enemigo y hace que se quede profundamente dormido mientras entona una dulce melodía.", "Si se hincha para cantar una nana, cantará más tiempo y podría causar sopor en el público."],
      fr: ["Lorsqu’il roule ses grands yeux ronds, il entonne une berceuse qui endort son auditoire.", "Il hypnotise ses ennemis grâce à ses grands yeux avant de les plonger dans un profond sommeil en chantant une douce mélopée."],
      de: ["Es fesselt die Gegner mit seinen großen, runden Augen und versetzt sie in Schlaf, indem es eine beruhigende Melodie singt.", "Wenn es Gesang einsetzt, steigt seine Ausdauer und seine Zuhörer werden in Tiefschlaf versetzt."],
    },
  },
  41: {
    types: ["poison","flying"],
    facts: {
      en: ["It has no eyes. Instead, it relies on its ultrasonic cries for echolocation to flit about in darkness.", "Forms colonies in perpetually dark places. Uses ultrasonic waves to identify and approach targets."],
      pt: ["It has no eyes. Instead, it relies on its ultrasonic cries for echolocation to flit about in darkness.", "Forms colonies in perpetually dark places. Uses ultrasonic waves to identify and approach targets."],
      es: ["Aunque carezca de ojos, puede detectar obstáculos con las ondas ultrasónicas que emite su boca.", "No tiene ojos. Se guía por las ondas ultrasónicas que emite. El eco le indica por dónde tiene que ir en la oscuridad."],
      fr: ["Il se repère dans l’espace grâce aux ultrasons émis par sa gueule.", "Bien que dépourvu d’yeux, il repère les obstacles grâce aux ultrasons émis par sa gueule."],
      de: ["Obwohl es keine Augen hat, kann es Hindernisse mithilfe von Ultraschallwellen wahrnehmen.", "Es hat keine Augen. Zur Orientierung nutzt es seine Ultraschallwellen-Schreie, um in der Dunkelheit zu fliegen."],
    },
  },
  56: {
    types: ["fighting"],
    facts: {
      en: ["Extremely quick to anger. It could be docile one moment then thrashing away the next instant.", "An agile POKéMON that lives in trees. It angers easily and will not hesitate to attack anything."],
      pt: ["Extremely quick to anger. It could be docile one moment then thrashing away the next instant.", "An agile POKéMON that lives in trees. It angers easily and will not hesitate to attack anything."],
      es: ["Es peligroso acercarse si se enfada sin razón aparente, ya que no distingue entre amigos y enemigos.", "Vive en colonias en los árboles. Si uno se enfada, el resto de la manada ataca sin motivo."],
      fr: ["Ils vivent en colonies sylvestres. Quand un Férosinge s’énerve, toute la colonie suit son exemple.", "Il ne peut dissocier ses amis de ses ennemis et a tendance à enrager lorsqu’on l’approche."],
      de: ["Da es grundlos angreift und nicht zwischen Freund oder Feind unterscheidet, ist es sehr gefährlich.", "Es lebt mit anderen in Baumkronen. Wird eines von ihnen wütend, werden alle anderen auch wütend."],
    },
  },
  77: {
    types: ["fire"],
    facts: {
      en: ["Its hooves are 10 times harder than diamonds. It can trample anything completely flat in little time.", "Capable of jumping incredibly high. Its hooves and sturdy legs absorb the impact of a hard landing."],
      pt: ["Its hooves are 10 times harder than diamonds. It can trample anything completely flat in little time.", "Capable of jumping incredibly high. Its hooves and sturdy legs absorb the impact of a hard landing."],
      es: ["Cuando nace, apenas puede tenerse en pie. Pero va fortaleciendo las patas en cuanto empieza a galopar.", "Fortalece las patas mientras sigue a sus padres. Corre en el campo y en la montaña todo el día."],
      fr: ["Chancelantes à la naissance, ses pattes deviennent très vite sûres et solides à force de galoper.", "Il muscle ses pattes en suivant ses parents. Il arpente les plaines et les montagnes toute la journée."],
      de: ["Neugeboren kann es kaum stehen. Durch das Galoppieren werden seine Beine aber schneller und kräftiger.", "Seine Beine werden kräftig, da es seinen Eltern hinterherläuft. Es rennt den ganzen Tag umher."],
    },
  },
  94: {
    types: ["ghost","poison"],
    facts: {
      en: ["Under a full moon, this POKéMON likes to mimic the shadows of people and laugh at their fright.", "A GENGAR is close by if you feel a sudden chill. It may be trying to lay a curse on you."],
      pt: ["Under a full moon, this POKéMON likes to mimic the shadows of people and laugh at their fright.", "A GENGAR is close by if you feel a sudden chill. It may be trying to lay a curse on you."],
      es: ["Se esconde entre las sombras. Se dice que donde Gengar acecha, la temperatura baja 5 °C.", "De noche, se oculta en las sombras y absorbe el calor de la gente. El frío que transmite es estremecedor."],
      fr: ["Si vous croisez un regard inquiétant qui perce la nuit, c’est sûrement un Ectoplasma.", "On dit que lorsqu’Ectoplasma se cache dans l’ombre, la température alentour chute de 5 °C."],
      de: ["Es versteckt sich im Schatten. Man sagt, wenn sich ein Gengar versteckt, kühlt es sich um 5 °C ab.", "Es versteckt sich im Schatten der Menschen und absorbiert deren Wärme, sodass die Menschen frieren."],
    },
  },
  95: {
    types: ["rock","ground"],
    facts: {
      en: ["It burrows through the ground at a speed of 50 mph while feeding on large boulders.", "Opening its large mouth, it ingests massive amounts of soil and creates long tunnels."],
      pt: ["It burrows through the ground at a speed of 50 mph while feeding on large boulders.", "Opening its large mouth, it ingests massive amounts of soil and creates long tunnels."],
      es: ["Cava a gran velocidad en busca de comida. Los túneles que deja son usados por los Diglett.", "Suele vivir bajo tierra. Va buscando comida a medida que se va abriendo camino a 80 km por hora."],
      fr: ["Il se nourrit des pierres qu’il rencontre en creusant le sol. Il peut creuser à 80 km/h!", "Il creuse sous terre en quête de nourriture. Ses tunnels servent de maison aux Taupiqueur."],
      de: ["Dieses Pokémon gräbt auf seiner Suche nach Futter lange Tunnel, in denen sich später Digda einnisten.", "Es lebt gewöhnlich unter der Erde. Während es sich mit 80 km/h durchs Erdreich bohrt, sucht es nach Nahrung."],
    },
  },
  100: {
    types: ["electric"],
    facts: {
      en: ["Usually found in power plants. Easily mistaken for a POKé BALL, they have zapped many people.", "It is said to camouflage itself as a POKé BALL. It will self-destruct with very little stimulus."],
      pt: ["Usually found in power plants. Easily mistaken for a POKé BALL, they have zapped many people.", "It is said to camouflage itself as a POKé BALL. It will self-destruct with very little stimulus."],
      es: ["Fue descubierto cuando se crearon las Poké Balls. Se dice que tiene algo que ver con ellas.", "Suele vivir en centrales de energía. Mucha gente acaba muy mal al confundirlo con una Poké Ball."],
      fr: ["Il ressemble à une Poké Ball. Ce Pokémon dangereux peut exploser ou s’électrifier au toucher.", "Découvert en même temps que les Poké Balls. Il paraît qu’il existe un lien entre les deux."],
      de: ["Es wurde entdeckt, als man Pokébälle einführte. Es scheint, als gäbe es da einen Zusammenhang.", "Dieses Pokémon wird oftmals mit einem Pokéball verwechselt. Es lebt vorwiegend in Kraftwerken."],
    },
  },
  104: {
    types: ["ground"],
    facts: {
      en: ["Because it never removes its skull helmet, no one has ever seen this POKéMON's real face.", "Wears the skull of its deceased mother. Its cries echo inside the skull and come out as a sad melody."],
      pt: ["Because it never removes its skull helmet, no one has ever seen this POKéMON's real face.", "Wears the skull of its deceased mother. Its cries echo inside the skull and come out as a sad melody."],
      es: ["Lleva puesto el cráneo de su madre. Cuando se siente solo se pone a gritar muy fuerte.", "Siempre lleva la calavera de su difunta madre, así que nadie sabe cómo es su cara oculta."],
      fr: ["Il pleure en pensant à sa mère disparue, et ses larmes résonnent dans son crâne creux.", "Ce Pokémon porte le crâne de sa défunte mère sur sa tête. On raconte qu’il se met à pleurer dès qu’il se retrouve seul."],
      de: ["Es trägt den Schädel seiner verstorbenen Mutter auf seinem Kopf. Fühlt es sich einsam, soll es laut weinen.", "Es trägt immer den Schädel seiner verstorbenen Mutter. Darum weiß niemand, wie sein Gesicht aussieht."],
    },
  },
  109: {
    types: ["poison"],
    facts: {
      en: ["Because it stores several kinds of toxic gases in its body, it is prone to exploding without warning.", "In hot places, its internal gases could expand and explode without any warning. Be very careful!"],
      pt: ["Because it stores several kinds of toxic gases in its body, it is prone to exploding without warning.", "In hot places, its internal gases could expand and explode without any warning. Be very careful!"],
      es: ["Tiene forma de globo y es muy ligero. Está compuesto por gases tóxicos y apesta.", "Los gases de su cuerpo le permiten flotar. Estos gases, además de oler mal, también son explosivos."],
      fr: ["Il flotte en retenant des gaz plus légers que l’air. Ceux-ci sont explosifs, en plus d’être fétides.", "Son corps très fin en forme de ballon est rempli d’un horrible gaz toxique. L’air est nauséabond à proximité de ce Pokémon."],
      de: ["Sein dünner, ballonartiger Körper ist mit schrecklichem Giftgas gefüllt. Es verbreitet einen heftigen Gestank, wenn es in der Nähe ist.", "Gase, die leichter als Luft sind, lassen es schweben. Diese Gase stinken und sind explosiv."],
    },
  },
  120: {
    types: ["water"],
    facts: {
      en: ["An enigmatic POKéMON that can effortlessly regenerate any appendage it loses in battle.", "As long as the center section is unharmed, it can grow back fully even if it is chopped to bits."],
      pt: ["An enigmatic POKéMON that can effortlessly regenerate any appendage it loses in battle.", "As long as the center section is unharmed, it can grow back fully even if it is chopped to bits."],
      es: ["Aunque sus brazos se rompan podrán regenerarse, siempre y cuando su núcleo siga intacto.", "Suele aparecer en grupos en la orilla de la playa. Por la noche, el órgano central que tiene brilla con una luz roja."],
      fr: ["Même amoché, son corps se régénère tant que le noyau rouge est intact. Le noyau s’illumine à minuit.", "Même si son corps est détruit, il peut se régénérer aussi longtemps que son cœur est en bon état."],
      de: ["Auch wenn sein Körper nicht mehr intakt ist, kann es sich regenerieren, wenn der Kern leuchtet.", "Es taucht in großer Anzahl an Ufern auf. Nachts leuchtet der Kern in seiner Mitte rot auf."],
    },
  },
  129: {
    types: ["water"],
    facts: {
      en: ["In the distant past, it was somewhat stronger than the horribly weak descendants that exist today.", "Famous for being very unreliable. It can be found swimming in seas, lakes, rivers and shallow puddles."],
      pt: ["In the distant past, it was somewhat stronger than the horribly weak descendants that exist today.", "Famous for being very unreliable. It can be found swimming in seas, lakes, rivers and shallow puddles."],
      es: ["No es precisamente rápido ni fuerte. Es el Pokémon más debilucho y simplón de todos los que hay.", "En un pasado lejano, era más fuerte de lo que hoy son sus débiles descendientes."],
      fr: ["Un vénérable Magicarpe peut franchir une montagne en utilisant Trempette. Mais c’est tout...", "Magicarpe manque totalement de vitesse et de force. C’est le Pokémon le plus pathétique sur terre."],
      de: ["Es ist nutzlos, was Kraft und Geschwindigkeit angeht. Dieses ist das schwächste und erbärmlichste Pokémon der Welt.", "Die urzeitlichen Vorfahren dieses Pokémon waren sehr viel stärker als ihre heutigen Nachkommen."],
    },
  },
  130: {
    types: ["water","flying"],
    facts: {
      en: ["Rarely seen in the wild. Huge and vicious, it is capable of destroying entire cities in a rage.", "Brutally vicious and enormously destructive. Known for totally destroying cities in ancient times."],
      pt: ["Rarely seen in the wild. Huge and vicious, it is capable of destroying entire cities in a rage.", "Brutally vicious and enormously destructive. Known for totally destroying cities in ancient times."],
      es: ["En la literatura antigua se dice que un Gyarados rebosante de violencia arrasó un poblado.", "No es frecuente verlo en su medio. Es enorme y malvado, y capaz de destruir ciudades enteras de un ataque."],
      fr: ["Quand il se laisse emporter par la rage, il ne se calme qu’après avoir détruit tout ce qui l’entoure.", "La littérature ancienne fait état d’un Léviator qui aurait rasé un village sous le coup de la colère."],
      de: ["In alten Schriften wird von einem Garados berichtet, das in einem Wutanfall ein Dorf zerstörte.", "Ein gigantisches, sehr kraftvolles Pokémon. Es ist fähig, ganze Städte zu zerstören."],
    },
  },
  132: {
    types: ["normal"],
    facts: {
      en: ["When it spots an enemy, its body transfigures into an almost-perfect copy of its opponent.", "Capable of copying an enemy's genetic code to instantly transform itself into a duplicate of the enemy."],
      pt: ["When it spots an enemy, its body transfigures into an almost-perfect copy of its opponent.", "Capable of copying an enemy's genetic code to instantly transform itself into a duplicate of the enemy."],
      es: ["Puede alterar por completo su estructura celular para emular cualquier objeto que vea.", "Tiene la capacidad de reorganizar su estructura celular para convertirse en otras formas de vida."],
      fr: ["Il a la capacité de modifier sa structure cellulaire pour prendre l’apparence de ce qu’il voit.", "Métamorph peut modifier sa structure cellulaire à sa guise pour se transformer en n’importe quelle forme vivante."],
      de: ["Es kann seine Zellstruktur so verändern, dass es sich in alles verwandeln kann, was es sieht.", "Es kann seine eigene Zellstruktur frei zusammensetzen und sich in jede andere Lebensform verwandeln."],
    },
  },
  133: {
    types: ["normal"],
    facts: {
      en: ["Its genetic code is irregular. It may mutate if it is exposed to radiation from element STONEs.", "Its genetic code is unstable, so it could evolve in a variety of ways. There are only a few alive."],
      pt: ["Its genetic code is irregular. It may mutate if it is exposed to radiation from element STONEs.", "Its genetic code is unstable, so it could evolve in a variety of ways. There are only a few alive."],
      es: ["Un extraño Pokémon que se adapta a los entornos más hostiles gracias a sus diferentes evoluciones.", "Su irregular estructura genética encierra el secreto de su capacidad para adoptar evoluciones de lo más diversas."],
      fr: ["Son ADN particulier lui permet de s’adapter très rapidement à son environnement.", "Un Pokémon rare qui s’adapte aux environnements hostiles en variant ses formes évolutives."],
      de: ["Ein seltenes Pokémon, das sich seiner Umgebung anpasst, indem es sich in unterschiedliche Formen entwickelt.", "Aufgrund einer genetischen Anomalie kann seine Entwicklung viele verschiedene Formen annehmen."],
    },
  },
  138: {
    types: ["rock","water"],
    facts: {
      en: ["Although long extinct, in rare cases, it can be genetically resurrected from fossils.", "An ancient POKéMON that was recovered from a fossil. It swims by cleverly twisting its 10 tentacles about."],
      pt: ["Although long extinct, in rare cases, it can be genetically resurrected from fossils.", "An ancient POKéMON that was recovered from a fossil. It swims by cleverly twisting its 10 tentacles about."],
      es: ["Pokémon prehistórico que vivió en el océano primordial. Para nadar se valía de sus 10 tentáculos.", "Resucitado de un fósil, este Pokémon usa el aire de su concha para sumergirse y emerger."],
      fr: ["Un Pokémon ramené à la vie par la science à partir d’un fossile. Il peuplait autrefois les mers.", "Un Pokémon préhistorique qui vivait dans les profondeurs marines. Il se déplace en agitant ses 10 tentacules."],
      de: ["Ein prähistorisches Pokémon, das zur Urzeit im Wasser lebte. Es schwimmt, indem es seine zehn Tentakel bewegt.", "Es wurde aus einem Fossil reanimiert. Es nutzt die Luftkammern in seiner Schale, um ab- und aufzutauchen."],
    },
  },
  144: {
    types: ["ice","flying"],
    facts: {
      en: ["A legendary bird POKéMON that is said to appear to doomed people who are lost in icy mountains.", "A legendary bird POKéMON. It freezes water that is contained in winter air and makes it snow."],
      pt: ["A legendary bird POKéMON that is said to appear to doomed people who are lost in icy mountains.", "A legendary bird POKéMON. It freezes water that is contained in winter air and makes it snow."],
      es: ["Legendario Pokémon pájaro capaz de generar ventiscas congelando la humedad del aire.", "Es un legendario pájaro Pokémon. Se aparece a la gente que se ha perdido en las heladas montañas."],
      fr: ["Un Pokémon Oiseau légendaire. Il peut provoquer des blizzards en gelant l’humidité de l’air.", "Le légendaire oiseau des glaces. On dit qu’il apparaît aux gens perdus dans les sommets."],
      de: ["Ein Legendäres Vogel-Pokémon. Es kann Blizzards verursachen, indem es Feuchtigkeit gefriert.", "Ein Legendäres Vogel-Pokémon, das angeblich in Gletschern verirrten Wanderern den Weg weist."],
    },
  },
  145: {
    types: ["electric","flying"],
    facts: {
      en: ["A legendary bird POKéMON that is said to appear from clouds while dropping enormous lightning bolts.", "This legendary bird POKéMON is said to appear when the sky turns dark and lightning showers down."],
      pt: ["A legendary bird POKéMON that is said to appear from clouds while dropping enormous lightning bolts.", "This legendary bird POKéMON is said to appear when the sky turns dark and lightning showers down."],
      es: ["Es un legendario pájaro Pokémon. Dicen que aparece entre las nubes lanzando enormes rayos brillantes.", "Legendario Pokémon pájaro del que se dice que vive en los nubarrones. Controla los rayos eléctricos."],
      fr: ["Un Pokémon Oiseau légendaire dont on dit qu’il vit dans les nuages d’orage. Il contrôle la foudre.", "L’oiseau légendaire de la foudre. Il surgit hors des nuages en lançant d’énormes éclairs."],
      de: ["Ein Legendäres Vogel-Pokémon, das im Sturzflug aus den Wolken bricht und Blitze schleudert.", "Ein Legendäres Vogel-Pokémon, das in Gewitterwolken leben soll. Es kontrolliert Blitze."],
    },
  },
  147: {
    types: ["dragon"],
    facts: {
      en: ["Long considered a mythical POKéMON until recently when a small colony was found living underwater.", "The existence of this mythical POKéMON was only recently confirmed by a fisherman who caught one."],
      pt: ["Long considered a mythical POKéMON until recently when a small colony was found living underwater.", "The existence of this mythical POKéMON was only recently confirmed by a fisherman who caught one."],
      es: ["Se le llama el Pokémon Espejismo porque son muy pocos los que lo han visto. Se encontró su muda.", "Este Pokémon está lleno de vida. Muda su piel continuamente y crece cada vez más."],
      fr: ["Il grandit en muant quasiment tous les jours. Sa peau est toute douce après la mue.", "On l’appelle “Pokémon mirage” en raison de sa rareté. On a découvert sa mue."],
      de: ["Man nennt es „Illusion-Pokémon“, denn nur wenige haben es gesehen. Nur seine Haut wurde oft gefunden.", "Dieses Pokémon strotzt vor Lebensenergie. Es häutet sich ständig und wird dadurch größer."],
    },
  },
  151: {
    types: ["psychic"],
    facts: {
      en: ["So rare that it is still said to be a mirage by many experts. Only a few people have seen it worldwide.", "When viewed through a micro scope, this POKéMON's short, fine, delicate hair can be seen."],
      pt: ["So rare that it is still said to be a mirage by many experts. Only a few people have seen it worldwide.", "When viewed through a micro scope, this POKéMON's short, fine, delicate hair can be seen."],
      es: ["Varios científicos lo consideran el antecesor de los Pokémon porque usa todo tipo de movimientos.", "Dicen que su ADN contiene el código genético de todos los Pokémon, por lo que conoce cualquier técnica."],
      fr: ["Nombre de scientifiques voient en lui l’ancêtre des Pokémon car il maîtrise toutes leurs capacités.", "Son ADN contient les codes génétiques de tous les Pokémon. Il peut utiliser nombre de techniques."],
      de: ["Es beherrscht alle möglichen Attacken, daher sieht man in ihm den Vorfahren aller Pokémon.", "Seine DNS soll den genetischen Code aller Pokémon beinhalten. Dadurch kann es alle Attacken erlernen."],
    },
  },
  167: {
    types: ["bug","poison"],
    facts: {
      en: ["It lies still in the same pose for days in its web, waiting for its unsuspecting prey to wander close.", "It spins a web using fine--but durable--thread. It then waits pa tiently for prey to be trapped."],
      pt: ["It lies still in the same pose for days in its web, waiting for its unsuspecting prey to wander close.", "It spins a web using fine--but durable--thread. It then waits pa tiently for prey to be trapped."],
      es: ["El veneno de sus colmillos no es demasiado tóxico, pero basta para mantener inmovilizadas a las presas que caen en sus redes.", "Teje su telaraña con hilo fino pero resistente. Espera pacientemente a que caiga su presa."],
      fr: ["Il tisse une toile fine mais solide pour poser des pièges et se poste dans l’attente d’une proie.", "Il tisse une toile en utilisant un fil fin mais solide, puis il attend tranquillement sa proie."],
      de: ["Es spinnt ein Netz aus feinem, aber reißfestem Faden. Dann wartet es auf Beute, die im Netz zappelt.", "Es sitzt tagelang regungslos in seinem Netz und lauert unvorsichtiger Beute auf, die ihm zu nahe kommt."],
    },
  },
  185: {
    types: ["rock"],
    facts: {
      en: ["Despite appearing to be a tree, its body is closer to rocks and stones. It is very weak to water.", "Although it always pretends to be a tree, its composi tion appears to be closer to a rock than a plant."],
      pt: ["Despite appearing to be a tree, its body is closer to rocks and stones. It is very weak to water.", "Although it always pretends to be a tree, its composi tion appears to be closer to a rock than a plant."],
      es: ["Aunque pretende ser un árbol, en su composición se parece más a una roca que a una planta.", "Se disfraza de árbol para no ser atacado. Odia el agua, por lo que desaparecerá si empieza a llover."],
      fr: ["Il prend l’apparence d’un arbre pour éviter les attaques, mais il déteste l’eau et fuit la pluie.", "Il fait semblant d’être un arbre. Sa composition est en fait plus proche de la pierre."],
      de: ["Obwohl es vorgibt, ein Baum zu sein, kommt seine Zusammensetzung einem Stein näher als einer Pflanze.", "Es tarnt sich als Baum, um nicht angegriffen zu werden. Es hasst Wasser, darum läuft es bei Regen weg."],
    },
  },
  192: {
    types: ["grass"],
    facts: {
      en: ["It converts sun light into energy. In the darkness after sunset, it closes its petals and becomes still.", "In the daytime, it rushes about in a hectic manner, but it comes to a com plete stop when the sun sets."],
      pt: ["It converts sun light into energy. In the darkness after sunset, it closes its petals and becomes still.", "In the daytime, it rushes about in a hectic manner, but it comes to a com plete stop when the sun sets."],
      es: ["A medida que se acerca el verano, va adquiriendo un color más vivo e intenso en los pétalos de la cara.", "Obtiene energía de la luz solar. Este Pokémon es famoso por su heliotropismo."],
      fr: ["Les rayons du soleil lui donnent de l’énergie. Il est connu pour migrer vers les régions ensoleillées.", "À l’approche des beaux jours, les pétales entourant sa tête deviennent plus chatoyants."],
      de: ["Steht der Sommer bevor, werden die Blätter um das Gesicht dieses Pokémon aktiv und lebhaft.", "Warmes Sonnenlicht gibt ihm Energie. Daher wandert es stets dem Sonnenlicht hinterher."],
    },
  },
  248: {
    types: ["rock","dark"],
    facts: {
      en: ["Its body can't be harmed by any sort of attack, so it is very eager to make challenges against enemies.", "Extremely strong, it can change the landscape. It has an insolent nature that makes it not care about others."],
      pt: ["Its body can't be harmed by any sort of attack, so it is very eager to make challenges against enemies.", "Extremely strong, it can change the landscape. It has an insolent nature that makes it not care about others."],
      es: ["En una de sus poderosas garras tiene el poder de hacer temblar la tierra y las montañas.", "Puede alterar el paisaje derribando montañas y enterrando ríos. Da mucho trabajo a los cartógrafos."],
      fr: ["Lorsqu’il est en colère, il abat des montagnes et enterre des fleuves. On doit alors modifier les cartes.", "D’une main seulement il a assez de force pour faire trembler la terre et s’écrouler une montagne."],
      de: ["Es besitzt so viel Kraft, dass es mit nur einer Hand die Erde beben lassen und Berge zerbröckeln kann.", "Bei einem Tobsuchtsanfall zerstört es ganze Gebirge und legt Flüsse trocken."],
    },
  },
  249: {
    types: ["psychic","flying"],
    facts: {
      en: ["It is said that it quietly spends its time deep at the bottom of the sea because its powers are too strong.", "It is said to be the guardian of the seas. It is rumored to have been seen on the night of a storm."],
      pt: ["It is said that it quietly spends its time deep at the bottom of the sea because its powers are too strong.", "It is said to be the guardian of the seas. It is rumored to have been seen on the night of a storm."],
      es: ["Duerme en una dorsal marina. Si bate sus alas, puede causar tormentas de 40 días.", "Dicen que es el guardián de los mares. Hay rumores de que fue visto en una noche de tormenta."],
      fr: ["Il dort dans une faille des grands fonds. Ses battements d’ailes génèrent une tempête de 40 jours.", "Il est supposé être le gardien des sept mers. On raconte qu’il est apparu une nuit de forte tempête."],
      de: ["Es schläft in einem Tiefseegraben. Schwingt es seine Flügel, entsteht ein Sturm, der 40 Tage dauert.", "Man berichtet, es sei der Wächter der Meere und man habe es im Herzen eines tosenden Sturmes gesehen."],
    },
  },
  255: {
    types: ["fire"],
    facts: {
      en: ["TORCHIC sticks with its TRAINER, following behind with unsteady steps. This POKéMON breathes fire of over 1,800 degrees F, including fireballs that leave the foe scorched black.", "TORCHIC has a place inside its body where it keeps its flame. Give it a hug - it will be glowing with warmth. This POKéMON is covered all over by a fluffy coat of down."],
      pt: ["TORCHIC sticks with its TRAINER, following behind with unsteady steps. This POKéMON breathes fire of over 1,800 degrees F, including fireballs that leave the foe scorched black.", "TORCHIC has a place inside its body where it keeps its flame. Give it a hug - it will be glowing with warmth. This POKéMON is covered all over by a fluffy coat of down."],
      es: ["En su interior, guarda una llama que arde sin cesar. Si se le abraza, se nota que tiene una temperatura muy alta.", "En su interior arde una llama que mantiene su cuerpo caliente. Tira bolas de fuego a 1000 °C."],
      fr: ["Ses câlins réchauffent car il renferme une fournaise. Il envoie des boules de feu à 1 000 °C.", "Poussifeu possède, dans son ventre, une poche de feu qui brûle sans arrêt. Il donne une impression de chaleur quand on lui fait des câlins."],
      de: ["In seinem Bauch ist ein Flammensack, der stets brennt. Umarmt man es, fühlt es sich warm an.", "In seinem Inneren lodert ein Feuer. Es schleudert 1 000 °C heiße Feuerbälle."],
    },
  },
  321: {
    types: ["water"],
    facts: {
      en: ["WAILORD is the largest of all identified POKéMON up to now. This giant POKéMON swims languorously in the vast open sea, eating massive amounts of food at once with its enormous mouth.", "When chasing prey, WAILORD herds them by leaping out of the water and making a humongous splash. It is breathtaking to see this POKéMON leaping out of the sea with others in its pod."],
      pt: ["WAILORD is the largest of all identified POKéMON up to now. This giant POKéMON swims languorously in the vast open sea, eating massive amounts of food at once with its enormous mouth.", "When chasing prey, WAILORD herds them by leaping out of the water and making a humongous splash. It is breathtaking to see this POKéMON leaping out of the sea with others in its pod."],
      es: ["Puede dejar fuera de combate a sus oponentes con el impacto de su enorme cuerpo al caer en el agua tras un salto.", "Es el más grande de los Pokémon. Puede nadar a una profundidad de 3000 m aguantando la respiración."],
      fr: ["Le plus grand des Pokémon. Il peut plonger à une profondeur de 3 000 m en retenant son souffle.", "L’énorme fracas résultant de ses sauts par-dessus les vagues peut faire perdre connaissance à ses adversaires."],
      de: ["Springt es mit seinem gewaltigen Körper von einer Welle ab, kann es Gegner allein mit der Wucht des Aufpralls besiegen.", "Das größte Pokémon. Es kann mit nur einem Atemzug in Tiefen bis 3 000 m tauchen."],
    },
  },
  337: {
    types: ["rock","psychic"],
    facts: {
      en: ["LUNATONE was discovered at a location where a meteorite fell. As a result, some people theorize that this POKéMON came from space. However, no one has been able to prove this theory so far.", "LUNATONE becomes active around the time of the full moon. Instead of walking, it moves by floating in midair. The POKéMON’s intimidating red eyes cause all those who see it to become transfixed with fear."],
      pt: ["LUNATONE was discovered at a location where a meteorite fell. As a result, some people theorize that this POKéMON came from space. However, no one has been able to prove this theory so far.", "LUNATONE becomes active around the time of the full moon. Instead of walking, it moves by floating in midair. The POKéMON’s intimidating red eyes cause all those who see it to become transfixed with fear."],
      es: ["Se piensa que está muy influido por las fases lunares, ya que solo actúa en noches de luna llena.", "Descubierto hace 40 años junto a un meteorito. Duerme a sus enemigos con solo mirarlos."],
      fr: ["On suppose qu’il est lié au cycle lunaire, car il ne sort que les soirs de pleine lune.", "Il a été découvert dans le cratère d’une météorite il y a 40 ans. Son simple regard endort ses ennemis."],
      de: ["Da es in Vollmondnächten aktiv wird, sagt man ihm nach, mit den Mondphasen in Verbindung zu stehen.", "Wurde erstmals vor 40 Jahren bei einem Meteoritenkrater entdeckt. Sein Blick wirkt einschläfernd."],
    },
  },
  352: {
    types: ["normal"],
    facts: {
      en: ["KECLEON is capable of changing its body colors at will to blend in with its surroundings. There is one exception - this POKéMON can’t change the zigzag pattern on its belly.", "KECLEON alters its body coloration to blend in with its surroundings, allowing it to sneak up on its prey unnoticed. Then it lashes out with its long, stretchy tongue to instantly ensnare the unsuspecting target."],
      pt: ["KECLEON is capable of changing its body colors at will to blend in with its surroundings. There is one exception - this POKéMON can’t change the zigzag pattern on its belly.", "KECLEON alters its body coloration to blend in with its surroundings, allowing it to sneak up on its prey unnoticed. Then it lashes out with its long, stretchy tongue to instantly ensnare the unsuspecting target."],
      es: ["Puede mudar el color de su cuerpo a voluntad, pero el dibujo en zigzag de su panza nunca desaparece.", "Acecha a sus presas adaptando sus colores a los del paisaje, pero los dibujos de su panza nunca cambian."],
      fr: ["Il change de couleur à volonté, mais le motif en zigzag qui orne son ventre reste le même.", "Il se fond dans son environnement en changeant de couleur, mais le motif sur son ventre reste le même."],
      de: ["Es kann nach Belieben seine Farbe ändern. Nur das gezackte Muster auf seinem Bauch bleibt gleich.", "Beim Beutefang passt es seine Farbe der Umgebung an. Nur das Muster auf seinem Bauch bleibt gleich."],
    },
  },
  366: {
    types: ["water"],
    facts: {
      en: ["CLAMPERL’s sturdy shell is not only good for protection - it is also used for clamping and catching prey. A fully grown CLAMPERL’s shell will be scored with nicks and scratches all over.", "CLAMPERL grows while being protected by its rock-hard shell. When its body becomes too large to fit inside the shell, it is sure evidence that this POKéMON is getting close to evolution."],
      pt: ["CLAMPERL’s sturdy shell is not only good for protection - it is also used for clamping and catching prey. A fully grown CLAMPERL’s shell will be scored with nicks and scratches all over.", "CLAMPERL grows while being protected by its rock-hard shell. When its body becomes too large to fit inside the shell, it is sure evidence that this POKéMON is getting close to evolution."],
      es: ["Produce durante su vida una sola perla que aumenta los poderes psíquicos al evolucionar.", "Está protegido por una sólida concha. Puede llegar a formar una perla extraordinaria."],
      fr: ["Il ne produit qu’une perle durant son existence. On raconte qu’elle amplifie les pouvoirs psychiques.", "Il ne produit qu’une perle durant son existence, quand il évolue. Elle amplifie les pouvoirs psychiques."],
      de: ["Es entwickelt sich nur einmal im Leben, wobei es eine wundersame Perle erzeugt, die Psycho-Kräfte verstärkt.", "Es ist durch einen harten Panzer geschützt. Einmal im Leben stellt es eine bezaubernde Perle her."],
    },
  },
  370: {
    types: ["water"],
    facts: {
      en: ["LUVDISC live in shallow seas in the tropics. This heart-shaped POKéMON earned its name by swimming after loving couples it spotted in the ocean’s waves.", "LUVDISC’s heart-shaped body is a symbol of love and romance. It is said that any couple meeting this POKéMON is promised a loving relationship that never ends."],
      pt: ["LUVDISC live in shallow seas in the tropics. This heart-shaped POKéMON earned its name by swimming after loving couples it spotted in the ocean’s waves.", "LUVDISC’s heart-shaped body is a symbol of love and romance. It is said that any couple meeting this POKéMON is promised a loving relationship that never ends."],
      es: ["Vive en mares cálidos. Se dice que, si una pareja lo encuentra, será bendecida con amor eterno.", "Durante el desove, multitud de Luvdisc se concentran en los arrecifes de coral coloreando de rosa el agua."],
      fr: ["Un habitant des mers chaudes. On dit que le couple qui tombe sur ce Pokémon connaîtra l’amour éternel.", "Pendant la saison des amours, d’innombrables Lovdisc se réunissent près des barrières de corail et donnent l’impression que la mer est rose."],
      de: ["Es lebt in warmen Meeren. Man sagt, dass Verliebte, die es sehen, mit ewiger Liebe gesegnet sind.", "Während der Laichzeit versammeln sich zahllose Liebiskus in den Korallenriffen. Daher erstrahlt das Wasser rosa."],
    },
  },
  393: {
    types: ["water"],
    facts: {
      en: ["Because it is very proud, it hates accepting food from people. Its thick down guards it from cold.", "It lives along shores in northern countries. A skilled swimmer, it dives for over 10 minutes to hunt."],
      pt: ["Because it is very proud, it hates accepting food from people. Its thick down guards it from cold.", "It lives along shores in northern countries. A skilled swimmer, it dives for over 10 minutes to hunt."],
      es: ["No le gusta que lo cuiden. Como no aprecia el apoyo de su Entrenador, le cuesta coger confianza con él.", "Es muy orgulloso, por lo que odia aceptar comida de la gente. Su grueso plumón lo protege del frío."],
      fr: ["Malgré sa démarche maladroite et ses pertes d’équilibre, il bombe toujours fièrement le torse.", "Ce Pokémon est difficile à entraîner car il est très désobéissant et déteste qu’on lui rende service."],
      de: ["Einmischung kann es gar nicht leiden. Es ist bockig und fasst nur schwer Zutrauen zu seinem Trainer.", "Es ist sehr stolz und nimmt daher kein Futter von anderen an. Seine dicken Daunen schützen vor Kälte."],
    },
  },
  427: {
    types: ["normal"],
    facts: {
      en: ["It slams foes by sharply uncoiling its rolled ears. It stings enough to make a grown-up cry in pain.", "When it senses danger, it perks up its ears. On cold nights, it sleeps with its head tucked into its fur."],
      pt: ["It slams foes by sharply uncoiling its rolled ears. It stings enough to make a grown-up cry in pain.", "When it senses danger, it perks up its ears. On cold nights, it sleeps with its head tucked into its fur."],
      es: ["Lleva las orejas enrolladas. Cuando las extiende, golpea con tal fuerza que incluso puede romper rocas.", "Cuando siente peligro, levanta las orejas. En noches frías, duerme con la cabeza metida en el pelaje."],
      fr: ["Ses oreilles repliées se déroulent avec une force capable de briser un gros rocher.", "Il dresse les oreilles quand il sent un danger. Il dort la tête dans sa fourrure pendant les nuits froides."],
      de: ["Seine Ohren sind immer aufgerollt. Mit ihnen kann es selbst große Felsbrocken zertrümmern.", "Nimmt es Gefahr wahr, richtet es seine Ohren auf. In kalten Nächten vergräbt es den Kopf in seinem Fell."],
    },
  },
  458: {
    types: ["water","flying"],
    facts: {
      en: ["A friendly Pokémon that captures the subtle flows of seawater using its two antennae.", "Scientists discovered that the distinctive patterns on its back differ by region."],
      pt: ["A friendly Pokémon that captures the subtle flows of seawater using its two antennae.", "Scientists discovered that the distinctive patterns on its back differ by region."],
      es: ["Los símbolos de su espalda cambian según la región. A veces se mezcla con bancos de Remoraid y nada junto a ellos.", "Cuando nada cerca de la superficie, pueden observarse los dibujos de su lomo desde los barcos."],
      fr: ["On organise des excursions pour le voir surfer sur les vagues au côté des Rémoraid.", "Les motifs sur son dos sont différents selon les régions. On le voit souvent dans des bancs de Rémoraid."],
      de: ["Ihre Rücken sind je nach Region unterschiedlich gemustert. Oft mischen sie sich unter Remoraid-Schwärme.", "Da es nah an der Meeresoberfläche schwimmt, kann man sein Rückenmuster von Schiffen aus erspähen."],
    },
  },
  479: {
    types: ["electric","ghost"],
    facts: {
      en: ["Research continues on this Pokémon, which could be the power source of a unique motor.", "Its body is composed of plasma. It is known to infiltrate electronic devices and wreak havoc."],
      pt: ["Research continues on this Pokémon, which could be the power source of a unique motor.", "Its body is composed of plasma. It is known to infiltrate electronic devices and wreak havoc."],
      es: ["Desde hace mucho tiempo se estudia su singular motor como fuente de energía motriz.", "Su cuerpo está hecho de plasma. Puede infiltrarse en dispositivos electrónicos e inutilizarlos."],
      fr: ["Son corps parcouru d’électricité lui permet de prendre le contrôle de certains appareils ménagers.", "Un Pokémon longtemps étudié comme source d’énergie pour un moteur très spécial."],
      de: ["Dieses Pokémon wurde lange Zeit erforscht, um als Energiequelle für einen besonderen Motor zu dienen.", "Sein Körper besteht aus Plasma. Mit ihm kann es in elektrische Geräte eindringen und für Chaos sorgen."],
    },
  },
  511: {
    types: ["grass"],
    facts: {
      en: ["This Pokémon dwells deep in the forest. Eating a leaf from its head whisks weariness away as if by magic.", "It shares the leaf on its head with weary-looking Pokémon. These leaves are known to relieve stress."],
      pt: ["This Pokémon dwells deep in the forest. Eating a leaf from its head whisks weariness away as if by magic.", "It shares the leaf on its head with weary-looking Pokémon. These leaves are known to relieve stress."],
      es: ["Comparte las hojas de su cabeza con Pokémon agotados. Posee la facultad de aliviar el cansancio.", "Es todo un experto en la búsqueda de bayas y es tan gentil que las comparte con todos sus compañeros."],
      fr: ["Il vit dans les forêts profondes. Manger la feuille qui pousse sur sa tête fait disparaître la fatigue.", "Les feuilles qui poussent sur sa tête soignent la fatigue. Il en donne aux Pokémon affaiblis."],
      de: ["Schwächelnden Pokémon gibt es ein paar der Kräuter auf seinem Kopf ab und hilft ihnen so wieder auf die Beine.", "Ein nettes Kerlchen, das so talentiert darin ist, Beeren aufzuspüren, dass es sie mit all seinen Kameraden teilt."],
    },
  },
  513: {
    types: ["fire"],
    facts: {
      en: ["When it is angered, the temperature of its head tuft reaches 600° F. It uses its tuft to roast berries.", "This Pokémon lives in caves in volcanoes. The fire within the tuft on its head can reach 600° F."],
      pt: ["When it is angered, the temperature of its head tuft reaches 600° F. It uses its tuft to roast berries.", "This Pokémon lives in caves in volcanoes. The fire within the tuft on its head can reach 600° F."],
      es: ["Pokémon muy inteligente que tiene la costumbre de tostar las bayas antes de comérselas. Ayuda mucho a los humanos.", "Vive en cuevas volcánicas. El interior de su mata de pelo arde, llegando a alcanzar hasta 300 °C."],
      fr: ["Quand il s’énerve, la mèche sur sa tête chauffe à 300 °C. Il s’en sert pour griller des Baies et les manger.", "Il vit dans les cratères des volcans. L’intérieur de la mèche qu’il a sur la tête peut atteindre 300 °C."],
      de: ["Ein kultiviertes Pokémon, das Beeren vor dem Verzehr stets anbrät. Es bietet den Menschen gerne seine Hilfe an.", "Das Feuer in seinem Kopfbüschel erreicht Temperaturen von bis zu 300 °C. Es ist in Vulkanhöhlen zu Hause."],
    },
  },
  515: {
    types: ["water"],
    facts: {
      en: ["The water stored inside the tuft on its head is full of nutrients. Plants that receive its water grow large.", "It does not thrive in dry environments. It keeps itself damp by shooting water stored in its head tuft from its tail."],
      pt: ["The water stored inside the tuft on its head is full of nutrients. Plants that receive its water grow large.", "It does not thrive in dry environments. It keeps itself damp by shooting water stored in its head tuft from its tail."],
      es: ["El agua acumulada en su mata de pelo es rica en nutrientes. Usa su cola para regar plantas con esa misma agua.", "La acuosidad que acumula en su mata de pelo es rica en nutrientes, ideal para regar plantas y que crezcan mucho."],
      fr: ["L’eau contenue dans la mèche sur sa tête est pleine de nutriments. Elle fait pousser les plantes avec vigueur.", "Il supporte mal les environnements secs. Il s’humidifie avec sa queue en aspirant l’eau stockée dans la mèche sur sa tête."],
      de: ["Das Büschel auf seinem Kopf enthält eine sehr nahrhafte Flüssigkeit, mit der es über seinen Schweif Pflanzen wässert.", "Das Wasser, das es im Büschel auf seinem Kopf sammelt, ist äußerst nahrhaft und verhilft Pflanzen zu großem Wachstum."],
    },
  },
  583: {
    types: ["ice"],
    facts: {
      en: ["Snowy mountains are this Pokémon’s habitat. During an ancient ice age, they moved to southern areas.", "It conceals itself from enemy eyes by creating many small ice particles and hiding among them."],
      pt: ["Snowy mountains are this Pokémon’s habitat. During an ancient ice age, they moved to southern areas.", "It conceals itself from enemy eyes by creating many small ice particles and hiding among them."],
      es: ["Enfrían el aire a su alrededor y crean partículas de hielo mediante las cuales congelan a sus oponentes.", "Vive en las cumbres nevadas. Migró hacia el sur durante la era glaciar hace muchísimos años."],
      fr: ["Un Pokémon qui vit dans les montagnes enneigées. Il a émigré au sud durant l’ère glaciaire, il y a bien longtemps.", "Il se cache de ses ennemis en émettant une myriade de petites particules de glace."],
      de: ["Es produziert Eiskörner, indem es die Luft um sich herum abkühlt, und zieht mit ihnen eine Eisschicht um seinen Gegner.", "Es lebt auf schneebedeckten Bergen. Vor vielen Jahren fand es während einer Eiszeit seinen Weg in den Süden."],
    },
  },
  658: {
    types: ["water","dark"],
    facts: {
      en: ["It creates throwing stars out of compressed water. When it spins them and throws them at high speed, these stars can split metal in two.", "It appears and vanishes with a ninja’s grace. It toys with its enemies using swift movements, while slicing them with throwing stars of sharpest water."],
      pt: ["It creates throwing stars out of compressed water. When it spins them and throws them at high speed, these stars can split metal in two.", "It appears and vanishes with a ninja’s grace. It toys with its enemies using swift movements, while slicing them with throwing stars of sharpest water."],
      es: ["Comprime el agua y crea estrellas ninja con las que ataca al enemigo. Cuando las hace girar a gran velocidad cortan en dos hasta el metal.", "Aparece y desaparece de improvisto, cual ninja. Marea al oponente con su soberbia agilidad y lo hace trizas con sus Shuriken de Agua."],
      fr: ["Il transforme des jets d’eau sous pression en redoutables shuriken. Une fois lancés, ils tournent si vite qu’ils peuvent même couper le métal.", "Aussi insaisissable qu’un ninja, il se joue de ses ennemis grâce à sa célérité, et les tranche de ses Sheauriken."],
      de: ["Es stellt Wurfsterne aus komprimiertem Wasser her, die durch ihre hohe Drehgeschwindigkeit beim Werfen sogar Metall durchtrennen.", "Kaum hat man es erspäht, verschwindet es auch schon wieder. Mit der Agilität eines Ninjas verwirrt es seine Gegner, um sie dann mit Wasser-Shuriken anzugreifen."],
    },
  },
  666: {
    types: ["bug","flying"],
    facts: {
      en: ["Vivillon with many different patterns are found all over the world. These patterns are affected by the climate of their habitat.", "The patterns on this Pokémon’s wings depend on the climate and topography of its habitat. It scatters colorful scales."],
      pt: ["Vivillon with many different patterns are found all over the world. These patterns are affected by the climate of their habitat.", "The patterns on this Pokémon’s wings depend on the climate and topography of its habitat. It scatters colorful scales."],
      es: ["En el mundo existen Vivillon con diferentes motivos en sus alas. El clima de cada región influye en sus rasgos.", "Las alas cambian de motivo según el clima y las características naturales del terreno que habite. Esparce escamas de lo más coloridas."],
      fr: ["Les ailes des Prismillon arborent différents motifs en fonction de leur aire d’origine. Il est possible que le climat y soit pour quelque chose.", "Selon le climat de sa région d’origine, les motifs de ses ailes sont différents. Il sème des écailles aux couleurs vives."],
      de: ["Vivillon kommen weltweit mit den unterschiedlichsten Musterungen vor. Das Klima ihres Habitats hat Einfluss auf ihre Flügelmusterung.", "Je nach Klima und geographischer Beschaffenheit seines Habitats ändert sich die Musterung seiner Flügel. Es verstreut bunten Flügelstaub."],
    },
  },
  722: {
    types: ["grass","flying"],
    facts: {
      en: ["This wary Pokémon uses photosynthesis to store up energy during the day, while becoming active at night.", "Silently it glides, drawing near its targets. Before they even notice it, it begins to pelt them with vicious kicks."],
      pt: ["This wary Pokémon uses photosynthesis to store up energy during the day, while becoming active at night.", "Silently it glides, drawing near its targets. Before they even notice it, it begins to pelt them with vicious kicks."],
      es: ["Es cauteloso, desconfiado y de naturaleza nocturna. Durante el día acumula energía mediante la fotosíntesis.", "Se aproxima a sus enemigos planeando por el aire sin hacer el menor ruido y les propina unas patadas de lo más poderosas."],
      fr: ["Ce Pokémon ne baisse jamais sa garde. Pendant la journée, il accumule de l’énergie par photosynthèse, pour mieux agir la nuit venue.", "Il s’approche de ses ennemis en glissant dans les airs sans faire le moindre bruit, puis leur assène de puissants coups de patte."],
      de: ["Ein wachsames und nachtaktives Pokémon. Tagsüber sammelt es per Photosynthese Kräfte, um fit für die Nacht zu sein.", "Nachdem es sich seinem Feind lautlos im Gleitflug genähert hat, wird dieser mit heftigen Tritten völlig überrascht."],
    },
  },
  775: {
    types: ["normal"],
    facts: {
      en: ["It is born asleep, and it dies asleep. All its movements are apparently no more than the results of it tossing and turning in its dreams.", "The log it holds was given to it by its parents at birth. It has also been known to cling to the arm of a friendly Trainer."],
      pt: ["It is born asleep, and it dies asleep. All its movements are apparently no more than the results of it tossing and turning in its dreams.", "The log it holds was given to it by its parents at birth. It has also been known to cling to the arm of a friendly Trainer."],
      es: ["Pasa la vida entera sumido en un profundo sueño. Toda su actividad parece reflejar los sueños que tiene en ese momento.", "El tronco que agarra es un regalo que le dieron sus padres al nacer. También se aferra al brazo de todo aquel Entrenador con el que congenie."],
      fr: ["Il rejoint et quitte ce monde en dormant. Son existence se déroule comme un rêve paisible. Il dort du sommeil du juste toute sa vie durant.", "La bûche qu’il tient est un cadeau de naissance de ses parents. S’il est bien apprivoisé, il s’accrochera au bras de son Dresseur."],
      de: ["Es wird schlafend geboren und stirbt schlafend. Sein ganzes Leben ist ein Traum, seine einzige körperliche Aktivität das Umdrehen im Schlaf.", "Den Baumstumpf bekam es zu seiner Geburt von seinen Eltern. Fasst es Zutrauen, klammert es sich aber auch am Arm seines Trainers fest."],
    },
  },
  798: {
    types: ["grass","steel"],
    facts: {
      en: ["This Ultra Beast came from the Ultra Wormhole. It seems not to attack enemies on its own, but its sharp body is a dangerous weapon in itself.", "One of the Ultra Beast life-forms, it was observed cutting down a gigantic steel tower with one stroke of its blade."],
      pt: ["This Ultra Beast came from the Ultra Wormhole. It seems not to attack enemies on its own, but its sharp body is a dangerous weapon in itself.", "One of the Ultra Beast life-forms, it was observed cutting down a gigantic steel tower with one stroke of its blade."],
      es: ["Este Ultraente surgió de un Ultraumbral. Se dice que no es muy agresivo, pero su afilado cuerpo es un arma realmente peligrosa.", "Varios testigos han observado como este Ultraente cortaba en dos una enorme torre de acero como si fuera mantequilla."],
      fr: ["Une Ultra-Chimère venue de l’Ultra-Brèche. Elle ne semble pas agressive, bien que son corps tout entier soit une arme tranchante.", "Une espèce d’Ultra-Chimère. On l’aurait aperçue coupant un pylône métallique en deux d’un seul tranchant."],
      de: ["Eine Ultrabestie, die zwar nicht von sich aus anzugreifen scheint, deren rasiermesserscharfer Körper aber eine gefährliche Waffe darstellt.", "Diese Ultrabestie wurde dabei beobachtet, wie sie einen riesigen stählernen Turm mit nur einem Hieb ihrer Klingen zerteilte."],
    },
  },
  823: {
    types: ["flying","steel"],
    facts: {
      en: ["This Pokémon reigns supreme in the skies of the Galar region. The black luster of its steel body could drive terror into the heart of any foe.", "With their great intellect and flying skills, these Pokémon very successfully act as the Galar region’s airborne taxi service."],
      pt: ["This Pokémon reigns supreme in the skies of the Galar region. The black luster of its steel body could drive terror into the heart of any foe.", "With their great intellect and flying skills, these Pokémon very successfully act as the Galar region’s airborne taxi service."],
      es: ["No tiene rival en los cielos de Galar. El acero negro y lustroso de su cuerpo intimida a cualquier adversario.", "Debido a su excelente capacidad de vuelo y a su gran inteligencia, ejerce de taxi volador en Galar."],
      fr: ["Il n’a aucun rival dans le ciel de Galar. L’aspect intimidant de son corps d’acier noir et lustré inspire la crainte chez ses ennemis.", "Grâce à son adresse remarquable en vol et sa grande intelligence, il travaille comme taxi volant de Galar."],
      de: ["Niemand wagt es, ihm den Himmel über Galar streitig zu machen. Sein schwarz glänzendes, stählernes Äußeres schüchtert jeden Gegner ein.", "Aufgrund seiner unübertroffenen Flugfertigkeiten und seiner hohen Intelligenz ist es in der Galar-Region als Flugtaxi im Einsatz."],
    },
  },
  915: {
    types: ["normal"],
    facts: {
      en: ["It searches for food all day. It possesses a keen sense of smell but doesn’t use it for anything other than foraging.", "This Pokémon spurns all but the finest of foods. Its body gives off an herblike scent that bug Pokémon detest."],
      pt: ["It searches for food all day. It possesses a keen sense of smell but doesn’t use it for anything other than foraging.", "This Pokémon spurns all but the finest of foods. Its body gives off an herblike scent that bug Pokémon detest."],
      es: ["It searches for food all day. It possesses a keen sense of smell but doesn’t use it for anything other than foraging.", "This Pokémon spurns all but the finest of foods. Its body gives off an herblike scent that bug Pokémon detest."],
      fr: ["It searches for food all day. It possesses a keen sense of smell but doesn’t use it for anything other than foraging.", "This Pokémon spurns all but the finest of foods. Its body gives off an herblike scent that bug Pokémon detest."],
      de: ["It searches for food all day. It possesses a keen sense of smell but doesn’t use it for anything other than foraging.", "This Pokémon spurns all but the finest of foods. Its body gives off an herblike scent that bug Pokémon detest."],
    },
  },
};
