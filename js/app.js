/*Use the Document Object Model (DOM) to complete the following exercises below:*/

/*1. Taylor Swift

Find the div with the id of "name1" and replace the n/a with the following:

Tay-Tay*/

var divName1 = document.getElementById('name1');
divName1.innerHTML = 'Tay-Tay';


/*2. DJ Khaled

Find the div with the id of "position2" and replace the n/a with the following: 

Project Manager*/

var divPosition2 = document.getElementById('position2');
divPosition2.innerHTML = 'Project Manager';

/*3. Piko Taro

Find the div with the id of "alias3" and replace the n/a with the following:

Concatenation*/

var divAlias3 = document.getElementById('alias3');
divAlias3.innerHTML = 'Concatenation';

/*4. Prince

Find the div with the class name of "profile" and replace the n/a with a verse from your favorite Prince song.*/

var divProfile = document.getElementsByClassName('profile');
divProfile[0].innerHTML = 'purple rain';
//console.log(divProfile);

/*5. Bruce Lee

Find the div with the class name of "profile" and replace the n/a with a quote from the legend himself.*/

divProfile[1].innerHTML = 'willing is not enough; we must do';

/*6. Samuel L Jackson

Find the div with the class name of "alias" and replace the n/a with your favorite character that Sammy portrayed.*/

var divAlias = document.getElementsByClassName('alias');
divAlias[2].innerHTML = 'nick fury';
//console.log(divAlias);

/*7. David Ige

Create a div element and give it an id of "name7". Inside this div element, give it the contents of "David Ige".

Append this div element to the nameParent div*/

var newName7 = document.createElement('div');
newName7.id = 'name7';
newName7.innerHTML = 'David Ige';
nameParent.appendChild(newName7);
 
/*8. The Dos Equis Dude

Create a div element give it an id of "alias8". Inside this div element, give it the contents of "Stay Thirsty My Friends".

Append this div element to the aliasParent div.*/

var newAlias8 = document.createElement('div');
newAlias8.id = 'alias8';
newAlias8.innerHTML = "Stay thirsty my friends.";
aliasParent.appendChild(newAlias8);


//Final Boss
/*9. Create your own profile.*/

var divBlock = document.getElementsByClassName('block3');
console.log(divBlock);

var imgElem = document.getElementsByTagName('img');
//console.log(imgElem);
imgElem[8].src = "https://res.cloudinary.com/teepublic/image/private/s--IydheeJP--/c_crop,x_10,y_10/c_fit,h_1109/c_crop,g_north_west,h_1260,w_1008,x_-86,y_-76/co_rgb:ffffff,e_colorize,u_Misc:One%20Pixel%20Gray/c_scale,g_north_west,h_1260,w_1008/fl_layer_apply,g_north_west,x_-86,y_-76/bo_32px_solid_white/e_overlay,fl_layer_apply,h_1260,l_Misc:Art%20Print%20Bumpmap,w_1008/e_shadow,x_6,y_6/c_limit,h_1134,w_1134/c_lpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_auto,h_285,q_90,w_285/v1520441981/production/designs/2441287_0"

var newName = document.createElement('div');
newName.id = 'name9';
newName.innerHTML = 'Uncle penny bags';
divBlock[2].appendChild(newName);

var newPosition9 = document.createElement('div');
newPosition9.id = 'position9';
newPosition9.innerHTML = 'the monolopy guy'
divBlock[2].appendChild(newPosition9);

var newAlias9 = document.createElement('div');
newAlias9.id = 'alias9';
newAlias9.innerHTML = 'overseer of purgatory';
divBlock[2].appendChild(newAlias9);

var newBio9 = document.createElement('div');
newBio9.id = 'bio9';
newBio9.innerHTML = 'Totes around wads of cash while watching you circle the Monolopy board for hours on end';
divBlock[2].appendChild(newBio9);