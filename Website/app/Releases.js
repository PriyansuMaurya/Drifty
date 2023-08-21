"use client";
import {useEffect, useMemo, useState} from "react"
import { remark } from 'remark';
import html from 'remark-html';

function downloadLatestRelease(OSName, applicationType) {
    if (applicationType === "CLI") {
        if (OSName === "Windows") {
            window.open("https://github.com/SaptarshiSarkar12/Drifty/releases/latest/download/Drifty-CLI.exe");
        } else if (OSName === "Linux") {
            window.open("https://github.com/SaptarshiSarkar12/Drifty/releases/latest/download/Drifty-CLI_linux");
        } else {
            window.open("https://github.com/SaptarshiSarkar12/Drifty/releases/latest/download/Drifty-CLI_macos");
        }
    } else {
        if (OSName === "Windows") {
            window.open("https://github.com/SaptarshiSarkar12/Drifty/releases/latest/download/Drifty-GUI.exe");
        } else if (OSName === "Linux") {
            window.open("https://github.com/SaptarshiSarkar12/Drifty/releases/latest/download/Drifty-GUI_linux");
        } else {
            window.open("https://github.com/SaptarshiSarkar12/Drifty/releases/latest/download/Drifty-GUI.pkg");
        }
    }
}

function downloadOlderReleases(OSName, applicationType, version) {
    if (applicationType === "CLI") {
        if (OSName === "Windows") {
            window.open("https://github.com/SaptarshiSarkar12/Drifty/releases/download/" + version + "/Drifty-CLI.exe");
        } else if (OSName === "Linux") {
            window.open("https://github.com/SaptarshiSarkar12/Drifty/releases/download/" + version + "/Drifty-CLI_linux");
        } else {
            window.open("https://github.com/SaptarshiSarkar12/Drifty/releases/download/" + version + "/Drifty-CLI_macos");
        }
    } else {
        if (OSName === "Windows") {
            window.open("https://github.com/SaptarshiSarkar12/Drifty/releases/download/" + version + "/Drifty-GUI.exe");
        } else if (OSName === "Linux") {
            window.open("https://github.com/SaptarshiSarkar12/Drifty/releases/download/" + version + "/Drifty-GUI_linux");
        } else {
            window.open("https://github.com/SaptarshiSarkar12/Drifty/releases/download/" + version + "/Drifty-GUI.pkg");
        }
    }
}

