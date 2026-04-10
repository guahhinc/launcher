const gamesData = {
    'piggy': { title: 'Piggy', developer: 'MiniToon', genre: 'Horror', year: 2020, img: 'https://tr.rbxcdn.com/180DAY-9a6167eabc17cccd69511f6213e94b03/768/432/Image/Webp/noFilter', page: 'game-detail-piggy', launchUrl: 'roblox://placeId=4623386862', placeId: '4623386862', tags: ['Horror', 'Survival', 'Round-based', 'Escape'], description: 'Do you have what it takes to escape Piggy and uncover the mysteries surrounding the beast?' },
    '3008': { title: '3008', developer: 'uglyburger0', genre: 'Horror', year: 2019, img: 'https://tr.rbxcdn.com/180DAY-1393cf4ea0d2cb4e97bc0a05938822e6/768/432/Image/Webp/noFilter', page: 'game-detail-3008', launchUrl: 'roblox://placeId=2768379856', placeId: '2768379856', tags: ['Horror', 'Survival', 'Building', 'Open World'], description: 'Wander through the vast horror land of home hardware located within 3008-1. Build a base, survive from employees.' },
    'smile': { title: 'Infectious Smile', developer: 'Laughable_Sponge', genre: 'Survival', year: 2020, img: 'https://tr.rbxcdn.com/180DAY-792578a0730d4dcf6dbac9fd15de33e0/768/432/Image/Webp/noFilter', page: 'game-detail-smile', launchUrl: 'roblox://placeId=5985232436', placeId: '5985232436', tags: ['Survival', 'Infection', 'Action', 'Round-based'], description: 'As ordinary people we all strive to find true happiness in life. But no... not like this.... something is REALLY off about this...' },
    'epic': { title: 'Epic Minigames ✨', developer: 'TypicalType', genre: 'Party', year: 2015, img: 'https://tr.rbxcdn.com/180DAY-7ee35d19e13cefd730129cf99268792c/768/432/Image/Webp/noFilter', page: 'game-detail-epic', launchUrl: 'roblox://placeId=277751860', placeId: '277751860', tags: ['Party', 'Minigames', 'Competitive', 'Social'], description: 'Enjoy a collection of 140 unique and exciting minigames! Level up and earn coins by winning rounds.' },
    'shark': { title: 'SharkBite Classic 🦈', developer: 'Abracadabra', genre: 'Survival', year: 2017, img: 'https://tr.rbxcdn.com/180DAY-8af54bd04cab100361501d9c38211f4e/768/432/Image/Webp/noFilter', page: 'game-detail-shark', launchUrl: 'roblox://placeId=734159876', placeId: '734159876', tags: ['Survival', 'Vehicles', 'Action', 'Round-based'], description: 'Join your friends in a battle of survival against the boat eating shark. Use your weapon to fight off the shark.' },
    'phantom': { title: 'Phantom Forces', developer: 'Stylis Studios', genre: 'Shooter', year: 2015, img: 'https://tr.rbxcdn.com/180DAY-bf6f7058336de36c002dc58d33e9c101/768/432/Image/Webp/noFilter', page: 'game-detail-phantom', launchUrl: 'roblox://placeId=292439477', placeId: '292439477', tags: ['Shooter', 'FPS', 'Tactical', 'Competitive'], description: 'Intense tactical first person shooter. Thank you for continuing support for PF for over 10 years!' },
    'murdurr': { title: 'MurDurr', developer: 'braxworks', genre: 'Horror', year: 2025, img: 'https://tr.rbxcdn.com/180DAY-bfdb4c4f5bad565d32ce203e375dc288/768/432/Image/Webp/noFilter', page: 'game-detail-murdurr', launchUrl: 'roblox://placeId=79735281630764', placeId: '79735281630764', tags: ['Horror', 'Survival', 'Round-based', 'Retro'], description: 'Durr has turned evil… and he is hungry. Inspired by orange the killer and you vs homer.' },
    'untitled': { title: 'untitled tag game', developer: 'typical_type', genre: 'Party', year: 2023, img: 'https://tr.rbxcdn.com/180DAY-cd834c110aa147df9bc89a79fece32ea/768/432/Image/Webp/noFilter', page: 'game-detail-untitled', launchUrl: 'roblox://placeId=14044547200', placeId: '14044547200', tags: ['Party', 'Movement', 'Parkour', 'Action'], description: 'Play variations of tag with advanced movement, such as climbing, sliding, rolling, and vaulting!' },
    'retro': { title: 'RetroStudio', developer: 'Retro Dev', genre: 'Social', year: 2020, img: 'https://tr.rbxcdn.com/180DAY-9e4fae118735bc44c824d52e7c7799f0/768/432/Image/Webp/noFilter', page: 'game-detail-retro', launchUrl: 'roblox://placeId=5846386835', placeId: '5846386835', tags: ['Social', 'Building', 'Retro', 'Simulation'], description: 'Create and play your own classic Roblox games. Simulation of any time period between 2009 and 2015.' },
    'combat': { title: 'Combat Initiation', developer: 'Combat Devs', genre: 'Action', year: 2024, img: 'https://tr.rbxcdn.com/180DAY-6c257588551cecd73f962d8165e6b9f1/768/432/Image/Webp/noFilter', page: 'game-detail-combat', launchUrl: 'roblox://placeId=13559635034', placeId: '13559635034', tags: ['Action', 'Retro', 'Arena', 'Movement'], description: 'Fast-paced arena brickbattle game. Choose your weapons and tools to ascend the spire of death.' },
    'knockout': { title: 'Knockout! 🐧', developer: 'braxworks', genre: 'Party', year: 2024, img: 'https://tr.rbxcdn.com/180DAY-f75a05b251c9fdb0c762a3bd997a2901/768/432/Image/Webp/noFilter', page: 'game-detail-knockout', launchUrl: 'roblox://placeId=136764190843219', placeId: '136764190843219', tags: ['Party', 'Minigames', 'Skill', 'Social'], description: 'Out-maneuver to be the last penguin standing! Predicted movement and ice survival.' },
    'adopt': { title: 'Adopt Me!', developer: 'Uplift Games', genre: 'RPG', year: 2017, img: 'https://tr.rbxcdn.com/180DAY-dc544ac25d03f485d6a58f79efc51ed2/768/432/Image/Webp/noFilter', page: 'game-detail-adopt', launchUrl: 'roblox://placeId=920587237', placeId: '920587237', tags: ['RPG', 'Roleplay', 'Social', 'Pets'], description: 'Adopt and raise pets, trade and collect legendary pets, build your dream home, and roleplay with friends!' },
    'garden': { title: 'Grow a Garden 🌶️', developer: 'The Garden Game', genre: 'Simulation', year: 2025, img: 'https://tr.rbxcdn.com/180DAY-edd534a57d371273de1f5d94c2b30583/768/432/Image/Webp/noFilter', page: 'game-detail-garden', launchUrl: 'roblox://placeId=126884695634066', placeId: '126884695634066', tags: ['Simulation', 'Casual', 'Idle', 'Collection'], description: 'Plant seeds, collect profits, and flex your fruits. Your garden grows even while you are offline.' },
    'disaster': { title: 'Natural Disaster Survival', developer: 'Stickmasterluke', genre: 'Survival', year: 2008, img: 'https://tr.rbxcdn.com/180DAY-7ea7065a02f8cff80f8b0270a9ad2d3b/768/432/Image/Webp/noFilter', page: 'game-detail-disaster', launchUrl: 'roblox://placeId=189707', placeId: '189707', tags: ['Survival', 'Classic', 'Chaos', 'Round-based'], description: 'Quickly, run around in circles! Your life depends on it in this disaster survival classic.' },
    'golf': { title: 'Super Golf!', developer: 'Nosniy Games', genre: 'Sports', year: 2020, img: 'https://tr.rbxcdn.com/180DAY-28f42fb6bbd4bc16216d6d95b0c9a468/768/432/Image/Webp/noFilter', page: 'game-detail-golf', launchUrl: 'roblox://placeId=4468711919', placeId: '4468711919', tags: ['Sports', 'Competitive', 'Casual', 'Skill'], description: 'Play against others on a variety of exciting courses, unlock cool rewards, and customize your ball.' },
    'mm2': { title: 'Murder Mystery 2', developer: 'Nikilis', genre: 'Horror', year: 2014, img: 'https://tr.rbxcdn.com/180DAY-0a5d0d27fd60272237a869af29cbccb1/768/432/Image/Webp/noFilter', page: 'game-detail-mm2', launchUrl: 'roblox://placeId=142823291', placeId: '142823291', tags: ['Horror', 'Murderer', 'Social', 'Round-based'], description: 'Can you solve the mystery and survive each round? Run and hide from the murderer.' },
    'pet99': { title: 'Pet Simulator 99', developer: 'BIG Games Pets', genre: 'Simulation', year: 2022, img: 'https://tr.rbxcdn.com/180DAY-59a871f1639e5a55e3c49273a0b34d6a/768/432/Image/Webp/noFilter', page: 'game-detail-pet99', launchUrl: 'roblox://placeId=8737899170', placeId: '8737899170', tags: ['Simulation', 'Collection', 'Pets', 'Progression'], description: 'Create an army of the coolest pets! They will help you get rich. 2,000+ pets to collect!' },
    'jujutsu': { title: 'Jujutsu Shenanigans', developer: 'Tze', genre: 'Action', year: 2022, img: 'https://tr.rbxcdn.com/180DAY-decec85a41b80e4ac0beca8bc2952a7f/768/432/Image/Webp/noFilter', page: 'game-detail-jujutsu', launchUrl: 'roblox://placeId=9391468976', placeId: '9391468976', tags: ['Action', 'Fighting', 'Competitive', 'Destruction'], description: 'Combat craziness based on many battleground games. Destruction and jujutsu shenanigans.' },
    'overtone': { title: 'Overtone', developer: 'Overtone Projects', genre: 'Puzzle', year: 2026, img: 'https://tr.rbxcdn.com/180DAY-3523135b8468cb8c6663e021da5f78b5/768/432/Image/Webp/noFilter', page: 'game-detail-overtone', launchUrl: 'roblox://placeId=102779234672656', placeId: '102779234672656', tags: ['Puzzle', 'Social', 'Educational', 'Multiplayer'], description: 'Multiplayer color card game where you mix translucent color cards to match a target.' },
    'coolobby': { title: '[250] Cool Obby 2', developer: 'deadalready', genre: 'Obby', year: 2008, img: 'https://tr.rbxcdn.com/180DAY-44d4a95190453bbd14a4db3f84410433/768/432/Image/Webp/noFilter', page: 'game-detail-coolobby', launchUrl: 'roblox://placeId=4927387', placeId: '4927387', tags: ['Obby', 'Classic', 'Casual', 'Platformer'], description: 'Simplistic obby game with 5 themes to discover and explore over 250 stages.' },
    'theme-park': { title: 'Theme Park Tycoon 2', developer: 'Den_S', genre: 'Simulation', year: 2012, img: 'https://tr.rbxcdn.com/180DAY-19d37e8208a9d390075158433face2cd/768/432/Image/Webp/noFilter', page: 'game-detail-theme-park', launchUrl: 'roblox://placeId=69184822', placeId: '69184822', tags: ['Simulation', 'Tycoon', 'Building', 'Social'], description: 'Build your own theme park together with your friends! Construct rides and roller coasters.' },
    'bee-swarm': { title: 'Bee Swarm Simulator', developer: 'Onett', genre: 'Simulation', year: 2018, img: 'https://tr.rbxcdn.com/180DAY-0458177ee998eb2ffd882ad46207e4c5/768/432/Image/Webp/noFilter', page: 'game-detail-bee-swarm', launchUrl: 'roblox://placeId=1537690962', placeId: '1537690962', tags: ['Simulation', 'Progression', 'Pets', 'Quests'], description: 'Grow your own swarm of bees, collect pollen, and make honey! Meet friendly bears and complete quests.' },
    'homer': { title: 'You VS Homer', developer: 'dgk enterprises', genre: 'Horror', year: 2026, img: 'https://tr.rbxcdn.com/180DAY-6f65dd5173f9f11b026acbb7aef20740/768/432/Image/Webp/noFilter', page: 'game-detail-homer', launchUrl: 'roblox://placeId=108124933582607', placeId: '108124933582607', tags: ['Horror', 'Survival', 'Round-based', 'Retro'], description: 'Survive and hide as a Bart or become a Homer and seek. Adapted from classic Retro Studio tests.' },
    'podcasts': { title: '[VC] Podcasts 🔊', developer: 'NDO Studios', genre: 'Social', year: 2026, img: 'https://tr.rbxcdn.com/180DAY-dd6388f386387a2d1d6f942eca4856fb/768/432/Image/Webp/noFilter', page: 'game-detail-podcasts', launchUrl: 'roblox://placeId=110584310129887', placeId: '110584310129887', tags: ['Social', 'Voice Chat', 'Roleplay', 'Casual'], description: 'Grab a mic, create stages, and record hilarious debates in your own virtual podcast studio.' },
    'ballaxe': { title: 'ball and axe', developer: 'DoctorPurpl', genre: 'Obby', year: 2017, img: 'https://tr.rbxcdn.com/180DAY-a9d6d065668af8b6e08e7813168f18fa/768/432/Image/Webp/noFilter', page: 'game-detail-ballaxe', launchUrl: 'roblox://placeId=1242235469', placeId: '1242235469', tags: ['Obby', 'Skill', 'Physics', 'Action'], description: 'Videogame. Advanced obby mechanics with ball and axe.' },
    'robots2': { title: 'Build to Survive the Robots 2', developer: 'SheriffTaco', genre: 'Survival', year: 2024, img: 'https://tr.rbxcdn.com/180DAY-8d80a4c1885d64b1d8903f6dfb6c485f/768/432/Image/Webp/noFilter', page: 'game-detail-robots2', launchUrl: 'roblox://placeId=103980862080286', placeId: '103980862080286', tags: ['Survival', 'Building', 'Action', 'Co-op'], description: 'Build a base before nightfall and survive the robots until morning. If you die, you become a robot!' },
    'tower': { title: 'Tower of Hell', developer: 'YXceptional Studios', genre: 'Obby', year: 2018, img: 'https://tr.rbxcdn.com/180DAY-20a372111085c33de1e64004e4dca1d8/768/432/Image/Webp/noFilter', page: 'game-detail-tower', launchUrl: 'roblox://placeId=1962086868', placeId: '1962086868', tags: ['Obby', 'Skill', 'Platformer', 'Competitive'], description: 'Randomly generated obby with absolutely no checkpoints. Can you be the first to reach the top?' },
    'prison': { title: 'Prison Life', developer: 'Aesthetical', genre: 'Action', year: 2014, img: 'https://tr.rbxcdn.com/180DAY-7e4ac70bc3496ea7e4d039f3cd60b6a4/768/432/Image/Webp/noFilter', page: 'game-detail-prison', launchUrl: 'roblox://placeId=155615604', placeId: '155615604', tags: ['Action', 'Roleplay', 'Classic', 'Open World'], description: 'Live life as a prisoner and escape, or become a guard and defend the prison!' },
    'prospecting': { title: 'Prospecting! 💎', developer: 'Prospecting!', genre: 'Simulation', year: 2025, img: 'https://tr.rbxcdn.com/180DAY-e18515933a4c6208e2176d2f0351f12c/768/432/Image/Webp/noFilter', page: 'game-detail-prospecting', launchUrl: 'roblox://placeId=129827112113663', placeId: '129827112113663', tags: ['Simulation', 'Casual', 'Nature', 'Collection'], description: 'Grab your pan and head to the river in a relaxing gold-panning adventure! Discover rare gems.' },
    'hide-seek': { title: 'Hide and Seek Extreme', developer: 'Tim7775', genre: 'Party', year: 2015, img: 'https://tr.rbxcdn.com/180DAY-c17b13acb45f07ec1517623969b81ec0/768/432/Image/Webp/noFilter', page: 'game-detail-hide-seek', launchUrl: 'roblox://placeId=205224386', placeId: '205224386', tags: ['Party', 'Social', 'Round-based', 'Classic'], description: 'Classic hide and seek with special abilities. At the start of the game, one player is chosen as It.' },
    'horrific-housing': { title: 'Horrific Housing', developer: 'CookieScript', genre: 'Party', year: 2015, img: 'https://tr.rbxcdn.com/180DAY-a361113feebd101cd29510bfe3f610dd/768/432/Image/Webp/noFilter', page: 'game-detail-horrific-housing', launchUrl: 'roblox://placeId=263761432', placeId: '263761432', tags: ['Party', 'Chaos', 'Round-based', 'Social'], description: 'Survive a laundry list of exciting disasters on a floating plot of land. Out-live your opponents!' },
    'brookhaven': { title: 'Brookhaven 🏡RP', developer: 'Wolfpaq', genre: 'RPG', year: 2020, img: 'https://tr.rbxcdn.com/180DAY-a4fb7b266105fa038d92bf425d58ee53/768/432/Image/Webp/noFilter', page: 'game-detail-brookhaven', launchUrl: 'roblox://placeId=4924922222', placeId: '4924922222', tags: ['RPG', 'Roleplay', 'Social', 'Open World'], description: 'Roleplay with like minded people. Own amazing houses, drive cool vehicles, and explore the city.' },
    'rivals': { title: 'RIVALS', developer: 'Nosniy Games', genre: 'Shooter', year: 2024, img: 'https://tr.rbxcdn.com/180DAY-eb783deba3b661ff753ab9be4089188d/768/432/Image/Webp/noFilter', page: 'game-detail-rivals', launchUrl: 'roblox://placeId=17625359962', placeId: '17625359962', tags: ['Shooter', 'FPS', 'Competitive', 'Fast-paced'], description: 'Intense first person shooter duels. First to 5 wins. available on desktop and consoles.' },
    'flee-facility': { title: 'Flee the Facility', developer: 'MrWindy', genre: 'Horror', year: 2017, img: 'https://tr.rbxcdn.com/180DAY-f3e6bca490d2d655cde4894e502e5989/768/432/Image/Webp/noFilter', page: 'game-detail-flee-facility', launchUrl: 'roblox://placeId=893973440', placeId: '893973440', tags: ['Horror', 'Survival', 'Round-based', 'Escape'], description: 'Run, hide, escape the murderer. Team up with fellow survivors to hack computers and escape!' },
    'flood-escape': { title: 'Flood Escape: Classic', developer: 'Crazyblox', genre: 'Survival', year: 2010, img: 'https://tr.rbxcdn.com/180DAY-0317908608680ca27ade363ac0feb6c0/768/432/Image/Webp/noFilter', page: 'game-detail-flood-escape', launchUrl: 'roblox://placeId=32990482', placeId: '32990482', tags: ['Survival', 'Obby', 'Escape', 'Classic'], description: 'Locked in a flooding facility, push buttons and find the way out before the flood takes you!' },
    'cone': { title: 'CONE', developer: 'Defaultio', genre: 'Adventure / Puzzle', year: 2016, img: 'https://tr.rbxcdn.com/180DAY-3286dd029217592b49d830707e0bfcfa/768/432/Image/Webp/noFilter', page: 'game-detail-cone', launchUrl: 'roblox://placeId=378223328', placeId: '378223328', tags: ['Adventure', 'Puzzle', 'Experimental', 'Atmospheric'], description: 'CONE' },
    'fling': { title: 'Fling Things and People', developer: 'Horomori', genre: 'Physics Sim', year: 2021, img: 'https://tr.rbxcdn.com/180DAY-20254f91c5043de87f6cc8adb218c624/768/432/Image/Webp/noFilter', page: 'game-detail-fling', launchUrl: 'roblox://placeId=6961824067', placeId: '6961824067', tags: ['Physics', 'Social', 'Chaos', 'Comedy'], description: 'A place where you can play with or fling various objects and players.' },
    'eg': { title: '🥚 Eg!', developer: 'Nimblz', genre: 'Exploration / Comedy', year: 2019, img: 'https://tr.rbxcdn.com/180DAY-96097b5752ff62cf014a214f427ba0c1/768/432/Image/Webp/noFilter', page: 'game-detail-eg', launchUrl: 'roblox://placeId=2747834912', placeId: '2747834912', tags: ['Exploration', 'Comedy', 'Social', 'Abstract'], description: '🥚 eg! is a silly social game about being an egg with legs! Explore a vast world with your friends!' },
    'robot64': { title: 'Robot 64', developer: 'zKevin', genre: 'Obby / Platformer', year: 2017, img: 'https://tr.rbxcdn.com/180DAY-f1e38127294c9673738306a5d002b372/768/432/Image/Webp/noFilter', page: 'game-detail-robot64', launchUrl: 'roblox://placeId=1111083356', placeId: '1111083356', tags: ['Obby', 'Platformer', 'Adventure', 'Collection'], description: 'Robot 64 is a modern 3D Platformer with a large array of movements. Explore wacky worlds and collect ice cream!' },
    'markers': { title: 'Find the Markers', developer: 'markers epic memers', genre: 'Adventure / Scavenger Hunt', year: 2021, img: 'https://tr.rbxcdn.com/180DAY-666aa1bde55fa5557827dc36e10c6c8d/768/432/Image/Webp/noFilter', page: 'game-detail-markers', launchUrl: 'roblox://placeId=7896264844', placeId: '7896264844', tags: ['Adventure', 'Scavenger Hunt', 'Puzzle', 'Collection'], description: 'this game was highly inspired by a lot of "find the" games, specifically "find the domos". Marker originated from the web series known as \'battle for dream island\'.' },
    'deforestation': { title: 'deforestation therapy || alpha', developer: 'The Fartering Few', genre: 'Simulation', year: 2024, img: 'https://tr.rbxcdn.com/180DAY-fedb2d4f532dbb6ccc21a9050a9dc750/768/432/Image/Webp/noFilter', page: 'game-detail-deforestation', launchUrl: 'roblox://placeId=18216750738', placeId: '18216750738', tags: ['Simulation', 'Satisfying', 'Retro', 'Atmospheric'], description: 'a calm game where you (and your friends) deforest a forest full of trees! The game doesn\'t try to stress or rush you, just keep you in peace of mind. Uses classic roblox and 90s asthetics.' },
    'sbb': { title: 'SBB Marathon', developer: 'Maelstronomer', genre: 'Sports / Racing', year: 2020, img: 'https://tr.rbxcdn.com/180DAY-ec5fc17541e2ab2233bbfe151926261c/768/432/Image/Webp/noFilter', page: 'game-detail-sbb', launchUrl: 'roblox://placeId=4999134338', placeId: '4999134338', tags: ['Sports', 'Racing', 'Classic', 'Fast-paced'], description: 'From the creator of Super Blocky Ball, All 15 maps put together! Now with backwards racing!!' }
};

