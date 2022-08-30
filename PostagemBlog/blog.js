// Criar objeto postagem com as seguintes propriedades:
    // titulo
    // mensagem
    // autor
    // visualizações
    // comentários (autor, mensagem)
    //estaAoVivo


function GeradorDePosts(titulo, mensagem, autor) {
    this.titulo = titulo,
    this.mensagem = mensagem,
    this.autor = autor,
    this.views = 0,
    this.comentarios = [],
    this.estaAoVivo = false
}

const novoPost = new GeradorDePosts('a', 'b', 'c')
console.log(novoPost)