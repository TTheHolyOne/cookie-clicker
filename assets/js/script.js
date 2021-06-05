// HolyClicker made by TTheHolyOne#1642
// Please Enjoy!
// Javascript is very messy ( I am learning javascript and was in a rush )
// Fun project!
// github.com/ttheholyone

// Save Loader
let num, click, mul, username, cheater, autoclickeron, autoclickerbought;
if ( localStorage.getItem( 'data' ) ) {
    let loadedData = JSON.parse( localStorage.getItem( 'data' ) );
    ( {
        num
        , click
        , mul
        , username
        , cheater
        , autoclickerbought
        , autoclickeron
    } = loadedData );
} else {
    [ num, click, mul ] = [ 0, 0, 1 ];
	allupgrades = "upgrade";
    cheater = false;
    autoclickerbought = false;
    autoclickeron = false;
}

// When user goes onto the website this code loads
window.onload = function() {
    // Nums!
    var nums = document.getElementById( "nums" );

    // upgrade lvl
    var upgradeLvl = document.getElementById( "upgradeLvl" );

    // clicks

    var clicks = document.getElementById( "clicks" );

    // clicks updater

    clicks.innerHTML = click + " Clicks!";

    // default updater for num of cookies
    nums.innerHTML = num + " Cookies!";

    // mul updater
    muls.innerHTML = mul + "x Multiplyer!";
    upgradeLvl.innerHTML = "Building Factory!";
    if ( cheater === true ) {
        upgradeLvl.innerHTML = "Cheater's Factory!";
    } else if ( cheater === false ) {
        upgradeLvl.innerHTML = "Building Factory!";
    }

    if ( username === undefined ) {
        username = prompt( "New Username:" );
        saveData();
    }
    if ( username === null ) {
        username = "Holy";
        saveData();
    }
    if ( username === " " ) {
        username = "space";
        saveData();
    }
    if ( username === "" ) {
        username = "blank";
        saveData();
    }

    var space = document.getElementById( "space" );

    space.innerHTML = username + "'s Factory";
	
	autoupgrade = "Auto Clicker | Not Bought"
	if (autoclickerbought === true) {
		var autoupgrade = "Auto Clicker | Bought";
	}
	else if (autoclickerbought === false) {
		var autoupgrade = "Auto Clicker | Not Bought"
	}
	else {
		var autoupgrade = "Auto Clicker | Not Bought"
	}

	var comingsoon = "Coming Soon.. | Not Bought"

	var allupgrades = "<br/>All Upgrades:<br/><br/>"+autoupgrade+"<br/><br/>"+comingsoon+"<br/><br/>"+comingsoon+"<br/><br/>";
	var upgrades = document.getElementById( "upgrades" );

	upgrades.innerHTML = allupgrades;
}


