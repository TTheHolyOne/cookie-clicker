// HolyClicker made by TTheHolyOne#1642
// Please Enjoy!
// Javascript is very messy ( I am learning javascript and was in a rush )
// Fun project!
// github.com/ttheholyone
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
	cheater = false;
	autoclickerbought = false;
	autoclickeron = false;
}


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
	if (username === null ) {
		username = "Holy";
		saveData();
	}
	if (username === " " ) {
		username = "space";
		saveData();
	}
	if (username === ""){
		username = "blank";
		saveData();
	}

    var space = document.getElementById( "space" );

    space.innerHTML = username + "'s Factory";
}

function cookieClick() {
	console.log("Clicked Cookie!");
    num += 1;
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
    nums.innerHTML = num + " Cookies!";

    // mul updater
    muls.innerHTML = mul + "x Multiplyer!";





    // Fun Messages
    if ( num >= 50 ) {
        nums.innerHTML = num + " K00kiez!";
    }
    if ( num >= 51 ) {
        nums.innerHTML = num + " Cookies!";
    }

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
    if ( num >= 100 && cheater == false ) {
        num += 5;
        mul = 9;
        upgradeLvl.innerHTML = "Classic Factory!";
    } else if ( num >= 100 && cheater === true ) {
        num += 5;
    }

    // auto factory upgrade
    if ( num >= 500 && cheater === false ) {
        num += 10;
        mul = 19;
        upgradeLvl.innerHTML = "Rich Factory!";
    } else if ( num >= 500 && cheater === true ) {
        num += 10;
    }

    // auto factory upgrade
    if ( num >= 1000 && cheater === false ) {
        num += 30;
        mul = 49;
        upgradeLvl.innerHTML = "Powerful Factory!";
    } else if ( num >= 1000 && cheater === true ) {
        num += 30;
    }

    // auto factory upgrade
    if ( num >= 100000 && cheater === false ) {
        num += 1000;
        mul = 1049;
        upgradeLvl.innerHTML = "Ultra Factory!";
    } else if ( num >= 100000 && cheater === true ) {
        num += 1000;
    }

}

function playCookie() {
    var audio = new Audio( 'https://HolyClicker.ttheholyone.repl.co/assets/sounds/cookiesound.wav' );
    audio.play();
}


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

function resetStorage() {
    [ num, click, mul ] = [ 0, 0, 1 ];
	cheater = false;
	autoclickeron = false;
	autoclickerbought = false;
    localStorage.clear();


	// username stuff
    username = prompt( "New Username:" );
    saveData();

	if (username === null ) {
		username = "Holy";
		saveData();
	}
	if (username === " " ) {
		username = "space";
		saveData();
	}
	if (username === ""){
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

	saveData();
}

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

// shop options



if (autoclickerbought === false && num >= 1000){
function buyAutoClicker() {
	autoclickerbought = true;
	autoclickeron = true;
	num -= 1000;
	nums.innerHTML = num + " Cookies!";
	console.log("Bought Auto Clicker..");
	var autoclicker = document.getElementById( "autoclicker" );
	autoclicker.innerHTML = "Bought!\n‎‎‎‎‎‏‏‎\n\n\n\n\n‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ";
	saveData();
	autoclickerbonus();
}
}
else if (autoclickerbought === true){
	console.log("Restarting Clicker");
	autoclickeron = true;
	autoclickerbonus();
	autoclicker.innerHTML = "Already Bought!\n‎‎‎‎‎‏‏‎\n\n\n\n\n‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎";
	saveData();
}

function autoclickerbonus() {
	if (autoclickeron === true){
	console.log("AutoClick!")
    cookieClick();
	nums.innerHTML = num + " Cookies!";
	saveData();
    setTimeout(autoclickerbonus, 2500);
	}
	else if (autoclickeron === false){
		console.log("Sorry cant do that!")
	}
}

function resetPrompt(){
if (confirm("Are you really sure you would like to reset?\n\nYou will lose all progress with no chance of getting it back..")) {
	oneMoreTimee();
}
}
function oneMoreTimee(){
	if (confirm("Are you really sure you want to reset ALL your progress?")) {
		resetStorage();
	}
}
function oneMoreTime(){
	if (confirm("Are you really sure?")) {
		cookieCheats();
	}
}
function cheatPrompt(){
if (confirm("Are you sure you would like to cheat?\nThis ruins in-game experience and you can not revert it")) {
	oneMoreTime();
}
}



// warnings and logs for console

const msgCon = "Connected To: " + "https://holyclicker.ttheholyone.repl.co/";
const msgScan = "Loading Data";
const msgData = "\n\nCookies: " + num + "\n\nMultiplyer: " + mul + "\n\nClicks: " + click;
console.log('%c HOLD UP!!', 'font-weight: bold; font-size: 100px;color: red;');
console.log('%c If someone told you to paste something here there is a 11/10 chance that you are being scammed..\nOr you are trying to do some custom javascript code :D Have fun!', 'font-weight: bold; font-size: 20px;color: darkred;');
console.log(msgCon);
console.log(msgScan);
console.log(msgData);
console.log('%c HOLD UP!!', 'font-weight: bold; font-size: 100px;color: red;');
console.log('%c If someone told you to paste something here there is a 11/10 chance that you are being scammed..\nOr you are trying to do some custom javascript code :D Have fun!', 'font-weight: bold; font-size: 20px;color: darkred;');
console.log(msgCon);
console.log(msgScan);
console.log(msgData);
console.log('%c HOLD UP!!', 'font-weight: bold; font-size: 100px;color: red;');
console.log('%c If someone told you to paste something here there is a 11/10 chance that you are being scammed..\nOr you are trying to do some custom javascript code :D Have fun!', 'font-weight: bold; font-size: 20px;color: darkred;');
console.log(msgCon);
console.log(msgScan);
console.log(msgData);


