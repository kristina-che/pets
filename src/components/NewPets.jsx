import Item from './components/Item';

const NewPets = (props) => {
    return(
        <div className="content catalogBlock">
            <h2>New pets</h2>
            <div className="catalog">
                <Item name='Barsik' age='4'/>
                <Item name='Barboskin' age='12'/>
                <Item name='Kesha' age='7'/>
                <Item name='Myrka' age='2'/>
            </div>
        </div>
    )
}

export default NewPets;