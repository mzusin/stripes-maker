import React from "react";

const BottomDescription = () => {
    return (
        <div className="bg-sky-900" style={{
            background: '#112f4a',
        }}>
            <section className="text-center pt-20 pb-14 font-open-sans">
                <h3 className="text-3xl md:text-4xl px-4 mb-6">Animated Stripe Pattern Generator Tool</h3>
                <h4 className="text-xl md:text-2xl mb-2">A free tool for the web design community</h4>
                <p>SVG Stripe Maker is a design tool to create the tiles for striped background.</p>
            </section>

            <section className="pb-10 container mx-auto">
                <div className="grid gap-8 lg:grid-cols-2 text-lg px-4">
                    <div className="mb-8">
                        <h4 className="mb-4 font-bold">Features</h4>
                        <ul>
                            <li className="mb-2 flex items-center">
                                <img src="img/icons/check-icon.svg" alt="" />
                                    <span
                                        className="ml-2">SVG only stripe image, no CSS or JavaScript is included</span>
                            </li>
                            <li className="mb-2 flex items-center">
                                <img src="img/icons/check-icon.svg" alt="" />
                <span className="ml-2">The SVG animation <b>works also in background images</b>
                        </span>
                            </li>
                            <li className="mb-2 flex items-center">
                                <img src="img/icons/check-icon.svg" alt="" />
                                    <span className="ml-2">Any number of stripes can be added dynamically</span>
                            </li>
                            <li className="mb-2 flex items-center">
                                <img src="img/icons/check-icon.svg" alt="" />
                <span className="ml-2">Choose any angle in linear animation <i>(stripe orientation)</i>
                        </span>
                            </li>
                            <li className="mb-2 flex items-center">
                                <img src="img/icons/check-icon.svg" alt="" />
                                    <span className="ml-2">Clockwise and counterclockwise radial animation</span>
                            </li>
                            <li className="mb-2 flex items-center">
                                <img src="img/icons/check-icon.svg" alt="" />
                                    <span
                                        className="ml-2">Width / height can be defined to the downloaded SVG image</span>
                            </li>
                            <li className="mb-2 flex items-center">
                                <img src="img/icons/check-icon.svg" alt="" />
                                    <span className="ml-2">Two color stripe patterns, 3 color stripe patterns, 4 color stripe patterns, etc.</span>
                            </li>
                        </ul>
                    </div>
                    <div className="mb-8">
                        <h4 className="mb-4 font-bold">Usages</h4>
                        <ul>
                            <li className="mb-2 flex items-center">
                                <img src="img/icons/check-icon.svg" alt="" />
                                    <span className="ml-2">Can be used as static on animated stripe decorations</span>
                            </li>
                            <li className="mb-2 flex items-center">
                                <img src="img/icons/check-icon.svg" alt="" />
                                    <span className="ml-2">Can be used as animated preloader or progress bar</span>
                            </li>
                            <li className="mb-2 flex items-center">
                                <img src="img/icons/check-icon.svg" alt="" />
                                    <span className="ml-2">Can be easily used as CSS background images</span>
                            </li>
                            <li className="mb-2 flex items-center">
                                <img src="img/icons/check-icon.svg" alt="" />
                                    <span className="ml-2">Can be embedded as pure SVG images</span>
                            </li>
                            <li className="mb-2 flex items-center">
                                <img src="img/icons/check-icon.svg" alt="" />
                                    <span className="ml-2">Can be used as photoshop stripe pattern generator</span>
                            </li>
                            <li className="mb-2 flex items-center">
                                <img src="img/icons/check-icon.svg" alt="" />
                                    <span className="ml-2">Can be used as a crochet stripe generator</span>
                            </li>
                            <li className="mb-2 flex items-center">
                                <img src="img/icons/check-icon.svg" alt="" />
                                    <span className="ml-2">Can be used as style craft stripe generator</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

        </div>
    )
};

export default BottomDescription;

