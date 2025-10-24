# Quiz de Hora de Aventura

Um quiz interativo para testar o conhecimento dos fãs sobre a série Hora de Aventura.

## Tecnologias

- React 18.3.1
- TypeScript 5.6.3
- Vite 5.4.11
- TailwindCSS 3.4.14
- React Router DOM 6.26.2
- TanStack Query 5.59.20
- Axios 1.7.7

## Estrutura do Projeto

```
src/
├── app/                    # Configuração da aplicação
│   ├── App.tsx            # Componente raiz
│   ├── main.tsx           # Entry point
│   ├── providers.tsx      # Providers globais
│   └── router.tsx         # Configuração de rotas
├── core/                  # Componentes e utilitários compartilhados
│   ├── components/        # Componentes UI genéricos
│   ├── lib/              # Configurações de bibliotecas
│   └── utils/            # Funções utilitárias
├── pages/                # Páginas da aplicação
│   ├── layouts/          # Layouts compartilhados
│   ├── Home/             # Página inicial
│   └── NotFound/         # Página 404
├── domain/               # Domínios de negócio (a serem implementados)
└── assets/               # Recursos estáticos
    └── styles/           # Estilos globais
```

## Instalação

```bash
# Instalar dependências
npm install

# Copiar arquivo de ambiente
cp .env.example .env

# Configurar variáveis de ambiente no .env
```

## Desenvolvimento

```bash
# Iniciar servidor de desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build de produção
npm run preview

# Lint do código
npm run lint
```

## Variáveis de Ambiente

- `VITE_API_URL`: URL base da API (padrão: http://localhost:3000)
- `VITE_API_VERSION`: Versão da API (padrão: v1)
- `VITE_API_TIMEOUT`: Timeout das requisições em ms (padrão: 30000)

## Funcionalidades

- ✅ Estrutura base da aplicação
- ✅ Roteamento configurado
- ✅ Componentes UI básicos
- ✅ Integração com API preparada
- ⏳ Quiz interativo (a ser implementado)
- ⏳ Sistema de pontuação (a ser implementado)
- ⏳ Compartilhamento de resultados (a ser implementado)

## Licença

MIT