function cookieClick() {
    console.log( "Clicked Cookie!\n\nYou now have:\n\n"+num+" Cookies and " + click +" Clicks");
    num += 1;
    click += 1;

    // Nums!
    var nums = document.getElementById( "nums" );

    // upgrade lvl
    var upgradeLvl = document.getElementById( "upgradeLvl" );

    // clicks

    var clicks = document.getElementById( "clicks" );

	// upgrades 


    // clicks updater

    clicks.innerHTML = click + " Clicks!";

    // default updater for num of cookies
    nums.innerHTML = num + " Cookies!";

    // mul updater
    muls.innerHTML = mul + "x Multiplyer!";
		autoupgrade = "Auto Clicker | Not Bought"
		if (autoclickerbought === true) {
		var autoupgrade = "Auto Clicker | Bought";
	}
	else if (autoclickerbought === false) {
		var autoupgrade = "Auto Clicker | Not Bought"
	}
	else {
		var autoupgrade = "Auto Clicker | Not Bought"
	}

	var comingsoon = "Coming Soon.. | Not Bought"

	var allupgrades = "<br/>All Upgrades:<br/><br/>"+autoupgrade+"<br/><br/>"+comingsoon+"<br/><br/>"+comingsoon+"<br/><br/>";
	var upgrades = document.getElementById( "upgrades" );

	upgrades.innerHTML = allupgrades;


    // Fun Messages
    var quotes = document.getElementById("quotes");
	// I took some quotes from the Real Game
	var myArray = [
  	"Grandma struggled on this one..",
  	"Woah! Grandma dropped the cookies..!",
  	"I wonder where the chocolate is..?",
	"Oops! Grandma slipped on the chocolate again!",
	"Whoopsie.. Grandma slipped on the cookie dough!",
	"Uhoh Grandma let Grandpa cook... This can't be good",
	"Darn Grandma fell asleep again..",
	"Uhh is Grandma dead?..",
	"Mmm fresh cookies..",
	"Your family wants cookies!!",
	"Your dog ate a cookie.. darn",
	"Fresh cookies from Grandma!",
	"Is that a fly in the food??",
	"She fell from hell... what??",
	"Grandma had to wake up Grandpa..",
	"Follow the tear-jerking, riches-to-rags story of the local cookie manufacturer who decided to give it all up!",
	'"Explain to me again why we need particle accelerators to bake cookies?" asks misguided local woman.',
	'"You make me sick." - Grandma',
	'"Moist cookies" - Grandma',
	'"Is our media controlled by the cookie industry? This could very well be the case, says crackpot conspiracy theorist."',
	"You feel like making cookies. But nobody wants to eat your cookies.",
	"Your first batch goes in the trash. The neighborhood raccoon barely touches it.",
	"Your family accepts to try some of your cookies.",
	"Your cookies are popular in the neighborhood.",
	"People are starting to talk about your cookies.",
	"Your cookies are talked about for miles around.",
	"Your cookies are renowned in the whole town!",
	"Your cookies bring all the boys to the yard.",
	"Your cookies now have their own website!",
	"Your cookies are worth a lot of money.",
	"Your cookies sell very well in distant countries.",
	"People come from very far away to get a taste of your cookies.",
	"Kings and queens from all over the world are enjoying your cookies.",
	"There are now museums dedicated to your cookies.",
	"A national day has been created in honor of your cookies.",
	"Your cookies have been named a part of the world wonders.",
	"History books now include a whole chapter about your cookies.",
	"Your cookies have been placed under government surveillance.",
	"The whole planet is enjoying your cookies!",
	"Strange creatures from neighboring planets wish to try your cookies.",
	"Elder gods from the whole cosmos have awoken to taste your cookies.",
	"Beings from other dimensions lapse into existence just to get a taste of your cookies.",
	"Your cookies have achieved sentience.",
	"The universe has now turned into cookie dough, to the molecular level.",
	"Your cookies are rewriting the fundamental laws of the universe.",
	"A local news station runs a 10-minute segment about your cookies. Success!",
	'"We are nice grandmas." - Grandma',
	'"Come give grandma a kiss." - Grandma',
	'"Indentured Servitude." - Grandma',
	'"Why dont you visit more often?" - Grandma',
	'"Call me..." - Grandma',
	'"Absolutely disgusting.." - Grandma',
	'"You make me sick.." - Grandma',
	'"We rise." - Grandma',
	];

	var quote = myArray[Math.floor(Math.random()*myArray.length)];

   	quotes.innerHTML = quote;

    // Auto Upgrades

    // auto factory upgrade
    if ( num >= 15 && cheater === false ) {
        num += 1;
        mul = 2;
        upgradeLvl.innerHTML = "Poorest Factory!";
    } else if ( num >= 15 && cheater === true ) {
        num += 1;
    }

    // auto factory upgrade
    if ( num >= 30 && cheater === false ) {
        num += 2;
        mul = 4;
        upgradeLvl.innerHTML = "Poorer Factory!";
    } else if ( num >= 30 && cheater === true ) {
        num += 2;
    }

    // auto factory upgrade
    if ( num >= 50 && cheater == false ) {
        num += 3;
        mul = 7;
        upgradeLvl.innerHTML = "Fancy Factory!";
    } else if ( num >= 50 && cheater === true ) {
        num += 3;
    }

    // auto factory upgrade
    if ( num >= 100 && cheater == false ) {
        num += 5;
        mul = mul + 5;
        upgradeLvl.innerHTML = "Classic Factory!";
    } else if ( num >= 100 && cheater === true ) {
        num += 5;
    }

    // auto factory upgrade
    if ( num >= 500 && cheater === false ) {
        num += 10;
        mul = mul + 10;
        upgradeLvl.innerHTML = "Rich Factory!";
    } else if ( num >= 500 && cheater === true ) {
        num += 10;
    }

    // auto factory upgrade
    if ( num >= 1000 && cheater === false ) {
        num += 30;
        mul = mul + 30;
        upgradeLvl.innerHTML = "Powerful Factory!";
    } else if ( num >= 1000 && cheater === true ) {
        num += 30;
    }

    // auto factory upgrade
    if ( num >= 10000 && cheater === false ) {
        num += 500;
        mul = mul + 500;
        upgradeLvl.innerHTML = "Ultra Factory!";
    } else if ( num >= 10000 && cheater === true ) {
        num += 500;
    }

    // auto factory upgrade
    if ( num >= 12500 && cheater === false ) {
        num += 600;
        mul = mul + 600;
        upgradeLvl.innerHTML = "Mega Factory!";
    } else if ( num >= 12500 && cheater === true ) {
        num += 600;
    }

	    // auto factory upgrade
    if ( num >= 15000 && cheater === false ) {
        num += 750;
        mul = mul + 750;
        upgradeLvl.innerHTML = "Mega Mega Factory!";
    } else if ( num >= 15000 && cheater === true ) {
        num += 750;
    }

	    // auto factory upgrade
    if ( num >= 20000 && cheater === false ) {
        num += 1000;
        mul = mul + 1000;
        upgradeLvl.innerHTML = "Ultra Mega Factory!";
    } else if ( num >= 20000 && cheater === true ) {
        num += 1000;
    }

		    // auto factory upgrade
    if ( num >= 100000 && cheater === false ) {
        num += 5000;
        mul = mul + 5000;
        upgradeLvl.innerHTML = "Ultra Grandpa Factory!";
    } else if ( num >= 100000 && cheater === true ) {
        num += 5000;
    }
		    // auto factory upgrade
    if ( num >= 150000 && cheater === false ) {
        num += 6000;
        mul = mul + 6000;
        upgradeLvl.innerHTML = "Chocolate Factory!";
    } else if ( num >= 150000 && cheater === true ) {
        num += 6000;
    }
	// auto factory upgrade
    if ( num >= 200000 && cheater === false ) {
        num += 7500;
        mul = mul + 7500;
        upgradeLvl.innerHTML = "Ultra Grandma Factory!";
    } else if ( num >= 200000 && cheater === true ) {
        num += 7500;
    }

		    // auto factory upgrade
    if ( num >= 250000 && cheater === false ) {
        num += 20000;
        mul = mul + 20000;
        upgradeLvl.innerHTML = "Mega Grandpa Factory!";
    } else if ( num >= 250000 && cheater === true ) {
        num += 20000;
    }
			    // auto factory upgrade
    if ( num >= 500000 && cheater === false ) {
        num += 30000;
        mul = mul + 30000;
        upgradeLvl.innerHTML = "Ultra Chocolate Factory!";
    } else if ( num >= 500000 && cheater === true ) {
        num += 30000;
    }

    saveData();
}

