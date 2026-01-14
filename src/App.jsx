import { useState } from 'react'
import StartScreen from './components/StartScreen'
import QuizScreen from './components/QuizScreen'
import ResultScreen from './components/ResultScreen'
import { getRandomQuestions, getMixedQuestions, categoryNames } from './data/questions'

function App() {
    const [screen, setScreen] = useState('start')
    const [category, setCategory] = useState(null)
    const [difficulty, setDifficulty] = useState(null)
    const [questions, setQuestions] = useState([])
    const [currentIndex, setCurrentIndex] = useState(0)
    const [correctCount, setCorrectCount] = useState(0)
    const [wrongCount, setWrongCount] = useState(0)

    const startQuiz = () => {
        let selectedQuestions
        if (category === 'mixed') {
            selectedQuestions = getMixedQuestions(difficulty, 5)
        } else {
            selectedQuestions = getRandomQuestions(category, difficulty, 5)
        }

        setQuestions(selectedQuestions)
        setCurrentIndex(0)
        setCorrectCount(0)
        setWrongCount(0)
        setScreen('quiz')
    }

    const handleAnswer = (isCorrect) => {
        if (isCorrect) {
            setCorrectCount(prev => prev + 1)
        } else {
            setWrongCount(prev => prev + 1)
        }
    }

    const nextQuestion = () => {
        if (currentIndex < questions.length - 1) {
            setCurrentIndex(prev => prev + 1)
        } else {
            setScreen('result')
        }
    }

    const restart = () => {
        setCategory(null)
        setDifficulty(null)
        setQuestions([])
        setCurrentIndex(0)
        setCorrectCount(0)
        setWrongCount(0)
        setScreen('start')
    }

    return (
        <div className="container">
            <header className="header">
                <div className="logo">🧠</div>
                <h1 className="title">AI 퀴즈 마스터</h1>
                <p className="subtitle">당신의 지식을 테스트해보세요!</p>
            </header>

            {screen === 'start' && (
                <StartScreen
                    category={category}
                    setCategory={setCategory}
                    difficulty={difficulty}
                    setDifficulty={setDifficulty}
                    onStart={startQuiz}
                />
            )}

            {screen === 'quiz' && (
                <QuizScreen
                    question={questions[currentIndex]}
                    currentIndex={currentIndex}
                    totalQuestions={questions.length}
                    correctCount={correctCount}
                    wrongCount={wrongCount}
                    onAnswer={handleAnswer}
                    onNext={nextQuestion}
                    categoryName={categoryNames[questions[currentIndex]?.category || category]}
                />
            )}

            {screen === 'result' && (
                <ResultScreen
                    correctCount={correctCount}
                    wrongCount={wrongCount}
                    totalQuestions={questions.length}
                    onRestart={restart}
                />
            )}
        </div>
    )
}

export default App
