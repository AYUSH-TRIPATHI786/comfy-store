import { Link } from 'react-router-dom';
import carousel1 from '../assets/hero1.webp';
import carousel2 from '../assets/hero2.webp';
import carousel3 from '../assets/hero3.webp';
import carousel4 from '../assets/hero4.webp';

const carousels = [
	{
		id: 1,
		imgSrc: carousel1
	},
	{
		id: 2,
		imgSrc: carousel2
	},
	{
		id: 3,
		imgSrc: carousel3
	},
	{
		id: 4,
		imgSrc: carousel4
	}
];
const Hero = () => {
	return (
		<div className="grid grid-col-1 lg:grid-cols-2 gap-24">
			<div>
				<h2 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl">
					We are changing the way people shop
				</h2>
				<p className="mt-8 text-lg max-w-xl leading-8">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore repellat
					explicabo enim soluta temporibus asperiores aut obcaecati perferendis porro
					nobis.
				</p>
                <Link to='/products' className='btn btn-primary uppercase mt-10'>our products</Link>
			</div>
            <div className="hidden lg:carousel carousel-center h-[28rem] p-4 space-x-4 bg-neutral rounded-box">
                {carousels.map((image) => {
				const { id, imgSrc } = image;
				return <div key={id} className="carousel-item">
                <img src={imgSrc} className='h-full w-80 object-cover rounded-box'/>
                </div> 
                ;
			})}
            </div>
			
		</div>
	);
};
export default Hero;
