// Filtro de projetos
const botoes = document.querySelectorAll('.filters button');
const grade = document.querySelector('.projects');
const projetos = document.querySelectorAll('.project');

botoes.forEach(botao => {
  botao.addEventListener('click', () => {
    const filtro = botao.dataset.filter;

    botoes.forEach(b => b.classList.remove('active'));
    botao.classList.add('active');

    projetos.forEach(p => {
      p.hidden = filtro !== 'all' && p.dataset.category !== filtro;
    });

    // Com filtro ativo, os cards ficam todos do mesmo tamanho
    grade.classList.toggle('filtered', filtro !== 'all');
  });
});
