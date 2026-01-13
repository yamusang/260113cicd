// AI 퀴즈 어플리케이션 - 메인 스크립트

// 상태 관리
const state = {
    category: null,
    difficulty: null,
    questions: [],
    currentIndex: 0,
    correctCount: 0,
    wrongCount: 0,
    answered: false
};

// DOM 요소
const elements = {
    startScreen: document.getElementById('startScreen'),
    quizScreen: document.getElementById('quizScreen'),
    resultScreen: document.getElementById('resultScreen'),
    startBtn: document.getElementById('startBtn'),
    nextBtn: document.getElementById('nextBtn'),
    restartBtn: document.getElementById('restartBtn'),
    questionProgress: document.getElementById('questionProgress'),
    categoryLabel: document.getElementById('categoryLabel'),
    progressFill: document.getElementById('progressFill'),
    correctScore: document.getElementById('correctScore'),
    wrongScore: document.getElementById('wrongScore'),
    questionNumber: document.getElementById('questionNumber'),
    questionText: document.getElementById('questionText'),
    optionsContainer: document.getElementById('optionsContainer'),
    explanation: document.getElementById('explanation'),
    explanationText: document.getElementById('explanationText'),
    resultEmoji: document.getElementById('resultEmoji'),
    resultTitle: document.getElementById('resultTitle'),
    resultMessage: document.getElementById('resultMessage'),
    finalCorrect: document.getElementById('finalCorrect'),
    finalWrong: document.getElementById('finalWrong'),
    finalPercent: document.getElementById('finalPercent'),
    gradeBadge: document.getElementById('gradeBadge')
};

// 카테고리 이름 매핑
const categoryNames = {
    science: '과학',
    history: '역사',
    general: '상식',
    it: 'IT',
    math: '수학',
    mixed: '랜덤'
};

// 카테고리 버튼 이벤트
document.querySelectorAll('.category-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        state.category = btn.dataset.category;
        checkStartReady();
    });
});

// 난이도 버튼 이벤트
document.querySelectorAll('.difficulty-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.difficulty-btn').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        state.difficulty = btn.dataset.difficulty;
        checkStartReady();
    });
});

// 시작 가능 여부 확인
function checkStartReady() {
    elements.startBtn.disabled = !(state.category && state.difficulty);
}

// 퀴즈 시작
elements.startBtn.addEventListener('click', startQuiz);

function startQuiz() {
    // 문제 가져오기
    if (state.category === 'mixed') {
        state.questions = getMixedQuestions(state.difficulty, 5);
    } else {
        state.questions = getRandomQuestions(state.category, state.difficulty, 5);
    }

    // 상태 초기화
    state.currentIndex = 0;
    state.correctCount = 0;
    state.wrongCount = 0;

    // 화면 전환
    elements.startScreen.classList.remove('active');
    elements.startScreen.style.display = 'none';
    elements.quizScreen.classList.add('active');
    elements.resultScreen.classList.remove('active');

    // 첫 문제 표시
    showQuestion();
}

// 문제 표시
function showQuestion() {
    const q = state.questions[state.currentIndex];
    const total = state.questions.length;

    state.answered = false;

    // 진행 상황 업데이트
    elements.questionProgress.textContent = `문제 ${state.currentIndex + 1} / ${total}`;
    elements.categoryLabel.textContent = categoryNames[q.category || state.category];
    elements.progressFill.style.width = `${((state.currentIndex + 1) / total) * 100}%`;
    elements.correctScore.textContent = state.correctCount;
    elements.wrongScore.textContent = state.wrongCount;

    // 문제 표시
    elements.questionNumber.textContent = `Q${state.currentIndex + 1}`;
    elements.questionText.textContent = q.question;

    // 선택지 생성
    const letters = ['A', 'B', 'C', 'D'];
    elements.optionsContainer.innerHTML = q.options.map((opt, i) => `
        <button class="option-btn" data-index="${i}">
            <span class="option-letter">${letters[i]}</span>
            <span class="option-text">${opt}</span>
            <span class="option-icon"></span>
        </button>
    `).join('');

    // 선택지 클릭 이벤트
    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.addEventListener('click', () => selectAnswer(parseInt(btn.dataset.index)));
    });

    // UI 초기화
    elements.explanation.classList.remove('show');
    elements.nextBtn.classList.remove('show');
}

