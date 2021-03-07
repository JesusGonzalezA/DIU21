/*******************************************/
/*             PERSONA.JS                  */
/*     Datos para PERSONA TEMPLATE         */
/*          [DIU] UX Toolkit v1.0 2019    */
/*          ver 1.1 26/Feb/2020            */
/*******************************************/

/****  README:       */
/****  Modifica los datos para las Personas      */
/****  v.1.1 Incluye nombre de tu grupo de prácticas (Grupo.ID), curso académico y enlace a github ***/
/****  Las imagenes para  'Photo'  están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/



angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) {
        $scope.Grupo_ID ="DIU1.ElReencuentro";
        $scope.Curso ="2020/21";
        $scope.Github_ID ="https://github.com/mgea/UX-DIU-Toolkit";

		$scope.PersonaIndex = 0;
		$scope.Personas = [
			{


                /*************************************/
                /**** PRIMERA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/


				Id: 1,
				Name: "Asier Arrieta",
				Photo: "asier.png",
				Quote: "La vida se basa en los pequeños momentos",
				Age: 28,
				Occupation: "Contable en empresa de consultoría",
				Family: "Con pareja desde hace 2 años y medio",
				Location: "Sevilla",
				Character: "Muy familiar y muy casero",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 1 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 1 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 4 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 2 }
				],
				Goals: ["Encontrar trabajo en una ciudad más cercana a su familia", "Adoptar a un perro con su novia", "Abrir un restaurante familiar en su ciudad de nacimiento, Bilbao", "Obtener el título de inglés B2"],
				Frustrations: ["Piensa que el esfuerzo en su trabajo no se le reconoce como debería", "Le gustaría dedicarle más tiempo a su pasión, la cocina", "Se siente inseguro al creer que su nivel de inglés es muy inferior al de sus compañeros"],
				Bio: "Nació en Bilbao y a los 18 años se trasladó a Madrid a estudiar el grado de Finanzas y Contabilidad, al acabar la carrera le llegaron varias ofertas y se acabó decantando por la de una importante empresa consultora en Sevilla. A los 2 años de estar en Sevilla, en uno de sus cursos en Madrid conoció a Ainhoa, una chica de Logroño que también reside en Sevilla y con la que está actualmente y lleva 3 años de relación. Pese a llevar 5 años en Sevilla, no tiene muchos amigos y la mayor parte de su tiempo lo emplea en cocinar y estar con su novia. No le gusta nada viajar, es por ello que en sus vacaciones le encanta estar con su familia.",
				Tech: [
					{ Name: "TIC/Internet", Value: 3 },
					{ Name: "Movil", Value: 3 },
					{ Name: "RRSS", Value: 2 },
					{ Name: "Software", Value: 2 }

				],
                Contextos: "Quiere sorprender a su novia regalándole un viaje por su tercer aniversario. A Ainhoa le encanta viajar, siempre lo hace con sus amigas y Asier cree que ha llegado el momento de hacer un esfuerzo por ir con ella.",
				PreferredChannels: [
					{ Name: "Publicidad Tradicional", Value: 3 },
					{ Name: "Online & Social Media", Value: 2 },
					{ Name: "Recomendaciones & sugerencias", Value: 5 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 4 }
				]
			},
			{

                /*************************************/
                /**** SEGUNDA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/


				Id: 2,
				Name: "Monica Suarez",
				Photo: "woman.png",
				Quote: "A quotation that captures the essence of this person's personality",
				Age: 17,
				Occupation: "Searching for a cure for the Empress",
				Family: "No parents, only family are the people who raised him.",
				Location: "The Grassy Plains of Fantasia",
				Character: "Strong, reliable and fearless.",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 3 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 3 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 2 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 2 }
				],
				Goals: ["The goals this user hopes to achieve.", "A task that needs to be completed.", "A life goal to be reached.", "An experience to be felt."],
				Frustrations: ["The frustrations this user would like to avoid.", "The obstacle that prevents the user from achieving their goals.", "The problems with the solutions already available.", "The product or service which does not currently exist."],
				Bio: "The bio should be a short paragraph to describe the user journey. It should include some of their history leading up to a current use case. It may be helpful to incorporate information listed across the template and add pertinent details that may have been left out. Highlight factors of the user's personal and professional life that make this user an ideal customer of your product.",
				Tech: [
					{ Name: "TIC/Internet", Value: 5 },
					{ Name: "Mobile", Value: 3 },
					{ Name: "RRSS", Value: 3 },
					{ Name: "Software", Value: 5 }

				],
                Contextos:   "The goals this user hopes to achieve." ,
				PreferredChannels: [
					{ Name: "Publicidad Tradicional (Ads)", Value: 5 },
					{ Name: "Online & Social Media", Value: 2 },
					{ Name: "Recomendaciones & sugerencias", Value: 2 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 2 }
				]
			}
		];
		$scope.model = $scope.Personas[0];

	}])
