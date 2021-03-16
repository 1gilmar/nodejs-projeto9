const app = require('../src/app');
const superteste = require('supertest');
let request = superteste(app);

describe("Cadastro de usuario", ()=>{

    test('deve cadastrar um usuario com sucesso', ()=>{
        
        let time = Date.now();
        let email = `${time}@gmail.com`;

        let user = {name: "gilmar", email, password: "1234563"};

        return request.post('/api/user').send(user).then(res =>{
            expect(res.statusCode).toEqual(200)
            expect(res.body.email).toEqual(email)
        }).catch(erro =>{
            fail(erro);
        });

    })

})