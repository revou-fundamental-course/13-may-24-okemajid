//function hitung luas
function hitungluas(){
    alas=document.getElementById("alas").value;
    tinggi=document.getElementById("tinggi").value;
    luas=1/2*alas*tinggi;
    document.getElementById("luas").value=luas;
}
//functiion reset luas
function resetluas(){
    alas=document.getElementById("alas").value="";
    tinggi=document.getElementById("tinggi").value="";
    luas=1/2*alas*tinggi;
    document.getElementById("luas").value="";
}
//function hitung keliling
function hitungkeliling(){
    a=+document.getElementById("sisi-a").value;
    b=+document.getElementById("sisi-b").value;
    c=+document.getElementById("sisi-c").value;
    keliling =a+b+c;
    document.getElementById("keliling").value= keliling;
}
//function reset keliling
function resetkeliling(){
        a=document.getElementById("sisi-a").value="";
        b=document.getElementById("sisi-b").value="";
        c=document.getElementById("sisi-c").value="";
        keliling =a+b+c;
        document.getElementById("keliling").value="";
    }

