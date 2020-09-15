//数组常用的方法api
/*
	1.concat();连结两个或者多个数组，该方法不会改变现有数组仅仅返回一个连结数组的副本
	形式
	var data = [1,2,3,4,5];
	var data1 = [1,5,8,9];
	var datas = data.concat(data1);
	该属性所有浏览器都支持
	2.copyWithin(target,start,end);拷贝start开始的数组元素，到end结束的部分到target位置，拷贝的部分不包括end结束元素
	形式
	var data = [1,2,3,4,5];
	data.copyWithin(2,0,3);
	es6新增属性
	3.entries();返回数组的可迭代对象
	形式
	var data = ["Banana", "Orange", "Apple", "Mango"];
	var x = data.entries();
	console.log(x.next().value);//0 "Banana"
	console.log(x.next().value);//1 "Orange"
	es6新增属性
	4.every();检测数组中的元素是否都符合某一条件
	形式
	var data = [10,20,30,40,50];
	var flag = data.every(function(item){
		return item>10;
	})
	console.log(flag);//false
	注意：不会改变原数组，不会检测空数组，对于空数组测绘返回true
	ie9支持
	5.fill(target,start,end);使用一个特定的值替换数组的元素,可以选择替换的元素范围。不包括end
	形式
	var data = [1,2,3,4,5,6];
	data.fill(5,2,4);
	console.log(data);//[1,2,5,5,5,6]
	
*/