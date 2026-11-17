window.COURSE = [
  {
    "title": "Boas-vindas ao universo Python",
    "sub": "Conheça a programação, o Colab e execute seu primeiro comando.",
    "duration": "45 min",
    "xp": 100,
    "theme": "Aula 01 ? Introdu??o ao Python",
    "objectives": [
      "Entender a ideia de algoritmo",
      "Criar e renomear um notebook no Colab",
      "Diferenciar célula de texto e célula de código",
      "Executar uma célula com Shift + Enter"
    ],
    "sections": [
      [
        "O que é programar?",
        "Programar é criar instruções organizadas para resolver um problema. Uma receita de bolo e uma sequência de passos para chegar à escola são exemplos de algoritmos do cotidiano.",
        null
      ],
      [
        "Conheça o Google Colab",
        "Acesse colab.research.google.com com sua conta Google, escolha **Novo notebook** e renomeie para `Aula_01_Primeiros_Passos.ipynb`. O Colab funciona no navegador e usa células: **Texto** para explicações e **Código** para instruções Python.",
        null
      ],
      [
        "Seu primeiro programa",
        "A função `print()` mostra uma mensagem. Coloque o código abaixo numa célula e execute com o botão  ou **Shift + Enter**.",
        "print(\"Olá, mundo!\")\nprint(\"Meu progresso Python começou!\")"
      ],
      [
        "Experimente modificar",
        "Troque a frase pela sua mensagem favorita. Textos ficam entre aspas. As linhas iniciadas com `#` são comentários e não são executadas.",
        "# Minha primeira experiência\nprint(\"Eu consigo programar!\")"
      ]
    ],
    "task": "No Google Colab, crie um notebook com duas células: uma de texto explicando o que é programação e uma de código com dois comandos print(). Execute e confira o resultado.",
    "id": 1,
    "questions": [
      {
        "q": "Qual é a função do print()?",
        "options": [
          "Guardar uma senha",
          "Mostrar informações na tela",
          "Apagar um arquivo",
          "Instalar Python"
        ],
        "correct": 1,
        "explain": "print() exibe textos e valores na saída."
      },
      {
        "q": "Como executar uma célula de código no Colab?",
        "options": [
          "Ctrl + P",
          "Shift + Enter",
          "Alt + F4",
          "Ctrl + C"
        ],
        "correct": 1,
        "explain": "Shift + Enter executa a célula e avança."
      },
      {
        "q": "Para que serve uma célula de texto?",
        "options": [
          "Executar cálculos Python",
          "Escrever explicações e títulos",
          "Formatar o disco",
          "Instalar o navegador"
        ],
        "correct": 1,
        "explain": "Células de texto podem conter explicações em Markdown."
      },
      {
        "q": "Qual comando está escrito corretamente?",
        "options": [
          "print(Olá)",
          "mostrar(\"Oi\")",
          "print(\"Olá\")",
          "PRINT[\"Olá\"]"
        ],
        "correct": 2,
        "explain": "Python diferencia maiúsculas de minúsculas, e o texto precisa de aspas."
      }
    ]
  },
  {
    "title": "Variáveis: caixas de informação",
    "sub": "Aprenda a guardar textos, números e valores lógicos.",
    "duration": "50 min",
    "xp": 100,
    "theme": "Aula 02 ? Ambiente Google Colab",
    "objectives": [
      "Criar variáveis com =",
      "Reconhecer os tipos str, int, float e bool",
      "Usar type() para investigar dados",
      "Escolher nomes adequados"
    ],
    "sections": [
      [
        "Uma caixa com etiqueta",
        "Pense em uma variável como uma caixa com etiqueta: a etiqueta é o nome e o conteúdo é o valor. Em Python, `=` atribui um valor a uma variável.",
        null
      ],
      [
        "Crie as primeiras variáveis",
        "Observe os textos entre aspas, o inteiro sem aspas e o decimal usando ponto.",
        "nome = \"Ana\"\nidade = 16\naltura = 1.65\nprint(nome, idade, altura)"
      ],
      [
        "Descubra os tipos",
        "`str` é texto, `int` é inteiro, `float` é decimal e `bool` é lógico (True/False). `type()` identifica o tipo de um valor.",
        "aluno = \"Carlos\"\nnota = 8.5\naprovado = True\nprint(type(aluno))\nprint(type(nota))\nprint(type(aprovado))"
      ],
      [
        "Variáveis podem mudar",
        "Atribuir outro valor à mesma variável atualiza seu conteúdo. Nomes não podem ter espaços nem começar com números.",
        "pontos = 10\nprint(pontos)\npontos = 25\nprint(pontos)"
      ]
    ],
    "task": "Crie as variáveis nome, idade, serie e gosta_de_python; escolha tipos adequados e imprima cada valor junto de seu tipo usando type().",
    "id": 2,
    "questions": [
      {
        "q": "Qual linha cria uma variável válida?",
        "options": [
          "2idade = 16",
          "nome aluno = \"Bia\"",
          "nome_aluno = \"Bia\"",
          "idade-aluno = 16"
        ],
        "correct": 2,
        "explain": "O sublinhado é permitido; espaços e hífens não são."
      },
      {
        "q": "Qual é o tipo de 7.5?",
        "options": [
          "int",
          "float",
          "bool",
          "str"
        ],
        "correct": 1,
        "explain": "Números com ponto decimal são float."
      },
      {
        "q": "O que faz o operador =?",
        "options": [
          "Compara dois valores",
          "Atribui um valor a uma variável",
          "Imprime na tela",
          "Inicia um comentário"
        ],
        "correct": 1,
        "explain": "= realiza atribuição, enquanto == compara."
      },
      {
        "q": "Que valor é exibido ao final?",
        "options": [
          "10",
          "15",
          "Erro",
          "Nenhum"
        ],
        "correct": 1,
        "explain": "Se x = 10 e depois x = 15, o valor armazenado passa a ser 15.",
        "snippet": "x = 10\nx = 15\nprint(x)"
      }
    ]
  },
  {
    "title": "Conversando com o programa",
    "sub": "Peça informações ao usuário com input() e converta valores.",
    "duration": "50 min",
    "xp": 100,
    "theme": "Aula 03 ? Vari?veis e tipos de dados",
    "objectives": [
      "Usar input()",
      "Distinguir texto de número",
      "Converter com int() e float()",
      "Criar um pequeno cadastro"
    ],
    "sections": [
      [
        "O programa pode perguntar",
        "`input()` mostra uma pergunta e aguarda a digitação. Por padrão, ele retorna um texto, mesmo que você digite números.",
        null
      ],
      [
        "Qual é o seu nome?",
        "A informação digitada é armazenada em uma variável.",
        "nome = input(\"Como você se chama? \")\nprint(\"Prazer em conhecer você,\", nome)"
      ],
      [
        "Números precisam ser convertidos",
        "Para calcular com a idade, converta o texto para `int`. Use `float` para valores decimais.",
        "idade = int(input(\"Qual é sua idade? \"))\nprint(\"No próximo ano você terá\", idade + 1)"
      ],
      [
        "Construa um cadastro",
        "O `f` antes de uma string permite inserir variáveis entre chaves, recurso chamado f-string.",
        "nome = input(\"Nome: \")\nserie = input(\"Série: \")\naltura = float(input(\"Altura em metros: \"))\nprint(f\"{nome} estuda na {serie} e mede {altura} m\")"
      ]
    ],
    "task": "Monte um programa de apresentação que pergunte nome, idade e cidade. Exiba uma frase personalizada e calcule qual será a idade da pessoa daqui a 5 anos.",
    "id": 3,
    "questions": [
      {
        "q": "Qual função lê um dado digitado pelo usuário?",
        "options": [
          "print()",
          "input()",
          "type()",
          "len()"
        ],
        "correct": 1,
        "explain": "input() recebe a entrada do usuário."
      },
      {
        "q": "Qual tipo input() devolve normalmente?",
        "options": [
          "int",
          "float",
          "str",
          "bool"
        ],
        "correct": 2,
        "explain": "input() devolve texto; converta quando necessário."
      },
      {
        "q": "Como ler um número inteiro?",
        "options": [
          "int(input(\"Número: \"))",
          "print(input())",
          "float = input()",
          "input(int)"
        ],
        "correct": 0,
        "explain": "int(input(...)) faz a conversão para inteiro."
      },
      {
        "q": "O que acontece ao tentar int(\"abc\")?",
        "options": [
          "Obtém 0",
          "Obtém 123",
          "Exibe abc",
          "Ocorre um erro de conversão"
        ],
        "correct": 3,
        "explain": "Um texto que não representa inteiro provoca ValueError."
      }
    ]
  },
  {
    "title": "Matemática em ação",
    "sub": "Use operadores e crie uma calculadora de médias.",
    "duration": "50 min",
    "xp": 120,
    "theme": "Aula 04 ? Operadores e c?lculos",
    "objectives": [
      "Usar +, -, *, /, **, // e %",
      "Respeitar a ordem das operações",
      "Calcular uma média",
      "Exibir resultados formatados"
    ],
    "sections": [
      [
        "Operadores do Python",
        "Use `+` para somar, `-` para subtrair, `*` para multiplicar, `/` para dividir, `**` para potência, `//` para quociente inteiro e `%` para resto.",
        null
      ],
      [
        "Laboratório de contas",
        "As operações com parênteses são resolvidas primeiro.",
        "print(2 + 3 * 4)\nprint((2 + 3) * 4)\nprint(2 ** 3)\nprint(10 % 3)"
      ],
      [
        "Calculadora de médias",
        "Leia duas notas, some e divida por dois. Para decimais use ponto.",
        "nota1 = float(input(\"Primeira nota: \"))\nnota2 = float(input(\"Segunda nota: \"))\nmedia = (nota1 + nota2) / 2\nprint(f\"Média: {media:.2f}\")"
      ],
      [
        "Desafio extra: desconto",
        "Calcule o preço de um produto após 10% de desconto.",
        "preco = 80.0\ndesconto = preco * 0.10\nfinal = preco - desconto\nprint(f\"R$ {final:.2f}\")"
      ]
    ],
    "task": "Crie uma calculadora que leia 3 notas, calcule a média aritmética e exiba o resultado com duas casas decimais.",
    "id": 4,
    "questions": [
      {
        "q": "Qual operador indica potência?",
        "options": [
          "^",
          "**",
          "//",
          "%"
        ],
        "correct": 1,
        "explain": "Em Python, potência é **."
      },
      {
        "q": "Quanto vale (4 + 6) / 2?",
        "options": [
          "4",
          "5",
          "6",
          "10"
        ],
        "correct": 1,
        "explain": "10 dividido por 2 é 5."
      },
      {
        "q": "Qual é o resultado de 10 % 3?",
        "options": [
          "3",
          "1",
          "0",
          "3.33"
        ],
        "correct": 1,
        "explain": "% fornece o resto da divisão inteira: 1."
      },
      {
        "q": "Para ler uma nota decimal, usamos:",
        "options": [
          "bool(input())",
          "str(input())",
          "float(input())",
          "print(input())"
        ],
        "correct": 2,
        "explain": "float permite valores com casas decimais."
      }
    ]
  },
  {
    "title": "Decisões inteligentes",
    "sub": "Faça programas escolherem caminhos com if, elif e else.",
    "duration": "55 min",
    "xp": 120,
    "theme": "Aula 05 ? Estruturas condicionais",
    "objectives": [
      "Entender comparações",
      "Usar if/elif/else",
      "Reconhecer a indentação",
      "Construir uma decisão de aprovação"
    ],
    "sections": [
      [
        "E se acontecer...?",
        "Um programa pode tomar decisões com base em condições. `if` significa “se”; `else`, “caso contrário”; e `elif`, “senão, se”.",
        null
      ],
      [
        "Uma decisão simples",
        "Preste atenção nos dois-pontos e nos quatro espaços de indentação.",
        "idade = int(input(\"Idade: \"))\nif idade >= 18:\n    print(\"Maior de idade\")\nelse:\n    print(\"Menor de idade\")"
      ],
      [
        "Mais de dois caminhos",
        "A ordem das condições importa: Python testa de cima para baixo até encontrar uma condição verdadeira.",
        "nota = float(input(\"Nota: \"))\nif nota >= 9:\n    print(\"Excelente!\")\nelif nota >= 6:\n    print(\"Bom trabalho!\")\nelse:\n    print(\"Vamos praticar mais!\")"
      ],
      [
        "Operadores de comparação",
        "`==` igual, `!=` diferente, `>` maior, `<` menor, `>=` maior ou igual, `<=` menor ou igual. Não confunda `=` e `==`.",
        "temperatura = 30\nprint(temperatura > 25)\nprint(temperatura == 30)"
      ]
    ],
    "task": "Crie um programa que peça a nota de um estudante. Exiba “Excelente” para 9 ou mais, “Aprovado” para 6 a menos de 9 e “Precisa estudar mais” para abaixo de 6.",
    "id": 5,
    "questions": [
      {
        "q": "Qual palavra inicia uma condição?",
        "options": [
          "for",
          "if",
          "def",
          "print"
        ],
        "correct": 1,
        "explain": "if inicia um teste lógico."
      },
      {
        "q": "Em Python, == significa:",
        "options": [
          "Atribuir um valor",
          "Verificar igualdade",
          "Somar valores",
          "Criar uma lista"
        ],
        "correct": 1,
        "explain": "== compara; = atribui."
      },
      {
        "q": "Por que usamos indentação dentro de um if?",
        "options": [
          "Para deixar bonito apenas",
          "Para definir quais comandos fazem parte do bloco",
          "Para mudar o tipo da variável",
          "Para instalar bibliotecas"
        ],
        "correct": 1,
        "explain": "A indentação define os blocos de código em Python."
      },
      {
        "q": "Qual ramo executa quando nenhuma condição anterior é verdadeira?",
        "options": [
          "if",
          "elif",
          "else",
          "input"
        ],
        "correct": 2,
        "explain": "else é o caminho alternativo."
      }
    ]
  },
  {
    "title": "Máquinas de repetição",
    "sub": "Automatize tarefas com for, while e contadores.",
    "duration": "55 min",
    "xp": 120,
    "theme": "Aula 06 ? Estruturas de repeti??o",
    "objectives": [
      "Criar laços for",
      "Entender range()",
      "Usar while com condição de parada",
      "Evitar loops infinitos"
    ],
    "sections": [
      [
        "Por que repetir?",
        "Em vez de escrever dez vezes o mesmo comando, podemos pedir que o Python repita instruções automaticamente.",
        null
      ],
      [
        "Contando com for",
        "`range(1, 6)` percorre 1, 2, 3, 4 e 5. O limite final não entra.",
        "for numero in range(1, 6):\n    print(\"Número:\", numero)"
      ],
      [
        "Tabuada de um número",
        "O laço `for` é excelente quando sabemos quantas repetições desejamos.",
        "numero = int(input(\"Tabuada de qual número? \"))\nfor i in range(1, 11):\n    print(f\"{numero} x {i} = {numero * i}\")"
      ],
      [
        "Repetição com while",
        "O `while` continua enquanto a condição for verdadeira. Atualize o contador para encerrar o laço.",
        "contador = 1\nwhile contador <= 5:\n    print(contador)\n    contador += 1"
      ]
    ],
    "task": "Crie uma tabuada de 1 a 10 para um número escolhido pelo usuário e, depois, um contador regressivo de 5 até 1.",
    "id": 6,
    "questions": [
      {
        "q": "Qual comando é indicado para contar de 1 a 10?",
        "options": [
          "for",
          "input",
          "float",
          "type"
        ],
        "correct": 0,
        "explain": "for percorre sequências, como range()."
      },
      {
        "q": "Qual é o último número de range(1, 5)?",
        "options": [
          "5",
          "4",
          "1",
          "6"
        ],
        "correct": 1,
        "explain": "O limite final do range não é incluído."
      },
      {
        "q": "O while repete enquanto:",
        "options": [
          "A condição é verdadeira",
          "O computador está ligado",
          "O texto é longo",
          "O contador é zero sempre"
        ],
        "correct": 0,
        "explain": "while avalia a condição a cada repetição."
      },
      {
        "q": "Qual alteração evita um loop infinito neste exemplo?",
        "options": [
          "Apagar print",
          "Acrescentar contador += 1",
          "Usar texto em vez de número",
          "Remover a condição"
        ],
        "correct": 1,
        "explain": "O contador precisa avançar para a condição tornar-se falsa.",
        "snippet": "contador = 1\nwhile contador <= 3:\n    print(contador)"
      }
    ]
  },
  {
    "title": "Listas e fun??es",
    "sub": "Organize várias informações e construa funções.",
    "duration": "60 min",
    "xp": 140,
    "theme": "Aula 07 ? Listas e fun??es",
    "objectives": [
      "Criar listas",
      "Acessar posições pelo índice",
      "Usar sum() e len()",
      "Definir funções com def e return"
    ],
    "sections": [
      [
        "Uma mochila de informações",
        "Listas armazenam vários valores. O primeiro item possui índice `0`, e não `1`.",
        null
      ],
      [
        "Trabalhando com listas",
        "Uma lista pode guardar todas as notas de uma turma.",
        "notas = [7.0, 8.5, 6.0, 9.0]\nprint(\"Primeira nota:\", notas[0])\nprint(\"Quantidade:\", len(notas))\nprint(\"Soma:\", sum(notas))"
      ],
      [
        "Calculando uma média",
        "Combine `sum()` e `len()` para calcular a média de uma lista não vazia.",
        "notas = [7, 8, 6, 9]\nmedia = sum(notas) / len(notas)\nprint(f\"Média: {media:.2f}\")"
      ],
      [
        "Crie suas próprias ferramentas",
        "Funções permitem reaproveitar uma lógica. `return` devolve um resultado para quem chamou a função.",
        "def calcular_media(notas):\n    return sum(notas) / len(notas)\n\nresultado = calcular_media([8, 7, 9])\nprint(resultado)"
      ]
    ],
    "task": "Crie uma função chamada calcular_media que receba uma lista com três notas e devolva a média; teste com dois conjuntos de notas diferentes.",
    "id": 7,
    "questions": [
      {
        "q": "Qual é o índice do primeiro item de uma lista?",
        "options": [
          "1",
          "-1",
          "0",
          "2"
        ],
        "correct": 2,
        "explain": "Python começa a contar índices em zero."
      },
      {
        "q": "O que len([4, 5, 6]) devolve?",
        "options": [
          "2",
          "3",
          "4",
          "15"
        ],
        "correct": 1,
        "explain": "len() conta os itens: 3."
      },
      {
        "q": "Qual palavra define uma função?",
        "options": [
          "func",
          "make",
          "def",
          "for"
        ],
        "correct": 2,
        "explain": "Uma função começa com def."
      },
      {
        "q": "Para que serve return?",
        "options": [
          "Imprimir obrigatoriamente",
          "Encerrar todo o Python",
          "Devolver um valor da função",
          "Repetir uma lista"
        ],
        "correct": 2,
        "explain": "return devolve um resultado para a chamada da função."
      }
    ]
  },
  {
    "title": "Projeto final: sistema de notas",
    "sub": "Una tudo que aprendeu em um projeto útil e apresente sua solução.",
    "duration": "70 min",
    "xp": 200,
    "theme": "Aula 08 ? Projeto de conclus?o",
    "objectives": [
      "Integrar entrada de dados e listas",
      "Aplicar funções e condicionais",
      "Exibir resultados claros",
      "Explicar como o código funciona"
    ],
    "sections": [
      [
        "Sua missão final",
        "Construa um sistema que peça o nome de um estudante, receba três notas, calcule a média e exiba a situação. Depois, personalize a mensagem.",
        null
      ],
      [
        "Código de partida",
        "Execute, analise e altere os valores. O sistema usa função, lista, laço e condição em conjunto.",
        "def calcular_media(notas):\n    return sum(notas) / len(notas)\n\nprint(\"=== SISTEMA DE NOTAS ===\")\nnome = input(\"Nome do estudante: \")\nnotas = []\n\nfor i in range(1, 4):\n    nota = float(input(f\"Nota {i}: \"))\n    notas.append(nota)\n\nmedia = calcular_media(notas)\nprint(f\"Estudante: {nome}\")\nprint(f\"Média: {media:.2f}\")\n\nif media >= 6:\n    print(\"Situação: aprovado\")\nelse:\n    print(\"Situação: precisa recuperar\")"
      ],
      [
        "Personalize seu programa",
        "Inclua uma mensagem de boas-vindas e transforme as mensagens finais. Como desafio opcional, valide se as notas estão entre 0 e 10 e peça novamente quando não estiverem.",
        null
      ],
      [
        "Compartilhe sua conquista",
        "Renomeie o notebook como `Projeto_Final_Python.ipynb`. No Colab, utilize **Arquivo → Fazer download → Fazer download do .ipynb** ou compartilhe uma cópia pelo Google Drive com as permissões apropriadas.",
        null
      ]
    ],
    "task": "Execute o projeto no Colab, personalize ao menos duas mensagens, teste um estudante aprovado e outro que precisa recuperar e explique quais linhas calculam a média.",
    "id": 8,
    "questions": [
      {
        "q": "O que o programa armazena na lista notas?",
        "options": [
          "Nomes dos professores",
          "Três valores digitados pelo usuário",
          "Apenas uma média",
          "Mensagens do sistema"
        ],
        "correct": 1,
        "explain": "notas.append(nota) adiciona cada valor à lista."
      },
      {
        "q": "Qual expressão calcula a média de uma lista não vazia?",
        "options": [
          "len(notas) / sum(notas)",
          "sum(notas) / len(notas)",
          "notas + 3",
          "sum(notas) * 3"
        ],
        "correct": 1,
        "explain": "A média é a soma dividida pela quantidade."
      },
      {
        "q": "O que acontece quando media >= 6 é verdadeiro?",
        "options": [
          "O programa mostra “aprovado”",
          "O programa apaga o notebook",
          "O programa instala Python",
          "A média vira zero"
        ],
        "correct": 0,
        "explain": "O bloco if executa quando a condição é verdadeira."
      },
      {
        "q": "Como salvar uma cópia executável do notebook?",
        "options": [
          "Salvar apenas uma captura de tela",
          "Baixar o arquivo .ipynb",
          "Converter tudo em imagens",
          "Excluir as células"
        ],
        "correct": 1,
        "explain": "O arquivo .ipynb preserva células de código e texto."
      }
    ]
  }
];
