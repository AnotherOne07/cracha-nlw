const socialMediaLinks =
{
    github: 'AnotherOne07',
    youtube: 'UCRj0rI07Reef5sKG196uiAw',
    instagram: '_lelouch_7',
    twitter: 'MyJunior07' 
}


function changeSocialMediaLinks()
{
    
    for(let li of socialLinks.children)
    {
        
        const social = li.getAttribute('class')

        li.children[0].href = `https://${social}.com/${socialMediaLinks[social]}`
    }
    
    /*
        a dupla crase `` é usada quando se deseja usar uma 
        variável no meio de um texto
    */
    /* 
    li.children[0].href 
    'li' é a tag "pai"
    'children' é a função utilizada para chamar os "filhos"
    do elemento/tag 'li'
    entre[0] é a especificação de qual filho deve ser buscado
    ou seja, qual a posição do 'children' do elemento/tag 'li'
    href é o atributo do 'children' especificado na posição[0]
    do pai/elemento/tag 'li'

    */

    // children é um substituto para o nomeID.textContent e refere-se aos atributos dentro das tags
    //for(let i = 0; i <= 10;i++)
    
        
    

    /*document.getElementById('mainName').textContent = 'Francisco Almir'
    mainName.textContent = 'Francisco Almir' 
    
    Está trocando o valor do elemento com ID = 'mainName'
    */ 
}

changeSocialMediaLinks()

function getGitHubProfileInfos()
{
    const url = `https://api.github.com/users/${socialMediaLinks.github}`
    

    fetch(url)
    .then(response => response.json())
    .then(data =>
        {
            
            mainName.textContent = data.name
            userBio.textContent = data.bio
            userLinkGitHub.href = data.html_url
            UserPhoto.src = data.avatar_url
            userGitHubName.textContent = data.login

        })
}

getGitHubProfileInfos()

/* 
    fetch is a function that will catch the content present in
    the url's json

    promisse".then()"" it's a javascrip resource used to receive a reply from something
    
    
    => ARROW FUNCTION (função anônima)
    SINTAXE --- (argumento) =>{}
*/