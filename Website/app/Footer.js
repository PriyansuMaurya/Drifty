import Link from "next/link";
import Image from "next/image";
export default function Footer() {
    return (
        <div className={"select-none"}>
            <footer className="p-4 bg-bottom sm:p-6">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <a href="https://saptarshisarkar12.github.io/Drifty/" className="flex items-center">
                            <Image width={32} height={32} src="https://cdn.jsdelivr.net/gh/SaptarshiSarkar12/Drifty@master/Website/app/icon.png" className="h-8 mr-3" alt="Drifty Logo" />
                            <span className="self-center text-2xl font-semibold whitespace-nowrap">Drifty</span>
                        </a>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-2">
                       
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Follow us</h2>
                            <ul className="text-gray-600 dark:text-gray-500">
                                <li className="mb-4">
                                    <a href="https://github.com/SaptarshiSarkar12" className="hover:text-github-color ">Github</a>
                                </li>
                                <li>
                                    <a href="https://discord.gg/DeT4jXPfkG" className="hover:text-[#46237a]">Discord</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Legal</h2>
                            <ul className="text-gray-600 dark:text-gray-500">
                                <li className="mb-4">
                                    <a href="https://raw.githubusercontent.com/SaptarshiSarkar12/Drifty/master/Privacy%20Policy.txt" className="hover:text-gray-800">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="https://raw.githubusercontent.com/SaptarshiSarkar12/Drifty/master/LICENSE" className="hover:text-gray-800">Terms &amp; Conditions</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-600 lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-600 sm:text-center dark:text-gray-500">© 2023 <Link href="/" className="hover:text-[#122ffa]">Drifty</Link>. All Rights Reserved.
                    </span>
                    <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
                        <a href="https://www.twitter.com/SSarkar2007" className="text-gray-500 hover:text-twitter-color hover:transition ease-in-out duration-300 delay-100 hover:-translate-y-1 hover:scale-110">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                            <span className="sr-only">Twitter Profile</span>
                        </a>
                        <a href="https://www.linkedin.com/in/saptarshi-sarkar-305162253/" className="text-gray-500 hover:text-linkedin-color hover:transition ease-in-out duration-300 delay-100 hover:-translate-y-1 hover:scale-110">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="1.25em" viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>
                            <span className="sr-only">Twitter Profile</span>
                        </a>
                        <a href="https://github.com/SaptarshiSarkar12" className="text-gray-500 hover:text-github-color hover:transition ease-in-out duration-300 delay-100 hover:-translate-y-1 hover:scale-110">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                            <span className="sr-only">GitHub Profile</span>
                        </a>
                        <a href="https://saptarshisarkar.hashnode.dev/" className="text-gray-500 hover:text-hashnode-color hover:transition ease-in-out duration-300 delay-100 hover:-translate-y-1 hover:scale-110">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 512 512" aria-hidden="true"><path fillRule="evenodd" d="M35.19 171.1C-11.72 217.1-11.72 294 35.19 340.9L171.1 476.8C217.1 523.7 294 523.7 340.9 476.8L476.8 340.9C523.7 294 523.7 217.1 476.8 171.1L340.9 35.19C294-11.72 217.1-11.72 171.1 35.19L35.19 171.1zM315.5 315.5C282.6 348.3 229.4 348.3 196.6 315.5C163.7 282.6 163.7 229.4 196.6 196.6C229.4 163.7 282.6 163.7 315.5 196.6C348.3 229.4 348.3 282.6 315.5 315.5z"/></svg>
                            <span className="sr-only">hashnode</span>
                        </a>
                        <a href="https://www.bio.link/saptarshi" className="text-gray-500 hover:text-violet-700 hover:transition ease-in-out duration-300 delay-100 hover:-translate-y-1 hover:scale-110">
                            <i aria-hidden className="fa fa-sharp fa-solid fa-link"></i>
                            <span className="sr-only">All My Links</span>
                        </a>
                    </div>
                </div>
            </footer>

        </div>
    )
}
