console.log("asdasd")





const zakazblock = document.querySelector(".zakaz_block")
const zakazbtnsticks = document.querySelectorAll(".button_stick")
window.addEventListener("click", function (event) {
	if (event.target.id === 'plus'){
		const itemParent = event.target.closest('#itemParent')
		const itemInput = itemParent.querySelector('.item_amout')
		itemInput.innerText = ++itemInput.innerText;
		const itemParentCost = event.target.closest('.zakaz_item');
		let cost = itemParentCost.querySelector(".zakaz_item_price").innerText;
		let costnum = cost.slice(0,cost.length - 4);
		let currentCostStr = document.querySelector(".total_price").innerText;
		let currentCostNum = currentCostStr.slice(0,currentCostStr.length - 3);
		document.querySelector(".total_price").innerText = parseInt(currentCostNum) + parseInt(costnum) + " грн";
		document.querySelector(".total_price_footer").innerText =
		document.querySelector(".total_price").innerText;
		let totalItems = document.querySelector(".total_zakaz").innerText;
		document.querySelector(".total_zakaz").innerText = parseInt(totalItems) + 1;

	}
	if (event.target.id === 'minus'){
		const itemParent = event.target.closest('#itemParent')
		const itemInput = itemParent.querySelector('.item_amout')
		if(itemInput.innerText >= 1){
			itemInput.innerText = --itemInput.innerText;
			const itemParentCost = event.target.closest('.zakaz_item');
			let cost = itemParentCost.querySelector(".zakaz_item_price").innerText;
			let costnum = cost.slice(0,cost.length - 4);
			let currentCostStr = document.querySelector(".total_price").innerText;
			let currentCostNum = currentCostStr.slice(0,currentCostStr.length - 3);
			document.querySelector(".total_price").innerText = parseInt(currentCostNum) - parseInt(costnum) + " грн";
			document.querySelector(".total_price_footer").innerText =
			document.querySelector(".total_price").innerText;
			let totalItems = document.querySelector(".total_zakaz").innerText;
			document.querySelector(".total_zakaz").innerText = parseInt(totalItems) - 1;
		} if (itemInput.innerText == 0){
			itemInput.innerText = "0";
		}
	}

})

