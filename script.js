// ==================== PHOTOS SALÉES & GROS PLAN (SANS COOKIES) ====================
const SAVORY_CLOSEUP = {
    pz1: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=85",
    pz2: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=85",
    pz3: "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=800&q=85",
    pz4: "https://images.unsplash.com/photo-1594007654729-407eedc4be65?auto=format&fit=crop&w=800&q=85",
    pz5: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=85",
    pz6: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&w=800&q=85",
    pz7: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?auto=format&fit=crop&w=800&q=85",
    pz8: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&w=800&q=85",
    pz9: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=85",
    pz10: "https://images.unsplash.com/photo-1536964549204-cce9eab227bd?auto=format&fit=crop&w=800&q=85",
    pz11: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?auto=format&fit=crop&w=800&q=85",
    pz12: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=800&q=85",

    panizza: "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=85",
    croque: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=85",
    kidsSavory: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?auto=format&fit=crop&w=800&q=85",

    nuggets: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=800&q=85",
    wings: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=800&q=85",
    fries: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=800&q=85",
    jalapenos: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=85",
    cheeseSticks: "https://images.unsplash.com/photo-1548340748-6d2b7d7da280?auto=format&fit=crop&w=800&q=85",

    pasta1: "https://images.unsplash.com/photo-1612874742237-6526221588e3?auto=format&fit=crop&w=800&q=85",
    pasta2: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=800&q=85",
    pasta3: "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?auto=format&fit=crop&w=800&q=85",
    pasta4: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?auto=format&fit=crop&w=800&q=85",
    pasta5: "https://images.unsplash.com/photo-1608219992759-8d74ed8d50eb?auto=format&fit=crop&w=800&q=85",

    salad1: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=85",
    salad2: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=85",
    salad3: "https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?auto=format&fit=crop&w=800&q=85",
    salad4: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=85",

    gratin1: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?auto=format&fit=crop&w=800&q=85",
    gratin2: "https://images.unsplash.com/photo-1619221882220-947b3d3c8861?auto=format&fit=crop&w=800&q=85",
    gratin3: "https://images.unsplash.com/photo-1633436375153-d70e40240010?auto=format&fit=crop&w=800&q=85",

    dessertCup: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=800&q=85",
    glaceCup: "https://images.unsplash.com/photo-1560008581-09826d1de69e?auto=format&fit=crop&w=800&q=85",
    glaceBowl: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?auto=format&fit=crop&w=800&q=85",
    drinkCan: "https://images.unsplash.com/photo-1581006852262-e4307cf6283a?auto=format&fit=crop&w=800&q=85",
    drinkBottle: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=800&q=85",
    drinkJuice: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&w=800&q=85"
};

const FALLBACK_SAVORY = SAVORY_CLOSEUP.pz2;

