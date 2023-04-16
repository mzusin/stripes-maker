import React from 'react';
import Bullet from './Bullet';

const Description = () => {
    return (
        <>
            <section className="mb-10 container mx-auto">
                <h3 className="mt-20 mb-12 text-2xl md:text-4xl font-open-sans text-center px-4">What's Included</h3>
                <div className="grid lg:grid-cols-3 text-lg px-4">
                    <div className="mb-8">
                        <h4 className="mb-4 font-bold">Technology Stack</h4>
                        <ul>
                            <Bullet>
                                Built with <a href="src/ui/download-source-code/DownloadSourceCode" title="" className="underline">React JS</a> (Hooks)
                            </Bullet>
                            <Bullet>
                                <a href="src/ui/download-source-code/DownloadSourceCode" title="" className="underline">Create React App</a>, <a href="src/ui/download-source-code/DownloadSourceCode" title="" className="underline">Typescript</a>, <a href="src/ui/download-source-code/DownloadSourceCode" title="" className="underline">Redux</a>
                            </Bullet>
                            <Bullet>
                                ES6 JavaScript
                            </Bullet>
                            <Bullet>
                                Awesome <a href="src/ui/download-source-code/DownloadSourceCode" title="" className="underline">Tailwind CSS</a>
                            </Bullet>
                            <Bullet>
                                Detailed Documentation
                            </Bullet>
                        </ul>
                    </div>

                    <div className="mb-8">
                        <h4 className="mb-4 font-bold">Stripes Maker</h4>
                        <ul>
                            <Bullet>
                                Client side only, no server is required
                            </Bullet>
                            <Bullet>
                                Easy SVG stripes editor
                            </Bullet>
                            <Bullet>
                                Ability to download the SVG file
                            </Bullet>
                            <Bullet>
                                Multiple predefined stripe themes
                            </Bullet>
                            <Bullet>
                                <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage" title="" className="underline">Session storage</a> support
                            </Bullet>
                        </ul>
                    </div>

                    <div className="mb-8">
                        <h4 className="mb-4 font-bold">Usage</h4>
                        <ul>
                            <Bullet>
                                Easy to make changes
                            </Bullet>
                            <Bullet>
                                Well structured &amp; optimized code
                            </Bullet>
                            <Bullet>
                                Modern technology stack
                            </Bullet>
                            <Bullet>
                                Best practices component based design
                            </Bullet>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
};

export default Description;