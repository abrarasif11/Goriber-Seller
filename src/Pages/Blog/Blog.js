import React, { useContext } from 'react';
import { AuthContext } from '../../Context/Authprovider/Authprovider';
import useTitle from '../../Offer/shared/useTitle';

const Blog = () => {
    const { dark } = useContext(AuthContext);
    useTitle("Blog")
    return (
        <section className={`font-poppins mb-10 mt-10 ${dark ? 'text-white': 'text-black'}  mt-10`}>
            <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
                <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl"> Questions Sections</h2>
                <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
                    <details>
                        <summary className="py-2 text-3xl font-semibold outline-none cursor-pointer focus:underline">What are the different ways to manage a state in a React application?</summary>
                        <div className="px-4 pb-4 text-xl">
                            <p>
                                There are four main types of state you need to properly manage in your React apps:
                                <span>
                                    <p>
                                        1. Local state - Local state is data we manage in one or another component.
                                    </p>
                                    <p>
                                        2. Global state - Global state is data we manage across multiple components.
                                    </p>
                                    <p>
                                        3. Server state - Data that comes from an external server that must be integrated with our UI state.
                                    </p>
                                    <p>
                                        4. URL state -  Data that exists on our URLs, including the pathname and query parameters.
                                    </p>
                                </span>
                            </p>
                        </div>
                    </details>
                    <details>
                        <summary className="py-2 text-3xl font-semibold outline-none cursor-pointer focus:underline">How does prototypical inheritance work?</summary>
                        <div className="px-4 pb-4 text-xl">
                            <p>
                                The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the prototype of an object, we use Object. getPrototypeOf and Object.
                                <span>
                                    <p>
                                        Example In the given example, there are two objects ‘person’ and ‘GFGuser’. The object ‘GFGuser’ inherits the methods and properties of the object ‘person’ and further uses them.
                                    </p>
                                </span>
                            </p>
                        </div>
                    </details>
                    <details>
                        <summary className="py-2 text-3xl font-semibold outline-none cursor-pointer focus:underline"> What is a unit test? Why should we write unit tests?</summary>
                        <div className="px-4 pb-4 space-y-2 text-xl">
                            <p>
                                Unit Testing is a type of software testing where individual units or components of a software are tested.
                            </p>
                            <span>
                                We Should write unit tests because They enable you to catch bugs early in the development process.
                                Automated unit tests help a great deal with regression testing.
                                They detect code smells in your codebase. For example, if you’re having a hard time writing unit tests for a piece of code, it might be a sign that your function is too complex.
                            </span>
                        </div>
                    </details>
                    <details>
                        <summary className="py-2 text-3xl font-semibold outline-none cursor-pointer focus:underline">React vs. Angular vs. Vue?</summary>
                        <div className="px-4 pb-4 space-y-2 text-xl">
                            <span>
                                <p>
                                    React - React is the JavaScript library of User Interfaces. It is build single-page applications and also allows you to create reusable UI components. It is a front-end JavaScript framework, created by Facebook in 2011.
                                    <p>
                                        React has gained a lot of popularity in recent years and is considered one of the best frameworks for web development. There are more developers who keep React as a priority for creating wonderful websites.
                                    </p>
                                    <br />
                                    <span>
                                        <p>
                                            Angular - It's developed by Google, was released in the year 2010. It is a TypeScript-based framework that uses a regular DOM. Angular provides a set of tools using which a complex, reactive UI can be built.
                                            <p>
                                                Angular is used by Google, Up work, and MS Office and since this framework was implemented before React, it is more popular providing a highly functional framework to create larger applications.
                                            </p>
                                        </p>
                                    </span>
                                    <br />
                                    <span>
                                        Vue - Vue was developed by a former Google employee and was released in the year 2014. It was developed to make the best version of Angular and make a custom tool.
                                        <p>Vue has become so popular these days and it is one of the hottest topics in terms of technology. Companies that use Vue as their front-end development framework are UpWork, Netflix, and Nintendo. It has a good rating on GitHub making it so popular. </p>
                                    </span>
                                </p>
                            </span>
                        </div>
                    </details>
                </div>
            </div>
        </section>
    );
};

export default Blog;