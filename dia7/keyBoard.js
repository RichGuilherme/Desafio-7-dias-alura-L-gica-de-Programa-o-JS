function tecla() {
    press = event.keyCode;
  
    console.log(press)
  
    switch (press) {
      case 13:
        resultado()
        break

      case 8:
        deletar()
        break;

      case 40:
         add_operador("(")
         break;
      case 41:
         add_operador(")")
         break;

      case 42:
        add_operador("*")
        break
  
      case 43:
        add_operador("+")
        break
  
      case 44:
        add_numero(".")
        break
  
      case 45:
        add_operador("-")
        break
  
      case 46:
        add_numero(".")
        break
  

      case 48:
        add_numero(0)
        break
  
      case 49:
        add_numero(1);
        break
  
      case 50:
        add_numero(2)
        break
  
      case 51:
        add_numero(3)
        break
  
      case 52:
        add_numero(4)
        break
  
      case 53:
        add_numero(5)
        break
  
      case 54:
        add_numero(6)
        break
  
      case 55:
        add_numero(7)
        break
  
      case 56:
        add_numero(8)
        break
  
      case 57:
        add_numero(9)
        break
    }
  }
  
  document.body.onkeypress = tecla;