function searchGames() {
    const input = document.getElementById('search-bar').value.toLowerCase();
    const cards = document.querySelectorAll('#all-games-container .game-card');

    const recentSection = document.getElementById('continue-playing-section');
    const favSection = document.getElementById('favorites-section');
    const recSection = document.getElementById('recommendations-section');

    if (input.trim() !== "") {
        // Hide specific sections when searching
        if (recentSection) recentSection.classList.add('hidden');
        if (favSection) favSection.classList.add('hidden');
        if (recSection) recSection.classList.add('hidden');
    } else {
        // Restore sections when search is cleared
        loadRecentGame();
        loadFavorites();
        loadRecommendations();
    }

    // Reset filters when searching
    document.querySelectorAll('.genre-pill').forEach(p => p.classList.remove('active'));
    document.querySelector('.genre-pill[onclick*="All"]').classList.add('active');

    cards.forEach(card => {
        const titleElement = card.querySelector('.game-title');
        if (!titleElement) return;
        const title = titleElement.textContent.toLowerCase();
        const devContainer = card.querySelector('.game-info span');
        const developer = devContainer ? devContainer.textContent.toLowerCase() : '';

        if (title.includes(input) || developer.includes(input)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
    showPage('home');
}

function filterByGenre(genre) {
    const cards = document.querySelectorAll('#all-games-container .game-card');
    const pills = document.querySelectorAll('.genre-pill');

    pills.forEach(pill => {
        pill.classList.remove('active');
        if (pill.textContent.includes(genre)) pill.classList.add('active');
    });

    cards.forEach(card => {
        const title = card.querySelector('.game-title').textContent;
        // Find game key by title
        const gameKey = Object.keys(gamesData).find(key => gamesData[key].title === title);
        const game = gamesData[gameKey];

        if (genre === 'All' || (game && (game.genre.includes(genre)))) {
            card.style.display = 'block';
        } else if (genre === 'Action' && game && (game.genre === 'Fighting' || game.genre === 'Action')) {
            card.style.display = 'block';
        } else if (genre === 'Party' && game && (game.genre === 'Social' || game.genre === 'Party')) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

function updateTasteProfile(gameKey) {
    const game = gamesData[gameKey];
    if (!game) return;

    let taste = JSON.parse(localStorage.getItem('betterblox_taste') || '{"genres":{}, "years":{}, "devs":{}, "opens":{}, "lastPlays":{}}');
    
    // Safety check for legacy data
    if (!taste.opens) taste.opens = {};
    if (!taste.lastPlays) taste.lastPlays = {};

    const now = Date.now();
    const lastPlay = taste.lastPlays[gameKey] || 0;

    if (now - lastPlay > 60000) { // 1 minute cooldown
        taste.opens[gameKey] = (taste.opens[gameKey] || 0) + 1;
        taste.lastPlays[gameKey] = now;
    }

    taste.genres[game.genre] = (taste.genres[game.genre] || 0) + 1;
    taste.years[game.year] = (taste.years[game.year] || 0) + 1;
    taste.devs[game.developer] = (taste.devs[game.developer] || 0) + 1;

    localStorage.setItem('betterblox_taste', JSON.stringify(taste));
    loadRecommendations();
    updateTimesPlayedDisplay(gameKey);
}

function updateTimesPlayedDisplay(gameKey) {
    const taste = JSON.parse(localStorage.getItem('betterblox_taste') || '{"opens":{}}');
    const count = (taste.opens && taste.opens[gameKey]) ? taste.opens[gameKey] : 0;
    const element = document.getElementById(`times-played-${gameKey}`);
    if (element) {
        element.textContent = count;
    }
}

function loadRecommendations() {
    const taste = JSON.parse(localStorage.getItem('betterblox_taste') || 'null');
    const history = JSON.parse(localStorage.getItem('betterblox_recent_history') || '[]');
    const favorites = JSON.parse(localStorage.getItem('betterbloxFavs') || '[]');
    const container = document.getElementById('recommendations-container');
    const section = document.getElementById('recommendations-section');

    if (!taste) {
        section.classList.add('hidden');
        return;
    }

    container.innerHTML = '';

    // Related Genres Map (Synergy clusters)
    const genreWeights = {
        'Horror': ['Survival', 'Action', 'Psychological'],
        'Survival': ['Horror', 'Action', 'Simulation'],
        'Party': ['Social', 'Casual', 'Classic'],
        'Social': ['Party', 'RPG', 'Roleplay'],
        'Simulation': ['Tycoon', 'Casual', 'Bee Swarm', 'Pet Simulator'],
        'Action': ['Fighting', 'Shooter', 'Survival', 'Combat'],
        'Fighting': ['Action', 'Competitive'],
        'Shooter': ['Action', 'Tactical', 'FPS'],
        'Obby': ['Casual', 'Platformer', 'Physics'],
        'RPG': ['Social', 'Adventure'],
        'Tycoon': ['Simulation', 'Economy']
    };

    // Common Title Keywords to track preference
    const titleKeywords = ['Simulator', 'Classic', 'Tycoon', 'Obby', 'Horror', 'Survival', 'RP', 'Roleplay', 'Story', 'Minigames', 'Fighting', 'Action', 'Mystery', 'Physics', 'Platformer', 'Exploration', 'Puzzle'];

    // Score all games
    let scores = [];
    Object.keys(gamesData).forEach(key => {
        const game = gamesData[key];

        // Do not recommend if currently in Recently Played
        if (history.includes(key)) return;

        let score = 0;

        // 1. Direct Keyword Matches (Highest weights)
        if (taste.genres[game.genre]) score += taste.genres[game.genre] * 20;
        if (taste.devs[game.developer]) score += taste.devs[game.developer] * 15;

        // 2. Gameplay Tag Synergy (New!)
        const recentTags = [];
        history.slice(0, 5).forEach(k => {
            if (gamesData[k] && gamesData[k].tags) {
                recentTags.push(...gamesData[k].tags);
            }
        });

        if (game.tags) {
            game.tags.forEach(tag => {
                const tagCount = recentTags.filter(t => t === tag).length;
                score += tagCount * 8; // Boost based on how many times this tag appears in recent history
            });
        }

        // 3. Title Keyword Matching
        const recentTitles = history.slice(0, 3).map(k => gamesData[k].title.toLowerCase());
        const targetTitle = game.title.toLowerCase();

        titleKeywords.forEach(word => {
            const lowWord = word.toLowerCase();
            if (recentTitles.some(t => t.includes(lowWord)) && targetTitle.includes(lowWord)) {
                score += 30;
            }
        });

        // 4. Genre Synergy Cluster
        Object.keys(taste.genres).forEach(favGenre => {
            const related = genreWeights[favGenre] || [];
            if (related.includes(game.genre)) {
                score += taste.genres[favGenre] * 8;
            }
        });

        // 5. Era Span Analysis
        Object.keys(taste.years).forEach(favYear => {
            const diff = Math.abs(parseInt(favYear) - game.year);
            if (diff === 0) score += taste.years[favYear] * 12;
            else if (diff <= 2) score += taste.years[favYear] * 6;
        });

        // 6. Developer Consistency
        const recentDevs = history.slice(0, 3).map(k => gamesData[k].developer);
        if (recentDevs.includes(game.developer)) score += 20;

        // 7. Frequent Plays & Recency (Loyalty + Active Interest)
        const now = Date.now();
        const lastPlay = taste.lastPlays ? (taste.lastPlays[key] || 0) : 0;
        const daysSinceLastPlay = (now - lastPlay) / (1000 * 60 * 60 * 24);

        if (taste.opens && taste.opens[key]) {
            let frequencyScore = taste.opens[key] * 10;
            // Boost if played in the last 3 days
            if (daysSinceLastPlay <= 3) {
                frequencyScore *= 2; 
            }
            score += Math.min(frequencyScore, 100);
        }

        // 8. Favorite Status
        if (favorites.includes(key)) {
            score += 50;
        }

        // 9. Random discovery jitter
        score += Math.random() * 10;

        scores.push({ key, score });
    });

    // Sort by score
    scores.sort((a, b) => b.score - a.score);

    const topGames = scores.filter(s => s.score > 20).slice(0, 6);

    if (topGames.length === 0) {
        section.classList.add('hidden');
        return;
    }

    section.classList.remove('hidden');
    topGames.forEach(item => {
        const game = gamesData[item.key];
        const card = document.createElement('div');
        card.className = 'game-card';
        card.onclick = () => showPage(game.page);
        card.innerHTML = `
            <div style="position: relative;">
                <img class="game-thumbnail" src="${game.img}" alt="${game.title}">
            </div>
            <div class="game-info" style="position: relative;">
                <div class="quick-play-btn-square" onclick="event.stopPropagation(); launchGame('${item.key}', '${game.launchUrl}')">
                    <span class="material-icons">play_arrow</span>
                </div>
                <h3 class="game-title">${game.title}</h3>
                <div style="font-size: 12px; color: #757575;">By <span style="color: #00a2ff;">${game.developer}</span></div>
            </div>
        `;
        container.appendChild(card);
    });
}

function loadGreetingTime() {
    const hour = new Date().getHours();
    let greeting = "Good Evening";
    if (hour < 12) greeting = "Good Morning";
    else if (hour < 18) greeting = "Good Afternoon";
    document.getElementById('greeting-time').textContent = greeting;
}

function loadName() {
    const savedName = localStorage.getItem('betterbloxName') || 'Robloxian';
    document.getElementById('greeting-name').textContent = savedName;
}

function changeName() {
    const newName = prompt("Enter your new name:");
    if (newName && newName.trim() !== "") {
        localStorage.setItem('betterbloxName', newName.trim());
        loadName();
    }
    document.getElementById('settings-menu').classList.add('hidden');
}

function loadTheme() {
    const isDark = localStorage.getItem('betterbloxDarkMode') === 'true';
    if (isDark) document.body.classList.add('dark-mode');
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('betterbloxDarkMode', isDark);
    document.getElementById('settings-menu').classList.add('hidden');
}

function renderFavorites() {
    const favs = JSON.parse(localStorage.getItem('betterbloxFavs') || '[]');
    const container = document.getElementById('favorites-container');
    const section = document.getElementById('favorites-section');

    if (favs.length > 0) {
        container.innerHTML = '';
        favs.forEach(id => {
            if (gamesData[id]) {
                const game = gamesData[id];
                container.innerHTML += `
                    <div class="game-card" onclick="showPage('${game.page}')">
                        <img class="game-thumbnail" src="${game.img}" alt="${game.title}">
                        <div class="game-info" style="position: relative;">
                            <div class="quick-play-btn-square" onclick="event.stopPropagation(); launchGame('${id}', '${game.launchUrl}')">
                                <span class="material-icons">play_arrow</span>
                            </div>
                            <h3 class="game-title">${game.title}</h3>
                        </div>
                    </div>
                `;
            }
        });
        section.classList.remove('hidden');
    } else {
        section.classList.add('hidden');
    }
}

function toggleFavorite(gameId, btnElement) {
    let favs = JSON.parse(localStorage.getItem('betterbloxFavs') || '[]');
    const icon = btnElement.querySelector('.material-icons');

    if (favs.includes(gameId)) {
        favs = favs.filter(id => id !== gameId);
        icon.textContent = 'star_border';
    } else {
        favs.push(gameId);
        icon.textContent = 'star';
    }

    localStorage.setItem('betterbloxFavs', JSON.stringify(favs));
    renderFavorites();
}

function loadFavorites() {
    let favs = JSON.parse(localStorage.getItem('betterbloxFavs') || '[]');
    document.querySelectorAll('.fav-btn').forEach(btn => {
        const gameId = btn.getAttribute('data-game');
        const icon = btn.querySelector('.material-icons');
        if (favs.includes(gameId)) {
            icon.textContent = 'star';
        } else {
            icon.textContent = 'star_border';
        }
    });
    renderFavorites();
}

function loadRecentGame() {
    const history = JSON.parse(localStorage.getItem('betterblox_recent_history') || '[]');
    const container = document.getElementById('recent-game-container');
    const section = document.getElementById('continue-playing-section');

    if (history.length > 0) {
        container.innerHTML = '';
        history.forEach(gameKey => {
            if (gamesData[gameKey]) {
                const game = gamesData[gameKey];
                const card = document.createElement('div');
                card.className = 'game-card';
                card.onclick = () => showPage(game.page);
                card.innerHTML = `
                    <img class="game-thumbnail" src="${game.img}" alt="${game.title}">
                    <div class="game-info" style="position: relative;">
                        <div class="quick-play-btn-square" onclick="event.stopPropagation(); launchGame('${gameKey}', '${game.launchUrl}')">
                            <span class="material-icons">play_arrow</span>
                        </div>
                        <h3 class="game-title">${game.title}</h3>
                    </div>
                `;
                container.appendChild(card);
            }
        });
        section.classList.remove('hidden');
    } else {
        section.classList.add('hidden');
    }
}

function launchGame(gameKey, url) {
    updateTasteProfile(gameKey);

    // Update History (Last 6 unique)
    let history = JSON.parse(localStorage.getItem('betterblox_recent_history') || '[]');
    history = history.filter(item => item !== gameKey); // Remove if exists
    history.unshift(gameKey); // Add to front
    history = history.slice(0, 6); // Keep last 6
    localStorage.setItem('betterblox_recent_history', JSON.stringify(history));

    loadRecentGame();

    const activeAcc = localStorage.getItem('betterbloxActiveAccount');
    let finalUrl = url;
    if (activeAcc) {
        // Assuming url already has placeId, we append username
        finalUrl += `&username=${encodeURIComponent(activeAcc)}`;
    }

    window.location.href = finalUrl;
    document.getElementById('launch-modal').classList.remove('hidden');
}

function closeModal() {
    document.getElementById('launch-modal').classList.add('hidden');
}

function clearRecent() {
    localStorage.removeItem('betterblox_recent_history');
    loadRecentGame();
    document.getElementById('settings-menu').classList.add('hidden');
}

function clearTasteProfile() {
    localStorage.removeItem('betterblox_taste');
    loadRecommendations();
    document.getElementById('settings-menu').classList.add('hidden');
    alert("Recommendation memory has been cleared.");
}

function showPage(pageId) {
    window.scrollTo(0, 0);
    const pages = document.querySelectorAll('.page-view');
    pages.forEach(page => page.classList.add('hidden'));

    const targetPage = document.getElementById(pageId);
    if (targetPage) targetPage.classList.remove('hidden');

    // Handle Nav Tab Active States
    document.querySelectorAll('.nav-tab').forEach(tab => tab.classList.remove('active'));
    if (pageId === 'home') document.getElementById('tab-home').classList.add('active');

    if (pageId.startsWith('game-detail-')) {
        const gameKey = pageId.replace('game-detail-', '');
        updateTimesPlayedDisplay(gameKey);
        
        // Auto-inject server button if missing
        const actionRow = targetPage.querySelector('.action-row');
        if (actionRow && !actionRow.querySelector('.server-btn')) {
            const game = gamesData[gameKey];
            if (game && game.placeId) {
                const sBtn = document.createElement('button');
                sBtn.className = 'server-btn';
                sBtn.onclick = () => window.open(`https://www.roblox.com/games/${game.placeId}/#!/game-instances`, '_blank');
                sBtn.innerHTML = '<span class="material-icons">dns</span>';
                actionRow.appendChild(sBtn);
            }
        }
    }
}

function initStaticCards() {
    const cards = document.querySelectorAll('#all-games-container .game-card');
    cards.forEach(card => {
        const onclick = card.getAttribute('onclick');
        if (!onclick) return;
        const match = onclick.match(/game-detail-([a-z0-9-]+)/);
        if (!match) return;
        const gameKey = match[1];
        const game = gamesData[gameKey];
        if (!game) return;

        if (card.querySelector('.quick-play-btn-square')) return;

        const info = card.querySelector('.game-info');
        if (info) {
            info.style.position = 'relative';
            const playBtn = document.createElement('div');
            playBtn.className = 'quick-play-btn-square';
            playBtn.onclick = (e) => {
                e.stopPropagation();
                launchGame(gameKey, game.launchUrl);
            };
            playBtn.innerHTML = '<span class="material-icons">play_arrow</span>';
            info.appendChild(playBtn);
        }
    });
}

function toggleMenu(menuId) {
    const menus = document.querySelectorAll('.dropdown-menu');
    menus.forEach(menu => {
        if (menu.id !== menuId) menu.classList.add('hidden');
    });
    document.getElementById(menuId).classList.toggle('hidden');
}

window.onclick = function (event) {
    if (!event.target.matches('.nav-icon') && !event.target.matches('.nav-avatar')) {
        const dropdowns = document.getElementsByClassName("dropdown-menu");
        for (let i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (!openDropdown.classList.contains('hidden')) {
                openDropdown.classList.add('hidden');
            }
        }
    }
}

function openLoginModal() {
    document.getElementById('account-menu').classList.add('hidden');
    document.getElementById('login-modal').classList.remove('hidden');
}

function closeLoginModal() {
    document.getElementById('login-modal').classList.add('hidden');
}

// ====== ROBLOX OAUTH2 PKCE IMPLEMENTATION ======
// Set this to your actual Client ID from the Roblox Developer Portal!
const OAUTH_CLIENT_ID = "9102062315667697258";
const OAUTH_REDIRECT_URI = window.location.href.split('?')[0];

function generateRandomString(length) {
    const array = new Uint32Array(length / 2);
    window.crypto.getRandomValues(array);
    return Array.from(array, dec => ('0' + dec.toString(16)).substr(-2)).join('');
}

async function generateCodeChallenge(verifier) {
    const encoder = new TextEncoder();
    const data = encoder.encode(verifier);
    const digest = await window.crypto.subtle.digest('SHA-256', data);
    return btoa(String.fromCharCode(...new Uint8Array(digest)))
        .replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

async function startRobloxOAuth() {
    if (OAUTH_CLIENT_ID === "YOUR_CLIENT_ID_HERE") {
        alert("Developer Note: You need to register an app on Roblox Open Cloud and set the OAUTH_CLIENT_ID near the bottom of this file before this button will function.");
        return;
    }

    const verifier = generateRandomString(64);
    const state = generateRandomString(32);
    localStorage.setItem('roblox_oauth_verifier', verifier);
    localStorage.setItem('roblox_oauth_state', state);

    const challenge = await generateCodeChallenge(verifier);

    const authUrl = new URL("https://apis.roblox.com/oauth/v1/authorize");
    authUrl.searchParams.append("client_id", OAUTH_CLIENT_ID);
    authUrl.searchParams.append("redirect_uri", OAUTH_REDIRECT_URI);
    authUrl.searchParams.append("scope", "openid profile");
    authUrl.searchParams.append("response_type", "code");
    authUrl.searchParams.append("state", state);
    authUrl.searchParams.append("code_challenge", challenge);
    authUrl.searchParams.append("code_challenge_method", "S256");

    window.location.href = authUrl.toString();
}

async function checkOAuthCallback() {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    const state = urlParams.get('state');

    if (code && state) {
        const savedState = localStorage.getItem('roblox_oauth_state');
        const verifier = localStorage.getItem('roblox_oauth_verifier');

        if (state !== savedState) {
            console.error("OAuth State Mismatch");
            return;
        }

        try {
            const response = await fetch("https://apis.roblox.com/oauth/v1/token", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: new URLSearchParams({
                    client_id: OAUTH_CLIENT_ID,
                    grant_type: "authorization_code",
                    code: code,
                    redirect_uri: OAUTH_REDIRECT_URI,
                    code_verifier: verifier
                })
            });

            const data = await response.json();
            if (data.access_token) {
                const userRes = await fetch("https://apis.roblox.com/oauth/v1/userinfo", {
                    headers: { "Authorization": `Bearer ${data.access_token}` }
                });
                const userData = await userRes.json();

                let accounts = JSON.parse(localStorage.getItem('betterbloxAccounts') || '[]');
                const newAcc = {
                    username: userData.preferred_username || userData.nickname || "User",
                    avatar: userData.picture || "https://tr.rbxcdn.com/38c6edcb50633730e9159382f54506eb/150/150/AvatarHeadshot/Webp"
                };

                if (!accounts.some(acc => acc.username === newAcc.username)) {
                    accounts.push(newAcc);
                    localStorage.setItem('betterbloxAccounts', JSON.stringify(accounts));
                }

                localStorage.setItem('betterbloxActiveAccount', newAcc.username);
                window.history.replaceState({}, document.title, window.location.pathname);
                loadAccounts();
            }
        } catch (e) {
            console.error("OAuth Validation Error:", e);
        }
    }
}

function loadAccounts() {
    let accounts = JSON.parse(localStorage.getItem('betterbloxAccounts') || '[]');
    const activeAcc = localStorage.getItem('betterbloxActiveAccount');
    const list = document.getElementById('accounts-list');
    if (!list) return;
    list.innerHTML = '';

    const iconContainer = document.getElementById('current-account-icon-container');

    if (activeAcc && accounts.some(acc => acc.username === activeAcc)) {
        const activeData = accounts.find(acc => acc.username === activeAcc);
        iconContainer.innerHTML = `<img src="${activeData.avatar}" class="nav-avatar" onclick="toggleMenu('account-menu')">`;
    } else {
        iconContainer.innerHTML = `<span class="material-icons nav-icon" onclick="toggleMenu('account-menu')">account_circle</span>`;
    }

    accounts.forEach(acc => {
        const isActive = acc.username === activeAcc;
        const container = document.createElement('div');
        container.style.display = 'flex';
        container.style.alignItems = 'center';
        container.className = `account-item ${isActive ? 'active' : ''}`;

        container.innerHTML = `
            <div style="flex:1; display:flex; align-items:center; gap:10px; cursor:pointer;" onclick="switchAccount('${acc.username}')">
                <img src="${acc.avatar}" alt="Avatar">
                <span style="font-size: 16px;">${acc.username}</span>
                ${isActive ? '<span class="material-icons" style="font-size: 18px; color: #02b757; margin-left:5px;">check_circle</span>' : ''}
            </div>
            <span class="material-icons remove-acc-btn" title="Remove Account" onclick="event.stopPropagation(); removeAccount('${acc.username}')">logout</span>
        `;
        list.appendChild(container);
    });

    if (accounts.length === 0) {
        list.innerHTML = '<div style="padding: 10px 15px; color: #757575; font-size: 14px;">No accounts added.</div>';
    }
}

function switchAccount(username) {
    localStorage.setItem('betterbloxActiveAccount', username);
    loadAccounts();
    document.getElementById('account-menu').classList.add('hidden');
}

function removeAccount(username) {
    let accounts = JSON.parse(localStorage.getItem('betterbloxAccounts') || '[]');
    accounts = accounts.filter(acc => acc.username !== username);
    localStorage.setItem('betterbloxAccounts', JSON.stringify(accounts));

    const activeAcc = localStorage.getItem('betterbloxActiveAccount');
    if (activeAcc === username) {
        if (accounts.length > 0) {
            localStorage.setItem('betterbloxActiveAccount', accounts[0].username);
        } else {
            localStorage.removeItem('betterbloxActiveAccount');
        }
    }

    loadAccounts();
}



// Register Service Worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js')
            .then(reg => console.log('Service Worker registered!'))
            .catch(err => console.log('Service Worker registration failed:', err));
    });
}

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
    loadGreetingTime();
    loadName();
    loadTheme();
    checkOAuthCallback().then(() => {
        loadAccounts();
    });
    loadRecentGame();
    loadFavorites();
    loadRecommendations();
    initStaticCards();
});