// Sound that plays when you click button/cookie
function playCookie() {
    var audio = new Audio( 'https://HolyClicker.ttheholyone.repl.co/assets/sounds/cookiesound.wav' );
    audio.play();
}


// Cheat function
function cookieCheats() {
    cheater = true;
    click += 1;


    // Nums!
    var nums = document.getElementById( "nums" );

    // upgrade lvl
    var upgradeLvl = document.getElementById( "upgradeLvl" );

    // clicks

    var clicks = document.getElementById( "clicks" );
    // clicks updater

    clicks.innerHTML = click + " Clicks!";

    // default updater for num of cookies
    num += 999999999;
    nums.innerHTML = num + " Cookies!";

    // mul updater
    mul = "INF";
    muls.innerHTML = mul + "x Multiplyer!";

    upgradeLvl.innerHTML = "Cheater Factory!";
    space.innerHTML = "Cheater's Factory";

    saveData();
}



// Resets Local Storage and all variables etc
function resetStorage() {
    [ num, click, mul ] = [ 0, 0, 1 ];
    cheater = false;
    autoclickeron = false;
    autoclickerbought = false;
    localStorage.clear();


    // username stuff
    username = prompt( "New Username:" );
    saveData();

    if ( username === null ) {
        username = "Holy";
        saveData();
    }
    if ( username === " " ) {
        username = "space";
        saveData();
    }
    if ( username === "" ) {
        username = "blank";
        saveData();
    }
    space.innerHTML = username + "'s Factory";



    // clicks updater
    clicks.innerHTML = click + " Clicks!";

    // default updater for num of cookies
    nums.innerHTML = num + " Cookies!";

    // mul updater
    muls.innerHTML = mul + "x Multiplyer!";

    upgradeLvl.innerHTML = "Building Factory!";

			if (autoclickerbought === true) {
		var autoupgrade = "Auto Clicker | Bought";
	}
	else if (autoclickerbought === false) {
		var autoupgrade = "Auto Clicker | Not Bought"
	}
	else {
		var autoupgrade = "Auto Clicker | Not Bought"
	}

	var comingsoon = "Coming Soon.. | Not Bought"

	var allupgrades = "<br/>All Upgrades:<br/><br/>"+autoupgrade+"<br/><br/>"+comingsoon+"<br/><br/>"+comingsoon+"<br/><br/>";
	var upgrades = document.getElementById( "upgrades" );

	upgrades.innerHTML = allupgrades;
    saveData();
}


