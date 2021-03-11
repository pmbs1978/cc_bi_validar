function validarcc(){
    var numero=document.getElementById('c_c_numero').value;
    document.getElementById('errado').src='images/thumbs_down_red.png';
                                                
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

            switch(letra1) {
                case 'z':
                numero10 = 35;
                break;
                case 'y':
                numero10 = 34;
                break;
                case 'x':
                numero10 = 33;
                break;
                case 'w':
                numero10 = 32;
                break;
                case 'v':
                numero10 = 31;
                break;
                case 'u':
                numero10 = 30;
                break;
                case 't':
                numero10 = 29;
                break;
                case 's':
                numero10 = 28;
                break;
                case 'r':
                numero10 = 27;
                break;
                case 'q':
                numero10 = 26;
                break;
                case 'p':
                numero10 = 25;
                break;
                case 'o':
                numero10 = 24;
                break;
                case 'n':
                numero10 = 23;
                break;
                case 'm':
                numero10 = 22;
                break;
                case 'l':
                numero10 = 21;
                break;
                case 'k':
                numero10 = 20;
                break;
                case 'j':
                numero10 = 19;
                break;
                case 'i':
                numero10 = 18;
                break;
                case 'h':
                numero10 = 17;
                break;
                case 'g':
                numero10 = 16;
                break;
                case 'f':
                numero10 = 15;
                break;
                case 'e':
                numero10 = 14;
                break;
                case 'd':
                numero10 = 13;
                break;
                case 'c':
                numero10 = 12;
                break;
                case 'b':
                numero10 = 11;
                break;
                case 'a':
                numero10 = 10;
                break;
                default:

            }

            switch(letra2) {
                case 'z':
                numero11 = 35;
                break;
                case 'y':
                numero11 = 34;
                break;
                case 'x':
                numero11 = 33;
                break;
                case 'w':
                numero11 = 32;
                break;
                case 'v':
                numero11 = 31;
                break;
                case 'u':
                numero11 = 30;
                break;
                case 't':
                numero11 = 29;
                break;
                case 's':
                numero11 = 28;
                break;
                case 'r':
                numero11 = 27;
                break;
                case 'q':
                numero11 = 26;
                break;
                case 'p':
                numero11 = 25;
                break;
                case 'o':
                numero11 = 24;
                break;
                case 'n':
                numero11 = 23;
                break;
                case 'm':
                numero11 = 22;
                break;
                case 'l':
                numero11 = 21;
                break;
                case 'k':
                numero11 = 20;
                break;
                case 'j':
                numero11 = 19;
                break;
                case 'i':
                numero11 = 18;
                break;
                case 'h':
                numero11 = 17;
                break;
                case 'g':
                numero11 = 16;
                break;
                case 'f':
                numero11 = 15;
                break;
                case 'e':
                numero11 = 14;
                break;
                case 'd':
                numero11 = 13;
                break;
                case 'c':
                numero11 = 12;
                break;
                case 'b':
                numero11 = 11;
                break;
                case 'a':
                numero11 = 10;
                break;
                default:

            }
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

            switch(letra1) {
                case 'z':
                numero10 = 35;
                break;
                case 'y':
                numero10 = 34;
                break;
                case 'x':
                numero10 = 33;
                break;
                case 'w':
                numero10 = 32;
                break;
                case 'v':
                numero10 = 31;
                break;
                case 'u':
                numero10 = 30;
                break;
                case 't':
                numero10 = 29;
                break;
                case 's':
                numero10 = 28;
                break;
                case 'r':
                numero10 = 27;
                break;
                case 'q':
                numero10 = 26;
                break;
                case 'p':
                numero10 = 25;
                break;
                case 'o':
                numero10 = 24;
                break;
                case 'n':
                numero10 = 23;
                break;
                case 'm':
                numero10 = 22;
                break;
                case 'l':
                numero10 = 21;
                break;
                case 'k':
                numero10 = 20;
                break;
                case 'j':
                numero10 = 19;
                break;
                case 'i':
                numero10 = 18;
                break;
                case 'h':
                numero10 = 17;
                break;
                case 'g':
                numero10 = 16;
                break;
                case 'f':
                numero10 = 15;
                break;
                case 'e':
                numero10 = 14;
                break;
                case 'd':
                numero10 = 13;
                break;
                case 'c':
                numero10 = 12;
                break;
                case 'b':
                numero10 = 11;
                break;
                case 'a':
                numero10 = 10;
                break;
                default:

            }

            switch(letra2) {
                case 'z':
                numero11 = 35;
                break;
                case 'y':
                numero11 = 34;
                break;
                case 'x':
                numero11 = 33;
                break;
                case 'w':
                numero11 = 32;
                break;
                case 'v':
                numero11 = 31;
                break;
                case 'u':
                numero11 = 30;
                break;
                case 't':
                numero11 = 29;
                break;
                case 's':
                numero11 = 28;
                break;
                case 'r':
                numero11 = 27;
                break;
                case 'q':
                numero11 = 26;
                break;
                case 'p':
                numero11 = 25;
                break;
                case 'o':
                numero11 = 24;
                break;
                case 'n':
                numero11 = 23;
                break;
                case 'm':
                numero11 = 22;
                break;
                case 'l':
                numero11 = 21;
                break;
                case 'k':
                numero11 = 20;
                break;
                case 'j':
                numero11 = 19;
                break;
                case 'i':
                numero11 = 18;
                break;
                case 'h':
                numero11 = 17;
                break;
                case 'g':
                numero11 = 16;
                break;
                case 'f':
                numero11 = 15;
                break;
                case 'e':
                numero11 = 14;
                break;
                case 'd':
                numero11 = 13;
                break;
                case 'c':
                numero11 = 12;
                break;
                case 'b':
                numero11 = 11;
                break;
                case 'a':
                numero11 = 10;
                break;
                default:

            }
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

            switch(letra1) {
                case 'z':
                numero10 = 35;
                break;
                case 'y':
                numero10 = 34;
                break;
                case 'x':
                numero10 = 33;
                break;
                case 'w':
                numero10 = 32;
                break;
                case 'v':
                numero10 = 31;
                break;
                case 'u':
                numero10 = 30;
                break;
                case 't':
                numero10 = 29;
                break;
                case 's':
                numero10 = 28;
                break;
                case 'r':
                numero10 = 27;
                break;
                case 'q':
                numero10 = 26;
                break;
                case 'p':
                numero10 = 25;
                break;
                case 'o':
                numero10 = 24;
                break;
                case 'n':
                numero10 = 23;
                break;
                case 'm':
                numero10 = 22;
                break;
                case 'l':
                numero10 = 21;
                break;
                case 'k':
                numero10 = 20;
                break;
                case 'j':
                numero10 = 19;
                break;
                case 'i':
                numero10 = 18;
                break;
                case 'h':
                numero10 = 17;
                break;
                case 'g':
                numero10 = 16;
                break;
                case 'f':
                numero10 = 15;
                break;
                case 'e':
                numero10 = 14;
                break;
                case 'd':
                numero10 = 13;
                break;
                case 'c':
                numero10 = 12;
                break;
                case 'b':
                numero10 = 11;
                break;
                case 'a':
                numero10 = 10;
                break;
                default:

            }

            switch(letra2) {
                case 'z':
                numero11 = 35;
                break;
                case 'y':
                numero11 = 34;
                break;
                case 'x':
                numero11 = 33;
                break;
                case 'w':
                numero11 = 32;
                break;
                case 'v':
                numero11 = 31;
                break;
                case 'u':
                numero11 = 30;
                break;
                case 't':
                numero11 = 29;
                break;
                case 's':
                numero11 = 28;
                break;
                case 'r':
                numero11 = 27;
                break;
                case 'q':
                numero11 = 26;
                break;
                case 'p':
                numero11 = 25;
                break;
                case 'o':
                numero11 = 24;
                break;
                case 'n':
                numero11 = 23;
                break;
                case 'm':
                numero11 = 22;
                break;
                case 'l':
                numero11 = 21;
                break;
                case 'k':
                numero11 = 20;
                break;
                case 'j':
                numero11 = 19;
                break;
                case 'i':
                numero11 = 18;
                break;
                case 'h':
                numero11 = 17;
                break;
                case 'g':
                numero11 = 16;
                break;
                case 'f':
                numero11 = 15;
                break;
                case 'e':
                numero11 = 14;
                break;
                case 'd':
                numero11 = 13;
                break;
                case 'c':
                numero11 = 12;
                break;
                case 'b':
                numero11 = 11;
                break;
                case 'a':
                numero11 = 10;
                break;
                default:

            }
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