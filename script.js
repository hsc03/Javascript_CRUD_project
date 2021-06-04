function operate()                  //입력폼의 값을 가져와 변수에 저장 후 추가기능 함수를 실행
{		                  
	var foodData = readData();
	addNewData(foodData);
	resetData();	
}

function readData()                  // 입력창에 입력된 값을 가져와 저장
{
	var foodData = [];
	foodData["foodName"] = document.getElementById("foodName").value;
	return foodData;
}

function addNewData(data)             // 행을 추가하여 저장된 입력값을 가져와 추가
{
	var table = document.getElementById("foodList").getElementsByTagName('tbody')[0];
	var newLine = table.insertRow(table.length);
	cell1 = newLine.insertCell(0);
	cell1.innerHTML = data.foodName;
}

function resetData()				// 입력창 초기화
{
	document.getElementById("foodName").value = "";
}