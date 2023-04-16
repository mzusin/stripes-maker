import React from 'react';
import '../css/index.pcss';
import Svg from './svg';
import FormStripes from './form/form-stripes';

const App = () => {
    return (
        <div>

            <section className="container mx-auto my-6 flex flex-col">

                <div className="preview flex items-center justify-center overflow-hidden max-w-full mx-auto my-6">
                    <Svg />
                </div>

                <FormStripes />

            </section>

        </div>
    )
};

export default App;