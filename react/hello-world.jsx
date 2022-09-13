const helloWorld = (props) => {
    const { title } = props
    return (
        <div className="hello-world">Hello World</div>
    )
}

helloWorld.defaultProps = {
    "title": "Teste"
}

helloWorld.schema = {
    title: 'Hello World',
    description: 'Componente de Hello World',
    type:'objeto',
    properties: {
        title: {
            type: 'string',
            title: 'Titulo'
        }
    }
}


export default helloWorld;