function gerar(){
        var nome = document.getElementById('txtnome')
        var PrimeiroSemestre = document.getElementById('txtprimeirosemestre');
        var SegundoSemestre = document.getElementById('txtsegundosemestre');
        var Frequencia = document.getElementById('txtfrequecia');
        var res = document.getElementById('resultado');

        var novaTabela = document.createElement('table');
        document.getElementById("test").appendChild(novaTabela);
        var tabela = document.createElement("table");
        var cabecalho = document.createElement("thead");
        var corpo = document.createElement("tbody");

        tabela.appendChild(cabecalho);
        tabela.appendChild(corpo);
        document.getElementById("test").appendChild(tabela);

        var nomes=[];
        var nota1=[];
        var nota2=[];
        var frequencia = [];
        for(i=0;i<=4;i++){
            nomes.push(nome.value);
            nota1.push(PrimeiroSemestre.value);
            nota2.push(SegundoSemestre.value);
            frequencia.push(Frequencia.value)
            var opc=window.prompt('Você Deseja continuar preenchendo os dados?(Sim/Não)')
        }

    
        for(i=0;i<=4;i++){
            res.innerHTML = nomes[0] + nota1[0] + nota2[0] + frequencia[0];
        }
        var container = document.getElementById("container");
container.innerHTML = [
  '<table>',
  '<thead>',
  '<tr>',
  '<th>Nome</th>',
  '<th>1° Semestre</th>',
  '<th>2° Semestre</th>',
  '<th>Nota Final</th>',
  '<th>Frequencia</th>',
  '</tr>',
  '</thead>',
  '<tbody>',
  '<tr>',
  `<td>1</td>`,
  '<td>data</td>',
  '<td>data</td>',
  '<td>data</td>',
  '</tr>',
  '<tr>',
  '<td>2</td>',
  '<td>data</td>',
  '<td>data</td>',
  '<td>data</td>',
  '</tr>',
  '<tr>',
  '<td>3</td>',
  '<td>data</td>',
  '<td>data</td>',
  '<td>data</td>',
  '</tr>',
  '</tbody>',
  '</table>'
].join("\n");
}