// ====================================================================
// EXERCÍCIO 2: CLASSE ALUNO (Orientação a Objetos)
// ====================================================================

class Aluno {
    // Construtor para inicializar os dados [cite: 28]
    constructor(id, nome, idade, curso, notaFinal) { 
        this.id = id;
        this.nome = nome; // Atributo [cite: 27]
        this.idade = idade; // Atributo [cite: 27]
        this.curso = curso; // Atributo [cite: 27]
        this.notaFinal = notaFinal; // Atributo [cite: 27]
    }

    // Método isAprovado() [cite: 29]
    isAprovado() { 
        return this.notaFinal >= 7; // Retorna true se notaFinal >= 7 [cite: 29]
    }

    // Método toString() [cite: 30]
    toString() {
        return `ID: ${this.id}, Nome: ${this.nome}, Curso: ${this.curso}, Nota: ${this.notaFinal}`;
    }
}

// Armazenamento em memória (array de objetos) [cite: 17]
let alunos = []; 
let proximoId = 1;

// Referências ao DOM (para manipulação de DOM )
const btnForm = document.getElementById('btn-cadastro-edicao');
const form = document.getElementById('form-aluno');
const inputIdEdicao = document.getElementById('alunoIdEdicao');
const resultadoRelatorioDiv = document.getElementById('resultado-relatorio');

// ====================================================================
// EXERCÍCIO 3: EVENTOS E FUNÇÕES (CRUD)
// ====================================================================

// Função para Salvar (Cadastro ou Edição) - Usa Arrow Function [cite: 40]
const salvarAluno = () => { 
    // Captura dos valores
    const nome = document.getElementById('nome').value;
    const idade = parseInt(document.getElementById('idade').value);
    const curso = document.getElementById('curso').value;
    const notaFinal = parseFloat(document.getElementById('notaFinal').value);

    if (!nome || isNaN(idade) || !curso || isNaN(notaFinal)) {
        alert("Preencha todos os campos.");
        return;
    }

    const idEmEdicao = parseInt(inputIdEdicao.value);
    
    // Lógica de Edição
    if (idEmEdicao > 0) {
        // Usa findIndex (operação de manipulação com Arrow Function [cite: 40])
        const index = alunos.findIndex(aluno => aluno.id === idEmEdicao); 
        if (index !== -1) {
            alunos[index].nome = nome;
            alunos[index].idade = idade;
            alunos[index].curso = curso;
            alunos[index].notaFinal = notaFinal;
            alert(`Aluno editado!`); // Exibir mensagens [cite: 41]
        }
        
        inputIdEdicao.value = '';
        btnForm.textContent = 'Cadastrar';
    } 
    // Lógica de Cadastro
    else {
        // Cria nova instância (refatorado para OO [cite: 34])
        const novoAluno = new Aluno(proximoId++, nome, idade, curso, notaFinal);
        alunos.push(novoAluno); // Adicionado à lista [cite: 14]
        alert(`Aluno cadastrado!`); // Exibir mensagens [cite: 41]
    }

    form.reset();
    renderizarTabela(); // Exibir os registros em uma tabela [cite: 15]
};

// Edição (pré-preenche o formulário) - Usa Arrow Function [cite: 40]
const editarAluno = (id) => {
    const aluno = alunos.find(a => a.id === id); // Usa find com Arrow Function
    
    if (aluno) {
        document.getElementById('nome').value = aluno.nome;
        document.getElementById('idade').value = aluno.idade;
        document.getElementById('curso').value = aluno.curso;
        document.getElementById('notaFinal').value = aluno.notaFinal;
        
        inputIdEdicao.value = aluno.id;
        btnForm.textContent = 'Salvar Edição';
        alert(`Iniciando edição!`); // Exibir mensagens [cite: 41]
    }
};

// Excluir - Usa Arrow Function [cite: 40]
const excluirAluno = (id) => {
    if (confirm(`Tem certeza que deseja excluir?`)) {
        // filter (operação de manipulação com Arrow Function [cite: 40])
        alunos = alunos.filter(aluno => aluno.id !== id); 
        renderizarTabela();
        alert(`Aluno excluído!`); // Exibir mensagens [cite: 41]
    }
};

