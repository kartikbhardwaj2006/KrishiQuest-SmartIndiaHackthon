
        const qaPairs = {
            // Greetings
            hi: "Hello! 😊 Nice to meet you. I'm here to help with all your farming questions!",
            hii: "Hello! 👋 How are you? Ready to talk about sustainable farming?",
            hello: "Hi there! 🌸 How can I assist with your farming journey today?",
            "how are you": "I'm just a bot, but I'm doing great! How about your farming activities?",
            "i am fine": "Glad to hear that! Keep smiling 😊 Hope your crops are growing well!",
            "i am also fine": "Awesome! Stay positive and take care of your plants 🌟",
            "what is your name": "I am your Sustainable Farming Assistant 🤖 Ready to help!",
            "what can you do": "I can help answer questions about sustainable farming, crop selection, soil health, and eco-friendly practices!",
            "thank you": "You're welcome! If you have more farming questions, feel free to ask 🌱",
            thanks: "No problem! I'm here to help anytime 😊 Happy farming!",
            bye: "Goodbye! Take care and may your harvest be bountiful! 👋",
            "ok bye": "Goodbye! Wishing you success in your farming endeavors! 👋",
            "what is your purpose": "My purpose is to assist farmers with sustainable agriculture practices and eco-friendly farming methods.",
            "what is your short name": "Call me FarmFriend 😉",
            "can i ask one more question": "Of course! Ask me anything about farming practices and sustainable agriculture.",
            sure: "Great! What farming topic would you like to explore?",
            ok: "Alright! Feel free to ask your farming question.",

            // Additional Greetings
            "good morning": "Good morning! 🌞 Wishing you a productive day in the fields ahead.",
            "good afternoon": "Good afternoon! Hope your crops are enjoying the sunlight!",
            "good evening": "Good evening! 🌆 How did your farming day go?",
            "good night": "Good night! 🌙 Rest well for another day of farming tomorrow.",
            hey: "Hey! 👋 How's your farming going today?",
            "what's up": "Not much, just here to chat about farming! What about you?",
            "how's it going": "All good here 🤖 How are your crops doing?",
            "nice to meet you": "Nice to meet you too! 🌸 Let's grow together!",
            "long time no see": "Yes, it's been a while! How have your farming activities been?",
            "what are you doing": "Just waiting for your farming questions 😄",
            "who created you": "I was built to help farmers like you with sustainable practices!",
            "how old are you": "I don't age, I'm just a bot 🤖 but I know traditional and modern farming!",
            "where are you from": "I live in the digital world 🌐 but I specialize in farming knowledge.",
            "tell me a joke": "Sure 😄 Why don't farmers ever get lost? Because they always find their field!",
            "tell me something funny": "Why did the scarecrow win an award? Because he was outstanding in his field 🌾😂",
            "are you real": "I'm real as long as we're talking about farming 💡",
            "do you have friends": "Yes! Every farmer I help becomes my friend 🌟",
            "how do you learn": "I learn from agricultural data and farming conversations.",
            "can you help me": "Of course! Ask me anything about sustainable farming.",
            "i am bored": "Let's chat about farming! I can share interesting agricultural facts.",
            "what's your favorite color": "I like green 🌱, it reminds me of healthy crops.",
            "what's your favorite food": "I don't eat, but fresh farm produce sounds delicious 🍎",
            "how's the weather": "I can't feel the weather, but I hope it's perfect for your crops!",
            "do you like music": "Yes! I like the sound of rustling crops 🎵",
            "do you like games": "Definitely! Especially farming simulations and agriculture quizzes 🎮",
            "do you get tired": "Never! I'm always ready to help with farming questions.",
            "how do you feel": "I feel excited to chat about farming with you 😃",
            "sing me a song": "I can't sing, but I can share farming tips in rhythm 🎶",
            "tell me a story": "Once upon a time, sustainable farmers saved the earth by going green 🌍",
            "motivate me": "Sure 💪 Every seed you plant today grows into tomorrow's harvest. Keep farming!",
            "you are nice": "Thank you! You're a wonderful farmer 🌟",
            "i am sad": "Stay strong 🌸 Your plants need your care. Better harvests are coming!",
            "can you dance": "Not really, but I can help your crops grow with good advice 💃",
            "you are funny": "Thanks 😄 I try to make farming knowledge enjoyable.",
            "you are smart": "Appreciate it! I'm always learning about agriculture 📘",
            "are you happy": "Yes! Helping farmers makes me happy.",
            "i missed you": "I missed you too! 🤗 How are your crops doing?",
            "do you like me": "Yes, I enjoy helping dedicated farmers like you!",
            "i am tired": "Rest is important 😴 Farmers need energy for their important work.",
            "let's play a game": "Sure! Ask me a quiz about farming practices 🌱",
            "you are my friend": "Yes, I'm your digital farming friend 🤖",
            "say something nice": "You are growing a better future with every seed you plant 🌟",
            "wish me luck": "Best of luck 🍀 May your fields be fertile and your harvest abundant!",
            "good job": "Thank you! I appreciate working with good farmers 🙏",
            "you are cool": "Thanks 😎 You're a cool farmer too!",
            "i love you": "That's sweet! I'm here to support your farming journey ❤️",
            "i am angry": "Take a deep breath 🌬️ Farming teaches patience. Everything will grow in time.",
            sorry: "It's alright 😊 No worries in the farming world.",
            congratulations: "Congrats! 🎉 That's wonderful news for your farm!",
            "all the best": "Thank you! Wishing you bountiful harvests too 🍀",

            // Sustainable Farming
            "what is sustainable farming": "Sustainable farming means growing crops in ways that protect the environment, public health, and animal welfare for future generations.",
            "why is sustainable farming important": "It ensures long-term food security, protects soil and water resources, and improves farmers' livelihoods while preserving ecosystems.",
            "what are eco-friendly farming practices": "Examples include organic farming, crop rotation, mulching, integrated pest management, and using bio-fertilizers.",
            "what is crop rotation": "Crop rotation means planting different crops in sequence on the same land to improve soil fertility, reduce pests, and prevent nutrient depletion.",
            "what is intercropping": "Intercropping is growing two or more crops together simultaneously to improve yield, soil health, and biodiversity.",
            "what is mulching": "Mulching means covering soil with organic materials like straw or leaves to conserve moisture, control weeds, and regulate soil temperature.",
            "what are bio-fertilizers": "Bio-fertilizers are natural substances containing living microorganisms that enhance soil fertility and plant growth naturally.",
            "what are bio-pesticides": "Bio-pesticides are eco-friendly pest control solutions made from natural materials like neem or other plant extracts.",
            "what is organic farming": "Organic farming avoids synthetic chemicals and uses natural methods like composting and biological pest control to grow healthy crops.",
            "what is precision farming": "Precision farming uses technology like GPS, sensors, and drones to optimize water, fertilizer, and pesticide use for maximum efficiency.",
            "what is mono-cropping": "Mono-cropping means growing only one crop repeatedly on the same land, which can harm soil health and increase pest problems.",
            "what are the benefits of mixed cropping": "Mixed cropping reduces risks, improves soil fertility, ensures better yield stability, and enhances biodiversity.",
            "what is natural farming": "Natural farming avoids chemical inputs and relies entirely on local resources like cow dung, compost, and bio-pesticides.",
            "what is soil health": "Soil health refers to the soil's ability to support crops, retain nutrients, sustain ecosystems, and maintain productivity over time.",

            // Crop Selection
            "which crop is best for sandy soil": "Groundnut, millets, and pulses grow well in sandy soil as they require good drainage.",
            "which crop is best for clay soil": "Paddy and wheat are suitable for clay soils which retain more moisture.",
            "can i grow sugarcane in dry areas": "Sugarcane needs high water. In dry areas, drip irrigation and water conservation methods are recommended.",
            "what is the best crop for summer": "Vegetables like cucumber, watermelon, okra, and maize thrive in summer conditions.",
            "which crop grows quickly and gives fast income": "Vegetables like spinach, coriander, radish, and leafy greens provide quick returns.",
            "which crop requires less water": "Millets like bajra, jowar, and pulses like red gram are drought-resistant.",
            "which crop is good for organic farming": "Vegetables, fruits, and pulses respond well to organic farming methods.",
            "can i grow wheat after paddy": "Yes, wheat is commonly grown after paddy as a Rabi crop in rotation systems.",
            "best crop for coastal areas": "Coconut, paddy, cashew, and saline-tolerant crops thrive in coastal regions.",
            "can i grow paddy without standing water": "Yes, with the SRI method (System of Rice Intensification) that uses less water.",
            "which crop grows in hilly areas": "Tea, coffee, spices, apples, and temperate vegetables suit hilly terrain.",
            "best crop for drought-prone areas": "Millets like ragi and sorghum are ideal for drought conditions.",
            "which vegetable grows in winter": "Cauliflower, cabbage, peas, carrots, and spinach are winter vegetables.",
            "can banana grow in dry areas": "Yes, with proper drip irrigation and moisture conservation techniques.",
            "which oilseed crop is profitable": "Mustard, sunflower, groundnut, and sesame offer good returns.",
            "which is the most profitable cash crop in india": "Sugarcane, cotton, paddy, and horticultural crops are popular choices.",
            "can i grow crops on saline soil": "Yes, barley, cotton, mustard, and certain salt-tolerant varieties can grow.",
            "which crop increases soil fertility": "Legumes like pulses fix nitrogen and naturally enrich the soil.",

            // Soil & Fertilizer
            "how to improve soil fertility": "Use organic manure, compost, green manure, crop rotation, and cover crops.",
            "which fertilizer is best for wheat": "Balanced NPK fertilizers with emphasis on nitrogen for growth.",
            "what is green manure": "Growing crops like sunhemp or dhaincha and ploughing them into soil as natural fertilizer.",
            "is chemical fertilizer harmful": "Excess use can harm soil health. Use in balanced quantities with organic inputs.",
            "how much urea for paddy per acre": "About 100-120 kg urea per acre, split into multiple applications.",
            "what is organic fertilizer": "Compost, cow dung, vermicompost, and other natural nutrient sources.",
            "can i mix fertilizers": "Yes, but follow recommended doses and compatibility guidelines.",
            "best fertilizer for sugarcane": "High nitrogen and potassium requirements with micronutrients.",
            "what is vermicompost": "High-quality fertilizer made through earthworm decomposition of organic matter.",
            "how to check soil health": "Get soil testing from agricultural laboratories for nutrient analysis.",
            "how often should i test soil": "Every 2-3 years, or when changing cropping patterns.",
            "which fertilizer increases flowering": "Phosphorus-rich fertilizers promote flowering and fruiting.",
            "what is foliar spray": "Spraying nutrient solutions directly on leaves for quick absorption.",
            "is cow dung good fertilizer": "Excellent organic fertilizer that improves soil structure and fertility.",
            "how to reduce fertilizer cost": "Use organic manure, bio-fertilizers, and precision application methods.",
            "can i use kitchen waste as fertilizer": "Yes, composting kitchen waste creates excellent organic fertilizer.",
            "what is npk": "Nitrogen (N), Phosphorus (P), Potassium (K) - essential plant nutrients.",
            "why are my plants not growing well": "Possible reasons: poor soil, nutrient deficiency, pests, or water issues.",
            "what is the role of nitrogen in plants": "Essential for leaf and stem growth, chlorophyll production.",
            "what is the role of potassium in plants": "Important for fruiting, disease resistance, and water regulation.",
        };

        function levenshtein(a, b) {
            const matrix = Array.from({ length: b.length + 1 }, (_, i) =>
                Array(a.length + 1).fill(0)
            );
            for (let i = 0; i <= b.length; i++) matrix[i][0] = i;
            for (let j = 0; j <= a.length; j++) matrix[0][j] = j;

            for (let i = 1; i <= b.length; i++) {
                for (let j = 1; j <= a.length; j++) {
                    if (b[i - 1] === a[j - 1]) matrix[i][j] = matrix[i - 1][j - 1];
                    else
                        matrix[i][j] = Math.min(
                            matrix[i - 1][j - 1] + 1,
                            matrix[i][j - 1] + 1,
                            matrix[i - 1][j] + 1
                        );
                }
            }
            return matrix[b.length][a.length];
        }

        function stringSimilarity(s1, s2) {
            const distance = levenshtein(s1.toLowerCase(), s2.toLowerCase());
            const maxLength = Math.max(s1.length, s2.length);
            return maxLength === 0 ? 1 : 1 - distance / maxLength;
        }

        function chatbotResponse(userInput) {
            const input = userInput.toLowerCase().trim();

            // Clean the input by removing punctuation and extra spaces
            const cleanInput = input
                .replace(/[^\w\s]|_/g, "")
                .replace(/\s+/g, " ")
                .trim();

            // Check for exact match first
            if (qaPairs[cleanInput]) {
                return qaPairs[cleanInput];
            }

            // If no exact match, find the closest match
            let bestMatch = "";
            let highestScore = 0;

            for (const key in qaPairs) {
                const cleanKey = key
                    .toLowerCase()
                    .replace(/[^\w\s]|_/g, "")
                    .replace(/\s+/g, " ")
                    .trim();
                const score = stringSimilarity(cleanInput, cleanKey);

                if (score > highestScore) {
                    highestScore = score;
                    bestMatch = key;
                }
            }

            // Return the best match if similarity is high enough
            if (highestScore >= 0.7) {
                return qaPairs[bestMatch];
            } else {
                return "I'm not sure about that specific farming question. Could you try rephrasing? I can help with crop selection, soil health, organic farming, and sustainable practices! 🌱";
            }
        }

        function sendMessage() {
            const inputBox = document.getElementById("user-input");
            const chatBox = document.getElementById("chat-box");
            const userText = inputBox.value.trim();

            if (userText === "") return;

            // Add user message
            const userMsg = document.createElement("div");
            userMsg.classList.add("user-message", "message-bubble", "slide-up");
            userMsg.innerHTML = `
                <div class="flex items-start justify-end space-x-3">
                    <div class="text-right">
                        <p class="font-semibold text-white">You</p>
                        <p class="text-white">${userText}</p>
                    </div>
                    <div class="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <i class="fas fa-user text-white text-sm"></i>
                    </div>
                </div>
            `;
            chatBox.appendChild(userMsg);

            // Clear input
            inputBox.value = "";

            // Scroll to bottom
            chatBox.scrollTop = chatBox.scrollHeight;

            // Add typing indicator
            const typingIndicator = document.createElement("div");
            typingIndicator.classList.add("bot-message", "message-bubble");
            typingIndicator.innerHTML = `
                <div class="flex items-start space-x-3">
                    <div class="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <i class="fas fa-robot text-white text-sm"></i>
                    </div>
                    <div class="typing-indicator">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            `;
            chatBox.appendChild(typingIndicator);
            chatBox.scrollTop = chatBox.scrollHeight;

            // Simulate response delay
            setTimeout(() => {
                chatBox.removeChild(typingIndicator);

                const botText = chatbotResponse(userText);
                const botMsg = document.createElement("div");
                botMsg.classList.add("bot-message", "message-bubble", "slide-up");
                botMsg.innerHTML = `
                    <div class="flex items-start space-x-3">
                        <div class="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                            <i class="fas fa-robot text-white text-sm"></i>
                        </div>
                        <div>
                            <p class="font-semibold text-green-700">Farming Assistant</p>
                            <p class="text-gray-700">${botText}</p>
                        </div>
                    </div>
                `;
                chatBox.appendChild(botMsg);
                chatBox.scrollTop = chatBox.scrollHeight;
            }, 1000 + Math.random() * 1000);
        }

        function quickQuestion(question) {
            document.getElementById("user-input").value = question;
            sendMessage();
        }

        // Event listeners
        document.getElementById("user-input").addEventListener("keypress", function (e) {
            if (e.key === "Enter") {
                sendMessage();
            }
        });

        // Add initial welcome message
        window.addEventListener("load", function () {
            setTimeout(() => {
                const chatBox = document.getElementById("chat-box");
                const welcomeMsg = document.createElement("div");
                welcomeMsg.classList.add("bot-message", "message-bubble", "slide-up");
                welcomeMsg.innerHTML = `
                    <div class="flex items-start space-x-3">
                        <div class="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                            <i class="fas fa-robot text-white text-sm"></i>
                        </div>
                        <div>
                            <p class="font-semibold text-green-700">Farming Assistant</p>
                            <p class="text-gray-700">Hello! I'm here to help with your farming questions. Try the quick questions above or ask anything about farming!</p>
                        </div>
                    </div>
                `;
                chatBox.appendChild(welcomeMsg);
                chatBox.scrollTop = chatBox.scrollHeight;
            }, 500);
        });
    