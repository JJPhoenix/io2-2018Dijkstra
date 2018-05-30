//lugares de la UNI, puntos, base de datos para la busqueda
var places=[ { name: 'Losa Deportiva FC',
    latlon: { lon: -77.05077394, lat: -12.01663472 } },
  { name: 'Losa Deportiva FIEE',
    latlon: { lon: -77.04855198, lat: -12.016249340000002 } },
  { name: 'Losa Deportiva FIC',
    latlon: { lon: -77.04881254, lat: -12.0207772 } },
  { name: 'Losa Deportiva FIC',
    latlon: { lon: -77.04860424, lat: -12.020778799999999 } },
  { name: 'Canchita futbol FIIS',
    latlon: { lon: -77.05124162, lat: -12.016012159999997 } },
  { name: 'Losa Fulbito FIIS',
    latlon: { lon: -77.05142328, lat: -12.015476899999998 } },
  { name: 'Losa Basket FIIS',
    latlon: { lon: -77.05119134, lat: -12.01547516 } },
  { name: 'Losa deportiva FIGMM',
    latlon: { lon: -77.04776766, lat: -12.01892502 } },
  { name: 'Parque Cesar Vallejo',
    latlon: { lon: -77.05025606, lat: -12.024481419999997 } },
  { name: 'Parque Cahuide',
    latlon: { lon: -77.05181472, lat: -12.024054859999998 } },
  { name: 'Rectorado UNI',
    latlon: { lon: -77.04837236153845, lat: -12.023598715384615 } },
  { name: 'Facultad de Ing. de Petróleo y Petroquímica FIP',
    latlon: { lon: -77.04832105, lat: -12.022840949999997 } },
  { name: 'Teatro UNI',
    latlon: { lon: -77.04937253333334, lat: -12.023175488888889 } },
  { name: 'Capilla UNI',
    latlon: { lon: -77.04792392727272, lat: -12.017938563636362 } },
  { name: 'Decanato FIEE',
    latlon: { lon: -77.0492917, lat: -12.016965244444444 } },
  { name: 'Decanato FIIS',
    latlon: { lon: -77.05011914705884, lat: -12.015963423529405 } },
  { name: 'Laboratorio de Quimica',
    latlon: { lon: -77.04981692, lat: -12.015621119999999 } },
  { name: 'Facultad de Ing. Industrial y de Sistemas',
    latlon: { lon: -77.05038506000001, lat: -12.015438620000001 } },
  { name: 'Abastecimiento FIIS',
    latlon: { lon: -77.0498142, lat: -12.015374640000001 } },
  { name: 'Comedor UNI',
    latlon: { lon: -77.04904226666666, lat: -12.018822983333335 } },
  { name: 'Ciencias Basicas',
    latlon: { lon: -77.05093196, lat: -12.016200799999998 } },
  { name: 'Facultad de Ciencias',
    latlon: { lon: -77.05069814545455, lat: -12.017175954545456 } },
  { name: 'Q',
    latlon: { lon: -77.04888113999999, lat: -12.017251299999998 } },
  { name: 'Facultad de Ingenieria Eléctrica y Electrónica FIEE',
    latlon: { lon: -77.04917988571428, lat: -12.017482714285713 } },
  { name: 'IPECALYA',
    latlon: { lon: -77.05143412727274, lat: -12.015207372727271 } },
  { name: 'Ex Auditorio FIIS',
    latlon: { lon: -77.05055368, lat: -12.015152700000003 } },
  { name: 'Centro de Extensión y Proyección Social CEPS UNI ',
    latlon: { lon: -77.0498376, lat: -12.022926199999999 } },
  { name: 'Facultad de Ing. Económica y Ciencias Sociales FIECS',
    latlon: { lon: -77.0490012, lat: -12.019297457142853 } },
  { name: 'Residencia UNI',
    latlon: { lon: -77.048345, lat: -12.017464899999998 } },
  { name: 'Centro Medico UNI',
    latlon: { lon: -77.04850497142857, lat: -12.019545442857142 } },
  { name: 'Restaurante ARUNI',
    latlon: { lon: -77.04841256666667, lat: -12.019731683333337 } },
  { name: 'Escuela de Ing. Metalúrgica',
    latlon: { lon: -77.04817015555555, lat: -12.020115099999996 } },
  { name: 'Escuela de Ingenieria Geológica',
    latlon: { lon: -77.04766054, lat: -12.020174619999995 } },
  { name: 'Facultad de Ingenieria Civil FIC',
    latlon: { lon: -77.04907122, lat: -12.02179456 } },
  { name: 'Postgrado FIIS',
    latlon: { lon: -77.04933183636363, lat: -12.016163927272729 } },
  { name: 'Laboratorio Academico FIIS',
    latlon: { lon: -77.04936197142858, lat: -12.015455157142853 } },
  { name: 'La Cabañita',
    latlon: { lon: -77.04939646000001, lat: -12.015058719999999 } },
  { name: 'Biblioteca Central UNI',
    latlon: { lon: -77.0493015, lat: -12.0179379, } },
  { name: 'Auditorio FIGMM',
    latlon: { lon: -77.04784194444444, lat: -12.020297544444448 } },
  { name: 'Pabellón J',
    latlon: { lon: -77.0491973, lat: -12.020155319999997 } },
  { name: 'Facultad de Ing. Geológica, Minera y Metalúrgica FIGMM',
    latlon: { lon: -77.04808016, lat: -12.01979572 } },
  { name: 'Coliseo UNI',
    latlon: { lon:-77.0481875 , lat: -12.0211831 } },
  { name: 'Escuela de Ingenieria de Minas',
    latlon: { lon: -77.04761382000001, lat: -12.01951598 } },
  { name: 'Biblioteca FIECS',
    latlon: { lon: -77.04911016, lat: -12.01965932 } },
  { name: 'Escuela de Ingenieria Textil',
    latlon: { lon: -77.04794112307692, lat: -12.02159794615385 } },
  { name: 'Decanato FIGMM',
    latlon: { lon: -77.04765201999999, lat: -12.020661139999998 } },
  { name: 'Facultad de Ing. Ambiental',
    latlon: { lon: -77.0484913952381, lat: -12.022630423809526 } },
  { name: 'Gimnasio UNI',
    latlon: { lon: -77.0475706, lat: -12.0221642 } },
  { name: 'Laboratorio de Docimasia',
    latlon: { lon: -77.04805758, lat: -12.02257245 } },
  { name: 'Los Ingenieritos',
    latlon: { lon: -77.04788705555556, lat: -12.0183849 } },
  { name: 'Facultad de Ingenieria Química y Textil FIQT',
    latlon: { lon:-77.0474213,lat:-12.0229565 } },
  { name: 'Facultad de Ing. Mecánica',
    latlon: { lon: -77.04702259411765, lat: -12.024288388235293 } },
  { name: 'Laboratorio de Mecánica de Rocas',
    latlon: { lon: -77.04753118000001, lat: -12.02150344 } },
  { name: 'Facultad de Arquitectura, Urbanismo y Artes FAUA',
    latlon: { lon: -77.05022597272728, lat: -12.021361493181816 } },
  { name: 'Biblioteca FIGMM',
    latlon: { lon: -77.04730801999999, lat: -12.02119476 } },
  { name: 'Estadio de la UNI',
    latlon: { lon: -77.05043322682927, lat: -12.018780719512188 } },
  { name: 'Auditorio FIIS',
    latlon: { lon: -77.0504754, lat: -12.0161933 } },
  { name: 'Cancha fulbito FIM',
    latlon: { lon: -77.04753512, lat: -12.02480462 } },
  { name: 'Gran Estadio UNI',
    latlon: { lon: -77.0503163, lat: -12.0186886 } },
  { name: 'Losa fulbito FC',
    latlon: { lon: -77.0507989, lat: -12.0166633 } },
  { name: 'Losa fulbito FIEE',
    latlon: { lon: -77.048546, lat: -12.0162435 } },
  { name: 'Puerta 5',
    latlon: { lon: -77.0508973, lat: -12.0179573 } },
  { name: 'Losa fulbito FIGMM',
    latlon: { lon: -77.0477814, lat: -12.018934 } },
  { name: 'Parque Cesar Vallejo',
    latlon: { lon: -77.0502054, lat: -12.0245095 } },
  { name: 'Centro de Información FIIS',
    latlon: { lon: -77.0504486, lat: -12.0159834 } },
  { name: 'Fuente de soda Meche',
    latlon: { lon: -77.0501759, lat: -12.0149103 } },
  { name: 'Estación Honorio Delgado',
    latlon: { lon: -77.0514099, lat: -12.0179012 } },
  { name: 'Estación UNI',
    latlon: { lon: -77.0499812, lat: -12.0233577 } },
  { name: 'Museo Geológico y Paleontológico (UNI)',
    latlon: { lon: -77.0476903, lat: -12.0201511 } },
  { name: 'Puerta 4',
    latlon: { lon: -77.049235, lat: -12.0236266 } },
  { name: 'Biblioteca de la Facultad de Arquitectura, Urbanismo y Artes FAUA',
    latlon: { lon: -77.0502263, lat: -12.0225349 } },
  { name: 'Estacionamiento FIM',
    latlon: { lon: -77.0471999, lat: -12.0247309 } },
  { name: 'Imprenta Bengrafic',
    latlon: { lon: -77.0507178, lat: -12.023489 } },
  { name: 'Iglesia Biblica Bautista',
    latlon: { lon: -77.0502716, lat: -12.0237861 } },
  { name: 'Veterinaria Ingenieria',
    latlon: { lon: -77.0516485, lat: -12.0246401 } },
  { name: 'Internet Locutorio Intercad2',
    latlon: { lon: -77.051998, lat: -12.0237883 } },
  { name: 'Puerta 3',
    latlon: { lon: -77.0480998, lat: -12.0245048 } },
  { name: 'CTIC - UNI',
    latlon: { lon: -77.0499644, lat: -12.0166766 } },
  { name: 'Sistemas UNI',
    latlon: { lon: -77.0493892, lat: -12.0158155 } }
  ];