export default function Releases({props}) {
    const [buttonStates, setButtonStates] = useState({});
    const [content,setContent]=useState([]);
    const [applicationType, setApplicationType] = useState("GUI");
    const filteredReleases = useMemo(() => {
        const releases = [];
        props.release.forEach(item => {
            if (item.tag_name.startsWith("v1.2") && releases.length <= 5) {
                releases.push(item);
            }
        });
        return releases;
    }, [props.release]);

    const handleButtonClick = (index) => {
        setButtonStates((prevState) => ({
            ...prevState,
            [index]: !prevState[index],
        }));
    };
    const markerToHtml = async (itemBody, i) => {
        const cont = await remark().use(html).process(itemBody);
        setContent((prev)=> {prev[i]=cont.toString(); return prev});
    }
    useEffect(() => {
        filteredReleases.forEach(async (item, index) => {
            await markerToHtml(item.body, index);
        });
    }, [filteredReleases]);

    const handleApplicationTypeChange = (applicationType) => {
        setApplicationType(applicationType.target.value);
    }
    
    return (
        <div id="download" className="bg-gradient-to-b from-[#3697e1] from-8% via-cyan-300 to-bottom to-12% -mt-2">
            <h2 className="text-5xl text-center sm:text-4xl font-bold md:mt-2 sm:pt-10 sm:mb-10 xs:p-5" >Download Drifty</h2>
            <div className={"grid-cols-1 justify-items-center"}>
                <label id="listbox-label" className="text-center block text-xl font-medium leading-6 text-gray-900">Select Application Type</label>
                <div className="grid grid-cols-1 justify-items-center pb-2">
                    <select id="listbox" name="Select Application Type" className="block w-80 px-4 py-2 mt-1 text-base text-gray-900 bg-white border border-gray-300 border-2 select-none rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-700 focus:border-2 sm:text-sm" value={applicationType} onChange={handleApplicationTypeChange}>
                        <option value="GUI">GUI</option>
                        <option value="CLI">CLI</option>
                    </select>
                </div>
            </div>
            <div className="grid w-auto h-auto lg:grid-cols-3 space-y-4 justify-items-center py-3 md:grid-cols-1">
                <button className="xs:animate-no md:animate-no sm:m-auto xs:w-80 xs:py-5 bg-gradient-to-r from-blue-600 to-green-500 text-white xs:text-3xl font-semibold md:text-3xl rounded-full hover:transition ease-in-out duration-300 delay-100 hover:-translate-y-1 hover:scale-110 hover:from-pink-500 hover:to-yellow-500 hover:drop-shadow-lg focus:shadow-lg focus:outline-none  active:bg-blue-400 active:shadow-lg transition duration-0 ease-in-out" onClick={()=> downloadLatestRelease("Windows", applicationType)} >Download Now <i className="fab fa-brands fa-windows"></i></button>
                <button className="xs:animate-no md:animate-no sm:m-auto xs:w-80 xs:py-5 bg-gradient-to-r from-blue-600 to-green-500 text-white xs:text-3xl font-semibold md:text-3xl rounded-full hover:transition ease-in-out duration-300 delay-100 hover:-translate-y-1 hover:scale-110 hover:from-pink-500 hover:to-yellow-500 hover:drop-shadow-lg focus:shadow-lg focus:outline-none  active:bg-blue-400 active:shadow-lg transition duration-0 ease-in-out" onClick={()=> downloadLatestRelease("Linux", applicationType)} >Download Now <i className="fab fa-brands fa-linux"></i></button>
                <button className="xs:animate-no md:animate-no sm:m-auto xs:w-80 xs:py-5 bg-gradient-to-r from-blue-600 to-green-500 text-white xs:text-3xl font-semibold md:text-3xl rounded-full hover:transition ease-in-out duration-300 delay-100 hover:-translate-y-1 hover:scale-110 hover:from-pink-500 hover:to-yellow-500 hover:drop-shadow-lg focus:shadow-lg focus:outline-none  active:bg-blue-400 active:shadow-lg transition duration-0 ease-in-out" onClick={()=> downloadLatestRelease("MacOS", applicationType)} >Download Now <i className="fab fa-brands fa-apple"></i></button>
            </div>
            <div>
                <h1 className="text-center font-bold text-2xl pt-10">Past Releases</h1>
            </div>
            {filteredReleases.map((item, index) => {
                return (
                    <div key={index} className="text-center p-5 text-base font-normal">
                        <span className="font-bold">{item.tag_name} </span>
                        {index === 0 && <span className="p-1 rounded-3xl bg-green-500">Latest</span>}
                        <p>{new Date(item.published_at).toString()} with {item.assets[0].download_count + item.assets[1].download_count} Downloads</p> {/* TODO: Add download count for all three OS artifacts */}
                        <button onClick={() => handleButtonClick(index)}
                                className="text-slate-800/50">{buttonStates[index] ? "Hide" : "Learn More"}</button>
                        {buttonStates[index] && <div className=" md:p-5 overflow-hidden"
                                                     dangerouslySetInnerHTML={{__html: content[index]}}></div>}
                        <div className="grid md:grid-flow-col  md:gap-16 xs:gap-3 justify-center text-white mt-3 font-semibold">
                            <button className="pl-3 pr-3 w-auto h-auto text-2xl bg-gradient-to-r from-blue-600 to-green-500 hover:from-pink-500 hover:to-yellow-500 rounded-full p-1 shadow-none hover:transition ease-in-out duration-300 delay-100 hover:-translate-y-1 hover:scale-110 hover:drop-shadow-2xl"
                               onClick={() => downloadOlderReleases("Windows", applicationType, item.tag_name)}>Download <i
                                className="fab fa-brands fa-windows"></i></button>
                            <button className="pl-3 pr-3 w-auto h-auto text-2xl bg-gradient-to-r from-blue-600 to-green-500 hover:from-pink-500 hover:to-yellow-500 rounded-full p-1 shadow-none hover:transition ease-in-out duration-300 delay-100 hover:-translate-y-1 hover:scale-110 hover:drop-shadow-2xl"
                               onClick={() => downloadOlderReleases("Linux", applicationType, item.tag_name)}>Download <i
                                className="fab fa-brands fa-linux"></i></button>
                            <button className="pl-3 pr-3 w-auto h-auto text-2xl bg-gradient-to-r from-blue-600 to-green-500 hover:from-pink-500 hover:to-yellow-500 rounded-full p-1 shadow-none hover:transition ease-in-out duration-300 delay-100 hover:-translate-y-1 hover:scale-110 hover:drop-shadow-2xl"
                               onClick={() => downloadOlderReleases("MacOS", applicationType, item.tag_name)}>Download <i
                                className="fab fa-brands fa-apple"></i></button>
                        </div>
                    </div>
                )}
            )}
            <div className={"grid grid-cols-1 justify-items-center"}>
                <h2 className={"text-center text-sm font-bold"}>Looking for more releases?</h2>
                <a target={"_blank"} href={"https://github.com/SaptarshiSarkar12/Drifty/releases"} className={"text-center text-sm font-bold text-blue-500"}>View all releases</a>
            </div>
        </div>
    )
}