const array = [];
const arrayStrings = [];
const zakazList = document.querySelector(".zakaz")
const zakazAddBtn = document.querySelectorAll(".add_zakaz")
const totalWithBagToggle = document.querySelector(".bag_with_total")
zakazAddBtn.forEach(function(elem) {
	elem.addEventListener("click", function() {
		let thisParent = this.closest(".block_item")
		let img = thisParent.querySelector(".block_item_img");
		let imgAtrribute = img.getAttribute("src")
		let titleText = thisParent.querySelector(".block_item_title_link").innerText;
		let cost = thisParent.querySelector(".item_price").innerText;
		let New_array = arrayStrings.filter(function(elem) {
			return elem == titleText;
		});
		if(New_array[0]){
			let srcTitle = zakazList.querySelectorAll(".zakaz_item_name");
			srcTitle.forEach(function(elem) {
				if(elem.innerText == titleText){
					let closestParentAmout = elem.closest(".zakaz_item");
					let currentNum = closestParentAmout.querySelector(".item_amout").innerText;
					currentNum = parseInt(currentNum) + 1;
					elem.closest(".zakaz_item").querySelector(".item_amout").innerText = currentNum;
					let costnum = cost.slice(0,cost.length - 4);
					let currentCostStr = document.querySelector(".total_price").innerText;
					let currentCostNum = currentCostStr.slice(0,currentCostStr.length - 3);
					document.querySelector(".total_price").innerText = parseInt(currentCostNum) + parseInt(costnum) + " грн";
					document.querySelector(".total_price_footer").innerText =
					document.querySelector(".total_price").innerText;
					document.querySelector(".zakaz_block").classList.add("zakaz_block_toggle")
					const zakazBtnSticks = document.querySelectorAll(".button_stick");
					zakazBtnSticks.forEach(function(elem) {
						elem.classList.add("button_active")
					})
					let totalItems = document.querySelector(".total_zakaz").innerText;
					document.querySelector(".total_zakaz").innerText = parseInt(totalItems) + 1;
				}
			})
		} else{
			let costnum = cost.slice(0,cost.length - 4);
			let currentCostStr = document.querySelector(".total_price").innerText;
			let currentCostNum = currentCostStr.slice(0,currentCostStr.length - 3);
			const itemhtml = 
			`<img src="" alt="" class="zakaz_item_img">
			<div class="zakaz_right_bar">
			<div class="zakaz_item_after_img">
			<span class="zakaz_item_name zakaz_orange_text">Товар «название»</span>
			<span class="zakaz_item_price zakaz_orange_text">000 грн</span>
			</div>
			<div id="itemParent" class="item_after_price ">
			<span id="plus" class="item_amout_plus grey_style_btn">+</span>
			<span class="item_amout grey_style_btn">1</span>
			<span id="minus" class="item_amout_minus grey_style_btn">-</span>
			</div>
			</div>
			<div class="trash">
			<svg id="trash" class="trash_svg_top trash_svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
			<path id="trash" d="M5 4H19" stroke="#000000" stroke-width="2" stroke-linecap="round"/>
			<path id="trash" d="M8 3.99999L9.84479 3.99999C10.5665 3.99999 11.2405 3.6393 11.6408 3.0388C11.8117 2.78248 12.1883 2.78248 12.3592 3.0388C12.7595 3.6393 13.4335 3.99999 14.1552 3.99999L16 3.99999" stroke="#000000" stroke-width="2"/>
			</svg>
			<svg id="trash" class="trash_svg_bottom trash_svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
			<path id="trash" d="M18 8L17.2131 18.2301C17.0928 19.7931 15.7895 21 14.2219 21H9.77809C8.21048 21 6.90716 19.7931 6.78693 18.2301L6 8" stroke="#000000" stroke-width="2" stroke-linecap="round"/>
			</svg>
			</div>`;
			const newElement = document.createElement('div');
			newElement.classList.add("zakaz_item");
			newElement.innerHTML = itemhtml;
			zakazList.prepend(newElement);	
			newElement.querySelector(".zakaz_item_img").setAttribute("src", imgAtrribute)
			newElement.querySelector(".zakaz_item_name").innerText = titleText;
			newElement.querySelector(".zakaz_item_price").innerText = cost;
			arrayStrings.push(titleText);
			window.setTimeout(function() {
				newElement.classList.add("zakaz_item_active");
			}, 0);
			if (document.querySelector(".zakaz_item")){
				document.querySelector(".zakaz_block").classList.add("zakaz_block_toggle")
				document.querySelector(".bag_with_total").classList.add("bag_with_total_toggle")
				const zakazBtnSticks = document.querySelectorAll(".button_stick");
				zakazBtnSticks.forEach(function(elem) {
					elem.classList.add("button_active")
				})
			}
			document.querySelector(".total_price").innerText = parseInt(currentCostNum) + parseInt(costnum) + " грн";
			document.querySelector(".total_price_footer").innerText =
			document.querySelector(".total_price").innerText;
			let totalItems = document.querySelector(".total_zakaz").innerText;
			document.querySelector(".total_zakaz").innerText = parseInt(totalItems) + 1;
		}
	})
})

