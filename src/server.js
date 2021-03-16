const app = require('./app')
const PORTA = 3131

app.listen(PORTA, ()=> { console.log(`rodando na porta ${PORTA}`); })