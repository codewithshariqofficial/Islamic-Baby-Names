 // Islamic baby names database (expanded)
        const islamicNames = [
            // Boys names starting with H
            {name: "Hasan", meaning: "Handsome, good", gender: "boy"},
            {name: "Husain", meaning: "Beautiful, handsome", gender: "boy"},
            {name: "Hamza", meaning: "Strong, steadfast", gender: "boy"},
            {name: "Haris", meaning: "Guardian, protector", gender: "boy"},
            {name: "Hadi", meaning: "Guide to righteousness", gender: "boy"},
            {name: "Hammad", meaning: "One who praises Allah", gender: "boy"},
            {name: "Hazim", meaning: "Firm, decisive", gender: "boy"},
            {name: "Hisham", meaning: "Generosity", gender: "boy"},
            {name: "Huzaifa", meaning: "Little holder", gender: "boy"},
            {name: "Hakim", meaning: "Wise, judicious", gender: "boy"},
            {name: "Hani", meaning: "Happy, delighted", gender: "boy"},
            {name: "Haitham", meaning: "Young eagle", gender: "boy"},
            {name: "Hassan", meaning: "Handsome, good", gender: "boy"},
            {name: "Hatim", meaning: "Judge, decisive", gender: "boy"},
            {name: "Haytham", meaning: "Young eagle", gender: "boy"},
            {name: "Hisham", meaning: "Generosity", gender: "boy"},
            {name: "Hudhayfah", meaning: "Short stature", gender: "boy"},
            {name: "Husam", meaning: "Sword", gender: "boy"},
            {name: "Hussam", meaning: "Sharp sword", gender: "boy"},
            {name: "Hadi", meaning: "Guide", gender: "boy"},
            
            // Girls names starting with H
            {name: "Huda", meaning: "Guidance from Allah", gender: "girl"},
            {name: "Hafsa", meaning: "Lioness, young lion", gender: "girl"},
            {name: "Halima", meaning: "Gentle, patient", gender: "girl"},
            {name: "Hana", meaning: "Happiness, bliss", gender: "girl"},
            {name: "Hira", meaning: "Diamond, precious stone", gender: "girl"},
            {name: "Habiba", meaning: "Beloved, sweetheart", gender: "girl"},
            {name: "Hadiya", meaning: "Gift, guide to righteousness", gender: "girl"},
            {name: "Hawa", meaning: "Eve, source of life", gender: "girl"},
            {name: "Humaira", meaning: "Reddish, rosy-cheeked", gender: "girl"},
            {name: "Haneen", meaning: "Longing, nostalgia", gender: "girl"},
            {name: "Hind", meaning: "Group of camels", gender: "girl"},
            {name: "Haya", meaning: "Modesty, shyness", gender: "girl"},
            {name: "Husna", meaning: "Beautiful, fair", gender: "girl"},
            {name: "Hooriya", meaning: "Angel of paradise", gender: "girl"},
            {name: "Hafza", meaning: "Protected, preserved", gender: "girl"},
            {name: "Huda", meaning: "Right guidance", gender: "girl"},
            {name: "Huriyah", meaning: "Freedom", gender: "girl"},
            {name: "Husniyah", meaning: "Beauty, excellence", gender: "girl"},
            {name: "Hadiyah", meaning: "Guide to righteousness", gender: "girl"},
            {name: "Hafsah", meaning: "Young lioness", gender: "girl"},
            
            // Boys names starting with A
            {name: "Ahmed", meaning: "Highly praised, one who thanks Allah", gender: "boy"},
            {name: "Ali", meaning: "Exalted, noble", gender: "boy"},
            {name: "Adam", meaning: "First human, mankind", gender: "boy"},
            {name: "Amir", meaning: "Prince, leader", gender: "boy"},
            {name: "Ayman", meaning: "Blessed, lucky", gender: "boy"},
            {name: "Aziz", meaning: "Mighty, beloved", gender: "boy"},
            {name: "Anas", meaning: "Friendly, affectionate", gender: "boy"},
            {name: "Amin", meaning: "Trustworthy, faithful", gender: "boy"},
            {name: "Abdullah", meaning: "Servant of Allah", gender: "boy"},
            {name: "Abdurrahman", meaning: "Servant of the Most Merciful", gender: "boy"},
            {name: "Ahmad", meaning: "Most commendable", gender: "boy"},
            {name: "Aqeel", meaning: "Wise, intelligent", gender: "boy"},
            {name: "Asim", meaning: "Protector, defender", gender: "boy"},
            {name: "Ayub", meaning: "Patient, persevering", gender: "boy"},
            {name: "Azhar", meaning: "Bright, shining", gender: "boy"},
            {name: "Abbas", meaning: "Lion, austere", gender: "boy"},
            {name: "Adil", meaning: "Just, fair", gender: "boy"},
            {name: "Akram", meaning: "Most generous", gender: "boy"},
            {name: "Alauddin", meaning: "Nobility of faith", gender: "boy"},
            {name: "Amin", meaning: "Trustworthy", gender: "boy"},
            
            // Girls names starting with A
            {name: "Aisha", meaning: "Living, prosperous", gender: "girl"},
            {name: "Amina", meaning: "Trustworthy, faithful", gender: "girl"},
            {name: "Amal", meaning: "Hope, aspiration", gender: "girl"},
            {name: "Asma", meaning: "Exalted, supreme", gender: "girl"},
            {name: "Ayesha", meaning: "Living, womanly", gender: "girl"},
            {name: "Alya", meaning: "Exalted, highest social standing", gender: "girl"},
            {name: "Arwa", meaning: "Mountain goat, graceful", gender: "girl"},
            {name: "Aziza", meaning: "Precious, powerful", gender: "girl"},
            {name: "Afaf", meaning: "Chastity, purity", gender: "girl"},
            {name: "Alia", meaning: "Exalted, noble", gender: "girl"},
            {name: "Amira", meaning: "Princess, leader", gender: "girl"},
            {name: "Anisa", meaning: "Friendly, affectionate", gender: "girl"},
            {name: "Areej", meaning: "Fragrant scent", gender: "girl"},
            {name: "Asiya", meaning: "One who tends to the weak", gender: "girl"},
            {name: "Awatif", meaning: "Emotions, feelings", gender: "girl"},
            {name: "Amani", meaning: "Wishes, aspirations", gender: "girl"},
            {name: "Amal", meaning: "Hope", gender: "girl"},
            {name: "Aqila", meaning: "Intelligent, wise", gender: "girl"},
            {name: "Arifa", meaning: "Knowledgeable", gender: "girl"},
            {name: "Asma", meaning: "Loftier, more eminent", gender: "girl"},
            
            // Boys names starting with M
            {name: "Muhammad", meaning: "Praised, praiseworthy", gender: "boy"},
            {name: "Musa", meaning: "Drawn out of water", gender: "boy"},
            {name: "Mahmud", meaning: "Praiseworthy", gender: "boy"},
            {name: "Mustafa", meaning: "Chosen one", gender: "boy"},
            {name: "Malik", meaning: "King, master", gender: "boy"},
            {name: "Mansur", meaning: "Victorious, helped by God", gender: "boy"},
            {name: "Muhsin", meaning: "Charitable, benevolent", gender: "boy"},
            {name: "Mujtaba", meaning: "Chosen, selected", gender: "boy"},
            {name: "Muneer", meaning: "Illuminating, shining", gender: "boy"},
            {name: "Murtaza", meaning: "Chosen, selected", gender: "boy"},
            {name: "Mubarak", meaning: "Blessed, fortunate", gender: "boy"},
            {name: "Mudassir", meaning: "Covered, wrapped", gender: "boy"},
            {name: "Muzzammil", meaning: "Wrapped in garments", gender: "boy"},
            {name: "Moin", meaning: "Helper, protector", gender: "boy"},
            {name: "Muhaimin", meaning: "Protector, guardian", gender: "boy"},
            {name: "Mahdi", meaning: "Rightly guided", gender: "boy"},
            {name: "Munir", meaning: "Bright, shining", gender: "boy"},
            {name: "Murtada", meaning: "Chosen, content", gender: "boy"},
            {name: "Mahmood", meaning: "Praiseworthy", gender: "boy"},
            {name: "Mukhtar", meaning: "Chosen, selected", gender: "boy"},
            
            // Girls names starting with M
            {name: "Maryam", meaning: "Exalted, mother of Prophet Isa", gender: "girl"},
            {name: "Mariam", meaning: "Beloved, wished-for child", gender: "girl"},
            {name: "Maimuna", meaning: "Blessed, fortunate", gender: "girl"},
            {name: "Munira", meaning: "Illuminating, radiant", gender: "girl"},
            {name: "Maha", meaning: "Wild cow with beautiful eyes", gender: "girl"},
            {name: "Malak", meaning: "Angel", gender: "girl"},
            {name: "Mawadda", meaning: "Affection, love", gender: "girl"},
            {name: "Maysa", meaning: "Graceful, to walk with a proud gait", gender: "girl"},
            {name: "Mina", meaning: "Port, harbor", gender: "girl"},
            {name: "Mumina", meaning: "Believer, faithful", gender: "girl"},
            {name: "Munawara", meaning: "Illuminated, bright", gender: "girl"},
            {name: "Mushira", meaning: "Adviser, counselor", gender: "girl"},
            {name: "Mumtaz", meaning: "Excellent, distinguished", gender: "girl"},
            {name: "Mahira", meaning: "Skilled, expert", gender: "girl"},
            {name: "Mahin", meaning: "Strong, powerful", gender: "girl"},
            {name: "Mariyah", meaning: "Beloved, wished for", gender: "girl"},
            {name: "Mashal", meaning: "Torch, light", gender: "girl"},
            {name: "Maysun", meaning: "Beautiful face", gender: "girl"},
            {name: "Mona", meaning: "Wishes, desires", gender: "girl"},
            {name: "Mubina", meaning: "Clear, evident", gender: "girl"},
            
            // Unisex names
            {name: "Hayat", meaning: "Life", gender: "unisex"},
            {name: "Amal", meaning: "Hope", gender: "unisex"},
            {name: "Karim", meaning: "Generous, noble", gender: "unisex"},
            {name: "Jamil", meaning: "Beautiful", gender: "unisex"},
            {name: "Salam", meaning: "Peace", gender: "unisex"},
            
            // Boys names starting with I
            {name: "Ibrahim", meaning: "Father of many", gender: "boy"},
            {name: "Idris", meaning: "Interpreter", gender: "boy"},
            {name: "Imran", meaning: "Prosperity", gender: "boy"},
            {name: "Isa", meaning: "God is salvation", gender: "boy"},
            {name: "Ilyas", meaning: "The Lord is my God", gender: "boy"},
            {name: "Ismail", meaning: "God will hear", gender: "boy"},
            {name: "Ishaq", meaning: "He will laugh", gender: "boy"},
            {name: "Ihsan", meaning: "Perfection, excellence", gender: "boy"},
            {name: "Izzuddin", meaning: "Glory of the faith", gender: "boy"},
            {name: "Irfan", meaning: "Knowledge, awareness", gender: "boy"},
            
            // Girls names starting with I
            {name: "Iman", meaning: "Faith, belief", gender: "girl"},
            {name: "Inaya", meaning: "Care, concern", gender: "girl"},
            {name: "Isha", meaning: "Living, life", gender: "girl"},
            {name: "Ilham", meaning: "Inspiration", gender: "girl"},
            {name: "Ifrah", meaning: "Happiness, cheerfulness", gender: "girl"},
            {name: "Izdihar", meaning: "Flourishing, blooming", gender: "girl"},
            {name: "Iffat", meaning: "Chastity, modesty", gender: "girl"},
            {name: "Irtiza", meaning: "Contentment, satisfaction", gender: "girl"},
            {name: "Ishraq", meaning: "Sunrise, illumination", gender: "girl"},
            {name: "Ibtisam", meaning: "Smile", gender: "girl"},
            
            // Boys names starting with Y
            {name: "Yusuf", meaning: "God increases", gender: "boy"},
            {name: "Yahya", meaning: "God is gracious", gender: "boy"},
            {name: "Yasin", meaning: "Heart of the Quran", gender: "boy"},
            {name: "Yaqub", meaning: "Supplanter", gender: "boy"},
            {name: "Yunus", meaning: "Dove", gender: "boy"},
            {name: "Yazan", meaning: "Determined, resolved", gender: "boy"},
            {name: "Yasser", meaning: "Wealthy, prosperous", gender: "boy"},
            {name: "Yahiya", meaning: "God gives life", gender: "boy"},
            {name: "Yumn", meaning: "Blessing, good fortune", gender: "boy"},
            {name: "Yahya", meaning: "Living", gender: "boy"},
            
            // Girls names starting with Y
            {name: "Yasmin", meaning: "Jasmine flower", gender: "girl"},
            {name: "Yumna", meaning: "Good fortune, prosperity", gender: "girl"},
            {name: "Yara", meaning: "Small butterfly", gender: "girl"},
            {name: "Yusra", meaning: "Ease, prosperity", gender: "girl"},
            {name: "Yakoota", meaning: "Ruby, precious stone", gender: "girl"},
            {name: "Yasira", meaning: "Wealthy, prosperous", gender: "girl"},
            {name: "Yamna", meaning: "Right hand, blessed", gender: "girl"},
            {name: "Yasmeen", meaning: "Jasmine flower", gender: "girl"},
            {name: "Yahd", meaning: "Guidance", gender: "girl"},
            {name: "Yusriya", meaning: "Easy, prosperous", gender: "girl"},
            
            // Additional names starting with S
            {name: "Sulaiman", meaning: "Man of peace", gender: "boy"},
            {name: "Said", meaning: "Happy, fortunate", gender: "boy"},
            {name: "Salim", meaning: "Safe, secure", gender: "boy"},
            {name: "Samir", meaning: "Entertaining companion", gender: "boy"},
            {name: "Siraj", meaning: "Lamp, light", gender: "boy"},
            {name: "Safiya", meaning: "Pure, best friend", gender: "girl"},
            {name: "Sana", meaning: "Brilliance, radiance", gender: "girl"},
            {name: "Samira", meaning: "Entertaining companion", gender: "girl"},
            {name: "Sahar", meaning: "Dawn", gender: "girl"},
            {name: "Sadaf", meaning: "Seashell", gender: "girl"},
            
            // Additional names starting with R
            {name: "Rashid", meaning: "Rightly guided", gender: "boy"},
            {name: "Rahim", meaning: "Merciful, compassionate", gender: "boy"},
            {name: "Rayan", meaning: "Gates of Heaven", gender: "boy"},
            {name: "Rida", meaning: "Contentment", gender: "boy"},
            {name: "Rizwan", meaning: "Approval, acceptance", gender: "boy"},
            {name: "Rahma", meaning: "Mercy, compassion", gender: "girl"},
            {name: "Rania", meaning: "Queen", gender: "girl"},
            {name: "Rukhsar", meaning: "Cheek", gender: "girl"},
            {name: "Rida", meaning: "Contentment", gender: "girl"},
            {name: "Riham", meaning: "Gentle rain", gender: "girl"},
            
            // Additional names starting with N
            {name: "Nuh", meaning: "Rest, comfort", gender: "boy"},
            {name: "Nasir", meaning: "Helper, supporter", gender: "boy"},
            {name: "Nadir", meaning: "Rare, precious", gender: "boy"},
            {name: "Nabil", meaning: "Noble", gender: "boy"},
            {name: "Naeem", meaning: "Blessing, comfort", gender: "boy"},
            {name: "Noor", meaning: "Light", gender: "girl"},
            {name: "Nadia", meaning: "Tender, delicate", gender: "girl"},
            {name: "Naima", meaning: "Tranquil, peaceful", gender: "girl"},
            {name: "Nashwa", meaning: "Elated, joyful", gender: "girl"},
            {name: "Nazifa", meaning: "Clean, pure", gender: "girl"},
        ];

        // DOM elements
        const generateBtn = document.getElementById('generate-btn');
        const startingLetterInput = document.getElementById('starting-letter');
        const genderSelect = document.getElementById('gender');
        const nameCountSelect = document.getElementById('name-count');
        const namesContainer = document.getElementById('names-container');
        const loadingElement = document.getElementById('loading');
        const resultsSection = document.getElementById('results-section');
        const paginationElement = document.getElementById('pagination');
        const showingCountElement = document.getElementById('showing-count');
        const totalCountElement = document.getElementById('total-count');
        const resultsCountElement = document.getElementById('results-count');

        // Pagination variables
        let currentPage = 1;
        let itemsPerPage = 10;

        // Event listener for generate button
        generateBtn.addEventListener('click', generateNames);
        
        // Also generate on Enter key in the letter input
        startingLetterInput.addEventListener('keyup', function(event) {
            if (event.key === 'Enter') {
                generateNames();
            }
        });

        // Generate names function
        function generateNames() {
            // Get user input
            const startingLetter = startingLetterInput.value.trim().toUpperCase();
            const selectedGender = genderSelect.value;
            const selectedCount = parseInt(nameCountSelect.value);
            
            // Validate input
            if (!startingLetter || startingLetter.length !== 1 || !/^[A-Z]$/.test(startingLetter)) {
                alert('Please enter a valid single letter (A-Z)');
                startingLetterInput.focus();
                return;
            }
            
            // Reset pagination
            currentPage = 1;
            itemsPerPage = selectedCount;
            
            // Show loading animation
            showLoading(true);
            
            // Simulate API call delay for better UX
            setTimeout(() => {
                // Filter names based on criteria
                const filteredNames = islamicNames.filter(name => {
                    // Check if name starts with the provided letter (case insensitive)
                    const startsWithLetter = name.name.toUpperCase().startsWith(startingLetter);
                    
                    // Check gender filter
                    const genderMatch = selectedGender === 'any' || name.gender === selectedGender;
                    
                    return startsWithLetter && genderMatch;
                });
                
                // Display results
                displayNames(filteredNames, startingLetter);
                
                // Hide loading animation
                showLoading(false);
            }, 600); // Simulate network delay
        }

        // Display names in the UI with pagination
        function displayNames(names, letter) {
            // Clear previous results
            namesContainer.innerHTML = '';
            paginationElement.innerHTML = '';
            paginationElement.style.display = 'none';
            
            // Update total count
            const totalNames = names.length;
            totalCountElement.textContent = totalNames;
            
            // If no names found
            if (totalNames === 0) {
                namesContainer.innerHTML = `
                    <p class="no-results">
                        No Islamic names found starting with "${letter}" for the selected gender.
                        Try a different letter or gender option.
                    </p>
                `;
                showingCountElement.textContent = '0';
                return;
            }
            
            // Calculate pagination
            const totalPages = Math.ceil(totalNames / itemsPerPage);
            
            // Get names for current page
            const startIndex = (currentPage - 1) * itemsPerPage;
            const endIndex = Math.min(startIndex + itemsPerPage, totalNames);
            const namesToShow = names.slice(startIndex, endIndex);
            
            // Create a grid of name cards
            const namesGrid = document.createElement('div');
            namesGrid.className = 'names-grid';
            
            // Add each name as a card
            namesToShow.forEach((name, index) => {
                const nameCard = document.createElement('div');
                nameCard.className = 'name-card';
                
                // Add animation delay for staggered effect
                nameCard.style.animationDelay = `${index * 0.05}s`;
                
                // Gender-specific styling
                const genderClass = name.gender;
                const genderDisplay = name.gender.charAt(0).toUpperCase() + name.gender.slice(1);
                
                nameCard.innerHTML = `
                    <div class="name">${name.name}</div>
                    <div class="meaning">${name.meaning}</div>
                    <div class="gender-tag ${genderClass}">${genderDisplay}</div>
                `;
                
                namesGrid.appendChild(nameCard);
            });
            
            namesContainer.appendChild(namesGrid);
            
            // Update showing count
            showingCountElement.textContent = namesToShow.length;
            
            // Create pagination if needed
            if (totalPages > 1) {
                createPagination(totalPages);
                paginationElement.style.display = 'flex';
            }
            
            // Show results count element
            resultsCountElement.style.display = 'flex';
        }

        // Create pagination buttons
        function createPagination(totalPages) {
            paginationElement.innerHTML = '';
            
            // Previous button
            const prevButton = document.createElement('button');
            prevButton.className = `page-btn ${currentPage === 1 ? 'disabled' : ''}`;
            prevButton.innerHTML = '<i class="fas fa-chevron-left"></i> Previous';
            prevButton.disabled = currentPage === 1;
            prevButton.addEventListener('click', () => {
                if (currentPage > 1) {
                    currentPage--;
                    generateNames(); // Regenerate names with new page
                }
            });
            paginationElement.appendChild(prevButton);
            
            // Page number buttons
            const maxVisiblePages = 5;
            let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
            let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
            
            // Adjust start page if we're at the end
            if (endPage - startPage + 1 < maxVisiblePages) {
                startPage = Math.max(1, endPage - maxVisiblePages + 1);
            }
            
            // First page
            if (startPage > 1) {
                const firstButton = document.createElement('button');
                firstButton.className = 'page-btn';
                firstButton.textContent = '1';
                firstButton.addEventListener('click', () => {
                    currentPage = 1;
                    generateNames();
                });
                paginationElement.appendChild(firstButton);
                
                if (startPage > 2) {
                    const ellipsis = document.createElement('span');
                    ellipsis.textContent = '...';
                    ellipsis.className = 'ellipsis';
                    paginationElement.appendChild(ellipsis);
                }
            }
            
            // Page numbers
            for (let i = startPage; i <= endPage; i++) {
                const pageButton = document.createElement('button');
                pageButton.className = `page-btn ${i === currentPage ? 'active' : ''}`;
                pageButton.textContent = i;
                pageButton.addEventListener('click', () => {
                    currentPage = i;
                    generateNames();
                });
                paginationElement.appendChild(pageButton);
            }
            
            // Last page
            if (endPage < totalPages) {
                if (endPage < totalPages - 1) {
                    const ellipsis = document.createElement('span');
                    ellipsis.textContent = '...';
                    ellipsis.className = 'ellipsis';
                    paginationElement.appendChild(ellipsis);
                }
                
                const lastButton = document.createElement('button');
                lastButton.className = 'page-btn';
                lastButton.textContent = totalPages;
                lastButton.addEventListener('click', () => {
                    currentPage = totalPages;
                    generateNames();
                });
                paginationElement.appendChild(lastButton);
            }
            
            // Next button
            const nextButton = document.createElement('button');
            nextButton.className = `page-btn ${currentPage === totalPages ? 'disabled' : ''}`;
            nextButton.innerHTML = 'Next <i class="fas fa-chevron-right"></i>';
            nextButton.disabled = currentPage === totalPages;
            nextButton.addEventListener('click', () => {
                if (currentPage < totalPages) {
                    currentPage++;
                    generateNames();
                }
            });
            paginationElement.appendChild(nextButton);
        }

        // Show/hide loading animation
        function showLoading(show) {
            if (show) {
                loadingElement.style.display = 'block';
                resultsSection.style.opacity = '0.5';
            } else {
                loadingElement.style.display = 'none';
                resultsSection.style.opacity = '1';
            }
        }

        // Initialize with some names
        window.addEventListener('DOMContentLoaded', () => {
            // Generate names starting with H as default
            generateNames();
        });