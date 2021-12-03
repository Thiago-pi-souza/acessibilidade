// Inicio do código de Aumentar/ Diminuir a letra
 
// Para usar coloque o comando:
// "javascript:mudaTamanho('tag_ou_id_alvo', -1);" para diminuir
// e o comando "javascript:mudaTamanho('tag_ou_id_alvo', +1);" para aumentar
 
var tagAlvo = new Array('p'); //pega todas as tags p//
 
// Especificando os possÃ­veis tamanhos de fontes, poderia ser: x-small, small...
var tamanhos = new Array('70%','80%', '90%', '100%', '110%', '120%', '130%', '140%');
var tamanhoInicial = 3;
 
tamanho = 16;
function diminuir(){
  tamanho--;
  document.body.style.fontSize=tamanho+"px";
}
function aumentar(){
  tamanho++;
  document.body.style.fontSize=tamanho+"px";
}

function mudaCor( cor )
{
    if(cor=='azul') {
        document.documentElement.style.setProperty('--fundo-geral','lightblue');
        document.documentElement.style.setProperty('--fundo-container','#fff');
        document.documentElement.style.setProperty('--fonte','#333');
        document.documentElement.style.setProperty('--acs-cor','#003147');
        document.documentElement.style.setProperty('--fonte-destaque','#2fa1ff');
        document.documentElement.style.setProperty('--fonte-destaque-2', '#03a9f4');
        document.documentElement.style.setProperty('--profileText', '#e9f5ff');
        document.documentElement.style.setProperty('--fundo-dark-2', '#404852');
        document.documentElement.style.setProperty('--fundo-dark-3', '#081921');
        document.documentElement.style.setProperty('--dark-cor-1', '#24292d');
        document.documentElement.style.setProperty('--dark-cor-2', '#848c90');
    }
    if(cor=='vermelho') {
        document.documentElement.style.setProperty('--fundo-geral','#FFFFE0');
        document.documentElement.style.setProperty('--fundo-container','#fff');
        document.documentElement.style.setProperty('--fonte','#800000');
        document.documentElement.style.setProperty('--acs-cor','#FF7F50');
        document.documentElement.style.setProperty('--fonte-destaque','#FA8072');
        document.documentElement.style.setProperty('--fonte-destaque-2', '#FFA07A');
        document.documentElement.style.setProperty('--profileText', '#FFE4B5');
        document.documentElement.style.setProperty('--fundo-dark-2', '#404852');
        document.documentElement.style.setProperty('--fundo-dark-3', '#081921');
        document.documentElement.style.setProperty('--dark-cor-1', '#24292d');
        document.documentElement.style.setProperty('--dark-cor-2', '#848c90');
    }
    if(cor=='verde') {
        document.documentElement.style.setProperty('--fundo-geral','#D1F5DE');
        document.documentElement.style.setProperty('--fundo-container','#fff');
        document.documentElement.style.setProperty('--fonte','#800000');
        document.documentElement.style.setProperty('--acs-cor','#78866B');
        document.documentElement.style.setProperty('--fonte-destaque','green');
        document.documentElement.style.setProperty('--fonte-destaque-2', '#49644F');
        document.documentElement.style.setProperty('--profileText', '#C6E5B1');
        document.documentElement.style.setProperty('--fundo-dark-2', '#404852');
        document.documentElement.style.setProperty('--fundo-dark-3', '#081921');
        document.documentElement.style.setProperty('--dark-cor-1', '#24292d');
        document.documentElement.style.setProperty('--dark-cor-2', '#848c90');
    }
    if(cor=='marrom') {
        document.documentElement.style.setProperty('--fundo-geral','#2E1503');
        document.documentElement.style.setProperty('--fundo-container','#fff');
        document.documentElement.style.setProperty('--fonte','#800000');
        document.documentElement.style.setProperty('--acs-cor','#9A7B4F');
        document.documentElement.style.setProperty('--fonte-destaque','652a0e');
        document.documentElement.style.setProperty('--fonte-destaque-2', '#795c34');
        document.documentElement.style.setProperty('--profileText', '#9A7B4F');
        document.documentElement.style.setProperty('--fundo-dark-2', '#404852');
        document.documentElement.style.setProperty('--fundo-dark-3', '#081921');
        document.documentElement.style.setProperty('--dark-cor-1', '#24292d');
        document.documentElement.style.setProperty('--dark-cor-2', '#848c90');
//        document.documentElement.style.setProperty('--fundo-dark-2', '#352315');
//        document.documentElement.style.setProperty('--fundo-dark-3', '#5e2c04');
//        document.documentElement.style.setProperty('--dark-cor-1', '#481f01');
//        document.documentElement.style.setProperty('--dark-cor-2', '#9a7b4f');
    }
    setLocalStorage('corpadrao',cor,60);
    // criarCookie("cor",cor, " Tue, 01 Jan 2115 12:00:00 UTC ");
}


