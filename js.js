document.querySelector('#elastic').oninput = function(){
	let v = this.value.trim();
	let elasticItems = document.querySelectorAll('.elastic li');
	
	if(v !=''){
		elasticItems.forEach( function(elem) {
			if(elem.innerText.search(v) == -1){
				elem.classList.add('hide');
				elem.innerHTML = elem.innerText;

			}
			else{
				elem.classList.remove('hide');
				let str = elem.innerText;
				elem.innerHTML = insertMark( str, elem.innerText.search(v), v.length);
			}
			// statements
		});
	}
	else{
		elasticItems.forEach( function(elem) {
			elem.classList.remove('hide');
			elem.innerHTML = elem.innerText;
		});
	}

}

function insertMark(string, pos, len){

	//hello world
	//hello <mark>wo</mark>rld
	//hello + <mark> + wo + </mark> + rld
	return string.slice(0,pos) + '<mark>' + string.slice(pos, pos+len) + '</mark>' + string.slice(pos + len)
}

//  var ul = document.body.children[0];
//   var li5 = ul.children[2];

// li5.insertAdjacentHTML("beforeBegin", "<li>3</li><li>4</li>");

// 	===========   работа с элементами DOM   ==============


// for (let i = 0; i < document.body.childNodes.length; i++) {	
//       console.log( document.body.childNodes[i] )};


// for (let node of document.body.childNodes) {
//   alert(node); // покажет все узлы из коллекции
// }


// alert( document.body.nextElementSibling );



function test_3(){
	let l = document.getElementById('name').value;
	if(l != ''){
		let r = document.getElementById('name').value
		console.log(r)
		let div = document.getElementById('ul');
		let name = document.createElement('li');



		name.innerHTML = (r);

		div.appendChild(name);
		div.classList.remove('hide');
		div.classList.add('color');}

		else{alert('Укажите новое значение')}
	}
 
function test_4(){
	let bt_1 = document.getElementById('add_1')
	let bt_2 = document.getElementById('add_2')

	bt_2.classList.remove('hide');
	bt_1.classList.add('hide');



}






