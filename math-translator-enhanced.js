// Enhanced Math Translation System for MathProject5
class MathTranslatorEnhanced {
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

    // Load translations for your MathProject5 content
    loadTranslations() {
        this.translations = {
            en: {
                // Page titles and main content
                'page.title': 'Math Learning Platform',
                'page.main.title': 'Math Formula Explanations',
                'page.language.title': 'Language Selection',
                'page.language.current': 'Currently selected language:',
                'page.class.title': 'Class Selection',
                'page.class.select': 'Select Class:',
                'page.class.seven': 'Class 7',
                'page.class.eight': 'Class 8',
                'page.class.nine': 'Class 9',
                'page.class.ten': 'Class 10',
                'page.class.current': 'Currently selected class:',
                'page.formulas.title': 'Math Formula Explanations',
                'page.formulas.intro': 'Select a class above to see math formulas for that grade level.',
                'page.help.title': 'Need Additional Help?',
                'page.help.description': 'If you\'re having trouble understanding the formula or concept, we\'ve prepared some helpful resources for you.',
                'page.help.button': 'Didn\'t understand the formula?',
                'page.help.video.title': 'Video Explanation',
                'page.help.video.description': 'This video might help clarify the concept:',
                'page.help.video.title.content': 'Understanding Mathematical Formulas - Tutorial',
                'page.search.title': 'Search Results',
                'page.search.placeholder': 'Enter a search term above to see results.',
                'page.history.title': 'Search History',
                'page.history.description': 'Previously searched questions and answers',
                'page.history.clear': 'Clear History',
                'page.history.placeholder': 'Your search history will appear here.',
                'page.feedback.title': 'Help Us Improve',
                'page.feedback.description': 'Let us know what you couldn\'t find on our website',
                'page.feedback.placeholder': 'Please tell us what you were looking for but couldn\'t find...',
                'page.feedback.submit': 'Submit Feedback',
                'page.feedback.thankyou': 'Thank you for your feedback!',
                'page.feedback.response': 'We\'ve noted your request and will consider adding this information in future updates:',
                
                // UI Elements
                'ui.language.english': 'English',
                'ui.language.spanish': 'Español',
                'ui.language.french': 'Français',
                'ui.language.german': 'Deutsch',
                'ui.language.italian': 'Italiano',
                'ui.language.japanese': '日本語',
                'ui.language.chinese': '中文',
                'ui.search.placeholder': 'Search...',
                
                // Formula elements
                'formula.title': 'Formula Title',
                'formula.explanation': 'Formula explanation text goes here.',
                'formula.write': 'Write the formula:',
                'formula.input.placeholder': 'Write the formula here...',
                'formula.check': 'Check Answer',
                'formula.correct': 'Correct Formula:',
                
                // Math operations and terms
                'math.add': 'Add',
                'math.subtract': 'Subtract',
                'math.multiply': 'Multiply',
                'math.divide': 'Divide',
                'math.equals': 'Equals',
                'math.calculate': 'Calculate',
                'math.result': 'Result',
                'math.correct': 'Correct!',
                'math.wrong': 'Try Again',
                'math.great': 'Great Job!',
                'math.area': 'Area',
                'math.volume': 'Volume',
                'math.circumference': 'Circumference',
                'math.radius': 'Radius',
                'math.diameter': 'Diameter',
                'math.base': 'Base',
                'math.height': 'Height',
                'math.length': 'Length',
                'math.width': 'Width',
                
                // Encouragement
                'encourage.keep_going': 'Keep Going!',
                'encourage.you_can_do_it': 'You Can Do It!',
                'encourage.well_done': 'Well Done!',
                'encourage.fantastic': 'Fantastic!',
                'encourage.excellent': 'Excellent!',
                'encourage.perfect': 'Perfect!'
            },
            
            es: {
                // Page titles and main content
                'page.title': 'Plataforma de Aprendizaje de Matemáticas',
                'page.main.title': 'Explicaciones de Fórmulas Matemáticas',
                'page.language.title': 'Selección de Idioma',
                'page.language.current': 'Idioma seleccionado actualmente:',
                'page.class.title': 'Selección de Clase',
                'page.class.select': 'Seleccionar Clase:',
                'page.class.seven': 'Clase 7',
                'page.class.eight': 'Clase 8',
                'page.class.nine': 'Clase 9',
                'page.class.ten': 'Clase 10',
                'page.class.current': 'Clase seleccionada actualmente:',
                'page.formulas.title': 'Explicaciones de Fórmulas Matemáticas',
                'page.formulas.intro': 'Selecciona una clase arriba para ver las fórmulas matemáticas de ese nivel.',
                'page.help.title': '¿Necesitas Ayuda Adicional?',
                'page.help.description': 'Si tienes problemas para entender la fórmula o concepto, hemos preparado algunos recursos útiles para ti.',
                'page.help.button': '¿No entendiste la fórmula?',
                'page.help.video.title': 'Explicación en Video',
                'page.help.video.description': 'Este video podría ayudar a aclarar el concepto:',
                'page.help.video.title.content': 'Entendiendo Fórmulas Matemáticas - Tutorial',
                'page.search.title': 'Resultados de Búsqueda',
                'page.search.placeholder': 'Ingresa un término de búsqueda arriba para ver resultados.',
                'page.history.title': 'Historial de Búsqueda',
                'page.history.description': 'Preguntas y respuestas buscadas anteriormente',
                'page.history.clear': 'Limpiar Historial',
                'page.history.placeholder': 'Tu historial de búsqueda aparecerá aquí.',
                'page.feedback.title': 'Ayúdanos a Mejorar',
                'page.feedback.description': 'Déjanos saber qué no pudiste encontrar en nuestro sitio web',
                'page.feedback.placeholder': 'Por favor dinos qué estabas buscando pero no pudiste encontrar...',
                'page.feedback.submit': 'Enviar Comentarios',
                'page.feedback.thankyou': '¡Gracias por tus comentarios!',
                'page.feedback.response': 'Hemos tomado nota de tu solicitud y consideraremos agregar esta información en futuras actualizaciones:',
                
                // UI Elements
                'ui.language.english': 'English',
                'ui.language.spanish': 'Español',
                'ui.language.french': 'Français',
                'ui.language.german': 'Deutsch',
                'ui.language.italian': 'Italiano',
                'ui.language.japanese': '日本語',
                'ui.language.chinese': '中文',
                'ui.search.placeholder': 'Buscar...',
                
                // Formula elements
                'formula.title': 'Título de Fórmula',
                'formula.explanation': 'El texto de explicación de la fórmula va aquí.',
                'formula.write': 'Escribe la fórmula:',
                'formula.input.placeholder': 'Escribe la fórmula aquí...',
                'formula.check': 'Verificar Respuesta',
                'formula.correct': 'Fórmula Correcta:',
                
                // Math operations and terms
                'math.add': 'Sumar',
                'math.subtract': 'Restar',
                'math.multiply': 'Multiplicar',
                'math.divide': 'Dividir',
                'math.equals': 'Igual a',
                'math.calculate': 'Calcular',
                'math.result': 'Resultado',
                'math.correct': '¡Correcto!',
                'math.wrong': 'Inténtalo de Nuevo',
                'math.great': '¡Buen Trabajo!',
                'math.area': 'Área',
                'math.volume': 'Volumen',
                'math.circumference': 'Circunferencia',
                'math.radius': 'Radio',
                'math.diameter': 'Diámetro',
                'math.base': 'Base',
                'math.height': 'Altura',
                'math.length': 'Longitud',
                'math.width': 'Ancho',
                
                // Encouragement
                'encourage.keep_going': '¡Sigue Así!',
                'encourage.you_can_do_it': '¡Puedes Hacerlo!',
                'encourage.well_done': '¡Bien Hecho!',
                'encourage.fantastic': '¡Fantástico!',
                'encourage.excellent': '¡Excelente!',
                'encourage.perfect': '¡Perfecto!'
            },
            
            fr: {
                // Page titles and main content
                'page.title': 'Plateforme d\'Apprentissage des Mathématiques',
                'page.main.title': 'Explications de Formules Mathématiques',
                'page.language.title': 'Sélection de Langue',
                'page.language.current': 'Langue actuellement sélectionnée:',
                'page.class.title': 'Sélection de Classe',
                'page.class.select': 'Sélectionner la Classe:',
                'page.class.seven': 'Classe 7',
                'page.class.eight': 'Classe 8',
                'page.class.nine': 'Classe 9',
                'page.class.ten': 'Classe 10',
                'page.class.current': 'Classe actuellement sélectionnée:',
                'page.formulas.title': 'Explications de Formules Mathématiques',
                'page.formulas.intro': 'Sélectionnez une classe ci-dessus pour voir les formules mathématiques de ce niveau.',
                'page.help.title': 'Besoin d\'Aide Supplémentaire?',
                'page.help.description': 'Si vous avez du mal à comprendre la formule ou le concept, nous avons préparé des ressources utiles pour vous.',
                'page.help.button': 'Vous n\'avez pas compris la formule?',
                'page.help.video.title': 'Explication Vidéo',
                'page.help.video.description': 'Cette vidéo pourrait aider à clarifier le concept:',
                'page.help.video.title.content': 'Comprendre les Formules Mathématiques - Tutoriel',
                'page.search.title': 'Résultats de Recherche',
                'page.search.placeholder': 'Entrez un terme de recherche ci-dessus pour voir les résultats.',
                'page.history.title': 'Historique de Recherche',
                'page.history.description': 'Questions et réponses recherchées précédemment',
                'page.history.clear': 'Effacer l\'Historique',
                'page.history.placeholder': 'Votre historique de recherche apparaîtra ici.',
                'page.feedback.title': 'Aidez-nous à Améliorer',
                'page.feedback.description': 'Faites-nous savoir ce que vous n\'avez pas pu trouver sur notre site web',
                'page.feedback.placeholder': 'Veuillez nous dire ce que vous cherchiez mais que vous n\'avez pas pu trouver...',
                'page.feedback.submit': 'Soumettre les Commentaires',
                'page.feedback.thankyou': 'Merci pour vos commentaires!',
                'page.feedback.response': 'Nous avons noté votre demande et envisagerons d\'ajouter cette information dans les futures mises à jour:',
                
                // UI Elements
                'ui.language.english': 'English',
                'ui.language.spanish': 'Español',
                'ui.language.french': 'Français',
                'ui.language.german': 'Deutsch',
                'ui.language.italian': 'Italiano',
                'ui.language.japanese': '日本語',
                'ui.language.chinese': '中文',
                'ui.search.placeholder': 'Rechercher...',
                
                // Formula elements
                'formula.title': 'Titre de Formule',
                'formula.explanation': 'Le texte d\'explication de la formule va ici.',
                'formula.write': 'Écrivez la formule:',
                'formula.input.placeholder': 'Écrivez la formule ici...',
                'formula.check': 'Vérifier la Réponse',
                'formula.correct': 'Formule Correcte:',
                
                // Math operations and terms
                'math.add': 'Ajouter',
                'math.subtract': 'Soustraire',
                'math.multiply': 'Multiplier',
                'math.divide': 'Diviser',
                'math.equals': 'Égal à',
                'math.calculate': 'Calculer',
                'math.result': 'Résultat',
                'math.correct': 'Correct !',
                'math.wrong': 'Essaie Encore',
                'math.great': 'Bon Travail !',
                'math.area': 'Aire',
                'math.volume': 'Volume',
                'math.circumference': 'Circonférence',
                'math.radius': 'Rayon',
                'math.diameter': 'Diamètre',
                'math.base': 'Base',
                'math.height': 'Hauteur',
                'math.length': 'Longueur',
                'math.width': 'Largeur',
                
                // Encouragement
                'encourage.keep_going': 'Continue !',
                'encourage.you_can_do_it': 'Tu Peux le Faire !',
                'encourage.well_done': 'Bien Fait !',
                'encourage.fantastic': 'Fantastique !',
                'encourage.excellent': 'Excellent !',
                'encourage.perfect': 'Parfait !'
            },
            
            de: {
                // Page titles and main content
                'page.title': 'Mathematik-Lernplattform',
                'page.main.title': 'Mathematische Formelerklärungen',
                'page.language.title': 'Sprachauswahl',
                'page.language.current': 'Aktuell ausgewählte Sprache:',
                'page.class.title': 'Klassenauswahl',
                'page.class.select': 'Klasse auswählen:',
                'page.class.seven': 'Klasse 7',
                'page.class.eight': 'Klasse 8',
                'page.class.nine': 'Klasse 9',
                'page.class.ten': 'Klasse 10',
                'page.class.current': 'Aktuell ausgewählte Klasse:',
                'page.formulas.title': 'Mathematische Formelerklärungen',
                'page.formulas.intro': 'Wählen Sie oben eine Klasse aus, um mathematische Formeln für diese Klassenstufe zu sehen.',
                'page.help.title': 'Brauchen Sie zusätzliche Hilfe?',
                'page.help.description': 'Wenn Sie Schwierigkeiten haben, die Formel oder das Konzept zu verstehen, haben wir hilfreiche Ressourcen für Sie vorbereitet.',
                'page.help.button': 'Formel nicht verstanden?',
                'page.help.video.title': 'Video-Erklärung',
                'page.help.video.description': 'Dieses Video könnte helfen, das Konzept zu klären:',
                'page.help.video.title.content': 'Mathematische Formeln verstehen - Tutorial',
                'page.search.title': 'Suchergebnisse',
                'page.search.placeholder': 'Geben Sie oben einen Suchbegriff ein, um Ergebnisse zu sehen.',
                'page.history.title': 'Suchverlauf',
                'page.history.description': 'Zuvor gesuchte Fragen und Antworten',
                'page.history.clear': 'Verlauf löschen',
                'page.history.placeholder': 'Ihr Suchverlauf wird hier angezeigt.',
                'page.feedback.title': 'Helfen Sie uns zu verbessern',
                'page.feedback.description': 'Lassen Sie uns wissen, was Sie auf unserer Website nicht finden konnten',
                'page.feedback.placeholder': 'Bitte teilen Sie uns mit, wonach Sie gesucht haben, aber nicht finden konnten...',
                'page.feedback.submit': 'Feedback senden',
                'page.feedback.thankyou': 'Vielen Dank für Ihr Feedback!',
                'page.feedback.response': 'Wir haben Ihre Anfrage notiert und werden erwägen, diese Informationen in zukünftigen Updates hinzuzufügen:',
                
                // UI Elements
                'ui.language.english': 'English',
                'ui.language.spanish': 'Español',
                'ui.language.french': 'Français',
                'ui.language.german': 'Deutsch',
                'ui.language.italian': 'Italiano',
                'ui.language.japanese': '日本語',
                'ui.language.chinese': '中文',
                'ui.search.placeholder': 'Suchen...',
                
                // Formula elements
                'formula.title': 'Formeltitel',
                'formula.explanation': 'Formelerklärungstext kommt hier.',
                'formula.write': 'Schreiben Sie die Formel:',
                'formula.input.placeholder': 'Schreiben Sie die Formel hier...',
                'formula.check': 'Antwort überprüfen',
                'formula.correct': 'Korrekte Formel:',
                
                // Math operations and terms
                'math.add': 'Addieren',
                'math.subtract': 'Subtrahieren',
                'math.multiply': 'Multiplizieren',
                'math.divide': 'Dividieren',
                'math.equals': 'Gleich',
                'math.calculate': 'Berechnen',
                'math.result': 'Ergebnis',
                'math.correct': 'Richtig!',
                'math.wrong': 'Versuche es nochmal',
                'math.great': 'Gut gemacht!',
                'math.area': 'Fläche',
                'math.volume': 'Volumen',
                'math.circumference': 'Umfang',
                'math.radius': 'Radius',
                'math.diameter': 'Durchmesser',
                'math.base': 'Basis',
                'math.height': 'Höhe',
                'math.length': 'Länge',
                'math.width': 'Breite',
                
                // Encouragement
                'encourage.keep_going': 'Weiter so!',
                'encourage.you_can_do_it': 'Du kannst das!',
                'encourage.well_done': 'Gut gemacht!',
                'encourage.fantastic': 'Fantastisch!',
                'encourage.excellent': 'Ausgezeichnet!',
                'encourage.perfect': 'Perfekt!'
            }
        };
    }

    // Setup language switcher - connects to your existing language dropdown
    setupLanguageSwitcher() {
        // Find your existing language dropdown options
        const languageOptions = document.querySelectorAll('.language-dropdown li[data-lang]');
        
        languageOptions.forEach(option => {
            option.addEventListener('click', (e) => {
                const lang = option.getAttribute('data-lang');
                this.translatePage(lang);
                
                // Update the selected language display
                const languageLabel = document.querySelector('.language-label');
                if (languageLabel) {
                    languageLabel.textContent = option.textContent;
                }
                
                // Update the selected language display in the demo section
                const selectedLanguageDisplay = document.getElementById('selected-language-display');
                if (selectedLanguageDisplay) {
                    selectedLanguageDisplay.textContent = option.textContent;
                }
            });
        });
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
        // Add loading indicator
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
    window.mathTranslator = new MathTranslatorEnhanced();
    
    // Load saved language preference
    window.mathTranslator.loadLanguagePreference();
});

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = MathTranslatorEnhanced;
}
