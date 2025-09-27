
        const { useState, useEffect } = React;
        const sampleFarmers = [
            {
                id: 1,
                name: " Ram ",
                location: "Coimbatore",
                crops: ["Wheat", "Corn", "Tomatoes", "Lettuce"],
                farmSize: "5 acres",
                level: 8,
                points: 2450,
                sustainabilityScore: 85,
                badges: ["Organic Pioneer", "Soil Health Master", "Water Warrior"],
                avatar: "🌾"
            },
            {
                id: 2,
                name: "Ram",
                location: "Coimbatore",
                crops: ["Rice", "Soybeans", "Peppers", "Carrots"],
                farmSize: "3 acres",
                level: 6,
                points: 1890,
                sustainabilityScore: 78,
                badges: ["Bio-Pesticide Champion", "Compost Queen"],
                avatar: "🌱"
            },
            {
                id: 3,
                name: "Ram",
                location: "Coimbatore",
                crops: ["Vegetables", "Herbs", "Strawberries", "Cucumbers"],
                farmSize: "2 acres",
                level: 4,
                points: 1200,
                sustainabilityScore: 72,
                badges: ["Mixed Cropping Master"],
                avatar: "🥕"
            },
            {
                id: 4,
                name: "Ram",
                location: "Coimbatore",
                crops: ["Potatoes", "Onions", "Spinach", "Beans"],
                farmSize: "4 acres",
                level: 7,
                points: 2100,
                sustainabilityScore: 82,
                badges: ["Water Conservation Expert", "Drip Irrigation Master"],
                avatar: "🥔"
            },
            {
                id: 5,
                name: "Ram",
                location: "Coimbatore",
                crops: ["Broccoli", "Cauliflower", "Cabbage", "Kale"],
                farmSize: "3.5 acres",
                level: 5,
                points: 1650,
                sustainabilityScore: 75,
                badges: ["Compost Specialist", "Brassica Expert"],
                avatar: "🥬"
            }
        ];

        const sampleChallenges = [
            {
                id: 1,
                title: "Organic Fertilizer Usage",
                description: "Use organic fertilizers instead of chemical fertilizers for 3 weeks",
                difficulty: "Medium",
                points: 300,
                duration: "21 days",
                progress: 65,
                category: "Soil Health",
                icon: "🌿",
                farmerId: 1,
                crops: [
                    { name: "Wheat", growth: "Flowering", nextTask: "Water deeply (2 inches)", progress: 75, taskSequence: ["Water deeply", "Check soil pH", "Apply organic fertilizer", "Monitor growth"] },
                    { name: "Corn", growth: "Germination", nextTask: "Water seedlings (1 inch)", progress: 25, taskSequence: ["Water seedlings", "Apply compost", "Thin weak plants", "Fertilize with nitrogen"] },
                    { name: "Tomatoes", growth: "Fruiting", nextTask: "Water at base (avoid leaves)", progress: 90, taskSequence: ["Water at base", "Harvest ripe fruits", "Prune suckers", "Support heavy branches"] },
                    { name: "Lettuce", growth: "Mature", nextTask: "Harvest outer leaves", progress: 100, taskSequence: ["Harvest outer leaves", "Water remaining plants", "Replant new seeds", "Apply liquid fertilizer"] }
                ]
            },
            {
                id: 2,
                title: "Bio-Pesticide Switch",
                description: "Switch from chemical pesticides to bio-pesticides this season",
                difficulty: "Easy",
                points: 200,
                duration: "14 days",
                progress: 100,
                category: "Pest Control",
                icon: "🛡️",
                farmerId: 2,
                crops: [
                    { name: "Rice", growth: "Harvest Ready", nextTask: "Drain field for harvest", progress: 95, taskSequence: ["Drain field", "Check grain moisture", "Prepare harvesting equipment", "Harvest in dry weather"] },
                    { name: "Soybeans", growth: "Pod Development", nextTask: "Water during pod fill", progress: 60, taskSequence: ["Water during pod fill", "Monitor for aphids", "Apply neem oil spray", "Check pod maturity"] },
                    { name: "Peppers", growth: "Flowering", nextTask: "Water consistently", progress: 40, taskSequence: ["Water consistently", "Apply bio-pesticide", "Support heavy branches", "Harvest when firm"] },
                    { name: "Carrots", growth: "Root Development", nextTask: "Water deeply for root growth", progress: 30, taskSequence: ["Water deeply", "Thin to 2 inches apart", "Apply compost tea", "Harvest when 1 inch diameter"] }
                ]
            },
            {
                id: 3,
                title: "Mulching Master",
                description: "Practice mulching in your field for 3 weeks",
                difficulty: "Hard",
                points: 500,
                duration: "21 days",
                progress: 30,
                category: "Water Management",
                icon: "🌾",
                farmerId: 3,
                crops: [
                    { name: "Vegetables", growth: "Early Growth", nextTask: "Apply 3-inch mulch layer", progress: 20, taskSequence: ["Apply mulch layer", "Water through mulch", "Check soil moisture", "Replenish mulch as needed"] },
                    { name: "Herbs", growth: "Germination", nextTask: "Water gently with spray", progress: 15, taskSequence: ["Water gently", "Apply thin mulch", "Pinch back growth", "Harvest regularly"] },
                    { name: "Strawberries", growth: "Flowering", nextTask: "Mulch around plants", progress: 45, taskSequence: ["Mulch around plants", "Water at soil level", "Remove runners", "Harvest ripe berries"] },
                    { name: "Cucumbers", growth: "Vine Growth", nextTask: "Install trellis support", progress: 35, taskSequence: ["Install trellis", "Water at base", "Train vines upward", "Harvest when 6-8 inches"] }
                ]
            },
            {
                id: 4,
                title: "Mixed Cropping",
                description: "Grow 2 different crops together in your field",
                difficulty: "Medium",
                points: 400,
                duration: "30 days",
                progress: 0,
                category: "Crop Diversity",
                icon: "🌽",
                farmerId: 1,
                crops: [
                    { name: "Wheat", growth: "Planning", nextTask: "Prepare seedbed", progress: 0, taskSequence: ["Prepare seedbed", "Test soil nutrients", "Plan companion crops", "Plant at optimal spacing"] },
                    { name: "Corn", growth: "Planning", nextTask: "Select companion crops", progress: 0, taskSequence: ["Select companion crops", "Prepare planting rows", "Plant corn first", "Add beans and squash"] },
                    { name: "Tomatoes", growth: "Planning", nextTask: "Plan crop rotation", progress: 0, taskSequence: ["Plan crop rotation", "Prepare support system", "Plant with basil", "Mulch around plants"] },
                    { name: "Lettuce", growth: "Planning", nextTask: "Design mixed plot", progress: 0, taskSequence: ["Design mixed plot", "Prepare soil", "Plant with radishes", "Water consistently"] }
                ]
            },
            {
                id: 5,
                title: "Water Conservation",
                description: "Implement drip irrigation system for water efficiency",
                difficulty: "Hard",
                points: 600,
                duration: "28 days",
                progress: 45,
                category: "Water Management",
                icon: "💧",
                farmerId: 4,
                crops: [
                    { name: "Potatoes", growth: "Tuber Formation", nextTask: "Water with drip system", progress: 55, taskSequence: ["Install drip lines", "Water with drip system", "Check soil moisture", "Harvest when tops die"] },
                    { name: "Onions", growth: "Bulb Development", nextTask: "Reduce watering frequency", progress: 70, taskSequence: ["Reduce watering", "Stop watering 2 weeks before harvest", "Cure bulbs in sun", "Store in cool place"] },
                    { name: "Spinach", growth: "Leaf Growth", nextTask: "Water early morning", progress: 35, taskSequence: ["Water early morning", "Harvest outer leaves", "Plant new seeds", "Fertilize with compost"] },
                    { name: "Beans", growth: "Pod Setting", nextTask: "Water at soil level", progress: 60, taskSequence: ["Water at soil level", "Support climbing varieties", "Harvest regularly", "Save seeds for next season"] }
                ]
            },
            {
                id: 6,
                title: "Compost Application",
                description: "Apply homemade compost to improve soil fertility",
                difficulty: "Easy",
                points: 250,
                duration: "14 days",
                progress: 80,
                category: "Soil Health",
                icon: "🍂",
                farmerId: 5,
                crops: [
                    { name: "Broccoli", growth: "Head Formation", nextTask: "Apply compost tea", progress: 65, taskSequence: ["Apply compost tea", "Water deeply", "Harvest main head", "Allow side shoots to grow"] },
                    { name: "Cauliflower", growth: "Curd Development", nextTask: "Blanch the curd", progress: 75, taskSequence: ["Blanch the curd", "Water consistently", "Harvest when firm", "Remove plant after harvest"] },
                    { name: "Cabbage", growth: "Head Formation", nextTask: "Water at base only", progress: 50, taskSequence: ["Water at base", "Apply compost mulch", "Harvest when firm", "Store in cool place"] },
                    { name: "Kale", growth: "Leaf Production", nextTask: "Harvest outer leaves", progress: 85, taskSequence: ["Harvest outer leaves", "Water regularly", "Apply liquid fertilizer", "Plant new seeds"] }
                ]
            }
        ];

        const sampleLeaderboard = [
            { rank: 1, name: "Hashim", points: 2450, location: "Mumbai  Maharashtra", crops: ["Wheat", "Corn", "Tomatoes"], badge: "🥇" },
            { rank: 2, name: "Sanu", points: 1890, location: "Delhi", crops: ["Rice", "Soybeans", "Peppers"], badge: "🥈" },
            { rank: 3, name: "Ragul", points: 1200, location: "Bengaluru", crops: ["Vegetables", "Herbs", "Strawberries"], badge: "🥉" },
            { rank: 4, name: "Muthuraman", points: 2100, location: "Hyderabad", crops: ["Potatoes", "Onions", "Spinach"], badge: "🏅" },
            { rank: 5, name: "Pragadeesh", points: 1650, location: "Chennai", crops: ["Broccoli", "Cauliflower", "Cabbage"], badge: "🏅" },
            { rank: 6, name: "Ramesh", points: 1580, location: "Mumbai", crops: ["Citrus", "Avocados", "Mangoes"], badge: "🏅" },
            { rank: 7, name: "Dhoni", points: 1520, location: "Kolkata", crops: ["Blueberries", "Raspberries", "Apples"], badge: "🏅" },
            { rank: 8, name: "Rohit", points: 1480, location: "Kharagpur ", crops: ["Barley", "Oats", "Hay"], badge: "🏅" },
            { rank: 9, name: " Virat", points: 1420, location: " Pune", crops: ["Chili Peppers", "Corn", "Beans"], badge: "🏅" },
            { rank: 10, name: "Gowtham", points: 1380, location: "Ahmedabad", crops: ["Apples", "Cherries", "Pears"], badge: "🏅" },
            { rank: 11, name: " Mohammed Sakhil", points: 1350, location: "Jaipur", crops: ["Lettuce", "Spinach", "Kale"], badge: "🏅" },
            { rank: 12, name: "Sakthivel", points: 1320, location: "Surat", crops: ["Soybeans", "Corn", "Wheat"], badge: "🏅" },
            { rank: 13, name: "Anand", points: 1280, location: "Lucknow", crops: ["Cotton", "Alfalfa", "Citrus"], badge: "🏅" },
            { rank: 14, name: "Manoranjithan", points: 1250, location: "Kanpur", crops: ["Hay", "Wheat", "Barley"], badge: "🏅" },
            { rank: 15, name: "Abiraj", points: 1220, location: "Nagpur", crops: ["Potatoes", "Sugar Beets", "Wheat"], badge: "🏅" },
            { rank: 16, name: "Gokul", points: 1190, location: "Indore", crops: ["Hay", "Barley", "Oats"], badge: "🏅" },
            { rank: 17, name: "Gopal", points: 1160, location: "Bhopal", crops: ["Wheat", "Sunflowers", "Canola"], badge: "🏅" },
            { rank: 18, name: "Saravanan", points: 1130, location: "Patna", crops: ["Corn", "Soybeans", "Wheat"], badge: "🏅" },
            { rank: 19, name: "Sarvan", points: 1100, location: "Varanasi", crops: ["Potatoes", "Carrots", "Cabbage"], badge: "🏅" },
            { rank: 20, name: "Mohit Garg", points: 1070, location: "Agra", crops: ["Coffee", "Macadamia", "Pineapples"], badge: "🏅" },
            { rank: 21, name: "Himanshu tyagi", points: 1040, location: "Prayagraj", crops: ["Maple Syrup", "Dairy", "Hay"], badge: "🏅" },
            { rank: 22, name: "Mohit Sharma", points: 1010, location: "Ghaziabad", crops: ["Blueberries", "Potatoes", "Lobster"], badge: "🏅" },
            { rank: 23, name: "Vikarant Gujjar", points: 980, location: "Faridabad", crops: ["Apples", "Maple Syrup", "Hay"], badge: "🏅" },
            { rank: 24, name: "Aman", points: 950, location: "Gurugram", crops: ["Cranberries", "Dairy", "Vegetables"], badge: "🏅" },
            { rank: 25, name: "Kartik Bhardwaj", points: 920, location: "Chandigarh", crops: ["Tobacco", "Dairy", "Vegetables"], badge: "🏅" },
            { rank: 26, name: "Vibhav malik", points: 890, location: "Amritsar", crops: ["Dairy", "Vegetables", "Flowers"], badge: "🏅" },
            { rank: 27, name: "Kanagaraj", points: 860, location: "Lundhiana", crops: ["Soybeans", "Corn", "Vegetables"], badge: "🏅" },
            { rank: 28, name: "Prashant", points: 830, location: "Rajkot", crops: ["Tobacco", "Soybeans", "Corn"], badge: "🏅" },
            { rank: 29, name: "Aarif", points: 800, location: "Vadodra", crops: ["Apples", "Hay", "Cattle"], badge: "🏅" },
            { rank: 30, name: "Vignesh", points: 770, location: "Coimbatore", crops: ["Tobacco", "Soybeans", "Peanuts"], badge: "🏅" },
            { rank: 31, name: "Nagaraj", points: 740, location: "Madurai", crops: ["Tobacco", "Sweet Potatoes", "Soybeans"], badge: "🏅" },
            { rank: 32, name: "Yogesh", points: 710, location: "Mysuru", crops: ["Cotton", "Tobacco", "Peaches"], badge: "🏅" },
            { rank: 33, name: "Raj kumar", points: 680, location: "Tiruchirappalli", crops: ["Peanuts", "Cotton", "Peaches"], badge: "🏅" },
            { rank: 34, name: "Raman", points: 650, location: "Mangaluru", crops: ["Cotton", "Peanuts", "Soybeans"], badge: "🏅" },
            { rank: 35, name: "Sundar", points: 620, location: "Thiruvananthapuram", crops: ["Cotton", "Soybeans", "Rice"], badge: "🏅" },
            { rank: 36, name: "Hafsha", points: 590, location: "Kochi", crops: ["Rice", "Sugarcane", "Soybeans"], badge: "🏅" },
            { rank: 37, name: "Gopika", points: 560, location: "Kozhikode", crops: ["Rice", "Soybeans", "Cotton"], badge: "🏅" },
            { rank: 38, name: "Ikshana", points: 530, location: "Bhubansewar", crops: ["Soybeans", "Corn", "Cotton"], badge: "🏅" },
            { rank: 39, name: "Mohanambiga", points: 500, location: "Cuttack", crops: ["Tobacco", "Corn", "Soybeans"], badge: "🏅" },
            { rank: 40, name: "Jagmohan", points: 470, location: "Ranchi", crops: ["Soybeans", "Corn", "Cattle"], badge: "🏅" },
            { rank: 41, name: "Kennady", points: 440, location: "Jamshedpur", crops: ["Corn", "Soybeans", "Wheat"], badge: "🏅" },
            { rank: 42, name: "Hardik Pandya", points: 410, location: "Guwahati", crops: ["Corn", "Soybeans", "Tomatoes"], badge: "🏅" },
            { rank: 43, name: "Japsprit Bumrah", points: 380, location: "Shillong", crops: ["Corn", "Soybeans", "Wheat"], badge: "🏅" },
            { rank: 44, name: "Hariharan", points: 350, location: "Gangtok", crops: ["Corn", "Soybeans", "Cherries"], badge: "🏅" },
            { rank: 45, name: "Ishan Kishan", points: 320, location: "Shimla", crops: ["Corn", "Dairy", "Cranberries"], badge: "🏅" },
            { rank: 46, name: "Krunal Pandya", points: 290, location: "Bombay", crops: ["Corn", "Soybeans", "Dairy"], badge: "🏅" },
            { rank: 47, name: "Sanjay", points: 260, location: "Pollachi", crops: ["Corn", "Dairy", "Apples"], badge: "🏅" },
            { rank: 48, name: "Akshit", points: 230, location: "Bhagpat", crops: ["Vegetables", "Fruits", "Nursery"], badge: "🏅" },
            { rank: 49, name: "Sujeet Sharma", points: 200, location: "Madurai", crops: ["Hay", "Alfalfa", "Cattle"], badge: "🏅" },
            { rank: 50, name: "Kush", points: 170, location: "Ahemabad", crops: ["Wheat", "Cattle", "Cotton"], badge: "🏅" }
        ];

        const DarkModeContext = React.createContext();
        const ThemeToggle = () => {
            const { isDark, toggleDark } = React.useContext(DarkModeContext);
            
            return (
                <button
                    onClick={toggleDark}
                    className={`p-3 rounded-full transition-all duration-300 ${
                        isDark 
                            ? 'bg-yellow-400 text-gray-900 hover:bg-yellow-300' 
                            : 'bg-gray-800 text-white hover:bg-gray-700'
                    }`}
                >
                    {isDark ? <i className="fas fa-sun text-xl"></i> : <i className="fas fa-moon text-xl"></i>}
                </button>
            );
        };

        const Header = () => {
            const { isDark } = React.useContext(DarkModeContext);
            
            return (
                <header className={`${isDark ? 'bg-gray-800' : 'bg-white'} shadow-lg sticky top-0 z-50`}>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between items-center py-4">
                            <div className="flex items-center space-x-3">
                                <div className="text-3xl">🌾</div>
                                <div>
                                    <h1 className="text-2xl font-bold text-green-600">KrishiQuest</h1>
                                    <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                                        Sustainable Farming Platform
                                    </p>
                                </div>
                            </div>
                            <ThemeToggle />
                        </div>
                    </div>
                </header>
            );
        };
        const Dashboard = () => {
            const { isDark } = React.useContext(DarkModeContext);
            const currentFarmer = sampleFarmers[0];
            const [streakCount, setStreakCount] = useState(() => {
                const saved = localStorage.getItem('kq_streak_count');
                return saved ? parseInt(saved, 10) : 0;
            });
            const [lastCheckDate, setLastCheckDate] = useState(() => localStorage.getItem('kq_last_check_date') || '');
            const [quests, setQuests] = useState([
                { id: 1, title: 'Water tomatoes today', points: 20, done: false },
                { id: 2, title: 'Check soil moisture', points: 15, done: false },
                { id: 3, title: 'Add compost to beds', points: 25, done: false }
            ]);
            const [advisoryLocation, setAdvisoryLocation] = useState(currentFarmer.location);
            const [irArea, setIrArea] = useState('');
            const [irDepth, setIrDepth] = useState('');
            const litersNeeded = (() => {
                const area = parseFloat(irArea);
                const depth = parseFloat(irDepth);
                if (isNaN(area) || isNaN(depth)) return 0;
                return Math.max(0, Math.round(area * depth));
            })();

            useEffect(() => {
                localStorage.setItem('kq_streak_count', String(streakCount));
                if (lastCheckDate) localStorage.setItem('kq_last_check_date', lastCheckDate);
            }, [streakCount, lastCheckDate]);

            const markTodayDone = () => {
                const today = new Date().toISOString().slice(0, 10);
                if (today === lastCheckDate) return;
                const yesterday = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString().slice(0, 10);
                const newCount = lastCheckDate === yesterday ? streakCount + 1 : 1;
                setStreakCount(newCount);
                setLastCheckDate(today);
            };

            const toggleQuest = (id) => {
                setQuests((prev) => prev.map(q => q.id === id ? { ...q, done: !q.done } : q));
            };
            
            return (
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="mb-8">
                        <h2 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-2`}>
                            Welcome, {currentFarmer.name}! 👋
                        </h2>
                        <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                            Your sustainable farming journey continues
                        </p>
                    </div>

                    {}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                        <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-xl p-6 shadow-lg card-hover`}>
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className={`text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                                        Your Level
                                    </p>
                                    <p className="text-3xl font-bold text-blue-600">{currentFarmer.level}</p>
                                </div>
                                <div className="text-4xl">⭐</div>
                            </div>
                        </div>

                        <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-xl p-6 shadow-lg card-hover`}>
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className={`text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                                        Points
                                    </p>
                                    <p className="text-3xl font-bold text-green-600">{currentFarmer.points}</p>
                                </div>
                                <div className="text-4xl">🏆</div>
                            </div>
                        </div>

                        <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-xl p-6 shadow-lg card-hover`}>
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className={`text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                                        Sustainability Score
                                    </p>
                                    <p className="text-3xl font-bold text-purple-600">{currentFarmer.sustainabilityScore}%</p>
                                </div>
                                <div className="text-4xl">🌱</div>
                            </div>
                        </div>

                        <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-xl p-6 shadow-lg card-hover`}>
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className={`text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                                        Badges
                                    </p>
                                    <p className="text-3xl font-bold text-yellow-600">{currentFarmer.badges.length}</p>
                                </div>
                                <div className="text-4xl">🎖️</div>
                            </div>
                        </div>
                    </div>

                    {}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-xl p-6 shadow-lg card-hover`}>
                            <div className="flex items-center justify-between mb-3">
                                <h3 className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>Daily Streak</h3>
                                <div className="text-3xl">🔥</div>
                            </div>
                            <p className={`text-sm mb-3 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Complete at least one task daily.</p>
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-3xl font-bold text-orange-500">{streakCount} days</p>
                                    <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Current streak</p>
                                </div>
                                <button
                                    onClick={markTodayDone}
                                    className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 text-sm"
                                >
                                    Mark today done
                                </button>
                            </div>
                        </div>

                        <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-xl p-6 shadow-lg card-hover`}>
                            <div className="flex items-center justify-between mb-3">
                                <h3 className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>Daily Quests</h3>
                                <div className="text-3xl">🎯</div>
                            </div>
                            <ul className="space-y-2">
                                {quests.map((q) => (
                                    <li key={q.id} className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <input type="checkbox" checked={q.done} onChange={() => toggleQuest(q.id)} />
                                            <span className={`${q.done ? 'line-through text-green-600' : isDark ? 'text-white' : 'text-gray-900'}`}>{q.title}</span>
                                        </div>
                                        <span className="text-sm text-yellow-600 font-medium">+{q.points} pts</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {}
                    <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-xl p-6 shadow-lg mb-8`}>
                        <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                            Progress to Next Level
                        </h3>
                        <div className="w-full bg-gray-200 rounded-full h-4">
                            <div 
                                className="bg-gradient-to-r from-green-400 to-blue-500 h-4 rounded-full progress-bar" 
                                style={{width: '75%'}}
                            ></div>
                        </div>
                        <p className={`text-sm mt-2 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                            Earn 750 more points to reach the next level
                        </p>
                    </div>

                    {}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-xl p-6 shadow-lg`}>
                            <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Agri Advisory</h3>
                            <div className="flex items-center gap-3 mb-4">
                                <input
                                    type="text"
                                    value={advisoryLocation}
                                    onChange={(e) => setAdvisoryLocation(e.target.value)}
                                    placeholder="Enter location"
                                    className={`flex-1 px-3 py-2 rounded-lg border focus:outline-none focus:ring-2 ${
                                        isDark ? 'bg-gray-700 border-gray-600 text-white focus:ring-green-500' : 'bg-white border-gray-300 text-gray-900 focus:ring-green-500'
                                    }`}
                                />
                            </div>
                            <div className="space-y-2 text-sm">
                                <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                                    Tip: Mulch around plants to reduce evaporation by 25-50%.
                                </p>
                                <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                                    Advisory for {advisoryLocation || 'your area'}: Water early morning, monitor pests, and prefer bio-inputs this week.
                                </p>
                            </div>
                        </div>

                        <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-xl p-6 shadow-lg`}>
                            <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Irrigation Calculator</h3>
                            <div className="grid grid-cols-1 gap-3 mb-3">
                                <div className="flex items-center gap-3">
                                    <label className={`w-32 text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Area (m²)</label>
                                    <input
                                        type="number"
                                        min="0"
                                        value={irArea}
                                        onChange={(e) => setIrArea(e.target.value)}
                                        className={`flex-1 px-3 py-2 rounded-lg border ${isDark ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'}`}
                                    />
                                </div>
                                <div className="flex items-center gap-3">
                                    <label className={`w-32 text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Depth (mm)</label>
                                    <input
                                        type="number"
                                        min="0"
                                        value={irDepth}
                                        onChange={(e) => setIrDepth(e.target.value)}
                                        className={`flex-1 px-3 py-2 rounded-lg border ${isDark ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'}`}
                                    />
                                </div>
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-blue-600">{litersNeeded} L</p>
                                <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Estimated water needed</p>
                            </div>
                        </div>
                    </div>

                    {}
                    <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-xl p-6 shadow-lg`}>
                        <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                            Your Badges
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {currentFarmer.badges.map((badge, index) => (
                                <div key={index} className="flex items-center space-x-3 p-4 bg-green-50 rounded-lg badge-glow">
                                    <div className="text-2xl">🏅</div>
                                    <div>
                                        <p className="font-semibold text-green-800">{badge}</p>
                                        <p className="text-sm text-green-600">Earned</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            );
        };

      
        const Challenges = () => {
            const { isDark } = React.useContext(DarkModeContext);
            const [selectedChallenge, setSelectedChallenge] = useState(null);
            const [challengeProgress, setChallengeProgress] = useState({});
            const [taskProgress, setTaskProgress] = useState({});
            
            const handleChallengeAction = (challengeId, action) => {
                const currentProgress = challengeProgress[challengeId] || 0;
                let newProgress = currentProgress;
                
                if (action === 'yes') {
                    newProgress = Math.min(currentProgress + 25, 100);
                   
                    const currentTaskProgress = taskProgress[challengeId] || {};
                    const challenge = sampleChallenges.find(c => c.id === challengeId);
                    if (challenge) {
                        challenge.crops.forEach((crop, cropIndex) => {
                            const currentTaskIndex = currentTaskProgress[cropIndex] || 0;
                            if (currentTaskIndex < crop.taskSequence.length - 1) {
                                currentTaskProgress[cropIndex] = currentTaskIndex + 1;
                            }
                        });
                        setTaskProgress({
                            ...taskProgress,
                            [challengeId]: currentTaskProgress
                        });
                    }
                } else if (action === 'no') {
                    newProgress = Math.max(currentProgress - 10, 0);
                    
                    const currentTaskProgress = taskProgress[challengeId] || {};
                    const challenge = sampleChallenges.find(c => c.id === challengeId);
                    if (challenge) {
                        challenge.crops.forEach((crop, cropIndex) => {
                            const currentTaskIndex = currentTaskProgress[cropIndex] || 0;
                            if (currentTaskIndex > 0) {
                                currentTaskProgress[cropIndex] = currentTaskIndex - 1;
                            }
                        });
                        setTaskProgress({
                            ...taskProgress,
                            [challengeId]: currentTaskProgress
                        });
                    }
                }
                
                setChallengeProgress({
                    ...challengeProgress,
                    [challengeId]: newProgress
                });
            };
            
            const getFarmerName = (farmerId) => {
                const farmer = sampleFarmers.find(f => f.id === farmerId);
                return farmer ? farmer.name : 'Unknown Farmer';
            };
            
            const getCurrentTask = (challengeId, cropIndex) => {
                const challenge = sampleChallenges.find(c => c.id === challengeId);
                if (!challenge) return '';
                
                const currentTaskIndex = taskProgress[challengeId]?.[cropIndex] || 0;
                return challenge.crops[cropIndex].taskSequence[currentTaskIndex] || '';
            };
            
            const getTaskStatus = (challengeId, cropIndex, taskIndex) => {
                const currentTaskIndex = taskProgress[challengeId]?.[cropIndex] || 0;
                if (taskIndex < currentTaskIndex) return 'completed';
                if (taskIndex === currentTaskIndex) return 'current';
                return 'pending';
            };
            
            return (
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="mb-8">
                        <h2 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-2`}>
                            Challenges & Missions
                        </h2>
                        <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                            Accept new challenges for sustainable farming
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {sampleChallenges.map((challenge) => {
                            const currentProgress = challengeProgress[challenge.id] || challenge.progress;
                            const isCompleted = currentProgress === 100;
                            
                            return (
                                <div key={challenge.id} className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-xl p-6 shadow-lg card-hover`}>
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="text-3xl">{challenge.icon}</div>
                                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                                            challenge.difficulty === 'Easy' ? 'bg-green-100 text-green-800' :
                                            challenge.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                                            'bg-red-100 text-red-800'
                                        }`}>
                                            {challenge.difficulty}
                                        </span>
                                    </div>
                                    
                                    <h3 className={`text-xl font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                        {challenge.title}
                                    </h3>
                                    
                                    <p className={`text-sm mb-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                                        {challenge.description}
                                    </p>
                                    
                                    {}
                                    <div className="mb-4 p-3 bg-blue-50 rounded-lg">
                                        <p className="text-sm font-semibold text-blue-800 mb-2">
                                            Farmer: {getFarmerName(challenge.farmerId)}
                                        </p>
                                        <div className="space-y-2">
                                            {challenge.crops.map((crop, index) => (
                                                <div key={index} className="flex justify-between items-center text-xs">
                                                    <span className="font-medium text-blue-700">{crop.name}</span>
                                                    <div className="flex items-center space-x-2">
                                                        <span className="text-blue-600">{crop.growth}</span>
                                                        <div className="w-16 bg-blue-200 rounded-full h-1">
                                                            <div 
                                                                className="bg-blue-600 h-1 rounded-full" 
                                                                style={{width: `${crop.progress}%`}}
                                                            ></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    
                                    <div className="mb-4">
                                        <div className="flex justify-between text-sm mb-1">
                                            <span className={isDark ? 'text-gray-300' : 'text-gray-600'}>Challenge Progress</span>
                                            <span className={isDark ? 'text-gray-300' : 'text-gray-600'}>{currentProgress}%</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                            <div 
                                                className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full progress-bar" 
                                                style={{width: `${currentProgress}%`}}
                                            ></div>
                                        </div>
                                    </div>
                                    
                                    {}
                                    <div className="flex justify-between items-center mb-4">
                                        <div className="flex space-x-4 text-sm">
                                            <span className="flex items-center text-yellow-600">
                                                <i className="fas fa-star mr-1"></i>
                                                {challenge.points}
                                            </span>
                                            <span className={`flex items-center ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                                                <i className="fas fa-clock mr-1"></i>
                                                {challenge.duration}
                                            </span>
                                        </div>
                                    </div>
                                    
                                    {!isCompleted ? (
                                        <div className="flex space-x-2">
                                            <button 
                                                onClick={() => handleChallengeAction(challenge.id, 'yes')}
                                                className="flex-1 bg-green-600 text-white px-3 py-2 rounded-lg hover:bg-green-700 transition-colors text-sm"
                                            >
                                                ✅ Yes, Done!
                                            </button>
                                            <button 
                                                onClick={() => handleChallengeAction(challenge.id, 'no')}
                                                className="flex-1 bg-red-600 text-white px-3 py-2 rounded-lg hover:bg-red-700 transition-colors text-sm"
                                            >
                                                ❌ Not Yet
                                            </button>
                                        </div>
                                    ) : (
                                        <div className="text-center">
                                            <div className="text-green-600 text-lg mb-2">🎉 Challenge Complete!</div>
                                            <button 
                                                onClick={() => {
                                                    setChallengeProgress({...challengeProgress, [challenge.id]: 0});
                                                    setTaskProgress({...taskProgress, [challenge.id]: {}});
                                                }}
                                                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm"
                                            >
                                                Restart Challenge
                                            </button>
                                        </div>
                                    )}
                                    
                                    {}
                                    <div className="mt-4 p-3 bg-yellow-50 rounded-lg">
                                        <p className="text-sm font-semibold text-yellow-800 mb-2">Current Tasks:</p>
                                        <ul className="text-xs text-yellow-700 space-y-1">
                                            {challenge.crops.map((crop, index) => (
                                                <li key={index}>• {crop.name}: {getCurrentTask(challenge.id, index) || crop.nextTask}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    
                                    {}
                                    <div className="mt-3 p-3 bg-purple-50 rounded-lg">
                                        <p className="text-sm font-semibold text-purple-800 mb-2">Task Progress:</p>
                                        <div className="space-y-2">
                                            {challenge.crops.map((crop, cropIndex) => (
                                                <div key={cropIndex} className="text-xs">
                                                    <p className="font-medium text-purple-700 mb-1">{crop.name}:</p>
                                                    <div className="flex flex-wrap gap-1">
                                                        {crop.taskSequence.map((task, taskIndex) => {
                                                            const status = getTaskStatus(challenge.id, cropIndex, taskIndex);
                                                            return (
                                                                <span 
                                                                    key={taskIndex} 
                                                                    className={`px-2 py-1 rounded-full text-xs ${
                                                                        status === 'completed' ? 'bg-green-200 text-green-800' :
                                                                        status === 'current' ? 'bg-blue-200 text-blue-800' :
                                                                        'bg-gray-200 text-gray-600'
                                                                    }`}
                                                                >
                                                                    {status === 'completed' ? '✅' : status === 'current' ? '🔄' : '⏳'} {taskIndex + 1}. {task}
                                                                </span>
                                                            );
                                                        })}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            );
        };


        const Leaderboard = () => {
            const { isDark } = React.useContext(DarkModeContext);
            const [searchTerm, setSearchTerm] = useState('');
            const normalize = (s) => (s || '').toString().toLowerCase();
            const filteredLeaderboard = sampleLeaderboard.filter((farmer) => {
                const q = normalize(searchTerm);
                if (!q) return true;
                return (
                    normalize(farmer.name).includes(q) ||
                    normalize(farmer.location).includes(q)
                );
            });

            return (
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="mb-8">
                        <h2 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-2`}>
                            Leaderboard
                        </h2>
                        <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                            Top sustainable farmers ranking
                        </p>
                    </div>

                    <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow-lg overflow-hidden`}>
                        <div className="p-6 border-b border-gray-200">
                            <h3 className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                Regional Rankings
                            </h3>
                            <div className="mt-4 flex items-center gap-3">
                                <div className="relative flex-1">
                                    <input
                                        type="text"
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        placeholder="Search by name or location"
                                        className={`w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 ${
                                            isDark
                                                ? 'bg-gray-700 border-gray-600 text-white focus:ring-green-500 placeholder-gray-400'
                                                : 'bg-white border-gray-300 text-gray-900 focus:ring-green-500 placeholder-gray-500'
                                        }`}
                                    />
                                    <i className={`fas fa-search absolute right-3 top-1/2 -translate-y-1/2 ${isDark ? 'text-gray-300' : 'text-gray-500'}`}></i>
                                </div>
                                {searchTerm && (
                                    <button
                                        onClick={() => setSearchTerm('')}
                                        className="px-3 py-2 rounded-lg text-sm bg-gray-200 hover:bg-gray-300 text-gray-700"
                                    >
                                        Clear
                                    </button>
                                )}
                            </div>
                        </div>
                        
                        <div className="divide-y divide-gray-200">
                            {filteredLeaderboard.map((farmer) => (
                                <div key={farmer.rank} className="p-6 hover:bg-gray-50 transition-colors">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-4">
                                            <div className="text-2xl">{farmer.badge}</div>
                                            <div>
                                                <h4 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                                    {farmer.name}
                                                </h4>
                                                <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                                                    {farmer.location}
                                                </p>
                                                <div className="flex flex-wrap gap-1 mt-1">
                                                    {farmer.crops.map((crop, index) => (
                                                        <span key={index} className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                                                            {crop}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-2xl font-bold text-green-600">{farmer.points}</p>
                                            <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Points</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            );
        };

       
        const Profile = () => {
            const { isDark } = React.useContext(DarkModeContext);
            const currentFarmer = sampleFarmers[0];
            const [contact, setContact] = useState(() => {
                try {
                    const saved = localStorage.getItem('kq_profile_contact');
                    return saved ? JSON.parse(saved) : { email: '', phone: '' };
                } catch (e) {
                    return { email: '', phone: '' };
                }
            });
            const [notes, setNotes] = useState(() => localStorage.getItem('kq_profile_notes') || '');

            useEffect(() => {
                localStorage.setItem('kq_profile_contact', JSON.stringify(contact));
            }, [contact]);

            useEffect(() => {
                localStorage.setItem('kq_profile_notes', notes);
            }, [notes]);

            const downloadProfileJson = () => {
                const data = {
                    name: currentFarmer.name,
                    location: currentFarmer.location,
                    crops: currentFarmer.crops,
                    farmSize: currentFarmer.farmSize,
                    level: currentFarmer.level,
                    points: currentFarmer.points,
                    sustainabilityScore: currentFarmer.sustainabilityScore,
                    badges: currentFarmer.badges,
                    contact,
                    notes
                };
                const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = 'krishiquest-profile.json';
                a.click();
                URL.revokeObjectURL(url);
            };
            
            return (
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="mb-8">
                        <h2 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-2`}>
                            Profile
                        </h2>
                        <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                            Your farming information and achievements
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Profile Info */}
                        <div className="lg:col-span-1">
                            <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-xl p-6 shadow-lg`}>
                                <div className="text-center">
                                    <div className="text-6xl mb-4">{currentFarmer.avatar}</div>
                                    <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-2`}>
                                        {currentFarmer.name}
                                    </h3>
                                    <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'} mb-4`}>
                                        {currentFarmer.location}
                                    </p>
                                    
                                    <div className="space-y-3">
                                        <div className="flex justify-between">
                                            <span className={isDark ? 'text-gray-300' : 'text-gray-600'}>Crops:</span>
                                            <div className="flex flex-wrap gap-1">
                                                {currentFarmer.crops.map((crop, index) => (
                                                    <span key={index} className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                                                        {crop}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className={isDark ? 'text-gray-300' : 'text-gray-600'}>Farm Size:</span>
                                            <span className={isDark ? 'text-white' : 'text-gray-900'}>{currentFarmer.farmSize}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className={isDark ? 'text-gray-300' : 'text-gray-600'}>Level:</span>
                                            <span className="text-blue-600 font-bold">{currentFarmer.level}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {}
                        <div className="lg:col-span-2">
                            <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-xl p-6 shadow-lg`}>
                                <h3 className={`text-xl font-semibold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                    Achievements & Statistics
                                </h3>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                    <div className="text-center p-4 bg-green-50 rounded-lg">
                                        <div className="text-3xl font-bold text-green-600 mb-2">{currentFarmer.points}</div>
                                        <div className="text-sm text-green-800">Total Points</div>
                                    </div>
                                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                                        <div className="text-3xl font-bold text-blue-600 mb-2">{currentFarmer.sustainabilityScore}%</div>
                                        <div className="text-sm text-blue-800">Sustainability Score</div>
                                    </div>
                                </div>

                                <div>
                                    <h4 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                        Earned Badges
                                    </h4>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {currentFarmer.badges.map((badge, index) => (
                                            <div key={index} className="flex items-center space-x-3 p-3 bg-yellow-50 rounded-lg">
                                                <div className="text-2xl">🏅</div>
                                                <div>
                                                    <p className="font-semibold text-yellow-800">{badge}</p>
                                                    <p className="text-sm text-yellow-600">Earned</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {}
                                <div className="mt-8">
                                    <h4 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                        Farm Health Summary
                                    </h4>
                                    <div className="space-y-4">
                                        {[{label:'Soil Health', value: 78, color:'from-amber-400 to-green-500'}, {label:'Water Efficiency', value: 82, color:'from-blue-400 to-indigo-500'}, {label:'Biodiversity', value: 69, color:'from-emerald-400 to-teal-500'}].map((m, idx) => (
                                            <div key={idx}>
                                                <div className={`flex justify-between text-sm mb-1 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                                                    <span>{m.label}</span>
                                                    <span>{m.value}%</span>
                                                </div>
                                                <div className="w-full bg-gray-200 rounded-full h-2">
                                                    <div className={`bg-gradient-to-r ${m.color} h-2 rounded-full progress-bar`} style={{ width: `${m.value}%` }}></div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {}
                                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className={`${isDark ? 'bg-gray-900' : 'bg-gray-50'} rounded-lg p-4`}>
                                        <h5 className={`text-md font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>Contact</h5>
                                        <div className="space-y-3">
                                            <div className="flex items-center gap-2">
                                                <i className="fas fa-envelope text-gray-500"></i>
                                                <input
                                                    type="email"
                                                    placeholder="Email"
                                                    value={contact.email}
                                                    onChange={(e) => setContact({ ...contact, email: e.target.value })}
                                                    className={`${isDark ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-300 text-gray-900'} w-full px-3 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-green-500`}
                                                />
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <i className="fas fa-phone text-gray-500"></i>
                                                <input
                                                    type="tel"
                                                    placeholder="Phone"
                                                    value={contact.phone}
                                                    onChange={(e) => setContact({ ...contact, phone: e.target.value })}
                                                    className={`${isDark ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-300 text-gray-900'} w-full px-3 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-green-500`}
                                                />
                                            </div>
                                            <button
                                                onClick={downloadProfileJson}
                                                className="mt-2 px-3 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 text-sm"
                                            >
                                                Download Profile JSON
                                            </button>
                                        </div>
                                    </div>

                                    <div className={`${isDark ? 'bg-gray-900' : 'bg-gray-50'} rounded-lg p-4`}>
                                        <h5 className={`text-md font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>My Notes</h5>
                                        <textarea
                                            rows="6"
                                            value={notes}
                                            onChange={(e) => setNotes(e.target.value)}
                                            placeholder="Write important observations, tasks, or ideas..."
                                            className={`${isDark ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-300 text-gray-900'} w-full px-3 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-green-500`}
                                        />
                                        <p className={`mt-2 text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Autosaved locally on your device.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        };


        const Navigation = ({ activeTab, setActiveTab }) => {
            const { isDark } = React.useContext(DarkModeContext);
            
            const tabs = [
                { id: 'dashboard', label: 'Dashboard', icon: 'fas fa-home' },
                { id: 'challenges', label: 'Challenges', icon: 'fas fa-tasks' },
                { id: 'leaderboard', label: 'Leaderboard', icon: 'fas fa-trophy' },
                { id: 'profile', label: 'Profile', icon: 'fas fa-user' }
            ];
            
            return (
                <nav className={`${isDark ? 'bg-gray-800' : 'bg-white'} shadow-lg sticky bottom-0 z-50`}>
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="flex justify-around">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`flex flex-col items-center py-3 px-4 transition-colors ${
                                        activeTab === tab.id
                                            ? 'text-green-600 border-t-2 border-green-600'
                                            : isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                                    }`}
                                >
                                    <i className={`${tab.icon} text-xl mb-1`}></i>
                                    <span className="text-xs font-medium">{tab.label}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                </nav>
            );
        };

        
        const App = () => {
            const [activeTab, setActiveTab] = useState('dashboard');
            const [isDark, setIsDark] = useState(false);

            const toggleDark = () => {
                setIsDark(!isDark);
                document.body.classList.toggle('dark');
            };

            const renderContent = () => {
                switch (activeTab) {
                    case 'dashboard':
                        return <Dashboard />;
                    case 'challenges':
                        return <Challenges />;
                    case 'leaderboard':
                        return <Leaderboard />;
                    case 'profile':
                        return <Profile />;
                    default:
                        return <Dashboard />;
                }
            };

            return (
                <DarkModeContext.Provider value={{ isDark, toggleDark }}>
                    <div className={`min-h-screen ${isDark ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
                        <Header />
                        <main className="pb-20">
                            {renderContent()}
                        </main>
                        <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
                    </div>
                </DarkModeContext.Provider>
            );
        };
        ReactDOM.render(<App />, document.getElementById('root'));
