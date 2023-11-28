import { ItemContainer } from './styles'

function ItemRepo() {
    return (
        <ItemContainer>
            <h3>Allyson</h3>
            <p>dev/wordpress</p>
            <div className='links'>
                <a href="#" >Ver repositório</a>
                <a href="#" className='remover'>Remover</a>
            </div>
            <hr />
        </ItemContainer>
    )
}

export default ItemRepo
