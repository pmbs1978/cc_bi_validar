function validarcc(){
    var numero=document.getElementById('c_c_numero').value;
    document.getElementById('errado').src='images/thumbs_down_red.png';
    numero = numero.replace(/ /g, '');                                      
    var a=numero.length;

    if (a < '10'){

        if(!isNaN(numero)) {
            var resultadonumero=1;

            if (a == '7' || a == '8' || a == '9') {
                a=a-1;

                if (a == '6'){
                    var controlo1=numero.substr(6,1) * 1;
                    if (controlo1 == '0') {
                        controlo1='10';
                    }
                    else {}
                    var resultadonumero1='0' * 9;
                    var resultadonumero2='0' * 8;
                    var resultadonumero3=numero.substr(0,1) * 7;
                    var resultadonumero4=numero.substr(1,1) * 6;
                    var resultadonumero5=numero.substr(2,1) * 5;
                    var resultadonumero6=numero.substr(3,1) * 4;
                    var resultadonumero7=numero.substr(4,1) * 3;
                    var resultadonumero8=numero.substr(5,1) * 2;
                    var resultadoa=resultadonumero1+resultadonumero2+resultadonumero3+resultadonumero4+resultadonumero5+resultadonumero6+resultadonumero7+resultadonumero8+controlo1;
                    var resultado=resultadoa % 11;
                    if (resultado == '0') {
                    document.getElementById('errado').src='images/thumbs_up.png';
                    document.getElementById('validar').disabled = false;
                    }
                    return resultadoa;
                } else {
                    if (a == '7'){
                        var controlo1=numero.substr(7,1) * 1;
                        if (controlo1 == '0') {
                            controlo1='10';
                        }
                        else {}
                        var resultadonumero1='0' * 9;
                        var resultadonumero2=numero.substr(0,1) * 8;
                        var resultadonumero3=numero.substr(1,1) * 7;
                        var resultadonumero4=numero.substr(2,1) * 6;
                        var resultadonumero5=numero.substr(3,1) * 5;
                        var resultadonumero6=numero.substr(4,1) * 4;
                        var resultadonumero7=numero.substr(5,1) * 3;
                        var resultadonumero8=numero.substr(6,1) * 2;
                        var resultadoa=resultadonumero1+resultadonumero2+resultadonumero3+resultadonumero4+resultadonumero5+resultadonumero6+resultadonumero7+resultadonumero8+controlo1;
                        var resultado=resultadoa % 11;
                        if (resultado == '0') {
                        document.getElementById('errado').src='images/thumbs_up.png'; 
                        document.getElementById('validar').disabled = false;
                    }
                        return resultadoa;
                    } else {
                        if (a == '8'){
                            var controlo1=numero.substr(8,1) * 1;
                            if (controlo1 == '0') {
                                controlo1='10';
                            }
                            else {}
                            var resultadonumero1=numero.substr(0,1) * 9;
                            var resultadonumero2=numero.substr(1,1) * 8;
                            var resultadonumero3=numero.substr(2,1) * 7;
                            var resultadonumero4=numero.substr(3,1) * 6;
                            var resultadonumero5=numero.substr(4,1) * 5;
                            var resultadonumero6=numero.substr(5,1) * 4;
                            var resultadonumero7=numero.substr(6,1) * 3;
                            var resultadonumero8=numero.substr(7,1) * 2;
                            var resultadoa=resultadonumero1+resultadonumero2+resultadonumero3+resultadonumero4+resultadonumero5+resultadonumero6+resultadonumero7+resultadonumero8+controlo1;
                            var resultado=resultadoa % 11;
                            if (resultado == '0') {
                            document.getElementById('errado').src='images/thumbs_up.png';
                            document.getElementById('validar').disabled = false;
                        }
                            return resultado;
                        } else {
                            document.getElementById('errado').src='images/thumbs_down_red.png';
                            document.getElementById('validar').disabled = true;							
                        }
                    }
                }
            }
            else { }
        } else { 
        document.getElementById('errado').src='images/thumbs_down_red.png';
        document.getElementById('validar').disabled = true;
        }
    }
    else
    {
        document.getElementById('errado').src='images/thumbs_down_red.png';
        document.getElementById('validar').disabled = true;
        
        if (a == '10') {
            var numero10 = 0;
            var numero11 = 0;
            var letra1=numero.substr(7,1);
            var letra2=numero.substr(8,1);

            var letra = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

            numero10 = letra.indexOf(letra1.toLowerCase()) + 10;
            numero11 = letra.indexOf(letra2.toLowerCase()) + 10;

            if (a == '10') {
                var resultadonumero1='0' * 2;
                var resultadonumero2='0' * 1;
                var resultadonumero3=numero.substr(0,1) * 2;
                var resultadonumero4=numero.substr(1,1) * 1;
                var resultadonumero5=numero.substr(2,1) * 2;
                var resultadonumero6=numero.substr(3,1) * 1;
                var resultadonumero7=numero.substr(4,1) * 2;
                var resultadonumero8=numero.substr(5,1) * 1;
                var resultadonumero9=numero.substr(6,1) * 2;
                var resultadonumero10=numero10 * 1;
                var resultadonumero11=numero11 * 2;
                var resultadonumero12=numero.substr(9,1) * 1;

                if (resultadonumero1 > 9) {
                    resultadonumero1=resultadonumero1 - 9;
                }
                if (resultadonumero3 > 9) {
                    resultadonumero3=resultadonumero3 - 9;
                }
                if (resultadonumero5 > 9) {
                    resultadonumero5=resultadonumero5 - 9;
                }
                if (resultadonumero7 > 9) {
                    resultadonumero7=resultadonumero7 - 9;
                }
                if (resultadonumero9 > 9) {
                    resultadonumero9=resultadonumero9 - 9;
                }
                if (resultadonumero11 > 9) {
                    resultadonumero11=resultadonumero11 - 9;
                }

                var resultadoa=resultadonumero1+resultadonumero2+resultadonumero3+resultadonumero4+resultadonumero5+resultadonumero6+resultadonumero7+resultadonumero8+resultadonumero9+resultadonumero10
                +resultadonumero11+resultadonumero12;
                var resultado=resultadoa % 10;

                if (resultado == '0') {
                document.getElementById('errado').src='images/thumbs_up.png';
                document.getElementById('validar').disabled = false;
                }

                return resultadoa;
            }



        }

        if (a == '11') {
            var numero10 = 0;
            var numero11 = 0;
            var letra1=numero.substr(8,1);
            var letra2=numero.substr(9,1);

            var letra = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

            numero10 = letra.indexOf(letra1.toLowerCase()) + 10;
            numero11 = letra.indexOf(letra2.toLowerCase()) + 10;

            if (a == '11') {
                var resultadonumero1='0' * 2;
                var resultadonumero2=numero.substr(0,1) * 1;
                var resultadonumero3=numero.substr(1,1) * 2;
                var resultadonumero4=numero.substr(2,1) * 1;
                var resultadonumero5=numero.substr(3,1) * 2;
                var resultadonumero6=numero.substr(4,1) * 1;
                var resultadonumero7=numero.substr(5,1) * 2;
                var resultadonumero8=numero.substr(6,1) * 1;
                var resultadonumero9=numero.substr(7,1) * 2;
                var resultadonumero10=numero10 * 1;
                var resultadonumero11=numero11 * 2;
                var resultadonumero12=numero.substr(10,1) * 1;

                if (resultadonumero1 > 9) {
                    resultadonumero1=resultadonumero1 - 9;
                }
                if (resultadonumero3 > 9) {
                    resultadonumero3=resultadonumero3 - 9;
                }
                if (resultadonumero5 > 9) {
                    resultadonumero5=resultadonumero5 - 9;
                }
                if (resultadonumero7 > 9) {
                    resultadonumero7=resultadonumero7 - 9;
                }
                if (resultadonumero9 > 9) {
                    resultadonumero9=resultadonumero9 - 9;
                }
                if (resultadonumero11 > 9) {
                    resultadonumero11=resultadonumero11 - 9;
                }

                var resultadoa=resultadonumero1+resultadonumero2+resultadonumero3+resultadonumero4+resultadonumero5+resultadonumero6+resultadonumero7+resultadonumero8+resultadonumero9+resultadonumero10
                +resultadonumero11+resultadonumero12;
                var resultado=resultadoa % 10;

                if (resultado == '0') {
                document.getElementById('errado').src='images/thumbs_up.png';
                document.getElementById('validar').disabled = false;
                }

                return resultadoa;
            }



        }

        if (a == '12') {
            var numero10 = 0;
            var numero11 = 0;
            var letra1=numero.substr(9,1);
            var letra2=numero.substr(10,1);

            var letra = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

            numero10 = letra.indexOf(letra1.toLowerCase()) + 10;
            numero11 = letra.indexOf(letra2.toLowerCase()) + 10;

            if (a == '12') {
                var resultadonumero1=numero.substr(0,1) * 2;
                var resultadonumero2=numero.substr(1,1) * 1;
                var resultadonumero3=numero.substr(2,1) * 2;
                var resultadonumero4=numero.substr(3,1) * 1;
                var resultadonumero5=numero.substr(4,1) * 2;
                var resultadonumero6=numero.substr(5,1) * 1;
                var resultadonumero7=numero.substr(6,1) * 2;
                var resultadonumero8=numero.substr(7,1) * 1;
                var resultadonumero9=numero.substr(8,1) * 2;
                var resultadonumero10=numero10 * 1;
                var resultadonumero11=numero11 * 2;
                var resultadonumero12=numero.substr(11,1) * 1;

                if (resultadonumero1 > 9) {
                    resultadonumero1=resultadonumero1 - 9;
                }
                if (resultadonumero3 > 9) {
                    resultadonumero3=resultadonumero3 - 9;
                }
                if (resultadonumero5 > 9) {
                    resultadonumero5=resultadonumero5 - 9;
                }
                if (resultadonumero7 > 9) {
                    resultadonumero7=resultadonumero7 - 9;
                }
                if (resultadonumero9 > 9) {
                    resultadonumero9=resultadonumero9 - 9;
                }
                if (resultadonumero11 > 9) {
                    resultadonumero11=resultadonumero11 - 9;
                }

                var resultadoa=resultadonumero1+resultadonumero2+resultadonumero3+resultadonumero4+resultadonumero5+resultadonumero6+resultadonumero7+resultadonumero8+resultadonumero9+resultadonumero10
                +resultadonumero11+resultadonumero12;
                var resultado=resultadoa % 10;

                if (resultado == '0') {
                document.getElementById('errado').src='images/thumbs_up.png';
                document.getElementById('validar').disabled = false;
                }

                return resultadoa;
            }



        }

    }
}