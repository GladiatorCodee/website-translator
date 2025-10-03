// Translator Only JavaScript - Add this to your existing math website

// Translation System for Website
class WebsiteTranslator {
    constructor() {
        this.currentLanguage = 'en';
        this.isTranslating = false;
        this.translations = {};
        this.apiKey = null;
        
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.loadTranslations();
        this.detectLanguage();
    }

    setupEventListeners() {
        const translateBtn = document.getElementById('translateBtn');
        const languageSelector = document.getElementById('languageSelector');

        if (!translateBtn || !languageSelector) return;

        translateBtn.addEventListener('click', () => {
            this.toggleLanguageSelector();
        });

        // Close language selector when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.translator-container')) {
                languageSelector.classList.remove('show');
            }
        });

        // Language option clicks
        languageSelector.addEventListener('click', (e) => {
            if (e.target.classList.contains('language-option')) {
                const lang = e.target.dataset.lang;
                this.translatePage(lang);
                languageSelector.classList.remove('show');
            }
        });
    }

    toggleLanguageSelector() {
        const languageSelector = document.getElementById('languageSelector');
        if (languageSelector) {
            languageSelector.classList.toggle('show');
        }
    }

    // Pre-defined translations for common languages
    loadTranslations() {
        this.translations = {
            en: {
                // Navigation
                'nav.home': 'Home',
                'nav.calculator': 'Calculator',
                'nav.problems': 'Problems',
                'nav.solutions': 'Solutions',
                'nav.contact': 'Contact',
                
                // Hero Section
                'hero.title': 'Master Mathematics with HelpMath',
                'hero.subtitle': 'Interactive learning platform with calculators, practice problems, and step-by-step solutions to help you excel in mathematics.',
                'hero.button': 'Start Learning Now',
                
                // Math Tools
                'tools.calculator.title': 'Scientific Calculator',
                'tools.calculator.description': 'Advanced calculator with trigonometry, algebra, calculus, and statistics functions for all your mathematical needs.',
                'tools.calculator.button': 'Open Calculator',
                
                'tools.problems.title': 'Practice Problems',
                'tools.problems.description': 'Thousands of math problems from basic arithmetic to advanced calculus with instant feedback and progress tracking.',
                'tools.problems.button': 'Start Practice',
                
                'tools.solutions.title': 'Step-by-Step Solutions',
                'tools.solutions.description': 'Detailed explanations and solutions to help you understand every mathematical concept and problem-solving method.',
                'tools.solutions.button': 'View Solutions',
                
                'tools.graphing.title': 'Graphing Tools',
                'tools.graphing.description': 'Visualize mathematical functions, equations, and data with our interactive graphing calculator.',
                'tools.graphing.button': 'Create Graphs',
                
                'tools.geometry.title': 'Geometry Helper',
                'tools.geometry.description': 'Solve geometry problems with interactive shapes, measurements, and construction tools.',
                'tools.geometry.button': 'Explore Geometry',
                
                'tools.statistics.title': 'Statistics Tools',
                'tools.statistics.description': 'Analyze data with statistical functions, probability calculators, and data visualization tools.',
                'tools.statistics.button': 'Analyze Data',
                
                // Features
                'features.title': 'Why Choose HelpMath?',
                'features.interactive.title': 'Interactive Learning',
                'features.interactive.description': 'Engaging exercises and tools that adapt to your learning pace and style.',
                'features.progress.title': 'Track Your Progress',
                'features.progress.description': 'Monitor your improvement with detailed analytics and personalized reports.',
                'features.support.title': 'Expert Support',
                'features.support.description': 'Get help from math experts and join our community of learners.',
                
                // Footer
                'footer.copyright': '© 2024 HelpMath - Math Learning Platform. All rights reserved.',
                'footer.description': 'Making mathematics accessible, understandable, and enjoyable for everyone.'
            },
            es: {
                // Navigation
                'nav.home': 'Inicio',
                'nav.calculator': 'Calculadora',
                'nav.problems': 'Problemas',
                'nav.solutions': 'Soluciones',
                'nav.contact': 'Contacto',
                
                // Hero Section
                'hero.title': 'Domina las Matemáticas con HelpMath',
                'hero.subtitle': 'Plataforma de aprendizaje interactiva con calculadoras, problemas de práctica y soluciones paso a paso para ayudarte a sobresalir en matemáticas.',
                'hero.button': 'Comenzar a Aprender',
                
                // Math Tools
                'tools.calculator.title': 'Calculadora Científica',
                'tools.calculator.description': 'Calculadora avanzada con funciones de trigonometría, álgebra, cálculo y estadísticas para todas tus necesidades matemáticas.',
                'tools.calculator.button': 'Abrir Calculadora',
                
                'tools.problems.title': 'Problemas de Práctica',
                'tools.problems.description': 'Miles de problemas matemáticos desde aritmética básica hasta cálculo avanzado con retroalimentación instantánea y seguimiento de progreso.',
                'tools.problems.button': 'Comenzar Práctica',
                
                'tools.solutions.title': 'Soluciones Paso a Paso',
                'tools.solutions.description': 'Explicaciones detalladas y soluciones para ayudarte a entender cada concepto matemático y método de resolución de problemas.',
                'tools.solutions.button': 'Ver Soluciones',
                
                'tools.graphing.title': 'Herramientas de Gráficos',
                'tools.graphing.description': 'Visualiza funciones matemáticas, ecuaciones y datos con nuestra calculadora gráfica interactiva.',
                'tools.graphing.button': 'Crear Gráficos',
                
                'tools.geometry.title': 'Ayudante de Geometría',
                'tools.geometry.description': 'Resuelve problemas de geometría con formas interactivas, mediciones y herramientas de construcción.',
                'tools.geometry.button': 'Explorar Geometría',
                
                'tools.statistics.title': 'Herramientas de Estadística',
                'tools.statistics.description': 'Analiza datos con funciones estadísticas, calculadoras de probabilidad y herramientas de visualización de datos.',
                'tools.statistics.button': 'Analizar Datos',
                
                // Features
                'features.title': '¿Por qué elegir HelpMath?',
                'features.interactive.title': 'Aprendizaje Interactivo',
                'features.interactive.description': 'Ejercicios y herramientas atractivas que se adaptan a tu ritmo y estilo de aprendizaje.',
                'features.progress.title': 'Rastrea tu Progreso',
                'features.progress.description': 'Monitorea tu mejora con análisis detallados y reportes personalizados.',
                'features.support.title': 'Soporte Experto',
                'features.support.description': 'Obtén ayuda de expertos en matemáticas y únete a nuestra comunidad de estudiantes.',
                
                // Footer
                'footer.copyright': '© 2024 HelpMath - Plataforma de Aprendizaje de Matemáticas. Todos los derechos reservados.',
                'footer.description': 'Haciendo las matemáticas accesibles, comprensibles y agradables para todos.'
            },
            fr: {
                // Navigation
                'nav.home': 'Accueil',
                'nav.calculator': 'Calculatrice',
                'nav.problems': 'Problèmes',
                'nav.solutions': 'Solutions',
                'nav.contact': 'Contact',
                
                // Hero Section
                'hero.title': 'Maîtrisez les Mathématiques avec HelpMath',
                'hero.subtitle': 'Plateforme d\'apprentissage interactive avec calculatrices, problèmes d\'entraînement et solutions étape par étape pour vous aider à exceller en mathématiques.',
                'hero.button': 'Commencer à Apprendre',
                
                // Math Tools
                'tools.calculator.title': 'Calculatrice Scientifique',
                'tools.calculator.description': 'Calculatrice avancée avec fonctions de trigonométrie, algèbre, calcul et statistiques pour tous vos besoins mathématiques.',
                'tools.calculator.button': 'Ouvrir la Calculatrice',
                
                'tools.problems.title': 'Problèmes d\'Entraînement',
                'tools.problems.description': 'Des milliers de problèmes mathématiques de l\'arithmétique de base au calcul avancé avec retour instantané et suivi des progrès.',
                'tools.problems.button': 'Commencer l\'Entraînement',
                
                'tools.solutions.title': 'Solutions Étape par Étape',
                'tools.solutions.description': 'Explications détaillées et solutions pour vous aider à comprendre chaque concept mathématique et méthode de résolution de problèmes.',
                'tools.solutions.button': 'Voir les Solutions',
                
                'tools.graphing.title': 'Outils de Graphiques',
                'tools.graphing.description': 'Visualisez les fonctions mathématiques, équations et données avec notre calculatrice graphique interactive.',
                'tools.graphing.button': 'Créer des Graphiques',
                
                'tools.geometry.title': 'Assistant Géométrie',
                'tools.geometry.description': 'Résolvez les problèmes de géométrie avec des formes interactives, mesures et outils de construction.',
                'tools.geometry.button': 'Explorer la Géométrie',
                
                'tools.statistics.title': 'Outils de Statistiques',
                'tools.statistics.description': 'Analysez les données avec des fonctions statistiques, calculatrices de probabilité et outils de visualisation de données.',
                'tools.statistics.button': 'Analyser les Données',
                
                // Features
                'features.title': 'Pourquoi choisir HelpMath?',
                'features.interactive.title': 'Apprentissage Interactif',
                'features.interactive.description': 'Exercices et outils engageants qui s\'adaptent à votre rythme et style d\'apprentissage.',
                'features.progress.title': 'Suivez vos Progrès',
                'features.progress.description': 'Surveillez votre amélioration avec des analyses détaillées et des rapports personnalisés.',
                'features.support.title': 'Support Expert',
                'features.support.description': 'Obtenez de l\'aide d\'experts en mathématiques et rejoignez notre communauté d\'apprenants.',
                
                // Footer
                'footer.copyright': '© 2024 HelpMath - Plateforme d\'Apprentissage des Mathématiques. Tous droits réservés.',
                'footer.description': 'Rendre les mathématiques accessibles, compréhensibles et agréables pour tous.'
            }
        };
    }

    detectLanguage() {
        const userLang = navigator.language || navigator.userLanguage;
        const langCode = userLang.split('-')[0];
        
        if (this.translations[langCode]) {
            this.currentLanguage = langCode;
        }
    }

    async translatePage(targetLanguage) {
        if (this.isTranslating || targetLanguage === this.currentLanguage) {
            return;
        }

        this.isTranslating = true;
        this.showLoading();

        try {
            const elementsToTranslate = document.querySelectorAll('[data-translate]');
            
            for (const element of elementsToTranslate) {
                const key = element.dataset.translate;
                const text = element.textContent.trim();
                
                if (text && !element.dataset.originalText) {
                    element.dataset.originalText = text;
                }

                let translatedText;
                if (this.translations[targetLanguage] && this.translations[targetLanguage][key]) {
                    translatedText = this.translations[targetLanguage][key];
                } else {
                    translatedText = await this.translateText(text, targetLanguage);
                }

                element.textContent = translatedText;
            }

            // Update button text
            const translateText = document.querySelector('.translate-text');
            const languageNames = {
                'en': 'English',
                'es': 'Español',
                'fr': 'Français',
                'de': 'Deutsch',
                'it': 'Italiano',
                'pt': 'Português',
                'ru': 'Русский',
                'ja': '日本語',
                'ko': '한국어',
                'zh': '中文',
                'ar': 'العربية',
                'hi': 'हिन्दी'
            };

            if (translateText) {
                translateText.textContent = languageNames[targetLanguage] || targetLanguage;
            }

            this.currentLanguage = targetLanguage;
            this.updateDocumentLanguage(targetLanguage);

        } catch (error) {
            console.error('Translation error:', error);
            this.showError('Translation failed. Please try again.');
        } finally {
            this.isTranslating = false;
            this.hideLoading();
        }
    }

    async translateText(text, targetLanguage) {
        if (!text.trim()) return text;

        try {
            const response = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=auto|${targetLanguage}`);
            const data = await response.json();
            
            if (data.responseStatus === 200 && data.responseData) {
                return data.responseData.translatedText;
            }
            
            return text;
        } catch (error) {
            console.error('Translation API error:', error);
            return text;
        }
    }

    updateDocumentLanguage(lang) {
        document.documentElement.lang = lang;
        
        const rtlLanguages = ['ar', 'he', 'fa', 'ur'];
        if (rtlLanguages.includes(lang)) {
            document.documentElement.dir = 'rtl';
        } else {
            document.documentElement.dir = 'ltr';
        }
    }

    showLoading() {
        const translateBtn = document.getElementById('translateBtn');
        if (translateBtn) {
            translateBtn.classList.add('loading');
            translateBtn.disabled = true;
        }
    }

    hideLoading() {
        const translateBtn = document.getElementById('translateBtn');
        if (translateBtn) {
            translateBtn.classList.remove('loading');
            translateBtn.disabled = false;
        }
    }

    showError(message) {
        const errorDiv = document.createElement('div');
        errorDiv.style.cssText = `
            position: fixed;
            top: 80px;
            right: 20px;
            background: #ff4444;
            color: white;
            padding: 12px 20px;
            border-radius: 8px;
            z-index: 1001;
            animation: slideDown 0.3s ease;
        `;
        errorDiv.textContent = message;
        document.body.appendChild(errorDiv);

        setTimeout(() => {
            errorDiv.remove();
        }, 3000);
    }

    // Method to add new translations dynamically
    addTranslations(language, translations) {
        if (!this.translations[language]) {
            this.translations[language] = {};
        }
        
        Object.assign(this.translations[language], translations);
    }

    // Method to get current language
    getCurrentLanguage() {
        return this.currentLanguage;
    }
}

// Initialize the translator when the page loads
document.addEventListener('DOMContentLoaded', () => {
    window.websiteTranslator = new WebsiteTranslator();
    
    // Add keyboard shortcut (Ctrl+Shift+T) to toggle translation
    document.addEventListener('keydown', (e) => {
        if (e.ctrlKey && e.shiftKey && e.key === 'T') {
            e.preventDefault();
            const languageSelector = document.getElementById('languageSelector');
            if (languageSelector) {
                languageSelector.classList.toggle('show');
            }
        }
    });
});

// Export for use in other scripts if needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = WebsiteTranslator;
}