// 답변 선택
function selectAnswer(selectedIndex) {
    if (state.answered) return;
    state.answered = true;

    const q = state.questions[state.currentIndex];
    const isCorrect = selectedIndex === q.answer;

    // 점수 업데이트
    if (isCorrect) {
        state.correctCount++;
    } else {
        state.wrongCount++;
    }

    elements.correctScore.textContent = state.correctCount;
    elements.wrongScore.textContent = state.wrongCount;

    // 버튼 상태 업데이트
    document.querySelectorAll('.option-btn').forEach((btn, i) => {
        btn.classList.add('disabled');
        if (i === q.answer) {
            btn.classList.add('correct');
            btn.querySelector('.option-icon').textContent = '✓';
        }
        if (i === selectedIndex && !isCorrect) {
            btn.classList.add('wrong');
            btn.querySelector('.option-icon').textContent = '✗';
        }
    });

    // 해설 표시
    elements.explanationText.textContent = q.explanation;
    elements.explanation.classList.add('show');

    // 다음 버튼 표시
    elements.nextBtn.textContent = state.currentIndex < state.questions.length - 1 ? '다음 문제' : '결과 보기';
    elements.nextBtn.classList.add('show');
}

// 다음 문제
elements.nextBtn.addEventListener('click', () => {
    if (state.currentIndex < state.questions.length - 1) {
        state.currentIndex++;
        showQuestion();
    } else {
        showResult();
    }
});

// 결과 표시
function showResult() {
    const total = state.questions.length;
    const percent = Math.round((state.correctCount / total) * 100);

    elements.quizScreen.classList.remove('active');
    elements.resultScreen.classList.add('active');

    // 통계
    elements.finalCorrect.textContent = state.correctCount;
    elements.finalWrong.textContent = state.wrongCount;
    elements.finalPercent.textContent = `${percent}%`;

    // 등급 및 메시지
    let emoji, title, message, grade, gradeClass;

    if (percent >= 90) {
        emoji = '🏆';
        title = '완벽해요!';
        message = '당신은 진정한 퀴즈 마스터입니다!';
        grade = 'S';
        gradeClass = 'excellent';
    } else if (percent >= 70) {
        emoji = '🎉';
        title = '훌륭해요!';
        message = '정말 잘 하셨어요!';
        grade = 'A';
        gradeClass = 'great';
    } else if (percent >= 50) {
        emoji = '👍';
        title = '좋아요!';
        message = '조금만 더 노력하면 됩니다!';
        grade = 'B';
        gradeClass = 'good';
    } else {
        emoji = '💪';
        title = '다시 도전!';
        message = '포기하지 마세요!';
        grade = 'C';
        gradeClass = 'try-again';
    }

    elements.resultEmoji.textContent = emoji;
    elements.resultTitle.textContent = title;
    elements.resultMessage.textContent = message;
    elements.gradeBadge.textContent = grade;
    elements.gradeBadge.className = `grade-badge ${gradeClass}`;
}

// 다시 시작
elements.restartBtn.addEventListener('click', () => {
    // 선택 초기화
    document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('selected'));
    document.querySelectorAll('.difficulty-btn').forEach(b => b.classList.remove('selected'));
    state.category = null;
    state.difficulty = null;
    elements.startBtn.disabled = true;

    // 화면 전환
    elements.resultScreen.classList.remove('active');
    elements.quizScreen.classList.remove('active');
    elements.startScreen.style.display = 'block';
});
