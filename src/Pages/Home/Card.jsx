import { Link } from "react-router-dom"

// eslint-disable-next-line react/prop-types
const MyCard = ({ img, alt, text, path }) => {
    return (
        <Link to={path}>
            <div className="w-full h-full bg-secondary text-primary duration-300 rounded-lg hover:scale-110">
                <img className="w-full h-[90%] pb-0 mb-0 rounded-lg" src={img} alt={alt} />
                <h1 className="text-lg ml-5">{text}</h1>
            </div>
        </Link>
    )
}

export default MyCard