// ==================== DONNÉES DU MENU (93 ARTICLES) ====================
const menuData = [
    { id: 1, cat: "pizzas", name: "Margarita (Senior)", price: 11.00, desc: "Mozzarella, olives.", img: SAVORY_CLOSEUP.pz1 },
    { id: 2, cat: "pizzas", name: "Sicilienne (Senior)", price: 12.00, desc: "Anchois, olives, câpres, origan.", img: SAVORY_CLOSEUP.pz8 },
    { id: 3, cat: "pizzas", name: "Végétarienne (Senior)", price: 12.00, desc: "Mozzarella, champignon, poivron, coeur d'artichaut, olives.", img: SAVORY_CLOSEUP.pz7 },
    { id: 4, cat: "pizzas", name: "Verone (Senior)", price: 12.00, desc: "Mozzarella, chorizo, poivron, olives.", img: SAVORY_CLOSEUP.pz6 },
    { id: 5, cat: "pizzas", name: "Napolitaine (Senior)", price: 12.00, desc: "Mozzarella, anchois, olives, origan, câpres.", img: SAVORY_CLOSEUP.pz8 },
    { id: 6, cat: "pizzas", name: "Catania (Senior)", price: 12.00, desc: "Mozzarella, thon, oeuf, oignon, olives.", img: SAVORY_CLOSEUP.pz5 },
    { id: 7, cat: "pizzas", name: "Regina (Senior)", price: 12.00, desc: "Mozzarella, jambon, olives, champignon.", img: SAVORY_CLOSEUP.pz2 },
    { id: 8, cat: "pizzas", name: "Campione (Senior)", price: 12.00, desc: "Mozzarella, viande hachée, champignon, oeuf.", img: SAVORY_CLOSEUP.pz3 },
    { id: 9, cat: "pizzas", name: "4 Fromages (Senior)", price: 12.00, desc: "Mozzarella, gorgonzola, brie, chèvre.", img: SAVORY_CLOSEUP.pz2 },
    { id: 10, cat: "pizzas", name: "Orientale (Senior)", price: 12.00, desc: "Mozzarella, merguez, poivron, oeuf.", img: SAVORY_CLOSEUP.pz4 },
    { id: 11, cat: "pizzas", name: "Polio (Senior)", price: 12.00, desc: "Mozzarella, poulet émincé, poivron.", img: SAVORY_CLOSEUP.pz5 },
    { id: 12, cat: "pizzas", name: "Massimo (Senior)", price: 12.00, desc: "Mozzarella, viande hachée, oeuf, boursin.", img: SAVORY_CLOSEUP.pz3 },
    { id: 13, cat: "pizzas", name: "La Poivrée (Senior)", price: 13.00, desc: "Mozzarella, sauce poivre, viande hachée, champignon, oignon.", img: SAVORY_CLOSEUP.pz4 },
    { id: 14, cat: "pizzas", name: "4 Saisons (Senior)", price: 13.00, desc: "Mozza, jambon, champignon, poivron, coeur d'artichaut, olives.", img: SAVORY_CLOSEUP.pz7 },
    { id: 15, cat: "pizzas", name: "Barbak (Senior)", price: 13.00, desc: "Mozzarella, sauce bbq, viande hachée, merguez, oignon, poivron.", img: SAVORY_CLOSEUP.pz4 },
    { id: 16, cat: "pizzas", name: "Indienne (Senior)", price: 13.00, desc: "Mozzarella, sauce curry, poulet, pomme de terre, oignon.", img: SAVORY_CLOSEUP.pz5 },
    { id: 17, cat: "pizzas", name: "Cheddar (Senior)", price: 13.00, desc: "Mozzarella, viande hachée, pomme de terre, oeuf, cheddar.", img: SAVORY_CLOSEUP.pz2 },
    { id: 18, cat: "pizzas", name: "New York (Senior)", price: 13.00, desc: "Mozzarella, sauce bbq, viande hachée, oignon, cornichon.", img: SAVORY_CLOSEUP.pz3 },
    { id: 19, cat: "pizzas", name: "L'Aubergine (Senior)", price: 13.00, desc: "Mozzarella, aubergine, viande hachée, tomate fraîche, emmental.", img: SAVORY_CLOSEUP.pz7 },
    { id: 20, cat: "pizzas", name: "Paysanne (Senior)", price: 13.00, desc: "Mozzarella, jambon, merguez, champignon, pomme de terre.", img: SAVORY_CLOSEUP.pz6 },
    { id: 21, cat: "pizzas", name: "La Piquante (Senior)", price: 13.00, desc: "Mozza, harissa, viande hachée, merguez, poivron, oignon, olives.", img: SAVORY_CLOSEUP.pz6 },
    { id: 22, cat: "pizzas", name: "Calzone (Senior)", price: 13.00, desc: "Mozza, oeuf, champignon, thon ou jambon ou viande hachée.", img: SAVORY_CLOSEUP.pz10 },
    { id: 23, cat: "pizzas", name: "Charcutière (Senior)", price: 14.00, desc: "Mozzarella, jambon, chorizo, lardon.", img: SAVORY_CLOSEUP.pz6 },
    { id: 24, cat: "pizzas", name: "Duo Saumon (Senior)", price: 14.00, desc: "Mozzarella, saumon fumé, saumon frais.", img: SAVORY_CLOSEUP.pz9 },
    { id: 25, cat: "pizzas", name: "4 Viandes (Senior)", price: 16.00, desc: "Mozzarella, jambon, viande hachée, merguez, poulet.", img: SAVORY_CLOSEUP.pz4 },
    { id: 26, cat: "pizzas", name: "Carpaccio (Senior)", price: 16.00, desc: "Mozzarella, carpaccio de boeuf, roquette, mozza di buffala, copeaux de parmesan, huile d'olives extra vierge.", img: SAVORY_CLOSEUP.pz12 },
    { id: 27, cat: "pizzas", name: "Gusto (Senior)", price: 16.00, desc: "Mozzarella, roquette, mozza di bufala, copeaux de parmesan, tomate fraîche, huile d'olives extra vierge.", img: SAVORY_CLOSEUP.pz12 },

    { id: 28, cat: "pizzas", name: "3 Fromages (Base Crème Fraîche)", price: 12.00, desc: "Mozzarella, boursin, emmental.", img: SAVORY_CLOSEUP.pz2 },
    { id: 29, cat: "pizzas", name: "Country (Base Crème Fraîche)", price: 12.00, desc: "Mozzarella, jambon, pomme de terre.", img: SAVORY_CLOSEUP.pz1 },
    { id: 30, cat: "pizzas", name: "Campagnarde (Base Crème Fraîche)", price: 12.00, desc: "Mozzarella, lardon, oignon, pomme de terre.", img: SAVORY_CLOSEUP.pz3 },
    { id: 31, cat: "pizzas", name: "Montagnarde (Base Crème Fraîche)", price: 12.00, desc: "Mozzarella, poulet émincé, chèvre, pomme de terre.", img: SAVORY_CLOSEUP.pz5 },
    { id: 32, cat: "pizzas", name: "Chèvre Miel (Base Crème Fraîche)", price: 13.00, desc: "Mozzarella, fromage de chèvre, miel.", img: SAVORY_CLOSEUP.pz2 },
    { id: 33, cat: "pizzas", name: "Hawaïenne (Base Crème Fraîche)", price: 13.00, desc: "Mozzarella, jambon, ananas.", img: SAVORY_CLOSEUP.pz11 },
    { id: 34, cat: "pizzas", name: "Nordique (Base Crème Fraîche)", price: 13.00, desc: "Mozzarella, saumon fumé.", img: SAVORY_CLOSEUP.pz9 },
    { id: 35, cat: "pizzas", name: "Fermiere (Base Crème Fraîche)", price: 13.00, desc: "Mozzarella, jambon, lardon, reblochon.", img: SAVORY_CLOSEUP.pz1 },
    { id: 36, cat: "pizzas", name: "Carbonara (Base Crème Fraîche)", price: 13.00, desc: "Mozzarella, jambon, lardon, oeuf.", img: SAVORY_CLOSEUP.pz12 },
    { id: 37, cat: "pizzas", name: "Raclette (Base Crème Fraîche)", price: 13.00, desc: "Mozzarella, lardon, fromage à raclette, pomme de terre.", img: SAVORY_CLOSEUP.pz2 },
    { id: 38, cat: "pizzas", name: "Gourmande (Base Crème Fraîche)", price: 13.00, desc: "Mozzarella, emmental, viande hachée, poulet, champignon.", img: SAVORY_CLOSEUP.pz3 },
    { id: 39, cat: "pizzas", name: "Dijonnaise (Base Crème Fraîche)", price: 13.00, desc: "Mozzarella, moutarde à l'ancienne, poulet, pomme de terre, oignon.", img: SAVORY_CLOSEUP.pz5 },

    { id: 40, cat: "panizzas", name: "Panizza Poulet (Seul)", price: 8.00, desc: "Crème fraîche, fromage, poulet, poivrons (+3.00€ avec frites).", img: SAVORY_CLOSEUP.panizza },
    { id: 41, cat: "panizzas", name: "Panizza Thon (Seul)", price: 8.00, desc: "Crème fraîche, fromage, thon, oignons (+3.00€ avec frites).", img: SAVORY_CLOSEUP.panizza },
    { id: 42, cat: "panizzas", name: "Panizza Viande Hachée (Seul)", price: 8.00, desc: "Crème fraîche, fromage, viande hachée*, oignons (+3.00€ avec frites).", img: SAVORY_CLOSEUP.panizza },
    { id: 43, cat: "panizzas", name: "Panizza Saumon (Seul)", price: 8.00, desc: "Crème fraîche, fromage, saumon (+3.00€ avec frites).", img: SAVORY_CLOSEUP.panizza },
    { id: 44, cat: "panizzas", name: "Panizza Mixte (Seul)", price: 8.00, desc: "Crème fraîche, fromage, viande hachée*, poulet*, oignons (+3.00€ avec frites).", img: SAVORY_CLOSEUP.panizza },
    { id: 45, cat: "panizzas", name: "Panizza Jambon (Seul)", price: 8.00, desc: "Crème fraîche, fromage, jambon (+3.00€ avec frites).", img: SAVORY_CLOSEUP.panizza },
    { id: 46, cat: "panizzas", name: "Panizza 4 Fromages (Seul)", price: 8.00, desc: "Crème fraîche, fromage, emmental, gorgonzola, brie, chèvre (+3.00€ avec frites).", img: SAVORY_CLOSEUP.panizza },
    { id: 47, cat: "panizzas", name: "Croque-Mr Jambon", price: 4.00, desc: "Crème fraîche, jambon, fromage.", img: SAVORY_CLOSEUP.croque },
    { id: 48, cat: "panizzas", name: "Croque-Mr Saumon", price: 5.00, desc: "Crème fraîche, saumon, fromage.", img: SAVORY_CLOSEUP.croque },
    { id: 49, cat: "panizzas", name: "Menu Enfants", price: 9.50, desc: "1 Pizza Junior (jambon + fromage) ou 6 Nuggets + Frites + Capri-Sun + Kinder.", img: SAVORY_CLOSEUP.kidsSavory },

    { id: 50, cat: "snacks", name: "Nuggets (6 Pièces)", price: 5.00, desc: "6 pièces croustillantes.", img: SAVORY_CLOSEUP.nuggets },
    { id: 51, cat: "snacks", name: "Nuggets (12 Pièces)", price: 9.00, desc: "12 pièces croustillantes.", img: SAVORY_CLOSEUP.nuggets },
    { id: 52, cat: "snacks", name: "Wings (6 Pièces)", price: 5.00, desc: "6 pièces.", img: SAVORY_CLOSEUP.wings },
    { id: 53, cat: "snacks", name: "Wings (12 Pièces)", price: 9.00, desc: "12 pièces.", img: SAVORY_CLOSEUP.wings },
    { id: 54, cat: "snacks", name: "Frites (Seul)", price: 3.50, desc: "Portion de frites dorées.", img: SAVORY_CLOSEUP.fries },
    { id: 55, cat: "snacks", name: "5 Jalapenos (Seul)", price: 5.00, desc: "5 pièces.", img: SAVORY_CLOSEUP.jalapenos },
    { id: 56, cat: "snacks", name: "5 Bouchée Camembert (Seul)", price: 5.00, desc: "5 pièces.", img: SAVORY_CLOSEUP.cheeseSticks },
    { id: 57, cat: "snacks", name: "5 Stick Mozza (Seul)", price: 5.00, desc: "5 pièces.", img: SAVORY_CLOSEUP.cheeseSticks },

    { id: 58, cat: "plats", name: "Pâtes Poulet Curry (Seul)", price: 9.00, desc: "Pâtes sauce poulet curry.", img: SAVORY_CLOSEUP.pasta4 },
    { id: 59, cat: "plats", name: "Pâtes Carbonara (Seul)", price: 9.00, desc: "Pâtes à la carbonara.", img: SAVORY_CLOSEUP.pasta1 },
    { id: 60, cat: "plats", name: "Pâtes Bolognaise (Seul)", price: 9.00, desc: "Pâtes sauce bolognaise.", img: SAVORY_CLOSEUP.pasta2 },
    { id: 61, cat: "plats", name: "Pâtes Saumon (Seul)", price: 9.00, desc: "Pâtes au saumon.", img: SAVORY_CLOSEUP.pasta3 },
    { id: 62, cat: "plats", name: "Pâtes 3 Fromages (Seul)", price: 9.00, desc: "Pâtes aux 3 fromages.", img: SAVORY_CLOSEUP.pasta5 },
    { id: 63, cat: "plats", name: "Salade Mixte", price: 4.00, desc: "Salade, tomates, olives, oignons.", img: SAVORY_CLOSEUP.salad1 },
    { id: 64, cat: "plats", name: "Salade Niçoise", price: 9.00, desc: "Salade, tomates, oeuf dur, thon, olives, pommes de terre, anchois.", img: SAVORY_CLOSEUP.salad2 },
    { id: 65, cat: "plats", name: "Salade Fermière", price: 9.00, desc: "Salade, tomates, poulet émincé, olives, pommes de terre.", img: SAVORY_CLOSEUP.salad1 },
    { id: 66, cat: "plats", name: "Salade Fromagère", price: 9.00, desc: "Salade, tomates, gorgonzola, chèvre.", img: SAVORY_CLOSEUP.salad3 },
    { id: 67, cat: "plats", name: "Salade Océane", price: 10.00, desc: "Salade, tomates, saumon fumé.", img: SAVORY_CLOSEUP.salad2 },
    { id: 68, cat: "plats", name: "Salade Tomate Mozza", price: 10.00, desc: "Salade, tomates, mozza, olives.", img: SAVORY_CLOSEUP.salad4 },
    { id: 69, cat: "plats", name: "Salade Carpaccio", price: 10.00, desc: "Salade, tomates, carpaccio de boeuf, copeaux de parmesan, olives.", img: SAVORY_CLOSEUP.salad2 },
    { id: 70, cat: "plats", name: "Gratin Montagnarde (Seul)", price: 9.00, desc: "Crème fraîche, fromage, poulet, chèvre.", img: SAVORY_CLOSEUP.gratin1 },
    { id: 71, cat: "plats", name: "Gratin Mixte (Seul)", price: 9.00, desc: "Crème fraîche, fromage, poulet, viande hachée, oignons.", img: SAVORY_CLOSEUP.gratin2 },
    { id: 72, cat: "plats", name: "Gratin Dijon (Seul)", price: 9.00, desc: "Crème fraîche, fromage, moutarde, poulet, oignons.", img: SAVORY_CLOSEUP.gratin3 },
    { id: 73, cat: "plats", name: "Gratin Campagnarde (Seul)", price: 9.00, desc: "Crème fraîche, fromage, lardons, oignons.", img: SAVORY_CLOSEUP.gratin1 },
    { id: 74, cat: "plats", name: "Gratin Campione (Seul)", price: 9.00, desc: "Crème fraîche, fromage, viande hachée*, champignons.", img: SAVORY_CLOSEUP.gratin2 },
    { id: 75, cat: "plats", name: "Gratin Mexicaine (Seul)", price: 9.00, desc: "Crème fraîche, fromage, viande hachée*, oignons.", img: SAVORY_CLOSEUP.gratin3 },
    { id: 76, cat: "plats", name: "Gratin Savoyarde (Seul)", price: 9.00, desc: "Crème fraîche, fromage, lardons, jambon, reblochon.", img: SAVORY_CLOSEUP.gratin1 },
    { id: 77, cat: "plats", name: "Gratin Carbo (Seul)", price: 9.00, desc: "Crème fraîche, fromage, lardons, jambon, champignons.", img: SAVORY_CLOSEUP.gratin2 },
    { id: 78, cat: "plats", name: "Gratin Royale (Seul)", price: 9.00, desc: "Crème fraîche, fromage, lardons, jambon, chorizo.", img: SAVORY_CLOSEUP.gratin3 },
    { id: 79, cat: "plats", name: "Gratin Jambon (Seul)", price: 9.00, desc: "Crème fraîche, fromage, jambon, champignons, oignons.", img: SAVORY_CLOSEUP.gratin1 },
    { id: 80, cat: "plats", name: "Gratin 3 Fromages (Seul)", price: 9.00, desc: "Crème fraîche, fromage, gorgonzola, brie, chèvre.", img: SAVORY_CLOSEUP.gratin3 },
    { id: 81, cat: "plats", name: "Gratin Atlantique (Seul)", price: 9.00, desc: "Crème fraîche, fromage, saumon fumé.", img: SAVORY_CLOSEUP.gratin2 },
    { id: 82, cat: "plats", name: "Gratin Thon (Seul)", price: 9.00, desc: "Crème fraîche, fromage, thon, oignons.", img: SAVORY_CLOSEUP.gratin1 },
    { id: 83, cat: "plats", name: "Gratin Reine (Seul)", price: 9.00, desc: "Crème fraîche, fromage, jambon, champignons, olives.", img: SAVORY_CLOSEUP.gratin3 },
    { id: 84, cat: "plats", name: "Gratin Boursin (Seul)", price: 9.00, desc: "Crème fraîche, fromage, viande hachée*, boursin.", img: SAVORY_CLOSEUP.gratin2 },
    { id: 85, cat: "plats", name: "Gratin Poulet (Seul)", price: 9.00, desc: "Crème fraîche, fromage, poulet, poivrons.", img: SAVORY_CLOSEUP.gratin1 },
    { id: 86, cat: "plats", name: "Gratin Merguez (Seul)", price: 9.00, desc: "Crème fraîche, fromage, merguez, poivrons.", img: SAVORY_CLOSEUP.gratin3 },
    { id: 87, cat: "plats", name: "Gratin Barbecue (Seul)", price: 9.00, desc: "Crème fraîche, sauce barbecue, fromage, merguez, viande hachée, poivrons, origan.", img: SAVORY_CLOSEUP.gratin2 },

    { id: 88, cat: "desserts", name: "Tiramisu ou Tarte", price: 3.50, desc: "Dessert au choix.", img: SAVORY_CLOSEUP.dessertCup },
    { id: 89, cat: "desserts", name: "Glace 100 ML", price: 4.50, desc: "Format 100 ML.", img: SAVORY_CLOSEUP.glaceCup },
    { id: 90, cat: "desserts", name: "Glace 500 ML", price: 9.00, desc: "Format 500 ML.", img: SAVORY_CLOSEUP.glaceBowl },
    { id: 91, cat: "desserts", name: "Boisson 33CL", price: 1.50, desc: "Canette / boisson fraîche 33CL.", img: SAVORY_CLOSEUP.drinkCan },
    { id: 92, cat: "desserts", name: "Boisson 1.5L", price: 3.50, desc: "Bouteille 1.5L.", img: SAVORY_CLOSEUP.drinkBottle },
    { id: 93, cat: "desserts", name: "Oasis 2L", price: 4.00, desc: "Bouteille 2L.", img: SAVORY_CLOSEUP.drinkJuice }
];

