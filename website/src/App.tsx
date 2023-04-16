import React, { useEffect, useState } from 'react';
import StripesSvg from './ui/StripesSvg';
import Form from './ui/form/Form';
import DownloadButton from './ui/buttons/DownloadButton';
import Terminal from './ui/Terminal';
import StripesVariants from './ui/StripesVariants';
import { useAppSelector } from './data/store';
import { renderToString } from 'react-dom/server';
import TopBar from './ui/TopBar';
import Description from './ui/download-source-code/Description';
import { svgToBackgroundImage } from './domain/svg-provider';

// https://fkhadra.github.io/react-toastify/introduction/
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

/**
 * SVG Stripes Maker.
 */
const App = () => {

    // form properties from redux store
    const stripes = useAppSelector(store => store.form.stripes);
    const lineRotation = useAppSelector(store => store.form.lineRotation);
    const animationType = useAppSelector(store => store.form.animationType);
    const animationDuration = useAppSelector(store => store.form.animationDuration);

    const [svgString, setSVGString] = useState('');
    const [cssBackgroundImageString, setCSSBackgroundImageString] = useState('');

    /**
     * Render SVG string every time one of the form properties changes.
     * This string is used in code section and for the download button.
     *
     */
    useEffect(() => {
        const svg = renderToString(
            <StripesSvg
                id={ 'stripes-pattern' }
                stripes={ stripes }
                lineRotation={ lineRotation }
                animationType={ animationType }
                animationDuration={ animationDuration }
            />
        );

        setSVGString(svg);
        setCSSBackgroundImageString(svgToBackgroundImage(svg));

    }, [
        stripes, lineRotation, animationType, animationDuration,
    ]);

    return (
        <div className="min-h-screen flex flex-col">
            <div className="flex-1">

                <TopBar />

                <header className="font-helvetica mt-6 mb-12 mx-4 text-center">
                    <h1 className="text-5xl md:text-7xl mb-4">SVG STRIPES MAKER</h1>
                </header>

                <section className="container mx-auto my-8 px-4">
                    <div className="flex flex-col xl:flex-row gap-8 mb-8">

                        <div className="flex-1 order-2 xlg:order-1">
                            <Form />
                        </div>

                        <div className="flex flex-col items-center order-1 xl:order-2">
                            <div className="preview flex items-center justify-center bg-gray-100 border overflow-hidden max-w-full p-12">
                                <StripesSvg
                                    id={ 'stripes-pattern-main' }
                                    stripes={ stripes }
                                    lineRotation={ lineRotation }
                                    animationType={ animationType }
                                    animationDuration={ animationDuration }
                                />
                            </div>

                            <div className="flex items-center justify-center my-6">
                                <DownloadButton svg={ svgString } />
                            </div>
                        </div>

                    </div>

                    <div className="grid lg:grid-cols-2 gap-8">
                        <Terminal title="SVG Code" content={ svgString }/>
                        <Terminal title="Ready for CSS" content={ cssBackgroundImageString }/>
                    </div>

                    <StripesVariants />
                </section>

                <div className="stripes-bg h-8 w-full mt-20"></div>

                <Description />
            </div>

            {/* https://fkhadra.github.io/react-toastify/introduction/ */}
            <ToastContainer
                autoClose={ 2000 }
                position="top-right"
            />
        </div>
    )
};

export default App;
