let NV = function (name, HP) {
    this.name = name;
    this.HP = HP;
    this.getHP = function () {
        return this.HP;
    };
    this.setHP = function (newHP) {
        this.HP = newHP;
    };
};
let kaido = new NV("kaido", 50);
let luffy = new NV("luffy", 50);
let b = 1;

function Random() {
    return Math.floor(Math.random() * 10) + 1;
}

function click1() {
    kaido.setHP(parseInt(document.getElementById("HP1").innerText));
    luffy.setHP(parseInt(document.getElementById("HP2").innerText));
    switch (b) {
        case 1:
            a = Random();
            document.getElementById("hienthi1").innerHTML = a;
            document.getElementById("radom1").value = a;
            document.getElementById("hienthi2").innerHTML = "";
            document.getElementById("hKaido").style.color = "blue";
            document.getElementById("hKaido").style.background = "chartreuse";
            document.getElementById("hLuffy").style.color = "black";
            document.getElementById("hLuffy").style.background = "white";
            document.getElementById("ketQua").innerText = "Kết Quả:";
            document.getElementById("ketQua").style.width = "80px";
            b = 2;
            break;
        case 2:
            a = Random();
            document.getElementById("hienthi2").innerHTML = a;
            document.getElementById("radom1").value = a;
            document.getElementById("hLuffy").style.color = "blue";
            document.getElementById("hLuffy").style.background = "chartreuse";
            document.getElementById("hKaido").style.color = "black";
            document.getElementById("hKaido").style.background = "white";
            b = 3;
            break;
        case 3:
            document.getElementById("ketQua").style.width = "225px";
            let kaidoo = parseInt(document.getElementById("hienthi1").innerHTML);
            let luffyy = a;
            if (kaidoo > luffyy) {
                document.getElementById("ketQua").innerText = "Luffy thua sẽ bị trừ " + (kaidoo - luffyy) +
                    " HP";
                document.getElementById("HP2").innerText = (luffy.HP - (kaidoo - luffyy));
                document.getElementById("HP2").style.color = "brown";
                document.getElementById("HP1").style.color = "black";
            } else {
                if (kaidoo == luffyy) {
                    document.getElementById("ketQua").innerText = "kaido và luffy hoà nhau";
                } else {
                    document.getElementById("ketQua").innerText = "kaido thua sẽ bị trừ " + (luffyy - kaidoo) +
                        " HP";
                    document.getElementById("HP1").innerText = (kaido.HP - (luffyy - kaidoo));
                    document.getElementById("HP1").style.color = "brown";
                    document.getElementById("HP2").style.color = "black";
                }
            }
            b = 1;
            break;

    }
    if (kaido.HP <= 0) {
        alert("Người chiến thắng là Luffy");
        return 0;
    }
    if (luffy.HP <= 0) {
        alert("Người chiến thắng là kaido");
        return 0;
    }
}
