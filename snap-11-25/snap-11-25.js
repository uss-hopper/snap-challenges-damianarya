class snap {
	static String remVowel(String str)
{
	Character vowels[] = {'a', 'e', 'i', 'o', 'u','A','E','I','O','U'};
	List<Character> al = Arrays.asList(vowels);
	StringBuffer sb = new StringBuffer(str);
	for (int i = 0; i < sb.length(); i++) {
	sb.replace(i, i+1, "") ;
	i--;
}

	}
return sb.toString();{
}

// part two

(Math.max(1, 3, 2, 4, 5, 6, 7, 9, 8, 10,));

// part three


var var1 = 0;
var var2 = 1;
var var3;

var num = prompt ("i dont see why I need a message here" 100);

document.write(var1+"<br />");
document.write(var2+"<br />");

for(var i=3; i < = num;i++)
{
	var3 = var1 + var2;
	var1 = var2;
	var2 = var3;

	document.write(var3+"<br />");
}