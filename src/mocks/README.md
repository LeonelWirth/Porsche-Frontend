/_
mock-backend-data
├─ README (below)
├─ src/mocks/enums.ts
├─ src/mocks/types.ts
├─ src/mocks/data/_.ts ← datos dummy coherentes entre sí
├─ src/mocks/mockApi.ts ← emula fetch/REST
└─ src/mocks/index.ts ← barrel exports

# Objetivo

Proveer datos dummy y funciones de acceso que emulen un backend REST para la
app de jardinería. Útil para UI dev en React + TS, con rutas tipo /api/\*.

# Convenciones de rutas sugeridas (REST)

GET /api/services
GET /api/services/:id
GET /api/tools
GET /api/pros ?active=true&vehicle=bike
GET /api/pros/:id
GET /api/pros/:id/pricing ← pricing efectivo por servicio
GET /api/clients/:id/gardens
GET /api/quotes/:id
POST /api/quotes { gardenId, serviceId[], ... }
GET /api/jobs ?status=scheduled&from=ISO&to=ISO
GET /api/jobs/:id
PATCH /api/jobs/:id/status { to: "accepted" | ... }
GET /api/jobs/:id/messages
POST /api/jobs/:id/messages { text }
GET /api/payments/:id
GET /api/payouts/:id

# Nota sobre pricing (pro_service_pricing)

• price*base → cargo fijo a sumar al presupuesto
• price_per_sqm → multiplicador por m² (cuando aplique)
• minimum_fee → fee mínimo garantizado
• estimated_speed*... → velocidad estimada del pro p/ ese servicio

Si en el futuro se decide quitar pro_service_pricing, se puede materializar en
quote_items (copiando los números al momento de cotizar). Este mock mantiene la
tabla para poder comparar escenarios.

# Sobre quote_items

Permitimos múltiples servicios distintos por quote, impidiendo duplicados de un
mismo service_id. Para eso, en el mockApi.createQuote validamos duplicados.
unit_label por defecto es "sqm" (m²), pero podría variar ("hour", "unit").

# MercadoPago webhooks (mp_webhooks)

El mock incluye eventos mínimos (payment.created, payment.updated). La UI puede
leerlos en /api/dev/mp-webhooks (solo mock) para debug. En prod serían
entrantes y sin GET.
\*/
