// AI 퀴즈 문제 데이터베이스
const quizData = {
    science: {
        easy: [
            {
                question: "물의 화학식은 무엇일까요?",
                options: ["H2O", "CO2", "O2", "NaCl"],
                answer: 0,
                explanation: "물은 수소(H) 2개와 산소(O) 1개로 이루어진 H2O입니다."
            },
            {
                question: "태양계에서 가장 큰 행성은?",
                options: ["화성", "토성", "목성", "해왕성"],
                answer: 2,
                explanation: "목성은 태양계에서 가장 큰 행성으로, 지구의 약 1,300배 크기입니다."
            },
            {
                question: "식물이 광합성을 할 때 필요한 기체는?",
                options: ["산소", "질소", "이산화탄소", "수소"],
                answer: 2,
                explanation: "식물은 이산화탄소와 물, 빛을 이용해 광합성을 합니다."
            },
            {
                question: "인체에서 가장 큰 장기는?",
                options: ["심장", "간", "뇌", "피부"],
                answer: 3,
                explanation: "피부는 약 2제곱미터로 인체에서 가장 큰 장기입니다."
            },
            {
                question: "무지개는 몇 가지 색으로 이루어져 있나요?",
                options: ["5가지", "6가지", "7가지", "8가지"],
                answer: 2,
                explanation: "무지개는 빨주노초파남보 7가지 색으로 이루어져 있습니다."
            }
        ],
        medium: [
            {
                question: "DNA의 이중나선 구조를 발견한 과학자는?",
                options: ["아인슈타인", "왓슨과 크릭", "뉴턴", "다윈"],
                answer: 1,
                explanation: "1953년 왓슨과 크릭이 DNA의 이중나선 구조를 발견했습니다."
            },
            {
                question: "빛의 속도는 초속 약 몇 km인가요?",
                options: ["30만 km", "15만 km", "50만 km", "100만 km"],
                answer: 0,
                explanation: "빛의 속도는 진공에서 초속 약 299,792km (약 30만 km)입니다."
            },
            {
                question: "원소 주기율표를 만든 과학자는?",
                options: ["멘델레예프", "퀴리", "페르미", "보어"],
                answer: 0,
                explanation: "드미트리 멘델레예프가 1869년 원소 주기율표를 발명했습니다."
            },
            {
                question: "절대영도는 섭씨 몇 도인가요?",
                options: ["-100°C", "-200°C", "-273°C", "-300°C"],
                answer: 2,
                explanation: "절대영도는 -273.15°C로, 이론상 가장 낮은 온도입니다."
            },
            {
                question: "지구의 위성인 달까지의 평균 거리는?",
                options: ["약 38만 km", "약 150만 km", "약 10만 km", "약 500만 km"],
                answer: 0,
                explanation: "지구와 달 사이의 평균 거리는 약 384,400km입니다."
            }
        ],
        hard: [
            {
                question: "플랑크 상수의 단위는?",
                options: ["J·s", "m/s", "kg·m²", "N·m"],
                answer: 0,
                explanation: "플랑크 상수의 단위는 줄·초(J·s)입니다."
            },
            {
                question: "힉스 입자가 발견된 연구소는?",
                options: ["MIT", "CERN", "NASA", "KAIST"],
                answer: 1,
                explanation: "힉스 입자는 2012년 CERN의 LHC에서 발견되었습니다."
            },
            {
                question: "슈뢰딩거 방정식은 어떤 역학을 설명하나요?",
                options: ["고전역학", "양자역학", "상대성역학", "유체역학"],
                answer: 1,
                explanation: "슈뢰딩거 방정식은 양자역학의 기본 방정식입니다."
            },
            {
                question: "흑체복사 문제를 해결한 물리학자는?",
                options: ["보어", "하이젠베르크", "플랑크", "디랙"],
                answer: 2,
                explanation: "막스 플랑크가 에너지 양자화 개념으로 흑체복사 문제를 해결했습니다."
            },
            {
                question: "광전효과를 설명하여 노벨상을 받은 과학자는?",
                options: ["아인슈타인", "보어", "페르미", "러더퍼드"],
                answer: 0,
                explanation: "아인슈타인은 1921년 광전효과 설명으로 노벨 물리학상을 받았습니다."
            }
        ]
    },
    history: {
        easy: [
            {
                question: "한글을 창제한 조선의 왕은 누구인가요?",
                options: ["태조", "세종대왕", "정조", "고종"],
                answer: 1,
                explanation: "세종대왕이 1443년 한글을 창제했습니다."
            },
            {
                question: "제2차 세계대전이 끝난 해는?",
                options: ["1943년", "1944년", "1945년", "1946년"],
                answer: 2,
                explanation: "제2차 세계대전은 1945년에 종전되었습니다."
            },
            {
                question: "이집트의 유명한 피라미드가 있는 도시는?",
                options: ["카이로", "기자", "알렉산드리아", "룩소르"],
                answer: 1,
                explanation: "기자의 대피라미드는 세계 7대 불가사의 중 하나입니다."
            },
            {
                question: "대한민국이 건국된 해는?",
                options: ["1945년", "1948년", "1950년", "1953년"],
                answer: 1,
                explanation: "대한민국 정부는 1948년 8월 15일에 수립되었습니다."
            },
            {
                question: "콜럼버스가 아메리카 대륙에 도착한 해는?",
                options: ["1392년", "1442년", "1492년", "1592년"],
                answer: 2,
                explanation: "크리스토퍼 콜럼버스는 1492년에 아메리카 대륙에 도착했습니다."
            }
        ],
        medium: [
            {
                question: "프랑스 대혁명이 일어난 해는?",
                options: ["1776년", "1789년", "1804년", "1815년"],
                answer: 1,
                explanation: "프랑스 대혁명은 1789년 바스티유 감옥 습격으로 시작되었습니다."
            },
            {
                question: "임진왜란이 일어난 해는?",
                options: ["1492년", "1592년", "1692년", "1792년"],
                answer: 1,
                explanation: "임진왜란은 1592년 일본의 조선 침략으로 시작되었습니다."
            },
            {
                question: "삼국 중 가장 먼저 멸망한 나라는?",
                options: ["고구려", "백제", "신라", "가야"],
                answer: 1,
                explanation: "백제는 660년, 고구려는 668년에 멸망했습니다."
            },
            {
                question: "미국 독립선언서가 채택된 해는?",
                options: ["1774년", "1775년", "1776년", "1777년"],
                answer: 2,
                explanation: "미국 독립선언서는 1776년 7월 4일에 채택되었습니다."
            },
            {
                question: "고려를 건국한 왕은?",
                options: ["왕건", "궁예", "견훤", "왕검"],
                answer: 0,
                explanation: "왕건은 918년 고려를 건국하고 태조가 되었습니다."
            }
        ],
        hard: [
            {
                question: "로마 제국이 동서로 분열된 해는?",
                options: ["285년", "395년", "410년", "476년"],
                answer: 1,
                explanation: "395년 테오도시우스 1세 사후 로마 제국은 동서로 분열되었습니다."
            },
            {
                question: "웨스트팔리아 조약이 체결된 해는?",
                options: ["1618년", "1638년", "1648년", "1658년"],
                answer: 2,
                explanation: "1648년 웨스트팔리아 조약으로 30년 전쟁이 종결되었습니다."
            },
            {
                question: "마그나 카르타가 제정된 해는?",
                options: ["1115년", "1215년", "1315년", "1415년"],
                answer: 1,
                explanation: "마그나 카르타는 1215년 영국에서 제정된 헌장입니다."
            },
            {
                question: "동학농민운동이 일어난 해는?",
                options: ["1884년", "1894년", "1904년", "1914년"],
                answer: 1,
                explanation: "동학농민운동은 1894년에 일어났습니다."
            },
            {
                question: "청나라가 멸망하고 중화민국이 수립된 해는?",
                options: ["1908년", "1911년", "1914년", "1917년"],
                answer: 1,
                explanation: "1911년 신해혁명으로 청나라가 멸망하고 중화민국이 수립되었습니다."
            }
        ]
    },
    general: {
        easy: [
            {
                question: "올림픽은 몇 년마다 개최되나요?",
                options: ["2년", "3년", "4년", "5년"],
                answer: 2,
                explanation: "올림픽은 4년마다 개최됩니다."
            },
            {
                question: "일주일은 며칠인가요?",
                options: ["5일", "6일", "7일", "8일"],
                answer: 2,
                explanation: "일주일은 7일입니다."
            },
            {
                question: "피아노의 백건은 총 몇 개인가요?",
                options: ["36개", "52개", "88개", "108개"],
                answer: 1,
                explanation: "피아노는 52개의 백건과 36개의 흑건, 총 88개의 건반이 있습니다."
            },
            {
                question: "지구에서 가장 높은 산은?",
                options: ["K2", "에베레스트", "킬리만자로", "몽블랑"],
                answer: 1,
                explanation: "에베레스트는 해발 8,848m로 지구에서 가장 높은 산입니다."
            },
            {
                question: "세계에서 가장 인구가 많은 나라는?",
                options: ["미국", "인도", "중국", "러시아"],
                answer: 1,
                explanation: "2023년 기준 인도가 중국을 넘어 가장 인구가 많은 나라가 되었습니다."
            }
        ],
        medium: [
            {
                question: "세계에서 가장 큰 사막은?",
                options: ["사하라 사막", "남극 사막", "고비 사막", "칼라하리 사막"],
                answer: 1,
                explanation: "남극 사막은 약 1,400만 km²로 가장 큰 사막입니다."
            },
            {
                question: "UN 본부가 위치한 도시는?",
                options: ["워싱턴 D.C.", "뉴욕", "제네바", "파리"],
                answer: 1,
                explanation: "UN 본부는 미국 뉴욕 맨해튼에 위치해 있습니다."
            },
            {
                question: "세계에서 가장 긴 강은?",
                options: ["아마존 강", "나일 강", "양쯔 강", "미시시피 강"],
                answer: 1,
                explanation: "나일 강은 약 6,650km로 세계에서 가장 긴 강입니다."
            },
            {
                question: "FIFA 월드컵은 몇 년마다 개최되나요?",
                options: ["2년", "3년", "4년", "5년"],
                answer: 2,
                explanation: "FIFA 월드컵은 4년마다 개최됩니다."
            },
            {
                question: "세계에서 가장 작은 국가는?",
                options: ["모나코", "바티칸", "산마리노", "리히텐슈타인"],
                answer: 1,
                explanation: "바티칸 시국은 면적 0.44km²로 가장 작은 국가입니다."
            }
        ],
        hard: [
            {
                question: "노벨상이 처음 수여된 해는?",
                options: ["1895년", "1901년", "1905년", "1910년"],
                answer: 1,
                explanation: "첫 번째 노벨상은 1901년에 수여되었습니다."
            },
            {
                question: "국제 단위계(SI)의 기본 단위 개수는?",
                options: ["5개", "6개", "7개", "8개"],
                answer: 2,
                explanation: "SI 기본 단위는 미터, 킬로그램, 초, 암페어, 켈빈, 몰, 칸델라 7개입니다."
            },
            {
                question: "세계 최초의 인쇄 성경(구텐베르크 성경)이 인쇄된 해는?",
                options: ["1355년", "1455년", "1555년", "1655년"],
                answer: 1,
                explanation: "구텐베르크 성경은 1455년경에 인쇄되었습니다."
            },
            {
                question: "체스판의 칸 수는 총 몇 개인가요?",
                options: ["36칸", "49칸", "64칸", "81칸"],
                answer: 2,
                explanation: "체스판은 8x8 = 64칸으로 이루어져 있습니다."
            },
            {
                question: "세계 7대 불가사의 중 현존하는 것은?",
                options: ["로도스의 거상", "기자의 대피라미드", "바빌론의 공중정원", "올림피아의 제우스상"],
                answer: 1,
                explanation: "고대 7대 불가사의 중 기자의 대피라미드만 현존합니다."
            }
        ]
    },
    it: {
        easy: [
            {
                question: "HTML은 무엇의 약자인가요?",
                options: ["HyperText Markup Language", "High Tech Modern Language", "Home Tool Markup Language", "HyperText Machine Language"],
                answer: 0,
                explanation: "HTML은 HyperText Markup Language의 약자입니다."
            },
            {
                question: "현재 가장 널리 사용되는 모바일 운영체제 2개는?",
                options: ["Windows, macOS", "Android, iOS", "Linux, Ubuntu", "Chrome OS, Fire OS"],
                answer: 1,
                explanation: "모바일에서는 Android와 iOS가 가장 널리 사용됩니다."
            },
            {
                question: "1 바이트(Byte)는 몇 비트(bit)인가요?",
                options: ["4비트", "8비트", "16비트", "32비트"],
                answer: 1,
                explanation: "1 바이트는 8비트입니다."
            },
            {
                question: "인터넷 주소 체계를 무엇이라고 하나요?",
                options: ["HTTP", "URL", "FTP", "DNS"],
                answer: 1,
                explanation: "URL(Uniform Resource Locator)은 인터넷 주소 체계입니다."
            },
            {
                question: "CPU의 역할은 무엇인가요?",
                options: ["데이터 저장", "연산 및 제어", "그래픽 처리", "네트워크 연결"],
                answer: 1,
                explanation: "CPU(중앙처리장치)는 컴퓨터의 연산과 제어를 담당합니다."
            }
        ],
        medium: [
            {
                question: "Python 언어를 만든 사람은?",
                options: ["제임스 고슬링", "귀도 반 로섬", "브렌던 아이크", "데니스 리치"],
                answer: 1,
                explanation: "Python은 귀도 반 로섬이 1991년에 개발했습니다."
            },
            {
                question: "Git은 누가 만들었나요?",
                options: ["빌 게이츠", "리누스 토르발스", "스티브 잡스", "마크 저커버그"],
                answer: 1,
                explanation: "Git은 리눅스 커널 개발자 리누스 토르발스가 2005년에 개발했습니다."
            },
            {
                question: "IPv4 주소의 비트 수는?",
                options: ["16비트", "32비트", "64비트", "128비트"],
                answer: 1,
                explanation: "IPv4는 32비트 주소 체계를 사용합니다."
            },
            {
                question: "JavaScript가 처음 개발된 회사는?",
                options: ["Microsoft", "Google", "Netscape", "Apple"],
                answer: 2,
                explanation: "JavaScript는 1995년 Netscape의 브렌던 아이크가 개발했습니다."
            },
            {
                question: "SQL에서 데이터를 조회하는 명령어는?",
                options: ["INSERT", "UPDATE", "DELETE", "SELECT"],
                answer: 3,
                explanation: "SELECT는 데이터베이스에서 데이터를 조회하는 명령어입니다."
            }
        ],
        hard: [
            {
                question: "TCP/IP 모델의 계층 수는?",
                options: ["3개", "4개", "5개", "7개"],
                answer: 1,
                explanation: "TCP/IP 모델은 4개 계층(링크, 인터넷, 전송, 응용)으로 구성됩니다."
            },
            {
                question: "Big-O 표기법에서 O(1)의 의미는?",
                options: ["선형 시간", "상수 시간", "로그 시간", "이차 시간"],
                answer: 1,
                explanation: "O(1)은 입력 크기와 관계없이 일정한 상수 시간을 의미합니다."
            },
            {
                question: "HTTP 상태 코드 404는 무엇을 의미하나요?",
                options: ["서버 오류", "요청 성공", "리다이렉션", "페이지 없음"],
                answer: 3,
                explanation: "404는 'Not Found'로 요청한 리소스를 찾을 수 없음을 의미합니다."
            },
            {
                question: "RESTful API에서 리소스를 삭제하는 HTTP 메서드는?",
                options: ["GET", "POST", "PUT", "DELETE"],
                answer: 3,
                explanation: "DELETE 메서드는 리소스 삭제에 사용됩니다."
            },
            {
                question: "Docker의 핵심 개념인 '컨테이너'의 특징은?",
                options: ["물리적 서버 분리", "가상 머신과 동일", "프로세스 격리", "GPU 전용"],
                answer: 2,
                explanation: "Docker 컨테이너는 프로세스 수준의 격리를 제공합니다."
            }
        ]
    },
    math: {
        easy: [
            {
                question: "원의 둘레를 구하는 공식은?",
                options: ["πr²", "2πr", "4r", "πr"],
                answer: 1,
                explanation: "원의 둘레는 2πr (또는 πd)입니다."
            },
            {
                question: "1에서 10까지 자연수의 합은?",
                options: ["45", "50", "55", "60"],
                answer: 2,
                explanation: "1+2+3+...+10 = 55입니다."
            },
            {
                question: "삼각형의 내각의 합은?",
                options: ["90°", "180°", "270°", "360°"],
                answer: 1,
                explanation: "삼각형의 세 내각의 합은 항상 180°입니다."
            },
            {
                question: "2의 10제곱은?",
                options: ["512", "1024", "2048", "4096"],
                answer: 1,
                explanation: "2¹⁰ = 1024입니다."
            },
            {
                question: "피타고라스 정리에서 빗변의 제곱은?",
                options: ["다른 두 변의 합", "다른 두 변의 곱", "다른 두 변 제곱의 합", "다른 두 변 제곱의 곱"],
                answer: 2,
                explanation: "a² + b² = c² (c는 빗변)입니다."
            }
        ],
        medium: [
            {
                question: "원주율 π의 값은 약?",
                options: ["2.14159", "3.14159", "4.14159", "5.14159"],
                answer: 1,
                explanation: "π ≈ 3.14159265...입니다."
            },
            {
                question: "로그의 정의에서 log₁₀(100)은?",
                options: ["1", "2", "10", "100"],
                answer: 1,
                explanation: "10² = 100이므로 log₁₀(100) = 2입니다."
            },
            {
                question: "이차방정식의 근의 공식에서 판별식 D는?",
                options: ["b² - 4ac", "b² + 4ac", "a² - 4bc", "c² - 4ab"],
                answer: 0,
                explanation: "판별식 D = b² - 4ac입니다."
            },
            {
                question: "n! (n 팩토리얼)의 정의는?",
                options: ["n × n", "n + (n-1) + ... + 1", "n × (n-1) × ... × 1", "nⁿ"],
                answer: 2,
                explanation: "n! = n × (n-1) × (n-2) × ... × 2 × 1입니다."
            },
            {
                question: "sin²θ + cos²θ의 값은?",
                options: ["0", "1", "2", "θ"],
                answer: 1,
                explanation: "삼각함수의 기본 항등식: sin²θ + cos²θ = 1입니다."
            }
        ],
        hard: [
            {
                question: "자연상수 e의 값은 약?",
                options: ["1.71828", "2.71828", "3.71828", "4.71828"],
                answer: 1,
                explanation: "e ≈ 2.71828...입니다."
            },
            {
                question: "피보나치 수열에서 1, 1, 2, 3, 5 다음 수는?",
                options: ["6", "7", "8", "9"],
                answer: 2,
                explanation: "3 + 5 = 8입니다. 피보나치 수열은 앞 두 수의 합이 다음 수가 됩니다."
            },
            {
                question: "허수 i²의 값은?",
                options: ["1", "-1", "i", "-i"],
                answer: 1,
                explanation: "허수 i는 i² = -1로 정의됩니다."
            },
            {
                question: "무한등비급수 1 + 1/2 + 1/4 + 1/8 + ...의 합은?",
                options: ["1", "2", "3", "무한대"],
                answer: 1,
                explanation: "첫째항 1, 공비 1/2인 무한등비급수의 합은 1/(1-1/2) = 2입니다."
            },
            {
                question: "오일러 공식 e^(iπ) + 1의 값은?",
                options: ["-1", "0", "1", "i"],
                answer: 1,
                explanation: "오일러 공식에 따르면 e^(iπ) = -1이므로 e^(iπ) + 1 = 0입니다."
            }
        ]
    }
};

// 문제 랜덤 선택 함수
function getRandomQuestions(category, difficulty, count = 10) {
    const questions = quizData[category][difficulty];
    const shuffled = [...questions].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, Math.min(count, shuffled.length));
}

// 전체 카테고리에서 랜덤 문제 선택
function getMixedQuestions(difficulty, count = 10) {
    const allQuestions = [];
    Object.keys(quizData).forEach(category => {
        allQuestions.push(...quizData[category][difficulty].map(q => ({...q, category})));
    });
    const shuffled = allQuestions.sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
}
