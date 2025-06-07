import stgo1_cover from '../assets/images/montserrat_autor.jpg';
import c1 from '../assets/images/comic/u2_panel1.jpg';
import c2 from '../assets/images/comic/u2_panel2.jpg';
import c3 from '../assets/images/comic/u2_panel3.jpg';
import c4 from '../assets/images/comic/u2_panel4.jpg';
import c5 from '../assets/images/comic/u2_panel5.jpg';
import c6 from '../assets/images/comic/u2_panel6.jpg';
import ropero from '../assets/images/ropero_vintage.jpg';
// src/data/unidadesData.js

export const datosUnidades = {
  // ... (Unidades 1-6 como estaban)
  1: {
    isBookPage: true,
    coverTitleCoreano: "자기소개",
    coverTitleEspanol: "Presentación del Autor",
    authorImage: stgo1_cover,
    authorNameCoreano: "몬트세라트 마르티네스",
    authorBioCoreano: [
      "안녕하세요! 제 이름은 몬트세라트 마르티네스예요. 저는 멕시코 사람이에요.",
      "저는 컴퓨터 시스템 엔지녀여요, 만나서 반가워요",
      "제 취미는 그림 그리기와 오래된 책 읽기예요. 이 일기를 통해 제 생각과 경험을 나누고 싶어요. 잘 부탁드립니다!",
    ],
    fecha: "2025년 5월 15일",
    tituloCoreano: "자기소개",
    tituloEspanol: "Presentación Personal",
    gramatica: ["이에요/예요", "은/는"],
    vocabulario: ["Nacionalidad", "Ocupación", "Saludos"],
  },
  2: {
    isBookPage: true, 
    coverTitleCoreano: "일상생활", 
    coverTitleEspanol: "Mi Día a Día",
    fecha: "2025년 5월 22일",
    tituloCoreano: "나의 하루", 
    tituloEspanol: "Un Día en Mi Vida",
    gramatica: ["아요/어요", "에 가다"],
    vocabulario: ["Acciones cotidianas", "Lugares comunes", "Expresiones de tiempo básicas"],
    comicPanels: [ 
      {
        id: 1,
        imageSrc: c1, 
        altText: "Yo leo un libro",
        hoverTextCoreano: "저는 책이 봐요.",
        textPosition: "bottom",
        layoutClass: "panel-top-left", 
      },
      {
        id: 2,
        imageSrc: c3,
        altText: "jugando video juegos",
        hoverTextCoreano: "비디오 게임을 하고 있어요.",
        textPosition: "top",
        layoutClass: "panel-top-right",
      },
      {
        id: 3,
        imageSrc: c2,
        altText: "nosotros estudiamos mathematicas",
        hoverTextCoreano: "우리는 수학을 공부해요.",
        textPosition: "bottom",
        layoutClass: "panel-bottom-wide", 
      },
      // Página 2
      {
        id: 4,
        imageSrc: c4,
        altText: "Estudiando en la biblioteca",
        hoverTextCoreano: "도서관에서 한국어를 공부해요.",
        textPosition: "top",
        layoutClass: "panel-top-left",
      },
      {
        id: 5,
        imageSrc: c5,
        altText: "nosotros hicimos pizza",
        hoverTextCoreano: "우리는 피자를 만들어요",
        textPosition: "bottom",
        layoutClass: "panel-top-right", 
      },
      {
        id: 6,
        imageSrc: c6,
        altText: "nosotros vamos al cine",
        hoverTextCoreano: "우리는 영화관에 가요.",
        textPosition: "top",
        layoutClass: "panel-bottom-wide",
      }
    ],
  },
  3: {
    isBookPage: true,
    coverTitleCoreano: "위치", 
    coverTitleEspanol: "En Mi librero",
    fecha: "2025년 5월 29일",
    tituloCoreano: "내 라이브러리에 물건들", 
    tituloEspanol: "Objetos en Mi Cuarto",
    gramatica: ["이/가", "에 있다/없다"],
    vocabulario: ["가구 (muebles)", "물건 (objetos)", "위치 단어 (palabras de ubicación)"],
    wardrobeImageSrc: ropero, 
    wardrobeItems: [
      { id: "1", itemCoreano: "옷", descriptionCoreano: "아리엘이 Bestiarius 책 앞에 있어요.", positionClasses: "top-[10%] left-[-1%] md:left-[-15%] transform -translate-y-1/2" },
      { id: "2", itemCoreano: "신발", descriptionCoreano: "Dr. sueño책이 Vinland Saga만화 뒤에 있어요.", positionClasses: "bottom-[-5%] left-[50%] transform -translate-x-1/2 translate-y-0" },
      { id: "3", itemCoreano: "모자", descriptionCoreano: "iluminae책이 용 아래에 있어요.", positionClasses: "top-[5%] right-[-25%] md:right-[-15%] transform -translate-y-1/2" },
      { id: "4", itemCoreano: "상자", descriptionCoreano: "고저가 용 안에 없어요.", positionClasses: "top-[60%] right-[-28%] md:right-[-20%] transform -translate-y-1/2" },
      { id: "5", itemCoreano: "거울", descriptionCoreano: "TAP 앨범이 토끼 뒤에 있어요.", positionClasses: "bottom-[10%] right-[-28%] md:right-[-20%] transform translate-y-1/2 bg-red-200/70 text-red-700" },
      { id: "6", itemCoreano: "책들", descriptionCoreano: "BAMBY 앨범이 재범 뒤에 있어요.", positionClasses: "top-[20%] right-[-25%] md:right-[-18%] transform -translate-y-1/2" },
      { id: "7", itemCoreano: "가방", descriptionCoreano: "Overdose 앨범이 BAMBY 앨범 뒤에 있어요.", positionClasses: "top-[50%] left-[-28%] md:left-[-20%] transform -translate-y-1/2" },
      { id: "8", itemCoreano: "화분", descriptionCoreano: "진영가 BAMBY 앨범 위에 있어요.", positionClasses: "top-[-5%] left-[50%] transform -translate-x-1/2 -translate-y-0 bg-orange-200/70 text-orange-700" }
    ],
  },
  4: {
    isBookPage: true,
    coverTitleCoreano: "물건 사기 1",
    coverTitleEspanol: "De Compras",
    fecha: "2025년 6월 5일",
    tituloCoreano: "가게에서의 대화",
    tituloEspanol: "Conversación en la Tienda",
    gramatica: ["을/를", "-(으)세요", "Números Sino-Coreanos"],
    vocabulario: ["과일 (fruta)", "가게 (tienda)", "돈 (dinero)", "주세요 (deme por favor)"],
    dialogueTitle: "과일 가게에서 (En la frutería)",
    dialogueCharacters: {
        vendedor: { name: "가게 주인", avatar: "/assets/avatars/vendedor.png" },
        usuario: { name: "손님 (몬츠)", avatar: "/assets/avatars/monts_cliente.png" }
    },
    dialogueLines: [
      { id: 1, speaker: "vendedor", line: "어서 오세요! 무엇을 드릴까요?" },
      { id: 2, speaker: "usuario", linePrefix: "사과하고 오렌지", blank: true, options: ["를 주세요", "하고 싶어요", "가 맛있어요"], correctAnswer: "를 주세요", lineSuffix: "." },
      { id: 3, speaker: "vendedor", line: "네. 사과 몇 개 드릴까요?" },
      { id: 4, speaker: "usuario", linePrefix: "사과 ", blank: true, options: ["두 개 주세요", "하나 없어요", "이천 원이에요"], correctAnswer: "두 개 주세요", lineSuffix: ". 오렌지는 세 개 주세요." },
      { id: 5, speaker: "vendedor", line: "알겠습니다. 사과 두 개하고 오렌지 세 개요. 더 필요한 것 있으세요?" },
      { id: 6, speaker: "usuario", linePrefix: "아니요, ", blank: true, options: ["괜찮아요", "더 주세요", "너무 비싸요"], correctAnswer: "괜찮아요", lineSuffix: ". 다 얼마예요?" },
      { id: 7, speaker: "vendedor", line: "모두 칠천 원입니다." },
      { id: 8, speaker: "usuario", linePrefix: "네, 여기 ", blank: true, options: ["만 원 있어요", "오천 원만 주세요", "카드도 돼요?"], correctAnswer: "만 원 있어요", lineSuffix: "." },
      { id: 9, speaker: "vendedor", line: "감사합니다. 거스름돈 삼천 원 여기 있습니다. 안녕히 가세요!" },
    ]
  },
  5: { 
    isBookPage: true,
    coverTitleCoreano: "물건 사기 2",
    coverTitleEspanol: "Contando en la Bodega",
    fecha: "2025년 6월 12일",
    tituloCoreano: "창고 재고 확인", // "Revisión de Inventario de la Bodega"
    tituloEspanol: "Inventario de la Bodega",
    gramatica: ["-ㅂ니다/습니다", "-ㅂ니까/습니까", "고유어 수 (Números Nativos)", "단위 명사 (Contadores)"],
    vocabulario: ["물건 (objetos)", "세다 (contar)", "창고 (bodega)", "몇 개 (cuántos)"],
    inventoryItems: [
        { id: "libros", nameSingular: "책", emoji: "📚", counter: "권", count: 5 },
        { id: "botellas", nameSingular: "병", emoji: "🍾", counter: "병", count: 3 },
        { id: "manzanas", nameSingular: "사과", emoji: "🍎", counter: "개", count: 7 },
        { id: "personas", nameSingular: "사람", emoji: "👷", counter: "명", count: 2 }
    ]
  },
  6: {
    isBookPage: true,
    coverTitleCoreano: "어제 일과",
    coverTitleEspanol: "Mi Día de Ayer",
    fecha: "2025년 6월 19일",
    tituloCoreano: "어제의 발자취", 
    tituloEspanol: "Siguiendo Mis Pasos de Ayer",
    gramatica: ["았/었", "에서"],
    vocabulario: ["동작 (acciones)", "장소 (lugares)", "시간 표현 (expresiones de tiempo)"],
    mapImageSrc: "src/assets/map.svg", 
    adventurePathCoords: "M50,300 C100,200 150,100 250,150 S350,250 400,180 C450,100 550,150 600,100", 
    pointsOfInterest: [
      { id: "casa_mañana", nameCoreano: "집 (아침)", position: { top: '80%', left: '15%' }, iconType: "home", logEntryCoreano: "재범하고 나는 Undercourt에서 운동을 했어요."},
      { id: "parque_ejercicio", nameCoreano: "공원", position: { top: '50%', left: '35%' }, iconType: "leaf", logEntryCoreano: "우리 집은 GoldHeart에 있어요." },
      { id: "biblioteca_estudio", nameCoreano: "도서관", position: { top: '30%', left: '60%' }, iconType: "book", logEntryCoreano: "친구를 ShadowTown에사 한국어 가르쳐요."},
      { id: "restaurante_cena", nameCoreano: "식당", position: { top: '65%', left: '75%' }, iconType: "coffee", logEntryCoreano: "아침에 집에서 일어났어요. 그리고 라면을 먹었어요."}
    ]
  },
  7: {
    isBookPage: true,
    coverTitleCoreano: "날씨",
    coverTitleEspanol: "El Observatorio",
    fecha: "2025년 6월 26일",
    tituloCoreano: "날씨 관찰 일지", 
    tituloEspanol: "Diario de Observación del Clima",
    gramatica: ["그리고", "안"],
    vocabulario: ["계절 (estaciones)", "날씨 (clima)", "온도 (temperatura)", "바람 (viento)"],
    observatoryData: {
      seasons: [
        { value: "봄", label: "봄 (Primavera)", dialAngle: 0, text: "봄이에요.", clothing: ["light_jacket.png", "sneakers.png"]},
        { value: "여름", label: "여름 (Verano)", dialAngle: 90, text: "여름이에요.", clothing: ["tshirt.png", "shorts.png", "sunglasses.png"]},
        { value: "가을", label: "가을 (Otoño)", dialAngle: 180, text: "가을이에요.", clothing: ["sweater.png", "jeans.png"]},
        { value: "겨울", label: "겨울 (Invierno)", dialAngle: 270, text: "겨울이에요.", clothing: ["coat.png", "scarf.png", "boots.png"]},
      ],
      temperatures: [ // Para el slider/termómetro
        { value: 0, label: "아주 추워요", text: "날씨가 아주 추워요.", isHot: false, isCold: true },
        { value: 1, label: "추워요", text: "날씨가 추워요.", isHot: false, isCold: true },
        { value: 2, label: "쌀쌀해요", text: "날씨가 쌀쌀해요.", isHot: false, isCold: false },
        { value: 3, label: "따뜻해요", text: "날씨가 따뜻해요.", isHot: false, isCold: false },
        { value: 4, label: "더워요", text: "날씨가 더워요.", isHot: true, isCold: false },
        { value: 5, label: "아주 더워요", text: "날씨가 아주 더워요.", isHot: true, isCold: false },
      ],
      winds: [ // Para el medidor de viento
        { value: "없어요", label: "바람이 없어요", text: "바람이 안 불어요." },
        { value: "조금", label: "바람이 조금 불어요", text: "바람이 조금 불어요." },
        { value: "많이", label: "바람이 많이 불어요", text: "바람이 많이 불어요." },
      ],
      skyConditions: [ // Opcional, para un barómetro o selector de cielo
        { value: "맑아요", label: "맑아요", text: "하늘이 맑아요.", isGoodWeather: true },
        { value: "흐려요", label: "흐려요", text: "하늘이 흐려요.", isGoodWeather: false },
        { value: "비가 와요", label: "비가 와요", text: "비가 와요.", isGoodWeather: false },
        { value: "눈이 와요", label: "눈이 와요", text: "눈이 와요.", isGoodWeather: false },
      ]
    }
  },
  8: {
    isBookPage: true,
    coverTitleCoreano: "시간",
    coverTitleEspanol: "Horarios de Estación",
    fecha: "2025년 7월 3일", 
    tituloCoreano: "기차 시간표", 
    tituloEspanol: "Horario de Trenes",
    gramatica: ["에 (partícula de tiempo)", "시/분 (hora/minuto)", "요일 (día de la semana)"],
    vocabulario: ["기차 (tren)", "역 (estación)", "출발 (salida)", "도착 (llegada)", "오전 (AM)", "오후 (PM)"],
    trainSchedule: {
      destinations: ["부산", "서울", "대전", "광주", "제주 (배편)"], // 제주 es ferry, para variar
      daysOfWeek: ["월요일", "화요일", "수요일", "목요일", "금요일", "토요일", "일요일"],
      trains: [
        { id: "T101", destination: "부산", departureDay: "월요일", departureTime: "오전 9시 30분", arrivalTime: "오후 12시 45분", platform: "3" },
        { id: "T102", destination: "서울", departureDay: "월요일", departureTime: "오후 2시 00분", arrivalTime: "오후 5시 10분", platform: "1" },
        { id: "T201", destination: "대전", departureDay: "화요일", departureTime: "오전 10시 15분", arrivalTime: "오전 11시 55분", platform: "2" },
        { id: "T301", destination: "광주", departureDay: "수요일", departureTime: "오후 1시 30분", arrivalTime: "오후 4시 20분", platform: "4" },
        { id: "T103", destination: "부산", departureDay: "목요일", departureTime: "오전 11시 00분", arrivalTime: "오후 2시 15분", platform: "3" },
        { id: "F401", destination: "제주 (배편)", departureDay: "금요일", departureTime: "저녁 7시 00분", arrivalTime: "다음 날 오전 6시 00분", platform: "항구 1" }, // Ferry
        { id: "T104", destination: "서울", departureDay: "금요일", departureTime: "오후 4시 45분", arrivalTime: "저녁 7시 55분", platform: "1" },
        { id: "T202", destination: "대전", departureDay: "토요일", departureTime: "오전 8시 00분", arrivalTime: "오전 9시 40분", platform: "2" },
        { id: "T501", destination: "부산", departureDay: "일요일", departureTime: "오후 3시 10분", arrivalTime: "저녁 6시 25분", platform: "3" },
      ]
    }
  }
};
