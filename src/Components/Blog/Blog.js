import React from 'react';

const Blog = () => {
    return (
        <div className='px-2'>
            <h2 className='text-xl font-bold'>1.  What are the different ways to manage a state in a React application?</h2>
            <p><span className='font-bold'>Ans:</span> In React apps, there are at least seven ways to handle the state. Let us briefly  a few of them in this part-</p>
            <p className='px-2'>(a) React Router is a great tool to handle routes and manage the params.</p>
            <p className='px-2'>(b) The second option is to store the state in the browser via web storage.</p>
            <p className='px-2'>(c) The third option is to use store state locally. It is useful when one component needs the state.</p>
            <p className='px-2'>(d) The Fourth option is to define the state in the parent component.</p>
            <p className='px-2'>(e) The fifth option is to compute the new state based on the available state and we do not need to declare a state at all.</p>


            <h2 className='text-xl font-bold'>2. How does prototypical inheritance work?</h2>
            <p><span className='font-bold'>Ans:</span> The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.</p>


           <h2 className='text-xl font-bold'> 3. What is a unit test? Why should we write unit tests?</h2>
            <p><span className='font-bold'>Ans:</span> Unit test:A unit test is a way of testing a unit - the smallest piece of code that can be logically isolated in a system.
            Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.</p>


            <h2 className='text-xl font-bold'>4. React vs. Angular vs. Vue?</h2>
            <p className='pb-10'><span className='font-bold'>Ans:</span> Vue provides higher customizability and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components. Hence, the transition to Vue from either of the two is an easy option.</p>
        </div>
    );
};

export default Blog;