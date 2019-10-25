$(document).ready(function () {
    $.getJSON("./server.json", function (data) {
        var items = [];
        items.push(data)
        for (let i = 0; i <= items[0].encomendas.length; i++) {
            if (items[0].encomendas[i].entregue === false) {
                items[0].encomendas[i].entregue = "Não Entregue"
            }
            if (items[0].encomendas[i].entregue === true) {
                items[0].encomendas[i].entregue = "Entregue"
            }
            $('#tabela').append(
                items.map(item =>
                    `<tr>
                    <td>${item.encomendas[i].codigo}</td>
                    <td><a style="text-decoration: none;" data-toggle="collapse" href="#collapse${i}" aria-expanded="false" aria-controls="collapse${i}">${item.encomendas[i].cliente.nome}</a></td>
                    <td>R$${item.encomendas[i].valor}</td>
                    <td>R$${(item.encomendas[i].valor + item.encomendas[i].valor * 4.3 / 100).toFixed(2)}</td>
                    <td>${item.encomendas[i].data}</td>                    
                </tr>
                <tr>
                    <td></td>
                    <td>
                    <div class="collapse" id="collapse${i}">
                    <p><strong>Cliente - ${item.encomendas[i].cliente.nome}</strong></p>
                    <p>ID Cliente - ${item.encomendas[i].cliente.id}</p>
                    <p>Código - ${item.encomendas[i].codigo}</p>
                    <p>ID Encomenda - ${item.encomendas[i].id}</p>
                    <p>Valor - R$${item.encomendas[i].valor}</p>
                    <p>Valor Total - R$${(item.encomendas[i].valor + item.encomendas[i].valor * 4.3 / 100).toFixed(2)}</p>
                    <p>Entrega - ${item.encomendas[i].data}</p>
                    <p>Status - ${item.encomendas[i].entregue}</p>
                    </div>
                    </td>
                </tr>`

                ))
        }
        console.log(items)
    })
})