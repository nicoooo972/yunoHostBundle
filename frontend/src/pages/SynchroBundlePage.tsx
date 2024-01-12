import React, { useRef } from 'react';
import Accueil from '../components/Acceuil';
import AllCard from '../components/AllCard';



const Synchro: React.FC = () => {
    const cardRef = useRef<HTMLDivElement>(null);



    const handleScrollToCartes = () => {
        if (cardRef.current) {
            cardRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }; return (
        <><div>
            <div>
                <Accueil scrollToCartes={handleScrollToCartes} />
            </div>
            <div ref={cardRef}>

                <AllCard />
            </div>
        </div><div className="flex py-5 m-auto text-gray-800 text-sm flex-col items-center border-t max-w-screen-xl mt-10 flex-1">
                <footer className='flex flex-shrink-0'>
                    <p>© Copyright 2023. All Rights Reserved.</p>
                </footer>
            </div></>
    );
};


export default Synchro;