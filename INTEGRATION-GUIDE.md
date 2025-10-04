# 🔧 Integration Guide for MathProject5

## How to Add Translation Functionality to Your Existing Math Website

### 📋 What You Need to Do:

#### **Step 1: Add the Translation Files**
1. **Download these files**:
   - `math-translator.js` - Main translation functionality
   - `math-translator.css` - Basic styling (optional)

2. **Upload them to your MathProject5 repository** in the same folder as your HTML files

#### **Step 2: Add Script Tags to Your HTML**
Add these lines to your HTML file (in the `<head>` section or before closing `</body>`):

```html
<!-- Add translator CSS (optional) -->
<link rel="stylesheet" href="math-translator.css">

<!-- Add translator JavaScript (required) -->
<script src="math-translator.js"></script>
```

#### **Step 3: Add Translation Attributes to Your Content**
Add `data-translate="key"` attributes to any text you want to translate:

```html
<!-- Examples for your math website -->
<h1 data-translate="ui.learn">Learn Math</h1>
<button data-translate="math.add">Add</button>
<p data-translate="math.correct">Correct!</p>
<span data-translate="ui.score">Score: 100</span>
```

#### **Step 4: Connect Your Existing Language Options**
The translator will automatically find and connect to your existing language buttons. Make sure your language buttons have one of these attributes:

```html
<!-- Option 1: data-lang attribute -->
<button data-lang="es">Español</button>
<button data-lang="fr">Français</button>

<!-- Option 2: data-language attribute -->
<a data-language="de">Deutsch</a>

<!-- Option 3: class names -->
<button class="language-btn">English</button>
<button class="lang-option">Spanish</button>

<!-- Option 4: Select dropdown -->
<select name="language">
    <option value="en">English</option>
    <option value="es">Spanish</option>
</select>
```

### 🎯 **Translation Keys Available**

#### **Math Terms:**
- `math.add` - Add
- `math.subtract` - Subtract  
- `math.multiply` - Multiply
- `math.divide` - Divide
- `math.calculate` - Calculate
- `math.result` - Result
- `math.correct` - Correct!
- `math.wrong` - Try Again
- `math.great` - Great Job!

#### **Numbers:**
- `numbers.one` through `numbers.ten`
- `numbers.zero`

#### **UI Elements:**
- `ui.start` - Start
- `ui.next` - Next
- `ui.previous` - Previous
- `ui.help` - Help
- `ui.home` - Home
- `ui.learn` - Learn
- `ui.practice` - Practice
- `ui.score` - Score
- `ui.level` - Level

#### **Encouragement:**
- `encourage.keep_going` - Keep Going!
- `encourage.you_can_do_it` - You Can Do It!
- `encourage.well_done` - Well Done!

### 🌍 **Supported Languages**
- **English** (en)
- **Spanish** (es) 
- **French** (fr)
- **German** (de)

### 🔧 **How It Works**

1. **Automatic Detection**: The translator automatically finds your existing language buttons
2. **Smart Translation**: Uses pre-defined translations for math terms, falls back to API for other text
3. **Memory**: Remembers the user's language choice
4. **No Design Changes**: Keeps your existing website design exactly the same

### 📝 **Example Integration**

**Before (your existing HTML):**
```html
<h1>Learn Math</h1>
<button onclick="changeLanguage('spanish')">Spanish</button>
<p>Correct! Great job!</p>
```

**After (with translation attributes):**
```html
<h1 data-translate="ui.learn">Learn Math</h1>
<button data-lang="es" onclick="changeLanguage('spanish')">Spanish</button>
<p data-translate="math.correct">Correct! Great job!</p>
```

### ✅ **Testing**

1. **Open your website**
2. **Click your existing language buttons**
3. **Watch the text translate instantly**
4. **Refresh the page** - it should remember the language

### 🆘 **Troubleshooting**

**If translations don't work:**
1. Check that `math-translator.js` is loaded
2. Verify `data-translate` attributes are correct
3. Check browser console for errors
4. Make sure your language buttons have the right attributes

**If you need more languages:**
Add them to the `loadTranslations()` function in `math-translator.js`

### 🎉 **Result**
Your existing MathProject5 website will now have working translations while keeping the exact same design and functionality!
