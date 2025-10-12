// QuizMaster Pro Configuration
const QUIZ_CONFIG = {
    // API Configuration for external questions
    TRIVIA_API: 'https://opentdb.com/api.php',
    
    // Difficulty settings
    DIFFICULTY_SETTINGS: {
        easy: { time: 30, points: 5, timeBonus: 1 },
        medium: { time: 20, points: 10, timeBonus: 2 },
        hard: { time: 15, points: 15, timeBonus: 3 }
    },
    
    // Achievement system
    ACHIEVEMENTS: {
        PERFECT_SCORE: { id: 'perfect', icon: '🏆', title: 'Perfect Score!', condition: (stats) => stats.accuracy === 100 },
        SPEED_DEMON: { id: 'speed', icon: '⚡', title: 'Speed Demon!', condition: (stats) => stats.avgTime < 5 },
        STREAK_MASTER: { id: 'streak', icon: '🔥', title: 'Streak Master!', condition: (stats) => stats.maxStreak >= 5 },
        CENTURY_CLUB: { id: 'century', icon: '💯', title: 'Century Club!', condition: (stats) => stats.score >= 100 }
    },
    
    // Power-up costs and effects
    POWERUPS: {
        FIFTY_FIFTY: { cost: 0, uses: 2, effect: 'Remove 2 wrong answers' },
        SKIP: { cost: 0, uses: 1, effect: 'Skip current question' },
        EXTRA_TIME: { cost: 0, uses: 1, effect: 'Add 10 seconds' },
        HINT: { cost: 0, uses: 1, effect: 'Show question hint' }
    },
    
    // Scoring system
    SCORING: {
        BASE_POINTS: 10,
        TIME_BONUS_MULTIPLIER: 2,
        STREAK_BONUS: 5,
        DIFFICULTY_MULTIPLIER: { easy: 1, medium: 1.5, hard: 2 }
    }
};

// Export for use in main application
if (typeof module !== 'undefined' && module.exports) {
    module.exports = QUIZ_CONFIG;
}