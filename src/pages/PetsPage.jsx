import TopMenuBlock from '../components/TopMenuBlock';
import Item from '../components/Item';

const PetsPage = (props) => {


    let petsElement = props.state.map(pet =>
        <Item followCreator={props.followCreator} unfollowCreator={props.unfollowCreator} id={pet.id} name={pet.name} age={pet.age} img={pet.img} stylization={pet.stylization} description={pet.description} follow={pet.follow} />
    )

    return(
        <div className="wrapper">
            <div className="content">
                <TopMenuBlock />
            </div>
            <div className="content">
                <h1>Our pets</h1>
                <div className="items">
                    {petsElement}

                </div>
            </div>
        </div>
    )
}

export default PetsPage;