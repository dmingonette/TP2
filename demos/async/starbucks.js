const pedido1 = {type: 'Caramel', cliente: 'Juan'};
const pedido2 = {type: 'Te helado', cliente: 'Julia'};

function procesarPedido(pedido, callBackCliente){
  switch (pedido.type) {
    case "Caramel":
      setTimeout(() => {
        // Llamar al cliente
        callBackCliente(pedido.cliente);
      }, 4000);
      break;
    case "Te helado":
      setTimeout(() => {
        // Llamar al cliente 
        callBackCliente(pedido.cliente);
      }, 2000);
      break;
    default:
      break;
  }
}

procesarPedido(pedido1, cliente => console.log(`Llamar a: ${cliente}`));
procesarPedido(pedido2, cliente => console.log(`Llamar a: ${cliente}`));