import React from 'react';
import Header from './components/Page_header_img/Overview.png'

function Overview(){
    return(
        <div>
            <img className="Headergif" src={Header}/>
            <h1>Basic concepts</h1>
            <h2>What is Python?</h2>
                <p>Python is a high-level programming language with applications in numerous areas such as artificial intelligence. Basically, programming languages are ways to communicate with computers by giving them a set of instruction to follow.
                <br/>
                   Python is one of them and given its easy-to-understand syntaxes, it makes it easier to pick it up.
                </p>
            <h2>Installing Python</h2>
                <p>
                Head over to https://www.python.org/downloads/ and download the latest version of Python. Next, head over to https://www.jetbrains.com/pycharm/ and download the latest version of PyCharm. PyCharm is a Integrated Development Environment (IDE) in short which is a space for you to edit and test your written code.
                </p>
            <h2>First Program</h2>
                <p>
                Let’s start off by creating a short program that displays “Hello world!”. In PyCharm,
                <br/>
                type >>>print(“Hello world!”)
                <br/>
                Do note that you do not type >>> into the code and the >>> symbol is there for you to see what to type into PyCharm.
                <br/>
                The print statement is used to output lines of text back to the user.
                <br/>
                Run the program.
                <br/>
                Congratulations, you have written your first program.
                </p>

            <h2>Simple math operations</h2>
                <p>
                Python can carry out calculations. <br/>
                Addition +<br/>
                Subtraction – <br/>
                Multiply *<br/>
                Divide /<br/>
                Use () for the operation to carry out first<br/>
                Try these lines of codes. <br/>
                >>>2+2<br/>
                4<br/>
                >>>5 + 4 – 3<br/>
                6<br/>
                >>>2*(1+4) <br/>
                10<br/>
                >>> 10/2<br/>
                5.0<br/>
                Putting minus sign in front of a number indicates that it is a negative number. Relevant operations are then performed on the negative numbers. <br/>
                >>> -2<br/>
                -2<br/>
                >>>(-7 + 1) *(-4) <br/>
                24<br/>
                </p>
            <h2>Basic data types and variables</h2>
                <p>
                Variables are used store data in the form of an integer, float, string or Boolean data. <br/>
                Integer (int) is used to represent whole numbers<br/>
                Float is used to represent numbers specified with a decimal point. <br/>
                Strings (str) are sequences of character data. <br/>
                Boolean(bool) can only hold two values, True or False<br/>
                </p>

            <h2>Taking inputs from user</h2>
                <p>
                To get input from user in Python, you can use the built-in input function. The function will prompt the user for an input and return what the user has entered as a string. <br/>
                >>>input(“Enter anything:”) <br/>
                Enter anything: This is what the user entered! <br/>
                ‘This is what the user entered!’
                </p>
            <h3>If statements</h3>
                <p>
                Python uses Boolean variables to evaluate conditions. Just like how a human make decision, the computer “thinks” and makes the decision. If the condition is true, the relevant code will run. <br/>
                >>> name = “Bryan” <br/>
                >>> age = 12<br/>
                >>>if name == “Bryan” and age == 12: <br/>
                >>>		print(“Your name is Bryan and your age is 12) <br/>
                Note that the statement below will only run if the condition is true.
                </p>
            <h2>For loops</h2>
                <p>
                For loops repeats itself in a sequence. This is called iteration. <br/>
                >>>numbers = [1,2,3,4,5] <br/>
                >>>for number in numbers: <br/>
                >>>		Print(number) <br/>
                The numbers 1,2,3,4,5 will then be printed in that order
                </p>

            <h2>While loops</h2>
                <p>
                While loops repeat itself as long as the condition is met. <br/>
                >>> count = 0<br/>
                >>>while count {/*<*/} 5: <br/> 
                >>>		print(Count) <br/>
                >>>		count = count + 1 //This will allow the count to increase from 0 to 4
                </p>
            <h2>Functions</h2>
                <p>
                Functions are a way to make your code appear neater. It allows us to reuse this function when needed to as well. <br/>
                >>>def sayHello(name,age): <br/>
                >>>		print(“Hello” + name + “, you are ” + age) <br/>
                >>>sayHello(“Bryan”,”12”) <br/>
                Hello Bryan, you are 12 will be printed out.
                </p>
            <h2>List</h2>
                <p>
                The list is a useful to store data. It is created using square brackets with comma separating each item. <br/>
                >>> numbers = [1 , 3, 4, 10] <br/>
                >>>print(numbers[2]) <br/>
                Do take note that the zeroth index refers to the first element in this case 1. Hence, the number four will be printed out.

                </p>
        </div>

    )
}

export default Overview;