// Renderiza a Tabela
const renderizarTabela = () => {
    const tabelaBody = document.querySelector('#tabela-alunos tbody');
    tabelaBody.innerHTML = ''; 

    alunos.forEach(aluno => { // Renderização dinâmica [cite: 22]
        const tr = document.createElement('tr');
        
        const statusAprovacao = aluno.isAprovado() ? 'Aprovado' : 'Reprovado';
        
        tr.innerHTML = `
            <td>${aluno.nome}</td>
            <td>${aluno.idade}</td>
            <td>${aluno.curso}</td>
            <td>${aluno.notaFinal} (${statusAprovacao})</td>
            <td>
                <button class="btn-editar" data-id="${aluno.id}">Editar</button>
                <button class="btn-excluir" data-id="${aluno.id}">Excluir</button>
            </td>
        `;

        const btnEditar = tr.querySelector('.btn-editar');
        const btnExcluir = tr.querySelector('.btn-excluir');

        // Adicionar escutadores de eventos (addEventListener) [cite: 38]
        // Usa função anônima [cite: 39]
        btnEditar.addEventListener('click', function() { editarAluno(aluno.id); });
        
        // Usa função anônima [cite: 39]
        btnExcluir.addEventListener('click', function() { excluirAluno(aluno.id); });

        tabelaBody.appendChild(tr);
    });
    // Limpa a área de relatório ao voltar para a tabela completa
    resultadoRelatorioDiv.innerHTML = '<p>Clique em um relatório para visualizar os resultados.</p>';
};

// ====================================================================
// EXERCÍCIO 4: RELATÓRIOS (Programação Funcional)
// ====================================================================

// 1. Listar aprovados [cite: 51]
function listarAprovados() {
    // Uso do método filter [cite: 57]
    const aprovados = alunos.filter(aluno => aluno.isAprovado()); 
    
    // ... Lógica de exibição ...
    let html = '<h3>Alunos Aprovados</h3>';
    if (aprovados.length > 0) {
        html += '<ul>' + aprovados.map(aluno => 
            `<li>${aluno.nome}: Nota ${aluno.notaFinal}</li>`
        ).join('') + '</ul>';
    } else {
        html += '<p>Nenhum aluno aprovado.</p>';
    }
    resultadoRelatorioDiv.innerHTML = html; // Atualização dinâmica [cite: 59]
}

// 2. Calcular médias [cite: 52, 53]
function calcularMedias() {
    // Cálculo da Média das Notas (map + reduce) [cite: 57]
    const somaNotas = alunos.map(aluno => aluno.notaFinal)
                            .reduce((total, nota) => total + nota, 0); 
    const mediaNotas = alunos.length > 0 ? (somaNotas / alunos.length).toFixed(2) : 0;

    // Cálculo da Média das Idades (reduce) [cite: 57]
    const somaIdades = alunos.reduce((total, aluno) => total + aluno.idade, 0); 
    const mediaIdades = alunos.length > 0 ? (somaIdades / alunos.length).toFixed(1) : 0;

    let html = '<h3>Médias</h3>';
    html += `<p>Média das Notas Finais: <strong>${mediaNotas}</strong></p>`;
    html += `<p>Média das Idades: <strong>${mediaIdades} anos</strong></p>`;
    resultadoRelatorioDiv.innerHTML = html; // Atualização dinâmica [cite: 59]
}

// 3. Listar nomes ordenados [cite: 54]
function listarNomesOrdenados() {
    // Uso do método sort [cite: 57]
    const nomesOrdenados = alunos.slice().sort((a, b) => a.nome.localeCompare(b.nome));

    // Uso do método map [cite: 57]
    let html = '<h3>Nomes em Ordem Alfabética</h3>';
    if (nomesOrdenados.length > 0) {
        html += '<ul>' + nomesOrdenados.map(aluno => 
            `<li>${aluno.nome}</li>`
        ).join('') + '</ul>';
    } else {
        html += '<p>Nenhum aluno cadastrado.</p>';
    }
    resultadoRelatorioDiv.innerHTML = html; // Atualização dinâmica [cite: 59]
}

// 4. Quantidade por curso [cite: 55]
function mostrarQuantidadePorCurso() {
    // Uso do método reduce [cite: 57]
    const contagemCursos = alunos.reduce((contador, aluno) => {
        const curso = aluno.curso;
        contador[curso] = (contador[curso] || 0) + 1; 
        return contador;
    }, {}); 

    // ... Lógica de exibição ...
    let html = '<h3>Quantidade de Alunos por Curso</h3>';
    html += '<ul>';
    for (const curso in contagemCursos) {
        html += `<li>${curso}: ${contagemCursos[curso]} alunos</li>`;
    }
    html += '</ul>';
    resultadoRelatorioDiv.innerHTML = html; // Atualização dinâmica [cite: 59]
}


// ====================================================================
// INICIALIZAÇÃO
// ====================================================================

document.addEventListener('DOMContentLoaded', () => {
    // Adiciona o escutador de evento ao botão do formulário [cite: 38]
    btnForm.addEventListener('click', salvarAluno);
    
    // Dados iniciais para teste
    alunos.push(new Aluno(proximoId++, "Maria Silva", 25, "Python", 8.5));
    alunos.push(new Aluno(proximoId++, "João Souza", 21, "JavaScript", 6.0));
    alunos.push(new Aluno(proximoId++, "Carlos Mendes", 30, "Java", 9.2));
    
    renderizarTabela(); // Exibir os registros [cite: 15]
});