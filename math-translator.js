// Math Translation System for Kids - Add this to your existing MathProject5
class MathTranslator {
    constructor() {
        this.currentLanguage = 'en';
        this.isTranslating = false;
        this.translations = {};
        
        this.init();
    }

    init() {
        this.loadTranslations();
        this.setupLanguageSwitcher();
        this.detectLanguage();
    }

    // Load translations for math content for kids
    loadTranslations() {
        this.translations = {
            en: {
                // Basic Math Terms
                'math.add': 'Add',
                'math.subtract': 'Subtract',
                'math.multiply': 'Multiply',
                'math.divide': 'Divide',
                'math.equals': 'Equals',
                'math.calculate': 'Calculate',
                'math.result': 'Result',
                'math.answer': 'Answer',
                'math.question': 'Question',
                'math.problem': 'Problem',
                'math.solution': 'Solution',
                'math.correct': 'Correct!',
                'math.wrong': 'Try Again',
                'math.great': 'Great Job!',
                'math.awesome': 'Awesome!',
                'math.excellent': 'Excellent!',
                'math.perfect': 'Perfect!',
                
                // Numbers
                'numbers.one': 'One',
                'numbers.two': 'Two',
                'numbers.three': 'Three',
                'numbers.four': 'Four',
                'numbers.five': 'Five',
                'numbers.six': 'Six',
                'numbers.seven': 'Seven',
                'numbers.eight': 'Eight',
                'numbers.nine': 'Nine',
                'numbers.ten': 'Ten',
                'numbers.zero': 'Zero',
                
                // Math Operations
                'operation.addition': 'Addition',
                'operation.subtraction': 'Subtraction',
                'operation.multiplication': 'Multiplication',
                'operation.division': 'Division',
                'operation.fractions': 'Fractions',
                'operation.decimals': 'Decimals',
                'operation.geometry': 'Geometry',
                'operation.algebra': 'Algebra',
                
                // UI Elements
                'ui.start': 'Start',
                'ui.next': 'Next',
                'ui.previous': 'Previous',
                'ui.finish': 'Finish',
                'ui.retry': 'Retry',
                'ui.play': 'Play',
                'ui.pause': 'Pause',
                'ui.stop': 'Stop',
                'ui.help': 'Help',
                'ui.settings': 'Settings',
                'ui.home': 'Home',
                'ui.learn': 'Learn',
                'ui.practice': 'Practice',
                'ui.test': 'Test',
                'ui.score': 'Score',
                'ui.level': 'Level',
                'ui.time': 'Time',
                'ui.points': 'Points',
                
                // Encouragement
                'encourage.keep_going': 'Keep Going!',
                'encourage.you_can_do_it': 'You Can Do It!',
                'encourage.almost_there': 'Almost There!',
                'encourage.well_done': 'Well Done!',
                'encourage.fantastic': 'Fantastic!',
                'encourage.outstanding': 'Outstanding!',
                'encourage.bravo': 'Bravo!',
                'encourage.way_to_go': 'Way to Go!'
            },
            
            es: {
                // Basic Math Terms
                'math.add': 'Sumar',
                'math.subtract': 'Restar',
                'math.multiply': 'Multiplicar',
                'math.divide': 'Dividir',
                'math.equals': 'Igual a',
                'math.calculate': 'Calcular',
                'math.result': 'Resultado',
                'math.answer': 'Respuesta',
                'math.question': 'Pregunta',
                'math.problem': 'Problema',
                'math.solution': 'Solución',
                'math.correct': '¡Correcto!',
                'math.wrong': 'Inténtalo de Nuevo',
                'math.great': '¡Buen Trabajo!',
                'math.awesome': '¡Increíble!',
                'math.excellent': '¡Excelente!',
                'math.perfect': '¡Perfecto!',
                
                // Numbers
                'numbers.one': 'Uno',
                'numbers.two': 'Dos',
                'numbers.three': 'Tres',
                'numbers.four': 'Cuatro',
                'numbers.five': 'Cinco',
                'numbers.six': 'Seis',
                'numbers.seven': 'Siete',
                'numbers.eight': 'Ocho',
                'numbers.nine': 'Nueve',
                'numbers.ten': 'Diez',
                'numbers.zero': 'Cero',
                
                // Math Operations
                'operation.addition': 'Suma',
                'operation.subtraction': 'Resta',
                'operation.multiplication': 'Multiplicación',
                'operation.division': 'División',
                'operation.fractions': 'Fracciones',
                'operation.decimals': 'Decimales',
                'operation.geometry': 'Geometría',
                'operation.algebra': 'Álgebra',
                
                // UI Elements
                'ui.start': 'Comenzar',
                'ui.next': 'Siguiente',
                'ui.previous': 'Anterior',
                'ui.finish': 'Terminar',
                'ui.retry': 'Reintentar',
                'ui.play': 'Jugar',
                'ui.pause': 'Pausar',
                'ui.stop': 'Detener',
                'ui.help': 'Ayuda',
                'ui.settings': 'Configuración',
                'ui.home': 'Inicio',
                'ui.learn': 'Aprender',
                'ui.practice': 'Practicar',
                'ui.test': 'Examen',
                'ui.score': 'Puntuación',
                'ui.level': 'Nivel',
                'ui.time': 'Tiempo',
                'ui.points': 'Puntos',
                
                // Encouragement
                'encourage.keep_going': '¡Sigue Así!',
                'encourage.you_can_do_it': '¡Puedes Hacerlo!',
                'encourage.almost_there': '¡Casi Llegas!',
                'encourage.well_done': '¡Bien Hecho!',
                'encourage.fantastic': '¡Fantástico!',
                'encourage.outstanding': '¡Sobresaliente!',
                'encourage.bravo': '¡Bravo!',
                'encourage.way_to_go': '¡Así Se Hace!'
            },
            
            fr: {
                // Basic Math Terms
                'math.add': 'Ajouter',
                'math.subtract': 'Soustraire',
                'math.multiply': 'Multiplier',
                'math.divide': 'Diviser',
                'math.equals': 'Égal à',
                'math.calculate': 'Calculer',
                'math.result': 'Résultat',
                'math.answer': 'Réponse',
                'math.question': 'Question',
                'math.problem': 'Problème',
                'math.solution': 'Solution',
                'math.correct': 'Correct !',
                'math.wrong': 'Essaie Encore',
                'math.great': 'Bon Travail !',
                'math.awesome': 'Génial !',
                'math.excellent': 'Excellent !',
                'math.perfect': 'Parfait !',
                
                // Numbers
                'numbers.one': 'Un',
                'numbers.two': 'Deux',
                'numbers.three': 'Trois',
                'numbers.four': 'Quatre',
                'numbers.five': 'Cinq',
                'numbers.six': 'Six',
                'numbers.seven': 'Sept',
                'numbers.eight': 'Huit',
                'numbers.nine': 'Neuf',
                'numbers.ten': 'Dix',
                'numbers.zero': 'Zéro',
                
                // Math Operations
                'operation.addition': 'Addition',
                'operation.subtraction': 'Soustraction',
                'operation.multiplication': 'Multiplication',
                'operation.division': 'Division',
                'operation.fractions': 'Fractions',
                'operation.decimals': 'Décimaux',
                'operation.geometry': 'Géométrie',
                'operation.algebra': 'Algèbre',
                
                // UI Elements
                'ui.start': 'Commencer',
                'ui.next': 'Suivant',
                'ui.previous': 'Précédent',
                'ui.finish': 'Terminer',
                'ui.retry': 'Réessayer',
                'ui.play': 'Jouer',
                'ui.pause': 'Pause',
                'ui.stop': 'Arrêter',
                'ui.help': 'Aide',
                'ui.settings': 'Paramètres',
                'ui.home': 'Accueil',
                'ui.learn': 'Apprendre',
                'ui.practice': 'Pratiquer',
                'ui.test': 'Test',
                'ui.score': 'Score',
                'ui.level': 'Niveau',
                'ui.time': 'Temps',
                'ui.points': 'Points',
                
                // Encouragement
                'encourage.keep_going': 'Continue !',
                'encourage.you_can_do_it': 'Tu Peux le Faire !',
                'encourage.almost_there': 'Presque Arrivé !',
                'encourage.well_done': 'Bien Fait !',
                'encourage.fantastic': 'Fantastique !',
                'encourage.outstanding': 'Remarquable !',
                'encourage.bravo': 'Bravo !',
                'encourage.way_to_go': 'C\'est le Bon Chemin !'
            },
            
            de: {
                // Basic Math Terms
                'math.add': 'Addieren',
                'math.subtract': 'Subtrahieren',
                'math.multiply': 'Multiplizieren',
                'math.divide': 'Dividieren',
                'math.equals': 'Gleich',
                'math.calculate': 'Berechnen',
                'math.result': 'Ergebnis',
                'math.answer': 'Antwort',
                'math.question': 'Frage',
                'math.problem': 'Problem',
                'math.solution': 'Lösung',
                'math.correct': 'Richtig!',
                'math.wrong': 'Versuche es Nochmal',
                'math.great': 'Gut Gemacht!',
                'math.awesome': 'Großartig!',
                'math.excellent': 'Ausgezeichnet!',
                'math.perfect': 'Perfekt!',
                
                // Numbers
                'numbers.one': 'Eins',
                'numbers.two': 'Zwei',
                'numbers.three': 'Drei',
                'numbers.four': 'Vier',
                'numbers.five': 'Fünf',
                'numbers.six': 'Sechs',
                'numbers.seven': 'Sieben',
                'numbers.eight': 'Acht',
                'numbers.nine': 'Neun',
                'numbers.ten': 'Zehn',
                'numbers.zero': 'Null',
                
                // Math Operations
                'operation.addition': 'Addition',
                'operation.subtraction': 'Subtraktion',
                'operation.multiplication': 'Multiplikation',
                'operation.division': 'Division',
                'operation.fractions': 'Brüche',
                'operation.decimals': 'Dezimalzahlen',
                'operation.geometry': 'Geometrie',
                'operation.algebra': 'Algebra',
                
                // UI Elements
                'ui.start': 'Starten',
                'ui.next': 'Weiter',
                'ui.previous': 'Zurück',
                'ui.finish': 'Beenden',
                'ui.retry': 'Wiederholen',
                'ui.play': 'Spielen',
                'ui.pause': 'Pausieren',
                'ui.stop': 'Stoppen',
                'ui.help': 'Hilfe',
                'ui.settings': 'Einstellungen',
                'ui.home': 'Startseite',
                'ui.learn': 'Lernen',
                'ui.practice': 'Üben',
                'ui.test': 'Test',
                'ui.score': 'Punktzahl',
                'ui.level': 'Level',
                'ui.time': 'Zeit',
                'ui.points': 'Punkte',
                
                // Encouragement
                'encourage.keep_going': 'Weiter So!',
                'encourage.you_can_do_it': 'Du Kannst Das!',
                'encourage.almost_there': 'Fast Geschafft!',
                'encourage.well_done': 'Gut Gemacht!',
                'encourage.fantastic': 'Fantastisch!',
                'encourage.outstanding': 'Hervorragend!',
                'encourage.bravo': 'Bravo!',
                'encourage.way_to_go': 'So Macht Man Das!'
            }
        };
    }

