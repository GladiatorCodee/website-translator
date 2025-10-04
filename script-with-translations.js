document.addEventListener('DOMContentLoaded', function() {
    // Search Bar Variables
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    const searchResults = document.getElementById('search-results');
    const searchHistory = document.getElementById('search-history');
    const clearHistoryButton = document.getElementById('clear-history');
    
    // Search history array to store searches
    let searchHistoryArray = JSON.parse(localStorage.getItem('searchHistory')) || [];
    
    // Sample data for search (you can replace this with your actual data)
    const searchData = [
        { title: 'Introduction to Class 7', content: 'This class covers fundamental concepts for beginners.' },
        { title: 'Class 8 Advanced Topics', content: 'Explore advanced techniques and methodologies.' },
        { title: 'Class 9 Practical Applications', content: 'Apply your knowledge in real-world scenarios.' },
        { title: 'Class 10 Final Projects', content: 'Develop comprehensive projects demonstrating mastery of all concepts.' },
        { title: 'Language Learning Resources', content: 'Resources for learning multiple languages including English, Spanish, and French.' },
        { title: 'Study Guide for Classes', content: 'Comprehensive study materials for all class levels.' },
        { title: 'Teaching Methodologies', content: 'Modern approaches to education and teaching.' }
    ];
    
    // Language Selector Variables
    const selectedLanguage = document.querySelector('.selected-language');
    const languageDropdown = document.querySelector('.language-dropdown');
    const languageLabel = document.querySelector('.language-label');
    const languageOptions = document.querySelectorAll('.language-dropdown li');
    const dropdownIcon = document.querySelector('.dropdown-icon');
    const selectedLanguageDisplay = document.getElementById('selected-language-display');
    
    // Class Selector Variables
    const classOptions = document.querySelectorAll('.class-option');
    const selectedClassDisplay = document.getElementById('selected-class-display');

    // Toggle dropdown when clicking the selected language
    selectedLanguage.addEventListener('click', function() {
        languageDropdown.classList.toggle('show');
        
        // Rotate the dropdown icon when opened/closed
        if (languageDropdown.classList.contains('show')) {
            dropdownIcon.style.transform = 'rotate(180deg)';
        } else {
            dropdownIcon.style.transform = 'rotate(0deg)';
        }
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', function(event) {
        if (!selectedLanguage.contains(event.target)) {
            languageDropdown.classList.remove('show');
            dropdownIcon.style.transform = 'rotate(0deg)';
        }
    });

    // Handle language selection - Updated to work with translator
    languageOptions.forEach(option => {
        option.addEventListener('click', function() {
            const langCode = this.getAttribute('data-lang');
            const langName = this.textContent;
            
            // Update the displayed selected language
            languageLabel.textContent = langName;
            selectedLanguageDisplay.textContent = langName;
            
            // Update active class
            languageOptions.forEach(opt => opt.classList.remove('active'));
            this.classList.add('active');
            
            // Close the dropdown
            languageDropdown.classList.remove('show');
            dropdownIcon.style.transform = 'rotate(0deg)';
            
            // Trigger language change - this will be handled by the translator
            changeLanguage(langCode, langName);
        });
    });
    
    // Function to handle language change - Updated to work with translator
    function changeLanguage(langCode, langName) {
        console.log(`Language changed to: ${langName} (${langCode})`);
        
        // Store language preference
        localStorage.setItem('preferredLanguage', langCode);
        
        // Trigger translation if translator is available
        if (window.mathTranslator) {
            window.mathTranslator.translatePage(langCode);
        }
        
        // Dispatch custom event for other parts of your application
        const event = new CustomEvent('languageChanged', { 
            detail: { language: langCode, name: langName } 
        });
        document.dispatchEvent(event);
    }
    
    // Class Selection Functionality
    classOptions.forEach(option => {
        option.addEventListener('click', function() {
            // Remove active class from all options
            classOptions.forEach(opt => opt.classList.remove('active'));
            
            // Add active class to clicked option
            this.classList.add('active');
            
            // Get class number
            const classNumber = this.getAttribute('data-class');
            
            // Update display
            selectedClassDisplay.textContent = `Class ${classNumber}`;
            
            // Handle class change
            changeClass(classNumber);
        });
    });
    
    // Function to handle class change
    function changeClass(classNumber) {
        console.log(`Class changed to: Class ${classNumber}`);
        
        // Store class preference
        localStorage.setItem('selectedClass', classNumber);
        
        // Dispatch custom event
        const event = new CustomEvent('classChanged', {
            detail: { class: classNumber }
        });
        document.dispatchEvent(event);
        
        // Load formulas for the selected class
        loadFormulas(classNumber);
    }
    
    // Math Formulas Data by Class - Enhanced with translation keys
    const mathFormulasData = {
        '7': [
            {
                title: 'Area of Rectangle',
                titleKey: 'formula.rectangle.area.title',
                explanation: 'The area of a rectangle is calculated by multiplying its length by its width.',
                explanationKey: 'formula.rectangle.area.explanation',
                correctFormula: 'A = l × w',
                variables: {
                    'A': 'area',
                    'l': 'length',
                    'w': 'width'
                }
            },
            {
                title: 'Area of Triangle',
                titleKey: 'formula.triangle.area.title',
                explanation: 'The area of a triangle is calculated by multiplying half of the base length by the height.',
                explanationKey: 'formula.triangle.area.explanation',
                correctFormula: 'A = (1/2) × b × h',
                variables: {
                    'A': 'area',
                    'b': 'base',
                    'h': 'height'
                }
            },
            {
                title: 'Circumference of Circle',
                titleKey: 'formula.circle.circumference.title',
                explanation: 'The circumference of a circle is calculated by multiplying pi (π) by the diameter, or 2 times pi (π) times the radius.',
                explanationKey: 'formula.circle.circumference.explanation',
                correctFormula: 'C = 2πr',
                variables: {
                    'C': 'circumference',
                    'π': 'pi (3.14159...)',
                    'r': 'radius'
                }
            }
        ],
        '8': [
            {
                title: 'Pythagorean Theorem',
                titleKey: 'formula.pythagorean.title',
                explanation: 'In a right-angled triangle, the square of the length of the hypotenuse equals the sum of the squares of the lengths of the other two sides.',
                explanationKey: 'formula.pythagorean.explanation',
                correctFormula: 'a² + b² = c²',
                variables: {
                    'a': 'first leg length',
                    'b': 'second leg length',
                    'c': 'hypotenuse length'
                }
            },
            {
                title: 'Simple Interest',
                titleKey: 'formula.interest.simple.title',
                explanation: 'Simple interest is calculated by multiplying the principal amount by the rate of interest and the time period.',
                explanationKey: 'formula.interest.simple.explanation',
                correctFormula: 'I = P × r × t',
                variables: {
                    'I': 'interest',
                    'P': 'principal amount',
                    'r': 'rate of interest',
                    't': 'time period'
                }
            },
            {
                title: 'Volume of Cube',
                titleKey: 'formula.cube.volume.title',
                explanation: 'The volume of a cube is calculated by cubing the length of one side.',
                explanationKey: 'formula.cube.volume.explanation',
                correctFormula: 'V = s³',
                variables: {
                    'V': 'volume',
                    's': 'side length'
                }
            }
        ],
        '9': [
            {
                title: 'Quadratic Formula',
                titleKey: 'formula.quadratic.title',
                explanation: 'The quadratic formula is used to solve a quadratic equation in the form ax² + bx + c = 0.',
                explanationKey: 'formula.quadratic.explanation',
                correctFormula: 'x = (-b ± √(b² - 4ac)) / (2a)',
                variables: {
                    'x': 'variable to solve for',
                    'a': 'coefficient of x²',
                    'b': 'coefficient of x',
                    'c': 'constant term'
                }
            },
            {
                title: 'Slope of a Line',
                titleKey: 'formula.slope.title',
                explanation: 'The slope of a line measures its steepness and is calculated using the coordinates of any two points on the line.',
                explanationKey: 'formula.slope.explanation',
                correctFormula: 'm = (y₂ - y₁) / (x₂ - x₁)',
                variables: {
                    'm': 'slope',
                    'x₁, y₁': 'coordinates of first point',
                    'x₂, y₂': 'coordinates of second point'
                }
            },
            {
                title: 'Area of a Trapezoid',
                titleKey: 'formula.trapezoid.area.title',
                explanation: 'The area of a trapezoid is calculated by multiplying the average of the parallel sides by the height.',
                explanationKey: 'formula.trapezoid.area.explanation',
                correctFormula: 'A = ((a + b) / 2) × h',
                variables: {
                    'A': 'area',
                    'a, b': 'lengths of parallel sides',
                    'h': 'height'
                }
            }
        ],
        '10': [
            {
                title: 'Distance Formula',
                titleKey: 'formula.distance.title',
                explanation: 'The distance formula calculates the distance between two points in a coordinate plane.',
                explanationKey: 'formula.distance.explanation',
                correctFormula: 'd = √((x₂ - x₁)² + (y₂ - y₁)²)',
                variables: {
                    'd': 'distance',
                    'x₁, y₁': 'coordinates of first point',
                    'x₂, y₂': 'coordinates of second point'
                }
            },
            {
                title: 'Compound Interest',
                titleKey: 'formula.interest.compound.title',
                explanation: 'Compound interest is calculated when interest is added to the principal, so that from that moment on, the interest that has been added also earns interest.',
                explanationKey: 'formula.interest.compound.explanation',
                correctFormula: 'A = P(1 + r/n)^(nt)',
                variables: {
                    'A': 'final amount',
                    'P': 'principal',
                    'r': 'annual interest rate',
                    'n': 'number of times interest applied per year',
                    't': 'time in years'
                }
            },
            {
                title: 'Volume of a Sphere',
                titleKey: 'formula.sphere.volume.title',
                explanation: 'The volume of a sphere is calculated using its radius.',
                explanationKey: 'formula.sphere.volume.explanation',
                correctFormula: 'V = (4/3)πr³',
                variables: {
                    'V': 'volume',
                    'π': 'pi (3.14159...)',
                    'r': 'radius'
                }
            }
        ]
    };
    
    // Function to load formulas based on class selection - Updated to work with translations
    function loadFormulas(classNumber) {
        const formulaContainer = document.getElementById('formula-container');
        const formulaTemplate = document.getElementById('formula-template');
        const formulaIntro = document.querySelector('.formula-intro');
        
        // Clear current formulas
        formulaContainer.innerHTML = '';
        
        // Update intro text with translation support
        const introText = `Math formulas for Class ${classNumber}:`;
        formulaIntro.textContent = introText;
        
        // Add translation attribute for dynamic content
        formulaIntro.setAttribute('data-translate', `page.formulas.intro.class.${classNumber}`);
        
        // Get formulas for the selected class
        const formulas = mathFormulasData[classNumber] || [];
        
        if (formulas.length === 0) {
            formulaContainer.innerHTML = '<p>No formulas available for this class.</p>';
            return;
        }
        
        // Create formula items
        formulas.forEach((formula, index) => {
            // Clone the template
            const formulaItem = formulaTemplate.cloneNode(true);
            formulaItem.id = `formula-${classNumber}-${index}`;
            formulaItem.classList.remove('hidden');
            
            // Set formula content with translation support
            const titleElement = formulaItem.querySelector('.formula-title');
            titleElement.textContent = formula.title;
            if (formula.titleKey) {
                titleElement.setAttribute('data-translate', formula.titleKey);
            }
            
            const explanationElement = formulaItem.querySelector('.formula-explanation p');
            explanationElement.textContent = formula.explanation;
            if (formula.explanationKey) {
                explanationElement.setAttribute('data-translate', formula.explanationKey);
            }
            
            // Set formula answer (hidden initially)
            const formulaAnswerElem = formulaItem.querySelector('.formula-math');
            formulaAnswerElem.textContent = formula.correctFormula;
            
            // Add variables explanation if available
            if (formula.variables) {
                const variablesHtml = Object.entries(formula.variables)
                    .map(([variable, description]) => `<li><strong>${variable}</strong>: ${description}</li>`)
                    .join('');
                
                const variablesList = document.createElement('div');
                variablesList.className = 'formula-variables';
                variablesList.innerHTML = `
                    <h4 data-translate="formula.variables.where">Where:</h4>
                    <ul>${variablesHtml}</ul>
                `;
                
                formulaItem.querySelector('.formula-correct-answer').appendChild(variablesList);
            }
            
            // Setup check answer button
            const checkButton = formulaItem.querySelector('.check-answer-btn');
            const formulaInput = formulaItem.querySelector('.formula-input');
            const formulaAnswer = formulaItem.querySelector('.formula-answer');
            
            checkButton.addEventListener('click', () => {
                const userInput = formulaInput.value.trim();
                
                if (userInput === '') {
                    alert('Please write the formula first.');
                    return;
                }
                
                // Always show answer after user attempts
                formulaAnswer.classList.remove('hidden');
                
                // Highlight if correct
                if (isFormulaCorrect(userInput, formula.correctFormula)) {
                    formulaInput.style.borderColor = '#4ac267';
                    formulaInput.style.backgroundColor = '#f0fff0';
                } else {
                    formulaInput.style.borderColor = '#e74c3c';
                    formulaInput.style.backgroundColor = '#fff0f0';
                }
            });
            
            // Add to container
            formulaContainer.appendChild(formulaItem);
        });
        
        // Re-translate the page if translator is available
        if (window.mathTranslator) {
            window.mathTranslator.translatePage(window.mathTranslator.getCurrentLanguage());
        }
    }
    
    // Function to check if user's formula is correct
    function isFormulaCorrect(userFormula, correctFormula) {
        // Normalize formulas by removing all spaces and converting to lowercase
        const normalizedUser = userFormula.toLowerCase().replace(/\s+/g, '');
        const normalizedCorrect = correctFormula.toLowerCase().replace(/\s+/g, '');
        
        // First check: direct match after normalization
        if (normalizedUser === normalizedCorrect) {
            return true;
        }
        
        // Second check: replace some common variations
        // For example, accept both x² and x^2, π and pi
        let modifiedUser = normalizedUser
            .replace(/\^2/g, '²')
            .replace(/\^3/g, '³')
            .replace(/pi/g, 'π')
            .replace(/\*\*/g, '^')
            .replace(/\*/g, '×')
            .replace(/x/g, '×');
        
        let modifiedCorrect = normalizedCorrect
            .replace(/\^2/g, '²')
            .replace(/\^3/g, '³')
            .replace(/pi/g, 'π')
            .replace(/\*\*/g, '^')
            .replace(/\*/g, '×')
            .replace(/x/g, '×');
        
        return modifiedUser === modifiedCorrect;
    }
    
    // Load formulas if a class is already selected
    const selectedClass = localStorage.getItem('selectedClass');
    if (selectedClass) {
        // Select the class option
        const classOption = document.querySelector(`.class-option[data-class="${selectedClass}"]`);
        if (classOption) {
            classOption.click();
        }
    }
    
    // Search functionality
    function performSearch() {
        const query = searchInput.value.toLowerCase().trim();
        
        if (query === '') {
            searchResults.innerHTML = '<p>Enter a search term above to see results.</p>';
            return;
        }
        
        // Filter the data based on the search query
        const results = searchData.filter(item => {
            return item.title.toLowerCase().includes(query) || 
                   item.content.toLowerCase().includes(query);
        });
        
        // Save to search history
        saveToHistory(query, results);
        
        // Display the results
        displaySearchResults(results, query);
    }
    
    // Display search results
    function displaySearchResults(results, query) {
        if (results.length === 0) {
            searchResults.innerHTML = `<p>No results found for "${query}".</p>`;
            return;
        }
        
        let resultsHtml = `<p>${results.length} result(s) found for "${query}":</p>`;
        
        results.forEach(item => {
            // Highlight the query in the title and content
            const highlightedTitle = highlightText(item.title, query);
            const highlightedContent = highlightText(item.content, query);
            
            resultsHtml += `
                <div class="search-result-item">
                    <h3>${highlightedTitle}</h3>
                    <p>${highlightedContent}</p>
                </div>
            `;
        });
        
        searchResults.innerHTML = resultsHtml;
    }
    
    // Highlight search query in text
    function highlightText(text, query) {
        const regex = new RegExp(`(${query})`, 'gi');
        return text.replace(regex, '<strong style="background-color: yellow;">$1</strong>');
    }
    
    // Event listeners for search
    searchButton.addEventListener('click', performSearch);
    
    // Add event listener for Enter key in search input
    searchInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            performSearch();
        }
    });
    
    // Clear history button event listener
    clearHistoryButton.addEventListener('click', clearSearchHistory);
    
    // Function to save search to history
    function saveToHistory(query, results) {
        const timestamp = new Date().toLocaleString();
        let answerText = '';
        
        if (results.length === 0) {
            answerText = `No results found for "${query}".`;
        } else {
            // Get the first result as the main answer
            answerText = results[0].content;
            
            // Add note if there are more results
            if (results.length > 1) {
                answerText += ` (+ ${results.length - 1} more results)`;
            }
        }
        
        // Create history item
        const historyItem = {
            query: query,
            answer: answerText,
            timestamp: timestamp
        };
        
        // Add to history array (limit to most recent 10)
        searchHistoryArray.unshift(historyItem);
        if (searchHistoryArray.length > 10) {
            searchHistoryArray.pop();
        }
        
        // Save to localStorage
        localStorage.setItem('searchHistory', JSON.stringify(searchHistoryArray));
        
        // Update history display
        displaySearchHistory();
    }
    
    // Function to display search history
    function displaySearchHistory() {
        if (searchHistoryArray.length === 0) {
            searchHistory.innerHTML = '<p class="no-history">Your search history will appear here.</p>';
            return;
        }
        
        let historyHtml = '';
        
        searchHistoryArray.forEach(item => {
            historyHtml += `
                <div class="search-history-item">
                    <span class="query">Q: ${item.query}</span>
                    <div class="answer">A: ${item.answer}</div>
                    <div class="time">${item.timestamp}</div>
                </div>
            `;
        });
        
        searchHistory.innerHTML = historyHtml;
    }
    
    // Function to clear search history
    function clearSearchHistory() {
        searchHistoryArray = [];
        localStorage.removeItem('searchHistory');
        displaySearchHistory();
    }
    
    // Initialize history display
    displaySearchHistory();
    
    // Feedback Form Variables
    const feedbackForm = document.getElementById('feedback-form');
    const feedbackInput = document.getElementById('feedback-input');
    const feedbackDisplay = document.getElementById('feedback-display');
    const submittedFeedback = document.getElementById('submitted-feedback');
    
    // Feedback storage array
    let feedbackArray = JSON.parse(localStorage.getItem('userFeedback')) || [];
    
    // Event listener for feedback form submission
    feedbackForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const feedbackText = feedbackInput.value.trim();
        
        if (feedbackText === '') {
            alert('Please enter your feedback before submitting.');
            return;
        }
        
        // Save feedback
        saveFeedback(feedbackText);
        
        // Show the feedback display
        displaySubmittedFeedback(feedbackText);
        
        // Clear the input
        feedbackInput.value = '';
    });
    
    // Function to save feedback
    function saveFeedback(feedbackText) {
        const timestamp = new Date().toLocaleString();
        
        // Create feedback item
        const feedbackItem = {
            text: feedbackText,
            timestamp: timestamp
        };
        
        // Add to feedback array
        feedbackArray.unshift(feedbackItem);
        
        // Save to localStorage
        localStorage.setItem('userFeedback', JSON.stringify(feedbackArray));
    }
    
    // Function to display submitted feedback
    function displaySubmittedFeedback(feedbackText) {
        submittedFeedback.textContent = feedbackText;
        feedbackDisplay.classList.remove('hidden');
    }
    
    // Help Button Variables
    const formulaHelpButton = document.getElementById('formula-help-button');
    const videoContainer = document.getElementById('video-container');
    
    // Event listener for formula help button
    formulaHelpButton.addEventListener('click', function() {
        // Toggle visibility of the video container
        if (videoContainer.classList.contains('hidden')) {
            videoContainer.classList.remove('hidden');
            
            // Smooth scroll to video container
            videoContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        } else {
            videoContainer.classList.add('hidden');
        }
    });
});
