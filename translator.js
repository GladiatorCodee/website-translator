// Translation System for Website
class WebsiteTranslator {
    constructor() {
        this.currentLanguage = 'en';
        this.isTranslating = false;
        this.translations = {};
        this.apiKey = null; // You can add your API key here
        
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
        languageSelector.classList.toggle('show');
    }

    // Pre-defined translations for common languages
    loadTranslations() {
        this.translations = {
            en: {
                'nav.home': 'Home',
                'nav.about': 'About',
                'nav.services': 'Services',
                'nav.contact': 'Contact',
                'hero.title': 'Welcome to Our Amazing Website',
                'hero.subtitle': 'Discover the best services and solutions for your business needs. We provide innovative solutions that help you grow.',
                'hero.button': 'Get Started',
                'features.title': 'Our Features',
                'features.card1.title': 'Fast Performance',
                'features.card1.description': 'Our platform is optimized for speed and efficiency, ensuring the best user experience.',
                'features.card2.title': 'Secure & Reliable',
                'features.card2.description': 'Your data is protected with enterprise-grade security measures and 99.9% uptime guarantee.',
                'features.card3.title': 'Easy to Use',
                'features.card3.description': 'Intuitive interface designed for users of all skill levels with comprehensive documentation.',
                'about.title': 'About Us',
                'about.description': 'We are a team of passionate developers and designers dedicated to creating exceptional digital experiences. Our mission is to help businesses thrive in the digital world through innovative technology solutions.',
                'contact.title': 'Get in Touch',
                'contact.form.name': 'Name',
                'contact.form.email': 'Email',
                'contact.form.message': 'Message',
                'contact.form.submit': 'Send Message',
                'footer.copyright': '© 2024 MyWebsite. All rights reserved.'
            },
            es: {
                'nav.home': 'Inicio',
                'nav.about': 'Acerca de',
                'nav.services': 'Servicios',
                'nav.contact': 'Contacto',
                'hero.title': 'Bienvenido a Nuestro Sitio Web Increíble',
                'hero.subtitle': 'Descubre los mejores servicios y soluciones para las necesidades de tu negocio. Proporcionamos soluciones innovadoras que te ayudan a crecer.',
                'hero.button': 'Comenzar',
                'features.title': 'Nuestras Características',
                'features.card1.title': 'Rendimiento Rápido',
                'features.card1.description': 'Nuestra plataforma está optimizada para velocidad y eficiencia, garantizando la mejor experiencia de usuario.',
                'features.card2.title': 'Seguro y Confiable',
                'features.card2.description': 'Tus datos están protegidos con medidas de seguridad de nivel empresarial y garantía de disponibilidad del 99.9%.',
                'features.card3.title': 'Fácil de Usar',
                'features.card3.description': 'Interfaz intuitiva diseñada para usuarios de todos los niveles con documentación completa.',
                'about.title': 'Acerca de Nosotros',
                'about.description': 'Somos un equipo de desarrolladores y diseñadores apasionados dedicados a crear experiencias digitales excepcionales. Nuestra misión es ayudar a las empresas a prosperar en el mundo digital a través de soluciones tecnológicas innovadoras.',
                'contact.title': 'Ponte en Contacto',
                'contact.form.name': 'Nombre',
                'contact.form.email': 'Correo Electrónico',
                'contact.form.message': 'Mensaje',
                'contact.form.submit': 'Enviar Mensaje',
                'footer.copyright': '© 2024 MiSitioWeb. Todos los derechos reservados.'
            },
            fr: {
                'nav.home': 'Accueil',
                'nav.about': 'À propos',
                'nav.services': 'Services',
                'nav.contact': 'Contact',
                'hero.title': 'Bienvenue sur Notre Site Web Incroyable',
                'hero.subtitle': 'Découvrez les meilleurs services et solutions pour les besoins de votre entreprise. Nous fournissons des solutions innovantes qui vous aident à grandir.',
                'hero.button': 'Commencer',
                'features.title': 'Nos Fonctionnalités',
                'features.card1.title': 'Performance Rapide',
                'features.card1.description': 'Notre plateforme est optimisée pour la vitesse et l\'efficacité, garantissant la meilleure expérience utilisateur.',
                'features.card2.title': 'Sécurisé et Fiable',
                'features.card2.description': 'Vos données sont protégées par des mesures de sécurité de niveau entreprise et une garantie de disponibilité de 99,9%.',
                'features.card3.title': 'Facile à Utiliser',
                'features.card3.description': 'Interface intuitive conçue pour les utilisateurs de tous niveaux avec une documentation complète.',
                'about.title': 'À Propos de Nous',
                'about.description': 'Nous sommes une équipe de développeurs et de designers passionnés dédiés à créer des expériences numériques exceptionnelles. Notre mission est d\'aider les entreprises à prospérer dans le monde numérique grâce à des solutions technologiques innovantes.',
                'contact.title': 'Entrer en Contact',
                'contact.form.name': 'Nom',
                'contact.form.email': 'E-mail',
                'contact.form.message': 'Message',
                'contact.form.submit': 'Envoyer le Message',
                'footer.copyright': '© 2024 MonSiteWeb. Tous droits réservés.'
            }
        };
    }

    detectLanguage() {
        // Try to detect user's preferred language
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
            // Get all elements with translation keys
            const elementsToTranslate = document.querySelectorAll('[data-translate]');
            
            for (const element of elementsToTranslate) {
                const key = element.dataset.translate;
                const text = element.textContent.trim();
                
                if (text && !element.dataset.originalText) {
                    element.dataset.originalText = text;
                }

                // Use pre-defined translation or API translation
                let translatedText;
                if (this.translations[targetLanguage] && this.translations[targetLanguage][key]) {
                    translatedText = this.translations[targetLanguage][key];
                } else {
                    // Fallback to API translation for missing translations
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
        // For demo purposes, we'll use a simple translation service
        // In production, you'd use Google Translate API, Azure Translator, etc.
        
        if (!text.trim()) return text;

        try {
            // Using a free translation service (you can replace with your preferred API)
            const response = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=auto|${targetLanguage}`);
            const data = await response.json();
            
            if (data.responseStatus === 200 && data.responseData) {
                return data.responseData.translatedText;
            }
            
            // Fallback: return original text if translation fails
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

    showLoading() {
        const translateBtn = document.getElementById('translateBtn');
        translateBtn.classList.add('loading');
        translateBtn.disabled = true;
    }

    hideLoading() {
        const translateBtn = document.getElementById('translateBtn');
        translateBtn.classList.remove('loading');
        translateBtn.disabled = false;
    }

    showError(message) {
        // Create a temporary error message
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

        // Remove after 3 seconds
        setTimeout(() => {
            errorDiv.remove();
        }, 3000);
    }

    // Method to reset to original language
    resetToOriginal() {
        const elementsToTranslate = document.querySelectorAll('[data-translate]');
        
        for (const element of elementsToTranslate) {
            const originalText = element.dataset.originalText;
            if (originalText) {
                element.textContent = originalText;
            }
        }

        this.currentLanguage = 'en';
        this.updateDocumentLanguage('en');
        
        const translateText = document.querySelector('.translate-text');
        if (translateText) {
            translateText.textContent = 'Translate';
        }
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
            languageSelector.classList.toggle('show');
        }
    });
});

// Export for use in other scripts if needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = WebsiteTranslator;
}

