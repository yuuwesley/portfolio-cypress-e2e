# 🧪 Automação E2E com Cypress - SauceDemo

![Cypress](https://img.shields.io/badge/Cypress-13.x-brightgreen?logo=cypress)
![NodeJS](https://img.shields.io/badge/Node.js-v20-green?logo=node.js)
![CI/CD](https://img.shields.io/badge/CI%2FCD-GitHub%20Actions-blue?logo=githubactions)

Projeto de automação de testes End-to-End (E2E) desenvolvido para validar fluxos críticos de negócio do e-commerce [SauceDemo](https://www.saucedemo.com/).

---

## 🎯 Diferenciais do Projeto

- **Arquitetura Reutilizável:** Uso de *Custom Commands* para otimizar fluxos recorrentes como autenticação.
- **Validações Dinâmicas:** Cálculos matemáticos em tempo de execução para verificar o Subtotal + Impostos no Checkout.
- **Massa de Dados Isolada:** Utilização de *Fixtures (JSON)* para gerenciar credenciais e cenários de exceção.
- **Integração Contínua (CI/CD):** Pipeline configurado via **GitHub Actions** que executa a suíte regressiva a cada *push*.
- **Relatórios Visuais:** Geração automatizada de relatórios HTML/JSON com `cypress-mochawesome-reporter`.

---

## 📌 Cenários Cobertos

- [x] **Autenticação:** Login com sucesso, bloqueio de usuários sem acesso e validação de credenciais inválidas.
- [x] **Carrinho de Compras:** Adição e remoção de itens com verificação dinâmica dos contadores do carrinho.
- [x] **Checkout E2E:** Preenchimento de dados de entrega, conferência dos itens e cálculo de valor total com taxas.

---

## 🛠️ Tecnologias e Ferramentas

- **Linguagem:** JavaScript
- **Framework E2E:** Cypress
- **Relatórios:** Cypress Mochawesome Reporter
- **CI/CD:** GitHub Actions (Runner Ubuntu)

---

## 🚀 Como Executar o Projeto Localmente

1. **Clone este repositório:**
   ```bash
   git clone https://github.com/yuuwesley/portfolio-cypress-e2e.git
   cd portfolio-cypress-e2e
   ```