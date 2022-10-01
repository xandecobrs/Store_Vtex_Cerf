const a = {
    padding: '3px',
    display: 'flex',
    margin: '30px 12% 30px 12%',
    flexDirection: 'column'
}

const aa = {
    margin: '10px 10px 0px 10px'
}

const b = {
    margin: '10px',
    display: 'flex',
    flexDirection: 'row'
}

const bb = {
    margin: '0px 5px 0px 0px'
}

const c = {
    marginLeft: '5px',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: '10px'
}

const FlexCustom = () => {
    const imgA = props.srcA 
    const imgB = props.srcB 
    const imgC = props.srcC 
    const imgD = props.srcD

    return (
        <div style={a} className="flex-custom">
            <img style={aa} src={imgA} alt="Primeira Imagem" />
            <div style={b} className="flex-custom_two">
                <img style={bb} src={imgB} alt="Segunda Imagem" />
                <div style={c} className="flex-custom_three">
                    <img src={imgC} alt="Terceira Imagem" />
                    <img src={imgD} alt="Quarta Imagem" />
                </div>
            </div>
        </div>
    )
}

FlexCustom.schema = {
    title: 'FlexCustom',
    type: 'object',
    properties: {
        imgA : { imgA: 'src1', type: 'string'},
        imgB : { imgB: 'src1', type: 'string'},
        imgC : { imgC: 'src1', type: 'string'},
        imgD : { imgD: 'src1', type: 'string'}
    }
}

export default FlexCustom