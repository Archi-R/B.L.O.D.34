export const questions = [
    {
        question: "Quelle quantité de CO2 est émise annuellement par l'utilisation mondiale du charbon ?",
        choices: ["Moins de 5 milliards de tonnes", "Entre 5 et 10 milliards de tonnes", "Entre 10 et 15 milliards de tonnes", "Plus de 15 milliards de tonnes"],
        answer: 2, // L'index de la réponse correcte dans le tableau choices
        explanation: "En 2019, les émissions de CO2 hors UTCATF atteignent 38,0 milliards de tonnes, soit une multiplication par 2,4 depuis 1970. Ces émissions sont issues à :",
        explanation2: "- 39 % de la combustion de charbon, soit 14,82 milliards de tonnes",
        explanation3: " - 30 % pour le pétrole, soit 11,4 milliards de tonnes",
        explanation4 : "- 19 % pour le gaz naturel, soit 7,22 milliards de tonnes",
        explanation5 : " - Le reste, soit 12 %, est lié aux procédés industriels (comme, par exemple, la transformation de calcaire en chaux pour fabriquer du ciment).",
        sources: "https://www.statistiques.developpement-durable.gouv.fr/edition-numerique/chiffres-cles-du-climat-2022/6-emissions-de-co2-hors-utcatf#:~:text=En%202019%2C%20les%20%C3%A9missions%20de,19%20%25%20pour%20le%20gaz%20naturel."
    },

    {
        question: "Quel élément est principalement utilisé dans les cellules photovoltaïques pour convertir la lumière solaire en électricité?",
        choices: ["Le silicium", "L'aluminium", "Le cuivre", "Le plomb"],
        answer: 0, // L'index de la réponse correcte dans le tableau choices
        explanation: "Le silicium, utilisé dans les cellules photovoltaïques, présente un impact écologique mixte. Sa production est énergivore et utilise des produits chimiques toxiques, affectant l'air, l'eau, et les sols. Cependant, les progrès technologiques ont amélioré l'efficacité énergétique et réduit la pollution. De plus, les panneaux solaires sont en grande partie recyclables, ce qui compense en partie leur impact initial. En résumé, malgré les défis environnementaux dans la production du silicium, les avantages écologiques des panneaux solaires, surtout en termes de recyclage et d'économie d'énergie à long terme, sont significatifs.",
        sources: "https://www.greenpeace.fr/impact-environnemental-solaire/"
    },

    {
        question: "Les énergies renouvelables sont-elles vraiment compétitives par rapport aux énergies fossiles sur le plan économique?",
        choices: ["Non, les énergies renouvelables sont toujours plus chères", "Oui, elles sont devenues plus abordables", "Non, elles ne sont pas encore assez développées", "Oui, mais seulement dans des conditions spécifiques"],
        answer: 1, // L'index de la réponse correcte dans le tableau choices
        explanation: "Les énergies renouvelables sont devenues économiquement compétitives par rapport aux énergies fossiles. Entre 2010 et 2020, le coût de l'énergie solaire photovoltaïque a chuté de 85%, se positionnant dans la même fourchette de coûts que les énergies fossiles, sans subventions. En 2022, 86% de la capacité renouvelable ajoutée coûtait moins cher que l'électricité produite à partir de combustibles fossiles. Ces économies substantielles se traduisent par une réduction des émissions de CO2 et des polluants atmosphériques, avec des avantages économiques considérables. Globalement, les énergies renouvelables ont réduit la facture des combustibles dans le secteur de l'électricité d'au moins 520 milliards de dollars en 2022.​",
        sources: "https://www.irena.org/publications/2021/Jun/Renewable-Power-Generation-Costs-2020-Summary-FR",
        sources2: "https://www.irena.org/News/pressreleases/2023/Aug/Renewables-Competitiveness-Accelerates-Despite-Cost-Inflation-FR"
    },

    {
        question: "Quelle est la principale cause du réchauffement climatique selon la majorité des scientifiques ?",
        choices: ["Variation naturelle du climat", "Émissions humaines de gaz à effet de serre", "Activité solaire", "Impact des éruptions volcaniques"],
        answer: 1, // L'index de la réponse correcte dans le tableau choices
        explanation: "La principale cause du réchauffement climatique, selon la majorité des scientifiques, est évidemment l'émission de gaz à effet de serre due aux activités humaines, notamment la combustion de combustibles fossiles et la déforestation. Ces émissions augmentent l'effet de serre et entraînent un réchauffement global de la planète.",
        sources: "https://agir.wwf.fr/urgence-climat/causes/"
    },

    {
        question: "Les énergies renouvelables peuvent-elles réellement répondre à la demande mondiale en énergie ?",
        choices: ["Non, elles sont trop inefficaces", "Oui, mais seulement dans certaines régions", "Non, elles sont trop coûteuses", "Oui, avec une planification adéquate"],
        answer: 3, // L'index de la réponse correcte dans le tableau choices
        explanation: "Avec une planification adéquate et des investissements dans les technologies, les énergies renouvelables peuvent répondre à la demande mondiale en énergie. Cela nécessite des efforts coordonnés pour surmonter les obstacles tels que les chaînes d'approvisionnement concentrées et la nécessité de moderniser les réseaux. Les gouvernements sont encouragés à accélérer l'approbation des projets solaires et éoliens et à augmenter considérablement les investissements dans les énergies renouvelables pour soutenir cette transition.",
        sources: "https://news.un.org/fr/story/2022/05/1120202",
    },

    {
        question: "Impact du pétrole sur le réchauffement : \"Le GIEC estime que l\'extraction et la combustion de pétrole contribuent à quelle proportion des émissions mondiales de gaz à effet de serre ?\"",
        choices: ["Moins de 15%", "Entre 15% et 30%", "Plus de 30%", "Plus de 70%"],
        answer: 2, // L'index de la réponse correcte dans le tableau choices
        explanation: "Selon le GIEC (Groupe d'experts intergouvernemental sur l'évolution du climat), le pétrole contribue à plus de 30% des émissions mondiales de gaz à effet de serre. L'extraction, le raffinage et la combustion du pétrole libèrent du dioxyde de carbone (CO2) et d'autres gaz à effet de serre, ce qui contribue de manière significative au réchauffement climatique.",
        sources: "https://climat.be/changements-climatiques/changements-observes/rapports-du-giec/2023-rapport-de-synthese",
    },

    {
        question: "Impact du Gaz Naturel Liquéfié (GNL) : \"Le GIEC rapporte que le Gaz Naturel Liquéfié (GNL) est responsable de quel pourcentage des émissions mondiales de CO2 liées à l'énergie ?\"",
        choices: ["Moins de 1%", "Entre 1% et 5%", "Entre 5% et 15%", "Plus de 15%"],
        answer: 2, // L'index de la réponse correcte dans le tableau choices
        explanation: "Le GIEC indique que le Gaz Naturel Liquéfié (GNL) contribue à entre 5% et 15% des émissions mondiales de CO2 liées à l'énergie. Bien que le gaz naturel soit considéré comme une source d'énergie plus propre que le charbon et le pétrole, son extraction, son transport et sa combustion émettent toujours du dioxyde de carbone, contribuant ainsi au changement climatique.",
        sources: "https://climat.be/changements-climatiques/changements-observes/rapports-du-giec/2023-rapport-de-synthese",
    },

    {
        question: "Les océans ne sont-ils pas suffisamment vastes pour absorber les émissions de gaz à effet de serre ?",
        choices: ["Oui, les océans peuvent absorber toute quantité de CO2", "Non, les océans montrent des signes de saturation", "Oui, les émissions humaines sont négligeables", "Non, les océans ne sont pas impactés par les activités humaines"],
        answer: 1, // L'index de la réponse correcte dans le tableau choices
        explanation: "Contrairement à l'idée que les océans peuvent absorber toute quantité de CO2, des recherches montrent que les océans atteignent leurs limites de capacité d'absorption. L'acidification des océans due à l'absorption excessive de CO2 compromet la santé des écosystèmes marins.",
        sources: "https://www.futura-sciences.com/planete/actualites/oceanographie-oceans-bientot-satures-dioxyde-carbone-11859/",
    },

    {
        question: "L'énergie nucléaire est-elle une solution sûre et propre pour lutter contre le changement climatique ?",
        choices: ["Oui, elle ne produit pas de gaz à effet de serre", "Non, elle génère des déchets radioactifs dangereux", "Oui, les risques sont minimes avec les nouvelles technologies", "Non, les accidents nucléaires sont inévitables"],
        answer: 1, // L'index de la réponse correcte dans le tableau choices
        explanation: "Selon diverses sources, le nucléaire permet d’éviter les rejets de 2 milliards de tonnes de CO2  chaque année dans le monde, soit l’équivalent de la production de 400 millions de voitures. De plus, les risques liés à l'énergie nucléaire sont considérablement réduits avec l'utilisation de nouvelles technologies, telles que les réacteurs de génération IV. Ces technologies visent à améliorer la sécurité, la durabilité et la minimisation des déchets radioactifs. Cependant, les déchets nucléaires pourraient devenir un fléau pour les générations futures, qui auront la responsabilité de les gérer. Ce n'est donc pas une véritable solution tant que nous n'arriverons pas à gérer correctement ces déchets.",
        sources: "https://www.orano.group/fr/decodage/bonnes-raisons-nucleaire-contre-rechauffement-climatique",
        sources2 : "https://www.greenpeace.fr/nucleaire-solution-climat/"
    },

    {
        question: "Les véhicules électriques sont-ils vraiment plus écologiques que les véhicules à essence, compte tenu de la production des batteries ?",
        choices: ["Non, la fabrication des batteries annule les avantages écologiques", "Oui, la production des batteries est compensée par les émissions réduites à l'utilisation", "Non, les véhicules électriques ont une empreinte carbone plus élevée", "Oui, la technologie des batteries est en constante amélioration, réduisant leur impact environnemental."],
        answer: 1, // L'index de la réponse correcte dans le tableau choices
        explanation: "Malgré l'impact environnemental de la production des batteries, les véhicules électriques ont une empreinte carbone globale plus faible que les véhicules à essence, en raison de leurs émissions réduites lors de l'utilisation. Avec l'évolution des technologies de fabrication des batteries, cet avantage devrait encore s'accentuer",
        sources: "https://www.virta.global/fr/blog/voitures-electriques-et-pollution-vrai-du-faux",
    },
    // Plus de questions...
  ];