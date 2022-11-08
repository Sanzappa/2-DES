console.log('teste')

const sim = () => {
    
}

const cavalo = (err, resp) => {
    
}

var options = {
    'method':'POST',
    'headers':{
        'Content-Type':'application/json'
    },
    'body':JSON.stringfy()
}
fetch(url, options)
.then(resp => {return resp.json() })
.then(data => {console.log(data); })

