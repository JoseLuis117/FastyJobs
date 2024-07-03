import React from 'react';

export const ImageGrid = () => {
    const images = [
        [
            "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fjob-portal&psig=AOvVaw16TryRmjUkYroIpHuevHS2&ust=1720042055347000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCKDespCmiYcDFQAAAAAdAAAAABAE",
            "https://pbs.twimg.com/media/FGRnUzPVEAAbqM8?format=jpg&name=large",
            "https://pbs.twimg.com/media/FGRnNpAVUAYqRYv?format=jpg&name=large"
        ],
        [
            "https://pbs.twimg.com/media/FGRnP_TUUAAttG3?format=jpg&name=large",
            "https://i.pinimg.com/originals/c0/7d/17/c07d17d7ca0b9f39f5aded4b6dca8f02.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Benares-_The_Golden_Temple%2C_India%2C_ca._1915_%28IMP-CSCNWW33-OS14-66%29.jpg/1280px-Benares-_The_Golden_Temple%2C_India%2C_ca._1915_%28IMP-CSCNWW33-OS14-66%29.jpg"
        ],
        [
            "https://www.jagranimages.com/images/newimg/27072020/27_07_2020-shri-kashi-vishwanath-temple_20557350.jpg",
            "https://www.jansatta.com/wp-content/uploads/2021/12/Kashi-Vishwanath-Mandir.png?w=1024",
            "https://staticimg.amarujala.com/assets/images/2021/11/07/750x506/kashi-vishwanath-dham_1636258507.jpeg?w=674&dpr=1.0"
        ],
    ];

    return (
        <div className="container mx-auto p-4 max-h-[600px]">
            {/* <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {images.map((column, columnIndex) => (
                    <div key={columnIndex} className="grid gap-4">
                        {column.map((src, index) => (
                            <div key={index}>
                                <img
                                    className="h-auto max-w-full rounded-lg"
                                    src={src}
                                    alt=""
                                />
                            </div>
                        ))}
                    </div>
                ))}
            </div> */}
            <div className='grid grid-cols-3 gap-5'>
                <div className='grid grid-rows-5 gap-5'>
                    <div className='row-span-2 row-start-2 row-end-4'>
                        <img
                            className="max-w-full rounded-lg h-full object-cover"
                            src={"https://img.freepik.com/foto-gratis/mujer-embarazada-tener-reunion-su-companero-trabajo_23-2148944298.jpg?ga=GA1.2.1617290439.1714421233&semt=sph"}
                            alt=""
                        />
                    </div>
                </div>
                <div className='grid grid-rows-4 gap-5'>
                    <div className='row-start-1 row-end-3 row-span-2'>
                        <img
                            className="max-w-full rounded-lg h-full object-cover"
                            src={"https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"}
                            alt=""
                        />
                    </div>
                    <div className='row-start-3 row-end-5 row-span-2'>
                        <img
                            className="max-w-full rounded-lg h-full object-cover"
                            src={"https://images.unsplash.com/photo-1485217988980-11786ced9454?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"}
                            alt=""
                        />
                    </div>
                </div>
                <div className='grid grid-rows-6 gap-5'>
                    <div className='row-start-1 row-end-3 row-span-3'>
                        <img
                            className="max-w-full rounded-lg h-full object-cover"
                            src={"https://img.freepik.com/foto-gratis/hombre-negocios-sonriente-agitando-mano-socios-asia_1262-2310.jpg?t=st=1719956783~exp=1719960383~hmac=75160a4b89bccab0e1436140357964873f1596d27768094077c621b3e3e8dcd6&w=1380"}
                            alt=""
                        />
                    </div>
                    <div className='row-start-4 row-end-6 row-span-3'>
                        <img
                            className="max-w-full rounded-lg h-full object-cover"
                            src={"https://img.freepik.com/foto-gratis/feliz-apreton-manos-candidato-masculino-gerente-despues-exitosa-entrevista-trabajo-oficina_637285-6558.jpg?t=st=1719956733~exp=1719960333~hmac=b6386aa03b7fb555cfac736ed65a2d197184eda907254d6ab55f6730c80291c5&w=1380"}
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

