// 카카오 개발자 콘솔의 JavaScript 키를 넣으면 카톡 공유가 활성화됩니다.
const KAKAO_JS_KEY = "";
const STORAGE_KEY = "consumption-mbti-ranking-v1";

const questions = [
  {
    axis: "E/I",
    label: "소비 에너지 측정 중",
    title: "친구가 갑자기 핫플 팝업스토어 가자고 한다",
    situation: "내 통장은 이미 누워있지만, 인스타 스토리는 서 있으라고 말한다.",
    answers: [
      { icon: "🔥", text: "일단 감. 이런 건 현장감이 반이다.", value: "E" },
      { icon: "🛋", text: "후기 47개 읽고 다음 주 평일을 노린다.", value: "I" }
    ]
  },
  {
    axis: "S/N",
    label: "정보 수집 방식 측정 중",
    title: "새 이어폰을 사야 한다면?",
    situation: "광고는 다 좋아 보이고, 댓글은 다 전문가다.",
    answers: [
      { icon: "📊", text: "가격, 배터리, AS, 후기 순으로 표를 만든다.", value: "S" },
      { icon: "✨", text: "이걸 쓰는 미래의 내 모습이 이미 멋지다.", value: "N" }
    ]
  },
  {
    axis: "T/F",
    label: "결제 판단 방식 측정 중",
    title: "장바구니 10만 원, 쿠폰 1만 원",
    situation: "할인은 나를 부르고, 배송비는 발목을 잡는다.",
    answers: [
      { icon: "🧮", text: "필요한 것만 남기고 단가를 다시 계산한다.", value: "T" },
      { icon: "💝", text: "쿠폰이 나를 선택했으니 예의상 써준다.", value: "F" }
    ]
  },
  {
    axis: "J/P",
    label: "지출 운영 방식 측정 중",
    title: "월급이 들어온 첫날",
    situation: "계좌에 숫자가 들어오자 갑자기 세상이 선명해진다.",
    answers: [
      { icon: "🗂", text: "저축, 고정비, 용돈을 바로 나눈다.", value: "J" },
      { icon: "🎢", text: "오늘의 나는 축제 담당자다.", value: "P" }
    ]
  },
  {
    axis: "E/I",
    label: "소비 에너지 측정 중",
    title: "단체 여행 경비를 맡게 됐다",
    situation: "친구들은 믿는다고 했고, 엑셀은 나를 보고 웃었다.",
    answers: [
      { icon: "🎤", text: "공지, 정산, 맛집 예약까지 지휘한다.", value: "E" },
      { icon: "📎", text: "조용히 시트 만들고 링크만 던진다.", value: "I" }
    ]
  },
  {
    axis: "S/N",
    label: "정보 수집 방식 측정 중",
    title: "옷을 사러 갔는데 묘하게 끌리는 재킷 발견",
    situation: "입어보니 마음이 3cm 정도 커졌다.",
    answers: [
      { icon: "🧵", text: "소재, 세탁, 기존 옷과 매칭부터 본다.", value: "S" },
      { icon: "🎬", text: "이 재킷 입은 나는 이미 주인공이다.", value: "N" }
    ]
  },
  {
    axis: "T/F",
    label: "결제 판단 방식 측정 중",
    title: "친구 생일 선물을 고른다",
    situation: "예산은 정했지만 마음은 이미 리본을 묶었다.",
    answers: [
      { icon: "🎯", text: "필요한 물건 중 예산 안에서 최고 효율을 찾는다.", value: "T" },
      { icon: "🥹", text: "친구가 좋아할 표정까지 상상하며 고른다.", value: "F" }
    ]
  },
  {
    axis: "J/P",
    label: "지출 운영 방식 측정 중",
    title: "카드 명세서가 도착했다",
    situation: "알림 하나로 지난달의 내가 말을 걸어온다.",
    answers: [
      { icon: "🔍", text: "카테고리별로 보고 다음 달 예산을 조정한다.", value: "J" },
      { icon: "🙈", text: "일단 마음의 준비를 하고 천천히 본다.", value: "P" }
    ]
  },
  {
    axis: "E/I",
    label: "소비 에너지 측정 중",
    title: "맛집 웨이팅 90분",
    situation: "배고픔은 현실이고 리뷰 별점은 환상적이다.",
    answers: [
      { icon: "🍜", text: "기다리면서 주변 디저트까지 탐색한다.", value: "E" },
      { icon: "🥡", text: "포장 가능한 곳을 찾아 평화를 산다.", value: "I" }
    ]
  },
  {
    axis: "S/N",
    label: "정보 수집 방식 측정 중",
    title: "세일 문구가 눈에 들어왔다",
    situation: "오늘만 40%. 물론 내일도 뭔가 할 것 같긴 하다.",
    answers: [
      { icon: "🧾", text: "원래 가격과 최근 최저가를 확인한다.", value: "S" },
      { icon: "🚀", text: "이건 우주가 준 타이밍이라고 믿는다.", value: "N" }
    ]
  },
  {
    axis: "T/F",
    label: "결제 판단 방식 측정 중",
    title: "비싼 취미 장비가 사고 싶다",
    situation: "취미는 장비빨이라는 문장이 심장을 두드린다.",
    answers: [
      { icon: "📐", text: "사용 빈도와 중고가 방어를 따져본다.", value: "T" },
      { icon: "🎸", text: "행복 비용이면 어느 정도는 인정한다.", value: "F" }
    ]
  },
  {
    axis: "J/P",
    label: "지출 운영 방식 측정 중",
    title: "갑자기 갖고 싶던 물건이 품절 임박",
    situation: "남은 수량 2개. 심박수는 이미 결제창.",
    answers: [
      { icon: "⏳", text: "찜해두고 하루 뒤에도 필요하면 산다.", value: "J" },
      { icon: "⚡", text: "품절은 기다려주지 않는다. 결제.", value: "P" }
    ]
  }
];

