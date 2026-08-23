/* ==========================================================================
   El Rincón del UVago - JavaScript App & Data Engine
   FACICO - Universidad Veracruzana (Licenciatura en Comunicación)
   ========================================================================== */

(function() {
    'use strict';

    // ----------------------------------------------------------------------
    // 1. DATASETS (APUNTES, NOTICIAS, EXÁMENES, HERRAMIENTAS, LIBROS, PROFESORES)
    // ----------------------------------------------------------------------

    const initialNewsData = [
        {
            id: 'news-1',
            title: 'La Universidad Veracruzana abre convocatoria para movilidad académica e intercambio internacional en Comunicación',
            source: 'Universo UV',
            sourceCategory: 'Veracruz & UV',
            badgeColor: 'badge-green',
            date: '22 de Agosto de 2026',
            time: '17:30 hrs (Hace 15 min)',
            summary: 'La Dirección General de Relaciones Internacionales de la UV presentó la convocatoria para estancias estudiantiles en comunicación y audiovisual en España, Argentina y Colombia.',
            apaCitation: 'Universo UV. (2026, 22 de agosto). La Universidad Veracruzana abre convocatoria para movilidad académica internacional. Comunicación UV. https://www.uv.mx/prensa',
            url: 'https://www.uv.mx/prensa'
        },
        {
            id: 'news-2',
            title: 'Anuncian modernización de laboratorios de medios y conectividad en la zona Veracruz-Boca del Río',
            source: 'XEU Noticias',
            sourceCategory: 'Veracruz & UV',
            badgeColor: 'badge-green',
            date: '22 de Agosto de 2026',
            time: '16:45 hrs (Hace 45 min)',
            summary: 'Autoridades universitarias confirmaron el fortalecimiento de redes de alta velocidad y renovación de equipo de edición para las facultades del campus costero.',
            apaCitation: 'XEU Noticias. (2026, 22 de agosto). Anuncian modernización de laboratorios de medios en campus UV. XEU Noticias. https://xeu.mx',
            url: 'https://xeu.mx'
        },
        {
            id: 'news-3',
            title: 'Presentan iniciativa de ley para fortalecer garantías y libertad de expresión en el periodismo mexicano',
            source: 'El Universal',
            sourceCategory: 'Nacional México',
            badgeColor: 'badge-blue',
            date: '22 de Agosto de 2026',
            time: '15:10 hrs (Hace 2 horas)',
            summary: 'Organizaciones del gremio periodístico y legisladores presentaron en el Congreso un dictamen para robustecer los mecanismos de protección a comunicadores e investigadores.',
            apaCitation: 'El Universal. (2026, 22 de agosto). Presentan iniciativa de ley para garantizar libertad de expresión periodística en México. El Universal. https://eluniversal.com.mx',
            url: 'https://eluniversal.com.mx'
        },
        {
            id: 'news-4',
            title: 'Congreso Internacional de Ética Periodística y Narrativas Transmedia se celebrará en Veracruz',
            source: 'La Jornada',
            sourceCategory: 'Periodismo & Medios',
            badgeColor: 'badge-orange',
            date: '22 de Agosto de 2026',
            time: '14:00 hrs (Hace 3 horas)',
            summary: 'Académicos e investigadores de Iberoamérica analizarán los retos éticos de las salas de redacción digitales y el uso de inteligencia artificial en el periodismo.',
            apaCitation: 'La Jornada. (2026, 22 de agosto). Veracruz será sede del Congreso Internacional de Ética Periodística. La Jornada. https://jornada.com.mx',
            url: 'https://jornada.com.mx'
        },
        {
            id: 'news-5',
            title: 'Estudio analiza el impacto de las herramientas de IA generativa en la producción audiovisual',
            source: 'Aristegui Noticias',
            sourceCategory: 'Periodismo & Medios',
            badgeColor: 'badge-orange',
            date: '22 de Agosto de 2026',
            time: '12:30 hrs (Hace 5 horas)',
            summary: 'Reporte especializado examina cómo la automatización está transformando las etapas de preproducción, postproducción de audio y síntesis de voz en los medios.',
            apaCitation: 'Aristegui Noticias. (2026, 22 de agosto). El impacto de las herramientas de IA generativa en la producción audiovisual. Aristegui Noticias. https://aristeguinoticias.com',
            url: 'https://aristeguinoticias.com'
        },
        {
            id: 'news-6',
            title: 'Estudiantes de Ciencias de la Comunicación obtienen galardón nacional por documental universitario',
            source: 'Diario de Xalapa',
            sourceCategory: 'Veracruz & UV',
            badgeColor: 'badge-green',
            date: '22 de Agosto de 2026',
            time: '10:15 hrs (Hace 7 horas)',
            summary: 'El proyecto enfocado en la memoria histórica y la cultura viva del estado de Veracruz recibió el primer lugar en la categoría de cortometraje documental universitario.',
            apaCitation: 'Diario de Xalapa. (2026, 22 de agosto). Alumnos de FACICO ganan premio nacional por documental. Diario de Xalapa. https://diariodexalapa.com.mx',
            url: 'https://diariodexalapa.com.mx'
        }
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

    // Render Noticias Grid (Redirección directa + Fuente Bibliográfica APA + Noticiero, Fecha, Hora)
    function renderNewsGrid(list = newsData) {
        const grid = document.getElementById('newsFeedGrid');
        if (!grid) return;

        if (list.length === 0) {
            grid.innerHTML = `
                <div class="welcome-box" style="grid-column: 1 / -1;">
                    <p>😔 No se encontraron noticias con los filtros seleccionados.</p>
                </div>
            `;
            return;
        }

        grid.innerHTML = list.map(news => `
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
    }

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
