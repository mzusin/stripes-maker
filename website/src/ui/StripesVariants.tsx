import StripesSvg, { IStripesSVG } from './StripesSvg';
import React from 'react';
import { formActions, useAppDispatch } from '../data/store';

const variants: IStripesSVG[] = [
    // first row
    {
        id: 'stripes-pattern-1',
        stripes: [
            {
                color: { r: 176, g: 252, b: 126, a: 1 }, // #b0fc7e
                width: 30,
            },
            {
                color: { r: 106, g: 155, b: 64, a: 1 }, // #6a9b40
                width: 20,
            }
        ],
        lineRotation: 135,
    },
    {
        id: 'stripes-pattern-2',
        stripes: [
            {
                color: { r: 93, g: 175, b: 210, a: 1 },
                width: 30,
            },
            {
                color: { r: 56, g: 56, b: 56, a: 1 },
                width: 20,
            }
        ],
        lineRotation: 195,
    },
    {
        id: 'stripes-pattern-3',
        stripes: [
            {
                color: { r: 142, g: 61, b: 164, a: 1 },
                width: 30,
            },
            {
                color: { r: 56, g: 56, b: 56, a: 1 },
                width: 20,
            }
        ],
        lineRotation: 256,
    },
    {
        id: 'stripes-pattern-4',
        stripes: [
            {
                color: { r: 255, g: 0, b: 0, a: 1 },
                width: 30,
            },
            {
                color: { r: 56, g: 56, b: 56, a: 1 },
                width: 20,
            }
        ],
        lineRotation: 316,
    },
    {
        id: 'stripes-pattern-5',
        stripes: [
            {
                color: { r: 250, g: 159, b: 39, a: 1 },
                width: 30,
            },
            {
                color: { r: 144, g: 95, b: 26, a: 1 },
                width: 20,
            }
        ],
        lineRotation: 16,
    },
    {
        id: 'stripes-pattern-6',
        stripes: [
            {
                color: { r: 255, g: 251, b: 0, a: 1 },
                width: 30,
            },
            {
                color: { r: 56, g: 56, b: 56, a: 1 },
                width: 20,
            }
        ],
        lineRotation: 76,
    },

    // second row
    {
        id: 'stripes-pattern-7',
        stripes: [
            {
                color: { r: 125, g: 196, b: 81, a: 1 },
                width: 10,
            },
            {
                color: { r: 56, g: 56, b: 56, a: 1 },
                width: 10,
            }
        ],
        lineRotation: -135,
    },
    {
        id: 'stripes-pattern-8',
        stripes: [
            {
                color: { r: 145, g: 174, b: 192, a: 1 },
                width: 10,
            },
            {
                color: { r: 56, g: 56, b: 56, a: 1 },
                width: 10,
            }
        ],
        lineRotation: -195,
    },
    {
        id: 'stripes-pattern-9',
        stripes: [
            {
                color: { r: 188, g: 95, b: 211, a: 1 },
                width: 10,
            },
            {
                color: { r: 56, g: 56, b: 56, a: 1 },
                width: 10,
            }
        ],
        lineRotation: -256,
    },
    {
        id: 'stripes-pattern-10',
        stripes: [
            {
                color: { r: 245, g: 168, b: 168, a: 1 },
                width: 10,
            },
            {
                color: { r: 56, g: 56, b: 56, a: 1 },
                width: 10,
            }
        ],
        lineRotation: -316,
    },
    {
        id: 'stripes-pattern-11',
        stripes: [
            {
                color: { r: 255, g: 220, b: 149, a: 1 },
                width: 10,
            },
            {
                color: { r: 56, g: 56, b: 56, a: 1 },
                width: 10,
            }
        ],
        lineRotation: -16,
    },
    {
        id: 'stripes-pattern-12',
        stripes: [
            {
                color: { r: 248, g: 247, b: 162, a: 1 },
                width: 10,
            },
            {
                color: { r: 56, g: 56, b: 56, a: 1 },
                width: 10,
            }
        ],
        lineRotation: -76,
    },

    // third row
    {
        id: 'stripes-pattern-13',
        stripes: [
            {
                color: { r: 250, g: 159, b: 39, a: 1 },
                width: 30,
            },
            {
                color: { r: 144, g: 95, b: 26, a: 1 },
                width: 20,
            },
            {
                color: { r: 108, g: 22, b: 126, a: 1 },
                width: 20,
            }
        ],
        lineRotation: 16,
    },
    {
        id: 'stripes-pattern-14',
        stripes: [
            {
                color: { r: 105, g: 215, b: 215, a: 1 },
                width: 30,
            },
            {
                color: { r: 54, g: 108, b: 140, a: 1 },
                width: 60,
            }
        ],
        lineRotation: 195,
    },
    {
        id: 'stripes-pattern-15',
        stripes: [
            {
                color: { r: 93, g: 175, b: 210, a: 1 },
                width: 30,
            },
            {
                color: { r: 255, g: 251, b: 0, a: 1 },
                width: 60,
            }
        ],
        lineRotation: 256,
    },
    {
        id: 'stripes-pattern-16',
        stripes: [
            {
                color: { r: 255, g: 0, b: 238, a: 1 },
                width: 30,
            },
            {
                color: { r: 142, g: 61, b: 164, a: 1 },
                width: 60,
            }
        ],
        lineRotation: 316,
    },
    {
        id: 'stripes-pattern-17',
        stripes: [
            {
                color: { r: 187, g: 157, b: 157, a: 1 },
                width: 30,
            },
            {
                color: { r: 143, g: 58, b: 58, a: 1 },
                width: 60,
            }
        ],
        lineRotation: 16,
    },
    {
        id: 'stripes-pattern-18',
        stripes: [
            {
                color: { r: 80, g: 80, b: 80, a: 80 },
                width: 30,
            },
            {
                color: { r: 234, g: 234, b: 234, a: 1 },
                width: 60,
            }
        ],
        lineRotation: 76,
    },
];

const StripesVariants = () => {

    const dispatch = useAppDispatch();

    const selectVariant = (variant: IStripesSVG) => {
        dispatch(
            formActions.main({
                stripes: variant.stripes,
                lineRotation: variant.lineRotation,
            })
        );

        // scroll back to the SVG preview
        const $preview = document.getElementById('stripes-svg');
        if(!$preview) return;

        $preview.scrollIntoView({
            behavior: 'smooth',
            block: 'end',
            inline: 'nearest'
        });
    };

    return (
        <div className="my-10">
            <h3 className="text-center mt-20 mb-10 text-2xl md:text-4xl font-open-sans">Select Predefined Stripe Themes</h3>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-8 md:my-8 p-4 md:p-10">
                {
                    variants.map(variant => {
                        return (
                            <button
                                key={ variant.id }
                                type="button"
                                className="flex justify-center w-28 h-28 max-w-full"
                                title="Select Stripes!"
                                onClick={ () => {
                                    selectVariant(variant);
                                }}>

                                <StripesSvg
                                    {...variant }
                                    classes="max-w-full rounded lg:rounded-full drop-shadow-xl"
                                />

                            </button>
                        )
                    })
                }
            </div>
        </div>
    )
};

export default StripesVariants;