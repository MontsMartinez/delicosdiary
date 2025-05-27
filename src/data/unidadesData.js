// src/data/unidadesData.js

export const datosUnidades = {
  1: {
    isBookPage: true,
    coverTitleCoreano: "자기소개",
    coverTitleEspanol: "Presentación del Autor",
    authorImage: "/assets/images/montserrat_autor.jpg", // Recuerda tener esta imagen en public/assets/images/
    authorNameCoreano: "몬트세라트 마르티네스",
    authorBioCoreano: [
      "안녕하세요! 제 이름은 몬트세라트 마르티네스예요. 저는 멕시코 사람이에요. 지금은 아과스칼리엔테스 자치대학교에서 학생으로 공부하고 있어요.",
      "한국 문화와 언어에 대한 관심이 많아서 한국어 수업을 듣기 시작했어요. 이 일기는 제 한국어 학습 여정을 기록하고, 배운 것을 연습하는 공간이에요.",
      "제 취미는 그림 그리기와 오래된 책 읽기예요. 이 일기를 통해 제 생각과 경험을 나누고 싶어요. 잘 부탁드립니다!",
    ],
    fecha: "2025년 5월 15일",
    tituloCoreano: "자기소개", // Título para el interior del libro y referencia
    tituloEspanol: "Presentación Personal",
    gramatica: ["이에요/예요", "은/는"],
    vocabulario: ["Nacionalidad", "Ocupación", "Saludos"],
  },
  2: {
    isBookPage: false,
    fecha: "2025년 5월 22일",
    tituloCoreano: "일상생활",
    tituloEspanol: "Vida Diaria",
    gramatica: ["아요/어요", "에 가다"],
    vocabulario: ["Acciones", "Lugares"],
    contenidoDiario: "저는 매일 아침 일곱 시에 일어나요. 일어나서 물을 마셔요. 그리고 운동하러 공원에 가요. 오후에는 보통 도서관에서 한국어를 공부해요. 저녁에는 가족하고 같이 밥을 먹어요.趣味는 음악 듣기예요.",
    imagen: "/assets/images/unidad2_ejemplo.jpg", // Ejemplo
  },
  3: {
    isBookPage: false,
    fecha: "2025년 5월 29일",
    tituloCoreano: "위치",
    tituloEspanol: "Ubicación",
    gramatica: ["이/가", "에 있다/없다"],
    vocabulario: ["Objetos", "Palabras de ubicación"],
    contenidoDiario: "제 방에는 침대가 있어요. 그리고 책상하고 의자도 있어요. 책상 위에는 컴퓨터하고 책이 있어요. 창문 옆에는 작은 화분이 없어요. 하지만 곧 살 거예요!",
    imagen: "/assets/images/unidad3_ejemplo.jpg",
  },
  4: {
    isBookPage: false,
    fecha: "2025년 6월 5일",
    tituloCoreano: "물건 사기 1",
    tituloEspanol: "Comprar Cosas 1",
    gramatica: ["을/를", "-(으)세요"],
    vocabulario: ["Objetos de compra", "Números Sino-Coreanos"],
    contenidoDiario: "시장에 갔어요. 사과하고 오렌지를 샀어요. 사과 세 개 주세요. 오렌지 다섯 개 주세요. 아줌마가 친절했어요. 총 만 원이었어요.",
  },
  5: {
    isBookPage: false,
    fecha: "2025년 6월 12일",
    tituloCoreano: "물건 사기 2",
    tituloEspanol: "Comprar Cosas 2",
    gramatica: ["-ㅂ니다/습니다", "-ㅂ니까/습니까", "하고"],
    vocabulario: ["Números Nativo-Coreanos", "Sustantivos contadores"],
    contenidoDiario: "어제 문구점에 갔습니다. 공책하고 연필을 샀습니다. 공책 한 권에 얼마입니까? 천오백 원입니다. 연필 두 자루도 주십시오. 네, 알겠습니다.",
  },
  6: {
    isBookPage: false,
    fecha: "2025년 6월 19일",
    tituloCoreano: "어제 일과",
    tituloEspanol: "Rutina de Ayer",
    gramatica: ["Pasado 았/었", "에서"],
    vocabulario: ["Acciones"],
    contenidoDiario: "어제 아침에는 늦잠을 잤어요. 그래서 학교에 조금 늦었어요. 오후에는 친구하고 같이 식당에서 점심을 먹었어요. 비빔밥이 아주 맛있었어요. 저녁에는 집에서 영화를 봤어요.",
  },
  7: {
    isBookPage: false,
    fecha: "2025년 6월 26일",
    tituloCoreano: "날씨",
    tituloEspanol: "Clima",
    gramatica: ["그리고", "안"],
    vocabulario: ["Estaciones", "Clima"],
    contenidoDiario: "오늘 날씨가 정말 좋아요. 하늘이 맑고 바람도 시원해요. 어제는 비가 왔어요. 그리고 조금 추웠어요. 저는 봄하고 가을을 좋아해요. 여름은 너무 덥고 겨울은 너무 추워서 안 좋아해요.",
  },
  8: {
    isBookPage: false,
    fecha: "2025년 7월 3일", // Ajusté la fecha para que no sea la misma que la anterior
    tituloCoreano: "시간",
    tituloEspanol: "Tiempo",
    gramatica: ["에 (partícula de tiempo)", "시/분"],
    vocabulario: ["Fechas", "Días de la semana", "Expresiones de tiempo"],
    contenidoDiario: "오늘은 칠월 삼일 목요일이에요. 지금은 오후 네 시 삼십분이에요. 시간이 정말 빨리 가네요! 한국어 공부를 시작한 지 벌써 두 달이 되었어요. 앞으로도 열심히 할 거예요!",
  }
};