// ==================== WHATSAPP & ÉTAT ====================
const CART_STORAGE_KEY = "au_feu_de_bois_cart_v1";
const RESTAURANT_WHATSAPP_NUMBERS = {
    "Le Blanc Mesnil": "33148691657",
    "Montreuil": "33980911066"
};

let activeCategory = "all";
let searchQuery = "";
let cart = loadCartFromStorage();

function loadCartFromStorage() {
    try {
        const saved = localStorage.getItem(CART_STORAGE_KEY);
        return saved ? JSON.parse(saved) : [];
    } catch (err) {
        return [];
    }
}

function saveCartToStorage() {
    try {
        localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    } catch (err) {
        // Ignore storage errors
    }
}

function renderMenu(filter = activeCategory, query = searchQuery) {
    activeCategory = filter;
    searchQuery = query.trim().toLowerCase();

    const grid = document.getElementById("menu-grid");
    grid.innerHTML = "";

    const filtered = menuData.filter(item => {
        const matchesCat = activeCategory === "all" || item.cat === activeCategory;
        const matchesQuery =
            !searchQuery ||
            item.name.toLowerCase().includes(searchQuery) ||
            item.desc.toLowerCase().includes(searchQuery);
        return matchesCat && matchesQuery;
    });

    if (filtered.length === 0) {
        grid.innerHTML = `
            <p class="no-results">
                Aucun plat trouvé pour "<strong>${query}</strong>".
            </p>
        `;
        return;
    }

    filtered.forEach(item => {
        const card = document.createElement("div");
        card.className = "menu-card";
        card.innerHTML = `
            <img
                src="${item.img}"
                alt="${item.name}"
                loading="lazy"
                onerror="this.onerror=null; this.src='${FALLBACK_SAVORY}';"
            >
            <div class="card-body">
                <div>
                    <div class="card-top">
                        <h3 class="card-title">${item.name}</h3>
                        <span class="card-price">${item.price.toFixed(2)}€</span>
                    </div>
                    <p class="card-desc">${item.desc}</p>
                </div>
                <button type="button" class="add-btn" onclick="addToCart(${item.id})">+ Ajouter</button>
            </div>
        `;
        grid.appendChild(card);
    });
}

