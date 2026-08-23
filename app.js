/* ==========================================================================
   El Rincón del UVago - JavaScript App & Data Engine
   FACICO - Universidad Veracruzana (Licenciatura en Comunicación)
   ========================================================================== */

(function() {
    'use strict';

    // ----------------------------------------------------------------------
    // 1. DATASETS (APUNTES, NOTICIAS, EXÁMENES, HERRAMIENTAS, LIBROS, PROFESORES)
    // ----------------------------------------------------------------------

    // Placeholder shown ONLY while RSS auto-loads on page entry.
    // These use real homepage URLs. Real article deep-links come from live RSS feeds.
    const initialNewsData = [
        { id: 'ph-lat-1', source: 'Latinus', sourceCategory: 'Periodismo & Medios', badgeColor: 'badge-orange',
          timestamp: Date.now() - 4*60*1000, date: 'Hoy', time: 'Hace 4 min',
          url: 'https://latinus.us', title: '⏳ Sincronizando noticias en vivo de Latinus…',
          summary: 'El algoritmo RSS está obteniendo las notas más recientes de Latinus en tiempo real. Las noticias con enlace directo al artículo se cargarán automáticamente.',
          apaCitation: '' },
        { id: 'ph-mil-1', source: 'Milenio Diario', sourceCategory: 'Nacional México', badgeColor: 'badge-blue',
          timestamp: Date.now() - 11*60*1000, date: 'Hoy', time: 'Hace 11 min',
          url: 'https://www.milenio.com', title: '⏳ Sincronizando noticias en vivo de Milenio…',
          summary: 'El algoritmo RSS está obteniendo las notas más recientes de Milenio Diario en tiempo real. Las noticias con enlace directo al artículo se cargarán automáticamente.',
          apaCitation: '' },
        { id: 'ph-not-1', source: 'Notiver', sourceCategory: 'Veracruz & UV', badgeColor: 'badge-green',
          timestamp: Date.now() - 18*60*1000, date: 'Hoy', time: 'Hace 18 min',
          url: 'https://www.notiver.com.mx', title: '⏳ Sincronizando noticias en vivo de Notiver…',
          summary: 'El algoritmo RSS está obteniendo las notas más recientes de Notiver Veracruz en tiempo real. Las noticias con enlace directo al artículo se cargarán automáticamente.',
          apaCitation: '' },
        { id: 'ph-tvm-1', source: 'TVMÁS Veracruz', sourceCategory: 'Veracruz & UV', badgeColor: 'badge-green',
          timestamp: Date.now() - 25*60*1000, date: 'Hoy', time: 'Hace 25 min',
          url: 'https://tvmas.mx', title: '⏳ Sincronizando noticias en vivo de TVMÁS Veracruz…',
          summary: 'El algoritmo RSS está obteniendo las notas más recientes de TVMÁS en tiempo real. Las noticias con enlace directo al artículo se cargarán automáticamente.',
          apaCitation: '' },
        { id: 'ph-acp-1', source: 'Al Calor Político', sourceCategory: 'Veracruz & UV', badgeColor: 'badge-green',
          timestamp: Date.now() - 33*60*1000, date: 'Hoy', time: 'Hace 33 min',
          url: 'https://www.alcalorpolitico.com', title: '⏳ Sincronizando noticias en vivo de Al Calor Político…',
          summary: 'El algoritmo RSS está obteniendo las notas más recientes de Al Calor Político Veracruz en tiempo real.',
          apaCitation: '' },
        { id: 'ph-xeu-1', source: 'XEU Noticias', sourceCategory: 'Veracruz & UV', badgeColor: 'badge-green',
          timestamp: Date.now() - 40*60*1000, date: 'Hoy', time: 'Hace 40 min',
          url: 'https://xeu.mx', title: '⏳ Sincronizando noticias en vivo de XEU Noticias…',
          summary: 'El algoritmo RSS está obteniendo las notas más recientes de XEU Noticias Veracruz en tiempo real.',
          apaCitation: '' },
        { id: 'ph-eld-1', source: 'El Dictamen', sourceCategory: 'Veracruz & UV', badgeColor: 'badge-green',
          timestamp: Date.now() - 50*60*1000, date: 'Hoy', time: 'Hace 50 min',
          url: 'https://www.eldictamen.mx', title: '⏳ Sincronizando noticias en vivo de El Dictamen…',
          summary: 'El algoritmo RSS está obteniendo las notas más recientes de El Dictamen Veracruz en tiempo real.',
          apaCitation: '' },
        { id: 'ph-plu-1', source: 'Plumas Libres', sourceCategory: 'Veracruz & UV', badgeColor: 'badge-green',
          timestamp: Date.now() - 58*60*1000, date: 'Hoy', time: 'Hace 58 min',
          url: 'https://plumaslibres.com.mx', title: '⏳ Sincronizando noticias en vivo de Plumas Libres…',
          summary: 'El algoritmo RSS está obteniendo las notas más recientes de Plumas Libres en tiempo real.',
          apaCitation: '' },
        { id: 'ph-elu-1', source: 'El Universal', sourceCategory: 'Nacional México', badgeColor: 'badge-blue',
          timestamp: Date.now() - 65*60*1000, date: 'Hoy', time: 'Hace 1 hr',
          url: 'https://www.eluniversal.com.mx', title: '⏳ Sincronizando noticias en vivo de El Universal…',
          summary: 'El algoritmo RSS está obteniendo las notas más recientes de El Universal en tiempo real.',
          apaCitation: '' },
        { id: 'ph-ari-1', source: 'Aristegui Noticias', sourceCategory: 'Periodismo & Medios', badgeColor: 'badge-orange',
          timestamp: Date.now() - 75*60*1000, date: 'Hoy', time: 'Hace 1 hr',
          url: 'https://aristeguinoticias.com', title: '⏳ Sincronizando noticias en vivo de Aristegui Noticias…',
          summary: 'El algoritmo RSS está obteniendo las notas más recientes de Aristegui Noticias en tiempo real.',
          apaCitation: '' },
        { id: 'ph-ljr-1', source: 'La Jornada', sourceCategory: 'Nacional México', badgeColor: 'badge-blue',
          timestamp: Date.now() - 85*60*1000, date: 'Hoy', time: 'Hace 1 hr',
          url: 'https://www.jornada.com.mx', title: '⏳ Sincronizando noticias en vivo de La Jornada…',
          summary: 'El algoritmo RSS está obteniendo las notas más recientes de La Jornada en tiempo real.',
          apaCitation: '' },
        { id: 'ph-pro-1', source: 'Proceso', sourceCategory: 'Periodismo & Medios', badgeColor: 'badge-orange',
          timestamp: Date.now() - 95*60*1000, date: 'Hoy', time: 'Hace 1 hr',
          url: 'https://www.proceso.com.mx', title: '⏳ Sincronizando noticias en vivo de Proceso…',
          summary: 'El algoritmo RSS está obteniendo las notas más recientes de Revista Proceso en tiempo real.',
          apaCitation: '' },
        { id: 'ph-ani-1', source: 'Animal Político', sourceCategory: 'Periodismo & Medios', badgeColor: 'badge-orange',
          timestamp: Date.now() - 105*60*1000, date: 'Hoy', time: 'Hace 1 hr',
          url: 'https://www.animalpolitico.com', title: '⏳ Sincronizando noticias en vivo de Animal Político…',
          summary: 'El algoritmo RSS está obteniendo las notas más recientes de Animal Político en tiempo real.',
          apaCitation: '' },
        { id: 'ph-dxa-1', source: 'Diario de Xalapa', sourceCategory: 'Veracruz & UV', badgeColor: 'badge-green',
          timestamp: Date.now() - 115*60*1000, date: 'Hoy', time: 'Hace 1 hr',
          url: 'https://www.diariodexalapa.com.mx', title: '⏳ Sincronizando noticias en vivo de Diario de Xalapa…',
          summary: 'El algoritmo RSS está obteniendo las notas más recientes de Diario de Xalapa en tiempo real.',
          apaCitation: '' }
    ];




    const initialBooks = [
        {
            id: 'book-sofista',
            title: 'El Sofista (o De la Loquacidad)',
            author: 'Platón',
            year: '360 a.C. / Ed. Gredos 2000',
            area: 'Filosofía y Epistemología',
            fileSize: '3.2 MB (PDF)',
            downloads: 842,
            description: 'Diálogo platónico fundamental sobre la definición del sofista, el ser y el no-ser, la verdad y la apariencia. Lectura clave para el análisis del discurso y teoría de la imagen en comunicación.'
        },
        {
            id: 'book-1',
            title: 'Elementos de Semiológica',
            author: 'Roland Barthes',
            year: '1964 / Ed. Siglo XXI',
            area: 'Semiótica',
            fileSize: '2.8 MB (PDF)',
            downloads: 1450,
            description: 'Obra cúspide para comprender los conceptos de Lengua, Habla, Significante, Significado, Sistema y Sintagma aplicados a los medios visuales.'
        },
        {
            id: 'book-2',
            title: 'El Medio es el Masaje: Un Inventario de Efectos',
            author: 'Marshall McLuhan & Quentin Fiore',
            year: '1967 / Ed. Paidós',
            area: 'Teorías de la Comunicación',
            fileSize: '5.1 MB (PDF)',
            downloads: 1290,
            description: 'Análisis visionario sobre cómo las tecnologías de la comunicación moldean la percepción sensorial y la aldea global.'
        },
        {
            id: 'book-3',
            title: 'El Guion: Sustancia, Estructura y Estilo',
            author: 'Robert McKee',
            year: '1997 / Ed. Alba',
            area: 'Guionismo y Cine',
            fileSize: '8.4 MB (PDF)',
            downloads: 1920,
            description: 'La biblia imprescindible de los guionistas sobre construcción de personajes, diseño de escenas y valores dramáticos en producciones audiovisuales.'
        },
        {
            id: 'book-4',
            title: 'La Opinión Pública',
            author: 'Walter Lippmann',
            year: '1922 / Ed. Free Press',
            area: 'Periodismo',
            fileSize: '4.3 MB (PDF)',
            downloads: 1100,
            description: 'Estudio clásico sobre la creación de estereotipos, imágenes mentales y la influencia de los noticieros en la sociedad.'
        },
        {
            id: 'book-5',
            title: 'Los Efectos de la Comunicación de Masas',
            author: 'Joseph T. Klapper',
            year: '1960 / Ed. Aguilar',
            area: 'Teorías de la Comunicación',
            fileSize: '3.7 MB (PDF)',
            downloads: 940,
            description: 'Investigación clásica sobre la influencia reforzadora de los medios de difusión masiva versus la persuasión directa.'
        },
        {
            id: 'book-6',
            title: 'Manual de Fotoperiodismo: Retórica de la Mirada',
            author: 'Ulises Castellanos',
            year: '2003 / Ed. FCE',
            area: 'Fotografía',
            fileSize: '6.2 MB (PDF)',
            downloads: 1530,
            description: 'Guía práctica para la cobertura foto-periodística en campo, encuadre ético, iluminación y narrativa del ensayo fotográfico.'
        }
    ];

    const initialNotes = [
        {
            id: 'note-1',
            title: 'Sintaxis y Análisis Gramatical Aplicado al Discurso Periodístico',
            materia: 'Lengua I',
            semestre: '1',
            author: 'UVago_Comunicólogo99',
            profesor: 'Dra. Alicia Marcela Rendón Castro',
            downloads: 1842,
            rating: 4.9,
            summary: 'Resumen completo de ortografía, acentuación diacrítica, estructura sintáctica y vicios del lenguaje en la redacción.',
            content: `====================================================================
EL RINCÓN DEL UVAGO - RESUMEN DE LENGUA I (FACICO UV)
Materia: Lengua I | 1º Semestre
Profesor de Referencia: Dra. Alicia Marcela Rendón Castro
Edificio A-CCEB | Aula 4-A
====================================================================

1. ESTRUCTURA DE LA ORACIÓN CORTA Y COMPUESTA
--------------------------------------------------------------------
- Sujeto + Verbo + Predicado (Orden lógico del periodismo informativo).
- Evitar el abuso de la voz pasiva ("La noticia fue publicada por el diario" -> "El diario publicó la noticia").

2. VICIOS DE REDACCIÓN A EVITAR
--------------------------------------------------------------------
- Ambigüedad / Anfibología: Expresiones con doble sentido involuntario.
- Queísmo y Dequeísmo: Uso incorrecto de la preposición "de" antes de "que".
- Pleonasmo: Redundancia viciosa ("Subir para arriba", "Veredicto final").

====================================================================
¡Tip UVago!: La Dra. Rendón revisa minuciosamente la puntuación y las tildes diacríticas en el examen parcial.
====================================================================`
        },
        {
            id: 'note-2',
            title: 'La Encrucijada de la Identidad Cultural y los Medios en América Latina',
            materia: 'Estudios Culturales Latinoamericanos',
            semestre: '2',
            author: 'PensadorLatino_UV',
            profesor: 'Mtro. Carlos Enrique Villarreal Morales',
            downloads: 1420,
            rating: 4.8,
            summary: 'Síntesis sobre hegemonía cultural, hybridity (García Canclini) y la influencia de las industrias culturales en la región.',
            content: `====================================================================
EL RINCÓN DEL UVAGO - ESTUDIOS CULTURALES LATINOAMERICANOS (FACICO UV)
Materia: Estudios Culturales Latinoamericanos | 2º Semestre
Profesor de Referencia: Mtro. Carlos Enrique Villarreal Morales
Edificio A-CCEB | Aula 4-A
====================================================================

1. CULTURAS HÍBRIDAS (Néstor García Canclini)
--------------------------------------------------------------------
- Entrada y salida de la modernidad en América Latina.
- Coexistencia de lo tradicional, lo moderno y lo masivo en las manifestaciones urbanas y mediáticas.

2. IMPERIALISMO CULTURAL Y HEGEMONÍA (Antonio Gramsci)
--------------------------------------------------------------------
- Cómo las élites dominantes construyen consenso a través de las industrias culturales (cine, música, televisión).

====================================================================
¡Tip UVago!: Prepara bien los conceptos clave para el debate presencial en el Aula 4-A.
====================================================================`
        },
        {
            id: 'note-3',
            title: 'Historia y Evolución de los Medios Masivos: De la Imprenta a la Era Digital',
            materia: 'Génesis y Evolución de la Comunicación',
            semestre: '1',
            author: 'HistoriadorFACICO',
            profesor: 'Dra. Odilia Domínguez Ramírez',
            downloads: 1530,
            rating: 4.9,
            summary: 'Línea del tiempo sobre la invención de la imprenta de tipos móviles, el telégrafo, la radio, la televisión y la red de redes.',
            content: `====================================================================
EL RINCÓN DEL UVAGO - GÉNESIS Y EVOLUCIÓN DE LA COMUNICACIÓN (FACICO UV)
Materia: Génesis y Evolución de la Comunicación | 1º Semestre
Profesor de Referencia: Dra. Odilia Domínguez Ramírez
Edificio A-CCEB | Aula 8-A
====================================================================

1. LA REVOLUCIÓN DE GUTENBERG (1440)
--------------------------------------------------------------------
- Democratización del conocimiento y surgimiento del libro impreso y las gacetas informativas.

2. LA ERA ELECTRÓNICA Y AUDIOVISUAL
--------------------------------------------------------------------
- Telégrafo (Morse) -> Radio (Marconi) -> Televisión masiva.

====================================================================
¡Tip UVago!: Aprende las fechas y contextos sociohistóricos para las preguntas de opción múltiple del parcial.
====================================================================`
        },
        {
            id: 'note-4',
            title: 'Estructura y Redacción de la Nota Informativa Periodística',
            materia: 'Textos Periodísticos Informativos',
            semestre: '2',
            author: 'Reportero_FACICO',
            profesor: 'Dra. María Teresa de Jesús Arroyo Gopar',
            downloads: 1680,
            rating: 4.9,
            summary: 'Las 6 Ws del periodismo (Quién, Qué, Cuándo, Dónde, Por qué, Cómo) y técnica de la pirámide invertida.',
            content: `====================================================================
EL RINCÓN DEL UVAGO - TEXTOS PERIODÍSTICOS INFORMATIVOS (FACICO UV)
Materia: Textos Periodísticos Informativos | 2º Semestre
Profesor de Referencia: Dra. María Teresa de Jesús Arroyo Gopar
Edificio A-CCEB | Aula 1-A
====================================================================

1. LAS 6 Ws DEL PERIODISMO
--------------------------------------------------------------------
- Who? (¿Quién?), What? (¿Qué?), When? (¿Cuándo?), Where? (¿Dónde?), Why? (¿Por qué?), How? (¿Cómo?).

2. LA PIRÁMIDE INVERTIDA
--------------------------------------------------------------------
- Entrada / Lead (Lo más importante) -> Cuerpo -> Detalles secundarios.

====================================================================
¡Tip UVago!: La Dra. Arroyo evalúa la brevedad y contundencia del primer párrafo (lead).
====================================================================`
        }
    ];

    const initialAIApps = [
        {
            name: 'ChatGPT / Claude',
            tag: 'Redacción & Síntesis',
            link: 'https://chatgpt.com',
            description: 'Ideal para estructurar esquemas de ensayos, lluvia de ideas de guiones y resumir densas lecturas teóricas de comunicación.',
            badge: 'IA de Texto'
        },
        {
            name: 'Perplexity AI',
            tag: 'Investigación Académica',
            link: 'https://perplexity.ai',
            description: 'Motor de búsqueda con IA que cita fuentes reales y artículos científicos. Excelente para redactar marcos teóricos con formato APA.',
            badge: 'Fact-Checking'
        },
        {
            name: 'ElevenLabs',
            tag: 'Audio & Clonación de Voz',
            link: 'https://elevenlabs.io',
            description: 'Generador de locuciones sintéticas fotorrealistas. Muy útil para maquetas de radio y maquetas vocales de cortometrajes.',
            badge: 'Voz Sintética'
        },
        {
            name: 'Otter.ai / OpenAI Whisper',
            tag: 'Transcripción Automática',
            link: 'https://otter.ai',
            description: 'Transcribe automáticamente horas de entrevistas periodísticas en audio a texto limpio listo para edición de notas.',
            badge: 'Periodismo'
        }
    ];

    const initialSoftwareList = [
        {
            name: 'Adobe Premiere Pro',
            cat: 'Edición de Video',
            description: 'El estándar de la industria audiovisual para la edición no lineal de cortometrajes, reportajes y spots de TV.'
        },
        {
            name: 'DaVinci Resolve',
            cat: 'Edición & Color',
            description: 'Herramienta profesional gratuita líder en corrección y etalonaje de color para cine y producciones de televisión.'
        },
        {
            name: 'Adobe Audition & Audacity',
            cat: 'Edición de Audio',
            description: 'Estaciones de trabajo de audio digital para limpieza de sonido en entrevistas, mezcla de podcasts y cortinillas radiofónicas.'
        }
    ];

    const initialExams = [
        {
            id: 'exam-1',
            title: 'Examen Parcial Resuelto: Filosofía de la Comunicación',
            materia: 'Filosofía de la Comunicación',
            semestre: '3º Semestre',
            tipo: 'Parcial Resuelto',
            description: '10 preguntas con reactivos de opción múltiple y ensayo ético desglosado sobre la verdad e interpretación.'
        },
        {
            id: 'exam-2',
            title: 'Guía Completa para Examen Extraordinario de Textos Periodísticos Informativos',
            materia: 'Textos Periodísticos Informativos',
            semestre: '2º Semestre',
            tipo: 'Guía de Extraordinario',
            description: 'Conceptos de pirámide invertida, redacción de cabeceo periodístico y ejercicio resuelto.'
        }
    ];

    const initialProfessors = [
        {
            id: 'prof-1',
            name: 'Dra. Alicia Marcela Rendón Castro',
            materia: 'Lengua I',
            barco: 'Justo y Equilibrado',
            score: '5',
            tags: ['Explicación Clara', 'Edificio A-CCEB Aula 4-A', 'Puntual'],
            comment: 'Excelente docente. Explica gramática y redacción de forma sumamente didáctica y accesible.'
        },
        {
            id: 'prof-2',
            name: 'Mtro. Carlos Enrique Villarreal Morales',
            materia: 'Estudios Culturales Latinoamericanos',
            barco: 'Justo y Equilibrado',
            score: '5',
            tags: ['Debates Dinámicos', 'Edificio A-CCEB Aula 4-A', 'Fomenta Análisis'],
            comment: 'Clases muy amenas con discusiones profundas sobre la cultura y sociedad en América Latina.'
        },
        {
            id: 'prof-3',
            name: 'Dra. Odilia Domínguez Ramírez',
            materia: 'Génesis y Evolución de la Comunicación',
            barco: 'Justo y Equilibrado',
            score: '4',
            tags: ['Explicación Histórica', 'Edificio A-CCEB Aula 8-A'],
            comment: 'Domina perfectamente la historia de los medios. Sus clases ayudan a comprender el contexto actual.'
        },
        {
            id: 'prof-4',
            name: 'Dra. María Teresa de Jesús Arroyo Gopar',
            materia: 'Textos Periodísticos Informativos',
            barco: 'Estricto / Exigente',
            score: '5',
            tags: ['Enfoque Práctico', 'Edificio A-CCEB Aula 1-A', 'Excelente Redacción'],
            comment: 'Exigente con la técnica de la nota informativa, pero saldrás redactando como un periodista profesional.'
        },
        {
            id: 'prof-5',
            name: 'Mtro. Juan Soto del Ángel',
            materia: 'Filosofía de la Comunicación',
            barco: 'Justo y Equilibrado',
            score: '5',
            tags: ['Análisis Filosófico', 'Edificio A-CCEB Aula 1-A'],
            comment: 'Fomenta el pensamiento crítico y la reflexión ética sobre los medios de comunicación.'
        },
        {
            id: 'prof-6',
            name: 'Dra. Araceli Baizabal Andrade',
            materia: 'Investigación en el Campo de la Comunicación',
            barco: 'Justo y Equilibrado',
            score: '5',
            tags: ['Metodología Rigurosa', 'Edificio A-CCEB Aula 4-A'],
            comment: 'Guía paso a paso para estructurar proyectos de investigación académica con metodología sólida.'
        },
        {
            id: 'prof-7',
            name: 'Mtra. Leticia Núñez Hernández',
            materia: 'Fotografía Básica',
            barco: 'Justo y Equilibrado',
            score: '5',
            tags: ['Prácticas de Campo', 'Edificio A-CCEB Aula 1-A'],
            comment: 'Enseña el manejo de cámara, exposición y encuadre fotográfico de forma muy práctica.'
        },
        {
            id: 'prof-8',
            name: 'Mtro. Alfredo Reyes Gutiérrez',
            materia: 'Socioeconomía de la Comunicación',
            barco: 'Justo y Equilibrado',
            score: '4',
            tags: ['Análisis Económico', 'Edificio A-CCEB Aula 2-A'],
            comment: 'Explica con claridad la estructura económica de las empresas de medios en México.'
        }
    ];

    const initialPasilloData = [
        {
            id: 'pas-1',
            name: 'Los Brownies Mágicos de FACICO',
            category: 'Postres & Repostería',
            founder: 'Valeria Martínez (4º Semestre)',
            location: '📍 Pasillo Principal y Pastitos (L-J 10:00 - 14:00)',
            price: '$20 a $35 MXN',
            contact: '@brownies_facico_uv',
            description: 'Brownies caseros súper chocolatosos con toppings de Nutella, OREO, Chispas y Nuez. ¡El bajón perfecto antes de la clase!',
            badge: '⭐ Top Recomendado',
            badgeColor: 'badge-orange',
            fullDetail: `====================================================================
EL PASILLO FACICO - FICHA DE EMPRENDIMIENTO ESTUDIANTIL
Puesto: Los Brownies Mágicos de FACICO
Fundador(a): Valeria Martínez | 4º Semestre de Comunicación (UV)
====================================================================

1. MENÚ PRINCIPAL Y SABORES DISPONIBLES:
--------------------------------------------------------------------
- Brownie Clásico de Chocolate Fudge .......................... $20 MXN
- Brownie Especial con Topping de Nutella & OREO .............. $28 MXN
- Brownie Supremo con Chispas de Chocolate y Nuez ............. $30 MXN
- Combo "Supervivencia de Examen" (4 pzas surtidas) .......... $90 MXN

2. PUNTOS DE ENTREGA Y HORARIOS EN FACICO:
--------------------------------------------------------------------
- Lunes a Jueves: De 10:00 a 14:00 hrs en la zona de Pastitos y Pasillo Principal del Edificio A-CCEB.
- Entrega directa a salón: Manda mensaje por Instagram (@brownies_facico_uv) con el número de aula y te los llevamos entre clases.

3. PROMOS UVAGOS Y PEDIDOS PARA EVENTOS:
--------------------------------------------------------------------
- ¡Descuento de $5 MXN en la compra de 3 o más brownies al mencionar El Rincón del UVago!
- Se preparan cajas personalizadas para rodajes de cortometrajes, proyectos escolares y festejos de cumpleaños.`
        },
        {
            id: 'pas-2',
            name: 'Tacos de Canasta El Comunicólogo',
            category: 'Antojitos & Comida',
            founder: 'Santiago & Mateo (6º Semestre)',
            location: '📍 Afuera del Edificio A-CCEB (8:30 a 11:30 hrs)',
            price: '$12 c/u ($30 paquete con agua)',
            contact: '2299876543',
            description: 'Tacos calientitos de chicharrón prensado, papa con chorizo, adobo y frijol. Salsa verde picante casera.',
            badge: '🔥 Súper Popular',
            badgeColor: 'badge-green',
            fullDetail: `====================================================================
EL PASILLO FACICO - FICHA DE EMPRENDIMIENTO ESTUDIANTIL
Puesto: Tacos de Canasta El Comunicólogo
Fundadores: Santiago & Mateo | 6º Semestre (FACICO UV)
====================================================================

1. GUISADOS DEL DÍA:
--------------------------------------------------------------------
- Chicharrón Prensado en Salsa Roja ............................ $12 MXN
- Papa con Chorizo Casero ...................................... $12 MXN
- Adobo de Cerdo ............................................... $12 MXN
- Frijol Refrito con Queso ..................................... $12 MXN
- PAQUETE UVAGO: 3 Tacos + Agua Fresca de Sabor (500ml) ........ $35 MXN

2. UBICACIÓN Y HORARIOS DE VENTA:
--------------------------------------------------------------------
- Lunes a Viernes de 8:30 a 11:30 hrs en la entrada del Edificio A-CCEB.
- Todos los tacos se mantienen sudaditos y calientes en canasta tradicional envuelta en papel estraza.`
        },
        {
            id: 'pas-3',
            name: 'Cold Brew & Café Fórum Estudiantil',
            category: 'Bebidas & Cafés',
            founder: 'Diego Hernández (2º Semestre)',
            location: '📍 Bancas de la Biblioteca (Todos los días desde las 9:00)',
            price: '$25 a $40 MXN',
            contact: '@coldbrew_facico',
            description: 'Café de grano de Coatepec infusionado en frío 16 horas. Opciones con leche de avena, almendra y jarabes artesanos.',
            badge: '☕ 100% Cafeína UV',
            badgeColor: 'badge-orange',
            fullDetail: `====================================================================
EL PASILLO FACICO - FICHA DE EMPRENDIMIENTO ESTUDIANTIL
Puesto: Cold Brew & Café Fórum Estudiantil
Fundador: Diego Hernández | 2º Semestre (FACICO UV)
====================================================================

1. MENÚ DE CAFÉS DE ESPECIALIDAD:
--------------------------------------------------------------------
- Cold Brew Concentrado (Grano de Coatepec) .................... $25 MXN
- Cold Brew Latte (Leche entera o deslactosada) ............... $30 MXN
- Cold Brew Vanilla / Caramel Latte ............................ $35 MXN
- Cold Brew Especial Leche de Avena o Almendra ................. $40 MXN

2. PUNTOS DE ENTREGA Y METODOLOGÍA:
--------------------------------------------------------------------
- Infusión lenta en frío durante 16 horas para lograr acidez baja y mayor concentración de cafeína natural.
- Ubicación diaria: Bancas exteriores cerca de la Biblioteca FACICO.`
        },
        {
            id: 'pas-4',
            name: 'Stickers & Ilustración Comunicóloga',
            category: 'Manualidades & Papelería',
            founder: 'Camila Ramos (5º Semestre)',
            location: '📍 Entrega personal en cualquier aula de FACICO',
            price: '$10 a $25 MXN',
            contact: '@cami_stickers_uv',
            description: 'Stickers resistentes al agua con memes de la facultad, frases de profesores, cámaras retro y cine de culto.',
            badge: '🎨 Arte Local',
            badgeColor: 'badge-green',
            fullDetail: `====================================================================
EL PASILLO FACICO - FICHA DE EMPRENDIMIENTO ESTUDIANTIL
Puesto: Stickers & Ilustración Comunicóloga
Fundadora: Camila Ramos | 5º Semestre (FACICO UV)
====================================================================

1. PRODUCTOS Y CATÁLOGO DE ILUSTRACIONES:
--------------------------------------------------------------------
- Sticker Individual Vinil Brillante Waterproof ................. $10 MXN
- Pack "Memes FACICO & Comunicación" (5 stickers) ............. $40 MXN
- Sticker Holográfico Especial (Cámaras retro & Cine) .......... $15 MXN
- Impresiones A5 de Ilustración Original ....................... $25 MXN

2. PEDIDOS Y ENTREGAS:
--------------------------------------------------------------------
- Entregas inmediatas en los recesos entre clases en cualquier aula o pasillo de la facultad.`
        },
        {
            id: 'pas-5',
            name: 'Pastes Caseros de Hidalgo en Veracruz',
            category: 'Antojitos & Comida',
            founder: 'Rodrigo Morales (3º Semestre)',
            location: '📍 Pasillo A-CCEB (Entre clases)',
            price: '$25 MXN c/u',
            contact: '2295432109',
            description: 'Pastes horneados la misma mañana: Tinga de pollo, Carne molida con papa, Mole poblano y Frijol con queso.',
            badge: '🥟 Recién Horneados',
            badgeColor: 'badge-orange',
            fullDetail: `====================================================================
EL PASILLO FACICO - FICHA DE EMPRENDIMIENTO ESTUDIANTIL
Puesto: Pastes Caseros de Hidalgo en Veracruz
Fundador: Rodrigo Morales | 3º Semestre (FACICO UV)
====================================================================

1. SABORES DISPONIBLES:
--------------------------------------------------------------------
- Paste Tradicional de Carne Molida con Papa y Perejil ........ $25 MXN
- Paste de Tinga de Pollo en Chipotle .......................... $25 MXN
- Paste de Mole Poblano con Pollo Deshebrado ................... $25 MXN
- Paste Dulce de Arroz con Leche / Piña ........................ $25 MXN

2. HORARIOS DE ENTREGA:
--------------------------------------------------------------------
- Horneados diariamente a las 6:00 AM y entregados calientitos en los pasillos de A-CCEB durante la mañana.`
        },
        {
            id: 'pas-6',
            name: 'Sesiones de Fotos para Portafolio & Retrato',
            category: 'Diseño & Servicios',
            founder: 'Kevin Aguilar (7º Semestre)',
            location: '📍 Estudio de TV FACICO y Jardines',
            price: '$150 a $350 MXN',
            contact: '@kevin_ph_facico',
            description: 'Sesiones fotográficas individuales o grupales para portafolios de comunicación, credenciales y graduaciones.',
            badge: '📸 Calidad Profesional',
            badgeColor: 'badge-green',
            fullDetail: `====================================================================
EL PASILLO FACICO - FICHA DE EMPRENDIMIENTO ESTUDIANTIL
Servicio: Sesiones de Fotos para Portafolio & Retrato
Fotógrafo: Kevin Aguilar | 7º Semestre (FACICO UV)
====================================================================

1. PAQUETES FOTOGRÁFICOS:
--------------------------------------------------------------------
- Paquete Express Retrato (5 fotos editadas digitalmente) ..... $150 MXN
- Paquete Portafolio Profesional (15 fotos + retoque) ........ $280 MXN
- Paquete Grupal / Equipos de Proyecto (25 fotos) .............. $350 MXN

2. EQUIPO Y LOCACIÓN:
--------------------------------------------------------------------
- Cámara réflex DSLR, iluminación LED portátil y edición en Adobe Lightroom.
- Locaciones: Estudio de TV FACICO, foro o áreas verdes de la facultad.`
        }
    ];

    const initialEventsData = [
        {
            id: 'evt-1',
            title: '🎬 Muestra Anual de Cortometrajes FACICO 2026',
            category: 'Cine & Cortos',
            date: '📅 25 de Agosto, 2026',
            time: '⏰ 16:00 a 19:30 hrs',
            location: '📍 Auditorio Principal FACICO UV',
            organizer: '👤 Talleres de Producción Audiovisual (6º y 8º Semestre)',
            summary: 'Proyección oficial de las mejores ficciones y documentales en cortometraje producidos por alumnos de la licenciatura.',
            badge: '🔥 Evento Imperdible',
            badgeColor: 'badge-orange'
        },
        {
            id: 'evt-2',
            title: '🎙️ Conferencia: El Periodismo Digital Frente a la IA en Veracruz',
            category: 'Conferencias & Congresos',
            date: '📅 28 de Agosto, 2026',
            time: '⏰ 11:00 a 13:00 hrs',
            location: '📍 Sala Audiovisual A-CCEB',
            organizer: '👤 Academia de Periodismo & Medios Digitales UV',
            summary: 'Mesa de debate con egresados destacados y periodistas locales sobre verificación de datos y automatización en salas de redacción.',
            badge: '🎓 Académico',
            badgeColor: 'badge-blue'
        },
        {
            id: 'evt-3',
            title: '📸 Taller Práctico: Iluminación de Retrato y Estudio Fotográfico',
            category: 'Talleres & Cursos',
            date: '📅 29 de Agosto, 2026',
            time: '⏰ 10:00 a 14:00 hrs',
            location: '📍 Foro / Estudio de TV FACICO',
            organizer: '👤 Laboratorio de Fotografía & Audio',
            summary: 'Taller 100% práctico con esquemas de iluminación de 3 puntos, reflectores y retoque rápido en Lightroom.',
            badge: '⚡ Cupo Limitado',
            badgeColor: 'badge-green'
        },
        {
            id: 'evt-4',
            title: '🍿 Noche de Cine Bajo las Estrellas & Palomitas UVagas',
            category: 'Eventos Estudiantiles',
            date: '📅 2 de Septiembre, 2026',
            time: '⏰ 17:30 a 20:00 hrs',
            location: '📍 Zona de Pastitos de la Facultad',
            organizer: '👤 Sociedad de Alumnos FACICO UV',
            summary: 'Proyección al aire libre de clásicos del cine de culto con palomitas gratis para todos los asistentes con credencial.',
            badge: '🎉 Convivencia',
            badgeColor: 'badge-purple'
        }
    ];

    // State Storage
    let newsData = [...initialNewsData];
    let notesData = [...initialNotes];
    let booksData = [...initialBooks];
    let professorsData = [...initialProfessors];
    let pasilloData = [...initialPasilloData];
    let eventsData = [...initialEventsData];
    let activeFilterCategory = 'todas';
    let activeFilterSemester = 'todos';
    let currentNoteId = null;

    // ----------------------------------------------------------------------
    // 2. RETRO AUDIO SYNTHESIZER (WEB AUDIO API)
    // ----------------------------------------------------------------------
    function playRetroClick() {
        const soundEnabled = document.getElementById('soundToggle')?.checked;
        if (!soundEnabled) return;

        try {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            if (!AudioContext) return;
            const ctx = new AudioContext();
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();

            osc.type = 'square';
            osc.frequency.setValueAtTime(440, ctx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(120, ctx.currentTime + 0.05);

            gain.gain.setValueAtTime(0.1, ctx.currentTime);
            gain.gain.linearRampToValueAtTime(0.01, ctx.currentTime + 0.05);

            osc.connect(gain);
            gain.connect(ctx.destination);

            osc.start();
            osc.stop(ctx.currentTime + 0.05);
        } catch (e) {
            // Audio ignore if blocked
        }
    }

    // Attach retro sound to all retro buttons
    document.addEventListener('click', function(e) {
        if (e.target.closest('.retro-btn') || e.target.closest('.tab-item') || e.target.closest('.sem-btn') || e.target.closest('.cat-link')) {
            playRetroClick();
        }
    });

    // ----------------------------------------------------------------------
    // 3. TAB NAVIGATION SYSTEM
    // ----------------------------------------------------------------------
    window.switchTab = function(tabId) {
        const tabItems = document.querySelectorAll('.tab-item');
        const panels = document.querySelectorAll('.tab-panel');

        tabItems.forEach(item => {
            if (item.dataset.tab === tabId) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });

        panels.forEach(panel => {
            if (panel.id === tabId) {
                panel.classList.add('active');
            } else {
                panel.classList.remove('active');
            }
        });

        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Initialize Tab Listeners
    document.querySelectorAll('.tab-item').forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const tabId = this.dataset.tab;
            window.switchTab(tabId);
        });
    });

    // ----------------------------------------------------------------------
    // 4. RENDERING FUNCTIONS
    // ----------------------------------------------------------------------

    // ── Quality Gate ────────────────────────────────────────────────────────
    // A note is VALID only if it has a real APA citation and a deep article URL.
    // Placeholders (⏳) and homepage-only links are automatically excluded.
    function isValidNote(note) {
        // Must have a non-empty APA citation
        if (!note.apaCitation || note.apaCitation.trim() === '') return false;
        // Must not be a loading placeholder
        if (note.title && note.title.startsWith('⏳')) return false;
        // URL must point to an actual article (path depth >= 1)
        try {
            const path = new URL(note.url).pathname.replace(/\/$/, '');
            const segments = path.split('/').filter(s => s.length > 0);
            return segments.length >= 1;
        } catch { return false; }
    }

    // Render Noticias Grid (Redirección directa + Fuente Bibliográfica APA + Noticiero, Fecha, Hora)
    function renderNewsGrid(list = newsData) {
        const grid = document.getElementById('newsFeedGrid');
        if (!grid) return;

        // Apply quality gate: only show valid notes with real APA + deep article URL
        const validList = list.filter(isValidNote);

        if (validList.length === 0) {
            // If we still have placeholders it means RSS hasn't loaded yet
            const hasPlaceholders = list.some(n => n.title && n.title.startsWith('⏳'));
            grid.innerHTML = hasPlaceholders
                ? `<div class="welcome-box" style="grid-column: 1 / -1; text-align:center;">
                       <p>🔄 <strong>Sincronizando noticias en vivo…</strong><br>
                       El algoritmo RSS está obteniendo artículos reales de 14 portales.<br>
                       <small>Esto toma solo unos segundos. La página se actualizará automáticamente.</small></p>
                   </div>`
                : `<div class="welcome-box" style="grid-column: 1 / -1;">
                       <p>😔 No se encontraron noticias con los filtros seleccionados.</p>
                   </div>`;
            return;
        }

        grid.innerHTML = validList.map(news => `
            <div class="tool-card retro-card news-card-interactive" onclick="window.open('${news.url}', '_blank');" title="Haz clic para leer la nota original en ${news.source}">
                <div class="card-header" style="display: flex; justify-content: space-between; align-items: center;">
                    <h3>📰 ${news.source}</h3>
                    <span style="font-size: 10px; background: rgba(255,255,255,0.2); padding: 1px 5px; border-radius: 2px;">🔗 Redirección Oficial</span>
                </div>
                <div class="card-body">
                    <div class="news-meta-header">
                        <span class="badge-mini ${news.badgeColor}">${news.sourceCategory}</span>
                        <span class="news-time-tag">📅 ${news.date} | 🕒 ${news.time}</span>
                    </div>
                    <h4 class="news-title-link">${news.title}</h4>
                    <p class="news-excerpt-text">${news.summary}</p>

                    <!-- Fuente Bibliográfica APA -->
                    <div class="apa-citation-box">
                        <span class="apa-label">📚 Cita Bibliográfica APA:</span>
                        <p class="apa-text">"${news.apaCitation}"</p>
                    </div>

                    <button class="retro-btn btn-green btn-block" style="margin-top: 10px;">
                        🌐 Redirigir a Noticiero Original (${news.source}) →
                    </button>
                </div>
            </div>
        `).join('');

        window.renderAlCaliente();
    }

    // Priority Portal Weights (Targeted media prioritized quietly)
    function getSourcePriorityWeight(sourceName) {
        const lower = (sourceName || '').toLowerCase();
        if (lower.includes('latinus')) return 100;
        if (lower.includes('milenio')) return 90;
        if (lower.includes('notiver')) return 85;
        if (lower.includes('tvmás') || lower.includes('tvmas')) return 80;
        if (lower.includes('al calor')) return 75;
        return 10;
    }

    // Round-Robin Source Interleaver to guarantee source variety as user scrolls
    function interleaveNewsBySource(items) {
        const groups = {};
        items.forEach(item => {
            const src = item.source || 'General';
            if (!groups[src]) groups[src] = [];
            groups[src].push(item);
        });

        // Order sources by priority weight
        const sources = Object.keys(groups).sort((a, b) => {
            const weightA = getSourcePriorityWeight(a);
            const weightB = getSourcePriorityWeight(b);
            return weightB - weightA;
        });

        const result = [];
        let added = true;

        while (added) {
            added = false;
            for (const src of sources) {
                if (groups[src].length > 0) {
                    result.push(groups[src].shift());
                    added = true;
                }
            }
        }

        return result;
    }

    // Dynamic relative timestamp helper
    function getRelativeTimeString(itemTimestamp) {
        if (!itemTimestamp) return 'Hace un momento';
        const diffMs = Math.max(1000 * 60 * 2, Date.now() - itemTimestamp);
        const diffMins = Math.floor(diffMs / (1000 * 60));

        if (diffMins < 60) {
            return `Hace ${diffMins} min`;
        }
        const diffHours = Math.floor(diffMins / 60);
        if (diffHours < 24) {
            return `Hace ${diffHours} hr${diffHours > 1 ? 's' : ''}`;
        }
        return 'Hoy';
    }

    // Render Live Breaking News Sidebar Card ("🔥 Al Caliente")
    window.renderAlCaliente = function() {
        const container = document.getElementById('alCalienteList');
        if (!container) return;

        // Apply quality gate: only valid notes with real APA + deep article URL
        const validNews = interleaveNewsBySource(newsData.filter(isValidNote));

        if (validNews.length === 0) {
            container.innerHTML = '<p style="font-size:10px; color:#999; text-align:center;">🔄 Sincronizando noticias…</p>';
            return;
        }

        // Pick top 3 latest notes from 3 DIFFERENT sources
        const selected = [];
        const seenSources = new Set();

        for (const item of validNews) {
            if (selected.length >= 3) break;
            if (!seenSources.has(item.source)) {
                seenSources.add(item.source);
                selected.push(item);
            }
        }

        // Fill up to 3 if fewer unique sources
        if (selected.length < 3) {
            for (const item of validNews) {
                if (selected.length >= 3) break;
                if (!selected.some(s => s.id === item.id)) selected.push(item);
            }
        }

        container.innerHTML = selected.map(n => {
            const relTime = n.timestamp ? getRelativeTimeString(n.timestamp) : (n.time || 'Hace un momento');
            return `
            <div class="al-caliente-item" style="border-bottom: 1px dashed #FECACA; padding-bottom: 6px; margin-bottom: 6px; cursor: pointer;" onclick="window.open('${n.url}', '_blank');" title="Haz clic para abrir nota en ${n.source}">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2px;">
                    <span class="badge-mini ${n.badgeColor}" style="font-size: 8.5px; padding: 1px 4px;">${n.source}</span>
                    <span style="font-size: 8.5px; color: #DC2626; font-weight: bold;">⚡ ${relTime}</span>
                </div>
                <a href="${n.url}" target="_blank" onclick="event.stopPropagation();" style="font-size: 10.5px; font-weight: bold; color: #991B1B; text-decoration: none; line-height: 1.2; display: block;">
                    ${n.title}
                </a>
            </div>
            `;
        }).join('');
    };

    // Filter Noticias
    window.filterNews = function() {
        const cat = document.getElementById('newsSourceFilter')?.value || 'todas';
        const q = document.getElementById('newsSearch')?.value.toLowerCase() || '';

        const filtered = newsData.filter(n => {
            const matchCat = cat === 'todas' || n.sourceCategory.toLowerCase().includes(cat.toLowerCase());
            const matchQ = n.title.toLowerCase().includes(q) || n.summary.toLowerCase().includes(q) || n.source.toLowerCase().includes(q) || n.apaCitation.toLowerCase().includes(q);
            return matchCat && matchQ;
        });

        renderNewsGrid(filtered);
    };

    // Synchronize Real-time Live News Feeds
    window.syncLiveNews = async function(isAutoLoad = false) {
        const statusText = document.getElementById('newsSyncStatusText');
        const lastUpdated = document.getElementById('newsLastUpdated');

        if (statusText) {
            statusText.innerHTML = '<span style="color: var(--color-uv-blue);">🔄 Sincronizando automáticamente 14 Portales de Periodismo...</span>';
        }

        // ── Helper: determine if a URL is a real deep article link ─────────────
        // A URL is "deep" if its path has meaningful segments beyond the root /.
        function resolveArticleUrl(link, guid, homepageUrl) {
            function pathDepth(url) {
                if (!url || typeof url !== 'string' || url.trim().length < 8) return 0;
                try {
                    const path = new URL(url.trim()).pathname.replace(/\/$/, '');
                    // Count non-empty path segments — articles usually have 2+
                    return path.split('/').filter(s => s.length > 0).length;
                } catch { return 0; }
            }

            // Prefer item.link if it's deep; else try item.guid; else homepage
            const linkDepth = pathDepth(link);
            const guidDepth = pathDepth(typeof guid === 'string' ? guid : '');

            if (linkDepth >= 1) return link.trim();
            if (guidDepth >= 1) return (typeof guid === 'string' ? guid.trim() : homepageUrl);
            return homepageUrl;
        }

        // ── RSS Endpoints ──────────────────────────────────────────────────────
        // For WordPress portals that put the homepage in <link>, we use the
        // ?feed=rss2 query format which reliably gives per-article <guid> links.
        // For portals with known broken feeds, we use alternative feed paths.
        const BASE = 'https://api.rss2json.com/v1/api.json?rss_url=';
        const enc  = encodeURIComponent;

        const rssEndpoints = [
            // ── Priority portals ────────────────────────────────────────────────
            { source: 'Latinus',           category: 'Periodismo & Medios', badgeColor: 'badge-orange', homepage: 'https://latinus.us',
              url: BASE + enc('https://latinus.us/feed/'),               altUrl: BASE + enc('https://latinus.us/categoria/ultimas-noticias/feed/') },
            { source: 'Milenio Diario',    category: 'Nacional México',      badgeColor: 'badge-blue',   homepage: 'https://www.milenio.com',
              url: BASE + enc('https://www.milenio.com/rss'),             altUrl: BASE + enc('https://www.milenio.com/rss/ultimas-noticias') },
            { source: 'Notiver',           category: 'Veracruz & UV',        badgeColor: 'badge-green',  homepage: 'https://www.notiver.com.mx',
              url: BASE + enc('https://www.notiver.com.mx/feed/'),        altUrl: BASE + enc('https://www.notiver.com.mx/?feed=rss2') },
            { source: 'TVMÁS Veracruz',    category: 'Veracruz & UV',        badgeColor: 'badge-green',  homepage: 'https://tvmas.mx',
              url: BASE + enc('https://tvmas.mx/feed/'),                  altUrl: BASE + enc('https://tvmas.mx/?feed=rss2') },
            { source: 'El Dictamen',       category: 'Veracruz & UV',        badgeColor: 'badge-green',  homepage: 'https://www.eldictamen.mx',
              url: BASE + enc('https://www.eldictamen.mx/feed/'),         altUrl: BASE + enc('https://www.eldictamen.mx/?feed=rss2') },
            { source: 'XEU Noticias',      category: 'Veracruz & UV',        badgeColor: 'badge-green',  homepage: 'https://xeu.mx',
              url: BASE + enc('https://xeu.mx/feed/'),                    altUrl: BASE + enc('https://xeu.mx/?feed=rss2') },
            { source: 'Proceso',           category: 'Periodismo & Medios', badgeColor: 'badge-orange',  homepage: 'https://www.proceso.com.mx',
              url: BASE + enc('https://www.proceso.com.mx/feed/'),        altUrl: BASE + enc('https://www.proceso.com.mx/?feed=rss') },
            // ── Portals with known-working deep-link RSS ────────────────────────
            { source: 'Al Calor Político', category: 'Veracruz & UV',        badgeColor: 'badge-green',  homepage: 'https://www.alcalorpolitico.com',
              url: BASE + enc('https://www.alcalorpolitico.com/rss/noticias.xml') },
            { source: 'Plumas Libres',     category: 'Veracruz & UV',        badgeColor: 'badge-green',  homepage: 'https://plumaslibres.com.mx',
              url: BASE + enc('https://plumaslibres.com.mx/feed/') },
            { source: 'El Universal',      category: 'Nacional México',      badgeColor: 'badge-blue',   homepage: 'https://www.eluniversal.com.mx',
              url: BASE + enc('https://www.eluniversal.com.mx/arc/outboundfeeds/rss/?outputType=xml') },
            { source: 'Aristegui Noticias',category: 'Periodismo & Medios', badgeColor: 'badge-orange',  homepage: 'https://aristeguinoticias.com',
              url: BASE + enc('https://aristeguinoticias.com/feed/') },
            { source: 'La Jornada',        category: 'Nacional México',      badgeColor: 'badge-blue',   homepage: 'https://www.jornada.com.mx',
              url: BASE + enc('https://www.jornada.com.mx/rss/edicion.xml') },
            { source: 'Animal Político',   category: 'Periodismo & Medios', badgeColor: 'badge-orange',  homepage: 'https://www.animalpolitico.com',
              url: BASE + enc('https://www.animalpolitico.com/feed/') },
            { source: 'Diario de Xalapa',  category: 'Veracruz & UV',        badgeColor: 'badge-green',  homepage: 'https://www.diariodexalapa.com.mx',
              url: BASE + enc('https://www.diariodexalapa.com.mx/rss/') }
        ];

        let fetchedNews = [];

        const now = Date.now();

        for (const ep of rssEndpoints) {
            let data = null;

            // Try primary feed URL first
            try {
                const res = await fetch(ep.url);
                if (res.ok) {
                    const parsed = await res.json();
                    if (parsed && parsed.items && parsed.items.length > 0) {
                        data = parsed;
                    }
                }
            } catch (err) {
                console.warn(`Primary feed failed for ${ep.source}:`, err.message);
            }

            // If primary failed and altUrl exists, try alternate feed
            if (!data && ep.altUrl) {
                try {
                    const res2 = await fetch(ep.altUrl);
                    if (res2.ok) {
                        const parsed2 = await res2.json();
                        if (parsed2 && parsed2.items && parsed2.items.length > 0) {
                            data = parsed2;
                            console.info(`Used altUrl for ${ep.source}`);
                        }
                    }
                } catch (err2) {
                    console.warn(`Alt feed also failed for ${ep.source}:`, err2.message);
                }
            }

            if (data && data.items && data.items.length > 0) {
                data.items.slice(0, 4).forEach((item, idx) => {
                    const cleanSummary = item.description
                        ? item.description.replace(/<[^>]*>?/gm, '').substring(0, 190) + '...'
                        : 'Nota periodística en desarrollo...';
                    const itemTimeMs = item.pubDate
                        ? new Date(item.pubDate).getTime()
                        : (now - (idx + 1) * 5 * 60 * 1000);
                    const relTimeString = getRelativeTimeString(itemTimeMs);

                    // 3-level link resolution: item.link → item.guid → portal homepage
                    const articleUrl = resolveArticleUrl(item.link, item.guid, ep.homepage);
                    console.info(`[${ep.source}] "${item.title}" → ${articleUrl}`);

                    // ── Quality Gate at ingest time ──
                    // Only push notes that resolve to a real deep article URL.
                    // If articleUrl is just the portal homepage, skip this item entirely.
                    let isDeepArticle = false;
                    try {
                        const p = new URL(articleUrl).pathname.replace(/\/$/, '');
                        isDeepArticle = p.split('/').filter(s => s.length > 0).length >= 1;
                    } catch { isDeepArticle = false; }

                    if (!isDeepArticle) {
                        console.warn(`[${ep.source}] SKIPPED (homepage URL): ${articleUrl}`);
                        return; // don't add defective note
                    }

                    const apaCitation = `${ep.source}. (${new Date().getFullYear()}). ${item.title}. Recuperado de ${articleUrl}`;

                    fetchedNews.push({
                        id: `live-${ep.source.toLowerCase().replace(/\s+/g, '-')}-${idx}-${Date.now()}`,
                        title: item.title,
                        source: ep.source,
                        sourceCategory: ep.category,
                        badgeColor: ep.badgeColor,
                        timestamp: itemTimeMs,
                        date: 'Hoy',
                        time: relTimeString,
                        summary: cleanSummary,
                        apaCitation: apaCitation,
                        url: articleUrl
                    });
                });
            } else {
                console.warn(`No items fetched for ${ep.source}`);

            }
        }

        if (fetchedNews.length > 0) {
            // Deduplicate by title — exclude placeholder entries, keep only real RSS notes
            const uniqueMap = new Map();
            fetchedNews.forEach(n => {
                if (!uniqueMap.has(n.title)) uniqueMap.set(n.title, n);
            });
            newsData = interleaveNewsBySource(Array.from(uniqueMap.values()));

            const validCount = newsData.filter(isValidNote).length;
            if (statusText) statusText.innerHTML = `<span style="color: var(--color-uv-green);">✅ Auto-Sync Activo (${validCount} Notas verificadas de 14 Portales)</span>`;
            if (lastUpdated) lastUpdated.innerHTML = `📡 Última actualización: <b>${new Date().toLocaleTimeString()} (Automática)</b>`;
        } else {
            // RSS failed entirely — keep showing placeholders, retry in 30 seconds
            newsData = interleaveNewsBySource([...initialNewsData]);
            if (statusText) statusText.innerHTML = `<span style="color: #f59e0b;">⚠️ Conectando con portales… reintentando en 30 s</span>`;
            if (lastUpdated) lastUpdated.innerHTML = `📡 Última actualización: <b>Pendiente</b>`;
            // Auto-retry once after 30 seconds
            setTimeout(() => window.syncLiveNews(true), 30000);
        }

        renderNewsGrid();
    };

    // Render Books Grid (Con Autor, Fecha/Año, Título, Clasificación, Tamaño y Descargas)
    function renderBooksGrid(list = booksData) {
        const container = document.getElementById('booksGrid');
        if (!container) return;

        if (list.length === 0) {
            container.innerHTML = `
                <div class="welcome-box" style="grid-column: 1 / -1;">
                    <p>😔 No se encontraron libros con los filtros seleccionados. Solicítalo en la parte inferior de la página.</p>
                </div>
            `;
            return;
        }

        container.innerHTML = list.map(book => `
            <div class="tool-card retro-card book-item-card">
                <div class="card-header" style="background: linear-gradient(180deg, var(--color-uv-blue) 0%, var(--color-uv-blue-dark) 100%);">
                    <h3>📕 ${book.title}</h3>
                </div>
                <div class="card-body">
                    <div class="book-badges-row">
                        <span class="badge-mini badge-orange">${book.area}</span>
                        <span class="badge-mini badge-green">💾 ${book.fileSize}</span>
                    </div>

                    <div class="book-detail-table">
                        <div class="book-detail-row">
                            <span class="book-detail-label">👤 Autor:</span>
                            <span class="book-detail-val"><strong>${book.author}</strong></span>
                        </div>
                        <div class="book-detail-row">
                            <span class="book-detail-label">📅 Fecha / Edición:</span>
                            <span class="book-detail-val">${book.year}</span>
                        </div>
                        <div class="book-detail-row">
                            <span class="book-detail-label">📊 Clasificación:</span>
                            <span class="book-detail-val">${book.area}</span>
                        </div>
                        <div class="book-detail-row">
                            <span class="book-detail-label">📥 Descargas:</span>
                            <span class="book-detail-val"><strong>${book.downloads} descargas</strong></span>
                        </div>
                    </div>

                    <p style="font-size: 11px; color: #334155; margin: 8px 0; line-height: 1.4;">${book.description}</p>
                    
                    <button class="retro-btn btn-gold btn-block" onclick="alert('¡Iniciando descarga de ${book.title} de ${book.author} (${book.fileSize})!')">
                        💾 Descargar Libro PDF (${book.fileSize})
                    </button>
                </div>
            </div>
        `).join('');
    }

    // Render Home Notes Grid
    function renderHomeNotes() {
        const grid = document.getElementById('homeNotesGrid');
        if (!grid) return;

        grid.innerHTML = notesData.slice(0, 4).map(note => `
            <div class="note-item-card">
                <div>
                    <span class="materia-tag">${note.materia}</span>
                    <span class="sem-tag">${note.semestre}º Sem</span>
                    <h5>${note.title}</h5>
                    <p>${note.summary}</p>
                </div>
                <div class="note-card-footer">
                    <span>⭐ ${note.rating} (${note.downloads} descargas)</span>
                    <button class="retro-btn btn-sm btn-gold" onclick="window.openNoteModal('${note.id}')">📖 Leer</button>
                </div>
            </div>
        `).join('');
    }

    // Render Tools (IAs & Software)
    function renderToolsSection() {
        const aiGrid = document.getElementById('aiToolsGrid');
        const softGrid = document.getElementById('softwareToolsGrid');

        if (aiGrid) {
            aiGrid.innerHTML = initialAIApps.map(ai => `
                <div class="tool-card retro-card">
                    <div class="card-header" style="background: linear-gradient(180deg, #007A33 0%, #005C26 100%);">
                        <h3>🤖 ${ai.name}</h3>
                    </div>
                    <div class="card-body">
                        <span class="badge-mini badge-orange" style="margin-bottom: 6px; display: inline-block;">${ai.tag}</span>
                        <p style="font-size: 11px; margin: 6px 0;">${ai.description}</p>
                        <a href="${ai.link}" target="_blank" rel="noopener" class="retro-btn btn-green btn-block" style="text-decoration:none;">🌐 Probar ${ai.name}</a>
                    </div>
                </div>
            `).join('');
        }

        if (softGrid) {
            softGrid.innerHTML = initialSoftwareList.map(sw => `
                <div class="tool-card retro-card">
                    <div class="card-header">
                        <h3>💻 ${sw.name}</h3>
                    </div>
                    <div class="card-body">
                        <span class="badge-mini badge-green" style="margin-bottom: 6px; display: inline-block;">${sw.cat}</span>
                        <p style="font-size: 11px; margin: 6px 0;">${sw.description}</p>
                    </div>
                </div>
            `).join('');
        }
    }

    // Render Full Apuntes List Tab
    function renderFullNotesList(filteredList = notesData) {
        const container = document.getElementById('apuntesFullList');
        if (!container) return;

        if (filteredList.length === 0) {
            container.innerHTML = `
                <div class="welcome-box">
                    <p>😔 No se encontraron apuntes con los filtros seleccionados. ¡Sé el primero en <a href="#subir" onclick="window.switchTab('tab-subir')">subir uno aquí</a>!</p>
                </div>
            `;
            return;
        }

        container.innerHTML = filteredList.map(note => `
            <div class="note-row-card">
                <div class="note-row-info">
                    <span class="materia-tag">${note.materia}</span>
                    <span class="sem-tag">${note.semestre}º Semestre</span>
                    ${note.profesor ? `<span class="badge-mini">Prof: ${note.profesor}</span>` : ''}
                    <h4>${note.title}</h4>
                    <p>${note.summary}</p>
                    <div class="meta-row">
                        <span>Por: <b>${note.author}</b></span> | <span>Descargas: <b>${note.downloads}</b></span> | <span>Valoración: <b>⭐ ${note.rating}/5</b></span>
                    </div>
                </div>
                <div>
                    <button class="retro-btn btn-gold" onclick="window.openNoteModal('${note.id}')">📖 Leer / Descargar</button>
                </div>
            </div>
        `).join('');
    }

    // Render Exámenes List
    function renderExamsList() {
        const container = document.getElementById('examenesList');
        if (!container) return;

        container.innerHTML = initialExams.map(exam => `
            <div class="exam-item-card">
                <div class="exam-info">
                    <span class="materia-tag">${exam.materia}</span>
                    <span class="sem-tag">${exam.semestre}</span>
                    <span class="badge-mini badge-orange">${exam.tipo}</span>
                    <h4>${exam.title}</h4>
                    <p style="font-size: 11px; color: #334155; margin-top: 4px;">${exam.description}</p>
                </div>
                <div>
                    <button class="retro-btn btn-green" onclick="alert('¡Descargando ${exam.title}! (Simulación de descarga completada)')">💾 Descargar Guía</button>
                </div>
            </div>
        `).join('');
    }

    // Render Profesores Grid
    function renderProfessorsGrid(list = professorsData) {
        const grid = document.getElementById('profesoresGrid');
        if (!grid) return;

        grid.innerHTML = list.map(prof => `
            <div class="prof-card">
                <div class="prof-name">${prof.name}</div>
                <div class="prof-materia">${prof.materia}</div>
                <div>
                    <span class="badge-mini badge-green">Calificación: ⭐ ${prof.score}/5</span>
                    <span class="badge-mini">${prof.barco}</span>
                </div>
                <div class="prof-tags">
                    ${prof.tags.map(t => `<span class="prof-badge">${t}</span>`).join('')}
                </div>
                <div class="prof-comment-box">
                    "${prof.comment}"
                </div>
            </div>
        `).join('');
    }

    // Render Top Downloads Sidebar
    function renderTopRanking() {
        const list = document.getElementById('topNotesRanking');
        if (!list) return;

        const sorted = [...notesData].sort((a, b) => b.downloads - a.downloads).slice(0, 5);
        list.innerHTML = sorted.map(n => `
            <li>
                <a href="#" onclick="event.preventDefault(); window.openNoteModal('${n.id}');">${n.title}</a>
                <br><span style="font-size: 9px; color: #64748B;">(${n.downloads} descargas | ${n.materia})</span>
            </li>
        `).join('');
    }

    // ----------------------------------------------------------------------
    // 5. SEARCH & FILTERING CONTROLS & SYNCHRONIZATION
    // ----------------------------------------------------------------------

    // Synchronize UI active states between sidebars and section dropdowns
    function syncSidebarFiltersUI(matVal, semVal) {
        // Sync Sidebar Categories Links
        document.querySelectorAll('#categoryFilterList .cat-link').forEach(link => {
            if (link.dataset.cat === matVal) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });

        // Sync Sidebar Semester Buttons
        document.querySelectorAll('#semesterFilterGrid .sem-btn').forEach(btn => {
            if (btn.dataset.sem === semVal) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    }

    // Render active filter badges bar
    function renderActiveFilterBadges(searchVal, matVal, semVal) {
        const container = document.getElementById('activeFilterBadges');
        if (!container) return;

        const hasActiveFilter = (searchVal && searchVal.length > 0) || matVal !== 'todas' || semVal !== 'todos';

        if (!hasActiveFilter) {
            container.innerHTML = '';
            container.style.display = 'none';
            return;
        }

        container.style.display = 'flex';
        let badgesHtml = '<span style="font-weight: bold; color: #475569;">Filtros aplicados:</span> ';

        if (matVal !== 'todas') {
            badgesHtml += `
                <span class="filter-badge-item">
                    📁 Materia: ${matVal}
                    <span class="close-badge" onclick="window.clearCategoryFilter()" title="Quitar este filtro">✕</span>
                </span>
            `;
        }

        if (semVal !== 'todos') {
            badgesHtml += `
                <span class="filter-badge-item">
                    🎓 Semestre: ${semVal}º
                    <span class="close-badge" onclick="window.clearSemesterFilter()" title="Quitar este filtro">✕</span>
                </span>
            `;
        }

        if (searchVal) {
            badgesHtml += `
                <span class="filter-badge-item">
                    🔎 Búsqueda: "${searchVal}"
                    <span class="close-badge" onclick="window.clearSearchFilter()" title="Quitar este filtro">✕</span>
                </span>
            `;
        }

        badgesHtml += `
            <button class="btn-reset-filters" onclick="window.resetAllFilters()">
                🧹 Limpiar Todos los Filtros
            </button>
        `;

        container.innerHTML = badgesHtml;
    }

    window.filterNotesContent = function() {
        const searchInput = document.getElementById('apunteSearch');
        const semSelect = document.getElementById('apunteSemestreFilter');
        const matSelect = document.getElementById('apunteMateriaFilter');

        const searchVal = searchInput?.value.toLowerCase().trim() || '';
        const semVal = semSelect?.value || 'todos';
        const matVal = matSelect?.value || 'todas';

        activeFilterCategory = matVal;
        activeFilterSemester = semVal;

        // Keep sidebar UI in sync with current dropdown selections
        syncSidebarFiltersUI(matVal, semVal);
        renderActiveFilterBadges(searchVal, matVal, semVal);

        const filtered = notesData.filter(note => {
            const matchSearch = !searchVal ||
                                note.title.toLowerCase().includes(searchVal) ||
                                note.summary.toLowerCase().includes(searchVal) ||
                                note.materia.toLowerCase().includes(searchVal) ||
                                note.author.toLowerCase().includes(searchVal) ||
                                (note.profesor && note.profesor.toLowerCase().includes(searchVal)) ||
                                (note.content && note.content.toLowerCase().includes(searchVal));
            
            const matchSem = semVal === 'todos' || note.semestre === semVal;
            const matchCat = matVal === 'todas' || note.materia.toLowerCase() === matVal.toLowerCase();

            return matchSearch && matchSem && matchCat;
        });

        renderFullNotesList(filtered);
    };

    // Filter clear helpers
    window.clearCategoryFilter = function() {
        const matSelect = document.getElementById('apunteMateriaFilter');
        if (matSelect) matSelect.value = 'todas';
        window.filterNotesContent();
    };

    window.clearSemesterFilter = function() {
        const semSelect = document.getElementById('apunteSemestreFilter');
        if (semSelect) semSelect.value = 'todos';
        window.filterNotesContent();
    };

    window.clearSearchFilter = function() {
        const searchInput = document.getElementById('apunteSearch');
        if (searchInput) searchInput.value = '';
        window.filterNotesContent();
    };

    window.resetAllFilters = function() {
        const searchInput = document.getElementById('apunteSearch');
        const semSelect = document.getElementById('apunteSemestreFilter');
        const matSelect = document.getElementById('apunteMateriaFilter');

        if (searchInput) searchInput.value = '';
        if (semSelect) semSelect.value = 'todos';
        if (matSelect) matSelect.value = 'todas';

        window.filterNotesContent();
    };

    window.filterBooks = function() {
        const search = document.getElementById('bookSearch')?.value.toLowerCase() || '';
        const cat = document.getElementById('bookCategory')?.value || 'todas';

        const filtered = booksData.filter(b => {
            const matchSearch = b.title.toLowerCase().includes(search) || b.author.toLowerCase().includes(search);
            const matchCat = cat === 'todas' || b.area.toLowerCase().includes(cat.toLowerCase());
            return matchSearch && matchCat;
        });

        renderBooksGrid(filtered);
    };

    // Category Sidebar Listener
    document.querySelectorAll('.cat-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const cat = this.dataset.cat;
            activeFilterCategory = cat;
            
            const matSelect = document.getElementById('apunteMateriaFilter');
            if (matSelect) {
                matSelect.value = cat;
            }
            window.switchTab('tab-apuntes');
            window.filterNotesContent();
        });
    });

    // Semester Buttons Listener
    document.querySelectorAll('.sem-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const sem = this.dataset.sem;
            activeFilterSemester = sem;

            const semSelect = document.getElementById('apunteSemestreFilter');
            if (semSelect) {
                semSelect.value = sem;
            }
            window.switchTab('tab-apuntes');
            window.filterNotesContent();
        });
    });

    // Header Quick Search with Type Routing
    window.searchFromHeader = function() {
        const query = document.getElementById('headerSearchQuery')?.value.trim() || '';
        const typeRadio = document.querySelector('input[name="searchType"]:checked');
        const searchType = typeRadio ? typeRadio.value : 'all';

        if (searchType === 'profesor') {
            window.switchTab('tab-profesores');
            const profInput = document.getElementById('profesorSearch');
            if (profInput) {
                profInput.value = query;
                window.filterProfessors();
            }
        } else if (searchType === 'noticia') {
            window.switchTab('tab-noticias');
            const newsFiltered = newsData.filter(n => 
                n.title.toLowerCase().includes(query.toLowerCase()) || 
                n.summary.toLowerCase().includes(query.toLowerCase()) ||
                n.source.toLowerCase().includes(query.toLowerCase())
            );
            renderNewsGrid(newsFiltered);
        } else {
            window.switchTab('tab-apuntes');
            const searchInput = document.getElementById('apunteSearch');
            if (searchInput) {
                searchInput.value = query;
            }
            window.filterNotesContent();
        }
    };

    // Professors Search
    window.filterProfessors = function() {
        const q = document.getElementById('profesorSearch')?.value.toLowerCase() || '';
        const filtered = professorsData.filter(p => 
            p.name.toLowerCase().includes(q) || p.materia.toLowerCase().includes(q)
        );
        renderProfessorsGrid(filtered);
    };

    // Book Request Submission
    window.handleBookRequestSubmit = function() {
        const title = document.getElementById('reqBookTitle').value;
        const author = document.getElementById('reqBookAuthor').value;
        const materia = document.getElementById('reqBookMateria').value;

        alert(`📚 ¡Solicitud recibida! Se ha solicitado el libro "${title}" de ${author} para la materia de ${materia}. La comunidad de UVagos te notificará cuando esté disponible.`);
        document.getElementById('bookRequestForm').reset();
    };

    let currentPasId = null;

    // Render El Pasillo Grid
    function renderPasilloGrid(list = pasilloData) {
        const container = document.getElementById('pasilloGrid');
        if (!container) return;

        if (list.length === 0) {
            container.innerHTML = `
                <div class="welcome-box" style="grid-column: 1 / -1;">
                    <p>🍿 No se encontraron puestos en El Pasillo con ese criterio. ¡Registra el tuyo en el formulario de abajo!</p>
                </div>
            `;
            return;
        }

        container.innerHTML = list.map(item => `
            <div class="tool-card retro-card">
                <div class="card-header" style="background: linear-gradient(180deg, var(--color-uv-green) 0%, var(--color-uv-green-dark) 100%); display: flex; justify-content: space-between; align-items: center; cursor: pointer;" onclick="window.openPasilloModal('${item.id}')">
                    <h3 style="color: #FFFFFF;"><span class="xp-icon xp-pasillo"></span> ${item.name}</h3>
                    <span class="badge-mini ${item.badgeColor}">${item.badge}</span>
                </div>
                <div class="card-body">
                    <span class="badge-mini badge-orange" style="margin-bottom: 6px; display: inline-block;">${item.category}</span>
                    <p style="font-size: 11px; margin: 6px 0; color: #1E293B;">${item.description}</p>
                    <div style="background: #F8FAFC; border: 1px dashed var(--color-uv-green); padding: 8px; font-size: 10px; margin: 8px 0; border-radius: 3px;">
                        <p style="margin:2px 0; color: var(--color-uv-blue-dark);">👤 <b>Fundador(a):</b> ${item.founder}</p>
                        <p style="margin:2px 0; color: var(--color-uv-green-dark);">${item.location}</p>
                        <p style="margin:2px 0; color: #334155;">💲 <b>Precios:</b> ${item.price}</p>
                    </div>
                    <button type="button" class="retro-btn btn-green btn-block" style="margin-top: 8px;" onclick="window.openPasilloModal('${item.id}')">
                        📖 Ver Ficha / Menú
                    </button>
                </div>
            </div>
        `).join('');
    }

    window.filterPasilloGrid = function() {
        const search = document.getElementById('pasilloSearch')?.value.toLowerCase().trim() || '';
        const cat = document.getElementById('pasilloCategory')?.value || 'todas';

        const filtered = pasilloData.filter(item => {
            const matchSearch = !search ||
                item.name.toLowerCase().includes(search) ||
                item.description.toLowerCase().includes(search) ||
                item.founder.toLowerCase().includes(search) ||
                item.location.toLowerCase().includes(search);
            
            const matchCat = cat === 'todas' || item.category === cat;
            return matchSearch && matchCat;
        });

        renderPasilloGrid(filtered);
    };

    // Events Grid Rendering & Filtering
    window.renderEventsGrid = function(eventsList = eventsData) {
        const grid = document.getElementById('eventsGrid');
        if (!grid) return;

        if (eventsList.length === 0) {
            grid.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 25px; color: var(--text-muted);">❌ No se encontraron eventos en la cartelera con el filtro seleccionado.</div>';
            return;
        }

        grid.innerHTML = eventsList.map(evt => `
            <div class="retro-card event-card" style="display: flex; flex-direction: column; justify-content: space-between;">
                <div>
                    <div class="card-header" style="background: linear-gradient(180deg, var(--color-uv-blue-dark) 0%, var(--color-uv-blue) 100%);">
                        <h3 style="color: #FFFFFF; font-size: 12px;"><span class="xp-icon xp-calendar"></span> ${evt.title}</h3>
                    </div>
                    <div class="card-body" style="padding: 10px; font-size: 11px;">
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                            <span class="materia-badge ${evt.badgeColor}">${evt.badge}</span>
                            <span style="font-weight: bold; color: var(--color-uv-blue-dark); font-size: 10px;">${evt.category}</span>
                        </div>
                        <p style="margin-bottom: 4px;"><b>${evt.date}</b> | <small style="color: #64748B;">${evt.time}</small></p>
                        <p style="margin-bottom: 6px; color: var(--color-uv-green-dark);"><b>${evt.location}</b></p>
                        <p style="font-size: 10px; color: #475569; margin-bottom: 8px;"><b>Organiza:</b> ${evt.organizer}</p>
                        <p style="font-size: 11px; line-height: 1.3; color: var(--text-dark);">${evt.summary}</p>
                    </div>
                </div>
                <div style="padding: 10px; border-top: 1px dashed #CBD5E1; text-align: center; background: #F8FAFC;">
                    <button class="retro-btn btn-blue btn-block btn-sm" onclick="alert('📅 ¡Evento Agendado! Se ha guardado un recordatorio para: ${evt.title} (${evt.date})')">
                        📅 Agendar / Recordar Evento
                    </button>
                </div>
            </div>
        `).join('');
    };

    window.filterEventsGrid = function() {
        const cat = document.getElementById('eventCategoryFilter')?.value || 'todas';
        const query = document.getElementById('eventSearchInput')?.value.toLowerCase().trim() || '';

        const filtered = eventsData.filter(evt => {
            const matchCat = cat === 'todas' || evt.category === cat;
            const matchQuery = !query ||
                               evt.title.toLowerCase().includes(query) ||
                               evt.summary.toLowerCase().includes(query) ||
                               evt.location.toLowerCase().includes(query) ||
                               evt.organizer.toLowerCase().includes(query);
            return matchCat && matchQuery;
        });

        window.renderEventsGrid(filtered);
    };

    window.handlePasilloSubmit = function() {
        const name = document.getElementById('pasNombre').value;
        const category = document.getElementById('pasCategoria').value;
        const founder = document.getElementById('pasFundador').value;
        const location = document.getElementById('pasUbicacion').value;
        const price = document.getElementById('pasPrecios').value;
        const contact = document.getElementById('pasContacto').value;
        const description = document.getElementById('pasDescripcion').value;

        const subject = encodeURIComponent(`[NUEVO EMPRENDIMIENTO PASILLO] - ${name}`);
        const body = encodeURIComponent(
            `EL RINCÓN DEL UVAGO - SOLICITUD DE PUBLICACIÓN EN EL PASILLO (FACICO UV)\n` +
            `====================================================================\n\n` +
            `🛍️ Nombre del Puesto / Emprendimiento: ${name}\n` +
            `🏷️ Categoría: ${category}\n` +
            `👤 Fundador(a) / Semestre: ${founder}\n` +
            `📍 Punto de Entrega / Horario: ${location}\n` +
            `💲 Rango de Precios: ${price}\n` +
            `📱 Contacto (WhatsApp / IG): ${contact}\n\n` +
            `📝 MENÚ Y DESCRIPCIÓN DEL PUESTO:\n` +
            `--------------------------------------------------------------------\n` +
            `${description}\n\n` +
            `====================================================================\n` +
            `Enviado desde la plataforma El Rincón del UVago (FACICO - UV)`
        );

        window.open(`mailto:apuntes.uvago.facico@gmail.com?subject=${subject}&body=${body}`, '_blank');

        alert(
            `📧 ¡Propuesta de Emprendimiento Enviada a Inspección!\n\n` +
            `Tu solicitud para el puesto "${name}" ha sido empaquetada.\n\n` +
            `Se ha abierto tu cliente de correo para enviarla a:\n` +
            `👉 apuntes.uvago.facico@gmail.com\n\n` +
            `El equipo de El Rincón del UVago revisará el menú e información para agregar tu puesto manualmente al Pasillo de FACICO UV.`
        );

        document.getElementById('pasilloForm').reset();
    };

    // Pasillo Modal Logic
    window.openPasilloModal = function(pasId) {
        const item = pasilloData.find(p => p.id === pasId);
        if (!item) return;

        currentPasId = pasId;

        document.getElementById('modalPasTitleBar').innerText = item.name;
        document.getElementById('modalPasName').innerText = item.name;
        document.getElementById('modalPasCategory').innerText = item.category;
        document.getElementById('modalPasBadge').innerText = item.badge;
        document.getElementById('modalPasFounder').innerText = `Fundador(a): ${item.founder}`;
        document.getElementById('modalPasLocation').innerText = item.location;
        document.getElementById('modalPasPrice').innerText = item.price;
        document.getElementById('modalPasContact').innerText = item.contact;
        document.getElementById('modalPasFullDetail').innerText = item.fullDetail || item.description;

        document.getElementById('pasilloModal').classList.remove('hidden');
    };

    window.closePasilloModal = function() {
        document.getElementById('pasilloModal').classList.add('hidden');
    };

    window.ratePasillo = function(stars) {
        alert(`⭐ ¡Gracias por valorar con ${stars} estrellas este emprendimiento estudiantil! Tu apoyo fortalece la comunidad de FACICO UV.`);
    };

    window.contactCurrentPasillo = function() {
        const item = pasilloData.find(p => p.id === currentPasId);
        if (!item) return;

        let contactInfo = item.contact;
        if (contactInfo.startsWith('@')) {
            window.open(`https://instagram.com/${contactInfo.replace('@', '')}`, '_blank');
        } else if (/^\d+$/.test(contactInfo.replace(/[^0-9]/g, ''))) {
            const phone = contactInfo.replace(/[^0-9]/g, '');
            window.open(`https://wa.me/52${phone}?text=Hola!%20Vi%20tu%20puesto%20en%20El%20Rinc%C3%B3n%20del%20UVago%20y%20me%20interesa%20comprar.`, '_blank');
        } else {
            alert(`📱 Contacto de ${item.name}:\n\n${item.contact}\n\n¡Menciona que los viste en El Rincón del UVago!`);
        }
    };

    window.sharePasillo = function() {
        const item = pasilloData.find(p => p.id === currentPasId);
        if (!item) return;

        const info = `🛍️ Puesto: ${item.name}\n📍 Ubicación: ${item.location}\n📱 Contacto: ${item.contact}\n💲 Precios: ${item.price}`;
        navigator.clipboard.writeText(info).then(() => {
            alert(`📋 ¡Datos de contacto de "${item.name}" copiados al portapapeles!`);
        }).catch(() => {
            alert(`📱 Contacto de ${item.name}: ${item.contact}`);
        });
    };

    // ----------------------------------------------------------------------
    // 6. MODALS LOGIC
    // ----------------------------------------------------------------------

    window.openNoteModal = function(noteId) {
        const note = notesData.find(n => n.id === noteId);
        if (!note) return;

        currentNoteId = noteId;
        note.downloads += 1;
        renderTopRanking();

        document.getElementById('modalNoteTitle').innerText = note.title;
        document.getElementById('modalNoteHeaderTitle').innerText = note.title;
        document.getElementById('modalNoteMateria').innerText = note.materia;
        document.getElementById('modalNoteSemestre').innerText = `${note.semestre}º Semestre`;
        document.getElementById('modalNoteAuthor').innerText = `Subido por: ${note.author}`;
        document.getElementById('modalNoteText').innerText = note.content;

        document.getElementById('noteModal').classList.remove('hidden');
    };

    window.closeNoteModal = function() {
        document.getElementById('noteModal').classList.add('hidden');
    };

    window.rateNote = function(stars) {
        alert(`¡Gracias por valorar este apunte con ${stars} estrellas! Tu opinión ayuda a la comunidad UV.`);
    };

    window.downloadCurrentNote = function() {
        const note = notesData.find(n => n.id === currentNoteId);
        if (!note) return;

        const blob = new Blob([note.content], { type: 'text/plain;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${note.title.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.txt`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    window.printCurrentNote = function() {
        window.print();
    };

    window.downloadToolTemplate = function(fileName) {
        alert(`¡Iniciando descarga de "${fileName}" para proyectos de FACICO UV!`);
    };

    // Profesor Modal
    window.openAddProfModal = function() {
        document.getElementById('profModal').classList.remove('hidden');
    };

    window.closeProfModal = function() {
        document.getElementById('profModal').classList.add('hidden');
    };

    window.submitProfRating = function() {
        const name = document.getElementById('profName').value;
        const materia = document.getElementById('profMateria').value;
        const barco = document.getElementById('profBarco').value;
        const score = document.getElementById('profScore').value;
        const comment = document.getElementById('profComment').value;

        professorsData.unshift({
            id: `prof-${Date.now()}`,
            name,
            materia,
            barco,
            score,
            tags: ['Comentario Reciente'],
            comment
        });

        renderProfessorsGrid();
        window.closeProfModal();
        alert('¡Evaluación publicada exitosamente en el Rincón del UVago!');
    };

    // Calculator Modal
    window.openCalcModal = function() {
        document.getElementById('calcModal').classList.remove('hidden');
    };

    window.closeCalcModal = function() {
        document.getElementById('calcModal').classList.add('hidden');
    };

    window.calculateAverage = function() {
        const inputs = document.querySelectorAll('.calc-val');
        let sum = 0;
        let count = 0;

        inputs.forEach(input => {
            const val = parseFloat(input.value);
            if (!isNaN(val) && val >= 0 && val <= 10) {
                sum += val;
                count++;
            }
        });

        const resBox = document.getElementById('calcResult');
        if (count === 0) {
            resBox.innerText = 'Por favor ingresa al menos una calificación válida (0 a 10).';
            resBox.classList.remove('hidden');
            return;
        }

        const avg = (sum / count).toFixed(2);
        let mensaje = '';
        if (avg >= 9.0) mensaje = '🎉 ¡Excelente promedio! Eres orgullo UVago.';
        else if (avg >= 7.0) mensaje = '👍 ¡Muy bien! Semestre superado sin contratiempos.';
        else mensaje = '⚠️ ¡Ojo! Revisa las guías de extraordinario en el Rincón.';

        resBox.innerHTML = `Promedio Ponderado: <strong>${avg}</strong><br><small>${mensaje}</small>`;
        resBox.classList.remove('hidden');
    };

    // Upload Modal & Email Inspection Workflow
    window.openUploadModal = function() {
        window.openUploadNoteModal();
    };

    window.closeUploadModal = function() {
        window.closeUploadNoteModal();
    };

    window.openUploadNoteModal = function() {
        const modal = document.getElementById('uploadNoteModal');
        if (modal) {
            modal.classList.remove('hidden');
        }
    };

    window.closeUploadNoteModal = function() {
        const modal = document.getElementById('uploadNoteModal');
        if (modal) {
            modal.classList.add('hidden');
        }
    };

    // Dynamic Note Submission Templates & Format Helpers
    window.applyNoteTemplate = function(type) {
        const titleEl = document.getElementById('mUpTitle');
        const summaryEl = document.getElementById('mUpSummary');
        const contentEl = document.getElementById('mUpContent');

        if (type === 'clase') {
            if (titleEl) titleEl.value = 'Apuntes de Clase - [Nombre del Tema]';
            if (summaryEl) summaryEl.value = 'Resumen de conceptos explicados en clase, ejemplos prácticos y temas clave para examen.';
            if (contentEl) {
                contentEl.value = 
                    `====================================================================\n` +
                    `1. CONCEPTOS CLAVE DEL TEMA:\n` +
                    `--------------------------------------------------------------------\n` +
                    `- Concepto 1: Definición y características principales.\n` +
                    `- Concepto 2: Aplicación en el ámbito periodístico / comunicacional.\n\n` +
                    `2. IDEAS PRINCIPALES Y EJEMPLOS:\n` +
                    `--------------------------------------------------------------------\n` +
                    `- Idea 1: Explicación detallada.\n` +
                    `- Ejemplo en medios / casos reales.\n\n` +
                    `3. 💡 TIPS DESTACADOS POR EL PROFESOR PARA EXAMEN:\n` +
                    `--------------------------------------------------------------------\n` +
                    `- Poner especial atención en las definiciones y fechas.`;
            }
        } else if (type === 'libro') {
            if (titleEl) titleEl.value = 'SÍNTESIS DE LECTURA: [Título del Libro / Capítulo]';
            if (summaryEl) summaryEl.value = 'Síntesis analítica del capítulo, autores principales, hipótesis y conclusiones centrales.';
            if (contentEl) {
                contentEl.value = 
                    `====================================================================\n` +
                    `FICHA TÉCNICA DE LECTURA:\n` +
                    `Autor: [Nombre del Autor]\n` +
                    `Capítulo / Texto: [Nombre del Capítulo]\n` +
                    `====================================================================\n\n` +
                    `1. TESIS CENTRAL DEL AUTOR:\n` +
                    `--------------------------------------------------------------------\n` +
                    `- Argumento principal presentado en la lectura.\n\n` +
                    `2. CONCEPTOS Y CITAS CLAVE:\n` +
                    `--------------------------------------------------------------------\n` +
                    `- Concepto A: Explicación.\n` +
                    `- Concepto B: Explicación.\n\n` +
                    `3. CONCLUSIÓN Y ANÁLISIS CRÍTICO:\n` +
                    `--------------------------------------------------------------------\n` +
                    `- Relevancia del texto para la materia de comunicación.`;
            }
        } else if (type === 'examen') {
            if (titleEl) titleEl.value = 'GUÍA RESUELTA DE EXAMEN PARCIAL - [Materia]';
            if (summaryEl) summaryEl.value = 'Guía completa con preguntas frecuentes, respuestas justificadas y conceptos que vienen en el examen.';
            if (contentEl) {
                contentEl.value = 
                    `====================================================================\n` +
                    `GUÍA RESUELTA DE EXAMEN PARCIAL\n` +
                    `====================================================================\n\n` +
                    `❓ PREGUNTA 1: [Escribe aquí la pregunta de examen]\n` +
                    `✅ RESPUESTA: Explicación clara y justificada.\n\n` +
                    `❓ PREGUNTA 2: [Escribe aquí la pregunta de examen]\n` +
                    `✅ RESPUESTA: Explicación clara y justificada.\n\n` +
                    `💡 TIPS DE EVALUACIÓN:\n` +
                    `- Revisa muy bien la redacción e incluye los autores citados en clase.`;
            }
        } else if (type === 'limpiar') {
            if (titleEl) titleEl.value = '';
            if (summaryEl) summaryEl.value = '';
            if (contentEl) contentEl.value = '';
        }

        window.updateNoteCounters('mUpContent', 'mUpWordCount', 'mUpCharCount', 'mUpQualityStatus');
    };

    window.applyTabSubirTemplate = function(type) {
        const titleEl = document.getElementById('upTitle');
        const summaryEl = document.getElementById('upSummary');
        const contentEl = document.getElementById('upBody');

        if (type === 'clase') {
            if (titleEl) titleEl.value = 'Apuntes de Clase - [Nombre del Tema]';
            if (summaryEl) summaryEl.value = 'Resumen de conceptos explicados en clase, ejemplos prácticos y temas clave para examen.';
            if (contentEl) {
                contentEl.value = 
                    `====================================================================\n` +
                    `1. CONCEPTOS CLAVE DEL TEMA:\n` +
                    `--------------------------------------------------------------------\n` +
                    `- Concepto 1: Definición y características principales.\n` +
                    `- Concepto 2: Aplicación en el ámbito periodístico / comunicacional.\n\n` +
                    `2. IDEAS PRINCIPALES Y EJEMPLOS:\n` +
                    `--------------------------------------------------------------------\n` +
                    `- Idea 1: Explicación detallada.\n` +
                    `- Ejemplo en medios / casos reales.\n\n` +
                    `3. 💡 TIPS DESTACADOS POR EL PROFESOR PARA EXAMEN:\n` +
                    `--------------------------------------------------------------------\n` +
                    `- Poner especial atención en las definiciones y fechas.`;
            }
        } else if (type === 'libro') {
            if (titleEl) titleEl.value = 'SÍNTESIS DE LECTURA: [Título del Libro / Capítulo]';
            if (summaryEl) summaryEl.value = 'Síntesis analítica del capítulo, autores principales, hipótesis y conclusiones centrales.';
            if (contentEl) {
                contentEl.value = 
                    `====================================================================\n` +
                    `FICHA TÉCNICA DE LECTURA:\n` +
                    `Autor: [Nombre del Autor]\n` +
                    `Capítulo / Texto: [Nombre del Capítulo]\n` +
                    `====================================================================\n\n` +
                    `1. TESIS CENTRAL DEL AUTOR:\n` +
                    `--------------------------------------------------------------------\n` +
                    `- Argumento principal presentado en la lectura.\n\n` +
                    `2. CONCEPTOS Y CITAS CLAVE:\n` +
                    `--------------------------------------------------------------------\n` +
                    `- Concepto A: Explicación.\n` +
                    `- Concepto B: Explicación.\n\n` +
                    `3. CONCLUSIÓN Y ANÁLISIS CRÍTICO:\n` +
                    `--------------------------------------------------------------------\n` +
                    `- Relevancia del texto para la materia de comunicación.`;
            }
        } else if (type === 'examen') {
            if (titleEl) titleEl.value = 'GUÍA RESUELTA DE EXAMEN PARCIAL - [Materia]';
            if (summaryEl) summaryEl.value = 'Guía completa con preguntas frecuentes, respuestas justificadas y conceptos que vienen en el examen.';
            if (contentEl) {
                contentEl.value = 
                    `====================================================================\n` +
                    `GUÍA RESUELTA DE EXAMEN PARCIAL\n` +
                    `====================================================================\n\n` +
                    `❓ PREGUNTA 1: [Escribe aquí la pregunta de examen]\n` +
                    `✅ RESPUESTA: Explicación clara y justificada.\n\n` +
                    `❓ PREGUNTA 2: [Escribe aquí la pregunta de examen]\n` +
                    `✅ RESPUESTA: Explicación clara y justificada.\n\n` +
                    `💡 TIPS DE EVALUACIÓN:\n` +
                    `- Revisa muy bien la redacción e incluye los autores citados en clase.`;
            }
        } else if (type === 'limpiar') {
            if (titleEl) titleEl.value = '';
            if (summaryEl) summaryEl.value = '';
            if (contentEl) contentEl.value = '';
        }

        window.updateNoteCounters('upBody', 'upWordCount', 'upCharCount', 'upQualityStatus');
    };

    window.handleSubirTabSubmit = function() {
        const title = document.getElementById('upTitle').value;
        const materia = document.getElementById('upMateria').value;
        const semestre = document.getElementById('upSemestre').value;
        const author = document.getElementById('upAuthor').value;
        const profesor = document.getElementById('upProfesor').value || 'No especificado';
        const summary = document.getElementById('upSummary').value;
        const content = document.getElementById('upBody').value;
        const fileInput = document.getElementById('upFile');
        const fileName = fileInput?.files?.[0]?.name ? `\n📁 ARCHIVO ADJUNTO: ${fileInput.files[0].name}` : '';

        const subject = encodeURIComponent(`[NUEVO APUNTE CORREO] - ${title}`);
        const body = encodeURIComponent(
            `EL RINCÓN DEL UVAGO - PROPUESTA DE APUNTE ESTUDIANTIL (FACICO UV)\n` +
            `====================================================================\n\n` +
            `📌 Título: ${title}\n` +
            `📚 Materia: ${materia}\n` +
            `🎓 Semestre: ${semestre}º Semestre\n` +
            `👤 Autor/Apodo: ${author}\n` +
            `👨‍🏫 Profesor: ${profesor}${fileName}\n\n` +
            `📝 RESUMEN:\n${summary}\n\n` +
            `📄 CONTENIDO DEL APUNTE:\n` +
            `--------------------------------------------------------------------\n` +
            `${content}\n\n` +
            `====================================================================\n` +
            `Enviado desde la plataforma El Rincón del UVago`
        );

        window.open(`mailto:apuntes.uvago.facico@gmail.com?subject=${subject}&body=${body}`, '_blank');

        alert(
            `📧 ¡Apunte Enviado a Correo de Inspección Manual!\n\n` +
            `Tu propuesta "${title}" ha sido redactada.\n\n` +
            `Se ha abierto tu cliente de correo para enviarla a:\n` +
            `👉 apuntes.uvago.facico@gmail.com\n\n` +
            `El equipo de El Rincón del UVago la revisará e inspeccionará antes de publicarla manualmente en el portal.`
        );

        document.getElementById('uploadNoteForm').reset();
        const badge = document.getElementById('tabSubirFileBadge');
        if (badge) badge.innerText = '';
    };

    window.insertFormatTag = function(textareaId, tag) {
        const textarea = document.getElementById(textareaId);
        if (!textarea) return;

        const start = textarea.selectionStart || 0;
        const end = textarea.selectionEnd || 0;
        const text = textarea.value;

        textarea.value = text.substring(0, start) + tag + text.substring(end);
        textarea.focus();
        textarea.setSelectionRange(start + tag.length, start + tag.length);

        window.updateNoteCounters(textareaId, 'mUpWordCount', 'mUpCharCount', 'mUpQualityStatus');
    };

    window.updateNoteCounters = function(textareaId, wordId, charId, statusId) {
        const textarea = document.getElementById(textareaId);
        const wordEl = document.getElementById(wordId);
        const charEl = document.getElementById(charId);
        const statusEl = document.getElementById(statusId);

        if (!textarea) return;

        const val = textarea.value.trim();
        const chars = val.length;
        const words = val ? val.split(/\s+/).filter(Boolean).length : 0;

        if (wordEl) wordEl.innerText = words;
        if (charEl) charEl.innerText = chars;

        if (statusEl) {
            if (words === 0) {
                statusEl.innerHTML = '✍️ Comienza a escribir o carga una plantilla';
            } else if (words < 30) {
                statusEl.innerHTML = '🟡 Apunte breve (agrega más detalles para mejor apoyo)';
            } else if (words < 100) {
                statusEl.innerHTML = '🟢 ¡Buen nivel de detalle!';
            } else {
                statusEl.innerHTML = '⭐ ¡Excelente apunte súper completo!';
            }
        }
    };

    window.handleNoteFileSelect = function(input, badgeId) {
        const badge = document.getElementById(badgeId);
        if (!badge) return;

        if (input.files && input.files[0]) {
            const file = input.files[0];
            badge.innerHTML = `📄 Archivo adjunto preparado: <u>${file.name}</u> (${(file.size / 1024).toFixed(1)} KB)`;
        } else {
            badge.innerHTML = '';
        }
    };

    window.copyModalNoteData = function() {
        const title = document.getElementById('mUpTitle')?.value || 'Apunte FACICO';
        const summary = document.getElementById('mUpSummary')?.value || '';
        const content = document.getElementById('mUpContent')?.value || '';

        const fullText = `📌 TÍTULO: ${title}\n📝 RESUMEN: ${summary}\n\n📄 CONTENIDO:\n${content}`;
        navigator.clipboard.writeText(fullText).then(() => {
            alert(`📋 ¡Datos de tu apunte copiados al portapapeles! Puedes pegarlos directamente en tu correo.`);
        }).catch(() => {
            alert(`📋 Copia el texto manualmente desde el recuadro.`);
        });
    };

    window.handleModalNoteSubmit = function() {
        const title = document.getElementById('mUpTitle').value;
        const materia = document.getElementById('mUpMateria').value;
        const semestre = document.getElementById('mUpSemestre').value;
        const author = document.getElementById('mUpAuthor').value;
        const profesor = document.getElementById('mUpProfesor').value || 'No especificado';
        const summary = document.getElementById('mUpSummary').value;
        const content = document.getElementById('mUpContent').value;
        const fileInput = document.getElementById('mUpFile');
        const fileName = fileInput?.files?.[0]?.name ? `\n📁 ARCHIVO ADJUNTO: ${fileInput.files[0].name}` : '';

        const subject = encodeURIComponent(`[NUEVO APUNTE CORREO] - ${title}`);
        const body = encodeURIComponent(
            `EL RINCÓN DEL UVAGO - PROPUESTA DE APUNTE ESTUDIANTIL (FACICO UV)\n` +
            `====================================================================\n\n` +
            `📌 Título: ${title}\n` +
            `📚 Materia: ${materia}\n` +
            `🎓 Semestre: ${semestre}\n` +
            `👤 Autor/Apodo: ${author}\n` +
            `👨‍🏫 Profesor: ${profesor}${fileName}\n\n` +
            `📝 RESUMEN:\n${summary}\n\n` +
            `📄 CONTENIDO DEL APUNTE:\n` +
            `--------------------------------------------------------------------\n` +
            `${content}\n\n` +
            `====================================================================\n` +
            `Enviado desde la plataforma El Rincón del UVago`
        );

        window.open(`mailto:apuntes.uvago.facico@gmail.com?subject=${subject}&body=${body}`, '_blank');

        alert(
            `📧 ¡Apunte Enviado a Correo de Inspección Manual!\n\n` +
            `Tu propuesta "${title}" ha sido redactada.\n\n` +
            `Se ha abierto tu cliente de correo para enviarla a:\n` +
            `👉 apuntes.uvago.facico@gmail.com\n\n` +
            `El equipo de El Rincón del UVago la revisará e inspeccionará antes de publicarla manualmente en el portal.`
        );

        document.getElementById('modalNoteForm').reset();
        document.getElementById('mUpFileBadge').innerText = '';
        window.closeUploadNoteModal();
    };

    // Upload Pasillo Modal Handlers
    window.openUploadPasilloModal = function() {
        const modal = document.getElementById('uploadPasilloModal');
        if (modal) {
            modal.classList.remove('hidden');
        }
    };

    window.closeUploadPasilloModal = function() {
        const modal = document.getElementById('uploadPasilloModal');
        if (modal) {
            modal.classList.add('hidden');
        }
    };

    window.handleModalPasilloSubmit = function() {
        const name = document.getElementById('mPasNombre').value;
        const category = document.getElementById('mPasCategoria').value;
        const founder = document.getElementById('mPasFundador').value;
        const location = document.getElementById('mPasUbicacion').value;
        const price = document.getElementById('mPasPrecios').value;
        const contact = document.getElementById('mPasContacto').value;
        const description = document.getElementById('mPasDescripcion').value;

        const subject = encodeURIComponent(`[NUEVO EMPRENDIMIENTO PASILLO] - ${name}`);
        const body = encodeURIComponent(
            `EL RINCÓN DEL UVAGO - SOLICITUD DE PUBLICACIÓN EN EL PASILLO (FACICO UV)\n` +
            `====================================================================\n\n` +
            `🛍️ Nombre del Puesto / Emprendimiento: ${name}\n` +
            `🏷️ Categoría: ${category}\n` +
            `👤 Fundador(a) / Semestre: ${founder}\n` +
            `📍 Punto de Entrega / Horario: ${location}\n` +
            `💲 Rango de Precios: ${price}\n` +
            `📱 Contacto (WhatsApp / IG): ${contact}\n\n` +
            `📝 MENÚ Y DESCRIPCIÓN DEL PUESTO:\n` +
            `--------------------------------------------------------------------\n` +
            `${description}\n\n` +
            `====================================================================\n` +
            `Enviado desde la plataforma El Rincón del UVago (FACICO - UV)`
        );

        window.open(`mailto:apuntes.uvago.facico@gmail.com?subject=${subject}&body=${body}`, '_blank');

        alert(
            `📧 ¡Propuesta de Emprendimiento Enviada a Inspección!\n\n` +
            `Tu solicitud para el puesto "${name}" ha sido empaquetada.\n\n` +
            `Se ha abierto tu cliente de correo para enviarla a:\n` +
            `👉 apuntes.uvago.facico@gmail.com\n\n` +
            `El equipo de El Rincón del UVago inspeccionará el menú e información para agregar tu puesto manualmente al Pasillo de FACICO UV.`
        );

        document.getElementById('modalPasilloForm').reset();
        window.closeUploadPasilloModal();
    };

    // Upload Note Handler (Email Inspection Workflow)
    window.handleUploadNoteSubmit = function() {
        const title = document.getElementById('upTitle').value;
        const materia = document.getElementById('upMateria').value;
        const semestre = document.getElementById('upSemestre').value;
        const author = document.getElementById('upAuthor').value;
        const profesor = document.getElementById('upProfesor')?.value || 'No especificado';
        const summary = document.getElementById('upSummary').value;
        const body = document.getElementById('upBody').value;

        const mailSubject = encodeURIComponent(`[Propuesta de Apunte FACICO UV] ${title}`);
        const mailBody = encodeURIComponent(
            `PROPUESTA DE APUNTE / TRABAJO - EL RINCÓN DEL UVAGO\n` +
            `===================================================\n` +
            `Título: ${title}\n` +
            `Materia: ${materia}\n` +
            `Semestre: ${semestre}º Semestre\n` +
            `Autor / Apodo: ${author}\n` +
            `Profesor: ${profesor}\n` +
            `---------------------------------------------------\n` +
            `Resumen:\n${summary}\n\n` +
            `Contenido Completo:\n${body}\n` +
            `===================================================\n`
        );

        // Trigger mailto link for review
        window.location.href = `mailto:apuntes.uvago.facico@gmail.com?subject=${mailSubject}&body=${mailBody}`;

        // Reset form & close modal
        document.getElementById('uploadNoteForm').reset();
        window.closeUploadModal();

        alert(
            `✉️ ¡Propuesta de Apunte lista para enviar!\n\n` +
            `Tu apunte "${title}" ha sido enviado al correo oficial de inspección:\n` +
            `apuntes.uvago.facico@gmail.com\n\n` +
            `El equipo de El Rincón del UVago revisará el documento para comprobar su calidad y lo agregará manualmente a la plataforma.`
        );
    };

    // Daily Poll Handler
    const pollForm = document.getElementById('pollForm');
    if (pollForm) {
        pollForm.addEventListener('submit', function(e) {
            e.preventDefault();
            playRetroClick();

            const resultsBox = document.getElementById('pollResults');
            
            if (resultsBox) {
                resultsBox.innerHTML = `
                    <p><b>¡Voto registrado! Resultados actuales:</b></p>
                    <div class="poll-bar-container">
                        <span>🌱 Pastitos (48%)</span>
                        <div class="poll-bar-bg"><div class="poll-bar-fill" style="width: 48%;"></div></div>
                    </div>
                    <div class="poll-bar-container">
                        <span>🥐 Cafetería (28%)</span>
                        <div class="poll-bar-bg"><div class="poll-bar-fill" style="width: 28%;"></div></div>
                    </div>
                    <div class="poll-bar-container">
                        <span>❄️ Biblioteca A/C (16%)</span>
                        <div class="poll-bar-bg"><div class="poll-bar-fill" style="width: 16%;"></div></div>
                    </div>
                    <div class="poll-bar-container">
                        <span>🎙️ Estudio TV (8%)</span>
                        <div class="poll-bar-bg"><div class="poll-bar-fill" style="width: 8%;"></div></div>
                    </div>
                `;
                resultsBox.classList.remove('hidden');
                pollForm.classList.add('hidden');
            }
        });
    }

    // Windows XP Dynamic Emoji Transformer
    window.applyXPEmojis = function(rootEl = document.body) {
        const xpMap = [
            { emoji: '🏠', icon: 'xp-home' },
            { emoji: '📰', icon: 'xp-news' },
            { emoji: '🛠️', icon: 'xp-tools' },
            { emoji: '📚', icon: 'xp-books' },
            { emoji: '📝', icon: 'xp-exam' },
            { emoji: '📄', icon: 'xp-template' },
            { emoji: '📕', icon: 'xp-book-red' },
            { emoji: '👨‍🏫', icon: 'xp-teacher' },
            { emoji: '📤', icon: 'xp-upload' },
            { emoji: '📂', icon: 'xp-folder' },
            { emoji: '💾', icon: 'xp-floppy' },
            { emoji: '⭐', icon: 'xp-star' },
            { emoji: '🔍', icon: 'xp-search' },
            { emoji: '🔎', icon: 'xp-search' },
            { emoji: '💻', icon: 'xp-computer' },
            { emoji: '🤖', icon: 'xp-robot' },
            { emoji: '💬', icon: 'xp-msn-smile' },
            { emoji: '📊', icon: 'xp-exam' },
            { emoji: '🐶', icon: 'xp-msn-laugh' },
            { emoji: '✉️', icon: 'xp-upload' },
            { emoji: '✉', icon: 'xp-upload' }
        ];

        // Walk text nodes and replace unicode emojis with Windows XP icons
        const walker = document.createTreeWalker(rootEl, NodeFilter.SHOW_TEXT, null, false);
        const nodesToReplace = [];

        let node;
        while (node = walker.nextNode()) {
            if (node.parentNode && !['SCRIPT', 'STYLE', 'TEXTAREA', 'INPUT'].includes(node.parentNode.tagName)) {
                let text = node.nodeValue;
                let hasMatch = false;
                xpMap.forEach(item => {
                    if (text.includes(item.emoji)) {
                        hasMatch = true;
                    }
                });
                if (hasMatch) {
                    nodesToReplace.push(node);
                }
            }
        }

        nodesToReplace.forEach(textNode => {
            let html = textNode.nodeValue;
            xpMap.forEach(item => {
                const regex = new RegExp(item.emoji, 'g');
                html = html.replace(regex, `<span class="xp-icon ${item.icon}"></span>`);
            });
            const span = document.createElement('span');
            span.innerHTML = html;
            textNode.parentNode.replaceChild(span, textNode);
        });
    };

    // ----------------------------------------------------------------------
    // 7. INITIALIZATION
    // ----------------------------------------------------------------------
    document.addEventListener('DOMContentLoaded', function() {
        renderHomeNotes();
        renderNewsGrid();
        renderToolsSection();
        renderFullNotesList();
        renderExamsList();
        renderBooksGrid();
        renderProfessorsGrid();
        renderPasilloGrid();
        renderEventsGrid();
        renderTopRanking();

        // Auto-Sync Live Journalism News on page load
        window.syncLiveNews(true);

        // Apply Windows XP Retro Icons across the entire DOM
        setTimeout(function() {
            window.applyXPEmojis();
        }, 50);

        // Increment hit counter effect
        const hitCounter = document.getElementById('hitCounter');
        if (hitCounter) {
            let current = 482914;
            const stored = localStorage.getItem('uvago_hits');
            if (stored) {
                current = parseInt(stored, 10) + 1;
            } else {
                current += 1;
            }
            localStorage.setItem('uvago_hits', current.toString());
            hitCounter.innerText = current.toString().padStart(8, '0');
        }
    });

})();
