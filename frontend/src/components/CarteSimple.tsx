
import './CarteSimple.css';

import { Button } from '@mui/material';

interface CarteSimple {
    title: string;
    description: string;
    imageUrl: string;
    isSelected: boolean;
    version: string;
    weight: string;
    onToggle: () => void;
    listItems: string[];
    subtags: string[];
}

const CarteSimple: React.FC<CarteSimple> = ({ title, description, imageUrl, isSelected, version, weight, subtags, onToggle }) => {
    return (

        <div className='w-[480px] h-[50%] pt-10'>
            <div className="relative ">
                <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-indigo-500 rounded-lg"></span>
                <div className="relative p-6 bg-white border-2 border-indigo-500 rounded-lg hover:scale-105 transition duration-500">
                    <div className="flex items-center gap-4">
                        <img src={`https://app.yunohost.org/default/v3/logos/${imageUrl}.png`} width={64} height={64} alt={title} className='rounded-lg' />
                        <h3 className="my-2 ml-3 md:text-4xl text-2xl font-bold text-gray-800">{title}</h3>
                    </div>
                    <p className="text-gray-600 pt-4 text-lg">
                        {description}
                    </p>
                    <div className="text-gray-700 body-font">
                        <div className="container px-5 py-10 mx-auto">

                            <div className="flex flex-wrap  text-center gap-4 relative">
                                <div className="">
                                    <div className="border-2 border-gray-600  p-3 rounded-lg transform transition duration-500 hover:scale-110 hidden sm:block">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="text-indigo-500 w-8 h-8 mb-3 inline-block" viewBox="0 0 24 24">
                                            <path d="M8 17l4 4 4-4m-4-5v9"></path>
                                            <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
                                        </svg>
                                        <h2 className="title-font font-medium text-md text-gray-900">{weight}</h2>
                                        <p className="leading-relaxed">Taille</p>
                                    </div>
                                </div>
                                <div>

                                    <div className="border-2 border-gray-600  p-3 rounded-lg transform transition duration-500 hover:scale-110 hidden sm:block">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="text-indigo-500 w-8 h-8 mb-3 inline-block" viewBox="0 0 24 24">
                                            <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                                            <circle cx="9" cy="7" r="4"></circle>
                                            <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
                                        </svg>
                                        <h2 className="title-font font-medium text-md text-wrap text-gray-900">{version}</h2>
                                        <p className="leading-relaxed">Version</p>
                                    </div>
                                    <Button variant="contained" color="primary" onClick={onToggle} style={{ backgroundColor: '#6366f1', fontSize: '16px', height: '4rem', position: 'absolute', bottom: 0, right: 0 }}>
                                        {isSelected ? 'Désélectionner' : 'Sélectionner'}
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-start  items-start'>
                            {subtags.map((subtag, subtagIndex) => (
                                <li key={subtagIndex} className="flex mx-1">
                                    <span className="p-2 px-3 border-purple-800 rounded font-medium hover:bg-transparent hover:border-purple-800 border bg-purple-400/25 dark:bg-purple text-purple-800">
                                        {subtag}
                                    </span>
                                </li>
                            ))}

                        </div>
                    </div>
                </div>
            </div>
        </div>



    );
};

export default CarteSimple;