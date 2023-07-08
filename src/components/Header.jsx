
import logoImg from '../assets/images/somos-logo.webp'
import englishIcon from '../assets/icons/lang-en.webp'
import spanishIcon from '../assets/icons/lang-es.png'
import { useEffect } from 'react';

export default function Header() {
    useEffect(() => {
        const lang = localStorage.getItem('lang');
        const icon = document.getElementById('icon-lang');
        const select = document.getElementById('select-lang');
        if (lang === 'es') {
            icon.src = spanishIcon;
            select.value = 'es';
        } else {
            icon.src = englishIcon;
            select.value = 'en';
        }
    }, []);

    function changeLanguage (e) {
        localStorage.setItem('lang', e.target['value']);
        window.location.reload();
    }

    return (
        <header>
            <section class="header flex flex-row justify-between items-center w-[90%] p-4 m-auto">
                <article>
                    <img class="max-w-[120px] md:max-w-[150px]" src={logoImg} alt="logo-somos" />
                </article>
                <article class="flex flex-row gap-5 items-center">
                    <div>
                        <span class="text-[13px]">PHONE NUMBER</span>
                        <p class="font-bold">+1.833.SOMOSNY</p>
                    </div>
                    <div>
                        <span class="text-[13px]">OPENING TIME</span>
                        <p class="font-bold">Mon-Fri (8AM - 6PM)</p>
                    </div>
                    <div class="flex gap-3 items-center">
                        <img id="icon-lang" class="w-8 border-4 box-content rounded-3xl" alt="lang-icon" />
                        <select onChange={e => changeLanguage(e)} id="select-lang" class="bg-transparent font-bold outline-none">
                            <option value="en">EN</option>
                            <option value="es">ES</option>
                        </select>
                        <input type="search" class="h-8 rounded-3xl px-5 outline-none" placeholder="search" />
                    </div>
                </article>
            </section>
        </header>
    )
}