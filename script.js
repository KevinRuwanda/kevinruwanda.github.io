function terimainput() {
	
		var x=document.forms["koperasi"]["nama"].value;
		var y=document.forms["koperasi"]["alamat"].value;
		var z=document.forms["koperasi"]["kerja"].value;
		var a=document.forms["koperasi"]["identitas"].value;
		var b=document.forms["koperasi"]["nomer"].value;
		var c=document.forms["koperasi"]["bunga"].value;
		var d=document.forms["koperasi"]["keterangan"].value;
if (x==null || x==""||y==null || y==""||z==null || z==""||a==null || a==""||
	b==null || b==""||c==null || c==""||d==null || d==""){	
	alert("Data Masih Ada yang Kosong, Harap Lengkapi Lagi");
return false;
}
if (confirm('apakah anda ingin menambahkan data?')){
	var tabel = document.getElementById("data");
	var row = tabel.insertRow(1);
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);
	var cell4 = row.insertCell(3);
	var cell5 = row.insertCell(4);
	var cell6 = row.insertCell(5);
	var cell7 = row.insertCell(6);


	cell1.innerHTML = x;
	cell2.innerHTML = y;
	cell3.innerHTML = z;
	cell4.innerHTML = a;
	cell5.innerHTML = b;
	cell6.innerHTML = c;
	cell7.innerHTML = d;

	alert("Data Berhasil di Masukan, klik OK untuk melanjutkan");
	}
}