const resultMap = {
  ESTJ: {
    name: "예산 단속반장",
    title: "가계부가 나를 낳았다",
    copy: "돈의 흐름을 보면 마음이 편해지는 타입. 할인도 좋지만 계획 밖 지출은 눈썹이 먼저 올라갑니다.",
    traits: ["정산 속도가 빠르고 친구들이 은근히 의지함", "쿠폰보다 예산표가 더 설렘", "충동구매 후회율이 낮은 편"],
    tip: "즐거움 예산을 작게라도 따로 잡아두면 계획력과 만족감이 같이 살아납니다."
  },
  ESTP: {
    name: "핫딜 돌격대장",
    title: "세일 알림이 울리면 심장이 먼저 출근",
    copy: "기회 포착이 빠르고 실행력도 빠릅니다. 장바구니 앞에서 망설이는 시간보다 배송 시간이 더 깁니다.",
    traits: ["한정판, 팝업, 오늘만 할인에 강함", "재미있는 경험에는 지갑이 민첩함", "사고 나서 활용법을 찾는 재능"],
    tip: "결제 전 10분 타이머만 걸어도 진짜 득템과 분위기 구매가 꽤 잘 갈립니다."
  },
  ESFJ: {
    name: "인간 선물포장지",
    title: "내 돈인데 친구 감동이 먼저 옴",
    copy: "사람을 기쁘게 하는 소비에 강합니다. 선물 고를 때 거의 감정 데이터 분석가처럼 움직입니다.",
    traits: ["생일, 기념일, 모임 지출에 관대함", "후기보다 상대 표정을 더 중요하게 봄", "정 많은 소비로 카드가 따뜻해짐"],
    tip: "선물 예산 상한선을 미리 정하면 마음도 지키고 통장도 같이 지킬 수 있습니다."
  },
  ESFP: {
    name: "월급날 페스티벌러",
    title: "오늘의 행복을 내일의 나에게 청구",
    copy: "경험과 분위기에 진심인 타입. 맛있는 것, 예쁜 것, 재밌는 것 앞에서 삶의 해상도가 올라갑니다.",
    traits: ["친구와 함께 쓰는 돈의 만족도가 높음", "즉흥 약속과 맛집에 약함", "결제 후 스토리 업로드까지 완성"],
    tip: "월급날 바로 자동저축을 걸어두면 축제 후에도 바닥이 덜 보입니다."
  },
  ENTJ: {
    name: "투자형 지갑 CEO",
    title: "소비도 포트폴리오처럼",
    copy: "돈을 쓰더라도 성장, 효율, 결과를 봅니다. 비싼 물건도 납득 가능한 ROI가 있으면 과감합니다.",
    traits: ["생산성 도구와 자기계발 지출에 관대함", "싸게 사는 것보다 잘 사는 것에 집중", "장기 이득이 보이면 결단 빠름"],
    tip: "성과형 소비가 휴식 비용을 밀어내지 않도록 회복 예산도 항목으로 넣어보세요."
  },
  ENTP: {
    name: "장바구니 실험과학자",
    title: "왜 샀냐고? 궁금했으니까",
    copy: "새로운 제품과 서비스에 호기심이 큽니다. 남들이 망설일 때 직접 써보고 결론 내리는 타입입니다.",
    traits: ["신제품, 펀딩, 베타 서비스에 약함", "구매 이유를 말하면 묘하게 설득력 있음", "실패해도 리뷰 콘텐츠가 남음"],
    tip: "실험 예산을 정해두면 호기심은 살리고 후폭풍은 줄일 수 있습니다."
  },
  ENFJ: {
    name: "모임 행복 설계자",
    title: "계산서보다 분위기가 중요",
    copy: "사람들과의 좋은 시간을 위해 돈을 씁니다. 모임 만족도를 올리는 데 묘한 책임감을 느낍니다.",
    traits: ["예약, 케이크, 분위기 좋은 장소를 챙김", "단체 지출에서 조율력이 좋음", "내 몫보다 전체 경험을 먼저 봄"],
    tip: "모임 전 총예산을 공유하면 배려심이 혼자 비용을 떠안는 일을 막아줍니다."
  },
  ENFP: {
    name: "감성 장바구니 시인",
    title: "이건 물건이 아니라 서사다",
    copy: "마음이 움직이면 소비도 움직입니다. 물건 하나에도 분위기, 의미, 미래의 장면을 같이 삽니다.",
    traits: ["취향템 발견력이 뛰어남", "한 번 꽂히면 검색 탭이 폭발함", "합리화 문장이 꽤 아름다움"],
    tip: "위시리스트에 24시간만 재워두면 진짜 취향템만 살아남습니다."
  },
  ISTJ: {
    name: "영수증 보안관",
    title: "지출 내역이 질서정연해야 마음이 편함",
    copy: "필요성과 안정성을 중시합니다. 검증된 물건, 확실한 품질, 예측 가능한 지출을 좋아합니다.",
    traits: ["가성비보다 신뢰성까지 포함한 총비용을 봄", "명세서 확인을 미루지 않음", "충동구매 방어력이 높은 편"],
    tip: "가끔은 검증되지 않은 작은 즐거움도 예산 안에서 허용해보세요."
  },
  ISTP: {
    name: "쿨거래 장인",
    title: "말은 적게, 비교는 정확하게",
    copy: "필요한 물건을 빠르게 분석하고 군더더기 없이 삽니다. 쓸모 없는 포장은 마음에서 바로 반품됩니다.",
    traits: ["스펙과 실사용성을 잘 봄", "중고거래와 실속 구매에 강함", "관심 없는 소비에는 흔들리지 않음"],
    tip: "너무 오래 비교하다 구매 피로가 오면 기준 3개만 남기고 결정해도 충분합니다."
  },
  ISFJ: {
    name: "생활비 수호천사",
    title: "나보다 냉장고와 가족이 먼저",
    copy: "안정적인 생활과 주변 사람을 챙기는 데 돈을 씁니다. 작고 꾸준한 관리형 소비에 강합니다.",
    traits: ["생필품, 건강, 집안 지출을 잘 챙김", "과소비보다 누락된 필요를 더 걱정함", "알뜰하지만 인색하진 않음"],
    tip: "나를 위한 소소한 예산도 생활비처럼 고정 항목으로 넣어주세요."
  },
  ISFP: {
    name: "조용한 취향부자",
    title: "말없이 결제했지만 이유는 깊다",
    copy: "겉으로는 잔잔해도 취향에는 확실합니다. 마음에 맞는 물건을 발견하면 조용히 오래 아낍니다.",
    traits: ["감각적인 물건에 약함", "유행보다 내 마음에 맞는지를 봄", "작은 사치의 만족도가 높음"],
    tip: "취향 소비를 기록해두면 비슷한 물건을 반복해서 사는 일을 줄일 수 있습니다."
  },
  INTJ: {
    name: "미래 설계형 절약가",
    title: "오늘의 지출도 큰 그림 안에",
    copy: "장기 계획과 목적이 뚜렷한 소비자입니다. 돈을 안 쓰는 게 아니라 전략적으로 씁니다.",
    traits: ["큰 목표를 위해 작은 유혹을 잘 넘김", "리뷰보다 구조와 원리를 파악함", "불필요한 구독을 잘 정리함"],
    tip: "계획에 없는 즐거움도 삶의 변수로 인정하면 지속력이 좋아집니다."
  },
  INTP: {
    name: "가격비교 철학자",
    title: "결제 전에 우주의 원리를 조금 탐구",
    copy: "왜 사야 하는지, 어떤 기준이 맞는지 깊게 파고듭니다. 가끔은 비교하다가 구매욕이 증발합니다.",
    traits: ["스펙표와 리뷰를 오래 탐색함", "이론상 최고의 선택을 찾고 싶어함", "구매 보류로 돈이 절약되는 경우가 많음"],
    tip: "마감 시간을 정하면 분석의 품질은 유지하면서 결정 피로를 줄일 수 있습니다."
  },
  INFJ: {
    name: "의미소비 수도승",
    title: "이 소비가 내 세계관과 맞는가",
    copy: "물건의 의미, 브랜드 가치, 오래 쓸 수 있는지를 봅니다. 소비에도 나름의 철학이 있습니다.",
    traits: ["윤리적 소비와 오래 쓰는 물건에 관심", "감정적 만족과 명분을 함께 봄", "한 번 선택하면 애착이 큼"],
    tip: "의미도 중요하지만 실사용성을 체크하면 후회 없는 선택이 더 쉬워집니다."
  },
  INFP: {
    name: "통장 울리는 낭만주의자",
    title: "내 마음이 좋아한다는데 어떡해",
    copy: "감성, 취향, 위로에 돈을 쓰는 타입입니다. 작은 물건 하나로 하루를 버틸 힘을 얻습니다.",
    traits: ["굿즈, 문구, 분위기템에 약함", "스트레스 받을 때 위로 소비가 올라옴", "후회해도 물건은 귀여움"],
    tip: "위로 소비 리스트를 3만 원 이하로 만들어두면 마음도 달래고 지출도 덜 흔들립니다."
  }
};

