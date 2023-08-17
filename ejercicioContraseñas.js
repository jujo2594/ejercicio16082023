/*#####################################################################
######################## EJERCICIO PASSWPORD ##########################
#######################################################################*/

/* JUAN JOSE GALAN MENDEZ */


/*  */
string1 = 'aaaaaa'
string2 = 'bbbb'
numeros = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
let password = "";

function combinar( palabra1, palabra2 ){
  let maxlength;
  if( palabra1.length >= palabra2.length){
    maxlength = palabra1;
  } else{
    maxlength = palabra2
  }
  for(let i = 0; i < maxlength.length; i ++){
    if(i < palabra1.length){
      password += palabra1[i];
    }
    if(i < palabra2.length){
      password += palabra2[i];
      }
    }
    console.log(password);
  }

let final = combinar(string1, string2); 

function verificarNumero(a){
  for(let i = 0; i < numeros.length; j++){ 
    if(a.includes(numeros[j])){
      console.log('Ingrese las palabras sin numeros');
    }else{
      condodole.log('Correcto')
    }
  }  
}