window.addEventListener("click", function (e) {
	if(e.target.id === "trash"){
		const itemParentTrash = event.target.closest('.zakaz_item')
		itemParentTrash.style.opacity = "40%";
		const newArray = arrayStrings.filter(function(elem) {
			return elem != itemParentTrash.querySelector(".zakaz_item_name").innerText;
		});
		arrayStrings.splice(0,arrayStrings.length)
		newArray.map(function(elem) {
			arrayStrings.push(elem)
		})
		let currentCostStr = document.querySelector(".total_price").innerText;
		let currentCostNum = currentCostStr.slice(0,currentCostStr.length - 3);
		let cost = itemParentTrash.querySelector(".zakaz_item_price").innerText;
		let costnum = cost.slice(0,cost.length - 4);
		let currentAmout = itemParentTrash.querySelector(".item_amout").innerText;
		if (currentAmout == 0){
			window.setTimeout(function() {
				itemParentTrash.remove()
				if (!document.querySelector(".zakaz_item")){
					document.querySelector(".zakaz_block").classList.remove("zakaz_block_toggle")
					document.querySelector(".bag_with_total").classList.remove("bag_with_total_toggle")
					const zakazBtnSticks = document.querySelectorAll(".button_stick");
					zakazBtnSticks.forEach(function(elem) {
						elem.classList.remove("button_active")
					})
				}
			}, 300);
		} else{
			document.querySelector(".total_price").innerText = currentCostNum - (currentAmout * costnum) + " грн";
			window.setTimeout(function() {
				itemParentTrash.remove()
				if (!document.querySelector(".zakaz_item")){
					document.querySelector(".zakaz_block").classList.remove("zakaz_block_toggle")
					document.querySelector(".bag_with_total").classList.remove("bag_with_total_toggle")
					const zakazBtnSticks = document.querySelectorAll(".button_stick");
					zakazBtnSticks.forEach(function(elem) {
						elem.classList.remove("button_active")
					})
				}
			}, 300);	
			let totalItems = document.querySelector(".total_zakaz").innerText;
			document.querySelector(".total_zakaz").innerText = parseInt(totalItems) - currentAmout;
		}			
	}
})

const clearallbtn = document.querySelector(".output_submit_footer");
clearallbtn.addEventListener("click", function() {
	let allItemszakaza = document.querySelectorAll(".zakaz_item")
	allItemszakaza.forEach(function(element) {
		element.style.opacity = "40%";
		document.querySelector(".total_price").innerText = 0 + " грн";
		document.querySelector(".total_price_footer").innerText =
		document.querySelector(".total_price").innerText;
		document.querySelector(".total_zakaz").innerText = 0;
		arrayStrings.splice(0,arrayStrings.length)
		window.setTimeout(function() {
			element.remove(element)
		}, 300);
		document.querySelector(".zakaz_block").classList.remove("zakaz_block_toggle")
		document.querySelector(".bag_with_total").classList.remove("bag_with_total_toggle")
		const zakazBtnSticks = document.querySelectorAll(".button_stick");
		zakazBtnSticks.forEach(function(elem) {
			elem.classList.remove("button_active")
		})
	})
})

let buttonBulean;
const zakazButton = document.querySelector(".forTuch");
zakazButton.addEventListener("click", function() {
	const zakazBtnSticks = document.querySelectorAll(".button_stick");
	zakazBtnSticks.forEach(function(elem) {
		if (elem.classList.contains("button_active")){
			document.querySelector(".zakaz_block").classList.remove("zakaz_block_toggle");
			elem.classList.remove("button_active");
			document.querySelector(".bag_with_total").classList.remove("bag_with_total_toggle")
		} else {
			document.querySelector(".zakaz_block").classList.add("zakaz_block_toggle");
			elem.classList.add("button_active");
			document.querySelector(".bag_with_total").classList.add("bag_with_total_toggle")
		}
	})	
})

const menuButton = document.querySelector(".burger");
const menuBar = document.querySelector(".menu_bar");
const buttonLines = document.querySelectorAll(".burger_line");
menuButton.addEventListener("click", function() {
	menuBar.classList.toggle("menu_bar_active")
	if (menuBar.classList.contains("menu_bar_active")){
		buttonLines.forEach(function(elem) {
			elem.classList.add("burger_line_active")
		})
	} else{
		buttonLines.forEach(function(elem) {
			elem.classList.remove("burger_line_active")
		})
	}
})

