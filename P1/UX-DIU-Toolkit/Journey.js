/*******************************************/
/*             JOURNEY.JS                  */
/*     Datos para USER JOURNEY MAP         */
/*          [DIU] UX Toolkit v1.0 2019     */
/*          ver 1.1 26/Feb/2020            */
/*******************************************/

/****  README:       */
/****  v.1.1 Incluye nombre de tu grupo de prácticas (Grupo.ID), curso académico y enlace a github ***/
/****  Modifica los datos para los Journey Map (uno para cada Persona)  */
/****  Usa los 6 pasos y sigue las instrucciones */
/****  Las imagenes para  'Photo', 'feelX', 'imaX' están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/




angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) {
		$scope.Grupo_ID ="DIU1.ElReencuentro";
        $scope.Curso ="2020/21";
        $scope.Github_ID ="https://github.com/JesusGonzalezA/DIU21";

		$scope.JourneyIndex = 0;

        $scope.Journeys = [
			{

                /*************************************/
                /**** PRIMER USER JOURNEY MAP  *******/
                /*** Cambiar datos             *******/
                /*************************************/

				Id: 0,
				Name: "Asier Arrieta",
                Photo: "asier.png",

                /*** PASO #1: INSPIRACION ***/
                goal1: "Quiere regalarle un viaje sorpresa a su novia.",
                touch1: "Móvil",
                feel1: "2",
                con1: "Pensar que destinos pueden gustarle más para viajar en verano",
                ima1: "cartoon-thinking.png",

                /*** PASO #2: DECICION ***/
                goal2: "Busca los itinerarios más completos",
                touch2: "Móvil (app Passporter)",
                feel2: "1",
                con2: "Demasiada información que no le permite filtrar",
                ima2: "cartoon-KO.png",

                /*** PASO #3: ACTUA ***/

                goal3: "Decide buscar un itinerario de un lugar cercano a Sevilla para aprovechar el buen tiempo de verano",
                touch3: "Móvil (app Passporter)",
                feel3: "3",
                con3: "Está muy indeciso a la hora de decidir si ir a un lugar con playa o no",
                ima3: "cartoon-phone.png",

                /*** PASO #4: OBSERVA ***/

                goal4: "Busca opciones de itinerarios en lugares de costa",
                touch4: "Móvil (app Passporter)",
                feel4: "3",
                con4: "Buscar itinerarios con mayor valoración. Quiere tenerlo todo preparado ya que él no tiene experiencia",
                ima4: "cartoon-planning.png",

                 /*** PASO #5: ANALIZA ***/

                goal5: "Encuentra 2 opciones por la costa de Cádiz",
                touch5: "Móvil (app Passporter)",
                feel5: "2",
                con5: "No está seguro sobre si merece la pena pagar por obtener un itinerario con más información sobre lugares dónde alojarse, links y teléfonos, o encargarse él de todo eso",
                ima5: "cartoon-deciding.png",


                /*** PASO #6: CONCLUSION ***/

                goal6: "Contrata el itinerario premium por la Costa de la Luz",
                touch6: "Móvil (app Passporter)",
                feel6: "2",
                con6: "Está agobiado ya que pese a contener mucha información útil, pensaba que tendría que planificar menos a la hora de viajar",
                ima6: "cartoon-happy.png",

			},
			{
                /*************************************/
                /**** SEGUNDO USER JOURNEY MAP *******/
                /***      Cambiar datos        *******/
                /*************************************/

				Id: 1,
				Name: "Monica Suarez",
                Photo: "woman.png",

				 /*** PASO #1: INSPIRACION ***/
                goal1: "Quiere preparar un viaje con su familia para Verano, tiene sólo 15 dias libres",
                touch1: "agenda",
                feel1: "5",
                con1: "Quiere ir a un pais exotico pero que tenga atracciones para niños pequeños",
                ima1: "cartoon-going.png",

                /*** PASO #2: DECICION ***/
                goal2: "Ir a una agencia de viajes, y decirle sus preferencias y planes",
                touch2: "Servicio (agencia)",
                feel2: "4",
                con2: "Tiene que desplazarse a agencia, explica su intenciones, le llamaran porque no hay nada interesante",
                ima2: "cartoon-teamthinking.png",

                /*** PASO #3: ACTUA ***/

                goal3: "Le llaman a los pocos días con un viaje que no le convence",
                touch3: "Móvil (llamada)",
                feel3: "2",
                con3: "Piensa que ha perdido el tiempo",
                ima3: "cartoon-phoningangry.png",

                /*** PASO #4: OBSERVA ***/

                goal4: "Busca una oferta en hoteles cerca de playa y con parque atracciones",
                touch4: "Móvil (webapp)",
                feel4: "2",
                con4: "No hay mucha información del alojamiento ni de lo que hay alrededor, aunque el precio está bien, va por la calle por lo que está incómoda",
                ima4: "cartoon-phone-street.png",

                 /*** PASO #5: ANALIZA ***/

                goal5: "Reserva a traves de la aplicación ",
                touch5: "Móvil (webapp)",
                feel5: "3",
                con5: "Le pide muchos datos y le resulta incómodo completar formulario",
                ima5: "cartoon-phone-sitting.png",


                /*** PASO #6: CONCLUSION ***/

                goal6: "Consiguie reservar para vacaciones pero no era lo que tenía en mente",
                touch6: "Ordenador (reserva OK)",
                feel6: "2",
                con6: "Tendrá que buscar más información del lugar para ver que actividades ofrece y donde aparacar!",
                ima6: "cartoon-PChard.png",



			}
		];

		$scope.model = $scope.Journeys[0];

	}])
