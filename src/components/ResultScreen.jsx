function ResultScreen({ correctCount, wrongCount, totalQuestions, onRestart }) {
    const percent = Math.round((correctCount / totalQuestions) * 100)

    let emoji, title, message, grade, gradeClass

    if (percent >= 90) {
        emoji = '🏆'
        title = '완벽해요!'
        message = '당신은 진정한 퀴즈 마스터입니다!'
        grade = 'S'
        gradeClass = 'excellent'
    } else if (percent >= 70) {
        emoji = '🎉'
        title = '훌륭해요!'
        message = '정말 잘 하셨어요!'
        grade = 'A'
        gradeClass = 'great'
    } else if (percent >= 50) {
        emoji = '👍'
        title = '좋아요!'
        message = '조금만 더 노력하면 됩니다!'
        grade = 'B'
        gradeClass = 'good'
    } else {
        emoji = '💪'
        title = '다시 도전!'
        message = '포기하지 마세요!'
        grade = 'C'
        gradeClass = 'try-again'
    }

    return (
        <section className="card result-screen active">
            <div className="result-emoji">{emoji}</div>
            <h2 className="result-title">{title}</h2>
            <p className="result-message">{message}</p>

            <div className="result-stats">
                <div className="stat-card">
                    <div className="stat-value correct">{correctCount}</div>
                    <div className="stat-label">정답</div>
                </div>
                <div className="stat-card">
                    <div className="stat-value wrong">{wrongCount}</div>
                    <div className="stat-label">오답</div>
                </div>
                <div className="stat-card">
                    <div className="stat-value percent">{percent}%</div>
                    <div className="stat-label">정답률</div>
                </div>
            </div>

            <div className={`grade-badge ${gradeClass}`}>{grade}</div>

            <button className="restart-btn" onClick={onRestart}>
                다시 도전하기
            </button>
        </section>
    )
}

export default ResultScreen
