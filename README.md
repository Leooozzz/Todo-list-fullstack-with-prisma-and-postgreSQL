 Tecnologias Utilizadas
🎨 Frontend
Next.js
React
Axios
Shadcn UI
TailwindCSS
🖥️ Backend
Node.js
Express
helmet 
Zod
prisma
PostgreSQL
Um projeto de lista de tarefas (CRUD)  
O backend expõe uma API REST em `http://localhost:5000` para manipulação das tarefas.
---

## ⚙️ Funcionalidades

- ✅ **Listar tarefas** (GET `/todoList`)
- ➕ **Criar tarefa** (POST `/todoList`)
- ✏️ **Editar tarefa** (PUT `/todoList/:id`)
- ❌ **Deletar tarefa** (DELETE `/todoList/:id`)
- 🎨 Interface moderna com **ShadcnUI**

📁 Estrutura do Projeto
/backend ├── controller │├── libs │ ├── middleware │ ├── routes │ ├── schema | └── server.ts

/frontend ├── app ├── api ├── types |──Components  └── package.json

🛠️ Como Rodar o Projeto
1️⃣ Clonar o repositório
git clone https://github.com/Leooozzz/Todo-list-fullstack-with-prisma-and-postgreSQL.git

🔙 Rodando o Backend

cd backend
npm install
npm run dev

➡️ Acesse: http://localhost:5000
🔜 Rodando o Frontend

cd frontend
npm install
npm run dev

➡️ Acesse: http://localhost:3000
👤 Autor
Leonardo de souza

🔗 GitHub: https://github.com/Leooozzz

---
