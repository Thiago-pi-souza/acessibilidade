const languEL = document.querySelector('.bandeira');
const link = document.querySelectorAll('a');

let inicio = document.querySelector('#acs-inicio');
let contato = document.querySelector('#contato');
let profissao = document.querySelector("#profissao");
let educacao = document.querySelector('#educacao');
let idiomas = document.querySelector('#idiomas');
let sobre = document.querySelector('#sobre');
let experiencia = document.querySelector('#experiencia');
let voluntariado = document.querySelector('#voluntariado');
let habilidade = document.querySelector('#skills');
let interesse = document.querySelector('#interesses');

link.forEach( el => {
    el.addEventListener('click',() => {
        languEL.querySelector('.ativo').classList.remove('ativo');
        el.classList.add('ativo');

        const lingua = el.getAttribute('language');

        inicio.textContent = data[lingua].inicio;
        contato.textContent = data[lingua].contato;
        profissao.textContent = data[lingua].profissao;
        educacao.textContent = data[lingua].educacao;
        idiomas.textContent = data[lingua].idiomas;
        sobre.textContent = data[lingua].sobre;
        experiencia.textContent = data[lingua].experiencia;
        voluntariado.textContent = data[lingua].voluntariado;
        habilidade.textContent = data[lingua].habilidade;
        interesse.textContent = data[lingua].interesse;
    });
});

var data = {
        "portugues": { 
            "inicio": "inicio",
            "contato": "CONTATO",
            "profissao":"Professor Ensino Superior",
            "educacao": "EDUCAÇÃO",
            "idiomas": "IDIOMAS",
            "sobre":"SOBRE",
            "experiencia": "EXPERIÊNCIA",
            "voluntariado": "VOLUNTARIADO",
            "habilidade": "HABILIDADES",
            "interesse": "INTERESSES"
        },
        "english": { 
            "inicio": "begin",
            "contato": "CONTACT",
            "profissao":"Professor",
            "educacao": "EDUCATION",
            "idiomas": "LANGUAGES",
            "sobre":"ABOUT",
            "experiencia": "EXPERIENCE",
            "voluntariado": "VOLUNTEER",
            "habilidade": "SKILLS",
            "interesse": "INTERESTS"
        },
        "espanhol": { 
            "inicio": "comienzo",
            "contato": "CONTACTO",
            "profissao":"Profesor",
            "educacao": "EDUCACIÓN",
            "idiomas": "IDIOMAS",
            "sobre":"ACERCA DE",
            "experiencia": "EXPERIENCIA",
            "voluntariado": "TRABAJAR COMO VOLUNTARIO",
            "habilidade": "HABILIDADES",
            "interesse": "INTERESES"
        },
        "deutsch": { 
            "inicio": "Anfang",
            "contato": "Kontakt",
            "profissao":"Beruf",
            "educacao": "Ausbildung",
            "idiomas": "Sprache",
            "sobre":"Über",
            "experiencia": "Erfahrung",
            "voluntariado": "Freiwilligenarbeit",
            "habilidade": "Fähigkeit",
            "interesse": "Anordnung"
        }
}