/************************************************ */
/*                USANDO COOKIES                  */
/************************************************ */
function criarCookie(nome, valor, expira) {
    var dtExpira = "expires= "+expira;
    document.cookie = nome + "="+valor+"; "+dtExpira;
}

function iniCookie() {
    var cor = lerCookie("cor");
    if (cor != "") {
        mudaCor(cor);
    }
    else {
        criarCookie("cor","azul", " Tue, 01 Jan 2115 12:00:00 UTC ");
    }
}

function lerCookie(nome) {
    let vnome = nome + "=";
    let CookkieArray = document.cookie.split(';');
    for(var i=0; i<CookkieArray.length; i++) {
        var c = CookkieArray[i];
        while (c.charAt(0)==' ') {
            c = c.substring(1);
        }
        if (c.indexOf(vnome) == 0)
            return c.substring(vnome.length,c.length);
    }
    return "";
}

/**************************************************************** */
/*          USANDO LOCAL STORAGE OU SESSION STORAGE               */
/*                                                                */  
/*  LOCAL STORAGE -> não se apaga quando fecha navegador          */
/*  SESSION STORAGE -> apaga quando fecha navegador               */
/**************************************************************** */

function iniciarLocalStorage() {
    cor = getLocalStorage('corpadrao');
    if (cor != null) {
        mudaCor(cor);
    }
    else {
        setLocalStorage('corpadrao','azul',60);
    }
}

/**
 * Função para realizar a limpeza de todos os Storages armazenados
 */
function localStorageExpires()
{
    var toRemove = [],                      //Itens para serem removidos
        currentDate = new Date().getTime(); //Data atual em milissegundos

    for (var i = 0, j = localStorage.length; i < j; i++) {
       var key = localStorage.key(i),
           itemValue = localStorage.getItem(key);

       //Verifica se o formato do item para evitar conflitar com outras aplicações
       if (itemValue && /^\{(.*?)\}$/.test(itemValue)) {

            //Decodifica de volta para JSON
            var current = JSON.parse(itemValue);

            //Checa a chave expires do item especifico se for mais antigo que a data atual ele salva no array
            if (current.expires && current.expires <= currentDate) {
                toRemove.push(key);
            }
       }
    }

    // Remove itens que já passaram do tempo
    // Se remover no primeiro loop isto poderia afetar a ordem,
    // pois quando se remove um item geralmente o objeto ou array são reordenados
    for (var i = toRemove.length - 1; i >= 0; i--) {
        localStorage.removeItem(toRemove[i]);
    }
}

/**
 * Função para obter itens do localStorage que ainda não expiraram
 * @param {string} chave Chave para obter o valor associado
 * @return {*} Retorna qualquer valor, se o item tiver expirado irá retorna undefined
 */
 function getLocalStorage(chave)
 {
     localStorageExpires();//Limpa itens
 
     var itemValue = localStorage.getItem(chave);
 
     if (itemValue && /^\{(.*?)\}$/.test(itemValue)) {
 
         //Decodifica de volta para JSON
         var current = JSON.parse(itemValue);
 
         return current.value;
     }
 }

/********************************************************************
 * Função para adicionar itens no localStorage
 * @param {string} chave Chave que será usada para obter o valor posteriormente
 * @param {*} valor Quase qualquer tipo de valor pode ser adicionado, desde que não falhe no JSON.stringify
 * @param {number} minutos Tempo de vida do item
 ********************************************************************/
function setLocalStorage(chave, valor, minutos) {
    var expirarem = new Date().getTime() + (60000 * minutos);

    localStorage.setItem(chave, JSON.stringify({
        "value": valor,
        "expires": expirarem
    }));
}