const state = {
  index: 0,
  scores: { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 },
  currentResult: null
};

const $ = (selector) => document.querySelector(selector);

const introScreen = $("#intro-screen");
const quizScreen = $("#quiz-screen");
const resultScreen = $("#result-screen");
const progressText = $("[data-progress-text]");
const progressBar = $("[data-progress-bar]");
const axisLabel = $("[data-axis-label]");
const questionCount = $("[data-question-count]");
const questionTitle = $("[data-question-title]");
const questionSituation = $("[data-question-situation]");
const answerGrid = $("[data-answer-grid]");
const resultTitle = $("[data-result-title]");
const resultType = $("[data-result-type]");
const resultCopy = $("[data-result-copy]");
const traitList = $("[data-trait-list]");
const tipText = $("[data-tip-text]");
const rankList = $("[data-rank-list]");
const rankPreview = $("[data-rank-preview]");
const totalCount = $("[data-total-count]");
const shareNote = $("[data-share-note]");
const walletStatus = $("#wallet-status");

function showScreen(screen) {
  [introScreen, quizScreen, resultScreen].forEach((item) => item.classList.remove("is-active"));
  screen.classList.add("is-active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function startQuiz() {
  state.index = 0;
  state.scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
  shareNote.textContent = "";
  showScreen(quizScreen);
  renderQuestion();
}

function renderQuestion() {
  const question = questions[state.index];
  const current = state.index + 1;
  const progress = (current / questions.length) * 100;

  progressText.textContent = `${current} / ${questions.length}`;
  progressBar.style.width = `${progress}%`;
  axisLabel.textContent = question.label;
  questionCount.textContent = `Q${current}`;
  questionTitle.textContent = question.title;
  questionSituation.textContent = question.situation;
  answerGrid.innerHTML = "";

  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.className = "answer-button";
    button.type = "button";
    button.innerHTML = `<span aria-hidden="true">${answer.icon}</span><strong>${answer.text}</strong>`;
    button.addEventListener("click", () => chooseAnswer(answer.value));
    answerGrid.append(button);
  });
}