function filterMenu(cat, btn) {
    document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    renderMenu(cat, searchQuery);
}

function handleSearch(value) {
    const clearBtn = document.getElementById("clear-search");
    if (clearBtn) {
        clearBtn.style.display = value.trim() ? "inline-flex" : "none";
    }
    renderMenu(activeCategory, value);
}

function clearSearch() {
    const input = document.getElementById("menu-search");
    const clearBtn = document.getElementById("clear-search");
    if (input) input.value = "";
    if (clearBtn) clearBtn.style.display = "none";
    renderMenu(activeCategory, "");
}

function addToCart(id) {
    const prod = menuData.find(p => p.id === id);
    if (!prod) return;

    const existing = cart.find(c => c.id === id);
    if (existing) {
        existing.qty += 1;
    } else {
        cart.push({ ...prod, qty: 1 });
    }
    saveCartToStorage();
    updateCartUI();
}

function changeQty(id, delta) {
    const item = cart.find(c => c.id === id);
    if (!item) return;

    item.qty += delta;
    if (item.qty <= 0) {
        cart = cart.filter(c => c.id !== id);
    }
    saveCartToStorage();
    updateCartUI();
}

function removeFromCart(id) {
    cart = cart.filter(c => c.id !== id);
    saveCartToStorage();
    updateCartUI();
}