    // Setup language switcher - connects to your existing language options
    setupLanguageSwitcher() {
        // Find all language buttons/links in your existing website
        const languageButtons = document.querySelectorAll('[data-lang], .language-btn, .lang-option');
        
        languageButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                const lang = button.dataset.lang || button.getAttribute('data-language') || button.textContent.toLowerCase().substring(0, 2);
                this.translatePage(lang);
            });
        });
        
        // Also listen for language select changes
        const languageSelect = document.querySelector('select[name="language"], .language-select');
        if (languageSelect) {
            languageSelect.addEventListener('change', (e) => {
                this.translatePage(e.target.value);
            });
        }
    }

    detectLanguage() {
        const userLang = navigator.language || navigator.userLanguage;
        const langCode = userLang.split('-')[0];
        
        if (this.translations[langCode]) {
            this.currentLanguage = langCode;
        }
    }

    // Main translation function
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
                
                // Save original text if not already saved
                if (text && !element.dataset.originalText) {
                    element.dataset.originalText = text;
                }

                let translatedText;
                if (this.translations[targetLanguage] && this.translations[targetLanguage][key]) {
                    translatedText = this.translations[targetLanguage][key];
                } else {
                    // Fallback to API translation for missing translations
                    translatedText = await this.translateText(text, targetLanguage);
                }

                element.textContent = translatedText;
            }

            this.currentLanguage = targetLanguage;
            this.updateDocumentLanguage(targetLanguage);
            this.saveLanguagePreference(targetLanguage);

        } catch (error) {
            console.error('Translation error:', error);
            this.showError('Translation failed. Please try again.');
        } finally {
            this.isTranslating = false;
            this.hideLoading();
        }
    }

    // API translation fallback
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
        
        // Update text direction for RTL languages
        const rtlLanguages = ['ar', 'he', 'fa', 'ur'];
        if (rtlLanguages.includes(lang)) {
            document.documentElement.dir = 'rtl';
        } else {
            document.documentElement.dir = 'ltr';
        }
    }

    saveLanguagePreference(lang) {
        localStorage.setItem('math-translator-language', lang);
    }

    loadLanguagePreference() {
        const savedLang = localStorage.getItem('math-translator-language');
        if (savedLang && this.translations[savedLang]) {
            this.currentLanguage = savedLang;
            this.translatePage(savedLang);
        }
    }

    showLoading() {
        // Add loading indicator if needed
        const loadingDiv = document.createElement('div');
        loadingDiv.id = 'translator-loading';
        loadingDiv.innerHTML = '🔄';
        loadingDiv.style.cssText = `
            position: fixed;
            top: 20px;
            left: 20px;
            z-index: 1000;
            background: white;
            padding: 10px;
            border-radius: 50%;
            box-shadow: 0 2px 10px rgba(0,0,0,0.2);
        `;
        document.body.appendChild(loadingDiv);
    }

    hideLoading() {
        const loadingDiv = document.getElementById('translator-loading');
        if (loadingDiv) {
            loadingDiv.remove();
        }
    }

    showError(message) {
        const errorDiv = document.createElement('div');
        errorDiv.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #ff4444;
            color: white;
            padding: 12px 20px;
            border-radius: 8px;
            z-index: 1001;
            font-size: 14px;
        `;
        errorDiv.textContent = message;
        document.body.appendChild(errorDiv);

        setTimeout(() => {
            errorDiv.remove();
        }, 3000);
    }

    // Method to add new translations
    addTranslations(language, newTranslations) {
        if (!this.translations[language]) {
            this.translations[language] = {};
        }
        Object.assign(this.translations[language], newTranslations);
    }

    // Method to get current language
    getCurrentLanguage() {
        return this.currentLanguage;
    }
}

// Initialize the translator when the page loads
document.addEventListener('DOMContentLoaded', () => {
    window.mathTranslator = new MathTranslator();
    
    // Load saved language preference
    window.mathTranslator.loadLanguagePreference();
});

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = MathTranslator;
}
