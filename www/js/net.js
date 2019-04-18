// This is a JavaScript file

$(document).on('click','#net',function(){
  function checkConnection() {
    var networkState = navigator.connection.type;

    var states = {};
    states[Connection.UNKNOWN] = 'Unknown connection';
    states[Connection.ETHERNET] = 'Ethernet connection';
    states[Connection.WIFI] = 'WiFi connection';
    states[Connection.CELL_2G] = 'Cell 2G connection';
    states[Connection.CELL_3G] = 'Cell 3G connection';
    states[Connection.CELL_4G] = 'Cell 4G connection';
    states[Connection.CELL] = 'Cell generic connection';
    states[Connection.NONE] = 'No network connection';

    if (states[networkState] == 'No network connection') {

      navigator.notification.alert("Sem conexão. Por favor, conectar a uma rede.", semConexao, "Alerta", "fechar");
    }
    else {
      navigator.notification.beep(1);
      navigator.notification.vibrate(600);
    }
  }

  //Desconectado
  function semConexao() {
    navigator.notification.beep(3);
    navigator.vibrate(6000);
  }
  checkConnection();
});