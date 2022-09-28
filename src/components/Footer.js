import React from 'react';

const Footer = () => {
    return (
        <div >
            <footer class="footer p-10 bg-base-100  px-20 pt-10">
                <div>  
                <a className=" ml-14 btn btn-ghost normal-case text-xl font-bold text-accent">banqee.</a>
                </div>
                <div>
                    <span class=" text-xl font-semibold text-black">About</span>
                    <a class="link link-hover">Branding</a>
                    <a class="link link-hover">Design</a>
                    <a class="link link-hover">Marketing</a>
                    <a class="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span class="text-xl font-semibold text-black">Blogs</span>
                    <a class="link link-hover">About us</a>
                    <a class="link link-hover">Contact</a>
                    <a class="link link-hover">Jobs</a>
                    <a class="link link-hover">Press kit</a>
                </div>
                <div>
                    <span class="text-xl font-semibold text-black">Webflows</span>
                    <a class="link link-hover">Terms of use</a>
                    <a class="link link-hover">Privacy policy</a>
                    <a class="link link-hover">Cookie policy</a>
                </div>
                <div>
                    <span class="text-xl font-semibold text-black">Social Media</span>
                    <a class="link link-hover">Terms of use</a>
                    <a class="link link-hover">Privacy policy</a>
                    <a class="link link-hover">Cookie policy</a>
                </div>
            </footer>
        </div>
    );
};

export default Footer;