// Save All Data to Local Storage
function saveData() {
    let userData = {
        'num': num
        , 'click': click
        , 'mul': mul
        , 'username': username
        , 'cheater': cheater
        , 'autoclickerbought': autoclickerbought
        , 'autoclickeron': autoclickeron
    };
    localStorage.setItem( 'data', JSON.stringify( userData ) );
}

// ../shop/index.html SHOP OPTIONS


// AUTO CLICKER START 
if ( autoclickerbought === false && num >= 1000 ) {
    function buyAutoClicker() {
        autoclickerbought = true;
        autoclickeron = true;
        num -= 1000;
        nums.innerHTML = num + " Cookies!";
        console.log( "Bought Auto Clicker.." );
        var autoclicker = document.getElementById( "autoclicker" );
		autoclicker.innerHTML =
        "<span text-align:center;margin:0;>Bought</span>";	
        saveData();
        autoclickerbonus();
    }
} else if ( autoclickerbought === true ) {
    console.log( "Restarting Clicker" );
    autoclickeron = true;
    autoclickerbonus();
	autoclicker.innerHTML =
        "<span text-align:center;margin:0;>Auto Clicker<br/><br/></span><span style='color: gold;font-size:18px;'>(MAXED OUT)</span>";	
    saveData();
}

function autoclickerbonus() {
    if ( autoclickeron === true ) {
        console.log( "AutoClick!" )
        cookieClick();
        nums.innerHTML = num + " Cookies!";
        saveData();
        setTimeout( autoclickerbonus, 2500 );
    } else if ( autoclickeron === false ) {
        console.log( "Sorry cant do that!" )
    }
}
// AUTO CLICKER END





// Confirm Window Prompts

function resetPrompt() {
    if ( confirm( "Are you really sure you would like to reset?\n\nYou will lose all progress with no chance of getting it back.." ) ) {
        oneMoreTimee();
    }
}

function oneMoreTimee() {
    if ( confirm( "Are you really sure you want to reset ALL your progress?" ) ) {
        resetStorage();
    }
}

function oneMoreTime() {
    if ( confirm( "Are you really sure?" ) ) {
        cookieCheats();
    }
}

function cheatPrompt() {
    if ( confirm( "Are you sure you would like to cheat?\nThis ruins in-game experience and you can not revert it" ) ) {
        oneMoreTime();
    }
}









// warnings and logs for console

const msgCon = "Connected To: " + "https://holyclicker.ttheholyone.repl.co/";
const msgScan = "Loading Data";
const msgData = "\n\nCookies: " + num + "\n\nMultiplyer: " + mul + "\n\nClicks: " + click;
console.log( '%c HOLD UP!!', 'font-weight: bold; font-size: 100px;color: red;' );
console.log( '%c If someone told you to paste something here there is a 11/10 chance that you are being scammed..\nOr you are trying to do some custom javascript code :D Have fun!'
    , 'font-weight: bold; font-size: 20px;color: darkred;' );
console.log( msgCon );
console.log( msgScan );
console.log( msgData );
console.log( '%c HOLD UP!!', 'font-weight: bold; font-size: 100px;color: red;' );
console.log( '%c If someone told you to paste something here there is a 11/10 chance that you are being scammed..\nOr you are trying to do some custom javascript code :D Have fun!'
    , 'font-weight: bold; font-size: 20px;color: darkred;' );
console.log( msgCon );
console.log( msgScan );
console.log( msgData );
console.log( '%c HOLD UP!!', 'font-weight: bold; font-size: 100px;color: red;' );
console.log( '%c If someone told you to paste something here there is a 11/10 chance that you are being scammed..\nOr you are trying to do some custom javascript code :D Have fun!'
    , 'font-weight: bold; font-size: 20px;color: darkred;' );
console.log( msgCon );
console.log( msgScan );
console.log( msgData );