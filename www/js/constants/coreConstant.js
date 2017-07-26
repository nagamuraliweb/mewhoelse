var coreConstant = {};

coreConstant.skills = {1: "Horse Riding", 2: "Swimming", 3: "Singing", 4: "Dancing", 5: "Ramp", 6: "Host / Hostess", 7: "Theater", 8: "Others"};
coreConstant.bodies = {1:"Slim", 2:"Average", 3:"Athletic", 4:"Plus Size", 5:"Muscular"};
coreConstant.hairs = {1: "Long", 2: "Short", 3: "Curly", 4: "Bald"};
coreConstant.hairColors = {1: "Light Brown", 2: "Red", 3: "Blonde", 4: "Silver / Grey", 5: "Colored", 6: "Black"};
coreConstant.languages = {1: "Hindi", 2: "English", 3: "Tamil", 4: "Telugu", 5: "Malayalam", 6: "Kannada", 7: "others"};
coreConstant.skins = {1: "Light", 2: "Dusky", 3: "Olive", 4: "Mix"};
coreConstant.experience = {1: "Fresher", 2: "Experienced"};
coreConstant.bodies = {1: "Slim", 2: "Average", 3: "Athletic", 4: "Plus Size", 5: "Muscular"};
coreConstant.projectType = {1:"Feature Film",2:"Ad Film",3:"Short Film",4:"TV Serial",5:"Documentary",6:"Theater",7:"Photoshoot"};
coreConstant.genders = {1: "Male", 2: "Female"};
coreConstant.roles = {1:"Lead",2:"Lead Support",3:"Supporting",4:"Character",5:"Cameo",6:"Junior"};

angular.module('meapp.constants.core', [])
.constant('coreConstant', coreConstant);
