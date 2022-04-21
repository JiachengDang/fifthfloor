import React from 'react'
import { useNavigate } from "react-router-dom"
import './Cards.css';

interface ICard {
    title: string;
    image: string;
    link: string;
}
const BASE_URL = "https://fifth-floor-official.myshopify.com/collections/"





const cardData: ICard[] = [
    {
        title: "new in",
        image: "/new_in.jpg",
        link: "new-stuff",
    },
    {
        title: "women",
        image: "/Women.jpg",
        link: "womens",
    },
    {
        title: "men",
        image: '/Men.jpg',
        link: "mens",
    },
    {
        title: "brands",
        image: '/Brands.jpg',
        link: "grkc",
    },
    {
        title: "accessories",
        image: '/accessories.jpg',
        link: 'all',
    },
    {
        title: "everything else",
        image: '/everything_else.jpg',
        link: 'all',
    }

]

const Cards = () => {



    const renderCards = () => {
        const cards = cardData.map((data, i) => {
            return (
                <div className='card-container' key={'card-' + i} onClick={event => window.location.href = BASE_URL + data.link}>

                    <img className='card-image' src={data.image} alt='card image' />
                    <div className="card-overlay">
                        <div className='card-title'>{data.title}</div>
                    </div>


                </div>

            )
        });
        return <div className='cards-container'>{cards}</div>
    }


    return (
        <div>
            {renderCards()}
        </div>

    )

}

export default Cards