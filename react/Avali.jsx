const avaliacao = (props) => {
    const name = props.username 
    const date = props.date 
    const src = props.date 

    return (
        <div style={avali} className="avali">
            <img src={src} alt="produto" className="productimg" />
            <p className="avalTxt">
                GO LOUD VAMOOOOOOOOOOOOOOOO IRIRIRIRIRIRIIIII
                GO LOUD VAMOOOOOOOOOOOOOOOO IRIRIRIRIRIRIIIII
                GO LOUD VAMOOOOOOOOOOOOOOOO IRIRIRIRIRIRIIIII
                GO LOUD VAMOOOOOOOOOOOOOOOO IRIRIRIRIRIRIIIII
            </p>
            <p style={avaliName} className="pName">{name}</p>
            <p style={avaliData} className="pDate">{date}</p>
        </div>
    )
}

avaliacao.schema = {
    title: 'Avaliação',
    type: 'object',
    properties: {
        data:{
            data: 'date',
            type: 'strinp'
        },
        fonte: {
            fonte: 'src',
            type: 'string'
        },
        user: {
            user: 'username',
            typer: 'string'
        }
    }
}

export default avaliacao