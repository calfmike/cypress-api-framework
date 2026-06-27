# Cypress API Testing Framework

![CI](https://github.com/calfmike/cypress-api-framework/actions/workflows/ci.yml/badge.svg)

Framework de automatización de pruebas de API construido con Cypress, aplicando buenas prácticas de diseño y ejecución continua en CI/CD.

## Descripción

Suite de pruebas automatizadas contra la API REST de [Restful-Booker](https://restful-booker.herokuapp.com), que simula un sistema de reservas con autenticación basada en token. El framework valida un flujo CRUD completo y se ejecuta automáticamente en cada cambio mediante GitHub Actions.

## Stack

- **Cypress** — framework de testing E2E/API
- **JavaScript** — lenguaje de los tests
- **Mochawesome** — reportes HTML
- **GitHub Actions** — pipeline de CI/CD

## Qué valida

- **Health check** — disponibilidad de la API (`GET /ping`)
- **Flujo CRUD completo** — autenticación con token, creación, lectura, actualización y borrado de una reserva, con aserciones en cada paso

## Buenas prácticas aplicadas

- **Page Object / separación de responsabilidades** — la lógica reutilizable vive en custom commands, los tests describen el "qué"
- **Custom commands** — autenticación y creación de reservas encapsuladas (`cy.getAuthToken()`, `cy.createBooking()`)
- **Fixtures** — datos de prueba separados del código, en archivos JSON
- **baseUrl centralizada** — un solo punto de configuración del entorno
- **Reportes** — evidencia visual en HTML con Mochawesome
- **CI/CD** — ejecución automática en cada push y pull request

## Estructura

\`\`\`
cypress-api-framework/
├── cypress/
│   ├── e2e/              # Tests
│   │   ├── health.cy.js
│   │   └── booking-flow.cy.js
│   ├── fixtures/         # Datos de prueba (JSON)
│   └── support/          # Custom commands
├── .github/workflows/    # Pipeline de CI
├── cypress.config.js     # Configuración
└── package.json
\`\`\`

## Cómo correrlo localmente

\`\`\`bash
# Instalar dependencias
npm install

# Correr los tests
npm test

# Correr y generar reporte HTML
npm run report
\`\`\`

El reporte se genera en \`cypress/reports/output.html\`.

## CI/CD

El pipeline corre automáticamente en cada push o pull request a \`main\`. El reporte de cada ejecución queda disponible como artefacto descargable en la pestaña **Actions**.
