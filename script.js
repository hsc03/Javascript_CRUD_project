var selectedLine = null;

function operate()          //입력폼의 값을 가져와 변수에 저장 후 추가or수정 함수를 실행 후 입력창 초기화
{		                        
	var foodData = readData();
	if(selectedLine == null)
	{
		addNewData(foodData);
	}else
	{
		updateData(foodData);
	}
	resetData();	
}

function readData()                  // 입력창에 입력된 값을 가져와 저장
{
	var foodData = [];
	foodData["foodName"] = document.getElementById("foodName").value;
	return foodData;
}

function addNewData(data)             // 행을 추가하여 저장된 입력값을 가져와 추가 + 수정버튼 생성
{
	var table = document.getElementById("foodList").getElementsByTagName('tbody')[0];
	var newLine = table.insertRow(table.length);
	cell1 = newLine.insertCell(0);
	cell1.innerHTML = data.foodName;
	cell2 = newLine.insertCell(1);
	cell2.innerHTML = `<input type="button" onclick="clickEdit(this)" value="수정">
						<input type="button" onclick="clickDelete(this)" value="삭제">`;
}

function resetData()				// 입력창 초기화
{
	document.getElementById("foodName").value = "";
	selectedLine = null;
}

function clickEdit(td)              //메세지 출력후 해당 td값 입력창으로 가져옴
{
	var check = confirm("수정하시겠습니까?");
	if(check == true)
	{
		selectedLine = td.parentElement.parentElement;
		document.getElementById("foodName").value = selectedLine.cells[0].innerHTML;
	}
}

function updateData(foodData)          //해당 td값을 수정된 입력값으로 저장
{
	selectedLine.cells[0].innerHTML = foodData.foodName;
}

function clickDelete(td)					// 삭제 확인 메시지 출력 후 해당 열의 값 삭제
{
	if(confirm("삭제하시겠습니까?"))
	{
		line = td.parentElement.parentElement;
		document.getElementById("foodList").deleteRow(line.rowIndex);
		resetData();
	}
}