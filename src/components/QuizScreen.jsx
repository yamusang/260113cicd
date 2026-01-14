import { useState } from 'react'

function QuizScreen({
    question,
    currentIndex,
    totalQuestions,
    correctCount,
    wrongCount,
    onAnswer,
    onNext,
    categoryName
}) {
    const [answered, setAnswered] = useState(false)
    const [selectedIndex, setSelectedIndex] = useState(null)

    const letters = ['A', 'B', 'C', 'D']
    const progress = ((currentIndex + 1) / totalQuestions) * 100

    const handleSelect = (index) => {
        if (answered) return

        setAnswered(true)
        setSelectedIndex(index)

        const isCorrect = index === question.answer
        onAnswer(isCorrect)
    }

    const handleNext = () => {
        setAnswered(false)
        setSelectedIndex(null)
        onNext()
    }

    const getButtonClass = (index) => {
        let className = 'option-btn'
        if (answered) {
            className += ' disabled'
            if (index === question.answer) {
                className += ' correct'
            }
            if (index === selectedIndex && index !== question.answer) {
                className += ' wrong'
            }
        }
        return className
    }

    const getIcon = (index) => {
        if (!answered) return ''
        if (index === question.answer) return '✓'
        if (index === selectedIndex && index !== question.answer) return '✗'
        return ''
    }

    return (
        <section className="card quiz-screen active">
            <div className="progress-section">
                <div className="progress-info">
                    <span>문제 {currentIndex + 1} / {totalQuestions}</span>
                    <span>{categoryName}</span>
                </div>
                <div className="progress-bar">
                    <div className="progress-fill" style={{ width: `${progress}%` }}></div>
                </div>
            </div>

            <div className="score-display">
                <div className="score-item">
                    <span className="score-icon">✅</span>
                    <span className="score-value">{correctCount}</span>
                </div>
                <div className="score-item">
                    <span className="score-icon">❌</span>
                    <span className="score-value">{wrongCount}</span>
                </div>
            </div>

            <div className="question-card">
                <div className="question-number">Q{currentIndex + 1}</div>
                <p className="question-text">{question.question}</p>
            </div>

            <div className="options-container">
                {question.options.map((option, index) => (
                    <button
                        key={index}
                        className={getButtonClass(index)}
                        onClick={() => handleSelect(index)}
                    >
                        <span className="option-letter">{letters[index]}</span>
                        <span className="option-text">{option}</span>
                        <span className="option-icon">{getIcon(index)}</span>
                    </button>
                ))}
            </div>

            {answered && (
                <div className="explanation show">
                    <div className="explanation-title">💡 해설</div>
                    <p className="explanation-text">{question.explanation}</p>
                </div>
            )}

            {answered && (
                <button className="next-btn show" onClick={handleNext}>
                    {currentIndex < totalQuestions - 1 ? '다음 문제' : '결과 보기'}
                </button>
            )}
        </section>
    )
}

export default QuizScreen
