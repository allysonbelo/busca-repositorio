import { ItemContainer } from './styles'

function ItemRepo({ repo, handleRemoveRepo}) {
    const handleRemove = () => {
        handleRemoveRepo(repo.id)
    }
    return (
        <ItemContainer>
            <h3>{repo.name}</h3>
            <p>{repo.full_name}</p>
            <div className='links'>
                <a href={repo.html_url} target='_blank' rel="noopener noreferrer">Ver repositório</a>
                <a href="#" onClick={handleRemove} className='remover'>Remover</a>
            </div>
            <hr />
        </ItemContainer>
    )
}

export default ItemRepo
