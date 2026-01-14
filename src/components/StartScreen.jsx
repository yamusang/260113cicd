function StartScreen({ category, setCategory, difficulty, setDifficulty, onStart }) {
    const categories = [
        { id: 'science', icon: '🔬', name: '과학' },
        { id: 'history', icon: '📜', name: '역사' },
        { id: 'general', icon: '🌍', name: '상식' },
        { id: 'it', icon: '💻', name: 'IT' },
        { id: 'math', icon: '📐', name: '수학' },
        { id: 'mixed', icon: '🎲', name: '랜덤' }
    ]

    const difficulties = [
        { id: 'easy', label: '쉬움', className: 'easy' },
        { id: 'medium', label: '보통', className: 'medium' },
        { id: 'hard', label: '어려움', className: 'hard' }
    ]

    return (
        <section className="card start-screen">
            <div className="category-section">
                <h2 className="section-title">카테고리 선택</h2>
                <div className="category-grid">
                    {categories.map(cat => (
                        <button
                            key={cat.id}
                            className={`category-btn ${category === cat.id ? 'selected' : ''}`}
                            onClick={() => setCategory(cat.id)}
                        >
                            <span className="category-icon">{cat.icon}</span>
                            <span className="category-name">{cat.name}</span>
                        </button>
                    ))}
                </div>
            </div>

            <div className="difficulty-section">
                <h2 className="section-title">난이도 선택</h2>
                <div className="difficulty-grid">
                    {difficulties.map(diff => (
                        <button
                            key={diff.id}
                            className={`difficulty-btn ${diff.className} ${difficulty === diff.id ? 'selected' : ''}`}
                            onClick={() => setDifficulty(diff.id)}
                        >
                            {diff.label}
                        </button>
                    ))}
                </div>
            </div>

            <button
                className="start-btn"
                disabled={!category || !difficulty}
                onClick={onStart}
            >
                퀴즈 시작하기
            </button>
        </section>
    )
}

export default StartScreen
