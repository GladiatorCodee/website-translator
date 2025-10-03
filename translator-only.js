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
                // Add your math website translations here
                'nav.home': 'Home',
                'nav.about': 'About',
                'nav.math': 'Math',
                'nav.contact': 'Contact',
                'hero.title': 'Welcome to Math Website',
                'hero.subtitle': 'Learn and practice mathematics with our interactive tools',
                'math.calculator': 'Calculator',
                'math.problems': 'Math Problems',
                'math.solutions': 'Solutions',
                'footer.copyright': '© 2024 Math Website. All rights reserved.'
            },
            es: {
                'nav.home': 'Inicio',
                'nav.about': 'Acerca de',
                'nav.math': 'Matemáticas',
                'nav.contact': 'Contacto',
                'hero.title': 'Bienvenido al Sitio de Matemáticas',
                'hero.subtitle': 'Aprende y practica matemáticas con nuestras herramientas interactivas',
                'math.calculator': 'Calculadora',
                'math.problems': 'Problemas de Matemáticas',
                'math.solutions': 'Soluciones',
                'footer.copyright': '© 2024 Sitio de Matemáticas. Todos los derechos reservados.'
            },
            fr: {
                'nav.home': 'Accueil',
                'nav.about': 'À propos',
                'nav.math': 'Mathématiques',
                'nav.contact': 'Contact',
                'hero.title': 'Bienvenue sur le Site de Mathématiques',
                'hero.subtitle': 'Apprenez et pratiquez les mathématiques avec nos outils interactifs',
                'math.calculator': 'Calculatrice',
                'math.problems': 'Problèmes de Mathématiques',
                'math.solutions': 'Solutions',
                'footer.copyright': '© 2024 Site de Mathématiques. Tous droits réservés.'
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
