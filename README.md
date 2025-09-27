# 🌐 Website Language Translator

A beautiful, responsive language translator for websites that supports 12+ languages with a modern UI and smooth animations.

## ✨ Features

- **12 Language Support**: English, Spanish, French, German, Italian, Portuguese, Russian, Japanese, Korean, Chinese, Arabic, Hindi
- **Beautiful UI**: Modern gradient design with smooth animations
- **Smart Translation**: Pre-defined translations + API fallback
- **RTL Support**: Automatic text direction for Arabic and other RTL languages
- **Language Detection**: Detects user's browser language preference
- **Keyboard Shortcut**: Press `Ctrl+Shift+T` to open language selector
- **Responsive Design**: Works perfectly on mobile and desktop
- **Loading States**: Visual feedback during translation
- **Error Handling**: Graceful error handling with user notifications

## 🚀 Quick Start

1. **Download the files** to your project directory
2. **Open `index.html`** in your browser
3. **Click the globe button** (🌐) in the top-right corner
4. **Select your language** and watch the magic happen!

## 📁 Project Structure

```
website-translator/
├── index.html          # Main website with sample content
├── style.css           # Beautiful styling and animations
├── translator.js       # Translation system and logic
├── demo.html           # Minimal demo page
├── package.json        # Project metadata
└── README.md           # This file
```

## 🛠️ Installation

### Option 1: Direct Integration
1. Copy the files to your project:
   - `style.css` → Your CSS directory
   - `translator.js` → Your JavaScript directory
2. Add the translator button to your HTML:
   ```html
   <link rel="stylesheet" href="style.css">
   <script src="translator.js"></script>
   ```

### Option 2: CDN Integration
```html
<!-- Add to your HTML head -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/your-username/website-translator/style.css">
<script src="https://cdn.jsdelivr.net/gh/your-username/website-translator/translator.js"></script>
```

## 🎯 Usage

### Basic Setup
Add the translator button to your HTML:
```html
<div class="translator-container">
    <button id="translateBtn" class="translate-button">
        <span class="translate-icon">🌐</span>
        <span class="translate-text">Translate</span>
    </button>
    <div class="language-selector" id="languageSelector">
        <div class="language-option" data-lang="en">English</div>
        <div class="language-option" data-lang="es">Español</div>
        <div class="language-option" data-lang="fr">Français</div>
        <!-- Add more languages as needed -->
    </div>
</div>
```

### Making Content Translatable
Add `data-translate` attributes to your HTML elements:
```html
<h1 data-translate="hero.title">Welcome to Our Website</h1>
<p data-translate="hero.subtitle">Discover amazing features</p>
<button data-translate="hero.button">Get Started</button>
```

### Adding Translations
Extend the translations object in `translator.js`:
```javascript
// Add new language
translations: {
    'de': {
        'hero.title': 'Willkommen auf unserer Website',
        'hero.subtitle': 'Entdecken Sie erstaunliche Funktionen',
        'hero.button': 'Loslegen'
    }
}
```

## 🎨 Customization

### Styling
Modify `style.css` to match your brand:
```css
.translate-button {
    background: linear-gradient(135deg, #your-color1 0%, #your-color2 100%);
    /* Customize colors, fonts, sizes, etc. */
}
```

### Adding Languages
1. Add language option to HTML:
```html
<div class="language-option" data-lang="new-lang">New Language</div>
```
2. Add translations to JavaScript:
```javascript
translations: {
    'new-lang': {
        'key': 'translated text'
    }
}
```

### API Configuration
Replace the default translation API in `translator.js`:
```javascript
async translateText(text, targetLanguage) {
    // Replace with your preferred API (Google Translate, Azure, etc.)
    const response = await fetch('your-api-endpoint', {
        method: 'POST',
        headers: { 'Authorization': 'Bearer your-api-key' },
        body: JSON.stringify({ text, targetLanguage })
    });
    return await response.json();
}
```

## 🌍 Supported Languages

| Language | Code | Status |
|----------|------|--------|
| English | en | ✅ Complete |
| Spanish | es | ✅ Complete |
| French | fr | ✅ Complete |
| German | de | 🔄 Partial |
| Italian | it | 🔄 Partial |
| Portuguese | pt | 🔄 Partial |
| Russian | ru | 🔄 Partial |
| Japanese | ja | 🔄 Partial |
| Korean | ko | 🔄 Partial |
| Chinese | zh | 🔄 Partial |
| Arabic | ar | 🔄 Partial |
| Hindi | hi | 🔄 Partial |

## ⌨️ Keyboard Shortcuts

- `Ctrl + Shift + T` - Open language selector

## 📱 Browser Support

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+
- ✅ Mobile browsers

## 🔧 API Integration

### Using Google Translate API
```javascript
async translateText(text, targetLanguage) {
    const response = await fetch('https://translation.googleapis.com/language/translate/v2', {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer YOUR_API_KEY',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            q: text,
            target: targetLanguage,
            format: 'text'
        })
    });
    const data = await response.json();
    return data.data.translations[0].translatedText;
}
```

### Using Azure Translator
```javascript
async translateText(text, targetLanguage) {
    const response = await fetch('https://api.cognitive.microsofttranslator.com/translate', {
        method: 'POST',
        headers: {
            'Ocp-Apim-Subscription-Key': 'YOUR_API_KEY',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify([{
            text: text,
            to: targetLanguage
        }])
    });
    const data = await response.json();
    return data[0].translations[0].text;
}
```

## 🐛 Troubleshooting

### Common Issues

1. **Translations not working?**
   - Check browser console for errors
   - Ensure all files are properly linked
   - Verify `data-translate` attributes are correct

2. **Styling issues?**
   - Check CSS file is loaded
   - Verify no CSS conflicts with your existing styles
   - Check responsive breakpoints

3. **API errors?**
   - Verify API key is correct
   - Check network connectivity
   - Review API rate limits

## 📄 License

MIT License - feel free to use in your projects!

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Add your translations/improvements
4. Submit a pull request

## 📞 Support

If you need help or have questions:
- Open an issue on GitHub
- Check the troubleshooting section
- Review the code comments

---

**Made with ❤️ for global accessibility**