function chooseAnswer(value) {
  state.scores[value] += 1;
  state.index += 1;

  if (state.index >= questions.length) {
    showResult();
    return;
  }

  renderQuestion();
}

function calculateType() {
  return [
    state.scores.E >= state.scores.I ? "E" : "I",
    state.scores.S >= state.scores.N ? "S" : "N",
    state.scores.T >= state.scores.F ? "T" : "F",
    state.scores.J >= state.scores.P ? "J" : "P"
  ].join("");
}

function showResult() {
  const type = calculateType();
  const result = resultMap[type];
  state.currentResult = { type, ...result };
  saveResult(type);
  renderResult(type, result);
  renderRanking();
  showScreen(resultScreen);
}

function renderResult(type, result) {
  resultTitle.textContent = result.title;
  resultType.textContent = `${type} · ${result.name}`;
  resultCopy.textContent = result.copy;
  traitList.innerHTML = "";

  result.traits.forEach((trait) => {
    const item = document.createElement("li");
    item.textContent = trait;
    traitList.append(item);
  });

  tipText.textContent = result.tip;
  document.title = `${type} ${result.name} | 소비 성향 테스트`;
  updateMetaDescription(`${type} ${result.name}: ${result.copy}`);
}

function updateMetaDescription(content) {
  const description = document.querySelector('meta[name="description"]');
  const ogDescription = document.querySelector('meta[property="og:description"]');
  const twitterDescription = document.querySelector('meta[name="twitter:description"]');
  [description, ogDescription, twitterDescription].forEach((meta) => {
    if (meta) meta.setAttribute("content", content);
  });
}