function updateCartUI() {
    const itemsContainer = document.getElementById("cart-items");
    const countEl = document.getElementById("cart-count");
    const totalEl = document.getElementById("cart-total");
    const noteEl = document.getElementById("delivery-note");

    const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
    const totalPrice = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

    countEl.textContent = totalQty;
    totalEl.textContent = `${totalPrice.toFixed(2)}€`;

    const selectedType = document.querySelector('input[name="orderType"]:checked')?.value || "Livraison";

    if (selectedType === "À emporter") {
        noteEl.textContent = "🛍️ Retrait sur place (À emporter)";
        noteEl.style.color = "#1b4332";
    } else if (totalPrice >= 25) {
        noteEl.textContent = "✅ Livraison gratuite atteinte (minimum 25.00€)";
        noteEl.style.color = "green";
    } else {
        noteEl.textContent = `Livraison gratuite à partir de 25.00€ (manque ${(25 - totalPrice).toFixed(2)}€)`;
        noteEl.style.color = "#666";
    }

    if (cart.length === 0) {
        itemsContainer.innerHTML = `<p class="empty-msg">Votre panier est vide.</p>`;
        return;
    }

    itemsContainer.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div>
                <strong>${item.name}</strong><br>
                <small>${item.price.toFixed(2)}€ l'unité</small>
            </div>
            <div class="cart-controls">
                <button type="button" class="qty-btn" onclick="changeQty(${item.id}, -1)" aria-label="Diminuer">−</button>
                <span class="qty-val">${item.qty}</span>
                <button type="button" class="qty-btn" onclick="changeQty(${item.id}, 1)" aria-label="Augmenter">+</button>
                <strong class="item-subtotal">${(item.qty * item.price).toFixed(2)}€</strong>
                <button type="button" class="remove-btn" onclick="removeFromCart(${item.id})" aria-label="Supprimer">✕</button>
            </div>
        </div>
    `).join("");
}

function toggleCart() {
    document.getElementById("cart-drawer").classList.toggle("open");
}

function toggleAddressField() {
    const selectedType = document.querySelector('input[name="orderType"]:checked')?.value;
    const addressInput = document.getElementById("client-address");
    const confirmationBox = document.getElementById("order-confirmation");

    if (confirmationBox && confirmationBox.style.display === "block") {
        confirmationBox.style.display = "none";
    }

    if (!addressInput) return;

    if (selectedType === "À emporter") {
        addressInput.style.display = "none";
        addressInput.required = false;
        addressInput.value = "";
    } else {
        addressInput.style.display = "block";
        addressInput.required = true;
    }

    updateCartUI();
}

function buildWhatsAppMessage({ branch, orderType, name, phone, address, notes, items, totalPrice }) {
    const lines = [
        `🔥 *Nouvelle commande — Pizzeria Au Feu De Bois*`,
        `📍 *Agence :* ${branch}`,
        `🛵 *Type :* ${orderType}`,
        `👤 *Client :* ${name}`,
        `📞 *Téléphone :* ${phone}`
    ];

    if (orderType === "Livraison" && address) {
        lines.push(`🏠 *Adresse :* ${address}`);
    }

    lines.push("", "🍽️ *Détails de la commande :*");
    items.forEach(item => {
        lines.push(`• ${item.qty}× ${item.name} — ${(item.qty * item.price).toFixed(2)}€`);
    });

    lines.push("", `💰 *Total : ${totalPrice.toFixed(2)}€*`);

    if (notes) {
        lines.push(`📝 *Remarques :* ${notes}`);
    }

    return lines.join("\n");
}

function submitOrder(event) {
    event.preventDefault();

    if (cart.length === 0) {
        alert("Ajoutez au moins un produit au panier avant de commander.");
        return;
    }

    const branch = document.getElementById("branch-select")?.value || "Le Blanc Mesnil";
    const orderType = document.querySelector('input[name="orderType"]:checked')?.value || "Livraison";
    const name = document.getElementById("client-name").value.trim();
    const phone = document.getElementById("client-phone").value.trim();
    const address = document.getElementById("client-address").value.trim();
    const notes = document.getElementById("client-notes").value.trim();

    if (!name || !phone || (orderType === "Livraison" && !address)) {
        alert("Veuillez remplir tous les champs obligatoires.");
        return;
    }

    const orderedItems = cart.map(item => ({ ...item }));
    const totalPrice = orderedItems.reduce((sum, item) => sum + item.price * item.qty, 0);
    const itemsSummary = orderedItems
        .map(item => `• ${item.qty}× ${item.name} (${(item.qty * item.price).toFixed(2)}€)`)
        .join("<br>");

    const whatsappNumber = RESTAURANT_WHATSAPP_NUMBERS[branch] || "33148691657";
    const messageText = buildWhatsAppMessage({
        branch,
        orderType,
        name,
        phone,
        address,
        notes,
        items: orderedItems,
        totalPrice
    });
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(messageText)}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    const confirmationBox = document.getElementById("order-confirmation");
    confirmationBox.style.display = "block";
    confirmationBox.innerHTML = `
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px;">
            <strong>✅ Commande préparée pour WhatsApp !</strong>
            <button type="button" onclick="this.parentElement.parentElement.style.display='none'" style="background:none;border:none;font-size:0.9rem;cursor:pointer;color:#1b4332;" aria-label="Fermer">✕</button>
        </div>
        <strong>Agence :</strong> ${branch}<br>
        <strong>Type :</strong> ${orderType}<br>
        <strong>Client :</strong> ${name} (${phone})<br>
        ${orderType === "Livraison" ? `<strong>Adresse :</strong> ${address}<br>` : ""}
        ${notes ? `<strong>Note :</strong> ${notes}<br>` : ""}
        <hr style="margin:6px 0;border:none;border-top:1px solid #c7ebd4;">
        ${itemsSummary}<br>
        <strong>Total : ${totalPrice.toFixed(2)}€</strong><br>
        <div style="margin-top:8px;">
            <a href="${whatsappUrl}" target="_blank" rel="noopener noreferrer" style="display:inline-block;padding:6px 12px;background:#1b4332;color:#fff;border-radius:6px;text-decoration:none;font-weight:600;font-size:0.82rem;">
                Ouvrir WhatsApp si non ouvert
            </a>
        </div>
    `;

    cart = [];
    saveCartToStorage();
    updateCartUI();
    event.target.reset();
    toggleAddressField();
}

// ==================== INITIALISATION ====================
renderMenu();
updateCartUI();
toggleAddressField();