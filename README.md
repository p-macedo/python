# Python na Prática — Minicurso interativo com Google Colab

Plataforma estática, responsiva e gamificada para aprender Python do zero.

**Autoria:** Professor Pedro Macedo — https://github.com/p-macedo

## Recursos

- 8 aulas HTML individuais com sequência progressiva;
- Material explicativo e exemplos Python prontos para copiar;
- 8 notebooks `.ipynb` com explicações, exemplos e atividades para importar no Google Colab;
- Quiz obrigatório de 4 perguntas por aula; mínimo de **3 acertos (75%)**;
- Confirmação de atividade prática antes de corrigir o quiz;
- Aulas bloqueadas até completar a anterior;
- Barra de progresso, pontuação pontos e certificado simbólico;
- Progresso salvo em `localStorage`, no navegador e dispositivo atual;
- Layout mobile com Tailwind CSS via CDN, sem build nem backend.

## Publicar no GitHub Pages

1. Crie um repositório público no GitHub, por exemplo `python-quest`.
2. Envie **o conteúdo desta pasta** para a raiz do repositório (`index.html`, `aulas/`, `assets/` e `notebooks/`). Não envie a pasta exterior como uma subpasta.
3. Abra **Settings → Pages → Build and deployment**.
4. Em **Source**, selecione **Deploy from a branch**.
5. Selecione a branch `main`, pasta `/(root)`, e salve.
6. O endereço geralmente será `https://p-macedo.github.io/python-quest/` se o repositório tiver esse nome e estiver na conta `p-macedo`.

O caminho final depende do nome do seu repositório. Não é necessário compilar o projeto.

## Como usar os notebooks no Colab

1. Abra uma aula, clique em **Baixar notebook da aula**.
2. Clique em **Abrir Google Colab** (abre o serviço, não o notebook automaticamente).
3. No Colab, use **Arquivo → Fazer upload de notebook** para importar o `.ipynb`.
4. Execute cada célula de código com **Shift + Enter**.

## Observações importantes

- O progresso é salvo **somente no navegador**. Limpar dados ou mudar de dispositivo perde o progresso.
- O bloqueio de aulas é pedagógico, não é uma medida de segurança nem uma avaliação inviolável.
- A confirmação da prática é autorrelatada; o site não verifica automaticamente a execução no Colab.
- O certificado é **simbólico**, gerado pelo navegador, sem validade oficial.
- O Tailwind CSS e as fontes são carregados por CDN; os logotipos de Python e Colab são referenciados a partir de fontes públicas na web. É necessária internet para carregar essas dependências.
- Marcas e logotipos Python e Google Colab pertencem a seus titulares. Este projeto é independente e não é afiliado às organizações.
- Se precisar de acompanhamento de turmas, sincronização entre dispositivos ou notas oficiais, será necessário um backend e autenticação.

## Licença

Conteúdo educacional e código do projeto: licença MIT (arquivo `LICENSE`). As marcas de terceiros não são licenciadas por este projeto.