function getStats() {
  try {
    const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}

function saveStats(stats) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(stats));
}

function saveResult(type) {
  const stats = getStats();
  stats[type] = (stats[type] || 0) + 1;
  saveStats(stats);
}

function resetStats() {
  localStorage.removeItem(STORAGE_KEY);
  renderRanking();
  walletStatus.textContent = "초기화 완료";
}

function getRankedStats() {
  const stats = getStats();
  return Object.keys(resultMap)
    .map((type) => ({
      type,
      count: stats[type] || 0,
      name: resultMap[type].name
    }))
    .sort((a, b) => b.count - a.count || a.type.localeCompare(b.type));
}

function renderRanking() {
  const ranked = getRankedStats();
  const total = ranked.reduce((sum, item) => sum + item.count, 0);
  const topFive = ranked.slice(0, 5);

  rankPreview.innerHTML = "";
  rankList.innerHTML = "";
  totalCount.textContent = `${total}회 참여`;

  const previewItems = topFive.some((item) => item.count > 0) ? topFive.slice(0, 3) : ranked.slice(0, 3);

  previewItems.forEach((item, index) => {
    rankPreview.append(createRankItem(item, index, total, true));
  });

  topFive.forEach((item, index) => {
    rankList.append(createRankItem(item, index, total, false));
  });
}

function createRankItem(item, index, total, compact) {
  const li = document.createElement("li");
  const percent = total > 0 ? Math.round((item.count / total) * 100) : 0;
  li.innerHTML = `
    <strong>${index + 1}위</strong>
    <span>${item.type} · ${item.name}<br><small>${compact ? "로컬 누적" : resultMap[item.type].title}</small></span>
    <strong>${item.count}회${total > 0 ? ` · ${percent}%` : ""}</strong>
  `;
  return li;
}

function getShareUrl() {
  const url = new URL(window.location.href);
  if (state.currentResult) {
    url.searchParams.set("type", state.currentResult.type);
  }
  return url.toString();
}

async function shareResult() {
  if (!state.currentResult) return;

  const title = `내 소비 MBTI는 ${state.currentResult.type} ${state.currentResult.name}`;
  const description = state.currentResult.copy;
  const url = getShareUrl();

  if (window.Kakao && KAKAO_JS_KEY) {
    if (!Kakao.isInitialized()) Kakao.init(KAKAO_JS_KEY);
    Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title,
        description,
        imageUrl: new URL("./og-image.svg", window.location.href).toString(),
        link: { mobileWebUrl: url, webUrl: url }
      },
      buttons: [
        {
          title: "테스트 하러가기",
          link: { mobileWebUrl: url, webUrl: url }
        }
      ]
    });
    return;
  }

  if (navigator.share) {
    await navigator.share({ title, text: description, url });
    return;
  }

  await navigator.clipboard.writeText(`${title}\n${description}\n${url}`);
  shareNote.textContent = "카카오 JavaScript 키가 없어서 링크를 복사했어요. KAKAO_JS_KEY를 넣으면 카톡 공유가 바로 작동합니다.";
}

function renderSharedResultFromQuery() {
  const params = new URLSearchParams(window.location.search);
  const type = params.get("type");

  if (!type || !resultMap[type]) return false;

  state.currentResult = { type, ...resultMap[type] };
  renderResult(type, resultMap[type]);
  renderRanking();
  showScreen(resultScreen);
  return true;
}

document.addEventListener("click", (event) => {
  const action = event.target.closest("[data-action]")?.dataset.action;
  if (!action) return;

  if (action === "start") startQuiz();
  if (action === "retry") startQuiz();
  if (action === "kakao-share") shareResult().catch(() => {
    shareNote.textContent = "공유가 잠시 삐끗했어요. 브라우저 공유나 링크 복사를 다시 시도해주세요.";
  });
  if (action === "reset-stats") resetStats();
});

renderRanking();
renderSharedResultFromQuery();
