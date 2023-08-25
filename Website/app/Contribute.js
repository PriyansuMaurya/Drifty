"use client";

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link";

export default function Contribute({ props }) {
    const [values, setValues] = useState([]);
    let totalNoOfContributors = props.contrib.length;
    useEffect(() => {
        fetch("https://api.github.com/search/repositories?q=user:SaptarshiSarkar12+repo:Drifty+Drifty").then((res) => res.json())
            .then((data) => {
                setValues([data.items[0].stargazers_count, data.items[0].forks_count])
            })
    }, [])
    return (
        <div id="contrib" className="md:flex md:flex-row justify-evenly bg-var text-white pb-5">
            <div className="md:w-1/2 md:pr-8">
                <h2 className="text-5xl sm:text-4xl font-bold lg:mt-20 md:mt-10 sm:pt-10 sm:mb-10 md:pl-20 xs:p-5 xs:text-center" >More Information About Drifty</h2>
                <p className="text-2xl lg:ml-20 md:ml-10 font-sans mb-8 leading-normal xs:px-4">
                    It is currently available in CLI (Command Line Interface) mode and
                    the GUI (Graphical User Interface) version is under active
                    development. We believe in team work. Any contribution that brings
                    value to the project is highly appreciated.
                    You can look into the <Link className={"font-bold bg-gradient-to-r from-pink-500 to-yellow-400 text-transparent bg-clip-text"} target={"_blank"} href={"https://github.com/users/SaptarshiSarkar12/projects/3"}>roadmap</Link> to know about the issues to work on,
                    <b className={"bg-gradient-to-r from-green-500 to-green-400 text-transparent bg-clip-text"}> in progress</b> and completed.
                </p>
            </div>
            <div className="md:w-1/2">
                <h2 className="text-5xl sm:text-4xl my-12 font-bold lg:mt-16 md:mt-10 sm:pt-10 sm:mb-10 md:pl-20 xs:p-5 xs:text-center" >Be a part of Drifty Family!</h2>
                <div className="grid lg:grid-cols-7 md:grid-cols-5 sm:grid-cols-8 xs:grid-cols-4 rounded-sm	 space-x-0 gap-y-4 justify-items-center xs:pb-10">
                    {props.contrib.map((item, index) => {
                        return index < 6 && <a href={item.html_url} key={index}><Image className="rounded-full" width={80} height={80} src={item.avatar_url + ".webp&s=80"} alt={item.login}></Image></a>
                    })}
                    <a href="https://github.com/SaptarshiSarkar12/Drifty/graphs/contributors" target="_blank" >
                        <div className="rounded-full h-20 w-20 text-xl font-semibold flex items-center justify-center border-2 md:border-white text-center   hover:text-black xs:transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">
                            {totalNoOfContributors - 6}+
                        </div>
                    </a>
                </div>
                <div class="flex flex-cols-3 justify-around items-center xs:gap-7 text-lg font-semibold mx-3">
                    <a class="rounded-lg xs:p-2 lg:p-2 lg:w-52 border-2 md:border-white text-center hover:text-black xs:transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300" href="https://github.com/SaptarshiSarkar12/Drifty"><i aria-hidden="true" class="fab fa-github pr-1"></i>Contribute</a>
                    <a class="rounded-lg md:rounded-full xs:p-2 lg:p-2 lg:w-52 border-2 md:border-white text-center hover:text-black xs:transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300" href="https://github.com/SaptarshiSarkar12/Drifty/stargazers"><i aria-hidden="true" class="fa fa-regular fa-star pr-1"></i>Stars : 80</a>
                    <a class="rounded-lg xs:p-2 lg:p-2 lg:w-52 border-2 md:border-white text-center hover:text-black xs:transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300" href="https://github.com/SaptarshiSarkar12/Drifty/network/members"><i aria-hidden="true" class="fa fa-duotone fa-code-fork pr-1"></i>Forks : 77</a>
                </div>
            </div>
        </div>
    )
}

